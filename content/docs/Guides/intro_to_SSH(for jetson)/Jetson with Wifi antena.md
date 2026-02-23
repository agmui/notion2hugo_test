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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUHYRK%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHSCGi1Ehw4OB7k248gUDuAQ5dY2wLJrIp67z07f10p9AiBCOseaeiOabZLhqwLxfXrvrJOzoYeIMaHUxe2g0KXcyiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefRco8nLgJJi9uuQKtwDKP53MGk0PNPODEm54BexbPyGK%2FiN4tih6OYyNRlnHghdtn15DEjTNbHE5E9uJ6kjVepcN7IAvRfiA8f9nqBexORGGxCz1UaYhk7wPPn5foMFwSF4IOU%2FAtIVB9VoL7Gf%2FQ3km0jbctZjYEUyLPTzJMufJsfh4Lj784fImi8rkXlZEwji5lHUGPVuEooWzEYXj%2F1jBVNS11Jv0uqxIaoaqTg4sXRiB9lGct2Qpdw7xAkNyfJIkJD%2F%2BaMAfsR3ptGwMm47evBbypY9Rm2kICNwwIP7FFLPxGsKFiHmOAh4a4iAa5TeA%2BlRvQajCgv5C3QhG6G4W8B%2FqG8jOk1TBstnnjwYHB7qKjksv9Z62NNAwjw1fPuh0pHeOefI3tNc7eqBgSqc3FTrISAZPwM2kqDcmsnyD5Z8CavRn9Du8%2FaoWaQKej%2F4DfjzwhKQtXEOPbjU5Qc7CRPUfr0aU4PgkMh6fnR9nQ93g4348Kxhnjd%2FnVIP7Mf50X8EYJ9SSWMsUzoBMLSLiF7BCYroEluHjkwLgvmizL6NDbwCYBblfvJRxoFrHpO87ZAwSxxkk0f2%2FNRyLvTh1cX2JdNtU5NkYGd%2FVWSk%2BhZkhRG5Isb8fkKNSZKtQL5kURao8iAzCMQw6%2BvuzAY6pgHAiVentayGe2mv9awapnKWH5hv2gEfDKMSxOk3jtk9jQOs46jFmIUQAfxUOB8NPxA1m%2Bglxay3dwKDgrFJFNlSXQncK1VzHV7bYhoZK7KT3R4aKi6QHHtN%2FW5V0%2F5Zdc5x49d8%2ByfWLeacQ%2FgtMx5eLnxTr4fBVETO4EsJee3dsp1gd2dm0xS4n2pM%2F46ECClXrDrM7QCoMiJsBNU0Sob%2FyXdZnKDA&X-Amz-Signature=034a1bfece0f27a80c94f874440d55346acb51ddc288c2deff53a52e8e483b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
