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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY5BSAQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCID%2Fq%2B2dON7lEY8WRyyDN%2BHrfSeJDMCcogCoFmmxgG4nNAiA94uTKX21geEpbY69nZyNKENdG6%2BMyNG9GatonXmOKwCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BUmxlNx9uwOA4Lr6KtwDvPAE3U1NlG85Sy0zSJeT%2BLXf2Bpk3%2FPu%2Ft3uusDKnCPHKSsMRE3R%2Bdp4dm%2BY0b7kc0dAoIE0YoDlt2HFSNoOz0DWFGlpEm2xxNzLovOQuwBHRDCxruGJbFm35YwkPy7DVpEHLD6z9Nk1rlytuuTViCO8ogK3FMdxn6f3LwqKzXnPwrl6KCU3C4GsbmfqPsbTmgOwn3TRe%2BQJQayccWgMhFJkkGfphLGwR27AEat%2B2XiXu53FfeXJv2JVNpRE1%2FesoN0c8A9%2B1930trOgi0nXnNwmhWX1Y3rBsUo0Vf%2Frl7igpRfC1gxJP39HuCvhc7w9WvlLw7hQ7rCmYkV42zgPxRLBjwGiowWWddBFyOggLiOMosAuvt3z4fXiPF%2FhsRp5ewhVX4BjihDc6pRB0orHMmoeZkdyMJtynJuS%2BzUJTjqDvKO9PT7ft2aUCF%2Fe54En93bU5beFhKcPlFaIrkz4B4WthHbzUF7GXOGBOMMd7pcu9fR6F8KI6zHNF9TnESCHNiRXJHbRh%2Ff%2BgJ%2ByEEPa%2FhTtB9mzjwBlDxSHXOyVes4t1M389yCYzfXtvM%2BiYVcM6vy34OqKzLmHo3SnlH9YUNGAZwKXpWadYBTk94w7knw%2FV1Uf2%2B642yBc3RkwwPqUyAY6pgEAghFfBgfULY7X0DAqunQobqYPzgm4plh004ApVbcLQVU7C%2FjivM8XxyBppigs%2BXEagIMar7KFf8bOCr1%2BJRBK6ulofde9H0VTHWNMPbEACX0tHhPjIIcTb6Tq54%2BECXpLjm8%2BlfLhKQordRQdQRV0qC0VggTptl3nqMomXTZfGJdXPWCXgDvd%2FepG8BP3JgYoWfnyc6%2F2fdwKHb%2FaNXPgMZphDeIq&X-Amz-Signature=ae7f66087ffc59db73b585e7f7276422ffd92cb90caf43d7fdf369b44ad4a401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
