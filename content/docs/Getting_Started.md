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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2SK5YC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4M1tFqTt2vkM7Ini6p0zlnLTU%2B%2BonHKjnCXRpnZuEAiAvpc1BrU4B1CE1GFRxHN8fHDf%2FIQSG1Afki2m74MlHzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMIQYkba%2F9eBpLYacsKtwDS9BhFhOXgfrKGH6s04DSNPTFqeobgX4Cah5b3c6j6%2BvUHomAlfKRniXLR%2B7bJmXdXte9cR%2FaWlCI8gIyN8BGe7ZxeB%2Bz%2BcfBW0nbI0bpaReNbZYgjukgrumYLV3fiWRQlwi9P3ga3I4ldw09jAQeS%2FizBz1AsIpRGsranEcm1a44iNud4MZ%2BtzbiuWh%2B3J9WfNjb17oDwTbXfn16jeEXk7Pz%2BHLUZWeP9D11mmvNf%2FMUJFkSQAjvAhbwrqx7hjwKrFwr8J8MvZoAgQJxVfy9asSc5MbH29%2FUXJUZiMLPaM57aBn%2BhQXircdbXb3VXxRjC2fMeBVlX5zDiNgWkaORxlX8hKISukTaaNySmZNEH644kXCs1rBw5n9Nl0OkxyFbPoC%2B6aNeC%2BP0x3wEvxL0FwMgzM1HmNCJ7%2BiulpL2snrMpZi%2BuSSbTiUX%2BIHlN2dq3PVDYkiaS%2BZyoa7WhcaxGgFLt0TBh26SqrcjkBlngi2P063PMiBFVokZnXhA51fN6vijkTfa35%2BTD8XX8vU5T36pVMGoWg8%2FXCd3rAXGflmzC6E7WpD8WYFkWfyhHfeQg%2B%2BX%2Fojhksxz%2BoGR47wSayKiQ8lNsqyhL%2Fjaq0GnmNxHUYk4dQl7G5JN5xswyYmqwAY6pgFRRMnFwwMAbmVOo9K2eA83A4%2FhASahlKEDhZOiJYla76sRGfSNMgmRGh%2FwNYMuFlcqfZHaUUL9OF%2F0v3mT0jSHT%2Bqan0xeWNq7xt%2B24swDn1D6W2jawQDCzuXOm98MqZGze6xXIdxS2js2C3bJtVR2Ghlp6dUyYjpR6NuL9Yj4xj758VlxaYE6h%2FhkF3Bd3%2F32kWV0FSh4LBfdNpUnekj7EG1Ps21X&X-Amz-Signature=304e97caa704a9a1aa404b08be9da2e17254bdf6f16ccdcbfb5b936d9bcff303&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2SK5YC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4M1tFqTt2vkM7Ini6p0zlnLTU%2B%2BonHKjnCXRpnZuEAiAvpc1BrU4B1CE1GFRxHN8fHDf%2FIQSG1Afki2m74MlHzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMIQYkba%2F9eBpLYacsKtwDS9BhFhOXgfrKGH6s04DSNPTFqeobgX4Cah5b3c6j6%2BvUHomAlfKRniXLR%2B7bJmXdXte9cR%2FaWlCI8gIyN8BGe7ZxeB%2Bz%2BcfBW0nbI0bpaReNbZYgjukgrumYLV3fiWRQlwi9P3ga3I4ldw09jAQeS%2FizBz1AsIpRGsranEcm1a44iNud4MZ%2BtzbiuWh%2B3J9WfNjb17oDwTbXfn16jeEXk7Pz%2BHLUZWeP9D11mmvNf%2FMUJFkSQAjvAhbwrqx7hjwKrFwr8J8MvZoAgQJxVfy9asSc5MbH29%2FUXJUZiMLPaM57aBn%2BhQXircdbXb3VXxRjC2fMeBVlX5zDiNgWkaORxlX8hKISukTaaNySmZNEH644kXCs1rBw5n9Nl0OkxyFbPoC%2B6aNeC%2BP0x3wEvxL0FwMgzM1HmNCJ7%2BiulpL2snrMpZi%2BuSSbTiUX%2BIHlN2dq3PVDYkiaS%2BZyoa7WhcaxGgFLt0TBh26SqrcjkBlngi2P063PMiBFVokZnXhA51fN6vijkTfa35%2BTD8XX8vU5T36pVMGoWg8%2FXCd3rAXGflmzC6E7WpD8WYFkWfyhHfeQg%2B%2BX%2Fojhksxz%2BoGR47wSayKiQ8lNsqyhL%2Fjaq0GnmNxHUYk4dQl7G5JN5xswyYmqwAY6pgFRRMnFwwMAbmVOo9K2eA83A4%2FhASahlKEDhZOiJYla76sRGfSNMgmRGh%2FwNYMuFlcqfZHaUUL9OF%2F0v3mT0jSHT%2Bqan0xeWNq7xt%2B24swDn1D6W2jawQDCzuXOm98MqZGze6xXIdxS2js2C3bJtVR2Ghlp6dUyYjpR6NuL9Yj4xj758VlxaYE6h%2FhkF3Bd3%2F32kWV0FSh4LBfdNpUnekj7EG1Ps21X&X-Amz-Signature=12048fc34fd3f8f5a5007b33c6cef44dde18344c643f9d5ee4fd49e53e03f4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W2W5GTD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo66SJ5x6MpW9pyM79iIgHXw4GbUOVe8%2Bf6E1vsStJfAIhAI%2BXmM9mELQz2DPXqux4HKKwKhoz0TheCDOhyWwUmUZ8Kv8DCBwQABoMNjM3NDIzMTgzODA1Igxy2HWA3HdulFQ541Aq3AMNOlZknXi31j2JiWbPKiDl%2BQLiZv2lAINnGpi1rySNv1yvBuSnOGBYzHZyaqMnbJ%2BWVnqspUSLI5WazOidmpCmiPJW33oeBf6yZ2%2Bx2od5CP%2Bf11q1IFogF4OY1yy6ug1Ss5Lmm0MSCPGAgVd6PrWOVJwaCWgcM0EL%2FzbUqvS77zbMyYrAT0NnOfwhcm6QgyItDhPYoX6hYN%2FKbFX7fsKCB9XzU879%2Bs4OjVic74K0cfLqqURy1ijk9LGWuiiEDv2qR5a%2B6r00UfTN601kjfRKgTbQmuqzMlAKxnB75nnyIsQL25LnyMSbDm0IZ%2FHdyujI7BHSaOUscdMXNqvJVRf5Q0JWtPDOeA%2BlUAwcpHXlfZ3YVYWPuQFt42GLLs%2FjSvBM0cDTtfK7jDEml9U%2FVCJJsnX2trCS4JXEs6nHIjlEYSMnXu7GEHE5oYDGW75QLuFYVlVo0UoohN82XUIyswGKG3OzIhtf8trBI2gn%2FBzxg1supQZqTRzSRcHWg5%2F%2BbvO2dVg59e1ZPRUsE0h539gqI42MR6pNj7lSnpFiNhKWI%2FqtYxvKUnUaJYKHCTu6pvCI3KeenHHFED%2FCmp6DukCjvxGKrUgLBZQ%2FpJPG%2F0tJRmSwKkt%2BZvfDCoq1VDDDiqrABjqkAc8%2BvJW6FjVxCNgGr17OahqOcp42%2FF6gTrOo8N8In1axVi1S8hrBgI2CfNQhwYFS27USi7DWZP6uqJkx1N23p46FXuRLgGmzTuB2lHYMJUOTmSxxhnrI0%2B08qjn2KQW8%2B61ksaYrwKWH6wwZkUoDaLABakO9kwmd%2FPyY2b%2FZy7Qel5Pa%2BFVGgOYbPRRsKEUDlg%2Bkdg%2F0CMAoRXlhxjfJxCviXQ6d&X-Amz-Signature=9b2943f04a6494070ec3956d0666899ee6fee69e6879841443e64a6a880e7775&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAR6JZM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qbaMMhFKVNHmjr8G14lUTIuo9I2sTRRDSd6uptqoOgIgZ3eQAIDgzkw7IjCGhiIsO%2BWteJ9M3bJ3uxAmfbVH2woq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOTXdEvzwc3w59RPhCrcA8028LqpxqlBAXGr6Qkc9QgHy81r%2FAg77nzQBc0cZZEWUh4bpSrN%2FBsbkVZRb59ln75WwpgYbkYNIG5xJumu2GAyEjCCeMton7GK%2BbRPmrWufN7s5QhGERi0xfBagB%2FEYoIBmUaJjRJiOqe4wn9DhWj2NDZ8MhqAdyzEaHXwyhCw%2BPFlqdocEXPHRL4Zl3op0u7GHGMTT45dCqfSynXbWj4l7EB23RZxpf8%2B5UlasqQux2OkmivyZTzpN2bIT%2FedlNsOKnfaL5Su3iniErHYSEV67oAdLcMC6QnsfSp4Wa1AEHO2lrN53iWMV1xX4dTrloClKYmq2%2FPt1OkB0gfpTDElH1kk3tygZdvQn2ljI7O4gOeElMhq6x7BinBoH9jESh2RdSLtgFGPgvCkwd1UINmHb8SHi7jlOHZLxdbi5bt4eY%2F2FjLrVZ1HAA28P8GwMUFsXgCAEMQja%2B9HuF%2BprQlR%2BJP7cULZrh1Ah9jFm3gnWhszeck4owhZiq7bs6NGtPOix1OHll1DpAh1jBCBfvMChd%2B%2Bu0YMS5y8VMX2Ul3LNdDVI2KH22f3gd%2BVeNyJecBh8sF8E3GmWv8za8zeAb6mDgAoPWiu5sQCXAvH5DGo5%2B1kQa%2FXlhoMWYBkMNSKqsAGOqUB%2Be8Jhwck2Wi8k3jPtYaSsheeEA60NKYD1Y3CZZnWSGgVUWdNJZgnDvKkANFMzwEzGZc%2BnzPki4tLOonOfFucakjMkGhLUe6P%2Fx%2Fe%2B43yJt7o6DFFMttxFbUyS4USZsJsAFYHvd7zQo4KyLBXReXOScq%2BgmeQ7TFQPFLMUdbpESTDwY7ClEgB68qaU7Q5TkESfxRydZtHyfFZ5wdo8stdhp5G8PzV&X-Amz-Signature=903973989354a39b4fb554e7090aa50df828a8c0c65b198f9c9ef8656f2e1c77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2SK5YC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4M1tFqTt2vkM7Ini6p0zlnLTU%2B%2BonHKjnCXRpnZuEAiAvpc1BrU4B1CE1GFRxHN8fHDf%2FIQSG1Afki2m74MlHzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMIQYkba%2F9eBpLYacsKtwDS9BhFhOXgfrKGH6s04DSNPTFqeobgX4Cah5b3c6j6%2BvUHomAlfKRniXLR%2B7bJmXdXte9cR%2FaWlCI8gIyN8BGe7ZxeB%2Bz%2BcfBW0nbI0bpaReNbZYgjukgrumYLV3fiWRQlwi9P3ga3I4ldw09jAQeS%2FizBz1AsIpRGsranEcm1a44iNud4MZ%2BtzbiuWh%2B3J9WfNjb17oDwTbXfn16jeEXk7Pz%2BHLUZWeP9D11mmvNf%2FMUJFkSQAjvAhbwrqx7hjwKrFwr8J8MvZoAgQJxVfy9asSc5MbH29%2FUXJUZiMLPaM57aBn%2BhQXircdbXb3VXxRjC2fMeBVlX5zDiNgWkaORxlX8hKISukTaaNySmZNEH644kXCs1rBw5n9Nl0OkxyFbPoC%2B6aNeC%2BP0x3wEvxL0FwMgzM1HmNCJ7%2BiulpL2snrMpZi%2BuSSbTiUX%2BIHlN2dq3PVDYkiaS%2BZyoa7WhcaxGgFLt0TBh26SqrcjkBlngi2P063PMiBFVokZnXhA51fN6vijkTfa35%2BTD8XX8vU5T36pVMGoWg8%2FXCd3rAXGflmzC6E7WpD8WYFkWfyhHfeQg%2B%2BX%2Fojhksxz%2BoGR47wSayKiQ8lNsqyhL%2Fjaq0GnmNxHUYk4dQl7G5JN5xswyYmqwAY6pgFRRMnFwwMAbmVOo9K2eA83A4%2FhASahlKEDhZOiJYla76sRGfSNMgmRGh%2FwNYMuFlcqfZHaUUL9OF%2F0v3mT0jSHT%2Bqan0xeWNq7xt%2B24swDn1D6W2jawQDCzuXOm98MqZGze6xXIdxS2js2C3bJtVR2Ghlp6dUyYjpR6NuL9Yj4xj758VlxaYE6h%2FhkF3Bd3%2F32kWV0FSh4LBfdNpUnekj7EG1Ps21X&X-Amz-Signature=dd9e4805f4ab2716dc14966b4306656c76ed7466d482fcff554d8237c98580bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
