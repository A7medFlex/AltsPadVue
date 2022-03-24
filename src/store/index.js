import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pools: [
      {
        id: 1,
        name: "SamTown",
        username: "$twewtg",
        image: require('@/assets/images/pools/profile-img1.png'),
        showpolygon: true,
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        registerBadge: true,
        upcomingBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 4322.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 43.6,
        BUSD: 6345.2,
        ProgressTotal: 30023,
        ProgressDone: 15000,
        ListingTime: "13 Jan",
        xPrice: 21.5,
        xNumber: "16.3x",
      },
      {
        id: 2,
        name: "EndasyAl",
        username: "$4w3sda",
        image: require('@/assets/images/pools/adroverse.c5014e1b.jpg'),
        showsolana: true,
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "ANML / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        registerBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 7422,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 134,
        BUSD: 1252,
        ProgressTotal: 20000,
        ProgressDone: 500,
        ListingTime: "13 Jan",
        xPrice: 63,
        xNumber: "62x",
      },
      {
        id: 18,
        name: "Sareynd",
        username: "$32wera",
        image: require('@/assets/images/pools/cryptoverse.295219be.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "SHAH / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        registerBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 20,
        name: "JohnyDa",
        username: "$fdasea",
        image: require('@/assets/images/pools/deadknight.1951af75.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Sep",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 21,
        name: "AliSamy",
        username: "$adws2ea",
        image: require('@/assets/images/pools/gtprotocol.d2c6ec20.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "MZR / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 52343.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 63.6,
        BUSD: 342.2,
        ProgressTotal: 63451,
        ProgressDone: 234,
        ListingTime: "13 Jan",
        xPrice: 52.2,
        xNumber: "63.2x",
      },
      {
        id: 22,
        name: "Sohemy",
        username: "$werw3",
        image: require('@/assets/images/pools/metaclash.68e7eb0d.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 23,
        name: "MOSaley",
        username: "$wger33",
        image: require('@/assets/images/pools/jungleroad.d42f8414.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 24,
        name: "Anasyn",
        username: "$wjt4e",
        image: require('@/assets/images/pools/mizar.a7ededdb.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 25,
        name: "AmaySe",
        username: "$aegxe",
        image: require('@/assets/images/pools/nestarcade.533035d4.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showpolygon: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 26,
        name: "EmyAli",
        username: "$ewrve",
        image: require('@/assets/images/pools/riox.4a340dcf.png'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 27,
        name: "JohnyDa",
        username: "$fdasea",
        image: require('@/assets/images/pools/deadknight.1951af75.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Sep",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 28,
        name: "AliSamy",
        username: "$adws2ea",
        image: require('@/assets/images/pools/gtprotocol.d2c6ec20.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 52343.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 63.6,
        BUSD: 342.2,
        ProgressTotal: 63451,
        ProgressDone: 234,
        ListingTime: "13 Jan",
        xPrice: 52.2,
        xNumber: "63.2x",
      },
      {
        id: 29,
        name: "Sohemy",
        username: "$werw3",
        image: require('@/assets/images/pools/metaclash.68e7eb0d.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 3,
        name: "Arashne",
        username: "$gswe32a",
        image: require('@/assets/images/pools/animalialogo.600f849a.jpg'),
        showledgity: true,
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 3253.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 32.6,
        BUSD: 2355.2,
        ProgressTotal: 10000,
        ProgressDone: 2500,
        ListingTime: "13 Oct",
        xPrice: 63,
        xNumber: "31x",
      },
      {
        id: 4,
        name: "Asamy",
        username: "$gswe32a",
        image: require('@/assets/images/pools/animalialogo.600f849a.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        showterra : true,
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 634.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74,
        BUSD: 6345,
        ProgressTotal: 80000,
        ProgressDone: 5086,
        ListingTime: "13 Sep",
        xPrice: 34.1,
        xNumber: "34x",
      },
      {
        id: 5,
        name: "VandikW",
        username: "$wer2a",
        image: require('@/assets/images/pools/avania.bbbc838e.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        uncomingBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 6345.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 43.6,
        BUSD: 734.2,
        ProgressTotal: 634534,
        ProgressDone: 74542,
        ListingTime: "14 Mar",
        xPrice: 63.5,
        xNumber: "62.2x",
      },
      {
        id: 6,
        name: "Sareynd",
        username: "$32wera",
        image: require('@/assets/images/pools/cryptoverse.295219be.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        registerBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 7,
        name: "JohnyDa",
        username: "$fdasea",
        image: require('@/assets/images/pools/deadknight.1951af75.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Sep",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 8,
        name: "AliSamy",
        username: "$adws2ea",
        image: require('@/assets/images/pools/gtprotocol.d2c6ec20.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 52343.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 63.6,
        BUSD: 342.2,
        ProgressTotal: 63451,
        ProgressDone: 234,
        ListingTime: "13 Jan",
        xPrice: 52.2,
        xNumber: "63.2x",
      },
      {
        id: 9,
        name: "Sohemy",
        username: "$werw3",
        image: require('@/assets/images/pools/metaclash.68e7eb0d.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 10,
        name: "MOSaley",
        username: "$wger33",
        image: require('@/assets/images/pools/jungleroad.d42f8414.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 11,
        name: "Anasyn",
        username: "$wjt4e",
        image: require('@/assets/images/pools/mizar.a7ededdb.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 12,
        name: "AmaySe",
        username: "$aegxe",
        image: require('@/assets/images/pools/nestarcade.533035d4.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 13,
        name: "EmyAli",
        username: "$ewrve",
        image: require('@/assets/images/pools/riox.4a340dcf.png'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: false,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 14,
        name: "SamTown",
        username: "$twewtg",
        image: require('@/assets/images/pools/profile-img1.png'),
        showspecial: false,
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        registerBadge: true,
        filledBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 4322.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 43.6,
        BUSD: 6345.2,
        ProgressTotal: 30023,
        ProgressDone: 15000,
        ListingTime: "13 Jan",
        xPrice: 21.5,
        xNumber: "16.3x",
      },
      {
        id: 15,
        name: "EndasyAl",
        username: "$4w3sda",
        image: require('@/assets/images/pools/adroverse.c5014e1b.jpg'),
        showspecial: true,
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        registerBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 7422,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 134,
        BUSD: 1252,
        ProgressTotal: 20000,
        ProgressDone: 500,
        ListingTime: "13 Jan",
        xPrice: 63,
        xNumber: "62x",
      },
      {
        id: 16,
        name: "Arashne",
        username: "$gswe32a",
        image: require('@/assets/images/pools/animalialogo.600f849a.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 3253.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 32.6,
        BUSD: 2355.2,
        ProgressTotal: 10000,
        ProgressDone: 2500,
        ListingTime: "13 Oct",
        xPrice: 63,
        xNumber: "31x",
      },
      {
        id: 17,
        name: "Arashne",
        username: "$gswe32a",
        image: require('@/assets/images/pools/animalialogo.600f849a.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 634.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74,
        BUSD: 6345,
        ProgressTotal: 80000,
        ProgressDone: 5086,
        ListingTime: "13 Sep",
        xPrice: 34.1,
        xNumber: "34x",
      },
      {
        id: 18,
        name: "VandikW",
        username: "$wer2a",
        image: require('@/assets/images/pools/avania.bbbc838e.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        uncomingBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 6345.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 43.6,
        BUSD: 734.2,
        ProgressTotal: 634534,
        ProgressDone: 74542,
        ListingTime: "14 Mar",
        xPrice: 63.5,
        xNumber: "62.2x",
      },
      {
        id: 34,
        name: "JohnyDa",
        username: "$fdasea",
        image: require('@/assets/images/pools/deadknight.1951af75.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Sep",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
      {
        id: 22,
        name: "AliSamy",
        username: "$adws2ea",
        image: require('@/assets/images/pools/gtprotocol.d2c6ec20.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 52343.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 63.6,
        BUSD: 342.2,
        ProgressTotal: 63451,
        ProgressDone: 234,
        ListingTime: "13 Jan",
        xPrice: 52.2,
        xNumber: "63.2x",
      },
      {
        id: 33,
        name: "Sohemy",
        username: "$werw3",
        image: require('@/assets/images/pools/metaclash.68e7eb0d.jpg'),
        twitter: "https://twitter.com/",
        telegram: "https://web.telegram.org/",
        medium: "#",
        subtitle: "PRIDE / BUSD",
        website: "#",
        SaleTime: "Feb 18, 11:00 – 16:00 UTC",
        FCFSTime: "Feb 18, 15:40 UTC",
        whitepaper: "#",
        showspecial: true,
        listedBadge: true,
        privateBadge: true,
        poolDesc: "This is is my pool description This is is my pool description This is is my pool description This is is my pool description",
        raise: 1352.5,
        startTime: "Mar 12 15:33 UTC",
        poolPrice: "235.4 BUSD",
        poolEnded: true,
        TimeOPenOrClose: "2 hours, 13 minutes",
        TimeOPenOrClosePercentage: 74.6,
        BUSD: 6343.2,
        ProgressTotal: 50000,
        ProgressDone: 25000,
        ListingTime: "13 Jan",
        xPrice: 26.5,
        xNumber: "22.2x",
      },
    ]
  },
  getters: {
    poolsEndedCount: (state) => {
      return state.pools.filter(item => item.poolEnded == true).length
    },
    poolsOpenedCount: (state) => {
      return state.pools.filter(item => item.poolEnded == false).length
    },
    getTargetPool: (state) => (id) => {
      return state.pools.filter(item => item.id == id);
    },
  },
  mutations: {
    getTargetPool(state) {
      return "hello";
    },
  },
  actions: {},
  modules: {},
});
