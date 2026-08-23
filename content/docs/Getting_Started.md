---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZX4LFD%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCAng%2BIG9sqjF6GCwjCmdltoB9bv2VKpcrj0NfxX48MJwIgVqVs2pPQ2a2n%2FK2sOXLp4Sm3NDj0A1KXNzjOKjqJDm4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSXqB153lg4GTcItCrcA%2BScmtD6UmVMBHHyxHUufhJa09XDJ39UZy9Dedkq2m2CExGrMkJ0Y5p%2FPnxOdxWr%2FrTElO57gbCYQ0l44C2flx0%2BhSiFfO6FtX6yaiPqb2zYyxsNCGrB85vXEvhb%2BsWMSt%2FcO73Ks%2BEQKFZr%2F1TE4h%2B8LBf%2BIU68a7n21aqX2uh%2FsfU5qibg9PNcQCQAH81tin2Xu%2F72L2fLBssKFKuzNhV%2Bl4EqERYaSfV%2Ff8By3MFtW%2BX8LpDqDm2P7pgqxfIz0e6PlkAOab1GQjqjQV4saWY5dcZcKAyjLddzDu1gBcJ9eVVYbvyAPCluLrj8i4JcSUewjS%2FcyxO8ZpWKyqmXJ0%2BDRGm3FZrBe1oPYXKbZKDYPK3iB6BLyA%2BfLrkOh4Z7m82PYuC07f6Cwdn2CvMeJMBol8WE9TaIj8cw7eg8qjeJ%2Bch%2FUaU8l2s3DqNGJ2nNL0yoRzORBxlfPvCVr14xbzYKNBkHxU%2FAbxBgdGQebLGLfVUhHVR6gzlVPmBEiHhD8kZUgc54fOKS%2FyA%2BR3EXF7EcMj3vw%2BIpGVAbBGHS%2BFGqfnpwWPc7PYStj37FHMxREkuRPjIl%2B5cYa%2BPCRgbDd22ueVm7V5cRy1C8rC5YIiKgnK9RCYbalRe4dodGMOmEqdQGOqUBEw27OfyPa8XngDm7KNll2iTcemka33ssPgUzmXLMJpTk6PcoW515dXAE0nCTzNauhA3yLqyF1JVXOxnN5e0QFwvDn1DXls63%2B%2BCcfpNgBPyiUAHKymfeqcjlGT4McoY4Qry8C3i114kNg0SKUc6ujJImmFTQyw2ucsTMTwZ%2FgOBxZfyIcap7f%2Fg0nAYAQp1meoIqA4JTk%2Fet9FFsX5xHsFDDwiEO&X-Amz-Signature=4c3d9ce09d0eb876ccfb5c607c80de888392589da9aa897c34e45ec9762f94ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZX4LFD%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCAng%2BIG9sqjF6GCwjCmdltoB9bv2VKpcrj0NfxX48MJwIgVqVs2pPQ2a2n%2FK2sOXLp4Sm3NDj0A1KXNzjOKjqJDm4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSXqB153lg4GTcItCrcA%2BScmtD6UmVMBHHyxHUufhJa09XDJ39UZy9Dedkq2m2CExGrMkJ0Y5p%2FPnxOdxWr%2FrTElO57gbCYQ0l44C2flx0%2BhSiFfO6FtX6yaiPqb2zYyxsNCGrB85vXEvhb%2BsWMSt%2FcO73Ks%2BEQKFZr%2F1TE4h%2B8LBf%2BIU68a7n21aqX2uh%2FsfU5qibg9PNcQCQAH81tin2Xu%2F72L2fLBssKFKuzNhV%2Bl4EqERYaSfV%2Ff8By3MFtW%2BX8LpDqDm2P7pgqxfIz0e6PlkAOab1GQjqjQV4saWY5dcZcKAyjLddzDu1gBcJ9eVVYbvyAPCluLrj8i4JcSUewjS%2FcyxO8ZpWKyqmXJ0%2BDRGm3FZrBe1oPYXKbZKDYPK3iB6BLyA%2BfLrkOh4Z7m82PYuC07f6Cwdn2CvMeJMBol8WE9TaIj8cw7eg8qjeJ%2Bch%2FUaU8l2s3DqNGJ2nNL0yoRzORBxlfPvCVr14xbzYKNBkHxU%2FAbxBgdGQebLGLfVUhHVR6gzlVPmBEiHhD8kZUgc54fOKS%2FyA%2BR3EXF7EcMj3vw%2BIpGVAbBGHS%2BFGqfnpwWPc7PYStj37FHMxREkuRPjIl%2B5cYa%2BPCRgbDd22ueVm7V5cRy1C8rC5YIiKgnK9RCYbalRe4dodGMOmEqdQGOqUBEw27OfyPa8XngDm7KNll2iTcemka33ssPgUzmXLMJpTk6PcoW515dXAE0nCTzNauhA3yLqyF1JVXOxnN5e0QFwvDn1DXls63%2B%2BCcfpNgBPyiUAHKymfeqcjlGT4McoY4Qry8C3i114kNg0SKUc6ujJImmFTQyw2ucsTMTwZ%2FgOBxZfyIcap7f%2Fg0nAYAQp1meoIqA4JTk%2Fet9FFsX5xHsFDDwiEO&X-Amz-Signature=58549bb205198960ed4da44f1da30b021ba20802ff35cd04ab84d5f6da7b1b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZX4LFD%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCAng%2BIG9sqjF6GCwjCmdltoB9bv2VKpcrj0NfxX48MJwIgVqVs2pPQ2a2n%2FK2sOXLp4Sm3NDj0A1KXNzjOKjqJDm4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSXqB153lg4GTcItCrcA%2BScmtD6UmVMBHHyxHUufhJa09XDJ39UZy9Dedkq2m2CExGrMkJ0Y5p%2FPnxOdxWr%2FrTElO57gbCYQ0l44C2flx0%2BhSiFfO6FtX6yaiPqb2zYyxsNCGrB85vXEvhb%2BsWMSt%2FcO73Ks%2BEQKFZr%2F1TE4h%2B8LBf%2BIU68a7n21aqX2uh%2FsfU5qibg9PNcQCQAH81tin2Xu%2F72L2fLBssKFKuzNhV%2Bl4EqERYaSfV%2Ff8By3MFtW%2BX8LpDqDm2P7pgqxfIz0e6PlkAOab1GQjqjQV4saWY5dcZcKAyjLddzDu1gBcJ9eVVYbvyAPCluLrj8i4JcSUewjS%2FcyxO8ZpWKyqmXJ0%2BDRGm3FZrBe1oPYXKbZKDYPK3iB6BLyA%2BfLrkOh4Z7m82PYuC07f6Cwdn2CvMeJMBol8WE9TaIj8cw7eg8qjeJ%2Bch%2FUaU8l2s3DqNGJ2nNL0yoRzORBxlfPvCVr14xbzYKNBkHxU%2FAbxBgdGQebLGLfVUhHVR6gzlVPmBEiHhD8kZUgc54fOKS%2FyA%2BR3EXF7EcMj3vw%2BIpGVAbBGHS%2BFGqfnpwWPc7PYStj37FHMxREkuRPjIl%2B5cYa%2BPCRgbDd22ueVm7V5cRy1C8rC5YIiKgnK9RCYbalRe4dodGMOmEqdQGOqUBEw27OfyPa8XngDm7KNll2iTcemka33ssPgUzmXLMJpTk6PcoW515dXAE0nCTzNauhA3yLqyF1JVXOxnN5e0QFwvDn1DXls63%2B%2BCcfpNgBPyiUAHKymfeqcjlGT4McoY4Qry8C3i114kNg0SKUc6ujJImmFTQyw2ucsTMTwZ%2FgOBxZfyIcap7f%2Fg0nAYAQp1meoIqA4JTk%2Fet9FFsX5xHsFDDwiEO&X-Amz-Signature=5c18226330160bf60acd4f92f0a79df3ff143dc801e6c7b86cf7033201fc8a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CDJCBYY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDNX2CqsFhfG3oKIm9QQMRDOvItLsxctYahTFAYGpH6HAiABezWMjkygN0Odn%2Bupjzej6bxCIRlAFztb7hdb24PHdCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0ZhOwSJbK7XrRCzKtwDmNYRDtSAaqVC5aPKlh2S3X9sPfnD%2FkSxelzQWrauCSHVgDo6m07KZYv4M%2FR7mJW%2BSUvFvoWJxqF73UAkAi7uzB5%2Buc2of9tQ3S1Vkt0t0A4nOi1Qy5EdlRUI7eWByee4Gcnhz3IgGPsUJRZR1GkKTSeWOvINIJv2p4PPfk4Hiq53ENSUMPxjKTVR1FDDmWqYD7XFDuG4liwJ%2FR142ZFGIKMqRdVOVhP3Dd2GKXfSaL1oLJjGlXLsuemZ4blWWp1VLR4zMXU3AIHYW8K7F%2B%2FNHqkBAK0DeUAysodOZVCDvqaB4aPKNo4mpQ2%2BpdaStUCl%2BPHNQULmK5w%2FSuCLb9hbBRfz9fjKbcW0uy%2Fx0IfRVYXBEC52f8wlumwt2q2GAmepfTW2%2FXIPA1SMECoReQ0PzFjyGoakFThgfQcsfyEtxDcy%2FIKlgStizeOpR%2FcqDKjljc6XLE7AKAycau%2FBzAoSlrFQ0VQrEreyzXHxXE6Un1aDC2LgyzNn6xehhIKo8DmFhr%2Bja2wZwd5ZwcLLU6z5i84pQ2970h2a4cR7UjcPpFbfQqsRFWSOVK46ra%2FWDeqFVhA3eq9pbAIVZaB1%2BqDha57bpgYuOU44p0SDAKjPkkZKcjjKNRAmLEu4g3swrIip1AY6pgEtgNQRtOOJ1fKT%2FUg%2FgHXIF01jtELkuBhD4LqU%2FyqJqhPpQ8t20eaqwxw12NN4abuw51kIE0nyUTbHZu%2FM%2FmeHeNsQbUVFIdzDBUaWGLLvuCLXRVplSN22511cxMKPSPILq7efZFHIIvQ77cu2MvDHfHy0MPeAd8wLaNzL%2Bjzk0kAXxohDG3zEGWsleoaneUIYJPti2MkTPN3TAxthj6w21bG3C1%2By&X-Amz-Signature=5c6301b74b62d2c7fbada9647ed082103bcd0684e6fd680a726fa2817943b0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TAQLUU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCVXP62OufTXyzD4OQ%2FM69jVrqwciBx%2FegHdP0VQ1ShZwIgXtZvgw8hB7UT%2BGy59RbFab5FodH4zk%2FEXN5nF3KPXjgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKX0capGqCHShG2QCrcA2cG%2BduL89BWkhlBzbmX70zq0TIFlSBGtC596aR%2BG%2BPH2IMvkPlESCpDiskt%2FLhRMsKG7L6etFtf3spUJQDiDYpb1DqETgCYc9bJo3c2tXEiK1Un%2BFnQuVCgx%2Fc5dxNGcuJB5BPBPylv3UmaxPkLyBKaOs3bQB6n%2FtE4zSTHL1GGOudTv7d8CXKcoh3lYV2E17uBAiwKS6sgyoV6KPdDVkBtE%2BKONOCP4YiagurP1CJyIzIOZSTqxOmQhLHLQlNNsUByelhA9Jidvq71Wn%2BrVP3jWF7GdC7fTX1aD4%2F7ntMtCkvDAAe390%2F56gSjxUi4QS2MFcE%2FcaD0oq7tHGpcke3hpDUi5qZCsUSnjcYyheWiufikkt9UhkYHrcUrVwGQzyoY%2F2qJCj%2BRbjcQq1e7XDicO2SyBYMoL%2BJJVYOix3aWwjMSpGrnNg0tdKoWNDfObxhWV8fjwnTemuHFwXRVDFucndnZmeJ1OYbWdT1JR%2FysSfDKt2Hvwr3baOTOombvFPFYutq%2BYvv%2FfCQ5G9f5UGquoS3blY2Uc1cJIy7%2BdkveBzC3o%2FFK8heGVn2E%2FTnei%2FJerY%2BjSpAKTiCfElpETiIw%2BsPXzN12%2FHfn2TEc9ZRg1w8OyNFRYkH3RFghMP%2BFqdQGOqUB31hs1%2FIWhHgtsTPRbBGfOv0R5tosIkDPwvgcucPt2AeJFDJ5dKY9QIlGBUpEf6%2Fs%2Fbv0Mi2PEeKOidFX9ixuzK32CWhc%2Fs%2B5MUjYTRPZxbiyZMGoh3%2F54B0Yp7FXP%2F4lQGo%2Bh1Sh1V0ltQkaliuUuoyisZQ8Sq1SFErMvXen8RixFiE%2F2NRvJ90rUbnAj1BVNFe2y4LR2VYjrFrCWiVwJbqSZW%2FN&X-Amz-Signature=7462bebc647ad05ab54f916b5952464800fb22abdfe40dd4aa300475e322db7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZX4LFD%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCAng%2BIG9sqjF6GCwjCmdltoB9bv2VKpcrj0NfxX48MJwIgVqVs2pPQ2a2n%2FK2sOXLp4Sm3NDj0A1KXNzjOKjqJDm4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSXqB153lg4GTcItCrcA%2BScmtD6UmVMBHHyxHUufhJa09XDJ39UZy9Dedkq2m2CExGrMkJ0Y5p%2FPnxOdxWr%2FrTElO57gbCYQ0l44C2flx0%2BhSiFfO6FtX6yaiPqb2zYyxsNCGrB85vXEvhb%2BsWMSt%2FcO73Ks%2BEQKFZr%2F1TE4h%2B8LBf%2BIU68a7n21aqX2uh%2FsfU5qibg9PNcQCQAH81tin2Xu%2F72L2fLBssKFKuzNhV%2Bl4EqERYaSfV%2Ff8By3MFtW%2BX8LpDqDm2P7pgqxfIz0e6PlkAOab1GQjqjQV4saWY5dcZcKAyjLddzDu1gBcJ9eVVYbvyAPCluLrj8i4JcSUewjS%2FcyxO8ZpWKyqmXJ0%2BDRGm3FZrBe1oPYXKbZKDYPK3iB6BLyA%2BfLrkOh4Z7m82PYuC07f6Cwdn2CvMeJMBol8WE9TaIj8cw7eg8qjeJ%2Bch%2FUaU8l2s3DqNGJ2nNL0yoRzORBxlfPvCVr14xbzYKNBkHxU%2FAbxBgdGQebLGLfVUhHVR6gzlVPmBEiHhD8kZUgc54fOKS%2FyA%2BR3EXF7EcMj3vw%2BIpGVAbBGHS%2BFGqfnpwWPc7PYStj37FHMxREkuRPjIl%2B5cYa%2BPCRgbDd22ueVm7V5cRy1C8rC5YIiKgnK9RCYbalRe4dodGMOmEqdQGOqUBEw27OfyPa8XngDm7KNll2iTcemka33ssPgUzmXLMJpTk6PcoW515dXAE0nCTzNauhA3yLqyF1JVXOxnN5e0QFwvDn1DXls63%2B%2BCcfpNgBPyiUAHKymfeqcjlGT4McoY4Qry8C3i114kNg0SKUc6ujJImmFTQyw2ucsTMTwZ%2FgOBxZfyIcap7f%2Fg0nAYAQp1meoIqA4JTk%2Fet9FFsX5xHsFDDwiEO&X-Amz-Signature=befd522dfb28c54a8ad9928e057f422f40be71777a9b4469f40d61faa68c1224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
