document.getElementById("convert").addEventListener("click", async () => {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");
  
    if (!amount || amount <= 0) {
      resultDiv.textContent = "Por favor, insira um valor válido.";
      return;
    }
  
    try {
 
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
  
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
  
      resultDiv.textContent = `Resultado: ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      console.error("Erro ao buscar as taxas de câmbio:", error);
      resultDiv.textContent = "Erro ao converter. Tente novamente mais tarde.";
    }
  });