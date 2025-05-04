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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3HFC2A%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLQIh5U3vD63N87%2FY%2BLgwUDQRTZFgiVamr1eY842f2eQIhAMH9CVSA5dePOIHhBLB0QRyda2JTXUva7SC567aj0Wi2KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5vqmoPJt9ZzmiqJUq3APIxHGLZNO1Db4HuEj%2FISYjLRColq7u8M8KqbZdzaIjbQfZGvn%2BhIAHIVb6raOFhFc3tq9Ly0xLHeWXqIXT0N%2BpbcKRZ8fjGPhST3%2FC0QvVcsjq7kKYloETb270tacuxAe8Y5tDSXf0qF7aB57GJpJ%2BVi3ic9FUgiRiTGrkxpVzdlrQ%2FZrjMF4HUsBMMbG37pI2Xya0USe3k3ZRNQWnu3k4u1Bf0wuqqioETYLFvkt1eKTXNbBsURSFOfIlTO0XnucEyx9NiQo2%2FgxakAH4vITxdCVeet8ygabeBJuPrNlsGa%2BwRkTNsmmjLTrJlOB7RhGNI8Y7uCNICw1LRTj3sI6M4Drl9%2B2KjWdCjG%2FCM4NfStqD2zUe3%2BXFNpuff6Aa9bMQS6NBw%2Bbj19DMNNAM1WGfp64YkhWo0pXn54LQA53wSkhNX42pzkqNn6HJXLELvTLBLB0AQ5ycKkcRoGfV14mGcw7MriXdfECaDFS4l1ARFRgMq%2BatcBeI5hQwVYqqrZWacOcHbmBNRVblAFrW2oMBIDBS2DhFR7Cr%2FQSe%2FyYSz%2BI1VeuQ635c51EAUrNU0IK3BQvOHscM6MG0cUV1VUj91aXQ43wW8ZUjgJsiwLBdt1UJtMy8BkI7mcftRzCc8drABjqkARNKWf1hFvHuVJZzN7hhRke3HnGvC2kKBry0LyI6bJxy8ReHrF1NYtbG%2BCKyxkyjlfORMKdfq7D77BQhxmVvkSXOgUpgvRgnTlRaxKgYUWTk2MONt3gVJ0MgyMuT90JttmFYymVzcffcU%2B9hXUeGVlIoHfU62Z3Zthu9vNSpbd7Cbb8eFiCGugKgd5oAu04dduhrI67zUstKLmMyxY%2BIsIz9KhxK&X-Amz-Signature=452f813e28e25498e93db69c380fcbd94a45bc11233960b78ef126248767c5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3HFC2A%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLQIh5U3vD63N87%2FY%2BLgwUDQRTZFgiVamr1eY842f2eQIhAMH9CVSA5dePOIHhBLB0QRyda2JTXUva7SC567aj0Wi2KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5vqmoPJt9ZzmiqJUq3APIxHGLZNO1Db4HuEj%2FISYjLRColq7u8M8KqbZdzaIjbQfZGvn%2BhIAHIVb6raOFhFc3tq9Ly0xLHeWXqIXT0N%2BpbcKRZ8fjGPhST3%2FC0QvVcsjq7kKYloETb270tacuxAe8Y5tDSXf0qF7aB57GJpJ%2BVi3ic9FUgiRiTGrkxpVzdlrQ%2FZrjMF4HUsBMMbG37pI2Xya0USe3k3ZRNQWnu3k4u1Bf0wuqqioETYLFvkt1eKTXNbBsURSFOfIlTO0XnucEyx9NiQo2%2FgxakAH4vITxdCVeet8ygabeBJuPrNlsGa%2BwRkTNsmmjLTrJlOB7RhGNI8Y7uCNICw1LRTj3sI6M4Drl9%2B2KjWdCjG%2FCM4NfStqD2zUe3%2BXFNpuff6Aa9bMQS6NBw%2Bbj19DMNNAM1WGfp64YkhWo0pXn54LQA53wSkhNX42pzkqNn6HJXLELvTLBLB0AQ5ycKkcRoGfV14mGcw7MriXdfECaDFS4l1ARFRgMq%2BatcBeI5hQwVYqqrZWacOcHbmBNRVblAFrW2oMBIDBS2DhFR7Cr%2FQSe%2FyYSz%2BI1VeuQ635c51EAUrNU0IK3BQvOHscM6MG0cUV1VUj91aXQ43wW8ZUjgJsiwLBdt1UJtMy8BkI7mcftRzCc8drABjqkARNKWf1hFvHuVJZzN7hhRke3HnGvC2kKBry0LyI6bJxy8ReHrF1NYtbG%2BCKyxkyjlfORMKdfq7D77BQhxmVvkSXOgUpgvRgnTlRaxKgYUWTk2MONt3gVJ0MgyMuT90JttmFYymVzcffcU%2B9hXUeGVlIoHfU62Z3Zthu9vNSpbd7Cbb8eFiCGugKgd5oAu04dduhrI67zUstKLmMyxY%2BIsIz9KhxK&X-Amz-Signature=efa5a2e1ad7d730e0e81537ebe6c5e1cdb5ab576f7e195da31e2a0e98bc685b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3HFC2A%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLQIh5U3vD63N87%2FY%2BLgwUDQRTZFgiVamr1eY842f2eQIhAMH9CVSA5dePOIHhBLB0QRyda2JTXUva7SC567aj0Wi2KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5vqmoPJt9ZzmiqJUq3APIxHGLZNO1Db4HuEj%2FISYjLRColq7u8M8KqbZdzaIjbQfZGvn%2BhIAHIVb6raOFhFc3tq9Ly0xLHeWXqIXT0N%2BpbcKRZ8fjGPhST3%2FC0QvVcsjq7kKYloETb270tacuxAe8Y5tDSXf0qF7aB57GJpJ%2BVi3ic9FUgiRiTGrkxpVzdlrQ%2FZrjMF4HUsBMMbG37pI2Xya0USe3k3ZRNQWnu3k4u1Bf0wuqqioETYLFvkt1eKTXNbBsURSFOfIlTO0XnucEyx9NiQo2%2FgxakAH4vITxdCVeet8ygabeBJuPrNlsGa%2BwRkTNsmmjLTrJlOB7RhGNI8Y7uCNICw1LRTj3sI6M4Drl9%2B2KjWdCjG%2FCM4NfStqD2zUe3%2BXFNpuff6Aa9bMQS6NBw%2Bbj19DMNNAM1WGfp64YkhWo0pXn54LQA53wSkhNX42pzkqNn6HJXLELvTLBLB0AQ5ycKkcRoGfV14mGcw7MriXdfECaDFS4l1ARFRgMq%2BatcBeI5hQwVYqqrZWacOcHbmBNRVblAFrW2oMBIDBS2DhFR7Cr%2FQSe%2FyYSz%2BI1VeuQ635c51EAUrNU0IK3BQvOHscM6MG0cUV1VUj91aXQ43wW8ZUjgJsiwLBdt1UJtMy8BkI7mcftRzCc8drABjqkARNKWf1hFvHuVJZzN7hhRke3HnGvC2kKBry0LyI6bJxy8ReHrF1NYtbG%2BCKyxkyjlfORMKdfq7D77BQhxmVvkSXOgUpgvRgnTlRaxKgYUWTk2MONt3gVJ0MgyMuT90JttmFYymVzcffcU%2B9hXUeGVlIoHfU62Z3Zthu9vNSpbd7Cbb8eFiCGugKgd5oAu04dduhrI67zUstKLmMyxY%2BIsIz9KhxK&X-Amz-Signature=54571864d5a0e204b30ce47e4c9d38fe4ec304e82f16f21f2e935139380dadb8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQGHBPZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDWanwSWe2LVY46nRj43%2Bu7jUfp9pmUJ9Nw%2B3nducqUFwIgZPgMRJPn5GMndTqvfosXrKnoXSQjOflf0DPV1apvBpQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbPELTD%2BFKyDOFfGyrcA%2BBpTLZY%2F%2Ft%2FcitakYfR%2F9AdwURaXVwTqzpQGDrmPyLekONKNFYoV8IlYiaNKkNFj9P711wePpWBRoXEAC85BfVNq9To%2F5sV8rxS6otqpQROAnawsVY0MGNPvBdpfLtljZfRGBWIxrEbjNbI9Qzh3TvoUcWTirTsHImvaQDdvPO2prl2C8qu9CE%2FJiNRJoGCU57T%2BPzX3DFSk%2B2Iz6mJdIW0osfXZLlipU8f0nrOtMcntei5IRoWuMabbwsn1jFw9bO4cYjFss2w%2B5qNT3vXyncxKdQXa5L6ymOmeGkVsbTOYyN61eQs%2FGnJvh2MkdMdThTA0%2BFnazxSE6Vl1a8zufdemFOZoZOgf%2BbZ6pb2VHJbaoSeH2LiD%2FCmVQiff%2BII6ZoMLE6qwrDDgCXqLXIXTsej1OjiGUhK3HZ%2FgNlhTQfoAYDTVH0ac%2FyTWnk2I%2FgPPgTRV4FGIiPSFjsXzVQ3HDH33LRFzfPPAKF0nmL4kIMKY%2B4spLHnP2h6yGHt5QUyhRYplh3EM3z3%2BL%2B3iyHICJE9TLWrbcmcvHk%2BfO3yrUvBbBJnmVD74B8Ybt9OmF8j7MHHWFKSJrkiPTQc6rkmYKgF%2BdaaifApULI1MF7Ygs9kFr%2F9dGNdcsgsgCHhMJTx2sAGOqUB1332xGA0P8ai2Q7rgxBWKVhRBShfROoOEq0q%2BZ6mNbZJWZemVMryJ3oOYqAacmgnTGi2xPfiF5ixuX1OxnuefCcpFq9jAswrrwV3XNrY6wtWsIDx4NCwxiAvs9KGxJ9xdK6KbRAneGmHwIqfG6FFkxHeD700iNB6rcfwJzLyu5AMvuMqSwHC%2F9iqEOEoV3JBwPr3Fhwn%2FeUKG1SN2yTBWF%2FocM0I&X-Amz-Signature=aa9d9112c50d4a1221570ef50bad0b8ace1e236136f5efdeadec7debed1b9e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NX73OJL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICKjvJXnFGiq0jUH%2FI2Txf2yRPeeCcbjtTSbF2%2Fw5%2BHqAiEAiq6j7f2EF%2FMpnM%2BtY2lMJERIJzpZKg0iEdZsYhRJkagqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69j7GpUCQg2ILfQSrcA19AAGpPi%2B%2BfL3krhb%2FDcG780781Eb6shmk6AKXi2wUve59EvADe3qfaX%2BsMn9vfg4nz%2F96s28TPDnkXbmGkx93yMpR%2BuMfiexn1Es0PxS%2Bn9jxQ%2FpkFfKig%2B8if1etYJL71Qz74qMypfD0WsWyIpAMO7tt6EXEiVMA6Y98NdJfbuCiTOwR42o59sZg8STAB3dKdNo6smX8qrptj4p3VIAKawEbgPhrhPC%2FOAqe%2FYMUhMUTADnQsNJTcLDkEUwMcbSHSB5tSvczNAo2SJHgIMfljkxpXstiqdlV40CfU0xv8oxmT%2BVkVw9gajGas0SdOATeStR99vWfFZLwLdL28PCN1wxsG1gmL3IXYXjULV%2BgDqNyBjBF22atx9pkPYiVsOcbC8vl0NqWTX%2F2HwTAL%2F2bwY%2F3IX860Y%2BDfqxKJlz4VMCdoWrutUJF4Avi6Ine8pTIDL2%2BKOSEa6XRngWv%2FMCphlgXtHBUg4Alswtfv8qJfDWaaMfGU5duFBqANJv9hJVIHwQgJRn4QbNqeJUAwWceg1v8%2FsRe8g8wGommCb9Hj8KeX5K%2BB5gITEJ245EhVA1o%2FREDzEZFfSNxUKMBxVtaUbO12IUzQfB2hAy8qx1aarwWl4qZY%2F9iqzgQFMO7w2sAGOqUBFfKD03gCLDt83lZozmu9mhd4sKr2DBDP6tnq0iwn%2BZQSf5eYoZPu%2F%2B9cb6d5KtJ7Sol1TjyWL4N%2F6XnACYZtaL%2Fmbyn3ig876KN9VulaG96E7i723fumo7Y2ohcr2yBL6XcvAUCGRCjogg%2F9tgxY9MTzXU7%2Fn0qmGvvt1P8MJPr2vliQXvSQel9qidPPacXettsumP7i%2B%2FPuwb%2BI5YLuNrGnIolq&X-Amz-Signature=55f58aeaca6e1c4114c4e4f48b907dc5b80a370774c3c94aea579b6aa9c9664a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3HFC2A%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLQIh5U3vD63N87%2FY%2BLgwUDQRTZFgiVamr1eY842f2eQIhAMH9CVSA5dePOIHhBLB0QRyda2JTXUva7SC567aj0Wi2KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5vqmoPJt9ZzmiqJUq3APIxHGLZNO1Db4HuEj%2FISYjLRColq7u8M8KqbZdzaIjbQfZGvn%2BhIAHIVb6raOFhFc3tq9Ly0xLHeWXqIXT0N%2BpbcKRZ8fjGPhST3%2FC0QvVcsjq7kKYloETb270tacuxAe8Y5tDSXf0qF7aB57GJpJ%2BVi3ic9FUgiRiTGrkxpVzdlrQ%2FZrjMF4HUsBMMbG37pI2Xya0USe3k3ZRNQWnu3k4u1Bf0wuqqioETYLFvkt1eKTXNbBsURSFOfIlTO0XnucEyx9NiQo2%2FgxakAH4vITxdCVeet8ygabeBJuPrNlsGa%2BwRkTNsmmjLTrJlOB7RhGNI8Y7uCNICw1LRTj3sI6M4Drl9%2B2KjWdCjG%2FCM4NfStqD2zUe3%2BXFNpuff6Aa9bMQS6NBw%2Bbj19DMNNAM1WGfp64YkhWo0pXn54LQA53wSkhNX42pzkqNn6HJXLELvTLBLB0AQ5ycKkcRoGfV14mGcw7MriXdfECaDFS4l1ARFRgMq%2BatcBeI5hQwVYqqrZWacOcHbmBNRVblAFrW2oMBIDBS2DhFR7Cr%2FQSe%2FyYSz%2BI1VeuQ635c51EAUrNU0IK3BQvOHscM6MG0cUV1VUj91aXQ43wW8ZUjgJsiwLBdt1UJtMy8BkI7mcftRzCc8drABjqkARNKWf1hFvHuVJZzN7hhRke3HnGvC2kKBry0LyI6bJxy8ReHrF1NYtbG%2BCKyxkyjlfORMKdfq7D77BQhxmVvkSXOgUpgvRgnTlRaxKgYUWTk2MONt3gVJ0MgyMuT90JttmFYymVzcffcU%2B9hXUeGVlIoHfU62Z3Zthu9vNSpbd7Cbb8eFiCGugKgd5oAu04dduhrI67zUstKLmMyxY%2BIsIz9KhxK&X-Amz-Signature=ba6c9a7c9cbd62a8b629bfae70faf2a3f3f4850a919446bba5921b48e5746ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
