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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMO4EVML%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHp0bSQWXvu4QZULJ5Tzqwr4clOmWBvww1iyUfd5V66qAiEAk0Imvh7%2ByTI26rYWASrEksykenjsS1dJjiVLmRx8A3Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ3LO7LuVJFzCCHFTSrcA3CaAH9wZikIeq7pWUREYF9Fw%2B6X9Ja0afONGm2LGlEv7Qjbx4548zaTM9pPooE2rUktwJj%2BI9KWg%2F9fFmwhqcJGWCwV%2FovQGE5tVXhAYEUALJ6XkIFlRV46LIH%2F0kRGcmyWXqexM8nhlXKkqXsxU4Z5A1yfTjDpj%2FdQ0zpaegJ5Qp%2B0d3sEWkcOXnzZAL6yVEZiIQdfSu52AVgUkaVLJoakV2gmp0hf%2FP1oLt6lr4vvzBpyrntSLcxe0uAGDBZ8eCxN6ewF3IX%2BcRHcVEkHmTntZoGL633QgW8lIn71f%2BV3GSS03rPrQ%2F%2FwQDxncb8dM7Gb37Y91UVDaz%2FBMQ8rdcgD9YWQN0oIvVqQqgzfFf0D3EjBkB8svtXeyFTt2Ggow93FNxPAJCQ4IaPJbVCEvACJsln6GiiRH%2BO1mSP75IEQ%2B0Sg282RcLwSzIM4C2Moc9CdRw2IO%2FE%2BfYJrbMUrhovmN%2FD55We3gU6I2ojRiIwaIzYo87uSep4qzXHyCyWoZ%2B3uVrXqj0e%2F9%2BhIkp4uPS2A3ZseNC9D0Y%2BxH30XLjzTqwxZTG6Dks11%2BeLisF0cb5Dt21qTKE6liGUgzEB64cEHEJbCrX1gCHWsu5b9erQSNjuh6LgBdcK78NtUMMa91L8GOqUBnEqx63dNes4yq0uzL5gveEttcASABA58JWPraTB7dyZ40Qeg0Y6%2FJdeZgItTNoCJzinAhJF1kjrNmsJ1j2DFzLDWP0yaDCG5MNxKrD3%2B1z%2FJG1q%2B4LXEv6iHLEk6MnEb4VEQp9f0JkozVskU%2BiMmwi0isyQx8IWaJ6a0ij8ch%2BVRMZcNfWUB8vOnxMug49Ot2l5abzHcTFqWt7Lp5xTjfBcousne&X-Amz-Signature=332f90acaa8426b2c535b5bdf41fd0737caf282ee39dba03e448a738be4f7362&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVBP7P5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0sTZvFwo0I7cmw6rotiTGdZTP6Vq8zLb9t4yqrc9S5gIhAL%2FLd8iUbwuxgMvZ4zQCqpk9H2%2B7ZxLY7ZpfSw58%2FkzZKv8DCHYQABoMNjM3NDIzMTgzODA1IgxLhG32lANfLYFiYisq3ANiQhrOmZkcY%2BqZj7aMPioSCBUsgiCYgYbKWGdZiMKK0Cn3zMHfdClDooaJHqCm03mZmtgz2TflPTyFzG5IXBe4JiqbDHk%2F%2FOY4wQIwX%2FMe5mnIPR5vumXOudEVreDTGCs%2FgSMIa7buQMTGHfUi%2FyHfGi5ms%2FYOsbHsScI3ZH%2BFvc7%2FhrX4r8ZLSTqh9t3rhdvQyFaMYOKe4iIuoNQp3lHLnUrtytxe9iBMVwtwavUDbpfmVedBRx3MBsbEhcL4jjscS5PpLte39om3AK3%2Fsfv7X%2BPOaeRBrCgXcaASneuAeigblF2BSLHClYJt7rdhxKTGcLRoUQ%2BA4p%2FkEBAxZEBdPR0%2B1%2Fn53yl3iitMJZFFcd4waAvEmF1UqXqwyONZdNuqCmE5pI%2Bheh8MqyrhvToKxTcxRpuloA5gd1RRH%2BZmH49UA9JOl%2FZi2igLVyDDSgrVfULjLrb3eL9hK4ae4jg55cQnaDTkHKhbHBZo9zVSzyaPYHB0rpHtFZUpvCo%2Fh0haomdUcgS0jkON7BWu1Sph75qUSmzQ5QybhMSe4%2FQGCQ0N9n%2Fjo0boUCH9qVGO8ELyzeEwZ6Av71p2wTuOvKcYpn1inkYQ%2F1HBurmKVS9nlpfT2kEk693u6TB8lzDYvdS%2FBjqkAddK%2F5YpUofA7YKtnGuYos52x2or%2FD4bpuJmTBfuoxAPkaf%2BOPLaE7Y0AynjlP9qdYiTq1waB9p93vOZQF%2BL242F%2FQwHHbXuVDwmyOyeiQe687Vhwf%2BM4pDW6zdzUW24LtkCUnBAJIRQKEv3JxeJKLEYSiWIIaYlobJhioMqnUfzpmpyrPyZEd57Rsk%2BnaRGeB9SFXV5c8VZOIwR8TuCx59tAx58&X-Amz-Signature=49d86c7f47926e4b6a569b50fe6f7ef886e3bf09401213109da2cfb69b09d575&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
