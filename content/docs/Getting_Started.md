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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2PVNIM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYOwAv7uqwl%2BPxweQttpfzTm3oYydVfcdTu9PMDNmX%2FAiAYC4nArGyKhaBfULbvsd%2BNh9erGAWrO5A2q9sjMID8ESr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMTs771mkIea5A4cHwKtwD8JajH2iP4zFe3%2BFrNyk3cOwGIbqlGrZ%2BkH9mTi2ZghE6iBlomNPEXztLC%2FCIRwfUMv9mRPf1VgM7cls3DbC7xxuQV7iRJeRx6zjDHRNEQcCpQ2OhjqQZSK2T1JOF1RjSejbDhjvXLZgtLLMKHUhrz3VJyepWQWXpm9zUlH8iAV3Wve9pftXuH4K5EJk7xKUsBkDNAQUNo2RI6UO3%2BRSQQdc9yJKfIMaN5xjk79Qq8%2Bg3eJb5G52uQdtpBoWQ%2FZrksIL08m332h8TYEWLSjMosjS2hNOHW2p9fGNIL9T%2FKf4Pb%2BGc845ez%2BfnEqqz3v5nZxElqARzvrul%2Bdg9s9nSTpnIEhX0nK0Jf1IVWBUErGBzyFUuQDbNP4DfAVB7mhuZbnf4SAsuwhs56AalBBy1M9dUKQyQ42BgYjfLCIeM6uIQ8vPNbRLT8tXO13fqF0eSqTS5mLgf10MhOZbnqirp%2BOcwoqNkn0W7s1nAKR63A7THUXI0X6zOQVdZ99UgRHKT53nhRIm4zS1IRrbzBuqupdoi9mTOzp4fpLjLYEWOXK6tkDCIwl6TrPzAzUFYnKfTrhhvXVphK4qgKccJjldl5JRBWvIhuttVEHW7xsNefxHyy1oOukx1jb8xwREw99mbvwY6pgFBkkq3NZRlc%2FvFV8011vAUYt%2BBJ7Aaf1GggUI4nWLf2cDdmdbkC2m9L%2B9nY7EyUB5FUnMcoeN0xjYnH8PNDkl4THlr2jSYWB6EpQhYC1CeZQRh8kxyqQtb9Mv4mUEbOOF9QvGnjVKyzcVfNrzMoXc8lncJ1HZRkjPAjz%2FTsF8qTqE%2BqWtRgH5mPgUaaPKinJVUJUkzv6cySvvUFkZD4oOW0upPyOrf&X-Amz-Signature=f3d0767276474d0c8fc03b8c05cb7665276af3b178ef6a305aaff5a3b02d5c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2PVNIM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYOwAv7uqwl%2BPxweQttpfzTm3oYydVfcdTu9PMDNmX%2FAiAYC4nArGyKhaBfULbvsd%2BNh9erGAWrO5A2q9sjMID8ESr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMTs771mkIea5A4cHwKtwD8JajH2iP4zFe3%2BFrNyk3cOwGIbqlGrZ%2BkH9mTi2ZghE6iBlomNPEXztLC%2FCIRwfUMv9mRPf1VgM7cls3DbC7xxuQV7iRJeRx6zjDHRNEQcCpQ2OhjqQZSK2T1JOF1RjSejbDhjvXLZgtLLMKHUhrz3VJyepWQWXpm9zUlH8iAV3Wve9pftXuH4K5EJk7xKUsBkDNAQUNo2RI6UO3%2BRSQQdc9yJKfIMaN5xjk79Qq8%2Bg3eJb5G52uQdtpBoWQ%2FZrksIL08m332h8TYEWLSjMosjS2hNOHW2p9fGNIL9T%2FKf4Pb%2BGc845ez%2BfnEqqz3v5nZxElqARzvrul%2Bdg9s9nSTpnIEhX0nK0Jf1IVWBUErGBzyFUuQDbNP4DfAVB7mhuZbnf4SAsuwhs56AalBBy1M9dUKQyQ42BgYjfLCIeM6uIQ8vPNbRLT8tXO13fqF0eSqTS5mLgf10MhOZbnqirp%2BOcwoqNkn0W7s1nAKR63A7THUXI0X6zOQVdZ99UgRHKT53nhRIm4zS1IRrbzBuqupdoi9mTOzp4fpLjLYEWOXK6tkDCIwl6TrPzAzUFYnKfTrhhvXVphK4qgKccJjldl5JRBWvIhuttVEHW7xsNefxHyy1oOukx1jb8xwREw99mbvwY6pgFBkkq3NZRlc%2FvFV8011vAUYt%2BBJ7Aaf1GggUI4nWLf2cDdmdbkC2m9L%2B9nY7EyUB5FUnMcoeN0xjYnH8PNDkl4THlr2jSYWB6EpQhYC1CeZQRh8kxyqQtb9Mv4mUEbOOF9QvGnjVKyzcVfNrzMoXc8lncJ1HZRkjPAjz%2FTsF8qTqE%2BqWtRgH5mPgUaaPKinJVUJUkzv6cySvvUFkZD4oOW0upPyOrf&X-Amz-Signature=8d405000d7884839f5a5c3d4340df2cd1ffaddd38d20a992b6d99c53e78cfae1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ESKF2N5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1Cxo5Y%2FBFlGAIQXSybIxUxuw%2BbgUkjxRMQrZnd5%2FOZAiEAz%2F7yvr8tCcm02gOHCLRsGXw%2FfbNrm0%2BQMGaR52L1DF0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDI%2BxSzKmLrHH65tM2CrcA%2BblbCv2nM0kWerxdTKlsdbzGuxmisSGqLjiO9GAYX1gXxl%2BBTejp9O3%2BAEFm2PCxr2ZoZV26VNaCklOBmAb7XDdh6ixdPaiPE4H3I7Btnc3s1%2FMnVh8PE9EQHk9AID6d8dYihktsEnUg8aIp03f144QRvz2e4QzDFU24%2FY7%2BapaxbYcOhrVA4id6HgcWm%2FbB%2FUoF7XS9q7T0hiNYLkvrgc%2FDVQWdT5D7DhutfFAoLdTGNn2SpObLVFpXkcnsFUzR14vpa0qU1hPH1mseZRg4QrCTv8RLZjq%2Fay4ev1qFepj3uQ2KlGjod1dphmSUi3MMDaZQIKmT3mJDLewUrkwDG2OZzb6Bh%2BYAm0ovmzAcs8PrFgpOAruDvHWBOBXf4847NYShcHkSdLQB3cEF94d8j7iZYlXwqwWQ6ocTWUGDCmh5ypYyU3EpMJDySlxpQnLVV1IV9P3aNCxMLCAun%2FDhTbUzQSz4kIByliMXvAGx6xXITaecjxQRkpRFXrWxI%2BEbOzLpFvSStMEvE3pb69tuHnm7aMn0efNHrNIOSYdY36F38VX9G%2BcCf86Rws2WHUfiMqBEpOE4iLR7SvMKGX0VbD6rK8H%2B%2F9NYdo45A4T3ez%2BzL5BrVEcl2RhiRyrMMrZm78GOqUBEQzEkXP64kDvYIvDHqQnvOWflnUPPcIi9r0eHroRF8kilKZINnNy1XLNDKi2XkW1xAZ%2FzEpkNuHTFKwMd9elCoHdvqpgBkAeNqwzeO5yu0HiAnNZrE3mDmMIVSNuAgdubbNRNCll2AUA2rEd%2FGqWFsvoNHLoyuv48czPqGiHpU3amyE%2BMICIOSzLcl4NJBkub70WQ8%2BTY%2F5EPHDctSVBeTs%2BIqFO&X-Amz-Signature=c95d375c655595988999c59057f28fe60f7d7e760b8837961c68c2874275d713&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSLZHKT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCruT%2FVI4L2IB4RNE7ShOpq0BaMgiqP9Vzz0hdEDxul5QIgfOLnnnbsU35B%2BLQxLsSCtF5SLT2brBHz%2FZ%2BAdo8BU7kq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMOmfHw6gUvpvhKctyrcA9k%2BMDvycsjWaK2PSw8djk82kYsDKS9zWDVNxvcfTBkeY7p4YqJNM6wQDpKchpaisLDj0udcKmpqrpUsNcwJmABN4Tp7wMJmsZoQL7fSdo57s%2BOWA%2BEoGUvKWkFCIabKrjVazH5TaeHUiWxIJC%2BtMRFbd6ayIVlBHacPGheOKVyNTH3UQnMK3YOYH2Z%2BPgbGHx5nmz0%2BPomxYLU4AddZ1d8x7GERRlw7dgwdyZlIzjz9RATlzyIHRW4KdR2VDP5H8Z7AhupcrAtdHeltuhK2T33O0Zhn0fbnjJTpkiKacGnuCR1q2wn4FbKleULJcjrCrJeFYc6BMgF4iwJzAZp5ZLtZUalGW0prJv18ip5G%2FJ8iBFAFwpgj9zV2LfiVOqxfiI%2Bj6VpNjqk3Mx2MM04lCzSNVNhhryCvLPQTWZBDPyEo14eVaySS011R5eqc1pkXH9%2Bl%2BMsPxKWVjkagqZtYgUbd4ZyGimuI1MHPqdrkjVwqoxp8nsBN6Ifwxrvjl%2BL%2F3ddh6ewmJYyM7l3lUuVyjnLutns%2BKkhUbvCKIviQRR7kgqvNHKcJhIF4KKQRmV0hgaWEAiR1S067OvhwYZc8gAh7QUoN1Zxtc2zebZHVPXY4e8ePLe3TygGnSUBzMMPam78GOqUBu9RgqDwtMOeaAoeclnIUf9f3sMzAZh7ijFBQWURGXQeH6SqS4qUwcA%2FEuGsGN0lB3j7nkPl%2BQsrSgOPmq1A9AE%2BIs2Nyv1aUzat4UZ1o3Nyo3bcYU%2B7sZp%2FlyiW1bbg7fbhMOOh7WiB6kBEbZK2VrRgfd8m7Dy19fOO8ESKf%2BNpA5gbGfdivUCTlMDLUvhbsfc6%2ByyBkDERo%2BvcMOK5rAytmudZq&X-Amz-Signature=3141545b5f7062fae12b9df4884962e866e65c0cb3e843a5cc07a34c4be5d05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2PVNIM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYOwAv7uqwl%2BPxweQttpfzTm3oYydVfcdTu9PMDNmX%2FAiAYC4nArGyKhaBfULbvsd%2BNh9erGAWrO5A2q9sjMID8ESr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMTs771mkIea5A4cHwKtwD8JajH2iP4zFe3%2BFrNyk3cOwGIbqlGrZ%2BkH9mTi2ZghE6iBlomNPEXztLC%2FCIRwfUMv9mRPf1VgM7cls3DbC7xxuQV7iRJeRx6zjDHRNEQcCpQ2OhjqQZSK2T1JOF1RjSejbDhjvXLZgtLLMKHUhrz3VJyepWQWXpm9zUlH8iAV3Wve9pftXuH4K5EJk7xKUsBkDNAQUNo2RI6UO3%2BRSQQdc9yJKfIMaN5xjk79Qq8%2Bg3eJb5G52uQdtpBoWQ%2FZrksIL08m332h8TYEWLSjMosjS2hNOHW2p9fGNIL9T%2FKf4Pb%2BGc845ez%2BfnEqqz3v5nZxElqARzvrul%2Bdg9s9nSTpnIEhX0nK0Jf1IVWBUErGBzyFUuQDbNP4DfAVB7mhuZbnf4SAsuwhs56AalBBy1M9dUKQyQ42BgYjfLCIeM6uIQ8vPNbRLT8tXO13fqF0eSqTS5mLgf10MhOZbnqirp%2BOcwoqNkn0W7s1nAKR63A7THUXI0X6zOQVdZ99UgRHKT53nhRIm4zS1IRrbzBuqupdoi9mTOzp4fpLjLYEWOXK6tkDCIwl6TrPzAzUFYnKfTrhhvXVphK4qgKccJjldl5JRBWvIhuttVEHW7xsNefxHyy1oOukx1jb8xwREw99mbvwY6pgFBkkq3NZRlc%2FvFV8011vAUYt%2BBJ7Aaf1GggUI4nWLf2cDdmdbkC2m9L%2B9nY7EyUB5FUnMcoeN0xjYnH8PNDkl4THlr2jSYWB6EpQhYC1CeZQRh8kxyqQtb9Mv4mUEbOOF9QvGnjVKyzcVfNrzMoXc8lncJ1HZRkjPAjz%2FTsF8qTqE%2BqWtRgH5mPgUaaPKinJVUJUkzv6cySvvUFkZD4oOW0upPyOrf&X-Amz-Signature=ff0adec3449f9cca77288d9da1c5ec397d13cfcc106f0e02e765646169084cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
