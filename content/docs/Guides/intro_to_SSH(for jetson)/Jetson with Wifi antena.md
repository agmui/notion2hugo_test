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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYU36YZ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGEH1EeDgn%2F7liYou7Ak0lwV5FU4R4C3i7nattxNs9ZJAiAgxxjzqOUK6YeIs1s0PUg18KLDOStmnDlJoTjdw0V6zSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJexgOREbJJ4w364%2FKtwD%2By8MXNhB6YuE5TN1HNogb2bXsYA9gusLPP3EdzftuQART3xtyzSFP5Z97gQUgtAYoJtJqyC6fjVlQ8MvhbAKC63B6giqqqW8JsbXA27LFWxTSwDQWked%2Fzv9cB4aod9G2cGxM4jKOV1lyROqy4LKTh8JF0Jh81%2F0hH2ksriJjYnzW00Mik8E%2FuWZXgsjiG%2Frn%2Fh2e4cPwToRksDs9gPPoH5Q%2BUp%2Bm7MmTwJgw2YjJEjEMBj0YFqn7Dl2OgJr2aD5baWAn1eRGdGa2RaYTsk43LQ9fL0N%2FS0zmaB8%2FI5p1TWU2YlQaxHDp2j%2B9wQIXQdQdRa9%2Bnu%2FzEpzSTujK7jjSegYhufevp4vYHLwd5xdiYlXWwbfEYyd3Ms4IZRaBBsgVK0FcHGWazdkp%2BGh9vt4OgX%2FCyY3jGQT8ddIwhQwviHNh7rxC0mW8ek3%2FnOB9ucpTJRiVbxrKjz4qrg6%2FusAWIPCpx6usQc86DSNH%2F6sB20slA24%2BtwThReJ4azXnWxJREmisU5uzHxV5WglUpfDY%2B5S3328pSV2yNxzr942OX4pz3LvZj%2FBSpzYGOcjoxUl16pHx%2BW2xsAXBFj6IGXvpNhwrTk5jTx76Hcc3ct5YmcdgxqPiRcxWMcIfKQwuLL6zwY6pgFXkcfnXyW8VukYe0x9PrvKltCrv85jVY6%2BAf79Yg4NF5ysGRlsaOlw1isC9IODGpkYkO%2B8loyC4s1s%2FQfz9TT0SabDR3Fm2RaGu38SdBwCBDSmC0W6P1RA0owX8ZNF96L70e8DU7PzZKhQ0TLlONB6cyouIwam%2Fo1VyTyb%2BPqYKwCgfiY4fh%2BoN7kIKbwY%2Bi7KtXfo32pmt6fGQ7BCSvirF0z6P87C&X-Amz-Signature=ccae87c15090cc52cac8d04e6b404ece40caac442a8a6cab2fbae86fd149ecfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
