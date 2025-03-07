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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUYXOSJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHw3kw5LvV2zEGRaqQYB8MSGtbOc6Cy%2BaLNJpQNbloJAIhAOA7IcPVz6EtfHUxNyWgh%2FJEmVCt5gSEKYRwxOeTXj8DKv8DCE0QABoMNjM3NDIzMTgzODA1IgyUlnIbfnm56HRhJOIq3APv94EMkuBmLni%2FxeH75Gxno3uI9uxAKauDRpzw%2F5TUvMd9OKbXA8%2BoKvVM3SZOuOzhdsSEprC11uIg37IQA%2BiSI31gyLP6mD8r1xvLd14SFexwiTr%2FpSd5xSelqlzQXShIM4YWNNIETmTc%2ByYRDxA41CnO%2BmYSpUvYv9ulgSN%2B0beekoZCwnISFziv959XIERe7F6hBOSmCXbx5c6p24tJz8oMOz3uY0Ua3hDmrqSTchbJd%2BU4OAFhuEUzRSghpAFVQD3GDEp4YBF2NRWJpkF7bf8uZjjrwm2mD9tvLzH%2FZEghr2x0c%2BPL16mgpK81nkKVrU7Fo7E2ngxBpn846Osgu8PxwGDV1HcC3rLcSHx7%2FQtVu19yq29LvHWdSyloUn4PugjSc4qzVO0ahmXn2B8wh6a0Z%2F7vEQBl%2FtrrZDUBmglV1R8UNke8w61i01ckwHyUgu1eyPRWsr1IxUSSRslQQJL6jFpNXhIm6PprbRBoKoGUsOJsUvpLdzWrWDR1ssTzj6FSoI9FeaL92%2FHE10B4fjgklCQ9ov2BM1GJp8OD%2FP%2Facilzi9%2BzA6IqkfNvmnJPCvLbDThtlbsiTfbEOuqh133hm9YG2rryjKUDyZJ1ImDonkgWffMQP%2FB6sjDjn62%2BBjqkAdg28NgBtMfowdk8RevdofvIvsRCurm74C5vtM%2Brs8WzaWqwIdEsWVNDeoSHZhIs%2BX0KmzjLdoFlCIp9HMgs9jArVA%2BfsCQ%2BZ4hjh%2B65MbWCEZ%2B2aeHd0UTL7d8QQ1a8JmwWTevFlNGnVpoCT463Rs%2B6dMffNvSPYKJduoqEsAHyLkemgS1V8SJHZ%2BPV%2FgxtsdIrcod9Q6RDwnF0nUs20BObkrsW&X-Amz-Signature=4f5497e861035b363f344b58f3e5ba3720a8b23dee4f058a7813f904375a8c10&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUYXOSJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHw3kw5LvV2zEGRaqQYB8MSGtbOc6Cy%2BaLNJpQNbloJAIhAOA7IcPVz6EtfHUxNyWgh%2FJEmVCt5gSEKYRwxOeTXj8DKv8DCE0QABoMNjM3NDIzMTgzODA1IgyUlnIbfnm56HRhJOIq3APv94EMkuBmLni%2FxeH75Gxno3uI9uxAKauDRpzw%2F5TUvMd9OKbXA8%2BoKvVM3SZOuOzhdsSEprC11uIg37IQA%2BiSI31gyLP6mD8r1xvLd14SFexwiTr%2FpSd5xSelqlzQXShIM4YWNNIETmTc%2ByYRDxA41CnO%2BmYSpUvYv9ulgSN%2B0beekoZCwnISFziv959XIERe7F6hBOSmCXbx5c6p24tJz8oMOz3uY0Ua3hDmrqSTchbJd%2BU4OAFhuEUzRSghpAFVQD3GDEp4YBF2NRWJpkF7bf8uZjjrwm2mD9tvLzH%2FZEghr2x0c%2BPL16mgpK81nkKVrU7Fo7E2ngxBpn846Osgu8PxwGDV1HcC3rLcSHx7%2FQtVu19yq29LvHWdSyloUn4PugjSc4qzVO0ahmXn2B8wh6a0Z%2F7vEQBl%2FtrrZDUBmglV1R8UNke8w61i01ckwHyUgu1eyPRWsr1IxUSSRslQQJL6jFpNXhIm6PprbRBoKoGUsOJsUvpLdzWrWDR1ssTzj6FSoI9FeaL92%2FHE10B4fjgklCQ9ov2BM1GJp8OD%2FP%2Facilzi9%2BzA6IqkfNvmnJPCvLbDThtlbsiTfbEOuqh133hm9YG2rryjKUDyZJ1ImDonkgWffMQP%2FB6sjDjn62%2BBjqkAdg28NgBtMfowdk8RevdofvIvsRCurm74C5vtM%2Brs8WzaWqwIdEsWVNDeoSHZhIs%2BX0KmzjLdoFlCIp9HMgs9jArVA%2BfsCQ%2BZ4hjh%2B65MbWCEZ%2B2aeHd0UTL7d8QQ1a8JmwWTevFlNGnVpoCT463Rs%2B6dMffNvSPYKJduoqEsAHyLkemgS1V8SJHZ%2BPV%2FgxtsdIrcod9Q6RDwnF0nUs20BObkrsW&X-Amz-Signature=db9bddf1ec22e08ba75e0d521a297c4d3e4c70ceb2ad00fc1f18fcc081f4530e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAIV4PJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDVfU39SGdMlvTHoP5uyQFK6dUFN1u%2BVeMIMFcULUwgagIgHIJ9%2FltFAHzhlgBPwohPQCTGXLC84pDQFut7R68J22Eq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPP3ioG7mGhoWneFpircA4c0OVE4kzs4509xus5xPZF%2BWgvhw8Fg2GvkNy45pA51AfmzgqflTqPeX6cxITCbbWbxcxIOKy03J29ZbCF2gPoy1v5um8BXkgANafEODvGREg0EmiAQCJ4iEoVuvrb2dgT7z6Magt25tVWmLGlUg7Au4fZvcmg9UH9snVAGtxnz%2BvTUAe2LnkEEw88u15MVYGZiKBAWXk33iaflVzh35%2BukD9nmaQmQvCpDHkbtdyvXOVzX2R6O9%2FU%2Bv8QK4EId3y2PposwDLE%2FkgvayUFP6lc5k2VQmMXMhzBhKUNEfjhiVKDG9OhA99yo%2FPuezFou2hFdOXSUULeVhw2QK6jDvEs1M8H%2FkX6DPEbQSGPwCaEIiZhi2kYtAJDjBLq4mDfbe43%2BmlMxo7K9jJGoSaG99lVPVjwFXE648AfftesSVx74Wn8upog7f8fyI2MwwD8yNwbjQ1N7dnE7eYa%2FsVzdiCACPdu5unqe8kfH%2B9PQZV12c8Ib7bjBcyXKyrWwGPRakp7KUgdpR6aO6Zc96OsoeN8smEl36oy8D%2ByGpB9GzmqbZPT8kNV5aMxjxQGbx5H5DXzYzAwRmVlFMvJUIt4uP3mDh1LtT9ybxMSd0gS%2BSR5BcpD2ZUIL6%2Bxr7WtmMJWgrb4GOqUBrxqriiwwLMCEKcMxL2GwRG7BhWRWFbnFwWzbFqrC2EdmR0tOQLVakccYhTRgu%2Fu%2FmEc%2FvfjABKQ8YGDFAcwY7Mcnec6WloASlMlysWt5EKHAKzIk5Gf%2B8VWGvbvzjApm8iF8vTFrOijisOT%2BVPJ%2FlpxDxYzYHfp6QxkFpX1dqoTa%2BxBTxM0bKcaPQAXSVxNsm43LNKqmXoF1PP8nlqShlvrParqC&X-Amz-Signature=db744dfed5ff5926a9c0814f26920c3dc101c302e78670763d33cc9788f67faf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RWWJCV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCfN36qJ1hnmqNjLfDbk0UWZLgl8IAxbKYJxYpOwUTf9gIhAO13iVJUaNAHFDr4DD4lIt4pJm2QnIMxcfUbi6DYUyvVKv8DCE0QABoMNjM3NDIzMTgzODA1Igxxr80Qx0qTGGluFTsq3AOr%2Fa6HVvnTuJweokRyMwBvU8YYjQBaM2g3CX948AoJZqQQwHbWlc3mhKqAaepEJl6u2g1g%2BL7rK1Ou0BosXtbDYtlgHs%2BNIEd2iTUAex5A2oNfWNE2XpspY%2FC8gMvI3mLA9KGMk6TT%2BX451jWJi3xcHcjCbLQX0UV%2F2wWPm8kF18ar4eZ4PBWZl0RAiY7QdSSRtKu02P1RrcR4uXbjTiBOvJ%2FZh525empiw7oy8wS3vmKZ3pNix0FIliGfmTnzNcbsAXO1WpStOIwpDnd%2BdAn5DYyinBlRbRl6d9oIJvdr0oDLq1t3i1vUBzL72k3C6QlxSwePau9qXxdEMtUCns66FZI9B8MsDKZbv1OJSEqaas9ydkjRus8nH1mf9NGWGJo6EDptduVdqg51tIKOUABjmlmBuYb50Rnmz0t4AZyZZ%2BTUdxxkc3Cw9ujzVpNF4lSei09Kh5VmVXfW6DPiVT3UOJgn8zr0ujjOdyha7xpGj50oYH6s2lmadjoSZBXMu74nosqDXQXAU1TLDGd%2FhUhF2y6%2BtciwGyWrzywU72W%2F1991o%2BrzfXyb%2BzDbj7okJTCqquGZza%2BAaUW4CZxdEOrcEhmmsLHHwSCJhHp8YwggJLjn3f4T67wbRJMoATCZoK2%2BBjqkAQVPC68NHhpcLAszHUniQIR6%2FEKaxX2dZjLirYzzfUOkoEVtzmUI%2FzzVvNcL1SAHunlFNVz0V2S8YuO9v%2BEFgy1NaPA4wKx5UrEV4YloNTkSoocoZ3aTDyz8L3yE6ku0Bkp0tipym35nuzrif1p5KVj19jz8dEM8pcfOJW1ZnQ4HCLdrYjeV0PRsDimshdYJrm%2FDXktVJ6muslkiVC7bwlkQYTL7&X-Amz-Signature=1849c55983ee4f552096cc762143688708db592d8e130ab3bd2cd7f5265f7d05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUYXOSJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHw3kw5LvV2zEGRaqQYB8MSGtbOc6Cy%2BaLNJpQNbloJAIhAOA7IcPVz6EtfHUxNyWgh%2FJEmVCt5gSEKYRwxOeTXj8DKv8DCE0QABoMNjM3NDIzMTgzODA1IgyUlnIbfnm56HRhJOIq3APv94EMkuBmLni%2FxeH75Gxno3uI9uxAKauDRpzw%2F5TUvMd9OKbXA8%2BoKvVM3SZOuOzhdsSEprC11uIg37IQA%2BiSI31gyLP6mD8r1xvLd14SFexwiTr%2FpSd5xSelqlzQXShIM4YWNNIETmTc%2ByYRDxA41CnO%2BmYSpUvYv9ulgSN%2B0beekoZCwnISFziv959XIERe7F6hBOSmCXbx5c6p24tJz8oMOz3uY0Ua3hDmrqSTchbJd%2BU4OAFhuEUzRSghpAFVQD3GDEp4YBF2NRWJpkF7bf8uZjjrwm2mD9tvLzH%2FZEghr2x0c%2BPL16mgpK81nkKVrU7Fo7E2ngxBpn846Osgu8PxwGDV1HcC3rLcSHx7%2FQtVu19yq29LvHWdSyloUn4PugjSc4qzVO0ahmXn2B8wh6a0Z%2F7vEQBl%2FtrrZDUBmglV1R8UNke8w61i01ckwHyUgu1eyPRWsr1IxUSSRslQQJL6jFpNXhIm6PprbRBoKoGUsOJsUvpLdzWrWDR1ssTzj6FSoI9FeaL92%2FHE10B4fjgklCQ9ov2BM1GJp8OD%2FP%2Facilzi9%2BzA6IqkfNvmnJPCvLbDThtlbsiTfbEOuqh133hm9YG2rryjKUDyZJ1ImDonkgWffMQP%2FB6sjDjn62%2BBjqkAdg28NgBtMfowdk8RevdofvIvsRCurm74C5vtM%2Brs8WzaWqwIdEsWVNDeoSHZhIs%2BX0KmzjLdoFlCIp9HMgs9jArVA%2BfsCQ%2BZ4hjh%2B65MbWCEZ%2B2aeHd0UTL7d8QQ1a8JmwWTevFlNGnVpoCT463Rs%2B6dMffNvSPYKJduoqEsAHyLkemgS1V8SJHZ%2BPV%2FgxtsdIrcod9Q6RDwnF0nUs20BObkrsW&X-Amz-Signature=be2932453f093d85421df64b6aadbba0a4be82b9f1b27d2337477f5f8a960759&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
