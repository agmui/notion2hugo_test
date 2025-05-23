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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4CBKIR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFkspjUxPpojAQR3anlorgmd1CVzrAVuYGZWTHBgg975AiBVpjINJPiUcFk6JkuAn3LfnEF3DvnyXKTcESwBahSJWSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNv597PUNhzeEMQAKtwDi35dt6wNppgGzPkDnHg8poclNvtFX3OdoTZoKFnx7f6tCT802YMFCVzbzRWBWBfmduai1Y9ckAwWV6JOTAjJpFJ180oXM9vQF%2Frl7ad15IgtqFCk%2Bc9Z6Vm87FiN0HLpt0uLNpgHh%2BR45ku3gHOvTt5xOFTTMaor%2BZOlSdaT3qcWM7R6ohTU1R%2BdXgqIX9I9q9%2FdzXBg2gcE4TEjsMSmjDPLoRPl5EyIBBD0chew5KJOzVeUf91wlok6vMf6eZWN%2FyN2%2FMZoaZHZkChs1%2F6b4amKx%2Fpi85goEM5gaEXanAykuMtpPZj1Cys90mURg6HV5bGVDwXzUh6dkWRct6R9ufNbkui9%2F2UqQuOU%2F7eqhi1z8dXEY%2Bix6MPAMs8B76NWBMdlnWTMbfOkCowVGFobweOlUYxoqFCrR1DiTznsgwXW0A8qpGG08lxI2Wst5Ft9JauaXAdO6wGmZcfCQLpsw9qjpRUUXCLdx2HKC%2Fasw853MqVHngol3ATjuESjki7duvrBMpYSO2kvRzpYNGFFs63bfaGW3jJTBegEdtBaO9%2BCUPx6uHMxEG8gdiKDKzdWgLb%2FfX%2F5deX8s06PurIHtuPtGIcMUro6dMOD0xmsX%2F8zko3uNOzL4gLPcoIwodjDwQY6pgGR6ET9e%2FPtrtxtDnudSVaVi8DoBQcg1xbU9r89ID7TQ9DxgG8x5%2FtUwMXI1sQ%2BQj0I6HmAmWtvA3d%2Fx58wZ0Fl9A5gXHRzLT23EnkNDYubpHJu2jSonR1kktmYVmrix8XiHKvRVeWhgDd3fOumMb%2BRVcQJ2vpUWCQMdNd11bWqiT%2BKJisyzmWgBkt66m8%2FQKNQ%2FHJtWDgTWaavvLByX1l15NCn5wvd&X-Amz-Signature=87a5f61bb6bd80ce8da36749e60f3bca4e4c23d9aeac747c432b1165e5c361ac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMQBO4W%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDEu4RYXbkH7pSNwV%2FLpPQu7JWjWvdvl%2B1cytR5bkVkdAiBq0W0E34GfaGNRVfD7oqCZViVzIGxsVMgq7ynz1XG8dCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbGofI%2FJmb5TSql2FKtwDVJ3gUXAbqc3jQgHIQtTaOpONfBugXTN3ojpmjBRVNK%2BkotKOjZ36jJ6P1xA7T8bp8ENfC2DlbmySNFW8r6AgdnF2x2jYGWONqatLZtrl4YyySmWSQPVL%2B9oWd2JoGow4Men7g%2BPv6ERYxbc5TPZZBGMJEXqWmkfRJu4dEqCQStNFwF7ruRNQhdWxRuZ8ExVbGr2hb0UJfy4YllcK9wV9Z8KQnrp7BXCe59tjAHk85rFrD11cfI6vSpkiCXRUMzRVFACp2MgBmSUK9o2jCU0rikQIJEp%2BRnw9GOli%2BW3HgM8Gwm7ADZG%2F655W2GldrSYb%2BAtEP9FzfsVJj3S45gAMkfaYaL7Qw43bqw2fq8mv3ohPjQp51hzFRUI0nfcNR4CRpcm9mjNe2ANXvwBQ61wbcKs40FhpWKmosOnilnAjskKGCQnT5Bx6ozriMI8Wmc%2B6zZJYaiClSfyviSB%2F0MzBjfA8CMTDCDE6RRhR5g6JCSIzlIXKSnOtfsc%2F09M%2B8G%2Bc7BzRaBXWJ2hKfbNvBs3G%2BpE6ifPOQr7UQlrVMkgph51YxwSdyioO94N9K6I%2F1SWD7gQpBFU6INTytOzPzVsAj7o8YLaqMynz8VvaAYR9NG7TFq2jGZwnosY08rkw0tjDwQY6pgHB%2BViIRccl83%2BrUJcIMP5jqmhFS60%2FTzMDS30v27mqjxmW5QZqkJE%2FIkqrxj4eLFUQhUb3SNa5x4LFyXs23IWS3WDbeI%2FjX47pl3KdDhBNDauGZZzs2KNa75jMR5iVjf8HipYBtseTaUoEZ0qv0j9c4GZf0PEMJXw3foB%2FC8mIr%2F6wp%2FMrU%2FQxuRydvqWBE%2Bt8rJCvQ6EC6FaOncgcMVUDwlT6350S&X-Amz-Signature=9af3358e90ec6a519e67b4afc848095650d19dcdfb04d418260ad3609d242be9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
