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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZQRTUQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPPEQnCdJ14NTgJH3TIqL%2Bt%2F3hnkuifnUxmX%2FnHc6YAiEAt9hk52rzra3Pt9k57tVHVzjKLl6mZewMtceFqh6Q6kcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4v2eyx78QBnQOtxyrcA0aKmz0%2BVUBTfRa%2Ffot8Nv0loVlZdllntmBkWYG6I4fTOsyO7tH7%2Bto4RqtigDMaygqKDeLpTEIPJjuG5eZ5Sw1NVDXcoa1d9zbse1sHhe0cnUBEoGqR8yE7zBwmJE%2BjJry9M%2B6wKXqV1fz%2BoL4UHPMXla%2FNp2Yt6xFU%2BAVnWmRxehjAA0unf7u8zueJz6vr8pzj3uJ7ULMC0EU%2FbpwvpjbCslEfIBybE6v5yI2ea1pfAijB9aW3qmNBNYZBng%2Fov97yviFgyZYtzlgPvwFZv%2BeIS1N3EDCqtDKyzf7WB9D9Usu4Q7a0qkegcocg5sazCkjcaUgtpVlwv%2BJqsUCmOoVaVj1E%2FgxYpKJ3HveoHlBA0zaDFYMGJUkybJDgqw1K587EeGsR%2Fb4quboT%2BFd3eBWXD8iiQ8Ur26Ybz49xQVWY4yIR7CintCbY8xdBklEwC%2Bep%2F%2FXQYb7gmPzHgIu6BtpZFdfb4I1U9r7f2C2SKP%2FJvELwq2WTwSepCXcxo6pJ28%2B%2F4zoFGp4MFoKuKftLFlKa4aYvmkvCm6UmXDucZCKDgYcP6Ds39T5D%2Bfxd6YulNs2RP4biTUi09xwUBUtKSKMCYUSI9ID9eKTvscXPyGQFl4j0dheqdrvm3soFMO%2Fr87wGOqUBiYWqQCaH0AEZq%2BgFoJIhdNNQWAdPF6j5C8GMepx5OnSJ0zgoCqRNhzCUtcseH8Dx8C8oGNH9nacNamj6nHDJfBnlL0p%2FKo0wiFbJh2WYCIW1SKDoEgFlrWjpAAPGwYFKpSbcHooxMjvRQFteGDorW7dg0c83LyK%2BWJxfAt0fKwkUnGdea3KSW26q4DbV2W3495GqhBE0U4d1znA5DC6r9B4aBpsq&X-Amz-Signature=d80462ead42c27f35ab57421a3c51e21ac60c8160306a4e04fd8f9ef8ec943e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZQRTUQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPPEQnCdJ14NTgJH3TIqL%2Bt%2F3hnkuifnUxmX%2FnHc6YAiEAt9hk52rzra3Pt9k57tVHVzjKLl6mZewMtceFqh6Q6kcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4v2eyx78QBnQOtxyrcA0aKmz0%2BVUBTfRa%2Ffot8Nv0loVlZdllntmBkWYG6I4fTOsyO7tH7%2Bto4RqtigDMaygqKDeLpTEIPJjuG5eZ5Sw1NVDXcoa1d9zbse1sHhe0cnUBEoGqR8yE7zBwmJE%2BjJry9M%2B6wKXqV1fz%2BoL4UHPMXla%2FNp2Yt6xFU%2BAVnWmRxehjAA0unf7u8zueJz6vr8pzj3uJ7ULMC0EU%2FbpwvpjbCslEfIBybE6v5yI2ea1pfAijB9aW3qmNBNYZBng%2Fov97yviFgyZYtzlgPvwFZv%2BeIS1N3EDCqtDKyzf7WB9D9Usu4Q7a0qkegcocg5sazCkjcaUgtpVlwv%2BJqsUCmOoVaVj1E%2FgxYpKJ3HveoHlBA0zaDFYMGJUkybJDgqw1K587EeGsR%2Fb4quboT%2BFd3eBWXD8iiQ8Ur26Ybz49xQVWY4yIR7CintCbY8xdBklEwC%2Bep%2F%2FXQYb7gmPzHgIu6BtpZFdfb4I1U9r7f2C2SKP%2FJvELwq2WTwSepCXcxo6pJ28%2B%2F4zoFGp4MFoKuKftLFlKa4aYvmkvCm6UmXDucZCKDgYcP6Ds39T5D%2Bfxd6YulNs2RP4biTUi09xwUBUtKSKMCYUSI9ID9eKTvscXPyGQFl4j0dheqdrvm3soFMO%2Fr87wGOqUBiYWqQCaH0AEZq%2BgFoJIhdNNQWAdPF6j5C8GMepx5OnSJ0zgoCqRNhzCUtcseH8Dx8C8oGNH9nacNamj6nHDJfBnlL0p%2FKo0wiFbJh2WYCIW1SKDoEgFlrWjpAAPGwYFKpSbcHooxMjvRQFteGDorW7dg0c83LyK%2BWJxfAt0fKwkUnGdea3KSW26q4DbV2W3495GqhBE0U4d1znA5DC6r9B4aBpsq&X-Amz-Signature=d1429e77e4a6af897a673567c372f12145c9944888ff8383b8e93a837d0c501b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HJWTIZ4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnaO32yEDm%2F9CoTccT4FIy7P4JVF%2FXNathQBC040B6YAiBqoLho1LLtNT58wWd6%2FQdbMlMSDVWRJqArSGDkKI5CqSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLp7c4kUQJGHRoCrrKtwDbEeVgc6bBDRtRcFt66OXgzzON0Fa7fsyrQrTn1r4m%2F5vF8OU%2BsG4ptWjDJkzBPPRUoVNJbgM7BpTW8j8KEhv45v1Yfp%2BFD6WK0uOKYzo9Yp9LbT6vgTEti5xRPAJnY22n7EN7DBEkTkFZNB0NZMeSa3dYRsm2CJBIO8pKzNAFL0oEILKVoE%2B8DfS06G0LKDDMRjxhxj1dw2mXuYF%2BCfQSLi3lpJxLNNVqONUFKtFu7L9QgFo4CjI0U%2FukvfionbZjd%2BUEJ3aciw89b6zE7Egb85WKIRfmVb%2F6Kr5rLE7xSf51GqjifW1YCxrB2099lCP9uRj0xS54sy9JHV17oLXmlG9CJvhW%2FFWYIAxBeUpMcm%2Bb2qB5xeRFVKmVITQwR3uM8p44Bgdulk%2BXYnlsLjAmCMc40FYyffZ6kjBr0mzGEuysd6yUNIn1sbWQQ1PI0ILxMAWLPq%2ByQmWR9Qha8AFrrC5TpW%2BhH331ziLo%2BpolurW0bgJJMISNX1sQuZSdEoXa6LYvCeJ6Esy6Vui0D65zZGdCngJJrKTCdoFlC9CSqqnPbYbAZk%2Bb1ysk8O4UVedyq4sD9LEhLsOUFJbycFb2Q64A7uegzC1wusr9g0gah%2BkWYT%2FXwef2KRlZRQwuOzzvAY6pgEAaMgq5J8QC0WKH7llB3ERLvQ9SF9B9pQ6%2BmD9MfCuKgy9Cvp7rVmK2YhRtGahNAM0dTY6L8eYzTaTRDCzPbRt8D1P2wLsDYDYzKLrjNX428M2Jk%2FmlHNGLAengJb64ioCh%2FSDAaci81Y%2Bp5XpxeCXFmGK%2FJlmLapGZZpE9JhKqCbaryQaqbSgLH5YW1vpAJtjb1ZR%2BsckOYLXwBO1Ur%2BM6U5cfGlS&X-Amz-Signature=2f4bbb4e65c7a2c31a748cf0faeedcacf3e5259c5c911d9cbecb057ee3d94f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXK2RFX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKv3ckQPvuRdvWFhgHGNJKKQblW4rjHPzAvTXoy%2FJCOAiB%2By6llkbRj1X8Hs7p1Wc3dRCSy4Xfc7QcBbpVoD56PFiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYv%2B9nRbVzRyUrlo8KtwDqnTl5E2S5tnVcYS1vlNUlUpqkTDljg75GRxbbg4a0ajQTBJVjkRCTEUyDLMFQzvFC9J6l%2BNxPSmjs7UdYCUj%2Fml4MFne3DhmegGS%2FNOXRoeX8cFI%2Bc5BA4cMBmpSHsKwX0ULEhZkZ3r5kw5TlTj1n6znQEbK0P%2BBYVxDvIpyAE8fKYg0%2Ftk64bSFEWeezKSDYnvo4AJ%2Bz9ANMKZU2mZGtveTbV2RZIc5QHmf8mjvvzJotfrrSbnbeAMqFFK2K83oqgE%2B3KvnnOG%2FFNT85ZjadGu2mnebIxbf3D35mlztGCitOEIVGqxHINenrxHK6x%2FJ47Wghg4tStmwqU2RbE8aQPj0e3%2FPjQi%2B4dYYxHaRpO77j9KP13y4z6xzHM%2FGi3E9UAt66U%2FNcw7dSwQfUHhFKK5TVtx41dtPvmVUMihUgiWzYnwl7tYQ0TZAxtgEgLaVs0PdMKy95hvpySTQg%2F89XJOHRPG%2B1YAiLKP6dfcfJLU4v0mPb%2FTfnd99whpgcLub%2BRdYeg8Ip0pIE3WHlPa%2ByVrA6dG%2FtJ%2Ft004lEm1yzU26xMKCVQ1CQjEE66HXtlWfJuJBcT7pym24u%2Ba1S%2BswO3u2tctCUdt%2BO3HFcZarD6VmgHHRn%2FwquZl%2FrXEw1uzzvAY6pgEyehw9JtQeMwE1oGB5klaNjtgHPX2CQEq%2Bhad3NlwPV7DFI7dC7OjJS7WJ7Qqa0yignJisykx5fisHB3ALku3Zvg%2B9nu9TstppZbhQokSgFO241jOfGkt6riZxPisS6tzoT1Yw7yXHDKV5zh7KwBSS1Bq1vHJVrVFUCSRIBsI0c%2B5ClgcgNNoBN%2FM7Zr2GVlvjs7xMzLogb9%2FWX6mrf8NROvWIDxgp&X-Amz-Signature=8ed84d29f5e4a4a5c6cbf1eef817e45207e686bf37ee5d5478d2cdb3f8d7fbb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZQRTUQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPPEQnCdJ14NTgJH3TIqL%2Bt%2F3hnkuifnUxmX%2FnHc6YAiEAt9hk52rzra3Pt9k57tVHVzjKLl6mZewMtceFqh6Q6kcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4v2eyx78QBnQOtxyrcA0aKmz0%2BVUBTfRa%2Ffot8Nv0loVlZdllntmBkWYG6I4fTOsyO7tH7%2Bto4RqtigDMaygqKDeLpTEIPJjuG5eZ5Sw1NVDXcoa1d9zbse1sHhe0cnUBEoGqR8yE7zBwmJE%2BjJry9M%2B6wKXqV1fz%2BoL4UHPMXla%2FNp2Yt6xFU%2BAVnWmRxehjAA0unf7u8zueJz6vr8pzj3uJ7ULMC0EU%2FbpwvpjbCslEfIBybE6v5yI2ea1pfAijB9aW3qmNBNYZBng%2Fov97yviFgyZYtzlgPvwFZv%2BeIS1N3EDCqtDKyzf7WB9D9Usu4Q7a0qkegcocg5sazCkjcaUgtpVlwv%2BJqsUCmOoVaVj1E%2FgxYpKJ3HveoHlBA0zaDFYMGJUkybJDgqw1K587EeGsR%2Fb4quboT%2BFd3eBWXD8iiQ8Ur26Ybz49xQVWY4yIR7CintCbY8xdBklEwC%2Bep%2F%2FXQYb7gmPzHgIu6BtpZFdfb4I1U9r7f2C2SKP%2FJvELwq2WTwSepCXcxo6pJ28%2B%2F4zoFGp4MFoKuKftLFlKa4aYvmkvCm6UmXDucZCKDgYcP6Ds39T5D%2Bfxd6YulNs2RP4biTUi09xwUBUtKSKMCYUSI9ID9eKTvscXPyGQFl4j0dheqdrvm3soFMO%2Fr87wGOqUBiYWqQCaH0AEZq%2BgFoJIhdNNQWAdPF6j5C8GMepx5OnSJ0zgoCqRNhzCUtcseH8Dx8C8oGNH9nacNamj6nHDJfBnlL0p%2FKo0wiFbJh2WYCIW1SKDoEgFlrWjpAAPGwYFKpSbcHooxMjvRQFteGDorW7dg0c83LyK%2BWJxfAt0fKwkUnGdea3KSW26q4DbV2W3495GqhBE0U4d1znA5DC6r9B4aBpsq&X-Amz-Signature=3cd3d3ae89df68db9bd4a23d8ba38feed0fa2da2c8d40fd3fdf132868eac2f59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
