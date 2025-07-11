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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFP6YP4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClh5e3M%2BbcS8oxoN%2FFSys%2FKA86%2BeXkv0k1PiK2A1FOPwIgGemdahDLqLDigOtaCwnHFGtI8VtGqWc8ls%2FWSoaPmPwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvBLVLoU7CIOb1TXSrcAysyEejWeuy%2BJb3sRdhtVu%2B16SMRCD3JH3Uf1QbnVLllpldHxjG41aeMgeAcOsGWjwhZ8h%2BUs19ZsC7C1jj%2Fr7MkqfKNIQOAK7U24HYWWT%2FfkpDbRlFYj3TU0EZvXjXqAmSPtHokln3ZHLDQ1%2F1bh1rS%2Bb5shohe0ypn7OeQLVvPCpBDRXfrth3ba0zsu78SQLLreXcy0PgYUzPIaOMepMf%2FDxf%2BzQ6Osh6wVFfQQNBACsch0qIUa93kUQYlH34mWE9c2ZbiB69845AJWYWBJy5GOOu3kP0NhLZMEuxeISoGT9FfXGG3d%2FgxwaSPqJ%2B%2Fixbp8RXYJjtzi72D%2FNgNia6ofOMYC1WVIYhXBxq0RexvLH13Y4%2FWSbqCUzq8JNIQvcU8Hv55vpg8ClT1yt5CCNvQcBIYvWCjAAewBCrhZvaHSOEkO%2F9Gnyy0ZtXA0sKZwy8TBiNHCEw61%2F0pg1rz4rVi0%2BUr2A8hk%2FsPe%2BiPZiNIOpt8SRQrbj5%2F8wktDq9gpGbrG%2F7h7tdpbp7yHrAjoS0z38Sv3wVScWBii7uV6qgox1yB4UA38CuDP24LTQwfXL%2B%2BVGr%2BDSlSwZ8ZViTmAsJbcgo%2F09C4JswnvoaqNPfVCdYO1c58KEzxPAyKMKuqxMMGOqUBPLip6KWiGcgceMvTJjoGbzfpapzJZHJVCZ9grgAmErnzRGeirDFeP8GwhYk2BlTLJUBjA1vpWuBnFR9cfYWvGCrb11Z8L7VwN2ofucgf8phgb4HGyMUpby5F5NqjtmYDh2wIQY%2BJuc19dapcvYT1LFxf1zDsR%2Fmg42GuivdgSmNB5%2F49ye0RPd5fseG%2B7hDkeRoaHj1LsDydLK288lfCCn3861%2Br&X-Amz-Signature=dc0c1d66e6398791c42d754291422154394dae91764b040ea4204abf21e1babe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFP6YP4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClh5e3M%2BbcS8oxoN%2FFSys%2FKA86%2BeXkv0k1PiK2A1FOPwIgGemdahDLqLDigOtaCwnHFGtI8VtGqWc8ls%2FWSoaPmPwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvBLVLoU7CIOb1TXSrcAysyEejWeuy%2BJb3sRdhtVu%2B16SMRCD3JH3Uf1QbnVLllpldHxjG41aeMgeAcOsGWjwhZ8h%2BUs19ZsC7C1jj%2Fr7MkqfKNIQOAK7U24HYWWT%2FfkpDbRlFYj3TU0EZvXjXqAmSPtHokln3ZHLDQ1%2F1bh1rS%2Bb5shohe0ypn7OeQLVvPCpBDRXfrth3ba0zsu78SQLLreXcy0PgYUzPIaOMepMf%2FDxf%2BzQ6Osh6wVFfQQNBACsch0qIUa93kUQYlH34mWE9c2ZbiB69845AJWYWBJy5GOOu3kP0NhLZMEuxeISoGT9FfXGG3d%2FgxwaSPqJ%2B%2Fixbp8RXYJjtzi72D%2FNgNia6ofOMYC1WVIYhXBxq0RexvLH13Y4%2FWSbqCUzq8JNIQvcU8Hv55vpg8ClT1yt5CCNvQcBIYvWCjAAewBCrhZvaHSOEkO%2F9Gnyy0ZtXA0sKZwy8TBiNHCEw61%2F0pg1rz4rVi0%2BUr2A8hk%2FsPe%2BiPZiNIOpt8SRQrbj5%2F8wktDq9gpGbrG%2F7h7tdpbp7yHrAjoS0z38Sv3wVScWBii7uV6qgox1yB4UA38CuDP24LTQwfXL%2B%2BVGr%2BDSlSwZ8ZViTmAsJbcgo%2F09C4JswnvoaqNPfVCdYO1c58KEzxPAyKMKuqxMMGOqUBPLip6KWiGcgceMvTJjoGbzfpapzJZHJVCZ9grgAmErnzRGeirDFeP8GwhYk2BlTLJUBjA1vpWuBnFR9cfYWvGCrb11Z8L7VwN2ofucgf8phgb4HGyMUpby5F5NqjtmYDh2wIQY%2BJuc19dapcvYT1LFxf1zDsR%2Fmg42GuivdgSmNB5%2F49ye0RPd5fseG%2B7hDkeRoaHj1LsDydLK288lfCCn3861%2Br&X-Amz-Signature=8f6f9113ac397cb8aa065519760dabf95fb6615aa913383856ad2e8b56013606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFP6YP4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClh5e3M%2BbcS8oxoN%2FFSys%2FKA86%2BeXkv0k1PiK2A1FOPwIgGemdahDLqLDigOtaCwnHFGtI8VtGqWc8ls%2FWSoaPmPwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvBLVLoU7CIOb1TXSrcAysyEejWeuy%2BJb3sRdhtVu%2B16SMRCD3JH3Uf1QbnVLllpldHxjG41aeMgeAcOsGWjwhZ8h%2BUs19ZsC7C1jj%2Fr7MkqfKNIQOAK7U24HYWWT%2FfkpDbRlFYj3TU0EZvXjXqAmSPtHokln3ZHLDQ1%2F1bh1rS%2Bb5shohe0ypn7OeQLVvPCpBDRXfrth3ba0zsu78SQLLreXcy0PgYUzPIaOMepMf%2FDxf%2BzQ6Osh6wVFfQQNBACsch0qIUa93kUQYlH34mWE9c2ZbiB69845AJWYWBJy5GOOu3kP0NhLZMEuxeISoGT9FfXGG3d%2FgxwaSPqJ%2B%2Fixbp8RXYJjtzi72D%2FNgNia6ofOMYC1WVIYhXBxq0RexvLH13Y4%2FWSbqCUzq8JNIQvcU8Hv55vpg8ClT1yt5CCNvQcBIYvWCjAAewBCrhZvaHSOEkO%2F9Gnyy0ZtXA0sKZwy8TBiNHCEw61%2F0pg1rz4rVi0%2BUr2A8hk%2FsPe%2BiPZiNIOpt8SRQrbj5%2F8wktDq9gpGbrG%2F7h7tdpbp7yHrAjoS0z38Sv3wVScWBii7uV6qgox1yB4UA38CuDP24LTQwfXL%2B%2BVGr%2BDSlSwZ8ZViTmAsJbcgo%2F09C4JswnvoaqNPfVCdYO1c58KEzxPAyKMKuqxMMGOqUBPLip6KWiGcgceMvTJjoGbzfpapzJZHJVCZ9grgAmErnzRGeirDFeP8GwhYk2BlTLJUBjA1vpWuBnFR9cfYWvGCrb11Z8L7VwN2ofucgf8phgb4HGyMUpby5F5NqjtmYDh2wIQY%2BJuc19dapcvYT1LFxf1zDsR%2Fmg42GuivdgSmNB5%2F49ye0RPd5fseG%2B7hDkeRoaHj1LsDydLK288lfCCn3861%2Br&X-Amz-Signature=2d35809e6168f37a240071b2cff06721b9daea0ed2a2aba0c57c144dd392f242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCO6NZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxY9n%2FjuRTArhjuAErWbDBRuF%2BacIVhfCmbKlkVD1ZXAiAg3QP2Ga41qRJ52DJyUZrvB2rfOP3UrYdSVYbMVmAe%2BiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUIOAT4A1tOtm0LrKtwDQBqQrlZGazemw%2FbWCN%2F3TbYQfnl8bE0CdWHbgPQ8zDFXceI%2B5Mw0lqPkVZ7v%2BkM5Qv%2BJB3s9V1HeDeAzvzUGU9CaafE88Zj8dnAYKukvqCehprZVUmiUjCyExCr%2BCHJZhQpH2rswTWlYm%2FVtVNdr%2BpfVz3ChW%2BlopZhTVNs6lEl7u3eHdiVwUOTAFv289XvkzbEcjfjnNDBXl5Rq3O0nUGD%2FXpDWpMmG%2F2YEYEakqCkaHmRVPtJi5CNmXEzdwDsjEZ5zs%2Fo4%2FUZoRGTM18FMmFVGKdd4l94IStkXFSg0yN1Q0kXUO85IIg%2FEJovpkB0GGnJy9XQ3EupSC1b0VJQPvfDpUe6d4XbwssxfbU4CNDd6RjF3XYKZ3nar5tCK8YoYgmKOCxtfsRHPyDhxnbnmXP8Tm3V6qiUaqMqkY7Juq0OZ%2FTbehu8ij42tuEAVRQ9p8H0rQ%2FXG6Wd7tBz8P%2FyYk0XyuuJWNKIFu8cTkmycQcowVfJw4QQAHPh5fIaWjNf0jwNer12JjeRg7HOgyENVbTOmM6uA2hXScdoa0QftSYGiXAsalxarusWEN60fsWDZWbmsVBQdYzwLxxDVOls31o6F2rJLOeLhR%2B3O8xVwdOEu8WgwYpa3YbXjUfww8KjEwwY6pgH5G478uZ3GRGmNYYyVJsLI%2BXvoQFL%2FRJ%2FwqH056Z2gzN2K6wfT5bm1f8ZvlrmqIObWnIs%2FV0XBEcBU1XkYCZb5SxcQ3GjjxUm0NeCFAp2WD8Oxx6iU5HViZR9wCZLgMkwctWHg91QaaI6CIDkGd6%2B83MPIXF3JggQCJc0ELkhODBDT6mu%2FgWp1YIF%2FtoQnAcBPyCpqAOW65elJtrAOxb%2BFFJKkhsPU&X-Amz-Signature=a766a07ba9872551d628d9db0c0a3688c10c0783bb9c2bbbc6d530cc4c3e44e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HJFKCI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgl%2B3FLir813MtfjTLFwWuht2wG78sBYpWWMhB7w5yZAiBuPVqI%2FAqunGtzM6nZUv6yhQr3MrbY1O9b6ZYyzAMWyCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjSmdOwZrC6pBtHtKtwD6%2FLp0qzoSiKw3Fs2FrONugYZeFSS4y5pBp6TJnzaxfOKMZerFgddss2UQqZC%2BSq1qThAlCKqaZRUHVlexNuWANTysz18EoO68pbBceGFl19zGZYMAzP8iwxq8qccJ5cYBurYHGIf1spIv5KTgvhBxERuqh8sqPIvjzQAQXWygJVNU%2FVCoG%2FUnTyhqcobxjo26GrWN5rseTKgHLdEEwFAb36q16MPYEDjMx0y1zVeagv%2F7JzOQNKD5uJoBFE%2BpyJBJGb2vzrqcce3LDbt0hHJgdyS4FCrPLq6H46ZQP%2FZIF5pYecFAn96bMgE3h1DDukPTTPgVjaSqZ34q31%2Fecp7Hos2HjbLtWpQflINdEEHcAk1rd8EqkPZR2qcupXHbcHxoboEzFzh8pf6hWGfx3NJiYpIzN4FMfRYVXIG4vuV9ILxNN45rRudBu55tY7Jt3lyCBS4XarOGVqUcxEutN3XjTUxAm%2BKe4F%2F%2FkOMjJtwAkyaBQZHmBDV5UX5JEV%2BD5hYVcHnd01coy61fYHfWF1H0s8WjWlPbupKtef6Dy3S5GdSCqvsWC07lXWRcLEFR9hJyNPM1wgqQopiVZ0CwAs7gR6YVNzos%2BGO9m5yertF7sjFvFUaNWbh3Q2i%2BqIwu6rEwwY6pgEALE25r3n9Jbv0zjjQfBQZM6S5RvuraYQ%2FbgqTxi2a4Ktu0EefgEFJqYk3k%2FVU4eZRYxrLRXPestN9WcaqJqvvJPdMvjg36tmsK1DN%2BCkg1S01HizRrflaVql3igXmtiKI1NhUtpbCwZDQxTV4G7CcQ4lmjHRYRRWLUzzvQw0fzDzKLjaoPmXmLXb%2Faz9HVx1gTkaXdqmwNZFfCNIeV78JOtkf73uz&X-Amz-Signature=f1a3e0b9ac1af76b8eb593ea09522afa696672b050337f2707da774b18e3e4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFP6YP4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClh5e3M%2BbcS8oxoN%2FFSys%2FKA86%2BeXkv0k1PiK2A1FOPwIgGemdahDLqLDigOtaCwnHFGtI8VtGqWc8ls%2FWSoaPmPwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvBLVLoU7CIOb1TXSrcAysyEejWeuy%2BJb3sRdhtVu%2B16SMRCD3JH3Uf1QbnVLllpldHxjG41aeMgeAcOsGWjwhZ8h%2BUs19ZsC7C1jj%2Fr7MkqfKNIQOAK7U24HYWWT%2FfkpDbRlFYj3TU0EZvXjXqAmSPtHokln3ZHLDQ1%2F1bh1rS%2Bb5shohe0ypn7OeQLVvPCpBDRXfrth3ba0zsu78SQLLreXcy0PgYUzPIaOMepMf%2FDxf%2BzQ6Osh6wVFfQQNBACsch0qIUa93kUQYlH34mWE9c2ZbiB69845AJWYWBJy5GOOu3kP0NhLZMEuxeISoGT9FfXGG3d%2FgxwaSPqJ%2B%2Fixbp8RXYJjtzi72D%2FNgNia6ofOMYC1WVIYhXBxq0RexvLH13Y4%2FWSbqCUzq8JNIQvcU8Hv55vpg8ClT1yt5CCNvQcBIYvWCjAAewBCrhZvaHSOEkO%2F9Gnyy0ZtXA0sKZwy8TBiNHCEw61%2F0pg1rz4rVi0%2BUr2A8hk%2FsPe%2BiPZiNIOpt8SRQrbj5%2F8wktDq9gpGbrG%2F7h7tdpbp7yHrAjoS0z38Sv3wVScWBii7uV6qgox1yB4UA38CuDP24LTQwfXL%2B%2BVGr%2BDSlSwZ8ZViTmAsJbcgo%2F09C4JswnvoaqNPfVCdYO1c58KEzxPAyKMKuqxMMGOqUBPLip6KWiGcgceMvTJjoGbzfpapzJZHJVCZ9grgAmErnzRGeirDFeP8GwhYk2BlTLJUBjA1vpWuBnFR9cfYWvGCrb11Z8L7VwN2ofucgf8phgb4HGyMUpby5F5NqjtmYDh2wIQY%2BJuc19dapcvYT1LFxf1zDsR%2Fmg42GuivdgSmNB5%2F49ye0RPd5fseG%2B7hDkeRoaHj1LsDydLK288lfCCn3861%2Br&X-Amz-Signature=9975d975710a3d59aec2361057eb51bfd5364acf637e676daf1ebbe70d7443fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
