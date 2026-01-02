import { useState } from 'react';
import { BuyerApp } from './components/buyer/BuyerApp';
import { DealerApp } from './components/dealer/DealerApp';
import { AdminApp } from './components/admin/AdminApp';
import { ShoppingBag, Store, Settings } from 'lucide-react';

export type UserType = 'buyer' | 'dealer' | 'admin';

export interface Car {
  id: string;
  brand: string;
  model: string;
  image: string;
  priceRange: string;
  variants: Array<{
    id: string;
    name: string;
    price: number;
  }>;
  colors: string[];
  trending?: boolean;
}

export interface DealerQuote {
  dealerId: string;
  dealerName: string;
  dealerRating: number;
  basePrice: number;
  rto: number;
  insurance: number;
  tcs: number;
  totalPrice: number;
  deliveryDays: number;
  perks: string[];
  rank: number;
}

export interface Order {
  id: string;
  buyerName: string;
  buyerPhone: string;
  car: Car;
  variant: string;
  color: string;
  selectedDealerQuote?: DealerQuote;
  financeStatus?: 'pending' | 'in-review' | 'approved' | 'rejected';
  insuranceStatus?: 'pending' | 'in-review' | 'issued' | 'opted-outside';
  deliveryStatus?: 'order-confirmed' | 'finance-progress' | 'insurance-progress' | 'ready' | 'dispatched' | 'out-for-delivery' | 'delivered';
  qrChecklistComplete?: boolean;
  financeChecklistComplete?: boolean;
  insuranceChecklistComplete?: boolean;
  invoiceUploaded?: boolean;
  createdAt?: string;
}

export default function App() {
  const [activePanel, setActivePanel] = useState<UserType>('buyer');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Tab Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700 safe-top">
        <div className="flex items-center justify-around px-4 py-3">
          <button
            onClick={() => setActivePanel('buyer')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              activePanel === 'buyer'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-gray-200'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">Buyer</span>
          </button>
          
          <button
            onClick={() => setActivePanel('dealer')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all mx-2 ${
              activePanel === 'dealer'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-gray-200'
            }`}
          >
            <Store className="w-5 h-5" />
            <span className="font-medium">Dealer</span>
          </button>
          
          <button
            onClick={() => setActivePanel('admin')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              activePanel === 'admin'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-gray-200'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Admin</span>
          </button>
        </div>
      </div>

      {/* Panel Content */}
      <div className="pt-20">
        {activePanel === 'buyer' && <BuyerApp />}
        {activePanel === 'dealer' && <DealerApp />}
        {activePanel === 'admin' && <AdminApp />}
      </div>

      <style>{`
        .safe-top { padding-top: env(safe-area-inset-top); }
      `}</style>
    </div>
  );
}
