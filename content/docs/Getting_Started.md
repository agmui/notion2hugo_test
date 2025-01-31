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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SG5II7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEZz1yRLfP%2BDrWxTDKkRtd9rYCn8jOh4GI6tA0iKmdwAIgJh2LrfPClIj4k4vs52qkgIzQ5BluXLQAzJORjn8%2Bkm8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEGnhMPgIzDRnTApyrcA7ulJFRl6vOq9L4kc4deZzVZC%2BKwTq6gAvHS6OJl3oocUd7qzQVtcn%2FBkP%2Fo1FPFxy%2FCbtZnOslckP9wprlOOaCPWoKqkDesc7ukS5ySxdA9vFlp3EBWWWXqchCXNz9RTHRJxV2oameYYNnx%2FJEUy7%2F%2B%2Fv41J27M2NWn6i%2F%2FfJyISIfnte6X0Ksgn6La9RyJgn%2FNkQ4p3q8Ok3EHeTEoBvsADM5ieAmoSlKBcVOIC%2FREfZa7HUJAiov2qLzwW2LFNXA%2BArkKgTinTLEX4djkZkipfRK4Zfh6%2FwNiDwKlsY1Yl1lXjXyaNHOmZEF1TOVO0Nk%2BSq%2BjK1FUP2FCKN2b3Nx5G7JYdChxaUdhCb9TTYgV2pcrF467tzsWrFSfK1Cblo5Af0K7w2Uoi9GNS70kQaEY1IGl57kFgOYGbXWVqlLibavCE0jhlMxCG%2FUxwvEIbc%2FkGrkzjQMz6uqu%2FHUpQ6iaCEdbjHQNqg%2BXFSHtbMQxaz3Mfutn0CfKpobDvbGofGXlHseh3RW2sPNMpLbetlild7aWpftlSrAS%2BTzcUAffWsMlWBtQNdE8jzsOVgZelGkeE8AWlkUuY3rdRBPGt3BXssiaFT5kLz4ZFh5ou4uNTCJRmnNRhcqEgKKHMJnY8rwGOqUBeBm%2BrWze280p3qcs9kAHrGdsqSKO7GPGMNNsmzdNuajOjvfaJaQePOoFmW%2BxQfgyDZ6W5pfAXb2yOsWP1S%2BmWo9xVpPEfkKQd%2BCXV3rCRAlPX09xj8tYcq4%2B8IncBrp6Iix1ITH9CIQdKe%2FOFdvIEHoq9GHhr8AOU9qIG%2FEzmHrE0GJyYr955Ix4Y1eAJS23IZS%2Bm1luDd7q7vESkzqT0McZ73FJ&X-Amz-Signature=a1cd5db3bf148c4c121d1d74e7f85464e3aa22b224ce6194c221c9f9193c2e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SG5II7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEZz1yRLfP%2BDrWxTDKkRtd9rYCn8jOh4GI6tA0iKmdwAIgJh2LrfPClIj4k4vs52qkgIzQ5BluXLQAzJORjn8%2Bkm8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEGnhMPgIzDRnTApyrcA7ulJFRl6vOq9L4kc4deZzVZC%2BKwTq6gAvHS6OJl3oocUd7qzQVtcn%2FBkP%2Fo1FPFxy%2FCbtZnOslckP9wprlOOaCPWoKqkDesc7ukS5ySxdA9vFlp3EBWWWXqchCXNz9RTHRJxV2oameYYNnx%2FJEUy7%2F%2B%2Fv41J27M2NWn6i%2F%2FfJyISIfnte6X0Ksgn6La9RyJgn%2FNkQ4p3q8Ok3EHeTEoBvsADM5ieAmoSlKBcVOIC%2FREfZa7HUJAiov2qLzwW2LFNXA%2BArkKgTinTLEX4djkZkipfRK4Zfh6%2FwNiDwKlsY1Yl1lXjXyaNHOmZEF1TOVO0Nk%2BSq%2BjK1FUP2FCKN2b3Nx5G7JYdChxaUdhCb9TTYgV2pcrF467tzsWrFSfK1Cblo5Af0K7w2Uoi9GNS70kQaEY1IGl57kFgOYGbXWVqlLibavCE0jhlMxCG%2FUxwvEIbc%2FkGrkzjQMz6uqu%2FHUpQ6iaCEdbjHQNqg%2BXFSHtbMQxaz3Mfutn0CfKpobDvbGofGXlHseh3RW2sPNMpLbetlild7aWpftlSrAS%2BTzcUAffWsMlWBtQNdE8jzsOVgZelGkeE8AWlkUuY3rdRBPGt3BXssiaFT5kLz4ZFh5ou4uNTCJRmnNRhcqEgKKHMJnY8rwGOqUBeBm%2BrWze280p3qcs9kAHrGdsqSKO7GPGMNNsmzdNuajOjvfaJaQePOoFmW%2BxQfgyDZ6W5pfAXb2yOsWP1S%2BmWo9xVpPEfkKQd%2BCXV3rCRAlPX09xj8tYcq4%2B8IncBrp6Iix1ITH9CIQdKe%2FOFdvIEHoq9GHhr8AOU9qIG%2FEzmHrE0GJyYr955Ix4Y1eAJS23IZS%2Bm1luDd7q7vESkzqT0McZ73FJ&X-Amz-Signature=2a2c379ccbca32f4377f7fb911e755b986aa2c3ebcc8d16e1345239a4281eb69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SZVD7G2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2Bq78eZYKox78myrXQygCRKlo6K4fRetUM7yr3%2BtXBQIgFUAWRlqgjCRP8h4%2Bu7QltFmS4X7KveW5hWIzvNVkhoIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLtlUXUkQWBNJT4oCrcAwV6db8j%2BKK%2FFUyQxnoL9KI1LJ4BWK12ZAAoMSerDWr%2B2xix3gHq0kEDTnpxFyFWB0VsYMfHU%2BSGRxts2VCZkTmKSfRL3Gv%2FyHn6f9uyfOw%2BoQhNKwSJrVV6uHeolAtmCG4b7u%2BIDkYxRjXYQxNLRyedbMUH6gvpSddwWv55Z8LKHhKwiAjTLtCMOQnXquJLI5tJRMDVU%2FAxEbtbwYnoqNWVWqqwFk0KmdGfd9K1tkEvqDCF0cdo3cnUVolLHimmQ5ZadcYje%2Fk%2BzIPmKfbF2y85Ti4jZex8eh57gdjNIPZ%2BxE5s2NAWd0y2VFG5onUIJDyOM0l7uiS3IO0Q%2BonL7Yubx2KcwtjEeHffZvfI3gCHYNfL1OekyYAIgw8kQ8HSedcAeuEzAFZVr4AMXz9qj%2F7it%2FrNtR7ovwVvGh3y51e26kJy%2FiMhONLYXPnpIJvxHbxmUgHY%2BcaRss5ClkUPPWVAA%2Bwhd9roP7T96sngPPFxk56MuIMtXaSzoWSTBN6ggxIVPU42%2BNVMlVH3RMaRB5UX%2FYuOR5JxZncfHWHjxq8dneXNNjeCOM883E4oGrwQlhgOqhwGN%2FctsL0%2FOM5eCzBh9A0wDjFCYop7%2FV7rDtuf26LvfqpBK7ZSV2ScMNDY8rwGOqUB97jh2mEthxZ1U6NSmEbRHnmeo0xqy1OiETdXxELsQWM%2FDqf1x7NrlbyiDXEUFvBStSOeOKFhhTvmsYuza0Z7jGmZLGfoz4Mb8jmz5f%2FpdERuoVn2I%2B26jgOaZ5nViDCdfUhoZ11A4gLND1CiPa%2FcZ%2BCfpoCDCoVwEFQIO6lmGbjxhHfwl2zF%2FAh8C4Am4kJ0jxiuWYHl0cmrrHlGAmyb%2BWi04Bb4&X-Amz-Signature=4904f6ae9ff5cb60c23afe2430fa33040a5c06f2cf6b4dfea7f40f9c5028c14e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTORDL7O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB0PwOX7C0rqH36HyQnE9ji8d5ff9pwCIwkK%2BLR7NSqQIgc3dWcENgeJF%2FxRSMznzYbe74AAIya08wLnbeNMK75AsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYtZOtyaodo8If5uSrcAxvBJvWgNc3eWaiZNhKK3IZU5KHs22ZAPIqO7SD237SZtI061QOUGpnYvOmq36y3%2BSaSfgWT3troN2%2BiU0G1xzRHpxpqBYlpF2HEkoJpGttRpzaLEJXIcECCp54kVABNLbrLsJU2qTgges3HzbjyrSX20G0KddQ%2BlK32t7ngFaekMKVi2%2Bggm52XyZOjxqWP2mVsBA6DmeMWaihkT%2F3efKfX1QSjgAkhDVPW65cpyxmcSjEUJ6EQslrZK%2FLmTUjPP4k2mbdYdvxNIMLJ853nxM9pmW8GLbAy8Nr2F0%2FE1E10ycKoOPrRVBT9S6sW626lSbwm0EDP8NrS%2B9yoLosft9YTtaiIyaXTcqeePFKySPJWyUcFJsmgaaRbZ7UnQwttsu4fpAnrtWN8KSJ31d4rEKpGPhUFa7Qvl178wK0KgdFPapeyZ3J6kQUvff1DWWAqsgPkoB%2FoKr7XJD0Oq23fL9sNAm6qlzNnEzy30FXFOf0wpXgGq%2Bt%2BYxEo0n1LZhRmzU85FiyBchQJ3GrGQaMLFQpxqtzvkV7pZqpODexY78IPhU1A%2Bcjr%2F98f5wKwD1XMe4y2ka73a3HMR9GlYqms29hsUdOD6g6CC1X1d7%2BsEarWJZXaH%2BkdvWrlOgtGMIbY8rwGOqUBhqTPqA3n7U6bhI3L4PoyAb81tGgjOYUMEqJMmnsw96ALu5YFpZvwK7IryLpIFwMCWeQZrWbKwBEHqM4a6xHH3yzuKmeLR%2BzMT%2BFOg3HUVNU3CGzUWCnlj49cXsBqzBaOPkX8zybAblZiQW6gmaUqy1qQeHDt7MQ4LQ4tRb0SFvQMn2p1bNjk6fJ4Q7h7k02s4WEjqyL5T3U3zxABgHCU18xyazn0&X-Amz-Signature=fa96b90e607e1652044131d3e16759e8fd9cbba9f305dfc2cd9dce01a2df3f33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SG5II7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEZz1yRLfP%2BDrWxTDKkRtd9rYCn8jOh4GI6tA0iKmdwAIgJh2LrfPClIj4k4vs52qkgIzQ5BluXLQAzJORjn8%2Bkm8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEGnhMPgIzDRnTApyrcA7ulJFRl6vOq9L4kc4deZzVZC%2BKwTq6gAvHS6OJl3oocUd7qzQVtcn%2FBkP%2Fo1FPFxy%2FCbtZnOslckP9wprlOOaCPWoKqkDesc7ukS5ySxdA9vFlp3EBWWWXqchCXNz9RTHRJxV2oameYYNnx%2FJEUy7%2F%2B%2Fv41J27M2NWn6i%2F%2FfJyISIfnte6X0Ksgn6La9RyJgn%2FNkQ4p3q8Ok3EHeTEoBvsADM5ieAmoSlKBcVOIC%2FREfZa7HUJAiov2qLzwW2LFNXA%2BArkKgTinTLEX4djkZkipfRK4Zfh6%2FwNiDwKlsY1Yl1lXjXyaNHOmZEF1TOVO0Nk%2BSq%2BjK1FUP2FCKN2b3Nx5G7JYdChxaUdhCb9TTYgV2pcrF467tzsWrFSfK1Cblo5Af0K7w2Uoi9GNS70kQaEY1IGl57kFgOYGbXWVqlLibavCE0jhlMxCG%2FUxwvEIbc%2FkGrkzjQMz6uqu%2FHUpQ6iaCEdbjHQNqg%2BXFSHtbMQxaz3Mfutn0CfKpobDvbGofGXlHseh3RW2sPNMpLbetlild7aWpftlSrAS%2BTzcUAffWsMlWBtQNdE8jzsOVgZelGkeE8AWlkUuY3rdRBPGt3BXssiaFT5kLz4ZFh5ou4uNTCJRmnNRhcqEgKKHMJnY8rwGOqUBeBm%2BrWze280p3qcs9kAHrGdsqSKO7GPGMNNsmzdNuajOjvfaJaQePOoFmW%2BxQfgyDZ6W5pfAXb2yOsWP1S%2BmWo9xVpPEfkKQd%2BCXV3rCRAlPX09xj8tYcq4%2B8IncBrp6Iix1ITH9CIQdKe%2FOFdvIEHoq9GHhr8AOU9qIG%2FEzmHrE0GJyYr955Ix4Y1eAJS23IZS%2Bm1luDd7q7vESkzqT0McZ73FJ&X-Amz-Signature=07e8737bf29fc3997a61d11bb7ddbf2994ff0b791be82021c1d4c70762e073ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
