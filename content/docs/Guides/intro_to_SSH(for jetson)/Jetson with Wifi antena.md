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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSE2MTB%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8b03CXbpYtp%2FbN4kimxgR9frGp6o6w2u7%2FpM5RXXIQAiACJJDSluInaS8UID5W612ORF8PgnA961IW73FwhEQBDyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZdvLIYDU5l%2FItvUKtwDp7VWQYgKOzHouWkYjEXYKqaIs36NSoSHsuJ6yNq5qD6nlrkTT1CD247gf4O38XHSsDVjcE%2Bh0iXbseaVlJdSrVft8ejJuhq%2F1GT3YuzffRNVRheQu9ci8yma90Stjv2btBYQiCn5OVtHLpgG5gTo37MTr%2FchfyBd4rMw%2BGmG4E29ThHcobeJRKgdS%2BnKOjkv1hUvYsu%2F1un6ko8cuqr5h4NrJE9ykMJFGwk4xRscLIl0nrBurIS4p7kxh6L%2Fh6nC6hRUjngqwoOs%2FQMTN0qPCaMtswWV0MvTvxDHSsw%2B%2Bhb1I%2FKfYpHdcZ8ovWXNS%2BwKc2WsMdk9sf2r6ARFhSbDu9Lc7n%2FJnXpD%2BclzwV5OMq0a7ncnL78uLA47g4gyUMoz%2FIAXtbsDgQGAGfgsMk5ypS8CPR3WXVybzZkgttT9rwn2%2BjlX9RGzphIwzETdxecSD63DHg7VtWTmSXK1lUHdiKT8YdCE5tgAe34pT%2BCxszG%2BW9lLtmfm0rOOuRwYLGxgwP0Cdf4b%2FGr%2Futsq%2FUzsK2jWybVZlcZ85KnBY9J7cI8iC5aed1BGOw1p59aABwGe2UC6AOr4%2BYVe8VWCS9Ss4BMHSuEmOqcauhMaX3HdxwtjxUn0%2FMkN944TcOwwq%2BaWxwY6pgEhIyIU7RXhgHFcIcxdQXhMGxmnSoYYH6rfOFyiES%2FRswEzLrLXKdw8g9zjiCZVhhHGp58rA%2BBj4ETIwkU%2By%2FR%2Fk2qTdgMAZZn53zMKhAW8cUZaApeW9%2FFdQW8NY27j31aUnHhGcL%2F69NCb3jw5rKpdFiCCpP8zuy%2F9meFcN3HvnhQMipeT4ZRQZFsHRNTfrLw9ijYq99yc68dmVY62%2BvhdwQhCb1vA&X-Amz-Signature=f80c38bf5174045b7b7df99aaa40573d16c1882989899e78d644936a3307fc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
