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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUZRLEG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXDPKWJ%2BSTG5BjCef33DKU0N7uGZRP0%2BYUtU%2FfKY%2BDQAiAOrtmqF9Er85GuhMcW3REZyRkAfKx0ID%2BApHHN%2FyoJnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcZ7w8NNsz0scadFKtwDqr9kJoZ7LKz3B6USi1FBn9MBe%2BWA78RanEdlHlY4zuPYeDxH9OZ1riJG1kl0fGVMB9Gt0IXBPqrXMrd7xKDizAckQ29yGuhSs87OIgECRtEWTokU%2BBkuz3Gb75MQrYSowoRT5t34%2FrJ%2BaITJcCW8F58rrlAXQ22SCVjBxcP0LnFTM0vIhTZfhUE3s16wN5KcX797Tibm4zAx2a50FXMqd855GVKXXLnZFHjIRDn1GerwW%2BSD8AwuUuIIGdSGDS%2FQy70OH0m36wHN0lijwdkgstBhId1D%2BqtAf9DVtFzMasdVgINIl3J%2BDfLFd2%2BnicqtDjj83HPZqbdm70BWgcbIJn7qxBEpEqEJoIBzWZJxKws0UMuRP6tutptTyholkh5UhjNASSQBLsfEaDD8LpgHGGFkacNtxFRVkK4hDkNHBnN8DlOpNcG%2BYK7N2dZO8aPLq40f7rjjiiWR%2ByYzBv668N2MjAilaug7CmNlXJPtf%2B%2BJkZQgH2cAfoH6f4ZxZLMbKOruhFXkowgrO0AUl2YlmKSUOSWHh7Uir0Lw3nOyvBtHV869kW0xXnQIO77%2Fw%2F0ybqZ8fwho6U9uQfPoQ4%2F9V64EFxq4k8A2a2DBdp56fbfV2QGa4SwpAMk77xow86HDwQY6pgGmDbksAfu%2BQmtbhYiJYdsGbDAOoVW7t9k29O4azezQUpqEylKAxovlebqn8%2FwCBnFTXDWdAv%2FCNzNQBx%2BVezpoxCNtllE77%2Bu8YZt%2BZwcRnBK%2F7h0%2FuMMUOTzsW2RuyqHDcniuOFRSTY%2BVdbbT%2F54FTzkZD7aMpjAJQaWCLkCEwLnKiH8tnebRQqXTSi9BMUtz47mKS0Bdn4qkJx6ahqCYvt1l2xvB&X-Amz-Signature=54252356e1f4d11029981a07f4f71d71944dff7c9dc9546acd8d85adff340a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUZRLEG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXDPKWJ%2BSTG5BjCef33DKU0N7uGZRP0%2BYUtU%2FfKY%2BDQAiAOrtmqF9Er85GuhMcW3REZyRkAfKx0ID%2BApHHN%2FyoJnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcZ7w8NNsz0scadFKtwDqr9kJoZ7LKz3B6USi1FBn9MBe%2BWA78RanEdlHlY4zuPYeDxH9OZ1riJG1kl0fGVMB9Gt0IXBPqrXMrd7xKDizAckQ29yGuhSs87OIgECRtEWTokU%2BBkuz3Gb75MQrYSowoRT5t34%2FrJ%2BaITJcCW8F58rrlAXQ22SCVjBxcP0LnFTM0vIhTZfhUE3s16wN5KcX797Tibm4zAx2a50FXMqd855GVKXXLnZFHjIRDn1GerwW%2BSD8AwuUuIIGdSGDS%2FQy70OH0m36wHN0lijwdkgstBhId1D%2BqtAf9DVtFzMasdVgINIl3J%2BDfLFd2%2BnicqtDjj83HPZqbdm70BWgcbIJn7qxBEpEqEJoIBzWZJxKws0UMuRP6tutptTyholkh5UhjNASSQBLsfEaDD8LpgHGGFkacNtxFRVkK4hDkNHBnN8DlOpNcG%2BYK7N2dZO8aPLq40f7rjjiiWR%2ByYzBv668N2MjAilaug7CmNlXJPtf%2B%2BJkZQgH2cAfoH6f4ZxZLMbKOruhFXkowgrO0AUl2YlmKSUOSWHh7Uir0Lw3nOyvBtHV869kW0xXnQIO77%2Fw%2F0ybqZ8fwho6U9uQfPoQ4%2F9V64EFxq4k8A2a2DBdp56fbfV2QGa4SwpAMk77xow86HDwQY6pgGmDbksAfu%2BQmtbhYiJYdsGbDAOoVW7t9k29O4azezQUpqEylKAxovlebqn8%2FwCBnFTXDWdAv%2FCNzNQBx%2BVezpoxCNtllE77%2Bu8YZt%2BZwcRnBK%2F7h0%2FuMMUOTzsW2RuyqHDcniuOFRSTY%2BVdbbT%2F54FTzkZD7aMpjAJQaWCLkCEwLnKiH8tnebRQqXTSi9BMUtz47mKS0Bdn4qkJx6ahqCYvt1l2xvB&X-Amz-Signature=fa5a569644fe0570014ffaa5e5fa932dcaacb3f2564b84037c4fda67a6b36cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUZRLEG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXDPKWJ%2BSTG5BjCef33DKU0N7uGZRP0%2BYUtU%2FfKY%2BDQAiAOrtmqF9Er85GuhMcW3REZyRkAfKx0ID%2BApHHN%2FyoJnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcZ7w8NNsz0scadFKtwDqr9kJoZ7LKz3B6USi1FBn9MBe%2BWA78RanEdlHlY4zuPYeDxH9OZ1riJG1kl0fGVMB9Gt0IXBPqrXMrd7xKDizAckQ29yGuhSs87OIgECRtEWTokU%2BBkuz3Gb75MQrYSowoRT5t34%2FrJ%2BaITJcCW8F58rrlAXQ22SCVjBxcP0LnFTM0vIhTZfhUE3s16wN5KcX797Tibm4zAx2a50FXMqd855GVKXXLnZFHjIRDn1GerwW%2BSD8AwuUuIIGdSGDS%2FQy70OH0m36wHN0lijwdkgstBhId1D%2BqtAf9DVtFzMasdVgINIl3J%2BDfLFd2%2BnicqtDjj83HPZqbdm70BWgcbIJn7qxBEpEqEJoIBzWZJxKws0UMuRP6tutptTyholkh5UhjNASSQBLsfEaDD8LpgHGGFkacNtxFRVkK4hDkNHBnN8DlOpNcG%2BYK7N2dZO8aPLq40f7rjjiiWR%2ByYzBv668N2MjAilaug7CmNlXJPtf%2B%2BJkZQgH2cAfoH6f4ZxZLMbKOruhFXkowgrO0AUl2YlmKSUOSWHh7Uir0Lw3nOyvBtHV869kW0xXnQIO77%2Fw%2F0ybqZ8fwho6U9uQfPoQ4%2F9V64EFxq4k8A2a2DBdp56fbfV2QGa4SwpAMk77xow86HDwQY6pgGmDbksAfu%2BQmtbhYiJYdsGbDAOoVW7t9k29O4azezQUpqEylKAxovlebqn8%2FwCBnFTXDWdAv%2FCNzNQBx%2BVezpoxCNtllE77%2Bu8YZt%2BZwcRnBK%2F7h0%2FuMMUOTzsW2RuyqHDcniuOFRSTY%2BVdbbT%2F54FTzkZD7aMpjAJQaWCLkCEwLnKiH8tnebRQqXTSi9BMUtz47mKS0Bdn4qkJx6ahqCYvt1l2xvB&X-Amz-Signature=de0fc87154374f56e626068d21239ca4aeca4e4159318087896d8deebb7bb6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XJWDFN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDJ30nKfrhPsiPnppBLHCOLtm1z9wrkrF5T9IuD8bpueQIgVbY8qDELoXOEEbBViyyvt1geQCexNoDTzA1VeM3TkpAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8H2wOReZBXiXX5GCrcAwlhdQFtJMh4rfA9dsdtcdiLdl8g9eUksqlkPQYSr8ye6DIiwg5KYxgd972Mn0zZj%2F4GbPCmtl5hMTfsdcusZJafMuSqIvbBNlpC6RTGVGoO%2BQBurB24LapyvQDS8DUGRcC9Knq3a0q8pg3fgTfuZDQcZoHhPPATfIFx%2F1RZ8KKlF8OziMnwQxvNmOV%2FVsqNmo6mknWLleE8qANuO1WviEnueAIdBEj1FliqY76GCiZMU9qoOAbt0Jh3NUtJkIrCo%2FdK%2BMZVpOsMiwKySyagT%2BxsKriT4had6juv0CDodunACOev5xJJMoxhBfjGgkF2iStDycpWNUbj7hgeAM1j83jUirT6QQzH%2BkUi2GmVnue2YNMEiHKMcxqHdNCNvPIK8PTs5GPqcg9NW5d36g%2BEnBfAISQf7TaAo5gq7%2Fa7DdFgVcR5lt%2FDC7OMarx%2FldEhCnpoMmR23491PDMh9D%2FJLuIIn5OoU%2F0aZqKcykwuSOmigyCdTCjJWruYyEwfE%2BlbgyJz3j6QdywvBwDye5JkSptLIP0ATd5H4TZwOTEGbpxJGbrpO8jN4vokQPgswT9WEqBcaLt5XzXRTpMI7IH2YF%2BA5Wzyv6%2Fnvg9J4xA8%2BgoFsQ3sSASTZM6j%2BvoXMPChw8EGOqUBl2QHOnXDU%2BC8zI%2FA7Lcszh1xT0lXLqpKVUL0r6jBlpD2xiupMZLIEFNJtpyONePbwi%2BME8W8YElaHXr%2F6l%2F5Dr59VJEkC1oUd7MgHhJ6OwHRqRzpitzzngpjB7UKkV0nE7r%2FSpR0qJWTrExAUoPSGaXXktZEBrVD33PxT5TZ0aFNtQd6HtQ9YWs%2FciBtHaZKwfwLAOilzBdtAN4lMswhSlqiz9yx&X-Amz-Signature=ec5f39304f9306fcb145d8b046de3201aa051f0913f8ad9c6a8db343c23a6d96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X55QAOLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC03tqHnlSO7UmqIRgOHBj%2Bj%2FvPXqEfx6ZHBr%2FXGNEP1wIhALZjLQZmxyJap59JXhquD5gEaT7lEDZY54u%2Fyc8o7YpwKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy97amZcrLxUWCTHeEq3AOZCQ5W1RlblVspbQrjnxeJtmgxaaET5PnD7W7ZTMNhvCWpXjRtpqJMRKvY3%2F%2F%2BLG1Lpb3nawnXwAwBu%2BbG8f14nKytQb1YyWKGukP%2BZOsE2oX4yVkji2io78S11aV0uCfupXwOsQjLRVbPjxqMtAFfB12RSaU9Br%2FGwtV7AAuDI3H9OPuNmhIDURiPNvrz2Low9l%2FSLr%2Bwcx4OVzxfhjjrW%2BLM7%2BbG0ucnqzeF5NEXDo85ShFJRSC6t2ztMjINqPje5z%2BPICIWxyTVazK4TZbpp9P7kUP7vwfMvmFEtiZeuSMebMcJ6cDPHA%2BI6ryceBxqKfJpUv8utTkkRR6z3vRZfdL5UOf0K2mWx5mEhfYbcsCQ7EgcOgDkwk%2FIJg4dJoB0W%2FoMbzrL4xP9DMKYRjojp6pehTpbgewQNpRfW%2Blj0E8c9hlos0KzpD3gM05OMyjHKw%2BBwnHfLnq7ZqgZCq1tUjfLCkhpWB%2BwUpEHbM%2B0wA8ooNZk2NCAvcL11W7tGYzkqqqerprWUarWDvbimrU3D%2B1NNjfddf3p8YVgLObtziTx8GUO87DrReAVOGdO8CBAU8CEFoIbBRtLq3kFy%2FvcMHXscxJMOKWbgdsWgrHIQP6XBb%2Bu1FJ62IqumTDGocPBBjqkAWfSCD7vVCrgMfgIgiA72QTBfI9D5nwHoZ5M8U16LnxYsGe8V4l7ich%2FlJdwGZ0uQ7%2BUZcl0qNHQufMHAMcqm2heIwYaLgiqKJN4B2g%2BHNUqlPwZ6pVsgH84Hr%2BLAn0H%2FKbUVnbY%2F%2BmNZx6RVnWxg1b4utgbggQ51ldkdakcCDKCM89xfUaCWmlZiN%2Fm6T7qTdxGEQhf9hl2qqn8aUlcCblkVN3W&X-Amz-Signature=eab3dbd006bd5d3f166ac9e71245551db9384eef1db791289f0f495545c83d63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUZRLEG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXDPKWJ%2BSTG5BjCef33DKU0N7uGZRP0%2BYUtU%2FfKY%2BDQAiAOrtmqF9Er85GuhMcW3REZyRkAfKx0ID%2BApHHN%2FyoJnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcZ7w8NNsz0scadFKtwDqr9kJoZ7LKz3B6USi1FBn9MBe%2BWA78RanEdlHlY4zuPYeDxH9OZ1riJG1kl0fGVMB9Gt0IXBPqrXMrd7xKDizAckQ29yGuhSs87OIgECRtEWTokU%2BBkuz3Gb75MQrYSowoRT5t34%2FrJ%2BaITJcCW8F58rrlAXQ22SCVjBxcP0LnFTM0vIhTZfhUE3s16wN5KcX797Tibm4zAx2a50FXMqd855GVKXXLnZFHjIRDn1GerwW%2BSD8AwuUuIIGdSGDS%2FQy70OH0m36wHN0lijwdkgstBhId1D%2BqtAf9DVtFzMasdVgINIl3J%2BDfLFd2%2BnicqtDjj83HPZqbdm70BWgcbIJn7qxBEpEqEJoIBzWZJxKws0UMuRP6tutptTyholkh5UhjNASSQBLsfEaDD8LpgHGGFkacNtxFRVkK4hDkNHBnN8DlOpNcG%2BYK7N2dZO8aPLq40f7rjjiiWR%2ByYzBv668N2MjAilaug7CmNlXJPtf%2B%2BJkZQgH2cAfoH6f4ZxZLMbKOruhFXkowgrO0AUl2YlmKSUOSWHh7Uir0Lw3nOyvBtHV869kW0xXnQIO77%2Fw%2F0ybqZ8fwho6U9uQfPoQ4%2F9V64EFxq4k8A2a2DBdp56fbfV2QGa4SwpAMk77xow86HDwQY6pgGmDbksAfu%2BQmtbhYiJYdsGbDAOoVW7t9k29O4azezQUpqEylKAxovlebqn8%2FwCBnFTXDWdAv%2FCNzNQBx%2BVezpoxCNtllE77%2Bu8YZt%2BZwcRnBK%2F7h0%2FuMMUOTzsW2RuyqHDcniuOFRSTY%2BVdbbT%2F54FTzkZD7aMpjAJQaWCLkCEwLnKiH8tnebRQqXTSi9BMUtz47mKS0Bdn4qkJx6ahqCYvt1l2xvB&X-Amz-Signature=323f91747a3c206a102dfcf8cc26fd3bbda939b028afdf786042c80cb1f357e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
