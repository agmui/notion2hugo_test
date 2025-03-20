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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBBNQVA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICMhRx3KZxumELr%2BwWKApcKSSugi8r3eAXAZIjN4hktgAiBT4wHHR2ISr2Ze%2BTIDa5akaHAk3w0IpCloE1FHFKI36SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaijXAKPJ2Y14L9e2KtwDqcSgyD0BBSjNULMFaWOMVgjkT0w16lEtC4bvnqB1FOx4n9xzsLQuv272OOU813rz6mxhlzip9Ux64qeKW7VaJoCh62xckkPyxoK3kZxr%2BPBnGt6dVfD%2FEAECuMOqRpAqwtZaMhFX9D8hRcRvxnJD%2BcWtyCh30jeSJCCotw7nwiQm10skrdb6jKlu2DdbIm5I2siqEjiPz3jXQRRkULcO8mz7TjRZxhC3hsck4zzRP7JxnXK%2BeVaCAfpkxFXmUnziPkppHcCZcmwdU4t2X8qMj4CCA3l9F53bilYT8Fw%2Fj2EcYog9wlIr%2BwvVI0UCUdY7Pwl4AvsTJXfEvGYJc2a5b%2BVQIj6wYJ1E7g7IoEr1uAfHaITY6wc5%2BYPUFpxW7JMTL1f4rwp3219aMXVGjlHF9lZ8Mh6kspA%2B4KUyOBohSQfvsCdTGWO%2FTWateAr77fh3PbA%2FqxAjJKN%2FYvTVDKGBXbBnHpCNfOL2ozGW1BOE408TB%2BWtiyRPI4LCSsBGIaxSsYAtYbXaCkfkttZEoGGOWFawKM2GvTad92vGmHZHZi7PW0qJbudP8LloXO5PUsHUmK1YAceG3%2BEILIul6Gt6oN%2Bs23Yv69QHvLowldgbqnyncuTdOgEZCbl1ok8wysfuvgY6pgGgaS8xh7EnFq%2BCdnk%2Fisdj72hjuoZ%2Fo5Filp51Od9V7Xir1CrROyuUOinEsO96GNaQkxDEJrWle2oPeNR84woTYQEq82Eh20S2vllVXzyoXonlTffql%2BzodyfW0LIQIBRRfvIm83eR%2B3POPo2qXMSYM6LColPX3mZFAMmy7erjJKu1e4Prrlduwdx4879le7y0S19W42Xl3WmDWAd08XCuvGiQVEvE&X-Amz-Signature=598c2a3bac3b5e75b8d86bea07d338fd1269867192664c16c8af83057cbce127&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFMQPV2L%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD6mqNMLb1HZjd9F9shk8wcFKo89ASQlFSZ0qDKdyoi%2FwIgIaXqt0OO%2FQmiR71YtY01WdrI0eBiQKS965rWRmdlFX8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRISoe242xNzRqeRCrcA7qxkmr26MKf5xu%2B%2FGlxIYtOzWeHVQOHz3caI7AbE6rEkNsG4Sq9ZFPp59mvhqb%2BzMP52QwqwXNHH8aaHPTuEKGvqTy00A7bPvkw2gV99VtVpSSQAV04%2Bk5CWP2xYb7YRgm0P8%2BESMf6juJ1dl5g%2Ba4wc4Al5mE7bmEqIxd5%2BEh%2BlL3wmgtdbe0PRb%2Fibe0HbyWkx4muQ2K0%2BAIcsZXYEyaNL1m%2B%2FUm%2FNGmk5%2FvFHJBOxIamIO0cA6v8P1Ls%2BtneN0Rc1AbnyhxJx5T0Me2kzQP2HO%2FFGaKFInzjhIlVchOEUp46Ax3h33Uoo%2BIGJs3F0FHjG%2FObDa5%2FA%2FSWKzx0gpXCJEC1bm21MpG%2BCA6h9ajvB3%2FoK5BgEfUN9dPmAH1GM6%2B35%2FkBg87jf6jpMciw8Lk9dhnajD5n7KFWxn4rTwgrFQ8sWkd8ffmBdrJIJZSPUF5%2Fo2yOZ5WpK6uOfaAvp8b194cHKCgFCI7R6gV68%2FQVAeIDBxbIi7zWlvr%2BABNb%2FhKr%2BWBAy13SpcB0%2F2YnBt3wi%2FHJPEGDMguwGuH%2FsZnoOPGmlMDkMNJ8GqhRFe%2F3gfw%2FLzwYV8BI9vkSVbjkkQffr9EzeT82Wk2%2BFt0RYfCGzS%2FVgv7RuLcdj8nqMO7H7r4GOqUBYO3RackE2GwgxuUaJoIv3ZLzpcGkmV7bmkG%2B5fbjmzG4EFbVNiRsopl1RXjV0xXEpOm28A9xBxsJ2JsNE8QCW4iHOA9CSXypSQkRXufpOlI2CcfUFn2VQgPmZ2cR6da0m6FqvTY%2BWiJgtSfhsxpYxE7mt8YZ%2F8rX9I8uiy3ojbK0galAEtLtEdneOvCzE29rlML8c1hQknYIb1XkG2vZkkxHyOy6&X-Amz-Signature=6a03ba6a19046e2319ac28620b1ddc357b93eadc9f606c5e7dad656b2a6cd670&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
