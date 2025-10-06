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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MJ3ZPG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm8CnpZMQBnEOM1%2Bz%2FtA7YfKX1xRazKU%2BWeykswk%2FbngIhAOgzQDFtptXTejxHhOGJ3cj82l%2BygTI1n5LL%2BWlglGYzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkra7gnJg8JStRzQkq3AOShIWJGBkutDOAK7N4x0jJ%2F6vo%2B7hG0pZMqq%2FJqI5fEaRZ81utp1MwdYmwDVoA18hJiUuPXUimyTUUwAZlF%2FWqLd%2B5UYr589Rtgfb2WWbhiE9%2FCPLfHZBkWMVCL864XKdTUyQEO3Co%2FCcNZBiQsPaSSPH41g6%2BLQ1Z0bH4VZ3aKucvLR8DKspEdpGZakyq4MM4k55roIzBqMXsYOaPcMgz40vWqYywSOV%2FPjj9ENBFWhqUZfUiFbMOXH4Iq5N17wzPKPfZlP4pv0LAXk8wnqIZR2jOEMbYlvcogqPO6Irj1HLea3taTEGayL9Xg2KbboAauPCemBlKsramkvpW7g3It0sZ%2BtW3yD0QB3X8ZWM98qE5tigcXTdP09EJXNv3pMxITWdTZ9GukJAk5v4syUKHT4HrA%2BRMbdtnMlNH4TrN0Iwi9p2EGsnV4U2955dnhrhCMOpLVRYNvu6NOFpAqklzlHPioPchGD8KgavKyd7Aa6C6r2Xez%2FPNEnFLQmxOCE3h5%2B4VfquQW%2BHGJuHCLIfFgu9xA%2BioESAiJEEDh%2BUQ0XptaFTOywH95CbdmZNgJ5jSiOzJXeESJOHepbne1f8clavlrCqyY5ePgAT%2Buog8xks%2FBP8QvetGxHZ6FDCulozHBjqkAdkyjM8zYfbjneqR41Yly2pHqHcA4NQC7kD%2BbO%2BkRpgmNCblE7iYYcvpleU2J575910vM7Ama%2B8jDkI2MeyeTUFoAOtc9w3RO8kf81cXXjTRY4zU7mtbImVSkG15xpKVXJKfNJbCbPxTezjY81%2B10LRPZH7uqOaHtnlZRYzgXdS959%2Ben%2Bjsw8jPfWRbDBQcRrHLsYT09AMkPNtFUTYYEWHN%2F4gg&X-Amz-Signature=ab227f244cfb06f92020b2e8430f784437c9f22204ebe7d6cd327e2ae11f33e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
