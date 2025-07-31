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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7PHMNF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3ECcG29feFCpIiNpqzD12IlZb4y7kRdK9kbeMKwBTbAiAVbvfasbm4%2FCMd8wlKbC1PsV5M%2Fuo5%2FPpsfdTzfO4j2iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeaw64lWcY4pR0ALKtwDMtNfTuMN3eQuBBeNhPGaFE0AHU08trPN%2F8EhbP9u9JbHxd2Nnmxz5rrT9GZjJ0nEYPMkbP1dxpJeJbT%2B4PTHt7qE9szMdSqh2FDGe3IaFLXfcEy8ujsrPMwCYngvExMUKiPolJNj3wKK5%2FaP7wyIjAfpCWQwXFqFTb%2FLPnXorerwE5%2FJGksxkVYs%2F%2B%2F7on4bAJquUcpejLy60vRfFPUU1vwlwUD6EQaXKOAcjA994nr%2F93ajhb%2Foi79xC6J2haxgNf4g9NOhSnlSAsEmQ75jdpQaX3lPmMaNpmgjdS53zEPsl4rN6WCgoiXrdBicPVESkOpXtwC3I3S%2BH1FPjo27nXt7yDTXa4oFA0V%2BB1CODg1MwZx0M3gtl%2BXAqLAHHqnkn%2B85ZK1yq6rUfJrv2LyVFAJm%2B71BWXAhE1p1j%2Bg%2BkNTA181VjW9dvscFWZE5GM94LH7hnmvjiMwUj0GE%2FOybiyojfYGecNWVXksyJXTzAf9O2%2BNFuse0n6Hfez%2B%2FGMzoJ1D6f56FomItSvM7nHQCkdZUWDn4nZuNPNH1krdX8qER68dff6Q%2B4Lo5QCJW0l4bVKKg%2BPEhB%2BA5JvMR3dDSvGhNDe%2FibBXcaxfpMQssgPI1rUl3xSgRFPqp%2BbowxqKqxAY6pgEC1hjkbQVxG3MWLRFvyenaaPIJrM8Cxp1jELABLJDwfdafH7OW1tTzm9UOJeD0FgQwSN3YqJhQTjmvNPUV8B2ElkqVpnz6wSKru9hLnsWwWhtX4ZgyEnHqprN7gAnnV2Ru9sDWi5UPa1R16mykvD8zzAlSlYxDyT6RK0g%2BaRtEzP5T01FMG79OJhpsiJeuzvh%2FVESWuVGgbdmg0Aza1vGHuRecBAVB&X-Amz-Signature=161d50714b36f8699f82ce4bf9431a03189f30bad2a9959e538bc189bef33e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7PHMNF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3ECcG29feFCpIiNpqzD12IlZb4y7kRdK9kbeMKwBTbAiAVbvfasbm4%2FCMd8wlKbC1PsV5M%2Fuo5%2FPpsfdTzfO4j2iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeaw64lWcY4pR0ALKtwDMtNfTuMN3eQuBBeNhPGaFE0AHU08trPN%2F8EhbP9u9JbHxd2Nnmxz5rrT9GZjJ0nEYPMkbP1dxpJeJbT%2B4PTHt7qE9szMdSqh2FDGe3IaFLXfcEy8ujsrPMwCYngvExMUKiPolJNj3wKK5%2FaP7wyIjAfpCWQwXFqFTb%2FLPnXorerwE5%2FJGksxkVYs%2F%2B%2F7on4bAJquUcpejLy60vRfFPUU1vwlwUD6EQaXKOAcjA994nr%2F93ajhb%2Foi79xC6J2haxgNf4g9NOhSnlSAsEmQ75jdpQaX3lPmMaNpmgjdS53zEPsl4rN6WCgoiXrdBicPVESkOpXtwC3I3S%2BH1FPjo27nXt7yDTXa4oFA0V%2BB1CODg1MwZx0M3gtl%2BXAqLAHHqnkn%2B85ZK1yq6rUfJrv2LyVFAJm%2B71BWXAhE1p1j%2Bg%2BkNTA181VjW9dvscFWZE5GM94LH7hnmvjiMwUj0GE%2FOybiyojfYGecNWVXksyJXTzAf9O2%2BNFuse0n6Hfez%2B%2FGMzoJ1D6f56FomItSvM7nHQCkdZUWDn4nZuNPNH1krdX8qER68dff6Q%2B4Lo5QCJW0l4bVKKg%2BPEhB%2BA5JvMR3dDSvGhNDe%2FibBXcaxfpMQssgPI1rUl3xSgRFPqp%2BbowxqKqxAY6pgEC1hjkbQVxG3MWLRFvyenaaPIJrM8Cxp1jELABLJDwfdafH7OW1tTzm9UOJeD0FgQwSN3YqJhQTjmvNPUV8B2ElkqVpnz6wSKru9hLnsWwWhtX4ZgyEnHqprN7gAnnV2Ru9sDWi5UPa1R16mykvD8zzAlSlYxDyT6RK0g%2BaRtEzP5T01FMG79OJhpsiJeuzvh%2FVESWuVGgbdmg0Aza1vGHuRecBAVB&X-Amz-Signature=7421b42d9d0ea6616b7131f5c2db5074496301d41705afe4ecd95f733d28e871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7PHMNF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3ECcG29feFCpIiNpqzD12IlZb4y7kRdK9kbeMKwBTbAiAVbvfasbm4%2FCMd8wlKbC1PsV5M%2Fuo5%2FPpsfdTzfO4j2iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeaw64lWcY4pR0ALKtwDMtNfTuMN3eQuBBeNhPGaFE0AHU08trPN%2F8EhbP9u9JbHxd2Nnmxz5rrT9GZjJ0nEYPMkbP1dxpJeJbT%2B4PTHt7qE9szMdSqh2FDGe3IaFLXfcEy8ujsrPMwCYngvExMUKiPolJNj3wKK5%2FaP7wyIjAfpCWQwXFqFTb%2FLPnXorerwE5%2FJGksxkVYs%2F%2B%2F7on4bAJquUcpejLy60vRfFPUU1vwlwUD6EQaXKOAcjA994nr%2F93ajhb%2Foi79xC6J2haxgNf4g9NOhSnlSAsEmQ75jdpQaX3lPmMaNpmgjdS53zEPsl4rN6WCgoiXrdBicPVESkOpXtwC3I3S%2BH1FPjo27nXt7yDTXa4oFA0V%2BB1CODg1MwZx0M3gtl%2BXAqLAHHqnkn%2B85ZK1yq6rUfJrv2LyVFAJm%2B71BWXAhE1p1j%2Bg%2BkNTA181VjW9dvscFWZE5GM94LH7hnmvjiMwUj0GE%2FOybiyojfYGecNWVXksyJXTzAf9O2%2BNFuse0n6Hfez%2B%2FGMzoJ1D6f56FomItSvM7nHQCkdZUWDn4nZuNPNH1krdX8qER68dff6Q%2B4Lo5QCJW0l4bVKKg%2BPEhB%2BA5JvMR3dDSvGhNDe%2FibBXcaxfpMQssgPI1rUl3xSgRFPqp%2BbowxqKqxAY6pgEC1hjkbQVxG3MWLRFvyenaaPIJrM8Cxp1jELABLJDwfdafH7OW1tTzm9UOJeD0FgQwSN3YqJhQTjmvNPUV8B2ElkqVpnz6wSKru9hLnsWwWhtX4ZgyEnHqprN7gAnnV2Ru9sDWi5UPa1R16mykvD8zzAlSlYxDyT6RK0g%2BaRtEzP5T01FMG79OJhpsiJeuzvh%2FVESWuVGgbdmg0Aza1vGHuRecBAVB&X-Amz-Signature=b4d9b90343017a414a2206c46c489a52368db2133b541f8f6eff642da698fcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTCCXZT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gsD6F5Mf97tJxwa6RaIixF2yz7bvJg3r%2B8U4K3VXgwIhAP%2BrLnrnfh5gBuITOJykKvD4LPWMELDVvDlARG7aJ71NKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdFkT%2BazagyTGja0oq3ANnKaJQbCr5bIQHYQmKoIZa8MEaIPQ8nijCaDKvNQgR9fX947tQl1%2FLbocqSjkkvL9h082eFivW89731PyqBu99CcTo5%2Fzfl4dQ6LcZdtTiWumzmyWKRh2otgpxWoKRwMz5zpXV5vtZx37WDw4z%2BArqo%2B4o8jqXFu2KvqrZdYSZx5MdccqDbj3QII%2BwhJ%2F7y8HlYUO2SQG%2Bj83omwVhxGpHCX9BH%2BQT%2BintkfDL1RU9bQ34OvoZU8qxDCWG0YZ8lRwQD6joLk%2FrfY5a66iXy2E3Uu64gzqiB6v6QEqgeady5wlDv09sMJByQJ%2BdBujfPrqBUjsTjMmEJDp5Sc%2FcUY78VTlokceLKnQaVvf6zDzJaf9zP9cA9pGLYRABf9HJaxr%2FeGRAVr1G%2B4Kfd5rT6Y2kHs9BPMd9I442FXTrF0drJXroFO4LSUWVhhr7CLB9J4TCTyN%2FDJH4y2LvxNJxnyz%2B5lg75WSKPVxIDkY4CeXFcd%2B32VbNOyb0uB2dWxiX7FAQmTDUKRVX3TIT20gGnrUiWUGaPMloEnoYxf0RCpIVqe8NnTVtHnBOa81Fugjn%2FY%2B7SnYfgTdbQ%2FpjpiFFwdumPWFDqnLHfOtMLcvdvCQkyndqyxscuWOc95w4PzDmoqrEBjqkAdOVrxTxR1QE%2B8WgVPUuA9yyrvtmoFKHmy7vXRmIjDX8Fsb5MpwflnQewJpeupsuTKsVf4O65pYAoSGecHTao4mbjJfEs5HAEvbZ4FYAKVHOUgv%2Fm29zUkvnpqtCycCsVJzneegOPnl5iTPiaxAPMpuUg9NxNJxQ1v%2Bk%2Fzo7qU1vOpSdRSBYR7lw5lUp5vgv6zW%2FHJ5rlrvRKRJ4zb0Oi%2BLbeoFO&X-Amz-Signature=035df9b8507a32af38919e72f55ba02631d8d7a247e0c8b6acde001d6bf4b1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3BMDLR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9g1TcWE5egL20MtrpPM2F939zjcOkF1zciyd1x2ivfAiA7cqIKenbbIQRJS5GoiOLYeMhwQ9WPjia%2Fh97ac3ADrSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME7RWNSQnsaisJlUbKtwDSTDMLZ8GAYHEIxdTKKqNsUlR3%2FbYsN2Y80uGRJAbfMTnwrwTFCE1qQdgRdbZ1UGqaDCpenFufaBMqKzDucIcDoF2RjY62OEmmUuPd7%2Fx%2BbwNtKLvJAreSdt%2Bia8jL0OfveMDCe7%2Fjwrb%2FTJ0Y%2FAXvCKvt88maYWcvMQwh8rHCIiRPzguZXPf7mkzb8IAeDoIYjwtTpDvF3bqB6dcjfkULB8amOF%2B7Y645ofRxpIJmX7Qzs9iUSBEDEPj%2FcgGCjYwXa1su7baQlPkUQnHKFXG%2F7tf4wJ6LaoRYydOdp4hFE2%2FM2kydMVWh9kqySfkIgZn5QXXd9MzzEUCXHuW6VuCQwA5RjfRrTF2gDjSKti6EFp1Ethe0QauvxFHdgKLDCtXOzcVvOYokSBtJqDYJnuRI7d4sVpwxTFnPakdthU420mi9oUbMr5OEnobkh6GeLy79ylYgxgLHziFr8tBK3ILVPV9C9iaF%2FYAdWgbqBHzBCHp6688O8IeOqan0AcOndo1f0JeJgxganO3kYjzWVK%2FaopTrQlmxNxhOQJ68HWJ8QcorgDaAkmyqgK1ux43gfr%2BIr%2FO7UEn6TsQxNebEiLPiiYKLKlk0XTpOg5MAbkLuAdf5FK16wiU3vikNQcwuaWqxAY6pgFP3u838jEjP%2Fy13dKG4mbxilTAHFwfibJX5bBUuSGC7oC9OuJHl%2FngaI2nNGaf2Yse2%2FwRPnbscFpPOrM3wAIjUF8b3PMvSD0YFArrW6I%2BwDVBjOQZRic0uNVkkmSNJ6LrwuvQ3iI9jRQ%2Bu5nXPpk%2BE2akqGzz70Lti5Gc7Q93jY4JrN4Kg6jur0NB%2FDzpZmE0caym6i89axohDWGL0Ijb3jiwPRKa&X-Amz-Signature=95f3ac9beac7b30fa3d24845b4ff1760f400b8c60904f00c8fbdc431189bc1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7PHMNF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3ECcG29feFCpIiNpqzD12IlZb4y7kRdK9kbeMKwBTbAiAVbvfasbm4%2FCMd8wlKbC1PsV5M%2Fuo5%2FPpsfdTzfO4j2iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeaw64lWcY4pR0ALKtwDMtNfTuMN3eQuBBeNhPGaFE0AHU08trPN%2F8EhbP9u9JbHxd2Nnmxz5rrT9GZjJ0nEYPMkbP1dxpJeJbT%2B4PTHt7qE9szMdSqh2FDGe3IaFLXfcEy8ujsrPMwCYngvExMUKiPolJNj3wKK5%2FaP7wyIjAfpCWQwXFqFTb%2FLPnXorerwE5%2FJGksxkVYs%2F%2B%2F7on4bAJquUcpejLy60vRfFPUU1vwlwUD6EQaXKOAcjA994nr%2F93ajhb%2Foi79xC6J2haxgNf4g9NOhSnlSAsEmQ75jdpQaX3lPmMaNpmgjdS53zEPsl4rN6WCgoiXrdBicPVESkOpXtwC3I3S%2BH1FPjo27nXt7yDTXa4oFA0V%2BB1CODg1MwZx0M3gtl%2BXAqLAHHqnkn%2B85ZK1yq6rUfJrv2LyVFAJm%2B71BWXAhE1p1j%2Bg%2BkNTA181VjW9dvscFWZE5GM94LH7hnmvjiMwUj0GE%2FOybiyojfYGecNWVXksyJXTzAf9O2%2BNFuse0n6Hfez%2B%2FGMzoJ1D6f56FomItSvM7nHQCkdZUWDn4nZuNPNH1krdX8qER68dff6Q%2B4Lo5QCJW0l4bVKKg%2BPEhB%2BA5JvMR3dDSvGhNDe%2FibBXcaxfpMQssgPI1rUl3xSgRFPqp%2BbowxqKqxAY6pgEC1hjkbQVxG3MWLRFvyenaaPIJrM8Cxp1jELABLJDwfdafH7OW1tTzm9UOJeD0FgQwSN3YqJhQTjmvNPUV8B2ElkqVpnz6wSKru9hLnsWwWhtX4ZgyEnHqprN7gAnnV2Ru9sDWi5UPa1R16mykvD8zzAlSlYxDyT6RK0g%2BaRtEzP5T01FMG79OJhpsiJeuzvh%2FVESWuVGgbdmg0Aza1vGHuRecBAVB&X-Amz-Signature=ce45d96df56b6b233cb44a9147b50e1574259f9a4b4f4984bba6c9c61847e011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
