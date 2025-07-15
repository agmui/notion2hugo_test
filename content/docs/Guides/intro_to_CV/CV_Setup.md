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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTECUK5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCk7Pa0V8WEmO%2B7O7KqOpETX4yVxGp1JyiGwM4k8K5BPwIhAO8i8fUfiRYf8YSLCH4hXkRRFnxTmhqnQh4d52eVQeA6Kv8DCEgQABoMNjM3NDIzMTgzODA1Igw%2B3Ivy5Vy%2B5CkcB4oq3ANMmtW9OhZirramuhc4rm8qZdV6GweXJYuNLHFo%2Bz%2Bn6QBJpXFumcvWs%2FbmK8yvPru4O0QpR6Zoh0Z9jzjdLyThZG4Wfsdwg4zglZKnXiSEuQjfMqUq58UGmefr3Z9Zy6XNl%2Few9I7r8RWHhdrSzu2I4lNgbxjabuxIEZowXNCbX936Z%2B4dUrGvP8Ueby9ws0JYm%2Fvto%2Fgq4a0o9cRnjWJe5OpJoxhImECmKhtSG1HFyJGKrYXiTVLpnpsDJG9NvOG63KQEW3YS4lyjlN2e9nqiS2W1Qjx7XnKoOhnWOxFJtCi0jAbgVzBR07gEHSp9Tu7cV4uMdu8A0jxImGZTCkEV7FABMpRX6a15LPqPHIbKdxusFWU9LTy3o5I43RnaC3XbGh0LPabCL%2FSV4iCq%2BPII7w2QYlysy0v8tSGlc6cxscw%2FDClvzKvzcxrJ0UKOXNhzQu7OkFaNSI1XriuFb7LmCXP%2BWGlLK6duJf0R7kcZiaunn2EBsdHDKtJTnye4NgjyQUWweQXQ3rlHy2hukIbNXzp99mHDeEUPD8WMW3KADZ5ipDRiMxB0aG%2F1Y8HArUSBurGb7reiVftF5TjLc9V3K1%2B0he5seb3Hog8hDgSavjLPz23%2BagYHos9fNzDr2tnDBjqkAbmlvyEEqOOl0ZCunCk72fMBnWlUQ49viWF9idkxZist2ZNvIrEYRt2so8w09uBjoN6eQqh9r8Od2pr71GVA1tqirqn9xMdqcWR%2FIbUkeyvAke%2BMw7fzSH3v0iLTF%2BRD9bNHlcxzQJQ5nJYNpo2SMuzg1AETdY2bCaoBMx5bG18GayX5M0Qe6I%2B4FBmFcdPUFCKKBJZgGXmml55Kc3vH3p6qhXG5&X-Amz-Signature=d0140e5d418f2e9cdab88da9de1ae5bf63267aff22715206ae57f2f750b98e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7SKLZ5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF9BXaQYatEmg3kUp8yIUq5d2Sh4%2FPEKQg53gJFBQDK1AiEAudCjqJRzwWGL3lefogIFzGpk3JsbFsGXveuhOmD2KHAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIZsvfeeanAnqNAGASrcA%2F6ZtuQNvc00lI8X1A2%2FveAKgNa5xzGpQIOurVlSUhrsWJr7EajKK0wSoo53VSrxzmSvlSczdruGtiWJWf2HZgiSNHLzH6Hxg4oaOcKmIcQyhxJqC5gly3G%2BNV9QE%2B66%2BdEgnSlZ0MizDHHT7ypeLXnf8EqqasPU5rCEr3jrTfTTpeHbk%2B7z4P2IMltWni%2Fh8PG6i6NbY37fb5AG5m7uxfhMOWFjEgdzTww9OUjRKsfQCle6hEsSbJs%2BFDhkwBUCWqTkrfVMwrr1urxqdhE%2BjqIro9yyyv7JSG8%2BWZFxJJBXb6VMMEJfyKFCOOXlIqUOpbMJJPdR%2FKZvQojvCM%2B73kfGLiUz%2Fw8TFXDlgWC9eQ0kxuqgGY680ZJUEK9bLpKgUBUU%2BZlLUIHomE1sLjhlhgAO72uznLwaUge3%2BFkWiEjuntCKGR5X5KKW%2ByMVnEGSj8rtf1PUAsmHCvHF5k1GmlYOhl1Ytg%2FKF4oDIcmDryeoOoDuPe1sWFzt187KNKSh7OSuwoUTBKDOI11mr2JaMQOQ2hD4CxEDASpy%2B5%2B%2FPJqOQddShFeKyHOHfR9WU4zv0JKx7EfCQNMEuxl%2BD%2FeAyTnKre5dV%2BZ0xvCVnQvvdrei%2B6MkaoEwvrMXg3ivMKnb2cMGOqUBglVNGOaFiNQrAItKLymsgN7UyRHGP%2F3JphzozHZIlmw189%2F8siBcONU0L9B6UA%2BfoacNpOIL1WyYATazKIrM2C6spcjOH8KlpPLokxbMex%2FuSCqJNkhib6c2jmsAX%2BDxRqurCbRV%2ByH4RPn8WDPgn1Xyf1%2B1WjrCVw%2B1k89fvRkZVYjqmtnSNAeqs%2BlIqmXzyikzJhUnKXhvIGBhqwKNIhtZ9X3f&X-Amz-Signature=182c960a948f55b652c24e253e1ee0261c08373eb2eeed203af551214d637dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
