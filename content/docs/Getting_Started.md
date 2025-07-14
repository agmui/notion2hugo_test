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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463FSWSE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2F3qessPwWMK6S2ZKUFElf6O8lcLDNcHyqnbUFFUvoywIgCiB%2F%2Bti9ONs8ZotAYh79QUOhBX6RDtqG4B1u3XprxLkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBs9hzq6PJIRVTfqMSrcAzBRyAyUIhKzZze7fTi7JS9A6apsPJz9uvOaABsmTUDvKks83zUigCv1X8arv%2FII0r6Yp31hABL%2FF8n8nA5azabenRN0g0xFaoA21AtJIGr%2BQR%2BUGUwLsP6Or4iI4sgsQd2igjtUYSYDxl3RGxEO%2F74y2N0P8q40PHRhbRhXVCMAudLY1XsnArIMHsrErFT8v8Jh0539y3N9m3TAyNkoavnbWGWzSL0Eg0TBu0fIcscVfK3wXebFrzBpJM%2FvSzUoDxBf%2B8dye1x6ecwwRD7rHTSH555MnpYKNhM0a1oXieBzmBRGt2GclnicEY3xGBPBnK1OBXADlIJDqJ7%2FCYGGMmWPb%2By7uAE681F%2Bn%2BXgQFY5zQOAA%2B101M8WDP8X3rp%2FRsqo2sYLsa7iPIfMCcI0EjwCD2hCXzsrFPhkYpvC8b%2FqYCJ9z7jI3Gc3wIfBwzoiuYeJKQkXNKA3g%2BXhlt%2BtiuRh6pJQXvFFAEjpMWOvoiFlGr7FC%2FOKX9wHCs8x%2BZjdchHKt4Zn80oJxHvWn3Fjo4Bygz0UwM%2BIDUnKh%2Faf4SZzTuYGJu6jgOlXSbN9lP%2FpsIOqMal%2FLSlgbRGXVVFDj5yULEO%2BMkVdNiORfF8n9PbzJbeiicEYBL1dNV%2BaMLCj0cMGOqUBe%2BQLrcUiqUTkmGRfk4TWmXv0tfsPlbgMPxJ9gxydo4Jh19IkALkfFxQBe0IUxD5vFXvROBKsX9Voj8whphyn6Pycp6f2gGiBsz2auuJgzhIlxXAimUrXzZq72L5cIdNIPu4w6cpFR3xpI5MyMw90%2BpcVVjiEP06aZJEIrLKVX9TZ8yqDCT%2FIuIhyNa2KT05f0x3wAW3eC7eyw5d1Gtsivmya3Pf4&X-Amz-Signature=2c1911b4e0b0d95e618e678497a06102c4e1770328bb0c7046b6bb8cb705cade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463FSWSE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2F3qessPwWMK6S2ZKUFElf6O8lcLDNcHyqnbUFFUvoywIgCiB%2F%2Bti9ONs8ZotAYh79QUOhBX6RDtqG4B1u3XprxLkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBs9hzq6PJIRVTfqMSrcAzBRyAyUIhKzZze7fTi7JS9A6apsPJz9uvOaABsmTUDvKks83zUigCv1X8arv%2FII0r6Yp31hABL%2FF8n8nA5azabenRN0g0xFaoA21AtJIGr%2BQR%2BUGUwLsP6Or4iI4sgsQd2igjtUYSYDxl3RGxEO%2F74y2N0P8q40PHRhbRhXVCMAudLY1XsnArIMHsrErFT8v8Jh0539y3N9m3TAyNkoavnbWGWzSL0Eg0TBu0fIcscVfK3wXebFrzBpJM%2FvSzUoDxBf%2B8dye1x6ecwwRD7rHTSH555MnpYKNhM0a1oXieBzmBRGt2GclnicEY3xGBPBnK1OBXADlIJDqJ7%2FCYGGMmWPb%2By7uAE681F%2Bn%2BXgQFY5zQOAA%2B101M8WDP8X3rp%2FRsqo2sYLsa7iPIfMCcI0EjwCD2hCXzsrFPhkYpvC8b%2FqYCJ9z7jI3Gc3wIfBwzoiuYeJKQkXNKA3g%2BXhlt%2BtiuRh6pJQXvFFAEjpMWOvoiFlGr7FC%2FOKX9wHCs8x%2BZjdchHKt4Zn80oJxHvWn3Fjo4Bygz0UwM%2BIDUnKh%2Faf4SZzTuYGJu6jgOlXSbN9lP%2FpsIOqMal%2FLSlgbRGXVVFDj5yULEO%2BMkVdNiORfF8n9PbzJbeiicEYBL1dNV%2BaMLCj0cMGOqUBe%2BQLrcUiqUTkmGRfk4TWmXv0tfsPlbgMPxJ9gxydo4Jh19IkALkfFxQBe0IUxD5vFXvROBKsX9Voj8whphyn6Pycp6f2gGiBsz2auuJgzhIlxXAimUrXzZq72L5cIdNIPu4w6cpFR3xpI5MyMw90%2BpcVVjiEP06aZJEIrLKVX9TZ8yqDCT%2FIuIhyNa2KT05f0x3wAW3eC7eyw5d1Gtsivmya3Pf4&X-Amz-Signature=d9839dcf5f495a43d86f4d0465a10ed930aa25bf8ba19a1b64a3aa33e55bc5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463FSWSE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2F3qessPwWMK6S2ZKUFElf6O8lcLDNcHyqnbUFFUvoywIgCiB%2F%2Bti9ONs8ZotAYh79QUOhBX6RDtqG4B1u3XprxLkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBs9hzq6PJIRVTfqMSrcAzBRyAyUIhKzZze7fTi7JS9A6apsPJz9uvOaABsmTUDvKks83zUigCv1X8arv%2FII0r6Yp31hABL%2FF8n8nA5azabenRN0g0xFaoA21AtJIGr%2BQR%2BUGUwLsP6Or4iI4sgsQd2igjtUYSYDxl3RGxEO%2F74y2N0P8q40PHRhbRhXVCMAudLY1XsnArIMHsrErFT8v8Jh0539y3N9m3TAyNkoavnbWGWzSL0Eg0TBu0fIcscVfK3wXebFrzBpJM%2FvSzUoDxBf%2B8dye1x6ecwwRD7rHTSH555MnpYKNhM0a1oXieBzmBRGt2GclnicEY3xGBPBnK1OBXADlIJDqJ7%2FCYGGMmWPb%2By7uAE681F%2Bn%2BXgQFY5zQOAA%2B101M8WDP8X3rp%2FRsqo2sYLsa7iPIfMCcI0EjwCD2hCXzsrFPhkYpvC8b%2FqYCJ9z7jI3Gc3wIfBwzoiuYeJKQkXNKA3g%2BXhlt%2BtiuRh6pJQXvFFAEjpMWOvoiFlGr7FC%2FOKX9wHCs8x%2BZjdchHKt4Zn80oJxHvWn3Fjo4Bygz0UwM%2BIDUnKh%2Faf4SZzTuYGJu6jgOlXSbN9lP%2FpsIOqMal%2FLSlgbRGXVVFDj5yULEO%2BMkVdNiORfF8n9PbzJbeiicEYBL1dNV%2BaMLCj0cMGOqUBe%2BQLrcUiqUTkmGRfk4TWmXv0tfsPlbgMPxJ9gxydo4Jh19IkALkfFxQBe0IUxD5vFXvROBKsX9Voj8whphyn6Pycp6f2gGiBsz2auuJgzhIlxXAimUrXzZq72L5cIdNIPu4w6cpFR3xpI5MyMw90%2BpcVVjiEP06aZJEIrLKVX9TZ8yqDCT%2FIuIhyNa2KT05f0x3wAW3eC7eyw5d1Gtsivmya3Pf4&X-Amz-Signature=e15cfc147aebf12d10c1d90368104aabbc22bd3f8022dd27e929d55fd1187e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3AEK5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGrom6O8Ko%2Be2iYIGCZ2m1Kfe0lMhOvWPXIYrE4vv7c6AiAyncpXO1cjyzrp9ysmXtkPMUR%2Bq53paQFSYDJ%2FXWeDuyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMdfKYE9wQy%2FEpy0JnKtwDlMYfbW4bGAjbQG6Vxhllgo%2BlK864Kw28XHhcWjV1Ot8aGnTR6mnzSVM%2BXHL5vDEeBefR8OXt9CPlhDVIDrsNmetU0sr9YcMSabKZTRV8QlqHCBvJtIlfsqUl7uXptr9TGf4c1EUVW%2FbK96Drh3Lw%2FyysCx%2B4bHjCP8ODk3%2BRmrmPStwLaluT8jwmVyjqwBDYJ0k4cPOhdWSL94mnEnvIo%2BI%2B%2BOBe62AoXnQs7FrYVtQ3SiHe6%2BLuyayKEk29cnHYUvHUTWPpIV3zTEaU5sSGBwM0EKW3SrAAt4uB9jIHFaqRzU3vGKM5DiXKdcPCFw2vUaEB0xwnEgSc7MzGRo93nSb7Q%2Bw5A%2Bcb6BRvQaTpON4HSZOoVO9kSu6kR2q8k1qYtWwpr33wE2G2vnv6tUwVCWPcrW9wutG2mRmMZFMxTWywMUVyfdwx4ESEgUAGeaBCd3M9YhwOp8sJCGnSJolMu8%2FuseTe6lVOAIojR7okDTH4YFNMAX9j2CxykF70YyJv7GfrCIi5wZqwa4atHOmpKHSebchsWYN%2Ftw%2FO7cLwVwfZj5Phm0Uf3u0d93MHTayr2FByGgl6%2FmwfYlpNJllPsAJd5OuGr71h689acnIE7kJQl7g7k5gllvsc3Ncwh6PRwwY6pgHs%2FYkxKme9Ei5sU3jkQxupTNdUNIz01INyJLxpCkaNBlOBXy3mdaX9FhOPINVNQlGXDQLvnBhA0lKzPGenLNxfjOOatClHgYSQl3qdUulGbHWQgYPrMRQrLHCp8H7wO5phWJUH02X%2BnSw5f1hUa89%2BDHq0wM2%2FE4SSS5E5trRLZLIFba3%2FCuT3oSw6FrNHkSANO1M4%2BWdFF0bP4fhQbgPThQcvyYOo&X-Amz-Signature=e8bfe7e8c94f04c15fc31c824f5f9b9d20f30a5a72342b4517937ea9d0970a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPHYI6G%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIClqsBXQ11pXzT7FxfkPCpmCKBPqXMU3TklCxtNOyWlRAiEAze%2FUyDhO%2BXW%2Fn0uO%2ForO3GP4z2zjwDEV7A%2BM9TfV5L0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDC0g1L58eNab5RoltSrcA06wKE7RjxmyO1Zos5VOL%2FYHq2HbJ%2BX8hdUDIbq%2BgW3EtKnvRpfMiI0bYHJDXmZiK%2FrJThXRhbGS36cMUp2XdU9yhaZmjoWWw9nIFfSk3LC1ml%2F%2BuaXp6LpeaO8LG8saEpw5BJw28WAi3k2hljqns3rnalG9cRJU1GiNPCbrW%2FCzZKRrKsm4dKoXDIPFZ%2BJ61O69jZdGAW1BzJkAMaK0RBZP0E6uXIVkxGF4QxhKl0PfDMhRm0RIGdZRgMm2WWGyiuWUpkveDSRe%2B9yscB1FOV2feQlddR9noEbI79GI0wzev4%2BZfA8l%2F5iKU6a0iGu0ggs6ZevkTQO96zkfllbGoCxl50GN4dRj4qjxnSi0nnJZ%2F0kF7gArQP61GWVPsp34nu0fhf7URtKQvGYzndhgvkaaVgaWw7NGrZAprCJQzTr9wBqf1eQVdJMr%2BId%2F1I6nF2OAY2bVAfkllNtcL3T5d7Z1sXrP2DmVn6RyiVto7f%2Bi3q7eb3c49HycXfgdCYJqE8H%2Byc85k5lrO2L3gu%2FhTYRKkV4eS1hdAYZp6cvX5boHS1hZYcKkLQGEqfKH%2FcZmSBPMfNgc6LQHxDZcqfxKBF3DDRioj8lxBz%2BLVYQZMXKmPpkIoM2Yppk4pNmZMPmh0cMGOqUB5c9QiD%2BSB%2BNOC5MZDGc0gih%2B%2F%2BXa8qnv%2B%2BqCxVHADtrmW2Ya7FPX3P4u23zeD5heAnlWipbeJhPnuSOLRTTOOG1%2Bn0yZUBsDnyJ6z3en7yXERPGieYBR7DRHY9KZ76Ov4RMy9W8DMxQgxbUhRdlaVWlDhP2pJHmfJ%2FORKt7BOl%2FzH8RiFkq%2FMcJkdXrUwnuLG6YGrmM4WCb1NzEzAu2KlZ2j2SwA&X-Amz-Signature=4a3780db7c8fd2a372f65fb96310a237c8f52db3ae75e702e47cecd13f70d4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463FSWSE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2F3qessPwWMK6S2ZKUFElf6O8lcLDNcHyqnbUFFUvoywIgCiB%2F%2Bti9ONs8ZotAYh79QUOhBX6RDtqG4B1u3XprxLkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBs9hzq6PJIRVTfqMSrcAzBRyAyUIhKzZze7fTi7JS9A6apsPJz9uvOaABsmTUDvKks83zUigCv1X8arv%2FII0r6Yp31hABL%2FF8n8nA5azabenRN0g0xFaoA21AtJIGr%2BQR%2BUGUwLsP6Or4iI4sgsQd2igjtUYSYDxl3RGxEO%2F74y2N0P8q40PHRhbRhXVCMAudLY1XsnArIMHsrErFT8v8Jh0539y3N9m3TAyNkoavnbWGWzSL0Eg0TBu0fIcscVfK3wXebFrzBpJM%2FvSzUoDxBf%2B8dye1x6ecwwRD7rHTSH555MnpYKNhM0a1oXieBzmBRGt2GclnicEY3xGBPBnK1OBXADlIJDqJ7%2FCYGGMmWPb%2By7uAE681F%2Bn%2BXgQFY5zQOAA%2B101M8WDP8X3rp%2FRsqo2sYLsa7iPIfMCcI0EjwCD2hCXzsrFPhkYpvC8b%2FqYCJ9z7jI3Gc3wIfBwzoiuYeJKQkXNKA3g%2BXhlt%2BtiuRh6pJQXvFFAEjpMWOvoiFlGr7FC%2FOKX9wHCs8x%2BZjdchHKt4Zn80oJxHvWn3Fjo4Bygz0UwM%2BIDUnKh%2Faf4SZzTuYGJu6jgOlXSbN9lP%2FpsIOqMal%2FLSlgbRGXVVFDj5yULEO%2BMkVdNiORfF8n9PbzJbeiicEYBL1dNV%2BaMLCj0cMGOqUBe%2BQLrcUiqUTkmGRfk4TWmXv0tfsPlbgMPxJ9gxydo4Jh19IkALkfFxQBe0IUxD5vFXvROBKsX9Voj8whphyn6Pycp6f2gGiBsz2auuJgzhIlxXAimUrXzZq72L5cIdNIPu4w6cpFR3xpI5MyMw90%2BpcVVjiEP06aZJEIrLKVX9TZ8yqDCT%2FIuIhyNa2KT05f0x3wAW3eC7eyw5d1Gtsivmya3Pf4&X-Amz-Signature=dfd2bff48fba7a9ab289be20e7f39af591a7bbf698c34e63e8a5a5a32758007d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
