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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOGX3Y2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1V0AlAD%2BBXxXZJuNU4aDgj17%2FLGF2EbT2L5ZhyPlHcCIQDRUKRzKOKRd%2F%2B%2BwEIlR3KbkDx%2B54Se3NbjNxZClEUCiSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y2jhFU%2Bjo7npL42KtwDKqwPahXlwHKXNF83asYcsCNNJd7nLDMNPHGXoip81mGtmnIoFsA5JgCUCUumPgHUzLEDIcY9%2BlUEmpzTHZrHieOnwpHMJfuHPM%2BEvtMhhP0F82yxBIzlxgFqNSNhomZbYh1dNScyX4PJAyaijiJMdwZiGhK2%2BS2uLE68mCwYCdjGgYWRek6lO%2BXNr4yBiV4qZ5HtMJEfHYoCfRlvyXc%2BhFlYXqdQFWYPAlaehg1uknu6jnR0i0Gl91PAOD9aFpdXLQjKg1q0%2FyHtlRSRaj7ROWFvlsCHwZ83MDeD%2BM2vokhkvF73dj03MgzLRXrhwZt2FVEQvj28ZtqYvjylyHFVxBlj05HvxSraWelSn2XhxN6MFrCtyXOcvT0IMFb5etEOWVFOtWxztOVXW3jxXP6CIvqBbB4z00lkylQ5Ocaca6%2BV1TiWpnbV9KH1m%2BV6yDPpg6Zoeea5I9W20A34qpQZfAU3Nrj7Hh8pE0gLzMCfysXBHXxLk34lrXkGMCMUymMuuijZjm2IvXleFvNrNHCykArBk3x1eZhe1HQj0fcNY5HxsFrp66g5aWn24Ql%2BONQEwizPBldilScBbpoS8l%2BjlLFkSULCInqVCNmzhdZBziUe7ZVlGQaqpBXn6kIw1qa0wwY6pgFj17CQ%2FMStu%2Fq9Ve1TeK6vNYcaFHxA%2BKXdrwwBy8%2BcSi0%2BcCy8U0CF8TZPvxosuLPR%2BlmGg6lgKIhUXolM7pnp34m6jPmjAQzgH3K4B8Cv21Rv74j7fiGcLhZZEnJSSppDFeWeLC98%2BoiicaMtiIm33QeBa5S%2BDkB%2Fpc75%2BEs58eU0yDU2%2F8i5l8YxGZVzLKcnt0kEd9ntFkMh9c%2FQkYlQg0o8IdQv&X-Amz-Signature=0817844a8664a40e3c85b8bf4b1fa39d3901fe236ad4eb9e908693a7edb3f262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOGX3Y2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1V0AlAD%2BBXxXZJuNU4aDgj17%2FLGF2EbT2L5ZhyPlHcCIQDRUKRzKOKRd%2F%2B%2BwEIlR3KbkDx%2B54Se3NbjNxZClEUCiSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y2jhFU%2Bjo7npL42KtwDKqwPahXlwHKXNF83asYcsCNNJd7nLDMNPHGXoip81mGtmnIoFsA5JgCUCUumPgHUzLEDIcY9%2BlUEmpzTHZrHieOnwpHMJfuHPM%2BEvtMhhP0F82yxBIzlxgFqNSNhomZbYh1dNScyX4PJAyaijiJMdwZiGhK2%2BS2uLE68mCwYCdjGgYWRek6lO%2BXNr4yBiV4qZ5HtMJEfHYoCfRlvyXc%2BhFlYXqdQFWYPAlaehg1uknu6jnR0i0Gl91PAOD9aFpdXLQjKg1q0%2FyHtlRSRaj7ROWFvlsCHwZ83MDeD%2BM2vokhkvF73dj03MgzLRXrhwZt2FVEQvj28ZtqYvjylyHFVxBlj05HvxSraWelSn2XhxN6MFrCtyXOcvT0IMFb5etEOWVFOtWxztOVXW3jxXP6CIvqBbB4z00lkylQ5Ocaca6%2BV1TiWpnbV9KH1m%2BV6yDPpg6Zoeea5I9W20A34qpQZfAU3Nrj7Hh8pE0gLzMCfysXBHXxLk34lrXkGMCMUymMuuijZjm2IvXleFvNrNHCykArBk3x1eZhe1HQj0fcNY5HxsFrp66g5aWn24Ql%2BONQEwizPBldilScBbpoS8l%2BjlLFkSULCInqVCNmzhdZBziUe7ZVlGQaqpBXn6kIw1qa0wwY6pgFj17CQ%2FMStu%2Fq9Ve1TeK6vNYcaFHxA%2BKXdrwwBy8%2BcSi0%2BcCy8U0CF8TZPvxosuLPR%2BlmGg6lgKIhUXolM7pnp34m6jPmjAQzgH3K4B8Cv21Rv74j7fiGcLhZZEnJSSppDFeWeLC98%2BoiicaMtiIm33QeBa5S%2BDkB%2Fpc75%2BEs58eU0yDU2%2F8i5l8YxGZVzLKcnt0kEd9ntFkMh9c%2FQkYlQg0o8IdQv&X-Amz-Signature=8bc97ac5f5b0b78a01189e0be07f6a4393492b8e8df0b3d6dc5b840d53594d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOGX3Y2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1V0AlAD%2BBXxXZJuNU4aDgj17%2FLGF2EbT2L5ZhyPlHcCIQDRUKRzKOKRd%2F%2B%2BwEIlR3KbkDx%2B54Se3NbjNxZClEUCiSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y2jhFU%2Bjo7npL42KtwDKqwPahXlwHKXNF83asYcsCNNJd7nLDMNPHGXoip81mGtmnIoFsA5JgCUCUumPgHUzLEDIcY9%2BlUEmpzTHZrHieOnwpHMJfuHPM%2BEvtMhhP0F82yxBIzlxgFqNSNhomZbYh1dNScyX4PJAyaijiJMdwZiGhK2%2BS2uLE68mCwYCdjGgYWRek6lO%2BXNr4yBiV4qZ5HtMJEfHYoCfRlvyXc%2BhFlYXqdQFWYPAlaehg1uknu6jnR0i0Gl91PAOD9aFpdXLQjKg1q0%2FyHtlRSRaj7ROWFvlsCHwZ83MDeD%2BM2vokhkvF73dj03MgzLRXrhwZt2FVEQvj28ZtqYvjylyHFVxBlj05HvxSraWelSn2XhxN6MFrCtyXOcvT0IMFb5etEOWVFOtWxztOVXW3jxXP6CIvqBbB4z00lkylQ5Ocaca6%2BV1TiWpnbV9KH1m%2BV6yDPpg6Zoeea5I9W20A34qpQZfAU3Nrj7Hh8pE0gLzMCfysXBHXxLk34lrXkGMCMUymMuuijZjm2IvXleFvNrNHCykArBk3x1eZhe1HQj0fcNY5HxsFrp66g5aWn24Ql%2BONQEwizPBldilScBbpoS8l%2BjlLFkSULCInqVCNmzhdZBziUe7ZVlGQaqpBXn6kIw1qa0wwY6pgFj17CQ%2FMStu%2Fq9Ve1TeK6vNYcaFHxA%2BKXdrwwBy8%2BcSi0%2BcCy8U0CF8TZPvxosuLPR%2BlmGg6lgKIhUXolM7pnp34m6jPmjAQzgH3K4B8Cv21Rv74j7fiGcLhZZEnJSSppDFeWeLC98%2BoiicaMtiIm33QeBa5S%2BDkB%2Fpc75%2BEs58eU0yDU2%2F8i5l8YxGZVzLKcnt0kEd9ntFkMh9c%2FQkYlQg0o8IdQv&X-Amz-Signature=3d5f21bdfe7d709f6c3465d2e81652d35c568df9f7b72c2c0bf8abf1556d716f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4QBZ5J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6anI2ulMPNHiA09l0bLcieZee2pK3ittQasBa8gxLNQIhAMwi5iF0UclX1enFniWT8%2BNESKDZiuZllmEPHfuVaLD1KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP8LeJuWx2%2FtLvuwgq3AP3wyuBi7oTCa%2BeSqVI%2FqtP9KRiOexUXSxOLVmOrfZWisss4exYKA7u3ZyiHfJbeV%2FrZTpSg9AcOxFWO5IgEqQh6a5Y%2Bn6e7Er6pICvjBktDoI3%2FwVMCMk7%2BmbLyCCAFybF7Xpl2yXiRoUByEUpWl3v6JXXv4igQrIrDeu50StI7c6rRfTw3iB1oKkPg03OqnIoBm6HZbLHzadYJV3YUIJPhJ3ju1%2Bk83%2FExKneBXOJTgwW2RlQrIXJiHE7RH6Cn4J4CNyLSHHUIuz4lWGUzLOZKIBTAz1Fy%2FZNh2oJ5ePlFwmeWHZiDIu2KXFjwsGM2u%2BwXVdDE0LyPbQ9wGmMEgYExrn%2BtwXEMPZESC63kmox4MeNIrMdGcm%2Fs0tipUiWwCS9y3WsV5laNQ5F6gG160lnRJEoBYhq7ZBSkOl3pzvcyzJav77VLREJLhfDey4n04Y1gm8I3cjNIebdKNpUbBgGLtIEUc6hje0zFu0hSGVlHXR9UW73IICYNLazlb1LV9nvWN2taXEGIMtKXcwt26GQHK4zGP74lRCKSHFiBvIInx5%2BNEIBLGU3%2FyDY1pfxLjU7LNnf9YDIFchmEov6Ayf4ED5fZr7XyiCONiLllaWcGDW%2FjtPt1H%2FPDKk4vjDjprTDBjqkAdzQ0Ea28Sk5O7FEywVroiA1LhiY%2BsONXdCcgo1lJ8ki%2FaVaLdLHDFdGHR4TJGr76EgOnBPayZbypbZEE0xCeYpqSgezaewqAXHtrWG7cAGoVP2vk1U4CPayDYcNZgvMOKG5oDBzTKt%2BBn%2Ftt6zqBbRcas07%2BLp2HLnRk%2BWEY6sS0o0z5nIi%2BQeigtEx4%2BebSRM2VmbJw63Gbc%2FCyMJlFP3CYGFg&X-Amz-Signature=0a8bd138579fd9dae121a7df1f428ceebf7bf0c38d89591096bc2184f537cba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVUBUED%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDly9MVoTiAf1W2R39XwOT1n0W8ex9lwTZzHb%2BSy62PZAIgVDejaIKRSQuNY2SLGE1aMXOtDtJR%2BtpOlJh3%2Bsmron0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlUKG8DudJdfUAOEircAz4F07XyTh1lnhdsay5z3%2BTMd31DrK8PresUS42BoWjfJySwfhoKbBW%2BFuUkfzQXEykhbVpOvxHqI0l63%2FUM%2Bj7OQ%2FC6Ai%2BCWqWl3fRQNyqG46xjRiDuppLkVYuRG1DfGsu4aYbP1Wgy7spRsNL51aQOKirMq99l%2F%2Fk6R6RXCvP1PpbCmt8DN0X3X4xJarVRO%2BlZuHseR37u1podbySa6fwAjP6Uzi4gZy4TlFxx8sYWv42JSp%2BWZBO7kBF0YXE%2BKkQ2D61dwh0q5c%2F71UFDzSQ4vc4othV6S6byXrHeSAzW%2F9tZRm0hvGdur2CSJt8%2F5V3Rs7l%2Baujjj3zrSl%2BEtokw779Sqj3ksOv9GUigfX1TyufBsyYE9%2BJvAB%2BkP99m4WEfw31Q8toJgJqnwlmTTkhNh4lTp0LzsIeaixB%2BOB4P1893WHsjcHvyftu3wZ0d%2BEeo6LCVSssujVQkLENWtyQnY8dp%2FUVki8H828VQJB%2BgmbsNUroTHnhrYhx962tc7U5BegJLMlfJSBLtgRiodtN%2BVmeyJakzEANLsTcVJw6P9P0EVyt2ZzLzdCeEyO7PXniu02tTliePK8OkAEMKfWP5mdnw8351i%2F5A%2FiKTquy5IDQP%2BW81u8MrQ3dvMIKntMMGOqUB0QXMg%2FxFdH9EMLX381W%2BmDr%2FhfBwK0LRaKZ0whmucBoBP7xyLkLBzp55AWKk%2FxF7J2gwIOdMeBDF96hnCq70%2FlzM0IJwQ%2FWX9IczDGL2e38wlvpDMG00wSAS%2FSo45an2OI2OY58DXzRZmprAcw5B%2BmmYQbrRZTYIdbJAe6dwri%2BjL0WbBRHRIEW%2Fw%2BtR9ZnNNduLKJ1%2FpItzKXOqAUR5zb3YUWR9&X-Amz-Signature=199c0dc37bc9b0962aeb09b399fbbaedccf8abadd17c526b3b3e3486d526007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOGX3Y2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1V0AlAD%2BBXxXZJuNU4aDgj17%2FLGF2EbT2L5ZhyPlHcCIQDRUKRzKOKRd%2F%2B%2BwEIlR3KbkDx%2B54Se3NbjNxZClEUCiSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y2jhFU%2Bjo7npL42KtwDKqwPahXlwHKXNF83asYcsCNNJd7nLDMNPHGXoip81mGtmnIoFsA5JgCUCUumPgHUzLEDIcY9%2BlUEmpzTHZrHieOnwpHMJfuHPM%2BEvtMhhP0F82yxBIzlxgFqNSNhomZbYh1dNScyX4PJAyaijiJMdwZiGhK2%2BS2uLE68mCwYCdjGgYWRek6lO%2BXNr4yBiV4qZ5HtMJEfHYoCfRlvyXc%2BhFlYXqdQFWYPAlaehg1uknu6jnR0i0Gl91PAOD9aFpdXLQjKg1q0%2FyHtlRSRaj7ROWFvlsCHwZ83MDeD%2BM2vokhkvF73dj03MgzLRXrhwZt2FVEQvj28ZtqYvjylyHFVxBlj05HvxSraWelSn2XhxN6MFrCtyXOcvT0IMFb5etEOWVFOtWxztOVXW3jxXP6CIvqBbB4z00lkylQ5Ocaca6%2BV1TiWpnbV9KH1m%2BV6yDPpg6Zoeea5I9W20A34qpQZfAU3Nrj7Hh8pE0gLzMCfysXBHXxLk34lrXkGMCMUymMuuijZjm2IvXleFvNrNHCykArBk3x1eZhe1HQj0fcNY5HxsFrp66g5aWn24Ql%2BONQEwizPBldilScBbpoS8l%2BjlLFkSULCInqVCNmzhdZBziUe7ZVlGQaqpBXn6kIw1qa0wwY6pgFj17CQ%2FMStu%2Fq9Ve1TeK6vNYcaFHxA%2BKXdrwwBy8%2BcSi0%2BcCy8U0CF8TZPvxosuLPR%2BlmGg6lgKIhUXolM7pnp34m6jPmjAQzgH3K4B8Cv21Rv74j7fiGcLhZZEnJSSppDFeWeLC98%2BoiicaMtiIm33QeBa5S%2BDkB%2Fpc75%2BEs58eU0yDU2%2F8i5l8YxGZVzLKcnt0kEd9ntFkMh9c%2FQkYlQg0o8IdQv&X-Amz-Signature=49d63675a1b00e44036bd9d9a35b2e2fde78c2357c9c8f76547b9badc213cda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
