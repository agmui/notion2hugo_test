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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQTOXLH%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FtmItHvct7UT7DEdT%2BGY7FmnuUadFZzG8qMytIwb0wIhANle2R6mqBR0LyFWvvxeVvUptOWhkbGPwL6RTNCF%2BXk9Kv8DCCIQABoMNjM3NDIzMTgzODA1Igwy8zOWt4Fgp5tN3iMq3AP7%2BNuzP%2FLyeobEasxHABLO3%2BtCxtCsfE70uaiFWzBDKqqvuU282xY65qv%2FNIP2HQCttJmRsrXUqVfrPt7UPEfflkjZz5Xqs7pdxqkEPnojkqNQeuu1LiGKWpZzKX415X%2BVRuFcprWGxuq7kv3Icj5IiZngjhr09GXU1SMr53%2F2BjruoAMixhD1gULwy5gZDKaBeWYkCBOxcobdBucT6i8bnHs56BwtUSrX7r6DyRLRUfzz93oc37ND1a5KXHgVuDBR8Il6Xc38oEHJswxbTasFCOgbdkNi28qW5%2BYVlVz1NaFL6zLFiFKYV8THX80%2B0sE8s3XTLvkLL9%2Fw%2FiN1DAYYcWXrnjaJCPvcQ7xRsFbCmTvVgz%2B7H13GxxnZTFM%2FbOCmIZU8qH%2Fw%2BXWLtxjBNUuf7U959M3LTFqWgunuy5ISRw%2BIJbN01lU07KXevNnohdAfNWm%2BfMZZViWDxE6HOXze4ctPSX09Tj4EvcMySJrc5fOJaIZDUtq5pHf5v%2BlF673SqEcyZlVOsiksrH1uJGCBWohdBCGVNz1tJW083OSux%2FhXvtzyK35o%2FUNRpbBEIt2SiemKlqjOZ0n%2F7c4eF56Wog8rf98rWke2rifwcNF83pzlBXLKArO3a8R%2BJTDSxsLGBjqkAcaJSgu3rxmLmO%2F%2BWH%2B4LO%2BmHsCtkE%2FSihJzxGfyLgTThuHnqvozLvI71brQWC9OgSk0WhembYUrFZoiKpM6PQYTMNnoTr%2FJcM4MmlNyxYLx8fANtwUJUrAg4qoD6g%2FNni7YVKvV5jLT0FkPa3yp7IGPlIQR2EzABbZiwcgBfSMmLB41Q8SIuK8Df5v0s5uhQMpkBE4pXDI2AkQwTXcFsOIfmp6o&X-Amz-Signature=47a1f19bf5faa1d542512b63b718c2a764d3c7749339be2aa6903771b3a89b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
