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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCZ4LRW%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBCdu0QDGYLSFycwUcgiBAz9qWzL0IDUVzklb0PsdNgVAiBodNn%2FtUN2Gy1esEJslgrIBzECYAu3qTKwa7ldr%2F945SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgAvvrGHRkcseP6ncKtwDsOySENhfjeK3DkzYgtEKWReWGpfvkEwZBlP%2BYHy9HO5i3C4IroLaE9GZVzSNYa6944UhSf04irkqgaotyQ7VZlaCs2V07aetKqDqnx70W6J%2F8zN0HrHgKU3KXiM0d5L9HwGup%2BzdlGGU4%2F9EuGq%2Brbeip7iXtXP9AsHeu1X%2Fw2ITw0dABjj5XctWwKrZP5Oq59sbnwg%2FwvOSWsnr%2BSP2Z%2FdWP%2FkTZ6BIC9CPIYVkxcuuQu0A%2BTS5Iqc5XtgA%2BWxIHsnv%2FcccRN7FfVuPcHdcwrUnSuWH68lq4sBJmU84jl4MJhPVfEExzRuqg8GTTwzd5QbJq2XX6F9tu5U3TjlAPGJ7%2F8MJSapyixTJSE1edoMR7q36nLs1TWcCkTbwoyR3MWWBIox4ZG4hub6Xx2fhkeDvh1sJhVoqBXFX6vDRl1pe5lc155kabLYdzxvT3HoiuA1oDL3rDInPGzdCWdhXUgpY%2FP%2Fthic9ZpSy1UE28diszmeS5OXtspFp6iSWjO%2BkkpNRFJBORTnXNiZ7HhQ79hlO7FS%2FjLd3QjfZRJfU2PmztknhM%2BnYUYEau1L2Wvv781dvIhqg9NA4oJy%2FVj6VX0UGpARhBZgMFGvOyoQ9KlRvp9lCCXfaH7netrQwsfL9xQY6pgH36Pp1gNMzuw5P4GTJ484Z3S0S%2FqCJXQrBroWB%2FGBptye7F94ogzHacMJgjsfq6wltbaqVYE541Atpid7CP97aaIG5SfoV%2BjOvFHB7VT6JPbqEYywg0HfbIbHtuU3LP2dajWAXgM%2FMrtKFDN5AU%2FJbAncLmpK59zfbyvQ1N06FUss7ajBycCqbkWGg7GjCtJrO4NXoX%2Fh8D9LmMu%2FKLPMRyGh9e91f&X-Amz-Signature=1bc049b52ed7e4d9771bb1904a972022e1829086a5dcead91572bec1b1c1e649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
