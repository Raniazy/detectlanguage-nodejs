# detectlanguage-nodejs

This repos is a NodeJS implementation for [DetectLanguage API](https://detectlanguage.com/). 
Main organization : https://github.com/detectlanguage by @laurynas

## Get started 

Clone the repository in your local fs, or dowload it. 

``` git clone https://github.com/Raniazy/detectlanguage-nodejs.git```

```npm install``` 

## Configuration : 

Sign up and get your API_ACCESS_KEY from [DetectLanguage Sign up](https://detectlanguage.com/users/sign_up).

## Usage : 

### Language detection 

  ``` detect("Hello. Please detect me.");``` 
  
 #### Result 
 
 ``` ENGLISH``` 
 
 #### Intermediate result 
 
 ```{"data":{"detections":[{"language":"en","isReliable":true,"confidence":8.45}]}}``` 
 
 ### List of Languages 
 
 ```languages()``` 
 
 #### Result 
 
 ``` [ { code: 'aa', name: 'AFAR' },
  { code: 'ab', name: 'ABKHAZIAN' },
  { code: 'af', name: 'AFRIKAANS' },
  { code: 'ak', name: 'AKAN' },
  { code: 'am', name: 'AMHARIC' },
  { code: 'ar', name: 'ARABIC' },
  { code: 'as', name: 'ASSAMESE' },
  { code: 'ay', name: 'AYMARA' },
  { code: 'az', name: 'AZERBAIJANI' },
  { code: 'ba', name: 'BASHKIR' },
  { code: 'be', name: 'BELARUSIAN' },
  { code: 'bg', name: 'BULGARIAN' },
  { code: 'bh', name: 'BIHARI' },
  { code: 'bi', name: 'BISLAMA' },
  { code: 'bn', name: 'BENGALI' },
  { code: 'bo', name: 'TIBETAN' },
  { code: 'br', name: 'BRETON' },
  { code: 'bs', name: 'BOSNIAN' },
  { code: 'ca', name: 'CATALAN' },
  { code: 'ceb', name: 'CEBUANO' },
  { code: 'chr', name: 'CHEROKEE' },
  { code: 'co', name: 'CORSICAN' },
  { code: 'crs', name: 'SESELWA' },
  { code: 'cs', name: 'CZECH' },
  { code: 'cy', name: 'WELSH' },
  { code: 'da', name: 'DANISH' },
  { code: 'de', name: 'GERMAN' },
  { code: 'dv', name: 'DHIVEHI' },
  { code: 'dz', name: 'DZONGKHA' },
  { code: 'el', name: 'GREEK' },
  { code: 'en', name: 'ENGLISH' },
  { code: 'eo', name: 'ESPERANTO' },
  { code: 'es', name: 'SPANISH' },
  { code: 'et', name: 'ESTONIAN' },
  { code: 'eu', name: 'BASQUE' },
  { code: 'fa', name: 'PERSIAN' },
  { code: 'fi', name: 'FINNISH' },
  { code: 'fj', name: 'FIJIAN' },
  { code: 'fo', name: 'FAROESE' },
  { code: 'fr', name: 'FRENCH' },
  { code: 'fy', name: 'FRISIAN' },
  { code: 'ga', name: 'IRISH' },
  { code: 'gd', name: 'SCOTS_GAELIC' },
  { code: 'gl', name: 'GALICIAN' },
  { code: 'gn', name: 'GUARANI' },
  { code: 'gu', name: 'GUJARATI' },
  { code: 'gv', name: 'MANX' },
  { code: 'ha', name: 'HAUSA' },
  { code: 'haw', name: 'HAWAIIAN' },
  { code: 'hi', name: 'HINDI' },
  { code: 'hmn', name: 'HMONG' },
  { code: 'hr', name: 'CROATIAN' },
  { code: 'ht', name: 'HAITIAN_CREOLE' },
  { code: 'hu', name: 'HUNGARIAN' },
  { code: 'hy', name: 'ARMENIAN' },
  { code: 'ia', name: 'INTERLINGUA' },
  { code: 'id', name: 'INDONESIAN' },
  { code: 'ie', name: 'INTERLINGUE' },
  { code: 'ig', name: 'IGBO' },
  { code: 'ik', name: 'INUPIAK' },
  { code: 'is', name: 'ICELANDIC' },
  { code: 'it', name: 'ITALIAN' },
  { code: 'iu', name: 'INUKTITUT' },
  { code: 'iw', name: 'HEBREW' },
  { code: 'ja', name: 'JAPANESE' },
  { code: 'jw', name: 'JAVANESE' },
  { code: 'ka', name: 'GEORGIAN' },
  { code: 'kha', name: 'KHASI' },
  { code: 'kk', name: 'KAZAKH' },
  { code: 'kl', name: 'GREENLANDIC' },
  { code: 'km', name: 'KHMER' },
  { code: 'kn', name: 'KANNADA' },
  { code: 'ko', name: 'KOREAN' },
  { code: 'ks', name: 'KASHMIRI' },
  { code: 'ku', name: 'KURDISH' },
  { code: 'ky', name: 'KYRGYZ' },
  { code: 'la', name: 'LATIN' },
  { code: 'lb', name: 'LUXEMBOURGISH' },
  { code: 'lg', name: 'GANDA' },
  { code: 'lif', name: 'LIMBU' },
  { code: 'ln', name: 'LINGALA' },
  { code: 'lo', name: 'LAOTHIAN' },
  { code: 'lt', name: 'LITHUANIAN' },
  { code: 'lv', name: 'LATVIAN' },
  { code: 'mfe', name: 'MAURITIAN_CREOLE' },
  { code: 'mg', name: 'MALAGASY' },
  { code: 'mi', name: 'MAORI' },
  { code: 'mk', name: 'MACEDONIAN' },
  { code: 'ml', name: 'MALAYALAM' },
  { code: 'mn', name: 'MONGOLIAN' },
  { code: 'mr', name: 'MARATHI' },
  { code: 'ms', name: 'MALAY' },
  { code: 'mt', name: 'MALTESE' },
  { code: 'my', name: 'BURMESE' },
  { code: 'na', name: 'NAURU' },
  { code: 'ne', name: 'NEPALI' },
  { code: 'nl', name: 'DUTCH' },
  { code: 'no', name: 'NORWEGIAN' },
  { code: 'nr', name: 'NDEBELE' },
  { code: 'nso', name: 'PEDI' },
  ... 61 more items ]```
