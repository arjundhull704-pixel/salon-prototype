import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SERVICES,
  CALL_PHONE_RAW,
  WHATSAPP_PHONE_RAW,
  getStudioStatus,
  buildWhatsAppLink,
  validateBookingForm,
} from './booking.ts';

test('services inventory has exactly the requested treatments with matching prices', () => {
  assert.equal(SERVICES.length, 4);
  const haircut = SERVICES.find((s) => s.id === 'bespoke-haircut');
  assert.ok(haircut);
  assert.equal(haircut.priceINR, 65);
  assert.equal(haircut.title, 'Signature Bespoke Haircut');

  const shave = SERVICES.find((s) => s.id === 'straight-razor-shave');
  assert.ok(shave);
  assert.equal(shave.priceINR, 50);

  const beard = SERVICES.find((s) => s.id === 'beard-architecture');
  assert.ok(beard);
  assert.equal(beard.priceINR, 45);

  const exec = SERVICES.find((s) => s.id === 'executive-package');
  assert.ok(exec);
  assert.equal(exec.priceINR, 130);
  assert.equal(exec.isSignature, true);
});

test('phone numbers match user exact specifications', () => {
  assert.equal(CALL_PHONE_RAW, '9779178559');
  assert.equal(WHATSAPP_PHONE_RAW, '9034044077');
});

test('WhatsApp reservation link generation', () => {
  const genericLink = buildWhatsAppLink();
  assert.ok(genericLink.includes('9034044077'));
  assert.ok(genericLink.startsWith('https://wa.me/919034044077'));

  const specificLink = buildWhatsAppLink('9034044077', {
    serviceName: 'Signature Bespoke Haircut',
    barberName: 'Elena Rostova',
    date: '2026-10-20',
    timeSlot: '11:30 AM',
    clientName: 'Alexander Wright',
  });
  assert.ok(specificLink.includes('Alexander%20Wright'));
  assert.ok(specificLink.includes('Signature%20Bespoke%20Haircut'));
});

test('studio operating hours status logic', () => {
  // Tuesday at 14:00 (Open)
  const tuesdayAfternoon = new Date('2026-10-20T14:00:00');
  const statusOpen = getStudioStatus(tuesdayAfternoon);
  assert.equal(statusOpen.isOpen, true);
  assert.equal(statusOpen.todayHours, '09:00 – 20:00');

  // Sunday night at 21:00 (Closed)
  const sundayNight = new Date('2026-10-18T21:00:00');
  const statusClosed = getStudioStatus(sundayNight);
  assert.equal(statusClosed.isOpen, false);
});

test('validateBookingForm handles valid and invalid inputs', () => {
  const invalid = validateBookingForm({});
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.serviceId);
  assert.ok(invalid.errors.fullName);

  const valid = validateBookingForm({
    serviceId: 'bespoke-haircut',
    date: '2026-10-22',
    timeSlot: '02:30 PM',
    fullName: 'Jonathan Reed',
    phone: '9779178559',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
