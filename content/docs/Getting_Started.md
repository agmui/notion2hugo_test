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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWOQY6V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICwY2WudVCBMX%2BXUxdcTgFZEijeXnHBsDtxOLngYh5JgAiBEyc7YgWjYmLHc5DeDlxI%2BBUCDd6nLP1l33sAlvIKJXyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMPn%2FxGPCxypVTiERbKtwDjPP8pzLSgpawKLlKIY2TC0xyzBb6K3NI%2F45n9bFA%2BjAClEm2P7Fui3UuBh4o3j8QIhFTkjOT1WyTtQVRIZkStanCW9WmpMjnmI3ABa8dUbzJh0%2BtxPd6xKoJvhM8RZwLfPmD%2BszBCMS1fPen9IZUYyCss295igWvq2hPB0SYSENNk6WqFoeAr%2BCZMRTcJnbErSjoSh64M2SOK0Vb9MFwO2LgbP5p2NvvGKSqsz7OC%2BR9xTn0umL7Am1MlRuByH7%2BcfpYcJRK2O3lpKKKU68IrjCdZGPI1oJ31XosUclj62IWmqxT1IcUl2QOpLCbjew5wAznRrLso5fuMap6reEQCBVVocrSMb6Vcgkoy%2Bl26%2BTzlVqtHNpwXYlxFMUEbk66CSyq4sBYA3ccH%2FFI4HTtzjPHl2Xatt6bKeFK4Cy8%2FxAF643LLMnmEk%2Frve0zIhCrbKkTlweCzuhQ8QZUAFiX2AWawv%2B8QjaxINix378znV3Ajsqhiw5gj6pdFmQFt2%2BnVCF69LIubzowvRiCWxFS5xnXlnROOgXeS18f5i1ChjESL1IlHReVWI81N3o0zTUwdISFC4awo2pwnasb7sUla2WtezaJ%2FUUrgu0OsGv1aoxMq7Jw7KwXgn2HwQwwlP%2FMwQY6pgGTeAk2ZTa7zFgGGSyy0ML5eEbQoYzK4n8QBqgGhb7CzRF2M24VatAbMOgPQszRTAkSKV3I7I2RoKdfjrB1mYB0YYlJndlkMWM4UnYFsEIJGJXpa73e3LioW1xe8JEQ3I9WZ0wv9i5UGSaTBhi94Q1QFqZrv87HCU%2FWtlGp1l9U6B%2FURnwWwVgBXazfa7aopQzuR0Hg%2F7l0l23z2OGZ8MWZUXVl6f0J&X-Amz-Signature=5ee442a0686316fc38edc9fd9a60f4a44a17f2cdfcc124a52c31bfb453f8204e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWOQY6V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICwY2WudVCBMX%2BXUxdcTgFZEijeXnHBsDtxOLngYh5JgAiBEyc7YgWjYmLHc5DeDlxI%2BBUCDd6nLP1l33sAlvIKJXyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMPn%2FxGPCxypVTiERbKtwDjPP8pzLSgpawKLlKIY2TC0xyzBb6K3NI%2F45n9bFA%2BjAClEm2P7Fui3UuBh4o3j8QIhFTkjOT1WyTtQVRIZkStanCW9WmpMjnmI3ABa8dUbzJh0%2BtxPd6xKoJvhM8RZwLfPmD%2BszBCMS1fPen9IZUYyCss295igWvq2hPB0SYSENNk6WqFoeAr%2BCZMRTcJnbErSjoSh64M2SOK0Vb9MFwO2LgbP5p2NvvGKSqsz7OC%2BR9xTn0umL7Am1MlRuByH7%2BcfpYcJRK2O3lpKKKU68IrjCdZGPI1oJ31XosUclj62IWmqxT1IcUl2QOpLCbjew5wAznRrLso5fuMap6reEQCBVVocrSMb6Vcgkoy%2Bl26%2BTzlVqtHNpwXYlxFMUEbk66CSyq4sBYA3ccH%2FFI4HTtzjPHl2Xatt6bKeFK4Cy8%2FxAF643LLMnmEk%2Frve0zIhCrbKkTlweCzuhQ8QZUAFiX2AWawv%2B8QjaxINix378znV3Ajsqhiw5gj6pdFmQFt2%2BnVCF69LIubzowvRiCWxFS5xnXlnROOgXeS18f5i1ChjESL1IlHReVWI81N3o0zTUwdISFC4awo2pwnasb7sUla2WtezaJ%2FUUrgu0OsGv1aoxMq7Jw7KwXgn2HwQwwlP%2FMwQY6pgGTeAk2ZTa7zFgGGSyy0ML5eEbQoYzK4n8QBqgGhb7CzRF2M24VatAbMOgPQszRTAkSKV3I7I2RoKdfjrB1mYB0YYlJndlkMWM4UnYFsEIJGJXpa73e3LioW1xe8JEQ3I9WZ0wv9i5UGSaTBhi94Q1QFqZrv87HCU%2FWtlGp1l9U6B%2FURnwWwVgBXazfa7aopQzuR0Hg%2F7l0l23z2OGZ8MWZUXVl6f0J&X-Amz-Signature=8efd94ed61ae5c7888f263ebe96f976428b06ebd64307f0711c44dcfa19ba895&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWOQY6V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICwY2WudVCBMX%2BXUxdcTgFZEijeXnHBsDtxOLngYh5JgAiBEyc7YgWjYmLHc5DeDlxI%2BBUCDd6nLP1l33sAlvIKJXyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMPn%2FxGPCxypVTiERbKtwDjPP8pzLSgpawKLlKIY2TC0xyzBb6K3NI%2F45n9bFA%2BjAClEm2P7Fui3UuBh4o3j8QIhFTkjOT1WyTtQVRIZkStanCW9WmpMjnmI3ABa8dUbzJh0%2BtxPd6xKoJvhM8RZwLfPmD%2BszBCMS1fPen9IZUYyCss295igWvq2hPB0SYSENNk6WqFoeAr%2BCZMRTcJnbErSjoSh64M2SOK0Vb9MFwO2LgbP5p2NvvGKSqsz7OC%2BR9xTn0umL7Am1MlRuByH7%2BcfpYcJRK2O3lpKKKU68IrjCdZGPI1oJ31XosUclj62IWmqxT1IcUl2QOpLCbjew5wAznRrLso5fuMap6reEQCBVVocrSMb6Vcgkoy%2Bl26%2BTzlVqtHNpwXYlxFMUEbk66CSyq4sBYA3ccH%2FFI4HTtzjPHl2Xatt6bKeFK4Cy8%2FxAF643LLMnmEk%2Frve0zIhCrbKkTlweCzuhQ8QZUAFiX2AWawv%2B8QjaxINix378znV3Ajsqhiw5gj6pdFmQFt2%2BnVCF69LIubzowvRiCWxFS5xnXlnROOgXeS18f5i1ChjESL1IlHReVWI81N3o0zTUwdISFC4awo2pwnasb7sUla2WtezaJ%2FUUrgu0OsGv1aoxMq7Jw7KwXgn2HwQwwlP%2FMwQY6pgGTeAk2ZTa7zFgGGSyy0ML5eEbQoYzK4n8QBqgGhb7CzRF2M24VatAbMOgPQszRTAkSKV3I7I2RoKdfjrB1mYB0YYlJndlkMWM4UnYFsEIJGJXpa73e3LioW1xe8JEQ3I9WZ0wv9i5UGSaTBhi94Q1QFqZrv87HCU%2FWtlGp1l9U6B%2FURnwWwVgBXazfa7aopQzuR0Hg%2F7l0l23z2OGZ8MWZUXVl6f0J&X-Amz-Signature=7d07517dcedd2a362671301523e1d4001c890f8a4a2d7179a79b0b0b84a7b1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY744YV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHldMuGEjnNlZpsRxIZjKVULivl9hRH0CB9jk5EGJSMOAiA0K6R6pBvyg%2BZVfgFmbmqdyjZ5jsz9nBHOj8zf0Yh5gyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMgViCAS%2BgKmt0r%2BqbKtwDQYHQybuotOnHe6TGCiBcOpgLTP7xESC1xd9YV3a82u1ByiFIfxZ8F09uNSyzvG6Yp1jaqFQ4%2FEK6mP7kohDyFup3Zt7W3RVcSb8oCtJPDgVAF9JeWTJ8%2F9Mzd4gUXzFSeQuQgcjoQ5Z8IjIl2xX6K389p8dDFXuteQpdluuOL1pEVw22U4R7W1%2BfnZqvrUBfuqR4rhXlVg%2FfTlTiCGY6AqOHG0VqIW0o5Bq7jN3pvY8OWetPA%2F28ti8tOVp%2B%2BIv5rJfIDM%2FipFAE5a4363La9xe9c%2BmD%2Bg4qUxJnUf1sF%2Fapnb0OH20P%2Bjsjc77n8ChIeJ19d3fKlXnML6qYtOAHAO4m23EwZeKsejb82u2fdxTZdc3UyHk6L5BLTXORdPKQO8f3z4BaVTH0nHnW1bOVw1rY%2BdjI%2BGsanIy9S3NQd2ljxn8WRfIk2CeI15Qn6EOJPLHc8MQldkQzhi2WeOT8w4nQyV5cfXhOymngGcg%2Bg5oyoBaLIfFgZsYKcUyZHztJ9UmtLEE0H9XY0lpf0mzT4YJvu%2FZKE40jX%2FayGOtb%2B3GlfCtSjEanU2WI6XJV1u7oDpmK4zSTA%2BJOCbGKBKNx61UR5Qj%2FLAGMNzqpbE7bCXw67dJ6%2BAt17TMRdHkw7P7MwQY6pgHcRhf5dSTQ0znqjGXQb4LUyqHJ2GhhoWYxhZ5yLADKwTF36bSqfPYEul88zvJ45nT7%2F3UMD%2FVvPJgCXpNCsbf95gdzR5IGYBSQo2MotPdUTjWkl8scMMrZd3kFvoERZC%2BhCkxO0tP73tLBnvn4aWqNuvqEqVCCVRSL0QF1cg7hVx7uPMkDsusnIDeQ%2BmWLRGJfFlurQSfblafv48yGtKDtG6ovPbm%2B&X-Amz-Signature=76006c09b10547f49214f8944d503ff4c4046971dc628bb04d3ffd602f9ef341&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLDHB76%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDMmhBuZ4%2FYuujTxtmBXOjzFTkyeSxu6g1V12Va1dqKRAIgKTkXb9kS7BWTaJT3BUkA%2FUybgXAilMHN1gaBmaP3AOgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCLjL5YJBx%2BI%2FrooGircA1pBLYbUByRZlGCW%2B%2FaF4EpZz6prb%2FjifM6pmPqFMiMd%2BXnOhyCVFDYHHNTV6XbUOJidLm9XmTdyhEoADZaHULmBnKIIdbtKOZxK6nKjEsP6%2FLc%2BNShNeFaV3dcw7hzt2YrMEjhVY52XIyc8vb8gxjwX1%2BiHQSQsIXdxn%2FXo2zbJitbwBu6DYTZVK8DNoV1fHKnr9TPRhYq4vKZWVliuGfm8%2FZKyqJLa6SSzagR4R1oLJpWTvb6fYdukznVoIW%2F8bkwH%2F%2FcTLUjgPVKcAwmRt3JWG2qGF%2FUQ5Pdvd5qYZNcrO55pe0JCdINXnE63dlkvxW0K%2Fhkx8DYXZGRPY8Jez0OfCQ3i2BWgvVDKGGW3f7J5EPb%2BoMYByjecAP0IrvS%2BE6BktIjCHlAiM8RfdPwptKUgnHee%2FWoosdHcXhgF7qT9DkuWyXu69J1HK2QpfGi5RlrWP%2FZ2KuzFbCPAMrPSBK7v2hcL5N3z4CMZmx%2B8xYvt4WolnfI45nx7COrjBlRfH71LzSoBbt34ykkff4Y7DSWPxn24NDiLz9FpwjZBH8Xeb1kCLP4%2Fohh4OrZXBtMZYh2YBbgDyxidlXHpFeao0D5lC%2FkusxxVpfX%2BD4N6gaM6QGH30%2BqpX%2F%2BNWYfwMOL%2BzMEGOqUBzauL4ZUCkZPplC68IFS13bWbGuwYiTHAwOs%2FDsyfvr4O1cXMQJgOC1vN9gqHiYUqfUcekjjLlT%2BJ0lTZj4qVkJBmJRNKuRHegpW%2BTaqvS1i649J1cCxGIkT3hgSz9YJlpEf2TG0c%2BQ1EA3nKOcEYAqg4zYs%2BAgI1%2F%2F8AEBv6Gq%2FiQpbORnh%2BwDJSrhFDRggH5CCUPnzCbdr5GJAqYC1VuBPJGyU5&X-Amz-Signature=0252d1eeeaae47c21da168fff878ba7213d469b77bebee08045038489d3c3e59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWOQY6V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICwY2WudVCBMX%2BXUxdcTgFZEijeXnHBsDtxOLngYh5JgAiBEyc7YgWjYmLHc5DeDlxI%2BBUCDd6nLP1l33sAlvIKJXyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMPn%2FxGPCxypVTiERbKtwDjPP8pzLSgpawKLlKIY2TC0xyzBb6K3NI%2F45n9bFA%2BjAClEm2P7Fui3UuBh4o3j8QIhFTkjOT1WyTtQVRIZkStanCW9WmpMjnmI3ABa8dUbzJh0%2BtxPd6xKoJvhM8RZwLfPmD%2BszBCMS1fPen9IZUYyCss295igWvq2hPB0SYSENNk6WqFoeAr%2BCZMRTcJnbErSjoSh64M2SOK0Vb9MFwO2LgbP5p2NvvGKSqsz7OC%2BR9xTn0umL7Am1MlRuByH7%2BcfpYcJRK2O3lpKKKU68IrjCdZGPI1oJ31XosUclj62IWmqxT1IcUl2QOpLCbjew5wAznRrLso5fuMap6reEQCBVVocrSMb6Vcgkoy%2Bl26%2BTzlVqtHNpwXYlxFMUEbk66CSyq4sBYA3ccH%2FFI4HTtzjPHl2Xatt6bKeFK4Cy8%2FxAF643LLMnmEk%2Frve0zIhCrbKkTlweCzuhQ8QZUAFiX2AWawv%2B8QjaxINix378znV3Ajsqhiw5gj6pdFmQFt2%2BnVCF69LIubzowvRiCWxFS5xnXlnROOgXeS18f5i1ChjESL1IlHReVWI81N3o0zTUwdISFC4awo2pwnasb7sUla2WtezaJ%2FUUrgu0OsGv1aoxMq7Jw7KwXgn2HwQwwlP%2FMwQY6pgGTeAk2ZTa7zFgGGSyy0ML5eEbQoYzK4n8QBqgGhb7CzRF2M24VatAbMOgPQszRTAkSKV3I7I2RoKdfjrB1mYB0YYlJndlkMWM4UnYFsEIJGJXpa73e3LioW1xe8JEQ3I9WZ0wv9i5UGSaTBhi94Q1QFqZrv87HCU%2FWtlGp1l9U6B%2FURnwWwVgBXazfa7aopQzuR0Hg%2F7l0l23z2OGZ8MWZUXVl6f0J&X-Amz-Signature=dde946b0504bb0700a610a3f01555535f6d2ed75dbea31511af3d8d6130e69ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
