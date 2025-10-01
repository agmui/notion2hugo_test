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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4W6F7I%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDq9tqM0i%2BSMTUGPbTN%2FvciIa23lkfTF2nr7eZXWSl5jAiEA77fd1qFwUCh7kJco9a6y4VVBqOhbix7HBI1KBhQcROoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuR1YBs1jR74%2FF%2FJCrcAxoZtLulfsSf0u4SVsfDUXFRU2E0M762mbFbljxozNtb7xb056JZxNdhmP8s51z3rC323SpEcwJpYV%2B4VNPJfdrLjenbIlyWcJVey0iL5eMuxKS%2BXO7VQwVwi6NRJsJLnt8lhAuuTCC6o0RmL0%2F5aeM8jsDGcel9ZiH6rezxXxLl6dAy1GgAkpPvBZ2ojefMg4f3mgEjSLn5odc9m7vGbzplLVsh3EO7MvH8G9LSg%2BFdek1XzfjrnBF8W2Eg%2BuakuNzXyVthAW76j8sRBPbepAVFldOjzedKW06pMj6yS1dYj1RyhkE%2FSUIX9uc80tgXaSpWe%2FOiN7j5I6Bhx1X%2Bn7z0A1%2FN75ip3tDxV288E7N5bE8kQzmav8ZIsqODjE%2FTCVGlMTuqvvRS5ZorKQ14yc5nLi%2Bz7DG1HwD6TBY6lgCuk8LkYlH3AAr266riTkVCUIYjJC1GDYQqmFTmwammCgyElYqtFLuVISooh52qxVqt6agFEq%2B4flmOEdsYcveafNA53XOYpB8FRrJQ6MU4sabMRRVTTB4%2BwPELpwGdSTK8M0i6L%2Fitc4wgDC4FIPfqDRd0RoLVMr1iThGeakmU2laFwXUb%2BCAkdq6YmUqkMD6VtxJcg%2F3Gt4WR%2ForAMJWJ8sYGOqUBaXnqTsyVP3q1oRGWa9E8q91gRIIxdYVULI4AZEeI9QcWlOSAMTdPdNrQhgakFa418NcCnRhuqLXvxBZ5%2BiZGGQxPdS0j8caJYQIH53kCHRTsEvb3ejjEN7mYHUsk%2B4RAoE2K7NQ%2BnAa7I4hAFsOotjGrqDVKMem%2BGUQPNxpsLItayHwDpFj1T7s6Lk2ZDwGgLh4fiMJGshUzHiFR6hikCjdzVsjQ&X-Amz-Signature=9fe517a08f9b5a6863b95caa6a1d9c26a35949abb680d91b49ffcfb44d206487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4W6F7I%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDq9tqM0i%2BSMTUGPbTN%2FvciIa23lkfTF2nr7eZXWSl5jAiEA77fd1qFwUCh7kJco9a6y4VVBqOhbix7HBI1KBhQcROoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuR1YBs1jR74%2FF%2FJCrcAxoZtLulfsSf0u4SVsfDUXFRU2E0M762mbFbljxozNtb7xb056JZxNdhmP8s51z3rC323SpEcwJpYV%2B4VNPJfdrLjenbIlyWcJVey0iL5eMuxKS%2BXO7VQwVwi6NRJsJLnt8lhAuuTCC6o0RmL0%2F5aeM8jsDGcel9ZiH6rezxXxLl6dAy1GgAkpPvBZ2ojefMg4f3mgEjSLn5odc9m7vGbzplLVsh3EO7MvH8G9LSg%2BFdek1XzfjrnBF8W2Eg%2BuakuNzXyVthAW76j8sRBPbepAVFldOjzedKW06pMj6yS1dYj1RyhkE%2FSUIX9uc80tgXaSpWe%2FOiN7j5I6Bhx1X%2Bn7z0A1%2FN75ip3tDxV288E7N5bE8kQzmav8ZIsqODjE%2FTCVGlMTuqvvRS5ZorKQ14yc5nLi%2Bz7DG1HwD6TBY6lgCuk8LkYlH3AAr266riTkVCUIYjJC1GDYQqmFTmwammCgyElYqtFLuVISooh52qxVqt6agFEq%2B4flmOEdsYcveafNA53XOYpB8FRrJQ6MU4sabMRRVTTB4%2BwPELpwGdSTK8M0i6L%2Fitc4wgDC4FIPfqDRd0RoLVMr1iThGeakmU2laFwXUb%2BCAkdq6YmUqkMD6VtxJcg%2F3Gt4WR%2ForAMJWJ8sYGOqUBaXnqTsyVP3q1oRGWa9E8q91gRIIxdYVULI4AZEeI9QcWlOSAMTdPdNrQhgakFa418NcCnRhuqLXvxBZ5%2BiZGGQxPdS0j8caJYQIH53kCHRTsEvb3ejjEN7mYHUsk%2B4RAoE2K7NQ%2BnAa7I4hAFsOotjGrqDVKMem%2BGUQPNxpsLItayHwDpFj1T7s6Lk2ZDwGgLh4fiMJGshUzHiFR6hikCjdzVsjQ&X-Amz-Signature=176370f576b67117bc0bbae33a16ffb1defa7b563ce95aab750859df261c6a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4W6F7I%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDq9tqM0i%2BSMTUGPbTN%2FvciIa23lkfTF2nr7eZXWSl5jAiEA77fd1qFwUCh7kJco9a6y4VVBqOhbix7HBI1KBhQcROoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuR1YBs1jR74%2FF%2FJCrcAxoZtLulfsSf0u4SVsfDUXFRU2E0M762mbFbljxozNtb7xb056JZxNdhmP8s51z3rC323SpEcwJpYV%2B4VNPJfdrLjenbIlyWcJVey0iL5eMuxKS%2BXO7VQwVwi6NRJsJLnt8lhAuuTCC6o0RmL0%2F5aeM8jsDGcel9ZiH6rezxXxLl6dAy1GgAkpPvBZ2ojefMg4f3mgEjSLn5odc9m7vGbzplLVsh3EO7MvH8G9LSg%2BFdek1XzfjrnBF8W2Eg%2BuakuNzXyVthAW76j8sRBPbepAVFldOjzedKW06pMj6yS1dYj1RyhkE%2FSUIX9uc80tgXaSpWe%2FOiN7j5I6Bhx1X%2Bn7z0A1%2FN75ip3tDxV288E7N5bE8kQzmav8ZIsqODjE%2FTCVGlMTuqvvRS5ZorKQ14yc5nLi%2Bz7DG1HwD6TBY6lgCuk8LkYlH3AAr266riTkVCUIYjJC1GDYQqmFTmwammCgyElYqtFLuVISooh52qxVqt6agFEq%2B4flmOEdsYcveafNA53XOYpB8FRrJQ6MU4sabMRRVTTB4%2BwPELpwGdSTK8M0i6L%2Fitc4wgDC4FIPfqDRd0RoLVMr1iThGeakmU2laFwXUb%2BCAkdq6YmUqkMD6VtxJcg%2F3Gt4WR%2ForAMJWJ8sYGOqUBaXnqTsyVP3q1oRGWa9E8q91gRIIxdYVULI4AZEeI9QcWlOSAMTdPdNrQhgakFa418NcCnRhuqLXvxBZ5%2BiZGGQxPdS0j8caJYQIH53kCHRTsEvb3ejjEN7mYHUsk%2B4RAoE2K7NQ%2BnAa7I4hAFsOotjGrqDVKMem%2BGUQPNxpsLItayHwDpFj1T7s6Lk2ZDwGgLh4fiMJGshUzHiFR6hikCjdzVsjQ&X-Amz-Signature=bd3503f9ed41abb310e0c9bbfbd7f033d8daeff08aa8dd096d5058d92295254e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNL4QLCG%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCBEZNIzS6xNeGqvxkl9sTO3GgyDxkAdLAqrYTtF5%2BWQgIhAKObZhBpdXPJj7xwjQHIcETeLMEkrJcNnzQSx2HVmROxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4YYJcgDlE5FknEgoq3ANc8d3JzCuH361%2FRZ6mApJQBZQNJlXVcYCCMm2Zg%2FvLVDiIdv0NBGMXKV4%2FAWW%2BrQ%2Byit3jU5s25VkFdq0T4HhyPN4ESrkRhON4oKJZWsH4YOXgVm4yY3VVfjuSNsn4uoOCYKsj221ze3iS6XA5WQhM9Id%2B0NpOJh5xjdKixCsnpdKXDjms2re1%2F1BO3AvnWdZCmQsUY4bC4k9soeZcaXkHACJoTJMfxMqgVcgX2PeXmwR3sPJfZvhhkPahYGM4DjwDbhUvkm9WFe0Mj3k9ZdNLAxO8n9ccEKQVUCEKhsVR4EF7gHc6Sw%2FPF5hc18xCAReWulruQHdZciE9PGRwXCESOAXSxnTg0UXPZ5pWMB3aWWxWIKtuAqNNwS8%2BDxAyqIHkgJ8OfO9v8S9JgKILl4DlxGtfSu95n2ARUVBDGiGgPyhL1WkyiOdk7Fafx4d8UOt%2FA6vEaEX%2Buj%2FCfCf5GQE%2B5LjsigHKub2WRLaSNANS1rYa73o5lG841XGhI17iz2mMKqV7qZYxovmsHjbfu%2BZLn1QykKlFXG36BdHokxU08yR6iH82OBHwFS80UCebdOWP9vqv1o3o%2BgyZDnM2iRxEVsPsphBEm5U%2FqL103fFqmNOIdh63DorjZl6UyTDFiPLGBjqkARzc0%2BoE2hRiG4M5FGuNmjlCiU%2BFhxBeBgXXnAk5HTWQtr2IvKaVnQtDf3%2BLea7z6XLSQ8FtaXWXBAek7ravgrMTmpaBuNJETOsvVCNTH8X1h9kAZc19ZDWmpJJoJKKUQLUk0ru7b%2FUYYLXfzu32A5hFPkkoUeUPDyvP5LnbTZQhQ%2BLwT4Uv%2FT4y7mzGTLBiDpH7EuMJEQ02tTlPTWLYCjFyn%2FL1&X-Amz-Signature=fbc86a9386ff9699fa6cbc3cc39a993be8c527b383ac06545cef31310e479e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6F4P6X%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCvGI0emkX6Df0rBU%2F04AcXCgp%2BT5prU5XMUVrzbh2fgAIgHYeDjBSk5yzTkcRcgIf%2BrlNqZ3OeNudIGyUQ8Bfd4gcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH75oVqXrlMxO6ZFCrcA%2BHWKd1NvJFmfGQhxCxv%2FP%2B4cAOd9IEciIHl3a1zkFlieTDw9FPVLBUQ6x%2BsFsYCibG%2B6Jif0mzp8BtJzhjpHOXokHA7XGXfFjo8%2F7uSqMgF2aYPUT%2BgB8YAZTNGrwLUnqArDjhiPn65KGgEVvh7GaAl2%2FB2fH1XqrpEZSHWGj3b526QemNToh8HXwLL2vG5K%2FyzGWSA31C4CsCYf2IhISEAKYSlUewEEmeEdmtSu6A1aHnMlIyvauc7uPrCfkZ8effpls%2BuzTj8wUR3EcDwTYEMtPE9nu0kM1HQu%2Bdf2nm3%2Fb7w8UQpe7wr5nUhqM1j2w24bqJS%2FjsDn5Z%2BKNxUppzh%2F5j%2BM1vYNzD%2FEMZiF7DbwtJgfSmMoZZzqxffcnG9uZ4oy%2Fslrd%2BY5ZqEGQKXMWZIn%2Bi%2F2HBRssYgncAdWdvBN8rs6vMDtac6rJQMVPAb%2B6bq6S24Q0vZ2%2FipTEHUT4JNbzycm%2F7iZfcMcIhCkdKalefOf6fgfckqjWnbDp7jOITTThw3fvHTfhlw%2FAZEUbXtsYSBrQJXSNNYKSA%2B7EU91dTLsitAZUM6Ykn%2BzD3mVFUMLc53Exza9ARYAZdIiGmLfB0dUZ4BQSvpF664pRK2w68vj79HOpHU85qnMJKJ8sYGOqUBTGMWiKXerz8umyTv7EAdx6QsCQYwxAD33NOSeWKFOW6Dvow0MTwCW7AGoIigpGcuzhD4anP0jT8cR8ZJfETpz0A5sm9TBJiWXhnCRwD7tQ%2BD0Ea%2FjdHMnCy9xne4k37%2BvQsiZVG81rfWIfxEY2OzZ7SrMPVW1C4uJQgA%2B1qOm8UBKoMedqropOafxlQIzcyNbpwaQMb0tDdtxH%2F%2Fc1SrmmQU6U9b&X-Amz-Signature=ac049808dd9020e203136f9bb4def75e01b6e7e7509cde86e9423ca828638b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4W6F7I%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDq9tqM0i%2BSMTUGPbTN%2FvciIa23lkfTF2nr7eZXWSl5jAiEA77fd1qFwUCh7kJco9a6y4VVBqOhbix7HBI1KBhQcROoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuR1YBs1jR74%2FF%2FJCrcAxoZtLulfsSf0u4SVsfDUXFRU2E0M762mbFbljxozNtb7xb056JZxNdhmP8s51z3rC323SpEcwJpYV%2B4VNPJfdrLjenbIlyWcJVey0iL5eMuxKS%2BXO7VQwVwi6NRJsJLnt8lhAuuTCC6o0RmL0%2F5aeM8jsDGcel9ZiH6rezxXxLl6dAy1GgAkpPvBZ2ojefMg4f3mgEjSLn5odc9m7vGbzplLVsh3EO7MvH8G9LSg%2BFdek1XzfjrnBF8W2Eg%2BuakuNzXyVthAW76j8sRBPbepAVFldOjzedKW06pMj6yS1dYj1RyhkE%2FSUIX9uc80tgXaSpWe%2FOiN7j5I6Bhx1X%2Bn7z0A1%2FN75ip3tDxV288E7N5bE8kQzmav8ZIsqODjE%2FTCVGlMTuqvvRS5ZorKQ14yc5nLi%2Bz7DG1HwD6TBY6lgCuk8LkYlH3AAr266riTkVCUIYjJC1GDYQqmFTmwammCgyElYqtFLuVISooh52qxVqt6agFEq%2B4flmOEdsYcveafNA53XOYpB8FRrJQ6MU4sabMRRVTTB4%2BwPELpwGdSTK8M0i6L%2Fitc4wgDC4FIPfqDRd0RoLVMr1iThGeakmU2laFwXUb%2BCAkdq6YmUqkMD6VtxJcg%2F3Gt4WR%2ForAMJWJ8sYGOqUBaXnqTsyVP3q1oRGWa9E8q91gRIIxdYVULI4AZEeI9QcWlOSAMTdPdNrQhgakFa418NcCnRhuqLXvxBZ5%2BiZGGQxPdS0j8caJYQIH53kCHRTsEvb3ejjEN7mYHUsk%2B4RAoE2K7NQ%2BnAa7I4hAFsOotjGrqDVKMem%2BGUQPNxpsLItayHwDpFj1T7s6Lk2ZDwGgLh4fiMJGshUzHiFR6hikCjdzVsjQ&X-Amz-Signature=cf7116bbede989196e2f16fe43343067797e5acfd709eb14b36d66e91e40a99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
