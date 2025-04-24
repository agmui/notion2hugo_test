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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAIY3QM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIConKmFW8UA%2FZbFFBhuA%2Fc8oY2TvNwdgV7zKLYKJA5wiAiAcAO3k0P%2FrpnBsGNsHC0poTudpHsiMd0d6mQ07nXDW%2BCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMzpNJrWkoL18YdAzEKtwDWrU8tIogaMvFY79%2BJuy3oG9IF5RJdUiBJ%2FWGgsfQbQJwrTDMXE%2BGBQOXL3wOcCVzzCFS7SPNXh2gqZrvmogPon82yl8lcWs4IVMPJfJBJhoeUvZqnL9YW85%2FYFmpKRsfPZy47J1w%2FSnDJt%2BcIzi1shqyQWb7vRbECi5OcM1FuZSaXxMpo%2B%2FnlCRCjVmHoSObUJUTsh%2FMciizxN1DwD2oK%2FD2lqhRIRLOOr0WfngEVzrP%2FMRTxz%2Bou15xNcPOn1%2B%2BNPBzmP36HamcCAlevDzLTUD2lgfEizfHPCiiIdLwuXw2haIIxG7hh3%2F7AbV5Of%2FRNDIRXbwzG%2BQJXRLE5F5XuW%2B86E1QmyUrP68F9XYIuJHP%2Fx55%2BQLrU%2F8xf3u7d4V3f6v7bf3gpQ4MVT8XnucPgsuG13JpwacAvv%2FxZYKoaB%2B5DHp14Zugah4TLu2k0RrzJrdQfttQ3q%2FqYTp3NiGtzGXd1xSOUA%2FMbOarZ4nvXfS2LeCkabIBFc8RF%2F68GvF7ZDWWBE1126mKPrLBLi7%2BBNZ8lghspM8huFXeZnl5otcAwmGtklKk1T%2Blh6Fv%2FVIn36sUPk03SXYrfLRPGk9oAbueBfUpHxdRTqbia8eEXGTJ%2BT25pjx%2Fjng1vB4wl4epwAY6pgEZj%2B6DgV%2F1CV4Lv4bJ6bK3FR2TlKz48rLxbiSBg5YpwqnXjW9WAaDIrrdN2HHJHCpFL0f4Og1tE32lfWjCk%2BeAE7BjLRwEyJX%2FvIJHMnXH%2FAC62m6kw54I6abJGwIiIUCAzZDUdSRVS6%2BsNxDnvKrlHWZiyHBq18ty1kX4DrJXhM%2Fsg27HBIkGJ66biVEXnc5YJmBzzNmiX3zFHB27xwZv%2F4kVeaaR&X-Amz-Signature=c3e1f93dc48eb2e5fde80227843b7e948c3d84f899fda4584d232dbe3e9912e7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCFQO2N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDtp9CNW56xaynO51LgBdtQ6r1CYbYTZE6b5d7DFO%2FN9AIhANm9t6LlHJIOy%2FrHXAsenDxO5Lfo38P%2Bppn8ipTJgKlKKv8DCBcQABoMNjM3NDIzMTgzODA1IgwlMu94pS6bBJBqAwUq3AN8Edb4EpoQTma%2BRYCGp4vBzfspnxkeWWYiLj%2B10aNyY54sduBFhCUNSRaGjuM2Nt4bZPhaOkZMWdpPduWmR0ZuTan%2BsxzwYD8tW5n187ddUtuN%2Bu4y0vVom%2BIkt1pWFnz09WSWFLK0OtgkVRWcUby7iQJeKvuWaFvGGed0CIWWh4JeJ3TrIyZ4ibBS5oTEV7mivLuLIo0B7ck%2FP6Qi8eTZuKOFXI%2FwRtjcvZMJwy7Er5xBuxHiK1bbIkV8D6rY%2FL4gZUjV97OQPD5cHvyKVDbqZXuWg%2BOZJBFbAAa5W%2Fn1XmIH%2FDRtQhJ%2FPJDHQD%2F%2Bu4p4GBykkMYrLMAttCbz%2F4zraUgIyOJhZH0K7e7eMjaHdJrI38cuZJh%2FajOkLo6CNla%2B0wnPhZVL6iXQujcOGbmZzm%2FVwPP2BedbLkg0w8UX4YI5lvZEY%2BlsFVoG042hN2KX%2Bouwv2f0ryahDP70mi88xNcaj8STgKEBU3hSG5NXxqFlR1OuzYKIOM%2BjOmtgKuPm9tGLh%2FJq06AUudAQv3fpNG7J%2Bn0eLSw%2B6hLPAJnlYsRETw1GmUhCRjRbtbitG28SKNqAO9%2Bmd%2Bm50ZECdveyVy7D%2F68IPskePgS6jBunoiVruIhDmeOsq1k%2BuDCZhKnABjqkAaR9u6njDNtRmb3XJcD1fJzGgawz3kFCBK952WhSoMkLeGLK6WYyulknsVSpfQr9kiAl4I%2Be1Of9MaI2B6il0JACMwNu27pgOKpgf%2FJXtJL8l%2BOf0Q%2BKbm%2Fwh2Z%2FqEjtAZlxlRrqrWeRyQMFtgDe0ghXBwSi6KOpcV0s2hlyaqwx80sv9IBkYuj%2BexShQXuPWysiVKCp2CTS0I5iwvIwog6R3gAL&X-Amz-Signature=30a0c96cc017818285d730504018c1ca617d429bf1b01a453d2593369753cbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
