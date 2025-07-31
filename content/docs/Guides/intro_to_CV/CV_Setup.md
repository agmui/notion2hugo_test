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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAEOXY5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZXdI%2F11Zf36ZaXxKPx4hT3wJK3wwehbUN3jQYA%2FOjwIhALTBrZlPDSLrgy3ZQEcRllchnHl0qmb7XBW5dhTjKLG4KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEV5RZi26aS5Dg5S8q3AOmutotnhU5afWQ%2Fn0K8SloemnuUvoNgdOhEKH0d0by%2F8SQS5I56rAMxVGdWISqXpxJYVwT2aCArgrrU%2B2ojSU8q%2F%2Fi5utT5geVlGoFN6w8nxfQ1nUmHL7ufH2NBmxgTwZrrh6n4uE39OOYsFSNdInY5iUsPAWQrankvxSBYTPfECj%2BtnbHjRvjMcs4JeWyweQ3W0UR7uq8h%2B9YzIbCfWhw4%2FTfM%2B3xcLL9srHt4r6aPS9k0xhaQ1We8HpZDwTXG2AK%2FiG9hxWWAlxwwUeAjQwlul%2FyACZefHfvwHj8BLHzxd04%2Fz2ES3AZrGaV9bqJUhKm9%2B6ZjPCknZbSTO%2BBCqZXWBgGe9RtrCwGRVeP6VxuRpQfp5R5kbfVej9KR7k3whqoQtij2FB%2FFGWfrjpTJRcZtkUCq1Zr8inChvGSRstQ7ERwzkZiwk1JctmB6qvh5IGFMGCTvCK6mMy7lJ0Gtx7%2BwYm%2FG065UWLHzJOSuUZsofVN8NeAZzIohw81DmV6xqddnrUJ7xiSqKo2AdT%2BSw2Ln%2FfhlcN85m0DjuDJFiUSYJ%2BSh0gI5jC0NGqTmBDhfHPTlzwS5bBGIo7k29Gf7T9E7cfu9AuERm6BVTh08iK3H7LH3aiZTxLEdsIirjDGoKrEBjqkASj9vqrHKZIt3%2BoKURAPTEXBEB8e0yaIyO4IUfucDPXcImZx1%2FocdHz7f7CF9wUC7AHcBL%2B8fm44A7c4o4hChzJKS2LHcv1DQCTaESAbCbODomizf1gZuGC7R0a000NDGurkSOnPX9uRSAXJKHisgdp6AiEWv5T%2F5NJ2FwFFJrxbCh8mAykBkiKGY54rmoTQE2r48DADV6bYtve5VJ%2FY1MzmYjt3&X-Amz-Signature=48cb38b01bc3e210a31ac97ece68341cc3f46ab8bec0eeffd1eb8c8656ed504c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYBU4PM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTtrUnOmzPlmhTt241xzP8Vqh3ud3Qj3AoMGxqen36cAiEArCwMbcLpJT%2FW8KmrNsHaqauqPiT4ZpTDRKRyz91ehXUqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBrCS3RuxF6pYLkxSrcA%2BBYitYaN3zESuqugfAR2c9k7BnBfgNZD5i57q35OoMP0uj3JcW2pdR7ho39IJ0PQ75hzH5P11IOJEpOPQdYxsiz6wmFhzeIM5XHVc%2FoQVgtvKuIvlnlMrdEz4qkLAbeFG8CsHM7CVlGwKuI0NSGywTx%2B4z85eKJmK3d0Yymtge1cv9ngnbwpECJpC6HCor4wSebT7ynlNlbKRAPpJ28q2by14dHRXAR8VTAf3Omj4S8gNfNPmdh3Mosrih%2FIzp2KLSo%2BsGIUVKU%2BNObpuZmuwaArjCqPgdv%2FQdDNE5aa6y6jEHCxCXxWxuYg1ex5tOtF7yRjPpWqAvldc3vSnpuvkrLFcndrLG5e91jbe5Fq5vV2ptBtxtY5Cy3Wa3NRvza7v8WkYP9aG%2Fzgfs9a4iMY9EyXkJY9Y2G%2Bz20RJcXGW0RM81XLPGNiMG2JtSe92T30Fy6bWjb8%2FuIqL0a%2B8LfFvpgzaIuimVy%2FVzvxdFkT1H2ihW43qSWA9Fv%2Fr4CLCGneuEcpw%2FqVvAirTZB10GFKQLl6CA7LMbIRSvOgARP%2BBQaoeEl7qe1SJ6tAoDCMb5cxn3QW9euNIWOoSxnochkdsahAZHmIDtk2GwgX%2FuBThpN9S%2FlLWgn4TMHghGKMNOlqsQGOqUBB1qkgu7RplrZo9Hw4mlAUC9VQNaq3Ne%2B8bnQok%2BIVkCbodS2xiQewnPndPfftyIlBdGEkboQcDg5T6JFFUeYvpINj3xSnhKrvvHPZPI%2F26IZaYtsCScMCxbvDQms3XGDXNHT1J21AdZg6arSZCAT0cPQn2k6lMZgETTXy5N4R3Bfr8GVTTflJWZJPyNFLRlfq5Z2aElDATQpyV%2BedNvkHIOrhUPs&X-Amz-Signature=3f352d25dee5ee5b411064edf1363d25dd1d88836d30779ebd646cc700ad1d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
