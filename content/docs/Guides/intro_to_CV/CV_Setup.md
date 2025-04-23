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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQACLFT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDW4CPVxbvzXt3joX0qPdo4F5Rsi0nkSjGTu6DEYlWWxQIhAJNJviapIwmo4w1uRXq7YSiBUVSBdpKoRLDsU2GZBu7uKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz062NGvRCAdPixZa8q3AMcsVwguQD11EZ4ihsPZH%2F28SwwnMEAxOGbeU7HkPcedDLOUEWNixB55mIg046sxUwh8a%2F7t%2Fam7LnbgXQcaG6rxILjO9Gj3BAHqvgskM8kVuhYlchaZlLxDdsv265jsgURJT6iGWDTlsi6fIEuN%2F7suJ1f7476ZcpcSB6oC9fOyAWuxSn87tMTxUW7joFtip67iaJWP%2BujJ2%2FdMOaNYMnUryFCEfF%2BH6OGRA5a7jgHncv%2FopRKYzztfmjuMHkqvm0NNtFL63M10aUxqXfVGS%2FVjMGxdbZQulThLJZ4b7J24SKbKLdNKaKGNzmDVjPXXTI%2FgkOhVZq%2BJrW3ywHmQ3u8DrpD%2BjYeqeYG2nJ1UE3zMwZBftss%2BcUb3MwynfQT1VxNRv2abwjvbMM7tn7Ip4DxQoGym2H3r%2ByDIwaEkMkjfM4N4Miar2UoRvfLnI4uh5YPfdxGtXa%2BpCM4pgxv%2FqhscxgYJ9sIucChREiOB82Z3sU5%2FLkcLUUYbOqMVjOqeH5dsC7977US2S3hqnmkl6ZUTskTW5GXsGYTO11ccQfG0Aj0hpRtTNAuvB7E5h3WdqqOqcXG7zhToWJqklqWX7NvYFgt7CFp7ZPoD8E2%2FmH4z0SvT0sxe3SiPUwaEDCT16TABjqkAUSU4xR5NPgsXchw5Rb12iYfeb8ALDed2UKaE4Adcc5tdz2s75%2FRJlXdOX9NbpjwNlUueiJyjgFbFNeDhcRgwGLpoLPI%2FUjTyJmsfF5Rk7BZkW0RAeXXwk4%2FC7CL%2FlbDLNN0S679rDqFxrJxqMEbZMJ90dAjWQAQGiS7U1vl%2BCBqqjzpalhEk%2BUGLQFcvY%2BKp88i4fm65ZmmYtJsbgb6jGJhX2ew&X-Amz-Signature=aa5d2ba13c3b95d16811b6bd30d7a58616752c5dee3d21d8398533cb55edb55c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDKSG75%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFpxuOuCsll%2FWzxqIiojNLWd63Hd9gEu488mvaRZE%2FHHAiA4i%2FGbCQrIC%2BL9HaY8bwNoeUAxQBi2Ii%2BbnwHik5%2BEcCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrlg%2FtTMj9U5B%2BFqPKtwD3V17bv8WD6ayx7WkCaOiVfmxKnNvyhmPxdU%2Fs4YzeDzb87g61H0EdSlfoN4YZZ4lN42csEz6Jq77aoxtAXr%2BwUtkrxtPkC8nlJnoOQvVRm8Ho65GSLA%2B%2FfVKCGfqx6nV%2BfC2ztob32yeKwO47ZLTULZFd9t4HBADRQI7Ruqao4VJPLnct2Ci%2BVNQYd8jQXIBtZQm4Vos1S86Icyi7pKSJjT6WiwXNd5r%2BXsONWbEHHLFqELECaRN7xxYbyR6VrUVx6SZJFnOaEy1F9iFxT4oRWR0UAbmEFZpkRAomtSuT%2Blx00%2BWq55fUI4Kk3kvpmTFQMppDg5A0Uszj53PH9n8TKr974woiH3GU44P4vwKtBWUVCtwRW5%2FS2TZd7HPm5ACIWc2vnafP61c%2F%2FR3THjCFsOTP%2FXqsFZG56%2FqtIYTdMeeLmTREqp%2FE2O%2FbQGAVWQeVbr5wNdrXzcNHDH34cvV8PZbUhRiFEMF%2Fnk3kxgqZNXDKNfmaTl0YO%2F5VtK%2F5YOsxcNbN7oTrdTePvv777pVidTI8sTUensjeEx8nrhJIVBf47rgEKsKCkQ2CErKdu4u%2BYwtxxofNUvKYaeQosFv1bZNOo4TILeiSLIWs3OElmHRvyvdUZB0eiXABHEw%2FdakwAY6pgGJ97B%2BC99QHTuCqeeprbLu37azVlYpxs%2B0RsrEaIdawKFDa8JPsy0BIgv71d7iwvZ0ZBJaMVdLqnXZ5JvFOzdXaBfo9RpABI8w9h6mCr4I7GYnQBICr14YkLA61Qy4dXjFd%2FuBnpwN%2FPYFiYfeirD5%2BaGgS3qW0J5k5TE7aVDiq6tPT53dWNZbSvJXGGhizHMJh8iaZcS6MouHyAseWTUzrRnWbJvf&X-Amz-Signature=6d8ed88b7d0fb38199ea776ad816bf4d372fbed1004bbef6e52691b1fdc2bdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
