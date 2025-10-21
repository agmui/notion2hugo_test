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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZIYAE3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDNASJGu%2B1OruPyJJfuxl5VYoAhVgz8SEi2ZHWeotMJrgIgPYv31fhqViPvjsUkbGfJ2WFfNSjhezfv0TcIllxCDowqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2opKhbJVKVpZsI4ircA7Jd3YTFkCu01SCsF1DNuCAPnPlN2xwqfkjd08lkwX6a1jWJMLDj2Fv3xMMQMV8VNEMK12XzE7m3ecTETFo1gELY4Gl4YmBeF%2Bw%2F3bRIdpIys8Wt6%2FwMZuXF6mNXIBFYha%2BHs1o%2BADpOJdy7skHWeytUQPvm9WZpjNqEVGL1BxFYIYGl2YhgKyHtTA%2BvuanrDYK8522aCULoWHVWHV7LfJY9cJRKGbRQXJjbl4RyCEF2hZWufkHvPSRan6cMrcIWBsNKhURGSFIaBPoxsAUo0TpAMFtRq8l1%2F29bfhIjEuSfN3RFCY9CFca7aGsaAUF3OaKwty5xMj6ReprYxmJ%2Bs2cC%2Fq1fXouxCCYeadP%2B9M%2F7sAhRgY%2FZMRjJNhXZTpGbkf34iov43eKjL4zEtPRf6LVjU55986%2FeKVPE3m3lGk%2Bxjg8EIA%2Buv2tE3xBadQeNFG9TB9jBbZUldBOJkFBghpmnhLWAWZhHFwtofmM4gxSM3r7DvyYJsB6KkX%2FYkKhexwhS5bZchRTENq%2FZfYLsVpi6rVu663QLkQtAXdCNVwcIKEX%2Fu6YY5rfDc1NtAwFVzh%2BySao5KD6UmKH9tof%2FjxU2DFB1Wiz%2BXaT1reqA8O5uvTUPQ5Bhlnm7R1aeMLqt28cGOqUBKk5jv5%2BS8j%2BowAiigN9CpwmG4Lq0faTjFN1cr0UxwGyTKnrj0uNs4dTlHcwCN0O%2F8rVOyFTsNhzuV3nx512D0sszV%2BUMAjSnfGzu5IVA6zhYolBVmryDmAJXHtelADJqH%2BRdOJPOpzAnyvDmdQjAmb%2BY%2FmqY%2FzJzadolJSyYwE3NjRs4jS3wvbTIGVGW91W%2B1afVeua3HhcRN21Gs%2BYluWnKySnl&X-Amz-Signature=1f6133ef967699f1ce7e1b5e0c012b8ae5572279262c814c3cff33a33db306cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
