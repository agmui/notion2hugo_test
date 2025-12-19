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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARC4R5B%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCumlXIxw%2BftjfQUi%2FpovIZNQBKOYnLWIvwJFif%2B2WPgIgSW2uR9Zq6O80K6IdjyOmUlg2FpoaHxATQzkY%2Bu8GsaQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMvjzUaMQsHZjHEwircA8yL%2BECtu%2F7pg4vfRU1%2Bw7oP%2FoSXcuy%2BrbLPe7I2K42e2355pIxtBPhsj%2B4Lf3IvusEmq4tjnmj%2BF%2Brk5k9va0QoArAlranZkDaZafHLVcGRuMs%2BTbA2tlDYbYjNd4%2BV8IpQnIUtrfmmrp7OAQE%2FVVIrTOsUz6j2C73W0e6Oz6TZy8FqaTqmDjXBmFp41ZiX7t6qrxeHR6cTVAY42xVdMhu7SOGqJnyPEQKR1XJLF%2BjPJQTMPF2N%2FBPwkpm%2BpSRhfqbWc%2B1CIVVIRHqT0cNt6%2FQ%2FHym2iHZfL0h%2BrFIij8jmxsBOjvU%2FCJTMj9SEEAAP02CtW2XZoK3zdxcgyatu4PRYhv88xV6P5oAlntyXIy435cDQ6aTfBXlgH0PchbC6QgoTJ5OivSebLik%2BlXWqA%2ByD6157s5H8m5EzXeuJBLYxs%2BtkKLQ0AwxRTpzXofrcPT19YltLzvyXGMAkZg8D1oJiM%2BFCawcBoqerWHR%2FidAPcI7z%2BdPNsQsUfrdJJarnkTBpjYiByMRqy76nJM0cIreroOJq3BS5w9DErWsCpoLvhJoozqLZZJXk8yfXUGlcLHYnD%2BDssF32ZBq1YaVv135IsLv2nJSwlj30uuahgvCJdvbteTPKjRuJ3g0SMPbGksoGOqUBVbs8enwDL5S%2BTGb1eCJhGEHedk4xDMdh2FCYnMX3hDYUTpJ1CsfG%2Fsv2ppIJYR5uOUzCq3N7UbOWJ56KoxB%2BhHiDl0uLn7MxoN0lK8tzxRPdnJ%2BeUueq2amZ%2BymsPx4MOnk0ZCEnYaBcGwy94P2VD3ZhuclX1RABSKljFaia%2F7LLbJeBIKW5DRW57c%2FWYP%2FtdcXJFztI8sXnkYu89Z2pL43n%2Fq4W&X-Amz-Signature=30afb2c7f24c11218c7868ef14a951c3c2ecffd695fae6d9665669a726d4adb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
