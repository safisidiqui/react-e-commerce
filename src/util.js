export default function formateCurrency(num){
    return "Pkr: " + Number(num.toFixed(1)).toLocaleString() + "";
}