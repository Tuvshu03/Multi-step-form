import React from "react";
import { useState } from "react";

export const stepTwoValidation = (data) => {

  const { firstName, PhoneNumber, password, passwordCurrent} = data;
  const errors = {};
  let isValid = true;

  const validateFirstName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
  };

  if (PhoneNumber.length !== 8) {
    isValid = false;
    errors.userName = "";
  }
  return { isValid, errors };
};
