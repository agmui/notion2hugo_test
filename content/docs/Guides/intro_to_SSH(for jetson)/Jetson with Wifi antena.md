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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHLBP7RM%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFQHrZkVPP29MhQpcRfwVGGkEokncy95J%2FqORZibptNBAiB05Lw4XBqkx9EDRvsQl%2Bh%2B%2FmCIRR87rvQ6eTskKVJLPiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKq5r6qajgACAWMm%2BKtwD%2FiTTB7dNVR%2FnRqmLDHnrk2xwNNxE5uUULc4Ejsdip%2FrQJvZtJCq2f9%2FXoivd7cr0h74dFXf9QfZZYEbiwxiwrhOwqZbhJbLDLHQbGkqB4sFuKz6sqwGt%2BNF39XQVC6KbsYqsXCzeo4QKi%2Fi3vZekGDEh2YxxytCinLohM4MDQajE1yD0S7NFpJCu5NnP49dFD4Qiti29D1OSM2lIIyVWK092j0LUo1He4RGM3y3WvakAwpMGntf6PmMtgOt1YZG1cyyvsmpUrk9tp%2F4DeEZBmLI6XawsDenkUjhSfks5DrfZ%2FUv3BMMOXGGgFlQmVSWKfjuxyWdxPDgHlFqO%2BOgeQGn4m1QyMlbXlmhtwD421eh93ALsBzjYZmOvFp6SdkQWTIeiJG3A8cnXTFqTaMRCtGJmgUF%2F7ett0pYVt69ey9%2FegkUT6qVXhnwccgKiWmWgpiDL5r6eyEmmHYAKRxrNMSBwWkXO5XNQ4Jojegthy1lsMNLtz0nZo7qrvmkCn8KCIm8whfeJ5DHQfURmPzCKStNouaCl68F99eY2Adw5AyDvpIfGtDA3fhPk8tueA5cdn2wyK%2BIT92H4mxtnG3paZGlxFSyZL8P9cTbIZUT%2FCU8zdEh%2F8g3M6X%2BP6jgw4%2BmWzgY6pgHZPIvSTGi%2FbEuhpfU5og%2B%2FI%2BR%2BUZmWx3tgWe%2FTlrYRDCxNIpPuoShucF5F06aDYkhv0HmkCMeAGUnzw%2FoTyvrAJiLi2tjvlHjFTK5n%2F8JVVEkV9L9bgRjiHqbiFZpTMgSgxIiNX%2BogNWWo%2FT5ABsv8XAxrhKQxzfLrdPzKX5dJI8L5dgGF7ozIzLvFgnyM6r1rf4Ozffsg6%2FHxZz%2FkaWLutWCfxH9k&X-Amz-Signature=4f9812a21e4c90b9ba18dfca6ad4dfa0c387459c14fc8131b5e15a0de6c2dc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
