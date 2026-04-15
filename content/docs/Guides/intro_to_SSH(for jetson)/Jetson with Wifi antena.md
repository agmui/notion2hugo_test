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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQEZAZD%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF62xqaBjRENxkFKtAs36B3iIfBHUBM96NpqnFaQvY3RAiAjLNDj7D8dw6j8JQiNBIht%2BoRv2ZKdxvpLnzgiE6lioSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2d6AvSZ3WQbdW6bwKtwDebDgqS%2FKkNqtxJsi9XwgXEtvidIN1AZTcF61lTadhFfVndxSSZUMBXxZGxXSQs%2FTlyU5wInu7ZuCfrEmj%2BMI5MG3QZDXER0CzJfu7HwgTkDjwBfQtCqwPm9Z2rV9QLMVHy%2FRFH3GLWBWDGJexJMkrEW1TbLr0Mwk2QTS1l7GToeJvt8bnrt%2Bm9PbDwj4B2LIUKwdPDhFZj8XXkoJwcVzPjYn2Qa9CCKuS5qgj%2BC%2FogdztakACSvYHyWYVkOPBcIdWqWRIVQlytZ1sPg5eKPywjOBbYbMMDYtwEBn55WJ4Ly7Hbp61lxbL3zWjxv5e7iRc8%2F7i9PE1NRIC%2BilC1kkhy91Jnq%2FkBrL54gc6FxcGdrHUjG87vWvEHuREME34JkXtwShXxQP0yOGwELfNWNHCk9dsBgi5AeqTKxYGuMO6vq28%2B%2FFi%2FEnshWeUgosMTHBVDgt9xMb61T5DEuJfbLBl4VzPafBagaW5mry8Q8antbHVg2RkmubF5nvs%2Bs0XjnvSKe2mKpG2pNdvV%2FZbMtqdKervRPP8ZcqAFddIExzi%2BWl4Uov9zljE5K7WA7x9w06rkBoVOjwgT5XGaxQKi60iVjrjSBeqWYwQYYfKekrlnEI%2FRUCwHVK56wwlhUwreT7zgY6pgFC95cylZ1PJwyeJoXnUI%2FcpR8ZScznQU5ZoK0bjylXNGVE5jCQ%2BfdF9RhQYn%2FkOWmWyo%2FbGbBydmN0%2Frx3J9UQNmiWuph0HbDsbdeHhmAbHFW0z9nCkzhHN3XEJpfdQWv3pnDtLErr27LSSqmuDcKb%2BSJbfPs8soJtU2H4XG5OYCxsLW8%2BTyauDRFTMpyZBdljo8UU3q1p4DwbEvGV53HzS%2FiUcQ1a&X-Amz-Signature=74342316c2e795ec34ef73d33959d2406e38cd49501aefd042a14f59f8b32355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
