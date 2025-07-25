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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXYZYHP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIB1RaN%2BbvN6Zz82XBD2KFSGwi6iQOa%2BP2fWuQ9U%2FQEdTAiBToOmjW3hi%2BuJb3nPqWesZILirzyjCvj%2FIITCv2ME9cyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMl0p6R8wRoiK0oksFKtwD1Ioj2qs3kPKPlx07jeiRdfy9%2F31gCa5jj2MxQBVFKEgk7aLUfyklY9Qjj3LmWNQ%2B4yyBbGh1YCdoUhBTrssk6BxDOq4VLARY0%2FzfJTMPanqz%2FhRwTTY0uRVtWo0SOWGmMe2t5Zd%2FVb8QyqfNnKcalRRcK%2BsMA3Y4GrYktiOrwpPNPYQEyWMm%2F3RitgF7RRLNhHG9%2FHwuc4nfvBNTyrUgZ6Ss1CkqAmgX5kFRDruBrqR5TkZSW839zVVgn0KK6t8XvA4M6zMnmZXv1VtPZYrx2%2FGEKraB1OjUiSuwQG%2F0QOlREbSyjfXKPCLU%2BW8GLLpF0T%2FVPown5LD6LTueHaQIXFBwBSFQ8kUXvVF9t94Q8PquuTgYPPY370ZC7wgliXq1eVp8p99L3OPFQVmyGvRKo9kQjjVa0OSmFvcRPb7ceEZT8OXyhy1LMCpBmyoZ9mrt6sk4s1%2BGIdtAUq0xmqIqD%2FYFTS7hhBuyNB3KC6XSx9tcHG6frbZrEE048lHDMS0WBoARPh0FEB5PMYBnLWg56NZ41QkJxTCs31jZUlwrN6GXxVDHa%2BqYziq4YqGDBDLv3RoqoKKNCeaXe0Pu2yWIxBEP%2BTSFHy7kO%2FbNf%2FSV%2BMb0bkt8NXDsz2i8Dlsw1IqLxAY6pgE5UZiSqSGb%2FZOEU69MVeUy1eSdhGB1OHuQy2GQWZ0qYKJNwWmxf8qgiLcbzFRgyHu%2BWUIcpdvDK1ZIiOk3Pz21Ol7BemI3p0P99OYXC1fgadQOzqBpHDAphyfa%2FwDDqHJ1N8VJvuI2zHXkoBB3e0fHggOtedPGWyMIEwznB9DshJZfyX3G6UizRHTWEyCORkVwt3MtAwob1%2BOB9uG1jCVR8BsozHzn&X-Amz-Signature=7c4e5ff58c007141f64767df4b97a4ceb5b4b95ae908115694e41a2941b1e046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3HRNHU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBDzH8B%2FmJNv1PZBow6XZZxxihHSGujR0slo%2Bcb75K8QAiAUI2f%2FozfhZIoRJ28Ky6r2ff9qmRZmMaRJHt0ZGOwieyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM55uvNvWGCoBNBuQ6KtwDRo3MaI5bUGZuQRoL5AagyRkbeZb0fzpF%2FmN1FQquI59jUSUNN3oAy1vbtsuQSCb6z%2FAbSAw1P6L28eAtTQfCjJe1YVflNT0aElf2GCFb%2B2sKDAxqhYO%2F9e7Lumi0xfhvh9QdMV2KNtteUA%2BqSAJPCser%2F9BjOj8YLJAe8%2BLskGSciA5BE%2FAd4zJ4Dj%2Bml82y%2BD8%2FBKEChm9TTmJwdk%2BajkU00Vn%2FTuDHpKnNxS0ymmpxFl0hJTpMEpqyheRMl%2F5NWTJbxe3VPnUjmziCxsJpDGEfaI2bOwjZP6j3fmfL%2B8yBzxgwTP47mDka2nz5ducXwv9YDWK0X9sRBpxFVjbew8zUBr3yqiVp02%2F1HWEghHJyQRc%2BasWSY7FlaSMW1Q692Tu9HK2%2BLy%2BAR8y7rHHUN%2Bi4ZMsE8Kx0LkiPNhgLAps%2Fn03y16UVbFXFSdc4jR%2BEHvuGJrkEwSJBEjTeWgGFZ1qVkXLvk%2Bo6S2K6eJOrIvtrPpr6pDpTog5AAAW%2FmvdWIcIBYVtZIInyigcLwsUnJ2BoBXcicl%2F9D4S6nbJXMsKHZjhP7St20QlalH58Sd0nYxrjuQJxfdxozNFy5j0S26tvY5usRe%2BZwwTfOSFP7TrLvh7aWf%2Bc0f24%2Bx8wxIqLxAY6pgFyujbiQCqK%2Bbni49NrOtqLbZrLVCr4q45Ng1Vp6vS9gd3eA3B%2BeSguQVWhMFwMQdXnnV6%2F8tWzKkRrL%2F%2BuDYq5MWlqjh7u1rH1RJx91rc29efMOIpvZW3BvZlTqXxC%2BDu8PTmx37tTNfg4LSv5sV82hph2jxAfXmF%2F2WdQM2zR2VaOIX6dCH03IRHbWtidpudDvM%2F6SYcmETSQ6fFo68xpJWTp%2Fs9M&X-Amz-Signature=a55dc153865dafefece8d227ec3ad1a7664f9eb6c679c7e9a947d22f0b7102b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
