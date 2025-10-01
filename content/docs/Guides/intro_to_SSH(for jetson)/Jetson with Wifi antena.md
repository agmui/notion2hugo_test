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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJL6XAY%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBy6lf5ZeegajLEoZ8ebnLOxAZc5SzuPIJ7tn7unNoWtAiEAqLudPpz3K8WWiEZvLhMfEPE3ob15LLbUuAIEL2Zow6cqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcjagRybfYzC4KK9ircAyjBi8ygjL2U7maV%2B14qLmiavofCxuysn1vAPJ3oj%2BXfssw87C276%2Fm89WXp4G5HWxAf%2BHCsgx5yy%2BMJy6shmzcpqEuecMqJ3eDEIvR9m3Glbk4mWu9Kp82RVJPybskuPcw6GNzSHgXF3F938qUT5B5GeBS3wR%2BG1wVIYMUMthHKeDqXZvn%2FWdDPIYDh1fnIAs5RzUrq3dVM4vYY1eiyyX8xpqB9jt2JWMXuWhPijEBOAcJfIh25N4nQ%2BnRmsQjJiOmcOHgahXlKo69PsAzOXyOpiBhL1RwAJs0q15THnGYbz0NGyPGkF6ft6GzO4i0dhuS%2FnqDAuTMHJUCTjvrYiyqThEVj3uonZKGlBiCIceFsdPW97Gyrkvdq7MEc2B%2BMmUA8DZF37hG%2FK3BlzK6nhle%2BGWKa5KoOvNQ7z646CGWsxKmSJ3rWyh3yXFTmgHIo7zaqEqTaZGx%2BpIpSoQKUWp46IW0XUmrhFBf1s1ahz8GWlwmoeurNtPIhWBOnz%2BrmBks0UkOnRpGLjAyzNCq3FocCoXWnnez4PGoAe1orgEaD3a5PVG2p4Buc4WhMryXpFIZXXZTT%2F%2Bc29i8ev%2B5T%2F56m5Uq5URcqr%2FDncsgw%2F7iMdbbBCiKPixKk2VOoMJCK8sYGOqUBNfhSs5%2Bmooci%2Be6svBciH%2F5TIO63kaSsR%2FRUxWzRuSrgq41NvByIucfR6RdjduLMbQMX64Ie%2BAogPxBIK3X2rYC8xlO80%2FwaGFQ8K4ijLx4OVqz64sFXqTB%2F0uvM4PZik17Jhc34oIOvNpsa%2B4CNzbqPC3CAF8RVK%2FT2qeOxPRgiY8abOOc462UMGriInL3p6ejy6uNvZY5CnhrxXCg9pg6XvJI6&X-Amz-Signature=41b2786f596e9457258925880f5d6c1f7c1248877dcccffd5a368353a55d9018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
