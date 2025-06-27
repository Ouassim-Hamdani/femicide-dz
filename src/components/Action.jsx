import { useState, useEffect } from 'react';

export const Action = () => {
    const [shareStatus, setShareStatus] = useState('');

    useEffect(() => {
        if (shareStatus) {
            const timer = setTimeout(() => setShareStatus(''), 2000);
            return () => clearTimeout(timer);
        }
    }, [shareStatus]);

    const handleShare = async () => {
        const shareData = {
            title: "Never Forgotten - Memorial for Women Victims",
            text: "Silence enables violence. Share their stories, demand justice, and support organizations working to protect women in Algeria.",
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
                setShareStatus('shared');
            } catch (error) {
                if (error.name !== 'AbortError') {
                    await copyToClipboard();
                }
            }
        } 
        else {
            await copyToClipboard();
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setShareStatus('copied');
        } catch (error) {
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setShareStatus('copied');
            } catch (fallbackError) {
                console.error('Failed to copy to clipboard:', fallbackError);
            }
            document.body.removeChild(textArea);
        }
    };

    const handleReportCase = () => {
        alert('TNot avaiolable yet.');
    };

    return (
        <section className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm py-16 px-6 border-t border-purple-400/30">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Take Action</h2>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                    Silence enables violence. Share their stories, demand justice, 
                    and support organizations working to protect women in Algeria.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="relative">
                        <button 
                            onClick={handleShare}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
                        >
                            Share This Page
                        </button>
                        
                        {shareStatus && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium animate-pulse">
                                {shareStatus === 'copied' ? '📋 Link copied!' : '✓ Shared!'}
                            </div>
                        )}
                    </div>
                    
                    <button 
                        onClick={handleReportCase}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105"
                    >
                        Report a Case
                    </button>
                </div>
            </div>
        </section>
    );
};