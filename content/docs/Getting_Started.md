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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNFFPCM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG%2F5mQDAsW4DeeUotWesTloVXrbFDBVmy0S0ljA6fnV%2BAiBXDDTPU5%2FT9vSU%2BCeRFeO9%2FNIZnMDVoPeOwRJJnZEWEir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIG2QaWRyq7ZFJCGbKtwDvNySsvfddiPKYg4qJzfK3ABfwS%2F9eJa3Cfbt6hhi7PifEhoOa2PJCTQqnB3ODuZcoPhK1egFPzShMH1j96FoijPFZo7SuqGxtsiUbkxSdZ%2B%2F9nHjwK7CR8vIVvDGSgNgWODY1DDTjMBitqPgXJcS89vF49FQDD5I70Vv68XirYJ1RmSoF5nfA6j9SbQ0ivdUux5%2Fzw6doB32e8Eot6UDZtjnbhqEA3g1old0a5zR5QDU3Qhwv%2FAF1qUdl7S32KunZwf4QtVdnF51d%2Fk44JsE%2BXgabhzZDBmS%2B0Fmg4gV3o9NyvJ3KFin9qhWRuoF%2BYaCKZ7sxpHuwIB9zOxuo%2BI9LFzxnN5XXMdWJTOSE9snwIBIHwiubLd4yfJusJG820LGGuSS7Ax4ARyZN%2BKZj9fKA%2BW056N%2Fd2HJx%2FtWZA61MuTW7qp4THESlNzF69fc5VZa4LHfA06LPKzCvv1IfsCUzuVokXrXy8y07RyPi%2FW2%2FZFd2hr1uZqixhib9J%2FEQldnz89qd6pSKFqliZ%2B3QYKByUjE50qN1y5gjAPUdp3nvb25ilsCw7ZpzpzEDJWOeW94P56etHQcvipVDHPvHw4wsfs6y8R%2B7LUYKJ14IAqxyMc%2F3qOPFqT4St7ADIwwy6LqwgY6pgFfyAjLE5F447kMKXP8YI7CP%2BQbGnw8GI%2FYXB7%2BDmsC8oxGDPukUDtcQvlsL6UVksXTvD1ULTOzOUMR9MKdkyMhrB8MsQbClKQjkLOoIoiPqTQzIsJ8CqN1Cn%2FmZw5uOxlwOzdPEs81EwP46LVf4i%2Fv4yW9s8LkUHIyFdXkNnfjKudgZl3SONNIiKC44lRRrcdKYvgREm1EarHjCy1fIN%2FB9Ex0op0X&X-Amz-Signature=512d23a715e4a4e41c7a76b2f71334d0262e6eb73119b9b196c5992cb6bfcdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNFFPCM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG%2F5mQDAsW4DeeUotWesTloVXrbFDBVmy0S0ljA6fnV%2BAiBXDDTPU5%2FT9vSU%2BCeRFeO9%2FNIZnMDVoPeOwRJJnZEWEir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIG2QaWRyq7ZFJCGbKtwDvNySsvfddiPKYg4qJzfK3ABfwS%2F9eJa3Cfbt6hhi7PifEhoOa2PJCTQqnB3ODuZcoPhK1egFPzShMH1j96FoijPFZo7SuqGxtsiUbkxSdZ%2B%2F9nHjwK7CR8vIVvDGSgNgWODY1DDTjMBitqPgXJcS89vF49FQDD5I70Vv68XirYJ1RmSoF5nfA6j9SbQ0ivdUux5%2Fzw6doB32e8Eot6UDZtjnbhqEA3g1old0a5zR5QDU3Qhwv%2FAF1qUdl7S32KunZwf4QtVdnF51d%2Fk44JsE%2BXgabhzZDBmS%2B0Fmg4gV3o9NyvJ3KFin9qhWRuoF%2BYaCKZ7sxpHuwIB9zOxuo%2BI9LFzxnN5XXMdWJTOSE9snwIBIHwiubLd4yfJusJG820LGGuSS7Ax4ARyZN%2BKZj9fKA%2BW056N%2Fd2HJx%2FtWZA61MuTW7qp4THESlNzF69fc5VZa4LHfA06LPKzCvv1IfsCUzuVokXrXy8y07RyPi%2FW2%2FZFd2hr1uZqixhib9J%2FEQldnz89qd6pSKFqliZ%2B3QYKByUjE50qN1y5gjAPUdp3nvb25ilsCw7ZpzpzEDJWOeW94P56etHQcvipVDHPvHw4wsfs6y8R%2B7LUYKJ14IAqxyMc%2F3qOPFqT4St7ADIwwy6LqwgY6pgFfyAjLE5F447kMKXP8YI7CP%2BQbGnw8GI%2FYXB7%2BDmsC8oxGDPukUDtcQvlsL6UVksXTvD1ULTOzOUMR9MKdkyMhrB8MsQbClKQjkLOoIoiPqTQzIsJ8CqN1Cn%2FmZw5uOxlwOzdPEs81EwP46LVf4i%2Fv4yW9s8LkUHIyFdXkNnfjKudgZl3SONNIiKC44lRRrcdKYvgREm1EarHjCy1fIN%2FB9Ex0op0X&X-Amz-Signature=abb5c171d20ba4d12d4a0ff1942fbaec5af23359a69057928c6fcab05c05836f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNFFPCM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG%2F5mQDAsW4DeeUotWesTloVXrbFDBVmy0S0ljA6fnV%2BAiBXDDTPU5%2FT9vSU%2BCeRFeO9%2FNIZnMDVoPeOwRJJnZEWEir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIG2QaWRyq7ZFJCGbKtwDvNySsvfddiPKYg4qJzfK3ABfwS%2F9eJa3Cfbt6hhi7PifEhoOa2PJCTQqnB3ODuZcoPhK1egFPzShMH1j96FoijPFZo7SuqGxtsiUbkxSdZ%2B%2F9nHjwK7CR8vIVvDGSgNgWODY1DDTjMBitqPgXJcS89vF49FQDD5I70Vv68XirYJ1RmSoF5nfA6j9SbQ0ivdUux5%2Fzw6doB32e8Eot6UDZtjnbhqEA3g1old0a5zR5QDU3Qhwv%2FAF1qUdl7S32KunZwf4QtVdnF51d%2Fk44JsE%2BXgabhzZDBmS%2B0Fmg4gV3o9NyvJ3KFin9qhWRuoF%2BYaCKZ7sxpHuwIB9zOxuo%2BI9LFzxnN5XXMdWJTOSE9snwIBIHwiubLd4yfJusJG820LGGuSS7Ax4ARyZN%2BKZj9fKA%2BW056N%2Fd2HJx%2FtWZA61MuTW7qp4THESlNzF69fc5VZa4LHfA06LPKzCvv1IfsCUzuVokXrXy8y07RyPi%2FW2%2FZFd2hr1uZqixhib9J%2FEQldnz89qd6pSKFqliZ%2B3QYKByUjE50qN1y5gjAPUdp3nvb25ilsCw7ZpzpzEDJWOeW94P56etHQcvipVDHPvHw4wsfs6y8R%2B7LUYKJ14IAqxyMc%2F3qOPFqT4St7ADIwwy6LqwgY6pgFfyAjLE5F447kMKXP8YI7CP%2BQbGnw8GI%2FYXB7%2BDmsC8oxGDPukUDtcQvlsL6UVksXTvD1ULTOzOUMR9MKdkyMhrB8MsQbClKQjkLOoIoiPqTQzIsJ8CqN1Cn%2FmZw5uOxlwOzdPEs81EwP46LVf4i%2Fv4yW9s8LkUHIyFdXkNnfjKudgZl3SONNIiKC44lRRrcdKYvgREm1EarHjCy1fIN%2FB9Ex0op0X&X-Amz-Signature=0b2c39a8267a19205205d562e47deef95f07ab91b5e3714189c8127a267ca525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD54TN76%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDB353XDNew1YwnzM4tzu3HlaDXMqWGvobop3o1r99cYgIgevYQhO88MibUAx0B%2BzRIizOwTuKnYZZtR4%2BLSj1GUCQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFczPOu2hFy%2F%2BCUZ7yrcAyQKe9oX2PEQqcKrYy027oiUxej%2F0DfZdrIFNMHDMnElQjQE55rmPS3uSkkSdHf2Occfl1IKJKrPpuIycp3zjTeGn%2BwZwBgTwaOzK6FPoHt1rjdpV1hmYsusMxpjyMs%2FCk7nZcyOZzeSfemhlDAXcYOiYEgka%2FX9vZVgGUIxHHHf2LOIrJ8ZMWtA5xzXhhTDhMP5ax9MOxlK%2F6yMMjLxA9UxKHnOMmSVz5PQenk%2BoB%2BB0DwxIXytBciTZwwo9qNos3%2BC%2BHxTozAvyZf1R8fHXSgBTk9PwFd%2BXsvSIMpNGjzVyJkaAORK8FqhkDsa5Fw5ja5YopWIsUmxElZG0jw3yRBsNa%2Bra9e7xyKhP0w6QaNr1pCC65630oqDK%2Bk7y2cDiBd%2FvnYtVPG5QbJm8xgXRYiJP7BUOv9k%2BqgedlzAavCAzCn0ZA8UDGUOVR6SFdlhcXn347Dz6LRQMhfTVyBWWiv7ugyD6cODChJ1eUmj2c7i0XE9hersaEN01PctclgTdladdNk21bJQnV2%2B69eg79ub%2BeoZ9uWigawbOWc9yT8rGHmB5h10VO1SiZ8W84RS2tPMs%2FKb4GFjbk1OxrqWraAhiQz4fzj3gCALxaietICvAB74rpANbOEHEj0GMI646sIGOqUBssZa1O7f%2FbPDZ2VWMLFXY%2FdeqRCjwDOegBtSbfllYhpKvKo%2BQKfyDjfksHx%2Fm60RygCE2eRA1JpIan%2F0CGhiSY8l3Ns9jfTbwDJe9nOqaUvqFkRoRGNsUvXrTmH0qlVLJnNo%2Bxb5PAbWHqllWfEO6djEaef0xbLAB5vLoyzxjp%2F1ll%2BbXfGRvmuMm4Fao3D3x%2BwftyV5iR85bWtU%2B%2BRVQbK54lSS&X-Amz-Signature=5c682c5415b70d00d5d74ed7f8d94b1ee69619a558c011253607ed6f360f8c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IEPPNSW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBYEtBBBMCsQsqq6wfejbA0c%2FfIxu0tftoMZDp4wVGpoAiEAr2r3%2FoxL%2FKtGGT9kgzZKayagDMOcryIgUjiIqsqi0dQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIsLDyp%2Bx2KKXml7YSrcA7LYx6ospbpEm6SD9N9udT4IUK04g9S4lzVE9xrGTrW6x0z7ulwqGr6Ymu9BUUEsDyAJw87EkYL1%2BaRrup3%2BGmhn0A91cEnm5gcrL%2FrZsTFacyJc9TmcBWH8XItzPne7IvU1rZqvc0ircXjFbVUp3ID6J5uLCqmL9dZq%2FRhFMCb4HLWd6nqd3U8xh0DB3vV4Ma4OgBsQhQULVJhf9j6Qx%2FbHr0i%2BKY%2FkmTmjTwOS14Rzm3S5t%2FsJRZdiJgX2kGCeMtWtJdpkyvr%2BKAHFrKjPSguKQ6b5lMT6pHvdS3Dwq2rnpPybtxzjSXJS2kHDkIU7WPdP0XRNmfetr%2FWskqfnwuxDD0K4APfAJp7mVjUA%2BN8UfrTSFZga8tsaLAvgLHWtaoJN1q4tYw8r1m5qOGVJjfxiQPGhVgazaGyRiuySXgHFLYZEOceGQZgZQy0Lw2Ja5OHyKmy%2BbSzd06RTY3D52KJclnLJm0Pq3vcc673D42vCn%2FGLJxqiEuFtOKSCwgT88GbRZrKPpO02nqqsciQan2ON5bcRzTasI0v5UZaLWfJNA7dyLqo0RQjEFwo5gOpuA1q7PGP8CYKQhiPkrosQ666HiUBrWGDdq5EcaGl06qufh2EVAOofhbFhQlRKMJyi6sIGOqUBKI90BQ8uY6jGwFe02k9QWF6O6zGniGnYYTphpURlE0Cb7XSKTOprm6vUBRROtvgXJgQsmNsyDGgUdP5jDfDGy5VB82cYKRjWJGckTHGFs8CMVKZv166nx0OO9%2BxJw9xIc5FP4waS%2BU7aTuarZxgvLasUJ3m%2B0cKE67zY0eHYUJMBF3nohuqccC9zlBwdGfFkLoSIN478byzAknL96EeEYwJHNe4p&X-Amz-Signature=f9d30696c77915eac0c2a2deeebdacf139ade713c4f16e879df658e3c00da8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNFFPCM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG%2F5mQDAsW4DeeUotWesTloVXrbFDBVmy0S0ljA6fnV%2BAiBXDDTPU5%2FT9vSU%2BCeRFeO9%2FNIZnMDVoPeOwRJJnZEWEir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIG2QaWRyq7ZFJCGbKtwDvNySsvfddiPKYg4qJzfK3ABfwS%2F9eJa3Cfbt6hhi7PifEhoOa2PJCTQqnB3ODuZcoPhK1egFPzShMH1j96FoijPFZo7SuqGxtsiUbkxSdZ%2B%2F9nHjwK7CR8vIVvDGSgNgWODY1DDTjMBitqPgXJcS89vF49FQDD5I70Vv68XirYJ1RmSoF5nfA6j9SbQ0ivdUux5%2Fzw6doB32e8Eot6UDZtjnbhqEA3g1old0a5zR5QDU3Qhwv%2FAF1qUdl7S32KunZwf4QtVdnF51d%2Fk44JsE%2BXgabhzZDBmS%2B0Fmg4gV3o9NyvJ3KFin9qhWRuoF%2BYaCKZ7sxpHuwIB9zOxuo%2BI9LFzxnN5XXMdWJTOSE9snwIBIHwiubLd4yfJusJG820LGGuSS7Ax4ARyZN%2BKZj9fKA%2BW056N%2Fd2HJx%2FtWZA61MuTW7qp4THESlNzF69fc5VZa4LHfA06LPKzCvv1IfsCUzuVokXrXy8y07RyPi%2FW2%2FZFd2hr1uZqixhib9J%2FEQldnz89qd6pSKFqliZ%2B3QYKByUjE50qN1y5gjAPUdp3nvb25ilsCw7ZpzpzEDJWOeW94P56etHQcvipVDHPvHw4wsfs6y8R%2B7LUYKJ14IAqxyMc%2F3qOPFqT4St7ADIwwy6LqwgY6pgFfyAjLE5F447kMKXP8YI7CP%2BQbGnw8GI%2FYXB7%2BDmsC8oxGDPukUDtcQvlsL6UVksXTvD1ULTOzOUMR9MKdkyMhrB8MsQbClKQjkLOoIoiPqTQzIsJ8CqN1Cn%2FmZw5uOxlwOzdPEs81EwP46LVf4i%2Fv4yW9s8LkUHIyFdXkNnfjKudgZl3SONNIiKC44lRRrcdKYvgREm1EarHjCy1fIN%2FB9Ex0op0X&X-Amz-Signature=8f0a0965e8dccbd89a8ff46de431639dc1451f10c3b71f210bbae76e4211e6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
