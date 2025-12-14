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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCC2V3G%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCrrGvBHzuXfKeLhNhqSfXLpOwTZz3uk%2FfgkUEKE1c8IAIhANHBPGR55BsqjjJCpQhNHd5P8XU%2BtRvTrmxaer6Sghu8Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyrxNki5Nc8HdKlOzkq3AP7LhSqXP63Gzs%2FKVJBE7jF0zpbRqK4Ps%2FRDGW8%2FbpCgDS3%2BEJG3MBSaFlPrI3gXJfxVj6ODeQDVx81VLeiWFHW5FQU83GUPeZ6qw0lsoMxsNqLoVj91v1dWlp94OL%2Fg%2FUKAaWueRKHmoPIJ8EzZpZE0OrV%2BQno%2Fe1VfViuZEVZKvoH91Ki2s95QUsH8Is9jaEBgA01KmuVNHL2%2B0hT%2B0C4j90Y4cLS4dDZdhYAnZcG2%2FagsGr%2FpgbLrhN8Dj1DDXWOrwvEjGlqvP%2Bif0nVu5jPhSl5jOsuUHNWtadnXV43iXsHhfIfQRRtOD2ByipLlBbT1AswujICex1ztGkhG29tx1jJHS4izyattPLlmGn0FMuXKCV3eYCPDJLqMEMDE2VJgySlMxT4JTqxursCMqer%2FGICYxcwTgpZDwUWnckM7dK%2BV4uMzi3LfH96etyFRXwprbK6vrj9Pz%2B6ZwovjLo2%2F2oPWN%2BRSvAUNveD6I6Sb7toCI5OFDAFGDXvRMHCv%2FLM%2FmEnyWCx485tchQNM2x6CQOt4MnJrPI8G1iqys4F0zZwaCgslg07ONiCbxXnG9wpSb7StAeztvs4hMrSBtk2KAi%2F4abWH7rM2UoDsn%2FaXx6G%2FKEBwhaIONO%2FUDDfl%2FjJBjqkAdM8ZAky775wkSAVCNHvwrqNpRNp8gEnBleA9F2ooDCxf3nvFVr3z83eJpXx6crShCQQAsJPOaO0La%2BcliA3ikL%2FG3EVM%2BEKWUQzypLwAIueu%2FdnwRiiNk5EbP6UvzNAtmmeUVYmzzH22q3WT%2F0suS%2Bc%2FEM2EzvhRKM6cG2OVOSIB1pso5ja%2FrNVIzp70TIvRErgfafvt5cKuhoh2GjVyKLyMPVL&X-Amz-Signature=29e74087f2d6703fe1e90c5ccd123cecf1f8bda51ef01b9a011204e5bd0aa1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
