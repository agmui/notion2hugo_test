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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZN7Y7EN%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEXBdlOFSnSIC5wKL2FvAAl7VgpAYx7lmrMN1ewMIXwiAiBsl3%2FeUu1tkLI%2FpT1cbiE4YJ%2FZFzeA9nRUGOerLLlZAiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgq4u8vSnR%2FzbZ4MKtwD6SJKjVhU0OBtkqjLl621Nf5mGraIXsWIIo%2BbJxgxi0mPyoEwLFb2DDaG6LvzY5WqxfJQ8fQAwVpih4hnxAdunGng995MPmV4jzAt3V%2FY%2BinIMRpnE%2FXG4AcISh1w4Jis4JkU9bF5%2FAFMThzJWovtMac6%2BNTMsZVDSz3mmcDx3%2F%2BYBP3MirJnNIEd8UqZEUIVB3onatYTuxyuKiDrC9uSnxADRX7vacrDCq2ivDfvxohyn5bEiExPHnF107qEkJb5PCJifvupPor8YVVqpwc1Z9ndmyXEopmTDhd5VMQ6xhPr4tdwDP3WJeyfXRgYvPcwampxEsejh0Y8PrsjBm1PPOigcODL3cwn2yIECwSKSXbFxknCaYemsvHysl2tceMqv0mNAPmiTCapQSivdvROHBiO9pRbdHtOUI5xa9oBxy0torj%2Bwbd4Bifl8jY0pfiWwiQvhgXGWX0caiIlC6f5MnkgOkjn%2FBGaBnZALo3A2%2Fok6gFJR72MzmLVPFKWtHgDd7kB18pTKtpUu13VAUGVnLeZLHt5KM8naczySF1tpRBYp4ttrmL62%2BHTSFQsB2%2FxaM%2BtzAH2r2el4%2FZfeHD5SJnmVnGYcivg5PLpkt028Mlo9Q2fQaD07azm5v4w7vmbxwY6pgHACzq9VnNZrqDrQYOqfvjTOUcnlXAo5NN%2FP4xN%2Fxzvgy8hj0ugNb6F%2BMMCRf80PbvqPQp05AGk8oOeWT3PiXo0%2F9DOnAbGz57JlwPrf381JaaHYbBuyiXMuKQo%2FhW%2Fy4qc272uvNSH8%2BcM1h6cYBY3EivjYKqQoxUOgtzFJrAjKKqAQTiB1PCe8YHHQHYtHyc1%2Fh1tq0K0VvVR3%2FNiQjyEyU41PPVA&X-Amz-Signature=ce9958dd99f0cec2ef433c4429cef256d5411cde018c155046c802fecac2611b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
