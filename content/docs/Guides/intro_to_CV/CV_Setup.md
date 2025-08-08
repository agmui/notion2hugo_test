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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5O6TQM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD%2BM1cEOayxctk3Pudqvz0HWb%2BGR1Ul9OsZmgfI%2BmZtuAIgQTnKA3hdzhdqs9JMEGBaxYobH8AfVmWSy%2BgHvmW669QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM13y7T%2FlOYxLKrzaircA8MXRhqzEnYGlb7rsUVrOMs76JpFOlIf0AmZfCvjhALrP0lAK0HbzQ2H8TKpPqQJSR6d7ctLtwiuPdyUfD2NRnk14OqrttEa5Ba78BhSEr%2FOC9bGNXPnoTt3EjIzC9kyjrKaKj80C%2BdTNjt89uvN%2BUceYbr%2F3UssBUau9lhHg8F2LtZomAlllyab2peBTl09ZkUNiKjdZYqVY7ndhRKl2iLDdV9MwdBLvpConKVG%2Fu9ISRSkUt%2F1XzDtWKgXYG7CiyIk%2FAgxZ9vsrPLkObRUj%2FbU5zz53RAv21vqRpeOQ8zM%2BAXPlrJUGQxv3eRqELpozoOQKY8tVjgo%2FA0Mh8fBAu%2FbjVCSczXtkfnyf4ovYhU6%2FcNyQoReiofLdrnPO34Mcfh9iwC990ujrHGN48Yl3AN0DCbhs%2BwzeOF9AWjbMFU2Uqbu%2BT2u35fpE5oslsIUCDBLOzrNaB1RBe%2FqKmgDJetNRco%2BV9fbUyuGqiTDfxkPDR3KiLwpOYj7MHLLkHcgbmJHlfrdNi3eaI02wx2ne%2Bbox4bnhDVd%2BbjOdQ0%2Bpbeya%2Fbbg3bh%2BqoBukFQYb0ZZKrNGJgswMXuvsEj4GMdocX51EGPqhsZqb8IeNGGXRukz8h%2FfRmjn5ys6CFAMO7b18QGOqUBswDiLF6c0NYY%2BK00dbKnaMFe8n3TF5sLn98FSsL%2FEqhR4BFtb86gJ4LNPCv1EAGMF2RrnTuoNXsBEp5lC3KC6TkhBEzO%2BQpzBiOtxsL3LZmJ1SXbRSU87m4bs9WbQnsANf1Ej8o%2FTT1mvb1J5uh%2Bl3L8f4eowfkdnEQj9pViOJmiSSaHmFsnIQJ9LM%2B85wvHzcJp3LeenSKcVemdIQWUXYURRL%2Bn&X-Amz-Signature=adf3999b1d4e2d6dee4693573298e096e3570e6c3df8475c5cb138963d4fb7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5JS4FT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDkhMBJWwcMFKEI4VVTiCIMHadwrZRguC3BX6pTAoEhCAIhAK8RomhrfJZOlhFaSozuU7JMtw8Xljl1ntqGYaD5PaV%2BKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVvBHqoZT5zHUin44q3AOR1T1z2plVcNiJVUy2j%2F8kTPbwjXk0sw42Sj3MKAdaKgynq%2B8Bi4X86JBj8ojgxJbWuGe3ttXMBEWqL4RfrMo1i3NfJngG9iUE8AYoFCZpLOfyqKWYThHRt1EyQxazfHWjO%2Fqfmq2BQgiXuVPUVCV4dJcWPB3J6JnAj2k19hjB7S4XzYA%2Fjf7Rde%2FXQcZ3FDkSYGRj4DlVssHwFxWwY%2FOa2OP8%2BL0otDKV0Vf%2Bgg1YTNDu%2BW9HjuB1J35%2FTx6B6vppdTJpJi9cai%2BKcdFpRoFCNT6Pac%2FQYuwrbSXb9cJlwjKkWXdegK0UD%2BTFwKGOnnCHyiyPzK2ybO1JttbX8IY8pNgYAwLD%2BfaQfJdf6pNITvjgX369JT6VIF%2BvcxlOiJQ8nlVUMTVbOuP%2FOKrlgtBeaJNqXs6igx9hVmRiVeUljsMdvpOLB026xFyltjxrqPiw1Gda9yl6yHH4MMiT3h0RIRiu0u5zlLTbDnfgR4z2%2BLHFBc5LvPUfiDq7X0ImFk5oC%2BiAD8wTAzgd8YNfw%2FOTJTjzcvfEn6%2B5CKIFU0pwTOTrzMPe4zj8NX61Aj1MmWDBbOoLokO%2Fu4klL34GAthLsdVcYEikzMQPvB77Fp5S3%2BCVqFiqRjMLvTw59zCJ29fEBjqkAc9CjJ6z1Wg54AIxoU2vP%2FaeZne%2B0Qsp5HyJabJmNbmAUVtQCeywABPqRWwTV5NiXn5aWt3GDWz5gXjpzhJ3LSxfOA7GJj4RaL%2B5b0CbwY42mTj6BGpUkxJw8XfUQ7PiVZcxcz5FLta5xn2jh8Nxk%2F6Ms2iPhFvLmrGKi9B8%2Fs5IS4tZ1TblSO6TtwZ9ekRauGDSorJKsPJKo2R7oDluRgCLlDQY&X-Amz-Signature=8076b8c9631457df9815d8f1e36f87e5267b02fe8e23059556001cda3b4f0648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
