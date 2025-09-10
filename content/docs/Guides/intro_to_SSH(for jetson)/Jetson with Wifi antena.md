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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5CEEVOQ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCTggeZkpW6pe5pDPTWTECNpIqbjG9EdjErTLbqL6x2JQIgV8J%2B%2BuGqOfyhNeJg%2FaIlKgPVCs3eFpdYrAGz%2Bb8P5IcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9%2F7YcNTAKFNwmn7yrcA6LCmg0h0JEuVSxWVSbcpSycyZpvAQdy%2BphIJYhbiSauDNhKuA9G93QGtIN0FZGLiMI1NIF96l3RanoxavoZIiLdONjP7DTODcXLv9jDWyxT2UCIDdbG6%2F2WlyfTl6g2a4HBJpb3RMASGayNFuAKiD6fe3xa65ZXMUro9zbvKXXtmUjodO8oefpC4aKccoYTIypRhjYr12hEqiNajPMok%2By9sgXmpEKbxEki%2Feuk5%2FwiR3I8ApNGF%2BdFTn2rTqGfDpTb2oXoVgleciCsNhnXduQ9%2FU0BXmk%2BJyJRPTj8ScrFXvBwnnZK2mhKmzIzN5IV822ogL0USs2madwan6IOXNAwROWdtRS6zwKGByFelJMy%2BltjlhQO7GdJ1B6n0l6msH0KqLYJ37WdG8SHxfpe%2FF5m62Eu%2Bho3sFKP3MnjOeFATijG1Etzw6%2Ff7MZ4OYzAtOfd7BHYsTMcCe9Ywv7h8PTpzWnuJqk%2BHhduauIl05METhiNTmLgJUhogSzPH7BmlfSPRUKoVmdGU7QJH8IryNUr6dU5oMCQCssWZL6tbHaF1fYt0iRfXlDD%2FXYfAUuvLUcmJh4L0Yrvb3W1gKIzLZVUVb9iw%2FH8VPu9ZtHouQIpRjWSG%2B20fw%2Bd%2FlwnMPCLg8YGOqUBRBzzV4zg5ZL%2BmM0HaNZv260IrTmmlFwYjpTI6siXflvdSKBKsz02YZoyQ5Q4yE7oSWRpTPlSF1V9RniixQApuRcYbyLirH2huzcmkDlsA0PuD%2BP5dZ9Gvm%2Bie75xs6Vojx%2F5znmgWBWMqPJs0ywoiV%2Fpa8Xhs156ka7LV8BO%2FuuhK0URPiK1dWfhSsq65qaoDFMrnCt7zO%2FtV4KVKbgSREM8T%2BuX&X-Amz-Signature=f9b466a37d6da71516bb89b7550c27a7c3bec8bbc71003263d0a7172db70c990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
