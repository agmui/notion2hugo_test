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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUENNUXG%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8tgfhUrV9NGTKhGKs4qhztoLMRBpkjBCZsAZtWHZXbAiA8qKXVFDSjSi3o35l43jJ6wj8nHxpFMAh8MCJ87u5abyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMnWRWl4NpkClaszdBKtwD2%2B0vw51A3AFnHe%2BUIdCKk9b7c4Fpl5IEXQt27oaZr%2FNugQg6cdzSsdtru1q2WJS4uxDzEQp%2FSoxlf1uq%2BCQFx5LSm3MQw3iQyiMi6zXlSNhDzlzNUV2sFiRLlUPNDJjpaVawAf4vMVFTScCaIP6bNupKApbVIS8xvQxjWCAEnHcs97mfB1Ge7ltNk4wFMssdj1gIJObvzH1OFMJSXdxO%2FkHSdz5muQiGfAqgaNuyvSeKpwgrfXa4%2BmDx4WYstlsmi5gxlb5ic5bdwHAK2H5PB7oZfzdpnx2Ej5YdDUmtMKVhFneiFdXpJ1V4ol5Rj75ywadoPFPTENUsAIxqDdm7C8C61CjgNul6MScRf7muQGwaqR7bRaWkmX9BNgmyLHvGYeeT3IgxRVVD9QypZOC2o6h6zDO03qbt%2BOT0wQIoFxWWuvC6TJVeUF2MR0pSLveWHFRoyRZzhAwbHQc5koHPb4Xoi%2BaJOB%2F9KSxtTJUaVfOVM3wTHNncwR02xTfy%2BSBe89rMOeMuFuE8htTcHHW%2F%2BbZ0WrYVV6bE4GcdWOJkRsRqIesi3spyW2Cfj%2F%2B1NGjhC%2FjLzAqMx4zreX%2BnXebV2brbr6oxcqCmaQRaNqUlhoLbwbdcT%2Bc3OOj7Br0wq7bjxQY6pgEr3WzwwpM5VxaipAEyKOWltuVSOVGveZZ%2BcxSNFN9C%2BehAZtHr%2Bqzsh4EU3%2Bk7h3zZAklpiJL454R2Y5VAd15u%2BBnLopYw6U9DOlI9aCmUGojiDbW2x0ouW3EeFlU2rw1Zfz8W3nV4NpCDjixsTKUUi%2B6CGBxJe%2BWdfkCc28YW2OB32LrrP4iSqgc4lMpqIqdStdsNshkJPVTGZZRcXKjFwD9eA93K&X-Amz-Signature=5813aaee200dfc51e50256767e1c388c6e20f95873bcdaf610b9a0a897e2395f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
