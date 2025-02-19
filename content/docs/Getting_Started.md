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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N752FMI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBZtq4L0RdqNH7Mk4gJUMpeBhAgZXWTM05nzZliWLdxAAiEA%2F3jp5hBabG0nTD7oD9AY%2Fkg4TsGXS5T16G%2B63xJanuoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBLe1FWgAdPCw0XOircA4GQQJu301mQUcbh%2BQMfPwwSwH4359%2BWRLPcxRPAR9VbumgvKciVAFoZYM95pYRa%2F3CqNfSS8nUoOo9HgHx9LhSDKDhoP6xTtA2njkCjoSe2zEHksVAhAfrmaUREYHkDR2zI0eMR0jc4efaZhNuQ465pY5bhUS7kNzy%2FmcVb6FHVrrqZdoQwGhnfe16OJkXh7Hkrx0PXZt8n5BhdjQ97s%2Bv76E6oUH81dSQYdo7gtMUdC7rlS2ZPGzxqMDC4%2FLF7GpV8NrwzP5VlpsiEMhyr4shEmt9Xs1%2Buj8NZp9kg2WCJTFBBdCWQkOemneZ0qUB%2Bxpo61TwyzPj0LJoKbEmgzkyZCYLjMFc8ucvUob2FIbv0%2BvQYOmloIEvdv3uVJ4SsfqmBQLQq%2B52zEnr8GwooC7%2FgGjpqGjNzGvey9b06TjQCtLu6Z5rQGUuh%2FYN0gFX3T6yx9D3Tk0vPzHC%2FUvDzsrGuBrwdHCuIR4e%2B0Xp5Xhe9UDPT4Cil4NzZRczvUtcoKKumkOthD9ZMpb2xsbvpLgkyEVmKE4iLoAAqnzbPlQiSRE8xUo4cPmLbt5GXMYInZaZdmcUjIdnOIAA3lSURvngSZ5CdQX8erbi0aYuqpmvJI63E9EIIfvMopGiiMOrh170GOqUB8naz0TWwQuDMonEkJbKXzncgx0sE4b6J8jVOeg1JYyyRuVvw2%2Fsl%2BFa3zkKPYYbz7td6lZF4L4sgPdpzLuejezwmH5s3fCPVyZmE9IAnXsqV52JjKUOSg2odGcCtAEyDuwM4lRcMvDIMkI9T6x2dY%2FafRZ6El5ICw%2B5VM1hDTeY1qDYPrILoXhN9LiIUNb12OwAGMqWBZuzSiX1sD9j4MF%2F4HaGZ&X-Amz-Signature=852a255093cc339dc6fad9065447b43ebbda6cfee9f52e1182b23d4b80781cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N752FMI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBZtq4L0RdqNH7Mk4gJUMpeBhAgZXWTM05nzZliWLdxAAiEA%2F3jp5hBabG0nTD7oD9AY%2Fkg4TsGXS5T16G%2B63xJanuoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBLe1FWgAdPCw0XOircA4GQQJu301mQUcbh%2BQMfPwwSwH4359%2BWRLPcxRPAR9VbumgvKciVAFoZYM95pYRa%2F3CqNfSS8nUoOo9HgHx9LhSDKDhoP6xTtA2njkCjoSe2zEHksVAhAfrmaUREYHkDR2zI0eMR0jc4efaZhNuQ465pY5bhUS7kNzy%2FmcVb6FHVrrqZdoQwGhnfe16OJkXh7Hkrx0PXZt8n5BhdjQ97s%2Bv76E6oUH81dSQYdo7gtMUdC7rlS2ZPGzxqMDC4%2FLF7GpV8NrwzP5VlpsiEMhyr4shEmt9Xs1%2Buj8NZp9kg2WCJTFBBdCWQkOemneZ0qUB%2Bxpo61TwyzPj0LJoKbEmgzkyZCYLjMFc8ucvUob2FIbv0%2BvQYOmloIEvdv3uVJ4SsfqmBQLQq%2B52zEnr8GwooC7%2FgGjpqGjNzGvey9b06TjQCtLu6Z5rQGUuh%2FYN0gFX3T6yx9D3Tk0vPzHC%2FUvDzsrGuBrwdHCuIR4e%2B0Xp5Xhe9UDPT4Cil4NzZRczvUtcoKKumkOthD9ZMpb2xsbvpLgkyEVmKE4iLoAAqnzbPlQiSRE8xUo4cPmLbt5GXMYInZaZdmcUjIdnOIAA3lSURvngSZ5CdQX8erbi0aYuqpmvJI63E9EIIfvMopGiiMOrh170GOqUB8naz0TWwQuDMonEkJbKXzncgx0sE4b6J8jVOeg1JYyyRuVvw2%2Fsl%2BFa3zkKPYYbz7td6lZF4L4sgPdpzLuejezwmH5s3fCPVyZmE9IAnXsqV52JjKUOSg2odGcCtAEyDuwM4lRcMvDIMkI9T6x2dY%2FafRZ6El5ICw%2B5VM1hDTeY1qDYPrILoXhN9LiIUNb12OwAGMqWBZuzSiX1sD9j4MF%2F4HaGZ&X-Amz-Signature=e632bd77a783c3b9a53b5ebbfd21098b9972559cecde77c3216e42b071abfb38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JNGWMG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD7LDeo8mb9ZUiUHM4d7vr9lxa5b2fmY15RX10cRtBgHAIhAL%2FhECYrx6j4%2BjJ9f3479IAL5qapE4uJ2qAz%2FFvXgx4%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkP%2Fs8YUpbuBi6Wwoq3ANoPjiSNkI0QtCQPAtUJfoFXqFRXRGB7N0qnGnJeKe0nWCqcfQ2Wjty8tDtcaztg2en9%2BOTa%2FqtpZcPnCiIHEUgQFyFMH%2BGp9zApqNnklVUSKQYzlViJKWrXsBQYjW%2BTiNF%2F5%2BmnMFkBZ1YVskxWkhCxofutVFbS%2BMVKXiNX8Pc6Oz5t9igti0Ev9Vk%2FIWqghRCGSWYQeM4D9NWKCnf7AyZZTkA9jIoEVAHjXsoAxU0nDVR%2F0x6YezHzT2YXciOqDlXuwbkbqyPXh%2BMGeKHm8wQ4q8L4qIZZTRR9es0S%2FpR7zdmjFy%2Fa5M9gEwFrFUGdMx0vm07w3vCdAIE2FT%2FXnyizKlCxI2UZ8%2BcHBVOL3JHd0oDgXeeqr%2Bw7%2Fij1Ws3%2F0wSiqtHUICJCoL86bfU2FRpBkmyqMAVlhhMXkQeCNAl5UWEJvJpxHzBPAXp%2FdwK9zpueiKzJCdVhf59irt4bNv7hI%2FSwL4gWGVo1vC%2FzpkadM%2FWoMXO1Bf7LGh7uQQBYkVNvloFRJcz4%2FEO6hqwpqAUwirL2%2FdAt4KZwIqT4ROh5AN3JGmsU5Al%2BeigWIsGsNGCdQ%2FQDAWtaIPFM6tZrm7rv0MjjpGqRvl%2BFXOYWxiVTeSZk1%2F5MiQCtf803zDm%2Bta9BjqkAVBufTueUDSBSjqFXtEG5iwyb4Tgk7MtFq9cOQf28pkNRNr4aSdxiq4n7MxJk1pDUfloVmxGHAx6aFOMYqIcJ9M1zzahrWlHKWyzxB10xgaw3Md8PA9KTwei9N6qs7nEG104IHFPVAem56%2FdWB2bGE9F67lECT3oGYLHVw2cqgRYXwMKqa62Rpvak9YOqtekLlRBM0ccQqENuC91rRLioDW1bdQX&X-Amz-Signature=0e25c6a7989edd82348486ad9cacbfa36d9b44da7b1d2b031beec3d8c4056017&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ3XMXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHOxB0ZrE%2FP9P5tRjF43G0i7tUsL86zThqTZcGq%2FKTigIgWmqgq2nS3xo7y9P%2BiGSqB6eiRD39We6Y%2FJgbsd7RJEcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA9HDjB3gMkNE58DCrcA2jieu2%2BEl1TYFmLaKoYEHA4ejpZJTQO1ueW%2FnvrrDMVr7mipJzfiJ0FfOUJdBBMiL%2F6KBg2ChuMPhSELwf2LZlHdbVSQ9k305nzPgSxUkOj1%2F%2Ba%2BU8HanvBtRja5QOqIa7lrWR9gHf22B%2BIiQHYniV386DFBczVCirNr0r1gE58MHPpRNgiAxPBcpCE%2BsXc%2FfiLvzz%2Fcig87Vp1T%2FAgBIn%2FkWSK4lEJqEwYcsgYfxhkDNAueHNlpcCLSIkzWLBypZY45U0zmmuj7MB72N7VvgLqaspPBYIIcX0mF6uOqin1Szd7J%2FGba8TMMtYbBcMAM3Wemq%2Bn2S1pdrGSuq6i4kpG85OujZpTVpsEQNwCSoXeOCy5s5LPb7fy3VKCiY6Z%2FXpc4MOb5%2F%2FX%2B4tRbDuHgZMdRbu1MSEqlIJZVwlPO0qzdhIHeH2IzoV%2BwiKwIdR7owWcS%2Br0VSnTMHniLwAmpmnM23O27fdPRvvz%2Fg16UMy9UOuf7Qkuo5EEubK%2F7okelsSUbovfQXiUC0FX4xcP7rWqzY8DWKXYztnX18WNghqEZZ9qaim%2Bhs%2BXWxb2EbiE5QgMWjEW8fC5Cv%2F9h%2Bk%2Fmm0zxN%2B%2B9Qukb%2BLzkt7y4sdfUqrT%2B6SRyFlAZqbNMIf71r0GOqUBfaeHWjyEgTD8pOi26BotzRLM374XGCCXx3PcvG8UnAWumCC9pkwPWRQJboosYh%2FSsZe%2BT%2FrX40X1tE8DazbshnH6xMKUW9Qi9oANGfrFR2NocP48V%2Fn%2BNqHGkmrpbpcMRiTMjKc9a%2F9CHXsGQX%2FDmn6UhUE7r7Onnmp3vyjJ%2FywOHpQ6tb5lLw72rCMhD41HQSwMYpdoLH98TJzsQUrcK%2B6UldDW&X-Amz-Signature=361447adceff6bd2545fdf34ff9d84ed0e6bdad1aba1d3ddb1703a0c375849ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N752FMI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBZtq4L0RdqNH7Mk4gJUMpeBhAgZXWTM05nzZliWLdxAAiEA%2F3jp5hBabG0nTD7oD9AY%2Fkg4TsGXS5T16G%2B63xJanuoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBLe1FWgAdPCw0XOircA4GQQJu301mQUcbh%2BQMfPwwSwH4359%2BWRLPcxRPAR9VbumgvKciVAFoZYM95pYRa%2F3CqNfSS8nUoOo9HgHx9LhSDKDhoP6xTtA2njkCjoSe2zEHksVAhAfrmaUREYHkDR2zI0eMR0jc4efaZhNuQ465pY5bhUS7kNzy%2FmcVb6FHVrrqZdoQwGhnfe16OJkXh7Hkrx0PXZt8n5BhdjQ97s%2Bv76E6oUH81dSQYdo7gtMUdC7rlS2ZPGzxqMDC4%2FLF7GpV8NrwzP5VlpsiEMhyr4shEmt9Xs1%2Buj8NZp9kg2WCJTFBBdCWQkOemneZ0qUB%2Bxpo61TwyzPj0LJoKbEmgzkyZCYLjMFc8ucvUob2FIbv0%2BvQYOmloIEvdv3uVJ4SsfqmBQLQq%2B52zEnr8GwooC7%2FgGjpqGjNzGvey9b06TjQCtLu6Z5rQGUuh%2FYN0gFX3T6yx9D3Tk0vPzHC%2FUvDzsrGuBrwdHCuIR4e%2B0Xp5Xhe9UDPT4Cil4NzZRczvUtcoKKumkOthD9ZMpb2xsbvpLgkyEVmKE4iLoAAqnzbPlQiSRE8xUo4cPmLbt5GXMYInZaZdmcUjIdnOIAA3lSURvngSZ5CdQX8erbi0aYuqpmvJI63E9EIIfvMopGiiMOrh170GOqUB8naz0TWwQuDMonEkJbKXzncgx0sE4b6J8jVOeg1JYyyRuVvw2%2Fsl%2BFa3zkKPYYbz7td6lZF4L4sgPdpzLuejezwmH5s3fCPVyZmE9IAnXsqV52JjKUOSg2odGcCtAEyDuwM4lRcMvDIMkI9T6x2dY%2FafRZ6El5ICw%2B5VM1hDTeY1qDYPrILoXhN9LiIUNb12OwAGMqWBZuzSiX1sD9j4MF%2F4HaGZ&X-Amz-Signature=f48170f7ce6511affc12ee14d8d4a0ffdae86efa72cc451a45cea9484a5e900c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
