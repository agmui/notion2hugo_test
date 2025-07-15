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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5EZCQD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVNNGwQDMwZTs8WqSSlfViHdjKEKUti8Jh9YI81uMFcwIhAJ8oN3OurR3R7eJ3PxdZ0rwMMVJHZio%2BEHE6LXMLaIQ2Kv8DCEoQABoMNjM3NDIzMTgzODA1Igws3FgKDCGMnpMKrv0q3ANGL5vx6SNx4k41T7VgRtOZJxgflfCXZNqGXifcmTQbNVJLoB9pal%2FOp8%2BWIA36U4iCSlKAOY8dHneOicwwlmLzP88%2FfYB8NI3bUr3G%2FQIoczp8tbgouJ%2BGjFIGSB%2FTAsUpFaIvrTdMd5C8euLczSHJDp1bigysxxhV2Caj1IxJ%2Fk5XRkZovpl%2FtBRA%2BnxQcGLJ3yrCNFimB2drbXCAest9AxKsHqyX9x6%2BhIUmtrPDTQo1CvdcDsWcSggI6HBWNlMZ53HWFn3RsFdA0Cy0HF%2FeHGZA7XFkLOAoqSNPWYyVXPdD9JBNDj809PYAPLA%2FZD%2BsShYg6W5%2Foov7Nn%2BPDO5LVB7EMKW8UaJRIYjyQ8PzQH%2FT8WGNC5OCsFc87xdtNZvmEN8MT9y40gsv%2FvzAfeu65gEGHqIFRprSus0McvFLqd8Mm%2FGN8EEPogIdawV2MpeTNuNcASfcTja9zNvVPUFqD8OYItuJDWA4QrC4pK5H1cbWhN8OS%2Bdzk2x5VdVW9Q5OMkx%2BGuYWCZKeAlNJBgncRaFINdBHUDR%2Fpje4w%2BxVGqZpWd1esHPHigMH5zHI3HY%2FfDoU2OFtNvPsEcvTeTfrH%2Bdrvzqa9ELjauVrrnFVuahU7s4Qwju2OUwU1zD3htrDBjqkAcyaoZenecIP9d%2BHY4McI0NEW3TYmEjW%2FwWIgPwQlP0hEO3EC8BYibsHxXGa8nS3wjcr7tyzx256W2NaobqVPr9JWDHZqGLPpTUy2m%2BRIPiWRgm7G7bx9cVLNcRcxy1QSuzACOoU1WzliuW%2FXJqHfrMKZrneW%2FWVIG6TMGjbOro51HttrDp5vR3qtZB3LjdY2NXqn2lqngFl41J09%2FR8QNJyuhzd&X-Amz-Signature=878ab0ba797a2372869fb608388fd8f7fc4a400b57db4e96c0165820f4c5115b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY4RJRQB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC47eertJI5eO56trPU6BYX3LXZSkgNrp0nzPL3yQPkQgIhAOx0ARIHyYlGTuHTSrKWXnx%2BGPWZMm3l9XG1q%2B2QRwBeKv8DCEoQABoMNjM3NDIzMTgzODA1Igx3vlkgcBB%2Bgi%2BDoSgq3AMrUm3Xnv14tzIxAm70KT%2BCGQliRcBvvcL%2FrNrpa0fwTs6VZ6dBx5hPiwkXBgEpT%2BPmspPN9x9RITzFPHpotR9u24jMu4kgdmltuJ89t4t1IpIcHallkBJ0Xp%2Feehm2EYweUr4nfE3wv3q8MBe8tJq33%2B6e0Za6MksYLEx8Ndne%2FdbC2XtGFrUohXQ9pMXpUwWyxRmEkUYzG%2FQnyWJruV0a%2BAmglPqo%2BKzsP%2BIyyymUc5uaHnsm0ovtSiq15vj6r7Axem36BsJS1rNCQXwZ9AQd067iYYEdmFeZ6m2cWf9neBRu5xzwyteZgGMzuvCw%2BNsHZ%2B6sRuoXp2deNibHJJz3Fh1a0oGAv5tSyF8snL3GAqw6Hd3ivw7KPJMSHyRxUy0CTKGgpPif0S5iqPlf62VYF%2BUFUPaA19bxoPtA7gYn5pa4dOgluIZV1%2BJSrHj20Sy87%2FmnTgc9s30RHunI8RgZJRUfOq5UB30bXBH3Lv0FjYWGHySIDnsFxZU2UwMTBbqS60RTOTjQXAia46TFKFp9NAWANkUwITBlOeX3QTHllThrmhBpHG3RxEM0uNAuixwN6FDVYHoQrPhMyAta7gNDkRNjWA68t2vYh%2B4F1kcyYtw1w0DgKPa2xIHEdjCchtrDBjqkAX98R7bKsQUNYEwmXiwaPsTyFa1uriK%2BXNRjeFpNBcIPPUV1v%2BX%2Bu7hhbZE2pPRMxb2ykW%2BrTasaWoPZGhWclAps4S8lPnviFh72m2iuy%2Fdv%2B%2F5jE6cbbE%2B9v9nQ5PBazyDsYEu%2BZ%2Fq20uQnG9ZWUMvF90l2vxuOyuQHhFv8%2FdkKb0GXLM%2ByL%2FytbXEuxDhatcGpGagrU4rIkGGUL5ye6BkWc5iq&X-Amz-Signature=0ad78fae62ec836a43ea0563c0a0bebd4fe6969630cece11fb20993d60282af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
