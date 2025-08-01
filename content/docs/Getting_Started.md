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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAW25WE4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMm3HAnofYvYm6WbsaAU5BHGnsDWoZ4eFzq2v4xRVxKgIhAKt7j4heXIJeSTPUxN%2Bc3Fw9xlIhLe1Wu8lEZTUL43xMKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBdznOdPQrEgtgafsq3AOb5CL%2FqP%2FOJqQkOiu2KrIexQfW0MOt%2BwExY1pi%2FTiR08%2FlHr9D%2FNhxJ1XZB9ecUKnNQj871w5ofuORDZToPckrR3eRWw37Lk05DoqW4jV30Bd0UmPE8KY7TAYC4A3j%2FvmPTHL2QwGt1rXyH5vfet2RjiVKro8qOfMofUnCh82znvw8Ki3Nm61VlzJKXnWWTeOQ1TCQQGle2%2BnlaJvTo0s3MNSjsXlQBjLABcIml2NUxarG%2B%2FBpzph5lRPC9fQOielhm8Y1OimBKRYxJTvyWj9j9J0Y%2FVLCDPGwlCoSmsRpcVMjZjxkHYZESfDIv6zNIRG8CuiFISvduILEi443gfjkdf1%2BtInJSokqLwrUMZ3tqAWzLr9keltSF7sH4SmpdA7i7yIKbKywXD0oTIt9zXgMHn4C8C7qrbnY2Mh1sBe2gmn%2BRFY58f0aCF70rT%2B4gMoyFCEfVr3IYrwrlcRuwV%2F228OLt2Bn3IEc0XEnnQWwIiEFC51fZyDOH6Pm%2BNYIEgk50zR5J96snotp0yCGLniT9PTAu5SEU0bIyxnCxp6zUiBJRvG91FRwGhUvsJsvvSuMH1RcGdi988RbTlOmfkbDVe02CeJKVv%2BE%2BkrbiA%2B44oAGtAseF88wKpUjGDDEyrDEBjqkATiOOH1J6hD%2F%2B%2FeCeLJUvFW5vQK4bwp6TGy7U6BJtck0RTsbwp%2BF0%2BgvbCVdJaO2Q6njdzAtx8m5rAjB%2Fu%2Bvl1AobyEpJ%2FuM1rjQHDtDRLpWUdC36xxRYi7Jh2lXDCXhgDdciR1KUUoi930nXkzShqff75p1qbKMgpXJuMJ%2BCxrqyRHYjSrE7UufR9tzKjRsIoR43N0xI0FAn69UoCoQkCsTCbYo&X-Amz-Signature=0e5c039fe43b42dd28ca269f84c5d459d3411443b87c5dd5ba79b9611e92029e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAW25WE4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMm3HAnofYvYm6WbsaAU5BHGnsDWoZ4eFzq2v4xRVxKgIhAKt7j4heXIJeSTPUxN%2Bc3Fw9xlIhLe1Wu8lEZTUL43xMKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBdznOdPQrEgtgafsq3AOb5CL%2FqP%2FOJqQkOiu2KrIexQfW0MOt%2BwExY1pi%2FTiR08%2FlHr9D%2FNhxJ1XZB9ecUKnNQj871w5ofuORDZToPckrR3eRWw37Lk05DoqW4jV30Bd0UmPE8KY7TAYC4A3j%2FvmPTHL2QwGt1rXyH5vfet2RjiVKro8qOfMofUnCh82znvw8Ki3Nm61VlzJKXnWWTeOQ1TCQQGle2%2BnlaJvTo0s3MNSjsXlQBjLABcIml2NUxarG%2B%2FBpzph5lRPC9fQOielhm8Y1OimBKRYxJTvyWj9j9J0Y%2FVLCDPGwlCoSmsRpcVMjZjxkHYZESfDIv6zNIRG8CuiFISvduILEi443gfjkdf1%2BtInJSokqLwrUMZ3tqAWzLr9keltSF7sH4SmpdA7i7yIKbKywXD0oTIt9zXgMHn4C8C7qrbnY2Mh1sBe2gmn%2BRFY58f0aCF70rT%2B4gMoyFCEfVr3IYrwrlcRuwV%2F228OLt2Bn3IEc0XEnnQWwIiEFC51fZyDOH6Pm%2BNYIEgk50zR5J96snotp0yCGLniT9PTAu5SEU0bIyxnCxp6zUiBJRvG91FRwGhUvsJsvvSuMH1RcGdi988RbTlOmfkbDVe02CeJKVv%2BE%2BkrbiA%2B44oAGtAseF88wKpUjGDDEyrDEBjqkATiOOH1J6hD%2F%2B%2FeCeLJUvFW5vQK4bwp6TGy7U6BJtck0RTsbwp%2BF0%2BgvbCVdJaO2Q6njdzAtx8m5rAjB%2Fu%2Bvl1AobyEpJ%2FuM1rjQHDtDRLpWUdC36xxRYi7Jh2lXDCXhgDdciR1KUUoi930nXkzShqff75p1qbKMgpXJuMJ%2BCxrqyRHYjSrE7UufR9tzKjRsIoR43N0xI0FAn69UoCoQkCsTCbYo&X-Amz-Signature=19940ecc53d791079a9a36e1d80dac8ae1f4f54d75381db4b4e2e0f3a29042ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAW25WE4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMm3HAnofYvYm6WbsaAU5BHGnsDWoZ4eFzq2v4xRVxKgIhAKt7j4heXIJeSTPUxN%2Bc3Fw9xlIhLe1Wu8lEZTUL43xMKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBdznOdPQrEgtgafsq3AOb5CL%2FqP%2FOJqQkOiu2KrIexQfW0MOt%2BwExY1pi%2FTiR08%2FlHr9D%2FNhxJ1XZB9ecUKnNQj871w5ofuORDZToPckrR3eRWw37Lk05DoqW4jV30Bd0UmPE8KY7TAYC4A3j%2FvmPTHL2QwGt1rXyH5vfet2RjiVKro8qOfMofUnCh82znvw8Ki3Nm61VlzJKXnWWTeOQ1TCQQGle2%2BnlaJvTo0s3MNSjsXlQBjLABcIml2NUxarG%2B%2FBpzph5lRPC9fQOielhm8Y1OimBKRYxJTvyWj9j9J0Y%2FVLCDPGwlCoSmsRpcVMjZjxkHYZESfDIv6zNIRG8CuiFISvduILEi443gfjkdf1%2BtInJSokqLwrUMZ3tqAWzLr9keltSF7sH4SmpdA7i7yIKbKywXD0oTIt9zXgMHn4C8C7qrbnY2Mh1sBe2gmn%2BRFY58f0aCF70rT%2B4gMoyFCEfVr3IYrwrlcRuwV%2F228OLt2Bn3IEc0XEnnQWwIiEFC51fZyDOH6Pm%2BNYIEgk50zR5J96snotp0yCGLniT9PTAu5SEU0bIyxnCxp6zUiBJRvG91FRwGhUvsJsvvSuMH1RcGdi988RbTlOmfkbDVe02CeJKVv%2BE%2BkrbiA%2B44oAGtAseF88wKpUjGDDEyrDEBjqkATiOOH1J6hD%2F%2B%2FeCeLJUvFW5vQK4bwp6TGy7U6BJtck0RTsbwp%2BF0%2BgvbCVdJaO2Q6njdzAtx8m5rAjB%2Fu%2Bvl1AobyEpJ%2FuM1rjQHDtDRLpWUdC36xxRYi7Jh2lXDCXhgDdciR1KUUoi930nXkzShqff75p1qbKMgpXJuMJ%2BCxrqyRHYjSrE7UufR9tzKjRsIoR43N0xI0FAn69UoCoQkCsTCbYo&X-Amz-Signature=154799d7d56bf5de91f97c50bef14ba861d89a440fe675fa25838931a411e2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMF7PKD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7JKR8IpX1cncGLV0WqEVuwIDdyMeIgce%2BoenrPNnMhAIgJUfD86HbZBb1fDPzcrmVqPixu2qpP2sDP9vbDvKc5%2F8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeTg5QRYYw2HpsbmCrcA4U7voHO6QcDlJ8Na%2BIxrGcobzjmDnOtz%2Bllsv3PiTVA6GSe2%2BwJ41XM2wuClxnJL4Q9Vt8gDR9bgku8IbvjejbRFByPBN4BTppXbATcOVk8HnLkw%2Fm3AN%2BMzAh2BZ3j1a%2FbFMIU7G7Tmo%2BNF747IFcvXfoIsxnyCf0o%2BMv6ECXB17a775%2Bi6Qfc1Vl8a9XKUmSEYYypboA836209Yl0ntiaUZcBumhfTj2BoXD1tYpL2WMbV%2B31XUhXNJ7nTww1%2FcfATfdnsYkBhnIvVeEQwoCDylT3U9oXX7IupCjePyed4SShFD9IyO7Vl4DK%2FMWfjYNre9xwMZNFhSDLuyTaBwWnzY5iyMVjjSOL%2BC2exvytuuAAPLZS8VFNaHqHuzUHDZ1BbbR0kBQin3M4bNDG1YYOL7ipAm%2F9CP%2BctY562MmB9XLgPVK%2B6ThoFRdsDsUXKFiKqO8VO%2Fm2K84j0TADC%2B%2Bq42Bk8hIAxGqwnAYIkJFroAyPELdROzs2a5VXCZyxbxvdU8EURvBX2wglUrIPVlYo5R%2FGrmMRs6HVllu8%2Bh3cCRUmMTAa9WhsE%2Fxqs8XcI6M8TgXhgeBX2QUoZm0pUVBNCWXVzcOUF1cXqtcfrAm26dJ5UnZZLpLg98duMLHKsMQGOqUBpjHu%2FfbTvSVTef5RWWeEHCeySgEX6ufPFApmaPn1gHzi0ovgufFdZ77%2FK5zxAKUDBsZ4KusUut6hr10FqPweFkgC%2FzJDOu8%2BBknbwSeDVYi78pXnoCve1hKetDze0Gt%2FnITU2TKmJh3YuaZNMXQrwM4vc01Zouqrkp%2F7s61pGuni%2BhPrcLrQkuBYH8deB57m4C73pzyznbOh8Vvfg%2BTaaCB6wZqf&X-Amz-Signature=643af2efb79c81d3faaf3dfc1d249dc450d33f9c0e44daa50a2a6ba9a8c86a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOJAB7N%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSjPBl5JEQEeFAjEx5m3JQcS0Q3z6EsQVAMbZ03WrxcwIgHZYhPl1%2Fpb7jnbvqIyRdr52JhgQh%2BmCv4Wp%2BELo1XmwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFepBppSp5paSEEmSircAzAEfppDUzM1QMjGRvVuHgCbEOjSoABsd6QQqS0ASIfn3AkuJs3Xxn0Yd4sJsNYj1uLu5iJyicv%2BQgIFvtALPCM0X8h0vmlzljNLKVo31cFsyz5SqdAOupb0sJ7duqTNJtOJUtj39Y8E2yoJaUBS6j%2BRItEhRa4tc5gS6ijK2fzdG4BPtfedSExeKPdK31J4%2FXO72qfOodmy6hBtnoLSHhpnf22MZpjjsUShnaSyQp8uExVRIO6ccrrQaSApqAWaT5TBzc%2B%2Fgfpt8LRqxjnzqsBYYOPA7FqJU9wNSfPFTalgVlPl%2FZi7Y47N1abYbpO2iaM3gcR%2BvW0mKHwwHjza3rldFGPaAvPuYOP%2BHh%2BqKjA1WpgY4Fx57t2thKQxRqTIxTC1%2Fl2v%2BKZr03gt79raMoMJJ53T8qFDyx11k7jXlNr3UlTko1rrX5znPmlENL%2Bpx7zDmylxMZSckWlMvrF8ilFiv3ubvRWPEwPwseAGz1%2FJ2IGsV6XQ3TK1SjE6L4DMwaQcce5DdUgNhh88E5GHF0A0aE%2BUuYlUfgMThT5qEbdV6KnuDRUZ%2Fdf7wSlalelOUFkWOaKxqRkD%2BcqOBf%2BeySVWmQ%2F8g5OYoFFkXandvx1Kwy8wVN8E13JEpa62MJnLsMQGOqUBb59E9SZ2osUZb7vQ2xJ3%2BDXeYxvXUEDYmvYYC9VRoDKjZVmMUPsg4HvnRzZGr4iB8LSh64STUZe5QPl%2BOI0Xaf3eTcYSoGsTqJkLomIlYnSMaixzLZrvSnKRzy9PhRkv2T3621UpZFd2nt52bTc23YxH2RxkvMionIbRqOEsdxl34wnEiaokYizt8g0zjrI4LAQwmzlJWDvurB9TqHOTDWK%2F0wkp&X-Amz-Signature=b36d6e1131552a5b0f01f11c5fa9d8d385eb01cf4dc5148691ef30b7999669fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAW25WE4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMm3HAnofYvYm6WbsaAU5BHGnsDWoZ4eFzq2v4xRVxKgIhAKt7j4heXIJeSTPUxN%2Bc3Fw9xlIhLe1Wu8lEZTUL43xMKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBdznOdPQrEgtgafsq3AOb5CL%2FqP%2FOJqQkOiu2KrIexQfW0MOt%2BwExY1pi%2FTiR08%2FlHr9D%2FNhxJ1XZB9ecUKnNQj871w5ofuORDZToPckrR3eRWw37Lk05DoqW4jV30Bd0UmPE8KY7TAYC4A3j%2FvmPTHL2QwGt1rXyH5vfet2RjiVKro8qOfMofUnCh82znvw8Ki3Nm61VlzJKXnWWTeOQ1TCQQGle2%2BnlaJvTo0s3MNSjsXlQBjLABcIml2NUxarG%2B%2FBpzph5lRPC9fQOielhm8Y1OimBKRYxJTvyWj9j9J0Y%2FVLCDPGwlCoSmsRpcVMjZjxkHYZESfDIv6zNIRG8CuiFISvduILEi443gfjkdf1%2BtInJSokqLwrUMZ3tqAWzLr9keltSF7sH4SmpdA7i7yIKbKywXD0oTIt9zXgMHn4C8C7qrbnY2Mh1sBe2gmn%2BRFY58f0aCF70rT%2B4gMoyFCEfVr3IYrwrlcRuwV%2F228OLt2Bn3IEc0XEnnQWwIiEFC51fZyDOH6Pm%2BNYIEgk50zR5J96snotp0yCGLniT9PTAu5SEU0bIyxnCxp6zUiBJRvG91FRwGhUvsJsvvSuMH1RcGdi988RbTlOmfkbDVe02CeJKVv%2BE%2BkrbiA%2B44oAGtAseF88wKpUjGDDEyrDEBjqkATiOOH1J6hD%2F%2B%2FeCeLJUvFW5vQK4bwp6TGy7U6BJtck0RTsbwp%2BF0%2BgvbCVdJaO2Q6njdzAtx8m5rAjB%2Fu%2Bvl1AobyEpJ%2FuM1rjQHDtDRLpWUdC36xxRYi7Jh2lXDCXhgDdciR1KUUoi930nXkzShqff75p1qbKMgpXJuMJ%2BCxrqyRHYjSrE7UufR9tzKjRsIoR43N0xI0FAn69UoCoQkCsTCbYo&X-Amz-Signature=0440f2eaaa8c3be9f9fa8be5d0ffde4b554ee44f2fb8340e2cd7045a4f227334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
