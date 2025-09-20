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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULMY5OE%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFe3hHUtKuAnbcOZuja6jZWs3k87eHHMPm3GYyBcoEIkAiAdy2Ac99OfKjIn%2F7ziMLXYyiBdlJAIW9z90%2B7g1Wl9tSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvGNWj6Fowuk%2BMMKKtwDB8l2epAMlQWd9H2N8KPC3qBQv0hf6ZvTd9OMNLwJ8HS7G3xs9AUqo6YC5hCVCAx1NonP%2Fa%2F69L2HAKsdjt%2FLJqtx2elyeAcjnsd6mNBOySsbI%2FqEE0%2BIIm%2B050GVdI2BPqu0iBhQIsdGq5UcGL%2FzHZZBJO75lX7YtmwbQqBvYKsiFHC9%2F9RQwxVfKJUTWsrR2sUoLRdfC3zExe%2BpBdjPxkKiRRHQPJAeI38JvdXJP%2B4C31P3AJLtXrKyoGu5LGz%2FOAlHNpFi0aYrE%2F%2FztUue%2F2Kb6F5AeVyjf199dSAlMDSSop0zFpYvH%2FC7IzYAOVPaEPMR0Q0Ewk%2BymX1hNrYmbREvhcE4dpyEoN5TryKW6UJG5TicekL0WbV9GzuHBYl9Dt1bOjtcKnfUSs0zkeiPUA%2FJ3zL6Sflps9TQT97Q2h7qBg7ELXemm%2FnChgbO3oK2HGD6I1Aikkh4WEFhPdRpDVCqdd8b9ud92xrT6tF37p1fP6AxT4xseJ6094heOKhlEqQ%2BmaMmlLnU4F80woA6gFyWemJjp4%2BsYTQ0%2FHBEL4lN5UZqNniBxf1e92%2F6dpB0cm71UkoEDPlvaCKnrSW6RJK06L4rVm3YHbswE6AzvRcy70Blj%2F1Y8RQg5Ykw8P%2B3xgY6pgHnQtOPm0cmh3OAYK9hmOAGeBDXyYQj2xT0u%2B8cdGCD6X5OWSAuQiR0mFZ%2FxltepCdOybTf3J77X%2BlbQ62XPtBpQiWIpEefECIagdvvp7sg0Jth3CrhPYtqTj4IsCAMOCCpHzzaxiLtStcrN%2FCm8hX3erp2xINIshw6FautD8lnGzlnDyWXy4p2UEdPcfRhNtsfanQ5Y%2FIFiBv6D5plITvNsQDsiASb&X-Amz-Signature=2584b6db2619064c2bef30c138b3a80182f7e844cf932bc0cae3781b5ec0f5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
