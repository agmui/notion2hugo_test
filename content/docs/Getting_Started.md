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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWQX3XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQChqvVkiJVnX2QjpnmhafivrO6i5x1Etbq3xGsbSWeh5wIgNJSnO0jDDe5q2eWdWyd6z%2BBt%2FGY%2F3ZqYomt%2BPawpfMQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLX91AMO%2Bgoow8ZPtCrcA1A%2BCCFDCgjTRcqzHlrsfRHWS%2Fv1NTUSSPKEeYVihJ5bvqZ9R%2Bz5%2BfMr20xXS3mrwfUWaC0%2FwBbl4lIFl7xHdy0TYAIglbSxS443UsVrp0G%2FOlHA323gzrP8BlBGuq10BcC%2Fbi1u0l7WfG8Ia3rCT2yksTGwK%2BpDe4Sv6mOieTSZ7rA7YmfLMeyRAARVcbsxy3YAPmgGRNeY%2FGDlMN2IX0chQsgtjrSXjy5faI2FCkh7L2BFAvUVIwIrGydgodf%2BMc%2FrXGKy4JgRWHnukv4gNDKKy5%2BZ50Fp9JqMx4jpm8K51qnDW%2Bx%2B8ggWe%2BwHdNkJ4WJzUdSB%2B0%2BVJ8KDb2v4xf8xO%2FKBxww%2FS%2BHaaPjWYck5KzTqBzVS6%2F6XAGZwJX39f%2BKFnSFeX6rO61gw8iS4STjZd0sdrolr9B0NudSLkv2sybNsWCnjc9ROBsQncxFo0AVGt5HVBoF0IyAf2Pcve36WQGrTlFGxsE5WjX62bf4gY9vXwUiCkBcdIFTo0TQnHnyGjVDqQJMIJGqZFTjUtf73ez30d4Ynn10uCbaoFcCfP2fjRQ0pqN8Cpy4zcmDH9oWpuDW7Ne3S9UHvLxaXDgf114zCABxC58tzZHJuAvR0DZRH67ti8WMTVpuxMPrFwr0GOqUBczpMhtjEndqAwEuNafaXJSUCU9l0XWex4iHAmoswiD2hn3JxKBPLliwWBRcVN25NDMa5D%2FV%2FDypGRYwyVMwb8gnPpvi%2FkOXz3A6qU98Be49PKxMwAyhLSJtHBAepvCRrNOC8%2FZbB45AoB8a%2FPobKJ6NqADsFM6IW5URKYFapq4w6upUHHEaPhY69cykl3qSGC7w2Afiy%2Fe2VAcSy6fUcqMl07MUS&X-Amz-Signature=64447af531b29a54189c531b5936ee6bb08669050cace1305ce19c5d86652848&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWQX3XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQChqvVkiJVnX2QjpnmhafivrO6i5x1Etbq3xGsbSWeh5wIgNJSnO0jDDe5q2eWdWyd6z%2BBt%2FGY%2F3ZqYomt%2BPawpfMQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLX91AMO%2Bgoow8ZPtCrcA1A%2BCCFDCgjTRcqzHlrsfRHWS%2Fv1NTUSSPKEeYVihJ5bvqZ9R%2Bz5%2BfMr20xXS3mrwfUWaC0%2FwBbl4lIFl7xHdy0TYAIglbSxS443UsVrp0G%2FOlHA323gzrP8BlBGuq10BcC%2Fbi1u0l7WfG8Ia3rCT2yksTGwK%2BpDe4Sv6mOieTSZ7rA7YmfLMeyRAARVcbsxy3YAPmgGRNeY%2FGDlMN2IX0chQsgtjrSXjy5faI2FCkh7L2BFAvUVIwIrGydgodf%2BMc%2FrXGKy4JgRWHnukv4gNDKKy5%2BZ50Fp9JqMx4jpm8K51qnDW%2Bx%2B8ggWe%2BwHdNkJ4WJzUdSB%2B0%2BVJ8KDb2v4xf8xO%2FKBxww%2FS%2BHaaPjWYck5KzTqBzVS6%2F6XAGZwJX39f%2BKFnSFeX6rO61gw8iS4STjZd0sdrolr9B0NudSLkv2sybNsWCnjc9ROBsQncxFo0AVGt5HVBoF0IyAf2Pcve36WQGrTlFGxsE5WjX62bf4gY9vXwUiCkBcdIFTo0TQnHnyGjVDqQJMIJGqZFTjUtf73ez30d4Ynn10uCbaoFcCfP2fjRQ0pqN8Cpy4zcmDH9oWpuDW7Ne3S9UHvLxaXDgf114zCABxC58tzZHJuAvR0DZRH67ti8WMTVpuxMPrFwr0GOqUBczpMhtjEndqAwEuNafaXJSUCU9l0XWex4iHAmoswiD2hn3JxKBPLliwWBRcVN25NDMa5D%2FV%2FDypGRYwyVMwb8gnPpvi%2FkOXz3A6qU98Be49PKxMwAyhLSJtHBAepvCRrNOC8%2FZbB45AoB8a%2FPobKJ6NqADsFM6IW5URKYFapq4w6upUHHEaPhY69cykl3qSGC7w2Afiy%2Fe2VAcSy6fUcqMl07MUS&X-Amz-Signature=56620deb27adf0d7268fbfa47439f6477eafe0953c6d48857dffad050d24c6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTW32OZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBpz3DWW5bUVfT%2Bb005DoEsS1EjkUdQw4XSdNrKUugwXAiEAh59FlUJWM2vYzEUUOZqqmsaSFb5h7z02seJIiHCxmZkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAUeBy%2F3%2FCmsJ5f3wyrcA26ddgmHhJw%2BodI3moh6FTc3%2FEdQY2ogTAFvRdqqE3HzIuhyp7VEHLla4Gsd66zPnNefkfOuc6PeDu0OLbGJpKBrhd63Eran5dLwk4scAxJ5rMwGwWFcrpUo2C3w1OpIzCnGTUkPgANx2l02oR2F%2FxckOMwL8ddsmU3TjxQT6B6j67qig2HTeWBTCuDtFU5yTIb%2FJfDl9A0Ct7Vqk95EuLVYf2IGxQDXmlmPKUJtOTxRyK6ebck1mHliC%2FLxAQm4mG8ty4kwyDDiut0flXSx%2BzYIw7JXVLpb00dregsrpFGn9jPN9ugjpwLxE%2BABuXJSA2wqBqzii9V9tkOR9WE6Vri8LjBlzCSz%2FvjeGgmTesgVWAqG%2F15CBUIVNq6mGlHKqxGimuXsTwwPqsA%2B7pHNfhVT08GYkmu71RsKaIuifP%2FliSb1xtGJaGpHnLrcL76fcHqju9n1nH4HDuA4vuXshixLRx3O%2Bx1FvknlJHUhQagvi9Q%2BS4XkWRGHYLVsGEYqVnJ0nWcd%2BcOvlqTQuAtkEuxs0g9KXLgfqGWErnvr%2FlilcGj8yyLpO6uLyI9%2FadR1rs5%2Ff2JfsdQXlfhG1%2BbW8FY%2B7dtJKJhdc4Gm8Ddr52y1dFB5mMzsWLoCIo7MMKrGwr0GOqUBmJoNmyZWl5PIIhmabdq%2FEgTWFPYYr0BDUxiNSP0HrXVykTiR158%2BCkfCY5i%2FtcFGrSGh81Gj0OmtqA2BfJUf%2BxGyR3gaDhy3AVfmt7FIBhM5ruEUB51cZmFbtfab6pXKJst90Y3ROq7InYoCzZpviJp%2B0Ii0gzgYOYYOAN090NCdF4IYQQbE3yARCp595JXh4Wt%2B%2BD8XmX0R0weRQKHPN6EXORTZ&X-Amz-Signature=afd75e6ba0b34839a0351edb0778c6c32df7e15c843005337042635517d136d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32P5BBR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCaKL%2FDq0fCa5wrRKzULpLla2Xj4NCRMEH%2BqKkw%2FBhbJQIgSKsk79vVEyEK%2Fak13iBCB3sIHCyU1WN7TuPipC1RPFMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIxoKSjpCrexcv6acSrcA8UrhBat3Em0lxTmicT1vUOZEvb4VHTzIdQxUMYFIwWyOEf00E%2F54HBOxOplwEhIIH9AG%2B5YN85EN1iHgd3UX%2Fttd4JZV88o60G%2FhrO7FQVv%2FddsX3vuRYR5iLMgCFtbcJUz7DIgUmfilMeQxZqU73z%2BYTQNazVl%2BUvRo1iLpLHuK2sCXBVoS0uXz8SZzmYZyOoJm2ATCtMhItwQ5tyXrnZV%2Fs0cizgWQRg9ZL35NZHLOYltarymp5kPZaSxArFkVP8eZECxF%2BVCZ6%2FAVzpvVOOJJIpYMmY7mKe3kGFfF7uRpmHrxTdORfWoED8M9d8yGDEm0klnUU9PwDji06d0%2FVkC7sADSsmtatliIZ3NBatad8o2tl8c1ik7bOI0lVR%2Fpx2oMPb%2FFW7YB06EnpVeXwV76%2BXdbsYimYxOLEHWTk0EXIPBB%2FEhfLXZpg6GdywuxA7yg8j28v1ivnTtmthBJXr12fH0yxrExtffXtBBaKpy3TRL3hggpllzQziZCVgK%2Bm6zjHJs4mSd5JxpnRBSwnLXgvMivc6q3r%2B4aO5y%2BOVgkiPXvXNwV5alYs9dV6r291ak76XF7WDgwFB4B%2Fjoq5ghyCj4C3S3zUllVyJ0SCTi%2B2CYKEdQvwtn5jiwML3Gwr0GOqUBFnMp25lnsWMku9pCYUQ6uLRcHR7n1wL5TI%2BMFyws33zY1YizH%2FEAKFMjM6uLDX7fBVd0%2F5b3NHWxgKvHcun9rEDth1OheT0MWDnNcR9lArhmXxFBPPkERLlF4f5l4vIvyKtBhZsuD0BnXMQMkTVciG%2Ft4VP7lXhjjZ4gW4iugdQMk7HT8TqDTgKmeTyuB093Ww1P%2BMrRxHW%2BopO3QMNGAMAqnVY%2F&X-Amz-Signature=b257889ee13462eeb5521f1d0c7c0e0629449bd95c9ce96b8f57ee5b14f80846&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWQX3XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQChqvVkiJVnX2QjpnmhafivrO6i5x1Etbq3xGsbSWeh5wIgNJSnO0jDDe5q2eWdWyd6z%2BBt%2FGY%2F3ZqYomt%2BPawpfMQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLX91AMO%2Bgoow8ZPtCrcA1A%2BCCFDCgjTRcqzHlrsfRHWS%2Fv1NTUSSPKEeYVihJ5bvqZ9R%2Bz5%2BfMr20xXS3mrwfUWaC0%2FwBbl4lIFl7xHdy0TYAIglbSxS443UsVrp0G%2FOlHA323gzrP8BlBGuq10BcC%2Fbi1u0l7WfG8Ia3rCT2yksTGwK%2BpDe4Sv6mOieTSZ7rA7YmfLMeyRAARVcbsxy3YAPmgGRNeY%2FGDlMN2IX0chQsgtjrSXjy5faI2FCkh7L2BFAvUVIwIrGydgodf%2BMc%2FrXGKy4JgRWHnukv4gNDKKy5%2BZ50Fp9JqMx4jpm8K51qnDW%2Bx%2B8ggWe%2BwHdNkJ4WJzUdSB%2B0%2BVJ8KDb2v4xf8xO%2FKBxww%2FS%2BHaaPjWYck5KzTqBzVS6%2F6XAGZwJX39f%2BKFnSFeX6rO61gw8iS4STjZd0sdrolr9B0NudSLkv2sybNsWCnjc9ROBsQncxFo0AVGt5HVBoF0IyAf2Pcve36WQGrTlFGxsE5WjX62bf4gY9vXwUiCkBcdIFTo0TQnHnyGjVDqQJMIJGqZFTjUtf73ez30d4Ynn10uCbaoFcCfP2fjRQ0pqN8Cpy4zcmDH9oWpuDW7Ne3S9UHvLxaXDgf114zCABxC58tzZHJuAvR0DZRH67ti8WMTVpuxMPrFwr0GOqUBczpMhtjEndqAwEuNafaXJSUCU9l0XWex4iHAmoswiD2hn3JxKBPLliwWBRcVN25NDMa5D%2FV%2FDypGRYwyVMwb8gnPpvi%2FkOXz3A6qU98Be49PKxMwAyhLSJtHBAepvCRrNOC8%2FZbB45AoB8a%2FPobKJ6NqADsFM6IW5URKYFapq4w6upUHHEaPhY69cykl3qSGC7w2Afiy%2Fe2VAcSy6fUcqMl07MUS&X-Amz-Signature=9b62512fda79c4b47889572742b6edfb0fbbd848e6ee51f8c335ab36f9ef41ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
