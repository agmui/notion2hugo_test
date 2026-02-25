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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWCZCIC%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFbVn1LkYQTytk%2B2WZ00n7bLLU4sKhP6rXthEvYZeKeaAiEAympMPRHzmlTwCgfD52C3UgSQ7jiuoteuo9jssXDIkKsq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE7T4pfTrV1eoHv1TircA2iPYGbKGlJ9b%2FojTCGJ60dE7Bsp9dUDhII6rCosF0%2BqEWlcKnqItBE08XXMO1fMgyvuzpAIwR7dD4ZSH0Xrm9eCOO5M57ChVXirrf1KPE7VWbB3kcvigaKb3aJHWVeXTGkaVTK14Dpb3lt9OJO%2FS9zXk6dqbCNdXxbszuYZ0ZUx09qbkihdhsphVmoz7WE6wnc7Hgh2ix3FK4fp4sxAlvOdzt59iD7K1CMKqkh4D2S%2FlUIGR551fesJ8YsZg4AAELlOgJ3JeNVzAia8a1976eXS%2FbBU6jZ5i1xXy5lh5NH%2FfAXVTvlmXdrLkWVjp1GwSraACYCw68Ri0J87QwtPsuJMEHm7VQzUCLZQwekka1%2BPX%2Bex%2Fn6d7IZ4YO6KxoWzAvYvzdu0TB8IaTqpQWmwgGIFA81NtT5UCF721aL6jkt0ZJYpfv21RQ4t0%2FVgzhIilx%2BFEfQn2gtvDLtf62jJagVIgMze9S%2FsrjJkPG0j%2BdMeqg%2BWpaVCg06dXSvSZ9RFl7sH0UEEMFWYAcNRVoe%2B9XBDxHyzzaseqA0eyTVZM6n6fF%2FV57Y%2Bew16yo1F4gEFeLysUJ%2FQ70dsXUebxwpKcW6Si82%2F53BdwWoyhSO3tlamj3hk6D1HXMJLYW2AMLyD%2BcwGOqUBo5YOEgJ%2Bi104NneHvFZDCny%2B4S3ubqog8wIEaTZANyrWj6fCSDSKmSN0%2B7EalAvHpge8nhQLUiHnh7fD97egQaabW4%2Ftq8BFGLJJipS5MM4o%2F%2FA2O0rHxim7aeWglue6CBkPaBNrQ66LZ2Yr8rJwZ516b7sK1K50Ec852OsFNX8PxUuxA%2FtWRiycQnb3SEgeWgpss8VZjaUtIVdiHk4TWDo1HX61&X-Amz-Signature=52612bf3936a63f9fd04dfa821d9a3e98910d7a97e9fdbebb4ae8eadccebe4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
