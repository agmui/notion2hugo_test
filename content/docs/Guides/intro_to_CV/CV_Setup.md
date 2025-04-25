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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLDPZRR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVjcOXOWCSfGMogC6k9%2Fa%2BL39Fo6v%2BmKz7xRwop6lswIhAJue7Xh9feiHkcX83DKsumMoHArJnFs08mdr%2FxPqKCDCKv8DCCcQABoMNjM3NDIzMTgzODA1IgxisZI2MePAvFWcgiAq3ANesmRbYWkPpfROKROGrGlG6%2Bn9Xxw6RfLuT1vax802qzgMdmh7%2BBrWg1wrU2kq8tT5fwcw0CQQX0et47LO3mIc9kPtlE%2Bap8azOIcDxRMlHTqT3z0DZ0Cu%2BbWQkDM9FboFcV6EZiUm01PoOhQqhccs8q%2BP%2B112GkSoom2ulkdHJv64AK5Dlq8SF64oAJfEvgeBTTpNQlFyhivfx4TAiFnchAUkD58XBXjuKJogXFTA%2FdDSiJt23xBgPdHaU2HloIsCtb2%2FjSCjpqFbfILX9F4GwxekwkIBjpycfGG0cnwSpWzbIGMHpE%2FRp%2FcF8NpGXvKfXv2bTmtuSBvqtTxJOs1T%2Bv0KUaERXd%2FX47QckKNonoWBAEp2Pep6d3TM1v%2BAcR%2FO5cIn2yjwPJzzxCFDv3moQ%2Fg%2BWhNCDb03TSEAw04I6TUSK6IatEPFX79xzUOdvlQ8Pdg6lVuc8NOO1vd%2BhuJIz38ZmZ%2BHsYt8FwilVkzUZ%2BXn0xHWePyPoURLGixMi0%2Be7OpN4QjNs0qsggOa%2BI%2BwJbjjgQ0jrwvO0ebqn%2BHMPa1TZRMpO9FpRZ4%2BPeeHq8%2FyhyoF7QIFONNK4rHUOTIn5Mm7IgDGU0Dai4UojjsP%2BxM7s8RiB4iVtQA4ujCjyqzABjqkARBVPXBGtbB2Pp6bSFma1z33vWHYYan87hDNBZHwtX3Rk3vTp6BdRpALUDmI%2BkcRxsrRW2XJvPQAiI9hLXS7ySXT8zqBPdMhfMKizRIdpl4DUOQLGaXmq7oWskKHSv2VnN28l5qT%2B8maKQPacfIX4sJtVlnmzpOPtVulL2p%2Bi7mKDf2816L8iZ7MkD0V6m5UMdmrTFeu7fZ2JJaNuRyv9az3xhOO&X-Amz-Signature=06f1c73d5001c1cb1eaf9def2d53529385aceec01fe5e8a911e215aef2bd1055&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6H6PEA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV3KMfoJMRJotF0Tuv6%2FdYbm2iT05NwlWfrp%2FeY7QYlgIhAOXFY47iCaWA4Tfn9%2B4eDIbOFxBEJ0ilAcCRldQvCTfYKv8DCCcQABoMNjM3NDIzMTgzODA1Igzh9E7e%2F71f%2BoGOUpcq3ANzKgFsprEq4yi5IjdmQUeW%2Fwk31PqmEz3HXnUPgNBs9hn6KLZ1lPHDZr%2Bpqd9UzMrlKiUGY5K%2FOvN8AgoCzVnEHrVZfb4OgQaO47CX7P7Nl8SLIbRQemS%2Fobz6U0uu8VtHwxaPveFDCn8j25QRTaQPV1Mgs0IikkDy8C9CHt2Ton6B5czePrERwQ0LDnGGIRKgKc4GvWSt9jY6GlqZx0avQCGP3X5%2BA6LSLJ3%2F8gxpeTVjBpFhd3vqA%2FvM997yZLDh2zqMf8Vp1RcE1qJsSE6K4T%2FRS0JhOHdIh6LA79NquH3gbu1Shl6DDDMXhUjTGCsx9j0FPSRpaP4hit7NzQpfa7HDjqsy9InqINWqaSbFL0ckgBT%2Fxb6GyVavHe4TA3dJ4xId0OyozePVrKYMbqxh0LLr%2F61gFocnYCiqsLH0AR6Z9rDn6D4vawbPP4APvVlM%2FzAgpug5gB1OYvwCfEdzmH5wEp47YPD%2BtHhX4UHmGSKK2%2B48NrIod%2BDvtWv8KgwIpNV2%2FcMubijmLgeyP%2FvISey3dRNdw0C7jULzhKRrUqpJ2LKKNs%2B6J1l%2FsG7I%2Fbeu2wVdCM4zV4fZNUcqNQWDJCATbPI3hn9PFYkpHtmRHtPWTffUX1TkVAbasjCmyqzABjqkAQWLSQnpCZv%2FlSS3edebto1MIl0K7LuXm%2FP2sVCPninLL76NW1DbAN7wti2n%2FCBJQWukFFHw%2FXu9CQ1v%2Fxs08A5SdYnOSYcCJxu0CmfTagY%2FKltAt%2BTDHgdYayrgMnVV%2BNmggwfadCMdllzNuRjyqwOuBHINcniPSLYNRM4Ik7KvznrRFiIxTaHkGIO7fzGXI5V0qbqAAbn52DLGsv3HIq%2FtMxyr&X-Amz-Signature=32a62c6b505c382b06321e2e13af00615ec59004de50b35fe830267ba03d338a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
