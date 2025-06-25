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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVB2OHT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIB%2B2OlJZs8ucOXWu2rZC7xr9yx3HurFr6ATL5vWRPcxNAiEAn3iWj%2Bejntk%2Bq%2BstKxdfEkkBRSbjX1FcGhpGaEl89fEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGJfYAz8ZBDrbIbk8SrcA30XFaiFzyYtL8mj6fSFx%2FnlGF7FT8WIabDmD20Th1xuoBxLYC0L4OtVM%2FtyYslG7V8SyEiIDgDBS3Tcq5J%2F9vmLvrBCjh5ArC8F1fTh2Lug5beEWiuH49hpIXOluk%2F1DpqaTkNiTY%2FUXe3Af9Edsr3nPjSlKRxeox9AhJBNd7YQ2SJ2vInyDmnuW5LVjqgR5uoYYJaBwLYlRRp%2F8RWj8dMLtBxgbQSEexRw55oGMllgMQhzJFfbz2RVQwoJKImLMH0XrbfxKYLac18oUEhVGeh2JudhNR8WSGGYUwLU5WL2TAoXS9KAEM9o7PsYGuhOjRD%2FUTqLQ3KfTwJfqYG9nf0QJg8SqbJ4Ypx6%2FIgH8KeDD9BRbJmhzwotTAy1gJ62eGXWPGyw0W6U3gSnJk4u22SxxANOnqFCbDHCmTkM6ib%2BDoVDuTpb005TnF2VSz1zZwARJWBz4OPon5drOZIu64peVkzysqwto7CCfSr9pI9h5o1WK7iEXhEb1Nfp5wvg7WqPW6FYX9qNFqCIahjZENP7UOGQMNAw1vUVAeALXV1sVpyZHq2ESs0%2FFrSVy%2BPzSNKaprOfc17MUkzOJ4NsQLjazTVCPIyJ3XJ9hQPCQ8yBWhUEaTn%2BwDJk2w7oMLPg8MIGOqUBUEGWtl3rcVQtJjQPNvOsQ%2B%2F%2Fir5hqma98IvaIt0FFitb3HnhN9aPFwdya18fYl3ndSUsNHPJy24iX6PWa3EAk9j93iZe%2BPqGuy5tF6xojVPS6COmivV9L9KRYLue%2FXXoPbjjwOop7A3rPotmnr4badVtplS89oGs1Coli8tsJN%2F%2FCH3LcXgvpkw5%2FvwX7WNe5AHZy11svQauWS7cMcMCMXsZZxy0&X-Amz-Signature=ad27f80605d371e6a6fcae73b7002b3d7dde4916169e1ebe5b60e7ef73d8c17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEPNF4ZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDP%2BChYliEu2twLjnuJeU%2FNy5i%2FfUfUbXe8nZkYWXM6sgIgT5Lh9lHVmZnQCu0aVDDSQXe08y0PyU%2Fb3ViA5Fquvykq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMiXgENuyZnf7yIrvyrcA8WyHPWTAc%2FdWd3vyaytsrNol%2FGYTDseb2t1PWFazcnhb5tBH1dLJqk17fqDgy1xD9BAlW5uSKobhoQrCKmCNFJp9E6lszEN2cDeaSLl7S0Ifnj2qWwxbCt1m4Dey2FkuMOKTx4b%2B16iNa7jOFbY18LaWQTGxM3Q4uhancIxyfyv6A6BEDVeuWcI77I2pGR8Ial4RUSCjG7YXMs7NVfDwooutTWcGFwG9IUyYHRTUO6za34UgTtBLy1rk4%2FrSvNwxlfuSawg3ztq8I%2B2roWf3cRGHbFquhmRLLy2Wkf7Z7YoacIjkOlLSQqAWWhgUysbZ4RCEnLewPNwC%2BMypHTxxE%2BKuYVCQP9%2Bt3rWEvIVVEOUXn7cB8aHhkItl0IcvbQ9%2Fby0ZKx3xE5uPN5b4TTq0a1a37S9rd6moUOcXFomoUvjDFSuBoHDgYJhVYRprGJRgJVeAAjxX37b9NelB61FR2QTrJOZdiZK7tE58rK5URPNe8KqReG3XaNVFftV4O4PMfXMEScopfK0Tp5TBISDceA2PhWNJrrAWLf3j7QhP7BgcNadO2Hr9Jtk8206YFXbWvRJ88Vf4rgAKTsUpNIfKASfBGFiLgDN1XTeuy4HthZBevl39sWpBc%2Fcwe8eMILh8MIGOqUBpHbYHkMQRqVuP9ACVvo9WchPv6CRlhZbQ0wS1A%2Fs8lfJf0p%2BUrwmFK%2Fg%2FITOrfmdro56fVgSuwkRVi%2FR3z8Dz7z%2FDG%2FBh%2F1L6e2F8Is0PYzZmADzIzggT5HK5xS3rYK%2BapvVr%2FRLgmPXvjcXvlD6bK4Gw%2BiMD8GCcRA7JU1bgf7ew%2BWfksJwd9uAA%2BY1fs44G7GaGJexEuEJzb3gYDDokXorT49J&X-Amz-Signature=10a890fc204e1faedaeab4cb9a405786e7cb0c2e566bbaae1e294f9adc627559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
