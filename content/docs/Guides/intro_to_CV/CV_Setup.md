---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PFPMQN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDJwYDDf5Jw6NfKah%2BOhsoprwrl9ylm%2BIJBzuEPzQ%2BRvgIgazHdSoqL5bU2cjKavTWCFP%2FCD6yHAn8fbC7qW9jc%2Bokq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPwSkCIcefKYODmMhSrcA8LXC1wsvRfZX5rBs7F7Q1EVLAw6tuNvAQUJOmhwBB1nOkXo9cWH5%2B%2FPhv%2FlKNqShM%2FD8G9dLyipRxX8ehpAIAsJ9mQk9L7C8FafUTeRS89i0%2FYXGwmdEHVkMg3BBSTfJ%2BCqUWZkwK%2FUhUZ4ysRSeSCNwxUDbwHCwDp9ywkYds3%2BRCEtbmOYjBu%2BLWiqc6VW0CQLtoZEcO4sQlfmmfOymc10MoCBEthw0tcN%2F7LXx8UKVNQfFD98SJcZJb4QZzcz8Y40HzQzD98z8TgPreYMxW3icH9A4J5QeGIPlWF15sm9eYSzu0zx6cL%2FRg1motTszWnxXJHt%2BrXczuKJD%2F8pgatz44nfz6ANLW4ipIxLuxqjtT4Yhh1k5LoP4eeuiiUVV5c20%2BOQOA2B5qwPj288aEK2v5MTxbx47PV9Zrb8RtKYV6CUJEa4fPhrpMq0hlzVP5EM0UGc52ZdalAur2TTjZA9Pl47IvglBTzOsHMx1Zzsmn%2F6%2BUukOE1aTHRN%2BHF8V7v3N%2FcTDn6eDHUGrgibzq2UV0o%2FvjLVGlIUpdfp%2BEdVGC8fjdaOWzyqfascVc3C9Yp0C2vx3pt92mbhksaSmWAOZsZ6uDfmDqnQSNwb3hoyjmLPg4kNelnlCfuPMKyL5MMGOqUBQvEyXhuFuo9ZkSm2kS7SPeVoopSlQE3SSOmMWkGytpcQsbcrsgBh%2FJ1Zu%2F8VcIFdutwb9CkeSEcg8RIBUzjrKzb5h0BjJO%2B%2Fz%2B5T3wWo%2Bm%2BQqHW%2BaZWIpJRbQ2WzuH5CWLJ1JWA1FttyxxYpiPHT59XzFtM9eajAi7kHE07mqJXfE7zQJHamQrh5qGs8Sd%2B1cABWV2h35h3j1s6o5DeSHwf4J25B&X-Amz-Signature=601c7c05f8421d00ce90d4120c0f8c9364abe79d0175b1a7bcfd9b54b076d1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXC2II%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFzWfdYN06uYgU8dMr0k6W5Es%2FGtCxej89tGQYWDVQ3hAiEAjzxsDcX2S8qFxL962XwA7F2gYT81YH%2FvX%2BeDXvAyAEgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHTaLXJHrT6IMIK95CrcA7k978DX6vsIHHgLA%2BClinQclO7fZE0w0OudSuq3TN3nkRsd76d1S9r5OAE2Uz4DzqF%2FQVZysX05GjrVbHwM0%2BIiPfEEoVPwJXj3DrnvuI%2FP6GTydD7HIT%2BPj1zBjpLM%2Bhqm0eSrX%2BrzYUHSNSVS%2FTXUWkbSUstLMNnxuDpYQ%2F9b86Xlw6VXEEL8lJ0ycu4WeUpMOsmAI36l8Qv4FeGdmxiFhurF3UVH3V9AsQMufmD35STVCSOmBud9YhXa%2BF%2FEOsq6rCvza5c4xkNsp1Ae4IvdoMVyC%2B2qI8Z%2BnpDfueXEAs1a03UXlPFMCiW0SdCTSPsDP6aDEjJUckMypzO2ZWNqDRyGp1cXKg1Jxpj1kbzeu8TvMZH60FbYBh8ml5eZYpVUSewtxEeqs8QvKss3%2BBOwpq9qtyuOdOW%2BMY3hpdZ1CIN7O0wBzQ2Q%2BoGbvt%2FyzNFa%2FmSQyRbXQoLZgCfCLGCR1xx93PBhhfvrs8QJRpUU2jhluxE9m6wWt5%2BGphKK%2Fe87k0Adn%2B3g5Gl8PB0W34BowiamAHRsHWfYGOIv5%2BPggjL98QbBYD9GjU2TFMTHapNwfUVwacdz%2Beuu%2FrFpOjd5SYiU11Knk9I%2FyxCrJScTvJ0zAg1ShEKrlxR%2FMKiK5MMGOqUBFn3HHwDJXYUogsBSupZT18qVBH%2BmG0DZ8bm4NfxH4Hv70vIr2DkicQW8cDvTc6MPdbBAFbBL2ch%2F0P6q%2BGAKDm7n%2Baw69qjeNKPcr2f1voapAib1xS7IQV1N3031er51PKqS6q86xRDKdBAUmnJEAjSxjRCLxe4qOxi6eH868ZCGm7tQINbjmyP8BnSCw5w7rLZW86xLoAfIUQExc2%2By3QmuMn0%2B&X-Amz-Signature=59c985dc47ef2c90d2da27e10dd50423b4d30e1034e56e505acd8d999c482f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
