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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6YWSGG%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNgbHPI6P%2F15czLVBAI9GdQP8tLHxWW%2BmgG5OtyIzHPAiB%2BvRI5GvjdBfHUF4F9ccqcL5e7OGlWNq2v8nW5MwShfCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BmAdy7TZYy0rNUbVKtwD%2F%2BufQVG%2BsMz%2BUMdU8tbtRi2tTWuGiMS1hQLGlje35jJFzWYrRfts8CTjLUKpUTbrxleG8%2FLlyp4ENyNDBL%2FrsIW0LZBmEgJYgQNMB2mpnWmUaRjlomnSENQS8E5uKGnQQVNn%2F8U9BEGmPqL5aPBlEI%2BibBC1bZFzE36egvgeja82fTwY4yzl9YBX5gWT9aqoHBO8tS%2FK4j0RLoJblzsKwmzO%2FLQBVUKMdnmwS%2FB7liurfaoZ5PI3qDYFIMGhRP8nn8LJFFp9rgadSuz0sZYjsoMihtnKMD3XV0wfRdAvH4W8qP4aSrlVXuTkFX5kR%2FIgRpFTgAHqwNyWs0CvKdPfsyJc2lJOcCZH4A2RoxPgKzyz2bRkOmo5srSyA3iCNAX5UkuGjUSqgJueKOkq8G6t%2B3KUkLk1OPAgNPMw82FS9GTFM9lz1TMMkeG52LFLZy3gKXPzzOImiJin%2Bo6I378QETX47wqIi20T%2Bumj7FYkUnSXaHrAi9hHxQe0BoLWUUikflQmw9m%2BbCbCV9wk44NAgH8OQyt8I0HhBxSfxoduh%2B92TaNqCDPM0ZvWcTKn%2FPyVd5sdOvAblJjl2VZJNtMZk3o9OuPDhxI1lwBAoukdfsDb0TfoQQrBo70A6f0wmK3MwwY6pgGRCJBXhobgJZEYzv2uR7Z2KXS0k%2B23M7oTQSL%2B2afjpQaRijOionHV11r1hcKLj18a1awU6pg2Bu4Ogh2ygaRu95M5sgslqGZWSClJ8sWIrCJYvA1xmPQ%2FjmvIK5p5rUBTMlJAEklMkjwZK%2Bd%2FuY6JkX%2BEOZ6cy3hLx01cLRiy9esOcri16qzB%2F64zWponFRRmKnuaFw4wvc09brTBxrQ5Ad58NjJ1&X-Amz-Signature=ab797016de8d23a4e3f1078eb1b67740d50d8480f3d06d35023b5736870f804a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXY3PT7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5bjl%2BOtclTX8MODJxjNTYLcBLOsI5a0tPDhDcP8KGiAiEA265k9l4DDf8SX%2FsAcFLS8heaextTW2VjOoRJ6gpWlL8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ7wTj17bHuWc%2Bg2CrcA7gUvX3rPkwqiZPmwzEZSzzdqRaiX23Uz%2F5mkVn%2BAqtEBWdFRMO6R4diwGrae6%2BIY1k7Z9mBn9jdkPvR4a3DsLbbyRp5nUPRJnhnTH%2F5MycelZcYQTp3%2B%2F8D1%2BgjzcYckLmBim8lEqSrne8zf52nN60V2UxmgxMlUI9N26rneggmhNPB68Akr2FcQ2ZamI%2F6doM2YYDCYj3q0DtNilYmIzu%2F1G3CgPIPsKI3y5T71Uj5%2F7Wl%2BgWKeQZOsJj9wtbG91H3nDkEIWt31SDsXi8rnBieOb20kL3nck3z1myKjEazPlaQ9VfjWKvrn1%2FZjR5kiHcRmOG40Gb5isZWHEcDJyXnzX2rdaupcZ57ZRKqzQrqUGAuhQ%2FPJcKCft%2BosDP4wDPQB5xsmWG0dOD6ey2MysOQqxYsXmVESOEyMNRnvRFhzAxxqLBvV3CGWFm%2BDq2bzNVR5srAmowAMUru6QOoKE%2FAxVY4JVTAhvN09423R1BPewyPHuZUhADxmZcmiEgr%2F19CkxaX3UTntWchkq2FID5%2F0TOdVs2xXHK03Swk2f4HHOMfxVjcDkURl6aIEgARPHu4LgSg8Ht9KBjMYf3dgNX667HAMiYZnoZ9pbZqrOpAbHOE5JCzHusuVi9aMJetzMMGOqUBV9vpp7hKiHc4XYEt6sU2lFSlAFqtgkE%2F1ADkiIKidr82YrsbSO8JRszRyCRI710gWsd%2Bn7b5evkMahqiXLJtyzY7KF92D0xRwMB2JwiLy27cKGNZGsLfqd28Q4Oe5iPoO2asCStWmmtkjsxlDAQy6ez%2BcC7zguxs1EupuMAeiLlInUOldQDWo1lvsM8QZxaaUpssrjvmMEI82awqywNBAmYtOvuf&X-Amz-Signature=446aa8de971185ae276e3f36a9ab684ee740de704c968da11b93114739b34ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
