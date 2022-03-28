javascript: (() => {
  var ans = [];
  document.querySelector('input[name="data[memberid]"]').value = "_MEMBER_ID_";
  document.querySelector('input[name="data[name]"]').value = "_NAME_";
  document.querySelector('input[name="data[nation]"]').value = "_NATION_";
  document.querySelector('input[name="data[idnumber]"]').value = "_ID_";
  document.querySelector('input[name="data[address]"]').value = "_ADDRESS_";
  document.querySelector('input[name="data[postcode]"]').value = "_ZIP_";
  document.querySelector('input[name="data[phone]"]').value = "_MOBILE_";
  let btnNos = document.querySelectorAll("div.no");
  btnNos.forEach((btn) => {
    btn.click();
  });
})();
