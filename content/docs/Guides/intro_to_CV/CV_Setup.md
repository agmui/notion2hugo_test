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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWH7GWZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCMKWiELhqiEXfcx5Q87ilRg7H3BATybffxtyRbIBtQyAIhAJj9Two4exkToIqd1IR5II6auT7HFXAJhdkCrac5zJOHKv8DCD8QABoMNjM3NDIzMTgzODA1IgwPO7jiPOZSSYYivAoq3ANKHDKCNOxa0ldrewNmtQh%2FDdZoe9%2BPm4V0TbixjDFRgJcHhiK1BNkQ%2BX5nVQgzpYLHP0EFkAWT7MdN9J4rYWQDoql6llEj9OpLRFoW7PSDfCrZFrGq44w18osL7Z6EPBkoFYiZ0NYPY3ssa9yxQNkrMsZTlIuZ7y86WzgOGc4p2m%2BMS76E9uuZje9nWg5awqukPpblvj7lH3tPCDdwOJslxUBARbT3U1hvMyb0rZ5MZGHMGOF0PG6OByKPOrBgP0x9Wiv%2FZ5sDWg5q2325%2BU4r6SMLKMM9m%2BGZ3d5KeY8MB1PGpKLhdqT2lAgId%2FtKWJX5Y4AA5P7wQr50O87HLMd%2Fbijt8vH3KF6pHmRvKnOKolv06jRVi00o%2BSC55vaDGMLBRDfFZmjPQ3br69uf63bAz5n6iMEvIRxC3B25elmOAuy9eawd%2B9WhG8OGG86UaaPBam3bO0dHloXw2IfjnTwGeOaG0Jr2wxALu2Y0KhyfhqseqGSm2wPCcR1X7TWKrxSU17R0ZqegBhVrPAoPa9%2F5rSuuvAmrCrp4JNlEJwYZa5pvX1HwHnvDgamF5ERty%2BRX%2BXM%2F6oPrKPXtTLFIFhUWdtEPKZeWR9%2BmiSCFIhyO3W6dNxGw5qo3Z9EbgTCXu7nCBjqkAX5jU%2FkN9uc9gP8fOYWf8AvGQuNm26Heq1ht9snDr8LSpcsmLoXgxNSCpyRA2TGFIgrX4y4B9VaYP21d8Odyulw5mti%2F4eE59R4WJWI03luWAFwSqJoRE55hAbq24uHKK86gvs2HIV6F8m8sA%2FQKM4JJZ3YERyXyXVuTAikbKlSFO4435YTDf04VG9UtRALyn8QNr8gejDbbeGehsH%2FcyUr9eCcp&X-Amz-Signature=388549d34fb8f48b0d170b57755a0dca7175d3c6c0b69b5bedaf17be906c1a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJILQSA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFe88M55bVdc%2FYPjHEEr0ktf9ZishBJXVHsZPz7o%2FjvjAiEA2OWvABMADTYArKdw2BJQfV%2By%2Fuu%2BiVbauy%2Bwxj1O0owq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJKJ2E9YGwpU2xBH6SrcA3px0X4i4O9C7j%2FX%2BspwILhWj0WRmcxHLcs99mr4RIfqx2Z7Mw9Z2FaU7cU7Pyo0U7SguchLG701dtyPtmjFbjOuiv5zAUofRagWeMMrXrzbebnyMon4hcmSpbHWVineuOyzTt71RpvJxEkmyPVhzyApLTNPYHiR96xdiUnVL78rH1U8sDbU2do3umgXuPjxWf07ZpgkzxL1lFr%2F7n8xLu7utAAC7X4hWZfl3T9%2FRfPwnpb%2BHOJ83vzAEsmW0IVKYJgc3Dd4FjcmabiX0lYWjaVndCsNXQX%2BknjAlhejbX9jC9kCAQ0LBijRLMZ9aAFLN4S98JyDVv4vqfaCbHpL8%2FEo2Iv1PjLpOyYQp81AfLhwPcBc1G7tvY26VYeGMagGSTDDKoRVf%2BZzLamih%2F5Whw3JV42yrbwfG58Omdui8z%2FfUTgNNBvQyuc%2Br%2FEuYYrNLBnDTVtHn3OX%2F1NaoL6ECFFOvDCHxYXMqmFowlXxUrmUAe52URTs3QNswe5DqdIojfBghb8A6CEjLY4bqb12vQKrISkI%2Bpaeupq9sW6yTIcrK7IOZkhhDBVAlHLj4AYVHtBcsabVFXGuDoNqziBZEJMfgIjE%2FtB5qZAWf2rHJ9a0SVcdCIElr2agjVfeMKOtucIGOqUBt7r7N0dYBS9XthI%2BTEsoFVzIlpUf2A%2Blm1f%2FlL6EdFa2tn%2BQmJlB6dMw3z94qmXZa%2BUCwSa%2FLLOJvS6ANXLD85ZV3iNVL%2F0iRwC0683yVawarDKMehYEUjioGxgvYSvyhUUFyePSELyyuG0eSCUInLIhdUHpgxRQGcrAP21hPYlbNUF9L6pPiO5ONnLF7O0IcDVoWIWHQrlF6GkYXC%2FUp4wqRHbR&X-Amz-Signature=4ebaa1b5e5838716e3f3fb5e97d7ff0133b2dd8126f3c2e5ec6b4d4801019527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
