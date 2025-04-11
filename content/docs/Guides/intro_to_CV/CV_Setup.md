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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDKUD4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAtkdHl%2BuKShgD%2FRDIlI500jlV5%2FkCPJEkImUipWXT4GAiBMfMgsY%2BZ4AHhM9WhgOBHVrqMyQzHAZzmeNgIrzl0SdyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMztf%2F3uoS%2FYt%2F7%2BwDKtwDEKcmzXJXwYyPjtW1OhPhiG2U6ItdiIxpZgc64uvM1xfJqlYgwDVNpuHJskiHLYnk2Xc7Rv%2BPlAUtc96iK%2FESgeW7fh3mgW4Z1gzS7kOpnnHg%2F43n7HWrEaPntJCsXU21B3En%2BwwZvNjfuMhkrlyYfqUciIqM0qPI9Woze6%2BXZLR9lwZjDsRQ4hqsdp5A5IbXdqGz%2BiyFdZ4%2Flv%2F1nHs3Kmfa7zSvcvWtSSVh80Wh64mXwvGrZrqz9U7QAygC0l%2FgSs7r0HkkIIpcATC7JLjdVwxxRLaTHeKkVSFnPZ2XJ%2BoKEAVACMR%2FfvOBLp42gLOwEwckwGL3gBEZPCRpk8UO6Ji%2Fsfdx6kpc7U4PKQ3QcskJpL9813xSJQ3iA2C0d1p6uVqdlMJhdePBkK%2Bca9FgtIBMPvy%2FLULahRL2OF1VCuGIBpklXJp6beMQhfS33i6HYohKqEzxFLTvDB10c6cUc4mf%2FaoSP%2FD45EAeiiLJoou%2B%2BHV1TtlT17FTyoj%2BZOPZOOe9R4nnqMdyjQ63QqER5cFteKmpG%2F0q5WQ1p0qg9b%2B0B67QKVrXeGnyP0Jr736hgN%2BEyJM08R3xPxOdgd4nAQBNWtfbhNOmaUnxT9zcqC0E6Krr%2BOqYu%2F%2FtmmQwvbbkvwY6pgGHqDbdYpAGpXccS%2Bj6XjQm7BylJ163dht489b4eHpiKf71gvU08saRcq4ze48F6qr2A3dp5WscNIB8Msv5CJHzMicoyDKXM%2FMVim60Fv9tw8HiSln353jQzV0h9WqSx1ilSXw88Hj3dT%2B7McLvBbpWlKZG3hsCDyg%2FwgDXPOY9QbID3FZbkUPP4%2FEvXxuXwQsAR0P5D0R1kG2aJE9OwapoOt7jSC%2Fv&X-Amz-Signature=32a878d0a341486d3938343d4d99abbc2d593be6df79db644d2ab64f05c2c638&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWU6JS6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICl91EcxJ0layTdhGKLKbw49jWxu6gsErzuofKImSE5oAiEAx0Z5WT85bvh0LSzzJJpCdnXkKhqF16ZfAj6saH9D2Q8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRuMZyEuWIoXOmUcyrcA36fQzym471%2BIoOTVHMM1lhaOQRNqkPs%2FOt2rx3J1FBhLm5tpWv%2FKfK0WDqjqVzw8PeLG2crZMnHqffvyapStHXOmp0tZbqab8bUiLvx4hUs0weoDHUrR5PIPOoybIWdGTMvVPzXNTIXN9sMUijUwiHqcADjeWgB%2F5QRathAP7qK%2Fgl%2B6LUO8oK6daNPBrZLy5d0bQWe%2FCmccypQ9bG3GCfCUWo%2F9qFTkGsSZifpOxKkSA2BsLifeif7F%2FwrgXA4ZAO01yljdFsjNGYUEIQgtRmJeZnsY%2Bh7FgRRbrthOnyPLxP7u1718Nk9Oc%2F%2BFyleZD2PKmNlih3lBzzoHeslcGKTTr9vnK3%2F6w6DdXv4vi7XiVrDTKJZVWSD39ShSunXxP0h2DxVjBX7gFCp6AGImE0s1g95YXeyg2QuJl%2BFWNCKEBLcJnN%2BARvm%2BXrNW0TA9PJARjHMFl4Y5ndXTHNsc28kzPIkYKJc2lKqVPU2RUCAyAqxOWdV3Jlp8gC%2B4dpyWNk7oJPjya6XTl24DJkkWHNbDwbB6IC9hPGSN%2FjL5SQg1MVPdzAr7avAi0YJUUQqRi49bte70743u2%2B6h0MH5aHwLA%2FdtgO1r8aqnsum3t2xiBPSW55bFg61IIrZMPe15L8GOqUBkG97tz2l6ydObErDGBDYHTK2KBqv6pRTCgOUReaYVGvVedJuw5%2Bd%2BQMxZ24WzheAbMzy7oMmwzEao%2B7lMKjPAYktGfSl7mOzWBrG7m4IZYXU6lzGTbYoehL4A6nyoltzojax1XFmripGdwqJB2IWS%2BkwmB6RAk1XY8z8tAuNalpHl%2BfkzjNCc%2FjnTIQKPE7W0vv82%2FOdN8vzl6pPnz8ejld5q0X0&X-Amz-Signature=104a593fcc0c710554f6440f6ba87f534b29e126e41ca036e1c9f6d13279ed7b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
