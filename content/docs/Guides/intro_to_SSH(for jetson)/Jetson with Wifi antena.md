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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH7KIECV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIE7vxbFr%2BKiEFl8Y%2BmAJZbA%2BlcaL8i%2FDpMkyv76T4aW%2FAh8J3apgdFBojCXSLHKhAeISoIDQNJ6bfLMQ4zYwFFEpKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk9GQ75NI3BovY1dUq3AOUc54ZV%2FD0GdSUnZw7ms%2F7xloKrcPg4m1ND4yegwBR6tuqRvTB629vV4XI6IbeJH5HsJGH3oyCmPQtLm3gAZXQXTPJtgoOU3%2Fs2FIPLvU5ZVimT5nvSdCiAhwSicx3HB4yKOomPjffNV1kQXcrmZA8pzFyfcDC0bxo9txTeQD%2B8URQhb0SdVvn3Rf9bDrSUYjmmpcf2iqig8BBUln7fJLekPGWP%2BJ0gX%2BjZLrLfAFVyh0VclkuI%2Bbc9y0L0InhLp5iJMjRcAax2dcDkHxELHIaand9R4ktWtNagHpdoeZJgwyMr3a8n6A%2BhLBcs1%2B%2FTu8zlMmX1g5BVf%2BU4rquU99hATnhbsLM9QVoC3fodeVRp810XHPYUzeDMU23mWv%2BQSErnQK7MTBaC7ITtKp5nZL%2Flpb9cRSdtuBO02l1brTCpuVDgEJLbbvVaGKawJzwj6obuVHpvvVgilUw2heuX3uv6vJZYOkvgJ89nSv9TiCWuzkuka%2B5DZMPAWjmpzpcI4CkK3YHMOXgGZY17VkOcP%2BWdPd9Z5OgQa60r660FQECj0CkQlaPUahIQlaRJSJb2vwPWNEMV3ule9SljZXs4f9KvOgFigGyQ6ztAuecLKVQ8StFjHuKTze58aS1bTCwtsHSBjqnAZpHBZBuzEUeDMzX1xVGfNb6T7Sw6hwM8y2DaXO%2BZ7vkIOPXvOBXI8AzhxUH4AD%2BmF0NbTj%2FvrupNo%2Baa3vN88Lgr8oS7IHn49vtYmjwUe1FfpvJQT5EgW65c%2Fko2nBYYl4W7XD7Qn8sDNEUOyz95lLNcGf3jFUhG%2FCirMtJn%2FijhdXwQMl5qUuHJfolGngZjowyWFPCVJh0hqkQBrV1jh8uUYFa43O6&X-Amz-Signature=be507c3a30abbf9d49012d2ee2c3a574581d5b7bf6f06eee1f54258cc976a993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
