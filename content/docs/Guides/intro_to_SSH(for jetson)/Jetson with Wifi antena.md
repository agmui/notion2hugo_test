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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHZQ2XE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDhW6jkpL7Z7evTpLfy16TQgFVkZ7m%2FSXnH8F9zfOdsiAIgeqmIDH%2FIpJtPCkmLHKLb9cPTrK86E332oJHICzdtJa4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFNyspy5QtWvaEsHyyrcA2B8Tz%2FG8ybfZMGUfQ9bCdQ1zAagri1FtBWoDvpBnD5BxVADPsoN4L9dN2keM7udQSzds64Lq0CEY8jCJLexD%2BxURldhlQd2vGZ4DWTfCuqyHaGimZc9otg0oF8pDuyiZaxDGwte0OvyNzgNr3RjlXy%2FJYhMGV24o%2B7FRiJv5A38gGMdtRvK%2F7N2e2S8uTZ5IUP8unw5pA8AAGJG1N%2FYtxWH4di6M9hFpydeCDfVmqJVIVGtTuMO%2Bz5XNpJRplWMjLzvP3RNHeeemwC%2FS%2Fxm01y6ykD4TYtNNTlWpO2p3TWeTgt7HCXPmz3Eo188XlQPvaTyz0CpOkc7awiEOwl5hQUGG6oL%2F4dTjexbG9LsePV8G6teYsf6JkpUzfcVkCqAkUe84ukkxlkebGLvrUBEd05UihnSXXM1VEGih%2B65rfpq6xXclfBr%2B5dl64yu3MP6j0b8m%2Fc1R919LrRbLYOICsPEBl9zlUVkCrdq%2F%2FM3yBaRuCdb36zvyfryWZJ48daDWcqiR%2BL%2Fys3B8a71b%2B8Y9Ek4NB9071IBqvbu5fmCO%2B6ziA9Ak1PAVWwRgZA3BN5DPCDLpKsd5BFupHoUuAVY5TfqVWYx3%2FJ4syohrRqtqUBdt7I1wJzFeUGYkh8zMOTa%2FMkGOqUBB6BTJ5maSoVqeOK2HvWS%2FVz7h5X7DA3waBhM7wQmb7nBv%2B19yXjnxR8tBNFTaYrn%2Fhpb4NKmFgIFuOI385b%2FQuuCdhbrRLzoPlYi3jEP5WMUOgvYzDCZgU8PBblPVnk4L0v5HZmZemlltYR42fYCYthruOWqcyJsghEsn5IaIKUqoiR%2BfVC6tbWBCmoCsaWfG6ylxdcauGFx%2F%2FNUNvooSODQmi%2BR&X-Amz-Signature=b8936c33b4ddf59a04518916b5e46af87b8f01b52bd1bd040cbaee7704f5be1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
