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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBCT66F%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC396MRxqD709pOM4haE3d8n1jDiEccKGJNtrIattdjogIhAPF1gTxoPVFlrUyqy8SJQbSl3%2FUWBw%2FGPh8lOlSYjcCDKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy89VCr6DeT95HrVnQq3ANppTNjNdr%2F%2Fc6qNzrdAAm9xJUa4gNcJSn1kWU2NZKtvP80pEOlAVihCgwOk8x3jVUZox%2FLKDrxGA%2BP4HO3jnzvWQmfVBTayWizJSAh0EmfppPI7DcHMbcwvSayqPhVUkNNw0KrRgis0IHV%2FRzfE7tmbCdZbR3yHboUGuSYP4vpF1p6M%2Fj7dIHVNokz7IPxQx1o%2FMN%2FhDFW8eaphLCQHMW%2FcA7Te4dcKk%2Bvh3KL3KCzbIFLK%2FOB1taRqfbipXkLUI9gFeUvpUuX7oa8shzW7fAhk9nQD23g2AB6CzacIYoQLQR78F%2FzCyCtCUDeOKMK5REpEUR7MqV52QATucqZuNIk6lY5S7XofUuFcE3TIIl75rUiJIggH7QMqC9ukGjEyF8SovDqfcMFKv7F%2FPuJLr98XXErUVGhxTuJpinrN8PQ7rG0%2Ba6wSdHreuqvRFuhGVi0xOYE0b%2BtjNnFVYG%2BkNsvI5PcY3MbmQKh9zoctrBVptiN0cZoozZw7g1kg1kr7AGO90XnuAUA4Au5fmrb2K6hy7VWIOrGcoxU%2BEzc4cACXy8mAs1KhJN94%2F1Gb2hJ1IyMXZtaKy4jVJ4PoailwOFkuC426QbdWHx4%2FVmow9TvvPP9ZkX3co07Tips5DChuIO%2FBjqkAQ%2BKhtSHfgmBblkINdFaCGGwPoOrtjCvy9v%2BHHWCJ%2F%2Bsv%2FOsV4DQK5aSn9vCR3lCxqkbpg20gI3kNaBlbbs0%2BkDXXO1Lf8gOBLa093SM9ZV6hqVPFuWD6b%2BTy9vTC8%2BomVzbT4XfirngPZA2yMk7xBgdYJOnRR1aZi%2BVMTKeNfi2sAdQawY25h25RDKJF7rsRBWEweC0NeuC2tznYer357eHVuzX&X-Amz-Signature=a35d5f415a5ef96bb95d73d5da3dcd34eec966d1f354fee8b0bef5c4cfb8507d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBCT66F%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC396MRxqD709pOM4haE3d8n1jDiEccKGJNtrIattdjogIhAPF1gTxoPVFlrUyqy8SJQbSl3%2FUWBw%2FGPh8lOlSYjcCDKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy89VCr6DeT95HrVnQq3ANppTNjNdr%2F%2Fc6qNzrdAAm9xJUa4gNcJSn1kWU2NZKtvP80pEOlAVihCgwOk8x3jVUZox%2FLKDrxGA%2BP4HO3jnzvWQmfVBTayWizJSAh0EmfppPI7DcHMbcwvSayqPhVUkNNw0KrRgis0IHV%2FRzfE7tmbCdZbR3yHboUGuSYP4vpF1p6M%2Fj7dIHVNokz7IPxQx1o%2FMN%2FhDFW8eaphLCQHMW%2FcA7Te4dcKk%2Bvh3KL3KCzbIFLK%2FOB1taRqfbipXkLUI9gFeUvpUuX7oa8shzW7fAhk9nQD23g2AB6CzacIYoQLQR78F%2FzCyCtCUDeOKMK5REpEUR7MqV52QATucqZuNIk6lY5S7XofUuFcE3TIIl75rUiJIggH7QMqC9ukGjEyF8SovDqfcMFKv7F%2FPuJLr98XXErUVGhxTuJpinrN8PQ7rG0%2Ba6wSdHreuqvRFuhGVi0xOYE0b%2BtjNnFVYG%2BkNsvI5PcY3MbmQKh9zoctrBVptiN0cZoozZw7g1kg1kr7AGO90XnuAUA4Au5fmrb2K6hy7VWIOrGcoxU%2BEzc4cACXy8mAs1KhJN94%2F1Gb2hJ1IyMXZtaKy4jVJ4PoailwOFkuC426QbdWHx4%2FVmow9TvvPP9ZkX3co07Tips5DChuIO%2FBjqkAQ%2BKhtSHfgmBblkINdFaCGGwPoOrtjCvy9v%2BHHWCJ%2F%2Bsv%2FOsV4DQK5aSn9vCR3lCxqkbpg20gI3kNaBlbbs0%2BkDXXO1Lf8gOBLa093SM9ZV6hqVPFuWD6b%2BTy9vTC8%2BomVzbT4XfirngPZA2yMk7xBgdYJOnRR1aZi%2BVMTKeNfi2sAdQawY25h25RDKJF7rsRBWEweC0NeuC2tznYer357eHVuzX&X-Amz-Signature=36c0703d5bc95e2662442c78427829f5e5ad867c06f37bf8dd205c9ec858df52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652EU6F6W%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpPi6ZgIFKGjhZ9r7A9YV6GaOvab4xqWpXogvNMcQqSQIhAI4YhRECxhjjZjMJtwxFIAjNO0HxQrg2rMAZpalp9LAmKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMB3NSl%2FSc1kJVmKUq3AMSW%2F5kPG5qgouMzmnXYn%2BKo66m5GYJzjEYiu2qQmmKcZQ4egWw5MRYTkL7oNV3na99oVGR3DWzy8m3u6PMh77w%2FNAwi1YiJbUqyaswM2fLFv2kcItO%2FrAK1SfPMEaDV9n6jLZKLOb0nQEJOQsDiq6oTEKK6SA2sHhnAO4JwokfK6MAswBgHQWkZ8MyeVlE%2FbUaBjS%2FDSmihrq7hAceSFWnIf0Szf9mCGglxjDzkB%2BqT7fce8B%2BhH%2FMXJZvED7punjdw157liYkxPcNupzwfuYCJ3a07HSTw9NNdCA0MqLmUN3URjkN6%2BfppGVlRSAxUJ19XyhF2auRo%2BGcnT01WPpeeYuSgSzKp2p2vAxJhRH5P7vRuLM5chxRLmyjDYK0PsdK0Px%2F9%2FlpXuK2l1mKjFUxiu9lRlx1jscvER34UdPxRh3zmZFKe6ME0HqzFo8v9zliq5ocqDg5dDgNmEMy%2Fbzp47pU0XT%2B3VW8jf8vEDtEXcca4ght3Ej3uksXWCfAdjX547QGpCXNq%2Fh6KZOHdPEsoc9f3tVNSAcu1NmMEvrZbUVV47JLrtAuJeeGRi6WvutColE%2BU61fsga26i6w53JL0%2FMfaKv2V9lMO3yqseZauy0vtu9LaQQis%2BOFrTDeuYO%2FBjqkAa5ZWFJaYCF55tXMRq3A6yU6NAoqsrMMKJkOyR7OJJD3qrj4x7iG1gnUFlqSeuXmzdlXMiLY%2Brc6s1RgH%2FQLxxQ7LzzvY3o7XUqrDRT8oAgFOmYMCpwMXz5zcRIEGXdzIfrhhSTdAvrwB69bheUrnS4A1K9eBYacJcN3a7mTBYZnnm5VKzp46VBlHcEGGAcCGCRaBTspNylT2it9Xk1B8cVRnbzr&X-Amz-Signature=9a63cd551df7954b0bd4f474931ba5d8b9f19c3f9e15e264f8d2008d4e8a6bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUJWQ7Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKpKJmI4Zil1LoAVIY2uhUEfPqZ7FOR3f6NAJB8IPdAAiBzoxDIxgHx%2FeDU6zrqks1rKe1EheesFwZBshjznQrFhSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFaxsd7JCa2YCkVGRKtwDfi6s9JAqqDZcD8Nbx%2BaDoUK9WtSUG8F7PUPtr2B%2F4AVoPIaw1OSKYcUBR27vpw5ZlXcRsMNBMGMgcQku%2FLoSRwnLgsLbjVqhslON%2Bg5DnsaIAIIMYGWA%2FNZxINroSCwEkgxUd5EQQxedyqmtQiwRHnyBaut%2B2rNQTJ9kVGSF5GK9t4CHx%2Bvm2rmIEwQZH2PpHo3IJTNq3tA%2Bc3NNqC7P%2BbCBdESpuu87TuCFD2DzA2IVoRnl6yzcuGBHc2zVaDi3vSUS8swUSOa3g%2B9FbiM2Wlrc6tOoMfItFvOFne9Vl9tmM8L7HnGNSstp3fR76l%2FaemBtyqMxqJM5vz%2BDM5l9qEe%2BB3jjT3uEq1U6pB2sWcmBt0iUwvj0bZ0HS%2FXoImXQ18yOjyaiaL%2Fblkh9Qep%2BYWeXp%2F3njQJc8ZHvew7ii2oTtw9xouc0xoWaVoL0t0%2FNRstgcB1IMlEcuJGTErrLGFJ26HFSYZdbVROiz26pwrgrB3kiiuiu0W7N%2BBgUyn3AsWx9g6DI29ZxRcDWI0oTzg%2BHJkQjI%2FRpnl%2FDTvkVmnGPmuLV0z5gWkcGxj%2BTnpstT190LsMhLSVOkRZdlyntuBscl%2FLNTZVDesGfPaNg3DbGh%2FoUGR6CF0oqRjswvLmDvwY6pgEw2S3dPGcjEgKEBlTFE4ncQRric6jkg0yA2NBpVgs43a%2BRlPX%2BxXzOYto5yoMw%2BWeH7wSbU0DrqDtWOHgRkLeKKLwHgGrd2U10sapY10X4e%2FW5EO%2BjfZ2pLLyfDsCyMuZLlJrIkXz0ENT6OS1bBZMNZOTA%2ByjROzQs9tR09g30asjZdO4yq0PWuYqlNf36JhcP%2Bd0xbJi%2FmZLXmzrqYKKgZqe6tmii&X-Amz-Signature=ec86a92a03a44ffbe1b1c46db5bbe1166d250ebd18fbd389add61584a219fbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBCT66F%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC396MRxqD709pOM4haE3d8n1jDiEccKGJNtrIattdjogIhAPF1gTxoPVFlrUyqy8SJQbSl3%2FUWBw%2FGPh8lOlSYjcCDKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy89VCr6DeT95HrVnQq3ANppTNjNdr%2F%2Fc6qNzrdAAm9xJUa4gNcJSn1kWU2NZKtvP80pEOlAVihCgwOk8x3jVUZox%2FLKDrxGA%2BP4HO3jnzvWQmfVBTayWizJSAh0EmfppPI7DcHMbcwvSayqPhVUkNNw0KrRgis0IHV%2FRzfE7tmbCdZbR3yHboUGuSYP4vpF1p6M%2Fj7dIHVNokz7IPxQx1o%2FMN%2FhDFW8eaphLCQHMW%2FcA7Te4dcKk%2Bvh3KL3KCzbIFLK%2FOB1taRqfbipXkLUI9gFeUvpUuX7oa8shzW7fAhk9nQD23g2AB6CzacIYoQLQR78F%2FzCyCtCUDeOKMK5REpEUR7MqV52QATucqZuNIk6lY5S7XofUuFcE3TIIl75rUiJIggH7QMqC9ukGjEyF8SovDqfcMFKv7F%2FPuJLr98XXErUVGhxTuJpinrN8PQ7rG0%2Ba6wSdHreuqvRFuhGVi0xOYE0b%2BtjNnFVYG%2BkNsvI5PcY3MbmQKh9zoctrBVptiN0cZoozZw7g1kg1kr7AGO90XnuAUA4Au5fmrb2K6hy7VWIOrGcoxU%2BEzc4cACXy8mAs1KhJN94%2F1Gb2hJ1IyMXZtaKy4jVJ4PoailwOFkuC426QbdWHx4%2FVmow9TvvPP9ZkX3co07Tips5DChuIO%2FBjqkAQ%2BKhtSHfgmBblkINdFaCGGwPoOrtjCvy9v%2BHHWCJ%2F%2Bsv%2FOsV4DQK5aSn9vCR3lCxqkbpg20gI3kNaBlbbs0%2BkDXXO1Lf8gOBLa093SM9ZV6hqVPFuWD6b%2BTy9vTC8%2BomVzbT4XfirngPZA2yMk7xBgdYJOnRR1aZi%2BVMTKeNfi2sAdQawY25h25RDKJF7rsRBWEweC0NeuC2tznYer357eHVuzX&X-Amz-Signature=4c8cf84d386b03871d8d7e8c4b6a2dbfe215787bd9473a147985cacc21593bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
