class StringUtils {
    static capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    static normalSpaces(str) {
      return str.replace(/\s+/g, ' ').replace(/([\.,:;!?\)\]])\s*/g, '$1 ').replace(/\s([.])/, '.').replace(/([.])/, '. ').replace(/([.])/, '. ').replace(/\s([,])/, ',').replace(/([,])/, ', ').replace(/([,])/, ', ').replace(/\s+/g, ' ');
    }
  
    static countWords(str) {
      return StringUtils.normalizeSpaces(str).trim().split(/\s+/).length;
    }
  
    static countUniqueWords(str) {
      
      const words = StringUtils.normalizeSpaces(str).trim().toLowerCase().split(/\s+/);
      const count = {};
      for (let word of words) {
        count[word] = (count[word] || 0) + 1;
      }

      return Object.entries(count).map(([word, count]) => `${word} - ${count} ${(count % 10 == 2 || count % 10 == 3 || count % 10 == 4) ? "раза" : "раз"}`);
      
    }
  }
  
  export default StringUtils;