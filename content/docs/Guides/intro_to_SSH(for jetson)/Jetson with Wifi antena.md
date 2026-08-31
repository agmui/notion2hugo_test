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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRKKG6M%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeu6EMEQCJmVKuO7ihgmHK8EFemr6HlZYvyB%2FndOdKDgIhAJc7Jw4GXaESeeiPcdxk7tW%2BbTM79tYu4YTW8Gkd3o4JKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf9LA%2FSmuqpnACGS8q3AM6%2BVDFbezKEd12bOxJO59eLMm9OXdPrRYdnpq6Dot17QfIZt95YR2TcRFkkAf4PbpRinBzvI3Kf4WnGDR7bfyTc1mXlq8Ia%2FK4rrvmmZb3ZhpaHPLSeF2WAkAudraOhQ2PvQmn5xLpG6%2BhpCcBNkgVmS0TI690YaEVH4GAn6%2FJ7P9%2Bre4BT0bx0gbItwRCrHPbubFAGrwXuamJFrP7eFLORAYig7sliaFAOL%2BMNON4qF6b4hYfm6nyX8sQ5Ro7mDDLrWa2P9JN9N4i0kNuov5FCHWexgCvmwIfaPBKkJ76%2B2XyTNikIgXbRPrJYZNEmX4q26cF6oVmRYxXEU5HThlUT5BPG4Kz0FcsrUk7qzRs%2BzAaA0Jz5c83Yxr0HkeYKV75uy%2BnPuzMq8Ix0LU3GnkxVqSI%2BhMMVnwRcpDwYRHj6Ihg8nCgeZfHXm5Pwi7fkwbmsDD6kjzsp6FQZP6E43zgAptFjL7cKDOeytuH1bK7xce6iBfgxv62tm%2Fu5hcg%2FAg%2FgiiJeImL%2FjidUOzrJ4r1sYx2k9WIBLqcn7PiSlZRhuLaxIIWgAabMhMAuAK94ET%2BReEO1x3vtwQo1KPH11njELyDfLBlXUyHy1gKjUF941Nwjt9mZNSJBc3%2B7DCz3dPUBjqkAao9kyATkbQ1RN3GbYneQV4fiwtUp2YSa8XQAa6zD8B5dEl6%2B392JAkYNkAR6C226FkK51XOiga0Z%2BP4i7HpytRhUZuScCBDPF3T4iY4011pozemofe5nidp2lvwrIoBBPaLROV6TZYVVWTWqvev%2BX5Kxys6GXSiiVqDvmojjAO946pyhdZDP%2BpwWc7vF2M1a7cYwbnuNDn%2BQ6%2FPHWSay3J6ESHC&X-Amz-Signature=6701ed5215e87a79cae202c81bf1594ce906a78181af95951353f2d510d91aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
