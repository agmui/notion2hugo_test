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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EAGKSY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDKoOduHMvoIROi2lgbUMdxQTExX%2BD02d9W46uSA%2Fb9AIhAJa%2F4OYLUAkBTMIisD%2FzuE%2Ft9%2BNSzl%2FjiH5GL3K8F2iIKv8DCFMQABoMNjM3NDIzMTgzODA1Igw976nS%2BY86D2W%2FcH4q3APpGAIyrvcfDmqN77pCLTxF%2F8zTUP5jEoDA5tPjeW35rtwOG%2B%2B%2FPmdzz9ShKfPAY1Bzv5%2BfKFRWvEsHqNp0hUnw5X1jeHcWh1XTRFeDuKZ%2FTWRBztujLdIwrBh8gUYX1tbEZtd%2B1zwr12CfV%2BACq3df5%2B1N3%2B6ktmh5Qtw7sSCs%2FWMJs%2F9L7R5SflzxhP69ChHUHHV6Jk1YVAnY9zD9%2BwJpj7w%2FZrJdkWSlzDhq99YO1wNcNHhY6hhnHuGhqCk1GfmcwZtgN7c41xd0XgRf42ctcmh3ulHVVyFq7qrjtG2rgcWV%2BX7qb%2BsqfFt0cCj0DrVJNyx%2Ff%2BPDp%2BIO9WTCZMUlPebT56CwZrbPuYMU%2FUEere%2Baj19iGR6mFV0IXHR7xjI8KG8V0kpKsE1qJ73j6YMV%2FDrWIP%2FWWEwDVlFfluLOlIaHtJWzMMaGx9z25KwJw7pUBNgShxS%2BuQjUkR8JUqCCbEaSgOO7P%2FOx21ZVoMbBdyJ%2Bbl6nf7d0vNHOkhA0e4nJvTcK0Azq25dDnocPiHV9aDP2UHGbqVIWPKD3hJfQn1gAiLfj85He%2Bo0XbXXfx5y6Bg1qE%2FwrbA0XgB%2BGMfzEF7gcLaPOz2E1F2XiklCOt3X8UzcWfPggFvpShTCX%2F73CBjqkAR5bRwAzlIYjeathOWlMw0lMf2GhVXmF3oTKH4k8c8G6PK3pHuquAyLNPLnvXvt3qBSI8oDxojQKyNnCzrjptLnRSz%2BkQ1E29ZUqGrpi37PKTam3jNyWamNSGeR5oX5hRZTzWeGl9vUbic3BnPJW%2FM1jo8tVgRCNIoAtMysC0QFy6o6XwEtgYXjfnH35Q6kYzz2irl4zsAfJwiQnlqWC3GyEmovG&X-Amz-Signature=9b33b62c200c74a4a4c7057804808efc28472755d52487e46dcea6cef0c907a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EAGKSY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDKoOduHMvoIROi2lgbUMdxQTExX%2BD02d9W46uSA%2Fb9AIhAJa%2F4OYLUAkBTMIisD%2FzuE%2Ft9%2BNSzl%2FjiH5GL3K8F2iIKv8DCFMQABoMNjM3NDIzMTgzODA1Igw976nS%2BY86D2W%2FcH4q3APpGAIyrvcfDmqN77pCLTxF%2F8zTUP5jEoDA5tPjeW35rtwOG%2B%2B%2FPmdzz9ShKfPAY1Bzv5%2BfKFRWvEsHqNp0hUnw5X1jeHcWh1XTRFeDuKZ%2FTWRBztujLdIwrBh8gUYX1tbEZtd%2B1zwr12CfV%2BACq3df5%2B1N3%2B6ktmh5Qtw7sSCs%2FWMJs%2F9L7R5SflzxhP69ChHUHHV6Jk1YVAnY9zD9%2BwJpj7w%2FZrJdkWSlzDhq99YO1wNcNHhY6hhnHuGhqCk1GfmcwZtgN7c41xd0XgRf42ctcmh3ulHVVyFq7qrjtG2rgcWV%2BX7qb%2BsqfFt0cCj0DrVJNyx%2Ff%2BPDp%2BIO9WTCZMUlPebT56CwZrbPuYMU%2FUEere%2Baj19iGR6mFV0IXHR7xjI8KG8V0kpKsE1qJ73j6YMV%2FDrWIP%2FWWEwDVlFfluLOlIaHtJWzMMaGx9z25KwJw7pUBNgShxS%2BuQjUkR8JUqCCbEaSgOO7P%2FOx21ZVoMbBdyJ%2Bbl6nf7d0vNHOkhA0e4nJvTcK0Azq25dDnocPiHV9aDP2UHGbqVIWPKD3hJfQn1gAiLfj85He%2Bo0XbXXfx5y6Bg1qE%2FwrbA0XgB%2BGMfzEF7gcLaPOz2E1F2XiklCOt3X8UzcWfPggFvpShTCX%2F73CBjqkAR5bRwAzlIYjeathOWlMw0lMf2GhVXmF3oTKH4k8c8G6PK3pHuquAyLNPLnvXvt3qBSI8oDxojQKyNnCzrjptLnRSz%2BkQ1E29ZUqGrpi37PKTam3jNyWamNSGeR5oX5hRZTzWeGl9vUbic3BnPJW%2FM1jo8tVgRCNIoAtMysC0QFy6o6XwEtgYXjfnH35Q6kYzz2irl4zsAfJwiQnlqWC3GyEmovG&X-Amz-Signature=02502fe18e24da75aa3b8ebb7ed8dcff0731cbb94a1189833e2bb59ff66b36f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EAGKSY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDKoOduHMvoIROi2lgbUMdxQTExX%2BD02d9W46uSA%2Fb9AIhAJa%2F4OYLUAkBTMIisD%2FzuE%2Ft9%2BNSzl%2FjiH5GL3K8F2iIKv8DCFMQABoMNjM3NDIzMTgzODA1Igw976nS%2BY86D2W%2FcH4q3APpGAIyrvcfDmqN77pCLTxF%2F8zTUP5jEoDA5tPjeW35rtwOG%2B%2B%2FPmdzz9ShKfPAY1Bzv5%2BfKFRWvEsHqNp0hUnw5X1jeHcWh1XTRFeDuKZ%2FTWRBztujLdIwrBh8gUYX1tbEZtd%2B1zwr12CfV%2BACq3df5%2B1N3%2B6ktmh5Qtw7sSCs%2FWMJs%2F9L7R5SflzxhP69ChHUHHV6Jk1YVAnY9zD9%2BwJpj7w%2FZrJdkWSlzDhq99YO1wNcNHhY6hhnHuGhqCk1GfmcwZtgN7c41xd0XgRf42ctcmh3ulHVVyFq7qrjtG2rgcWV%2BX7qb%2BsqfFt0cCj0DrVJNyx%2Ff%2BPDp%2BIO9WTCZMUlPebT56CwZrbPuYMU%2FUEere%2Baj19iGR6mFV0IXHR7xjI8KG8V0kpKsE1qJ73j6YMV%2FDrWIP%2FWWEwDVlFfluLOlIaHtJWzMMaGx9z25KwJw7pUBNgShxS%2BuQjUkR8JUqCCbEaSgOO7P%2FOx21ZVoMbBdyJ%2Bbl6nf7d0vNHOkhA0e4nJvTcK0Azq25dDnocPiHV9aDP2UHGbqVIWPKD3hJfQn1gAiLfj85He%2Bo0XbXXfx5y6Bg1qE%2FwrbA0XgB%2BGMfzEF7gcLaPOz2E1F2XiklCOt3X8UzcWfPggFvpShTCX%2F73CBjqkAR5bRwAzlIYjeathOWlMw0lMf2GhVXmF3oTKH4k8c8G6PK3pHuquAyLNPLnvXvt3qBSI8oDxojQKyNnCzrjptLnRSz%2BkQ1E29ZUqGrpi37PKTam3jNyWamNSGeR5oX5hRZTzWeGl9vUbic3BnPJW%2FM1jo8tVgRCNIoAtMysC0QFy6o6XwEtgYXjfnH35Q6kYzz2irl4zsAfJwiQnlqWC3GyEmovG&X-Amz-Signature=665f0242d163e855509b1eceec820abb8324336b048df54b43cbd4c017dda702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSNGRU2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDp0wuHD6XftWfHhBCVDknRB2oXW9LrTn8JuKYu%2Ffpn9AiAYjgAO2AIGTcf8qTThN4IPcHTsEP0%2FdH9mjXLqmzWFPSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtpw5qg30kYdDdxGvKtwDmlN1mP7FIEgbypdvL5QDUPnDsVyuEkSLtBU%2FWMYySFXYfeiBkggXz5SJR5Z8r89YNuTuVlWOEtuUNLZKC9JsoK37HMEu7lTRSvGFrO4hoEe%2Bo2%2BlnAUqu25OMgX6dJ24yHLa7fZDuQ8HG1q0WjPwIJgtbkxPD2x1HeI7%2FbS3JJUiFlZs9yScvAT0osZkys9d%2FAoeht1vzbIJNC8ooBpdRmnb4e5erTTc4TJsfWxwntQSWYj82k7EJB55vtQiVw82DXnhrTXJRSfKCvOSI40GoFgRfjN6Bd9hw05jtfqyDG82tg5HCEKECE95vK5phsDi%2F%2FpPpJ3JvdrkiC61l2Io1eyc%2BebUO9hwhY2tzDMLMkO22bWVzWbKTBuCJlBq8o22p2hymmDFgGFBO8FrVNTNAZ5tS7HXNIhRsaXwFcQokgWDeFckh%2B2sLuGH7sdmQTg8k4EeFPZ4Igc%2FPmHuM2efl%2BbxgsqtOc84Lj5z0bivlEzJdTz4992a%2B%2BoNJ2E7qjZO7KObm2c80GwUMBwfxZh%2FkT%2BtrAAWCLsNliMeI1n%2BSvvwJQciJWO11hpfT37Drzm6OjvefrstJyHAvEZgrhd57uPr%2BaaQIDKg06jAKBpJ4wOIhMNnX%2Fm8dAz%2Bl%2Fswwv69wgY6pgF%2FSqsFksE%2BjOkVQpsO6UG8K2rhnCSyFjiWFR5tAnLkdllboi1XXHgEEy%2F0tN5b2fxyIU8JGfyGJ5T6BkF3rvIPsBtET4qPLjVoz2LjU0KK03EeYYVYAIPFbHi7oVeu9pMmBj6gbdx32fI1qzSNid2jMIME800ZgtwZgJucL33BBSxsWvjuuN4KLDPD%2BbReDL67a7FnR42D3SbXVHsAtVzppLyUBzj4&X-Amz-Signature=8ff4d0caf570b45b2baa10f6d79b22127bee3e445749390360f4bf099dc87f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MXSXRW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCvr90LZfXWqhMsaCyxDl51jJyzRGOKiydsQdaJrzspPwIhAIHpDelsmf06jCV3NzJs1A%2B5rl0JDXsS9LfEVw0TlRaVKv8DCFMQABoMNjM3NDIzMTgzODA1IgxUZzp6S6%2FC8XeFa%2Bkq3AMsG17yEVx%2FsdC2IqH0Eu9pzbnU4lApfPZN629%2FRmT%2FljLAubOReSXsY9%2BmHTXjQHcYUslyyhCF0JhcWuC3GkpcPI8ivVHiTDg0Z9YtR0wuDxM2zvbVZgPxcGlIGe%2FdlwdpFFEVR5eBezOpyzIGROpk70jpboz%2F4MMCfO4fIr%2BmaKj%2FxfSBLLmjdALE1F6Vtb5TQT41NQceIKvvXuCG%2BN6LbV%2Fm21cO%2Fd5Uc3zkdbtMJ5hspw0hekcLIRasale1YCK9rr6ESeIJWkZAW%2FBSrJTCBioCHuRcOaIsYeMas6L8UAqMEFyCwiA6SFktTPSpUsTfMSjaEuCK%2F%2F6ILsFsJTaoLR%2FDsFdcDHnx7ayDJ0qu%2BAuVCyXs20zHWSLvLmKcoKXUzDTJGHqqZ7Kqd3wHRRLl%2FTXKw5Z78%2BPageFmdl2kHoKJzBcradk1%2BiEyiJcJyDNBbfGhw0XAse7tI7bjyj%2B1AOsM3qpfEgexpWcAUXS3fPfgXQKtveLeSwPE0d8suLZy32ICZ9tlQ9Nt%2BhSbn3LD7gTQJgGr2QjDQpjZigUvGCeCKCnH4XEkzmIPS1g5JinkTpBy16D0vr0V%2FxbjLvWGzIfyEz5YjPEw%2Ba9cTAdUZnkcXNQ48580b5rYCDCX%2F73CBjqkAbgG%2BhrDGqxeHkGOxBIeOUjK26NwrkFFlOEl%2BJWHIvlZIT5%2BnpXaiQs7i7sSUoiF0tebqLZ0v2wJK8b0Q3EPbPusxYZqh9dn1%2FYcNenYEqwJWRKGSrDMlseYn%2BWN56i%2Fwlj%2FHkAQTHHlCzNrBUL%2FdI5KWA%2F%2F1UhNvBt%2BEa0btyU78bcU1b1BhwbikMzYZ5gxmt4TKlkvwDV7i5eOxPK4xIdrCGWF&X-Amz-Signature=4b739903e23acb3ff76d162c484c4c9586afe31aad13d37402baa73a9a0abc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EAGKSY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDKoOduHMvoIROi2lgbUMdxQTExX%2BD02d9W46uSA%2Fb9AIhAJa%2F4OYLUAkBTMIisD%2FzuE%2Ft9%2BNSzl%2FjiH5GL3K8F2iIKv8DCFMQABoMNjM3NDIzMTgzODA1Igw976nS%2BY86D2W%2FcH4q3APpGAIyrvcfDmqN77pCLTxF%2F8zTUP5jEoDA5tPjeW35rtwOG%2B%2B%2FPmdzz9ShKfPAY1Bzv5%2BfKFRWvEsHqNp0hUnw5X1jeHcWh1XTRFeDuKZ%2FTWRBztujLdIwrBh8gUYX1tbEZtd%2B1zwr12CfV%2BACq3df5%2B1N3%2B6ktmh5Qtw7sSCs%2FWMJs%2F9L7R5SflzxhP69ChHUHHV6Jk1YVAnY9zD9%2BwJpj7w%2FZrJdkWSlzDhq99YO1wNcNHhY6hhnHuGhqCk1GfmcwZtgN7c41xd0XgRf42ctcmh3ulHVVyFq7qrjtG2rgcWV%2BX7qb%2BsqfFt0cCj0DrVJNyx%2Ff%2BPDp%2BIO9WTCZMUlPebT56CwZrbPuYMU%2FUEere%2Baj19iGR6mFV0IXHR7xjI8KG8V0kpKsE1qJ73j6YMV%2FDrWIP%2FWWEwDVlFfluLOlIaHtJWzMMaGx9z25KwJw7pUBNgShxS%2BuQjUkR8JUqCCbEaSgOO7P%2FOx21ZVoMbBdyJ%2Bbl6nf7d0vNHOkhA0e4nJvTcK0Azq25dDnocPiHV9aDP2UHGbqVIWPKD3hJfQn1gAiLfj85He%2Bo0XbXXfx5y6Bg1qE%2FwrbA0XgB%2BGMfzEF7gcLaPOz2E1F2XiklCOt3X8UzcWfPggFvpShTCX%2F73CBjqkAR5bRwAzlIYjeathOWlMw0lMf2GhVXmF3oTKH4k8c8G6PK3pHuquAyLNPLnvXvt3qBSI8oDxojQKyNnCzrjptLnRSz%2BkQ1E29ZUqGrpi37PKTam3jNyWamNSGeR5oX5hRZTzWeGl9vUbic3BnPJW%2FM1jo8tVgRCNIoAtMysC0QFy6o6XwEtgYXjfnH35Q6kYzz2irl4zsAfJwiQnlqWC3GyEmovG&X-Amz-Signature=27afade1b39d070355c2a53ea082e42c741e8c780f7e40c2aea2380c0dbd572d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
