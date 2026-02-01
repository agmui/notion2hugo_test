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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=1bed86c055c48839b0dcd45463a8469b344152488becc0bfa7854e87b92d6509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
