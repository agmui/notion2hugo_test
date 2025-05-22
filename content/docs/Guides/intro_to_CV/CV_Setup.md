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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUU4IRVT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC65REGbKs5cbhsyk5Heqwtw8%2FDAujxYp1fft0WH%2FQTvAIhAL2RQYNfhTZQ8zJVu0leiQTPbaHLVPh195BV5lqfOYkIKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4rPRqLVrAuVMSjcAq3AMGEcIUwGzKABvJL75csofVw7LTCHW%2FpgFlVvxOrmnGqAWqlLuVWxizQ3MKm94ulteOVzYFwwrtdU61WKLD5U8XmtautkRhVgjR9KOc7t47KS1B%2BQodkeOd%2FGkbbSxY%2FxmA6Txc3Zs7l1G%2Bveh7MN6GEwHwDYTAI7Iaef6szlRqP%2F48KwJUJGqV7nKB%2FAFlgnTCrNHqlHSqjmzJHSlIG%2BHbx9uMamcy06CaDFNqnFl2mK20RAZ%2Fifly0FxDChGD9CmjS6fnevOnGLo4FtoNAWdzV%2F10%2FFn3VXy4buDhho7%2FOZV%2FMrRLlA%2Fw48x80G%2FYPdd2PkasSdrPmp1r2zUswWvC4p0ZPc7a1B1bkX1pUHS5Qz1VzfoH8I0WxxmybUNFeYGUQWGcnfFIy2iwXd3QPpvAdK4kbNqhgyzcRyWYEa7LUfmBrIl27TK4CZCRxFFzsUdkJYGJzRhhItlTEv%2F%2F7udNoFRUGVjW9URA3EUhNQKrQ%2FppXM3Z7Dpelk4F1H7C%2BRUHbjVMoKjJzJKv3glcDM9W3K8nXuUOF97IiRSU1yT2wgJP%2F1%2BsMGyh%2FV0p1blI8iAfELEqxSE6AMSwCJkxNn8ROXYROrRiAEVgeJ0wfcRr9bhsykhXveFGNsL%2FeDD2%2BrvBBjqkARVb9%2B8XrJG0UW7KksER4OjncH%2BbibC1lsX9jDcis1IcaNiTMpzGUVEPULL4K39npqgYNKlQxFQ8p39VYZoe0dYp7IVr%2FK0ZT3c4Wr9wP6iIcBgHEo3pe%2BmWpJBrDgGQ2NM04Ks7ax%2BCQpMSiIKki2f%2FbRd4pTidYyH8bghpg%2BeoKh6tvb%2FRfLPd1xi1FWr%2Bk0kC3LheCdGK9PVK3MUxRlQsqqUI&X-Amz-Signature=e8d2893b02de4fe8dd191c78243b4611bb87eabba84427597fa60cf5aab71610&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WRC2XV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDCYabUJRmRiOTCqC11dNtcgbOqlYxsoiqegp1oKrvvZAIhALHs9idHNrxt91kvxqDwo%2FYbPLedeLGoqgnxwr8QkpN%2FKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZtonVx4iOo3vLbFcq3AOzcuyqF4AsDD5P6OqBV96K9mzQerjf4meA81usNceEoEgH5K7LClOoTXCkt8JWCJGMl%2B2IHZramDdCuSInH7estiukQJMYpixMZoTbegbOdVeBs%2BOvC28KqxL0FcYpM8kKQ4FMCmr4jrmYZeak6QhQMkrhK56i52cwT4iSJvvqZ2n7ZcmEp00N52z%2FAHNPib5S8ZZgz58zm7M7mJ3xZw4fz8K2j7WUB6aL3VlRQEY8bS3TXZZn4j52gmpDSYFWGwzujDe%2BHXJf3SKOXLLJ7uq50UpljSpt0ioPH4ftkggGpvyklGHPeBz90%2FPVMPNs4IPfPYmR8FtIfQTvmdU83e2o8il4otWoBCBtVIZDQGKtY6DWXKY4wT0ZI8M9pjF8b3ANAhqs6j0JQBOUnRaGJjLR08cfMoMdL8aSg22of9ZRUCxhXkNrZjEYbv8NA2RvWakJslEUCVN896Ij44u43a5%2BRyF7GsAVC%2BVCjL2yXMid7%2BjPxtAlZ1Xu%2Fy3GTZCdyQSbxdyby6%2BX04JnjNbVrieQzXM8ce40oOmGr%2BExKnIlE1I%2FIWu7EaoOI%2Bw4I1YwUV0UOurVh7%2B7n3hXXLW%2B5IWAQdNKGxWkj4%2FWBDFhAg%2FirktgoY0H5kdjHLy1JDCt%2BrvBBjqkAehtKE1k0O6hSc4KU3molLme5m83FiHOXk0lvrP6G6m0vxKRB5BUlP6gC7IpK8qxveMFyf2f5Lt9Lja4iD9Btv6rkdbzccVMIX%2FycEywbLwwGE65SzgFUd3Bg%2F%2FhsBXmNbvAE41CoZnz5AW1wxGEOUesANt8cWkYEbsj6noKQYQm5L54y0gyb0DBTQwrQrM3y8RIrbzhMKs6kh9ndLuyvLqub2mg&X-Amz-Signature=5f7c8b78dabdd49f94b110f0e06b583b45f3b9bd62d7d339ecf79fbf2c532220&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
