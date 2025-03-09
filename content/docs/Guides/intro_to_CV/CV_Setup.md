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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZFXERZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAfmxrBvXs6NptZPPpZlEJu6PnLd7ACI4w3WpaFhkHIZAiEA7Jc8TdzIX0C6G6bvVxA1LTeaTSW4d2uzEIVy1FNuVMUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNpG83VWkOztfDvdJircAyVW2aH1OsnZJLjyb0A3DdLOJqM2uVUff153kR58cY8PNisb2aWZy%2BW4Vl7yl2h4y8JKhXlBbQ0ZDRg5Nc3GJBjJi3GgULbNSAHFvLsRGA9UigNJCz4uF6S%2FBBA3gzrCPAtfYYsWOBPaVljIdrRlsY54hdSVDxH%2BeuJ9xKOckN6L2WiCkZah4BEY1kIXvrZS2SuGaVR8HX1aLQHhB88B3KXyDVp4nHAdPar678TRhy0y3CS1DIE8lbAUQ9dca%2FS7j%2BwdJWdQhyrD6Qhf5K1fI9vCvvK5KHzM4JmJaXzaSfjJ9svdoIIEt8WEl0Wa71T2obXc5fi2UjRwVLEe6i6d96pWxS4Cj%2FCyiMO2gcaQCxSSWNn8zNTYC9jBV8xjAdRcty8n3YFbhKPvR6KNkcj%2BgJGmdM9g%2B05Zrv%2FQh7gKQIaU4g68ZOMMTpP%2BFGjIUYyPSTZLu3WDQE9KKIhRRrL7OthBZr5AEbYGyr2rTSBu7Z5UVWLp3dhaQwaQcqIBJf9%2BQwSJfmDfc6%2BlHBnhbhGaaTnV%2B8775%2FNc9vR%2BryoKkq8kqUcsfJKIm0IEJIpXGIdw%2F1Glj2pNL8N92fdMnsoqmLu1eQbQY4YY6Rpz23L%2B5kn3JwXAU1DErdyeYBulMJ%2FrtL4GOqUBIVPhNXYMLKfMODsvLv09LzUPqD%2Be5PZxqOi2L7s8dTwHFP73yY7bqyC0Wk9PA2pRP4xdB36Qi9oFV5S38fWu2msFTb%2FVlqZMSjyrkGc9%2FYNc7eccRYoewoENM3LLKpLU4ip%2BYtmeFxfsZ%2B%2Bv8A3BVDbCq0RsutHMwbAldw6SBsQ4PmEo3QiSobfrWCuDFg3Q3bsS3fZ0lMqyIdMSbWONw6sutGyK&X-Amz-Signature=c775a7b1dbd4f77ad3ef2660a927ec42b3ce796b62d583cec4e4e0e2908edfe0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ25VY2C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCmiOzPt9KeyQ80BDHn8sMbGC%2FHAo%2BxQpkqqZu89gvw0QIgQJwA6G5CF%2FGP2LltdOAl0WfRujjAUVgRG%2B8HuXhuoeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBPUh4a84zWxNRpTYCrcAwZaWEqXPS9r5XgwGrXs1Y%2Bc0jvifvKBS1G4KzX%2BcEM5qE8HNfU2IgZG5BUSgK%2FFgzSvB754M3jQKzTsiW%2BbmIO414znQy7nubwmKPumq9YQtmQVaHT%2FU21G6LgovbDpuZXwYANp2Qp0WyBO0ySiz0tXEhH%2FT%2Fe1Eh7tOcoif4iEwg1JXjhIhJon10w%2BIsOgdIhuIsKx964WEnCT6QdUn3jEh6SbIonncM8TvonGdxCYQvV7V6EECVVgUZLD3XETWAzd4nG22Fgl1WC0UK7kOPDfQ%2F%2BGLFFQn4q87cDNcNGudVBsC1joOlPQGjvZnOhGDo25eKJYgp3PWkJnbrXZq1XdUHUjCzxn0gBjeD%2FH9q80FuXMNj%2ByZ%2FzRrei6O8ire8lcsW5mXIrJ7%2FJukzY7pt1BRg3u6f4c6h3k30JJcCDGrboVE0zYWEViOSxs%2Frz3nfsXoWRHNQqV4UtQpx%2FTjq%2FIcMWwXZeDnt04yjpk4lxKqPAv7m47asnxb%2BVinKhlnFG6SfdlSRoXgvEQiiKJ5QtYQldnnRWGPQfuulVCQrbNPNH5kyZoM9oD4vv1pVO5STuhsa2NMpXtSoHgt%2BtoCctC%2Bjm6vN4FmfU6f%2B3n6Sw%2FQctRXcJa%2F3QKw3P5MLzrtL4GOqUBnXG3n3nC8M1eXYodG78ZUqrXag6RFEVAy023RJq6xjGgoAyMT%2FEWmYHdMKM02gwth7e56NL6zxxeUdGD0h34E4K8wKAMAXSIrbxcgkqJLRRbBPGjKCfKES9YFCcAqKigsPJuSvdAQAMRvFuJv8kpsRBrmhVJ7Rv6thlafaqJh%2FDBOPoB%2FQSQRda3QhtmVWYem2yR6iUnCj4yhLWVY7tFlQkq4wDD&X-Amz-Signature=bdb06884b14bbd93741e2ceab92476ea076f55b375bde98144e9bacc060ddee3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
