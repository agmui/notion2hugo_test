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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW6FQUF%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGZIU70bMp9Hx1DFhwvNeCTis4GrFoWQa00kwsQ9XmyCAiEAykfV4wTSP8hzI7OhA5OyDB8UvPCVZbs%2BXrmAjAzqSj8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIJQ7uQcFE8KkRQgsCrcA1%2FVVlUEXSlH%2BftlMwquL5rDfpkEBvFmnVkEr5wY4bM97LQEfZcyd2YEy%2Fw6ruZQ9%2BWjeWESgVGCKzTforBCAPD4FyZkL44wIQGOpu%2FF0Qmer3G1GrJvjrOhjs99VkAq0SqBGxb%2B8DATIU2ArTAGBtyRBpzLavyr4Ewa%2FxKy30obWJKfnKrdu0e9ic9ZQU%2F0ZH%2BfSpnCjkwN0UUwtVa%2BPUEIwZRZoajIwhuc6s6kDN5H2Djaarb%2Fcj%2F9UqlKY74rczoudVTILNVmV7DgfYsGH4MK3NleZCzAhgExCjKn56nhhOZvc%2FhYeyHr0Frw98VCq2ZdKdF2lEGtOcaBN%2Byk3VRsScTK%2FhF6gEco7OQKUPEGhLnOnuUH7IlI%2Fry645JcjAfRmZi6vrAaskEo5oxCPNYAMdLZiXTga1TlEsJbtUhss2uVe%2FiJZBKdb5sGKzTp6Z18LSmopPQSp4G2euR%2BE%2BrYns5fqOKlr9Q6%2FhaK4FrNFUNpR8TMnmE0aUbU0ZjmcJigKKy2f04ymTnSEYf%2B6Y93AoCPvPrLPfMbswGu1zXw5GNqcvGxbg1HPNJT4T%2ByeMMhdX7u3jPdL3B63AnzCXL6DczxPj0iKKRLdDfzoKKi18u1b5Nz6VREiLasMMeAocsGOqUBq8PLI2bXQYmooTxdJaUzP12vNVLJ3Id37rtFAjAAExbCDISriAwQmc60hmmbquC5DS7RR%2B9Z%2FSSsVDCfOhM8tevsW0sc0efigXuCKnjQAbWZIryB%2B4RJksYgHBGhxLniK40yk9uL8uhlcJUZEeNYas%2BblmNpkR2gV0Jt2GeqmTfnAhI4vYqYOonl%2BvOLsPcdab%2Bx6vx7TyqmpImq7Clr6MvvsV%2Fe&X-Amz-Signature=55e4316aa99a232cf2dffbc9ff76b1711f47d1ce5cd3f05e24e168fdbe31a4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
