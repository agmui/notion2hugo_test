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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TR2X3FM%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDcmvrYMRVF73RFbc3vgpRjnfiqCdLniO%2Bw4%2FuXtX00xAIhAMA6qma%2FJVSEs%2ByFTukkwJAmN%2BXO6K7zE4uXwnjrJzheKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeQ8T2Xp4KuFEgU%2B4q3ANHSDVU5EouAOdOJMCfnqpv6Cn%2BZUynwyzgIjeTSx5t5YcJAbxiGJq9mqns3cbH4ssXk%2BHEJ7uyWE6pbEZC3uBuMkGNjmeQ7zGLoT61BfZknIwu8lF6K%2Fyw5PTBMD6Rwqmh0BDj%2Fw5dkrfsoIwxZKKFk6Q6y73M7i5ard8qaQuzQeTKz0imLJDLBKmkyo%2FKMypCsFGKhsCw90t8UIofW7gG4dTTFn2FEm7Nk2YTT8BIKQQNvgdU4yuPCN3GDqWEotUp1pUm0yl%2BoghYBTI2Q0aqEuqLc5Tdjr6vPpTjefX6L8pNQelCNRpJaCc6mdieLgXgnKHES0ZZMYvqMJk59gutQcgCYS3An4bvdbjTvKmFQniDR1t5DVXflvTMTnEX%2BdivapT2FCof%2BH4szSTULnul2nP778P1cGbfDENY3McT8OG2S8Py81dLOlXKYTq8slHw9TcjOk%2BW9EITFnyVp8rnLQVfekkW5g%2BOgsdgyPgZ8ekWlgn6UM4fHlYKu%2BkYeUwd8Ran9y1v99zMUv6bRMt1cpM%2FtZd2IKDNa70ZXHtIeRwejYEZhuqltqnSlrgWdgWWv95P6mMwqLgPRmGHjbMOkDE3u7lP3UcT4xqUbeA%2BKrsJipoW7nyiMTZY3DDsyNXPBjqkAeN59NouoRzB3muCz8GXaoUERJJnsDGd%2F%2FVjeHnmu%2BRnXsv3FA%2Bir3J%2Fu5w6MbMzKW8Jzf1E4gvKwAH%2F45OKW2gmO%2FNOqgDxeOxeTR3V8oTuno0%2BjXk8cPb7i8NbOIzCUeIHE7IEZwiDwyXO%2F3IpS4Rqpaz8UrVG84yjd3%2BDtaIOKtD9YB9dBKDynJwVQUb1GnKImZdvp96ZaSjPFW%2BWUXyZvz8A&X-Amz-Signature=a528b6cf91ae9b688f8d70102e9dd4df7f3e1ce62cb56c64cb387a8f0efb7f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
