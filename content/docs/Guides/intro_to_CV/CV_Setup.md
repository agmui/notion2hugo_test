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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OECIFVF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuv6uZh%2BA1OLqgWRiEKNBjJ024dCWAE6ocbsjsMsKuaAiAs33RA%2B9WjjgDSGr0IlqN%2F2KZZtA%2BFU%2BOaduFxJLrszyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMnq%2FWxw6GqnxpkYQ9KtwDLlw6OirBFiQdU9Q6S9Hf%2BCwM2SA6hd9QyA1dFx2MzHITW5mk7is%2FeNoM00iuIbn8VmfcFG1MzUoiFaHE%2Bepf9pR1SjD8UXNllpk2C4ikqwNwCVksARMPTM1%2Bi3SmXVeVyk5BgdOGUDQFsl%2F1s5x3vOLEOo5eXhZi%2BYQhAk8JYUa3eH5aisxHeyJqy15tTMuLlHirpFeMIIbzl5OMAj8S7EdRyRvjKkOB2nbQYhW7EjRdrE%2BZAtKMj1TLY4EfQbMqZ1R31OfbaAySVH%2BZ7TUbQIyMZKn6kQtkemCNN8%2FNKQp%2FF%2FSB4MRLPXVD%2Br2XZj4RwDD9LIr69lGKXecVMLAQzZ%2F%2B4HJ%2F9TNVVNivoru6tZKYqC60kiyzf91Rmnf6lg1I6P7jGIqSrBs%2FjwGZhaNr4yty3Y2%2Fz4NQdwCX0XBDE7sTsCrSFhSGGIkzLFQgQL%2FNND7cW8HYmwI%2FR7ts2XdqNnaWvVr53lYD5FcEQsbbbqovLsg%2FcR0YAKVDzDPJdH5AGfXsWETvMpslI9ccQOyAWYLTO6gBBiYZ7nSgoOCliEfap0ecPExejhN8K04q8cuU%2FBLGR4kphOuSVerRHzENhO%2FMjTwEJpWQ8quQG0Ixj54BqHcucuCew9UFGIYw9rXMvwY6pgErnqojqqqywESexR8DQ77kR26h9WTG7qVq%2BfMQ14eJQwFHm3EY%2B3S%2BTNlC8omJGvN7i1x93iHVkim5de5BVAireF2XBF%2ByZ1n5jY4F%2FlPF2BwRYp3qH7wQ67rk7jEWCK%2BhXTn%2F1hcOcbh9O9R0QejMd2tDEYDyF6mviiZ9cqqNB51AewgVvIhPnEIRZR2PCBvysRwSGTxFz4Cwr8GqjLo%2BbrCjwPHJ&X-Amz-Signature=0b769f6115a8b433ded734a6e258160ef5840028ee62c2d58c72a4cd098b3f41&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6AFOPZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgS8llevjyjRa4DSCX4K2ZyWtYKrtHkGKVssZ3RhGnWQIhAL15fxLk%2FY5UP7MsG8fmGkNpzutqanMZwxepzEYNd%2BROKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOYiEv3ih56y%2BHC74q3AP04V6oW2AIaC6OOLyvIS4%2F1X6vSvqb%2BopVk2YkBlHvXzMOe86QNDX428ZTGAY4fgJABWaQ3ddoh%2BeYvsfSanqNsMCUHYI8F197vZD0xACZJ0nt6iq6gnYd8kMkVE2qeq2yA7OImKECPRyw%2FiGjy64TRFaLF9wZumTIFgQAeqRnImMF9kFAPPq3NIjL6viaBBtNE6P50MVQWVlF4i6%2FGcHhUY38mfbThLTEnQEeveBLMU8IOistOF5uDM2S0YneLNSCjGNA16L4U3FhydZM%2B4Mr8scGKjKfccaGQ04tFSIDyqPpKND6O0xdeWNaxUdbw80hSXLom7c2mSyY8p5ka1g094kzHwsU49P9TRnSheZ1az158BXBNsnpHkHVjW%2FV%2BOyaQXV9nBZS9jluCfbQPPccFMkTdVJei9pv75GikCIamYPa7S1oapV7xePZmQfVeRXVnWRM3Msj5S8Ok7c95vta2Vu1RvRLa5ul2yYpUGbvamMka3X9sdNhbtqCO2vcq3CnYBqMFg%2Bc1z5NRlVZyWt2ta7JAO6faxfDkHmlNFwHa85svp4DnrihqboLDFykKAbC6U%2BZiqbemnngAuRftj8F4Lge%2F4OJ8HDeBaiIn2uQsB9griCZZBuzceOI8TC7tMy%2FBjqkAVreYJ7tFAABoZ21s1o2DKIaTBx1fBcGvaydA6HCNjhSEhfsG2ltSKVVzNtvuhVcKeQbSATqThjZuga2XDaRfLcgiunFEObDZszOtD8LxxtF%2FKJjp0SHE8MzMfZ3hYMTTtitHTxOIixjFHDa9qPCu1zhf%2Fkeitk7Ktr1ySEZQ%2B7cM3aMBSjAk%2FMlziVMtj4%2FX5hgZNlArTlRkb8QN3N8Kw104yqI&X-Amz-Signature=9e68462792f0335f4873ec1a0bfe98c4fba4e8d23c6b79bb3153ee6e544093e1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
