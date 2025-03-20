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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNFAXZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDJXD1dyJVbjE78v9ig1OQgDu%2BINqJPoxQhVIfhaXrAFAIgCwWwpWy99%2FPoTYX%2Fsvbn%2BopUwB481xdtyjP07H%2BYmL4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHY4Ls90T%2FeJi%2Fp4RircAzpdWA6cgoPR%2FcKlM5hpjzGoMVmjK4nxf2T79IhfeNvjX61Vp%2Fd0VWhVMwfuhmvOr7WWNOupBPINI%2B%2BXD69M4xCNXJ3LSZa3M7p8EDbvBggEgmZLTVulZNJxnExowjilIpFNCFgYI3ti%2FoS93N2Hfq8sVH4eE%2BuikWS9xQEH9779DX%2FKuDnsk9vLr4VGTomuO85NzOtkD93615boSFxc6YbO182Td4vqbml77Om31cGGlwwkze%2B%2F86BFLb4pgVnnxSqOItt2i89pFTKbuTQq1WuetBSb%2F0AleRy9blLhq9O%2FrrP22wFCMhdsgJFBmXw9j2%2BSKGTJhMQq1dUj%2F8SQvnM3P%2F7JlPRGa7nX7XIWDUF50VcVsLVDpZXSjkiFxe12zb4%2BjsnM5O3VpaXKDNHEZpy6XwXLKrbtTbC3Q%2B%2BEhkta5JatWGhc9F2dOSnIO9YxwfgjWWtlH8fNIlyXSUeILsP9mjvvvtD32049QRhUe4GvDcUyizDp%2BxlDl5Wq%2BF5mnaywPWrUT3cbqOu0LEdg7MOfH8eeIxYfY3aBWNquCOZkhmhgrlhNWaD0x6Ut2vD4wb8A%2FHgokAiGXLAqfWoWMKooxUbnXVpZtCc0fA3aKAR0wKIvv8uIPrxqoHxfMNDY7L4GOqUBaGGzwVOMaMtmBX4mXFJhlrrtcsoTrl9D8%2BlIUq44XmXtsRe1mA45tdrdxKP2NhVtzED1RntJRoJfIu2rQv8JJ%2FJqbB9Ql0R0R%2FIzvdFfNNLNUoO4mIJE4VANrYihU21pblwTWeQNn9LjqbjKH1i4YgpMHPcUJi%2FA96y8Lhw9ypIzuENO%2FOoLcVcmA8P9iaIUIBKNgeYZUTo56XaaXRVPURc02FYH&X-Amz-Signature=32f1524d818badb0ad7b7b3ee5f2d17ca3e8f83728aa24e211ec0258a0b2bcf4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNFAXZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDJXD1dyJVbjE78v9ig1OQgDu%2BINqJPoxQhVIfhaXrAFAIgCwWwpWy99%2FPoTYX%2Fsvbn%2BopUwB481xdtyjP07H%2BYmL4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHY4Ls90T%2FeJi%2Fp4RircAzpdWA6cgoPR%2FcKlM5hpjzGoMVmjK4nxf2T79IhfeNvjX61Vp%2Fd0VWhVMwfuhmvOr7WWNOupBPINI%2B%2BXD69M4xCNXJ3LSZa3M7p8EDbvBggEgmZLTVulZNJxnExowjilIpFNCFgYI3ti%2FoS93N2Hfq8sVH4eE%2BuikWS9xQEH9779DX%2FKuDnsk9vLr4VGTomuO85NzOtkD93615boSFxc6YbO182Td4vqbml77Om31cGGlwwkze%2B%2F86BFLb4pgVnnxSqOItt2i89pFTKbuTQq1WuetBSb%2F0AleRy9blLhq9O%2FrrP22wFCMhdsgJFBmXw9j2%2BSKGTJhMQq1dUj%2F8SQvnM3P%2F7JlPRGa7nX7XIWDUF50VcVsLVDpZXSjkiFxe12zb4%2BjsnM5O3VpaXKDNHEZpy6XwXLKrbtTbC3Q%2B%2BEhkta5JatWGhc9F2dOSnIO9YxwfgjWWtlH8fNIlyXSUeILsP9mjvvvtD32049QRhUe4GvDcUyizDp%2BxlDl5Wq%2BF5mnaywPWrUT3cbqOu0LEdg7MOfH8eeIxYfY3aBWNquCOZkhmhgrlhNWaD0x6Ut2vD4wb8A%2FHgokAiGXLAqfWoWMKooxUbnXVpZtCc0fA3aKAR0wKIvv8uIPrxqoHxfMNDY7L4GOqUBaGGzwVOMaMtmBX4mXFJhlrrtcsoTrl9D8%2BlIUq44XmXtsRe1mA45tdrdxKP2NhVtzED1RntJRoJfIu2rQv8JJ%2FJqbB9Ql0R0R%2FIzvdFfNNLNUoO4mIJE4VANrYihU21pblwTWeQNn9LjqbjKH1i4YgpMHPcUJi%2FA96y8Lhw9ypIzuENO%2FOoLcVcmA8P9iaIUIBKNgeYZUTo56XaaXRVPURc02FYH&X-Amz-Signature=d4f084d673845b7f623a651844f64abe1b00dcff1d6b68c8a869699c39b86da8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CRMJDG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFjFMNF0M%2BoWJV%2BHiYeaHE6KmUEdb5lN6W2F1n8NMyDPAiAyhAHB1eAZxyciQl5Mm9IR7R9khrNmw5S5CdWnn6sATir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM0EbJ0GJFYXt0hFHFKtwDecJMDuqu%2BFtVdcNq9k5xtmumFWW3clweSrasoY708g0OFO9Jb1JErv9t6E6c29QGZq3rsJ7LUsDRuQxGRGBhnYcBhCluXVsLz9W33NhPaoayXUarXiMWJTIKWgwcg0SC%2FklCXoKMf9fZClx05oeEf5o1xElSNv%2BpunwTUZzwhIiEFiRb1RZYnLbHi3TlEHO2ea1uhXDy3Kp3hORUgdUP6s8rOigU3HmAIwSTuEYRw1778xjxi62hIhs9i%2B5GNvCyhVh6O2FOJhUL33SJFxW2zJhLnsk6MQSM89OOa9ai8nsxaJ9no8AHuyognjW0yQ12FPzomdsJLWvH8K%2Bt2zUlv8aok99YcPYtVy5MjHy8fXJpYBEgupnpo%2B9sy3iNCOqM6Rtrbth1jcidNs3EcI6mpA7o2cGRaxoCjumr3svFNzXKYj6CWi%2FlxVgSl7Pglj63CCiuYiehtorxxntdVgc2oHkALs0n2byrkOyai%2FGhgcEt1BltSVV4usZxSbZg8um37FFJoOkxJgxTM%2F292hNVr9BBYkwT%2B5ON2qw5htkw75pTv2l4npDned8uv5Tv0J8%2Fd7bGbdoycLzeIF8wrFbTqsnPK3h5WjEO9qjughXtvoja%2F7t15PdO4XKy8WAwidnsvgY6pgEgZ5MvsTCdBVsnETeAbnuEmfJh6%2FaDBenTlHHQyhlvj59inyRbFhmTAU%2BTlxjTXyJspWPNFI3noiyoSlXd5xVBpnzst%2FhDWBYeLbOxSWeSeKomRjNrf2KTTJUioORYAv%2FxX0ldlGFs8DmQUHmgfuW4neKG%2FqQKYhrH6hAKkhfWjg6ZZ3zQ9rsWuT3Hv0%2BR0uuOS6Cs2i654weXkRyOEpnpBgso9ZRY&X-Amz-Signature=99749ae5ece3434b11f748094d071c696c8525a825f44fc06f4f375347207714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUPTV5W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE%2FMUwDnXRtAJYo6mIOpq738Avg3nFdO8IWujcu7Um%2B6AiEAj8OLHlQtch%2FD%2BFDPjvdRstiD6VcTKCjG%2BeYc%2B9PSlwEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9MCX%2B2TrHo2Hh%2BLircA4uxTzV6Xy7AxXEssm4kfPZV6l2kCswznpWII4FtV%2FugsDwS%2F1UsHYi2p%2B%2FelU6K9As8SjvH3lxZUmNmEDvxciTftIpgtm%2Fw5SOXoU5%2FT5INxEPVjPa7HMz906JpEAJZkfZi6E%2Fy51LV86KnZmX3z8eywStdD3V8ukJ20PGYpM3%2BZ4JS9uTReo0r1aYc1fXfy7eeGRQHYP8%2FiN4VBaiCENTP7sBpI3fC%2Bo0sb%2FCqVnARAC9O%2FLli%2F3w%2F7APX8s%2F92DG8o2Hmlmr1lB6%2BWFzZBRgyPiBaf6wAotkUySCrKRiSK2WlD9FVy11qlnu7ns0%2BIpHOjwm9QsT8R4eMZS82ncWLtPnR2YEQl54jHt%2FECKKcRk13v1ybapcGyMCYG5A8DoPv%2BxIk8Bo0xg5Ow7h2a8%2F4g6EotTUyi%2B7MK94%2BXggwVW6s4J%2Bg0OV2TFHN97Kk12AplCYOApf04lXnX5aesz9IXXZbWyZRhIU3B56%2FvJYNOGjURPX%2BjMMeiiYRn9r9f2A%2BIfRbNxHDLLiL0z7JPh5jedZO3ReJy7YHDxkAl88PekSjLQ17JDQsUkbZm1yRqNqdjszVVD3%2B5nC3tuPCrATlrMIEZKp%2FOTfrKYWsS%2BZyZE5TtDw0nLmr%2Fiz0MImw7b4GOqUBvgxY1RPQpiCb8VdW70iemuj7lqdY%2FRqs9z05iGzpLxrAP91pBrXVElJnYWU7JDM3RyiWGROL6H88YK2K0hPZFaVtkjFtXqVWB%2FifBPSp1ni8XSTFSMn8DiE8s8i%2BXHfAsgIEATN2dsWhk7ztOIVvxjfl%2F7EvAfGEKaRodZrjdj0%2Bclem37mD0cMvmZoUunO8gwEL1%2FyF%2FRqp%2BnnMqjYcHH2yc7eQ&X-Amz-Signature=9a5a09d65de8dfbb38d8b5f36266533be7d99f67b4197648cab708756a902c04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNFAXZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDJXD1dyJVbjE78v9ig1OQgDu%2BINqJPoxQhVIfhaXrAFAIgCwWwpWy99%2FPoTYX%2Fsvbn%2BopUwB481xdtyjP07H%2BYmL4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHY4Ls90T%2FeJi%2Fp4RircAzpdWA6cgoPR%2FcKlM5hpjzGoMVmjK4nxf2T79IhfeNvjX61Vp%2Fd0VWhVMwfuhmvOr7WWNOupBPINI%2B%2BXD69M4xCNXJ3LSZa3M7p8EDbvBggEgmZLTVulZNJxnExowjilIpFNCFgYI3ti%2FoS93N2Hfq8sVH4eE%2BuikWS9xQEH9779DX%2FKuDnsk9vLr4VGTomuO85NzOtkD93615boSFxc6YbO182Td4vqbml77Om31cGGlwwkze%2B%2F86BFLb4pgVnnxSqOItt2i89pFTKbuTQq1WuetBSb%2F0AleRy9blLhq9O%2FrrP22wFCMhdsgJFBmXw9j2%2BSKGTJhMQq1dUj%2F8SQvnM3P%2F7JlPRGa7nX7XIWDUF50VcVsLVDpZXSjkiFxe12zb4%2BjsnM5O3VpaXKDNHEZpy6XwXLKrbtTbC3Q%2B%2BEhkta5JatWGhc9F2dOSnIO9YxwfgjWWtlH8fNIlyXSUeILsP9mjvvvtD32049QRhUe4GvDcUyizDp%2BxlDl5Wq%2BF5mnaywPWrUT3cbqOu0LEdg7MOfH8eeIxYfY3aBWNquCOZkhmhgrlhNWaD0x6Ut2vD4wb8A%2FHgokAiGXLAqfWoWMKooxUbnXVpZtCc0fA3aKAR0wKIvv8uIPrxqoHxfMNDY7L4GOqUBaGGzwVOMaMtmBX4mXFJhlrrtcsoTrl9D8%2BlIUq44XmXtsRe1mA45tdrdxKP2NhVtzED1RntJRoJfIu2rQv8JJ%2FJqbB9Ql0R0R%2FIzvdFfNNLNUoO4mIJE4VANrYihU21pblwTWeQNn9LjqbjKH1i4YgpMHPcUJi%2FA96y8Lhw9ypIzuENO%2FOoLcVcmA8P9iaIUIBKNgeYZUTo56XaaXRVPURc02FYH&X-Amz-Signature=d64c32b3282e160c49f3c47bcc9a6b843b05d8af5cc086cc9412c510c8037ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
