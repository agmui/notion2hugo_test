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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKJ244E%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC5yGKLLASUEbG2J9k00aYEIbGCliIeUxUMh6Qv3h6GiQIhALjevY%2F0uZPzb1eYFp2qtVUIJarxjlK04o0gE%2Bn0JE43Kv8DCEMQABoMNjM3NDIzMTgzODA1IgzERV3RWN8DN7D52Ewq3AOCIAI77u8s7qRNikokU3VBPE1utN1y0e6MUMgrPpuEg0fJAeFUtRpdQJZ%2B3OP1X4Kd9AQBxDsZveVj8qpfNeDatP%2F0x%2FzodJAkIh2pxKxYJ%2BBb6RlpSOHKCRaahjOdpj2DYQMWtuo4zpJdtjThDPCj1uk5An7KXAFZRIu0zHlNMqf8CHAxElTKP9xitsXIdjUHkWHOW1u%2FpN%2BAab0Kjo91bkl59LvzVZhKpQOzAyOKBFguGvkSoMK8EQ6yCgi7xOYU%2BSXYwv%2B9PIKgWknRx7AmsVDM%2Bbr%2BlmWC%2BIzo6d0v54Bisx747REr2%2B8qfHXwnD7e6XS2o4rK6AZoiZ4%2BXg7M1pHYLo7XisFYmX1oNhpTybsUS%2FX251Jw3DGT5KJF4B9o6O3XT0AcH%2BjR3bHTTS6pIFB0XfApg2%2FfdwSBav72CxbimKpzEvhPJngKV9VJnvljw%2FtQLTsILdBuScp0Vn25dANAvBLvERVikOf0%2BT0eP82kKN%2B4QGkJOT7TvMHyS8LWocFs%2F%2FffgbZS46GtQ2yR0sLVUO8IP%2Bxhgvg4IIEyjqSRCY4Qd1C%2FkCA1Ux55KpTLnCGgnf5Z63Hsib%2FoVOLzv7%2BPM5EB0eEP2vr6SfLe6d20XE3KnnFA%2B%2BoErTCxmM%2FMBjqkAaSmZQ%2BTmvX0fdjFWWeFqeSIlqpu%2B56vFV4DQqsMHgZ%2FJ2na5HgjTNY%2F9ujSEhhm%2BqOsL%2Fuz8BdYw6OnG51P06uNMj4EldwZ0GPqPHio5kdMr2H3PQ4Ezt14F%2BYmHzNMZcZx5hWN8Zru74W%2BoiTf6MmyC%2B92Tb59EWKbEjxt3uqPzP%2BxG2PgvavVrquhh9ONFicnFzaMS0O6KiYACpKjyEUvIlhd&X-Amz-Signature=f76d93c743c1a5278f142e6e8903b1fa064724d77125d7ff64f4d052cb6c5527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
