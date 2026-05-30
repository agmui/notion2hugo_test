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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KX7JPDV%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHx8Wgkcn7yhYSLIxzCal%2BbkXF1oaNPbzx5HdimDY39IAiEAvhDK0bz5DOqDm7iBmxgAfmpIBZ6C6F9287LfLcPe2pYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFxI2U8QknhrgFH%2ByrcAxYkLNo0KlW2VK1I5kvjJvjDfoNVnNBGaCXfZt%2B9hAtKScubjx2xJDMkj1gSFR7WEd5eDGM8LcH%2BYnX9Q1ycvhRuTh3pbvg83%2Fa5sS2ZiDPhtyUhd8auJRvcLw8pm44X29KtCcpFsqIibkfsMBbIylDOu493xlnCBjxmr7JlasQYkt5CreGrHKtJksG8o%2FIXuqRnlC%2BVUNOU5b9QXc%2BCCSxDwDKm36exHrS%2BkyvlCSCYamWAfqMfN9jRNS%2FQ6X1blbrSpuOqzPKpp9XxU6DuwN4REPm%2B2qwWeh0WHe2DkOeeidRFzUUrbrzmuC9sunewPBAkknU7ehclIHUgp6Y12o0QrwKWzaxck19UuBIy0MwwqjBlqiT%2BhjKKkDMgP%2BK6x%2BedNS8NxjDReNjjcwarUKEneXwVQaGY0tiVVOrx5GY7YE%2BaHlLus9aA8mfoGyYJPWDFYipKFJeRtnRFmNbp3yatCTirAi31fhCZ9AJnk4V4LiDavmElJD%2BFpTo%2Bppw1qbpKbHe7za7RqkRI3Hfu9aSh8L1oVLIhw3inRMSELAjHRt%2FL76zRj9rlzVM0Jq9Gi4Pp5CDGfhLWZtAFYO%2BDXOtgwpNMxKcSoLIyXPyIb4lHuTywB7SUHIYdpLmGMLGo6dAGOqUBYC4HzrubtDdB%2FNf0y4Oxyf7i63ZtmWdXCQ9Py%2Bzq2rDZqhbj1ITte7DO2F0MTGqFRBZhqioiCkuUcoMWMXENkDgFztjqjhh6%2F9F6ArS3I0sB5akpdncG5K99HNT%2Fjqmk6LNkfGIJ4%2BR4d3KsvQDhhpqqg3ikn3O1VDJeL4vE21aMqqQygdnNVW2Tcx2PItMoTA7pnTIUfwqhUS1dWICoPxn2zCPu&X-Amz-Signature=97749e32a02bad121f6144e77abaabcb3ddb56c8495652c3f6720929f2d0e1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
