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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26HRYNF%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuGSa2oQWuh9GnHqJdMntSAdQhUr%2Fpl87yyGhso2dTmAiB7NzgZeyv3PnZPj8WqK3D%2BRBSxMf%2FYAX5ycubI7XMJXiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYfh0x0vFjyWKpK8BKtwDIBlESWDQCauYU5EJ05WdYu3gaqcUl3mJu%2FDtneNBqDYFO8k8nINUF0voTPG%2Fkq5SxoKfV28kApFd4%2F6r9HWa9NotqiufZL9LEiUwBJGdoJKUQw1p70IqlpcNajewOT4CFYoPmqiW1Phs9f04bpET%2Bv9WPYS%2BSqW4kpkeYHdEzd0ZO7QTnLYt65os7wwwrcZq56EcXD9Z6OTQ9dKiJBFXXf%2BhuvK8aOGTMSesucQYZpUcp%2Bm%2BGmHtJJxjAKBtH09vrwdwIdsoUeQIjZZN8fabhkIGiJBk%2Bd4IHR27JECfTUX5000PLCmoPMZY3LqZ5Ozesr3rVCk74LGqXDkXPxZxkIs%2FZFaBHyozxNfvQFyOQqWEs5gR0VZU%2FrN%2BOhpIGTTcrqacaX%2Fxm%2BnkevOuXbAN%2F0MIBWJNKJrahfLA0FvqC0KaN3%2BKibkyX%2BoVPGyeO0mMDmQ3OI9ZJqRJ%2BiIpbDfrE%2BwD%2BAC1TGO9bLMjmSVor8sNJtcUlbKr%2BSngsNbVPkhv5BCzHtx28SAAqMyHnXOqqnrdlz5d7TcOOsj1viDZEj5Ai8fDb4rAFnNe%2Be3WYGjbffrWkrx7Yt3dTxGQVlYNcx1FZXJdokxua54bR7%2B5HtBoQHvhvfLan7VC0FYwjKjXxgY6pgGvAOaCbQK%2B1ImN0ae90qkhGzrVYjyrWrkTGrS%2FLidSjpmeVopoE2i2%2BnapeXlwZENuRYAJGltvniX3DkDGJt1lRTglkj5cJAhVgUkfI%2FunZqGdsRQ0fpxXsd2on2endRNVdc2BEDSbR1zJHym%2BKS0Wg47dXu3LoZY59pMnD7W5%2Bph1kOtlksaW6JFliO0rmCVWdW9JycJQsPGfZVCWC0xg8drUK%2Bur&X-Amz-Signature=1fa6ebb31ffcfe935e0df5ceac7aa098863b410388d978aad82ac63710e70320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
