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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJQZ4IQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvz5J8cqObakGH4ShOBktViaLlp5hTjvBLwk6rBk2%2BKAiEApwTFzOPTLUg31HR7s3ZR5ELKeIquTWskaYbBs2QjJrgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzIvftpDOZ9NdRZSyrcA1gxpDlRzCcFbaO0VAgmwj56KBBrsClug28Sl79URXrh2BYVR0FuRl16eZqxYCxqJ0tS7IWRVAJZYxzkqIZ%2B%2BOn2VDYbjUitY0%2FiWtlAgc12KO9bygG2kWHMG8jIFgNJb4%2BZck%2BVIfWKGK23DiynMZwgq5c3DwjWIp4hvl19FZtFnnTKxDuhoJX02VMpxdMRtezxMKPYEhbTK5EHk%2BDYKkeCVnnPFH%2FscGHTYzWq%2Fu3c4sRjAvCEtMZRMtjL6xsC1nJV8CMWb%2FKNLHntfsKv4UKW9tIUWJBakV%2BvbkgG8Q1ZUe%2BswWA8lQQSZUft6lJlF7uBkQ7153eyIjr9Xkow6uPr8StvJFn2Wb1X1B4t72kF%2FaA1PgkU%2BuIAfDTk42%2FtxooYnxxem%2FGXzFmYm86WAWxgROe3gLacjsQ2815oyTliGtBLSswWQENfahREkz%2BXRFOMuFZHknb64y4YVlIcKshUGCsUT7L8U31%2FR%2B71E%2FtIAuVRuK8ho%2FcWolm4fHKBq5uONmc7jWTnO9MnK8zKL3mPmiz%2FRln5FyjeUjVc62BWKAg8pZt2NDgOIhGNVQrVvcZ1emQOBOnoAxSerteEweiw7%2BGrmhkC2Mioc1nr1oam8vWoYKu9U3RR3pY0MITL6MEGOqUBAxGPcav7r4nEs9Q31iNV418fq1%2FLk3%2F0j5v%2BqD%2B0CGIs4I3gyC1HRKZ6Mpsl%2BJFDI4DMSD9mnTfjxRhDc6uDfiYW5WeEnkwKeU5ghf5jC3NvtUVsTAyMKSUDSsTvglZK8qMNc6Fi6SKLbxV4DN%2Bvyd6me3R7F1ixvA3CLcrzuKbbY4M1bdrQX5htUp6utl2nExcOxNgqEEiF7EHMkrmYAxBr7mSd&X-Amz-Signature=0794d2428a23002a782a55e88e430611e4eeba2e732874274b1dcc1fb1efd829&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJQZ4IQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvz5J8cqObakGH4ShOBktViaLlp5hTjvBLwk6rBk2%2BKAiEApwTFzOPTLUg31HR7s3ZR5ELKeIquTWskaYbBs2QjJrgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzIvftpDOZ9NdRZSyrcA1gxpDlRzCcFbaO0VAgmwj56KBBrsClug28Sl79URXrh2BYVR0FuRl16eZqxYCxqJ0tS7IWRVAJZYxzkqIZ%2B%2BOn2VDYbjUitY0%2FiWtlAgc12KO9bygG2kWHMG8jIFgNJb4%2BZck%2BVIfWKGK23DiynMZwgq5c3DwjWIp4hvl19FZtFnnTKxDuhoJX02VMpxdMRtezxMKPYEhbTK5EHk%2BDYKkeCVnnPFH%2FscGHTYzWq%2Fu3c4sRjAvCEtMZRMtjL6xsC1nJV8CMWb%2FKNLHntfsKv4UKW9tIUWJBakV%2BvbkgG8Q1ZUe%2BswWA8lQQSZUft6lJlF7uBkQ7153eyIjr9Xkow6uPr8StvJFn2Wb1X1B4t72kF%2FaA1PgkU%2BuIAfDTk42%2FtxooYnxxem%2FGXzFmYm86WAWxgROe3gLacjsQ2815oyTliGtBLSswWQENfahREkz%2BXRFOMuFZHknb64y4YVlIcKshUGCsUT7L8U31%2FR%2B71E%2FtIAuVRuK8ho%2FcWolm4fHKBq5uONmc7jWTnO9MnK8zKL3mPmiz%2FRln5FyjeUjVc62BWKAg8pZt2NDgOIhGNVQrVvcZ1emQOBOnoAxSerteEweiw7%2BGrmhkC2Mioc1nr1oam8vWoYKu9U3RR3pY0MITL6MEGOqUBAxGPcav7r4nEs9Q31iNV418fq1%2FLk3%2F0j5v%2BqD%2B0CGIs4I3gyC1HRKZ6Mpsl%2BJFDI4DMSD9mnTfjxRhDc6uDfiYW5WeEnkwKeU5ghf5jC3NvtUVsTAyMKSUDSsTvglZK8qMNc6Fi6SKLbxV4DN%2Bvyd6me3R7F1ixvA3CLcrzuKbbY4M1bdrQX5htUp6utl2nExcOxNgqEEiF7EHMkrmYAxBr7mSd&X-Amz-Signature=ff964a35253f2e0903a7d7de8b83266dd35169de6ffae8006d1516005b094894&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJQZ4IQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvz5J8cqObakGH4ShOBktViaLlp5hTjvBLwk6rBk2%2BKAiEApwTFzOPTLUg31HR7s3ZR5ELKeIquTWskaYbBs2QjJrgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzIvftpDOZ9NdRZSyrcA1gxpDlRzCcFbaO0VAgmwj56KBBrsClug28Sl79URXrh2BYVR0FuRl16eZqxYCxqJ0tS7IWRVAJZYxzkqIZ%2B%2BOn2VDYbjUitY0%2FiWtlAgc12KO9bygG2kWHMG8jIFgNJb4%2BZck%2BVIfWKGK23DiynMZwgq5c3DwjWIp4hvl19FZtFnnTKxDuhoJX02VMpxdMRtezxMKPYEhbTK5EHk%2BDYKkeCVnnPFH%2FscGHTYzWq%2Fu3c4sRjAvCEtMZRMtjL6xsC1nJV8CMWb%2FKNLHntfsKv4UKW9tIUWJBakV%2BvbkgG8Q1ZUe%2BswWA8lQQSZUft6lJlF7uBkQ7153eyIjr9Xkow6uPr8StvJFn2Wb1X1B4t72kF%2FaA1PgkU%2BuIAfDTk42%2FtxooYnxxem%2FGXzFmYm86WAWxgROe3gLacjsQ2815oyTliGtBLSswWQENfahREkz%2BXRFOMuFZHknb64y4YVlIcKshUGCsUT7L8U31%2FR%2B71E%2FtIAuVRuK8ho%2FcWolm4fHKBq5uONmc7jWTnO9MnK8zKL3mPmiz%2FRln5FyjeUjVc62BWKAg8pZt2NDgOIhGNVQrVvcZ1emQOBOnoAxSerteEweiw7%2BGrmhkC2Mioc1nr1oam8vWoYKu9U3RR3pY0MITL6MEGOqUBAxGPcav7r4nEs9Q31iNV418fq1%2FLk3%2F0j5v%2BqD%2B0CGIs4I3gyC1HRKZ6Mpsl%2BJFDI4DMSD9mnTfjxRhDc6uDfiYW5WeEnkwKeU5ghf5jC3NvtUVsTAyMKSUDSsTvglZK8qMNc6Fi6SKLbxV4DN%2Bvyd6me3R7F1ixvA3CLcrzuKbbY4M1bdrQX5htUp6utl2nExcOxNgqEEiF7EHMkrmYAxBr7mSd&X-Amz-Signature=a0e51e795406b24524cba266c43aeba3d31bf843ad0c47874016d10c8b89c2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3CVWKYN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ3Q4HRIwSZtsZuzL5NpRIbWKafl%2BT1d7VcVJV1SQ5GgIhAJxSqXOQ%2BBA%2B%2FazVp8poFEAR%2B0rB2VKRAFLVmh%2F9syJlKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkQOCFJUSuf7QPdfAq3AN1zvXNeb3b0AZ99cXVntKe1mQ0du85cpeoVfskVAEzSv5afOXBSFHuSv0FurM4sjjO20OC1JTmppb9sPxLqoocJPqu5y%2BsvP%2FN8N1UUXp%2FdA%2F%2Blwgg8wcmB61o5RrJuDhlWDTSYMKCwXvcg4UystLXPnzqicXqCRBqhEcADm64ZBedcuk%2BflLPzRcdAfWED19hAIhv0cHP8KFfVYbIRRa2L%2Bc6C3EdTEveqvZZa89DRxTCnjnD8%2BTOGFG5wphfVxbXFRsKWRKh5aMpB%2FHUcuU5PBr9nlDs5%2BFjBXL5Im3mYbHQ0Bdcx7H39kCmZiUCfG57Jd8z1qVLqwSVDRj0136JZYW8xkTzEaqBwi7wJPEcjrt8gYMYMdEg8%2Bsw9AqQGhqRFk%2BXkwCxYPJGVGtYh6YTZnSD25%2FKsrq76c8tagtCZIghTvT07Cpn3Yca%2BdjJ7%2FnJPtbP%2B60D7qN%2FnT0WYvUPljM3WjS1zphNG1vsJ6m2GrExt78FDmBS4C6ETbKcYSx5uj0si6%2FQkU8JidLCZXK6J%2BNsNcIqsnh%2BOIHL6R6iVWbMuwJK0I5kRlG3kf%2FoXxkTS1Vk7RmZGgPVZ6mZC0bW1xu%2FER3LlZ%2FFp%2BhjNcrLzUwCqWnGm2m5g97GLDDJy%2BjBBjqkAW6SQZMlgTXYhzFcJtQ3%2Bq4xwNOu2hOOqsw6eEuzeB9BBnedFk8y02XzYRZn8aq6ju8m3KH4c1otq%2BmdRw%2FN8qDbwmkfVaM1bMTpkqZxJKGWbaFaCnAeRgppKgDf%2Beg2ZEtwerdg8m6Z%2BX6WHAmT%2BMo4H6Qv%2F4Ygn01hUc6ahb5XW6DFq05AjcHUAzFiheherZqXOFXVrQ0SP%2BhRorwZBEWShRLh&X-Amz-Signature=73e377fc0e7faba4d9cb6e8255fdac049943ce2a611b325723939136156e29d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINNQ6I%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjgRo87YtE1iaLEzRQ1%2Fol%2Fz4HNCYpZEo%2B8Y%2BqcPMi2AiEAp0hl%2FdxnvXWr%2FitWbdZR%2F17TLxQdnOt1vflkkQbZdVwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K1EnGKTc8sobUQSrcAzBqjwoeKx%2F9OsQrvoSLWiPtxIXu0eWO15iPI9ESGZmiwnuoXRuBH%2BmvE6KNbcUvAhrt6c5pO3B0d9lBnXF0h9TkTNKs6%2BDP%2FwsGCaGXc6AOzYVt8r7N5gfJcQl8ZSAfIkYLANHJObMBoQ5jq4huKjCZZ5ljVCOp26kso19%2B4lAf5N6Y%2FclJwSa%2FQ7R4Ltp9DIdJgG0zDmfC3hQpjvQl3ZPD6iPEUKlc7tSSmZtMkOire1N07Tujf3AwpgiAbaMH04tJIaMODUHsBsyOSTOBaOZLOWtjK2R%2Byzw6AZ7EvP2v9Pb99MrtrTUDtjj1Z07y39qzGIHmGaPJqPXwwh1QBRSc71SCTRrDPP0RGXoy7zX0tfgzjYJBRySzbdq8YnS3z9Wjw4ezi2otg7WoaqsuajyB3vRnr8lMs3qakhdOxhTiFPtl4sGQEW6fCgKpoeqe9F5MDSyvaF4duUzqajjqNFvTL5LyMs8Msrkzkp%2F%2BUfpsVw%2F%2FDlwY0EIL4jkgkF%2FksqaowILDeqU2S6enUnyCjmF%2Bx3Ew1AdYGLC6JiuTikDEmznBQr3fK4%2Fxw5Ypf7uaYFIVOadJt7CLvhvFlr07n3ntp0YxE4aI4dfc%2FbuJcCmyuEdIvZ%2BZVHKMquFTMOHL6MEGOqUBTAmL2E%2FSovOPSi0EW69cMjwDwm43q3WDlO%2BgOMhjPk5N6egr2lKYvVJB0LTryGYe8Y88RNiV1OT1BhWPtxAni%2BaFP5u%2FWEe5fYwvIRDXnUOUW0C8z0c%2BdqW9e6doU0baY3Ea3VkbjvyOYQfXxzFd0SEpnQ%2B8S6Ym2QKiIjemtQ2s80sC9toixNegOLDTOx%2BAZ2XedyW2BtVSWqLmx8D1Mq9WJm9v&X-Amz-Signature=9d9b327a222299d7d0fe17e0ace44df2d245a24fbf5441faa486cf1f2bcf96b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJQZ4IQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvz5J8cqObakGH4ShOBktViaLlp5hTjvBLwk6rBk2%2BKAiEApwTFzOPTLUg31HR7s3ZR5ELKeIquTWskaYbBs2QjJrgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzIvftpDOZ9NdRZSyrcA1gxpDlRzCcFbaO0VAgmwj56KBBrsClug28Sl79URXrh2BYVR0FuRl16eZqxYCxqJ0tS7IWRVAJZYxzkqIZ%2B%2BOn2VDYbjUitY0%2FiWtlAgc12KO9bygG2kWHMG8jIFgNJb4%2BZck%2BVIfWKGK23DiynMZwgq5c3DwjWIp4hvl19FZtFnnTKxDuhoJX02VMpxdMRtezxMKPYEhbTK5EHk%2BDYKkeCVnnPFH%2FscGHTYzWq%2Fu3c4sRjAvCEtMZRMtjL6xsC1nJV8CMWb%2FKNLHntfsKv4UKW9tIUWJBakV%2BvbkgG8Q1ZUe%2BswWA8lQQSZUft6lJlF7uBkQ7153eyIjr9Xkow6uPr8StvJFn2Wb1X1B4t72kF%2FaA1PgkU%2BuIAfDTk42%2FtxooYnxxem%2FGXzFmYm86WAWxgROe3gLacjsQ2815oyTliGtBLSswWQENfahREkz%2BXRFOMuFZHknb64y4YVlIcKshUGCsUT7L8U31%2FR%2B71E%2FtIAuVRuK8ho%2FcWolm4fHKBq5uONmc7jWTnO9MnK8zKL3mPmiz%2FRln5FyjeUjVc62BWKAg8pZt2NDgOIhGNVQrVvcZ1emQOBOnoAxSerteEweiw7%2BGrmhkC2Mioc1nr1oam8vWoYKu9U3RR3pY0MITL6MEGOqUBAxGPcav7r4nEs9Q31iNV418fq1%2FLk3%2F0j5v%2BqD%2B0CGIs4I3gyC1HRKZ6Mpsl%2BJFDI4DMSD9mnTfjxRhDc6uDfiYW5WeEnkwKeU5ghf5jC3NvtUVsTAyMKSUDSsTvglZK8qMNc6Fi6SKLbxV4DN%2Bvyd6me3R7F1ixvA3CLcrzuKbbY4M1bdrQX5htUp6utl2nExcOxNgqEEiF7EHMkrmYAxBr7mSd&X-Amz-Signature=46e01598eb6f8697bd417a061f8ac8b75ff46822f8a4eb0bb6f21c0019c05f85&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
