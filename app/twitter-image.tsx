import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background:
            'radial-gradient(1200px 630px at 15% 20%, rgba(0,56,168,0.55) 0%, rgba(11,19,36,1) 60%, rgba(7,10,16,1) 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.05 }}>
          Marci Metzger
        </div>
        <div style={{ marginTop: 16, fontSize: 34, fontWeight: 600, opacity: 0.95 }}>
          Homes in Pahrump, NV
        </div>
        <div style={{ marginTop: 24, fontSize: 26, opacity: 0.9, maxWidth: 960, lineHeight: 1.35 }}>
          Buy • Sell • Invest — The Ridge Realty Group
        </div>
        <div
          style={{
            marginTop: 44,
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            fontSize: 22,
            opacity: 0.95,
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            marcimetzger.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
