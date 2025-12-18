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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LZFOQH%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Bj7tu2WHjtMmeMM4SoriPvzorVqrGzyuob5AZNJ%2B3gIhAP0ispIqkfzUx0lNxhO81UpTOe5NA3ZUcxZoT0IwQz6EKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4vbCWBGIq2Qcmbpcq3AO%2FmcNWZrnZT8iVVUdUb5DVPoml6mt%2FoZx8g%2FBrTt34W6nYZThRYI1zhj5hlRmPdp1AUL4CsOc4Zp%2FdtTSQehLXSCbl9EKOVfIzegz%2FFIoU52SvU5R9vKVPQVcmQYVfrVenIJt2tx5As3ZxHVUKbVSYXoGP5fDNsx%2F%2F8DThO6VKCPZqfMjU1pEYTGCLFOJoPxHxkWbiigsVNxWAMA0xNCN98tSBag52HHiOeTTuQhM%2FycZTLT9vWd41jMkkkHMZLg3dBvp%2BnSrPXRXdkCOPvMxWjUwTjJQRQMj%2FkgUTm5OojP0mAupSP9OuyGUl4iznmPXvAhaNyLGfuk0lAIP5hF236yJHLSFY1sOsIGfx%2FlbvUXIt0KFQH6mkjVtpIQWY4PWIDkRurrbuk5YM0Z3L8NhmCJDOU2twSPcb7BFQexZKF1Y1jTHzfmbIZSzUap2iZ9Xprh4xvA8CVzOQxpbvce%2BV8Rjmh6G2unoM24VlCCkt1j104PkOUkv%2BO8LCrWKtlgw18GaU2wZ0x3rcw3XP67Cg%2FIPwqsb5G2QZEkCmWMC0wFRdvvYdmlrk4Z12Q2mMy8CPhvABIh02TO2AgRLn8cCcElttfWXUG2uJszS9Qoh%2FSnpRCvNpqXVcyWIeeTC7rY3KBjqkARhvXgb24nbkEVhc6VtuzGoMu6dxXZk0aXamoBY0dejaWDxLy7w9%2F77qEOEljEqyLRl3guGa%2BlrYT%2BbOvo%2BdITZVvd3%2FsQFnGVnTbf1%2BpsnuX6edCcAL854xnNL2d6rutIA12gEGQPrEM%2FtEBrx8cykhtvV3B%2BgDqlknL8%2FNFIFDQyCUgcFS4gYPGsqy%2FQsoOyHBn3PUpJnvyDtOLyontEWKQIKx&X-Amz-Signature=f45c4528d19466e7478d530fdc174a107c26b68ff5f53d8ba53b7bdf8aa31fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
