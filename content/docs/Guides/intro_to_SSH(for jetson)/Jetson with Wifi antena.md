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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7WSJV7%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIE5jnUpt%2FHZN4lfa3BMM6cKLNnPD8XDiz230saTm6UVEAiEAnTxgSFKa2lRQjk5fFoNiFtlhpEcsNuUlhUE%2FoT%2Bw6dAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCzHtPxOZR9LeF9FOSrcA1OluUwXLHElrAqsoNA7sfQabN6%2B%2FZi3Gc39UaExn2XmtMUdZW%2FwuBDMp5K3sYn65NnmhNlDvyKqtskUgGUELNKfE3fFQf9Cn2EW4NYhqrjIV1CE8F6tld%2B46nMpQiIARVyUA7DI7oFQMm7ppCANzDNmNJ7IEqeMIYDLjbSsXuywr3LGoJaouAJcmTVt2kOsccIgjrsB14fk%2Ftw9LymaFd92Q16nOtXeb2gif3LsMJhcgGn%2FvuHl4HNYn%2FgRPYfm5Q1s2gPT8c4F3QOUzErD51E0qjuvKbwSLs4ORytmevy1WJzzfBxDEicsHO9fj37O438eVz%2FHDgzjkCD8C%2FjxhLlt7aNXFjhaoxXfC8ZU2SZYlXOSgIBjBC9DhNTLU6gCmePs9l7NcF7Nhf7NaeeZ5CRw4kf%2FcKZSsEPTbk0QJummLd%2BZxszZwS9I7nLDd0ahy64Xu%2FP8dWrWwu5gdLzVJTwKMd4mxdP%2By6oHomDorXMPCPaZM1WRd6RDaCh1ed0heTZWfOsLQwaRdbxcFvKStoSr8r66adh9Js3sOWkFFJomMVjWHAtKs9xBlsAOggiRe6gLPOhzrHr3rWSblt7V5ijgMPP9Jre0pN%2FB2TJcUVRN7zf09jASRcqYK1ZDMLirm88GOqUBXOEbVXB76fB9HRBF8OE%2FcrlEaNK%2F2h%2BvYCy%2BLgJIwg88YXNf8mSNzni5cf4AFTVOxQ2Nbaj8qCmVpysY1XnK7ynlBw8Mzn6DKqKcGquCs1SCsE56r73jUlly6grw9Br7Gz%2Fy6wsXX3vLnGE4byIJibJQOBbISENP8Hd1973aX%2By09ZecWbuqQqaURLuaM4CnwKp5krFEjSzre318nztLIjP0HF3%2F&X-Amz-Signature=ef722d252de344c98b6fee08c3219ff9016619bcf38cfc2914141afe2dd7d2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
