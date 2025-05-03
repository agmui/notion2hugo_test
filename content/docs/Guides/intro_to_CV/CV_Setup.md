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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5FPOVU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAu1vKRn%2FwlEEkXf4QNaS3lzh1%2FqhtSQ3n7w4%2BDHmfupAiBLmStCOYckkZ%2BISkpGu6JVqql%2F5qr%2BZ00w79aBS6cVHCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP6O7MHc%2F9460u8kUKtwDGRdCRP7uD3RiRGBFwKvuPl1lfV7WteG9kB51Rn2H981DYRpOxkGHOmDLBRRynjJp635R0xarAKkqujh0v8tfUbOwL3AnT5BLqMUdmaT73wMgcmTuY8qzvtZsQAPTpqA%2FTNOaEKZEoKtkYH1a%2F1Rq7l9U%2FnJqCTWP4V3iOkBC5oFZF8gEkfu2zAJkXTLzkd2aoJXmVvIMQHSJfbFZ%2F0m2VFA9cnZdxwfrSRGSvl2WwAgKZikKfRkwxmQaQnH9SnCyCHS%2Fy7kRb19VSTWl8%2F6BGWkASI8OiPrLwrsU1CbQXHeaLFIGcGya5OHKa4209JJxvaaE4ef4KGmZ3b11hX6mchMXtbQd8HLr8SC5utHYWP%2BmG%2BPXUYA8KCVIx7hcx2kB56JTBj%2BazH%2FlcJ%2F17LiU4cnF%2FscysROkCWUbzreuJikddJRUya1%2Flb%2FnQSiW8%2FOfFABat5BbGxnE7tt%2FzhE082%2FS0I8odqNXEGsvhMPC7fpbXi0G9%2FVmUclCY%2F1Ic1hW5QyeiDbr32sM%2FaYBzgmDQBQj7btKiCstR0et5LCx6dG8RMLElPGXuDbLdrYXasP7kg6TL3jfQ0SF0Teic%2FOc2jBU%2BrPib7AQSqm2efPjeN3D7owHHhQSrNRUFBMw2bPawAY6pgGaKVULs1njBI9Glrhwr90OtHU8dP9q%2BvtSosyWPlLd5JWL1ndTh1I6GcxX5iPgpywj2eqq1c7DtU%2BSlY3A9nYF5xjAN35rIr%2FSYh3h0uuwpLMH6%2B1g7w7BfdxXgEfpjrfx6hCG2gLHkjuyTd2zGJ3Qck8WLndPNLSsN8TF9JGAW%2FJH8auBh4f6P0BHsp9Zokgaa3mFd9artSdYAiFp7bpS0Ntusgzg&X-Amz-Signature=a2daf5b34c8c37b47321766a2b9a73ac5b039519befe58785fec484107f5906f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6ZCVLN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFksJoB1fIUMYe%2F4jCiDkI1w3ohv%2FpL33D8Z%2BSZcRxAiAiEAlQRdmhl2YYddJde%2Br2giMktNxdUsiFuA6CbUSOgxqU4qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGcSW51X0Qc9eQERircA7cDW9FjzZB4Ru6Hy4N6GNchpB0SbyPzBMd6Z037QxWcduhz9QtOzuv6mE7fvZzEB38bIHrV5EwB7zUiUu6J%2Fp6KDflPzuIWcwTAXusC7MMaOedm8X7zGHEV5EILyK5QX78cQ7r2%2FjIpoiamyjcBWOa%2B483Luq8vxZc%2BLl6rx%2FtciWFbPBIQ5w%2FDnZ%2FzkNeguUnukNPupehBVczdvvnr8R35xvhSoga1Tq5Tt6q7RXbgW%2BxbFmzauucOh5VgF0fh0r8cN9RVNC3QsyB1rI2E%2FOoBoPMkErYIjfOnprbO4RO4%2FDa%2FoXNfw8XnTqYQY7dsuhIA6T1ocJlhGIEoae8sXBVadGnJRW0%2BGpJhXC6cyJDfUqAsCCxeohb4FzK8GnU4IT0xutiauLkNWvJkVOCO%2BZ38r0ouoV6zO0lVdlOqiVWH2StZM5vVpD9zVVNJolEtCKciDScq8NoF7RfuhQeU9mUp0LI7pt79vrSkZ1p2s6BpuK9hOlCLqugeGFDsn0WZiup9aaquFoN%2FVyMdY6SljqGUNTQVwIXvUPtY2gaqzaT3uA2mezZ9iZvMU%2FKKG%2BQLduArCAxDz%2F%2F8uwCzV7ST5RghhyUk0G7%2FpnYt1%2BtP87f7eVTClokIuB3gZ3XdMPSz2sAGOqUB2dYVP%2FIzzGW7xh%2F3AmmKNXpWs%2BEby110UjRD4vZMCB6WOV8VBkzZ5R17PjN6c07CeNQhkjC9KPob78mIfiNyQCH71m6yhBy5xG91ku9K9PUftUbzfJyWKndEQvxyIV5PE5vf%2BW5XM2HfFPku4muSGPiEOP4if%2BRLmBLcINeC2HuxEHZHiFKj8d7NseczzDK82sMHFBitrwvMj2uxKGIJfJLEgmlm&X-Amz-Signature=131c1486fbefb5b8b57df71d87490d96a769c7606d1ea886dc70d28cd480f139&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
