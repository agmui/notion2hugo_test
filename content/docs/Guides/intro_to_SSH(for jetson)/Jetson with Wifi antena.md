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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6RHYKG%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQC%2FMYbUb0O0mJPtBYEQqnZEFXmkZ3Gi2wIMzDhIbzKlQgIhAPE5MLIy%2BYzhji4KCxk4TP2yCbVVhyxr8HeV66aMluVhKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lXAZ0jXuRPk3uyMq3AO26%2Fa2fFgSjJikZhbuAHsqLcp5hMvA%2F%2BUd7jEFF1qw0Kuj4TnFHQS3QM2aR%2FDWaBZJTxOUJRHimKzEmMS12%2F5b7fUi%2BVnmI9GMXieL880mkGUEw1UcNh%2F0y2LWEkV7q4kdpTKDpk3z0E%2FDTNZroaurTEhgT6nB5CzZDRyVE7PxHM07nF6FOwW60uYPQYY49ZrarUc%2BAz0DOZbGzWyOeIXwql4C465ku7TdC%2FKB9Y5eOQSLB1oHNGfRuewtRijMkRFofTIZ04j506IUBGcBzk4D0UeF7W6SJHKMlfGxUdSQHW1oo1NGmeE74bKcz5EcT8jY%2F7h3PGiD1UZ90ONY%2B8FcOMo5psSPPrPpQoGKWAEiszX4y1RfhvVchYpA3uXhCqQ2ZupJSIcgxTOp0g641GLoTqMHcGYDmkK3oh5oKknHAFug9gBQELhLum5UKBlXm12qyUGkXT%2BF7PFCvCfd21uOU3mTYJWReQbSqQR34mZS85QrFUrPB99h6r2UUBaa7xoOTDJVAQUaMM4zM9SvWhZw8Q7imw%2BCaxGGy4lHqRQRMe79zRqHFXTSib5rpZGBmuP90Doc2u3FB9cXn5WUq2R9q9lnSlVMb%2BEYhEb%2Fc2uNGjiLa6i6appXiYsbszC8kNbHBjqkAaU3udAwYJBaS%2BRnXXJ1rGPNCGsTpQ%2ByQsGy6PlWSMvPwKPu5DLhnvS6znXC050Vu7l6sUp5BLxHQt8RWWVcCpWzR3NdGoVyq0ZEw2qENdTxsEPMF0twkGpLmraY45BmIKI0T0VLBQ28BfmZGSyV99Jn%2FSHvOUQvs3V7LgV3tMQJ%2Fg%2BWpT%2BrlJairtRXSW9%2B26MQXfDb5cZQima75vh042PHymeZ&X-Amz-Signature=3082bc3b34c82de8825ec0b7691a0d786036b902f7e2a5f9cfdd9bf9240a336c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
