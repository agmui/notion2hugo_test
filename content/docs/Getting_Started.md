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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGLN6AF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBQhwNK91Oer2K%2Fr97Sp3hRGbPFyeVLC0xg0Ax7EI5mwAiEAnFoMS16A0VecldqAkAsViUgcTFbjxl1rtjflYhxtrpQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmZj%2FIwebTw3da8gyrcA61gS8oRHFxE8EuGQjkSHDkuC3Tso3LZzz%2BW4i23TYfjL%2BxrJt6aeoDxgF3g2u9NSCbu1WflkurgIdeiYPhvbyx1g4RYB%2FtsinqQSAcmGWeXNHwZSABCySh8pogOsnbBbxA3u3LmxOYFVBpZs9KbEt5zBvdqrvxaWI6uB58ssU3nWowgBI8WRPiIvgCdQa8eOicdy0JHTJnlpXKOSoNlDc%2FcmZxqLO709jFgyLXT2dAllk7KLU2qshAZ3VdwDyYTXoal1byY7xbJY2tRqKjwBc8436bMCLV%2Flsd1W0Kax3F0EasVgEeWvw0V2zSmidl9XFPrq9I8mhzu9LtnNhskZPYU3EKvuvqS2%2BgI5nlePnNgg8gdIELOqe8wpx%2Fvnr63rK0ATZiqBk6CH5oTOZmt858yYZaGb%2FPtb8k8BdcGubZ0mpuNCrdh%2Bhl3pgQWjF30A6rF66KDbMjGw3bgMG%2BkEJyrstlWkcAlgJGHqCjOgEsg%2Bd88ARNFNnM%2BC8vF6jNfekOLhn2xKTZgJAqBthEOFrD6kng7SkRT8fNLihI4zcAE%2BO3xL4kG9l8%2F%2B8wPRBQA%2Fw1%2B2yVqszY5dob6rfeyWTuCcCazg4SBfcABEU5gv7DaT2j1%2FDdOQwYlNAGTMMbS%2FsAGOqUBNfnf8maF5pS7aQRSjkfchbj%2FLhBur4qqr%2F%2BlJBpZjriZsB7bA7jTd9%2FpXwlZaCxKouiABFhp4YjQWB1INb0k8o%2FuYu%2B75j9oRkv7MZrcfutInNv%2FbZ84VX2JVP9yuziEFW8amKb1MBzMLAKf5OEJRTlG9729Wgn6vMmuJUUD4JuJRjiHCZJL3CrFZ6K5l7z525GwhJvjqdrMDA4TOl5sS5mASZRM&X-Amz-Signature=3f9a703ba4f8601e93fc9f0f8b42e397da3a8aa2b4f9edcfc487c048ce9943ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGLN6AF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBQhwNK91Oer2K%2Fr97Sp3hRGbPFyeVLC0xg0Ax7EI5mwAiEAnFoMS16A0VecldqAkAsViUgcTFbjxl1rtjflYhxtrpQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmZj%2FIwebTw3da8gyrcA61gS8oRHFxE8EuGQjkSHDkuC3Tso3LZzz%2BW4i23TYfjL%2BxrJt6aeoDxgF3g2u9NSCbu1WflkurgIdeiYPhvbyx1g4RYB%2FtsinqQSAcmGWeXNHwZSABCySh8pogOsnbBbxA3u3LmxOYFVBpZs9KbEt5zBvdqrvxaWI6uB58ssU3nWowgBI8WRPiIvgCdQa8eOicdy0JHTJnlpXKOSoNlDc%2FcmZxqLO709jFgyLXT2dAllk7KLU2qshAZ3VdwDyYTXoal1byY7xbJY2tRqKjwBc8436bMCLV%2Flsd1W0Kax3F0EasVgEeWvw0V2zSmidl9XFPrq9I8mhzu9LtnNhskZPYU3EKvuvqS2%2BgI5nlePnNgg8gdIELOqe8wpx%2Fvnr63rK0ATZiqBk6CH5oTOZmt858yYZaGb%2FPtb8k8BdcGubZ0mpuNCrdh%2Bhl3pgQWjF30A6rF66KDbMjGw3bgMG%2BkEJyrstlWkcAlgJGHqCjOgEsg%2Bd88ARNFNnM%2BC8vF6jNfekOLhn2xKTZgJAqBthEOFrD6kng7SkRT8fNLihI4zcAE%2BO3xL4kG9l8%2F%2B8wPRBQA%2Fw1%2B2yVqszY5dob6rfeyWTuCcCazg4SBfcABEU5gv7DaT2j1%2FDdOQwYlNAGTMMbS%2FsAGOqUBNfnf8maF5pS7aQRSjkfchbj%2FLhBur4qqr%2F%2BlJBpZjriZsB7bA7jTd9%2FpXwlZaCxKouiABFhp4YjQWB1INb0k8o%2FuYu%2B75j9oRkv7MZrcfutInNv%2FbZ84VX2JVP9yuziEFW8amKb1MBzMLAKf5OEJRTlG9729Wgn6vMmuJUUD4JuJRjiHCZJL3CrFZ6K5l7z525GwhJvjqdrMDA4TOl5sS5mASZRM&X-Amz-Signature=4cf67173fff64bd3c31a78aba23880aaf89ed7bacd8fdf2869a5931b88e5dd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGLN6AF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBQhwNK91Oer2K%2Fr97Sp3hRGbPFyeVLC0xg0Ax7EI5mwAiEAnFoMS16A0VecldqAkAsViUgcTFbjxl1rtjflYhxtrpQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmZj%2FIwebTw3da8gyrcA61gS8oRHFxE8EuGQjkSHDkuC3Tso3LZzz%2BW4i23TYfjL%2BxrJt6aeoDxgF3g2u9NSCbu1WflkurgIdeiYPhvbyx1g4RYB%2FtsinqQSAcmGWeXNHwZSABCySh8pogOsnbBbxA3u3LmxOYFVBpZs9KbEt5zBvdqrvxaWI6uB58ssU3nWowgBI8WRPiIvgCdQa8eOicdy0JHTJnlpXKOSoNlDc%2FcmZxqLO709jFgyLXT2dAllk7KLU2qshAZ3VdwDyYTXoal1byY7xbJY2tRqKjwBc8436bMCLV%2Flsd1W0Kax3F0EasVgEeWvw0V2zSmidl9XFPrq9I8mhzu9LtnNhskZPYU3EKvuvqS2%2BgI5nlePnNgg8gdIELOqe8wpx%2Fvnr63rK0ATZiqBk6CH5oTOZmt858yYZaGb%2FPtb8k8BdcGubZ0mpuNCrdh%2Bhl3pgQWjF30A6rF66KDbMjGw3bgMG%2BkEJyrstlWkcAlgJGHqCjOgEsg%2Bd88ARNFNnM%2BC8vF6jNfekOLhn2xKTZgJAqBthEOFrD6kng7SkRT8fNLihI4zcAE%2BO3xL4kG9l8%2F%2B8wPRBQA%2Fw1%2B2yVqszY5dob6rfeyWTuCcCazg4SBfcABEU5gv7DaT2j1%2FDdOQwYlNAGTMMbS%2FsAGOqUBNfnf8maF5pS7aQRSjkfchbj%2FLhBur4qqr%2F%2BlJBpZjriZsB7bA7jTd9%2FpXwlZaCxKouiABFhp4YjQWB1INb0k8o%2FuYu%2B75j9oRkv7MZrcfutInNv%2FbZ84VX2JVP9yuziEFW8amKb1MBzMLAKf5OEJRTlG9729Wgn6vMmuJUUD4JuJRjiHCZJL3CrFZ6K5l7z525GwhJvjqdrMDA4TOl5sS5mASZRM&X-Amz-Signature=efa3938efa78703d15cd8f1c7ea306afd4a47a05fa16c7c7a683162759c951ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4CJ25U%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0JYgD3kX2qa%2Fr3wWflCx%2BulgngLP5RPiffTYFJSD%2FeAiAbGRlp3NehvQIds3KiD8VCcznbf5dXpM9IGqay0lSmfiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeOohnvocmFtOjCdKtwDh1fv8TuJ5M8mSimxcNP7u9hV9uC%2Faw9tppkC%2FmcHtIbady%2FeORnM%2BR5EC0xjQ9CEnNcQ5TzXH7%2BLhAcuAhYZ18hrkPIj%2F7c6H3io7Fbobqo1TFVnGhxh7VA1VR9CxXleh3zI846SdgB43nvOwTrY8%2FHLOj2a%2BHeW6WXR6fopXkMuDPLCF2ErZWpSzx2msqbUWlfN3X%2Fbpoes6YBfKkQCxOA87gFHjIefb2Z%2FsSbEp7%2FewozdShFYzpW2jUUPYrIe9A972cijPPsXlOkZw4c5QY4RZbP4rzrWs3QeqIRpvXXuQ7tfaYnR8DexrYZ3oWC8zJXHXzO9L4R2dwKBanl%2BruDgognyv%2BkRicbkXp1KiSagbUQdl9RKeFMhV15x2V%2BjXlnK1qgdweD7MhiQ2WH%2FNuUt4TCsi5tNV4cpHLvUW3wEG1%2Flao%2BSqrPJG36Q%2BkrLd5SbT5mM%2Bxzd%2FV6KgSc7%2FdABt2N5HUrd%2B4uLcTUcj%2FY22T7Ws5qsho72QWU1YrbB28kIbv%2BsO4IIgx3uqbtQDe9inE4qY6lMk62MfZgC824o%2B5AEFC1sMX34xhScTjxzj3v2h5iJVtXGt9DG%2F4iUBxCoF2K9Bpw7bgKBH3eSqJQtCZ8U9Nk3%2BdqCdJMww9L%2BwAY6pgFsIeM4oPDty5HJ4jLUlY%2Bhpy6s44TI7kG%2FQbpKDL9WHI94Di7H0JRPN8%2FUX7bUlW2%2FlXkPfxiBaRWjzwIPFX7XRb4uS2KulsEq1SXxlHIo9YK%2F1vhpU30Zjjjpa5lshb0t%2FUTO6YUOoI3do%2Fh1%2FscMV3u%2B%2BzGTDwM9tfQuOI5T6BOeHIltWWTFFZjOS0%2BSssWrTlDDZMYHr7wYkhA%2FzEuvIzZaPlPN&X-Amz-Signature=a462823970a8b0e73f8879e220a4fcb24e6a74452fd06f4c19c05002161bd5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZY3HWYF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCF1qWOkm8nRmUWXF4T48ZT9kA2oXTfTBzZXhzsX6t78gIhANhRMWbMSKbDQ%2BvkLwxeQSJCTCfo4x0cjnvWxonPsY%2FTKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgyZpgGWktY4UcGO8q3APON6yZYR%2FMCO0sn8IvbWEmpAXhNVYCGawtH7jggFu185hkUS%2BLa29T%2F%2BS0zyzuYAKuaC6ktTTwU4cVYjSZWvO9K43G5CUpy8LFnQiwfPZf97w8BfIFuyBQas1I7gx6g4TicytVyS1%2Fz2kKoi8GPG5sgsPJ9bbwyUZWVySggWrxxKoTfkBQFZ1VMBJZJyUM6JygRsUF7rr8pyFFyirOn46npOlRq6Xs13Dzout4%2BhpFbct91tkTis5BSvT873y%2B7zZhlYUhkF45JwxYcPOB1AzkFWTvIfuL6KzNga7VMyqGWsTHh%2FVBuh5CK22qMJNAa7EoZUqHYzmjfr5%2BXnQPQ76U%2FpV3N2LP%2FD1WDabdP7BH4Lr458jvJTeErubIMLPHemWB5pXnPaj2GRlmPP85SPr%2FWKIv8uWYqnawawtwRyVS%2Fb3dTTJ92W5kVM5wji7x1wipI9FKr1mb0dT7mjbBQ1ErvN4r%2Fg1BnWeIP7XDWXyRUQ7dqWT3Hoj%2BQqTKDpFRfHIM6XeizMWd5T1Acd8FOYYeYDmq4i9Z3LL5xp1BRV0xhtAlyOa9h8OqTzV2Q%2FTLlk22WeZM%2FpVjXVjXEQziA7sWaGhIPUPcfl%2FVY%2FLnbCAoZ4VE3Do6fJ8ktY85gDDO0v7ABjqkARhquIN2bGJk30IRdwgBl8ozmhnZFo8OEHRlFCLFNjg%2BL0rj9wNQp0WTHtVxAoJOISknRGVTVyZnjLYX1NnN5LYAmFmvQ7Hpkokqjm0cMkNKurYVc6c%2BDPdQZZrkG%2FEg6aMXueAZMHrPYMMKC1hTv1J1IX1aRxP8uVL7Re0qGOhR5uRALBFIMwuc8s6pfRD9hD2b54n9EoU%2BRAyBh5N4cOX%2BLmsK&X-Amz-Signature=dc2bdc4cb2fff40148932fc870d01d988d2464037083a6d095926366bab7eaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGLN6AF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBQhwNK91Oer2K%2Fr97Sp3hRGbPFyeVLC0xg0Ax7EI5mwAiEAnFoMS16A0VecldqAkAsViUgcTFbjxl1rtjflYhxtrpQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmZj%2FIwebTw3da8gyrcA61gS8oRHFxE8EuGQjkSHDkuC3Tso3LZzz%2BW4i23TYfjL%2BxrJt6aeoDxgF3g2u9NSCbu1WflkurgIdeiYPhvbyx1g4RYB%2FtsinqQSAcmGWeXNHwZSABCySh8pogOsnbBbxA3u3LmxOYFVBpZs9KbEt5zBvdqrvxaWI6uB58ssU3nWowgBI8WRPiIvgCdQa8eOicdy0JHTJnlpXKOSoNlDc%2FcmZxqLO709jFgyLXT2dAllk7KLU2qshAZ3VdwDyYTXoal1byY7xbJY2tRqKjwBc8436bMCLV%2Flsd1W0Kax3F0EasVgEeWvw0V2zSmidl9XFPrq9I8mhzu9LtnNhskZPYU3EKvuvqS2%2BgI5nlePnNgg8gdIELOqe8wpx%2Fvnr63rK0ATZiqBk6CH5oTOZmt858yYZaGb%2FPtb8k8BdcGubZ0mpuNCrdh%2Bhl3pgQWjF30A6rF66KDbMjGw3bgMG%2BkEJyrstlWkcAlgJGHqCjOgEsg%2Bd88ARNFNnM%2BC8vF6jNfekOLhn2xKTZgJAqBthEOFrD6kng7SkRT8fNLihI4zcAE%2BO3xL4kG9l8%2F%2B8wPRBQA%2Fw1%2B2yVqszY5dob6rfeyWTuCcCazg4SBfcABEU5gv7DaT2j1%2FDdOQwYlNAGTMMbS%2FsAGOqUBNfnf8maF5pS7aQRSjkfchbj%2FLhBur4qqr%2F%2BlJBpZjriZsB7bA7jTd9%2FpXwlZaCxKouiABFhp4YjQWB1INb0k8o%2FuYu%2B75j9oRkv7MZrcfutInNv%2FbZ84VX2JVP9yuziEFW8amKb1MBzMLAKf5OEJRTlG9729Wgn6vMmuJUUD4JuJRjiHCZJL3CrFZ6K5l7z525GwhJvjqdrMDA4TOl5sS5mASZRM&X-Amz-Signature=bd5cc2c2b037a307114b00db6e16cd5913172fad7fe8da17ba24551a3d06c34e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
