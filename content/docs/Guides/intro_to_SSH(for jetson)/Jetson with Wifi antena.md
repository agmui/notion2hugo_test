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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTA6NG%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQClzrUpuplaqZ4OQuZNgrGpAEjDA9zhtWn05h6UxgiUCQIhAOnmS2zeNJWHr%2BDy3ydDAds6fNDk8kIIhMty7Qbde34yKv8DCDIQABoMNjM3NDIzMTgzODA1IgyiElFZcP8%2Fh%2BVQAzUq3AOfLjbNs3BaIBWZEj50wV%2BdDzFoUH5lnagWTfVXRc%2FZEYCSF8QErfF6xzSEo%2BLPZ9yXNP6hTKUya%2FngKv6oahbd%2FbpdQZCt9Wj7%2FcYi1UzdDd%2BS3fp06Rifw2XjBghJVB1b1CNOWIiKaMv0C2viSEsOEBKK6xL1pqr8dnaaCS0HZjs4Rc6jwZ0Yj%2F5JR%2BSY7pWJCOtWbsrskVTHu83SveKyeU%2BXp988EeCAujggsv4R4Bspcn8lCo05DjZN2UxetgTAPX%2F5XfYEM20MLMt1McgY4kKBjEr1mT56dOkQIXSFKtvNh6m38WYsKvouK7%2FtwhzZ176vHdiM2GOQwiF7tptgz8bnpIlduGC5RxJbkb7Hmci95PBG2ZxsDDFbuV6%2FnQnbUbDXzpmrKsqj4tjHyTluQunOMMSCNZo82mF7R4OdDwhbLh2%2FmEq3eudeV9Ur0fDYiEN4tX%2B5cmuZO9qaNpPVmXMjtbkWqlIM%2BW5yAB60eY1zE0MCWmtM39tXWNWsdFH2U1kt%2FMpPAXMhfVp6%2FZCcBUWAyomG0caJyeAcpxjYU115fncdEAaoMBveHK%2BIuG24uu%2Fx4plsuQtmLzcAlY0nxRbRJyrErX30ZjsThGZJ%2B70kP7GvAGP44v62VzCEvKzOBjqkAfQDt%2Ffeimhxy5FIPaYPqmx5DKl%2BI6tLhRtOVjicau2TVgQjsW7RbBO46pdlgf5uAPcwmMwP3fuTugeX%2FvNhVlAEPz2xipFV9oRt6DMlcOzC1aL51pR%2BJ1E8BoatbnfcTXC9SHol%2FEPqGk0bJyVy7gkWJu4NiFku0tkVAb1JA4UcMc3d776BsVhEa66sskyZQaeNSMoKLW5RNnQTPSeAHxcbzYsp&X-Amz-Signature=dee4f4cba9092d942e3d8548a577d70155e392f93b378746b3bab4aaffaae8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
