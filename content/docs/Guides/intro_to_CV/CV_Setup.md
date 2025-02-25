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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YASECTOG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFDsf2hMmZa29IWBINI5kbmfiiwoc2v%2FlgXHWUI%2FAl%2BqAiEA8bLRFkN4MMrkkoov0%2FlLyrVS7MRIzDkM%2F0%2BW6yyEXmgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDI%2Fl%2BYoBYgpH8urx6ircAynfkBs4rV3c7jxE9RuFXcLB2KX8TuA9usnmsUQQ9FLAXbhH6367DF82d3hjpvz22CAoenayjpe4MLPCnDR33eblh6yajT7AthxexqHNZZwB6adeSHNj672z%2BTS2Hwk9MOniN%2B6N%2FsJRR%2FKgRruD%2F8Zm27QioxdDww1S6KUcP0ZGnD50S6Hu%2B1LUuvv9Du6DV7SQ%2FtWLiT4sxZ08ZycQKp4XxKi91vhozXzFmJrubP1pn9NXCz%2F%2F1jReDxtp3btyrczLSzvmcU9fxFyn%2FREGHl9Fqs3JA7ALMbxA%2Fd2dXNu7a3sv4ZqroQfGO8r9RMtpTNVrjGWmYwUfsFI3KXcMpryhgH5CfoE%2FQA3LAVcyYcEIDX32E%2FewH%2BP4FIOQj2UpuwxxTuV4ccdLXM%2FzAA5ZCpTb3BuImI1U7jPEIMoQ6szuCOKVIk1cp5q0Ir2K9UIBc2ruBK7vO2k6JF%2FOqXLt0leso43D5VENSZikehjHGjBGv3gK%2FOLyoIQTvIfuXF0h8ZGkvlj9BqPmekoWSBY2meOL8Jo%2F9287Tcy8xbC2w%2BCeGvuuR32Uxh29PC3D%2F%2Frft%2F6J7GI%2BeOoAgQs5NdCVxOU9VhxFrHny0roYtHorsQWVLSfyXq0V5ZS7XcFlMP3n9b0GOqUBdmb3ZWQWPCFdzZ44aD5YiLMNqfS%2Bepf%2BLvUNyhuyXnroDs2L6%2BLGywy5nv3wkg9AWlnKuimrzPM4ZnrrWzyGLEUO2EJ536n9FGdyk5fJ%2BfUGGF%2BaZPXtp1Fbgwz3bwyZyUcyvhM%2FLpfYEL2XpIwRWpVaCoIdhTviHbzUIJY5VyYCLC6EbDvvOFbsiFIFCCCW0MIyPRbet9W5iJWhCqVlCUFthswD&X-Amz-Signature=2961bf1a583838488db2fe4996948e3e3dde4bee30cc17e8e4258d6230bb4446&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQHEYLP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG%2FXQRDIHfkqomfg3LhAFffdwKm0cg1UgXyNVljP2YQ6AiB6ZOjm6BeDF4LtFhBF05%2Bq%2FnNb%2BnUUh8HzV6aw6lDMMyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMAIVWaPbBazilLmbrKtwDm%2B8fMX4fNUGqtbmE6z2P4HBGVz1EN3CG4waGMJndDThr7np1fVe8c0dUaLh9qm2TEDG4J10YVyf%2FgN9VUlazN4oTnJUEnhbIuxcAYj4BpeDl5AfIELvcPn%2FRUH5ldK1SXgow4jSJmV3FvDidMgoRA0ioyiSlq4eyyhW9XllCA3mb8vRMvS2U2PbflJQ4VfyKiLhR3C5nlxxaH9Li7Qg1DM4OY9rdZH%2F25m9hJmRpK%2BLDbe9lFbEsRif0%2BUipEzbHvYghclBTgadT2plGUnW7m8gcLUvsvwDeAlFCW3RbNE9weo5RyhrL%2FWjYDEt4bloULVyqbcm3a3Ej2CpqrVUIYPIiwWi3ngtM0gOpXpDifi70fMf2FTpyuwwEcGDOXri7SaciUTsUzqONoTMplHrDtbaiz7l4jxEYWdfL6d93q1oBy3xjYp7Y9anFECi4Y44F5Vyvfaz3PqXl%2BFI7Vzx4hUzLoNpSIQLx8vOoBFGk1VEpKxLRvoMt5vThcAgO7g6o0sLO8Xcdsh6tuZeV%2BKgAyER97nOvwWG4Lls%2F0EqtqebdyoIvwNTZ4AIopccNsVuPHfxouEP7DmEU%2FcwL5qZ9jlYbpaQRKha38%2Fduc6iMRhhsuxWN3p9094QRMBAw2%2Bj1vQY6pgGnjNEsMhpSR1Jk4VATQrSKrOWmp%2Fi8R3w%2BLSVhKBD3wFPOuJJ1OtZpRbnR3VTJpkGRxL75jOuUuXTPR6mbkklWISJQ%2BM2W7k1OP3s8A7cYoUAL47CayIUYYvjQl3UYBmhW7TTfxLhyXwHq2THw1mUpDlmSJvOFiaG5WJGBSBwpspFpefFr4LOPQS0iIRT59usctNwI4k2kbvm%2F7He3Mv5Lm36C0wOO&X-Amz-Signature=12417355809af98a53aeaf1d0093571474ac64d5da2db49bcd66d81e716f5e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
