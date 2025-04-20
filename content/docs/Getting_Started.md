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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS4F72V%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBWBQI3mQKJlW37Yq4WsWz9ocCYhDCa69Zdrwi50o5ZXAiBV4oY%2BujC1%2B%2BbbhlGFGREz1H8zdkVxnga6SoO1Mhq8riqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JeX9nl5ihD2cI7uKtwDchBlFQzOWQ9%2BT7pRqNEZMdKNdzvp%2FVbnal7BDBhgJ5puF6I1Dgj1l5rbGS6bCkZeKo44XBsziUPDBjydnmXQmlEXrhKMu4%2FiQ16OuiTA2v8Ij4tEmMPDwmE1ERIREJ3mIuXOXUfnEq6%2Fl2w3mGPOYVt%2BLrddmIypVdH81NWu7uYHv7PZvSo53nl3afICvUdT3XZb45gBgQMVa%2FmueimA2PJNJhyQlaQ8bQkCORJN%2BbYpnJauM6s%2BTtI%2Ff6RA0BaZ2yvMpkPg%2BR1AY596Xbt9fgSFPjau%2BiEfGKstLBMigHUXA2egPV1GNDgM%2BRZBajzCPbfe%2FjE3SwZ5MM1GK8o%2FZRHjJvo46ddJzaq7SjzNszohTj4mRXrqlcH411sKkzx4mfZ3jniUGBAA0reIeAfZThQBCezv0A102z5NUNjeB%2FqH6FJUIGhSnYq8jD8mKmKa616h6qneMgevOUsMS22%2FBFre9XZ%2BybdckvOqfazKZxGtAVvzaXVmyDvD7ZsnbNm6qgyorXrn02oXw5Wh4kOOnK1K0dxCzlKzrEObbbMJF0Jt%2F9dFc5fvx%2F7YRXVlm4vmOzgwgNLWBAm4GGxOpcyqNYeMbcaCbwbWrMme6NC43uUxsJ8BpJsoUp6kPMswnYKRwAY6pgG0ySyxNXAY0tOetNkwJeZlHxF5uwKRLysCVkHnwMeX9nScV4oVun0Ke0W1eKFd4F3ppjV%2FCORQFVICzBgv0kjTMUQBQA8zlnaiU445Eex4mylTgx4VYBNHp2OkCNAb0kYrqyutKeKSGoraSQ2EoXYF%2Fi8I90rYpu5W%2FeB25unYNR2UySBg%2B6vjwRxoflPtI44I2pYxwUln%2FCx9ef80N7ai8b2J9cHs&X-Amz-Signature=3bc7e2321e5241750d4374823e7001d478c6c455beb55c30f8ebea365e358b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS4F72V%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBWBQI3mQKJlW37Yq4WsWz9ocCYhDCa69Zdrwi50o5ZXAiBV4oY%2BujC1%2B%2BbbhlGFGREz1H8zdkVxnga6SoO1Mhq8riqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JeX9nl5ihD2cI7uKtwDchBlFQzOWQ9%2BT7pRqNEZMdKNdzvp%2FVbnal7BDBhgJ5puF6I1Dgj1l5rbGS6bCkZeKo44XBsziUPDBjydnmXQmlEXrhKMu4%2FiQ16OuiTA2v8Ij4tEmMPDwmE1ERIREJ3mIuXOXUfnEq6%2Fl2w3mGPOYVt%2BLrddmIypVdH81NWu7uYHv7PZvSo53nl3afICvUdT3XZb45gBgQMVa%2FmueimA2PJNJhyQlaQ8bQkCORJN%2BbYpnJauM6s%2BTtI%2Ff6RA0BaZ2yvMpkPg%2BR1AY596Xbt9fgSFPjau%2BiEfGKstLBMigHUXA2egPV1GNDgM%2BRZBajzCPbfe%2FjE3SwZ5MM1GK8o%2FZRHjJvo46ddJzaq7SjzNszohTj4mRXrqlcH411sKkzx4mfZ3jniUGBAA0reIeAfZThQBCezv0A102z5NUNjeB%2FqH6FJUIGhSnYq8jD8mKmKa616h6qneMgevOUsMS22%2FBFre9XZ%2BybdckvOqfazKZxGtAVvzaXVmyDvD7ZsnbNm6qgyorXrn02oXw5Wh4kOOnK1K0dxCzlKzrEObbbMJF0Jt%2F9dFc5fvx%2F7YRXVlm4vmOzgwgNLWBAm4GGxOpcyqNYeMbcaCbwbWrMme6NC43uUxsJ8BpJsoUp6kPMswnYKRwAY6pgG0ySyxNXAY0tOetNkwJeZlHxF5uwKRLysCVkHnwMeX9nScV4oVun0Ke0W1eKFd4F3ppjV%2FCORQFVICzBgv0kjTMUQBQA8zlnaiU445Eex4mylTgx4VYBNHp2OkCNAb0kYrqyutKeKSGoraSQ2EoXYF%2Fi8I90rYpu5W%2FeB25unYNR2UySBg%2B6vjwRxoflPtI44I2pYxwUln%2FCx9ef80N7ai8b2J9cHs&X-Amz-Signature=f3b7466d76aa2768c5ffd240de7b613b8c686e140f99a6fad25dbf78751a0918&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAJ4F34%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDCOJZ7CqXhubtk%2Ber%2Fr1Qe1%2BFb7hnQ7B2d3TKITQd4NgIhAIUUkzqTis40AcLi91LPuwg8XbQWikHs5aDSTI6CnDC%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKNjT51kulrT5vjVsq3AMPhI1zVdexWhXegNTPsGpdcKQ7U9g2XrAhWfNXdw1EOQg6S92LAkrGOlSSND0vv8GdO3D909Nh4clgaQvivBtmvi2DE6jG1p1bt1Foy6z4xcIXjzi4W0mncmTNt3e8u%2Be0mAEU08EbdziNDsKnDsDlYgccCN4d6Sa7BgubLS4hGpes0DMNkW8G0jSa14eu%2Bg%2FpAr2tZpiwHIBzHxo7L3JgxXQpNgMsyXcz%2F5eW1UBcQaqPFa4cGMta4g3VURQEraRsgq8f6VK3zqV4x3siXrKg5Ltg8a3EN621mfVaqEP7Kvdcf0946lCW6SvtlCmMkVP%2BvruVfXsK17PIsTS2SW1L5bpLMPuIUSNinax6OHR8ktSQFFmuHWIT8VjrPR04thX%2FqIEwzgVbVLJr8BS34dxZ5Q6cKKehXAURqXC0jpRsvZw9K62lksDHOlp0Ic6eS%2FrCo3o0ZbE95Oe%2Bthy%2FT8htddtSf8Cy5iR1j%2BlmCZFH8qqHTRNBVrs0ihdF8EHiWXtdJuQf%2FuD2T13j8VzvDgfV7zSzUQljzB58IZUsZOeOQpGyqmd8Te0tByjT%2FHjW1Fjp6rPXTSpzXcr9KmzVF0yO%2B8jPaCOXOOFUqA%2Fnh5BidcSRtLIJUvwP%2B%2BCzrzD5gZHABjqkAetGuV1WN3mIKUDDyP39T0oNFB3KeUjfLTpk5PHhsafl0JhVQErRTYnTCmdCOwbeXQe%2BocVtxxTARJj%2BxLHBKBeiaao8ftzULrQs8XqgQrblF%2FU36Tc6WN8spY4S%2FdGeHioSuZxXvVObeBFde5hv6v0YhKE9lEPbEN%2BJuK6wzzIKfZuaUM%2FSEFzBonMJsk%2BGBpeENhCB5pQ1nE9RZrehUvn2PnCV&X-Amz-Signature=b13541cfdd96ab6d5cbbe049ec5fd00e208cf9fa6134be56e6cb3da4f4d77426&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYAA6IT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIQCU33sUAdse0iwZ6KgtasVKD9ylJOOK844l%2BiVymimawQIfCrw0mE0VTAnFcGLL5HJPk%2Bwax2Zy9F8UJ7cSiF10tiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2B57Szf2XcAisparKtwDzngaTL6%2Bhh4TxlPjRqzkTl1JGWBO6NSWnZzKZJXUdIHSLaP4L6dJgK82P3Xy6om1AofpcG3d8%2Fvr65Gec1Prtt5fRRcoDgrWIYMLnCDSebx%2Fdv0nJ67xBIKrlPcD2DNe51US%2BwIkE7LmJYvC2S4k1z0odXvAUf%2Fia9UTk7QuC2keFZEcUwwQDewT8FELxt4v4ILB2fWoJWShh9I0aoRynI0b5PcSndvQ5wc2GvYDAMrp7w%2FwNGWDLCoU5%2BuXq4PVi7d%2FMl14txVP75f7OcnptikINCy5B8tZgQfD%2B5CmvUJzZFx%2BOHJ10oOiSbo4J%2Ftw%2FPux%2B3zspNs6aAsZMlVCf2%2Fp6u%2FalRoqOEaaMGTgPAudznfcT1LaN12W7u6z9kwEJ54QR6KsPq5W2BEox6ktUmd%2B2TgtnaRHOKneqRWjOqmeGc%2FbFP9eNuY4%2BqTXvDmpXjwYjNoTsno%2B65bcBQYWG%2Bg6i4aotoMNeAmbiu%2Ff2stXk0GpB878xBbj4Eq3DTKR0JULX90HY829KnzVbyFl4K9s9KZPaYPGVLAIP0AL5B23OB6zVS1wppA49jIoGPQtZdu2UzOpuOdekNMqus2mE1yuuJ4KPEDHFIEvf4Lvnr3vhhwwbB3pCF8kdagw5oGRwAY6pgF0tROTAvrFlrBs1iKkCP6TMpuz0I1Wmyc7m96v6qtVCPG%2BHzF03qE3kpCyDBMJm5pg02fKI5dKDCgwdTUKrErqyrxEPEzsV2oHZQ78y0TJJBMS0%2B8ed%2Bs0L4OdNoUBcyBxMYRrJwcpcJzqz5sjAvk%2FuvpQzGsWmFJ5vhSTz1vi5Pu1gEB%2F9gtkT4yLPDt9YE897FBmjUruKr0l%2B9VuKT0pGTwCV0hS&X-Amz-Signature=71ad98738f7c304e999520fd9e72da4517e705f86c8ae9f4214ce982e4cad3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS4F72V%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBWBQI3mQKJlW37Yq4WsWz9ocCYhDCa69Zdrwi50o5ZXAiBV4oY%2BujC1%2B%2BbbhlGFGREz1H8zdkVxnga6SoO1Mhq8riqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JeX9nl5ihD2cI7uKtwDchBlFQzOWQ9%2BT7pRqNEZMdKNdzvp%2FVbnal7BDBhgJ5puF6I1Dgj1l5rbGS6bCkZeKo44XBsziUPDBjydnmXQmlEXrhKMu4%2FiQ16OuiTA2v8Ij4tEmMPDwmE1ERIREJ3mIuXOXUfnEq6%2Fl2w3mGPOYVt%2BLrddmIypVdH81NWu7uYHv7PZvSo53nl3afICvUdT3XZb45gBgQMVa%2FmueimA2PJNJhyQlaQ8bQkCORJN%2BbYpnJauM6s%2BTtI%2Ff6RA0BaZ2yvMpkPg%2BR1AY596Xbt9fgSFPjau%2BiEfGKstLBMigHUXA2egPV1GNDgM%2BRZBajzCPbfe%2FjE3SwZ5MM1GK8o%2FZRHjJvo46ddJzaq7SjzNszohTj4mRXrqlcH411sKkzx4mfZ3jniUGBAA0reIeAfZThQBCezv0A102z5NUNjeB%2FqH6FJUIGhSnYq8jD8mKmKa616h6qneMgevOUsMS22%2FBFre9XZ%2BybdckvOqfazKZxGtAVvzaXVmyDvD7ZsnbNm6qgyorXrn02oXw5Wh4kOOnK1K0dxCzlKzrEObbbMJF0Jt%2F9dFc5fvx%2F7YRXVlm4vmOzgwgNLWBAm4GGxOpcyqNYeMbcaCbwbWrMme6NC43uUxsJ8BpJsoUp6kPMswnYKRwAY6pgG0ySyxNXAY0tOetNkwJeZlHxF5uwKRLysCVkHnwMeX9nScV4oVun0Ke0W1eKFd4F3ppjV%2FCORQFVICzBgv0kjTMUQBQA8zlnaiU445Eex4mylTgx4VYBNHp2OkCNAb0kYrqyutKeKSGoraSQ2EoXYF%2Fi8I90rYpu5W%2FeB25unYNR2UySBg%2B6vjwRxoflPtI44I2pYxwUln%2FCx9ef80N7ai8b2J9cHs&X-Amz-Signature=114e061ed690da614beb55b806714a0386fec1d0ae7d6518c695df4e651f262b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
