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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQEGAIH%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVbJK9lh%2Bp5klQmN1%2BHbKGTKVFkVQgmzWk0NbHZzIgKAiArttujN%2BHeha%2FtkWFknjIOO4U7fmM4sRFh3aMBWzcX7yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMwQNes3%2FDut5d6ExfKtwDOMfhIFF%2F4y9kiFxugqv4EhHzjFO6eMRFoahLTQukttkEIWc%2FOn4sOaDkChDqRlRo5a0i35X6tta5d4jlmALLQIvcI7pseZDFFKGhxzxYre0Nxo4VttjC9JAlNtBqAh1Pt5KNjHMaqQqMX%2BENFkdOz181zaWdOjdReEQL9Dt%2FTDojEH3s34QCnMU9%2FkFB0%2BK2jVw6fT9v%2Frd4GVKX1%2FDzrn195lnLZauCE7RMGKPjmwPruQqOITabLXsVZhg4ijBT0SIfbjc7crAOP0q7yPBz1qKrlx5O390eJGmfOfwsidqlEYvr2mAjYsv4guQFciEqRDE5m0tbVKtB9UTVS6f3MN4SJExsEd1Z5h6xzq6RkeYBZUrbAn%2BUXW%2BwRV3AFjG%2BGsd9Q94d0xWiGUY9kVhqko5KDFlbQJceskN9ziOSkqLVmuJRVCvCrmoiZkki64ELKPh7I6Bq1j8AqltyhPfXAfuhYAnxOj7UyFdkLhK%2Bz0Edlf58sWlHJRy0vbxuFhuzP6GgUoKHgOnOVh6tfmUN1ThUQiNanDO6wVBgmjCyWVCKXI1K8uaSsuc8xrZCBdK85p2706nxS4nyRJwvNoQp6vfACmDY3gGoXaT0y2aKCTInKSE9KNu7rcQNlEQwi8uCygY6pgEVqCUZKDdSOjbSwBNJ%2BjOGqBH0FwKFA6fBPPFYa8OxIB1KHHfZdNYoSjG9aiygeaAe5Q0MFcre4yM9ahPtWYOhJstPjHBc6grKpC5G9k7MxGFNjSGg1IAUu8xkP9z%2FMfhEhmHzSQIvOgLfVh0IOFp%2FNbOTejZC0IeLsHpQRlKPrA1%2F0Z1q2uyICx9LMPK4SgX%2BexSGC1Wk8NI5viZ3LrpkGlzk4dAw&X-Amz-Signature=38705ed8effe21afbe0c34a4f7540af533fe559c6433aa9159556664309af82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
