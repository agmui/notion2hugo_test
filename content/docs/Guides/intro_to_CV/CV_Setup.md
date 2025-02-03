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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCMS34U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICMRYCudyPnc%2BMkrFGBGk%2BDNcfmaRTmISI%2FeObM6p%2BEvAiAZtK97n99FrBSAx6YUbIkeCPUdMcNhpX4Hkq%2Bm4qG1NCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMPgWIS7NqFGvG48Y9KtwDdrMr%2FkjibWZTZnQvUmlNRTu8mH7Rb%2BmM9U6AAncj2eUN9Cah7dXHPivy8GhHHoqSn9AIHQWVPMQJEv1eF%2BPyrBN8fYnlFvzUD1NZvxqaK9CrFNyXqbopzijyRHNRiRurEHmEy7zomgZCXR%2F%2FbxBv88lqq2pTrRVeMONXDQY661FiFKv2%2BzkFYbJQTPvHZBqxQeNK1oaliXl0QRbTfbbsxvY2pXPda5k70T5bsOSeoFqX9wM%2F9wiCgqglkAvvurue052zRfi3ihCS6YqQAWSAj%2FhONNRauj%2BFgQJi%2BVK1ROcsefFB4bHMG4WHahgafO96NtlytGn9s%2BCObcp%2FCv2tI7yO9l7VrextICfDShfjTCCOygMTmUrjcLaKqZWg8K7USFXfatp2sFN%2FHLIabSDDJidqSiJoxluWF9NTP14V4gTVaEnUg30Rdr3ZyXLG2bBallQF9yxwCp4K9KK3qUBHrm1ofy5V0u7tS52lJnBc526Y4As7mUFTAHqn6Sf0cpjK5dxOWnbc7iKTABNXdNWMf1NL9swdASXzvcUX1piVtU95qSI0RWbLdoZ%2FXIYhDD%2Bfj%2F3FMu1pq1E5kVVSNi%2BTyrQNX63lcgni8dhpx2eMZQqZHe%2B9e353SZi9J5Ywp6KEvQY6pgGLv0pAuCIad5lDhNxKkQ1addmMBoTaKaD7w0SSaDUwquIoQUiZq0lGU0srzlK6prtBELEBoWwsk1KDbFgTWt5HueACW161PXb2EVmaXpoARy4T3gaWyjZFaZuY6I2SUs%2BOZzAFtCJfGHf658PopRyvSTiJtjWEMIp0p8DsTl3exgK3LgIXLmc%2FZO6GdOZ2ExVtGPBth%2FlBwAXjdFVEP9VufOaaH1%2FV&X-Amz-Signature=fa173a517324f561b1e5da3ff6c120b0ad88753104207eb36e91bbd7b9549ec7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXVAQKMO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFmEGCrNA9FkSAqorvF0kry%2Bkbrcl5xhOYmzvkFPf4btAiBHTyVg5FJda9duawp%2Bo%2BKkA52YtlrhVN1kTuC3akfOSSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMLsrS3KJkdLt1G5dYKtwDyoJ9Pm6JiNZqMwwMpcb9mqTyVUXZyVXK7Ca4u4JESSfgVKOewzYt02kLEQ1TfV78%2FaG1JEnAZOW5B%2FBjJ%2BFID2FQFiNlGHV%2B7v1WiEFwqgMwBvy5PHPzeVjBur5cMsp9oBaBjq7%2FhNrT1%2FBMntEm4VdVw4F3dwqkM6M734ZC7hFe2dp%2FasM4gVw4FRUxiaFvqgY7Al9e5Dk6A5biaMjdimWiH7s9KbNCBMd5gBjOgcWUWQYbjkp5ugAicC%2FS%2Bs8sMiWXi%2F5FcRbgkrVJKjHi%2BKQ3Cqw1%2FX5K0twSONPic9DcnUMSJ6i5c4t8TkaV1IBJWonQUKGcg535%2BKCKzAaKG22veM5VcUaHeFzspvfr2PwUr4vc6w6yEWNkmq67NVIom2k0FsdLoWvihWI5BxK8XPvM7g25jQoFMjL8ukOzG8R3cFGlhgh43JbJwvmOC9jn%2FuUiZiLp8YmOJcHero5FPebBaLN5Zq%2BRlqjVH8CoijlNRlWzSMMUxmJSWBLppR9e2nNIH%2B00QdUv05nJyQF3eNH6BoG1rF8XesFXST6U9gL7SlHMbgzurzKW%2BcTrw1rZDJWkA8t9gUovUtoNAg15tA7qGb%2F036vPHXflgfqsArs%2F1HJEOXsD74cHAxQwn6KEvQY6pgFWBzax11NV1NfScgIbAk%2BjHJW59URmLn%2B2LSzVjRf%2B4hUVdmxw%2FQaUIwejrjIAJNXf3Zw19mIveSUXT%2Bh3E9OBz68Cizsy%2BsQsA7sws5UAvgYsay%2B33fgHIGHFdi1JV%2BRJgXnmQXD55aRP9zJ5Vgv%2BqqM6UZ3kVWq2MPRr9nXdQ6O7%2FKodsiQeRgiamwphsvb6MVYg4zbDjQRujGHrZFJ56pWcc8Ho&X-Amz-Signature=a109d9efc13e040c8c5a78ac2a643c33773d158fe79d96ab439151c605173a49&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
