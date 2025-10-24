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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7OURTZ7%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdnc455LlU9eYS0KuGP9eMRtmzRzvJ8xCRJBbPpOfssAiEA7LZdDlMd8F4E2GySeyXpSOfBw8eM19Ag%2FxCvBBm9C9Eq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAOrT0B74GjSpdYFCircA0lyoKglceq00RNE7yOYkuMLIW9Mnx20%2FrHPA%2FbfQ45kyTeboG4I3jvQ255s0ur%2BhtxmUcl6809Rih8UJNJ0r%2Fs8H3057apinEt6AFB5UlDqRxqHdNHixliEiPvl6ERQUPUB34ChireRDMH09DXrgFCjbu8YHGOuNsyrf09vG3BoVa3cyXxOv3dlP1hf%2FSqiw17lRmfHue5Wh81kl0OSVVA5QFpApL%2FGvCppjJnBVr6XlOw2i8TeXac5MMY%2Bg%2F72I%2BiwsF%2BlFjMv0zSSqDpi5RV9HUkbnLYJZDFZN27sqOZzQsB9y1tDAV6M6ajm6GEAIk97orF10MG7DE0KAUxbDUC%2FSxj7ZDiTvADXhxNdpnSnIHDb5eixru1vgIOGB3YnVLK86tgnLVXsCdds6TDBoBhwffHJcljkUq4Iiuyezn%2FBk%2B2dZvw2qO0siURGtK1BFV5CphI917OlfH9cQHNH3N0rhK4%2FSKfZzLDQNEzkNst74ldIqiqoYEYOh2Kd4IPCHLi7ZiYYJOBDfN6BBjJdzLXrb3BqFWKOTCMkZzI97PYF3EYBgNMXG3H2Yi1zK%2Fd3kOShjm6g4XnNCgxHnw9AhhINEwIhJicFRrR3IvF6rDwN1VMXmHVh4WUqw6CCML6e68cGOqUBV4a9tPq97FJ11KEf4m7Tt6nys%2BVpzQ8xHBy3B%2B5ilTNTKJf5aUvx%2B1m1gl%2FuekOyzWYsj3q9UodY9NrvgZgXcYQ%2Bma2xZo2JeoloZzOPE2NvScP202HfTUaOdTPzP8iyzzyBodudMdPqJvTXjWk8oU9JIzNaaey2hV8zY%2F5IhTsBViECeozgU82Kjl7%2BbX8cdcnYNegh%2FKBuC6rtm9VCWxxNVYAR&X-Amz-Signature=215942ddf418ae92e9b238543831a6ac13e23cdb9dbdcb5b25bd81731767fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
