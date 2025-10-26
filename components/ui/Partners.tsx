import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Adobe', logo: '/images/logos/adobe.png' },
    { name: 'AWS', logo: '/images/logos/aws.png' },
    { name: 'Figma', logo: '/images/logos/figma.png' },
    { name: 'Flutter', logo: '/images/logos/flutter.png' },
    { name: 'Google', logo: '/images/logos/google.png' },
    { name: 'Microsoft', logo: '/images/logos/microsoft.png' },
    { name: 'OpenAI', logo: '/images/logos/openai.png' },
    { name: 'React', logo: '/images/logos/react.png' },
    { name: 'Zoom', logo: '/images/logos/zoom.png' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Đối Tác Hỗ Trợ</h2>
          <p className="text-slate-400 text-lg">
            Được tin tưởng và hỗ trợ bởi các công ty công nghệ hàng đầu
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {/* Lặp logos 2 lần để tạo hiệu ứng cuộn liền mạch */}
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex">
                {partners.map((partner, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="flex-shrink-0 mx-12 flex items-center justify-center h-24 w-40"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-h-20 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300 filter-none"
                      style={{
                        filter: 'none',
                        opacity: 1,
                        mixBlendMode: 'normal'
                      }}
                      onError={(e) => {
                        console.log(`Logo not found: ${partner.logo}`);
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;