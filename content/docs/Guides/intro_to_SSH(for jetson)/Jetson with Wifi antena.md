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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHKX6JC%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAdpAFpe6KsVWLyZHlxWRXpEsSHhb9fVO88LGMt1bC4UAiAkgkG0OSG3g%2FidOkzb9yEzGLNgyBSGGtQx%2FtFGBALNwSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTykaMUw%2FamLpBeKBKtwDtc8EhcWCZa7XRVRerGP6%2BUDbtbjJuKYOFInBODVa3J39oSK%2BJW1MCveWCJ8WmQoy3NAtiq6EhSyhz%2B7L8zNaeWMLo1cGHclaSje%2FsOjicmEasz%2B7zI9ZiGFmFWzqrK6R2Z0hw5EYAV8htTkBc7QzxGW5jOIXL2teT%2FEyAsdem%2BO8ssAe2omH0DhIKXDfXo71Da%2B93kzCINhdIL18NWtIntAgrIVaWjczrGw02EzBGGEc%2BFD%2FdvCHo8NSdDkpi5TjkGsIHPeiwd92bVrwxsIr78nwt2iTe6KhcVZnEE0nj4keoQXa5VrPZoMM%2F8x0PrNzAttOQ0bSlMwCOpOZBKIpKh4pmXYzbxmmzfFOyuHOgFkbAi%2BTP%2FJWlKWQyGh0WNfCs7o0QexJ%2FewKFAXLUJUwfyEo5R%2BQg8u0DIfrWRdzt0gN0%2BB6iNLRyBNUdNmpzDofhIzKDbhtY6Dlrddj8kTk1dKBksyYIGg8%2BC4SkDummI%2BKwUymEPu0f1VSCMZvj6jki8SfpHDVAuLasFprVQQbsohV2u5KJf4c2%2BONn1Kd9ZSKXTK04Qouc%2FXUm74%2Bw1yRqZJ%2B6zFPmH%2FaG2nWZxBjQXhZhlNAyPa2ntEUHeGBP8U0sBQ8gM47fVDP%2BNYww8aA0wY6pgEMR6vJ91yZ0sTr%2B8w6B6ph8lkbX5OJCXaicl1ZhUB8Lk43QmRlvPIh4xt79XCFfGxM0Q%2BXUoq9YGFvCJxfDu5U4AnlQQmw4HmWFPL7Y3za4%2BXiGBQiIklcyQeNkOjvstfIufcRJNjpWDK2dVc4penQ3ENpSwuI98co20onA2lBPqNoDgMCbQHBFNyhOGk90CPISdQ576Kbb%2BjiGPDHBsZPsjp6r%2Fqx&X-Amz-Signature=5864ed2faefe8b8c811743065572f817d305e07f86b00e2952898479199d676e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
