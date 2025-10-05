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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T4NCMI%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVQnbZdU0tFX9AcNl3IZRL%2FS70y7NMHG%2FkvHChIBQ3HAiAM%2BuMX6alBpXbBiPIYWIBMZXqCRIkv8gKpbAIkD0SjUir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMk8XzUTtsQu26eIPdKtwDbrUzq9oWcs4SEoh0aZBYR5AqyPYAkHfJcTIRD4zaZrvFlcSiJ2nvXkSeXsn0BsKT77ug6rVqoXJkSTIzrlik3yh9xMGr8FAzouMVYz6KZG4JSreiyeEdkoCn3onxpsXfyLm0tK4BZquxS3pzhJ04iRlRvqdRvphHUUEfMieR0PK6iJ06K1GDpzSJESP0rys%2B%2Fpvog8YlQ3GLrhSJ16clIRJFhfH2dhZ7jWwp%2Fih7ZrCfAHc690zH7jHpuwldgeokpjx%2F1VEAJFWyFHmKXlb1yy3qNW0g7WaNhM%2BnmD3DHmPKbVFo6Z18ImjJh2l8pyAf%2Bx6HVDzLEtWn%2Blq5UUj307SB0tOeuQBCcBv5%2FDWtxoa45%2BbVpLKLOKjhfelvgeVleqJ2oAyI7oWKq1McUuko%2BhiVLQWEimm7mhitZ9%2F0BMvE9B10tPFqFTcqWjAQy%2F483mV5XB7wh5iHTJJCkgi%2FnjmsPARk5q3RI0w%2Bi0woK%2Br999dhZwAFVMfPzSwc2OMeHWRaFrKdHXIUuaXkuhEH9ZLZxYIwxW048kXlXdM2S9CW4VeDYXxgFEfZ%2BDoa2l8shyDM6aTv%2BFEIPPB1Lk1wlS3HtXbtw3qNkqQqe0b3iiLOEIIDjSbPkcMuc4QwjPWGxwY6pgFTqsVEooi0VIqsOOzwZeU46ZbdOykon7Q%2BjWuIoikmuSiFg0%2B72oJFTGR1YsWIu6yBUpfvadIGNXVQm7k8kO%2BC%2FuOfOAXsBUkEP4t%2FmExBCnFuKdoGTo%2BgiWw7qb5kG7hku5hS32piOPJuNYOQl2QuE2ZRXGMwGLxioGM9ZOhvLbf3wT98jmJxVh%2BqwoCcHvYakWB9W8U2hkHSzq6wrsjC9g7Xk8lO&X-Amz-Signature=75a43bdbc271fe364f7b9720e1c583553175ffc3dda43d136f7a61e1c7c1cba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
