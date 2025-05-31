

export const FloatingPedals = () => {

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-ping"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                    }}
                >
                    <div className="w-2 h-2 bg-pink-300 rounded-full opacity-30"></div>
                </div>
            ))}
        </div>)
        ;

}