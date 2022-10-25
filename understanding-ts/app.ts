//union types
//pode unir quantos tipos quiser
function combine(n1: number | string, n2: number | string | boolean) {
    let result;
    if(typeof n1 ==='number' && typeof n2 ==='number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
  }

  const combinedAges = combine(30, 26)
  const combinedNames = combine('Max', 'Ana')