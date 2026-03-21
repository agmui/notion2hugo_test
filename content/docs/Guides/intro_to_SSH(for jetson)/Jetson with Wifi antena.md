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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3USQAK%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDbE6vCJVFxXGIC4rUWazY5UY1PofuadHgpvp3qaY2vjgIhAPP3EXjeSpcFkmP1mOcfThRb2OcgtUAofKU4hI%2BVcMsvKv8DCEMQABoMNjM3NDIzMTgzODA1IgyBg8ord%2FyThADydq8q3AMf9yZkFDpfyfM9QnStHT9ycLZmIj8iAfQ7sm0X578UhvlY6hzTAngnzg8AsOniz3WGGLuHosFevIFF%2FovQXuAl31xOphWTv3YbtFze3SfqCUhZHhNNqPG%2B%2FABGjfBBp%2BmCOAu%2B8sC0HzcqmM8%2F966zEvpp0iKKNMO8zqiRK4%2BAgvjbQzJoCAtwdo0LF75eMKOSRRPdnnoJtDbNH4sNUh%2FK4AhiWxZg6HX3deOKTMhxhVM9HJe%2FR3O8lqahnx1D%2BdieB6AFNLO8dNQfz1JfMqY%2BMI6lHReN1C1jnKVgZttRZkJGtRNayoGGzjyG7mnTMl%2FCu%2BA19Pew6aElFLgDqU0NmggzJSxu%2B0BUiif98l8L4uedy1wPglGFth0GAh%2Fi8wH5uNrrD9p3WwlZjjb6yTkntbUjPaTcXy8Mr8agJEkktpADptngOSWoxvV4%2Feri8Cn7eAEvEsEG4Dki0dxoArHazSNZUFR9pUMk2uCaaHlXD2sik3sV%2FpgxLTSijwNnbgfKBk%2BLHfYr7n8Qk63lvPV%2Fx5m60wO1kSnsr5mxlzvsV2s4VwvRuhT6ICcChlhrOlAhkzuS%2BuXKLACEY4evGferq8V1vGbNHYa8ieFRPKGOb%2BexfDm40NLJFuBndzCE9ffNBjqkAWbr9LBfL0AQdgA%2Foq7zpeqHo6LL0FWPJElibY6uge0fWKqxf6iNlF7kLtXHRnmVgk%2FejVUMQ3WGmscVqDx0F5MGORZzltkgkHVYCpHTTRl8uCn7dgMiOddzS58EpdvQBteivBv0x5jGT57%2FNuGB4XZLY8aw%2FhgvHRhrwf8jghnRnUe7j4S7rpHcacWcnYASKdomQDDxuRyuq5qXur%2FfznnhG811&X-Amz-Signature=ec60b6bcc4016baa6d6650d21e8eb9193df7647ec86d93a29d9574d52a833f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
