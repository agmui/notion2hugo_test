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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMUKM6B%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDsPKlWQznAc4eElKAGZinKMmN3qf5Qk91f%2Bq9EMREzYQIgAWiyUfSavwKwu97ORfKsTABYD1wXgOMa%2BmKRnTnALwUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ruNawKvvzHrI9xyrcA5lbD4ZE4u1WqJSDfo1Nv%2Byg5NSsDlVdbxWd9Hnp7EONOtIliyftzbdJnb%2BriiQHHMdwSZKOrSw%2B0M14Aoy%2Bgyf94JBZ2dNbb86SjenetP%2FUWjddC8kqN3pQtKVSnAB%2F5LSmAoAbbO3KCVw%2B3hQkGAYZftJ%2B%2FBuJbSLE6Pfj0TtDu6znlddv5tbEXYZAPjOVACT%2FPpyuGWl%2BcNF%2BSMT749YT%2FqYqLfPw45xl4n7oqDyKkphWpQtTdzBF1c5ma15Dc8gSSNOtKfRy%2FUMmKlY8zw%2B4UQTjZE2dM2pSH7gT%2FfErxCmnRtr%2FYbCXiT36XNQqXMoJ9%2B%2BS4asukMH95XirZNEW1JZaRci3HX1HSy6hUgr0KIRtS%2B68cllx6gbB3R2iGgCZCj4s1rK%2F%2FyJ5PazDmZ7jddWO%2F0A%2FEgXu4JVXGnkDwB12RhYYgfMXWLeDxRAAKouk4uBYuAhFFfCO%2Fvp7LkxS8Wec8wYaAFlhtEvLgCPP1qq%2BbZ46%2BeFXtU%2BsB7Dbm59ozVxR5kcyiFdOrstJvYqCq3pdhkF03f0ZbI9OqgG%2FpBIlP5V%2F6ylV7%2BzbPlAD2LvKqblvZOjBge2L0KmJ%2FAfG2qV9w6paLO%2BNbhnUqx74f%2BPqd%2BjJcnO0EfwHMLTtnM4GOqUBWLubozYdTeRDo7qbF0cDQT81Rrm78syaN%2FYrB9TIJ0f09LR6G1HkI3l8vPUYORRsgjKcBfUOcjb2DS39KKWoIDrFqpAVUBq%2FShy4VYmuk3Zu4TDU78k9TQq9p%2FlFjfGg7hHihntTWiS8A4QITgStzxskGNJ2sYglV7wc9sW0sh711iqlsc4jWg%2FKo4qkD8n%2BgDvJfKyieRQwtLYQ2dssZT%2Be%2F%2BJc&X-Amz-Signature=25cd533d22edd4e6052d90e0488a6469405f75f03303d50d3ec897de40e5c7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
