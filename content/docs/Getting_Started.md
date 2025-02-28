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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTR2QZK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDjOgQEQgL9O6Y8uo5JoptCYCmLYH7TCzDfXKaFZmFwMAiEAwLyAHDjeFHnupcCfCwIMqXUNowURUZyMsgli1pfpbOkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8mrU4JSTDZ6O6QmSrcAy%2BgGEWBwlYLFHJoTYUFvXhSaIH6OT05WryFnWmKnQ9TM5UpVyH6EGMFx71oF%2BatC1l4pzyA%2B7xp6ZVg9AW%2ByWG9k2jRkbvw3EFQIrV%2FzDWWfVHycDx90ZzUQoxRugIxbXa2zaYUhc5iTBqF68YCkHoTOojuDn4%2Bb0yGnK3oUxE7wrMgyxhCRFKvHDdF13CzYZTzjHTL3PqX9xWd7oTJCvNurzF7vEpX0xoDp02oeXjLBb%2BZDQF49HHfI%2FQfLXN76ILqHB7x4splP%2Fs0VJ5UUfKktIsOPDRcch0u3LwuJmVn5kUcrlVdKnb5D011efLcDqEnApuhAaKb06JeIq9Z%2FUsGhi6TQQ0CnG5kRIiPXMYFy35lTH6ThJSOrOmeMWnu0gE%2FgNg8zij5DP%2F3BfBRyOL5hm20v9MJ2OULs059kIvzZGinTn2GEKo4Z%2FH5X504E8PwAWJn90IzlbHZPypIhwk%2BnYz5fLbwwoUi3QRF%2FtjZQLHl8uoAK%2BbGajxLvlrrK7VoGurav5Te%2BZOcVrlIFW5AAyIqIBWwZVT1IpvI3ziXUR50EaiWse7TlUBnYFpBu3V1ZNDtWRfBmIGHjqIezzJwPzOP%2F0EVvpseQb9eECJ%2BwfrIAHfWwiK8r0coMPGShr4GOqUBg8G4Cxj6VW42wOoRusc0TLGKlb5cjc11gwqlAwkQjFGJYZPgXvD3f6QGZfvMxnRZr7iB%2F1NOoPzW8MkauExCHCpcfAIk65yna57ofBht%2BagWF43Iqn5Ug5H9cKJfyOz%2Bm65xQDeWMWfNElOS2%2Ff4O6MtlztdT59CKhtlpmlFeYVedS2P56GJrHVu5u9z104fuNtsZr4wzu2ip1U5owkvoGNsQ7Sm&X-Amz-Signature=f940f48e36e8e6fc80e82a5034961779643407f9b69219b1877bade196d0dc94&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTR2QZK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDjOgQEQgL9O6Y8uo5JoptCYCmLYH7TCzDfXKaFZmFwMAiEAwLyAHDjeFHnupcCfCwIMqXUNowURUZyMsgli1pfpbOkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8mrU4JSTDZ6O6QmSrcAy%2BgGEWBwlYLFHJoTYUFvXhSaIH6OT05WryFnWmKnQ9TM5UpVyH6EGMFx71oF%2BatC1l4pzyA%2B7xp6ZVg9AW%2ByWG9k2jRkbvw3EFQIrV%2FzDWWfVHycDx90ZzUQoxRugIxbXa2zaYUhc5iTBqF68YCkHoTOojuDn4%2Bb0yGnK3oUxE7wrMgyxhCRFKvHDdF13CzYZTzjHTL3PqX9xWd7oTJCvNurzF7vEpX0xoDp02oeXjLBb%2BZDQF49HHfI%2FQfLXN76ILqHB7x4splP%2Fs0VJ5UUfKktIsOPDRcch0u3LwuJmVn5kUcrlVdKnb5D011efLcDqEnApuhAaKb06JeIq9Z%2FUsGhi6TQQ0CnG5kRIiPXMYFy35lTH6ThJSOrOmeMWnu0gE%2FgNg8zij5DP%2F3BfBRyOL5hm20v9MJ2OULs059kIvzZGinTn2GEKo4Z%2FH5X504E8PwAWJn90IzlbHZPypIhwk%2BnYz5fLbwwoUi3QRF%2FtjZQLHl8uoAK%2BbGajxLvlrrK7VoGurav5Te%2BZOcVrlIFW5AAyIqIBWwZVT1IpvI3ziXUR50EaiWse7TlUBnYFpBu3V1ZNDtWRfBmIGHjqIezzJwPzOP%2F0EVvpseQb9eECJ%2BwfrIAHfWwiK8r0coMPGShr4GOqUBg8G4Cxj6VW42wOoRusc0TLGKlb5cjc11gwqlAwkQjFGJYZPgXvD3f6QGZfvMxnRZr7iB%2F1NOoPzW8MkauExCHCpcfAIk65yna57ofBht%2BagWF43Iqn5Ug5H9cKJfyOz%2Bm65xQDeWMWfNElOS2%2Ff4O6MtlztdT59CKhtlpmlFeYVedS2P56GJrHVu5u9z104fuNtsZr4wzu2ip1U5owkvoGNsQ7Sm&X-Amz-Signature=449d766a38f06bb3b5d637d080c3ddf4889078803d430d6dbae196cb197605c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWDVPJP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFEU8aVulRyUSP2r%2F90KWNBw%2BpU5TZHpW39VndahzfATAiAbxmGR%2Bw%2BVS09MED5xuMufadSDJcgkbJ%2BsioyuUAz34iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUenqyuBJwaIKka3GKtwDDLdIwDE8HR6bMMcB45w0NZSejkqWYF0sisSEFqvCao%2BMYsfinUrwntmaUwmx%2FH6CnW7G1yTr5TIER43MkjuLvesyFL4qSbcGSVR%2BU%2BphXNPOxM7QPVGJNJicjy%2FE%2BWmyYS0%2BjINVXDP8Fhs7wiO7XVV52%2Fq8aRvmLYu9oMywZEaaKG%2BcqTLTFfYwU5z9UgGP%2FzcGsQxrlv4ADTnWkqCvGDeWjDQQXaU3aO4P%2Bz7Jmp1rzId0nsduGUWE%2FySf%2FeRR36Zvg0oba%2F7Yn3YX9I%2ByXgfzWhflg3NPCGycNcNp%2Bo94ukT36DZzzD6%2FA5rqugKr8HXjJFhZOuQOKUfg6rovagkLXfEkobhroib%2Ft0xjPn%2Be1%2BjtsftIegjh8ZIH8gtZ8B0NhuZWpivqac513hfJRaz42vcYlNb%2FlxpdvYTyv1t766NipNqUnvNwr%2FL%2Fg54iEVhuj6g%2BayHqaPSvulGJbmTU6aNRkRPuomTpbSE31dUJNs75UX%2F1i7kfQxQYPTyoocGq6wOBGSUqMtwGt7vPOouPF3QIvUwqVRnn7myUKANGgpaBHlfxV%2Bcc6L2CdP77aPxmER8mKLT9FzWKRURn4Nma7SfmjO7P5IECFzxYby%2FhF5a8VqHFWXoRj6Ew%2BZKGvgY6pgF3PeJD%2BybKKWrOEJqu3fsmDaHOCBOdGLiOtec1bcrW8UPg5l%2FzYmsOe31PGdo1CrqyRom0hWLzLhcTy37JeTSJUWKesiV5NXiA4ezi6MsPBraZwOsfV65VHHqhX9M1DUM0Gsm2bv5k%2FFdi51%2BinsP30mmpYc8jm3wvjY2FsdYQJP4pQBM%2BIQb2BelufFNngMs%2BAlOo5QNqWgmXBfZdlk2EoLVr6hnh&X-Amz-Signature=6b283f25d90a3b3e8601f0646b1755cab714cb54e4d47afac0fd1d821a585ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPGPHSH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFJZ6QKWTNR0wv5WalCpUuBvro4%2Fkxb2eOxJMevruOewAiEA1buie9NftA0eQuVFrs3wRZZIRe65k8w0sZSPx4wEdPwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5vCyE%2BNBFJx%2BYgWircAypbTmBXRRmMzD3KT%2Fqjd84j%2BbdHdgT4HeZt9D0JiFfrPfEWY%2BiacY07Oec3TdMbZoYLW1tXE%2BhGDRWEfFTN%2BGQaFQmnkoDGhny75C2vNKIxaV1KCTuWHmt9NiRJ9NzSGyPZxbVsUYNciyRbW%2F3LmiVPtsPCXP4GfHkKfimn9svhL9FrBeT5Yn%2BB4canzwEWGj5eYjaOirO2c3cKwghFNY1DUO%2BG61qgmBkEs9AgQQJmPQwrIfs4DBmHjE6%2FVKh1UFykTzKaCd%2BmgfyNOT35x3XmRmy%2BN2eKr3j5hKBvoFZ6ttVZMaXh9Xff%2FVfPBcxp0rrhrIe9BR%2BLRWaKGZqeskma3EzF8cGJRgZRK5CF%2FNwaEU%2BW%2Fx0xv2f9r4dauCfqTCm%2BU3fDC2XoiYOkRSWTx8FW%2FgXBeRbA2yqI5BPvO19%2BHeLYSzP4g4VwMP4t9MmEJmY9DQRZqco6BgX3e%2BirRHIcVL9Rv8QZVha%2BRNOjs%2Fljr9I15z2o8Pa%2BjY3U7FAYYDXwFVkzc69PijE7i5PKDJtjfErPiZVxv86l9utAqaAD1DcwLsaeLkLUFp%2FQ3yKYCQITTk48UGFIQb%2FrDzIpXUcAlNDkZb8NbLOWaECugRcOrF7lCjbl6p4wtDrNMIqThr4GOqUBfFXbHon4w33pS8k2vJIeGJxGuHQjtgWugdeQy%2BcdRE6UfVOokr7eOhAJgcqa5cFklhKoI2rB3U9STBfhexzjefoaLae8RrMiLeQdv1M6%2BpDGb6I4FpsZ%2BK%2FRqk1wAr4DjYvXdzdIlHpD0X4ZN1L7IhYkQkzWjs1vkRyjjiYK022HHXhV9jSTxoRtNqmghsW7feF7Hj5z3Q7ogfDaa1efSLH5bYXh&X-Amz-Signature=1692c5ec7c333fb8df87becd37920b497bcb957b8fbd15c686c584efc7e13c01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTR2QZK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDjOgQEQgL9O6Y8uo5JoptCYCmLYH7TCzDfXKaFZmFwMAiEAwLyAHDjeFHnupcCfCwIMqXUNowURUZyMsgli1pfpbOkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8mrU4JSTDZ6O6QmSrcAy%2BgGEWBwlYLFHJoTYUFvXhSaIH6OT05WryFnWmKnQ9TM5UpVyH6EGMFx71oF%2BatC1l4pzyA%2B7xp6ZVg9AW%2ByWG9k2jRkbvw3EFQIrV%2FzDWWfVHycDx90ZzUQoxRugIxbXa2zaYUhc5iTBqF68YCkHoTOojuDn4%2Bb0yGnK3oUxE7wrMgyxhCRFKvHDdF13CzYZTzjHTL3PqX9xWd7oTJCvNurzF7vEpX0xoDp02oeXjLBb%2BZDQF49HHfI%2FQfLXN76ILqHB7x4splP%2Fs0VJ5UUfKktIsOPDRcch0u3LwuJmVn5kUcrlVdKnb5D011efLcDqEnApuhAaKb06JeIq9Z%2FUsGhi6TQQ0CnG5kRIiPXMYFy35lTH6ThJSOrOmeMWnu0gE%2FgNg8zij5DP%2F3BfBRyOL5hm20v9MJ2OULs059kIvzZGinTn2GEKo4Z%2FH5X504E8PwAWJn90IzlbHZPypIhwk%2BnYz5fLbwwoUi3QRF%2FtjZQLHl8uoAK%2BbGajxLvlrrK7VoGurav5Te%2BZOcVrlIFW5AAyIqIBWwZVT1IpvI3ziXUR50EaiWse7TlUBnYFpBu3V1ZNDtWRfBmIGHjqIezzJwPzOP%2F0EVvpseQb9eECJ%2BwfrIAHfWwiK8r0coMPGShr4GOqUBg8G4Cxj6VW42wOoRusc0TLGKlb5cjc11gwqlAwkQjFGJYZPgXvD3f6QGZfvMxnRZr7iB%2F1NOoPzW8MkauExCHCpcfAIk65yna57ofBht%2BagWF43Iqn5Ug5H9cKJfyOz%2Bm65xQDeWMWfNElOS2%2Ff4O6MtlztdT59CKhtlpmlFeYVedS2P56GJrHVu5u9z104fuNtsZr4wzu2ip1U5owkvoGNsQ7Sm&X-Amz-Signature=602b1a5a83c0ed514a3124f8a4e2ce2b8f98910f934195ffbf62079ccb680c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
