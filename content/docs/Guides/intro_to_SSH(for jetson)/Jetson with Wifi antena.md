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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7DC56U%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCSoPlQIHtXrs%2B4Lfpeh6zRbta0x%2B9XuRgHDeCt51EuQIhAKUW%2Fxx8V1yQdKqvJWvqvPoZ6c0QYvQyBYfYzAWm2SazKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcXcmJgc4Zlo7eDYq3AMQSUbPcmkwerphnZVdJZtwYen%2BZ26E33BXUaF9VSUVqiiNyrQuwDrpSPcFCTFuLIThwtPuTp7o2ffiTs%2FIZ6YderZE4NA04dXecuPn1m3YhgOr2ljLlD%2F8291Y4wKTM5fQNJ8ztafVOam81WbVrZMFFC2vjzNOxPbf27iwhMJ9t4hrHnLmx9%2FAGLi58PEWaMiAjN25DUohr%2FymP6K%2BSEcSvGjmG9S2JM2jtQka1N%2BpVVjhvlh5VAiYVoINFOGL2bV%2FYTqbBctnJh8NdOBWsYHoK99MocEKfIRwOvtp8cbDcDMWI%2BMEOfUsxAZorCpUeyMIV2i4om%2FxHJnaouvAA2aD7Hdr9Cz6lYBkvXdHBOtdbCdyTihzLyAwWNkYuFi%2By%2B4hmoJp37gnMp0WuTQYjM4py2OL3ns1sznnW9VRiu%2Fu5W7YIUAdYfRyQJrvkkoOiET4WnNRFHVZKW48IRlXMFmMD1DeDWd1QOzE%2B6YOkXhfudQx%2BdRz2%2Fyjg5pMgdssel5IiO1LTfFYOx%2BA2eRN3i9MVQlOTzpjsioTwOfpAnLP3rOCar6C4fQeQTM0yOCxJHf54EPnd6PNxAhXA7Lw8WYxAesvOiaKWvkauLm%2FFY7cTPLSEkhSIGX5HpB0aTCKxPLFBjqkAaNhiD%2FJUOPTsJ5DMaQepEYFra0Z%2BapS0hESpRQtrr3yttqgmY8CX4M8UNcg2T0t42v6%2Bu8EMFJ6JwFy0dbI2VvyuN2nOPa6FGNCYXClCij47Tsy0hYb9NbIIA7zP39fvX2KcU1ab%2BdurSK22Umml%2F8ErSRGnq%2BMxlVpHrH2a6%2Fad1aQg0hNd%2FtsA0hmtR2oaniY6nbq8yETMD0wMz1ds8pxXCHX&X-Amz-Signature=3bebe56a73ded6667d196b6526b3b2daa67424c878bbcf748c88793db31feb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
