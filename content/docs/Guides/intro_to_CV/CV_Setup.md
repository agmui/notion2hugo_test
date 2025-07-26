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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXS7KMRA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHtU6gko9DG4%2BuoKMXk4m1Q25cYwbckio8TegjT8WGsFAiEAjiyUnG2rzCe1m3jeOva%2BGVoeKpfdQleeSv4GY0doVFIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDC4g0AjLc0oPjkl%2FEyrcA4Rx%2BZDMQYjaW3FTmlr%2Ffr29A0TttXXNuX728SzEgNKEapgnNV%2BtMFmkEHnjt3g0i5oz1pmp%2F46%2FV3XWQaLuE1sUPJFZt9YowGPer8A3fodn6Xqpm7sbfyq3%2FGCZcHhKJOYSg1cJrdQdXSqC2PDC8rtJ9cB1DBha8a5U0NbFoAr7oq6hiz17KQWexCadru0MxaklElJRVjv0grfivEHSv%2Bww%2BScbj4a62OFuCvS7nDvGGDfi%2F9u6nsVOcBRrO%2BgkUupCjn0ZJOdlC1Xz21rPRU5gwAKqdFdUGaXkfUFNs2mg5GwVIwg5BzrBMBpdj%2BK1DylfFw9T%2BUCwrzitd5KxJTUtAvfHjZLQTOz%2Bg6UIJbKScjjR8HWGJKAvEKi0r%2BdLFc1ZJg%2BVUK2ZN7F2n9Cbz6cWEGzwLWU51GKt6i1XcZ06ilnXqFi2NEQj5IlAtFfXQcujvP2cVWEOK4cbN0cbh8l%2FWanHahvcT5yZDnQQSHEXSUBW4vOSMokx9uY6ferhCEIHFavsTgAMjWLfwcNzMj9IDpSq1Q95IaazbWL2Jp0pSTOED15nzbhIR5rQsXzkXDG9QzKwILMwS1Q0HgF4bXeOleMQ%2F9UAuqc7P1b2uSJi516WbAF6XlgdZYY2ML3Rj8QGOqUBTRTflNAGAhE8CWjI5qT8Uw%2FwHGBswTUpnvmooE3IByLA2344yi4mC9FFd9a4Sa3M1zn24k8Jfs2wmHvBlnzrUM84zuoYML7tw3OB6A%2FJgIkjLC46pQH7CpVmcAcKZ70VgWv09JvohggT8689KYcLt0euKxQTZ8V71DMlFnBXh8k783WOvEhit%2FipGOnQCLIB8i138wLG9WjbyCA5hvqG8pUOjNI7&X-Amz-Signature=cc43fde6a53746cfdac55c85ca13d284f47c854c6145bb28fc6e50d71f564cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYPLTGI5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICd9E%2Fmd4qCGFpZwc7oP9UQC2aUFwq7Wx55X2w%2FFBKryAiEA9QVUAZyzqG0%2BfiP%2BZzM9ASaw%2BRLPVqVlCKcBUbsgt%2Foq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDcU9FW47WvOC%2ByJnSrcAw8kGLxOC%2BZ3l7LajuzuMKLvpf3Ny%2FckNpiHjJ5v9t0Hu%2BToRfRaYAk%2BNvTE5yNiqy%2BpX%2FBYMKeBGIdAKwv7ag6GsUzbuNE7o9Kyy4ZLJWPxfBadmfdqwYUUo9lUgkQmndSQMEZqXPRJR5OI5QKu0zEZ1OzBIAsWRBEhg1Sq5AyJX%2B%2Buv6j2HNFF6RJRGp7AWz8t%2BSSlgm4uxjH7aJInThweq7imSr0P5QDNntRZV7euxLnb%2FSHvL6C3tiIRnoZxxoAqXqewGWaK7wZtclmapUJTYYyX48lypslZXn%2FVmTiNPJaSimAsCvhEr5DmAjkj6lPqUlist%2F5Reo9%2FcEPCAql15aKzQki9KTWbCJdzSCuRdCwqr1nygq7oI4F4soNEcchQ5YupD0W4%2Fl4NbjiNIOgURgOuO7xdCCdNAbm9a83eo7hE8sj6EgIDRHh1Lc28mRylUcqn4Ep%2BY5Qeul0xRC6tO8YZz2XD5J%2FovTd0JkTizo7PHeWb6%2F%2F3EFRveFHr5qOxYCCGzq0TclsK3Nc7t6F3tXFkoUY3Gs7cvOLQKhgFwJ%2FgsSArfAeztvLXrlaFP6zDLIDOjMLbOl%2FIrZrzyQw9MosluYuwzgWNFYbDI3r1UiwDyMvRlQSEpFciMLnRj8QGOqUBnWGnDdZ4VJdrM%2BZ4cx6702l3UQuV2aNyqGpDycX3seojSSKUbWl%2B9znvVBDuYL0IyqSNMwaeY%2B8byOK8i6C6dpnX7XQTkzlv5NXEPuT8FrbdeXcUDBsaT8nxOIdSq096fsxUtdVCG1f%2Fzjayv2aygQWkC9BfDege9pcMjseV%2Bpre5ymiWlO37w5dgWi2YN%2BKUwYhUAVC6b1qpC23yjcH8DqNyQoH&X-Amz-Signature=96c53273ac0469562e5b5f707e81ff0967bd97a7a8ed7fc75b4d4d790e6263b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
