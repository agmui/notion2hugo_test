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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6RNLJC%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCi0vQzzrLzmXxzC9sGlmOK5t4budyRax%2BSguyIERQfLgIhANPwtJJzM31zjWt4HOx3nfZ0SeYu5oeVB08Awg3B4BWbKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bp44YXd0w4OmU3f0q3AOlsn%2FFXu85ltwpB%2BVFVG2BVtIgbiljvgAzkEhHWCqMrM3UhbUsiteO6U6J4etdVAmDd5iorWvNLt%2F8BsUw6otQ12bFFg0iRaHOP2hYbIcY9v5XZRM0vQApDl7TH9Rz3t7be%2BaeUUw0FPhXL5JNhv3zjApTyjjj%2BfcEWZgwKZtEIPnViePoj1JjlwqzFkjYGje%2B45oVN0zYdXkAf%2FXG%2B27p%2Fvei6dRb1oyJ3nrA7m62UGGSZ%2FO6BwjsOritphYRCVC54qnvXt39qt37P3hbJBN2zSIA7objk4WrG4jvxZxsgOhDdDDTzPPrvsSr0OXOc8IgdqFW64HrBiqGAgA0Wy7rim7zPbdAO1BLFG33FDfySsLFVhKrOxQWz7SaqhQrxBSH2UCXhh9f9tPQrY8Mafi%2FIQr%2FOfVnaeFNP3H5yPTrt2tRXiqSFK%2BnFdmV9ltuiUy63NwxXVFuo%2FVb5kcXrRhi6gxRn%2B%2F8f1ZHFlIJxMOs5TY5PSsEwX0p3mMIzkddXFNKVZ9U6NKfmGKKEVnYUYYUFHv4qYszer5CKOShUrwAEl2tHPpcP9alhjH25X4o8K4dWK7F9unpcNs6pfPMhmtVRrYlgd68ZYgMGXAwYiKsAb9ctdM8csgaA0KvPjCU2Ka%2FBjqkAQikjbDHmLgdqea5oCO7rO1MEOZx7ao49HiM7ky1lWZoKf3rgXMfouGvQtp5BJ%2ByHHM%2B5KkpYgyfGSIo%2B68%2FSiy1fECQ4cxti0v%2BSwghRqyEVhXFZA%2FCsRReWifCzj4vqiMkI%2BYDPkKp7NJ221QL2kbbCB458RIjWsDLrDBy1hLu2dQDwScAbcD5c3AqA2O6VR8mHJ737Kq9r3KjXEYJlVQDbplD&X-Amz-Signature=7876d8d94940df202bfac33074f514b060273493260ee27532f0832e2befab54&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOHUJA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7o5go8LoWF0XmFnXQulkefoZHHdZanBXeEuwPGe8EcQIgcsDzcV0T2SYebI%2B3ytaYqwcFgPjqi7zpxUYZuSv%2FwdAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNXxtaMyvXVa3JVhircA2AaSYB0X7Ul%2Bd4gPlkGmCbIHs6AmodC312tdgzaVU%2BfDYJpDrNY%2BXS4Gh1pqkG9JR8Ew52defk2DOjFpijbrPNFWasR2bhoC09VLDi7DbNuMxiDgPSXAclYxD4Zuz%2FMZQjOxLCAaPFon4zLKW22GjY4H5xBenuixFv9EGRWpTYYU83P3S96HcwnZSRPfcq2eBHRH3c4LUNcS8tBZVDzgIbUQiuqB1lFppSgi2BQSTylPNGX%2B8p%2FrsrPIxmpaciF7Y4Oz2Z2fXabcvDuE4ok0HAP4HKnS14iLi%2F%2B4ObFx7iCS6AZsrwwdTVeUbYpUYl3MIa%2B1Vda9F%2Bwc1t9HxGcPABptVOKy56RiLyjgWLKFtpKfQDQTcqMMzXC7nKy5xyIPnOM9TwWCITI7AUMwS2lHtplCSd63iDEZQ4pNgg%2BfaxbxLkR63meqlfbMV%2FABdlRx2YRYbkblOHKB4%2FQo8SXEu%2Fep6cNhNDC5MW2QjKG8OKHKiSKFefLls3MX0qgCd8Fzzk9MFBSxHfHK7TbNfh12ldMrwpRckmwlYd8PNsTI%2BHua1eAehA383fS3Toomf%2BnAH4yPQRoabiV16iJcWaiQDm8UHHZn9zCpXIsvw3I2TPWSGAuiBWiTho67FIxMJ7Ypr8GOqUByQo3iaf4Carv1RrQ3B%2BAn0fhyjOhsTEXQcuwZRVbLlAndoFkBFnc%2FjmYxpzmuR90W%2Fa6mdT6PVjMiPD6vXuLWzGhcERrC6PahW8Uo%2F%2BgQndc6iEfHI5LAxBjLiSFjbluI%2BmzEU1T4Ri04kEiZgfFAr0dcuIhWc0u9EE4ZzVdb0aedyFe%2F6nsKn7tOyPFR3vxODsx3IggJkyDV2P7shFL%2B8DFokYc&X-Amz-Signature=5ddf624a66e1a0dc06d4749142c64a3f36277e07c51e0473f87eaafc7a040e08&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
