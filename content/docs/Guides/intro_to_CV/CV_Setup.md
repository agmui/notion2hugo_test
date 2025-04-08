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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEOZ3AU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICIOpp6LHwoD57rQoNBdzugTJw7zVcYBrgSLjua4GLl8AiEAvtbxufrD9IBE244sdD9UZiiWYknua%2BhsdPYeeRFqMPwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBaxCfsE2yh7k1uA1CrcA90NrXrIalYwLEgPOB%2BA9DnlIDjNp3jHkgFiy7Lyast52xPbwX91ZCTDiqJfSk96i8VZkBVtItxSmaCVTwLngxMO0k1NuHF36tUp51RLd%2BSsvm3nu7VoDLW81yMVlORVLtye%2BGrP%2BGCdSR4yDkahg5K4GQ4cisgo1XVviLI1KieSuJcQ1UpFLVuEQ3tr0%2Bnu5zAc%2FJFIwVIk90R64Ec1cq4EEinS%2FoPBBI6haCXfLV7XDpXcw0ZqTq%2FvEIu2CgOfv%2BusOagt1TMm4Uy3%2BAz%2FjGDSL6FK7Ja1%2FVUk%2FK2dUfgiP8YK%2Bu5We4y2T9FMn7y5w0fPVB3McJ3ofqNrG8fxivU%2BEQcNcK%2F02Rku561oTX6Z0gIbBKO%2Bzz4D3Uh2mmU6PBmx0naUXaMfOuRpDhPWl5tP8O4XObLcXoQKkdj3pt6Y%2F8zyDQPsIAsyrTLo%2BpCdurbTBh8EvpjB4MUVdZoV6Y4Sz0bNmeB%2Bl5sHJiow5pV6HxMq7LY5e2tqXYe6WaSfahPYr0P0DRDB0Q5f2WCihvD%2F85C5rSTahoKKsFCuQQECQxkDOSmu4zMPKDj65WYZu%2FB1AAz58oNicF2LE8hNtZxhDBJ17zMjUoAf6Irxyh75oAyiGG60GBwpXjKPMPeh1b8GOqUBagfkAXWyM%2FZkd54wT%2BdwOrhUJESw1GQYg5PhIG%2BGydxC8Uy6qc30uyOrlX%2BuJb51KhlUOG785R%2FKZEofvU7gCJ%2BBWnMQmpS%2FuDz2rkWBY6NAKcgazlno0PKfjdCf1WrbKoc3jLjs1awEz6%2FIc2YdgDSSsfJ2KxQTi%2FmBCdm8j2wjGYC5fkmzuJbu7UuycRmghbms9SJqMJtL%2BNQlXDZDjnBLzfkz&X-Amz-Signature=188b982f95c7a0e9a229b3fd95c7f4b8df95ca0945e410c4fad9b8599ed52a37&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHXRSMC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIASl4ewgO1cnOtGFZuKIvgZk3teQ8qyQnuXzMAll8LTrAiEAu%2BnfWUB0uMtj5I6UcQ8JGylQ2jkFBJYN8uV9%2Bes4rlEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBYaC14OMqhXLpDSEyrcA4GmUXuwxgNLRfrSv2CEIwo1ZQy7ByR9CgoxwhkROd1jcrMwwwzC%2B93Lm6223ClsJnumUkSvCjPJ2nwPU%2FVTTa8J7TZCEKa4iMSbj7ji17yGWJ1mlqwLFkLEnrbGShk1C5%2BjSc7iUNZCed%2BeKkV5PeSHFJc97u0ppWGF5jL4dMXyWeJDw7RvgA6HzUauRxnKicDnr%2BcLUiVGJZe0w%2FtSms3x4RT2%2FGEd9jI7D%2B5OhbDZVD5%2BHAwA4w6nvs%2Bhjrggta8%2B1UBC7YkK1%2B4D%2Bsrto%2FoZVrPiG0aebzFQPSzgyQ8XLqmNH3kcB7jvUANhRp3fzPJzGwsXO3lcnKzBulFPribC4dXNowyvj%2BXkTJzGEA0ue3wYkvqDlYBGPJV35r1fIYkPyrXMi7xcUF8B1GCO9WOEtWZ9kKpLev9u5EZ4nDK5fwx1esrgoQ1LNlP83NQppucaty4kWCITocUaF9zoj%2Bpyv92S5Ln%2BirzrcGdWCE7%2FSTdw5a6taPLAHGIQdjwCZgTGXAlcZF3sR9AaQFbx7vjyDMfi5DAwrw8sKzrHe9fIhzDmU%2BaDScm7NSBBkxZQbV3cx5TM%2BN3eQc3lbi0HOVYfn0C7iIbvnYultlJfAwcKl8%2BuZhQak%2FrqcpPBMIOh1b8GOqUBLCbWl%2B3dNbBwQ%2Fqc461bDA%2F1geugZnrRpv8%2FU7PZQIKQHvU3CUGSp8puAFfs7YK1q40Fcg1S%2BMZEA%2FznL62wbctUI0IrMZLcE7SZXO9JbnjXxISShiaI5Vni2ja0I2FeKXTtIe%2F3aMGcsdkxnnizNQnBVI44od11P07tHLx0U3%2FTh2kbs3GIFmEH6W3lIH2wRCEeH7Mhrawcb1pw3Hgci0lMp9ad&X-Amz-Signature=1b615302566fafacebe3baf79efb8fc5d0016d9f53244491a520590e355eb947&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
