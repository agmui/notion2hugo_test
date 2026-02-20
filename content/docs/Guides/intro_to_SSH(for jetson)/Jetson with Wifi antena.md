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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMG7DSI%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsarrlXcx2JeTquNiHWeNPDqS8vQ8Ue8UtqHHx%2FKNsgIhAJwL%2BxfYgE1tmuO3iXyAcyRXZwdsjtyeBxURkOaWNyPxKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzafcppjRlsoc1APkoq3APJA762eaz2RWmuHvT7BcVCTavO7OOSRmtzpucXjAGVDFtcpVqM1f2%2BHkuPMQK3YtIg4v9FYset9CPBvx3%2FY%2FG3VwVUHQBqHd6bx%2FS38YKSwy%2BPLnYiLOwjUDwjiUy9jCdVlZVYlBkWU3u4DJbfLL1%2FhcBACeHK88cg0j8RoPnYQZjpZNwC%2BZbH3semvYpoFHwSIw8xQhmKrtMkxxLML30%2BfmPj%2BDrelw0GlB0QjeX7Yk1o0XVXLK2MKx4h83KpDmORBKR4PRdHel10Q4C3Xa3x%2B%2FEXsiMTbTVxrQTaQ1tstE3GHi3L854evGmulaf4EQ%2Fzv3SchkqKLKtwYBJr3kPRf2%2Bh3rx6zhV8QTbNWpNp9FjG4dy1a6SwSTIpBE%2FgxTRAQ1n5swlX3t1wFLHIp%2FWblshLeIZOyr04GUyq8avlpelHFhURDIiupDmKURtrbUdKkhhPO3p3oplq7z7IHC2kleQlIhM22bGtu1OrRjI%2FxMNEaNfIk4vG3PTdf00GsI7aBA5In6fDT2PCCo27K9YPFPbpR3m%2F4kCI%2BpVtgGSBcwxJAvLPVM5QGasNQDSaBaBGjSRHImR2%2Fzbbx0T%2FqC%2B9meAlECYpTVr8m5XbbH1oQnN92cqXNhr1zG7LjzDB6N7MBjqkAaJSKGIbZ22oFxrunnMIsIPbvceFqdqGqG9B8f8hPhI4JC%2FTOiLKJ8V0mRDIwdT0khmri5t3g9pihTrdEkjBNlG8iCimobcgvb4E1f58O5Z9crEytKf3O5O2Ro%2F9qhUbg63%2FbxozrYAYG4pqZH4J1aaKLVSnAv%2BxXa5B4vspI2YB0mP4LUkCejNYiQ4d5e251D%2F1af6lxmRXFVAN1GiEh6KRDvE%2B&X-Amz-Signature=f7edb486314bc6b9ddf651da9270ac0a0dd6e512fbd19027604c80138b51b5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
