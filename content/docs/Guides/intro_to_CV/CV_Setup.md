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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676SHQTVX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9lZlpYUNe6TLoUtWISpL4tOG4qATpn%2FqNiEGFzjPu4QIhANsIaoR9QPj9RIXrDrqlFlj8c1mrEGSeQr5urPsSyRQpKv8DCHgQABoMNjM3NDIzMTgzODA1IgxC0LOGcjDmrW4DUNYq3ANsebznFAv%2BNtScbLyb7v8%2FNEN03v5x12GvYID5vRcdMjWTlRSxkMugrv%2Bq8teuyp%2BwOaEPY%2F646vrjGoMUB37dYmkCcdoKfiGcWoZqnf7pClmsjiddl57twFFSwtCmdVZBi3Cnfj2m5H0PckMGZCIXYGt2hDqGT6YeethtEl0B5gYVDuyf%2Be3vp2I5RP9EMDJ%2FRRxcn1ca%2FBuQgpWdDJ3yUtnZsS5NhwgBtyyJlkENtWl4XzYESvtZjGeR%2B4Hx%2FoLkfXId8oMzrh4BhMHmTAYhgDrUR5%2B7AyMqm%2FrYa8q07I34HsyFO1%2BcP8sKZhpe6iel%2FQkOkkGJxQr5kvp4Z97emYKsRcMh9OjXn7Jdy75jgNaYtxn42qlOESXSRSUlA7L4HJ7vyC1vEZgGtq2T9S4YudnhvW96XPbfRuqNYnHbXmp1bJwrhMGAnMrRQToa%2BYYLImyVGj1CotQU0hR1qeymeGJOz6KOi1O74SxRgogCzaLOt1y%2B5W%2Bm2K6WvdA%2B4S60ZuGj7YHIYmJr9ecXaescmp1K37R69j9uAWgjQnvd5Fp50LxlmNzcTTweyKOh7GvQIwF0VfKeWCO%2F%2FESsxQ0vivrTCuvJssOiqmYy8NMLMg9wUGJDHg6qDKIpDzCwgZnEBjqkAdu9uODLaDmDU%2Fs4cl3Lwnrt9w1P42DeNcAXHpGmb0wSS5w%2B3dQF45f73X80%2Bzl3eqlJoCQidumeiecdVZOIQQtRs7caymT0LSkaxHsHkOfjAZIMDtwR5b6jDNV2qoUC01yoz4OGF0IE9JKcgARgb5jCcovxe3THyPSn1NBSObdsmWRgftt%2FMBMXLhv935mRuhpnX78xIi%2FFdxO3M0FNVMS9jnwc&X-Amz-Signature=188389d2da57161a0a7f81dc92072dd6cd249b69f91506fa8c76abd6561a3850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AP66TXQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCwGMdVx9WIzo6JExM7CWxPkWrQJuababqM35iggvY96wIgc7ynYrJcErIiZ7YEB3iJ4z%2BAT2BGwMJLsCfPfAiUf78q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBcCne6vod7uM35v%2BSrcA7oT0D%2FhOYNQBG5KeTmVQAnnLuOOu17Jx3quousWuf1zUOgzFoZaPXSyIqBfwEQZfOZTRFa9UsfGebrtNpJSk9hrsTOyb%2BFcqw1QJqoxs1GroPpQVVnRq5gW5J5xv4aFe3W4fZYwqg1rEYFjNHXr2MlkMsrCVyZaYtUJ2dxaP9Kv7gQvfsTZxHfcx0RsJKNnJD73OOWRJ7RfYIbOw2AYms6pZGUmbr2UqQB%2FPqic8ZjiVx19ySpXvxESGE1d3ssjpOPgT27zO4HL0UnHDCYID3Rgii6xSB8sUPSjrzNEYvzRlMp%2FQWx2llb8mIoRfz8%2FS4G4FosuIc1yQGJBDwW505SE77lFdr1fD906%2FSgpMbtvZb%2B1xoq0EImo9GwpfOP1PLP3VigN1IGKx4c%2BpfeNJnp24QWcg0%2BoGP73PkKWmH8La%2BrVl8NfxAET9yxoMqXkWS3ZjHXd2JRyqYSBKfBjprmkfKs1FWm4MkOUkOXsestjoRi8HpPZqCJQIeJr0UrCeLvPq1wdPiIumE%2BYHCRHO6jwU20l1zyqz%2F%2FRcIht%2FnO115V1dXK3%2BlofeJaPPiGn7AE0dIsSaNpXX1EWTyNFujxmUlW2PKbkGqk8XzJkoY1mGSpXpyeg0dtc3DPAMJCCmcQGOqUBOV0ettXNQ1jy2rT%2BJ%2FOCW2eGhwd%2BZ6duSXq%2F7358D8D2rgXcQ23wj%2FPosP115OZjfEQx%2BZ3s7fjhQ6W6vlpoM3i0KvmQt1IuK0X4BFUjHiV5iA%2FTZdGq2mb%2FyfC9cUkWm2I5n%2F6OpzCjBja%2Bwmp8%2FppGWrEz8dXbDhrczpNsZFSNoABM%2FQ3tn759U2YyJVGCukivrjjuCsfUYr3tcEtjtGG5xnuT&X-Amz-Signature=473c27b166a7aaa9847824ff8208fd1a868d43e23edfb0af0529d46b350473a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
