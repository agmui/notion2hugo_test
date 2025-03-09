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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4BJGMK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBqTbUeNdbcbOJZLW6E8jJnzgkiKowgLAM8UrO6bSKwpAiA5AfFDX%2FxQ8jvbfsTBCShxNELTznIp57ul%2FqoUgg0xRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGJ5Zhm8fj%2B2NCpm7KtwDmIei7WfTZ%2BpoewejurQG4LrNQNJUAGTN2WoCnPvo%2BrjAzaM0d3Z2m1ja6Eb1KyBVAhSVpdysMcKGn27TjFMHxTlek3N0eL2wtUiJVibQK0HvVibiZZ%2BmVci9akTDL%2B7uleU2RsfO%2B%2F%2B9EKsiPV7ENWmXw3srpiwwcB8opqro%2BeZljep4w5DluqxW1zzCGeXLr5n3OdENm%2BSfsYOVX%2BRjOWddSmJZkxHs9XYzfnCeCK5uq7BytF%2FpjiL3xADdZtAOlErweDRYsI3MhWySkTYOPQHpJeRmMrLN03M6AlC7iDs1pRjtT%2Bq31%2B0dmwYUitQAmNEbNrgX5LlDq6UAO7smFDwV3VfAwZWrGlbAEDsXhr42SF7SPVHh5Uo5v2KoeFD7U71i9dIzhGBVZl%2BXKknSAeARvmMCyC4iQjJyFxMPdpzb3K329NSzkm9nFcXM3I6JTIfJ5L4pG%2BpB8LjyxypoWdJD6p8bZSPJchMAm5qbTP9JmKmpb2HP3mwNrzSRVF3qFQV5i3urzPtk9CoOei30bpJSmNKOs8pmdjM6AQnk7YQoPc6eZfgLHZ5noyrw6Fmgi25khvMk8gdUcE0nmd5X%2BqiJH64iYrIZuiT1ukRlfU3hgdlqSjil8Lx0tbkwwYy2vgY6pgFyNkiR1YKsKsW2QYzCv%2B7k9BIIu2O4tHNlwhCltCVzyLK9uz624760NuLtcBa7GgV9weKZbHw6NKQoFqairceT7k1t6aUkUlNih6hc%2F7RFTVOTmBsQvT%2BJZ1qtzT4nzK1LPUqn4%2FMG%2F6c3WjjXfUyB2xu91acYXB65ki2Eho6BvLAgvXP6paJiPWmT0QTdA9h7UnXZ07HmSn2h3sZ7TPOvpXMkIU6h&X-Amz-Signature=58b172f41b591ee5651fa56b268f594de556510061e68ded58cdb3f312be6ced&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQP6KDUM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBK1giY7hZTbhjaclR%2B49Pa6kFXCsz6jra4xCxHHMJEtAiEAlIb%2Fpfax%2Fba%2FnBaZAUVEQugOVcdyAb%2Fj07iLSPx6%2Fu4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBTZtEeoUKC8gC8n6yrcA3wvOp4e1LAOclLOQCpP5NfV2VZ16CZtYOWx0YEgUp%2FEF1NKZLQw5ZUfGr1tLJEy0PuDRmTuVnER0HPiBNIluxoPJIQNZAc7btgO3TlT5GW5Yf6glt%2B4CnjMTA8EgL%2BysuqLjpvMHA35soFVbCjParrC1cSHMblTmO6Y5UKaV2ZEFsSGND9tZNf20Vs3fdP0QNP5d0iGK%2Bd8UdMYNUprYvpwDmORKE9nBODo%2BnFsiYADAx9rsj6JpgAOJyWpZm%2BBHLh8yKih9VmZMHVqy%2F%2BIFql7V%2BsqULN5%2FYkomtwxGhooXrYe3KJaDnZMgt88FB%2FVlXOnjSXsT2u%2FxgXkvMxFoLwk2PdmSHK9Q%2Fic0PAYnLMVCIRmomvdquqfBet8K6BloieWyG5q1ou25V481lnCkzqJq9OGNtYBc0ehXo3o5bqfLy7dg1DO5k1JCxFXK0Atx7oOGyfAPRXVokEsjNksW6EpVR%2BftVOuRWZzTo0Ofxl%2B3q9BI1nwN2DgSfCEyAX%2BRmHXb%2FQc0hNk7Xa%2BshE%2F61brzKCCkF%2FtVRjOjkXa43WZTZ12bdUfkupQAEMfmGOgNw6WoB5zVWOb5pReJ3Pz1vIiopIHVFKZfHVwZQOZayGB0O8UQqNWeoaIRnghMNyKtr4GOqUBjyTU7TVZwzk0c2f0ox%2FPUCCWimwrTI6m4m66EFTfxyxTbyTqJF3mFJ6RUqXBvuAkk0tIpnHkAt6o3M9tf7R5ZC8Mln%2BZShFYshtXRQTw6wmyzDRfXNB%2F%2BLlBmusGBaQKu1d2p31AFbR%2BMIzWKQtQE4%2BZFspY42bZuehowcn7h7NIRX3Utz9fOdkC0kKLKAWBLkIuBgFzPQlvKweo2hWx0WfoJYYI&X-Amz-Signature=97971c8f98d7bd8502b75ebb78046f7e7036c5d24db3160bc460f72bbb9d57ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
