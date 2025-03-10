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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBXKQVT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGpY3ZHWSJql5tPkUd6WjygdKvKlQUrQcDcDMuP5luT%2BAiBw%2BDFJubV%2FqvVKDFjPFjMqVzsUEeGFlSy4orKjs54JwCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHBXw7FWcIkAugQ0KtwDPYX8zc2M4OIVtYtUVPv6BRloqTqjqN1sQaZ5GVia9OS3omJ6iE8ND627YIofNFRBcz2h7Sls%2BLPprV%2FngRr1%2Bcu%2FN5uZiYKCBXIh3i1VkWkqDyYIla61xlcG1K4XETqEWvmSyqhN8X2VDH%2F%2Fb2oTDnh1bmMKps5icS6W9VR132VQolTR0HcN2wtikV7%2FZCl1X4bkftfEIr50fbwAPCPosmvuQRr5CcxDvK2bejaRvKTBiMXWZC%2Fl74sMsc19bgf3OxlPwnInRsHrYybUCjAu42JSkuC%2BKKpF26XTfkCqMXtdUJwzTO9PlGdkE6K1tWYgLKjGAsFlMCdNRnJHCJX5K0VuE2NbhHYeUd3IlIDA4U8KXcVfMcK%2FE6ZkHtoWH6T%2BlmoRXCD3JTD5So3fTra7Stahjd3Q%2BXiy4AmhUYnPq6wM0Qu6UKNLmwiASkHGPfdkiq65QSrz%2BSzV3vXamNfVPFgaAJr%2FD9PnRApokKb23%2FwNVLdBR2RV3AN5LiqUWAsei4nHrZrNRaXD%2BuztU9YMA%2B%2BIAk4qsHJjHBQSYN%2FviDxRfI%2BOLUqc08Z9DcRcNGKdmsFzubOPI0tKslOvOVvdVTv2NtNWUmtK1sF2mFaR%2Fcm6EAig3fx%2B5xnsnvQwgsq7vgY6pgH0imp%2F3AHQtiu%2FuwaVpBrT%2F6ES0EqnjFyxflzq0GREJ4piVbAsypxoKoP%2BjzrCOz1VsPqqmp9M4IdczEdj%2FSNJ4s22vnUW8%2BPgsfGu4sjPleHy4u5UXo%2B7pJy0Y4wZuHd5lsvMmiwQ39A0ktfqw0hlNbPgYe8RzuPXFMJY4vQ4e%2FevSBSuakCp7JNYmhfvqCYFsl4HobcNIXKEl%2BRdzeItgrmWDH7%2F&X-Amz-Signature=cecfd5ed1f75f2e16bbdd948274ad8ecd2958c308430ef3c161c1f46fda06e0a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPNDBFM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDPx5FkuD99stVKmMqekVvznYXVxG7y1VkiVEwGYwnm0QIgYJ09NIhxqnFcR%2B%2BTNAUDHv6WVMNlIlm74oyVcIu0sSYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXWm3Fqrf7V%2BS4IvyrcAxnL2c0b9D6HLh91ur%2FKfXiLHis2R0ZXUKb2%2Bdr4IyWK6%2BZ6WOaNrFSRqZYXnpK%2FZ4M%2F2sZA6b3NU%2FOyKyAaSKm9%2FJZePAs1u4QK6EV%2FJs4VJs%2Fnydw2rasym9AU%2B5grRdWn0jC5Fn%2FkOYYd6hRNO%2FHHPbzTkYLYiRAWI5fa%2BhGVV82sFyZX3icZEJUzwVbHCCGZE2vvPU9kicmdDZnta4UafhyW%2FFxGN0PxXQrLSZKBHB00TTiiWSz7I3lQYO9hhLz2eu3mTJKSTEkAPfnNdpuRVxRKFki18QxVFYC0nd%2B%2BMKacnrY7HTf9mzM3AvXrOpoCG20oMDe7M13lG%2FaO2DrMGSC%2BVCcqOq9DjmHrRApn7Ra12NpLK710Lgzp3U5YLHPour5MKebFkhwvOTbklZMxxilh8sFNU5dkNTqHRgt9dpJQCIrY1TJBvG4zXiS3G7YpVdZpKwJRhJsCFohjTjQ30n7mundLiD3d5EtVr9xTvBlPb5I6j0aeNaO3L03osFMu86JikveTtMBkHOf9iMi9QApxhnTspLrtfzCIAP5ehQ4rcBTO8f2O6HxgEkwSTVEZTzyG9m2fcEXG5ZTzlRCwyRhH8%2FKPI70dwqfmCcWVwkUal9NXJK3JT6jQMJ3Ku74GOqUBLGHs3Hd2Q9on39QkX1lWU5OmcAcGyQg0tQtOqA44LaY8MQ9lv3fmjk7MSZWMCtGeUpNJlIZcCsoGvMEv2PeLLfybmO%2BmLP4x8OXmT%2FlaSgEBndOFGXGLFBKLIuvceGoDFUfS3sgtj34pADc0qyfA9N7JtABMVYsD9u1JSFDoDQA0uKmVV5btKCFhU97MMRKDlI8W4SCL29yQuTwMhLRwwJtsY8u4&X-Amz-Signature=593e03bd975788f32d21400b943f855a1c71bbaaadebd78ab4aa02c9e452f989&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
