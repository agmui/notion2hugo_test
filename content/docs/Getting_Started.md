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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC3FZBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBgq%2Bxea1pERioQ77HziIOqwqr1Xviz0EQXlqeLa7xJ8AiEAhXZyeJmHCPC%2BbHgNgh5854MRKiaidgxsbgcUHOmlp3IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRYcDur4PhSS1hdrircA9I5RRd6L08GALLZzSqGWVB3BdmW%2F4u0UBV8VQQmHOma7zlZRBP0MX5zkez6Adft%2BkpGdgVq8kg2wZMGb60rIpwmUfm6C8CLxHH7nNfhF7C6E5v6URJmuBEmYFuwKnI9xlXg7w%2By59fDXyksRkV8OfRKLDvLuG0kGkoc%2BAWrUHztV9PvNMMsr5QQQuhixDw6gf7PQo9yb4H3PMuik9LE1IcKrz08NxQ2X3RDqfzAG%2BaZbYsjz3hFgX1BXhnnryHKhuvqcPKmbzKZ2i3%2F88SvyoytlJqhqRfEmBQl3jOyxsF%2BtNOHHkHHgXBaegKv7Ti1Z487AjWvVTWwj0DcaJdfLJ7vk%2BSPdIzMo3bpi2hA%2FrbNfXgAqql38chJ4uZrC3rSzUbCCPdGDe7TizYTj7MKfWafYaem%2FwzZefzLBOmHBw9vLgsy2yRdKO3c7yavaC9u1fHK23jVwolU3Wdxiy3Ss0wcwAuj2WdBR1wTbsYMf1Audoeri12EiqnesQR%2FVG%2FqChbVM6Jr%2BCItL0DgJvIG5RheMtKG0NJ9wFr%2FzLqaNPCPJ4So6Ne9RR4pZomH2Y24rf7fUINK8W0D9lJnAcm6QLoJatgkFc3C7TJTGMlZeQTXQATQdmvvUMZjD5c3MJC2%2FL4GOqUBYVy18BN4Jsf3Fv09LyZaCGcrbScl6kBmSMmnHVX%2B0X7FxZm2pGxHZz3seRiJReqYaNoI3YMsV%2FOn9O525lpDBQB70GpmCWR%2FeLQfaD5Ismoqhii4DqejUvljuZqWpcXYYAyEADJcArwocJI%2BFlV1U3sm9sgBNc0UNVGhcwAL6ZZCB2eC%2FNUUcA6VP2%2FGnb80HYeK0%2FLtx7bCC1mnbMc%2B9JyZryXO&X-Amz-Signature=76efdcc72c445f1e230355f1b273ace6946f572bdff13a0a222b421647d5f16d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC3FZBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBgq%2Bxea1pERioQ77HziIOqwqr1Xviz0EQXlqeLa7xJ8AiEAhXZyeJmHCPC%2BbHgNgh5854MRKiaidgxsbgcUHOmlp3IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRYcDur4PhSS1hdrircA9I5RRd6L08GALLZzSqGWVB3BdmW%2F4u0UBV8VQQmHOma7zlZRBP0MX5zkez6Adft%2BkpGdgVq8kg2wZMGb60rIpwmUfm6C8CLxHH7nNfhF7C6E5v6URJmuBEmYFuwKnI9xlXg7w%2By59fDXyksRkV8OfRKLDvLuG0kGkoc%2BAWrUHztV9PvNMMsr5QQQuhixDw6gf7PQo9yb4H3PMuik9LE1IcKrz08NxQ2X3RDqfzAG%2BaZbYsjz3hFgX1BXhnnryHKhuvqcPKmbzKZ2i3%2F88SvyoytlJqhqRfEmBQl3jOyxsF%2BtNOHHkHHgXBaegKv7Ti1Z487AjWvVTWwj0DcaJdfLJ7vk%2BSPdIzMo3bpi2hA%2FrbNfXgAqql38chJ4uZrC3rSzUbCCPdGDe7TizYTj7MKfWafYaem%2FwzZefzLBOmHBw9vLgsy2yRdKO3c7yavaC9u1fHK23jVwolU3Wdxiy3Ss0wcwAuj2WdBR1wTbsYMf1Audoeri12EiqnesQR%2FVG%2FqChbVM6Jr%2BCItL0DgJvIG5RheMtKG0NJ9wFr%2FzLqaNPCPJ4So6Ne9RR4pZomH2Y24rf7fUINK8W0D9lJnAcm6QLoJatgkFc3C7TJTGMlZeQTXQATQdmvvUMZjD5c3MJC2%2FL4GOqUBYVy18BN4Jsf3Fv09LyZaCGcrbScl6kBmSMmnHVX%2B0X7FxZm2pGxHZz3seRiJReqYaNoI3YMsV%2FOn9O525lpDBQB70GpmCWR%2FeLQfaD5Ismoqhii4DqejUvljuZqWpcXYYAyEADJcArwocJI%2BFlV1U3sm9sgBNc0UNVGhcwAL6ZZCB2eC%2FNUUcA6VP2%2FGnb80HYeK0%2FLtx7bCC1mnbMc%2B9JyZryXO&X-Amz-Signature=5e6501a4c2799a87af9ad56fc85ab0589c00784d1cd7bf536c06599e899dd96f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMX3KIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFH4s8QtOqCD271l89H51YnAWk762rg2LzumjpjmQglMAiEAjUoTY1JohFSECgebp219Q9L3eqzZuYF%2BsluJ27jwlbcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEphhiz4yQONjL%2FuSrcA%2FEFePtV3TvD2iRdRJRKpuZjR3dSEPmlEUCRjfBimU1ry6LaVvRdEqGJfxYRQRyd3ZcpuNVq0%2Bruovzqhgx7VzUWQwMoxNSidQX59s2Kt8AjyWVPJEpxK70JFn8LiZTQqZA7zpD%2Bg07RbD%2B7U6%2BOvU%2FMLUOJ0NrNPNZpgpcTb9jIoXNNqM5vCOzr%2BcezJ0V0PFh8i0stdiwg%2Fz%2BPQYSQ9lu3WYwLOxoWsnoEnCWVo8AT1S3Co70ekHamQM6LPI%2BIyHsj4YtIvUt%2BbpOUjaoHzZDKKv18FYZTwiMTnoWvNoVMG5LZMd1OhcM2cjK%2FI2vcSXKPZXsmABd%2FpsZefzrxs00qGcfPU2vznX8ooqM4xQoXUSTgRR0ZXWiBcHbAgED03z0Ojb46X93kYkClEzylFIoZ903NekXVjS4HZD3UQ9ABkT0M%2BcJFdS6GumnNafUVpGT%2BmwD5yP2bKiBjRv48Fsbop60FZqMLMJt3A0zRJ24U9I7ri1OsrZKwmJmgqTEe8AQJjUTjDAr8%2FhORNxuKWGuEH99HRzuKDKcggMhy1C49OQM2cNjXR6mn6Bhw1HtRr%2BnA8gJGaDIElFbfNJSvRd%2F87r6yB%2BlXSNn7fnq50ZMoXlsw8Knn7Dxj%2FWibMIO2%2FL4GOqUBmKJ4VFKoEtYJPBhseAZx7TjEcdBpxY4spfm7%2FcCwst2Lj2PZ5tMYQDUrvX9hD%2FP%2BTQRnkEX%2BQcSnkXgBaeXQFJ2xJ644%2BqHS7zje8%2FsxIdgOkAbq22GOdJG4aUOdjhXJaiywhwTK%2Fi6uuybwu2eBNJLrMih%2Fjcu6agabtqYf3Fs8Abe6sEmDdGdyY12NzI0Zb710w5vBm%2B2YfiJB9Up3MRyi3inn&X-Amz-Signature=9d471d6bb10f63fd27328d68c1b79f78b59369209dd7f2eb7324141487a2264d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEZXVFK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCIZQvjl4Kulq3jSonP4y34EghEHn1TkG2hjWaaAcF9vQIgQiFKA5H9WoBOJUVN4E2joRB2bBhZz4r9nY%2BsPGzvy9sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIKGr6bp70%2BoeiafircA9wv7fREkcJUTsNlPFzD3nd4ROdmFuOBOlugfJqku%2FiHQWIp%2BWnLPkhGbp4qqCiMdcILNxbeSFK12YUAztCRMAXIN3qjqPgBs7Keu06MaFClrERD4ILS3Lk1A%2FQjpG%2Fdrg9QjQOXaIloURYR8rDQq7f7OZfnT36nthpQXt0wswOeDADRM3Ltt3fD%2FlDZeclw%2Bdqxh%2FYP1Cio%2BaByI58UjkXkTJA8FmuvyZfQvPSYN3XDqCnKYeHStSNegkIwkR8VT98UxOT%2BZ50CqRURuK3F00%2FigNnf5odQWGTedc205ibgNBY1D%2BhBu%2Bh%2B0PprL21j9mdEYR6ygx%2Fv24FTCFRVPRCbbuazWf8t3FX5pWIigE6NV0%2BgqA9YfCN94dYabbFuQl%2F0QX14RswLTlkFHFS0UxmSd9ez3ow4rz2%2FpxjOacKQn%2FoM1uVgV4Rj6iMWNDuKhKsSoyNKTGVgEw0wBewBAFS1G5d1kh5953yttpbOmTlJxzS2BfiFWOuYS8CDXTcW3FBQ%2F8miz6JISSZhC93LsuWEtEG%2FRy6N0BPbWwFNH1%2FGKvLT27FqT9fQtbj3pSbbaN6HBynKz4f%2FABU8mvXe%2F7BLmghht2H6RybbE3YDTTUYxvVVyhphCdHiS%2BfWMOq2%2FL4GOqUBnu6BssYpPc%2BZPgN0NPBQbLzpo%2BlGr%2FebiyliOhAxuzE%2BJ6wN2UyGCzk3ReKGvbDSe1%2FWo%2FIFN7zEwz1uxee3uTdPUM%2BBZe%2Bpko1SoeYQi0yP972X%2FrVafj4YUA%2F4nI8z595v56J%2FMaSVISuxbwDTOCty9pn%2BQ8i%2FTYgQp6THlUShoqEMEe%2FyCiQzOo4dNBAoa8aejFDEEbGLdvihYb%2FCGIQ8D9BZ&X-Amz-Signature=63402883f69f69222b380315ccbfc8cf53b78e641bec624f6986b83700236b62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC3FZBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBgq%2Bxea1pERioQ77HziIOqwqr1Xviz0EQXlqeLa7xJ8AiEAhXZyeJmHCPC%2BbHgNgh5854MRKiaidgxsbgcUHOmlp3IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRYcDur4PhSS1hdrircA9I5RRd6L08GALLZzSqGWVB3BdmW%2F4u0UBV8VQQmHOma7zlZRBP0MX5zkez6Adft%2BkpGdgVq8kg2wZMGb60rIpwmUfm6C8CLxHH7nNfhF7C6E5v6URJmuBEmYFuwKnI9xlXg7w%2By59fDXyksRkV8OfRKLDvLuG0kGkoc%2BAWrUHztV9PvNMMsr5QQQuhixDw6gf7PQo9yb4H3PMuik9LE1IcKrz08NxQ2X3RDqfzAG%2BaZbYsjz3hFgX1BXhnnryHKhuvqcPKmbzKZ2i3%2F88SvyoytlJqhqRfEmBQl3jOyxsF%2BtNOHHkHHgXBaegKv7Ti1Z487AjWvVTWwj0DcaJdfLJ7vk%2BSPdIzMo3bpi2hA%2FrbNfXgAqql38chJ4uZrC3rSzUbCCPdGDe7TizYTj7MKfWafYaem%2FwzZefzLBOmHBw9vLgsy2yRdKO3c7yavaC9u1fHK23jVwolU3Wdxiy3Ss0wcwAuj2WdBR1wTbsYMf1Audoeri12EiqnesQR%2FVG%2FqChbVM6Jr%2BCItL0DgJvIG5RheMtKG0NJ9wFr%2FzLqaNPCPJ4So6Ne9RR4pZomH2Y24rf7fUINK8W0D9lJnAcm6QLoJatgkFc3C7TJTGMlZeQTXQATQdmvvUMZjD5c3MJC2%2FL4GOqUBYVy18BN4Jsf3Fv09LyZaCGcrbScl6kBmSMmnHVX%2B0X7FxZm2pGxHZz3seRiJReqYaNoI3YMsV%2FOn9O525lpDBQB70GpmCWR%2FeLQfaD5Ismoqhii4DqejUvljuZqWpcXYYAyEADJcArwocJI%2BFlV1U3sm9sgBNc0UNVGhcwAL6ZZCB2eC%2FNUUcA6VP2%2FGnb80HYeK0%2FLtx7bCC1mnbMc%2B9JyZryXO&X-Amz-Signature=7ef0ad4c289951d63d4a08c3c567c7f11190364a3f6749bb351de8723858f7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
