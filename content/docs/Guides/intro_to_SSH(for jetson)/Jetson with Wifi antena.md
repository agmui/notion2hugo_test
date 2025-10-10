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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJP3CKZQ%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtjEJSeE22TQjo1V5xbPpPOsPSQsefeYu8JPO7EUNHIwIga%2BdREahB1G66Ptr0f%2BQ0WSTL5f1ISbEwtJvhF9X0hrMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb8MKzCXz2K%2BUj6SyrcA8AK201dkrvXvUA%2B31szkNM8lzFviZdsS1bUMeMtJnz%2FrEgy%2FKsMGEl073VQrFSh6pCn3ZIiS2y6aLZUYwcC2jCGLJCh5AUK4kQWu3aX78gUIzu4PgExpWDoa8QNDW%2FOAKfVmpFl%2FEoWRDX9PmchaXWDtwglx0TF9oaurvwUDrrAL1YBRcKjhFnqdVQozznUeO75t%2FrEMJzlPEiBvIvobjJOkwtcLrBBp34%2BUUi17aXpSgzuAHHAY4Guf062J09ddpwvaohDcttnvPZ13ZQEz4rWigdfkmhPSWgS%2BWbl9R4Q%2ByTPK3KVlS6GtQW9LbvyVdhXcHUfc4dpzm2c28uNf4zFGh073KfVqarfWIpgnkFlRA91za45F%2BjpVS%2BTpbcqwDtNdo4xKtLoqaQH3IDP9Dgx4Cs1DpYaWul8CToaiJXCZykgLKAX4p37g2WGJKGnz65sw1qiqICp8o%2BabCldOH3LbLofm5WgR7daISEWP3fu1vHxrc3HDvQFlmP%2B6A5NuMObeCrgiFtjuEjpEAQ9PYVfyy%2BQdN60HkQEM2kdhZ0acRdXdAHF2hUzY%2Fx3PstRyfla7LMHUEryjoLqK9dgDum17KuQT482Fz1AiarQ8AClKgfbuyGnLz7M0zHEMNaooccGOqUBZufnK4v35qJ209%2Fc6GZCSYSrHm%2B1fKVapR74ja1cEnNpB8HMlW9f0t0qkDpcMohsRsS61s1dIEhSH61KYN86KE8MNq3MnECnAnKY4zitwDNgq%2FtQxJzcC%2BxBP7kukWLYwSAgLrMS45XjC2W3iqmtjigN5DXTIvOWCz1XhD6LfEmFEfCM0P6f%2FAztFbOmFPXEEYsHdK%2BNz4Iqsm33HTeF86GCFM%2FK&X-Amz-Signature=72fac9574a486e18a37906cca34a06f671b9202ec7be183b35a9ca99db253c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
