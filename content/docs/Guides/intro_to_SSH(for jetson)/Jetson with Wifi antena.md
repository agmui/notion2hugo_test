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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K2HUWBV%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ByGLtlR6oqtpMFZI5ZhI1jLCnS%2BDeRgLNt7v2xwgQQIhAPne8Gc%2FJzSwJvBOAeu8HHYMN9RCKH0TKv2r7RZ99eGHKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrc6BY34po6315Q2oq3AO3hSJ%2FVn40AimNzJFtIQCRByGiDWMYrLRk7t%2BvdTMcQlQfByex%2BQ5fRB%2BZc05DKD8VrBP8uNnTpWC%2FLkB1uTHVfjtASDDiX2Bwp3F0JF8l9nymWsx1S7JgGj8My3iVpA0IXmE%2BiSzxeWSKvvtSen3Lm19hZqGu%2BsJZnHTGgp9lfhUlElRoDsIurKt6Px5QgCoM%2FN3VpvFzkOzv%2FuvcwEkmPNAwQKSwaxF8s8umDo%2BtbYcX8FFUTxLsMTe6W4E6RhZ0gSaINdryqHq9dOGcZmVB6FKpuf0Os4T%2F1QbAUL9f78%2F7MNrrE0FKvNdpyyfcFf8v%2F%2FU%2B50tv4%2BgMHeXjYgip3ICBdMlYgOH0HzHWnnjGURo%2FNdDf0nRDCM0FSIzf8UBm2h8UINUN4jApPMZ1UhcApA6mplWXuFtjudjW%2Bp0Ja9jDDRznw1I%2Fihit0Klg1CrYj9UvizGtWI81Qll7Sy6yMc%2Bmet85XsuXUGp6bSmda%2Bj%2FgS9MtZdTISZlakduQB1rgkfdtt94bgY07Eyc4stMg0hYSQ8F4KyhAv5ZCPuyKZH3Vytjt5Y%2F98p%2BrayPik87a2ebRa0WLolrXK9fYRcR7eAEPR8sndF8DZXi2a4cx8rYXM1m89rx8GjLtTDLl7XIBjqkAah8z2wG9drOytWGwBKS%2Bv%2BdP6m94w3bqUVzvHTGVa%2Bu99mhSW1JyRgT%2BgsNbmW7J27PtWyD5LgxRi6FkTx1kyMG99AmrOwZlYYTasEPy7%2FBVYc5ediJf2Lx24mabfy3VvQRXI7I84580ntr4pT4Jhe9vEuWAa2z7%2FlpV8%2BcNyQuVLbvjbhbIXNri2pClakBthjcp8Nu89AyaKddMhy%2FwfMiBQCR&X-Amz-Signature=73ec125aeea34c7408b1c0f62e28938962687719a6c75d3abaf51dbb0c4fc45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
