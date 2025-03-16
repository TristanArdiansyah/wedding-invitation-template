import React from 'react';

// Sample data for bank accounts
const bankAccounts = [
  {
    name: 'Muhammad Ryanrahmadifa',
    bank: 'BNI',
    account: '122 054 7422',
  },
  {
    name: 'Yasmin Salimah',
    bank: 'BSI',
    account: ' 971 168 5380',
  },
];

function GiftsInformation( {t} ) {
  // Function to copy the bank account number to the clipboard
  const handleCopy = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert(`Copied: ${accountNumber}`);
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  };

  return (
    <div style={styles.container}>
      {/* Digital Wallet Section */}
      <div style={styles.walletContainer}>
        <h2>{t("digitalWallet")}</h2>
        <p>{t("digitalWalletSubheading")}</p>
        {bankAccounts.map((acc, idx) => (
          <div key={idx} style={styles.bankRow} className='text-left'>
            <div style={styles.bankInfo}>
              <span style={styles.bankName}>{acc.name}</span>
              <img
                src="/assets/images/bni.png"
                alt="BNI Logo"
                style={styles.bankLogo}
              />
              {/* If you don’t have a logo, you can omit the img tag */}
            </div>
            <div
              style={styles.accountRow}
              onClick={() => handleCopy(acc.account)}
              className='d-flex justify-content-between'
            >
              <span>{acc.account}</span>
              <button style={styles.copyButton}>
                <img src="/assets/images/content_copy.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gift Wishlist Section */}
      <div style={styles.wishlistContainer}>
        <h2 >{t("wishlist")}</h2>
        <br />
        <p >
          {t("giftSubtext")}
        </p>
        <br />
        <button style={styles.wishlistButton}>
          {t("giftButton")}
        </button>
      </div>
    </div>
  );
}

// Inline styles for demonstration only
const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
    padding: '2rem',
    background: '#fdf6f2', // a light, warm background
    borderRadius: '8px',
  },
  walletContainer: {
    flex: '1',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  heading: {
    margin: '0 0 0.5rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#333',
  },
  note: {
    margin: '0 0 1rem',
    fontSize: '0.9rem',
    color: '#999',
  },
  bankRow: {
    marginBottom: '1rem',
  },
  bankInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.25rem',
  },
  bankName: {
    fontWeight: '600',
    fontSize: '1rem',
  },
  bankLogo: {
    height: '18px',
    objectFit: 'contain',
  },
  accountRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#fafafa',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',

  },
  copyButton: {
    background: '#f2f2f2',
    border: 'none',
    borderRadius: '4px',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer',
  },
  wishlistContainer: {
    flex: '1',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  wishlistText: {
    margin: '0 0 1.5rem',
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.4',
  },
  wishlistButton: {
    background: '#b8ccb4',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.2s',
  },
};

export default GiftsInformation;
