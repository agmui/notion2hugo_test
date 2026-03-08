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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TULO2HPP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDcV7Gn6014XW7emWmcrcexcu1e4faeGVNdvs9sYClXDgIgUpiMyQO5ybEftI%2BuYqsZ3MTl4Z93rMzr5ZvTgXl1nD8q%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDBUW1onKNJ9y36NeySrcA8W8AaaPEKPj%2FQsA6MYDTXEQV26qvQROAL4c2krPzSK151hhifLGGFEPjb5YNwmY2KlnW45OWvH%2BxiRfgEMHShtH%2BYMs5SXUW3r6XdBYQv8w8Rf9R6PiyDP5YOZB412wKyl8386ed%2BoymR7dluDJiowr%2FB4QllzwpZt%2FQy8Fyd5Y8tMKlv1LHAgIDvh9VG%2B077EVYoS3s2VxNTG%2BAPOYZFcuVSHjAuRCkMW1JLslswnZyhnl9CmlH7ntlfWGwkWqg2EwQJlKtTfyVuHnaeXmxbLtdmfNK8KUq42bmKKSO50FIG1DItOPlAbsq3obr0KjaTK9LgJYBW%2FQVghr1FjzV4H70EA%2FTFp3nEXLqyr4Y%2B0n3LOqADGOOxSqZsRJ609iXlC%2BKmKPeIMJHmJwiEGmHZkDsx%2FNWjpB9FB%2FMIOJVU%2BCVFd1COpek3SmyjrlYksHR3HLIF5ntWD6Z7wV9Xwa%2FJzvAD18bFuqyVx9qCpLvBUDXb8aFEDqbBVgz3TxenrP8manowfTvdF0VbZi9B9YNGrB18vOmsBM1DahIufjsD27jbB9gc%2BDM2JvQ4KSjDzr2KIK0BZzN2yG2Ea0ffWkG1hiBF4Vf0ciThrm9nop8bAG1T6g%2FijJ1XvQuNT6MJOds80GOqUBjTjGejeZ%2B6ptG%2Ff5CQ2DNYEvnXjoEbOKkazLXYVPwOYpyqhdUz3%2B1f4FIQ6IXjxi%2B4CbyWkhwTkVs5AqxgY7xP6hpJED8k%2BZk%2Fl9SoF%2BREQfHUjPw%2BkNOxntbvlmiEzbMRWdowavNmYiQk6SwjAasJC5KpbyvFYxPDg2BDyq66z%2FHHz8bL%2BLOMMfbO8upqQUG5rSFxWa1zZ8W7HLRTV9%2F5doskrN&X-Amz-Signature=51b8a727a24de61dd12952358ff03e933483e8c74d13c38fcccdf9c151f261ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
