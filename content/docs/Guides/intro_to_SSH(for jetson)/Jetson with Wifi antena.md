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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJZ7V54%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOwiJip7g7ExfIcZ0JOq2SIUcixojHZK4mGIgBDRZ6NQIgEL7Ud8bL2LlCZGg%2BQE1qJAW%2Bv4nlptkqWJNM5bYbNd4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxgMK%2F50hZZJ%2BScircA5Gz54WlAtYAY2I8feqb04122tu6QgTw0sXhsfQ6GdTbmJ%2FjiGLd%2BfDo5ZcyFXYoGg8J5hLHQklr9%2FlUyDLpmbrGVDIEEnvOkjtqYnFVnaZlqdbogbwtzHyqh6pidoVdEz13gg%2BeHoaZoTIKnWNs8WeiGgYAEGOk6fvCt4RGaXS0reKkfqyOJJ5s%2BD91KTT5lb02EmavIb7aNqwBy1lURXDJK9ITL25mrAPAYs87LFnKHtYF8xxmFuaayKeV%2FTo9IHtUwzCRsbYSkaicJ5OSMaWF8fsUn3eIxmIGXYqfWoziW3D5XRXWwLzmf95U4Evsa%2BG2%2Fq9U5pWJx8aLCAW2ZosvkBf178pN8XsKkT5UmtyC5Q4SHWHTB%2Bjf9yXWIiFyxvMWFjDehCh9dhs41yqDVXVTxksFAu%2BB1L4AK6RNPtiv2qQk5JySV1yaXio0dYBEzmUd%2FE%2B1sNOvIakBSv8gLjl%2FV%2B5R5UA%2Bb9shPLgjMd07B2U9yoFxs%2FupWVt%2BTLGNRVu%2BXS%2F5uIsCh9QJU3hfQIq7GyAvBFPs1P52RMf0Hpz%2Fo8oE5gnrYd8Wy34OSeNjXW%2FSKwIn9bE7QwVkwZWrSJ%2BBiFA%2BMikE2YZdkckpz8FxIUFMpavFq3Z3g0ohMPXCo9QGOqUB%2F4k1cgliBuHoV4V9wE7VkdHhBFfFFhthOYbeZajxmUzgKXN31hztqh79ANW8Ns2UPBFJUXpCYb4eQRCnqVYH2UPkDTes2ajxH6%2FyWLezomPe3usnsHeLky%2FnT4IvjkKX%2FZwPfX4WvUmciEB5oCsjqfc3K%2BCBSPmJI0pN4RB38zbomiTxcgtwUcr4In7wrZ8a2HDjwlqg3L%2B3bRQ1IskkBIntB1uj&X-Amz-Signature=d09598e76bc6e477b714472b849dc5d6c2a51aacd5d69b9fb821c04b1599d647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
