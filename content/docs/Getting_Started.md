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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ34E7W%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHR9notmlsERoTdSXTplwau5c3O2RYZnwaSe8ptFyVh0AiBYXgFzcPPXmavubDuD5Va4hqUSKGhHVMkrgSme9R2bNCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW1OrNaPcOM%2BSLtKuKtwDrx%2FLu8IMuyuAYPBduFbncE1uWDydeWQ%2FKYsGl1N4SShMo6eeAcnIIiJ8SslX%2FWnJFlFYKBJOkzBii7RX7F%2B%2B3GTSwVoVe3MCm0YNk1%2BsfrlXBMwS1C%2FVeb%2BRFkygLqZT5tw445uqdzEul%2FwFmfMu70H%2FWiaU6KVkGcWq6mTAj14RDnlzXZY4NEXAo2j5Npl%2B0T3fvG13fut1U5Wx2H8mHDnE1gvDf8vxKH9fz22C5fuvtZ60qcwqROnX2tPktICCO7RmSSUGKrLDDe2POcrOmRKQuTHGCwhWhCgKMdHEx55VYymKG0%2B6yZx%2FjgH58a9NFyvR3h3dTuqJDIjUAYBXL13KrHT9ZLfB%2FsJKa6KxNbupxrTXiXHdrN%2BX3iWCFRKHUCHEeDZMHavpjonXeE8d8RjQcIUrUU5FVYqgJt9T2R4Bb6aHCZAysgt15L5PFgPZosQv1suv6blNyQso83Yo%2FzYgIa8Y%2BHiFbs0vcLTQyXFs4lOhmVsyh%2BJYTyLMhow12%2F5ohGydW5N%2BYKzLUJQOqt%2Bt%2FUkweUYQx9jijPPcej6PB12DI68Vj7ekT1e8h70jioIEt9XryV70L7miz5M8fxsLRd%2B87b1IblQT6E01DogxwwmJTPghDEKDEq8wvqzHxAY6pgHnRHVzdHpygX54tXSbwK%2BJF5AgJ4rCzmBUqWZ%2BnZPewh5z94r4jHtdkYlWbyfhBgzqCZgCKqhvXInkvduxBpmbk5fxvrpd2iZMvWi8jJSzufCE6F6E2Dbb2mQeybvf1IissYqJOFz%2FSiKwJXWw3uauKmvBJ8npjIXS8W6oX29fo0SaoYwLyjcrUOykQUm%2F1dXiR2XA8gV02cWgibwzz3zfKJXFj%2B60&X-Amz-Signature=1fe042708545243d240369b091a465ed5686cad17b67cef9d0bda79de41efecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ34E7W%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHR9notmlsERoTdSXTplwau5c3O2RYZnwaSe8ptFyVh0AiBYXgFzcPPXmavubDuD5Va4hqUSKGhHVMkrgSme9R2bNCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW1OrNaPcOM%2BSLtKuKtwDrx%2FLu8IMuyuAYPBduFbncE1uWDydeWQ%2FKYsGl1N4SShMo6eeAcnIIiJ8SslX%2FWnJFlFYKBJOkzBii7RX7F%2B%2B3GTSwVoVe3MCm0YNk1%2BsfrlXBMwS1C%2FVeb%2BRFkygLqZT5tw445uqdzEul%2FwFmfMu70H%2FWiaU6KVkGcWq6mTAj14RDnlzXZY4NEXAo2j5Npl%2B0T3fvG13fut1U5Wx2H8mHDnE1gvDf8vxKH9fz22C5fuvtZ60qcwqROnX2tPktICCO7RmSSUGKrLDDe2POcrOmRKQuTHGCwhWhCgKMdHEx55VYymKG0%2B6yZx%2FjgH58a9NFyvR3h3dTuqJDIjUAYBXL13KrHT9ZLfB%2FsJKa6KxNbupxrTXiXHdrN%2BX3iWCFRKHUCHEeDZMHavpjonXeE8d8RjQcIUrUU5FVYqgJt9T2R4Bb6aHCZAysgt15L5PFgPZosQv1suv6blNyQso83Yo%2FzYgIa8Y%2BHiFbs0vcLTQyXFs4lOhmVsyh%2BJYTyLMhow12%2F5ohGydW5N%2BYKzLUJQOqt%2Bt%2FUkweUYQx9jijPPcej6PB12DI68Vj7ekT1e8h70jioIEt9XryV70L7miz5M8fxsLRd%2B87b1IblQT6E01DogxwwmJTPghDEKDEq8wvqzHxAY6pgHnRHVzdHpygX54tXSbwK%2BJF5AgJ4rCzmBUqWZ%2BnZPewh5z94r4jHtdkYlWbyfhBgzqCZgCKqhvXInkvduxBpmbk5fxvrpd2iZMvWi8jJSzufCE6F6E2Dbb2mQeybvf1IissYqJOFz%2FSiKwJXWw3uauKmvBJ8npjIXS8W6oX29fo0SaoYwLyjcrUOykQUm%2F1dXiR2XA8gV02cWgibwzz3zfKJXFj%2B60&X-Amz-Signature=ff06799af0a5fb18fa4a22aa3549b2f6b385158e6466ab367d54cab7b5734663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ34E7W%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHR9notmlsERoTdSXTplwau5c3O2RYZnwaSe8ptFyVh0AiBYXgFzcPPXmavubDuD5Va4hqUSKGhHVMkrgSme9R2bNCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW1OrNaPcOM%2BSLtKuKtwDrx%2FLu8IMuyuAYPBduFbncE1uWDydeWQ%2FKYsGl1N4SShMo6eeAcnIIiJ8SslX%2FWnJFlFYKBJOkzBii7RX7F%2B%2B3GTSwVoVe3MCm0YNk1%2BsfrlXBMwS1C%2FVeb%2BRFkygLqZT5tw445uqdzEul%2FwFmfMu70H%2FWiaU6KVkGcWq6mTAj14RDnlzXZY4NEXAo2j5Npl%2B0T3fvG13fut1U5Wx2H8mHDnE1gvDf8vxKH9fz22C5fuvtZ60qcwqROnX2tPktICCO7RmSSUGKrLDDe2POcrOmRKQuTHGCwhWhCgKMdHEx55VYymKG0%2B6yZx%2FjgH58a9NFyvR3h3dTuqJDIjUAYBXL13KrHT9ZLfB%2FsJKa6KxNbupxrTXiXHdrN%2BX3iWCFRKHUCHEeDZMHavpjonXeE8d8RjQcIUrUU5FVYqgJt9T2R4Bb6aHCZAysgt15L5PFgPZosQv1suv6blNyQso83Yo%2FzYgIa8Y%2BHiFbs0vcLTQyXFs4lOhmVsyh%2BJYTyLMhow12%2F5ohGydW5N%2BYKzLUJQOqt%2Bt%2FUkweUYQx9jijPPcej6PB12DI68Vj7ekT1e8h70jioIEt9XryV70L7miz5M8fxsLRd%2B87b1IblQT6E01DogxwwmJTPghDEKDEq8wvqzHxAY6pgHnRHVzdHpygX54tXSbwK%2BJF5AgJ4rCzmBUqWZ%2BnZPewh5z94r4jHtdkYlWbyfhBgzqCZgCKqhvXInkvduxBpmbk5fxvrpd2iZMvWi8jJSzufCE6F6E2Dbb2mQeybvf1IissYqJOFz%2FSiKwJXWw3uauKmvBJ8npjIXS8W6oX29fo0SaoYwLyjcrUOykQUm%2F1dXiR2XA8gV02cWgibwzz3zfKJXFj%2B60&X-Amz-Signature=3414a98181dfd48e6dbf90d141df7c69e17489379f38eb1138caac375fde1313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573RCND%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCgE0mN0FfFyy6aPXBgx%2B1OeBLzkF%2FO861HQg09cWfxHgIhANyeFbqkxlBY28EndrSVwlE8iMZ0MabHJ7nVPNIN8nVsKv8DCFsQABoMNjM3NDIzMTgzODA1IgxDlWcSAQF7XwWzBoAq3AMaJk74FzdIKH0d55PGQcOacGBj4ruaJE7BKmU6pp%2Fxrhs%2FuLK1Lh%2BzNmPmmsBoED5sux%2F9DKjzHv3SQ6J0yGIW7XYDFDl8nEQrvNcerUl4cSpAJgX%2FFDII614%2B3CeSDy3tR8CBuMX0zGC3VYAiC5bkgTbf%2FhOxR8P2BzxnVvkSXnjqcvujhJrMp60M0jKNtv3Mms6lx7uxChSS4vcQoDLHtrII3NJ1gz8qdInMqhrKvlXfMS%2BKCBLBFZFnVXKnWgWDPxmQdC18yz%2FiePG8P2VctrPGUKydupnE9wcgip%2FoxEurM6H1Vi5RoKLPa9MihWD3WSurJCcvV8GnJTdBeSzwL1vGv7%2F8D0aEHlxAks07ZVcoSQiBj084rwNlF063JdZuBcU2FONM7ve51n0QArlDuW3bM640dVARdUfNZykJZQkSIlz%2BAJooWkatn8BLM1bj1kooq7OYB83y0%2BnsAIWhgEB3hDdoCnhkY6ZvyE4DXhAoE6lc1KsUdQ9Vg9GdDv9XGq5bh3Y7ee5qEenNx1p47AcUSw5KAj0RdJOWw5GWN9IJQyNFr30yckigD8pl4GxfgELZCSfDO6qXP%2BjFYm5RgLx8VWTQG2owaOkiJRDHJcnIWk6C5USBi7iinjCtrMfEBjqkAaghMpK1bHU2ko%2FqLAsGQV2wvDI%2BcRLgxfC%2BBYCiemFMVwjmvu1D90v6vkMA65omFW9bIlak9hIH8FniuX1ZeBD7oJv3EQr2Hl%2FdhUjM1ukvTV8m029P7aLRQQgVrfCmsEFouHXiur%2BB3ijjh6ot0ls8%2B1uLQfDV2Igs4bPHAXPttbe0vFvgj1OGVqSq660jQX0vKVkGyJDYh0bH70m4WXmtXTA6&X-Amz-Signature=a325dd9bc9f91eaf3475eace4aea75c8d6ff377244c6a8be29f402ca8df4c843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3FMLJ7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC0kOl1SxwgwuRXGLH9rpsF5zBbBvFQdaNjmgbJ5xm3UAiA87qhwdTwfXBKVFLGtiRJdNKIMW8E4TfwKofVmYKe5bir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmKg9YpUU3OqBhWmxKtwD3vsb4yRFKnZYsNXZv3NPAw6hGIQx7vIi5vwxBTuYTS3d9Rxkp0FJ6DHGDve3EdVNonnenx0siJQ0oKWH1oc6iLog4Jagp0oj0UcUd%2B02weq9WMGRb2uETrfA%2FV%2BdZUpgRScCKOeSd6uOz7wYq9PDIvENho7QELjbyMyp71bSFkefhvB9RrgZcg2JhbuOTbEHRx4R6TgK3CewVIkm%2Fiej4L8S5wzKuPWNrSLcCFvinbG4q5U9SfXOo5NBwX9daGm%2FKyF4y44zA18JJbgF4BL7tQsxaBLtmWVqs3nRVSG2hx86EPKm2Cb0GyMr2KVVKLTHoMltUw7q9pbBy3qFZB%2FdQ7x05RasiJPOwV%2Fr9gM6iVSxqW5eiCd2nf6PulYxIyBL3SwSDzosGkQrP48%2FkuLZrtjR5sZqD2BSItDUm766L91s5ovl8K4MhdBUlkDVV%2F0Ar3D57%2FUlaqfxJWmyhPJns3IhwbU4GTrnqSRgZEyj89UEF1Ukt%2B2NoXw31YxKOrcbrtU8WlngVdKGA7O%2FbxlAzZjKW61HGrj%2FHKERA9ugNiT2caLi%2BXZqEEZfT1tRRH0AOlqa0%2FTUghW6j1zc6z9CuXKnYHLkU%2BkEcUlroxiVN8ZwgoHsBgnS09uERTswrazHxAY6pgFSbQ3ZrVAaE1Di%2Brwkvz62n2XX200QnoV%2BqP%2B17HGWNN5gxnHLOd3Eaq3TgFQNlqxIOrXF%2F8EYcKmHgqdI92DENciSUR2cJwNjWguJqiX8b6lt5tiDsauGnadd%2BVEVpWS8dI9KM6c3Qw9hazlHfpVvFOeztckYYOZzQj%2BdpxQFb91GEmgKEpwkFCbsJGKUv8aLq7SoM58Dlm7ynR9CXTaFhIgpp4tE&X-Amz-Signature=e5516a0f94767eb782201f0abfba87ab8e2fcdb0898ed5207306e63077b3414a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ34E7W%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHR9notmlsERoTdSXTplwau5c3O2RYZnwaSe8ptFyVh0AiBYXgFzcPPXmavubDuD5Va4hqUSKGhHVMkrgSme9R2bNCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW1OrNaPcOM%2BSLtKuKtwDrx%2FLu8IMuyuAYPBduFbncE1uWDydeWQ%2FKYsGl1N4SShMo6eeAcnIIiJ8SslX%2FWnJFlFYKBJOkzBii7RX7F%2B%2B3GTSwVoVe3MCm0YNk1%2BsfrlXBMwS1C%2FVeb%2BRFkygLqZT5tw445uqdzEul%2FwFmfMu70H%2FWiaU6KVkGcWq6mTAj14RDnlzXZY4NEXAo2j5Npl%2B0T3fvG13fut1U5Wx2H8mHDnE1gvDf8vxKH9fz22C5fuvtZ60qcwqROnX2tPktICCO7RmSSUGKrLDDe2POcrOmRKQuTHGCwhWhCgKMdHEx55VYymKG0%2B6yZx%2FjgH58a9NFyvR3h3dTuqJDIjUAYBXL13KrHT9ZLfB%2FsJKa6KxNbupxrTXiXHdrN%2BX3iWCFRKHUCHEeDZMHavpjonXeE8d8RjQcIUrUU5FVYqgJt9T2R4Bb6aHCZAysgt15L5PFgPZosQv1suv6blNyQso83Yo%2FzYgIa8Y%2BHiFbs0vcLTQyXFs4lOhmVsyh%2BJYTyLMhow12%2F5ohGydW5N%2BYKzLUJQOqt%2Bt%2FUkweUYQx9jijPPcej6PB12DI68Vj7ekT1e8h70jioIEt9XryV70L7miz5M8fxsLRd%2B87b1IblQT6E01DogxwwmJTPghDEKDEq8wvqzHxAY6pgHnRHVzdHpygX54tXSbwK%2BJF5AgJ4rCzmBUqWZ%2BnZPewh5z94r4jHtdkYlWbyfhBgzqCZgCKqhvXInkvduxBpmbk5fxvrpd2iZMvWi8jJSzufCE6F6E2Dbb2mQeybvf1IissYqJOFz%2FSiKwJXWw3uauKmvBJ8npjIXS8W6oX29fo0SaoYwLyjcrUOykQUm%2F1dXiR2XA8gV02cWgibwzz3zfKJXFj%2B60&X-Amz-Signature=2bd11126d5ad1f1d87eccfee22417704c26b99fa9c188c95519e7106906bc0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
