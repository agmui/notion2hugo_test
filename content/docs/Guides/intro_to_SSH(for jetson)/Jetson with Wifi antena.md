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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT7PI6C%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFMhs21aSutByzL8l%2BjV%2F5z4qajTz9F%2FEJx7yIQt85TiAiBgnrozgrU69lok834oMbniRwOozsGPhvXqh8EZ1DZutSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMk88RevsGZMi4DG2wKtwDHqV7mogpgi2DcjyibX82PhjYlnfZ0mh1Ykgmz7p%2BFNXHrfZWAaHiVeoY1i%2FpRGUiXJaVO33BNu9nPUGSlRTTgrkFPC8abwBIlRCjMfZV1N3RlB8fvN2ccdyi7snbYmgvXTjCErsK80f8nGOggpV5hTrJPDNp8C%2BvZ82NQmOfdRkGy4NZNUBK0yQJXfYEJGakMMEtk923%2BnTm7FbLoVuvft5dUk5hS52gnYYtCN2lEkWvR%2BPhPhJ7dnppo6IJYi4W%2FSVNd4%2F10Tuub57JuOyWUtxJtxBE8CyreRBTrE%2BOKjpwOkFtk1mG0dWi9832TxMHisVD7MDjEmDBiKA%2Fs9NKmNHYlm0%2BPS%2BrP4UBTwBLk5mCXpJofwj9L07FUNcCBR6Xjf%2FHHWcr3vhh%2Ft92c%2B7IjN0vFlT5m40%2BJQLNMHGLeAmnwuu5pmKaKUoMngzK8hr0GDZPHxoMKw6MWEr%2FnZWW8dZPEU%2BynXOF0HlxOTr5O9HdEJ5T194gyY4YelvARv9q0WinJTnpjA3LxfwHfg0%2B%2FtZov1fMCXp6iram0azva0TMP41oss8%2BVJjgSE59oz5ZeYm%2BubbEZfWTGtxvaTicM4pI9p0C%2Bce%2B1L%2FbOwF%2FjbW0xOTXmUoCRwTRPE8wrvTyyQY6pgEkEeBvYL%2BtnyPp7qm7ptexLsVyV4Q1%2FL65vpt%2FRwa4bRdbjwJmXR6gxVgzectSh%2F43%2FkyltcQvpepRibZkIGtVvffD4VSd1SH6xn6Fcay704QJe9%2BnCLpV8qbjkh9yV7kfrrVQvAZIrdLH7YXS8TsA%2FgTLGGDOpGByXNJNgFVT3ciMqTdgZ1X56nd4YXwjwCrxB7yUsObC1Lgy0TcijT9XO%2B3n%2FZrl&X-Amz-Signature=221456fe28da92d6e8c577d4938e2028243d9e73eab78b03cb82849db97740c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
