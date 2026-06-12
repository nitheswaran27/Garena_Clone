import React, { useState } from 'react';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const LoginStep = ({ game, playerId, setPlayerId, username, setUsername, loggedIn, setLoggedIn }) => {
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { toast } = useToast();

  const isFreeFire = game.id === 'freefire';

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFreeFire) {
      if (!playerId) {
        toast({ title: 'Login failed', description: 'Please enter player ID.' });
        return;
      }
      setLoggedIn(true);
      setExpanded(false);
      toast({ title: 'Logged in', description: `Welcome, Player ${playerId}` });
    } else {
      if (!username || !password) {
        toast({ title: 'Login failed', description: 'Please enter username and password.' });
        return;
      }
      setLoggedIn(true);
      setExpanded(false);
      toast({ title: 'Logged in', description: `Welcome, ${username}` });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="h-6 w-6 rounded-md bg-[#d92027] text-white text-xs font-bold flex items-center justify-center">
          1
        </span>
        <h3 className="text-[17px] font-bold text-gray-900">Login</h3>
      </div>

      {!expanded ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="w-full h-[58px] bg-white border border-gray-200 rounded-lg px-5 flex items-center justify-between hover:border-gray-300 transition-colors text-left"
        >
          <span className={`text-[15px] ${loggedIn ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
            {loggedIn 
              ? (isFreeFire ? `Logged in as ${playerId}` : `Logged in as ${username}`)
              : (isFreeFire ? 'Player ID' : 'Login with your game account.')}
          </span>
          <span className="h-7 w-7 rounded-full flex items-center justify-center">
            <img
              src="https://cdn-gop.garenanow.com/webmain/static/logo/garena_red.svg"
              alt="Garena"
              className="h-5 w-5"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </span>
        </button>
      ) : (
        <form
          onSubmit={handleLogin}
          className="bg-white border border-gray-200 rounded-lg p-5 space-y-3"
        >
          {isFreeFire ? (
            <>
              <div className="text-[15px] font-medium text-gray-900 mb-1">Player ID</div>
              <Input
                placeholder="Please enter player ID here"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                className="h-11"
              />
              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  className="bg-[#d92027] hover:bg-[#b81a20] text-white font-semibold flex-1 h-11"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setExpanded(false)}
                  className="h-11 border-gray-200"
                >
                  Cancel
                </Button>
              </div>
              <div className="text-center pt-2">
                <button 
                  type="button" 
                  className="text-xs text-gray-500 hover:text-[#d92027] underline"
                  onClick={() => {/* Mock switch to Garena */}}
                >
                  Or login with your game account
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Secure Garena Account Login
              </div>
              <Input
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-11"
              />
              <div className="relative">
                <Input
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="flex gap-3 pt-1">
                <Button
                  type="submit"
                  className="bg-[#d92027] hover:bg-[#b81a20] text-white font-semibold flex-1 h-11"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setExpanded(false)}
                  className="h-11 border-gray-200"
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginStep;
