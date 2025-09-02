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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEN2MCK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6qRShvufqeqKUK8k7rI%2FFoMSKkCWEfsO5LZa3faOsfwIhAIIWVijjFXUKX6nq6uEhQsjW8uGhx7mnOo6Ej4k9n70YKv8DCCIQABoMNjM3NDIzMTgzODA1IgwdJXartlnaPyREwZ4q3ANaQqNpjuT7AhfUNt3xcAuSeX6Ar283GNsD2sms3xG%2FYVVI9hbFYmXPU1hBNCurkotaSnXh83bqrBdewU38qY5hV4m8yEwwjp7%2Bn4jexuk4gIXhOUYTYJb4YFETA8hXZOfql8ONycKbpmcIIZrXmXQm5HqMNj9%2B%2BfxWruU7NObHCLFXxxsKZ%2F%2B2s6zLgZmZMHoHKO98JTDy4S4VI9HUzQ7%2BppZp0xVQjyjZ2Tj00xo2v3xDmzKjt8hls5ls5QW8iL985XxiibC7PEcdft0qL4tNEUZvPWkKpoWgoWnxKx9p0Z6W1LFDJ%2FU13DO5InVjQSGwZvzPnOt0FemGOobQL9GZ2wo%2B7XNnqlRhtlbPLwDDG860kywAvG7wpg8o60%2BdLwSWgJa%2FDza1eVe4r%2BN7IxoTAZwSZEyeAeKrZy%2FxF8Nfqo9MMCktJnCw5VazBcgWwXdzPA373TQYYwLuH%2B1SlZl%2B4Q6us6Ye9Arv%2FkQG0MJAuTTqH7Me0C1oN7wd6%2B4YHchHeq67VxyQgdFG%2FQ84Geg%2FVN5M3mC4QZ6KxC36jPdLVGWCEXKkpGsvOnLpalR6iiW8P8G5RuY0YMCuR%2Bf%2B3IdBI%2Fa0YBTZGgJyU8aECtBbQx8825%2B5ETT5QVajRDC%2Bi9nFBjqkARR10aO3Ld3L4nRmtKhpkaG5Gqlcmdjby%2FJFN%2Fq4tOgbziknZL%2F2%2BQO2qmuBdMxFWvp3LGlcMiV78YBO8kzfwOHMGi663mRUFoSEfczXhIkhwZf4pYiWP4Rcys1BBMdjaWD1k5D%2FMsEvAoLBcc%2B5jBP2UbFs4%2FnAkWkQqwlHMygmmhhlNx%2Bv8zH5XlS5zsM4PyMuJ%2FTPa4cw2EY3rbDKm3%2Fqzouj&X-Amz-Signature=a7bed1c0abae59045b5d3d219ae2ca97fa050f1c23e8c2a8e3a431726bdb8c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
