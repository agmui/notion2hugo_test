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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVZWKOS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMfcMgFtGfs411IXgjTD%2Fbm4oeBjSbwxMOoJn0Uq5lHgIgPCAaTrsOFT1Q10d7viKU43Dcz5%2BTS1Q5Z0c0ZiFFKoIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLnGuNvdvIjNCMF44SrcA6OWVlMx81hWgvZk%2B3n2fteGS5QhF5s5TXYiWXn7VHKuQBfVC%2Fsz87Pv1%2BrGpfgnGx9UmXEvo0jFDBc3aoUB6yLC1P%2FEYWibl286Usn2xb3MgDMaNyDC7sUumcjeJOODw1bNwef966We9TewZanSCXzA0P87081P5BiSp1HCu%2FVESjpdfLZZy3n5mn3NsyQLtVHtaeb%2BhJ8fHFefbLuqXsgLPCTwCepYufMBCLHoOwhio2q5s3ypaIrvax6K%2FsKe9IC3jaomIBy743UXGWxMkIZLxJ92gBA50rCtLW68erwnTbd6G9UhZ%2F2a%2B3tjHEQsxySMRQNdcOrE32QyqDvcAjVfCd%2BqePcYjdWauxx3%2F8FtBgAQbRnmfp9Xll9PL41MfmJrATTFdNWcj2c5tT5zMeyqP4su3ci46fNu62cQkkNnKcrXftFHYtSyGd9NJxN5TeZihfw6lbMK%2FSiieniI0M24MggPOhhGeQjR8I2oC2gzyMknwHwnORisXLWvxJx9N4Tfa9IroP0ijd9MupL1NCMTirSGWZAZXEiaGTtKUyTElIZFCzo4pLcHzBW%2FhsoarcsnSu4sdJ7AxldKRCh69cYwgrY4xfWnuzVUrQoc4m6xYtyUolV5Lv45vvpzMOfPpr4GOqUB1n6EaY1nzmrmXF3WYyQncUiVeNSxdVgmSlquJJHVuulRyozCdC43iYl8UoNVSdSgAffwknYaWhyLAAzRMoxvAcv1iPbDZYbYj%2F7QT2lInSJzrPipYIqh3DkYc9Een%2FIKy1GRz19jyLoJvspeUMvk85Ir0JUIKzdoO8xHGSkbcAB1Uu4TcMpxDbeYxWrUouFmJBJ%2FeUj1Y1oB30vz3XVBSJ32oeku&X-Amz-Signature=7cbbb9661dc3ff2897da3698d89f3a3417e60b22373ed83b49248805896d91f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVZWKOS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMfcMgFtGfs411IXgjTD%2Fbm4oeBjSbwxMOoJn0Uq5lHgIgPCAaTrsOFT1Q10d7viKU43Dcz5%2BTS1Q5Z0c0ZiFFKoIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLnGuNvdvIjNCMF44SrcA6OWVlMx81hWgvZk%2B3n2fteGS5QhF5s5TXYiWXn7VHKuQBfVC%2Fsz87Pv1%2BrGpfgnGx9UmXEvo0jFDBc3aoUB6yLC1P%2FEYWibl286Usn2xb3MgDMaNyDC7sUumcjeJOODw1bNwef966We9TewZanSCXzA0P87081P5BiSp1HCu%2FVESjpdfLZZy3n5mn3NsyQLtVHtaeb%2BhJ8fHFefbLuqXsgLPCTwCepYufMBCLHoOwhio2q5s3ypaIrvax6K%2FsKe9IC3jaomIBy743UXGWxMkIZLxJ92gBA50rCtLW68erwnTbd6G9UhZ%2F2a%2B3tjHEQsxySMRQNdcOrE32QyqDvcAjVfCd%2BqePcYjdWauxx3%2F8FtBgAQbRnmfp9Xll9PL41MfmJrATTFdNWcj2c5tT5zMeyqP4su3ci46fNu62cQkkNnKcrXftFHYtSyGd9NJxN5TeZihfw6lbMK%2FSiieniI0M24MggPOhhGeQjR8I2oC2gzyMknwHwnORisXLWvxJx9N4Tfa9IroP0ijd9MupL1NCMTirSGWZAZXEiaGTtKUyTElIZFCzo4pLcHzBW%2FhsoarcsnSu4sdJ7AxldKRCh69cYwgrY4xfWnuzVUrQoc4m6xYtyUolV5Lv45vvpzMOfPpr4GOqUB1n6EaY1nzmrmXF3WYyQncUiVeNSxdVgmSlquJJHVuulRyozCdC43iYl8UoNVSdSgAffwknYaWhyLAAzRMoxvAcv1iPbDZYbYj%2F7QT2lInSJzrPipYIqh3DkYc9Een%2FIKy1GRz19jyLoJvspeUMvk85Ir0JUIKzdoO8xHGSkbcAB1Uu4TcMpxDbeYxWrUouFmJBJ%2FeUj1Y1oB30vz3XVBSJ32oeku&X-Amz-Signature=4a3da2635c42a047fafa3c40914fe551f60e9cc25cfbd7d3af52e5764efa51aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MEZJCX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHADIVTvmRvax0ejn5EZilwpytx0ZNmgBuIxlTZLazV%2FAiEAzHLpwsMDJUfhxj12v%2Fa8xb6KNgcOyNE2HT10Qb%2Fj10sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNkGtFaahpxiDljw2CrcA%2BwMl9d4PvLjOec%2BMDGwr%2BNyP5YMIQ5o4d%2BUsK1v7Rom4u0qwKmnKfilX29Uxnqa7mgr7Au08%2F%2Bs9ZbyWImv3eDJdSuQOi%2Fb8wAEqPuN6tqfRjO3PffIQWWGGgJtLf2Hjvtp%2BPdhGMJediNi15K%2FMABoMoo%2BtJ6j9Orv5MWLVFfzTIwzharnC3QiHjGAKtjOiF2O8mZZ7p%2BJK5kjFM1q9GIaY5eGolfmFXMagBjxOtPKt%2Bbfn4rKOmWE4IpifgDJIFtQGZdJeUmhi1Hd%2FfjUPohqCQMpmoyOwE48QjnT4j8p%2BYvkLgZUj9YUOCseuVmJety26v9uJyZbSQT8CA01UfKCPAwHodJp9YGZnhrA9%2FA%2BE4X778zBx70wsVl0hXNBihA5T4zaSPS%2Bs5VSRjv5X1ltR1Rhg%2BVd%2Bq6qMB5Fiq3qWHCgCnRO1gKSln9DnUKHcUsDUti3xvxuX6YUKYz%2BcL47AGSOUvLr49tiGvlqxIoBSRtgUaWiEcFKKoaIjClMp9rklMDOu7gi2jvcxmZPKOPOL0fk4dQMKxlWgASkKynWIMukX812exLRii75tym40Rrh%2BBnTmVSpArUTG8rSBNrTA9%2FIyg2GX7HEZn0336op89%2FcUS0tsRJ075csMInRpr4GOqUBJirnt%2BOyaYz%2B%2FBcfuzSjQrZn%2B9XuUV5lfC3k%2FBy2gVTGp9V%2BJrGIwuN6kQoFojFd2hJTPGpkoI1UltQ50qUeHMf4Z%2FbFeWEoTzasuBkEo8kwdE%2ByiP2pfpwoKiuF8FpKfiKTuokYD03fio%2BzyH5KZUjHGjjoYp%2F9i8MHeheaNZgvt5mYyph9O%2FYkrVKxHWH8ynUQuHfqfHixWuWqy07I3UVvZOvl&X-Amz-Signature=c39dd9285e26072c7f684e0def6fb7d911ae072c9c8d42911dd74de8c69cfc16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPBV4ZU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtlooTa7yAYJmlcaSeaWpSqCp52ed3L1wxObeVUQlrwQIgMcv66vfcjWhPDp4KHEpnW1lTzgl2CwZpYLdcytkldlgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNj1pWoWr26RNPQMFyrcA4%2BLKBQnhCwRmRopbjNefzF751fL4Mh33JetQfwUXhPIlavAuPsmtySTc5PyF4mb8QhzjnZt6z1RSEiSxtEjcQjkFe6%2FA7srzZy0Q4ZKYchPEtiX%2F%2B8z6QWBmxWC%2FoZz5ZpOr3Jd1YmifkbZ4GYTlRZD%2FMBt8ti%2BNCnVbsBY5REdwRSw44EoTjuHMVIU02xSaBqoTlWUktQDLkLup3HX3TatmxjAwlP7YAGogaNdIitftIGIOXwSU8Yo52jbC1qQrXgTtUmBGnrdy5k7dnJlYjoDPc4I4bcU7Rw3WZGSP4VgbDhfo5J4JWKigWYuD8jcDmX4d5sKFSTlYr%2BeWjx4naKaOea%2FZBRXJc%2FIIi6WfkVH4khOAp%2FBRXk5z65plMsgHOF4dydl21NzgQGHIHohHgtiqEWxoK%2BR7TMVwA7Od71LHDZv6F0KuEoAuZ52ztzX3zmzNGoA9i8a9Q4ccYdx86egz8U8UKnAxxMTJwzre%2B7ouQjXwNtPLoYVX1PssTMI1wVqX9AMZLV3%2BkOlXT2x2QkxDMgQPOOMpD9e%2FwwwxIQKJZrzMC7oIZP9ve3%2F8FheFDlxRH%2Foui0%2FtY3MZyqB4MvlGs0Y65hwerw6Ts7Ds7KQUsozws%2FGAuQc0oDoMN7Ppr4GOqUBn8FsZ1bPKgM%2BqfsUH%2FrELgTLbbzTCsR7r%2FyLYncHG4hHewJs8s7RIA0TccXmhds0JvYTJXTfOotidr1554lywovOhW5ULVocH7NpjPPBr%2BXtGKMHFFNoq8MbVrwT5yrt1f8u7eWX7ONVXanfxcLIz%2Fc%2BBm7f%2BTHmKBId1WqF0uPZJVVSAXyEKk00PIcx3ufy0%2BgjLQMSA0V9ja9HZ1hHttImnRFj&X-Amz-Signature=06dc4b5a7654a969f798468e64eccdb8f3faf8eb25cd4bd27f828f42e9c61845&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVZWKOS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMfcMgFtGfs411IXgjTD%2Fbm4oeBjSbwxMOoJn0Uq5lHgIgPCAaTrsOFT1Q10d7viKU43Dcz5%2BTS1Q5Z0c0ZiFFKoIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLnGuNvdvIjNCMF44SrcA6OWVlMx81hWgvZk%2B3n2fteGS5QhF5s5TXYiWXn7VHKuQBfVC%2Fsz87Pv1%2BrGpfgnGx9UmXEvo0jFDBc3aoUB6yLC1P%2FEYWibl286Usn2xb3MgDMaNyDC7sUumcjeJOODw1bNwef966We9TewZanSCXzA0P87081P5BiSp1HCu%2FVESjpdfLZZy3n5mn3NsyQLtVHtaeb%2BhJ8fHFefbLuqXsgLPCTwCepYufMBCLHoOwhio2q5s3ypaIrvax6K%2FsKe9IC3jaomIBy743UXGWxMkIZLxJ92gBA50rCtLW68erwnTbd6G9UhZ%2F2a%2B3tjHEQsxySMRQNdcOrE32QyqDvcAjVfCd%2BqePcYjdWauxx3%2F8FtBgAQbRnmfp9Xll9PL41MfmJrATTFdNWcj2c5tT5zMeyqP4su3ci46fNu62cQkkNnKcrXftFHYtSyGd9NJxN5TeZihfw6lbMK%2FSiieniI0M24MggPOhhGeQjR8I2oC2gzyMknwHwnORisXLWvxJx9N4Tfa9IroP0ijd9MupL1NCMTirSGWZAZXEiaGTtKUyTElIZFCzo4pLcHzBW%2FhsoarcsnSu4sdJ7AxldKRCh69cYwgrY4xfWnuzVUrQoc4m6xYtyUolV5Lv45vvpzMOfPpr4GOqUB1n6EaY1nzmrmXF3WYyQncUiVeNSxdVgmSlquJJHVuulRyozCdC43iYl8UoNVSdSgAffwknYaWhyLAAzRMoxvAcv1iPbDZYbYj%2F7QT2lInSJzrPipYIqh3DkYc9Een%2FIKy1GRz19jyLoJvspeUMvk85Ir0JUIKzdoO8xHGSkbcAB1Uu4TcMpxDbeYxWrUouFmJBJ%2FeUj1Y1oB30vz3XVBSJ32oeku&X-Amz-Signature=dcee753dbac00f4f8a5a32d8ed5ba3e91c69c1c01d5d24c2c239de62b51c85c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
