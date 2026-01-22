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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SNYBMI%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCU%2B6BaFR9MtRQIIzilrFK6ohtboGidlLWT0k%2FzB546owIhAPjn8WjqoPAEYx3QOrNQAnj5vBQoHHjLJWt%2BXrgo3C7PKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqn2WNLY%2FIb3niTEMq3APY52iQNHBUesZir1sPsZjcso0ICxI5F6GVjVMYQxxuBHVBuuP0ZkCzyOPR%2F7qlAWF2lU%2FEkqYKbI26Lndd%2FKbayNh%2BGfwxKm6HRI2WlpESu8GZPLKamrMN%2BF6cyCXmHy5EaC05Tx%2BJ3sFnqntt2RuTDn23QPlWryshzmqnJ%2BG%2Fnw1C74f0vk7kCdufWp9NnBQ1CUt5dNVPAOF9Da1Phfik3SePF%2FtCZzPN5j3Po7Li3fqPASS%2BVO7EXKPpgIgp%2BoHCWEZHQ8dujWvpTGzxj3ZTm2tmTZqUx0peZ6gdnbWkBsyzBK%2Byb0SFCfXr3I03B3xzC2nyY%2Bq82rcx8cfzzYg0aC29N7W935Ikp6XrDv0K3EXIndiPvMF8xLx0n%2F9iIJ9E%2FP0YCPQiOCavzv0Tx4LYenJfyACEaFl%2FS%2Fw4DAXGpwKTiRNyYPZyMwLHm8HoJZWhf%2BY2Ik1w4HEQzn1Y6qKcCG9GG6k87YnkhbAQo8nnBqLSprHM0qDDppfuYWw8EVfAkR7TqGDkeXi%2BrYg01nIaDd7I3xWfmsx45iLLaafZOcYksI7VEumWTq3sG84NBWZ%2FWozDzs3bDrdYjwUVYST6PL0hrpd7xXi913M6yD6jTVdsbkGldgWsxBBGkDCZ18XLBjqkAWDUNj5EvqQ2%2FqamrP1St1aqeV9048ApXPM9P%2BcxRgE3RoHGBJx3v3ykExzgDUVvcc7bWhd9sWlVNXw1OCM0jSX54XzJFe9fmAUAwlqZ5y5VkxzeHMl%2FgJLNQcPrK91Pmh8H3MNTKKUH5X1hQ1wGBCWOdey7AY8o0szatecKHA%2Fx062%2BrcqFE%2FcKL6JBMzfJZOtx2tiIdnc%2BXlIyO08CGa8e6y0j&X-Amz-Signature=3e4a20b2f7672f210b1510b7d88a5ad6717784b31f8489cf49c93e23dfbe3f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
