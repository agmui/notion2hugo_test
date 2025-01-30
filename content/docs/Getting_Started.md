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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JFUK3O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2F7kRcggK4mdA6j6jjouINnVM3HchS2n1GRqi0Z4ATQIhALOWHeZTMHGRWxS3eeN34Mkl0iILB2OBbNv3FJgXz%2Fj4KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXWM3TxjjAqDkYLAwq3ANbf2KgBQ7Fi608vwrFM7mCWiJWYZNvTKb932cKGyrQH52P%2BfPJQe8kBVRt%2BFncd30VyPSc6%2FghEw%2BWtscVxI%2FXH4ErTm18SF0FlNZcpMr8X%2FwWrcFPA48NjYryCn2XaFhE7cPao3Z73RzmlJ95%2F5dM37VC0FQK5T9J7Q1D0H9HmFaDRUnGqTfPlggmJzoMVOtQymL274dprefeleEOX%2BDTqvpMVzOcmDg7kWWeMvTl7b4zOO8SgAb%2B%2FiFh3mbnR0%2BAUTvu6UPPDGEWnpdabm81VUfkhVB0v8ni7RUd93riCuzbLLNZvAn2A0U%2ByUEGICNywJkqqvyhaANG5ENb7G8TSW2kpDiMIt7CxWcjLJUWu6LrnqaZOQDMbFZyvTXfF3At%2B%2FZi%2BkikF3daezfW8LNtAWcCg3KX2H39jieywhXL89uPLN5ssRcpO3t8SJSymNB7%2FO%2FwSN6u7E%2BdyBzWkDVFFpqXhS9dCiGdwEJkGdM%2FtEkAwtcpubz9fbwYmJoqo8HFC6aUGt%2FZVyXim%2FMHz%2B30lcu8N3pgwzR5K3eL55JCsTWrSdo8pjYgEaf1SntuBCpz3REyKBO7bM3eJKZFlv1oBRrMP9PA7ANGIvZSh7A33rEfMzq28zCfzCuIiDDL3%2B28BjqkAfKZbb%2FO1HqA%2B2TRC4O9pVvVCbaClWu%2FgZ3vnRgJ%2B%2BGVeT8%2F5orPsLQ%2BtpsHe9eDXFA9utBYZiVVr8wtEVpgY6i3Asjcovbbw43aotsejxjTQBTIqZ50FFNGjmUQNfkg%2FR9e3E3lFa84WxpZ%2BmNPVrEq1pfA9E8jFhODjaXdhTdgQiDU4eRZ08XeeK44g0mEZzDVda4INM5jMzY50vWOwm%2BqaPNn&X-Amz-Signature=4149177cd65b987e12b771bbbb00bc8c93110a702d0a16832a4a893ad94c29df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JFUK3O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2F7kRcggK4mdA6j6jjouINnVM3HchS2n1GRqi0Z4ATQIhALOWHeZTMHGRWxS3eeN34Mkl0iILB2OBbNv3FJgXz%2Fj4KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXWM3TxjjAqDkYLAwq3ANbf2KgBQ7Fi608vwrFM7mCWiJWYZNvTKb932cKGyrQH52P%2BfPJQe8kBVRt%2BFncd30VyPSc6%2FghEw%2BWtscVxI%2FXH4ErTm18SF0FlNZcpMr8X%2FwWrcFPA48NjYryCn2XaFhE7cPao3Z73RzmlJ95%2F5dM37VC0FQK5T9J7Q1D0H9HmFaDRUnGqTfPlggmJzoMVOtQymL274dprefeleEOX%2BDTqvpMVzOcmDg7kWWeMvTl7b4zOO8SgAb%2B%2FiFh3mbnR0%2BAUTvu6UPPDGEWnpdabm81VUfkhVB0v8ni7RUd93riCuzbLLNZvAn2A0U%2ByUEGICNywJkqqvyhaANG5ENb7G8TSW2kpDiMIt7CxWcjLJUWu6LrnqaZOQDMbFZyvTXfF3At%2B%2FZi%2BkikF3daezfW8LNtAWcCg3KX2H39jieywhXL89uPLN5ssRcpO3t8SJSymNB7%2FO%2FwSN6u7E%2BdyBzWkDVFFpqXhS9dCiGdwEJkGdM%2FtEkAwtcpubz9fbwYmJoqo8HFC6aUGt%2FZVyXim%2FMHz%2B30lcu8N3pgwzR5K3eL55JCsTWrSdo8pjYgEaf1SntuBCpz3REyKBO7bM3eJKZFlv1oBRrMP9PA7ANGIvZSh7A33rEfMzq28zCfzCuIiDDL3%2B28BjqkAfKZbb%2FO1HqA%2B2TRC4O9pVvVCbaClWu%2FgZ3vnRgJ%2B%2BGVeT8%2F5orPsLQ%2BtpsHe9eDXFA9utBYZiVVr8wtEVpgY6i3Asjcovbbw43aotsejxjTQBTIqZ50FFNGjmUQNfkg%2FR9e3E3lFa84WxpZ%2BmNPVrEq1pfA9E8jFhODjaXdhTdgQiDU4eRZ08XeeK44g0mEZzDVda4INM5jMzY50vWOwm%2BqaPNn&X-Amz-Signature=e78804e569817dd555e82332bdf9010e4ce8345717f83ff6bfcb0eb3e4677279&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4XXZMX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCnTW%2Fw4YTXiltubdeS6iEmu5kOpcnHLaOFskNA49QRAiApoXU7zL8%2BEkjw34giIS85qz54DZg0LZ7mQutcejuTViqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9EqocFYrNCT4hEJKtwDA%2BDKkOYn8CR0jueScBd%2BF%2Bs1X3VnRgETCCdF3kwVCnrRsXUlqAJmE5Hg5PAC8ySeUbGjnl8tJskQzWBuVFissLN4Ncp%2FQJXzWdFzGgtp%2F71cbtna2UG6%2FMeUSUkQYtoo2stO3H%2BQ6ip6BmwMR5C5mdMh4N2g8K5p3XYkdQ3p7%2FFOoke8fFvhRvN0MZb2ufNUGmKO6Z%2F3fWtduhVNnqJ8D%2BUpFezPby%2BMqWfxJWlQQTdDXllkqf4ypZij33oYh8CgDV8QtNlW0CdjtwnXB3RoCkYpzHVflwcCaenKAc%2BU6ODJiATaOr8e1wR7HroXw52NJTkKc%2FmMNlP%2Flslnz8OHj4NpRt4NBgb%2B%2FGTKvS8wteRNo6BWglkJDNlhyx%2F6fYb%2BawvWfmA%2BttLmeOgJDwTi3wKBLLlVezsj9nKuvEOvmDsvQazLiKf7zvYmRKESq25UHnY7n4r57arq7AOh%2FwJimg0rYxJOY%2FRBGp6oomssgkhQ0%2FqRYjElV3gT49Njf4L1wM1UgBFe2CWJg4WFF6wLXSD6bWOqeYV6Z2kN%2Fgr9lM78I25NiB%2FGuTj7A3ce4rOd%2Fs9iZ5iwGNOvTk6TqzBMo%2BqhRaHFGdsP%2F7otFOIL8%2FDRsFG1tSKoDR5GMsMwy9%2FtvAY6pgEJmoCSI79TVIwzV5Ev493Acdsljr1xOyjfplIhErag6rS%2BxYAS0D%2B9gOK%2BLZvEFwjnDmIsjEdpwNIQeHLhiBiRTqXpeSHInEGu7w%2BCMIZ1qsrF%2FsMpUCEoi7sTw%2BNStSamlLHxtfa189AlOIAvTze28IHaK%2BmJoUSTlo%2BuMziPocVO%2FLnhxEeg5BSjNpRhs64URKljT5rm3MKkvL4K7tviZ1o8wa3r&X-Amz-Signature=7ddf47882418e010ea2ebdc3ed0111fa9a248d8983051849f1a0fa2841a25f32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJRJDYB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQlnAXzmogCC0BkUbTCczKVKkOQ7NFisJRcTp39JeIFAiEAit8WnuUXMTUSJs4HkbPyBLAY7GX3L7IoeAHrfS63StcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxCf9NZeP54dt3PuircA61inD%2FUXbyj0jO56%2FvJ0KKCCz1VMwiOR2q1F%2BQ0Lp9VJg0Mc1yoQ5f49vIqKLQki%2FVpW4GHSUnipljOWfL2V2HER8lP0TqE%2Bhn1q9JBn%2BWc2Fd9zlucQaMwX%2B11QRXQqPKThiQB%2F9uQbSUvGr0Da8lDApI26kbxovaWU8b%2FUiuKCRJ2AF78SAC3jKzym%2BsdvInI2rHyevKWw8Ck%2BqZAWVxGQDLkY1jBMtEJoBymcDOseVs4of%2BR%2FFaKVlP%2FKWNdLa2voG5%2F4P4s47O8BAcR6E6lxeTqRfojs3Y3dSGEZ5pB%2FXbAYMji0jsm4MEXBUjjEn7VLT1y7Crl4N%2BJRONCa30fF37%2FAgpkGehgmRQ85OJ1Eo3RdosdAwLwor%2FuLDks2niyo%2FSqXek4KRsYwwjvwzALFgMv%2F3H3tg8NbQXr1K7qWxbVPyg3i8Bo5VbSpHfhwaxDMZpiHxZG7X6HeF2MD9KVi%2BxvjM8xDLgznqu6lZJEGfT1o4nY%2FMrBpFs86DLsjSqILI37eBPF6%2BMI5h6RtqMOVLtJEA5Qm2OfijpZOmgYHTTTv21TqilGCX%2BMDRSvhvraZbBaanR7s%2BtoZEYjGQv1Hm1Oyv2ctLqEBVwCX8FylUmHW8oOeR0ux5CfMJXh7bwGOqUBPrSrctM%2FF849uKEFJHytZUHgiwgHqsQ3DqdrlVKXF1UFqz5DHWPqd%2BMZfJWhaSras6R6m5WNjB8ZmcXRC4I4rF323kT3XFXgDq89Wy4iQ91DSpGwkY2AMy9n3KIYaZs8oAvHnsspc2gYmHALYY6jyJZSd4icJ3i3ABCl97i%2FcLioF76691V9N14XQ%2Bb%2BEcnsFMuMK8Yoq1xNVg%2BRIKhQyQJQ5VpK&X-Amz-Signature=22d0b7cf454737ec4d9e41f287160824fe0545d36f346c4caee6151c6084fd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JFUK3O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2F7kRcggK4mdA6j6jjouINnVM3HchS2n1GRqi0Z4ATQIhALOWHeZTMHGRWxS3eeN34Mkl0iILB2OBbNv3FJgXz%2Fj4KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXWM3TxjjAqDkYLAwq3ANbf2KgBQ7Fi608vwrFM7mCWiJWYZNvTKb932cKGyrQH52P%2BfPJQe8kBVRt%2BFncd30VyPSc6%2FghEw%2BWtscVxI%2FXH4ErTm18SF0FlNZcpMr8X%2FwWrcFPA48NjYryCn2XaFhE7cPao3Z73RzmlJ95%2F5dM37VC0FQK5T9J7Q1D0H9HmFaDRUnGqTfPlggmJzoMVOtQymL274dprefeleEOX%2BDTqvpMVzOcmDg7kWWeMvTl7b4zOO8SgAb%2B%2FiFh3mbnR0%2BAUTvu6UPPDGEWnpdabm81VUfkhVB0v8ni7RUd93riCuzbLLNZvAn2A0U%2ByUEGICNywJkqqvyhaANG5ENb7G8TSW2kpDiMIt7CxWcjLJUWu6LrnqaZOQDMbFZyvTXfF3At%2B%2FZi%2BkikF3daezfW8LNtAWcCg3KX2H39jieywhXL89uPLN5ssRcpO3t8SJSymNB7%2FO%2FwSN6u7E%2BdyBzWkDVFFpqXhS9dCiGdwEJkGdM%2FtEkAwtcpubz9fbwYmJoqo8HFC6aUGt%2FZVyXim%2FMHz%2B30lcu8N3pgwzR5K3eL55JCsTWrSdo8pjYgEaf1SntuBCpz3REyKBO7bM3eJKZFlv1oBRrMP9PA7ANGIvZSh7A33rEfMzq28zCfzCuIiDDL3%2B28BjqkAfKZbb%2FO1HqA%2B2TRC4O9pVvVCbaClWu%2FgZ3vnRgJ%2B%2BGVeT8%2F5orPsLQ%2BtpsHe9eDXFA9utBYZiVVr8wtEVpgY6i3Asjcovbbw43aotsejxjTQBTIqZ50FFNGjmUQNfkg%2FR9e3E3lFa84WxpZ%2BmNPVrEq1pfA9E8jFhODjaXdhTdgQiDU4eRZ08XeeK44g0mEZzDVda4INM5jMzY50vWOwm%2BqaPNn&X-Amz-Signature=a2414d714a2160c242aea23f5c49224a9d681f304b4f1d07fa7135208fd0338e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
