---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBUAW5R%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdamWRvGzWNPPao4vHLrmnp8nxUXF8UsZFI%2Fs5U98coAiA5WZAvOleGhSr5QIcFVvP%2FAbyUkNTdc76Sf4JcN1KpYCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMosj%2BZyM0%2FqNTJX%2FsKtwDa76k%2BNiXvoxYMUQxlIgO0Qqbg4Sv7oPL61cB7oX7klX%2F2zHsnWO14rLIhQhsbOndBVAJBFO3kjX%2Fd8vkMXAEsGdUPiWH6SeTFM6I1yEtRqvG2ygvvXyHmXQz%2FmotLnp7t7rJjrJz%2BAxJ0JItrvYDPEDqrjmV%2BzU7CcVivgZkODDlZAw9BSbIqyE%2Fou4L6cD%2BQgZ6NeTEEH31CYBbLtaqD5CBGNYOExPT3CmfDLjc9B62Z72x%2BhYIoDSQkxpxMAVwYDu%2BgN6n1J%2F6%2BgvddtunH7v6IdE8BPOlWGV9Ie8y1y7QhyzXZlaRwE4FMRDoohiWmJnc1KjVu9Xh%2BaK7yzTG1WJqgPhooV7ILaSt7Faa9LiwPRd6F0pAxX9tBW6AOcezj5gd9H3jjPPdr%2FGRud%2BsrL4SRF4soTjr%2FXg1K1m8K43adh3%2BTSLSFYTW6xaOMuWEGL9YpCD6PnpuJ18tg%2FHO8ZZ%2Feqr3nh6A6JN2o%2FCOD6z%2F7tndi9b%2F31dhA6ta011eA0M3CNhNd0FHPXgT4AiVJ0OTtE1Yc3dh8N5zTUFmZE00B%2FO2JuaTNX5ZidsXbXmm89%2Bsk2oG16fDiAjhjimRxq10T54ZUle%2FDdtSEC1WlhPiCKHQPLLDdc43lhEwg9KT0QY6pgH92%2BcCPNeQ6FqwiG7FR1QG2UI7jaLI5etUYU5NpjQuELlGZ2s4YXDiTD4fcS2ljSr1LNR6WdjfLOu4vdDjPlDvqG6TvPsWCW6bC9yQtCUkCTQ0FCQHyJp9uXv99dpMmxof%2FpTie3xR1B78HgVyuIkawNOSOXlMsAehfhE%2F4Hi7RJEv2Clkzi9fcYF98eNa68A6S%2FlgkKZ19CX79FtkquGDzMwGPjVn&X-Amz-Signature=d05fa45dc1cdfdbb316fe58bb8dba7209d58b639fb7d08572ded93c9ae8d2cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
