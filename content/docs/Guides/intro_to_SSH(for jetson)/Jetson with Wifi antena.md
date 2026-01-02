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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3SYOMR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1MoMo4SB4V3BVJn9CMXihc9Ga7vMqkMQ%2FWRAr5i2fngIgUzUKlWmHNovFUxhOAL9Nl4Ptfv6Gjt82x%2BEVfGowKqEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjQI9POPWG3YpV9LyrcA%2BAuSxTbDES99scbe2lofAvNes8tXq%2FeYXSjXV0GT15%2BExnu569bMOG5scVtbgwq9ytcKjOPFeS8loT4aCMZZ8773Pc8Oa8tK%2FOP%2BfKXYIo1RsjIIXVGEa4%2FADtdFLoQPbpg2TnfpLSiyMS0hYlvXa2lpLJaleUne6s0weB5aS9ecoA47KvfaiZ2hTboD4Q5r4S6BRx%2B8pdnz%2F2GGZpssf52oYb%2B81oWdYDNfpMrwYqd1KZiu%2FicPT68wmRVFJ7a2CWtgGbUKzbQK%2FWIKQ4rcTRmTs0LME66sgv2Y7Ke7yIwriA3GkpXjUWVULgRuMCy0qeRMeNbwIbhT66hHcefqGuYJNPbQGQ2rZNYRl2fSwFvDa1QifuWTBHdrz1AYEuWM6JnejI%2BE1HIZUNb353FORNjQheg2yI2YP6CU%2FE9pcyK7qkudqELvjhdaNy8JQZyD9afJ6aeFR5wDBZ7G8aR1zli4VsBdUVrOE0NVNrH2hVKxcc5%2BPVi1cTY1wDLQggiHGjTxLLEevWbDSh%2BOPrXehmWq0HtCKAUpRKdxtwJ%2FrlNrCLSzW%2FOUnm%2BJTQQ65fqwj4sXoyfSzTYWF%2B6fYcroLiI0PAs4ziPvg%2BdiwVbhFGhrANtUEMduF7GcY8hMNy528oGOqUBscyX1aYipOIqOCtmi20nWGzKrsA9kVgq78tvZYZQQQ4YajTYE2jLw0b%2BRv5GBmS17cihWZrgWLkijMNxhjpsjvF%2BG9US5HEeAb4kf3g8VR5XdGZMr95stuDjKiJn739SGSBEHjm6nssgzslZkznS1txiQhF849h48TAlEuvtpJCGWQoB7DXLO%2BUUJGXhsah256d9VOzK0GxYvTjqffV6PKL4ydxe&X-Amz-Signature=3239f592a37d2a9ff42575f6d87001c20a578a7cc8bc133306305f85dc55a5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
