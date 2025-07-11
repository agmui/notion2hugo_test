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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJ5HSP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm2YJpzVl79yAQ%2FTaxprQn980j%2BV3OK2XufuK203bg%2FAiEAgDojW0E9VqsoZCf5pEsPCBs38XTeIfEyTeDNGqx3PS0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2BgfIoJ0lj1spJ6ircA4QB%2FsK1YGzBh3BgPoml3FeQ9ZskeNDdU6GHYEhhGyPluSd5dkA5vOvXlzOkp9ObuDKkPyU%2Bk9M%2BwykuwdZljeoXAtmSO7sUVuHEJeSS8ii1L1dhvnuHFG8h2FTw9ABGOAn63UYXN8wovF5bQnxwlnAkJhqczqWOt7mXbSDIAEvrCkm6GwNqD4cLOpzYQLhpw6LF6nWzJamw9DIKD7kIfNkflGN43zaO96f0jc%2Fu9K2p1mxXE6js3aFsGTgEGvv3KkRktscAvbP7PqkTOczyWetBDFyclqnwiQYN9FPStN6osJifivdQX1V3F6T32PqWTTV7cx1s%2FRk6N7R3peUalD5UGZD4lszhbSBxtR3EMzDDOUMnzru2jxWS01dLcKZ8nfiQVIjWZBrCyCXKP6aDB%2FVrPU722safmeN2GZ8Pyz5g16WJscVxCaAGyFzZKy1l3kKwzgsUIUziDAhXe7TmRH5OrAqKO%2B8f%2FJKvhhz2lJOpBtCnvedzqf5q6Z8%2FiPHJRdcvmpd%2FJIlUpQDm%2FDaodF4H2ysT5wCeLIRHHAGDfvINqx042chcR0Km6Llf2f3n6g3chXsZYNRki%2BAKx33Q6wr0d%2BPAb0eCaiRct14V0xROCU30eAvjs0%2Fna57XMMP8wcMGOqUB93oFk6C%2BGiii1qdPDGNhd%2FBQvzwRQSlu6%2BswANias%2FjIDKQdQYmS4s%2BsvMLF8yTEz%2ByNqdkRCTJG0bvL80MG2ttjLyIJ%2F2BZLe7RA4%2Fn6B%2FispnAbZ19Pwe7h3XeVksRrbzGT4tXB5oSXmoBLFwKXK%2FbS3dzDPVxD%2F7ypq2C47P3lxcFRR9X6A3NKyZvBKB9Ub%2BpcXWFe19nJAoIZ6pfLEYs0IVw&X-Amz-Signature=2aa20138d961f9eff99907eadc0afe1301e777f30daec236a4da27bb559c5c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJ5HSP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm2YJpzVl79yAQ%2FTaxprQn980j%2BV3OK2XufuK203bg%2FAiEAgDojW0E9VqsoZCf5pEsPCBs38XTeIfEyTeDNGqx3PS0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2BgfIoJ0lj1spJ6ircA4QB%2FsK1YGzBh3BgPoml3FeQ9ZskeNDdU6GHYEhhGyPluSd5dkA5vOvXlzOkp9ObuDKkPyU%2Bk9M%2BwykuwdZljeoXAtmSO7sUVuHEJeSS8ii1L1dhvnuHFG8h2FTw9ABGOAn63UYXN8wovF5bQnxwlnAkJhqczqWOt7mXbSDIAEvrCkm6GwNqD4cLOpzYQLhpw6LF6nWzJamw9DIKD7kIfNkflGN43zaO96f0jc%2Fu9K2p1mxXE6js3aFsGTgEGvv3KkRktscAvbP7PqkTOczyWetBDFyclqnwiQYN9FPStN6osJifivdQX1V3F6T32PqWTTV7cx1s%2FRk6N7R3peUalD5UGZD4lszhbSBxtR3EMzDDOUMnzru2jxWS01dLcKZ8nfiQVIjWZBrCyCXKP6aDB%2FVrPU722safmeN2GZ8Pyz5g16WJscVxCaAGyFzZKy1l3kKwzgsUIUziDAhXe7TmRH5OrAqKO%2B8f%2FJKvhhz2lJOpBtCnvedzqf5q6Z8%2FiPHJRdcvmpd%2FJIlUpQDm%2FDaodF4H2ysT5wCeLIRHHAGDfvINqx042chcR0Km6Llf2f3n6g3chXsZYNRki%2BAKx33Q6wr0d%2BPAb0eCaiRct14V0xROCU30eAvjs0%2Fna57XMMP8wcMGOqUB93oFk6C%2BGiii1qdPDGNhd%2FBQvzwRQSlu6%2BswANias%2FjIDKQdQYmS4s%2BsvMLF8yTEz%2ByNqdkRCTJG0bvL80MG2ttjLyIJ%2F2BZLe7RA4%2Fn6B%2FispnAbZ19Pwe7h3XeVksRrbzGT4tXB5oSXmoBLFwKXK%2FbS3dzDPVxD%2F7ypq2C47P3lxcFRR9X6A3NKyZvBKB9Ub%2BpcXWFe19nJAoIZ6pfLEYs0IVw&X-Amz-Signature=2e1710eee597e826e92da1208ffda41782d796491adce18044e88a1d123835a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJ5HSP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm2YJpzVl79yAQ%2FTaxprQn980j%2BV3OK2XufuK203bg%2FAiEAgDojW0E9VqsoZCf5pEsPCBs38XTeIfEyTeDNGqx3PS0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2BgfIoJ0lj1spJ6ircA4QB%2FsK1YGzBh3BgPoml3FeQ9ZskeNDdU6GHYEhhGyPluSd5dkA5vOvXlzOkp9ObuDKkPyU%2Bk9M%2BwykuwdZljeoXAtmSO7sUVuHEJeSS8ii1L1dhvnuHFG8h2FTw9ABGOAn63UYXN8wovF5bQnxwlnAkJhqczqWOt7mXbSDIAEvrCkm6GwNqD4cLOpzYQLhpw6LF6nWzJamw9DIKD7kIfNkflGN43zaO96f0jc%2Fu9K2p1mxXE6js3aFsGTgEGvv3KkRktscAvbP7PqkTOczyWetBDFyclqnwiQYN9FPStN6osJifivdQX1V3F6T32PqWTTV7cx1s%2FRk6N7R3peUalD5UGZD4lszhbSBxtR3EMzDDOUMnzru2jxWS01dLcKZ8nfiQVIjWZBrCyCXKP6aDB%2FVrPU722safmeN2GZ8Pyz5g16WJscVxCaAGyFzZKy1l3kKwzgsUIUziDAhXe7TmRH5OrAqKO%2B8f%2FJKvhhz2lJOpBtCnvedzqf5q6Z8%2FiPHJRdcvmpd%2FJIlUpQDm%2FDaodF4H2ysT5wCeLIRHHAGDfvINqx042chcR0Km6Llf2f3n6g3chXsZYNRki%2BAKx33Q6wr0d%2BPAb0eCaiRct14V0xROCU30eAvjs0%2Fna57XMMP8wcMGOqUB93oFk6C%2BGiii1qdPDGNhd%2FBQvzwRQSlu6%2BswANias%2FjIDKQdQYmS4s%2BsvMLF8yTEz%2ByNqdkRCTJG0bvL80MG2ttjLyIJ%2F2BZLe7RA4%2Fn6B%2FispnAbZ19Pwe7h3XeVksRrbzGT4tXB5oSXmoBLFwKXK%2FbS3dzDPVxD%2F7ypq2C47P3lxcFRR9X6A3NKyZvBKB9Ub%2BpcXWFe19nJAoIZ6pfLEYs0IVw&X-Amz-Signature=4ed1f6b9064e16b44407e33b35bb2cde98280ca29807d50a77d631262c2524a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPIC2N5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV3ezMkOJr8UogJQJNwbc%2FlXmCsnLwnOeDaPSgbi8zdAiEAjXtQwLpNX5iYkObAl7JRcZUgx2E%2BN47FYvzM3LBpOFQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FD2zl5z07I3BA8GircA2CRJc3YKeqQg4%2BuMO2LtpZhFjM%2FSq3CNeVHTEYwUNcLV%2FyamKgVDnTkLbG%2FFxP2qXNXkRWc0LiMKEFgGpoYFPtoWjuJ4BuI5bnancn1K%2FErFYG2sZ0dmYIzAh%2B5ooeZN6%2BQl5VJt1hsNgxNf3qwTWUUg1rOYmqMCdoy474wrynge0IBX3nX8suEF5owVMGyhsdfvQoKUMThAtGR5hrWRBsZFrJrTMIAM3OjClrtfQEO3b7WjiEYsywoDSxlfw0sy2R6uHK41WVXs7NPImne87uN%2BHbVTd7u1UnRURXF%2B4Z267zug3wkeZ2TyKT8sEwr3DfDk0%2FGkY%2FwLjll4ovITcW0iWESCaM5jXc2B4gni%2BUo37JZDF1hqDN8lEPsZ5xYa89KPouGbBwO8vEqd4%2BNOYVaQ0mYoI7LE2irzDm4BfjYIhGVZgME5yBTDsfSJHO5rfNqdx4RfcBl85TpQaM6xSFstxDRo4ertUB5NA%2FObzPtyH54QE6OZhKYqYBBYOLl30WmOoxtoJqW%2BqKyQWSWp9TDSyw2yFHqAXF2mL7611%2FtOD4z%2FNi8BRGfMJvJt4MVDrdP8I3xOW9ap8%2F1b4hD%2F3kZ3DMKNFv8lnSWNppnHnAU2eS62ePtQEIwIiumMLL8wcMGOqUBP50P8QV%2B3Pjzg7Q%2BXREWyoFyfU4O1dPTr2cLpTIt0XoxBWvNIJTndhe15G0u%2BO28EpLheoNsuWJLctDgsUnoeXZGkxCb7tqVDeIQD4cfQTOVkPeaZmYrmFHGTqEydSx3EAyrov4zQeq9mEO0nHBQ2Kl9060gykXopU2G55tP02DKgsIGQ2OMM7WrD4ZEq6gbXSjtlHrUxJN971mVpp%2BoyUYFEGtb&X-Amz-Signature=ad3dfe3fbf773ee1109106f2bb92a3742a8804e41b6c8ff18875b27b331a7fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCQF7IX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlFR8677I1vMlBMgNU%2Fc3dMfxdVfg%2FKWH5ty%2B5SzE1iAIhAIs4rXlOFVTZYx6994ZPzxJSzYk5O3QgcawYeZKR2PH2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlTE2qtBzZOxfejR4q3ANZIUvHbdUwgGMwNBH9A0muAbHnvi1opUAv9pFCMNmW0GPZQeOT75%2Fi6Hko%2BgA6A5o0lL4drUb9t4tG1fUoa4oupb5UcRe%2FLgvKlsMFXaYfWqjPAF15wYf0n%2Bddw7kJE7BFCZxWvMkSkfsiHk0ihVmOF3aLdfNA7hUhYmfheTXt9NuZ0xBnTzoBRP%2FPp%2BQRhwRqGrV7oXDvfCMU6mGKOTeX89823R5MaUPE%2FzNdKq71sB8uzVY0%2Fr%2FTpqGQpDWvXbGHlzGy20x%2F7dqfmwID%2FkV%2BtpKpYInPf6rMZaXtCiZ71swmSpKvelwx%2BfS3Hkchf%2BVH96T0sSvf0hF%2Fah1RgvzKKGooZBbwPkz%2FzVozkl%2B475Ei%2BuOVj%2FjDJMLSr3F4LdU4EBu53juShGu58x%2FsctNtcB5LHAO9ogGlrFYH6pHfmU731r8pw65PFMj2JDJ13wuv%2Fjb%2ByGhEx4rdz7FQf1deroSVNOGbWRrczVEzOT6kqQQLe7VMGDEw1G8gGLWIJqVJeo5KTWIMFDVEEVYp7UHykO59tqSYDIv%2FEFwC4Rz12lEK0gIPkxgeg6yyA2T86N86ZqTOJSZiHTOywgxgofuI8Fp7ebfIiPSyW6XMvDexcsS38vIKR%2Fi5Dw2EnDDS%2FMHDBjqkAa9DZ2j2Z5Amd5FUYeo5gsgGJyy3mmQKFJBvcqhtCSZaj28vQgeiFZHiEF79OWhctQeUz2LvFTetesJtcm6wA8OeWcW0sLhp9t6LyOkbqG%2BUq0jOmsA9cXJpAV0ad%2F4zfOAWyx%2Bd9VHlI3%2BD00Xs8Mc%2Bk1xXQUr3d6WBv%2BTRxu%2B1DHjluHZMgQHa1cBs7RcelPACcYBZMBXyRlKmJxmeRhUo525G&X-Amz-Signature=68ca896512b2f5e79cc837fc83a86cd98bce8043558760bf94854aa53f3ddad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJ5HSP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm2YJpzVl79yAQ%2FTaxprQn980j%2BV3OK2XufuK203bg%2FAiEAgDojW0E9VqsoZCf5pEsPCBs38XTeIfEyTeDNGqx3PS0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2BgfIoJ0lj1spJ6ircA4QB%2FsK1YGzBh3BgPoml3FeQ9ZskeNDdU6GHYEhhGyPluSd5dkA5vOvXlzOkp9ObuDKkPyU%2Bk9M%2BwykuwdZljeoXAtmSO7sUVuHEJeSS8ii1L1dhvnuHFG8h2FTw9ABGOAn63UYXN8wovF5bQnxwlnAkJhqczqWOt7mXbSDIAEvrCkm6GwNqD4cLOpzYQLhpw6LF6nWzJamw9DIKD7kIfNkflGN43zaO96f0jc%2Fu9K2p1mxXE6js3aFsGTgEGvv3KkRktscAvbP7PqkTOczyWetBDFyclqnwiQYN9FPStN6osJifivdQX1V3F6T32PqWTTV7cx1s%2FRk6N7R3peUalD5UGZD4lszhbSBxtR3EMzDDOUMnzru2jxWS01dLcKZ8nfiQVIjWZBrCyCXKP6aDB%2FVrPU722safmeN2GZ8Pyz5g16WJscVxCaAGyFzZKy1l3kKwzgsUIUziDAhXe7TmRH5OrAqKO%2B8f%2FJKvhhz2lJOpBtCnvedzqf5q6Z8%2FiPHJRdcvmpd%2FJIlUpQDm%2FDaodF4H2ysT5wCeLIRHHAGDfvINqx042chcR0Km6Llf2f3n6g3chXsZYNRki%2BAKx33Q6wr0d%2BPAb0eCaiRct14V0xROCU30eAvjs0%2Fna57XMMP8wcMGOqUB93oFk6C%2BGiii1qdPDGNhd%2FBQvzwRQSlu6%2BswANias%2FjIDKQdQYmS4s%2BsvMLF8yTEz%2ByNqdkRCTJG0bvL80MG2ttjLyIJ%2F2BZLe7RA4%2Fn6B%2FispnAbZ19Pwe7h3XeVksRrbzGT4tXB5oSXmoBLFwKXK%2FbS3dzDPVxD%2F7ypq2C47P3lxcFRR9X6A3NKyZvBKB9Ub%2BpcXWFe19nJAoIZ6pfLEYs0IVw&X-Amz-Signature=fb1eed20986bc500578291c1c91f030f9a3917c2b708e7a241fa5dfdc4d3857e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
