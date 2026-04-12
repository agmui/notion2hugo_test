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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4L4ZPN%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FiDDCmsQ3caSH7gNVJ4hZ1jRSe3LXqB8tg6VBKoZJAiA5cdLpr%2Fk7C6QFTYWPGc5bG1PWz6KCL51bdXRUSWHy0yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMGfUyPXwrfN2W9x5eKtwDgIm9wbWNwbxEjbRZB26k4br6P9zXwAQ3QNHQSq7wyP%2Bhfz1i4ApK0F5e50klQ5qUNmEREW5N95tVCsBqxGH%2BjIyAOFgcBZaLDB4HarjvcN4%2F5y6AorX7oy%2BWPJCs1yXCwX6Pz9dv24xJOrhEzKX7CKoKAZ6uM5juApVF2QZ2x%2BCni9XadqZfgKRWIV%2B6mwDKYJwVil%2FvX84hAxnqQFCiOotL1wO0iesmk%2BusgviB%2FfDoe273OAWIYhDEeMlVBk%2F9pf5sR2aRfjtkd%2BEZbnFoaU%2Fc%2FFFza6hF2XwlhD%2BdrsvGlAhE9B9HC3Sqstxo7rSt6pZbBkC11vdUjexTis2ZGbxM6g2zYcS3oBiIqlyEYBSvMsrnHGdJ5qsNIRcDtjD%2FxAlx3gSZo0LzReERONbaWybBOKc2wTgUu3jgmX1hwucTJD4iDDTfTukfJfIx4%2BsAMyxRQlB2M7UwvfZt34rGyTFaK9Swu4D9vvRJsi58Ys1iLmKD23yk80c5XxHS2S6M5wHqH%2BK9yn1nM8v9JjzAUVbFILeiu0M0A6ynlwnJHMBw%2F5g4rMBcw4MQw5QFSgbdt%2B9NZ%2B2cW%2B0Z6XGEmHRxJAud8DPmvoqocFByoq2iHbFdYdYFLCZUzNSTlDEws4bszgY6pgEy42d16Ltmjd9Gbg%2F3ZcT2j13zGBgT5Q0FS%2FFjm25AWU%2FBF4MFDwMdcc%2F3ZLd38Pqcatew6M2j2mfC7cE%2BQ7o2AxpwqpQWtg%2BsTLXymfwJU6VejzAGXjP05YKCJMdzADj8bxoJVYIaWHdk6DKl%2FEJlBb8LYnemxijdGZGjgLI%2BLMq%2BE1Ui6qL8ZsAsqM7IkgfWMH%2BVb3%2BDePV2l0i9jxXM3aqZH1va&X-Amz-Signature=0252aecd94ebf6a3c42b776e847cbaaff8730867308080ea8819dc3d9d0f0a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
