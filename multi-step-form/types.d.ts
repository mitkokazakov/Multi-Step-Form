type DataProps = {
    name: string,
    email: string,
    phone: string,
    planDuration: string,
    planType: string,
    planPrice: number,
    onlineService: number,
    largerStorage: number,
    customProfile: number,
    totalPrice: number
}

type FirstStepDataProps = {
    name: string;
    email: string;
    phone: string;
  };

  type FirstStepErrors = {
    nameError: string,
    emailError: string,
    phoneError: string
  }