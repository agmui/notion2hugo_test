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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIV5VGYD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4bKFyOa%2FcGexLNfZYC4eTc%2FeAbTD8rTACqIrMjjF0gIhAMQDkqR1TNvoPgQEh4YgtNVh4vzCTbdH0Rlb9i02JKzVKv8DCGIQABoMNjM3NDIzMTgzODA1IgxlJ%2Bz3wtAF4GbNbcoq3AMVcWztgAs6HxGL4bF4%2BGvmHQdhAAD7tuVLeAXvc0kNgs6VVsVV4ub3zqspmfNVNRH2hRk5UWILU9ZrHcbXZxh8D0LTEl01Fe7Rdk%2BeqPsnn9boHFmiU5ndQzGE1itD5BjFyFMR0ApPHIs6UWYudNrCiU1OSM3btYOpYZ0lVuHwnRd5wO6w3ySOkwMCFqeIdRdAhhnbD%2B2FlkiCwf5RNzJHu18JfEyG5n7ATvABd8vgQDMwq4b3%2Bp5QeXAQcyNsgBkynQ2ysqB7zi847pvsyel8vx1lTaH1fJ6pCcMZK%2FvuBufl4%2BswHxQuTHk5AIjepci4btewe181%2BjVxt4nxs82%2FMHWLFQsdrZA7rddTOIunfLaZv1jTAiy%2BGBekXgjp3n%2F8%2ByDDyvynSL3XAnGoJt7mNuj2zszvzOkWhldRmCN%2FqjPvr8SGUOfxwgQbkTNQUvE5dLEGCO9xpFMg29c8fQ6nCczk3nbZ%2F3z5W%2BBfwsfvqg9gkPbUYAXCZeTs4dvrYVzR5qydAfW4BKkWgOBC26VOh8FLQHRuNTZYYObZGZ8jmX157cwXN88VC0C%2BVNw%2FFd1ki2EqJ5crRi2XcaC0XC4TPpCFGfR7URstzKL2jHxruxjVWYNX7OTxcXeK4zCn57zKBjqkAa0X2LS8CrbTfZHTd6yfMFHA0rjUg8UmUwp2%2Bm2PZgzeGn2fgP56Owp%2BI0tFeYFC0SarI3Q7ZHvsMsJLwIDN65xOY8KCcP1hDNRNM8I%2F%2FOwNmUeCMiDvGhLJLlMnTHMoJ%2F02sq7QETaFSNSP%2BxjKvmpRxZgkJMif8Q%2FU1bkHcK%2BURDNUjzuaOakQg2YgSGt7wuP9Z%2B0Ynj5wE%2BZO%2FcHzoLN3k9%2BF&X-Amz-Signature=dc4548e239229f538db76f9aee26bd5f312990e2ed08ce8bcb8abec738662ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
