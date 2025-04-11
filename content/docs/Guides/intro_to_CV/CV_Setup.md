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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E45MJW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDVHWgSQG%2F9nRUd7gULb3heIVjDGHU1zj88vb4K8y8RZwIgIvQC14hq6KkeB5di73awTqc8OasiQZ8wgjeT9peqfh4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXeiD5g9T4scmsE8SrcA0sYmGGP0n0Yl5H8Gc8rdO6usqe7wKJ4V3xZ5Kuk5MIOyhg9g1T8OblJ752%2FZ7dnAB8OYTP7bLmtL3s%2FrkQdsOJzg%2BSIZ16Frlbz%2BTNfByo%2F8zgt0U0ttqIPUz5DA65zY4e9L1aRl7gcWQx%2FackqNDWJEkG6iSJsaEEDWt0oIW15b%2Bf0cNzGeWm%2BzOxldE29WUahngkih8FhkymuzXFMnuUn3GvHEy8VE%2FFw%2BsHXG6qq%2FjFgnqBmKR1G1GXSV9tAXxqz8D%2BIDhxYe0gpC5J%2FZ5ljcUNJ2dhM19dlz79T2fo3vqGfQLM7fwLlDieR6yBtkiCPIQQrv7JRhynl5nQsBlmZJaqgbZK9lyUW%2FTe7Fk%2B7Nl98Lsiiz3bswiwc86t14LpfR9bEud8jw57DYXMaxv0Swfm6vkKplI2SvAMAUiiI39kqNULhn6LNrHRjHU6DPQWOmOo36Np2mZTbzR2lFzytROXIgnQnUNGbE9DqTY4soLz1PSTBMsQw02vJqtNDm2vPItAmBTO%2FMkcfag5xgjwI9mvakgLlSBzyL9c9XpcFXogZH8BpU5rLjamlxeUpp4ksAyKpREduxl51nQYBuRyqQLgdnxYWEPjfThU3CDxtQ%2BAzWd2zbtCBQ2sWMMWS4r8GOqUB20vXUh2hgXIhUverDIZ1xDcM60ltFnc3HLXuTg5WCawYOK%2FdnMQyZrzFikZAefvQqfGWV3Pi6joiEpYfm7Sn7Ppv5QXbQ8wRKYZUcJsqZq09UOWymLXLktOpXgs1PkuZTBKOvlk30Hl%2FyVC%2BXazDn6y%2BeakkPhpWilijbZfjq6Efb4j5Z8h0UCR7I0MDMhCPjBFhXK8qho0WUUXQNLP0Rmjrtmrf&X-Amz-Signature=c5f26be77a6b77ee15ccb855408c1a44e9ffd85163e0d3b9b16c90aa45a30d50&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGQJOYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCpqbhzmODfFLuBjQoimYmlaa5KLKNEHNsdz%2BeT96OeMQIhAJrVCTssaBGskbF2ncF4%2Biiv00ceE5kRIWrZQnwln0e4KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBkMHKQAjRdA2O8rwq3AN%2FlhcLyajG0xXq2wTUBr6hoXFhF3UC67hhsmFgVXLQXY4sznkaj56Dco8CTRIDmsvPoT29acrwRZ05cy%2BdR707kPaSWChK6w8mz2bJuR9psDGOs80At94Dli08zSNZ5ST%2BrPSWjuZEdmryno3UhmG8AjHtYf0v7e%2Fxsf7xz1tSj9YNCZc%2FhM3Mb15ysaFQ7zxJezAJykC7o%2Bu9Pu5JR6uZNRVG646F9NpmIEOsxdkbBjY5z55%2BpUMogBZGjZ83wzRSPiZTJ6Z9QYXc6EASGyJJNaYMN5DVtPxzsdJ3pMx%2BIsW3x%2FvUtAetvKhmmGIPN8%2FrQsb46QTz9NpGSDptqAZbEutz5Maau5C89CgJWCTGP7kaG6oNSFP7%2BunZq%2Fz46dyerFjiPdL28rIuzSTPG5sa%2FEZ8%2F4zCKh5DlFFTcKkEA2a66kFeTapU34ioMOTyTsuLroDasRGUKH%2Bt%2BRTgTG9OvJl2HNzoRnL9bDSCCfvFE7ZK2KUC4PbkfkXWmJkEPJPqNc3IfUeh8S6lbsP59Rf%2FmVaG8Ris6DJIN5mY0HrJlYFyhyJyltH2bdkfYyT6d89pljS2FAPDqhG2VraG1Ujj9X%2Bou9bHnZoSYUg02Lvj8W86%2BYX9GYG8r%2Fx%2F7jCik%2BK%2FBjqkAd66u2g6z3a8%2Fnyc4NyDpZpOd5Rm0zg0SwvpwnnpX7H7DsVybdiSVVPiXXXMSLqEyNWGal0S3WvQrWjjU1P80Xfu4VyeTq66NQ7vTx%2BrlAe4AeJuaDLqbsxrnenhIHZg%2BQZRCTntXcNHUMB%2FB1Hum5YVraHIGGdLZzKxhAIFRweo%2FIOXfhoTNnLpLI%2F5LebZCp6%2B2xog4vfe8vdWsSGfdWUqXceE&X-Amz-Signature=c50e2217eba9bde18067c5f5aafbb461dcc1f9a80d8baa9e491514371141caea&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
