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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQANTSK%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEm1B3ZKdjL2oZ3kly4g4QUQclKeWq97Mx6OjfdSfZ43AiEA9fdT%2BIgS%2BCqYYpY%2BKRXC%2FcNxcK11%2Fnv6JGj6g5oMNgsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ89AB9J23CEhNVzgCrcA3aaSCVsQkRPXDb71OSFj7el90wjziXwThZy32aOgOlt2yCsgLQKPWsIhDtMxZMCsgdIzBIe6AVLLqTAbXK5DM84ckGKQbtTA07jD4sz0UQl8jdKuVZM1uOxTgZJMj3OZfzsh6DzQV2NrqiFqJe%2F2fWbsCwXbGiJZ1IutrYK%2FlwnIrhVzHY2y0zEBIniIaUfR8n%2FKpujk8EoJMk35g%2Fpjg4BrDXOJDRr6TT%2F3GYSshw31nhX%2Fv0wFCS7Fb01bZ61RRhlSF6qd%2ByZ42I0FI3Si%2BB1VMqc10SEp4f7H8Ply5sqvvse%2FMvl7yuWUF%2Fb2nco%2BULLts%2Fu2rqfSxR6G7Iui5OqqgFrW1Qez3pFLawcZ%2FdbM9vSeW1KlZTBYijgvEh9D9A8GVDLl7bWWOVDttW9dNTFxxm4mI%2FFT52uAnmT4b73o9r3TVJT7K5UDM2KY%2FhcJmdlZ7lYRwD7sj5IQvgVTq0Xbri89hDHWMgkixlsaKLu%2FVBv6izx0OQWOinuZXIjdR2X6nPtrDjvrmT3IQggpxG%2FL85dW0IhPlgXyYwB60YEWYHOOpRnaJ%2B0VhDOJVyv%2BRpr7GHTx1zhKleWRQL5PcoMKKvkiLxE7tJg6n32GfuPRcNJddcfP4mvQ13PMKa%2F4cYGOqUB1ZzhXEZX1WM9%2FM%2BlqWl3wT66ZWG%2BOKf41xOjFbqQoI47H1rRhJua8ASm%2BN9RF2qMdcr3eegEZqi2mic4QV8ZHNt%2BU8%2BuzM8kb9uN17EfMEYfAobOuGkXrcWwkvJAPUiDRqDb%2BOeqZYvV%2BKepBAKQUEVS1JYTzV%2FZLjbiA4GkM%2BA18rTHsv60N53pNPvNgzZfh9k9b%2FKAug03kTzTTQifa76FmLhI&X-Amz-Signature=9f9eb673e9603fbc33f5fcd7dbd51621211a17a228a437596d23773cb047d8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
