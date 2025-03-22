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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRE4JZH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDlsri0wqnF49HKI9L6kmctQMt0SglHm0ohSThyGLLEaAiBvNr0pwdAKXNN3%2BpQFxTCDOFyFx9Rg1srB6j2%2FmrzeHCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM64mQDlXljz8n5jirKtwD1odOW49YPfvu4uag6jYac8MiCYRjykp%2FhxuVncMqwNOXvja0MBJeG6d2RR%2FS2AXrrT6yPopIeIl3TGfuC3A9uP8SsBqCY3NhbIB8JlTrWtdQ%2F8indO9Z6MJ1EW%2FHUj4QFz5qe5wsN0SoOu38%2FrZ6xaEICLhEH4fvSHw8IdWgeGHuZx0PQDUmFRNSavJh5r7WFo8nqBZn9T0Xs9fNa9Qlv2WRkh2lM6trCJJC1u%2FEPL%2Bv1OkHdqnIWaB57dwRFmJaLVj5FUpFcPYghM%2BoXVpqG5q9VOheyJkDuaGgXPNy9gSunKqI2531sNSC%2FD5LyXwcfBFNGIz5OCayukCg3gf6iwo2l2A98sguHQ%2BTuNVHrTauLKFBrtT7NAkXzQtRIVRV6anymccqow7PivPCi8quvRoI7Mmv01OStSyH5xubpfCz1i3CplmLz6L7xR9vt%2B8OLrmyFbVuwgnc%2Br1dBVaHf73Ttiue7qULzeeJG%2BSUAL3xfZ%2FuVe0z%2BVh41X1Hfjzz2sSeQ4g9FsZu6q36%2FZsxkMnjI0vpkQ3n3cH8xMnNDD1bXr2rJPFb6PfBxRPj0EQgppE463Me2bmrej2JRVyIQpSVaF9PdHMY7bnfjJRcVIK96Pnv%2BHGih5g7wCkw0fb6vgY6pgHNVVZ6x2uzA%2FoOdC2qEPWV8PdGtHPcXngeAdn5bf2KZ%2FsfpqnX6dDiNTK9NY%2FlUiKV42UzsAa%2F27cxrXTEo3XV8zSIvS0s%2By1mjXLO84OZjxrFedD%2BZlTH595qO3oFriFQSX4YIByW4PRv8R3iR101bBXQNiKz84fVSe6dz%2B3d%2FxC993ZPCZe7YzJb2ZtaQ2OG%2F0h085pCjiGeHCTNQFxtA6q%2F8GAf&X-Amz-Signature=e504a0eddb6e564c89469ee91a6c4f99f4943196728a727c4fb2d5b7a7e3589e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRE4JZH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDlsri0wqnF49HKI9L6kmctQMt0SglHm0ohSThyGLLEaAiBvNr0pwdAKXNN3%2BpQFxTCDOFyFx9Rg1srB6j2%2FmrzeHCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM64mQDlXljz8n5jirKtwD1odOW49YPfvu4uag6jYac8MiCYRjykp%2FhxuVncMqwNOXvja0MBJeG6d2RR%2FS2AXrrT6yPopIeIl3TGfuC3A9uP8SsBqCY3NhbIB8JlTrWtdQ%2F8indO9Z6MJ1EW%2FHUj4QFz5qe5wsN0SoOu38%2FrZ6xaEICLhEH4fvSHw8IdWgeGHuZx0PQDUmFRNSavJh5r7WFo8nqBZn9T0Xs9fNa9Qlv2WRkh2lM6trCJJC1u%2FEPL%2Bv1OkHdqnIWaB57dwRFmJaLVj5FUpFcPYghM%2BoXVpqG5q9VOheyJkDuaGgXPNy9gSunKqI2531sNSC%2FD5LyXwcfBFNGIz5OCayukCg3gf6iwo2l2A98sguHQ%2BTuNVHrTauLKFBrtT7NAkXzQtRIVRV6anymccqow7PivPCi8quvRoI7Mmv01OStSyH5xubpfCz1i3CplmLz6L7xR9vt%2B8OLrmyFbVuwgnc%2Br1dBVaHf73Ttiue7qULzeeJG%2BSUAL3xfZ%2FuVe0z%2BVh41X1Hfjzz2sSeQ4g9FsZu6q36%2FZsxkMnjI0vpkQ3n3cH8xMnNDD1bXr2rJPFb6PfBxRPj0EQgppE463Me2bmrej2JRVyIQpSVaF9PdHMY7bnfjJRcVIK96Pnv%2BHGih5g7wCkw0fb6vgY6pgHNVVZ6x2uzA%2FoOdC2qEPWV8PdGtHPcXngeAdn5bf2KZ%2FsfpqnX6dDiNTK9NY%2FlUiKV42UzsAa%2F27cxrXTEo3XV8zSIvS0s%2By1mjXLO84OZjxrFedD%2BZlTH595qO3oFriFQSX4YIByW4PRv8R3iR101bBXQNiKz84fVSe6dz%2B3d%2FxC993ZPCZe7YzJb2ZtaQ2OG%2F0h085pCjiGeHCTNQFxtA6q%2F8GAf&X-Amz-Signature=add4b6815bfea4dfc1b9e541fbc5d44faaaf219ac8f864726a34b041c47d9413&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQ2ZNUT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIA3XMt6YGQW2zOhgqt1bvKr3L8FYPr2iS%2FkovAl94z%2BgAiAluC%2BhsnfCu1TYgUNqV3g7zR55ZxunCUncm9vf%2BUqeUiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZJpsJhsF5kxQujUKtwD0fmwROihmu0cNocLoBB3qZvWr1s962bY%2Bvzeg26YQj6LvIKZHg9Nf46hTAGdfaWzYyGY8YFJg4X7%2BF3QoxDQ%2BIVSNefYeC9zGStuB70vKDXadgKvWVI9Nt%2BuDiH%2FL5t%2Bcxl0unPL%2FUvZhW5D%2FM%2F5DSFkVpXIecsYwlYjhb7ka%2BLDuw9gyUMNDgeLMyPJixNNIyp6L7WgF39kvhWAGKAFoGvst%2BglgB7IOWQ5U%2BVuE92tcC6wiKE0L1CcRUA7qi7ARshLCxVpbaNPnKvF%2BeZxg1vkoPop%2BhDKLyhhiV%2B5c%2FWKF%2FMpBfoU4kAYpYP3kJv8FMKamiSdui2e%2BoBNN66THTuhLjtTRVduw8xNeti0sbWizfjbPkrgDraDpTuIjH%2FjdwEfiH5YPWfwkpEWyau5vJvyLIOSNsz3BExNLAZvwCiz37xj3bp1cXSug9YTx5bU4cdxvFUO8eqA1u7PTgsm5u2qwQz%2F44KxqwhkmHDF%2FEfaHBxKLhH3BY97DpR%2FrYszub6nYeH4KMnwU122Xoja3FafC3CihYrTMYhrSquUgWz5eLIY9RzqmWHqZ4m1WUJmkjTqdf2qOtSexNVrCVuyx%2FTeYs%2B2whuxI%2FfYXSIygO0Tc2QgFIhx2NNtDPUwtPb6vgY6pgHjzoIH1WClIMZf6WbQiTQ47rcAtD23pKXdxpTYNsDUDSAZT9LYJYDjNWDQJy0Qsg6hoGV37DG02zD%2FTwKbQksAAS9ksU%2BqwYk6B23tcrleLvX6Q3QgcO%2B%2B4LkDWX5eJdV4P9fX8xB0rkch0iRv82BPHR4%2BBCm%2FsodxRo%2FjYWSAFJ%2FWoI6AGZ0BuU07Mb%2FUYsVOS%2BMaNNGqoE0wyT5dseFSNXLoe3BV&X-Amz-Signature=960662650318b0e9f3f47fce1ff6c9ac2ace2aa5af45dd4b31ab07876b080ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P2WPJ5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDE6Rey0SS9RT67aMWaXlNj0VIsGToxyxrZFmZE8ofn5AIgT7eydKKHWbCp6JNA7qJF4Rs2VwhV1qZ3zNNo1msRaV8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAwD9NY6phrn5xuircA4kORAUR684pJC6DZUd3vtklbsAVjLdAI5mrDRRlZ12e0JFbZmeGMeehYIlh3cDsn%2BrnOEwEnT6IEgyQ0DX%2BE9UaNcX4MXpiLasYhqkmgNDLS6WSpdh9VkTVPn%2BCTgftxP3%2BQ4hJTrQ8ThR%2FZApU1708mATC8qb5Gc4%2FPHETeNfm6Bl29DMddSSoDcGk2oQut%2F1l67lf4TPy2B0U%2FnK9pahjEaLlQ%2FyEg30vp%2FthCVqT91kpp3HC%2BYSztKjNqttMs%2BhoYYNaztdJB69C8Tfvs9ot8%2FOnEgmJwJ07hXfWS3K2jomENcBHSAu8ALVPoYjqt2jUzjCOlwZpuQjaYoSsL26ZBWJgffHg%2B50Nc1wufcXoRoVACNFLV9kFz0mk%2BxgK0eZtvDxwMld35DiTAwm%2Bz%2BT1ciQMBY4P1T7ke52MIS6QyhGLcNYIjYw41NPQbAnO5nyfnVMMc5pXLe46DHEg50UW3LhIeIaHKRGT6SffBj2c3tCG%2Bz0Jw4FEGqCNNlU50tDjP2gWNsii7VVxRCQHocU8YbTMSPlxE4%2BeX2QVGxWnoB4g9gvvj%2FNvZNTPtk4gpvbFp44FSjKrkEQ%2B79ENdct6LN0Gl2WVL%2B1CBgKkuPs4fUWEwReNGI3rVCt3MNL2%2Br4GOqUBKF%2BmsfulIouhPFscuaGW%2BIIpGVz1kqRfoB9tQFmq0Lgf0l9lkSe2Ahnsh0vW5FXDcqJg2uV07%2BzKUrlRGu%2FLTPjMXqr1Dlk%2By7pXusStDIL2bsebYLqYxuiEwONhURbRor1IGSisDL4hx%2B1Pw8LQTv9XP54u2Z85%2BUt%2FhC0AnCvoUYTeRzhjP9%2BSeQNoz3gpx2gwTWrG6jWpGIscdHmjA9AgmOj7&X-Amz-Signature=2f45a05db375c2ceb8d75ca3bc3e7a19261556dd5fd43e1c4fc93e87e2c81ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRE4JZH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDlsri0wqnF49HKI9L6kmctQMt0SglHm0ohSThyGLLEaAiBvNr0pwdAKXNN3%2BpQFxTCDOFyFx9Rg1srB6j2%2FmrzeHCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM64mQDlXljz8n5jirKtwD1odOW49YPfvu4uag6jYac8MiCYRjykp%2FhxuVncMqwNOXvja0MBJeG6d2RR%2FS2AXrrT6yPopIeIl3TGfuC3A9uP8SsBqCY3NhbIB8JlTrWtdQ%2F8indO9Z6MJ1EW%2FHUj4QFz5qe5wsN0SoOu38%2FrZ6xaEICLhEH4fvSHw8IdWgeGHuZx0PQDUmFRNSavJh5r7WFo8nqBZn9T0Xs9fNa9Qlv2WRkh2lM6trCJJC1u%2FEPL%2Bv1OkHdqnIWaB57dwRFmJaLVj5FUpFcPYghM%2BoXVpqG5q9VOheyJkDuaGgXPNy9gSunKqI2531sNSC%2FD5LyXwcfBFNGIz5OCayukCg3gf6iwo2l2A98sguHQ%2BTuNVHrTauLKFBrtT7NAkXzQtRIVRV6anymccqow7PivPCi8quvRoI7Mmv01OStSyH5xubpfCz1i3CplmLz6L7xR9vt%2B8OLrmyFbVuwgnc%2Br1dBVaHf73Ttiue7qULzeeJG%2BSUAL3xfZ%2FuVe0z%2BVh41X1Hfjzz2sSeQ4g9FsZu6q36%2FZsxkMnjI0vpkQ3n3cH8xMnNDD1bXr2rJPFb6PfBxRPj0EQgppE463Me2bmrej2JRVyIQpSVaF9PdHMY7bnfjJRcVIK96Pnv%2BHGih5g7wCkw0fb6vgY6pgHNVVZ6x2uzA%2FoOdC2qEPWV8PdGtHPcXngeAdn5bf2KZ%2FsfpqnX6dDiNTK9NY%2FlUiKV42UzsAa%2F27cxrXTEo3XV8zSIvS0s%2By1mjXLO84OZjxrFedD%2BZlTH595qO3oFriFQSX4YIByW4PRv8R3iR101bBXQNiKz84fVSe6dz%2B3d%2FxC993ZPCZe7YzJb2ZtaQ2OG%2F0h085pCjiGeHCTNQFxtA6q%2F8GAf&X-Amz-Signature=b83a74cc8b477f0c176e9262c2d77f7b07ed9997aedcee9bfbdfb2c8517a867a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
