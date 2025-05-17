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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2WDLSA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhmkl0qBfYD5gSH9zXn5IWx%2Fxz31yKqZ7tA1r0kp6OgIhANVAF3uOW6T7paUkQfX%2BG5sQNj46%2FG6FEF3Vp3tYTHQ2Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwhB2kwBYYNlV9HL14q3AONEde3xaeSD3jCen7A50I%2BuWaM8lz5Z7VP2hYtzu14BGXFn85FGv%2FXCOCT2AIpUy9r2sc4uFlqYhNJ9ru31F4BpLaUXTSFVQDvAkUak9iCy8RPcsR24PYdM9VKhDXV03pqFhJlxmeYj0lGKcDm%2FVRQdA%2FCIXkwdPIL8SGH9Jg7fx9F0%2BS%2B1qy4QTq5WUPBGpK%2BrV11HkpeDs8QJvzy%2FwogTcLd%2FqVYRd2pOMLawhbYcTobFf6hfJwyOLxfil3q4GrILSlWKeJG9pj3l%2Fco9XGY79K6nPYHcU9186%2FnqQLbwGCwfbXa5c3cOmCNM1zcz5nAHXOwCusLck5vKJ0O5nEf0giJlAlCknjrE%2F%2FptH3zvlzj7UDsomwQnVSf4IivQWHzTmUnvInKiAW0x%2FYpwToVALvDyYdcp2gCz0oLWe0dCbzE54gHfrgsSYXV628cBUfoAPKiW5bMoYytIiMEprUJZcxRvuBiYO4RqiPyDM87AI%2FPZUl2sXStU1q1FwH24%2FTNNSQiBwXzwigyAQwUdLkMlfBTSpQMFynoCFx%2BKeQeHRzTvOE5uArCXYltyssbxdwyHN%2F7VFbK5egKFsk54QSAsdWBsTgmLYNHU9uSEbtXCSAw8%2BHjNvnhrenNyzCP4aDBBjqkAXmiwVFE4oZkkFBw4aw302CWASEQ8iNC5%2BDl%2FKANZgHdGxbEsDMcwLl1ZiG4bUgsRRSYiUm98RHBcMLzADnQuVqRKCu6voDicnqF4cWQwyJl7XZDvolGo%2BG6tGop76%2FEBQNgrxybs3DZzq8zHSXkP%2Bt30%2FgkS0H1UVVeTN8FvEk%2Bi2Mk%2BFa6hPe6rck6H9VUTnashYHacBOmzEBjfykzDC3jPZlO&X-Amz-Signature=bfb67b0a8834503e0f830ea2ee68cdf1779e4d439bf1e70b8b13c0113c059601&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2WDLSA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhmkl0qBfYD5gSH9zXn5IWx%2Fxz31yKqZ7tA1r0kp6OgIhANVAF3uOW6T7paUkQfX%2BG5sQNj46%2FG6FEF3Vp3tYTHQ2Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwhB2kwBYYNlV9HL14q3AONEde3xaeSD3jCen7A50I%2BuWaM8lz5Z7VP2hYtzu14BGXFn85FGv%2FXCOCT2AIpUy9r2sc4uFlqYhNJ9ru31F4BpLaUXTSFVQDvAkUak9iCy8RPcsR24PYdM9VKhDXV03pqFhJlxmeYj0lGKcDm%2FVRQdA%2FCIXkwdPIL8SGH9Jg7fx9F0%2BS%2B1qy4QTq5WUPBGpK%2BrV11HkpeDs8QJvzy%2FwogTcLd%2FqVYRd2pOMLawhbYcTobFf6hfJwyOLxfil3q4GrILSlWKeJG9pj3l%2Fco9XGY79K6nPYHcU9186%2FnqQLbwGCwfbXa5c3cOmCNM1zcz5nAHXOwCusLck5vKJ0O5nEf0giJlAlCknjrE%2F%2FptH3zvlzj7UDsomwQnVSf4IivQWHzTmUnvInKiAW0x%2FYpwToVALvDyYdcp2gCz0oLWe0dCbzE54gHfrgsSYXV628cBUfoAPKiW5bMoYytIiMEprUJZcxRvuBiYO4RqiPyDM87AI%2FPZUl2sXStU1q1FwH24%2FTNNSQiBwXzwigyAQwUdLkMlfBTSpQMFynoCFx%2BKeQeHRzTvOE5uArCXYltyssbxdwyHN%2F7VFbK5egKFsk54QSAsdWBsTgmLYNHU9uSEbtXCSAw8%2BHjNvnhrenNyzCP4aDBBjqkAXmiwVFE4oZkkFBw4aw302CWASEQ8iNC5%2BDl%2FKANZgHdGxbEsDMcwLl1ZiG4bUgsRRSYiUm98RHBcMLzADnQuVqRKCu6voDicnqF4cWQwyJl7XZDvolGo%2BG6tGop76%2FEBQNgrxybs3DZzq8zHSXkP%2Bt30%2FgkS0H1UVVeTN8FvEk%2Bi2Mk%2BFa6hPe6rck6H9VUTnashYHacBOmzEBjfykzDC3jPZlO&X-Amz-Signature=2261b38225f9d36630e41885e888c1449187ddcf563d5dafba03ecc0e060f46c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2WDLSA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhmkl0qBfYD5gSH9zXn5IWx%2Fxz31yKqZ7tA1r0kp6OgIhANVAF3uOW6T7paUkQfX%2BG5sQNj46%2FG6FEF3Vp3tYTHQ2Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwhB2kwBYYNlV9HL14q3AONEde3xaeSD3jCen7A50I%2BuWaM8lz5Z7VP2hYtzu14BGXFn85FGv%2FXCOCT2AIpUy9r2sc4uFlqYhNJ9ru31F4BpLaUXTSFVQDvAkUak9iCy8RPcsR24PYdM9VKhDXV03pqFhJlxmeYj0lGKcDm%2FVRQdA%2FCIXkwdPIL8SGH9Jg7fx9F0%2BS%2B1qy4QTq5WUPBGpK%2BrV11HkpeDs8QJvzy%2FwogTcLd%2FqVYRd2pOMLawhbYcTobFf6hfJwyOLxfil3q4GrILSlWKeJG9pj3l%2Fco9XGY79K6nPYHcU9186%2FnqQLbwGCwfbXa5c3cOmCNM1zcz5nAHXOwCusLck5vKJ0O5nEf0giJlAlCknjrE%2F%2FptH3zvlzj7UDsomwQnVSf4IivQWHzTmUnvInKiAW0x%2FYpwToVALvDyYdcp2gCz0oLWe0dCbzE54gHfrgsSYXV628cBUfoAPKiW5bMoYytIiMEprUJZcxRvuBiYO4RqiPyDM87AI%2FPZUl2sXStU1q1FwH24%2FTNNSQiBwXzwigyAQwUdLkMlfBTSpQMFynoCFx%2BKeQeHRzTvOE5uArCXYltyssbxdwyHN%2F7VFbK5egKFsk54QSAsdWBsTgmLYNHU9uSEbtXCSAw8%2BHjNvnhrenNyzCP4aDBBjqkAXmiwVFE4oZkkFBw4aw302CWASEQ8iNC5%2BDl%2FKANZgHdGxbEsDMcwLl1ZiG4bUgsRRSYiUm98RHBcMLzADnQuVqRKCu6voDicnqF4cWQwyJl7XZDvolGo%2BG6tGop76%2FEBQNgrxybs3DZzq8zHSXkP%2Bt30%2FgkS0H1UVVeTN8FvEk%2Bi2Mk%2BFa6hPe6rck6H9VUTnashYHacBOmzEBjfykzDC3jPZlO&X-Amz-Signature=444a9ff5258672f9ac53cf428c1172659f9ff8c0334b978852c97917731f98d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRFKXUL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwvbj%2BSEAMKZaMzjHRDmNMe5CtjS1%2FJSSra4P2JwcaYgIhALhv02HOidOBgR2qf%2F6UdszZaMPYybq1WUROfLxz8rQfKv8DCFgQABoMNjM3NDIzMTgzODA1IgzyhYpUaR8m4JAl%2BeMq3ANRIiNUGYZzTVCrfHi64DoW7goVS4ogM3TdT22N81hnteQ%2FkDgTGxPcbfcQwB52Hvd4vPoCsaLeQiLWSh%2B%2F0BAZuJsMYQ5dIFnKGvCQut2IZzOnFFrj%2Bm8ibN9z1BZVjqw%2BHvEk7xy8XEA0ul9eNMRGK%2FAN4tcNIRLrkMyNGdWA2THx3PTaWQzWDLIEBW0TianJPhFUZ2%2F7oS8BsEipin%2FsIxngaVrUgJgOi0%2BGqj7rRPf4cNxqoS4YWdAb9dwwieB%2BBemD1b25FLRKyCxm0qnjiozP%2F%2F23xQmK9pHwshbvpTfruFFsSGrcurl600O%2BUvZehbjfyAFGSs%2BIhRlyWLq7cdg4v9mDmaERgsrcaW9mtInT4gVDFZlXGsdXqIMYpm5NJEwcUApdvSUHFCygxme7s7JKZ7YcivmsfsXSsngIAU1ejy2JlE10mTjw%2BvFYBzc9fh%2BrIDdzp3kL9avzofMP1DQ78MNnZ8b8u%2Bkb84NgJvrMmUosHl4HAX3LQX2nT0FbhG8r56cMzv07h9UJa03ODLr9ULLM18282Ez8NWc11cZAjAsj52dw38RhLoU%2BZAAuVelGyyiP2wV%2BhHAtg6mjnRKC3hnfDbYncbISXVjk2JOXp1aKWurbX6vl0jD%2F4KDBBjqkARpCwU55O%2F9LinufedgzvS28zDB1odC2JGo13HkxF8OGzGFV2XqvsUc0Jc%2BxM7dcl1QPQbwKpHVvp3NzAn50FgyhHMeZqHcyjgYfoOTMDN2zh9Hl96SM6B4ygY5sGE%2FHYOuudz%2B3vORG3cUPv%2F6kuHPamrqv4s459RcXD1JHEsA%2BV0xhHigHPewaHjlWMflyjsSUSgg4qHViz6KVRDrga%2FPakooY&X-Amz-Signature=5e1159ad201844d479ec46154e67ef4e73ec897d1d9b21cb96d4cfdd0ebd3c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6SOTI7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeuGs2%2BbnWCgyZHs%2F9SkJ0ELvWQrZ6PQgSbQDHI%2FZCHAiA%2Fx2z9JSHiXNAEkbW61dc3RnI87W6%2FyVbyxsf5o%2Fl8xir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMboCPeQ8mCoFSUVIfKtwDw4INQdIniea7iPLIV6SrrNTPBYiVyvwl%2BN9HJQEMSz%2BPB0uqqlbmvQpQWFgfmYoT7u4U3DmvgDe%2Fm55JvZmOQDlGEJ2C5%2F%2BiqaGbAWTt6uRiDhVFOsba47sDAZfHBh7yqpmQEeiUu5IuztD%2BfkjNCvR%2FLDleL5N5TXwMiBPy7om9WRiniGsfrtiQCu0ZC267EC5wXEhJUUsnDadCKRzeARuwC9tR8K3HE7wD5IgUWoomQTjt48rVZpfXkRVTBVi7UvU8IP5%2Bt4Z4BOj0EGkaMsZHWjl%2B1DSXL%2FBYAsnbBXlKoW%2BEXR8SD5NReH7BT7ZEBogzvEsx0O9q16A24ys4OpJMfdR%2BAcRjZenbCQS8%2BmOsXrZ4vQuL1Tx9pEzi3mhEBIfaHFJZB9GbNPLuu97FZ%2BkaeUYLaSsDNxPFCsu%2F4JLbNna1uaJ4aAF4lwkOAuZ1pQ8tNHuh2VfK9tYa%2FxpzDBhbJ9cpoxG75JGs%2FhZnwo5Gh1qjthm7pkRGPi9lkpbrKCOIodxC9%2FstIhUlgr0wescrIXjnJ9oQNmp1DRWPkIFamxjg2Q9q4S9Wla1GnhHcgHdl45sQzYnKbkGcNiP2IcwfmYvtFsiX6xXZwL7eUy47%2B6CC4ykUsqJs2ywwyeCgwQY6pgGLq11tZXH3yH20RockxMXWmr%2FW2nq9EQSZEQvPu5wMwgMIJrVe4d1ameKYj%2Fgj8iHaThafBcCNxc42Sc9xFiSmP71Zj%2BSHVIqkIsBxmKsfLBRpdn90VR1zU%2BOrjM8lPODrtCuDcq1L0pVcbCI%2F3gqYwyc%2FqpqEW5ZGq8hBhTgRsAAH9bfGCG0FwRPEMZ%2BaEvyy5T8QwiqMvjX4KAEkX9v1uDYhlli1&X-Amz-Signature=9df3e4867e2530a57cc33129a8164ff72b6fb994bc3801eed668b2f7e1c31a90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2WDLSA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhmkl0qBfYD5gSH9zXn5IWx%2Fxz31yKqZ7tA1r0kp6OgIhANVAF3uOW6T7paUkQfX%2BG5sQNj46%2FG6FEF3Vp3tYTHQ2Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwhB2kwBYYNlV9HL14q3AONEde3xaeSD3jCen7A50I%2BuWaM8lz5Z7VP2hYtzu14BGXFn85FGv%2FXCOCT2AIpUy9r2sc4uFlqYhNJ9ru31F4BpLaUXTSFVQDvAkUak9iCy8RPcsR24PYdM9VKhDXV03pqFhJlxmeYj0lGKcDm%2FVRQdA%2FCIXkwdPIL8SGH9Jg7fx9F0%2BS%2B1qy4QTq5WUPBGpK%2BrV11HkpeDs8QJvzy%2FwogTcLd%2FqVYRd2pOMLawhbYcTobFf6hfJwyOLxfil3q4GrILSlWKeJG9pj3l%2Fco9XGY79K6nPYHcU9186%2FnqQLbwGCwfbXa5c3cOmCNM1zcz5nAHXOwCusLck5vKJ0O5nEf0giJlAlCknjrE%2F%2FptH3zvlzj7UDsomwQnVSf4IivQWHzTmUnvInKiAW0x%2FYpwToVALvDyYdcp2gCz0oLWe0dCbzE54gHfrgsSYXV628cBUfoAPKiW5bMoYytIiMEprUJZcxRvuBiYO4RqiPyDM87AI%2FPZUl2sXStU1q1FwH24%2FTNNSQiBwXzwigyAQwUdLkMlfBTSpQMFynoCFx%2BKeQeHRzTvOE5uArCXYltyssbxdwyHN%2F7VFbK5egKFsk54QSAsdWBsTgmLYNHU9uSEbtXCSAw8%2BHjNvnhrenNyzCP4aDBBjqkAXmiwVFE4oZkkFBw4aw302CWASEQ8iNC5%2BDl%2FKANZgHdGxbEsDMcwLl1ZiG4bUgsRRSYiUm98RHBcMLzADnQuVqRKCu6voDicnqF4cWQwyJl7XZDvolGo%2BG6tGop76%2FEBQNgrxybs3DZzq8zHSXkP%2Bt30%2FgkS0H1UVVeTN8FvEk%2Bi2Mk%2BFa6hPe6rck6H9VUTnashYHacBOmzEBjfykzDC3jPZlO&X-Amz-Signature=bea983862df41e83e18379093cc0f2c3c9a124ee35178bdc9bb627c198b2fc99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
