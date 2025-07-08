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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZMJCEZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdJ1XIKgcFa0Zh4PClQTzHIkRjuxU%2Fav0WtRas5HhTAiEAibBctTq5PszK4hHXkOVLV9x%2FWhjumtoD5%2Boqu72PC0oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJJzgENKDdO7eQg2CrcA4xepylAqljR5XMjfB4BC9VvwSUv621Ru2eNROm1xFNn6eK%2Bith%2F6F2yK2w1JEjLTktiqKTNSD5kheh9%2FArvFSOopJ9XruVfBootaizWpf7tS%2BUAJEaZLja3Z5dnhbSB%2FUNLVx7jiE0jOcpDm7WeGsIhvVaEeyu9K%2FT1RGCiVjUfH1y%2FnvZKqQbvWtetlUi1Uucexb1pu73EQPZmAo5MWGMH%2FFqdMeMbXU67d%2Fm%2F5lm7YbGmdvy9iDJ5o1KEQaLvaLQp%2Fvfhon9VnB2ShvUVDDAMIZkxyZ7WT6zOCyJ4IGTTHW304u9uACznWzAISYkGGZw7kq%2BwEQ6suPJy8IQEojoWNOgRgvQfr%2FkV7YcKYftzhjnUmDkf75XOPj8%2FT27t4vh2P5kh0p%2B3f%2FFeOl8RX9IF3MieIbcPgvfUB%2B1Z5ovivz4N8wLYSgMyhBowP3kzWx3Q2L01vTE%2B8EkJnuXrDf28Nt3m9Z1lT3PvXKyGs%2BZm1BRqyl35zvVcs1caOTkZHTcCgD%2Bc2v1Lk1a6EN4UAUNx1ObLYa4vB66J6bMHVV93ctVMcvtf3iIpkuf0NiR%2BDJJT8JHJL%2F9J4jjy%2BOyipwbvwBjuJkQdr4bB%2FH32QapLf0nhZGqd4yxS8C77MKCVs8MGOqUBfj1qvUvlTuuc5Kz8QvhFVt%2BHmwIboWVixRN7MkUc9zq%2FB8nVVUgyMkdIlbriS18ke5U6Irx1NQWWQkg08iezaP%2FCIFBTdlUEjEtAHntW8MBaHYQdWAWY6QVWR3640%2BOKM8T7vwKPpZUneJvodMdxSG3aseDN%2FhzMITo1wxJTjoyb7Amcatk4MhWBtJuvAxXaCFDKRvwSsv9Vm6CAPnrA5yUCt0vD&X-Amz-Signature=db6f6bc24b3c0094cc0a1d94d743e26640c69791cfac1b5e4e2db7ca1acfec75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZMJCEZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdJ1XIKgcFa0Zh4PClQTzHIkRjuxU%2Fav0WtRas5HhTAiEAibBctTq5PszK4hHXkOVLV9x%2FWhjumtoD5%2Boqu72PC0oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJJzgENKDdO7eQg2CrcA4xepylAqljR5XMjfB4BC9VvwSUv621Ru2eNROm1xFNn6eK%2Bith%2F6F2yK2w1JEjLTktiqKTNSD5kheh9%2FArvFSOopJ9XruVfBootaizWpf7tS%2BUAJEaZLja3Z5dnhbSB%2FUNLVx7jiE0jOcpDm7WeGsIhvVaEeyu9K%2FT1RGCiVjUfH1y%2FnvZKqQbvWtetlUi1Uucexb1pu73EQPZmAo5MWGMH%2FFqdMeMbXU67d%2Fm%2F5lm7YbGmdvy9iDJ5o1KEQaLvaLQp%2Fvfhon9VnB2ShvUVDDAMIZkxyZ7WT6zOCyJ4IGTTHW304u9uACznWzAISYkGGZw7kq%2BwEQ6suPJy8IQEojoWNOgRgvQfr%2FkV7YcKYftzhjnUmDkf75XOPj8%2FT27t4vh2P5kh0p%2B3f%2FFeOl8RX9IF3MieIbcPgvfUB%2B1Z5ovivz4N8wLYSgMyhBowP3kzWx3Q2L01vTE%2B8EkJnuXrDf28Nt3m9Z1lT3PvXKyGs%2BZm1BRqyl35zvVcs1caOTkZHTcCgD%2Bc2v1Lk1a6EN4UAUNx1ObLYa4vB66J6bMHVV93ctVMcvtf3iIpkuf0NiR%2BDJJT8JHJL%2F9J4jjy%2BOyipwbvwBjuJkQdr4bB%2FH32QapLf0nhZGqd4yxS8C77MKCVs8MGOqUBfj1qvUvlTuuc5Kz8QvhFVt%2BHmwIboWVixRN7MkUc9zq%2FB8nVVUgyMkdIlbriS18ke5U6Irx1NQWWQkg08iezaP%2FCIFBTdlUEjEtAHntW8MBaHYQdWAWY6QVWR3640%2BOKM8T7vwKPpZUneJvodMdxSG3aseDN%2FhzMITo1wxJTjoyb7Amcatk4MhWBtJuvAxXaCFDKRvwSsv9Vm6CAPnrA5yUCt0vD&X-Amz-Signature=703c178ccdfb7ccef0c468254fdfc4514264f5098cc91f741d7cba9cadcc3663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZMJCEZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdJ1XIKgcFa0Zh4PClQTzHIkRjuxU%2Fav0WtRas5HhTAiEAibBctTq5PszK4hHXkOVLV9x%2FWhjumtoD5%2Boqu72PC0oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJJzgENKDdO7eQg2CrcA4xepylAqljR5XMjfB4BC9VvwSUv621Ru2eNROm1xFNn6eK%2Bith%2F6F2yK2w1JEjLTktiqKTNSD5kheh9%2FArvFSOopJ9XruVfBootaizWpf7tS%2BUAJEaZLja3Z5dnhbSB%2FUNLVx7jiE0jOcpDm7WeGsIhvVaEeyu9K%2FT1RGCiVjUfH1y%2FnvZKqQbvWtetlUi1Uucexb1pu73EQPZmAo5MWGMH%2FFqdMeMbXU67d%2Fm%2F5lm7YbGmdvy9iDJ5o1KEQaLvaLQp%2Fvfhon9VnB2ShvUVDDAMIZkxyZ7WT6zOCyJ4IGTTHW304u9uACznWzAISYkGGZw7kq%2BwEQ6suPJy8IQEojoWNOgRgvQfr%2FkV7YcKYftzhjnUmDkf75XOPj8%2FT27t4vh2P5kh0p%2B3f%2FFeOl8RX9IF3MieIbcPgvfUB%2B1Z5ovivz4N8wLYSgMyhBowP3kzWx3Q2L01vTE%2B8EkJnuXrDf28Nt3m9Z1lT3PvXKyGs%2BZm1BRqyl35zvVcs1caOTkZHTcCgD%2Bc2v1Lk1a6EN4UAUNx1ObLYa4vB66J6bMHVV93ctVMcvtf3iIpkuf0NiR%2BDJJT8JHJL%2F9J4jjy%2BOyipwbvwBjuJkQdr4bB%2FH32QapLf0nhZGqd4yxS8C77MKCVs8MGOqUBfj1qvUvlTuuc5Kz8QvhFVt%2BHmwIboWVixRN7MkUc9zq%2FB8nVVUgyMkdIlbriS18ke5U6Irx1NQWWQkg08iezaP%2FCIFBTdlUEjEtAHntW8MBaHYQdWAWY6QVWR3640%2BOKM8T7vwKPpZUneJvodMdxSG3aseDN%2FhzMITo1wxJTjoyb7Amcatk4MhWBtJuvAxXaCFDKRvwSsv9Vm6CAPnrA5yUCt0vD&X-Amz-Signature=eaf7b3ab4ed68c5197e135d6a6ed6dfbf4fd4852e56b39c926eaeec83640831b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7E36KOQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtzo2LBc1wwVhIz4os%2F7zLcrsa5piXEWBOsLRNDzdP4AiEA1eYdRSk0B28UfTUvQYN9NUB9gsN7T77kJOVoYImF3m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoOSWLwq4H8gwSrHyrcAyXx0jnfYsvtVzJqjix7iOZHF00JvrON%2F799i1Kz%2FUKfK2eb%2BklamForDm7F3BawozXVwYS%2BLktAi%2BnAz9mxjvUyuEDQLRafTmqLjD5bLKY3mWjrzvxa3vZhdGs337TsTrwXW57LXaVcLWi0%2BA0w878tOnueDJQ8UD71ah9HRemMlJDd8I1psJ2sXMdDi39D6N9iTE7ch5taCaP14PmycUmpVc01Fs8M8kF8tnHXxWaOCmR5yBdnzqjSsmczZ2oMFOeWOztlSShyGm7Jnu%2BjXPahsDcPUTZ%2BMvRktHYbTnQMM%2FcE0Dx%2B%2FizDWSafRLobQOBuTLyWaMTGpyIt79NP%2FntzMmtlUfdb7sq8N3zOeSTa7jyD%2BGc0fFuTam9nvoLhf9iWexKRXt2UwRC7nBdsDAHHD42hPlZ31xh0HarKcdZmXDx0UgC2M3H7s1ZrzZ%2F391cMjd5LtxpLBSdzY3wH%2Bjn3Ynm8Mh7NxuJmdd25MnccBTnOiv%2BSZ9s%2B7gZa7UexgMqtH5ZazYp%2BAgJLF89VeAuy%2FfDMddtbd9V6RPwxFf9SijXgGcGejP%2BE8kw9ksPNtdGDhm8goF8Edi89p5ikobUS5ObnaF3gUWXJ%2ByeEdO966v1xyxM9lpxftHyTMJOVs8MGOqUBK%2BGbqklGari3dIWbmFNcJhhiPYlnCpf5kyI7x5HsgTmdhnDIxwCECirjpnOU5P3FJRQtb0ZRi%2B4KiC95XbfRmrSzyZxNR68xD58DhOaVoGSIlC%2ByBZzlONalaZ58wYhB%2BEiqCmTSxHP0s3ZBBUHcwtWoPKGxMd9HD7Bvx9nQhVUKDE6ROwdfAiKYFPS%2FaWmkzExcFrBpTUtq9zv7cNr2GwCA5yn6&X-Amz-Signature=7db07255f77fc83876bd03f6fbf539e234a174666a077ca215384fa74175ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4FWPGT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI%2BDQSL4CkLmZqpu1zJmTIaXPb32laGsXl%2FGwj8Wa2PAiAHkvzMN6S7%2BqEeK4zzlxTdCzUhddHj75bMM2G5KMrLtSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyng2gxXSUkG164WeKtwD3ZkfhAwfBTXXPscZoygZgKMf8KiiAH0C1UKulFaHdniJVyIj6dobv7zuUJ%2BJ%2B3ThoaRzXHbUMxFxyjWDvUR2XUGJ1EEnMH5fwvEK16LWHX4zFquYMe7ZeA2FkrK%2FmD9sIJenvduRvyIAAEB1m2JA%2FGkAtqXG%2B46Jlv5hTEYFsjMTYgQiM8rgV6Qz6PL6dofSLrHdCSHql3GC2p0jReeu7IlxsAB5pvsrkpon32APh0rzZudvSHrzo4QB2YBIZu44fygr5wbJQIm0Z6gWoierBTlnv9kv0ioeULDlDfugR%2BfHS8RFNKpx0%2BtvWGHN11hZIeFq8voISOQoqFxX%2B9XMytIAN0RrFnB34ff%2FyzGFwqWv7dkWx%2BzQTEi9%2FUGZvbiStVn%2BSzh0AiZtZ04Y07JrYOR6HV9HuZmTGaxH4q79y8u4wyVz8slHGMqnVOBu1tAUyPuXx6d0KXl%2F%2Bdwj7PXZSd2Cw%2BOsb8xMwYgc%2Fi7uqB8wlrfr3ExpvTb52XDx873c5Ry86%2BldCP4wP61L%2FYaN%2F5G6YGBF4hfBqNNoPRFSYwgAFIQxncagiLPTCHHIlwmnH8aK0p4wUOx%2FEIsZCjfotXebQLMBNUGrqtob7QUpQHto3v9VzKSIsysAGqkwwpSzwwY6pgFUq5yOe%2FOCLoXGRCUTxVW%2FZ9EiVbLzftuo6R%2Btha3Zk%2FQl%2F%2BBGXN4gfuDwv7gfYiEOTtmD1HFX4gKLkK1Yi307gBs%2BB8Y3Cd1fpPmg14ZYV4cZ1BAk8OTUnS1Xu6Eh1K8FvVh1yp5FdoKnO58WX57Rzlh5UXAiJrGhYTDx%2BtCzMBqdPOUwYDpOafbhlbFrwWGBSkZz32AtcPmnJVi7wOSXqUOoTAo8&X-Amz-Signature=7a5592da52602b1f9378a251d9ea3a03f7fbeacafd9088fc629389efe9d72de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZMJCEZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdJ1XIKgcFa0Zh4PClQTzHIkRjuxU%2Fav0WtRas5HhTAiEAibBctTq5PszK4hHXkOVLV9x%2FWhjumtoD5%2Boqu72PC0oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJJzgENKDdO7eQg2CrcA4xepylAqljR5XMjfB4BC9VvwSUv621Ru2eNROm1xFNn6eK%2Bith%2F6F2yK2w1JEjLTktiqKTNSD5kheh9%2FArvFSOopJ9XruVfBootaizWpf7tS%2BUAJEaZLja3Z5dnhbSB%2FUNLVx7jiE0jOcpDm7WeGsIhvVaEeyu9K%2FT1RGCiVjUfH1y%2FnvZKqQbvWtetlUi1Uucexb1pu73EQPZmAo5MWGMH%2FFqdMeMbXU67d%2Fm%2F5lm7YbGmdvy9iDJ5o1KEQaLvaLQp%2Fvfhon9VnB2ShvUVDDAMIZkxyZ7WT6zOCyJ4IGTTHW304u9uACznWzAISYkGGZw7kq%2BwEQ6suPJy8IQEojoWNOgRgvQfr%2FkV7YcKYftzhjnUmDkf75XOPj8%2FT27t4vh2P5kh0p%2B3f%2FFeOl8RX9IF3MieIbcPgvfUB%2B1Z5ovivz4N8wLYSgMyhBowP3kzWx3Q2L01vTE%2B8EkJnuXrDf28Nt3m9Z1lT3PvXKyGs%2BZm1BRqyl35zvVcs1caOTkZHTcCgD%2Bc2v1Lk1a6EN4UAUNx1ObLYa4vB66J6bMHVV93ctVMcvtf3iIpkuf0NiR%2BDJJT8JHJL%2F9J4jjy%2BOyipwbvwBjuJkQdr4bB%2FH32QapLf0nhZGqd4yxS8C77MKCVs8MGOqUBfj1qvUvlTuuc5Kz8QvhFVt%2BHmwIboWVixRN7MkUc9zq%2FB8nVVUgyMkdIlbriS18ke5U6Irx1NQWWQkg08iezaP%2FCIFBTdlUEjEtAHntW8MBaHYQdWAWY6QVWR3640%2BOKM8T7vwKPpZUneJvodMdxSG3aseDN%2FhzMITo1wxJTjoyb7Amcatk4MhWBtJuvAxXaCFDKRvwSsv9Vm6CAPnrA5yUCt0vD&X-Amz-Signature=ffea1e479561e286fd19b0c29c32513d8f7325cf8f8827cec59a2e9bfefccf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
