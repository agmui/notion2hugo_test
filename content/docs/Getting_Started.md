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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOMQA3C5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgt%2FhgqENhMVAs6G7s4PG%2Fs9PjC3OBfCyEwN6DSkifvAiEA0fzhGT1oMS6oyRV4QOrPv9zHnHff8YxWxigfRvm2%2Bicq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEIhc%2Benauu97fjkSrcA%2BAooxGAhrJZLBS9uf8F5rnJi3W5bxy9vZZLnl1brYexCl1BHyBYpSTo29zPwdmbrAlTR1kDZ%2BEeVxS3WmILnSDOllaiM1fAmLZ0mJAPKuZoUdccm9UTcyAiMIt35XzouamAggGFTUlOHy6PVwDivWOJnl0MREW8uR3vWv8d0Q5VOuMubdsLco7Io7liD49ZdQX2i2rGqK3SzKBT39fM2FMr1%2BXDyDhaqS1XXPIYj4Rr47ObauNXGgBJOlbYT85KupN0l1z17ZtV5Lvew5vFhFeEm%2BCBezdUSO9rwF2tDmW8vhDUKIqpLTd0iRCxO%2BYS7LyBioHc1ty0xkkplvZJw3pqTadTmd4Omh1Z6KfPIR7Vc8185aI7j8HF%2B4IhBPya49AtKvy0a2Vat%2FuE%2Fedt2hmvJkSGQovKaXkreDyiAph%2BA9nL1uqf%2FkZ1RC9IMfTzYdUKDVQowaepjF3YBNXQDLcoc69c4gWDCpY8IEnMw78M4NQBfWQ7ywldxZBzT0h07wW2qaCLwP6BILqCq0EKTQw9MYri9rI6y%2BlPcr%2BRgUwdxk0r0Bk9pFHkCNZaflib1K24HvgFwhJIhGnRLnAVmdDr%2BB9gSBhbERc5A%2BVMxLDxVUPNqHWGFncR4a%2BXMMfl5MAGOqUBTkP4dYykqWDSsfBsn1HCMYO8zAJYHpNLt0P0crKNxaB3cTbpgAF67P9Qq1y3LyLA4qyTLpzK9eKk4mbzSOtpmUuwwI7W4P1gSrfcwSHYcm%2FBTXIYIT6VOBd3esXfl7PIda%2F3FNUxtYImjnEcR1wju37A8nICm0rz1kNFaDzFaM1a3sSB4LvEuYBheuW9QFUfQylO0pC2wTqZhMP24LO88mOdieVo&X-Amz-Signature=554aba1cee2fb346f69946d34390722544cf6ed69aad994ac902f0f5975d77c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOMQA3C5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgt%2FhgqENhMVAs6G7s4PG%2Fs9PjC3OBfCyEwN6DSkifvAiEA0fzhGT1oMS6oyRV4QOrPv9zHnHff8YxWxigfRvm2%2Bicq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEIhc%2Benauu97fjkSrcA%2BAooxGAhrJZLBS9uf8F5rnJi3W5bxy9vZZLnl1brYexCl1BHyBYpSTo29zPwdmbrAlTR1kDZ%2BEeVxS3WmILnSDOllaiM1fAmLZ0mJAPKuZoUdccm9UTcyAiMIt35XzouamAggGFTUlOHy6PVwDivWOJnl0MREW8uR3vWv8d0Q5VOuMubdsLco7Io7liD49ZdQX2i2rGqK3SzKBT39fM2FMr1%2BXDyDhaqS1XXPIYj4Rr47ObauNXGgBJOlbYT85KupN0l1z17ZtV5Lvew5vFhFeEm%2BCBezdUSO9rwF2tDmW8vhDUKIqpLTd0iRCxO%2BYS7LyBioHc1ty0xkkplvZJw3pqTadTmd4Omh1Z6KfPIR7Vc8185aI7j8HF%2B4IhBPya49AtKvy0a2Vat%2FuE%2Fedt2hmvJkSGQovKaXkreDyiAph%2BA9nL1uqf%2FkZ1RC9IMfTzYdUKDVQowaepjF3YBNXQDLcoc69c4gWDCpY8IEnMw78M4NQBfWQ7ywldxZBzT0h07wW2qaCLwP6BILqCq0EKTQw9MYri9rI6y%2BlPcr%2BRgUwdxk0r0Bk9pFHkCNZaflib1K24HvgFwhJIhGnRLnAVmdDr%2BB9gSBhbERc5A%2BVMxLDxVUPNqHWGFncR4a%2BXMMfl5MAGOqUBTkP4dYykqWDSsfBsn1HCMYO8zAJYHpNLt0P0crKNxaB3cTbpgAF67P9Qq1y3LyLA4qyTLpzK9eKk4mbzSOtpmUuwwI7W4P1gSrfcwSHYcm%2FBTXIYIT6VOBd3esXfl7PIda%2F3FNUxtYImjnEcR1wju37A8nICm0rz1kNFaDzFaM1a3sSB4LvEuYBheuW9QFUfQylO0pC2wTqZhMP24LO88mOdieVo&X-Amz-Signature=33427750d8c5cf6355b21faf16bf3bc678fb0506832b30c25f03629279531b96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOMQA3C5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgt%2FhgqENhMVAs6G7s4PG%2Fs9PjC3OBfCyEwN6DSkifvAiEA0fzhGT1oMS6oyRV4QOrPv9zHnHff8YxWxigfRvm2%2Bicq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEIhc%2Benauu97fjkSrcA%2BAooxGAhrJZLBS9uf8F5rnJi3W5bxy9vZZLnl1brYexCl1BHyBYpSTo29zPwdmbrAlTR1kDZ%2BEeVxS3WmILnSDOllaiM1fAmLZ0mJAPKuZoUdccm9UTcyAiMIt35XzouamAggGFTUlOHy6PVwDivWOJnl0MREW8uR3vWv8d0Q5VOuMubdsLco7Io7liD49ZdQX2i2rGqK3SzKBT39fM2FMr1%2BXDyDhaqS1XXPIYj4Rr47ObauNXGgBJOlbYT85KupN0l1z17ZtV5Lvew5vFhFeEm%2BCBezdUSO9rwF2tDmW8vhDUKIqpLTd0iRCxO%2BYS7LyBioHc1ty0xkkplvZJw3pqTadTmd4Omh1Z6KfPIR7Vc8185aI7j8HF%2B4IhBPya49AtKvy0a2Vat%2FuE%2Fedt2hmvJkSGQovKaXkreDyiAph%2BA9nL1uqf%2FkZ1RC9IMfTzYdUKDVQowaepjF3YBNXQDLcoc69c4gWDCpY8IEnMw78M4NQBfWQ7ywldxZBzT0h07wW2qaCLwP6BILqCq0EKTQw9MYri9rI6y%2BlPcr%2BRgUwdxk0r0Bk9pFHkCNZaflib1K24HvgFwhJIhGnRLnAVmdDr%2BB9gSBhbERc5A%2BVMxLDxVUPNqHWGFncR4a%2BXMMfl5MAGOqUBTkP4dYykqWDSsfBsn1HCMYO8zAJYHpNLt0P0crKNxaB3cTbpgAF67P9Qq1y3LyLA4qyTLpzK9eKk4mbzSOtpmUuwwI7W4P1gSrfcwSHYcm%2FBTXIYIT6VOBd3esXfl7PIda%2F3FNUxtYImjnEcR1wju37A8nICm0rz1kNFaDzFaM1a3sSB4LvEuYBheuW9QFUfQylO0pC2wTqZhMP24LO88mOdieVo&X-Amz-Signature=488b90fc0c9d8079667f63ce27b1eb2f076840286d661b8ea5a7e0447e2329a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGX7UGJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc4YOXih0J4N9uGkx30BHd5djoUZsV29if8qf%2FaK8zpAiBiqZXjER42fgkYwn7S0IkQQJ6Lr40VD8WESfNs4Yedeyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMXRw2q5hKJ9ilu%2FprKtwDAlUmnx2EOFoqQGSHLLoUuW3LiBC0nEj0ARxl3Rg5kGojAVsg2%2BvVd6H4iR3sSPHQq%2FFyKVzCYJcoEBLudUK12Nt5OuWucN7lfsDpcwnqeHC3JlqyiI76aAv8egst8trgv6gbiuRGC7qIN%2B1qBiA9RhExY9%2BGBiozjJs6wELnmnHfr38zH8UoOsun7KnJFZr0SFo93L%2FcRVF69ZeTbMC66ecVxZ4gKhK0vfxeWK3r2HZDhwGwWBn4m%2FwdNI12%2Bm1nUdDwPgxyrXzO7tZcoAJr7AJ9PYLbqLEHSKB%2FqdLuokkvAwg7iMmuDhgrSQckqLQjqKTMfRI5m2QIp33cZfpZH3vWkYOCavv7xzYUnmOBy3P2N9SzJb89RDMb%2BM%2BDAWaVeLtLBos%2FaRKp%2BmKIFa6WHrfFfzkNye%2B%2BCI7RkzQg%2BK%2F%2Fjj9OVvaG3j2ipR8LCVGLW6kGNlEGqzP0XipEZS%2F29Hd8jBfUwes5NYNgBtNnubm34JZy3%2FBgT7oKrMTUBMbMopE736jbS60B%2F6RNVsN%2FMXPGg4O9xg5R5OBIIR%2BeV9IpBhI355iiIEqYnsNimod3Qxn2o%2BGMpMEA4sNj2yCLx7j2GAXQmf4SRYmpKTyxtdChyEb%2BM1OMnlcZh7kw9OXkwAY6pgHg5dAS84j2TA9ryq%2F6ih5mPRuHZdTtVgqS3Rq6vgSxKJlFomdKEQXRSRDGW4vesOUm0PThYidH6XybNKGIPe%2B9ZKM8U4l1QqvGaaIto7G74JW6887Un1m1DZRv7FG403bKzhpH3XQADP7zPGgDHw410u6b6UYkrFSEkHGXPnIwX9bLDo3m11fi08Hq6DevArUD3I5RzFnWK0al7AGYpEYuT%2FMjU4oW&X-Amz-Signature=85acbcc7b5ac211224c5c997e14c10f7c1e1ba2dbb871f456fb2607bf7c12738&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOO7ZAQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhhCPH40MRoHXL5HNZPojZSP%2BEqBWJy9E5mfdTGCgwKAiAENc%2FsxCE7tZPv3QwyY9QIx0IwR26thefHyBMZlbdfnCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2FnErnZ%2FCoUygO94wKtwDJWVcCAaMUNaY9ljpYPISfUjFgotY%2FlyvX8dfUGVMMv%2BxAw6jpeiNIiLcNUebo%2BTgrxzO8r5Ks%2FlbgMZ1qSOaKC6rbSlehOEnixeiTjI8nEG23cm2RUoj7%2FPA81bGYXm6stY2KQAJaED%2FGofVpJKVz1%2FmrAc4byGwfhPILjqwvHdBvgcR4N6A9xQn9tonzts1D2VS3unhMkM%2BgtggzHMNyu5wPWTrnphg5YOeJw3LdZSbDnbTyCBwTJVmBc3IYR5V5u5MbSFym6Y0a9wdtb1aw%2FYJe%2B3aTG9jYO6ktRsCmdlXSEjX%2B3TYmB%2BId78LUEITW3ehITtZ3KRNCCQgPR0fWa%2BOS5NuJoKGdSyQ%2FeK5iPtMLlsL2mjzhQse7UKWZ5WZ%2Fp9lbJ4q%2Brlby9UIcIBAbWcusTUCxFV73014Mbfk0vjUzT4IiwWDvC7xot%2FNiTIAm7zWwkigNGDLpwYthNmsWVYw0NbIamR%2F2nC%2Fmb1P6FsFMizIDHGdEs1M%2Bl%2Fhl3NagShpFgr5uIqrJkSmn8bhWK70eg%2FxOHovUDE35uqrDVYLb%2FEHdjchI1Pz7YCTY%2Bwi%2BtN8QBSm9P3lJnnVXzvx0cA6N%2Fu90cKIaEDviLR7M6tyDfudxUDFgTsDLIcw3%2BXkwAY6pgGX9OP8NxPp8hAfRw%2BCpm4mKGMPeMtUNWxM9wI7qxqf85ODwl9zdyEf2578A3dKgshzGFZU32RJ1s61V2COyW3yLU0VAerOWASeJVn1%2FY0S%2BvZ%2BVRXfbESAVbx8RD9DUEl5Dt%2Fp2ehiB56QoWnatt75za5gtWNgpHMi42%2BiDA%2BqgN%2FKXrXpVTR1o2dljrHf68l3nHWYExq6vYXPWVoxTXB3jxFvTP8d&X-Amz-Signature=ac8a111cf9c576255e81243d325a721aa244c1d31d873410cf2e622a9bdd3419&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOMQA3C5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgt%2FhgqENhMVAs6G7s4PG%2Fs9PjC3OBfCyEwN6DSkifvAiEA0fzhGT1oMS6oyRV4QOrPv9zHnHff8YxWxigfRvm2%2Bicq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEIhc%2Benauu97fjkSrcA%2BAooxGAhrJZLBS9uf8F5rnJi3W5bxy9vZZLnl1brYexCl1BHyBYpSTo29zPwdmbrAlTR1kDZ%2BEeVxS3WmILnSDOllaiM1fAmLZ0mJAPKuZoUdccm9UTcyAiMIt35XzouamAggGFTUlOHy6PVwDivWOJnl0MREW8uR3vWv8d0Q5VOuMubdsLco7Io7liD49ZdQX2i2rGqK3SzKBT39fM2FMr1%2BXDyDhaqS1XXPIYj4Rr47ObauNXGgBJOlbYT85KupN0l1z17ZtV5Lvew5vFhFeEm%2BCBezdUSO9rwF2tDmW8vhDUKIqpLTd0iRCxO%2BYS7LyBioHc1ty0xkkplvZJw3pqTadTmd4Omh1Z6KfPIR7Vc8185aI7j8HF%2B4IhBPya49AtKvy0a2Vat%2FuE%2Fedt2hmvJkSGQovKaXkreDyiAph%2BA9nL1uqf%2FkZ1RC9IMfTzYdUKDVQowaepjF3YBNXQDLcoc69c4gWDCpY8IEnMw78M4NQBfWQ7ywldxZBzT0h07wW2qaCLwP6BILqCq0EKTQw9MYri9rI6y%2BlPcr%2BRgUwdxk0r0Bk9pFHkCNZaflib1K24HvgFwhJIhGnRLnAVmdDr%2BB9gSBhbERc5A%2BVMxLDxVUPNqHWGFncR4a%2BXMMfl5MAGOqUBTkP4dYykqWDSsfBsn1HCMYO8zAJYHpNLt0P0crKNxaB3cTbpgAF67P9Qq1y3LyLA4qyTLpzK9eKk4mbzSOtpmUuwwI7W4P1gSrfcwSHYcm%2FBTXIYIT6VOBd3esXfl7PIda%2F3FNUxtYImjnEcR1wju37A8nICm0rz1kNFaDzFaM1a3sSB4LvEuYBheuW9QFUfQylO0pC2wTqZhMP24LO88mOdieVo&X-Amz-Signature=55d645a88871051c8ea16749241d1def89e65f7080c6858f2a657d0c018e0d65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
