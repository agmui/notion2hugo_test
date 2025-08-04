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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOL4M5C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGrjwvdkJSopcmoCJsS39TyAiucJS9SzFYlx%2FdeOXis%2BAiAiWPxNOp2R6HxAaBjBdCBpMQsY2yg27HjXXvqvf1d7XSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2FfzbKMDWvcLsQ8cKtwDdKGGaWMwEw2GfNJfHBNpusPjpfq0IpvJ1YtI23%2FZs3UEzyjpaMashGjtRpLBzSwQ5bp7GSj1nAMcMbca%2FZZd0OjCarCaOgKuQZzWO4ih6ufMOXZVe7ExlRUcBY90n%2BbKcfC%2FhClIRc4VE9jXbWUwiq9cOS%2Fz2RER3mOgifi9TyeR4mwvT4gG21MkNVSq5KDkLzkNYJvL7E8q2uBpHovZqNWqfFrbx7mcAK1LAabJ0xBHCby3LwEgttMyLHPuMxgYTY4d%2Ba%2BvDeCOekCJrBXrQKXYyIYeH07fENTvuliaKTsici09PGlQfFxDNpKvowUCVe9cGFdv1ALhG10TV7D%2B1cTeM%2BbL8dvEIKCwvxuLUkOz1MGLZ4EuP8%2FF31FBLdv2hqXFF9xLhL3QGqenN0y%2BhrwjjPcYeQKd8J%2BcAj7prFOvaS8ZmnwrY18HCThvu%2BA4feQDMUtzuemVC3MJiqi2U2bTyFjv2WJRloj0wqUsbkwHBJvHJ2KmNM7Tw79YFVMdrhIeVOR%2FIvTSF2XryskqYjyp8KuwOkExnDLOgpyLWlQQDPHHOdfYyzWtVj5n9%2FaBDCP55kNvn72yZSRGPZb6Iy%2BgwR1AsvidenQcu4y2TE%2B2nMYA5WSQF4mAEJMwxc7DxAY6pgEUJGMmhvbzFY2Nif7wDLeYGcvrJd1fQ46WX0fX74SJHUA%2BCnC%2FmmGTnj%2Fvkql4A9K25WXnJ7LTmnwIJaaOYJyPK57jt%2FGd%2BLFDTWIDnKsImVgpUEHG16wG9t9jUvyW1Pz0lXtNmCdqOaGjFateZGhnYhOPnZQ33G6cd2yNkiJBOFziCZdKIQAxAKBo9CQ9XJnrICaxuM8VsixRsoUIkrGQwveiNnir&X-Amz-Signature=b6d2af2880b4fe0e4832c3960007a31be379127c1614df4f5d95aa18cafc5d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOL4M5C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGrjwvdkJSopcmoCJsS39TyAiucJS9SzFYlx%2FdeOXis%2BAiAiWPxNOp2R6HxAaBjBdCBpMQsY2yg27HjXXvqvf1d7XSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2FfzbKMDWvcLsQ8cKtwDdKGGaWMwEw2GfNJfHBNpusPjpfq0IpvJ1YtI23%2FZs3UEzyjpaMashGjtRpLBzSwQ5bp7GSj1nAMcMbca%2FZZd0OjCarCaOgKuQZzWO4ih6ufMOXZVe7ExlRUcBY90n%2BbKcfC%2FhClIRc4VE9jXbWUwiq9cOS%2Fz2RER3mOgifi9TyeR4mwvT4gG21MkNVSq5KDkLzkNYJvL7E8q2uBpHovZqNWqfFrbx7mcAK1LAabJ0xBHCby3LwEgttMyLHPuMxgYTY4d%2Ba%2BvDeCOekCJrBXrQKXYyIYeH07fENTvuliaKTsici09PGlQfFxDNpKvowUCVe9cGFdv1ALhG10TV7D%2B1cTeM%2BbL8dvEIKCwvxuLUkOz1MGLZ4EuP8%2FF31FBLdv2hqXFF9xLhL3QGqenN0y%2BhrwjjPcYeQKd8J%2BcAj7prFOvaS8ZmnwrY18HCThvu%2BA4feQDMUtzuemVC3MJiqi2U2bTyFjv2WJRloj0wqUsbkwHBJvHJ2KmNM7Tw79YFVMdrhIeVOR%2FIvTSF2XryskqYjyp8KuwOkExnDLOgpyLWlQQDPHHOdfYyzWtVj5n9%2FaBDCP55kNvn72yZSRGPZb6Iy%2BgwR1AsvidenQcu4y2TE%2B2nMYA5WSQF4mAEJMwxc7DxAY6pgEUJGMmhvbzFY2Nif7wDLeYGcvrJd1fQ46WX0fX74SJHUA%2BCnC%2FmmGTnj%2Fvkql4A9K25WXnJ7LTmnwIJaaOYJyPK57jt%2FGd%2BLFDTWIDnKsImVgpUEHG16wG9t9jUvyW1Pz0lXtNmCdqOaGjFateZGhnYhOPnZQ33G6cd2yNkiJBOFziCZdKIQAxAKBo9CQ9XJnrICaxuM8VsixRsoUIkrGQwveiNnir&X-Amz-Signature=f0c1cec5f72d6b1a6cfca30965b4a88469352d17284501ea26d3cf936296df40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOL4M5C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGrjwvdkJSopcmoCJsS39TyAiucJS9SzFYlx%2FdeOXis%2BAiAiWPxNOp2R6HxAaBjBdCBpMQsY2yg27HjXXvqvf1d7XSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2FfzbKMDWvcLsQ8cKtwDdKGGaWMwEw2GfNJfHBNpusPjpfq0IpvJ1YtI23%2FZs3UEzyjpaMashGjtRpLBzSwQ5bp7GSj1nAMcMbca%2FZZd0OjCarCaOgKuQZzWO4ih6ufMOXZVe7ExlRUcBY90n%2BbKcfC%2FhClIRc4VE9jXbWUwiq9cOS%2Fz2RER3mOgifi9TyeR4mwvT4gG21MkNVSq5KDkLzkNYJvL7E8q2uBpHovZqNWqfFrbx7mcAK1LAabJ0xBHCby3LwEgttMyLHPuMxgYTY4d%2Ba%2BvDeCOekCJrBXrQKXYyIYeH07fENTvuliaKTsici09PGlQfFxDNpKvowUCVe9cGFdv1ALhG10TV7D%2B1cTeM%2BbL8dvEIKCwvxuLUkOz1MGLZ4EuP8%2FF31FBLdv2hqXFF9xLhL3QGqenN0y%2BhrwjjPcYeQKd8J%2BcAj7prFOvaS8ZmnwrY18HCThvu%2BA4feQDMUtzuemVC3MJiqi2U2bTyFjv2WJRloj0wqUsbkwHBJvHJ2KmNM7Tw79YFVMdrhIeVOR%2FIvTSF2XryskqYjyp8KuwOkExnDLOgpyLWlQQDPHHOdfYyzWtVj5n9%2FaBDCP55kNvn72yZSRGPZb6Iy%2BgwR1AsvidenQcu4y2TE%2B2nMYA5WSQF4mAEJMwxc7DxAY6pgEUJGMmhvbzFY2Nif7wDLeYGcvrJd1fQ46WX0fX74SJHUA%2BCnC%2FmmGTnj%2Fvkql4A9K25WXnJ7LTmnwIJaaOYJyPK57jt%2FGd%2BLFDTWIDnKsImVgpUEHG16wG9t9jUvyW1Pz0lXtNmCdqOaGjFateZGhnYhOPnZQ33G6cd2yNkiJBOFziCZdKIQAxAKBo9CQ9XJnrICaxuM8VsixRsoUIkrGQwveiNnir&X-Amz-Signature=e1749139fa6748918077e447fb36429811deb782aecc5cf003e98372235ca459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE47OJC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD8Y84aU6BCMedkJ9AmvsuBe9KGCka6FPW1pejGx7biIAIhAJOwYMkv%2F5M4g9mIe0XCaGL0UTGZsj%2FGXMko3GboKboPKv8DCEoQABoMNjM3NDIzMTgzODA1IgzaK0peLifE0F9dJcoq3AOchAmNS8Ua7WaBkmpC22QfBN%2FqdAy9rQ769yi1m9WjwU%2F0xgdkLL9uatU67hr4IMk5KzEo0aC2Vmc92PXmB4Ucna%2BXaZrL8TWOHau0JhdkHHC%2FcCbUf34ZqQG1ljg%2BFss1y%2F%2FDgswpQwTPQCM4m8zFGA%2F2TPIR6XUs7LUyjK87GWcXaCeGxm%2Faej3oeYdzg4gx9Sf2nOqrS8SiclXBknzK8cUe8v%2FKXGOmVxLMkvVk%2BuT6T5vnokISdZgpekVvnYaNfzaF%2BSZezsSao%2FbgEyC3cToDD3JXzoSGD3hqsRzNQit7QQW%2BndpoKFR1HdKfNxgP0V6jmHaA%2BHBNWUYZWZTDEfN0SK%2FA4h8LI096ERvKwSW2qnipll47a8PvNc553AIrROixFsRkIpnpl7KemSkFOGZ8e6HwrNqEkPApy1O75HF4AUDp%2Ff%2BwE2cn%2F4xrxB5iuMG%2FV68eoAM250GNiMdLyuMiJ4GHtu5AIiUuSR%2FNlFvZGKKOLuID8ZiD3QCIYgbjJuAR7ir8y7UMaiBsbZbc2okUU0C5nFwE8bKR9j1VhfoPNO1uOi6rDDfCajvcc8logTGuo0hbwnun8bxrxVIT%2FID%2FA1dbkGzPLAf3vdZ8Ah4PyuaKP80ZCzQplTDEzsPEBjqkAUfQ2RUH17nt2o0ELuoz5cPZVnPjD0ubMOtZrVdhrofBwg8wBMBcIADQzZX%2FCSfKkXmU1%2FRlDJpRj30z6ndjGM11Gbe8Xj7pmYGwzXA2%2F17b9CI80YIMdQgORiVn%2F%2Fw1KCU1pVuRQYve13hni2Ni3TgxjaalHDzdRT0Ke0BzisKuL8mZbOJiSIUESmj7phdnUW%2FILIaxKH5rDWZDL9lqoa9hXU%2BW&X-Amz-Signature=387d2368e09d20b01282ef9480403c57995493235fed66b320721e3edcd8e393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPSSPQJ3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDBbdAYf8mmxbrvSAd1m5BS6cbJEu0T3P9BMDv7YKxYXQIhAKQLPtz1w5IcHtYeLcca9TV3LJCHuLuclQk1gXh2DSpQKv8DCEoQABoMNjM3NDIzMTgzODA1IgzL%2FYrrM3IXKRSikJQq3APJYyuUWnWICi8qpXlF%2BnfkPhSQ%2F2HtDd1g9Ld11fSyJrMfugnkXjUkToPYvcuCsCjLUQcVWaM2RKbNiLjWpN%2FsIF1tY77CB9DrAnpuezxq02p2PZrm2F6zuBjAuBfmiLOIxcTk3xEoAFVrtNdJtHaW%2Bm4zPRy5x2q4PbKDwW3Bef3McDgwOr2yVo7lJzGeqLEAWsgsoQfeXxwbDwLFfZQDHemgR%2FEtNTmkza9oL40MDe0VS2N%2BuYDNbJrtpJQUKNTfVhUd0SyT8mPCajJDzqrkJpR%2F%2BL2Bz%2FcWXTQKxAW%2BoWz7WlHAgJ8%2FtYyeKzElaoZ69P1H631ZnL7aGU17A%2Bi0KUeeJ2Pef9uMZppMXwBejEEHTmoFi%2FKMavTG%2BI942mJy9akYlSFZjppJiuiW23l6ZdFtNRF6gG447FOED%2FdNN24zllNc7y4Q0tmp8NP13HM7CbYpKX1YGEiHt9JoGJSkpQhtTF1TqaYVatywo1KnrvpdQCyIb%2B1lIaQhNK%2BgxnIEWaTjelC5sMFxp0dZpxVN7QXU9NHLeDL%2Bwy5C2VB3mEGUCuKyRbB%2BA4gSjd6LynHAt0QIlq68BINrL5AIesVGMWbOWCSTVNKpC7eogXhZCVg3ruaH5qEX269WXDCozsPEBjqkATblVQcUTu1YlcrPt71XbhHJ%2BWY108v28dLE%2FfZg961%2FDaBDjGcWhBUWosfLwALdyLk6pY%2FnqF5rIHZ6PL4GvPGoNCoHs0LIaVv76LCjKF3NkvNt0AirSWydatoaxUn%2ByniPG08HCin3PdF6kWV0YIyXZqB6kgXjnXD6WSAHZdFiGgBTzdzc1Ty1wL2f7u3KXFvwhunniteT2y0ho5AHlGbGK7r4&X-Amz-Signature=8c70196063713e463ac6c129b3ba41f75a5dd83d06b35ea3b4629bd723771742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOL4M5C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGrjwvdkJSopcmoCJsS39TyAiucJS9SzFYlx%2FdeOXis%2BAiAiWPxNOp2R6HxAaBjBdCBpMQsY2yg27HjXXvqvf1d7XSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2FfzbKMDWvcLsQ8cKtwDdKGGaWMwEw2GfNJfHBNpusPjpfq0IpvJ1YtI23%2FZs3UEzyjpaMashGjtRpLBzSwQ5bp7GSj1nAMcMbca%2FZZd0OjCarCaOgKuQZzWO4ih6ufMOXZVe7ExlRUcBY90n%2BbKcfC%2FhClIRc4VE9jXbWUwiq9cOS%2Fz2RER3mOgifi9TyeR4mwvT4gG21MkNVSq5KDkLzkNYJvL7E8q2uBpHovZqNWqfFrbx7mcAK1LAabJ0xBHCby3LwEgttMyLHPuMxgYTY4d%2Ba%2BvDeCOekCJrBXrQKXYyIYeH07fENTvuliaKTsici09PGlQfFxDNpKvowUCVe9cGFdv1ALhG10TV7D%2B1cTeM%2BbL8dvEIKCwvxuLUkOz1MGLZ4EuP8%2FF31FBLdv2hqXFF9xLhL3QGqenN0y%2BhrwjjPcYeQKd8J%2BcAj7prFOvaS8ZmnwrY18HCThvu%2BA4feQDMUtzuemVC3MJiqi2U2bTyFjv2WJRloj0wqUsbkwHBJvHJ2KmNM7Tw79YFVMdrhIeVOR%2FIvTSF2XryskqYjyp8KuwOkExnDLOgpyLWlQQDPHHOdfYyzWtVj5n9%2FaBDCP55kNvn72yZSRGPZb6Iy%2BgwR1AsvidenQcu4y2TE%2B2nMYA5WSQF4mAEJMwxc7DxAY6pgEUJGMmhvbzFY2Nif7wDLeYGcvrJd1fQ46WX0fX74SJHUA%2BCnC%2FmmGTnj%2Fvkql4A9K25WXnJ7LTmnwIJaaOYJyPK57jt%2FGd%2BLFDTWIDnKsImVgpUEHG16wG9t9jUvyW1Pz0lXtNmCdqOaGjFateZGhnYhOPnZQ33G6cd2yNkiJBOFziCZdKIQAxAKBo9CQ9XJnrICaxuM8VsixRsoUIkrGQwveiNnir&X-Amz-Signature=b7b639f9b4fcc09a1d8af38e38dfb2e8205bb5a4a6d278b30c74ee1ea59887eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
