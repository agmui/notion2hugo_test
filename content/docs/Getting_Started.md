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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI52US%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5XE%2BAbzIX%2BlsGuSX2ESPidTLJqo2r%2FB%2BKXtSoQW%2BAfgIgULzCBgHbK7BAjLN5KINoKoB%2Fh9S%2FsWy%2B4YKe8fRvAJQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuy7URxFctozOJ8TSrcA6A0ZTWQHuUL3eUjH%2BitJ%2BkPCCujIQ6H%2FdVCoRNqpqgxHv72LYSUmc3duuD2BfU0qkKAI8YAesVY4d9dELyX4%2FHAR740ZC039wfYHhB%2BGi8gyuyqd0Hoiv7VVAeWc2SXHxJuxUKuOIUNrx0hrKHm1IOgKZDwTlgFVJbYkZxPiFgDiqioenNSjdt52bK6VedsR9jwpbvzTkhYqG80c3MhJEQByDhVwJi53whwCpR2mQyViH7Zz7IEVCsb2tiqKK6mASO6%2B2GtDYlT8QhDV8q6WWvIwgisiDVZOCvPVLFh6UMAZBK%2FLOGzHyGsTfRf%2BrSXtz5II4jr2Xnf4BJ6mvFqK3SP62yNPXuHBn6NrvnHez5BqrYb8f%2F85udJuGQideaKDp48iUhlaHsb%2FiqZ%2FBis3bEmdjfqsWqHNbuDR4Y8Kw3GA6BdijIwoZideScxJ%2BQh508nx0wiVvlWR1CCJx2ft2lYgUAdojyxUm7OglxxP2XXhko6PIk6AvJr9Ql7GsC8tPfmtXstjyAQQY%2BucxEiR457FeuZzD7lRuivGJ%2B2CTCp1oIMFkObL%2Bm2r2ml%2F3RSDHxtkLmG%2B0sn6%2F%2FLQzQHJ%2FaxN82CPncwHulP8kuCirj%2Fg73Ye%2BgqMALsNOEfMOOBkcAGOqUBgKdsK4RVy%2FpodhIXIj5fHHzcf7MX6CC%2BMZ3oaMlHVhqFkvmr0kNTvIt4mOu7tHdWVIAJsh6JJCeilhoOjpiwyWDba%2FQwXSOZzWMccjq%2FhKx9dVij3HDNh5JDYpbyNWYFMQn%2Bo%2B62GlarByHIeBF2NtSK0fuABuHUW9g1Gb0u%2FtgFadZ1sgv5gDMTSN6HIUD8eTy8SdfviTUcIic70NFHJgCNHmo9&X-Amz-Signature=443bdf2fe7bce4842bd33f265179c64ed244aba4c570a9e082e007960bc400d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI52US%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5XE%2BAbzIX%2BlsGuSX2ESPidTLJqo2r%2FB%2BKXtSoQW%2BAfgIgULzCBgHbK7BAjLN5KINoKoB%2Fh9S%2FsWy%2B4YKe8fRvAJQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuy7URxFctozOJ8TSrcA6A0ZTWQHuUL3eUjH%2BitJ%2BkPCCujIQ6H%2FdVCoRNqpqgxHv72LYSUmc3duuD2BfU0qkKAI8YAesVY4d9dELyX4%2FHAR740ZC039wfYHhB%2BGi8gyuyqd0Hoiv7VVAeWc2SXHxJuxUKuOIUNrx0hrKHm1IOgKZDwTlgFVJbYkZxPiFgDiqioenNSjdt52bK6VedsR9jwpbvzTkhYqG80c3MhJEQByDhVwJi53whwCpR2mQyViH7Zz7IEVCsb2tiqKK6mASO6%2B2GtDYlT8QhDV8q6WWvIwgisiDVZOCvPVLFh6UMAZBK%2FLOGzHyGsTfRf%2BrSXtz5II4jr2Xnf4BJ6mvFqK3SP62yNPXuHBn6NrvnHez5BqrYb8f%2F85udJuGQideaKDp48iUhlaHsb%2FiqZ%2FBis3bEmdjfqsWqHNbuDR4Y8Kw3GA6BdijIwoZideScxJ%2BQh508nx0wiVvlWR1CCJx2ft2lYgUAdojyxUm7OglxxP2XXhko6PIk6AvJr9Ql7GsC8tPfmtXstjyAQQY%2BucxEiR457FeuZzD7lRuivGJ%2B2CTCp1oIMFkObL%2Bm2r2ml%2F3RSDHxtkLmG%2B0sn6%2F%2FLQzQHJ%2FaxN82CPncwHulP8kuCirj%2Fg73Ye%2BgqMALsNOEfMOOBkcAGOqUBgKdsK4RVy%2FpodhIXIj5fHHzcf7MX6CC%2BMZ3oaMlHVhqFkvmr0kNTvIt4mOu7tHdWVIAJsh6JJCeilhoOjpiwyWDba%2FQwXSOZzWMccjq%2FhKx9dVij3HDNh5JDYpbyNWYFMQn%2Bo%2B62GlarByHIeBF2NtSK0fuABuHUW9g1Gb0u%2FtgFadZ1sgv5gDMTSN6HIUD8eTy8SdfviTUcIic70NFHJgCNHmo9&X-Amz-Signature=4a93f579e83b540cdc0355c0bc36a498711904789af5b319c58f799cd82f8a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB4YK2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDi8QeKsMDJdY6jzUbgnTG92vZ4w91KJCn0u95HYSAZPwIhAOaKJCy3Akw4BT70J3M5y87xy3PTXj5ZqtuKsvdqH2jNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYWNneWUf9trASEksq3AM%2BbOz5rGjEKavrt8NvPZwXGR%2Fs2XQhZBwj3UMvqcOzVRbMfGWdPOD4aSDtF0EcptFD02a9xNwNHP52GNdMTb%2BOLQcvfKa0p1WZwRse3OhiUw6BGamdTUruJ6EFe53ysFwunrRG78GFEnfS7EIBvODxeL%2BGVD3rIiM03D6ztFVzBWd4v0mSwW86UXsEkGCd4RG8sASl2Pi345HOd%2Bkp3yV6IJI2nzXs%2BU6c12%2FZ0iNdKyOFcmG3mRkD63W7qSdRGeaDF5Bx%2BFXUw2MdZLydzG7pAwtjXk7azZAGNHe5WrBoGjSUDH0H8I1dVwfQLJoNG%2FLuDn4Mqp8D4TJo9brwN9c8HT9UNJ0fgMiQpXyLj%2Fp7bUurHi8%2Bm3aF%2BqJV3Ytn9w5c8Fr%2F%2Fz93nhNkEDEj3%2BjF3M%2FyqPT9P7CE%2FlmGW26Sl1p7MO9Yak6HFU8GMPPUjlJ3ZEiloaJb70sI7C2PphAtp4BJd27IRlgt5n%2FLt7ySnHBo4o39HlL16kDmk6KXU4ssDyo%2FVELf%2Bam7JP2zzNPiX8nIAgiP5hzs%2FjuzZz73XdA%2FChBnSirZnHnQi82G9m7chIsReIbqELs5lxXockkWTAjAwrHDnWh9TpE1HC%2BEMj3IAiXqhK157efCKjDUgZHABjqkAbkgHIk8VVnXZ5771ZBD1GazRZH5dS7c3pbwWIUfqui41Kx6CZ5J40Kbvjz6y40ToYmccm6y%2FJv%2BJae%2FUGjBmE9wqlyT2fxwQveFfPBiLrTtEGtONvs%2BiSc2altWNN2JRipcG%2FQHVLosWsvIjOqV8I0ZR2nTC6WcZ063sJ64nqnPnDUuWTzh8DJ%2Fby%2F1Hocd%2Bs9iJgDELnEfUMP7UDUOA%2BeM191P&X-Amz-Signature=9e21eafaf8fb71d17b9338a99002786e4790088e222ce9a91e6751acb2905c20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HQ2RJV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDeE%2B5X7u6VwbHM4SdFjALjve0tUrn5vxXM%2B1cyCQ8cEQIhAN9jKv8519Ub4pQ91RbgyzmBLNgvumArk8kzoPAuJj1tKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweaA50Wj6iM9kmvO8q3AP41DoxXCoOTthrL3G0Gbmevu46hy3ZYWQQC1B1n4x93Mvn8tWL2h7BboiAmi7sDkol6xvNBtIlM0F9pY9QM9jLtuqHua1j6o%2BqFArnn7QDm6OxopPXyG1wIV5RWOsAVLfXbGBGnHJcOx8u5exUufaX7KGB26MFkf3PndxJAjfyey4XBemJOao6EHcUfl2PJ74C2hkhXEQsne5MEg1UtFLhLTHfEOby%2B9UJ1c2RI6pDzNHkK9mnOLsOmcac9S2IBGlnohNPU6Sj7h6p5zuNJfPX7X6%2BDsi4xGAc2uCt%2BDgewrnYMFIsE3z4u40Prm%2FvF2cDaZJEszu86zY17CAbRV7YqOOWq7twd5gpJnDibq10bU5Su2Fa6S8a7WcNjOfIvKIbMoUcbPrkVW1ws1Hg%2Be82PJb3lrTFVzfmHbL4k4SegnK7j8kvzzb%2FO1hTttWQBWVIFCjAC4YW8cLTMfWHrHJnCEFb6SJWXSkk5xb04flxaEM3M5%2Fa8%2B13uGfQtz5LoykadDMmMmKlEufh6d4WM8sDkEs9xvdesEz43YShDnqtkE076hqR2leLnTxKiGvwAJU3B0hqEFy%2FMLYtyeE98m3M8POY7UYZOPu4tZuZpK4I%2F5znWlitQe7d5%2FYrfzD4gZHABjqkAXWOIu4V1OrkB1SNPpcaNxgwlrhzNrDkwQ8NBiP6jY2FaAlQm4TUhC%2FtuPuSrO3vXRtU0n%2B5V5JSku32tHLfvO3n%2FaMhaS6s8h8s0AZgfO9Mv0i4cUPsI4bXay8VvhSJgEzagVv1AwZ8TDOJ9%2BGZVAhNqCNIi2Dln6OsI1YuhXmzTK9zC4gUxovbYP1X9lz8i0QhALb34aF7GGOhUDF2wquTPhNp&X-Amz-Signature=4d806656f87513bae038a8cecb5a0b1f11478549dc2b74eab404ca700b168858&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI52US%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5XE%2BAbzIX%2BlsGuSX2ESPidTLJqo2r%2FB%2BKXtSoQW%2BAfgIgULzCBgHbK7BAjLN5KINoKoB%2Fh9S%2FsWy%2B4YKe8fRvAJQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuy7URxFctozOJ8TSrcA6A0ZTWQHuUL3eUjH%2BitJ%2BkPCCujIQ6H%2FdVCoRNqpqgxHv72LYSUmc3duuD2BfU0qkKAI8YAesVY4d9dELyX4%2FHAR740ZC039wfYHhB%2BGi8gyuyqd0Hoiv7VVAeWc2SXHxJuxUKuOIUNrx0hrKHm1IOgKZDwTlgFVJbYkZxPiFgDiqioenNSjdt52bK6VedsR9jwpbvzTkhYqG80c3MhJEQByDhVwJi53whwCpR2mQyViH7Zz7IEVCsb2tiqKK6mASO6%2B2GtDYlT8QhDV8q6WWvIwgisiDVZOCvPVLFh6UMAZBK%2FLOGzHyGsTfRf%2BrSXtz5II4jr2Xnf4BJ6mvFqK3SP62yNPXuHBn6NrvnHez5BqrYb8f%2F85udJuGQideaKDp48iUhlaHsb%2FiqZ%2FBis3bEmdjfqsWqHNbuDR4Y8Kw3GA6BdijIwoZideScxJ%2BQh508nx0wiVvlWR1CCJx2ft2lYgUAdojyxUm7OglxxP2XXhko6PIk6AvJr9Ql7GsC8tPfmtXstjyAQQY%2BucxEiR457FeuZzD7lRuivGJ%2B2CTCp1oIMFkObL%2Bm2r2ml%2F3RSDHxtkLmG%2B0sn6%2F%2FLQzQHJ%2FaxN82CPncwHulP8kuCirj%2Fg73Ye%2BgqMALsNOEfMOOBkcAGOqUBgKdsK4RVy%2FpodhIXIj5fHHzcf7MX6CC%2BMZ3oaMlHVhqFkvmr0kNTvIt4mOu7tHdWVIAJsh6JJCeilhoOjpiwyWDba%2FQwXSOZzWMccjq%2FhKx9dVij3HDNh5JDYpbyNWYFMQn%2Bo%2B62GlarByHIeBF2NtSK0fuABuHUW9g1Gb0u%2FtgFadZ1sgv5gDMTSN6HIUD8eTy8SdfviTUcIic70NFHJgCNHmo9&X-Amz-Signature=32fbeaa8c64471ecda518129d8547fc3e4d9dcbea3f6e3e71905b2ef73f04838&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
