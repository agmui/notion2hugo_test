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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM7BC2S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtXIoC5My60T3EmFpL2guNR51lk50YJ2aXoJCtWi1KkAiEAwpxNGb2nRGcS01%2F8sDlAq1WKTsS6rLJdAmHgfvXs0QEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFCFpoDsZ5fiIojSFSrcAyYrtljlZkDs0FQPHD2nJ7RK%2FgAe%2BSX%2BW2X98YkT5WS9U%2B%2FSd95pjEgg1t7eKgaV08tzj4YK0yWVw7jknNX%2FhpNtHN%2Bt8f5V7yYLDf6D6UdhxkWLnARzeigoJdUQBceGUehPHc4h7McCfljzviA6D7Hxx5iZYdO5Y4RotCfW%2BsLAYE2ai5WENDpK%2Fa0GS9lmv%2F3SNjqwA%2FjpAd0LYBWEFWTeEQEX08oJcNgd9NREml94Mllq4SCX2EEBoVMHAnqUdEsDV4h99V1COxP5mgKTSg0JGmgwacRdfiiJxYRr1ytK3gVj8xJUSsT9ui6mEuW78f2o9QU6gqORVmbLgGOoVHiQQWhLlcSODz0jtBmja31R%2BAuYyM1htvrM6u3TOiS2dN0T4mr8eioNrJVdzpC1TMv2Q9Vv7IvW42J1%2Fq4b7X%2BhXwA12aoWJwN9jtctKm3RhVysXDdPsdMJhd%2BxO12Q9HgfJhkZvdaQ%2FrE9FNfW59LOKpdcZIRLnUwmiRY9M4PEUvSUW4fsXIAed3yMuzNdIKzEGrVVDRLEDbOTcg15gMPNJsqfg4On8CuTJiVLE3wO0V0Wu3ON6BAFa60xFer5AQFjbKeNAUj5HfZ0MPaM%2BTz1LIKYh3t6BFDoKjXeMPWeyr8GOqUBzQ2nFxoQU3S3r223pKr6ozfFejev4mV45Uqwilo7vRehsfjcQVPdg1qIa9KAbPivfrqgSBvM%2BuEWuOJnQwLaKhZUyFb3%2Bn7BOjObbGF4r44t%2BCqg%2BJReeoWYdsbiaQrjL70zjesA%2FDQUDu1d23d5aTDaaql0wMPkrvFC5Ixke9%2ByHSVi77x2nCw2lWR8rad1b87HywukHwmLStL0B4VHE5ifPMm8&X-Amz-Signature=d1b790e3be0a89e4b674ab284448bf92e0d40a681bed35a230c55162b857431d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46DZPN6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwSuBC2cdPkxz8GrHCIgvNR4pJbNrUHP2FEOAhUq10eAiAtGwzc9qXP%2B9wFAvFcPVi%2BmAYB%2B3bQ1d35OLg2pLrdASr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMvCW%2FdzEvU4TTJmyPKtwDmaP%2BRwj%2FtfbilONZd9HBpob8DcfYtrpTBO824AtGYEywX3LTAIfEmVnbrEgNLK3nXkCHVv9nbq8MI64z1vnYFqujXcNLAHvBnViHEkVHN3PNkPbi5cMcnQxeLmhd9napfXZUjPDbZy5WasvosC%2F7bI3qRcL0bXk3x%2BxcvTKzFgaom5WFf2BlZxRT7Ku9NeRiuDiolXgiFSnAM3pkXQkseNiHoG9vv6xdwdQ0iMMu1lOo5lLxuDjzyy7NQndumEFgzq7iF6NFOub%2B%2FXtJOFkWXivYWGLauH%2BwApH3VxS0hFca9hDwAd5SOYs%2B73V7PSvDWgiumKEhWJGaYsqoifd%2FtPEPQbnF01UX%2BZ9vwtHUX0dfH1cTtGkxkNFfUAOEIxCZEQLkYywlcFDM2aAK8WgGFBi9F3rq3hBVyIonNXW38%2BbScFEn4bAiu7aUikkd7cU3hhhaDCQhkjAwuW5xxPe7G1CzC6G%2Ft5x0UWzM7uTqoRODU5eXjebjdt34BB8nvwOEAYPat7zzXVvRN%2Bqt9uN%2F0FNn%2BgDrn4Lnce9CCaQ2iexUqkEPHNGsChnILhbaq31ZHyfedc%2BW5bP0zLiyZCi3pCblFTfTANFhqFF1p36Zz69s%2BLFi%2BynPiuKLzhIw4J%2FKvwY6pgEdws9WaJTsshi%2Bfi8SwKMNiRO4GG%2FNBFt9rUEVcNQw%2F2ueRGp%2FptRr%2FT4%2Bnxq%2BymQhJEUnioBklR9ITyQGX9TLfgO8PAvPrUMSbYIQi0OkAo7o56QVtBbMXC3yLDLPLhb00RGIBgG3MszAtB7Dn8CD2%2BjJKKM%2BkYh1nd7XAEXqmxtEFnld8Qf4Y2Re50xYKtbXoy55X1VWILnDoiOCa6fncttQeyh7&X-Amz-Signature=ebed547cce22d4f50cac4acbd71c66ab537249751de0429bfd16f46ed4b3ba31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
