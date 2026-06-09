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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ODZGAD%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3WYURdbu4mefqDMwmWZdJECDlLFxJ8PKNCEQ94sv4WAIgSJiYq3vwPe8JY5jI7NEObFfWpFKvFKgp%2F5BYm%2FR2AlMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq%2F28hLwdSWKNDqZCrcA44xxmTP%2F8tsZUfMXtMknKlllhHSVBoG%2FoJBnAX0WBxkQDoZ11Xe6K7icZDg1uwSUsiUp9m0KFmr7nGtkAkCDw05I5Nef6HlR3eSZIycw8n%2FqxN%2FGK2vKRp1my9%2BVqzB3vmHAknmlMpieGXtYJ3Vqxt2bGlX4H7avvLbT7Ek%2B4CBBfnfHJ9x1yMhTAlGcFeyR3XTH52I5OiaBk%2BcuQLqXUVdjmuqzxB1ZigQfwcfkouqvD%2FyoN0hOJTcbAjD2NWRcXr4xPXDSE%2BxEvUbPojK3uvVwEyeSxLikThrsurEwHfVgz40BUMH%2B2l4gcktPo%2B3%2FwqyR5l7WNY1SdD9u2IolYF7Cr6T1DgLcZ%2BPcJEBWAHopMHYNGfmvhsurs%2Flz6pBpyTH16WyZ72kozrWwyCqv0uxl5PZzx2kw0wPU%2BZx26DhhWJhZ88Var9nuMyuEaZmJMNO4vvqfNgZ%2BdVTqJDj%2BphBPFqIPB0nkLlphFy4Bt7Y%2BoT3yfg7zj3kuteSSfqzgvuvebP5Z0w5XROsf0%2BmdihAz1M9%2BtP%2FIrKawBH200BzrmpSz9NKHgMXqO27oua5UJ%2FQwaUIkOEVMm%2BkAR%2FiLsfRRMLqErFZKflRYgMYwdCGogzuR0jT1jge06lQMPKFntEGOqUBflzltG2u4apHFLAVOU1%2Bg1uxdBrbwnuUNwRJbn6aKrB1n0%2BZFK2klJ9B2SdJZpOp5oKTaa6B3MXBa21gaYsjbtveMwN3ZCQDlO6pa%2BHppvoKwIUmvLbz73Q68e%2FJcQtQ%2BAB5tEKMRVoG5OaFZ4yKkd8skkVw2yfcDG8k2Qi3dsyp5g7rMVOzgAtH2O0El0IGmNij%2FVfgdaiRJliLXdvSI49K8%2FHS&X-Amz-Signature=ace868a8319f12854144b30c83cee54fe6177dcebb85620c10805189709c0121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
