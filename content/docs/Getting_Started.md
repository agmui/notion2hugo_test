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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IBC6M6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCNYN3dSMP3ACFjsS6HEPXmNxj6jUVyYyFYoxLjEkVSiAIgbFxbSZNSidUCAfXketUoaRlMcriO7rklFHl4b%2FCf5c4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKERR5Iyg4NkdSKznyrcA1tCErdzQ6ZijSv14qSZoUEopWVFimQNy5cH90SWrXR%2Bh02zEWbwcoiSBbHOHqQtKlyo4OxmQ%2BJONjeWb00NZOotklEWPkoODtWymaCLVbRgjv0VQnoKtQU44Vk6zkxWC7KrpOhs5iasAbdIJ2%2FeZ0JbXjkEDukuUAwQyOs57iHCnDqME1Y2TrjqsYccUdIMt5RoxY9fAqI4PK%2BRO4%2Fjl4M%2B7egy1eJjJJXzhYpR%2F%2FUqOpi3V4ApXq%2BM6g7HljxkqmFk6kKFSJCYyLe8iLQYHkN06p4YbP6c0H8qaPQMgEXpH3XlnofCWsl0R5iZ%2B3TRGSZgYaVXY%2BbfZeQvfdGOHDM%2BfWXxXpHGeI4B1%2FKzyB8qxJ3iN64xrBYaeBVNsGj0i5qWXDm5y%2FooEOZhN4PbrmM%2BCf8l12vd8WlskcAUXqb1hFOo%2F5G88hLcEAB6b6x1fFNPkbFkgeX6K1dKu%2FlJXL1wTdJLfRYa9TvACA8buVNja3aAH1FWk1tOQFpzJSfk7bJTydsVhQbUw7pa43zwmTVzNMP%2BDuNAC1ZTPW6JvjcdDDLx6k%2F%2BrfMx5t9zZM4J0wlR0IzWgwaky3%2F92UEUMBmuLfxSI8pTClGafipypceDFuKODewd%2F8WE%2FM8cMMHLvL4GOqUB2tGt%2FKLerxuHo6ceBVZsKB4FQH9N6QzaxU%2FYzp1qfRAfZ0DZHv80fbwuQUCbmJcJfN4qr8pqn9bbIwu8ULWatushR8zXFsv6jPT3OkzvudrTj1vWySERp4f7noDEZlfTy51DgVRHeWYQZJvSLR1C0hOdbnDWbj9GglzmiIQ16w9xr7YqUPI5y92A0YtkeeMHxo%2FuaujNcAri2Cb0%2Bh55iBFTQmpc&X-Amz-Signature=638a42581b1fc247b67c97058b5aea031fb7becd2d46a8d2cbc592df7fffee36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IBC6M6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCNYN3dSMP3ACFjsS6HEPXmNxj6jUVyYyFYoxLjEkVSiAIgbFxbSZNSidUCAfXketUoaRlMcriO7rklFHl4b%2FCf5c4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKERR5Iyg4NkdSKznyrcA1tCErdzQ6ZijSv14qSZoUEopWVFimQNy5cH90SWrXR%2Bh02zEWbwcoiSBbHOHqQtKlyo4OxmQ%2BJONjeWb00NZOotklEWPkoODtWymaCLVbRgjv0VQnoKtQU44Vk6zkxWC7KrpOhs5iasAbdIJ2%2FeZ0JbXjkEDukuUAwQyOs57iHCnDqME1Y2TrjqsYccUdIMt5RoxY9fAqI4PK%2BRO4%2Fjl4M%2B7egy1eJjJJXzhYpR%2F%2FUqOpi3V4ApXq%2BM6g7HljxkqmFk6kKFSJCYyLe8iLQYHkN06p4YbP6c0H8qaPQMgEXpH3XlnofCWsl0R5iZ%2B3TRGSZgYaVXY%2BbfZeQvfdGOHDM%2BfWXxXpHGeI4B1%2FKzyB8qxJ3iN64xrBYaeBVNsGj0i5qWXDm5y%2FooEOZhN4PbrmM%2BCf8l12vd8WlskcAUXqb1hFOo%2F5G88hLcEAB6b6x1fFNPkbFkgeX6K1dKu%2FlJXL1wTdJLfRYa9TvACA8buVNja3aAH1FWk1tOQFpzJSfk7bJTydsVhQbUw7pa43zwmTVzNMP%2BDuNAC1ZTPW6JvjcdDDLx6k%2F%2BrfMx5t9zZM4J0wlR0IzWgwaky3%2F92UEUMBmuLfxSI8pTClGafipypceDFuKODewd%2F8WE%2FM8cMMHLvL4GOqUB2tGt%2FKLerxuHo6ceBVZsKB4FQH9N6QzaxU%2FYzp1qfRAfZ0DZHv80fbwuQUCbmJcJfN4qr8pqn9bbIwu8ULWatushR8zXFsv6jPT3OkzvudrTj1vWySERp4f7noDEZlfTy51DgVRHeWYQZJvSLR1C0hOdbnDWbj9GglzmiIQ16w9xr7YqUPI5y92A0YtkeeMHxo%2FuaujNcAri2Cb0%2Bh55iBFTQmpc&X-Amz-Signature=3d9e67efb7375e88cd4e46c3d2e4bda3c43216ead227a2c67a191d0bb06d1f01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BF4GZ7O%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFd6tYDHvk8zhfZyOhXeaKajEJ09NSMF1Vaq639x4%2FyGAiEA6miVhjCx%2FEyQ7IiumOHdbXpEen2Da9dtKouqwORoCIgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr05eNXmmsijuoaircA3k4oFWy27M4FLNfpXaV5tfblFByqI1MaqV9VXzYhQii8U3%2BLXw%2F5hGI33TBdvmHYO5d5WW517A66qaTjWQrz1DdPstqJG0bz%2FXtwKUkvRQneoVXvPw%2BvHjXgRF1ypjGGdmiYAWO67%2Fr2nP2PqbIrGTkGLkpWtm7bT8dfNN4kEtE31gACso%2FVSuZUQqPqG9NikN3RZMcRToYdvADrbuh4NXSczKHyYlCisJ3RBBa6LvH6PIgzN2dwkAtZamHkodpke524VZ2lgCihVj3sDl5nEmcUfEjU6PtZ0l%2BZ1JruasFKOEz%2BeYYSQ2%2BbOY2c0TtlyFV34YjFGX3YzePO44pXCLAb2icJcBI1O0t0M7it4tRu%2FZinbrpwLigz2If5ahTOa6KQ1XoCAYQQSBk9jDYy3glQX3g7ioxvCouNi3IDOmJs3%2BkAia2Md3aJmrLwVjsspKIbi8f9ewTqyMQSYPsJk0nDeMC86XDtLSlcbFvlRpoSlLoLuG9k0Mrs7QGJ%2BkaMhI4cSodamz3%2FcW3NqhuY%2BxUqW%2BC4jlr3Ra9r7PjU1tbXWz4AD%2B26ExXYEVKdfjh7oai%2FuLQGPNRBBJClHwODDz7o77XLjWlTomgUHWcQkwtrYEgoryS0XTMQqrvMOrLvL4GOqUB4oaVgW8yTClON6YJNNZgLNZ3OEJYvczfJqNzBpkaB1rvfaAwBMgX9RH0XcvBnoD%2BkynEUdK%2FDKrw4DGJC75JfrIo%2ByJL1Emy2T19SXxE5H94OlgHmuFvPziQYlL8c6Enn640xn2a4n7HKJXJ%2FYhp5mmeXflBrMqVCvwf8taAJaug9cM%2BujwWk0p2kstiHgCk6VzadkAk%2B5jYhO5XisD0rYA6vFkR&X-Amz-Signature=a24a7073a088744525e2e3ab08734a7daf034469cca340dea5efa0a17789a51b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYKJ7W7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBCyDPUKO5Gh9CvuXGsrHPmIBS0l%2F9ukTJvp1W1NVJD9AiEA%2BfloQ6szhJBZ9q8kB9%2FwUIjWMa5mHuqv5o23iywSay4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA%2BMZDj%2FWNt1ssu8yrcA4dkdEJ5ICnpCtKChpSNvm0qimhCqD1Z6SWcLBtxfGfiOMRAt8xnJEDKyMDZ4mKu3PxesVzs2aYH6dWGZ9DH8yenZzz%2BeMlTQ%2B6n%2BUfy8%2F3HxTEuLSPKgHuW66QMXYbMY1TTwnEIXecaCog6aR3rcYG4fCHhwTZZdXcUvnbpTyYfG2eWkdqzLIFiPj8IJYPpNPzb%2FZvjFThd0ImIDH73KzbcKOcxLCgVu4R6Ti7ZBNlXtMS2mH5ugDUuw5bQg3FdVHhlFz7wRPJ9WKuLeQfavw01HUMimQHTjFtabaJR3BGkpnIk9iqT4oNB5v9Y7W4sk%2FGrlNwLTg9d6PhxvLaEF78EK0FLzIhIZuxznEBZ4053XiZFaTL7WT8o%2FrHCpGN6aTUtUzDMScDft7sZhwg3UtJoE4O6Q5PO3C38TTrVkb6mdS4uKMyw%2FbpzgpkH8RavsaTk2fSKL0eAj6rFE1Hz0aumboctRga0sO9hNOXf4jjWX6WpjQioyyRLkMaEITqTiIMZbb8sYddKBfUC3%2FxhuMr%2B58ByA04WYjB3De6rETkF60ASqfAn%2Fs4OAGwn95sLINoVRG8OcVnmaw%2FdATVIVxDgvNAy1vkaCrUzxZ0NycIHNuHMzvnQPpQNCsIhMK3MvL4GOqUBeJQnpHuc1lpUX9jB0AtcWs3P7Roc2NYfspjR9zXnvswLCtF6JM4tjThoLfXasHLd%2FzrwAngCxCz7%2FAKMqb6CX4sfhk1a%2BeG36xeIuJ63HLXyuOMYIe0NjWtr1eKUHtmKU6MR6ggPuYcjjKZ2DM0HtdjrgZtrjGiiiupPo%2BJUIWZiLxaw6ePwzZzyTSP2NGpSiZG7JEA4WDIBfMZBsx4mPA1qzODo&X-Amz-Signature=b4a713434f28da020e955403bf2589c10798866a6e1c56481c213b7b852f4786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IBC6M6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCNYN3dSMP3ACFjsS6HEPXmNxj6jUVyYyFYoxLjEkVSiAIgbFxbSZNSidUCAfXketUoaRlMcriO7rklFHl4b%2FCf5c4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKERR5Iyg4NkdSKznyrcA1tCErdzQ6ZijSv14qSZoUEopWVFimQNy5cH90SWrXR%2Bh02zEWbwcoiSBbHOHqQtKlyo4OxmQ%2BJONjeWb00NZOotklEWPkoODtWymaCLVbRgjv0VQnoKtQU44Vk6zkxWC7KrpOhs5iasAbdIJ2%2FeZ0JbXjkEDukuUAwQyOs57iHCnDqME1Y2TrjqsYccUdIMt5RoxY9fAqI4PK%2BRO4%2Fjl4M%2B7egy1eJjJJXzhYpR%2F%2FUqOpi3V4ApXq%2BM6g7HljxkqmFk6kKFSJCYyLe8iLQYHkN06p4YbP6c0H8qaPQMgEXpH3XlnofCWsl0R5iZ%2B3TRGSZgYaVXY%2BbfZeQvfdGOHDM%2BfWXxXpHGeI4B1%2FKzyB8qxJ3iN64xrBYaeBVNsGj0i5qWXDm5y%2FooEOZhN4PbrmM%2BCf8l12vd8WlskcAUXqb1hFOo%2F5G88hLcEAB6b6x1fFNPkbFkgeX6K1dKu%2FlJXL1wTdJLfRYa9TvACA8buVNja3aAH1FWk1tOQFpzJSfk7bJTydsVhQbUw7pa43zwmTVzNMP%2BDuNAC1ZTPW6JvjcdDDLx6k%2F%2BrfMx5t9zZM4J0wlR0IzWgwaky3%2F92UEUMBmuLfxSI8pTClGafipypceDFuKODewd%2F8WE%2FM8cMMHLvL4GOqUB2tGt%2FKLerxuHo6ceBVZsKB4FQH9N6QzaxU%2FYzp1qfRAfZ0DZHv80fbwuQUCbmJcJfN4qr8pqn9bbIwu8ULWatushR8zXFsv6jPT3OkzvudrTj1vWySERp4f7noDEZlfTy51DgVRHeWYQZJvSLR1C0hOdbnDWbj9GglzmiIQ16w9xr7YqUPI5y92A0YtkeeMHxo%2FuaujNcAri2Cb0%2Bh55iBFTQmpc&X-Amz-Signature=a3dd52c14e8c572c68e78ec104a13ef95ce5d2ce55df4d75962f25cc2324dcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
