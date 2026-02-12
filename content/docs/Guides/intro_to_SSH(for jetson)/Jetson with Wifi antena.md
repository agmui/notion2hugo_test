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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UHRU7L%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHomnRQCYvFGltTZdn9Abr%2B3Irga06Bw62V9kPCS%2BAoqAiEAmW3fxTKIiKVUWcw6qA%2FxZixqrNF9NKwk9icO1WstdM0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS%2FLHbbTI72KFEmpCrcAxmP6pk%2BOBHNOYd8ygst6USnqo%2Ff59FcWpQWQQ209JyOc3HdGltMfgnEnQ%2FLzWNl554uVODPd9ywzs38OaLI4eHfac4K74sk%2FeF6XTC0kSABB0GggJzmh3CEUY%2FcloGmFS%2FucuCl0ugxZgriHYwUujw4RCV6EUKX3ncuwB8y8FNW9xuN3fIOf5pIxbXw7GuBye50%2F%2BT324o0Q9DzcxDCPN6CHafg%2FduxaT96KWK3%2BYgOYzmRQpa8YNaUELbrV2okgHuRZbvTK98Wqog9O6pKnrzFGC98Pkrv%2BSYnOAjcjCiA8fyE8a3BCFgchyspgKzb%2Bm69TOipk0nihOjoESDuFGJO6TePh5oy2xJ5JKBjF2gYniXv75APhbEq0KXGjIgaYRzVLc6pIdYVF%2FmQffSNq49U9L%2BxsEFzXgWacWumBScbzYZ68AKqPqHTfG807SZk39GISyhtNfP3eH1TQKDXvo9xf66lis38Y7E%2FTXHqOHnp6ummel55%2FWJwA66SVN9S6QojiJMHZsfSE71NAFUzIfWKFNIQ%2FJFULopLg0XaTcXPHFg1mL4USm3f241BcWqH%2BGzDcbnSA7UiRwYQi%2B%2FRXRCSvBa0WlEbpKirI6Gs26sCpqpJRmjE9V%2B1gZMNMJTItMwGOqUBe4729aJSdWxbVR7vLcSjyE3SJT3mUkgr8jeuoNm8xrXIJYh4%2BAIuZjtdIhR4SsU5nTPpXrnSFk1CJe8Q6eJHVigyZj5wwat7%2BtY0xHnPraJPx26wxJTI%2FKuC5rXBHcOoDo3scTWMseBJ4KJlj%2BGb4gqN%2FYfrJGhIz%2Babu67IUe0c2Sa2wXGDnnEJ8p8RQDQsRrcmFC6NpxP%2FaSfzmh6maAVu%2Brx9&X-Amz-Signature=eaf8223b06e46681193cd69ae4d08fd78e2f50950ba56e5b811897177200143f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
