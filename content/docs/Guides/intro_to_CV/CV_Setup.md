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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQXMQSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAfxMu%2FSd52H%2FTKeBlbGTWKdMug3Qyr1ZETod%2BuzFa3gIgNLRT6gbG7%2Bi9jgnKFQ9Li4iJJAXj%2BH4PP%2Fat9jsH4%2BMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAD8zLTFEEDeYbc%2FNyrcA1%2FdmHyIY9VkyqyXA9rcJhGabDHz2%2BXLcGWuUTN7ZFTVp7s3%2BcOsRYcns1HOayYpyC5akuLg7FS15Bg2vP1L7hrStg013xABMetVV7DUSUQtgQuCKje7zjhSsbhtU9zUuZSyQ3nyfCNU%2Bn%2B2A%2FX%2F3hPjosKXHTGsOsrTne4g7gBCeddhyVnobmo1uepbwckTON4aiKQfLntVmgWhTjOMwWjWtvxZnWxKJky2ddlynW6rwiHGZsXJJh8GBf1f%2FLqkAWskcrsvc5DqXpbRCpqmXkPbyipOw5V9B6oynWUBvKiq238yr6UKZpt%2BtK37IrY%2FzSbhHs3Z3iE40d8Rwb0rbifyQN79BqbC9WeLyYksggWSZyKW7K7rFglr%2B7gHAtW1K%2BEcHD5ltMOhIS8lRpnxVeb8UkgLkNxYybERk8FRn5U%2Fql%2Bnn6i7iXyMXzrG4gT12bUGxi7hJmTSKcSSzL%2BbwEJcj5LtwlvWXUs94mk4dxakAu5egnCdHNMUGittvvIdC8Bpqa0GAt%2B8j6gFHDvurEJ0WhbtOdPyPMd49MILjsV9ZDvHJzt8tCWdCuvei2wj9zMAEUL%2FC8EynCKQNsL63lBoJP311xn%2BCcPnWcDIFytBhelh2SZn34OyceHQMKSUgsAGOqUBrU%2FcxXRHqM2BjwsifcwIera4xpKR%2F6QHH5yADqxImzlnPmMOU%2FCFl%2BGBN8zbnG%2F%2F%2FYntHAnNZRktvUPTbV9L3uCrcB6ZJoCXpmculnTKDAQmqY%2BbunKyq8Mgz6drqdotGqKESroJ7YG5jgMLHd2K7%2BMUHV7%2Fd6aD8vleqAV58mOZcrfdgAVZ3znrzlbTnZK4W1Z8X61ZEeuw8SWfer8okYpbk0Ye&X-Amz-Signature=18065952c33e9b9dea5cf5ed7e1096de8541a3721b87f6aa582f08e813665aa4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BODZ6IO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIo5N%2ByxlhjZNYzUYiBME%2B816DLrOKtwj3uW802uMPKAiB60S3FFAUDqEIfDnJbvWtAowb7o6Do7gTbd3b7ij2B6ir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMa7PPzdrzVDPyBpvAKtwDfSosFfDTXHtJuYRFMw31yu1%2FMCNQ6y5ahScyjcOAkiTaGBviY%2B9Vad4uMcHz7fsQKX2aXb6zhbQo59rEfpDLzKVAfWb236OmYIv81zhGMyJ7kHRR%2F2FRgEpHnjY2Z0KhH2BETaDbn7BdiwlcAXiEA6Z34RTIe9r7hSLi8bVmzmJFNrAhFYacmrK9MS%2BQOQC2Y27Usi30gWcSQ1blczfsDXWoQtbyprcBiONdsOLRgLA710%2FN5fNZAANjzptgrCdfbrUR23l4frnfM6hd0B%2FNKM0P%2Fs3AG0xf7IGWCvev49MzuGGIv4fHKwTAFgEUn2ryZqmwQOZXqpLHffg%2BAXVjhxLGkMzkALOeKR%2BeZmhxld1u%2F1hNRamadq%2FsltF6QnwdEphT29C%2BKHFQncf18n8RYtOU6eN3BHK1NXa7GeoqqEEJ0E6Tb%2FUtmW2mTyfW%2FaX1tK9IVx7IY1nx%2BDOSl%2FAqOzVCfszSNjV4LOx4wB3Yp7WXs%2BS5rlkfI%2BqTCpUtkJp3wrUkXGODHooIEF%2FLqCRPcFwXwdffKlORtOWfGiXrDDwomccN1RHPdslgOyRbAmVjC9ikLnpFb%2F%2BiQDNJ3WYwO%2F0GnK77Iq8NRjG83JfLh8mbWWtGDXffDvgy%2FPkwu5SCwAY6pgHsoetIrA2gx9tmtOl%2BTeIMOCiH%2F7q5EuNt8eGZbDKlk2PMnaHdjFCat8lLLP3%2BhwrJiC6nqobVxlGEWZ1KSqiR10rFVetOhbN6Q9vzcFu76poBDsrjFA%2BNKbrTqOSMykzlgG8c%2FmADGaJF7aqTrXGnCrRLrAvANXesIR1fq57oJ45UB24OS68ku5eQzE9csQeQHl0rp%2B7MwgQUYw9Iw26GR8%2Fv2Hwx&X-Amz-Signature=006cf989e687fb5616e1a0bae41fc7ec4b1b520f40f6c5c11f165982097ee3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
