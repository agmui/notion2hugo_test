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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPX3A5Q%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCy5ZykQWdcH48o%2FJrxxlZklYMAVXo8r4Siq7hvGouK0QIhAJEHXrTuaQ5BZGenAT118vOBSgePJQhMEskNsniYTwtSKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb8jFNXylNwWmNBnUq3AMdxHk7eZEXyGzGIjAFxiZbWHf9m8KPEd0KhXrfTBWpdjcjFrr01Tvi0gNQXd31GKLdUFpQkuoawtOLb30dhRn1ijj%2FBysy9m0nZzVgUgfDAiNbE9%2FAnS4L1CM%2BsPpjChXiWtGSvSZKlSEL3rteoMly7Vlrkj4gVEPyzu%2F%2FzDE95pZZM0vxDthF%2BQwUi91E%2B9KgV3tvbkNBskmLGb8JvPtGz1cnjLDHjnIcE7gewAkRAmtJ66oNyA4fJONNKFuzTj1apPDeToK9n1EKtcL%2Fv5tMISqRCn9omoHr0L43TmB3Z%2Bh4KgfAbj13a3KdfgCNXuyEw6VSRd2UuWvZ3ls49fxTWAltU3ZTLlY9WndKZRxBba9sHJDTLasdVLm7gAKyru%2FyTSL2Nl8XCxKxKqxOlHmANA%2Bt1BzlyIbW7iSdkoe%2BBILPx4m7q5mpDptiF8j7JQT4L6V2Zo9OdC7aCUYuDqYX%2BGUUzJT5I712hDWfPtHBIOfTAuLGCe4tQq%2FwIcEtUX5s1Dpy0OCM4saXN6mGhJMwTHVJ4%2Bzx9wa%2FzeOJjj0zrBTDaNITrIbCe3XoUKqiuZ6XGVDM887PpgDFkN2NmUMarYLnvqTcDk6rDW1IYqbGgvA3TLBNfhNfvwy7lzDKoOa8BjqkAflLYcq8zr2XXFOoP4lhzT5S1y7Al%2BM5kP9PNLjtJaTu3jHZMv%2F6Ay3315hYbogozcoZvr%2B1%2BdcbTAq9TzZNvRMJtFiG0h9Hh3IgksnzneL0ZRECSVeqBuM%2FdoAo7t0uk0%2B61aiFUVoqHyPc%2BYXQ%2BRXgWM4a8BKifFKPmLLs2G3pGpwzrufkGoHjnqMu67UHrvaPtTGI7quIFBrcySsjlnTG7DC9&X-Amz-Signature=ca8ebf042e9470dd30b94fa37dc95ae1ac7aef6b6df41d2ec54c4e84e972a72c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPX3A5Q%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCy5ZykQWdcH48o%2FJrxxlZklYMAVXo8r4Siq7hvGouK0QIhAJEHXrTuaQ5BZGenAT118vOBSgePJQhMEskNsniYTwtSKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb8jFNXylNwWmNBnUq3AMdxHk7eZEXyGzGIjAFxiZbWHf9m8KPEd0KhXrfTBWpdjcjFrr01Tvi0gNQXd31GKLdUFpQkuoawtOLb30dhRn1ijj%2FBysy9m0nZzVgUgfDAiNbE9%2FAnS4L1CM%2BsPpjChXiWtGSvSZKlSEL3rteoMly7Vlrkj4gVEPyzu%2F%2FzDE95pZZM0vxDthF%2BQwUi91E%2B9KgV3tvbkNBskmLGb8JvPtGz1cnjLDHjnIcE7gewAkRAmtJ66oNyA4fJONNKFuzTj1apPDeToK9n1EKtcL%2Fv5tMISqRCn9omoHr0L43TmB3Z%2Bh4KgfAbj13a3KdfgCNXuyEw6VSRd2UuWvZ3ls49fxTWAltU3ZTLlY9WndKZRxBba9sHJDTLasdVLm7gAKyru%2FyTSL2Nl8XCxKxKqxOlHmANA%2Bt1BzlyIbW7iSdkoe%2BBILPx4m7q5mpDptiF8j7JQT4L6V2Zo9OdC7aCUYuDqYX%2BGUUzJT5I712hDWfPtHBIOfTAuLGCe4tQq%2FwIcEtUX5s1Dpy0OCM4saXN6mGhJMwTHVJ4%2Bzx9wa%2FzeOJjj0zrBTDaNITrIbCe3XoUKqiuZ6XGVDM887PpgDFkN2NmUMarYLnvqTcDk6rDW1IYqbGgvA3TLBNfhNfvwy7lzDKoOa8BjqkAflLYcq8zr2XXFOoP4lhzT5S1y7Al%2BM5kP9PNLjtJaTu3jHZMv%2F6Ay3315hYbogozcoZvr%2B1%2BdcbTAq9TzZNvRMJtFiG0h9Hh3IgksnzneL0ZRECSVeqBuM%2FdoAo7t0uk0%2B61aiFUVoqHyPc%2BYXQ%2BRXgWM4a8BKifFKPmLLs2G3pGpwzrufkGoHjnqMu67UHrvaPtTGI7quIFBrcySsjlnTG7DC9&X-Amz-Signature=5187c88879d588129be8bca7eec350d26ea051f42b81b069936f93d7b2daf9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQ2IOYL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGIAw65WiCcaOZPU%2Fua4esHuU02VpACYu4tacLi1wOF8AiBz0xsZqcif5fZLSMPx%2BULfkgTyQrY%2BjTFx%2FtM0i6v28CqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVJaNAwwmkXvBQiYqKtwDKerkdg%2FwyBaIETpVEBZyqZ7vCQboZSoalqytGbzLhlWZWNrB0Q5u%2BfmqMqZyrJpPS%2FkfvNFTCvZrvaUHOw4dj6cmNqHnSeGb3OqQ3U04o7%2FVOreaufCICGi4enKdDMg6OYUQiCdVNUJuMjjbjGQs%2FQoAqbdMhvCCxNsWqkIrxbFGHV0Zh087j6CAQsHuRQSFnOixkBtpLi2xJuSwJBZcRiMq0CJmAeIU1ccN1qNrRab%2FuAN3Qt0vbylhHtLJ%2FYZZSa92yMYhdik4GIZwEXz3tuKAf3cNK6BsIZnagYI1TMUPu8KqxZwZFOSWtvBykjohVi3AEHGDj%2F8awEFUamNQG6c8X7dPI57dUnmr1nKKCiXiZybPxMxf0n1KOsUsdvXsINlRAruh%2FAm5L6RwwHMGhNvebXl7aHD1jjx27YJ6hIK2Kqv%2FRxlI6Ivm63nTPI68Fmj4Oj4oG3wFtkAHF5323YbdBPKj61z0GjS21hskI%2BglUvCu64Dd57rHAhW%2Fyk1PIWLIJsPVrN9K%2BOSwKBbTjTyrIfaOKewANqzqb33VWi4Are0Gs0OtHdbUUd1TbCW%2BiiSWBI9v9T6tRG%2FeVFthE%2B9ZheDqKSP1YnIK%2FUgnZ%2FnFK8o4n8Ut%2BqWLGJEw7KDmvAY6pgG7qsv7r5ryxWkmzXjjehlHcnIh8nRHGpkW1VZB0OMxH3pTUjPJxnCfeg1BD4EfdWNnHLRIO%2F9TfkAEF%2BdbLiifAeGw0xn2vzRak%2FI8jL6RrmyHbMH2Cll4aHu4RTPyqRf3ChJOT0FGinC35BedZc75UmkQ0Gv2TKaPZqIXrKhYDXI%2BSCqxkvaT8aND3RC6wipEoTWBUdTw3XdVcViR1HPWiYsOGtKH&X-Amz-Signature=17310254d1cce3069ccf2d86a707deebfd05c2285b4309f85742f687ae8388d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPI6ABO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE2Bv9ATpDVYUxnMN%2BoruyUQAkE1Y2pdZVqiIUEiRGheAiEAsaLHmDx1RZhvQwepIZrKNoorNYpRMQ5mcMVSTOLY5eAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkCGfX%2FJlOVcY74RircAwZj7ZanO1ufrPtFNuvCPhTFzNLhywxAZo7Ijsdwj1kbv5bSOA3abln8Fw%2BC2i9jiHB0dWBfGUiFviIJws5q8NRfTsF2A%2F5tqMlKW7Eww2aCQeuaENXIIDZcW%2F%2BMgFb9vABY%2FmKK2otq0a9G54wc9zjH5o3ZsBIKXq0vYvGAShtGhjKMRLlBcu2qmdPWkB7rQs2jzSt%2FbvhNT09Cnf%2FYCx%2BZdo8lzJ9g%2BB5MWNzb6GrjFKu3qzksKV%2ByY%2Bi3lKwT33riM45aA0y6E5iOtt%2BMmBT7nBJAmf1aGCGjz8vSYaO7IDqXOtFefzDi3eDWAhzCFPsh8KgHvwgCfwKJ5T0yWS12TJteHDME%2B7em9fZg%2FSWWiZUlP5nwgJ3e7p7ZBu%2FANbXGmnxAUrzYIBfeVyM%2FqaEVffGmcXZbfoU%2F9lABQj9oF6ORfUDhuNYBvutBv%2BZDqZY2cg9LKBHtKanWM1ZhzKahtv08kSJD1%2BAlqibke6xrzV%2F9q%2F5geNPtOEtMlWvM%2BlkadpJXByUuGKMUqxbXygh%2BKm4HHuPH63w%2Bl3uTai8XhhUu2mNFDyq%2F6RoD8vPnQ9OCvhzYPxVrUUnizuCIP5%2FNNgRg4NJ%2FWZDv6eD0Ox3RPrBJickG3hBo4kvrMKOi5rwGOqUB%2FAUnqSZsa2nCvebS0mYTUwI9H334ni3%2Bh2CfCQbFG1Rp%2Fa%2BOKfGP%2FkOd2EsYsg7G9uBG3giG812tb3FuyjoS9gJ0s3mL%2B98n7nGZFx1rlNjJygtGfMbqqLllzteYvH4cse2vuWP7Y3xx4ddaSKo%2BokTt5rU4FYuDrlURM5jQYz0%2BkV0LHvFD%2FltMybdpuf7JKrHlNGMuNzebHTtCPn9JVl5saXar&X-Amz-Signature=8eb711f8efc4bf777497d62beac9fe755908f0cbbc4fa41931ef426712c931e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPX3A5Q%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCy5ZykQWdcH48o%2FJrxxlZklYMAVXo8r4Siq7hvGouK0QIhAJEHXrTuaQ5BZGenAT118vOBSgePJQhMEskNsniYTwtSKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb8jFNXylNwWmNBnUq3AMdxHk7eZEXyGzGIjAFxiZbWHf9m8KPEd0KhXrfTBWpdjcjFrr01Tvi0gNQXd31GKLdUFpQkuoawtOLb30dhRn1ijj%2FBysy9m0nZzVgUgfDAiNbE9%2FAnS4L1CM%2BsPpjChXiWtGSvSZKlSEL3rteoMly7Vlrkj4gVEPyzu%2F%2FzDE95pZZM0vxDthF%2BQwUi91E%2B9KgV3tvbkNBskmLGb8JvPtGz1cnjLDHjnIcE7gewAkRAmtJ66oNyA4fJONNKFuzTj1apPDeToK9n1EKtcL%2Fv5tMISqRCn9omoHr0L43TmB3Z%2Bh4KgfAbj13a3KdfgCNXuyEw6VSRd2UuWvZ3ls49fxTWAltU3ZTLlY9WndKZRxBba9sHJDTLasdVLm7gAKyru%2FyTSL2Nl8XCxKxKqxOlHmANA%2Bt1BzlyIbW7iSdkoe%2BBILPx4m7q5mpDptiF8j7JQT4L6V2Zo9OdC7aCUYuDqYX%2BGUUzJT5I712hDWfPtHBIOfTAuLGCe4tQq%2FwIcEtUX5s1Dpy0OCM4saXN6mGhJMwTHVJ4%2Bzx9wa%2FzeOJjj0zrBTDaNITrIbCe3XoUKqiuZ6XGVDM887PpgDFkN2NmUMarYLnvqTcDk6rDW1IYqbGgvA3TLBNfhNfvwy7lzDKoOa8BjqkAflLYcq8zr2XXFOoP4lhzT5S1y7Al%2BM5kP9PNLjtJaTu3jHZMv%2F6Ay3315hYbogozcoZvr%2B1%2BdcbTAq9TzZNvRMJtFiG0h9Hh3IgksnzneL0ZRECSVeqBuM%2FdoAo7t0uk0%2B61aiFUVoqHyPc%2BYXQ%2BRXgWM4a8BKifFKPmLLs2G3pGpwzrufkGoHjnqMu67UHrvaPtTGI7quIFBrcySsjlnTG7DC9&X-Amz-Signature=50e7485ee725930f9f3198c95a10863b6bdaeb9bbb75456c62bdee8369a5747f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
