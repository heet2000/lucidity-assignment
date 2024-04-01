import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

export const cardsInfo = [
    {  
        label: 'Total product', 
        value: "9",
        icon: <ShoppingCartIcon/>, 
    },
    {
        label: 'Total store value',
        value: "30,550",
        icon: <CurrencyExchangeIcon/>,
    },
    {
        label: 'Out of stocks',
        value: "2",
        icon: <RemoveShoppingCartIcon/>,
    },
    {
        label: 'Price',
        value: "2",
        icon: <CategoryIcon/>,
    }
  ];