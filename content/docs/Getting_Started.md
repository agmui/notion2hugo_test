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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YTJ35J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDM5vwFnsNhyzGKX4TRA%2F3AxHZof4eJDkOmLxsv94gHFQIhAOAnywILueYW%2B%2BjHbcP8MoV65c928D9WV5ZIEj9Mw0Z4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mRbnC5uD8bjdGwYq3ANDrSlEKRR%2FoAKtDE5Jy%2FQCrOWORw0YJwZbydvCjzf3CCtnIcBdX1dSjhSr1X99Y%2F5Gzqq1h0x0hHHcuQ8NHrtjh14%2FMCRC7HviMwXxXvpLuSxqgFe%2Fs%2FGBoeMGX4744TdBnFLVLE6QeddLx9SIKrdf7BMGvhWrQgFm8%2B%2FLZGYMcR9O7xkRUpKhQ5sUCqVm9%2BdQIMVr6Eog5KzfIEsWBpVagCAhucJDtGv4vRiZoj%2Fg%2FVXf0pYM6UO1eYivHIrIMyWlTP7LiDO%2F36p8H2vASc5K1eX%2FOZ3ifmK5%2FVMYifuRZGQW04zNwD%2BC4vCluYtCgX1VNFa2abPawzB5STPsG4qcqRX0pgd06Z5sYKyW2%2FtOO4cXN8uQfSol7oGudTK%2FH4bjLO7IesuArAtPebNAJWZxu2ehIEVU4UlktgKxgY%2B8cqRt9dAvCWUW7lSXl0O8mUc7vlTbFIDDDhgAnxPS0kUmj8Jufb5v3gn44sPD%2BPc%2Bxn%2BRQ2YXVsATeXNc1Dh0%2B1DaFpImy22XK7VrfSSDP3%2B7MuCTfCxG6napcY1YsSOqu7SH6ecZMbTz3MYtY0QlRdyxjqb%2FvKh0bKrbXTKDDoHpHO%2Fum3IFRGuRPRzex%2BqK30pqFpeCpz37VqQngzDCyKfCBjqkAR1BnfJiIQdWIozC8tx4wJVZc4hCDLTLTnwo5w9RodOjjexoW7YqJk5GsqzUd0DGbBG26tXGgAIZoOPsvhjmQHoc0YAnWI2j8VFnIgRSXfUv%2BznVOMXa5xgQkqQ%2BBMhHGQbXhlCLHxftjeOiuakuyVWi1wnt%2FfbdZ9vACkRaDjYXnqIzQ5sgVVl8v097eOeTbxT9vWQrQPMisD0RhdxTNcRk3vtP&X-Amz-Signature=0f269bbf87e2df4afa8e5aaf0500d8e8c1a872756d4b66a77dcca47e4cfa385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YTJ35J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDM5vwFnsNhyzGKX4TRA%2F3AxHZof4eJDkOmLxsv94gHFQIhAOAnywILueYW%2B%2BjHbcP8MoV65c928D9WV5ZIEj9Mw0Z4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mRbnC5uD8bjdGwYq3ANDrSlEKRR%2FoAKtDE5Jy%2FQCrOWORw0YJwZbydvCjzf3CCtnIcBdX1dSjhSr1X99Y%2F5Gzqq1h0x0hHHcuQ8NHrtjh14%2FMCRC7HviMwXxXvpLuSxqgFe%2Fs%2FGBoeMGX4744TdBnFLVLE6QeddLx9SIKrdf7BMGvhWrQgFm8%2B%2FLZGYMcR9O7xkRUpKhQ5sUCqVm9%2BdQIMVr6Eog5KzfIEsWBpVagCAhucJDtGv4vRiZoj%2Fg%2FVXf0pYM6UO1eYivHIrIMyWlTP7LiDO%2F36p8H2vASc5K1eX%2FOZ3ifmK5%2FVMYifuRZGQW04zNwD%2BC4vCluYtCgX1VNFa2abPawzB5STPsG4qcqRX0pgd06Z5sYKyW2%2FtOO4cXN8uQfSol7oGudTK%2FH4bjLO7IesuArAtPebNAJWZxu2ehIEVU4UlktgKxgY%2B8cqRt9dAvCWUW7lSXl0O8mUc7vlTbFIDDDhgAnxPS0kUmj8Jufb5v3gn44sPD%2BPc%2Bxn%2BRQ2YXVsATeXNc1Dh0%2B1DaFpImy22XK7VrfSSDP3%2B7MuCTfCxG6napcY1YsSOqu7SH6ecZMbTz3MYtY0QlRdyxjqb%2FvKh0bKrbXTKDDoHpHO%2Fum3IFRGuRPRzex%2BqK30pqFpeCpz37VqQngzDCyKfCBjqkAR1BnfJiIQdWIozC8tx4wJVZc4hCDLTLTnwo5w9RodOjjexoW7YqJk5GsqzUd0DGbBG26tXGgAIZoOPsvhjmQHoc0YAnWI2j8VFnIgRSXfUv%2BznVOMXa5xgQkqQ%2BBMhHGQbXhlCLHxftjeOiuakuyVWi1wnt%2FfbdZ9vACkRaDjYXnqIzQ5sgVVl8v097eOeTbxT9vWQrQPMisD0RhdxTNcRk3vtP&X-Amz-Signature=cb6e4dc0febc6fba78d7b7cd5ca035831fbca0507229fbcf0ef207958f35e413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YTJ35J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDM5vwFnsNhyzGKX4TRA%2F3AxHZof4eJDkOmLxsv94gHFQIhAOAnywILueYW%2B%2BjHbcP8MoV65c928D9WV5ZIEj9Mw0Z4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mRbnC5uD8bjdGwYq3ANDrSlEKRR%2FoAKtDE5Jy%2FQCrOWORw0YJwZbydvCjzf3CCtnIcBdX1dSjhSr1X99Y%2F5Gzqq1h0x0hHHcuQ8NHrtjh14%2FMCRC7HviMwXxXvpLuSxqgFe%2Fs%2FGBoeMGX4744TdBnFLVLE6QeddLx9SIKrdf7BMGvhWrQgFm8%2B%2FLZGYMcR9O7xkRUpKhQ5sUCqVm9%2BdQIMVr6Eog5KzfIEsWBpVagCAhucJDtGv4vRiZoj%2Fg%2FVXf0pYM6UO1eYivHIrIMyWlTP7LiDO%2F36p8H2vASc5K1eX%2FOZ3ifmK5%2FVMYifuRZGQW04zNwD%2BC4vCluYtCgX1VNFa2abPawzB5STPsG4qcqRX0pgd06Z5sYKyW2%2FtOO4cXN8uQfSol7oGudTK%2FH4bjLO7IesuArAtPebNAJWZxu2ehIEVU4UlktgKxgY%2B8cqRt9dAvCWUW7lSXl0O8mUc7vlTbFIDDDhgAnxPS0kUmj8Jufb5v3gn44sPD%2BPc%2Bxn%2BRQ2YXVsATeXNc1Dh0%2B1DaFpImy22XK7VrfSSDP3%2B7MuCTfCxG6napcY1YsSOqu7SH6ecZMbTz3MYtY0QlRdyxjqb%2FvKh0bKrbXTKDDoHpHO%2Fum3IFRGuRPRzex%2BqK30pqFpeCpz37VqQngzDCyKfCBjqkAR1BnfJiIQdWIozC8tx4wJVZc4hCDLTLTnwo5w9RodOjjexoW7YqJk5GsqzUd0DGbBG26tXGgAIZoOPsvhjmQHoc0YAnWI2j8VFnIgRSXfUv%2BznVOMXa5xgQkqQ%2BBMhHGQbXhlCLHxftjeOiuakuyVWi1wnt%2FfbdZ9vACkRaDjYXnqIzQ5sgVVl8v097eOeTbxT9vWQrQPMisD0RhdxTNcRk3vtP&X-Amz-Signature=15737d03f06b5a2fe1ad69de8b324e4d93abe5501d5faebf7175ee010e054c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSDP774%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCawZc8uvGiwE5HEEw5Ov4k582S68JCfcnsw2SK2IpwAQIgHSO7v1WpZyXyUZ60YOaDlb6b%2FlTarW7YKD3nON6M%2BroqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVXtq0umgnQXlRoICrcA8MOoaOhSEqWwL%2B7Ow9Qd0yR3CGit18eSRsOnMYO2ELpjR4Td8Tk2y9mGBQ7m%2FzVU%2BLQu0GVb2C%2BMMxEd2tfAhg%2F8WwiEhnXH%2B7W6cXZ2wIS5ZaZCb2v9IDfkbkvJRPI1woigHqRTIuNOW9Mk75dDI58p3rL3cq9wc%2Br0fWuxfqwZDcfVC8jl50LjYW%2Bnyo5uOELxpD7eov5fYCsGElcR8mR9m%2BivRSn%2BGY%2BiaP5XwtsFy4vLqEFhSGJlf3dCqfWKbQqq9Z%2Bddwx5oAZKqHu735FnzqG5hDQo72ImjH9DyvnqKLl1k7hbxPT4uROo%2FFEaVQmLYsY%2F0XbTVRvAi3IOCdPNd7eCdFhsArFj4MOolZ4SkfRvHBOSo9tbXq5TA8XwnS2%2FxxNz8h3e2J5h1F%2FVKi6wyqxHDERC%2FP2Rs2djURy4F26EBULuVO2S%2BZ3BJAKn286wQ1RP6sMQEQ4kdbnTLWqYfWd6aDniwK7QSuy3f%2FoY5Xv9ou12p3Zm8JGCpHMnpZ%2FRQYVlDnVWO502CnbHAdxC%2Ba3jRCKxEfhNgmaGp2ddpXKs88NLI2%2F5000oGIBgUDz0F09CpLTfr1DMZhQ00o0wulgRHiV7YC4g6WxCusVRyx9MP8%2FWa%2BQeN6oMNXIp8IGOqUBxWYUrfeAiYGpq6cPdh12D%2FZUGY%2BawVmh24nnKGaMLfLCtYP2dtUqZ3D%2BUdNUT51hNjsvyZ4T%2B%2F2vUKbtF20S62PbtMt7fc7J1sC75rxunU8Wr2IKFUO1%2F43EC%2BGlH%2Fr2d0bpB6Ijc6mxzV3UTnyWUFcpanaeLBZXW3CU5OLqRrCPc9EE63O%2B5gwyaLvoDeiQtHV3lNQh%2BSufWsWI58TGmMNY7CD6&X-Amz-Signature=32a09d1e84b217097de387a5228923d5b50d972787494b2b15f1743db97b8fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPJEICH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCfTdCINmGahR66Vc3qa2%2BY9N2HxRKUS5gWrT1qc91LiQIhANCsWFZ0m%2F85%2B81VNcrbUC62jm%2BkeCyt5U0wMVX34H8fKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDZibdSw3WPTb1yUMq3AOhIkHUgIw8kbbgf%2BdYAWnda%2FE09Z7MU11GBlivhYovank6ZYBWZ1my%2BY%2BoKn1c2XLvQ3U4wo%2F0wOEyxLrCzo8XhV2%2FkTfgT41jiF42VNREjEEl0Q64bDzX1av3uM6wculklHJtD3n0%2BWfRHgjdEhycwg5Y9C5VfkrbNkraV54FINvaExPEVfiUdimtfkRrMkIHIqeuTrgs3N2WVMgygmjHY8lb359mGT%2F9HY%2Bcy56D%2BON1Nrmy7IcZkr7umE4BKnEVIweQeCLnVj37TdvR%2FGW1KfyYyteQ58Qiqbzz%2BC1E6qV5g%2BNTw7Q2jWeVfMoTprQ8FzNX4jMpTKSY0WHSWn9%2Bsdjx4BWQSeIFz8Y8RN8odcVYlmGKKCZ3691ietFnTFt3xld3eJrrGD3lgAfUSE2WaoNmAxLNnUAlDCrIr6QNK11DrKAE2poI3fqL%2FOqWKTt7W4yUz5RnQ3EIIaBWWYnIhzwTyEOCOL8Eie5E6nuDh8B2LIZ4VbXxg5Mq6AQfT%2BaASautGFKotzCUVEJK1OTtmzqc8SU9Lt8DTDAzHrDCxUxBFC1j%2BSWh4%2BF6oWubBEPdo5aGeoxAvMO4EN7F3rpo5jDicOaesIa48t%2BO%2BxKkwu9P6j5JVH0kZ1c4IjDyyKfCBjqkAVC4m8PGoL2ezyzSmw7qiYltCTSOpaTsyEKwz3zEHNX3L5smglZtJYDG0jMW4P4XC4geBTZyiJYmPD3qAhAa2rPHUAcJ048YInLIwySRQFghnGHFqf6YFEQTi2jfUjav23AczfHBHNUCiNdrv81aGTPxnr6tAiyEqb%2FFctLyCuIrjDerMTemeCy7LspMtzBkYLxM0IQBjYqCkfk8nJlM6mNxyC5u&X-Amz-Signature=5dea5b700afa160447ee7fe0cd7439a2856c0fe57ae4ed6e2b7bcaa04aaffb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YTJ35J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDM5vwFnsNhyzGKX4TRA%2F3AxHZof4eJDkOmLxsv94gHFQIhAOAnywILueYW%2B%2BjHbcP8MoV65c928D9WV5ZIEj9Mw0Z4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mRbnC5uD8bjdGwYq3ANDrSlEKRR%2FoAKtDE5Jy%2FQCrOWORw0YJwZbydvCjzf3CCtnIcBdX1dSjhSr1X99Y%2F5Gzqq1h0x0hHHcuQ8NHrtjh14%2FMCRC7HviMwXxXvpLuSxqgFe%2Fs%2FGBoeMGX4744TdBnFLVLE6QeddLx9SIKrdf7BMGvhWrQgFm8%2B%2FLZGYMcR9O7xkRUpKhQ5sUCqVm9%2BdQIMVr6Eog5KzfIEsWBpVagCAhucJDtGv4vRiZoj%2Fg%2FVXf0pYM6UO1eYivHIrIMyWlTP7LiDO%2F36p8H2vASc5K1eX%2FOZ3ifmK5%2FVMYifuRZGQW04zNwD%2BC4vCluYtCgX1VNFa2abPawzB5STPsG4qcqRX0pgd06Z5sYKyW2%2FtOO4cXN8uQfSol7oGudTK%2FH4bjLO7IesuArAtPebNAJWZxu2ehIEVU4UlktgKxgY%2B8cqRt9dAvCWUW7lSXl0O8mUc7vlTbFIDDDhgAnxPS0kUmj8Jufb5v3gn44sPD%2BPc%2Bxn%2BRQ2YXVsATeXNc1Dh0%2B1DaFpImy22XK7VrfSSDP3%2B7MuCTfCxG6napcY1YsSOqu7SH6ecZMbTz3MYtY0QlRdyxjqb%2FvKh0bKrbXTKDDoHpHO%2Fum3IFRGuRPRzex%2BqK30pqFpeCpz37VqQngzDCyKfCBjqkAR1BnfJiIQdWIozC8tx4wJVZc4hCDLTLTnwo5w9RodOjjexoW7YqJk5GsqzUd0DGbBG26tXGgAIZoOPsvhjmQHoc0YAnWI2j8VFnIgRSXfUv%2BznVOMXa5xgQkqQ%2BBMhHGQbXhlCLHxftjeOiuakuyVWi1wnt%2FfbdZ9vACkRaDjYXnqIzQ5sgVVl8v097eOeTbxT9vWQrQPMisD0RhdxTNcRk3vtP&X-Amz-Signature=4fe098d0979d890516753dd065c86642e1775e499e05491cddfd6aeba9b5993e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
