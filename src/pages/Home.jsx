import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import GameSelection from '../components/GameSelection';
import TopUpHeader from '../components/TopUpHeader';
import LoginStep from '../components/LoginStep';
import AmountStep from '../components/AmountStep';
import PaymentStep from '../components/PaymentStep';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { games, paymentMethods } from '../data/mock';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

const Home = () => {
  const [selectedGameId, setSelectedGameId] = useState('shell');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);
  
  // States lifted from LoginStep
  const [username, setUsername] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const game = useMemo(
    () => games.find((g) => g.id === selectedGameId) || games[0],
    [selectedGameId]
  );

  const pricingINR = {
    100: 40,
    310: 125,
    520: 390,
    1060: 790,
    2180: 1590,
    5600: 4199
  };

  const getINRPrice = (amount) => {
    return pricingINR[amount] || 'N/A';
  };

  const handleGameSelect = (id) => {
    setSelectedGameId(id);
    setSelectedAmount(null);
    setSelectedPaymentId(null);
    setLoggedIn(false);
    setPlayerId('');
    setUsername('');
    // smooth scroll to top up section
    setTimeout(() => {
      const el = document.getElementById('topup');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleConfirm = () => {
    if (!loggedIn) {
      toast({ title: 'Login required', description: 'Please login first.' });
      return;
    }
    if (!selectedAmount) {
      toast({ title: 'Select an amount', description: 'Please choose a top-up amount.' });
      return;
    }
    if (!selectedPaymentId) {
      toast({ title: 'Select payment', description: 'Please choose a payment method.' });
      return;
    }
    setShowConfirm(true);
  };

  const paymentMethod = useMemo(
    () => paymentMethods.find((p) => p.id === selectedPaymentId),
    [selectedPaymentId]
  );

  const handleRazorpay = () => {
    const amountINR = getINRPrice(selectedAmount);
    if (amountINR === 'N/A') return;

    const options = {
      key: "rzp_test_T0ldMdw8kZ28UC",
      amount: amountINR * 100, // Amount in paise
      currency: "INR",
      name: "Garena Store",
      image: "/Garena-Icon-Logo.png",
      description: `${selectedAmount} ${game.pointLabel} Top-up for ${game.id === 'freefire' ? playerId : username}`,
      handler: function (response) {
        setShowConfirm(false);
        setShowSuccess(true);
      },
      prefill: {
        name: game.id === 'freefire' ? playerId : username,
      },
      theme: {
        color: "#d92027",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero with banner (SAFER/FASTER/EASIER is baked into the banner image) */}
      <HeroBanner />

      <GameSelection
        games={games}
        selectedId={selectedGameId}
        onSelect={handleGameSelect}
      />

      <main id="topup" className="flex-1 w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-10 space-y-8">
          <TopUpHeader game={game} />

          <LoginStep 
            game={game} 
            playerId={playerId} 
            setPlayerId={setPlayerId}
            username={username}
            setUsername={setUsername}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />

          <AmountStep
            game={game}
            selectedAmount={selectedAmount}
            onSelect={setSelectedAmount}
          />

          <PaymentStep
            methods={paymentMethods}
            selectedId={selectedPaymentId}
            onSelect={setSelectedPaymentId}
            selectedAmount={selectedAmount}
            getPrice={getINRPrice}
          />

          <div className="pt-2">
            <Button
              onClick={handleConfirm}
              className="w-full sm:w-auto sm:min-w-[220px] h-12 bg-[#d92027] hover:bg-[#b81a20] text-white font-bold text-[15px] tracking-wide rounded-lg"
            >
              Confirm Top-Up
            </Button>
          </div>
        </div>
      </main>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent className="max-w-[400px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold border-b pb-2">Order Confirmation</AlertDialogTitle>
            <AlertDialogDescription className="pt-4 space-y-4 text-gray-900">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Account ID</span>
                <span className="font-bold">{game.id === 'freefire' ? playerId : username}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Product</span>
                <span className="font-bold">{selectedAmount} {game.pointLabel}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Payment Method</span>
                <span className="font-bold">{paymentMethod?.name}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-bold">Total Amount</span>
                <span className="text-[#d92027] text-xl font-extrabold">₹{getINRPrice(selectedAmount)}</span>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6">
            <AlertDialogCancel className="h-11 border-gray-200">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleRazorpay}
              className="bg-[#d92027] hover:bg-[#b81a20] h-11 px-8 font-bold"
            >
              Topup
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent className="max-w-[400px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-emerald-600 flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Purchase Complete!
            </AlertDialogTitle>
            <AlertDialogDescription className="pt-4 text-gray-900 font-medium leading-relaxed">
              {selectedAmount} {game.pointLabel} will be sent to your in-game mail | Game uid : <span className="text-[#d92027] font-bold">{game.id === 'freefire' ? playerId : username}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6">
            <AlertDialogAction 
              onClick={() => {
                setShowSuccess(false);
                setSelectedAmount(null);
                setSelectedPaymentId(null);
              }}
              className="bg-[#d92027] hover:bg-[#b81a20] h-11 px-8 font-bold w-full"
            >
              Done
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Home;
