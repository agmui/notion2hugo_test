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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQFVZRU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDDJ9NNMj%2BNwpn83k0IUhXaGAkU1Z5GFRjVstMn5anazQIhAO0CPvO1mbHw%2BnfT8UIYy%2FxKTFQ9%2BYudNuhafJyIGyFzKv8DCCIQABoMNjM3NDIzMTgzODA1IgxrEueoAwjGaoNovN8q3AOCn2cM0pTjdI%2BoOiLak2avwSj%2BNRlg%2B9pKeFgWQFDnr3%2FrGYQnUtl%2Fe0Haz8RBY5CoHw4E4dOj3vD5EoPsbG99LEAHdpVdB2a3xcd%2F3e4p9z33Qpe%2Fyb1FS9ugS7vrFHTygxUpBNQ7TVM7pbkajhxjYmAquKS9nL%2BDzPLKweAYX7Cw%2Ft5PBzHb2H%2BP67Slgss4ToMwYs8FJuVQ3Lu50OVnZ9%2F%2FzDiXBf%2FH3TkKWinkpa8ioT2kShfCxmXNv%2FmcVU%2B7dJ5pQDrvplX9n%2Bdmr3ZyNIv5wKGvSuX%2Bgj0tZ8e39WABnGFjcAfkOLEkxhdok9kSlsTxh%2Bl9hbKdb4bX3JH4C4zXQ3TFjGITdweJNYR8g0oR5YmxMyT0LTCOc6rKRH6LyrZqgXskRUE1RXasWmHMPPK4nitFtQ%2FHzsHh8Dol4ilQhKXIAshZzL7C8AEcHqgLaxM0YiEPyAPvbnVibG34dvImxHG%2FvOdf9hacS%2BQMtaTHOTyVk394X6hH9nSxPhA6IeGY4U5li67rZuxcGTRN3k5GVzQ5qHtFDImP%2F2ZagW%2FI29L2YopSxBDnY59VS4bw7K%2BwfYFRCG%2B%2FAu%2F2aQ44g5HZgUHFbZoFlogG%2FpjLl%2BuJnghHkHZuIGqogDDSlL7JBjqkAQRKWUhT6XoQyT3v9k%2BFk6d1%2BL5%2FmIsEC3oOg0sqJmDwtUVJbDYA1SK7bWaIH8sujegeUTcqBy9qLIrki8w9a4J562Kb19BNF6nGqAQ5%2B1nJPXJlLLWQJ6Edpqo9FclH2C0sS%2B0RPWwZQi5fU9v3mHxxKtKyOxYxqezqo1lQN2jYrI0izYiYSGvZvh5lcBMC0rSxVxeymce73UxCJwq9vWveXUvD&X-Amz-Signature=cf60e89b2885e957e675426929331464da16c67ddeca1d787ebc980789f0a5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
