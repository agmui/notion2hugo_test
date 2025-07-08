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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK67FBOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcx%2B61ixHR6YhpInNGK7Yd%2F91Y9Knv5HE%2F3do8PWNuVAIhANtoTpvznfoyM1Vm%2FdXk4j28QiT6Rcl52QQ3XCsIf9XpKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhIk8wOkgwq7o9wEIq3AOtuvfY82vGSuf0O2TQLOxshkE7x%2FZR6%2BPVk5%2BtM7%2FD9bNWSLHLSopYzT2biGBPW0obd5r9aQvOkjFgUHYM7zTGJbl8TNXQyFJ42WzhQ%2BhK36FnAWYZN8aGp6Hw31eMOTJxJ8MHc%2FYXGB%2FD%2FY7QLvds8SqP%2BGaAmd4bM01TQqZyuKRkN3NQNo7pfvZP0wfZoCUnCvqw%2BYaHEAe70ZO%2BFfZNO5Nl1A%2FmJokoxv9J30S0IOJgsgAu5r7zq5OTxZ0k2JSBOc60hR7rP5rQqR6hV1hfzYmt5qgPWV%2Bft0fbJ5cqcSVpZobCh1FygrpQXKU7YCKqTo9Yec3l75cF%2FOTpKXUOzhU4sSi4OxXDT4kK2vRzghdaul7EETMBpe8jHHEFgFlYQMDI6F3piLHJ0ObRy1tdPb9hrwmh1xbk5UBFj2cF%2BwftdD8xx0qkunBnu2eueI2li9vsFknOYaf%2Ff1chQtPWN7Bi49hjondp2E3R54NI61TbUAM4eMcP7Hb7WLHKybDvMEsFPrd%2FunITJP4QOib8o2r1pZ9Jt%2B5HsXnlp8yLIepfQKU4p8AAlnPTeT5M8zxzbzDV87nIkB8UdnH4oTBNTadZIKkcydWJNLdxBgyrALbBe2U49WTM6CCC7DDO2LXDBjqkAalLYS5Vb65yO8moX%2FXYVDhPpVHkp1KXAqjx0grD0W5Kq94nlsddCl7oXoTOg5RPAlGKdPEJ%2FUuIPb8Fo6pkq%2FDFRiK%2BbJdPMR8bCVcEWqk9kDFFAhkxRqGqHCo9zQciduXSEuQFIJvotyY9ARXD%2BmoYRbwae2k%2FmZI%2Bn%2Fp2XyF871bM1JEhIV55lxkdpuNGTokyWSeIIBLTfQbSCwCxfkSHjuX3&X-Amz-Signature=60566903607b81a2bc7477b7346649e44dd75e493d2811761a71c26991057f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK67FBOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcx%2B61ixHR6YhpInNGK7Yd%2F91Y9Knv5HE%2F3do8PWNuVAIhANtoTpvznfoyM1Vm%2FdXk4j28QiT6Rcl52QQ3XCsIf9XpKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhIk8wOkgwq7o9wEIq3AOtuvfY82vGSuf0O2TQLOxshkE7x%2FZR6%2BPVk5%2BtM7%2FD9bNWSLHLSopYzT2biGBPW0obd5r9aQvOkjFgUHYM7zTGJbl8TNXQyFJ42WzhQ%2BhK36FnAWYZN8aGp6Hw31eMOTJxJ8MHc%2FYXGB%2FD%2FY7QLvds8SqP%2BGaAmd4bM01TQqZyuKRkN3NQNo7pfvZP0wfZoCUnCvqw%2BYaHEAe70ZO%2BFfZNO5Nl1A%2FmJokoxv9J30S0IOJgsgAu5r7zq5OTxZ0k2JSBOc60hR7rP5rQqR6hV1hfzYmt5qgPWV%2Bft0fbJ5cqcSVpZobCh1FygrpQXKU7YCKqTo9Yec3l75cF%2FOTpKXUOzhU4sSi4OxXDT4kK2vRzghdaul7EETMBpe8jHHEFgFlYQMDI6F3piLHJ0ObRy1tdPb9hrwmh1xbk5UBFj2cF%2BwftdD8xx0qkunBnu2eueI2li9vsFknOYaf%2Ff1chQtPWN7Bi49hjondp2E3R54NI61TbUAM4eMcP7Hb7WLHKybDvMEsFPrd%2FunITJP4QOib8o2r1pZ9Jt%2B5HsXnlp8yLIepfQKU4p8AAlnPTeT5M8zxzbzDV87nIkB8UdnH4oTBNTadZIKkcydWJNLdxBgyrALbBe2U49WTM6CCC7DDO2LXDBjqkAalLYS5Vb65yO8moX%2FXYVDhPpVHkp1KXAqjx0grD0W5Kq94nlsddCl7oXoTOg5RPAlGKdPEJ%2FUuIPb8Fo6pkq%2FDFRiK%2BbJdPMR8bCVcEWqk9kDFFAhkxRqGqHCo9zQciduXSEuQFIJvotyY9ARXD%2BmoYRbwae2k%2FmZI%2Bn%2Fp2XyF871bM1JEhIV55lxkdpuNGTokyWSeIIBLTfQbSCwCxfkSHjuX3&X-Amz-Signature=8dc6658a33e49b4032de16f3b2063c99371408574db205ded51783677dcd41ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK67FBOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcx%2B61ixHR6YhpInNGK7Yd%2F91Y9Knv5HE%2F3do8PWNuVAIhANtoTpvznfoyM1Vm%2FdXk4j28QiT6Rcl52QQ3XCsIf9XpKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhIk8wOkgwq7o9wEIq3AOtuvfY82vGSuf0O2TQLOxshkE7x%2FZR6%2BPVk5%2BtM7%2FD9bNWSLHLSopYzT2biGBPW0obd5r9aQvOkjFgUHYM7zTGJbl8TNXQyFJ42WzhQ%2BhK36FnAWYZN8aGp6Hw31eMOTJxJ8MHc%2FYXGB%2FD%2FY7QLvds8SqP%2BGaAmd4bM01TQqZyuKRkN3NQNo7pfvZP0wfZoCUnCvqw%2BYaHEAe70ZO%2BFfZNO5Nl1A%2FmJokoxv9J30S0IOJgsgAu5r7zq5OTxZ0k2JSBOc60hR7rP5rQqR6hV1hfzYmt5qgPWV%2Bft0fbJ5cqcSVpZobCh1FygrpQXKU7YCKqTo9Yec3l75cF%2FOTpKXUOzhU4sSi4OxXDT4kK2vRzghdaul7EETMBpe8jHHEFgFlYQMDI6F3piLHJ0ObRy1tdPb9hrwmh1xbk5UBFj2cF%2BwftdD8xx0qkunBnu2eueI2li9vsFknOYaf%2Ff1chQtPWN7Bi49hjondp2E3R54NI61TbUAM4eMcP7Hb7WLHKybDvMEsFPrd%2FunITJP4QOib8o2r1pZ9Jt%2B5HsXnlp8yLIepfQKU4p8AAlnPTeT5M8zxzbzDV87nIkB8UdnH4oTBNTadZIKkcydWJNLdxBgyrALbBe2U49WTM6CCC7DDO2LXDBjqkAalLYS5Vb65yO8moX%2FXYVDhPpVHkp1KXAqjx0grD0W5Kq94nlsddCl7oXoTOg5RPAlGKdPEJ%2FUuIPb8Fo6pkq%2FDFRiK%2BbJdPMR8bCVcEWqk9kDFFAhkxRqGqHCo9zQciduXSEuQFIJvotyY9ARXD%2BmoYRbwae2k%2FmZI%2Bn%2Fp2XyF871bM1JEhIV55lxkdpuNGTokyWSeIIBLTfQbSCwCxfkSHjuX3&X-Amz-Signature=689ecdd9f6882d4b296e8d8da967cc1733eecaa6c1b5f05c73805c9c999e71bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HDBH7R%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW%2FWyBjkdJNCMlEFEemA%2FofJf3y0nOGNz48G5O4iUSAiEA5iVzswqERuVBb8lSJ5v4fUtQe%2Bg81P8Pq%2BTuNfC3WRwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUi1F%2B%2Fg6Hk3TbCSrcA%2BvCwWvW2f2ZycHBmvnh6RYbaslVhWGHL1RMIQoruSNfc5Tk%2BHOID39S6%2BtofSKwVGqmEznucDZKZVDKA1BAIAzL7OTUi5eKBcNBR6NnbmNUoI3qGr7Q0bo9qO8vF3aQ1ibGdiuHQKstcGAVhOEuiXVQQ%2FZzAwOEJb8XZlPlR1LDp6GLtqzepaoKQoHjFx%2FLF3cT46vO78FPQhYX7veYfmRE%2BAXr7kKo%2F0RDo5eB8f5bhlu9YniHvyvUrWWBjoZCnGoG47gyinS67oexdTyvmpQxPPkLERRSNn4d11GxPD5moK%2FbgGNH95Aa0%2BfOkgTkSVBNoMXIFxhI8ykY0vSXo0qnKxn0C5cn69Vaf1N%2FYvJL%2F4qr%2FHsx6YVb8UPz1YLjYVR9ivEtr9p5MQ1MOsfcbyyWqBQ2bW6D6xaaQV9py3g2EvC4e91EdGUBWKLZ3ae4bxMI43U2Qw1EIu4IWb%2B7z%2FUWFz7w1gfT0NwyIBKF2TWGbVYGA4rOHkqJ7BjPlZ3Nv8YEb8RXP%2FtLS8kdfrD%2BdhE7uJaxy1%2F2f0Xzld1kmi%2FEkoWE7dsJgGY5fBdrgoL9jLCrZYWYzPjIKRJll%2BpV11RFsygjkAfABVh882fRKEPB46uBLVuYWTTWv3v6MOjYtcMGOqUBBXZK9qiB6SxhAs%2BLVQa0OYwgZRwL8YF9IqvSDMrYnuUS5eyashXtIV2CA%2FtVxafgFRDBCrZ2al5so5%2BhUVV7bQZmE9lQupT%2BlYICqD7e%2Fgv4mF1O907Xk%2FvG2nR29vXJjYwmjBpIzTi5okK2JnJYvcXjN7bbWQRskILNA63m%2BbOYPp2shyohOjxokjxpDE7TiUCRTlSnekdQbO2cjYHuQxdnP2J3&X-Amz-Signature=13be6b3804b9a0cb92f2bf6204e0f90d8e573f3ed2bd8f3d24b2066c214e37e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WVCI3Y%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICffDkX1WJ0xehondpP0mCvEsvDe6SVcLNtfFmt8GtJAAiBk1xCpTE910HCew9rZyU%2Fevj1sqL9z5EVHpxvPKienViqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4znqKPudXx9QBLOEKtwDceOuNXBH5%2FgJa%2Bx2fw8gRfZOwtsgEO0Dj36aeyBhRvzGabhl2ZcJc1A3w7P0T9v75AZO%2F%2Bwa3IvdbfpaK9u4yPF6RLc%2BH6vY9QGYStWuqWOgbG6wyyDtnuzX9yICiPtXdAGnzuFSszRx%2BoGgWo%2Fx54XQqlrVuxwyaeFQB%2BAfdYjUnuYXH7BG4EH3zMnUjfDls3r9TAaMFIs%2BmHJxvKKXxgBwwwVsIK%2FERxsG4REQa5437fMUDqgKuTN0Ei9vG6DjUSfsy10Qhva9DwuRDYz8OlXtmW17Yq7KBfJ26oanTcd1eQyEf5Xr3s0VDQrpnF6OJcE3qM8SR6%2FAryo0bVWQCo75EtomLJo%2FM1%2F40zwqq11bNinZoITt%2BDmL441dBkOWzWgkV2NBckM808Flix9qk3jEvDdbeMoADLQYNp1lPrc8IoQVkYvZMHmgv2guC%2FxJ%2Bh98Ep1BfxlMMrhd%2F8UkWpbX3bQ4I7oRDtZ2%2Bkk%2BqOzjQg1Qj14lMJClPSGXme9KWwgiIxixkSPO%2FgT6mtzi0XgCjj870PBTVZJ1YX8S5UVyfeu2%2Flu22hgT7LgbJsE6wrX38ofHyRPVnAryu5BIbeGdydAmqezDiy87YPvwvm%2BjkRKPt6p5BRrVxhcwsNi1wwY6pgHmkmXwOHs1UPGqYs8wVLEGDRbQBCFCLpB9Tg08bhVA52FiwKbefKpB3Wa0nBxHDgUvlJYxY1YpdR7bOpLtbHMD%2FV3yTZbJ%2BtVJNrDUPoAmcg0aFqJN3NDSMjWjbzpzaQxIcrt%2FheCfTrTUh5RVZShkISnVuYDn%2Bp1qDHAhCfmwGVSJW9hrOsOR%2Bo7vuwXD46Hlw5thY8MAXF2jWq%2Be6UKFUD9mWRux&X-Amz-Signature=d04fb3321e30973c67fbed6d0736a3034a0bcd7d55202e01d3d3efc6b7c25454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK67FBOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcx%2B61ixHR6YhpInNGK7Yd%2F91Y9Knv5HE%2F3do8PWNuVAIhANtoTpvznfoyM1Vm%2FdXk4j28QiT6Rcl52QQ3XCsIf9XpKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhIk8wOkgwq7o9wEIq3AOtuvfY82vGSuf0O2TQLOxshkE7x%2FZR6%2BPVk5%2BtM7%2FD9bNWSLHLSopYzT2biGBPW0obd5r9aQvOkjFgUHYM7zTGJbl8TNXQyFJ42WzhQ%2BhK36FnAWYZN8aGp6Hw31eMOTJxJ8MHc%2FYXGB%2FD%2FY7QLvds8SqP%2BGaAmd4bM01TQqZyuKRkN3NQNo7pfvZP0wfZoCUnCvqw%2BYaHEAe70ZO%2BFfZNO5Nl1A%2FmJokoxv9J30S0IOJgsgAu5r7zq5OTxZ0k2JSBOc60hR7rP5rQqR6hV1hfzYmt5qgPWV%2Bft0fbJ5cqcSVpZobCh1FygrpQXKU7YCKqTo9Yec3l75cF%2FOTpKXUOzhU4sSi4OxXDT4kK2vRzghdaul7EETMBpe8jHHEFgFlYQMDI6F3piLHJ0ObRy1tdPb9hrwmh1xbk5UBFj2cF%2BwftdD8xx0qkunBnu2eueI2li9vsFknOYaf%2Ff1chQtPWN7Bi49hjondp2E3R54NI61TbUAM4eMcP7Hb7WLHKybDvMEsFPrd%2FunITJP4QOib8o2r1pZ9Jt%2B5HsXnlp8yLIepfQKU4p8AAlnPTeT5M8zxzbzDV87nIkB8UdnH4oTBNTadZIKkcydWJNLdxBgyrALbBe2U49WTM6CCC7DDO2LXDBjqkAalLYS5Vb65yO8moX%2FXYVDhPpVHkp1KXAqjx0grD0W5Kq94nlsddCl7oXoTOg5RPAlGKdPEJ%2FUuIPb8Fo6pkq%2FDFRiK%2BbJdPMR8bCVcEWqk9kDFFAhkxRqGqHCo9zQciduXSEuQFIJvotyY9ARXD%2BmoYRbwae2k%2FmZI%2Bn%2Fp2XyF871bM1JEhIV55lxkdpuNGTokyWSeIIBLTfQbSCwCxfkSHjuX3&X-Amz-Signature=3e17d9361c22ea98102463fe1d13c22209042352e1a082ca17be2d9bcdb799b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
