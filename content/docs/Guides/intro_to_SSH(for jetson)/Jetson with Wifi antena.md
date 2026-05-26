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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BHXI75E%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDghpMQnI%2FD5fao%2BMTlzP0DgTqkyAKn4la0PUU5lhx0HQIgJASPt4MUTZazS%2FvApzm9igS7e3HEZGu6m44lhHzN6LYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDilTtYzrdiWGrdS3yrcA1cqqpZD2UB9MPn1PL6Cb2%2FP8S%2BB9tsdCE3pgnqdnKG2k2WQz57egSsKHqtGZvMlQOUZC98vMf%2F5iSNGoTBj%2B79XoZ5XAHrXKlOq9A%2Brb3O7LjlgpRZ6DJgCqty54UdXEk63rsNS%2FFyKpoN5N%2FfLYUJyrkmYCr6ZJdEKvtWBlwRm2c4s5U7JSd90yqKq7MKvoIPsxUWzPQsrfZae5xFnEZ9g70lAaSuu0ZQ%2BClgKpJ9XcPc%2FtTlw9IxBNjsoscl08S91Z9BPaeqsStyOvUk6pygwbrvd2TT6uSbS6IV05m090JH7vZukIyI%2Bq5CLtmMaS5P3a24GGWu%2Bq583sqLcxjpeJStxJdasiv8tvwGw%2B0RFclvehomq2J2Z8eNz0MSie785y9zpi3vATMm82V4SKOTPIHc96lV4InDiwfgIGIMoeBllfVv35nO8dH5ZWhTGruCIooJANG1tb%2FjO4hOmZ2X07zOT9pT%2BEms3Jh14JkbhEEUB7iK48JEDL1nFiwiOhWe9rGmI8K6j52fx6eBPXeiPPkfRwJRAAn5mNSfjLPYKJNg4yfNyyV2UdrSNwn5077Q38Ba5ejkqwkSPSQ2LmDm3UI2sCOIA4qbszDvJoARAGUGckXukBOgBfZPzMPv509AGOqUByO3pNYKo1jDdP%2BQDLNxeSaySOfcC7rduVBDmfUHlTvgId4tiDRdbvTBhCTvl35n%2Ff%2BURt2JKMdBX9ZBXYrYtVJ%2BRRH9AO5bjAD85x5G0wust8y%2BvENtiPlluoAcuGhPolf7LzHlXkIvRGv0lcnv7l4C4P3ShMwf4AEvgfachwJ6vY80dA2fJH2IlYtxJJ9tTDY4WE%2BNHOuBBoDOtcDiM%2F80nv3J6&X-Amz-Signature=82e60585969b66f73115bde4ca9c97658f6ddfaa5bdded60b2644bdf6244cc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
