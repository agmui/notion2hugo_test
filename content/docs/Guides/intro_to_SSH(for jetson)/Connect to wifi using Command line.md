---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3BTYZF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5iitBA3iEKUY6bolJN1PujzyaoLBmubf2nefMOpNDXQIhAJ2ymptgjYHWaKVYERKsR%2BpM5u1ecrYNhABkS022eAyKKv8DCHUQABoMNjM3NDIzMTgzODA1IgxjTYCiPETYOu9d0AYq3ANndPiAoDtVDD9nBS5IMJfbm56jWgGIYtL2rNYun%2Bmot%2F5%2FJc7m2NgEjiYDgBGcg%2B8GzWs3cVvM2TSm811bOxXtLS0rMd0VsntuI%2BnRnncciv2K%2B51Y8ZdfHik2dzozK7LyeBJqbcWLI13JtlHN%2BV%2FVzLs64g5P6FbzgksurwZMoynREnjmn2FUOV4yIItP9rYBpKRnLwyUoVITUaVh3JIyEPmIVboXKeeUYuWFrBnOUrDaqk9KdI5itN7w7nIeAJeMW11TBC%2FatAra2eMWjGYsyvyTgWjhiEpAcFTWaj%2BSFRXCopvSmcFcEDd6oLpyTqog8ca69yybNQCRqkpvPsSuZQ5stjdf4LJma296nXv%2FowXwjJdK3z9Fc%2FAeXrvSxDLYPXG0qVB%2F8myiOeVMcuejnkU9WZXBIWsiKK6z6sM8x%2FgUItXu1dWX2tgNvi2a62nRepaEWJGQyQR0B3j4s%2BPM%2BODy6CE5iW4gXQuuVk%2F5VNdt%2BIWMEDLuiy5WtAi0mgacQLqnduJ0R8Ke9BrMfQp1L6E4rDgE42GOTaA8JovWRg1xy2jlXvqFrNgEV%2FIpXzc5IyBEq%2BDoqCkzxuLXzR1td0SCKv3WXnURrdyEGHtiBIF8Ux08VntsLXkr%2FzDxy87UBjqkAd3M7IP%2Bm2DA4waIZcUN3GI1uh%2FDTR99tNZV7X6o5RG%2BvJrq8HYwS1fILX3MO6THW5NaSlk8kdpFRULAJ9JAYHp7%2BAS3VlqAbvqEn2Kfw%2BCbcFi%2B2ZolsZJUq2pMN6VsoHWjs%2FObDizMoLO1oYXu3dS2scqsTCUcBh0gDzqQFFFLP4KTM0%2BKHTXppxeF4PCeDdx0NOgKQjLCzDsWt4JJCZAf88N%2F&X-Amz-Signature=ff2c1b21c2535766ba1ad435c308e285b9a260e7ff91a96818b3ebf35629a427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
