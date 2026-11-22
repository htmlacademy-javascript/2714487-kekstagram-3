function checkLength(string, maxLength) {
  return string.length <= maxLength;
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reversedString += normalString[i];
  }
  return normalString === reversedString;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');
