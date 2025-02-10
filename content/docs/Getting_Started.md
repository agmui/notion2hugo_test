---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOQ46XD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXPFq8AadzI8JG5YGrqs%2FLCndWexTjpPsKiEnvF1G8IAiEA9u6B0d88mFCV69fOeQSH1DAU2BXUUq7dkZ6FZwcEkjAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLyOKL1Taev8ueSmSrcA36ARHtJjPLCJQvBZkDa9r1U0fJ0N7R1sdrd0U4K2EipwROMWijqgCpwroO4o3ERE0TAb1d7yF52c9V6q8icgewrzBuGqoGx2qHKkqLWMqn6H2VDkih1gFlUuMQlXCPv4g2Siq1k8qU5lUwL3wSIMfCIn2SsYbEWRvOfUIUeeOITSzdj0jdli1H2XWxf8SjGKcuX3Uii4Il1NX8IqQhhHkp%2Finh%2F6oEoDm%2FEkHvRwEfzzZLiOdGjoUhkgkkMGh31zGoB63slzjSxV5Qpzk48e%2B27odNCM9UwQx1pDyVESHgcJDsr0W%2Bb272ksZVHxr%2B%2FBkU0f8fBF0%2BBDp21VztW%2BYTkppbZk3iHKWii4rRGaPzFi3iD9gzANDxl%2FDsu3YlyNuDJ6RH9gsic5M3TDIUKLUvo3X45kEn7OMgFow49PPUx%2F6hFv25HCEjIh%2B2QsWxkOV3dh1wjEzq%2BmKNXREVMBBN374T297DJZsp7EGGhtlQ4elAeJCAUEUl9r5h96qn7jtEKj3kvehP3mBqhO%2BNDPg12inspX%2FuZ%2F6auc8RAJ8pthNr2mo797p46nB7osGL5279Lj4Q%2Fg16jVA%2BwDXAvCZQajI8bniDnt0DH81oELV%2FtiOiMOXli%2Fkg1kT8%2FMJC9qL0GOqUBuB4Y96FISwxovw6IRfqG6TtY1t4Bg1qOp3LWvPI2Xi1a2E0LgKMsw061gnr1YYsSWjHKBGLlcyIQdNGcotnFLSy9L56smU1sOTTQrZZ3p8PigjaG6D0Q6AHO0a2txKEnQv31IfhbaY8LPyFQKGcJRINFqL6MjLRMq8Bo%2F8iCKDxj2FjtvFDw0S5nNpNKFwpaejBUNYAAYLmE2Fpgd2ycphsTVU0J&X-Amz-Signature=efe9772a61801d7ef7a850629138b506af5be6e3aa35a01375edf1a4116fddc6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOQ46XD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXPFq8AadzI8JG5YGrqs%2FLCndWexTjpPsKiEnvF1G8IAiEA9u6B0d88mFCV69fOeQSH1DAU2BXUUq7dkZ6FZwcEkjAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLyOKL1Taev8ueSmSrcA36ARHtJjPLCJQvBZkDa9r1U0fJ0N7R1sdrd0U4K2EipwROMWijqgCpwroO4o3ERE0TAb1d7yF52c9V6q8icgewrzBuGqoGx2qHKkqLWMqn6H2VDkih1gFlUuMQlXCPv4g2Siq1k8qU5lUwL3wSIMfCIn2SsYbEWRvOfUIUeeOITSzdj0jdli1H2XWxf8SjGKcuX3Uii4Il1NX8IqQhhHkp%2Finh%2F6oEoDm%2FEkHvRwEfzzZLiOdGjoUhkgkkMGh31zGoB63slzjSxV5Qpzk48e%2B27odNCM9UwQx1pDyVESHgcJDsr0W%2Bb272ksZVHxr%2B%2FBkU0f8fBF0%2BBDp21VztW%2BYTkppbZk3iHKWii4rRGaPzFi3iD9gzANDxl%2FDsu3YlyNuDJ6RH9gsic5M3TDIUKLUvo3X45kEn7OMgFow49PPUx%2F6hFv25HCEjIh%2B2QsWxkOV3dh1wjEzq%2BmKNXREVMBBN374T297DJZsp7EGGhtlQ4elAeJCAUEUl9r5h96qn7jtEKj3kvehP3mBqhO%2BNDPg12inspX%2FuZ%2F6auc8RAJ8pthNr2mo797p46nB7osGL5279Lj4Q%2Fg16jVA%2BwDXAvCZQajI8bniDnt0DH81oELV%2FtiOiMOXli%2Fkg1kT8%2FMJC9qL0GOqUBuB4Y96FISwxovw6IRfqG6TtY1t4Bg1qOp3LWvPI2Xi1a2E0LgKMsw061gnr1YYsSWjHKBGLlcyIQdNGcotnFLSy9L56smU1sOTTQrZZ3p8PigjaG6D0Q6AHO0a2txKEnQv31IfhbaY8LPyFQKGcJRINFqL6MjLRMq8Bo%2F8iCKDxj2FjtvFDw0S5nNpNKFwpaejBUNYAAYLmE2Fpgd2ycphsTVU0J&X-Amz-Signature=c4e44c4be5d3ab5b1a17db699aba47f4ee6eb71210c92c85f06c4e810dd67265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTPNPKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOq%2Fwlolfp0sgH0xJbobiepmXV3AbNukgfia76QZhMKwIhAKIzkZ4KgbCe1Sq%2FHnbHhSnEhHdVvvmt3MidikZliyi2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWggtxRs%2Bnrj5K9bEq3AOWPkfE4VLxFAM86CPBvpbTCr1qQsnVz%2BEWj0e5f9LDCcU9UzmDEqjt%2F4IfW2XWT8hUOBYyjU%2BIPT1939LVHXkqhnfB2Z0BeSkeC8pjMh5wCQj5JHUJOOtdWKA7dDOqxWXpx5%2FlEl2bU5G9OnSR4W%2FEjSn9Az%2FGz5SUKwX%2FTZBwBfe4CX85Gc7M%2FDLTGFDQMSb%2B2uhSWkDM1IfV4hkm8aaz4iG8wQjerD6PdswXf06pdVYpdwSL%2F7BondYs8L1jO3Vf2BRz%2B%2BsmnWrybZMhcQ27x9SvZ4Kh5t8Hwj0mY0miJ3yOj1ZR6doPck6tP01hfQvI%2BMrmKL6R8ITE5eBRPnmIVFSM8OV0hGHCXt8x1FKDjteUtLsh04Dp%2Fmx389IY6Z%2FHojtLCtxNqcmlwpjH3Evq57Y9t1BGPc56oyzZmJ6zOdGN1dTrB7p%2FKXzxYkfKB4JiDNM3QjDRNszVfiROM13diRhxVAztkAgtJUn6czbbG1momZOufOb%2FUED121ArSYhFmxQO27G1AEAZdU4IfIZoUFZWqAE1G1R3zTI448pnJgGnTsfkzz2ZMuZkkwnJT0FLudhTgNIFIcJzSIth6ncrgQ5s5pn9F6sMdiTOvn4t9eaRzZN3vbKyHYgutDCwvKi9BjqkAev%2FGLF%2F63BSgbVvFdcDQR8H8S4cNk%2BuL8b5%2Bi4dvRFPg1Mrhr877FfU7lNAq%2BJhbIwFOcIJeQDKPAtoGsscaREi%2BbDECaRbEWNjOJxzUyLpRuQu3m7rpNsmIWQG8m8QUZ0BhzmFRH1ufXh9THhlUv59EUROF%2BC4xYVvMjrxJ33bJ%2FPSmXHL9%2FFGDu1xttGsZitiKJda3C6EyCFD6h6puKPuYxYC&X-Amz-Signature=486030d5ed9acc45ba460a8a8304b30ed55c5c4357a985dc26c2a0b17046643d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644WS4K75%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGW6eMLX4g4CF7v92bMKo9l00g5sRBdW8NIxMdiapGC3AiEAiuBgpFUoIvW56sEFVy%2FPMN6%2BBJYvZN%2FjibOXscA4VwUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhK2twE9GTkMgmuqircA2oaN2gLmdCsjmo4%2FSyguNvmMJYUjoBc5%2FR3%2F%2FCIVhbuEd%2FOiW2T95E0zu8Q6BnI2eKjdtwjFtvSJVBDBowxN4c1naLCkohHB9KqoOOo9RJMA7Qbrrrbi1TcghQ4lCnmJcD%2BOZiO9JAJ8TVM1c8T46q%2BZk9dnaBQKB7%2FO%2B6swdXcpDgcP3RsodhFgzs2b9doHeitXhUeSzUW4bupsGx8%2B9yX9FOWuXH8xlQcw1M%2FrCqLHcOegQHGEaxV%2BLxGvoBM0UPmlVN99VJvOALRllv19pxYE5D%2FTPTF3kEiI1zfgGdBh9jVkSVpzvyNoDc2Eq7tvArYXphGZdDJP05OD01H4RRfgzg%2Fq%2BYPfVPQT2B9Z1RYxM2TVkrSiitwUfB6Nt5bvLOYABxfn5KcMbMvEgsTfUnBWAvZl02HZ7pWwJ0UL5Kkl2%2BQhYt1PRnAXRTjMujOG17D68DuRvh%2Fyon0nc5eMPYieTl2qNRinOEwzrD2iDjxeeFShv3Y8gid6%2FE0xESY%2B8J3e5FKncOQv%2B8AEbLyyASqL%2BmaYamFgHpn0%2F3uytacPudgfsqc%2B0MCvfph26B3KBSxuNdZ3iHhXk1y7OQnF6U%2FlXy7bPEJ2S5WP%2BTQZCspcLlrd6wgAMk7pju0MIG8qL0GOqUBUbNzjXhk4%2FXoLjMOLKOxL0qX6m%2Fu2%2BrUpVxM6eH59Si3kKXsZ1eDtiAf%2F%2BRZemoBd1DPnZB%2BwMVFwdHfShqPPU9rpO9bxFbW40tU23YIZJ8KVD0wgYA5EDs8%2FZHn71ZKrjUlBVdQOAGm6tjDo5%2BSX3loSBypkidTjr4AN4hkxo6rOanPTwRmwUvKkTk6M1oybXGJY2awyKIKa%2FrK%2FLdq9CmIzwQt&X-Amz-Signature=86758fc383bfe44e632fa0753aefdd726c5ab38bf19c9664cd5c0805e264ef96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOQ46XD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXPFq8AadzI8JG5YGrqs%2FLCndWexTjpPsKiEnvF1G8IAiEA9u6B0d88mFCV69fOeQSH1DAU2BXUUq7dkZ6FZwcEkjAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLyOKL1Taev8ueSmSrcA36ARHtJjPLCJQvBZkDa9r1U0fJ0N7R1sdrd0U4K2EipwROMWijqgCpwroO4o3ERE0TAb1d7yF52c9V6q8icgewrzBuGqoGx2qHKkqLWMqn6H2VDkih1gFlUuMQlXCPv4g2Siq1k8qU5lUwL3wSIMfCIn2SsYbEWRvOfUIUeeOITSzdj0jdli1H2XWxf8SjGKcuX3Uii4Il1NX8IqQhhHkp%2Finh%2F6oEoDm%2FEkHvRwEfzzZLiOdGjoUhkgkkMGh31zGoB63slzjSxV5Qpzk48e%2B27odNCM9UwQx1pDyVESHgcJDsr0W%2Bb272ksZVHxr%2B%2FBkU0f8fBF0%2BBDp21VztW%2BYTkppbZk3iHKWii4rRGaPzFi3iD9gzANDxl%2FDsu3YlyNuDJ6RH9gsic5M3TDIUKLUvo3X45kEn7OMgFow49PPUx%2F6hFv25HCEjIh%2B2QsWxkOV3dh1wjEzq%2BmKNXREVMBBN374T297DJZsp7EGGhtlQ4elAeJCAUEUl9r5h96qn7jtEKj3kvehP3mBqhO%2BNDPg12inspX%2FuZ%2F6auc8RAJ8pthNr2mo797p46nB7osGL5279Lj4Q%2Fg16jVA%2BwDXAvCZQajI8bniDnt0DH81oELV%2FtiOiMOXli%2Fkg1kT8%2FMJC9qL0GOqUBuB4Y96FISwxovw6IRfqG6TtY1t4Bg1qOp3LWvPI2Xi1a2E0LgKMsw061gnr1YYsSWjHKBGLlcyIQdNGcotnFLSy9L56smU1sOTTQrZZ3p8PigjaG6D0Q6AHO0a2txKEnQv31IfhbaY8LPyFQKGcJRINFqL6MjLRMq8Bo%2F8iCKDxj2FjtvFDw0S5nNpNKFwpaejBUNYAAYLmE2Fpgd2ycphsTVU0J&X-Amz-Signature=05be546788edde90f1808ed24ae2091e6ca40f7d890a8978d8c09a8ebd2bb7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
