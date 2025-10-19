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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSW7H5L%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDFQffVLMZcNm0W2j22BgmkxSXxBqi24TpzZm%2F4FzGHyAIhAP8GORqmuKCX0kgRKE10tl%2F4xzdlDGt5YlUwXDWUYrBMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOzFuWNRh1nZNWHtAq3APT907l5UPUv7VPoLqZv19qmF7eFFxg%2BJOclFN4GQ6qF2bV41oJQDZchu%2FRBLZnjUUXD1Te5cnXM8np3Syt0oFVUkF%2F%2FnzU4ikhKdwNpX8XEQLl5DNca6fI%2B7bjoCE9FWxVnpHIL1fBFudsX26B%2B35CyllUcqIf9hz3fUXcO7rX4rcOthZCWdzL4Nj9IJgRtgKdOiHEX5Ori7Ln5xPeL80ytNFaxWLJDNDHeLj79e64YQPHJtVusABvTUTtKdbD%2FdhE4GhscEUacrYBEna8KQyy9NXvZ4bgC3yUABYQFtZnTZSohJQry4Q6LxFI6gjafhjF%2FinvfDyktM0PQQ2FIYUwfM9%2Bj4F5BL0oPY%2FIr1e3j50yBVCXdUuPeyrKCM0AaEfAmaFgHCSuJa0dH1YMmCjXpMHtewXnToSc1wbDP5kR3LYYC1SGg52LbkZiy4BOpqZVmo5k7XwzT279edyDNq97SdeaexmFt7%2F1K6XzzzWUTeW5Gk%2FwkqwE5c8neFLMx68yJC7jGZVMqgiN0a1Rz49SvsNlWYjNUeuuyqpCGcqleVXMOJWrVAGNPmQXasCgkyAAhEiC%2F2Mv20M1kkF1Kwb5nX7KqUXpjXqJje61utvP80c%2F3TC5FV21NvkahTD9gdHHBjqkAfgYIoGSjmlPiDQeV0R5u4BYLnK0mqUTPxfzK84tBXZ2Ma%2FJWlUcs1yDbJ1YZMJ%2FoMdbIOiDtx9%2FqaSdDmdExOXkXiS1e2NVQSQTHxEvqsR%2FEJjTdyevx5kyAsYK6yGnl5k2zf0n6GUxR%2BTWYq1KlhBZZgDf5PWjE5q3z8qzyDfZmsNSv%2FaXc0hmk3gsERAnpawXW9PN%2BkIsWXC1D%2FZspevec%2Fyn&X-Amz-Signature=d771f25d1e3f8ec2a701c04113234809d5c54dc8551e24ee7bf60c55f4c8d3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
