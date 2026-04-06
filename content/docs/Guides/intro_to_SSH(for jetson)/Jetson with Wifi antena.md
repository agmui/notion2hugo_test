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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ5EZA2K%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xJIXcnMX1CYX7h%2BXW57Fh56xvbqRcaA%2BWpFJmM9C4AiBtGwsPQ3aZho2yEPFjQT2TJHG2uMbFN82iOTPVen1bhyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqSaWbPQlv%2BC7hRulKtwD3nZfm0BWTeW6SsP5dOFUuKelFS40EeykRxiSLMAgnvuovqbXtPVAS19GM5WqCAKoxdL%2BJlPDKfC9pUFyRheO%2FLYeLZA29x%2Bzi1NHMuQeQk0Ce7SZeoEW64k9yobuw2kywYLNJ9KW1Q82LYuhjMUy5ceIqz%2BsLfPUtJDYcilvPFmLuEa1BpdKS5uwTxoj5zoV2c7tuwXBzKesHpSBWdgQC5rI7OkcTR4vp4FRQFyQkWvvaJIjyPAIq1vm%2BNZ4F5X6otmKjEFD2ZnZL05Y2Yid%2FHF6MZ0obNUPKk2j0Vn8FUFG9qdusGtE1x8Hf6y5UbMU5bDDNFjF5j6XF33SnIC7LQRz%2BYlTSpYd1StiR7dOTXsEdAGh7aM2P3rp5yiywUv68o%2FC%2FFd3ac3GdYJnVBg%2F7afofJl8%2BRSRCKWYwbErU2RHJ5koBcvmh2IfagrEjbS2z3opp2wsxfh5yvKAXWlvwLsfJp8%2FXptPK8rKQ%2BRHQXG9g%2F6UUj861g59AVIsWwJytnntwHdrUcwAltHYd1QhbeA%2FngXlqPpDUn9Lc%2FWUJQkEFniNNOeSSxiDdTW%2BBTg0GDSsspoh75sjrZQaEly7KXn9foTMCxxBepW2mnPyV2MGDHUIi3VKkwxnVzsw9LLMzgY6pgGH3ZR1jQ7El%2F3hdp8Or0tOC1a9O%2F7nQJ1sxrRSRKkHyq%2B46tyJwP2NK24SG3rqCMFVgtv4VAtWdT4PS4I8pUX9p5XzZkkN5JQ32xEq0h%2FW3UiRoiXbWYoCGhAp4U73%2Byozd9JRXnij9U3%2B6MbUJ3h6ANGJ9aRgn5OnnUq4er4HKK2k8Eoop4wbqUfKg9blwDhdK8%2BtkwUloH0ZgrTWauZmSaaX56lw&X-Amz-Signature=a046db451d482dd1b9aeb765ddf26891888e0176e0a2eb56fd0d18cc8106adb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
