const submit = () => {
  const pay = document.querySelector('.pay');
  const hours = document.querySelector('.hours');
  const days = document.querySelector('.days');

  const final = document.querySelector('.final');

  const salary = pay.value * hours.value * days.value; 


  final.textContent = 'Your total is ' + salary + ' euros a month';


}