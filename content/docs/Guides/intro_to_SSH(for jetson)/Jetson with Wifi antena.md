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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SLZIREA%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDxWzaD%2B%2BQa1mbUX6DBgELDCC7U2WCeuXwn7zktIXcwLQIgZChmkCWExClbKW2onvXpHsyTd%2BvicdjEPEgw1R5WjcUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcIpPkAkOFZuGBkoircA7LM23aodFdrMfbWatuNbsWIrYDdkTJ3hw71VuWKDhIIH3FvEgMcH%2BHm4Q5G6KcKQ%2B5z6MZkMy%2BfxgYBpGK42mQhIQ0UmovDt%2BueYU%2FdwKFcDxZjNKckE9LsDRFyubvggJthXq37OivZ%2BdPkIs4jViDeLuJtax29UFY9PSMi5iE96njsMXPILlztH8%2FTZV1YOIUXmuMOrWg1l1ENWlCCUYvazrmo1L8WXgWMMkm7qquj7hR4qoLv5Kq5e%2B7Vh6kAcly%2BpJULEHgUIlE1O692fxC6f16cwm78dF0z8T8MOecuChSqd2lF45eAUorBpbarZtvgdRs2zTPyTBzAUFKCp5kir88kWo4KmcREHM3WZK20nXleeU8Ffpy0M%2BN7YPIqNzOsQnrqBJwlNajsiEvbGnO1felsGvf97s17h9zbZyvtAXHJp37Nd4zukWw8urlZ5Tci0kYfH395oxiPVuEdSfNtbINr9pDkjIubu6dOSUSq4q8B9DeDPbHXgMtdY5t4LHlctSVwJbQ49gcFBoXfELnqhPOJ5IGrDnCaDt4qAAsfzEusGj2gzzwTI9EdN%2FJeM2FfeQiPI6XCd0v09loSbIi%2BqDOHpvl%2BuBo%2BfhsfGFhzm4SvUjPHhmbLQGEdMJzJkccGOqUBnMuV8p%2FRp%2F%2F%2FN2Vho2D0dQptZQRp543jpeEN7Z9yMDhddIDRT16TNd6L%2B6mxRTX%2BPAcwY1eisg3ET3kqBv475sf5qSfgKQWrFBd7r55prgZLpurjTviy%2B2dhnWV%2Bjw3EQHaYlHVXsBkzYUOYQV57np6iZVUFSJfOoCItdoU30ALra7U9IAMI9I06dsZP5v9AwtJ%2FMZp9ZO4wmtIICtnubN5gPsfl&X-Amz-Signature=e11f731d402e484101c118bbb80a967e185fd6d2123ac10a82456bcc3da0c9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
