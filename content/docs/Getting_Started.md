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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA32LEN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeJBxp5A7v1sdDr2bY%2FND9zaXjTk3%2BTZ4bQ%2FGR5xh3lAiA5spkDlNg5sMjnrzy4qrmCF5OcFRkGC4DocVT6cApFwiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqaY2iT72w7GYwet1KtwDjyYPvqQUhbsr5vLjCTxnUMp3akyJY1Lweb91CWzwn3TUt5h7Bxw5cncIcs3NwpFx%2Fm4at2XIHbshPR62Orf%2B8NQi0cuS5WxjqGiymkenDrLQPLSFTFjjI22JCZAGY4csC98U0dwKkAZxssoOnYRsXJdlgBModAJ6ZTM9uFuv5470NBwNryGIBLxeJB9N2SRJiw5QFQJ%2BBasQEm6cN6IlbrCaOf7ra4ToKebgFFRm7ZZl30M6aPfKnXVEZ50e8%2Fj%2BilYuUZBl218lAKvSZSLPuQ6BIf4XEFkqkxeJDb6L4sd33cek56pK3%2BW4OuXH%2BZMYmfW7V2qPTiuCPHPL5fs3X0p2rdn%2F5bTdM9EXjjq9xfzcWwTmqolDsNpzKRzrFPe4ZrLjhhuFKzx%2FH%2FwCWyH0thEnEMKfAnWDTsW4gOO832VCM5OecCk9BSCa6VXj8463C6Oh%2FDFttyhjr2lorxGeceSvLD5yyrJ6TIOLMVpbakhWnLqTLcdRl194XeylowAewGVLUoXNv4nuDuiG%2FmtTbG0KpDqQd1yx%2FQ49CB9VnMyibSEIryjJX6DF2ro2IeN6Hnpf5l3nYM6K9oddjg7n9jhd11HabiQRnweFPNyn1Opj8NWNwQiFH4j2YYIw9cuvvQY6pgGJj9PsW3v6L8u5Mh76l7ZR%2F%2FSePVBmWGwX10ja1vSyZhHdQqORJhg8TxlhuRbVkr0Q1JAMAImS%2BeB6xFnP%2FDbuGudV%2FkcJYhxdzV6ruqj2k9grKwfQ6h8IzO5KvdMPWY9x5GOo3DKinCTsapvAOcFj3WGIIyc6JkRWtGbT5qV4liBnODTuBRCaUJfmPymyPolfkOpbk0IqwyqGp1ItkeV8klEp%2BupK&X-Amz-Signature=48a3ef93ff38be7f7c28879f3f8493f43f32606918bc560cff0d3b0c9381f255&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA32LEN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeJBxp5A7v1sdDr2bY%2FND9zaXjTk3%2BTZ4bQ%2FGR5xh3lAiA5spkDlNg5sMjnrzy4qrmCF5OcFRkGC4DocVT6cApFwiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqaY2iT72w7GYwet1KtwDjyYPvqQUhbsr5vLjCTxnUMp3akyJY1Lweb91CWzwn3TUt5h7Bxw5cncIcs3NwpFx%2Fm4at2XIHbshPR62Orf%2B8NQi0cuS5WxjqGiymkenDrLQPLSFTFjjI22JCZAGY4csC98U0dwKkAZxssoOnYRsXJdlgBModAJ6ZTM9uFuv5470NBwNryGIBLxeJB9N2SRJiw5QFQJ%2BBasQEm6cN6IlbrCaOf7ra4ToKebgFFRm7ZZl30M6aPfKnXVEZ50e8%2Fj%2BilYuUZBl218lAKvSZSLPuQ6BIf4XEFkqkxeJDb6L4sd33cek56pK3%2BW4OuXH%2BZMYmfW7V2qPTiuCPHPL5fs3X0p2rdn%2F5bTdM9EXjjq9xfzcWwTmqolDsNpzKRzrFPe4ZrLjhhuFKzx%2FH%2FwCWyH0thEnEMKfAnWDTsW4gOO832VCM5OecCk9BSCa6VXj8463C6Oh%2FDFttyhjr2lorxGeceSvLD5yyrJ6TIOLMVpbakhWnLqTLcdRl194XeylowAewGVLUoXNv4nuDuiG%2FmtTbG0KpDqQd1yx%2FQ49CB9VnMyibSEIryjJX6DF2ro2IeN6Hnpf5l3nYM6K9oddjg7n9jhd11HabiQRnweFPNyn1Opj8NWNwQiFH4j2YYIw9cuvvQY6pgGJj9PsW3v6L8u5Mh76l7ZR%2F%2FSePVBmWGwX10ja1vSyZhHdQqORJhg8TxlhuRbVkr0Q1JAMAImS%2BeB6xFnP%2FDbuGudV%2FkcJYhxdzV6ruqj2k9grKwfQ6h8IzO5KvdMPWY9x5GOo3DKinCTsapvAOcFj3WGIIyc6JkRWtGbT5qV4liBnODTuBRCaUJfmPymyPolfkOpbk0IqwyqGp1ItkeV8klEp%2BupK&X-Amz-Signature=707c31e16c6daee75010cb635829fb15e9327831d15574e2827ca526b70a71db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2GA4PTM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7tKNBv8x591u7Vb62%2FONKe00HbnqkETrSI46WNh6RAIhALGhUhoj6J9IKWXhGL4umR5l9CVY%2FnNvjKWkZ5cQvkaMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhWYW6qmdAcTmoJB8q3AN33FpKfuII%2BEW3U%2FxGaaR38PBMpJUpU7tTVcCRnc63y23IQ6wewslHHKBD30LBw6UmflekhvK8GwQsHf%2FB9nFM9ycRVTRzrgaLQz6wy1E3v9CVZwKUXT2z427wqBFucdJqWNWcAt5HbwDN1zWBza%2FTmdE%2FgjRLFNiuloK2z1Ir9r7rs0mkUSmDZowmzrTmOUCIMei1W4If7l%2BzUIwZLDAmtrQdILLwpWU0TbmTixfI9VizjN68HrNPd4mmIQFlRUb6oerv9%2BO6dXexaqCYhLZAN0396PWCC4ZRwDB%2BNOOO0AfeLnitP3QPiW8Nbso84FLlv4O3eJREDUoXIM1HHgCUY6hDLMuzPzwTj4UdppuvqSUFIyo%2FQJkOzAivac9wF0FV%2B31DWsKrQyw1GnsOKVooe2EnDQAJOnGYlTOo4XRNCteFQWntADdTxB8xNWPBWMulGvFZ4yrUr0I9DoQBqpE%2Fcwh78Or7HQFfVw33v7o0FtxOv2IgkEEAkdVlXK16G5CMPRMPBZZXx4WMQBn%2BxZcpzBuFD0Zl8w9DRU1xnctpioQ0embgM45iLcfecCDGW2OunJJU2BJx6jgvTNxLxSXrpAz4nBxyahFuB8ZOPonFifsJDYDaxk6yBqf5ejCz6K%2B9BjqkAfZJ%2F%2FHAjWQQyiw8idpTIxgNjJNitKZgr%2F5NaTA9FzQ9aFrFyHrhb9W8F9jRP7X73gqA3PyUiNSTPjkOm7StqC4RbtuCwgM%2BttkNEs5fvFU%2F35OZ4YADXJX9J%2FKnjOiCk%2BO3WaPcUUGJdoAB07R%2FxXydIerEBqsFDJFZAPA%2BN8zjb7JXvzBeQZtON4UoIVo7A3JQcbeKwYM8u0WC2jBW3vCE1nlE&X-Amz-Signature=81177ad3e37a6b5eb440e0ff245593f566be8dbd05ad656275a0a4da3efb29bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XHWREU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErM9uShQhTRi5R%2FHI%2FwhmquW6rfa4HA10aUVZbBJHO6AiEAzMXb3ExhpddR3SJ2SMOD1FxMDw0Q5wxZone%2FiDq1y%2BkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FaVJgQFP9ipYeQOircAxLsb7jxBnnn%2Fp8TCpp%2FHV4LYxUd1gr6bN7KYqPuKWxsEbCuiZbSkCqSNhCKpQl%2BwCe%2B4zBYIzA3Hae6ZRqXj3%2BUzUR03qV44p%2BVUoucTpOMyW9B8jwdwk87FD3%2Buwy0G66hBwT4jPbt02LJB0%2FiKTyzpK2FwRHr%2B%2FaPDjva47wntruiFo4b4wb3vLBiquYQVqZxvucfL%2FUsJ5EN9hntFXu1D9cN1XJFPdyhSS1v5rJhsN2RV%2BqQK7s%2FT%2FjF9siL2MkJ7PLh5LCwPoOGkAEyoV4YWaQs1xngDB%2F66Knniul1pakZ22Igg2ezbT%2FBeby4C6BB%2FB8f4CMxn6YPEvHCPkhPrNREwNKImBX0CVyB2Q6PPtnMo3jF6%2Btr%2B3w9NIWPtgiIyIr%2FEj9bpgzG%2Fpz0EqwjyBLM7jANK%2BGJEuc91H5OirTIiNMDMq0t%2FnPOwu6z1goz8kR%2BG%2B%2BOmb0wwsmRPX1pPO3vjlSf9xDnlUeFCwKnHU0cYjOOso0M8udaZRqUDoIJw7rG210VX4gM3rxYhicCCPnkk58%2FYM0OjJA0gBQpR2x%2Fz8bsX2TqmwdQ1voM033MQTXoTHa14raUkgIpgptw1CIPbXV4lsk0Ol1R26RfnFimBrqncCOPu9f1MJDlr70GOqUBwtb40Qeji1JnWAL44fzc01Fdwcw82dVBANU5%2FahKoE4OedeAfHL0amIp9sXCeNnbJxuDsLqBgP1onFEO732GRxPYvr2Adfz9xjv2iFr0Azn%2F%2FH8bpA6N2mH4XNG3uEcE9eGvAqUMV258VNoWRxLDy%2BZV1w95eC%2Bpr%2FKIfvBgge6QQth4yR4FQmzbJev4s0TGIpotmNydkImMBKmr9itZE5b9JB%2Bt&X-Amz-Signature=59e97e67b68a172834287cda5a86c8c5a9a654181fe2da805fb671559a98bfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA32LEN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeJBxp5A7v1sdDr2bY%2FND9zaXjTk3%2BTZ4bQ%2FGR5xh3lAiA5spkDlNg5sMjnrzy4qrmCF5OcFRkGC4DocVT6cApFwiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqaY2iT72w7GYwet1KtwDjyYPvqQUhbsr5vLjCTxnUMp3akyJY1Lweb91CWzwn3TUt5h7Bxw5cncIcs3NwpFx%2Fm4at2XIHbshPR62Orf%2B8NQi0cuS5WxjqGiymkenDrLQPLSFTFjjI22JCZAGY4csC98U0dwKkAZxssoOnYRsXJdlgBModAJ6ZTM9uFuv5470NBwNryGIBLxeJB9N2SRJiw5QFQJ%2BBasQEm6cN6IlbrCaOf7ra4ToKebgFFRm7ZZl30M6aPfKnXVEZ50e8%2Fj%2BilYuUZBl218lAKvSZSLPuQ6BIf4XEFkqkxeJDb6L4sd33cek56pK3%2BW4OuXH%2BZMYmfW7V2qPTiuCPHPL5fs3X0p2rdn%2F5bTdM9EXjjq9xfzcWwTmqolDsNpzKRzrFPe4ZrLjhhuFKzx%2FH%2FwCWyH0thEnEMKfAnWDTsW4gOO832VCM5OecCk9BSCa6VXj8463C6Oh%2FDFttyhjr2lorxGeceSvLD5yyrJ6TIOLMVpbakhWnLqTLcdRl194XeylowAewGVLUoXNv4nuDuiG%2FmtTbG0KpDqQd1yx%2FQ49CB9VnMyibSEIryjJX6DF2ro2IeN6Hnpf5l3nYM6K9oddjg7n9jhd11HabiQRnweFPNyn1Opj8NWNwQiFH4j2YYIw9cuvvQY6pgGJj9PsW3v6L8u5Mh76l7ZR%2F%2FSePVBmWGwX10ja1vSyZhHdQqORJhg8TxlhuRbVkr0Q1JAMAImS%2BeB6xFnP%2FDbuGudV%2FkcJYhxdzV6ruqj2k9grKwfQ6h8IzO5KvdMPWY9x5GOo3DKinCTsapvAOcFj3WGIIyc6JkRWtGbT5qV4liBnODTuBRCaUJfmPymyPolfkOpbk0IqwyqGp1ItkeV8klEp%2BupK&X-Amz-Signature=7d2ddce12c41fd20219f11269d09a55c38a561dbd8ea4075cbae34da5290c9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
