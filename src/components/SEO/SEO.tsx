import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SEO: React.FC = () => {
  const location = useLocation()
  
  const getPageData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Brij Kishore Jewellers - Trusted Jewellers in Ayodhya | Gold, Silver, Diamond Jewelry',
          description: 'Brij Kishore Jewellers - Ayodhya\'s trusted jewelry store since 1985. Premium gold, silver, diamond & bridal jewelry with BIS hallmark certification. Visit our store today!',
          keywords: 'jewellers ayodhya, gold jewelry ayodhya, silver jewelry, diamond jewelry, bridal jewelry, hallmark jewelry, trusted jewellers, BIS certified'
        }
      case '/about':
        return {
          title: 'About Us - Brij Kishore Jewellers | 35+ Years of Trust in Ayodhya',
          description: 'Learn about Brij Kishore Jewellers - serving Ayodhya since 1985 with authentic, BIS hallmark certified jewelry. Our legacy of quality and customer satisfaction.',
          keywords: 'about brij kishore jewellers, ayodhya jewelry store history, trusted jewellers since 1985, hallmark certified jewelry'
        }
      case '/collection':
        return {
          title: 'Jewelry Collection - Gold, Silver, Diamond & Bridal | Brij Kishore Jewellers',
          description: 'Explore our exquisite collection of gold, silver, diamond and bridal jewelry. All pieces are BIS hallmark certified with guaranteed purity and quality.',
          keywords: 'jewelry collection ayodhya, gold necklace, diamond earrings, silver bangles, bridal jewelry sets, hallmark jewelry'
        }
      case '/contact':
        return {
          title: 'Contact Us - Visit Our Store in Ayodhya | Brij Kishore Jewellers',
          description: 'Visit Brij Kishore Jewellers at Chowk Rikabganj Rd, Ayodhya. Call +91 9876543210 for jewelry consultation. Open Monday-Sunday with expert guidance.',
          keywords: 'contact brij kishore jewellers, jewelry store ayodhya address, phone number, store hours, chowk rikabganj road'
        }
      default:
        return {
          title: 'Brij Kishore Jewellers - Trusted Jewellers in Ayodhya',
          description: 'Premium jewelry store in Ayodhya offering authentic gold, silver, diamond and bridal jewelry with BIS hallmark certification.',
          keywords: 'jewellers ayodhya, gold jewelry, silver jewelry, diamond jewelry'
        }
    }
  }

  const pageData = getPageData()
  const siteUrl = 'https://brijkishorejewellers.com'
  const currentUrl = `${siteUrl}${location.pathname}`

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Brij Kishore Jewellers",
    "description": "Trusted jewelry store in Ayodhya since 1985, offering premium gold, silver, diamond and bridal jewelry with BIS hallmark certification.",
    "url": siteUrl,
    "telephone": "+919876543210",
    "email": "info@bkjewellers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9/6/123, Chowk Rikabganj Rd, Shakti Vihar Colony",
      "addressLocality": "Ayodhya",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "224001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7922",
      "longitude": "82.1998"
    },
    "openingHours": [
      "Mo-Sa 10:00-20:00",
      "Su 11:00-19:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "INR",
    "foundingDate": "1985",
    "sameAs": [
      "https://www.instagram.com/brijkishorejewellers",
      "https://www.facebook.com/brijkishorejewellers"
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      <meta name="author" content="Brij Kishore Jewellers" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Brij Kishore Jewellers" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={pageData.title} />
      <meta property="twitter:description" content={pageData.description} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#d97706" />
      <meta name="msapplication-TileColor" content="#d97706" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Ayodhya" />
      <meta name="geo.position" content="26.7922;82.1998" />
      <meta name="ICBM" content="26.7922, 82.1998" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}

export default SEO