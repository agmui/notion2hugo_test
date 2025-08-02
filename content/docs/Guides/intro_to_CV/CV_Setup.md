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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCOFX4JS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxOR0mSdNvgwJ9WAsujLahjESzy9kyX2JD8aoSYdFS4AiEAwveSI5MKhY94fSYv1Ib694kNa%2Fl5NW5b%2FCPG27ICHR0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNfht4Y1WsEBdJA2wircA9nn%2Fk639NcXA51RipBdj13RqINEG2rhFd%2BQ5Hx%2Bg82pNEozrGagb0V4yfYD9ZLzddp7AlPENOzXsIsHJmNyEVwvyGDLUUF7mdtliVC0nJxPRc4hidEv1XFZAk7A8cKU9hoFSebX6jltPLC08At0nGWHrh1I%2BFD8rYFpVInk6dgkpgIg0zcNaoJLhoyp6wCIGuu1nABzBTSn6B%2Fk9V6PvmBtbZVzsd4b4%2BwAnCBnDQzvqDS0dSIiYU2fTqcvH4rlLMZyqlGzGvX7Bp%2BYzWPr1XljROt5gRiE5t%2BPewdKIUESEETkdt9LzOogZVul19WTwgAESxS4yKHnuwr33p5cu8wRLxiG9cMFzKGjZsCkoJfFTvkx6RHEb4TiQfU6cafGW94i7gslWQoFhFXR8ltEIQ73SHjXJ2vs4qtoWI%2BYKGffERRKdHJtgHqB8seiMIGjb3%2Bmh3yJNXNf3S7P2NnnRjSeCOTS32QRZOsYFUHPObqCPVD0klVkpPDUvT35ZGNzXySYSd7w%2FuJV%2FJsCiAkEwJ2EfNqV2Nnroqkq3Dv69J%2FPOY1CASXEIMCP7fguMR7pRGhFcKSwoyRSglBEX9sKDDhwWZO8IBj8O%2Fqc1FzO8ddAnRCjs%2BsWnPmZwkOkMIqBusQGOqUBYZTrvE5NX3ihgD%2FNr2brkx9ldwoJNssx7i%2FsLRvYpVK1FjYbZ%2BQ%2BT%2F8uLFtPOYR6CphejdoHRA9%2B8KynHLeEXV1FlvwHmvhZj%2F0nKMcjaPB85P6oBHDw4GDoSWAeQmhIwownTwMNOEXBFxXauNiMr7IrEIxMvTZWlCp2Ww1KRmHyAlSpnHIWx3mUquEuVmNZmyYPjuq7zGBqb3ly2wDsNBrXTcSK&X-Amz-Signature=c654a4fca7308793676e5da9cac65b0156539aad3a0e885d53da5e7585436b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLZJ32Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXiUPGNh88HbfIOl%2F0VHZthwQ0YDT251YdicxniqbyqQIhAMBBCodmmF2PcGZP%2B2P1mL1v6Qn3NfiuxpFfO7GUJT4YKv8DCB4QABoMNjM3NDIzMTgzODA1IgwUsqGGQeG45kAcTtgq3AOBoCMv%2BIixDn95el7bIrboPh8TL3BJMIa51SlHa25ghjjDV7FZ5J5eY%2FII0VS4nxCYApYap2Fu4hSa54t755yeleQt6oL3xdAgOVQGrFIfd12qdaAiYv%2BeioSPSBW4ypHXaP42rastcc3CGnlvr%2BpCghr5IEJokGVbq46bT5rNhpLFfTWh0JI6EhDXl5Ctc1Ouf7H1%2F70R%2BhP%2Bpv%2Bht1TY9a0Uj32R2fjkP7UfX4%2FUruSOsWzJhThJZm6Ng6CKdNM9vhNI%2BmELyfWSaq5xahMrTU5h9q8FwwC1JAc5Ym491uG61HRtv5udr7gZitu69pNwk0Zmj9alL9Y%2Bs5%2F7DpZDx4FjkeDi3CzH7SgGta0txYJ0hYoUbMyb6o%2F3hLQYbZuHnU8oE4d3VhFlTanhNAJD5rB6c8UsIdpf%2BHbmtjQLwK9mscOrucXrLK6sUopFWjMTPK4vxgLXOZhLUvPce9fl0rj1%2BA7VDueKekdXigbGfcDe6y%2BcWRO4nDGDfOPtVw0AhbgQhjUstCkRLJhcGARjqFcTdjqXAPk1GVrHB1ICpO4ipF4UKRYU%2Fo2ixaPmsZ6ORlacbXDvSbT8f%2FFihgdxbOvJyTzghONVZeaoYYvs1UB9YSUfS%2B2tDkCCUjDDgLrEBjqkAXfdR0TRpdaTQjwu43FJ6G%2BLujGzRVf1a07wyKXiHfWeiBmn%2F9O4aE8CHlmIHCyazBQ2IEGHCsZ1ca%2BFs616nHvdG3zY2Ig3Iv6LgQiktJf3q%2F%2FP%2FJSt8DH%2FsZvSsQKtcKEOz%2FjupJbnb5LMIbXmexINJPbROdXTf0eGX2d6%2BFVcgakklvOLbPLEMjlWC4CI0hN6ds072q%2F7OuOBvn7MqkpK40TH&X-Amz-Signature=85e71e1ec86682de033dd4f4046b387a9c005e1e5f6e598ca43e5852a54b8f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
