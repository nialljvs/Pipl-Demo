import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person/person';
import { Observable, of } from 'rxjs';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages } from '../custom-validation.module';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  submitted: boolean = false;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;

  myForm!: FormGroup;
  people!: Observable<Person[]>;
  readonly ROOT_URL = 'http://localhost:4200/api'

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      middleName: '',
      username: '',
      countryCode: '',
      stateCode: '',
      city: '',
      age: ''
    }, {
      validator: CustomValidators.atLeastOne
    });
    this.myForm.valueChanges.subscribe((c) => console.log(this.myForm.valid));
  }

  atLeastOne = (validator: ValidatorFn) => (
    group: FormGroup,
  ): ValidationErrors | null => {
    const hasAtLeastOne =
      group &&
      group.controls &&
      Object.keys(group.controls).some(k => !validator(group.controls[k]));

    return hasAtLeastOne ? null : { atLeastOne: true };
  };

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      let params = new HttpParams()
        .append("first_name", this.myForm.get("firstName")?.value)
        .append("last_name", this.myForm.get("lastName")?.value)
        .append("middle_name", this.myForm.get("middleName")?.value)
        .append("email", this.myForm.get("email")?.value)
        .append("phone", this.myForm.get("phone")?.value)
        .append("username", this.myForm.get("username")?.value)
        .append("age", this.myForm.get("age")?.value)
        .append("country", this.myForm.get("countryCode")?.value)
        .append("state", this.myForm.get("stateCode")?.value)
        .append("city", this.myForm.get("city")?.value)
        .append("key", "nkvg5xba40fjihy2nkl7tsm7");
      var jsonObj = JSON.parse(`{
      "@http_status_code": 200,
      "@visible_sources": 0,
      "@available_sources": 22,
      "@persons_count": 13,
      "@search_id": "2011241242351466846263963616521606962",
      "query": {
        "names": [
          {
            "first": "Sophie",
            "last": "Macnair",
            "display": "Sophie Macnair"
          }
        ],
        "emails": [
          {
            "@type": "personal",
            "address": "macnairsophie@gmail.com",
            "address_md5": "bb98c65760029e08485c1c78e79c7194"
          }
        ]
      },
      "available_data": {
        "premium": {
          "relationships": 5,
          "usernames": 10,
          "addresses": 3,
          "phones": 1,
          "mobile_phones": 1,
          "educations": 1,
          "user_ids": 12,
          "social_profiles": 13,
          "names": 19,
          "dobs": 1,
          "images": 4,
          "genders": 13,
          "origin_countries": 1
        }
      },
      "possible_persons": [
        {
          "@match": 0.69,
          "@search_pointer": "72c6cb9730d4b7d5428552f789014118fb8aa3ad0b603f9fe8b7c6bbf124f3afa511ab8031fb2f7ced1ee11fe0c9bdc8ffa9afcfb9755fe5e95debaaca6690676ec351ade516212f14f61c04920f243a7ba22e5e8aaebad416b725bceb4083fb423f97a6aea5de332219d2f8335bb858e100d561208201ebc2c2b70873bb80b0ca8a4a3d1340d14326514a06f3f294cdca3feb9fffb44f0c42ff808c24e3679fe8471a5abc30012f93a9192222ae9818c35c7eada6524c1aa5c1f1fbac86b6f8427ee181ad40f7885a8cb4871d71288cc18569a4dc1048e266ed95db1462c510e9d37df112ae94843bf3ce843bbcae534f2c42b16bb446ecd207a2e6a93ca8f43059bb6ee48d688bab57c2d0bb36f1363238a32727617162fb73731959694bd608eb43d75e78eacfcdad276bcdb296db35b2329400907b54bb89cb9c8d54f17cdba95bd560effbe61e7c0110c5a77c58d754148f6076609ca0e4a124298e91751deaf1a1e00933da1f8cec08c920c8cb78cd9862041d17e21191d2e54d94accf4184d85235520578b8312743f349839cba7d63a7029fc91717c1d4bd23932b48a106aa56521439b74d6d13bee457d64bed24f39ab07aec86c118c43347d10ce9d76c4d2943249b1e0e11d644f503f5274a40a73a888e985370f68eeb5a09b04834dde4f14b92741b95063aa533e24c48d5e5027005139c470743693cd90f7a5219e79af43853ffdab6dbfa245938bcbe0857f6dfb73af7f4546275b5c27ac233",
          "names": [
            {
              "@valid_since": "2008-09-16",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            },
            {
              "@valid_since": "2008-11-01",
              "first": "Sophie",
              "last": "Be",
              "display": "Sophie Be"
            },
            {
              "@valid_since": "2008-11-11",
              "first": "Sophie",
              "last": "Cb",
              "display": "Sophie Cb"
            },
            {
              "@valid_since": "2008-10-26",
              "first": "Sophie",
              "last": "Acm",
              "display": "Sophie Acm"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2008-09-16",
              "content": "no_day_butt_today"
            }
          ],
          "gender": {
            "@valid_since": "2008-09-16",
            "content": "female"
          },
          "dob": {
            "@valid_since": "2010-06-04",
            "date_range": {
              "start": "1990-11-04",
              "end": "1991-06-04"
            },
            "display": "29 years old"
          },
          "addresses": [
            {
              "@valid_since": "2010-06-04",
              "country": "GB",
              "display": "United Kingdom"
            }
          ],
          "user_ids": [
            {
              "@valid_since": "2011-11-03",
              "content": "51564363@bebo"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "72350a04adf94c0bac3a830325cd73f55c00eb1a55eaa401f1517fcbc81a287fa25e02196061d79f714ecf43ad9cd07f95a4b0ba7609faa0302beec00aee7b292ee7e5a67dba00e806ccad997baa290e0c68d15eb8f4b7e4062966a5318086ebb88bc67cb94418fe6ff79eb8d3fa8d53f0a452b01fa9aa4526b5535deb3f1ac7282afbdee1c4f0f6cf9160a9228b95f3b143ef0fee00364c8b8cb6c13bf9ad18751fdfbdfeff262b6888552ba9c53dd23528c4c4dcadfb853e73c3f7aefc19de1767ff06a47c7eea193161d46208dc703662c14db8bcae1ce54ec443e073208f2129275ef7af655e83aefa3710281febc0b7e5efd061f94faa33bc977736f963dbbaea685d738b4c86376f7a8c1ebb6a6f33b94bd799124fb19c581866e63b2f4c671e4242ef11837fbf210060ced500567cd6ee2b6009212ecbe57163a2367773e821fb45b64ae741b417a0390355e556527368ca7adc343a8f6373acc2e7618484406966c1b9e82c8da6baeaecf4cf50438570a8c513e422793450e7a7c286d451d05ad47814beb3ebcfdbaf18d350e5f010ad0fc5ccfc762b456dc8d36f10f69c3927b6f0d0c8ed93fd68ea199190e82ab5f538016ccd71109118f7673f7187ee3339fb9b4597e3c33b0d97d2699af2eb1f25ba851d74bf3a457f5cce7e80d39e763ad33d9ae79adf14629663d693e244a5b97c658e66a51c90de8a03d095ac12b6aff2fbdda00c28305a0a616f133703c266ea1587e69863892f056e5b1accf6009a81f27ccd85ce966882c0ca9ca0d960e10b9f468a11f5ed9dafe2d8bf1f2528cae0496eb9ee1d9c50a493df71",
          "names": [
            {
              "@valid_since": "2011-09-10",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            },
            {
              "@valid_since": "2013-02-04",
              "first": "Sophie",
              "last": "Deyes",
              "display": "Sophie Deyes"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2011-09-10",
              "content": "jedicated_sophx"
            },
            {
              "@valid_since": "2013-02-04",
              "content": "sophiedeyes"
            }
          ],
          "gender": {
            "content": "female"
          },
          "origin_countries": [
            {
              "country": "GB"
            }
          ],
          "user_ids": [
            {
              "@valid_since": "2011-09-10",
              "content": "299115594@twitter"
            }
          ],
          "images": [
            {
              "@valid_since": "2013-02-04",
              "url": "http://pbs.twimg.com/profile_images/3136598788/12422e78ece6aa9d7f9ee2e67d1610aa.jpeg",
              "thumbnail_token": "AE2861B242686E7DDBDF0D814A3486E1D19BE9609F41B4AA71B6D0FEB03454A84C36C69AC58CE8676B93CF264C25CD156B4701B0BB0ACF1FC09C274D0111456EA390956503B476BD0345E0EA97E6F1FDB487BE2BEFA153842E8B4BB7842E35"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "afcdee7e886d9f905d99aec8e8bc198fa050f8839b4e533c2f431063f55deb51359cb6478cd2a075e11609d5cd38244ace562e23e06fb47adc2a4f1bab8d485972a231ed52d8db5967b056e6f6aae41339f1972576e99ec89d6adc0ed3e3fc22d96ef29ad72e3bc7d594f7bc2108646e58104cdcef9abf56641ab3acf1c2b139bb99a2f2f5b3ff1b140374968b83d40d17dab3d189549518c43e21d0d82a3672a187b1bcfdef4f88ba114bad3e59760d7d32ec55cd81ab3f407003b6885e7bb369e2c13094f8cf947fbac64ed04af9a0a8dab38358fd207b9e7ee4e689c813229ee24d1ac6c8af21f5bece88bfa0161207fd9f750270bfb10a4593f1b355c13708ee377f4a9593a6990658b1e0aa80f040506ba59b168ec22042753bee4a983165fb160645d120ad265c5e64b929ae8ce65f7fb79f5e491b7508f85552f9836ee865a07fa2d94555ea5de2028f86484a1b96e5e98e2804e4305f305909e94e598bd479d762aa085de5eb3fd759ee779ce83eb7208a873f1bede1862d67c61630e249dda81efe0ab9bd8a5b996f870c438db69c7a2db3631af265888a8e7963200d08c0c6b82cf4d809e44091748be9bdd6762fc8e3a3d289eaa1948b3c11f929f996028d63f30aa0cdb13f320e05d620c19f23805a62fa3391b18199a1ebf4c2fe042654abb6f628fd9f9d83f30c92fb8e03c0436006a0dca9150f0e0e197ed79ed9bb6a879c015d2a985554c8fe6d4b",
          "names": [
            {
              "@valid_since": "2010-12-07",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "relationships": [
            {
              "@valid_since": "2010-12-07",
              "@type": "other",
              "names": [
                {
                  "@valid_since": "2010-12-07",
                  "first": "Aaron",
                  "last": "Jethwa",
                  "display": "Aaron Jethwa"
                }
              ]
            }
          ],
          "images": [
            {
              "@valid_since": "2010-12-07",
              "url": "http://blufiles.storage.msn.com/y1mZiDh23AUn5ZDFPQEMRxOyZv3Z9AKsKwEW_1qpHgAMaUHkJp21cIGIMvSk4KF3o5vjqqhXum5n1mYUbNVLglTCA",
              "thumbnail_token": "AE2861B242686E6FD5D9459C513898A88C8CE97FD156A3EB7AACD2B58C3254E65262D8EF9FF9B3636DEBA27F4147A662092276CF8C45B803F98F227659696A2A8EDEB5576EE031FA2F139796C6D2D8B89487E97DAA8C67A407C02BE5885147DABBC5F4191C113A799FD39AB555484D4DE37150C5CFBEF32A1A6EE2B41B95ADF01172"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "07515496bbba477893bf7937bd7d8c76f26f6c389fdb45abd66b2fe874e8170dd7812d225c88802860e44cc53bee9caee614e5b3365fd29a2b70ff3ef58a761bb57c0235c9fd80b4b4860175bdc255acfebe785a1e51581900e7872f9d8120b0ceefc6d17e07fca89846a6c363a4597c58416d7765cfcbd52b0af6344904921ade2fa4238e4a68af279750a45e321e5a14ae6492ac4f0792ce46f42888281c849f90a4f0eca6116a7bc1a7be0280ba120aee7cc10e8412ed947f160a93fe651adbef7e717469618ce085966359c85e7327848dbfe6e071605bd07089bdb0b4285faa361492000789bf03a565987eeae6da879c22f6598f635fbd1ae6735652a9ebd9f53dee9665c891fdcb2f02a7d447147c7e62c56e6a7c28dfe5a55bee725e519d947a96360c3de5fce5caf47388c4765ae9754a46d4dd440933667003fab2997df3843dec220e0e3f938e146605ee1c77803d94b1101cfd7db1a27aa0d3d6daf0366d087c4c96ebe661694dedc3bd8b841c1ab9d5203800dd10bd6004f7f4e8baccf8df277895e34d91a4505d0f420977b946ab4f57fff31891ef97820041884ef1b06f57550638228aec25d7bc4ae4ece3cac3bb51e83a5f1a2b9bb2ed9a74c99c9e60d16c8acd4113d0fb4209ac15cddc49a197e668633e6a37a300031d698f645ff85c848b9b249878781d72304164b8557cd6407c57c1f932816ddca728cabf76b9d3f1cd178084ee702d9db1517ece2a6273c176117e7e36f6c57d1b17a7419d8b48ceb186867e06d1f19b836e61fde0512fb896ebe7eaf09c2a5af7f110c625829a4d4a46e4377fe57754d31f1f25a9efdd1943b60bfc9e2701e90c0ba65071c3ba6ccb85e4ec4b2134ca6e9669253e9f6849b0ca8fb3765387d63d83c324e79aa86a3251d31206087d64e13152faddec173afc10a9ba58ff03d3603c296cc65a1f9169626128a3c26d8dabd08f1ee13a08bfe40782fc4600d33d034ccb3b5a69f38532ae37937672722302",
          "names": [
            {
              "@valid_since": "2020-10-06",
              "@last_seen": "2020-10-06",
              "first": "Sophie",
              "last": "MacNair",
              "display": "Sophie Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2020-10-06",
              "@last_seen": "2020-10-06",
              "content": "liloldsoph"
            }
          ],
          "gender": {
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2020-10-06",
              "@last_seen": "2020-10-06",
              "content": "857174655022632960@twitter"
            }
          ],
          "images": [
            {
              "@valid_since": "2020-10-06",
              "@last_seen": "2020-10-06",
              "url": "https://pbs.twimg.com/profile_images/1185315727592607744/pTS9Y4s1.jpg",
              "thumbnail_token": "AE2861B20B7D6E22C9CE50DB492A82EB98D6E562DD1EB6B778B9D5F78A0250A44A34D0C6D98CEA696B99C624432FD511604105B2E90AC34E8C89457F5971152AF4879A7056F724F90E10EBEE90B3A4E0"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "f87130e9778d9a412ce94c0e920bdd681d091b3136dd5d28baefb07d0f7be2afc0c751865287363443936a6376124699095258b277f119e96192fc7139760c7c64454cf582c6f4f66beb3c60c30c249696ee29abd40751969bded0d83b8f5416895b5ea3f73ff70a8f9ac0650a5b93cc601b0738d9320251f2e4ca11f621980dd606e0bcd8ab4a6506c539de5a60ca4d87df03cc981621b8f1ed6a4a9229e4635b58b65633f9fc0815d072b8ba6a74bfc5e0f67c68dc60a73ddf34fdbdf41151337724580b27916ceaf4b8559c15461ef77e58c950488037fa3764f462852f26e0c5ecdcac766dc34dd902c6f4cfbd280c9adfb8368947babdf2111ad29417274fd6469640f532af246ced7dfc56dbd70fd9e12dbd7b7c27575c4d508b4a51231418d58bf9fcf9ee804e3153c8d63ea6809da5956851daebc687bbcabae955fcbe080140d6385d7a76120ae2d205e6b50020b7786f14239681dde5fdf57cf6cd01cd23a69e4c99c9b8f76e21f94c6e6257e2b7ba75f1cf9e2e008ddf102c89e610547a09550f3ee31ca1df891f1e895a55eacc0fe6ca82f76c5c67ad99dd7f7b451232c87b9e12fa44704e195485f7af62376c3c97947df924c71e22c556a21eacc4e8084a2b5e3ee9559a61f55e88778eee7fc187d6a0084aa3ac352ebaf24d01995683bdaf4c76244dbdc4480915ab4f5df7e43ed9b71d324f131bc7b2b221b7f11e401b8db470ed0b6cc9f6ab130ce0b4104af02d84e4601472b46d14ce9b18ce92eaf983cc2c22776b883a8316a30b952f6c197009299a41f16de75d77f7513a592f8e49bc5f6285335c38172669ae3e33dab54f42cb6900481332d194eb",
          "names": [
            {
              "@valid_since": "2016-07-07",
              "first": "Sophie",
              "last": "MacNair",
              "display": "Sophie Macnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "addresses": [
            {
              "@valid_since": "2016-07-07",
              "country": "GB",
              "state": "ENG",
              "city": "Reading",
              "display": "Reading, England"
            }
          ],
          "educations": [
            {
              "@valid_since": "2016-07-07",
              "school": "The Holt School",
              "date_range": {
                "start": "2013-01-01",
                "end": "2017-12-31"
              },
              "display": "The Holt School (2013-2017)"
            }
          ],
          "user_ids": [
            {
              "@valid_since": "2016-07-07",
              "content": "b8/474/bb3@linkedin"
            },
            {
              "@valid_since": "2016-07-07",
              "content": "419186871@linkedin"
            },
            {
              "@valid_since": "2016-07-07",
              "content": "#bb3474b8@linkedin"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "8af793390aa5eea1e05378a06009f497586089e33a279bc08cb036713e3c23f87d73c7bb5db1103508bd03066891b8c688c6549244dca3bba53c8b7b279f035e043db4216da81e602058730a8a6a64d63f069f1a37a3a291dcf8f3f490e8d4f6f97ebc297141f95a9811d9b850bbf1f8af340dc3b9fb9f93b7dbe6cd90b9604f2661a08579977a5ef2ed7662792180a85bf18d3e0b8bd4b5333146d97992f72753844bff74554d6c6537684983b81c266fb3383bda6497adc147aa9020d5e4fab6779525d022ce5747c0b51af84eb830fb865726d1c15711b52d2c83acb17cbad2fa63ec3804a9c0d0509c6ee8bc655d91d69b2b8038d6c6a84c605d8f0843fde143609a67b44d5a778b36b62cc78ecfd03e322562bd3bcc04abf72b0eb6b7cb5372c82d7666e75e085863b3388c8cc8a0c73ef63ecf81d849e0af7905fbcb09552af8437111fb2ded21f4671d0495612a31ecb57d5ab3d8129c76c067e7d5b88ef28afbcdfbccbb04b160a2e394ceab071bd4de5e5b65f03cafdcda81dade76",
          "names": [
            {
              "@valid_since": "2016-01-14",
              "first": "Sophie",
              "last": "MacNair",
              "display": "Sophie Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2016-01-14",
              "content": "sophiemacnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "images": [
            {
              "@valid_since": "2016-01-14",
              "url": "https://s-media-cache-ak0.pinimg.com/avatars/robinson4646_1413314617_140.jpg",
              "thumbnail_token": "AE2861B20B7D6E22CA814E9059348AAB9C99E565D51CA7AE27F1CCF2813454AE0530DAD8D9DCAD302ACB85625B6F8D46301D40EDB009C14E95A62018511B1268F19FC1376EE074BA491EA6BC81E3E3BABACAEE79FBF514"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "39f80d6d693e8e66c96127a7702af25533a29d3ec9566cd6ac5019cb22ac6b7dcc77915883d3aa28e2a28adfe906f2ba87c9dec856cb68cf0bba64012fa49a283ae660bf9349b127adbf9588c37ec62cd2ffb4da4f4195f835b0bbc4f2dae56dec608772805a8bff0605a53625271ee0090e24c317466db314be434ec32f9034d7b5d59df7149389d185a9d0681e19579f5e20432f71d60e6aec2ad54ddcfe4a4f6b122859b3ad7027bc5e0023fc828c8886a68c415873381848018360f590096b637b560c568e5177adeae28c16a6833ea0f4c6a213d32db56a88622de358ec32bdd0704bc84dcb15a74cd11e5c5bc43a2f81d15c980a4f4b3694fdfe503d9c1ff9bff3deb8b7dc4f022e4dfc1beb42d086b8e2afc919e3b6139c5e518ae3f5f775fd82668fa521fae866d730dbb25dfa8cf2e88c686aef6a0d5126899816d9d68c27316f3b236be2419078e4a11803011c87985d0a8a1f318d00e7c1abf053e29d56b52aa6d5c77805eda4530791ce80c5807ddeafdf7ca688b3d16fae13e1485b92e8451c5921cad8e862955c97c4a06ef7d7255322e2970645643974cbc54e9a7e9e695ffc4e8453f32fc138092964aa60861b1bfd529f85bd61e7ab81c362544dafd8c4847d834103ca56bff46ff08da981abde08f80c6c644780f4fff4e7d02b716ff3fccbcb397204207cb77f90096332f7297adbf669f487b1114d7e444721a90de709cd486d4af26662b3ae09ff4e32d3aef9914560341ea9823c73",
          "names": [
            {
              "@valid_since": "2010-06-05",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2011-04-20",
              "content": "sophie.macnair"
            }
          ],
          "gender": {
            "@valid_since": "2014-01-01",
            "content": "female"
          },
          "relationships": [
            {
              "@valid_since": "2010-06-05",
              "@type": "other",
              "names": [
                {
                  "@valid_since": "2010-06-05",
                  "first": "Chris",
                  "last": "Box",
                  "display": "Chris Box"
                }
              ]
            },
            {
              "@valid_since": "2010-06-05",
              "@type": "other",
              "names": [
                {
                  "@valid_since": "2010-06-05",
                  "first": "Weige",
                  "last": "Wu",
                  "display": "Weige Wu"
                }
              ]
            },
            {
              "@valid_since": "2010-06-05",
              "@type": "other",
              "names": [
                {
                  "@valid_since": "2010-06-05",
                  "first": "Ashvir",
                  "last": "Sangha",
                  "display": "Ashvir Sangha"
                }
              ]
            },
            {
              "@valid_since": "2010-06-05",
              "@type": "other",
              "names": [
                {
                  "@valid_since": "2010-06-05",
                  "first": "Hansol",
                  "last": "Lee",
                  "display": "Hansol Lee"
                }
              ]
            }
          ],
          "user_ids": [
            {
              "@valid_since": "2010-06-05",
              "content": "505310453@facebook"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "4f6aaecdcb0e7deb54fb0d65dcc95975169711724c86340d7b2063d9974294ca842a95aa6986dd555e572a3a04c5599ff1ddd315c397a017aaa7d39be6f508886ef3fa59177c7a823723b95597821f48feb714e3e0f2fe2eed4305668eae140d886073dce1821019cc876df2a8caaf59bb8ecdf3e420d28982e676dcc2f2a33155b69aa091a17820fbc437d790e1b2a43fe6b950dbdd25d3300d89851324b976b917df7ef362aad5fa62e2d238dbad285cc5e4eb5ca03b74aa4ad361e1ee428cfdc1d8d44950f1926fedfff8adbce1f7e0d761496d8e2ae968fbd5a51fe7ec110bc555c0cdb08908a637315fc9e7359e93b86fc2eafb68b94dd37ae0d91787c8df81b634eb67d5281480e27fc93557fd3483587676fba65386612e54a6a9da5cf4710b83d24b738dd2dca0d175f278c594bf6229706fd771d61553fc4cb52f3b89467fde6662582ab8cd9aa6f649bba9e3b3e4ab144b2705381339c340af5b4f194d55263d77a863713209978acb7f3fd0f90ef6038c0815ea802b47124fc2815b4efa9a5db3ad356e297a17628bb7bb6cab106323c0ce207be92bd00666df9d47dddb4c2524a16a1ec940d0b19c08080f4adf633446caa797b1ec223a1c76d5fe38c75c0de492a45ac0b442146c251119ba305fea7951cf6d6bb9aa5871129531cbb80ba1ed6b40f8148ec56d842aad",
          "names": [
            {
              "@valid_since": "2010-11-03",
              "first": "Sophie",
              "middle": "Sherbert",
              "last": "Macnair",
              "display": "Sophie Sherbert Macnair"
            },
            {
              "@valid_since": "2010-07-14",
              "first": "Fifi",
              "last": "Macnair",
              "display": "Fifi Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2014-01-01",
              "content": "sophie.macnair.9"
            }
          ],
          "gender": {
            "@valid_since": "2010-11-03",
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2010-07-14",
              "content": "100001095758711@facebook"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "ddaffec9cf4f3f124c3dcdf071a875cb1858c7c726c20102cc91d992e6d9c1fc2d8741acd525df02e393d1499abf05a95f2f2c58198b175d558bc624a8fdbf3587f450430acd3837b4cfc4a97025e005e52e0a5e5331050a14d00d283b553507778dcdb33282992102c09069e4178779fbf2d16ea1840e4cf63acdd620135d07d868adba92d81a32210b8b3b5f98a108c6141953fb5c581bbf37cc1af3920f62bf6015bb5319260f19d61923cfedbd018932e4a9e1935ae9a70ed7741e3c5c89c6e3995a012f7289ac6d33747e24f6f0c0805c764cbc549dbb152cc2e9aa04819aeea4f1cd12964d70bc270229c8bf107747cb6fe0bd05039d9d680e5863cd2c59ec519b3e9a4632abf874e17b70fe0dbed311e49a0569fd6cad48d334f326adc62534f64ef68fc33faf957d1183d952289c7f4c88363ddcec56afd77b684e92b4fcd8133ebe9d7d1d98ca656f03d3c08a8424fec67d3378794fb20dd73c4eb8e1052fd5dbb1648da581ae7a0bc2cb5d9d48f13493808797881dd53346a53642a5619adea2a97e8653d0c859d029eda55ab9a7b8c0fbfd1dea95197200b84b340a4a2d941caa21695f3289660cc6b18ed4e9fefdf2bfb90b5c36637d87d6266c3df8a49fe39660ad81fc22d60f44c817",
          "names": [
            {
              "@valid_since": "2020-09-01",
              "@last_seen": "2020-09-01",
              "first": "Sophie",
              "last": "MacNair",
              "display": "Sophie Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2020-09-01",
              "@last_seen": "2020-09-01",
              "content": "sophielouisemacnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2020-09-01",
              "@last_seen": "2020-09-01",
              "content": "21212696302@instagram"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "4e8f98607d1c4774ee5edda6b700a781aac90ef7e1e006c1bc3b6d9eb3183bced03014d196c8727970ea1b2db2ed4ca3f989196f86c9b7281d69fa0b6a0247e0563f74f51f798ac2cc50e52b17976025a8e368dfdc5dd9606ecc40b05cf089c1fd9eb1e2dacdc766188977a6683dcb12d7fe855359f2d6d9023e36c62b23448f2e67cc2de527f3f00bc1b29c3c2e34426e0095b91c21bc251ae24ad1d3be4ea38a38380a4d327cd610c024d5c4eb405a9bd0afc8be52493aefbbc22d282defdaf2eb11fe9eb4af65f2b8635c14e4e3768f8c7e250edc7de731703ea02410db20603f82298e70b8e4e8123e212017a740abeedb61ed15ea64b0b2ba6f4fa17ed4b41b08a022fb4b8095825a44a63026c12837f0b0330c5d28639729d8fced0947e5f8b6e8e629af221cc7c850d180808712866d2f6f52d69e5d2b92bed3fb22c0048f7b3b578bc0e78abbd039f6fa9571d9bd926726b50a8abe70f7130fb688ef65fdd45ae933eba02214076f55160c8c5ca74a8892fc3ab3a4fee5b9577c4ffcf7f0c873ad57d4c757c793fea9ace8a99f6e40bf58d1f5d2740e5e915c465162f6478fde4fcca4eeefd769e435e9c9811ddaa2806b22a0c95c1c4cf0c90108c7",
          "names": [
            {
              "@valid_since": "2012-05-28",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2012-05-28",
              "content": "sophiemacnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2012-05-28",
              "content": "384769256@twitter"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "da847d71e214a642bcd2a15a242fa8b3ee0f3e1646812301c519e58082dbe6adc7d86722aab0d1ec6e23f5c3940d272e1946a79581f338e77a834ced12bd065c72ad7aa048d808f5c7fd6eb6628dcf963af916a318cf2938b13820162170b73dc5743370bde609fbec729a26f4047b95c0e7d5e54113620a0290adadcdc2f60ab9af0c969ce494919eb403db0a44f672de227be12fdb7382607e83166e52b277c05bd63a7126a05f2b73bd060ffe2c94223faaef7643988ff5d8deb7f85933f6d645c8fe90157985574962d9fbfc4f61f4e208165b690aa9d966b134e6bad5bd5dfa6300a3a4af8903a24939ad03e7f23f99a87885fc08b03f22377b0a2f2297977bda29351c5a77b684418599d3aaa9dcf3a7ab955892d82237bd9b6b2f369b7ada0e767f75b0254f6ad3a227cdc7b9c43eaf051eec3014ca07f3318698e3fcb03c48c2fe8e3890d943a04e9e0e42ded3c96bd42e1a791099e3d580c164acfdfdd294122847705346bad2cbe5d70c3fb89d861987e1a5d3c1e2813bd74c259a",
          "names": [
            {
              "@valid_since": "2015-06-21",
              "first": "Sophie",
              "last": "MacNair",
              "display": "Sophie Macnair"
            },
            {
              "@valid_since": "2015-06-21",
              "first": "Sophie",
              "last": "McKers",
              "display": "Sophie Mckers"
            }
          ],
          "phones": [
            {
              "@valid_since": "2015-06-21",
              "@type": "mobile",
              "country_code": 44,
              "number": 7854435339,
              "display": "07854 435339",
              "display_international": "+44 7854 435339"
            }
          ],
          "gender": {
            "content": "female"
          },
          "addresses": [
            {
              "@valid_since": "2015-06-21",
              "country": "GB",
              "display": "United Kingdom"
            }
          ]
        },
        {
          "@match": 0.69,
          "@search_pointer": "881cc03ab943a019cb6917848e458d5e79c51625b19eecf1e291418bb4a860c667294a2dac7460f48bb096181f2bd976813bda69ab1f726bce76c0bf722f1ab64297ac2083bc455a601511810f1f34b0dac8667da00f5461afd36e754438f3d5a2c4184baecf601e21832c8bbe0d7f2963e108af5faafb53827490097d24bd1f0e0f969a766674a348e25e435392903c7660bde4b024fc8aac6689f7f6e82d8125fd01c071fab3752a69aa6a33a014b99951dbf7dff1cc6ed4b9bb65394fd9d376f2c8b50366815d09e492890ff2724a2065804f6aa89564b9a28b57211a6c8dde844f9b53f97744e847db9b4f4fae308c7baf1e93140e9603fdf034df60ea3ff51676ee946538d927787bbfcc2c749714c59d7449ac87363364aafd0c69a1cc6ea12b7f60c2e673a858dce7720d5905fc61251db6b84ef74d060c563e59957e3aa62a470501fdfd6f56153f34692b90",
          "names": [
            {
              "@valid_since": "2011-07-01",
              "first": "Sophie",
              "last": "Macnair",
              "display": "Sophie Macnair"
            }
          ],
          "gender": {
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2011-07-01",
              "content": "100000819591131@facebook"
            }
          ]
        },
        {
          "@match": 0.14,
          "@search_pointer": "0087415e541c548389349054a4ec4348ef5300d3d72ebba6772e6c89d33d305ff85233f05c167694c18861fec3ac25c0167f70cce9b3c3c1e76f5c6dc3d60f276b5d9dd751c392cbca333c8324592625a7b3461b0235d24fab6853af2c9b2cc32dad1793a400ad7464d43d9a1165738e93e061fa8b53160eb77d66106ff687e527957656acab9e2a6519c4ffaef2bc03faa3acf74532aad15977ef346a22b84095aba3ff2e7c1f14ae1c8a25334d2d454fb8f5f2ffba9939fd1911da7b4fcb10c0e377e96e2a6eb91a8828fe36530e3eafb6367ac3b54c0cf68798564de88fca34e73cb4f72b22ce3657245878ad7d81323d537ef89e43e9fd02d13c46c232b2bede95efc28421e2b0abec3108eac83644faff945b49068fabfb59d5a5637b59e2810e0bd9039b53af176f0d682e5007c96a9d1ec98d9cf3d8bb408260055e2ab5c9015b70f121593bc13dc357c3b0763655d88e815db8d69c06a809f84b4cccb62b045e77beccb19b9878c0e580657721217aba91339b9b6d5732e39724c4e685ba3e61a67ef9709bcbd5e7535d251e39eabc231fdc601f8da75398de15a7443df6f88721f2ebbfe0d700cc243fc8b8",
          "names": [
            {
              "@valid_since": "2011-07-01",
              "first": "Sophia",
              "last": "Macnair",
              "display": "Sophia Macnair"
            }
          ],
          "usernames": [
            {
              "@valid_since": "2014-01-01",
              "content": "sophia.macnair"
            }
          ],
          "gender": {
            "@valid_since": "2014-01-01",
            "content": "female"
          },
          "user_ids": [
            {
              "@valid_since": "2011-07-01",
              "content": "100001625330229@facebook"
            }
          ]
        }
      ]
    }`);

      // this.http.get<any>(this.ROOT_URL + '/search', { params }).subscribe(jsonObj => {
      var pp = jsonObj.hasOwnProperty('person') ? Array.of(jsonObj.person) : jsonObj!.possible_persons;
      var pa = <Person[]>pp;
      console.log(pa);
      // this.people = of((pa).filter(p => (p.names?.length || 0) > 0));
      this.people = of(pa);
      console.log(pp);
      // })
    }
  }

  otherNames(person: Person) {
    return person.names.slice(1);
  }

}
