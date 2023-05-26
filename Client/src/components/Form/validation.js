const validation = (data) => {
  let errors = {};

  if (!data.email.includes("@")) {
    errors.e1 = "Email invalido";
  }

  if (!data.email) {
    errors.e2 = "Ingresa un email";
  }

  if (data.email.length > 35) {
    errors.e3 = "El email no debe superar los 35 caracteres";
  }

  if (!/\d+/.test(data.password)) {
    errors.p1 = "Debe contener por lo menos un numero";
  }

  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "Debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
