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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLRUYAZ%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2N3dtbrNUQ7bwy1FZHCkvATgQ4%2BtS5I1IspOk%2BpQ%2FkAiBGAmr40%2Fm3vBQ%2FMEarNw58UzR9b18E1U5m4we8VlpXASr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkWG%2BOVxnS6kDDZEaKtwDVON8DL97o1AV4s2FRdzu1Z8v4VgOSIztNJNbF6ipH73awqs1o9eSAeL04BbFnJdHtGlgnWWxxs2HDMhlroHH2lPE6A0qKBZByJUizd%2FS2qLLwI1ERdpqrrtEEGVNQzD2TGkcyGABY14tXPdI8KsYVtpveu812pmkKAFTx9nSho8xREZpZyusa4iee1yYiLQeqv%2FbwHBNPI7jJqM9Sa7GILkDWj59MDc6heZfMu3DYRfhnHL3hq7qF7QhsFle0qjELrdwrPKTtGcOC0DoAqmxpJRAnjoUf3g2xR4OXuH44K1OW%2BzQzIw3qffR4X%2BC4JYPUjSQ65S2L9FjK3XCfJP9P7E6tTIPLggA4vHiBSwhaSboSdqf8EYFS%2FR6l8qaffak%2Bd3XoOBvKOdNtBFSN8I8WsaMBSdxkSZu%2BSoLwqHJc3tn6TxBA0UrQASNkVxL5N3%2FOk3ivUy872srpIHPOBorhncYabXdNYo3jyjTRcQFtccYPbb3znlfLyiJZx697hRsqLIWPmIXKnfDpg66tgNYbydfawjDllFipsYaNlnq%2BbpcWSaKVDUChHanLtz8Q8W%2BPI%2Fxr4FyHyThN%2BTcf4at%2FT%2BZaFL2K2Xv2981TxjIJ0nEK4QNOg7h3%2BoNYIcwm92OyQY6pgGp6K3sboCvQXMQ9zsL3yATZVBsAV6heEV7uCd8r7qvPvtIR7HVeRFBEIW3idsf%2BbFhSgFHrCdZajUpZ%2BDw9gxSj%2BPi%2FvrvgCi3F5D6oz4yvug%2FATPg%2BipDdZm9g4YHsvDGWRXoFyYm5NaCj6zkzXKwKEigWjviRvlXmfI5sz6uEuI2ior29VvlLC8mdlKlytvMIVjt%2BbO%2BZgunpIRuCJzMTtqKFQTD&X-Amz-Signature=07c62a42ac6213e56b0f2d3aba2f67e1ed402d1e6b56befccd155a297d97bd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
