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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWMNKVAR%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFcmf8Bxuf4VlZVkB9BuCxThljuKa07Jfb4Tmz6hNr%2F0AiEA80igLg%2FTiZbOIxJs7ZAIjyP5TqtcN%2B449pyKK0l2XMEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCpa08ssm8XPp%2F%2B4KyrcA8msRjiMkK0aDaiVZZYXARlsPdcV3T9To7wPjd2yjDTKPJpj3OY6A%2FEKCjhffeQlyMdLHQPdXEjO4mAd%2FcARftCG3LyfwES23vMPttewd66gOp7HnpfgEjdi%2BP2XEfF9ApVN30t09aMT8YFlnSuwwtXcuVjRNJD%2FjBnDpmtkeD1IwRvgKgkhWdhbsR8xOGORo0nIN17kANz%2BkVCKtvZJSieb09w0xO7myp6g3R0r8e079c1KNzyzVNquXDPAF63f593NwCsNSyi3IsCmcjONakLnWD39CjspCzz86A%2BdQEOtbC1fYgIFukVJoJrADMe6lXdk8lm%2F0JosKhshIVcFPFPBXwyywloAfp9j8FYBPfYr%2B11NcFmCFiURUk%2FgsmzoCKx1SGZBNeVB448bwE776zzrgw1Df07s6Vik%2BJzhI7Bd%2FkJt%2FgIiIgAbQUIQphyeqKJX8Etzbwu1EKGKscs5mTQ26i67MqznnHsnRD5l4G9ODoMIhoO3WhmRhus4PqFtDZsQHuBxYTkrK%2BfWWA9VBZ6Kd5Kny1XVsY9s4z4LOlQ%2F6FdtbGhAHiLVtklsO%2FgnOqmzAcLdRo5MQgueM%2Fkm%2Fws2Uc6LXHa1xVhwan7JaFhUNpddIUXFZBCgqqUNMOSstsoGOqUBVIsyMmu4nftFitDBhj510ZUNWw1UtS58kj1egmz9V%2Bp%2FBZQ6xUw9GPL%2FtGpRM7iOQw7cGI1Ozln8G4JwfUK2ECaa86gRGub87%2BWE7Tuc0hWp%2FVx5g6NsU%2FJNYXun0z4Wb%2BiqoTqixS%2B1UuxSiADA3YY7dItQOAXSfGz6miHIfqBYmAa7A3q32ArDHzeAfDQ54JtlbtmT%2Fo5Ylp9AZuFrelE%2FrGqu&X-Amz-Signature=66a01fc393cc61f90c9259dfafa9384517b274f40469a1d9ec1017ad917f18aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
