---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7BLIG2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF2sYUV7ZzK42nI5SfUhMmpbs0XQwNIBymMPM2g9L1KwIhAOm8P51Wz11VJqec%2BX3ZVAgdgSOUkWFQMbxICyIXJnGCKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKokzMagS4D2I9GcQq3AOe9VbXoWpB8Cmhst3juoktkc94M2Z%2BfRN9g4hTzSBIq6Gu75KmEZGnC6xGzTigcLgA4D3Mxhl83ONz7UenYvEeIjpI%2FMe45XyDY%2BiX%2BNpX%2BIzarko8h82CqRPTNVGYERLC1%2B%2B0NGZs5uVsHGrTcyyLI2pXLSLTigvRtspc25HoBOeiw6Yonv7UaV2%2BXXoSJSmhMXaBXtNUxMy0bKFNZXM0oxHuRF34atgi95ThLTHuHRZN0E2BVd3Mb%2FO1pOPyOJETeNWwkNqhfu2o6b9oUA6mc0NY6zAtpcBBROJKveVjGAIZnARKtPXyfmNy11D7%2FnJ3xlVqkOzAPxjdqcQf3SWRx5BzqZaQdvBqQNcv0zwRrhEZivz%2FZnbjZqHSZh%2FhA8zIjnZDQNpGY4xorRm9r99GwuVe750ISw0m0fQEoTYpEmZV59oWMYKl8151biHYFkG9NqodusFrih31x6TtGhICCcXRPcoxSDGiXJFyMUsIQGGCGPPA0MKvxpAhMZ%2FGTp%2FRfFjh1072dlbODiUOBENKw%2FpUr7yag2ZMTZkPVJkWpOYMbxK9kkUnP5%2B7WioHZ0XK24gwDDaSJ9aUPZgzAX5ELh0t9GfGWIF2%2FiAR2F%2FHD26ArJHJaKIJAzsMYTCf%2F%2FPABjqkAR6FNSjJ%2BvHkUTfY5t4pN7enVpbYWKb5W4uSps4Nxx953NvvkC8J5Md8j3U78bxMT9nPSZa4Omp3xhz85P%2BiT2tJy3AKUsU2MxQBptn6OKYmtkouUBR3fRxnORc3qF9VE9M78R7yL03KisSu2y%2FdReT81eBuAozqK0t44S25NssRcLSBWVxB4NInh7swCY0U6Okq2mLqHz%2FyWRDPOha1ctmx6fi3&X-Amz-Signature=7414b0d9e62d615d5c9cdaac5b7aec042ad52086883e2b04654ac52cf5689c06&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7BLIG2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF2sYUV7ZzK42nI5SfUhMmpbs0XQwNIBymMPM2g9L1KwIhAOm8P51Wz11VJqec%2BX3ZVAgdgSOUkWFQMbxICyIXJnGCKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKokzMagS4D2I9GcQq3AOe9VbXoWpB8Cmhst3juoktkc94M2Z%2BfRN9g4hTzSBIq6Gu75KmEZGnC6xGzTigcLgA4D3Mxhl83ONz7UenYvEeIjpI%2FMe45XyDY%2BiX%2BNpX%2BIzarko8h82CqRPTNVGYERLC1%2B%2B0NGZs5uVsHGrTcyyLI2pXLSLTigvRtspc25HoBOeiw6Yonv7UaV2%2BXXoSJSmhMXaBXtNUxMy0bKFNZXM0oxHuRF34atgi95ThLTHuHRZN0E2BVd3Mb%2FO1pOPyOJETeNWwkNqhfu2o6b9oUA6mc0NY6zAtpcBBROJKveVjGAIZnARKtPXyfmNy11D7%2FnJ3xlVqkOzAPxjdqcQf3SWRx5BzqZaQdvBqQNcv0zwRrhEZivz%2FZnbjZqHSZh%2FhA8zIjnZDQNpGY4xorRm9r99GwuVe750ISw0m0fQEoTYpEmZV59oWMYKl8151biHYFkG9NqodusFrih31x6TtGhICCcXRPcoxSDGiXJFyMUsIQGGCGPPA0MKvxpAhMZ%2FGTp%2FRfFjh1072dlbODiUOBENKw%2FpUr7yag2ZMTZkPVJkWpOYMbxK9kkUnP5%2B7WioHZ0XK24gwDDaSJ9aUPZgzAX5ELh0t9GfGWIF2%2FiAR2F%2FHD26ArJHJaKIJAzsMYTCf%2F%2FPABjqkAR6FNSjJ%2BvHkUTfY5t4pN7enVpbYWKb5W4uSps4Nxx953NvvkC8J5Md8j3U78bxMT9nPSZa4Omp3xhz85P%2BiT2tJy3AKUsU2MxQBptn6OKYmtkouUBR3fRxnORc3qF9VE9M78R7yL03KisSu2y%2FdReT81eBuAozqK0t44S25NssRcLSBWVxB4NInh7swCY0U6Okq2mLqHz%2FyWRDPOha1ctmx6fi3&X-Amz-Signature=2abf467b1f1f8c14386ca309ff52c1a95d64150e9a7f16138b18fcd31d3661ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7BLIG2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF2sYUV7ZzK42nI5SfUhMmpbs0XQwNIBymMPM2g9L1KwIhAOm8P51Wz11VJqec%2BX3ZVAgdgSOUkWFQMbxICyIXJnGCKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKokzMagS4D2I9GcQq3AOe9VbXoWpB8Cmhst3juoktkc94M2Z%2BfRN9g4hTzSBIq6Gu75KmEZGnC6xGzTigcLgA4D3Mxhl83ONz7UenYvEeIjpI%2FMe45XyDY%2BiX%2BNpX%2BIzarko8h82CqRPTNVGYERLC1%2B%2B0NGZs5uVsHGrTcyyLI2pXLSLTigvRtspc25HoBOeiw6Yonv7UaV2%2BXXoSJSmhMXaBXtNUxMy0bKFNZXM0oxHuRF34atgi95ThLTHuHRZN0E2BVd3Mb%2FO1pOPyOJETeNWwkNqhfu2o6b9oUA6mc0NY6zAtpcBBROJKveVjGAIZnARKtPXyfmNy11D7%2FnJ3xlVqkOzAPxjdqcQf3SWRx5BzqZaQdvBqQNcv0zwRrhEZivz%2FZnbjZqHSZh%2FhA8zIjnZDQNpGY4xorRm9r99GwuVe750ISw0m0fQEoTYpEmZV59oWMYKl8151biHYFkG9NqodusFrih31x6TtGhICCcXRPcoxSDGiXJFyMUsIQGGCGPPA0MKvxpAhMZ%2FGTp%2FRfFjh1072dlbODiUOBENKw%2FpUr7yag2ZMTZkPVJkWpOYMbxK9kkUnP5%2B7WioHZ0XK24gwDDaSJ9aUPZgzAX5ELh0t9GfGWIF2%2FiAR2F%2FHD26ArJHJaKIJAzsMYTCf%2F%2FPABjqkAR6FNSjJ%2BvHkUTfY5t4pN7enVpbYWKb5W4uSps4Nxx953NvvkC8J5Md8j3U78bxMT9nPSZa4Omp3xhz85P%2BiT2tJy3AKUsU2MxQBptn6OKYmtkouUBR3fRxnORc3qF9VE9M78R7yL03KisSu2y%2FdReT81eBuAozqK0t44S25NssRcLSBWVxB4NInh7swCY0U6Okq2mLqHz%2FyWRDPOha1ctmx6fi3&X-Amz-Signature=5d9a0568c098ff98d2936881e61b21e246ba681898442e24792a7663f896f635&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFBGPD6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWT3fYi%2BRjHfybAd4HhJuzubozoKjpLmT7vS1wFyYYugIhAIcmfoYxmJXzMElCdj2N%2FKd2ix7LvdxVNUvwPkbxL1D5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgyjbRiU9JSeczZRYewq3AOkgTV%2FTP%2FaG6KyGxnAYNXlPWF%2FEzP64XqNfp2ppq92UUtX%2B%2F%2BYzgMtoPjAue9NcY0DFOzpFuM48UKAcUgJnk2t%2Fp%2FIf%2Bqob00ZR%2BpXelwQkiiJR5QCTk6bu3P%2BcD6LKubmwkKwzghW02GUzl%2FognWO2%2BgtqIQTAJeuaj29KWa3sVol4u1FHRcwA3o9fXwuQJmdhYhWt2WCj82KQpTMKIre0O8BtX5i1ofD7210xvaPVymA4TnoxsUZQ68KPiyBPAApljnJ%2Bre7%2BIWw8bLW5rCRNhbCyRczK5iFZsP01ZeNuPCklLS3Yn8LzRZyQKm9vHxzKVYajXwrbJEuodscp5%2FvmcuKhKxIgLldsokS8m%2F6NXF8rZPLbWegJk014Yo6KvjRdF7iHxwPAW45byy2WWnKOWVbnOglkEolefdscbS9sbGoySNvwwrI3oXK%2FOnKd%2B4LZSHlkAEordpeScRY8jGmxuNrDv42Cuf%2B0tE8HdPldpS5p3Xk%2BgJTa8lKpgTBf2Y2a%2Be%2BYTMYuP7wupHJilRYmiiDI0mynyDjqzBtCbnJt9ep08QBTHmNLZ4FbdStFYd2NFr83g%2BCW9mNNFGCaJxxsadtlhvLbBhpHIz4lgQBO%2BcmDQZ5dERNGdCkaDCa%2F%2FPABjqkAdVZfej6SZ6PP0TyxsxlzvUXGSGUQ4wdJ2gndbvs5nDup2ou4yNtY6SC7u9619gSYuy32UqC42YuN7LNCnpqcDn7kIvRULpUwRjtEayLQ0d0AMzYNtJPy3QRgxPTGhFN3hqQ3r%2F4i2gZ8JqGAEJKwHSfbkE%2BF97AhXhXRSRZxczk13b%2FSFgI1SCYEYpxZORcy6SocNVDabcAh3vLn18%2BpTLu8kN%2B&X-Amz-Signature=61db343545dbaf57b0750f9f2601e95fb11d40866add56f2ae1236fe1f225527&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STI4PQCV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUjjUPewFi4XQNilcuqfsSyjnevkOKzqoJluVTY6WqSAiBI6vRq2HCZ9zuieB8h%2BMfJuZjFQvZ7vBOH6%2BeyLDKpgSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAhkncDZjCC%2FXC%2FlWKtwDpE4BkgzcQInJoVxPUYW8PusBJsWXX6A8dJla0zCdCWO2SsmBynTYHUszW6hK%2B7gtsdsKJs7lnXZUETRlXodWQYexPw30rAe3thv8Fs3EOhEPh9Ggb1rqaD5Kr2u0CCohquUwfscVCEveYxLPNiITqQ4Sj8Q5%2F7z85sSAFpu5fDDHEPoHDUh74gY8KMnpebWXjlRHkykFcMFPVCRfpjdKzDSUNA%2FIs9eZCsOsdnGdvrynMV0Iyd5Xz3LTbD4iQ5884LcLRTxcoEkEBYXq5Mv04wzqoCdP44z6UhSOEkgtM68iWgCW23ElqqhIbWyybMRNsnoIpqjiLSIibWdyLDy6yo1l9It8PxMAvIy7eGD%2B5ysrSFPKXZg2%2F3CCfh3OZ2CHLSLaJz5lQQhLDKJpb089Z09hjAIpgS2KzEz%2B3%2FMGWcgtf4DzOlfg9mpih9MXpi9z36ZINNvBOTXnNc6YvSmzI8XazUepxog4uxu53Ogw5A%2BeciD69AulLw9kWDbCQTt6CZtkNglTaYR2NBnuh1fa6PD2irLVk%2FfkKLKHboT7IKv%2BzRqOIRANl8mHRIjHLcVZshesKKpOy3hC5feiXq0eZTKUiMtSSyWcpU95B%2FfYqnR6XCz9OssJbjpyBPwwkID0wAY6pgH70jVU0fLIN%2FeSVqO9V8vQnkSOC4up%2FtRN%2B%2FmyV3A3loOvclH19ifjvUAm%2F9vu%2FgAdmUHNiFYXV%2FeLXOhJSZxbpVbOPhAskbsjm0WcxclhxBonk3lbh0uAJeeaaAZbBsNuFU7pMx7FSe0QyYkxtGbJlXjn%2BZFeDfeuK4bUE6pNcoNg2sLeoYc3NQNwGJQhiIpsjyFt8zSc2yAvNlht%2BGPyQd85MFfs&X-Amz-Signature=c6fc0a01a150e3f7616f319e354b43a8fd9e376ed6d22dd412b9a2b7149c4dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7BLIG2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF2sYUV7ZzK42nI5SfUhMmpbs0XQwNIBymMPM2g9L1KwIhAOm8P51Wz11VJqec%2BX3ZVAgdgSOUkWFQMbxICyIXJnGCKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKokzMagS4D2I9GcQq3AOe9VbXoWpB8Cmhst3juoktkc94M2Z%2BfRN9g4hTzSBIq6Gu75KmEZGnC6xGzTigcLgA4D3Mxhl83ONz7UenYvEeIjpI%2FMe45XyDY%2BiX%2BNpX%2BIzarko8h82CqRPTNVGYERLC1%2B%2B0NGZs5uVsHGrTcyyLI2pXLSLTigvRtspc25HoBOeiw6Yonv7UaV2%2BXXoSJSmhMXaBXtNUxMy0bKFNZXM0oxHuRF34atgi95ThLTHuHRZN0E2BVd3Mb%2FO1pOPyOJETeNWwkNqhfu2o6b9oUA6mc0NY6zAtpcBBROJKveVjGAIZnARKtPXyfmNy11D7%2FnJ3xlVqkOzAPxjdqcQf3SWRx5BzqZaQdvBqQNcv0zwRrhEZivz%2FZnbjZqHSZh%2FhA8zIjnZDQNpGY4xorRm9r99GwuVe750ISw0m0fQEoTYpEmZV59oWMYKl8151biHYFkG9NqodusFrih31x6TtGhICCcXRPcoxSDGiXJFyMUsIQGGCGPPA0MKvxpAhMZ%2FGTp%2FRfFjh1072dlbODiUOBENKw%2FpUr7yag2ZMTZkPVJkWpOYMbxK9kkUnP5%2B7WioHZ0XK24gwDDaSJ9aUPZgzAX5ELh0t9GfGWIF2%2FiAR2F%2FHD26ArJHJaKIJAzsMYTCf%2F%2FPABjqkAR6FNSjJ%2BvHkUTfY5t4pN7enVpbYWKb5W4uSps4Nxx953NvvkC8J5Md8j3U78bxMT9nPSZa4Omp3xhz85P%2BiT2tJy3AKUsU2MxQBptn6OKYmtkouUBR3fRxnORc3qF9VE9M78R7yL03KisSu2y%2FdReT81eBuAozqK0t44S25NssRcLSBWVxB4NInh7swCY0U6Okq2mLqHz%2FyWRDPOha1ctmx6fi3&X-Amz-Signature=da485c0e0169437ea655a720824369bdadfc22d3965d4a434b6e98337ec4145b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
