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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625CBGAMM%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDKR%2B3BD0SvchmsWjWnkBl9a%2Fzc4fUj60EM1kPA4FO0TQIgLLYZb2kDgestzZg6Qit37xyWG0eFTHxKIKMKfLyOafUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBhM2GZ57vSg1zu4CrcAydVdx3IVz%2BGOAZHKD9E86Z8eaCfGlA14HJBBc7s52g1Znds6HJXxVizz7DlapGd3VWVD9WLgI%2BaoY5vr2G55hRg%2FoJm2g%2BAh83ANix3%2FnrpwSjmgsK2op9aCKcK2aufYY8TxN%2Fhzc2EWyfiQmHPbJjlJ3ML6glE1TIyiwoQL8hAIZ7rlNkHr2H1NBa876ufNWexQGG6rrf7YZNmp939M1kDKnfpxp1Q8T21qw0d0xmJhoPLGktAYiTpHp4ZMwP1b2KxmGFXaI9DR7Fa83ErFM7oQCf45ug3LoBApGEAjacGd5%2FJ%2BFbbSwAq5b7wilrC4XSUYw4UHNpLtiUmfylZXD3E4o2%2FvwzT9kJ5EmgnFI3NfHo570eYQfhkP8t06982Fs9o6cTTbzcyeG7I%2B3KPSOP12D1XB0JRyTbD41c5zmwF2hj8EjELxoFrJ3TCTK9uGmS7f9LCD0ERmdjyb4FOakmsVp80WYNw7hksBANkAEEm5n8E1YaBHx3%2B8nhMOfVYC5oYgs%2F9pm3uuEnvfFAZhedoXhyjTfx8uTJM%2FvjO78CUr5Zbc5Zy2wtXoacX9MuMIOU87Cuh%2FCofXR9l2E%2FHke2vhHH0gemvYqrt4WPFoc%2BBbESXgIpEWT08%2F7aDMID2isgGOqUBEshIIDQW7UQRWNS2u6JjYcmLrmv8GdWKTSm6%2BaGWQtj0UISh2zukHJoYv3aKHxoVzhFCYanewwb4wg3BlMVELbP22N0ZrKo46ECYXA8kMaeZx93D0ANriXZgczjcrx8V4vwUN%2BJeRqi6VsjrTLymGlUWVcmlAdDlLCfoCCt%2FHXj%2BqT%2FuinjY0YqQEs1ZFCmpehWYxAeby6VyCv1MBYrd%2FDD21Hhw&X-Amz-Signature=2444cd0dad0be3b199922a7541388bc667cd4f0bd1ae9a980307516a0e7b6dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
