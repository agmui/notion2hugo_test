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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWBS7CC%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHs7nD%2BH892BZfhK1oS%2BFK%2BIMZrZyEcIp%2BLQ1dkvXV5JAiEA%2BiwSLQmba%2BoLA03VByeINjS9gD3XFR1jtdj9tpqNU%2BoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJUNR1jndP2%2B9s2gCrcA7jiqVZq2%2FngrqNT1%2FzowpYiU05FiPs1mrjzjL63LAiQIBtS0fUkd5RZI7LDBj%2F17I1wiXLHB6sIaewAWn88k0qMIfa9IsTQglrD%2BobFJjsSpvv2aRSiQx%2FoUtl0RYEko%2BnaUP2v7wpjf9ZyauWwz5wSt20z9PXS3fZZRWSoysskjAZ%2Bgt5yAePMp4AixMwghq73reWCgAKQZwnyEkIeTtYxrMShXuGpdRI5JwvkcdHyXKSv0wEFITSSE%2FI62I4kRs72yj4fIG6d9LkudoG984ZECVjTIudP1v8kJjqSQnRPIBN02695pjYn5YNVbIIYgGhYH7pd04ezmY4KMFlL6iaV5ZnRx60NCIL2QUHJ4jBuy4As1c3ueQqCtXwHAiNyrzgGj26xmSux6YEyeg03a%2BHsFJw8N9ck0b%2BLJ7M0S4W3c9Ul9efmZgXmxijpcaT7vkFGGpMpxpZjYaBSNDCnC%2BPospGk6dUIMIpBCfCTjBPoxkuUd3hx54Mevk6xSBKhruKp7E0ej7jJeygxSeWJaBMzB216wqiSdVANddg3mjaACi5PcVXkAwN%2BlVSLSlfgxcucp3wUb4zHBIcoVRc3VLf7qzlTedGTfqHmmwxk2ZnLerVgsMKExZS30sPVMNfU7ckGOqUBxix7YLcdvJDQTgDR5lni5Ve19b2iSsFHvyzv18l4uaUBguOd4ZzUS1uoyhrXPfrIOk9X%2BDZUm2fvN9yKa0BocK%2Fj2ZH1QSJTTcQkcmJBklOGrbO9Slwosvo%2BT2OakD%2BRB6pRM8BmrIy06mXYiJdPCu4D%2B3mw31ghY1vJJDRAwfTXAyq39RNHTAjf4WyzHQglKz6PE1EMQ5yeVrbI%2FA06DWsFD%2Bez&X-Amz-Signature=35cd93a763e9d9c0eeffad4e4a708a18a8fa581503e6c3be5cc80b2ae88cac5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
