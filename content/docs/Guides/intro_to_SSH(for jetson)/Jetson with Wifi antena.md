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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I4A5BI%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCOcne55i74bLU3xFajPDFm47rKCaQH9vGUapzp7n2PAiEA%2B0ltrHnUxqmJUKMjiGfHK%2F%2BeaNIAXCE2wQDzVUngrvUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxaMOi5RAurDzsGnCrcAy5r6zmlUXpV8mYmr71aeh%2FqHkG8Kj7ciMaBDeEJmuOzQL10PvlOT3TboQNV7Wp3JHhw4CT8i266%2BkgGmYAs2%2Bfboe%2BsqkskYSaOUz0R8Zsj3SQ35%2Bq%2BFskVFSUO0r6JGYSaC6WrDe40AXahT5oo4Cgm%2FNngFg8ItrN5y4n1tiTjXq2BbNA1OyJY9tux2p6fIrCtA%2F8uS2AYokz%2Bw%2FR2dtrLOeRoJhsEYWZTKnQLxQaqfR9hoKD4QDkHrXWXOR%2FURL77R5g3Gb%2BAm2BNKHEDqB8MDGJBDMFWYiY0EUIX5rmrxV3h8ot2dJXFy3t1Jpce7cT2YtB00anK%2FF8NPG6pjWJHPK0nz%2BXr9byTBNQkWMub3NHSwmwc0gvBBUSZPHQfwtUWNC276K49pFGsNdIXFGZJ3Kq4ByvAKcovVZ9eG07QN9ZrykMkP0QGb4ju5MSqjdROOvsxvY62OLj0aGfgAAm5UrpfrzvPTXfODMNDGl7xo4%2BWwNoC2Fs5YqZqU1MNTGEYKfAma%2FOAp4CWyOOH%2FCQqYsPWzWbqNm4pMhMgZ3F90RZxrs%2FDreSkv%2F3InYmUd6dmZ4tVAlbHkklV6KWW28G74fzpS4kF%2F2IgaYUJS91uSA0UfHQ33UVcAk8lMPOsntQGOqUBOEKHGkQ1YHWPYibquqxUTT3VA%2FKcDDKaLSUUAEjPhArE0X2BEqSGj58mPNAmBA%2BJCka6d6BFe3r4rA2As22U0P35gRuVm6jp85tFlwbdnNEALTbITuqvl9l4DuNScqM7JZMTUC0eDfPOCThMZW%2F04aGuEIS1TR8qGuZwuOAq6Wu9J3I3sEAMqKvoN4ivXyLK633589lqAEl4AIFXjcKCD9CDzvHt&X-Amz-Signature=8d552929c43ebe0a0bf8bfd8698080d8dee5003dc8271a02983b01c606793d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
