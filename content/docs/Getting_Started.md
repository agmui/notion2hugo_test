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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5EQ4WEG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAUYPuNkA38Ux0YoHtNFj9oCUYiJEazF2HpYhgNdvHnMAiEAxEIvLwXNbfyyF4t31pxZJQ2Z3qV7QQ3HAUjX18PGnsoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXKMgE17%2FPBg6PBbSrcA7%2BJ9RxKZfgxA37oG2KBf%2BbwfIvO6wdaYETwDJaEha8rE%2F3lQA0e1Or3oTjeT7UxljpRLXO0HUv6p6gO%2F%2FS5Pu26aVqc%2FnianS8QBZF0h1ILIbz6M9ePJOuLKyaJPamlzFre%2FTkRRE1mN9p%2FmnmLrzH8eEG117ZNw%2BXAHRU3E9%2Bc5dSir1iN5As3wPMx0Dp8z3K%2BxpB7m1yydyMNPaWrwCloNIWpF%2FmeB2Mq35bBkrjXZmRnrRb0cgaeHup%2BMd2qqXBxQ1C9I34RKlzsBw78tRMArNAHxHsfe85x%2FZWhL5KyeKIXuctjadbpK%2BqEPPYAO6%2ByWAa2n1Lqi%2BBdtWjlJs5Zn8QvHHMfztSWdHuOocMi5xWQiH6%2Brlzk5CpY%2BmjcZXgEU%2F%2Btp4xIiAMq5m23y3JEis%2FJPk9zYxlmJ%2Bcq%2FUvNw%2FXWL6wzzBaufxONhXQOuFbfVDfSiFVxhmLd8pN35xgq2pMvWDCcGi1W64SAxUXtEgnzDDELDOp2i1oIl4zd5e0byBB0%2BFwhAdWav2M%2BfADVUIAcbR2tubQWlgeYR%2BCN%2F79fRPRel%2BgzJjOGWFfENqOlXIEoAKK5NSW1%2F0QVkufa4jdlnMTCIYENfUxtGzULO%2F4yO0ZDHlEWtBuYMMWNsb8GOqUBYEAJvIrOZ9TeX5w7ySdfEF6pQu6r1smVM6rzGG0I%2FaXfykcjX97oKc1JAZo%2FuYlPFGb5ysJwUrqTIe5i3siRvW2QiM0DYVdbmp4teTUP0k3EeD5h9UWtEDqFtOUgsCYP93I7EhLg1vtQ%2BI%2FsoY1dr%2F%2F3ZM1WvYcOU%2Bs%2FnI5N5eyIZ6sPxSKFy3kjC0nlrkkAB4AHG15kygWpeNp%2F1x4wuNXbVhQ9&X-Amz-Signature=0bfb116bf95c9abec8003b61c181271073e26d2bf624e961832266a48f13f0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5EQ4WEG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAUYPuNkA38Ux0YoHtNFj9oCUYiJEazF2HpYhgNdvHnMAiEAxEIvLwXNbfyyF4t31pxZJQ2Z3qV7QQ3HAUjX18PGnsoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXKMgE17%2FPBg6PBbSrcA7%2BJ9RxKZfgxA37oG2KBf%2BbwfIvO6wdaYETwDJaEha8rE%2F3lQA0e1Or3oTjeT7UxljpRLXO0HUv6p6gO%2F%2FS5Pu26aVqc%2FnianS8QBZF0h1ILIbz6M9ePJOuLKyaJPamlzFre%2FTkRRE1mN9p%2FmnmLrzH8eEG117ZNw%2BXAHRU3E9%2Bc5dSir1iN5As3wPMx0Dp8z3K%2BxpB7m1yydyMNPaWrwCloNIWpF%2FmeB2Mq35bBkrjXZmRnrRb0cgaeHup%2BMd2qqXBxQ1C9I34RKlzsBw78tRMArNAHxHsfe85x%2FZWhL5KyeKIXuctjadbpK%2BqEPPYAO6%2ByWAa2n1Lqi%2BBdtWjlJs5Zn8QvHHMfztSWdHuOocMi5xWQiH6%2Brlzk5CpY%2BmjcZXgEU%2F%2Btp4xIiAMq5m23y3JEis%2FJPk9zYxlmJ%2Bcq%2FUvNw%2FXWL6wzzBaufxONhXQOuFbfVDfSiFVxhmLd8pN35xgq2pMvWDCcGi1W64SAxUXtEgnzDDELDOp2i1oIl4zd5e0byBB0%2BFwhAdWav2M%2BfADVUIAcbR2tubQWlgeYR%2BCN%2F79fRPRel%2BgzJjOGWFfENqOlXIEoAKK5NSW1%2F0QVkufa4jdlnMTCIYENfUxtGzULO%2F4yO0ZDHlEWtBuYMMWNsb8GOqUBYEAJvIrOZ9TeX5w7ySdfEF6pQu6r1smVM6rzGG0I%2FaXfykcjX97oKc1JAZo%2FuYlPFGb5ysJwUrqTIe5i3siRvW2QiM0DYVdbmp4teTUP0k3EeD5h9UWtEDqFtOUgsCYP93I7EhLg1vtQ%2BI%2FsoY1dr%2F%2F3ZM1WvYcOU%2Bs%2FnI5N5eyIZ6sPxSKFy3kjC0nlrkkAB4AHG15kygWpeNp%2F1x4wuNXbVhQ9&X-Amz-Signature=6ee9c34b63ecaea0c30f88a1a375fe035a9d14c2f4ab3ea473c818557421f10e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAJOA3E%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLbIHcpO3kI4qrAn5bCdJRYeZqv%2FXEi%2F2U4Iv7FPZSsQIhALfRadgPhXg23EwfADbpERN7aLckLlwWvuQSd8gg0jZ0KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFY07n7rrW9HskWmUq3AP51d3iDW1NoeXwfXoRwe%2B9IqbZUgYRcJ4AxWVQH%2FbP7CQl3Cyvie6H%2B%2F6F5U5p7REbQSRx8hfOsKlvK%2BVsF70UGve2H5Pl7GI3v7tcfOmz1LoUizpbYQ43RjarGmHpCeEmivB0q2I86E%2F7HiiH1v%2B80opURH%2B6K0cMwIX24tmda%2BJxjOYJK4%2FDKCpnxpM2F5DrBGZtDPDPchPTwigdPlAsFFSqbuZqquou0udKR%2Feu8273ZtpiNoKWGPHjO%2BtQnBQUmhkHcBX3AOMM6eUx5uUZ5RFkQ72rQE2P%2BckUqq8xEnlLZymTsNf3T2YMKn8moE7BgGRBzTnDvCZNqQvlPqJvrEOUrqr3Kqm6NXEc9fVS%2BrJi%2FVLh2H5cQhD2z9tAokVc%2BqQhmKQhjBbaR682FHGXRUGK6iq9EOU7Nevoff%2FmEN2NbBqv0FAkw1RQucentqL8Ve4kugxzfGOgJ0ffCGwMZk9exFICw1J4s9iYY9x1fw1SVSRrSw0N0X%2FQRF4MeEUPdlDvpnlrzVBWsJDJakeHkPRXgRQhGPly6pXRusvBL38jjihuodpnDSh1ixFM0HsxfBNkeawdKciV5WFs0aDhDpJyeqn6NzYFJ4vGVdUAQEhCPAc42IBQSHsrIzD5jbG%2FBjqkAbQp4LEPGnpbQ6DXlI2k7VM8PR7GZhuNTG6F2pHuANXCnJ96CB0qrDkjPkBvFTHq9cqF4cZoxKT4rAEi9BNBjc%2FcDc6J1ItC6j66UxVXVy5mrUrZ6VDFHJ1A7foVmI0lNKBj9mwUYKDDXJziNHJ%2F%2B8HUDgm7sxzZLDIa9h18P4eeU8vByC%2F7FtD2nsv8srBmEHYE7FYMRFOgJ2H3BbW8Y1ucYoH%2B&X-Amz-Signature=468e38908e4bdadce948e3863c68a3d91fb8e19e001836e75c8e048e844e926e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3H7MKB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHWu6zUO9r3jMXwN6K%2FvDS%2BPWtI7WqMJ0pdMWspZrDFQAiEA9bjKZpDxJtsDORHncHuNqA9H%2Fe7edM5zCRIeFKTXaWEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKweg0TWJMr50TJL6CrcA%2FHADXJnANQWPllZCjdrQXNkRaIyUe6vTDOSiS%2B7ernZKbtLaeEvU%2FsozoerMVrpMeudCgyI0%2FMJHzaB8ty3EGf6zVof1Rd06TMd4hZ46mOY37tr9Pw1qVjUDu6p%2F3379VvOLaHF%2FcCuMjvEmgm4Oo%2F7vr6eZqE%2BbFZatq9QkA7xRQ%2Bp7K8SbJqnumA21LaGDGlKw4TvEkR%2Bms%2FCyHJLqJ9seD1oE13R%2Bt%2FCCoAvwwl9Mc%2BaHU28tB3p4uHc5TMicDMWwvjuz0UXcJgJUblxP3ZWrpbblNEPAOb%2Bhdbrm9le3gZeZGVXgxrdLTne7aIOrjxKD1XDUoJ9OHqCUY02rif0b%2FzDHtU2O%2Ftf0XL0XGepy8HRsDMkzN3NlCRbJO4LISUNpXU2XQPmtN2rrJaU1%2BbYwUlPRldetrjAeIuzWOAT70cMU9bcDK3ggbUOuw5HUf4%2BuY2oNGsTy%2FfzB8NetL2YJV%2Fe5oHLYy%2BxPJyDRX7OUiA21M77U%2BHtco%2BlZvm8TTiu1EZeEm48oQKP9XBOUxJM7ylE8GamnuaJBQaRA8pJOFhO0I4oWNATCCdKBmTTdC2d4iqdnNUKPT9NFgGUyp74BXPa4QrKjTM0Env%2FPUPYfX0UwLuSPhtT0mKcMK2Nsb8GOqUBR9PYySTMiLcEzhORhSxgNu2E%2B2Ep73K%2BZC2%2FLiSFv0p46q4to%2Bur9Ti%2BWZrW5RdxZxoruSH6V1NcnXemHCeRxVEFzophYSLyOCZlYOUYr50GOzn5ST15Fl7WLuhe3MDJc40EmslSbYyDwSY4owb8ZCDjmHtiFEdX9voh9jhueIRy%2FuJEYVy%2BedKAy%2BKOdRWGQc%2FHL4Sx%2F8LT3iuHz51iwO%2FlH2EQ&X-Amz-Signature=836379b8c1faefd767e3d35d4e22864a3ce3fd80f1d757fe71f555e67a103858&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5EQ4WEG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAUYPuNkA38Ux0YoHtNFj9oCUYiJEazF2HpYhgNdvHnMAiEAxEIvLwXNbfyyF4t31pxZJQ2Z3qV7QQ3HAUjX18PGnsoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXKMgE17%2FPBg6PBbSrcA7%2BJ9RxKZfgxA37oG2KBf%2BbwfIvO6wdaYETwDJaEha8rE%2F3lQA0e1Or3oTjeT7UxljpRLXO0HUv6p6gO%2F%2FS5Pu26aVqc%2FnianS8QBZF0h1ILIbz6M9ePJOuLKyaJPamlzFre%2FTkRRE1mN9p%2FmnmLrzH8eEG117ZNw%2BXAHRU3E9%2Bc5dSir1iN5As3wPMx0Dp8z3K%2BxpB7m1yydyMNPaWrwCloNIWpF%2FmeB2Mq35bBkrjXZmRnrRb0cgaeHup%2BMd2qqXBxQ1C9I34RKlzsBw78tRMArNAHxHsfe85x%2FZWhL5KyeKIXuctjadbpK%2BqEPPYAO6%2ByWAa2n1Lqi%2BBdtWjlJs5Zn8QvHHMfztSWdHuOocMi5xWQiH6%2Brlzk5CpY%2BmjcZXgEU%2F%2Btp4xIiAMq5m23y3JEis%2FJPk9zYxlmJ%2Bcq%2FUvNw%2FXWL6wzzBaufxONhXQOuFbfVDfSiFVxhmLd8pN35xgq2pMvWDCcGi1W64SAxUXtEgnzDDELDOp2i1oIl4zd5e0byBB0%2BFwhAdWav2M%2BfADVUIAcbR2tubQWlgeYR%2BCN%2F79fRPRel%2BgzJjOGWFfENqOlXIEoAKK5NSW1%2F0QVkufa4jdlnMTCIYENfUxtGzULO%2F4yO0ZDHlEWtBuYMMWNsb8GOqUBYEAJvIrOZ9TeX5w7ySdfEF6pQu6r1smVM6rzGG0I%2FaXfykcjX97oKc1JAZo%2FuYlPFGb5ysJwUrqTIe5i3siRvW2QiM0DYVdbmp4teTUP0k3EeD5h9UWtEDqFtOUgsCYP93I7EhLg1vtQ%2BI%2FsoY1dr%2F%2F3ZM1WvYcOU%2Bs%2FnI5N5eyIZ6sPxSKFy3kjC0nlrkkAB4AHG15kygWpeNp%2F1x4wuNXbVhQ9&X-Amz-Signature=910849b606aa0fedda6eef9ef0c410591bdadb64c7f4152e70f142d6b4d1aa05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
