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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSEQCOU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCuFMAQ%2FVBDZ0WX7HVBGVjPmiNG20AcKE9%2Fp%2FlBFGGD9QIhAPkAdRd8I6V0otzllXe6RJzOoG9ri9avKzHuy2ruhMEYKv8DCCcQABoMNjM3NDIzMTgzODA1IgxQWSb11vC9ixqyFV8q3AOo7fZkhCsd8Wyu1wbDf7hUZ1JCQ5SpFdeiCIH8mSt4nu7ASSjBcDceioPHYOggiVs%2FDGv3kqtrPZaIqKN%2BGKYigfkhX6Bi4csqLXLPSdHFZJLmjVoCJ8JuLmmUmuNa3JFnZmUyd480sYedNeTaoCrGOPaOvoTTxJHaiRNAAGIMfE5s5UTXts44hvYlYI0br4VIx7FpEhoVwBrpb%2FuP514DblBPT2bKjMPtTR14FScGvtsDxKKRYHJYE6x0IGKmGDEz%2BgnW331KBjdi%2BGhpk8tIvqNAaKMl7cRmaqzsOXRtnIjhq3mbteDipxKRiTGaPrqmHPzR0ik58Zy9vbjHLDyk9QKSLu9LM6kg02Bu0xciYttRHcD6Way5fctb72JtCo9mAFQgA9XQeWtiE29a8g4pj1T0MhR4LTM43gzc1bjQjM%2FOGXPtYmq%2FtBdyGeNXa2Hro3GpN801GFFSPavOyIEANAuVboOcpwFBiyIBld2eBw86S5z3TxLo0SxNmhuPdNfXuUICpEy1g07A%2FdhcyxuOjdHbrMttKGtV2JTmWywd%2FH4czTNshhQ6mpywcuCQH6dkZ3bn7baqsDF%2BEi1xTFpnXpnvY17XRRx7A22F7QviDES%2FRtagdEcRJjotdDDpsNLDBjqkAQYprO51JjdpI5JgSmPvxcr3opju%2B6j%2FUBv%2BsWZSA8Q4pALMFNXTldVWEUGg3fuVq3La4Vv3Nuneo7WORFxdw93RvM3zVFlO6ZS4ekv3f6ZYexJtd4%2FzT6SfYnAiYXipFZuaWq0sWV8ArcDCBYK1Jgz6nKFzkqyllqzaqGfxFptMBEUO6AHfliA7CL83bvYMbAvdHuwbctzUeS6mizelOYXGeOG6&X-Amz-Signature=a7a035e7c7c25571afc0b85ae2a8ae98d86bd10cdf26e71e85b31e945dfd65b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZG6FL4%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDvez83EKIjZtKA95UczX3QMmpHVlHe2ij61%2F6xmRBPqQIhAJJzg1rVyXncGlsRH9pRC3t0EIVvM%2B1qa62iA4zHfnGRKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaTmBXK2lEkk0P6wEq3AP%2FKhCIs8TpI5XCOpjpS1P6pLpAFlUuvGXHrDlLcgmJNbndEburmmaLHmk7uJMpTb9UsvNtNIMLBB74xNwk3QdsUzTRGJyq7LsNk1f55MR8wWUlet5CBOnJ3LFcLPlGvxakN5mI9xPlmcsYpzgttjbEEEx3TGmuo%2BZleS%2BY7O%2B4BPjEk8MkCLrTrXDq5oeJdmnfFXQHrgsvV4Uc08RvlotCoGXzS70wZKG883yHLjwdDUIq5ot%2FRtp6QTMGN%2FOO4OBGDNHRhaRtD8XZx42eq0f8gr22Z50jz1M0DDrAmiNPOYKLz%2BlvbCvbN9Z%2FmLBU1OJcDlPebw8IcPvejwDVf1RlKrII%2Fl2vCBREvXQDZhusrgxfWkwJE7XVisD0a5%2BuLFwjfbGUqvhIy2yEKranfvfwhePlL%2BAhcHgH%2FQpYNexbHzw2LFhMdwNou29swURjANHDWj3Ll43C8CQTTP27w0UXaCq7Z9ip6sYTkTQc4Bo5eOENWa7Xa7o5wwdBi7mT%2Bs2XtroNr4LrnkTA1SvGxifpT6ofg%2BoVDYRnG7qKKnUQDVQ4Xgnt6fkY2uHBtPpI27tvMG4CZjDxWHMQg8CVn%2F%2FzgvgUY5qe9a7UXa%2FHe1%2FRBgz2%2Bup4iwfDNcV%2FJTCp29LDBjqkAQLDDLyCRMERaZeTdBfyy0pxOkihu0OTVw5I1flcf9uzBsicK3AeObHWUYvS2fdCe8px%2FYBtnubS%2FgJVZw2PZDJjbZYFsok9KbaRTxUC4WTDbqTFD8iV7uGNWzz6dVQICtj9qnjwfoOAA356Qfs6sPPRYJZbSye13eZ00bwendMGTL%2B3Aks3fx%2BexTfp0z6Oj62OiptAbTifdfVlSW5sJnrl4qqC&X-Amz-Signature=2357ac375b698e89e9865db86ac242b203ce316aa8194a344c24abf9b28dd65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
