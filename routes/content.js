var express = require('express');
var router = express.Router();


router.get('/commentary', function (req, res) {
    var myArray = [];
    var date = req.query.date ? new Date(req.query.date) : null;
    var keyword = req.query.keyword;
    var language = req.query.language;

    if (date && keyword) {
        json_data.forEach(item => {
            if (new Date(item.date).getTime() === date.getTime() && item.keyword.toLowerCase().includes(keyword.toLowerCase())) {
                myArray.push(item);
            }
        });
    } else if (date) {
        json_data.forEach(item => {
            if (new Date(item.date).getTime() === date.getTime()) {
                myArray.push(item);
            }
        });
    } else if (keyword) {
        json_data.forEach(item => {
            if (item.keyword.toLowerCase().includes(keyword.toLowerCase())) {
                myArray.push(item);
            }
        });
    } else {
        myArray = json_data.slice(0, 3);
    }

    if (language && myArray.length > 0) {
        res.json(myArray[0]['translations'][language.toLowerCase()]);
    } else {
        res.json(myArray.slice(0, 3));
    }
});

module.exports = router;

var json_data = [    
    {
        'keyword': 'Technology auto',
        'date': '2017-04-24',
        'content': 'Technological disruption is cutting across sectors, with the auto industry a key example. We see risks for traditional auto players.'
    },
    {
        'keyword': 'Macron French election',
        'date': '2017-04-24',
        'content': 'Centrist Emmanuel Macron became the clear front-runner for French president, reducing perceived European political risk.'
    },
    {
        'keyword': 'US Japan',
        'date': '2017-04-24',
        'content': 'Earnings season will be well underway in the U.S. and Europe this week. The yen will be a focus for Japanese earnings.'
    },
    {
        'keyword': 'trade US China',
        'date': '2017-04-17',
        'content': 'We see a lower risk of trade wars in the near term. The U.S. did not name China a currency manipulator.'
    },
    {
        'keyword': 'bond',
        'date': '2017-04-17',
        'content': 'Geopolitical uncertainties boosted safe-haven assets. Global bond fund inflows now exceed equity inflows year to date.'
    },
    {
        'keyword': 'French election',
        'date': '2017-04-17',
        'content': 'We see the first round of the French presidential election potentially causing considerable market volatility.'
    },
    {
        'keyword': 'Trump reflation',
        'date': '2017-04-10',
        'content': 'So-called Trump trades have rolled back on political uncertainty, yet we see the broader reflation trade having room to run.'
    },
    {
        'keyword': 'Fed US tightening',
        'date': '2017-04-10',
        'content': 'The Fed’s meeting minutes implied it is still on a gradual tightening path. Value and U.S. small-cap stocks underperformed.'
    },
    {
        'keyword': 'US bank',
        'date': '2017-04-10',
        'content': 'Several U.S. banks are scheduled to report earnings this week, and management comments could address the regulatory outlook.'
    },
    {
        'keyword': 'US real estate',
        'date': '2017-03-20',
        'content': 'We believe the U.S. commercial real estate recovery still has room to run amid reflation and resilient rental yields.'
    },
    {
        'keyword': 'Janet Yellen Fed',
        'date': '2017-03-20',
        'content': 'The Fed raised rates. Stocks rose, bonds rallied and the U.S. dollar fell on Chair Janet Yellen’s perceived dovish remarks.',
        'translations': {
            'jp': 'https://s3.amazonaws.com/audiophiles/market-brief-janetyellen-jp.mp3'
        }
    },
    {
        'keyword': 'US durable goods',
        'date': '2017-03-20',
        'content': 'U.S. durable goods orders could provide another sign of the disconnect between sentiment surveys and hard economic data.'
    },
    {
        'keyword': 'March, Federal Reserve',
        'date': '2017-03-13',
        'content': 'The Federal Reserve has engineered a turnaround in March rate rise expectations without significantly disturbing markets. This is no easy feat - a quickening pace of interest rate normalization in the past has often led to spikes in volatility'
    },
    {
        'keyword': 'March, Oil prices, US',
        'date': '2017-03-13',
        'content': 'US crude oil inventories surged to a record high, sending oil prices to three-month lows and weighing on US high yield. We expect inventory growth to stabilize due to increased demand in coming months'
    },
    {
        'keyword': 'March, US growth, US',
        'date': '2017-03-13',
        'content': 'US industrial production data could confirm recent surveys pointing to accelerating US growth. So far, economic activity data haven’t been as strong as surveys would imply, possibly due to the typical lag between surveys and hard data'
    },
    {
        'keyword': 'March, EU, European, elections',
        'date': '2017-03-06',
        'content': 'Markets are anxious about several upcoming European elections, all featuring anti-European Union (EU) or anti-euro parties. Last year proved upsets can happen, but we believe European near-term political risks are probably overstated'
    },
    {
        'keyword': 'March, EU, European, Donald Trump, global equity',
        'date': '2017-03-06',
        'content': 'European stocks led a global equity rally despite a sharp rise in government bond yields. US President Donald Trump struck an optimistic tone in his first speech to Congress but provided few policy details'
    },
    {
        'keyword': 'March, US',
        'date': '2017-03-06',
        'content': 'A solid US jobs report could cement the likelihood of a March Fed rate increase, a move we noted markets had been underpricing. The ECB’s updated inflation forecasts will also be key to watch, and markets will digest China’s 2017 economic blueprint'
    },
    {
        'keyword': 'Feburary, China',
        'date': '2017-02-27',
        'content': 'Global companies have been getting increasingly positive on China, based on analysis of text mining of corporate conference calls by our Scientific Active Equity team, as the chart shows. This is a component of the BlackRock GPS gauge, which is pointing to solid near-term growth in China'
    },
    {
        'keyword': 'Feburary, Eurozone, EU',
        'date': '2017-02-27',
        'content': 'Eurozone PMIs signaled a six-year high in economic activity, underlining a reflationary trend. French-German government bond spreads retraced from multi-year highs hit on election-related jitters'
    },
    {
        'keyword': 'Feburary, Donald Trump, US, tax reforms',
        'date': '2017-02-27',
        'content': 'Trump’s speech may shed light on the direction of US tax reforms, while markets will pay close attention to what Yellen wants to address ahead of the quiet period before the March Fed policy meeting'
    },
    {
        'keyword': 'Feburary, growth, reforms, earnings, global, Japan, EU, Europe',
        'date': '2017-02-21',
        'content': 'Upbeat global earnings are confirming that the benefits of reflation – rising wages, growth and inflation – are spreading beyond the U.S. We see room for more upside for corporate profits, especially in Europe and Japan'
    },
    {
        'keyword': 'Feburary, risk, economic data, global equities, Government bond, US, UK, Germany, China',
        'date': '2017-02-21',
        'content': 'Stronger risk appetite and economic data pushed global equities to record highs. Government bond yields rose. U.S., UK, Germany and China data highlighted the global pickup in inflation. But Japanese and European gross domestic product data came in marginally below expectations'
    },
    {
        'keyword': 'Feburary, PMIs',
        'date': '2017-02-21',
        'content': 'February’s PMI data are expected to moderate from the very strong levels reached in recent months, underpinning the global reflation picture'
    },
    {
        'keyword': 'Feburary, inflation, growth, US',
        'date': '2017-02-13',
        'content': 'Our preference for reflation beneficiaries – or assets likely to benefit from rising growth and inflation – isn’t contingent on U.S. corporate tax reform. Yet such reform does have the potential to amplify this market theme'
    },
    {
        'keyword': 'Feburary, inflation, reforms, corporate, growth, US',
        'date': '2017-02-13',
        'content': 'Our preference for reflation beneficiaries – or assets likely to benefit from rising growth and inflation – isn’t contingent on U.S. corporate tax reform. Yet such reform does have the potential to amplify this market theme'
    },
    {
        'keyword': 'Feburary, Donald Trump, Emerging marke, US Treasury',
        'date': '2017-02-13',
        'content': 'Some “Trump trades” partly unwound amid policy uncertainty. Emerging market assets outperformed, U.S. Treasury yields fell sharply mid-week and U.S. value stocks underperformed a flat market'
    },
    {
        'keyword': 'Feburary, Federal Reserve, NFIBs',
        'date': '2017-02-13',
        'content': 'Markets are likely to react to any signals from Yellen regarding a March Federal Reserve rate rise, the odds of which we believe markets may be underpricing. NFIB’s report will show if small business owners’ economic confidence remains at a 12-year high'
    },
    {
        'keyword': 'Feburary, Euro, European equities, EU, emerging market',
        'date': '2017-02-06',
        'content': 'Analysts repeatedly slashed their European earnings growth forecasts in recent years as early optimism faded. Yet 2017 appears different, with upgrades following a late 2016 upward trend. Projected earnings growth is now mostly coming from cyclical sectors that benefit from improving global growth and a weaker euro'
    },
    {
        'keyword': 'Feburary, US dollar, Donald Trump, Developed market',
        'date': '2017-02-06',
        'content': 'The U.S. dollar index dropped to a more than two-month low on Trump administration rhetoric. Developed market equities edged down, and EM stocks were little changed'
    },
    {
        'keyword': 'Feburary, Euro Stoxx, energy and financials',
        'date': '2017-02-06',
        'content': 'Roughly 20% of Euro Stoxx companies, including those in key cyclical sectors, report earnings results this week. Reports from the energy and financials sectors should give investors a good read on the cyclical growth story as well as on how companies have been dealing with rising operational costs'
    },
    {
        'keyword': 'January, US, reflationary , equity, fixed income',
        'date': '2017-01-30',
        'content': 'We have updated our five-year return assumptions across asset classes to reflect strengthening reflation and changing markets over the last quarter. We have largely maintained our assumptions for equity returns while increasing those for fixed income'
    },
    {
        'keyword': 'January, US, reflationary , equity, fixed income',
        'date': '2017-01-30',
        'content': 'Global risk assets rallied, led by EMs. U.S. equity indexes hit new highs. The yield spread between EM debt and U.S. Treasuries fell back to pre-U.S.-election levels. Japanese exports rose'
    },
    {
        'keyword': 'January, US, EU, Europe, Japan, European, Japanese',
        'date': '2017-01-30',
        'content': 'Markets expect European and Japanese companies to follow their U.S. peers this week and release solid earnings. Earnings revisions ratios – the ratio of upward to downward revisions – in Europe and Japan have been moving up, encouraging signs ahead of this week (Bs earnings reports)'
    },
    {
        'keyword': 'January, global reflation, global yields',
        'date': '2017-01-23',
        'content': 'We believe now is a good time to ready bond portfolios for reflation: improving growth, wage gains and higher inflation. We see global reflation running further in 2017 and spurring a modest rise in global bond yields'
    },
    {
        'keyword': 'January, Donald Trump, US dollar',
        'date': '2017-01-23',
        'content': 'The U.S. dollar started the week sinking to a near six-week low after Donald Trump said the currency was “too strong.” It later rebounded'
    },
    {
        'keyword': 'January, US firms',
        'date': '2017-01-23',
        'content': 'About 30% of U.S. firms will report earnings this week, following solid earnings last week, especially from financials. We expect a strong showing from health care firms, though industrials may disappoint, and we see further mixed guidance'
    },
    {
        'keyword': 'January, US dollar',
        'date': '2017-01-16',
        'content': 'We expect the U.S. dollar to grind higher this year. But the pace of the greenback’s rise is likely to moderate, with spates of volatility like last week’s drop following Trump’s first media conference since winning the election.'
    },
    {
        'keyword': 'January, US dollar, election, Donald Trump',
        'date': '2017-01-16',
        'content': 'The dollar gave up a third of its post-election gains after Trump offered little policy details in his Jan. 11 media conference. U.S. small business confidence hit a 12-year high.'
    },
    {
        'keyword': 'January, ECB, inflation, UK',
        'date': '2017-01-16',
        'content': 'The ECB is likely to keep policy unchanged, looking past a recent pickup in headline inflation. Yellen’s comments may influence expectations for the pace of rate hikes. Any signs the UK will leave the single market could trigger a further fall in the pound'
    }
];

