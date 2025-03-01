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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZAC6PB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiM3BvEUWT5HLSK89q96JkPVwvCXZ2zfTNdRPFIKMqfAiBzpEfgNArQj5D1pjIHSnydFg8GbF0Ry%2FrcZ%2BOKTIVsbCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBSZ2kA3DGcG4ADQKtwD6fo%2FOKn9uJaM6BCXgEZxRANIwSnSFW1fs5iKBjYwOOiQW9ZFme3inTvSihpJaxct3peIotHHbu56IfJdOKvHAECqbIO3wZtvAOUPgKI%2Fl39uaCxiI57JHm%2BN9z1mIWqrZ%2B%2F5NyR47QcKIUz8V897HcagwXT%2FRaRzQTWMxKvsxUP9T9cpY%2B3K5C9AZ9m7pEkUMlHzl6uCmreEnfh%2FHEqvSJMptWS%2FU22ZV%2FUdIAQEANYVPpa771RZcB1g36PZ3kwT03K5QS3QaG41MNYL%2BehYIHhpnfj96p%2BqwejcPgOX5OZiLpRXDSMxdOsesy4H%2B6g3gJEKol4%2FBvpRoHzsvd2AqrTgtNF%2F6rU2XuqoU3GOriGRTMaGPoa4gowiYXfQ97fna1meZKEJWtyUl4twHb5LPATpjBA2Tw1OC%2FDDRU6%2BAHAbom5ou8R7shBXMOpOfs6abkBx6AsT3GeATrUwTmKQJsktnaVvyyztg%2FVqD1CUfwCCn20rbi%2B%2BCgCWFPvrUGkXwId7oQThlBuqh1pudPyKpMN5mUBe6LTglSeCmThb9VKsC0BFeBiC8eHG4QKeZPQ0EaWgU2v1HkFbuPsXdLxLRXkaNECjxCJ%2B0yc6mFCyBGeEmWT6TXHoqzyb95Uwy8eNvgY6pgEusMJUpuTX2z9QkFQjhNuq4nIpc9dgbWxUYKkdqKjRgGP1p4Ywjfd6L6p4hCRC%2BMnzePptAhlacIEkJVMQehbDu%2FZoM9yuNfggi%2BIWgwKMmxo2mIw45y9HkFz4%2FgpSIznwEhrG5Po1ScChKRcc35oGdNWx0JrhrXBnZMTxiZj9gGcvh%2BYwQ8X2TdE5ppn1oJBBIZzfpCjgv3HQOMwgEE4ekzIQhmKW&X-Amz-Signature=c6e2018ad9f1ee1c4967a22507ffc91874ae91114b00fe272cd5ccc04e30653a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZAC6PB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiM3BvEUWT5HLSK89q96JkPVwvCXZ2zfTNdRPFIKMqfAiBzpEfgNArQj5D1pjIHSnydFg8GbF0Ry%2FrcZ%2BOKTIVsbCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBSZ2kA3DGcG4ADQKtwD6fo%2FOKn9uJaM6BCXgEZxRANIwSnSFW1fs5iKBjYwOOiQW9ZFme3inTvSihpJaxct3peIotHHbu56IfJdOKvHAECqbIO3wZtvAOUPgKI%2Fl39uaCxiI57JHm%2BN9z1mIWqrZ%2B%2F5NyR47QcKIUz8V897HcagwXT%2FRaRzQTWMxKvsxUP9T9cpY%2B3K5C9AZ9m7pEkUMlHzl6uCmreEnfh%2FHEqvSJMptWS%2FU22ZV%2FUdIAQEANYVPpa771RZcB1g36PZ3kwT03K5QS3QaG41MNYL%2BehYIHhpnfj96p%2BqwejcPgOX5OZiLpRXDSMxdOsesy4H%2B6g3gJEKol4%2FBvpRoHzsvd2AqrTgtNF%2F6rU2XuqoU3GOriGRTMaGPoa4gowiYXfQ97fna1meZKEJWtyUl4twHb5LPATpjBA2Tw1OC%2FDDRU6%2BAHAbom5ou8R7shBXMOpOfs6abkBx6AsT3GeATrUwTmKQJsktnaVvyyztg%2FVqD1CUfwCCn20rbi%2B%2BCgCWFPvrUGkXwId7oQThlBuqh1pudPyKpMN5mUBe6LTglSeCmThb9VKsC0BFeBiC8eHG4QKeZPQ0EaWgU2v1HkFbuPsXdLxLRXkaNECjxCJ%2B0yc6mFCyBGeEmWT6TXHoqzyb95Uwy8eNvgY6pgEusMJUpuTX2z9QkFQjhNuq4nIpc9dgbWxUYKkdqKjRgGP1p4Ywjfd6L6p4hCRC%2BMnzePptAhlacIEkJVMQehbDu%2FZoM9yuNfggi%2BIWgwKMmxo2mIw45y9HkFz4%2FgpSIznwEhrG5Po1ScChKRcc35oGdNWx0JrhrXBnZMTxiZj9gGcvh%2BYwQ8X2TdE5ppn1oJBBIZzfpCjgv3HQOMwgEE4ekzIQhmKW&X-Amz-Signature=2e1260fdab9ead4834905501a0b8216a9b3e191e9bbbf072a7e2ace20f67fc53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBB6KKE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCaxBoGmy8GXqmhqIq9VVhFxm0EnG3vtYVeYgCaq%2BB95gIhAKxAcVePHjvrHTIYJdsUVsy%2BefA1BcXCdHEuWrBLj5OfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOR4zzwyMHBwa1o8oq3ANFODI1ogHO3hzwzYJ%2FWWP4yHqq%2BjKXcsLqoY7WjiiY50ft9uqRldXBGGyV9qovHwUWz%2FXyI%2B3m1sstej3iXVsO0JfKMO%2F%2BmWAgfE2hgWdpzZqmQZr5p%2FpXr2NGF4k63Dw8jGM4NtCnJjoVGm8Pyk5sJik1e2dQQXQMHOuE4yN09Yj6U9U5vT55k6FylSG0z8rDyPwYe0jEKP4KNXLQjKBe447TXWKF%2BXnDQJ8E63ZtgV1kkM4uNerdMc5nmOO1sZkhAi9F1mRtGEfLPNyevtvoz9iD%2F6p%2FpRzpjEK0JQAQXRbosTi1O54ovrtPpOsCGMwPfRi04AA%2FJq0jPAJYBOsuKrxy9O5pNA%2BX31Vi4kL5HoPtksHl2aGJyNsnXan8VwDuZanGZnHqnwJ8Cow5z91EsaeljWypT5ph5YkTwj1dTol9P7TePkIFR8cFqkqWy26%2FW5fRCuK3%2Fe84TCQW824VL5Ew01mQDNr%2B0JjpE3eFM%2BWhqiBRRq31LjqY9B%2Fz3vzGE4pXTySVlcHGBhfrS4g16hU7l9tLFbJVwBqWWZHNfxIO8d%2FBe5X6dIGG4EIS9niydMPuH2ZVEKIJrPNyt9gr2T9Ca3CItSNmgMYAEJIGRIg3gAX%2BDPw3hWQaXTC1x42%2BBjqkAZW6i%2F5%2FwJemNSv2SktekzGpJOycn7%2BIJJ85pd7qVPaTgE8uGT0VYIdu1cVWD2tCxMHrZrXaeaDuuRTccHPACZoujvnsabIayOwroPI8dODGjarCoqmjg2SiPXGG0RpOKfjEaKFzBC9v1%2BBUPAlGx5t3YWlYR4ZTFSRvm4sIkSCuiUyapESMxJAS9niS7lOv3Jdqj6jQ%2Bf8SetSVexZ0x4UaGzuc&X-Amz-Signature=d3789e81fdd7a0c7fb1efd3bec8729dbfd587c42a9b03a5a08a23be6b96e0de0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOR5IYP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD4fKo3DoiAcNmyFE8zYecvv1GxazYm0ilb2A%2BB28GUTwIgCW6E2tre%2B1MM%2B3X02zLMYTTFt34bHihB7yjel0yTFAsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2OHfq20NIR%2FzohgyrcAwV%2BYRA3RPoNklFEe%2BAy41FTr8bhR3GwB1L4XYie%2FYIpHy7%2FxQuSOU9Acd%2BBx2FwHE0bJryjxNW0NNA9uhrw8%2BwIuKdp%2B3Mwe86AVSw3gvOUs0xQz8xVnXVyxKJ%2BD5deE%2Bhyj36Yq1QhoLf9X57sQqzZaYTpQMUp%2F8%2BKGh1XOpBTszi2k4ZJdjd2UoTKSUhPaBgMGoaSJHIcKl%2BwYkbJsOcjXESpDYLqAkphmSJaCpI%2BG%2F33PkutFEY2txA92szSPEhH%2B7qi9Nkc3%2FlcwQ5IeZYsjjLRVEx7xlhRBO%2FGIqmL3%2BomNRI84h7%2BnO3adcRYUzFeWzHMoJkmznFNseM2L9YqCjGKBLAHSHdflGFVtGtNDBxPY48r%2FqoHxVPJ1At2sLoKEsZL0wI9SvnaQaBz4X%2Bu7hPcE3qBmK280zGG4tQA5VzAvFQ5O6LT0UnpLZC4n14xiu5EwTEdzl2lGS6LQ9O5hZQUE0nubdFIuRcv4Zcj2lf%2BTfR4m6y7SiJ1nXqaYWy0%2BhNEleKizG0%2BKJ%2BvtoScEt9g%2Fp9qqQUFipnT5AK9FAId4rnbIr18xpgIp3BVJrjZec23Tt38nv%2BiTLvBla6QA9T1TPpU%2BFdW96fplj9nE423bRGP5BlK%2FgEqMKTHjb4GOqUB%2FChNI2LirvkSkeGgnjQQXd9l3t9f6%2BwEFSSjW6gMSa9rPUprgVSI1hoHcViOptAijfCMwB2AeY4sJ4zrSjPN7z47iFvfD6yHFbDBFbrmUzF4mL5RjAimyjNkkn3vga8lIAAiKGVLXaM%2FlyZcnuxVVp6fC7K6YAgH%2ByLKSV%2Bd5Pjv9fbqzyJgXcDC%2BVI5iPQpyIsEkbJezP678V3PNvlGIWqFiDcN&X-Amz-Signature=3712bb5bdbe54bd36942fc4281e26f688155bad1cc34377f8ae49b1087349109&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZAC6PB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiM3BvEUWT5HLSK89q96JkPVwvCXZ2zfTNdRPFIKMqfAiBzpEfgNArQj5D1pjIHSnydFg8GbF0Ry%2FrcZ%2BOKTIVsbCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBSZ2kA3DGcG4ADQKtwD6fo%2FOKn9uJaM6BCXgEZxRANIwSnSFW1fs5iKBjYwOOiQW9ZFme3inTvSihpJaxct3peIotHHbu56IfJdOKvHAECqbIO3wZtvAOUPgKI%2Fl39uaCxiI57JHm%2BN9z1mIWqrZ%2B%2F5NyR47QcKIUz8V897HcagwXT%2FRaRzQTWMxKvsxUP9T9cpY%2B3K5C9AZ9m7pEkUMlHzl6uCmreEnfh%2FHEqvSJMptWS%2FU22ZV%2FUdIAQEANYVPpa771RZcB1g36PZ3kwT03K5QS3QaG41MNYL%2BehYIHhpnfj96p%2BqwejcPgOX5OZiLpRXDSMxdOsesy4H%2B6g3gJEKol4%2FBvpRoHzsvd2AqrTgtNF%2F6rU2XuqoU3GOriGRTMaGPoa4gowiYXfQ97fna1meZKEJWtyUl4twHb5LPATpjBA2Tw1OC%2FDDRU6%2BAHAbom5ou8R7shBXMOpOfs6abkBx6AsT3GeATrUwTmKQJsktnaVvyyztg%2FVqD1CUfwCCn20rbi%2B%2BCgCWFPvrUGkXwId7oQThlBuqh1pudPyKpMN5mUBe6LTglSeCmThb9VKsC0BFeBiC8eHG4QKeZPQ0EaWgU2v1HkFbuPsXdLxLRXkaNECjxCJ%2B0yc6mFCyBGeEmWT6TXHoqzyb95Uwy8eNvgY6pgEusMJUpuTX2z9QkFQjhNuq4nIpc9dgbWxUYKkdqKjRgGP1p4Ywjfd6L6p4hCRC%2BMnzePptAhlacIEkJVMQehbDu%2FZoM9yuNfggi%2BIWgwKMmxo2mIw45y9HkFz4%2FgpSIznwEhrG5Po1ScChKRcc35oGdNWx0JrhrXBnZMTxiZj9gGcvh%2BYwQ8X2TdE5ppn1oJBBIZzfpCjgv3HQOMwgEE4ekzIQhmKW&X-Amz-Signature=176ceca1ffde7899049ec6893fb6d2b672cdfdcebe85fdc34c9cb4df3ceff022&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
