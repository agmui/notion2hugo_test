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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKKUYKS%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHyr32N4THCoYrm9s0X6lE4tpFiHbwXGtlaZMYd5155nAiA4li8QE5lItGPVxfJiGvKLmhmVT8Karnkl86XtOJG5WSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJK9Qsgsg8SGtQaxGKtwDw1JPAP%2FlG3EOFkVrfFZMkxCxwNrR5L1nW92KRs%2BE4VdgGmnU3BlLJrsuIAn1VJTCutaHbz7cBdPZHCwM41aD3enWvJlIdSQvJaW%2FqZPxg4NrqHRgCmjas7sw2MpgViNwUG8wOK6JE3XiVCm6akZDfZM8xNC2S%2FNSyCZrpWu1uvRoZJp8ecNq1bs7cJVbaXFAUtmzeURzZhe6ppDC3T%2BP4uaEwJ5W5RWZVcTez%2B1v6WeCeVSgBnGUr1t7G%2BvkTg2BgOOtzykLDISUbJd%2FzVqpl2Ay4Zwj1eljuCe4NRRq%2FQO3pss9WZ4suT85j3fPR91MTfWAat8zmFXJ3VUw26jPVdsId6RyUA3mvft9WHmTC4ZHPE%2FgF7NKCPwh3a2QNGaqS841inqqagFAeeS4g8hR85BbrDCaYkpZZWtTZJWlIQR7hU9s6IdtTruH6SlKDoLmbEhNexMQXmFm5HSg2EjoyGLVR31Zy%2B0mxDcM1KheuyJEIvSU9namZBy5Yd1oRIwO%2BuaB%2BZvkdY7VKFC7IYT0dyBfh2OUhGLN39ubBrQnR61O5MNIyrStAUI4xz%2F48IJtKm8z7Z3syWGH2c4UNq%2FT5jGiyrRJR0BOwxXGveJI1r%2BnwTvQm7%2F2XfkdLPUwsO%2BixgY6pgE9ItXIZCG41R5wJnWR%2FZv%2FZ2r9%2Fmd7O15j3Msb5yzGTp%2FDcpglXMnGtgHtTqWErbmbi73wsvvCbWZwNkCaiMwTj%2F7G9NwtevwP%2BTMcpx8I1xMb7cuw8MRwe32W%2Fld77%2FfG16tRXLMQWKgSHBgR1gh56meG1ZSh5AtDkhz5Gkdmz6WfFFDj0JkIUodJbSnMHrBLYLaMAZtf017OKjgvm0imuF3kQ2dp&X-Amz-Signature=3341cd6dc74e5d479357b86dacc554d201eaba5a32697c9a20c5bedb77fa55d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
