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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBXW67FF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIANcI1CZ3Tmo8Pq7mkgaS%2FvIgLedmARfB%2BLJjb7GC2u8AiEAlV3K8dN1z5xex%2FlC2Glr0CpLdIsA6QFmf1gND6Yj9JUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUrfJ4Zv39VZBKEhyrcA0DcTaO3SgXf3tKFM1TKf45PQrwapVfiJHigsPVl9bmcaEElrFRpxb5HgOnqDB%2BuLKGmb8lPOx4ltk93DqfGqrmyTHVXJV0yzoGdIoNCDxGLqvCmDaXfqL4CU%2FL75da66U4mLEF9N2LqZgElUfLupV5gNQrvYE7mQeAy8movXqyxttG9tHmmFnj7esd5ZyJZfVNT4Fpr35jzW9RBPxD9QwviiJcT2oRCOiL4QepZXOJcQ5YuX5UGWr8tXGPRcIqRjSPb%2F38HsAtxDBm3rnLPkCnqjOiCF87aeulSuDTbt85GrwoHW5Z31kIq6%2B6ZpLITWnaKLanzwKdJG%2FO5OUCKHi%2BfVVPaX9dpCxjzBmWYKWr9pjTnp2iSPSaRBxjc%2FZ4jfTjtMsJ%2Bog79JGLQKnSSt97ETucwpcn92zUeFbPfTE04cFYz6PL5iP0snc3KXJtmISQn5S9D1%2FFVr7WnxBQUnhDnV42uaoOWKnaJuED8Fi8H0DTXrvzI7klv6hJHHnuxiTFhphp0b0uXOTfo1TPlXw2k9HRMu8xtebaM%2FM1kZWD%2BsBmeLCB2oEe5ZN1%2BNaFJB9nef%2B38xdII2eBQiRk45FOxpddmq0LkHm0d%2F8UWQht%2BQ3ry9Mhxl0v%2FA6rtMK%2BNwcQGOqUB%2FhOEaToy%2FiK2xuyjV5J5eGToDgrFsVc0%2FBjFlEDHBAbSptYP5dDuOIDDLgbNCVYfpFUgJWQMw00WXqlJPpK0HUnpiCq7GeZp1RTANAbOaLmmyckmPksHBe8ShUTj3M%2BVOi7PL2p8Bb0kV0Hr95QGkGkDpOWSTsiHO5vL8XTKOjCi58uzALcCjP7eKNZk7P0I%2BC46OYvNAhyZWusGt8Oh4Ukujlzg&X-Amz-Signature=43755b8014f864054e2f44aca76294dddeb6ad6ecb6e8d5bf3bd06f0b67e5451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXAF4LN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDWiOciZPTgeWI3KqVyTiYc7KfzJh75wa7NVnHhCC4PewIhAIDQoblZE1kHNi9ZpCkxh6HE9DmNMZjhRF9MmhyccemIKv8DCD8QABoMNjM3NDIzMTgzODA1IgzZ7W%2FGqsLQzl1B1Lcq3AOoXsoVbUvpVG43x0sHlIF%2FAlGP89XBw74c7LOrivJTrj5PjUAM1xiRHYaucEZIy09SSFzKKq5bemUMIZfXWC8PXGREJUqT0T9FgK%2FJQjWKVAZ3LEZaypet%2BdknF3DuboFXJPFtGs6Dfx%2B1FzStT0jzgcensRkpTkL%2FsTK1E3C%2B92t2ERPZjEPOn8jhVMtK1QYHAEJ97x1wUo4X4iIbS%2Bp3kQxXsQDYYKHa%2BOfEyo3F1NFj1G7HZQPg0jHruCB%2B7x9wHOVIPyspvIe1OGj%2BYy9iSPaHX2oT8eGHy6natllkb7WYcMFA42Mg0cIksKKgZjzxo4GkxcUYnf1Fs4E80qebYQA0DXhyuNUc7199TsDvbXDx1lPi5hUH6kPQTOLu1y3MtAhWFkBvMjEHQonL17pghk3pgELzkGKdNoJP%2FayLcAnXqkevZVEdoVb2SXGVoqOwxJtrTFzicnKQphVdpvsyRk0FnREmyHeDTEskptho3RidiLHifEy9VLlqkcUzlQSHFhm1VgzUewDI6eVB%2BmvFBV4NsnD03D5%2BMlbiLFQpxePCql%2FoRRJtVt%2FbY0F0s1DKEIgW%2FQ1TS5x%2FA38X9yWYHuKkDgeiwzdugm535DhjUi6vcJ86KebzshQGvjDPjcHEBjqkAduscCBtV6dGV18u6apQTSyOqF79SN5jgLN3PPfuP9%2BJMZiRI%2BFbS6IOa5Xr5o9Ij%2B6hRBs1W4SbJIvAyfcrvmlsb7IcTl6OaJ55Mg1tnCG82dFIVi9HEWR6ga%2BTyFobZXC2pUeP3WgQpTwS5OUekzjD1u%2BFYcvzKrABmZdcULIk1KC4fr5O8OTHVEhV%2FzXvy3S0dFR13%2BlUCT7hEoBbmI2Lpupi&X-Amz-Signature=03ab37f8df9548fc751e8a0fe87f62b049d5cd261d8ded82cd9bfbfd21dd40a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
