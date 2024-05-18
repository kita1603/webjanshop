import React, { useState, useEffect } from 'react'

import DisplayCampaigns from '../../components/DisplayCampaigns';
import { useStateContext } from '../../context'

const WalletProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <DisplayCampaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
        />
    </div>

  )
}

export default WalletProfile