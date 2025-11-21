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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UISRGWH%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBTy1DOZdl21WP42qbmx%2BdGIN6iOSXjjmJ0LVFf%2Fftb5AiApsF5sdsmGFrgI961M%2Fm%2Fo2tdhjT07zfO0sysxLamW7yr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMPsrLWQSrukM6rVZUKtwDPDVGJhnTRd51L9AHG1IL1yamgWal8jB156O1m9DQiwrTpkrtkNo6HA4ccEmQzCnpJoYL96XMkn1JgU1AhUHtpjZom%2Fs1aGcMZc15pvdbEHn0D8kNDSGPVBPMca4i%2BT8LsqBliLIvWQ3A1OmlGTXdvHueE3%2BIjQTbVc%2F2B%2FFTYXdL801rjdwiTve4yCXbWcAehCYvdo6Gr40ZUQWntQrPqEQ93vjalP8gDKG4kjDumj4q1yhki1ECcAx6T1j8h1XQk1wbZKIfdTn4ABfVLQaYDItaCw06kkBUGyysY3tB8u5kej4fxf37YPgBMxTs4WVNjRSOO5r%2BhUT1bY4r5gFGFxKEvxv1o9UmdB6M1lyQmIg%2F%2BI3RWWSKH5ieGO2HCbhqxsLXNFLS%2FRQ2M691ST9ZYgAf0mjbwM0E5RNoEZQrACRmpHYrJm1zpya7GQEsSX4VaYCPLNisKH6qJsu7JjnBYcM5%2FrbZIlm%2BafjbO%2FSkJ0aKk%2B2cNHMEhMbg%2B3ZwWjdD0IF5ijP6FOKdjEUWbADDp%2F1X8TosL6q2s%2F47oXpD9WI%2BaRQGczix3laCq6PfnFyzKmF5RcYOgffzWZpzEjNKo2lTrVGogjpXjVDl8%2FEEvc3nc2avh%2FWS2tB9OXgwuoH%2FyAY6pgEmBIvtTkZ3UrDXWBYVZuX6Y%2F3vDpiWfFS%2FbxKofX4Jusqrbl3TnR2pvOSN40LJA7oj86H7UJaeW17N3RIVmSje38TczPiydaJA0dX5xKCmf2BoEO3%2BSRYRc%2BBfnz5CNBa4wvN9fhNVF1nwCPTpOHp0kX5Nts3foVESWctg%2BB3MnUxeMmlgdneKfySrGuAhmYil8OIEUpqLAylLhfRof%2FZXa6eZDCiu&X-Amz-Signature=1511acfce900a75399c058b0776481d8437a76298fea4712a4995a9b9ac19903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
