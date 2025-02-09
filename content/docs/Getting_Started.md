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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLWGZJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD740o3gWNxFgFsaPTsnIcni%2F7K7mQoHGVXPOeKgIzEIQIgGvVyWOOLAikakcr2fA%2FriwdXwBYr%2FEBhDwfAIV4BLVgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq2b6blMhBKaFs1SSrcA5Zr543HIa4e9xuN%2FfuUL3EF2XmnrtfgGMYBpCY2t9OIBX90rcU8%2Ftxm1mYp7J7xbsJv5rQWd3EXWDTQpLZ0bPra25pM2Mnksi9d48gppGzHW29Kwf2Ns%2BEPyUbviMBL%2FQlLdWHUHi1uLtuCkdD8Kg%2BWh9Qh046E3%2FmGUCsd2Pz7zZcFZipTnQiAYtMaLaxWwCiaKVW7TSPb5A7r8QdzmormvuXSxb%2FgMT%2Fur%2BlnqjK0yCMhq6BlZR3XFHz1%2BwGqaorj4y7hEzVMoG5gPINdn%2FMNeEekU695q8%2FWhVpgNZ7avAQG5akVxcuZMhbIHwfV5ngF9%2FdvfqGHtOjx1nDbFS4OJYMS1YsEtGAGxnaPdgRFk0oxFKNNzvKbzRiYa%2BvJtLiH2Xa%2FU2c7kIN6jWyJbs4rP2soytYVj%2FUiUjrShOh3xTVJzRFNuCuqGH4oB%2FeOpEvaPcaq07RkGjzr2Z910gFn5ifs9BHlhElHHK0%2BxcSliFJNHHC0DGu0a7bbnpEPETEC3XHCg8itQVlVFPbAlJWw2LIgt0U2s%2Bd3e0ijV%2BMYKrpRdKrGgJ7AHbD4V0NauwUlO19FvIacN12n%2FulZ8GuYxkHojzQJhL3qR4EmCPMTf62RmdVFhb2sGYz9MPa%2BoL0GOqUBB7vw4O5Ok8rR51qpkPqwEKlrXw6yyfUOuXITQFDyA%2BMIf%2BfatudMHzn9g6RiHzS3fIkFxnPdQHcrYZ8BJw3VUZdjLhA0vgdcIV4L4RuSAO6jxP6xbhB9BLPjXRF%2FtZ6%2FMWwxv%2F%2BCZnzH6w5%2FDA5cL4%2FOnTMzrspFHaiYvxvWyaTn1rf3fOjoFeuVfLt1kYdGiEBP5typZRU4m%2BBJZein2xtUQWj2&X-Amz-Signature=a487a1eae8c2914028435fe26ddd7c6ac66a58f0c651b6b9ea6e516ce2fbc6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLWGZJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD740o3gWNxFgFsaPTsnIcni%2F7K7mQoHGVXPOeKgIzEIQIgGvVyWOOLAikakcr2fA%2FriwdXwBYr%2FEBhDwfAIV4BLVgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq2b6blMhBKaFs1SSrcA5Zr543HIa4e9xuN%2FfuUL3EF2XmnrtfgGMYBpCY2t9OIBX90rcU8%2Ftxm1mYp7J7xbsJv5rQWd3EXWDTQpLZ0bPra25pM2Mnksi9d48gppGzHW29Kwf2Ns%2BEPyUbviMBL%2FQlLdWHUHi1uLtuCkdD8Kg%2BWh9Qh046E3%2FmGUCsd2Pz7zZcFZipTnQiAYtMaLaxWwCiaKVW7TSPb5A7r8QdzmormvuXSxb%2FgMT%2Fur%2BlnqjK0yCMhq6BlZR3XFHz1%2BwGqaorj4y7hEzVMoG5gPINdn%2FMNeEekU695q8%2FWhVpgNZ7avAQG5akVxcuZMhbIHwfV5ngF9%2FdvfqGHtOjx1nDbFS4OJYMS1YsEtGAGxnaPdgRFk0oxFKNNzvKbzRiYa%2BvJtLiH2Xa%2FU2c7kIN6jWyJbs4rP2soytYVj%2FUiUjrShOh3xTVJzRFNuCuqGH4oB%2FeOpEvaPcaq07RkGjzr2Z910gFn5ifs9BHlhElHHK0%2BxcSliFJNHHC0DGu0a7bbnpEPETEC3XHCg8itQVlVFPbAlJWw2LIgt0U2s%2Bd3e0ijV%2BMYKrpRdKrGgJ7AHbD4V0NauwUlO19FvIacN12n%2FulZ8GuYxkHojzQJhL3qR4EmCPMTf62RmdVFhb2sGYz9MPa%2BoL0GOqUBB7vw4O5Ok8rR51qpkPqwEKlrXw6yyfUOuXITQFDyA%2BMIf%2BfatudMHzn9g6RiHzS3fIkFxnPdQHcrYZ8BJw3VUZdjLhA0vgdcIV4L4RuSAO6jxP6xbhB9BLPjXRF%2FtZ6%2FMWwxv%2F%2BCZnzH6w5%2FDA5cL4%2FOnTMzrspFHaiYvxvWyaTn1rf3fOjoFeuVfLt1kYdGiEBP5typZRU4m%2BBJZein2xtUQWj2&X-Amz-Signature=6b144ab0b151c456e762e7657062f314158e4bef6684f96a6fba6181914b4bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYMZLW4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfw2dvYXyIP1v72QkljuJzZSRE93u7nm1%2BO2C4OPwTGAIga7eOYqL371pEukUNt1lhYB6fj3cz5QqKo7B%2BI9XpxJYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwfPnb4elD4etJjOSrcA9Fh9OlfA5MkgHrqFHa3UVSEIDJDPTq7loyuJIssAEq6J%2FnPI8Fy5bnXdDTbwq6OvgzNetKwICv6rjIAvJJaPxBbboHWq7ybBuAvNpVfphmySoB1D6%2FhSGWEH1HvftAdD6tFzCwhmMy2%2Bij5OTNB31EjliJT4aoRl8SG64qB6wyig5DhxiAykypSzJ4AK78rc0oVh4H9%2FH76ickSiRxabIjQTSnrN0832R28WUcb%2BJtLQR4WM2qeS16EDxjZEfps7UYs2YI3N35590WRpWB9fm6bvBgkcNDucR9tPdouTDejYi6UQ8O5WQLPqQDMD6s%2FJTV2sRSJW3gr2RXFCvRnFJuVEtA%2BwLsALKKcrdHt6dSVQ7DeS99g3bMvEif6WAicDnYjz7O%2FaAmz23RrpRQB1N8DSZD2C0fjzqGTYQEE42RVPSOIKWq6xES8Tlhyjmb9zSgl2piEuyc%2BluXBEhOdmu%2F%2BJpJcj7PO56HEIP3o83w%2FstQLcWxcmmZuT5MrvIay87BCK4HPtH2WXeedvLNl3VMYyHf8RoA1aYp2DWT3nAEuL9rbCBZEco%2FB6%2FEqquyYsrEGg8cku1AvjpuhJYFXGabGm8xEMSnWgFr0tx4ZZY73OK8n6de%2FJS9FkSK3MPS%2BoL0GOqUBYVXRJVtK%2BN8BNL4q0PpCKT%2FrzfKiTzF%2Fbz2xRrj2RvkcZGMkLYysfchdG5koXhZwOW03jwwKuc%2BDC4QhMcbJ2kUeQUZDFDCP57fT3aTpDQok9RFJrtx%2BRWvb86c4rgm2Mqj7%2B2sdWDdO5%2FwNihr9Lj0nYUfK2J0hONBWSovnR3AIANIGli91i4YqEXheBQA1cDRrjiAcv2ttk1q4Q2ZBPHzli0uB&X-Amz-Signature=d70f4dfa5838aa5814f92643a0ff0a25fb9687b28fb17b0858a04ee79c1d6860&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFPAFOK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B1qPBD7v6BU1eowm%2Bpd%2B5yyKuzsBpBYjmbcgCHXiwXgIhAK%2BhfqT8mdqfMmMmIylhdOpPTgQNmhKVmfqs%2F8cA%2BJWYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw286xxw3vom9Weangq3ANfE%2BAM0aBivJyq%2FtIYDFDOVUTVW373%2Fc1MmjsGLWlwgQ%2B4bNnLbFo4yPTN7N1z%2FzemwtEbxBJ9Wax2Ey3vJ9Zo87IIkQ0HxaciqaaudMm2mR48lOxQINEti7wtPdr0yOIlZYGmrfzO1sTsUUv0PZ484jMIkb4O5Mt8M2XQEada%2FQvYFnoWtFYoTssRTRtOVvIhNxLATZVUMVcvosxPsRuZIxDytK4RiAuCSGjm7mJoGOjyfaaDTAbZDUiGJXtYSUxbkklgu9q%2FKhu6nQAtqus1jyOgjOlKT0QihECo8ux5mJzkFn%2F4%2F5NJwR%2BzSealo7jzCJFyhLcr4pSuirOckIPNiK9ycOJPk208nVEgOR%2Bufglte6SyQ2OSieorFFuyC7lEYmyEDzRIUqYYhavDGFmElw5p5K5mQmOc9fCgxZ69Hdl61MDmHwGhzVkSFeoW6CSjB3uA42ObI%2Bntb2bkim9h2rEXCDOGXOOSO6YJEzqy1vDwqfnOv07%2FfXS2%2FhtQIG%2F0iPXrAvEMqbb%2BtR4Esoghf0ZkLSNxT5nxMiACSpPSnx3dIdRhThPnPm6XZIgpO9KEWOaI4GjpTy76SaBM%2BiFn%2BUTo1Bf1%2BQWG6weyWITAOD2tkx8LvPSBtEWHbzDjvqC9BjqkAaXjvv%2B8w910a733kwQsprq5f5VMOCe9bkPvsbtqUTlYTO46FhF8fN2Mm5p334w315dIvQPFjoDmCK53kQ812PfiaSrjQ3N1tDSuB1hen%2FvbOfACjzUj7WB6g8sso%2Ffz%2F8X%2B7uTmIl2NmZi1qjVNSkSf7WmaKrdJiksVtu4JDchofLkoWHgWXlbrtR%2FIHXBkgekTe3quDeoFdxuXUJE6mmbb%2FjMH&X-Amz-Signature=7cea823d30817e03896085ff5e04546df239bcd2a2e5ff6080ce2894a15ea721&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLWGZJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD740o3gWNxFgFsaPTsnIcni%2F7K7mQoHGVXPOeKgIzEIQIgGvVyWOOLAikakcr2fA%2FriwdXwBYr%2FEBhDwfAIV4BLVgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq2b6blMhBKaFs1SSrcA5Zr543HIa4e9xuN%2FfuUL3EF2XmnrtfgGMYBpCY2t9OIBX90rcU8%2Ftxm1mYp7J7xbsJv5rQWd3EXWDTQpLZ0bPra25pM2Mnksi9d48gppGzHW29Kwf2Ns%2BEPyUbviMBL%2FQlLdWHUHi1uLtuCkdD8Kg%2BWh9Qh046E3%2FmGUCsd2Pz7zZcFZipTnQiAYtMaLaxWwCiaKVW7TSPb5A7r8QdzmormvuXSxb%2FgMT%2Fur%2BlnqjK0yCMhq6BlZR3XFHz1%2BwGqaorj4y7hEzVMoG5gPINdn%2FMNeEekU695q8%2FWhVpgNZ7avAQG5akVxcuZMhbIHwfV5ngF9%2FdvfqGHtOjx1nDbFS4OJYMS1YsEtGAGxnaPdgRFk0oxFKNNzvKbzRiYa%2BvJtLiH2Xa%2FU2c7kIN6jWyJbs4rP2soytYVj%2FUiUjrShOh3xTVJzRFNuCuqGH4oB%2FeOpEvaPcaq07RkGjzr2Z910gFn5ifs9BHlhElHHK0%2BxcSliFJNHHC0DGu0a7bbnpEPETEC3XHCg8itQVlVFPbAlJWw2LIgt0U2s%2Bd3e0ijV%2BMYKrpRdKrGgJ7AHbD4V0NauwUlO19FvIacN12n%2FulZ8GuYxkHojzQJhL3qR4EmCPMTf62RmdVFhb2sGYz9MPa%2BoL0GOqUBB7vw4O5Ok8rR51qpkPqwEKlrXw6yyfUOuXITQFDyA%2BMIf%2BfatudMHzn9g6RiHzS3fIkFxnPdQHcrYZ8BJw3VUZdjLhA0vgdcIV4L4RuSAO6jxP6xbhB9BLPjXRF%2FtZ6%2FMWwxv%2F%2BCZnzH6w5%2FDA5cL4%2FOnTMzrspFHaiYvxvWyaTn1rf3fOjoFeuVfLt1kYdGiEBP5typZRU4m%2BBJZein2xtUQWj2&X-Amz-Signature=611c5ed15f7d3c6174e35df6fcdbd3eeeea3b9495b1bc240ac144624d0287fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
