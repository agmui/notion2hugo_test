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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46RFNIZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwl7Ke6IOWd6n1oy%2Fcb53O1NzFrfudTwpxcMqpS%2BVZwIhAL3cbccC9MimZDjSM4exs5ecTJPWO8DkEVkn8cB0aHPbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz7%2FDkAZlDi5wYT%2F7Aq3AM6vS9r%2BE%2FP9IDehrl8lhO8mNvVqI5xRxpzLannQQMBqGSbsnMYKwHo96ROBLiJGZcyu4PlJYc2DUDzd06T2YWXPL1QTG0cOuD3ap2lb%2F5it%2FQ7dTXcSh9EvK9FtGGbhsw1p1APITVy23894yG7G2nQJNlwktoNGaHSADmzab7%2BMRx47s5%2BtqdXWH%2BAyJdYnAhtDYIyagtBvJGPxqFFDVtlDOfDa4ZtrjydI9ZBYTgNs5koS4Z%2BIwM%2BUrnypjXIHBTgAJ0kAfS9tFblu84F6w%2Br3IiRZbyTS3Yz7vtZSaveOEgPTXSdLZ5J1atzLaa4beDvulM09j%2Fxv7%2BViuhfFq7eowisea5Mj8xt%2FPscoEnbkYyTPvyLRuCCeU8tuEXWDaeQzMcwbLg4HN7I4trUqXRn8aJGreqgtLFqT3Mw3Lc1GVNWnq30iTCt3WCemWMeqmXnOQa1sk%2F%2BZy%2BGx7MuIVgW0Uw8zNit2CqwBPvI21LUU7n02TYC6zp75UoQBRI5e3Pc6yIyq3kYBTe4NS80gJLz6lnnBLvhSlejdh1BTNelziM%2BqDPibGj%2FsNVU1LqJcf1cFRzkfTiDo5rFgHHmck3sXvdgcDSvSov%2FZ2PPMtVwiJjT8D1Dj0MkGrOJZDCM7MPCBjqkAbZp0pWoLpd6YlHCzMTY%2BpSWpRqG7Hl5JD5dw6tcxaFUYkb5sdCta2Sg1KHVWDDOKZ%2FxFuZGYMZkRthxbD8fLdgv%2FXvwGF3bQdIa4gwh2Ay7WSzJ9O9tXJVo1lwFQnHQpiCi%2BCV3bc7c9jVT2ZZOGTiYqAWLUldxgliTtLsUfXyX44ZIy4h3nOtWF3Jy3VxL%2F4kcGn3HpJG34RnjJFOTD0cHjwxK&X-Amz-Signature=d63a7580ea62a9066060decae368d02e05a7bf1cfa9059bcd2b3a58763b8ca0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46RFNIZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwl7Ke6IOWd6n1oy%2Fcb53O1NzFrfudTwpxcMqpS%2BVZwIhAL3cbccC9MimZDjSM4exs5ecTJPWO8DkEVkn8cB0aHPbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz7%2FDkAZlDi5wYT%2F7Aq3AM6vS9r%2BE%2FP9IDehrl8lhO8mNvVqI5xRxpzLannQQMBqGSbsnMYKwHo96ROBLiJGZcyu4PlJYc2DUDzd06T2YWXPL1QTG0cOuD3ap2lb%2F5it%2FQ7dTXcSh9EvK9FtGGbhsw1p1APITVy23894yG7G2nQJNlwktoNGaHSADmzab7%2BMRx47s5%2BtqdXWH%2BAyJdYnAhtDYIyagtBvJGPxqFFDVtlDOfDa4ZtrjydI9ZBYTgNs5koS4Z%2BIwM%2BUrnypjXIHBTgAJ0kAfS9tFblu84F6w%2Br3IiRZbyTS3Yz7vtZSaveOEgPTXSdLZ5J1atzLaa4beDvulM09j%2Fxv7%2BViuhfFq7eowisea5Mj8xt%2FPscoEnbkYyTPvyLRuCCeU8tuEXWDaeQzMcwbLg4HN7I4trUqXRn8aJGreqgtLFqT3Mw3Lc1GVNWnq30iTCt3WCemWMeqmXnOQa1sk%2F%2BZy%2BGx7MuIVgW0Uw8zNit2CqwBPvI21LUU7n02TYC6zp75UoQBRI5e3Pc6yIyq3kYBTe4NS80gJLz6lnnBLvhSlejdh1BTNelziM%2BqDPibGj%2FsNVU1LqJcf1cFRzkfTiDo5rFgHHmck3sXvdgcDSvSov%2FZ2PPMtVwiJjT8D1Dj0MkGrOJZDCM7MPCBjqkAbZp0pWoLpd6YlHCzMTY%2BpSWpRqG7Hl5JD5dw6tcxaFUYkb5sdCta2Sg1KHVWDDOKZ%2FxFuZGYMZkRthxbD8fLdgv%2FXvwGF3bQdIa4gwh2Ay7WSzJ9O9tXJVo1lwFQnHQpiCi%2BCV3bc7c9jVT2ZZOGTiYqAWLUldxgliTtLsUfXyX44ZIy4h3nOtWF3Jy3VxL%2F4kcGn3HpJG34RnjJFOTD0cHjwxK&X-Amz-Signature=80f3d99a61ca1fdb4a6c2d144ed15306d3d978d2adf94b7c69bd1039ea6a12d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46RFNIZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwl7Ke6IOWd6n1oy%2Fcb53O1NzFrfudTwpxcMqpS%2BVZwIhAL3cbccC9MimZDjSM4exs5ecTJPWO8DkEVkn8cB0aHPbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz7%2FDkAZlDi5wYT%2F7Aq3AM6vS9r%2BE%2FP9IDehrl8lhO8mNvVqI5xRxpzLannQQMBqGSbsnMYKwHo96ROBLiJGZcyu4PlJYc2DUDzd06T2YWXPL1QTG0cOuD3ap2lb%2F5it%2FQ7dTXcSh9EvK9FtGGbhsw1p1APITVy23894yG7G2nQJNlwktoNGaHSADmzab7%2BMRx47s5%2BtqdXWH%2BAyJdYnAhtDYIyagtBvJGPxqFFDVtlDOfDa4ZtrjydI9ZBYTgNs5koS4Z%2BIwM%2BUrnypjXIHBTgAJ0kAfS9tFblu84F6w%2Br3IiRZbyTS3Yz7vtZSaveOEgPTXSdLZ5J1atzLaa4beDvulM09j%2Fxv7%2BViuhfFq7eowisea5Mj8xt%2FPscoEnbkYyTPvyLRuCCeU8tuEXWDaeQzMcwbLg4HN7I4trUqXRn8aJGreqgtLFqT3Mw3Lc1GVNWnq30iTCt3WCemWMeqmXnOQa1sk%2F%2BZy%2BGx7MuIVgW0Uw8zNit2CqwBPvI21LUU7n02TYC6zp75UoQBRI5e3Pc6yIyq3kYBTe4NS80gJLz6lnnBLvhSlejdh1BTNelziM%2BqDPibGj%2FsNVU1LqJcf1cFRzkfTiDo5rFgHHmck3sXvdgcDSvSov%2FZ2PPMtVwiJjT8D1Dj0MkGrOJZDCM7MPCBjqkAbZp0pWoLpd6YlHCzMTY%2BpSWpRqG7Hl5JD5dw6tcxaFUYkb5sdCta2Sg1KHVWDDOKZ%2FxFuZGYMZkRthxbD8fLdgv%2FXvwGF3bQdIa4gwh2Ay7WSzJ9O9tXJVo1lwFQnHQpiCi%2BCV3bc7c9jVT2ZZOGTiYqAWLUldxgliTtLsUfXyX44ZIy4h3nOtWF3Jy3VxL%2F4kcGn3HpJG34RnjJFOTD0cHjwxK&X-Amz-Signature=d8dcdc4d2bac8a0b9da0cc7478277647cfed3e8c1c4d038264ba6ba478f02a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMH42MU7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2cR64ikk0dP0cv0DtcHcfSM2%2FRBtQPBs%2BjxhLF%2BTg1QIgffzvUcPTqHgcjRiwno3hCzeIsgkscXkGDF7%2BsQt8eUUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAp77jNuiyS%2BIV05YSrcA%2F9W6k3a2yq%2BQnCQAGL8LvCmgyaxQrjHGZufNjUiFpb0xyGi%2FEDcWRiqfvTznppirWd5y%2FHggA8SIw54GMCJeyEXZrLNbEMvXOFjAhzT5XsHfLARJ7BtBKrQapaYmznDDP8ALrQp3yLekajdiWbWB5STkcDdmfC%2FezgMpB%2FpKoncqoUGkI9%2F4g8%2Bqwy6mP6ewmr03m9DnmMAgjJvlzosyVoBVEiGzB3CXMJY7oU%2FALjdpQ0ZDdOHNy3%2BOYA%2FhSZyDeoisttWE2GRcq%2FYnCwZ5E2g9aw%2BS0U6gl6dwLKtU5PkXT7BtuDIBBFecAl2LawPp%2F3EuIkyqpBfRv9gu8uIpfWhjaf%2F1qmjcFZKb0Rj403TtkOIwoq%2BWpW9STNaBo9I0PXqGBUgzQn%2FRVSB08U0ICZMJAobm4hs%2F6KequXUr3BdcumL5On7EllMZKH16jwJE82kwxVKeta1asG6NUsewOFPLUddTC5HOWW5nykXbaw2361uEL0chzbRMrjsdZ9zm4KFWo4kaa88ciWOwqiBWrTMTkOznXqTBGR%2BXFZ%2F%2FjD3Gad8XpXMAtBta4ZbSpPzWCa7q1U6jAeOkhEDLJf2TncVVzOAGSTXPuz8IqHx0vSLBGvd3%2FWkB8w3VvCXMPjrw8IGOqUB1AKtKIVqH4RtX%2BXj59YS0j9G3%2BbGmb7lfpVNXL8ig3Io6aMpt2vu2nBvwrQ5Sz0LpxMM1%2F9%2FOnzvrlfJ1QCoVPhIeiYsXGOukeTL1gVOU%2B8%2BTVGgGodhKq0N%2FhKc04Ge6k38%2Fs0BeYy%2BVM47o%2FgrrjTf7iQbK6ErBPvORSbynJNP0w4rtq81G7jHDcJXbK9l9sTgtvqHOY7Ak%2BAUz3T0e5ZHeZ34&X-Amz-Signature=0c389369033f3be9ab90cc0653b920037293e8956257e76bbb1aee99c1cb2ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VTDJSF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCAhk9yteumsNpg53eD0AZHndhW430RVMctUn03cs4lQIgT%2F5mPXzDGaswZS2SVDGp1bRI%2FnkOUa6FxZQyF6EFBecq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLZcUuOL5pL5CHpvPyrcAxopVXCz0NxxEZYZn7dMTkK2XrhOqW006EGb2BdzcXsvGZmBdjdJFqA0zBmGaqo0I%2BB3wYf0SP1rYvHoIPd6VEgFp0Xji1Lz7B57O4yvtqxIRP4zuq%2FJ1aPBV45EJRQr%2FouQMSaVZDx8ZBPRj7TedQKjWOCL%2BtksMbDTzuoy43M2t2Icb0EbmiIpvnK5EUmpeQj3A5F4kIfAk5ufnLq9srgk9wvJ1j%2BvOMK9EbPkmmG6RjDERvw5alfcv2l%2FSjTIkJsocUk8d1S36NLt3tFlkolZhIyCcCXIMvzZgMsBst7cS8dfuIY2n5AsqBtCC9NFAqCHduwExHQ8sI6oA%2FgFixlNxjeo0Uf5gAcoxkfohSDODKrwksTCAAoAZdMVG0INaFGtQopwrlaIdcNLQ9Us%2FqGQVKkPF4IK13Ou0DEUpACfiR5yWjlLCO%2FWfcMOMuIbTviDfbJW6xLkUdEvDei7QUtloyIwaFDzWIXCkzbD%2B2q8ueaQmTYQUIjHjrUETeOXWd4xe%2FyJPo1ymr32%2B%2BPxBijn3zxxPuYGSw4d8nNLX4Nx1eNZJ%2B%2Bpfe3hXSw981uITeiD1jCFoFFs5Hbqim8HBPiDMeMplVvQgqyjQSNFB7mj%2FKerZQiF8bV741fEMPrrw8IGOqUBgRN8peR%2B6aNRE9IpVR4dIpcyW%2Bn1N5nZVCZU1EOEPmVps5TjEbeOuG%2FX%2B5Tp6bnDDv4pGAqDFQS8m7T1e1KoRiuVZGvJx%2BUcQbQqtuazfIcmAge%2BkpyfLQY3ao%2BEKUZwGJBn0y0w1pQTr8PA8OWvWh7ShXbTuFgCkw3uJogbBUzWTlZ8URsXq0%2B0k9u3ZTy4o2O0XVZ1f21QzJtKxEUh%2BBr8PEIY&X-Amz-Signature=b17a91b6e707e56a39217058e7a820cba49b0ad77fa3e095c041768ae17b45c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46RFNIZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwl7Ke6IOWd6n1oy%2Fcb53O1NzFrfudTwpxcMqpS%2BVZwIhAL3cbccC9MimZDjSM4exs5ecTJPWO8DkEVkn8cB0aHPbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz7%2FDkAZlDi5wYT%2F7Aq3AM6vS9r%2BE%2FP9IDehrl8lhO8mNvVqI5xRxpzLannQQMBqGSbsnMYKwHo96ROBLiJGZcyu4PlJYc2DUDzd06T2YWXPL1QTG0cOuD3ap2lb%2F5it%2FQ7dTXcSh9EvK9FtGGbhsw1p1APITVy23894yG7G2nQJNlwktoNGaHSADmzab7%2BMRx47s5%2BtqdXWH%2BAyJdYnAhtDYIyagtBvJGPxqFFDVtlDOfDa4ZtrjydI9ZBYTgNs5koS4Z%2BIwM%2BUrnypjXIHBTgAJ0kAfS9tFblu84F6w%2Br3IiRZbyTS3Yz7vtZSaveOEgPTXSdLZ5J1atzLaa4beDvulM09j%2Fxv7%2BViuhfFq7eowisea5Mj8xt%2FPscoEnbkYyTPvyLRuCCeU8tuEXWDaeQzMcwbLg4HN7I4trUqXRn8aJGreqgtLFqT3Mw3Lc1GVNWnq30iTCt3WCemWMeqmXnOQa1sk%2F%2BZy%2BGx7MuIVgW0Uw8zNit2CqwBPvI21LUU7n02TYC6zp75UoQBRI5e3Pc6yIyq3kYBTe4NS80gJLz6lnnBLvhSlejdh1BTNelziM%2BqDPibGj%2FsNVU1LqJcf1cFRzkfTiDo5rFgHHmck3sXvdgcDSvSov%2FZ2PPMtVwiJjT8D1Dj0MkGrOJZDCM7MPCBjqkAbZp0pWoLpd6YlHCzMTY%2BpSWpRqG7Hl5JD5dw6tcxaFUYkb5sdCta2Sg1KHVWDDOKZ%2FxFuZGYMZkRthxbD8fLdgv%2FXvwGF3bQdIa4gwh2Ay7WSzJ9O9tXJVo1lwFQnHQpiCi%2BCV3bc7c9jVT2ZZOGTiYqAWLUldxgliTtLsUfXyX44ZIy4h3nOtWF3Jy3VxL%2F4kcGn3HpJG34RnjJFOTD0cHjwxK&X-Amz-Signature=e72921f000ab5aa871e0b187f9ee1b4d3bb759a716599e3e5e541e98c8a3baa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
