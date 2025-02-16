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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC6QDCU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEznhFVKFBoPc%2Bt0Akjf%2Bo5ndUYjMw81vJj2at7T4GhEAiAR4Bjxb7jpA2JFpF2V2WPn3Zo%2F3PqvlyZheCKitnp8cyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRQewXLFrDEe92wYvKtwDHg03Y%2F6TE8Lt4zMseFX1ayhs%2F32%2Bfx0Gf8VPprAFBGH2pvFgnIrtdnzCB6MSasirUtNz%2BVmOe6Z8iPAs5H3GyIRnBlTMU2HofTG%2BA4x6bfHRWcgLNT2bpQSmTPrqtVKkcXBW8QtVQ2WDMXrTvyxX00jNOHvKSgnG2tpWs8wJhOvIXfIxwhkQIO%2BnxXF1r2wrIQEKUPEhzfcyB%2BKEhkif3YrYjHywX1DP0Wy4DTQUaI4dqVUZlJB0BR5FqQ%2FZygG%2FOtTezK411RREpMcNznhCjtCUyY5VDgGolN%2BXCDm8Ey8Rx7AvFgtisbVxqYo5YDNsHg%2F5lXKDcAtG8MYlyuvAtI49u2jw9OE7H23mJD7fZGm%2BcJ6k6ztlRom2sY%2Ff5wyb8%2B0xDgDpJmC%2B1jhZmcTGBgU%2FL6GOLhnprFf3ntlsYu68%2BLxEENG2FzCCnaT61hk7SWi6UI9iYRMWB5qEOKjcrGz2CXJiy%2FI1ApDUKfyO%2BEqCzG98zgP61GyQYgc4ijt3WIE8YaJmQ9pyTCwlGbbKXqMWh5%2F5spFNL%2BsbRMlET6n7sUQRupsp6r6onChYqbEl71iW01MtXE2T2MfgHXG%2FZg%2BvIAjRzZhr%2Bnl%2B87F%2FQuWJjk0pLZygw2XXfggw16HHvQY6pgElBEnngTClCvO7UkpLNl%2BkKVdkH4q0TOG7wLcPYznVAzAr2H0XoW1PNahyu2oyK4aIrC8KLXyL0TdyykkTYQMueRj50%2FVF3PPHC%2F%2Bu0fd15dJ%2Bd%2BIdGlVMjuwSWuSFkmjPBDrYcnO23WKdZFs0dBXNrxZe2wkFkIJPfUlhbFtIZBDxzd7ppcUQL3VfPcTRZ1E9qIIO%2FwkBOax1OXPapK7%2B1xI72J3N&X-Amz-Signature=27b1d825235ac61b48cd8219f7f361bb4f0682461330ef019da392e90158f424&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC6QDCU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEznhFVKFBoPc%2Bt0Akjf%2Bo5ndUYjMw81vJj2at7T4GhEAiAR4Bjxb7jpA2JFpF2V2WPn3Zo%2F3PqvlyZheCKitnp8cyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRQewXLFrDEe92wYvKtwDHg03Y%2F6TE8Lt4zMseFX1ayhs%2F32%2Bfx0Gf8VPprAFBGH2pvFgnIrtdnzCB6MSasirUtNz%2BVmOe6Z8iPAs5H3GyIRnBlTMU2HofTG%2BA4x6bfHRWcgLNT2bpQSmTPrqtVKkcXBW8QtVQ2WDMXrTvyxX00jNOHvKSgnG2tpWs8wJhOvIXfIxwhkQIO%2BnxXF1r2wrIQEKUPEhzfcyB%2BKEhkif3YrYjHywX1DP0Wy4DTQUaI4dqVUZlJB0BR5FqQ%2FZygG%2FOtTezK411RREpMcNznhCjtCUyY5VDgGolN%2BXCDm8Ey8Rx7AvFgtisbVxqYo5YDNsHg%2F5lXKDcAtG8MYlyuvAtI49u2jw9OE7H23mJD7fZGm%2BcJ6k6ztlRom2sY%2Ff5wyb8%2B0xDgDpJmC%2B1jhZmcTGBgU%2FL6GOLhnprFf3ntlsYu68%2BLxEENG2FzCCnaT61hk7SWi6UI9iYRMWB5qEOKjcrGz2CXJiy%2FI1ApDUKfyO%2BEqCzG98zgP61GyQYgc4ijt3WIE8YaJmQ9pyTCwlGbbKXqMWh5%2F5spFNL%2BsbRMlET6n7sUQRupsp6r6onChYqbEl71iW01MtXE2T2MfgHXG%2FZg%2BvIAjRzZhr%2Bnl%2B87F%2FQuWJjk0pLZygw2XXfggw16HHvQY6pgElBEnngTClCvO7UkpLNl%2BkKVdkH4q0TOG7wLcPYznVAzAr2H0XoW1PNahyu2oyK4aIrC8KLXyL0TdyykkTYQMueRj50%2FVF3PPHC%2F%2Bu0fd15dJ%2Bd%2BIdGlVMjuwSWuSFkmjPBDrYcnO23WKdZFs0dBXNrxZe2wkFkIJPfUlhbFtIZBDxzd7ppcUQL3VfPcTRZ1E9qIIO%2FwkBOax1OXPapK7%2B1xI72J3N&X-Amz-Signature=c9c9534afd280aeef5ca065a847fb1eefe60656e5ae14f5971d6a8919830fd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374HYTZT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIE%2BGdOuOAobZpjDQRo2fyVsycSOiMR1kxvwnI5bwNyl1AiA4Hz9hRjKcmW3c5aeGx39zKoyU4ydSsggVx8ZK80u6Iir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMeLPLrooI4jfRtTiWKtwD8X%2FS%2FtA9%2F%2BxrR%2BFtaTUcFa1uS86lTBrCnCD2cfe%2FhRSkSR0h6QnmdDDzdhaQV4mzkodFoAym63mjJVcWpq92k04e8QZdvVeYknklv%2BxMWdaX3gtjpcMCbdPRscF6olzNNpulF8ax96z5eQNN4vDed4GWuEw9dOzNB3CNiNjXDvZ%2BKwpqrmFHSNskOZIvaIViLOepS2Wh4ey9SWEsMNehU4ViGCecjjTuR3953kQFvEzEmm74nACVlOnw24NeRUDzO2WfpouCzMN%2BUYcO7e4L%2FuhXesQG%2FgWwJTR4QcS7xna068u3Kp54OcrlN2TFq8mkh7ePoOPJS2ypoxyplWpuw5l77GqTeOQyzY2fah9ZgtEUZXiRKPC1%2FntfZkHWAUhorDSzyqRlgojunUG0UgXPrAhKlL48kQrLp2dDFXn9UtcbX%2FKkG4ImBfLa%2FXM%2Be70IUzg%2BsXJaq5jyf8Z882qvS8ELEGBS8USlvrfL%2FjBzBSJVYpS%2F2buVsFPxG9rQik1HVMJFiXkJubjb2%2FVTPmP4sGGqc6G4TaRbBvfLl35ut8DoMWhjpXtWOCiqXKggU3Xf5hrkGK3AWMnKvsA8ONXQa9HxiR%2FrFiHvmU6l9uDS5X%2B4eDSjZAwbRrxpZT8wuaTHvQY6pgEt546P8I8BAYzSTq6Jn1Lc7xSAZVgn74EaP3e39u%2ByQJxtL6nCVvao3SUULRp%2FZzc478iHxf31j0KpSlHaESJNwAwgdYRrKZZYweADqj23kSaCQfN6QzvI9HtawlcV4dZZSb58Nr5NGBIQaKwmiTUNx8NCz%2BAIiwBdFs%2BmPNpFHbT2IWp3L1qDXTzOu%2BhM2f%2FnAuc7JBN7JXIuGSfQrbIKMyZ5COXD&X-Amz-Signature=e13a90d9a22bfeed3f99e9344dc7153e7dcc8ef20cf507c01f8b9addd9702e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCG7CJB3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIE55s7f94td8LyySfmkdrL3rEFUCQZQUh%2Bi7MAxEkmT7AiByG9CqOXIJt57AlifgSs6PX4Ab1RU8Dm53oNYQ4qM2QSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgBmObFB3XbhPJm4PKtwDgYPb10R3gdMW7hnHS8Sc6pJoEhRCnEGOIanjyXf9X7q6Ybn3Rn6Vfz8xAxOI5Kzuv3v5lANaKLRjKyyCoMtZNfRQ5xdoqUBasYa2nF1jSBYuK1uuMorQQkLa5y33TU1D%2B0mdQ6u6rfE8pzWuzF%2FMmiDp2Sufk6XpESXqZsE%2BcFrEQlZHBsv5MYawyeOURcJJHlsX0B9k2GMTVyMelWsLsCo6a4ZJi5aBTuPKWx0NPpMh%2BcEL%2FtPoN7Rc0gDlWMy5mPWihWQOTg0uXFfef98kavJltuBGiGnZbwumANO7M4vbHZ2jNIz7osmd2dQYW%2FoHzArF5yp0V2PDNPiAWTTfyHX8UU3glgb9VgtEIWGATCceVb9axNsqWXr4qOqYT4mgnSRUgNGN%2Fyz%2BK9uXh3PUi5yh53SW%2BknIlXSuXo23oofULU3UGi%2BG6a75kx9AGfQO58ssynhDrD4Et209pDZNlTcu%2BiAW%2FGzBTJNskKqhwYzNSQYIU4mC8WArbKMbbAEc%2Bn6yz17jwtRKf1L8bYiSx5OCk0Iepo%2BJDEa%2Fuw9GVmno%2Bu5JgTm2cNlTBXiLtVrFr7SYgwx3DXRAgXluwO3hxD8VneVAHqQjAEhCStLkBD1rAhP8eW2E68b4NU8w%2F7XHvQY6pgH2F%2FE9T79Uw7nOV6LSs4Icjo%2BoAGAAdC5SyDhRdSBFQaSmFCy8DZeW3gU6ijlLd7QB5vX1Pw9X%2BsOqewCvQjrcZ%2BvGJ1eVINw%2FjtHnuPOpXYm4xm%2FAxWWZ5qWQ5DOWaLDOKfqXWmVL7ITauk4GJe%2FBNIRwt%2F2hKPFtL1MwkS09VUIjqMi8pYkn964qk3A%2BGBrhfj7sG4y8g0OQkJTQIEdpHAVPAk4B&X-Amz-Signature=8d77080a7fb517fa450473863cafd8568410d30115050e43a7840e4c16859c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC6QDCU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEznhFVKFBoPc%2Bt0Akjf%2Bo5ndUYjMw81vJj2at7T4GhEAiAR4Bjxb7jpA2JFpF2V2WPn3Zo%2F3PqvlyZheCKitnp8cyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRQewXLFrDEe92wYvKtwDHg03Y%2F6TE8Lt4zMseFX1ayhs%2F32%2Bfx0Gf8VPprAFBGH2pvFgnIrtdnzCB6MSasirUtNz%2BVmOe6Z8iPAs5H3GyIRnBlTMU2HofTG%2BA4x6bfHRWcgLNT2bpQSmTPrqtVKkcXBW8QtVQ2WDMXrTvyxX00jNOHvKSgnG2tpWs8wJhOvIXfIxwhkQIO%2BnxXF1r2wrIQEKUPEhzfcyB%2BKEhkif3YrYjHywX1DP0Wy4DTQUaI4dqVUZlJB0BR5FqQ%2FZygG%2FOtTezK411RREpMcNznhCjtCUyY5VDgGolN%2BXCDm8Ey8Rx7AvFgtisbVxqYo5YDNsHg%2F5lXKDcAtG8MYlyuvAtI49u2jw9OE7H23mJD7fZGm%2BcJ6k6ztlRom2sY%2Ff5wyb8%2B0xDgDpJmC%2B1jhZmcTGBgU%2FL6GOLhnprFf3ntlsYu68%2BLxEENG2FzCCnaT61hk7SWi6UI9iYRMWB5qEOKjcrGz2CXJiy%2FI1ApDUKfyO%2BEqCzG98zgP61GyQYgc4ijt3WIE8YaJmQ9pyTCwlGbbKXqMWh5%2F5spFNL%2BsbRMlET6n7sUQRupsp6r6onChYqbEl71iW01MtXE2T2MfgHXG%2FZg%2BvIAjRzZhr%2Bnl%2B87F%2FQuWJjk0pLZygw2XXfggw16HHvQY6pgElBEnngTClCvO7UkpLNl%2BkKVdkH4q0TOG7wLcPYznVAzAr2H0XoW1PNahyu2oyK4aIrC8KLXyL0TdyykkTYQMueRj50%2FVF3PPHC%2F%2Bu0fd15dJ%2Bd%2BIdGlVMjuwSWuSFkmjPBDrYcnO23WKdZFs0dBXNrxZe2wkFkIJPfUlhbFtIZBDxzd7ppcUQL3VfPcTRZ1E9qIIO%2FwkBOax1OXPapK7%2B1xI72J3N&X-Amz-Signature=0e28f4cb26c7dbfb503f2224ac7dbaee5fbe37194d5ca0111be9592622ee4abe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
