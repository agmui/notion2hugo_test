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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYQJPSR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2FO3ZeeN7JHoaoRCq2vrBN9AzyBRpWbHwfmGpITxOnAiEA0vILCzCPFqGS%2FbaNBlxJp3klJMNtyXEIdC5%2BrJrGkA8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDDgjxzblgVqVX9eadircA6BHN0o%2BRcr9pLHUIQ92uOKVdxT%2FPdWpzcalktiVQ6TczbaTA9qTgqCry%2BX9PpS6ZCXmg74r%2FgIqacmCfrtM%2FAMzUwDZUum8hpDAQoUxEL9jZr9JXTnb%2B4LR%2FxiZ8D1TIHE3B2l0h%2BmrAzM9vJxd5WV6V8kfthEV6KTnMovpfQH1obZViQd%2B2UJzA8Y1WqTiUs9R0w%2BqdAgbffdqkhi9BxZr8IYx16h09SP5igxZcHzE1oQ%2BeU97tNfXqEE1ET8d6iHV1yzuAMWbRtHM64QKKuCgoFaUmJcLP1a47BcycKcMR9dV7EsLdI8QuMHp8KWfL2Tz%2FLm49iU2zmW62cvkRKX1VnE2tAiuGGPnWxRSZ%2F1qYS3oxmjlssnAKBPLoeRO%2BtdZvKkC0AHrQwrMRpXcVigcqqgG%2FyiiRS7ZGml%2But4cdZaoN7MtXExuZ%2BbtjT4Y5wOTUR7ghBywJDzGLVZZacuU%2Fvq8wYud1rTFul6s1YMv4AvGi1Z39ZdOUkum3M3mCZCJFL9S9AYz7d1yM%2B78RH8hQeVkNTru0UrsbpUeu9AcOeLhqYs7OEaIVqkddPx3D9SIOCQedWGhGb%2BIsJ5ZVWOwqnuI4J5peArDTvdz82NQQTSkd5uBGxyfXIDfMIqimb8GOqUBbtRnA65DTg7MU1SUN5RgtDLSe4zAFhzeDgtu8cy6X2mMlgZtQlaZGs3Ixk61p8oJYomVwTarKPMMJ9c9RJH%2BBCj%2FAd5QBvRd1VYypocik68lVGcRO4u8oRIlbGGk5Hxcul%2By9fFT7qSZisclNZLj6oxtC%2B6ARWYM60kAJjxAOI2g5%2F9LUKQHvsSWm1ciWaRilHSxZnpsvowUkw3qmkHijp2c7IG4&X-Amz-Signature=9dad497ca1cad71e527b79b0c57a5df6d51cefded3929f1963a102f0bba6df8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYQJPSR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2FO3ZeeN7JHoaoRCq2vrBN9AzyBRpWbHwfmGpITxOnAiEA0vILCzCPFqGS%2FbaNBlxJp3klJMNtyXEIdC5%2BrJrGkA8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDDgjxzblgVqVX9eadircA6BHN0o%2BRcr9pLHUIQ92uOKVdxT%2FPdWpzcalktiVQ6TczbaTA9qTgqCry%2BX9PpS6ZCXmg74r%2FgIqacmCfrtM%2FAMzUwDZUum8hpDAQoUxEL9jZr9JXTnb%2B4LR%2FxiZ8D1TIHE3B2l0h%2BmrAzM9vJxd5WV6V8kfthEV6KTnMovpfQH1obZViQd%2B2UJzA8Y1WqTiUs9R0w%2BqdAgbffdqkhi9BxZr8IYx16h09SP5igxZcHzE1oQ%2BeU97tNfXqEE1ET8d6iHV1yzuAMWbRtHM64QKKuCgoFaUmJcLP1a47BcycKcMR9dV7EsLdI8QuMHp8KWfL2Tz%2FLm49iU2zmW62cvkRKX1VnE2tAiuGGPnWxRSZ%2F1qYS3oxmjlssnAKBPLoeRO%2BtdZvKkC0AHrQwrMRpXcVigcqqgG%2FyiiRS7ZGml%2But4cdZaoN7MtXExuZ%2BbtjT4Y5wOTUR7ghBywJDzGLVZZacuU%2Fvq8wYud1rTFul6s1YMv4AvGi1Z39ZdOUkum3M3mCZCJFL9S9AYz7d1yM%2B78RH8hQeVkNTru0UrsbpUeu9AcOeLhqYs7OEaIVqkddPx3D9SIOCQedWGhGb%2BIsJ5ZVWOwqnuI4J5peArDTvdz82NQQTSkd5uBGxyfXIDfMIqimb8GOqUBbtRnA65DTg7MU1SUN5RgtDLSe4zAFhzeDgtu8cy6X2mMlgZtQlaZGs3Ixk61p8oJYomVwTarKPMMJ9c9RJH%2BBCj%2FAd5QBvRd1VYypocik68lVGcRO4u8oRIlbGGk5Hxcul%2By9fFT7qSZisclNZLj6oxtC%2B6ARWYM60kAJjxAOI2g5%2F9LUKQHvsSWm1ciWaRilHSxZnpsvowUkw3qmkHijp2c7IG4&X-Amz-Signature=f85848d1fa08322c7ee806be8c7d7adfca0d815869707e130bf900ebd684f453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2YRXA5K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtwdhGM%2Btdpo1GDPIL8Bgl0yv%2BmDuGVZVSEyzykVsDDwIgJArefftPXpUT2z4faKqxOPpOHiOWK9%2FbhhUSEHbgJyUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBwNwsko3yCi1%2B336SrcA4vAm1lhVx6KeZUaMHAx4WyRdJDyCb1r62hG0KcbvfkNBjo%2BXNlBjaSGrXd1alq3uQrtHbBt1RD1nAynNFe2CwO54jsRHf7OzuEDuDx%2FNO2854U7rzdLVzDVi7G7wVlGMnZVwZeR3f7K%2BJoitI8V2XDKjWv9inG%2BAUCjGftltRa92hqW9OX9klBEe%2BhgQLCdUVXCMTAFf6XOatyU0SUexwNPMSlRTHqSvsRhKl%2FCXJPAztn0iZwNj8mVwNhW%2FodrUyB2ynEBEQdkttffvvVy8BRlwu3hxoJTgl0%2F4PhY7oi%2Bd9KTZYj7sLE4S6yC%2F1iFHuz%2Fm9ysx6XolOtkkVCoFmPlsfjgtJWuIBK5m78ggOXiSgdkl%2BtiTBT3eX1iDwSzEMhSOUC07PYKUwpAg7YQLZuMhMa%2BnhUlkwC6VFmcB0b3dkU1%2Fv3nbImwPqNwtcP9rf3dB9lD3BFSHJi4V5hlnobcDcUCG6n6l%2F4i6EigHdfCBwDJce8d5bpKAHoBDzgxhzAWV%2FCXJMKcS0HU5NtynIIapb%2FLdXi8xL1NYTKwLHnBml0c0Cl28dHJUFoTkuZFXyv4bFM6%2FPpPhcn48MHITym%2BWdGejZMzWRNiG6d8S1Qt1peftR6y7A6r%2FC5sMIeimb8GOqUByIK2SGjWaeEEav%2FdWIzkJOIiLi7gbpWZaXVKGkGt4Bxn3YMhm294mqljIBT3vhiEQ4M1lsDVLIL0myW0iRmLquxszvtPvW9SG9Bwaop5f%2FE8LGpWBlmTaas%2BkKuM2a%2FLUtYlwitMPQz4IbGLo9izRZ3aL4NapPyC%2BE1OlTEV3q9nRVyfi%2F7hgBOnNr24UcBow7IvhILuMDSabxJ1XkoM5%2F2xhHJp&X-Amz-Signature=931d0422f1340bbe62f9c8d77d421271f2dcaa64ef31de13c53998ceddfa57a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEIMY7X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYzA54sY1m7dew5UYL1YO2UcZaoxCaGj5ftsrhM5rPKgIgZBEViYYRdG4H1Xcw0gY9yqVd0mTmMm5umsEexR0YPUcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDDhTGkXbAMh4WYgCmircA1usY%2B2GRgYkRtS8wWDXAn211J9BfeX9%2BKogp6NX%2FhdIoP7gQ%2FnOWIGFyQKsOhlrVXmqg9REGNXNQpk4QHqT9lCxvXlpHTWy77HbddikHz9b4feUIy2xINHNtlF7fAXQAy%2FB5fEf5hbCyESFmZSQ2l2qUa3SiD3dxUVP7PzOyRAWs8GTViZgxGA1OTatd0959CyBwMlhkJoL1QCwAvcFwDu3AQUx9xj2D5JNXwRlbxm%2BqO0s6GrjavaqR%2BK5x7vkSAFbVEf387%2BBkaFAw%2FkLT92kc3mkUIAgtxlPXW%2FqVQIp1fMY25k07Xt6ZGsVtZ9a0%2FFGlbvI8S01UGMBioUBahSAca5Vpi74rO8evErlyNFchwtYdq%2BvrVezrk8R1yx4msYvvZt6roL21xLIZViy8ZZ4scTcHzZYblg1Cb9vgfvIYpTuRWXqZATCj1BrYMIPxtajE3lvEc06TL%2BGIoBN%2BQ%2BNtsieUa4qt%2Fb74wFWkN9hZ6SMpfMFHnk0LJRKaO0L3UTMHLrNZXODKqjVzO6e461GGbk%2BYPP1DYj3Q0Mj60Rl74XsQch%2BK4Kgy8AjhL4rmzKMy%2FgxRt4jWDBe1by8Mpwr3GQyIhop7LNAA%2FVuqewt05yZbZgnrlRT3s0GMP2hmb8GOqUBo88RWfVtpQDs03bsdPcKP2ycBSoQixBnPT%2BCZJ3ZjeIglzJ9JlxvgIBq7Cvioo4jGor6pHzemEIirTgNn8WDkp0rOjgkeeCevWgfdIZw5GdTxlAToMY5DN210seoe4b7IBZktEb8vWdz4gfbxrWOWHvmDTMEyDEMG4OXBJmVWAW4Mpj6XD9U1C1j1o0LGCYefnwCHkBUnLZE8gBLBNdKOQC0XoDA&X-Amz-Signature=d24b9e547c5f81db9cae0e7a43375730f113b54535f75690f10d877e3d927596&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYQJPSR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2FO3ZeeN7JHoaoRCq2vrBN9AzyBRpWbHwfmGpITxOnAiEA0vILCzCPFqGS%2FbaNBlxJp3klJMNtyXEIdC5%2BrJrGkA8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDDgjxzblgVqVX9eadircA6BHN0o%2BRcr9pLHUIQ92uOKVdxT%2FPdWpzcalktiVQ6TczbaTA9qTgqCry%2BX9PpS6ZCXmg74r%2FgIqacmCfrtM%2FAMzUwDZUum8hpDAQoUxEL9jZr9JXTnb%2B4LR%2FxiZ8D1TIHE3B2l0h%2BmrAzM9vJxd5WV6V8kfthEV6KTnMovpfQH1obZViQd%2B2UJzA8Y1WqTiUs9R0w%2BqdAgbffdqkhi9BxZr8IYx16h09SP5igxZcHzE1oQ%2BeU97tNfXqEE1ET8d6iHV1yzuAMWbRtHM64QKKuCgoFaUmJcLP1a47BcycKcMR9dV7EsLdI8QuMHp8KWfL2Tz%2FLm49iU2zmW62cvkRKX1VnE2tAiuGGPnWxRSZ%2F1qYS3oxmjlssnAKBPLoeRO%2BtdZvKkC0AHrQwrMRpXcVigcqqgG%2FyiiRS7ZGml%2But4cdZaoN7MtXExuZ%2BbtjT4Y5wOTUR7ghBywJDzGLVZZacuU%2Fvq8wYud1rTFul6s1YMv4AvGi1Z39ZdOUkum3M3mCZCJFL9S9AYz7d1yM%2B78RH8hQeVkNTru0UrsbpUeu9AcOeLhqYs7OEaIVqkddPx3D9SIOCQedWGhGb%2BIsJ5ZVWOwqnuI4J5peArDTvdz82NQQTSkd5uBGxyfXIDfMIqimb8GOqUBbtRnA65DTg7MU1SUN5RgtDLSe4zAFhzeDgtu8cy6X2mMlgZtQlaZGs3Ixk61p8oJYomVwTarKPMMJ9c9RJH%2BBCj%2FAd5QBvRd1VYypocik68lVGcRO4u8oRIlbGGk5Hxcul%2By9fFT7qSZisclNZLj6oxtC%2B6ARWYM60kAJjxAOI2g5%2F9LUKQHvsSWm1ciWaRilHSxZnpsvowUkw3qmkHijp2c7IG4&X-Amz-Signature=ace16cea4f7fe0fbedd006648affd5ea2d02d814705493df375b4e124fcc9d96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
