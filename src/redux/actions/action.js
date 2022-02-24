export const ACTION_PERSONAL = 'ACTION_PERSONAL';
export const ACTION_PROFESSIONAL = 'ACTION_PROFESSIONAL';

export const sendPersonalForm = (state) => ({
  type: ACTION_PERSONAL,
  state,
});

export const sendProfessionalForm = (state) => ({
  type: ACTION_PROFESSIONAL,
  state,
});
