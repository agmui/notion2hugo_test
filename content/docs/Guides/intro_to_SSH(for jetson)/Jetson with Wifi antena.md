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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGREFCZ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDKiUE1pIMCLcqI9BV99XIJX0lJRPQo7vEPI4tKSraVvwIgI0toWkF%2FgKxZ5F4q5DDOjHc4Fq%2Fm15kNgMS1zC0rFiEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8WJIHeLEHhZZbr%2FircA9K6w0IPC4LtWxQWeBHuDy6YDn2F8N4C9Olv7RyQ80RbxKERVn685F4cs0slyp6%2BtdODQ9YZ01aKyCm4Dpa7ZSCHw6rjAb3%2BX6di9NixYIWff8pQQExlaqyFKWClUU1iHjPvM6YS2APYB%2FIAhk54G7UP6Ndf73kuYMq%2F5nSdbATpd7YyOD%2BYc1w64qb8VxPsUHrdv9La5bA9HnBbaYJHcHo5IXeKDTyrmBmjoniFvmp9Ny1rCorEZjXTLqkW4DQxhq5f3W31tDrBU72g3LWzB1U8jyB5BHkEfhFEhe%2B%2BVZlkylN7jNBYetLBCmDJdMIc3%2BKagutr5Mo8vYR%2BP58pEsgVaxNR4I3lGobX1fKIRMpIqh8v802sJfOBwt3hhMDHHH7YjSrGPPXIWO6t67K8GoRo3JOnvWXHEF1bEgcx7fjE1EOp8EBjXm5uE%2BJ9H%2F5zpDaa%2BRZu%2Bh7iUrFKw6QfFZ05Z8e2u39Czgr6a%2BAyDaJ3bU5OBV5Bry%2FfFlbvDUk%2FaFKmS0crN56yfJVJ2ziNnmPUjZeZzMV5ODB2yWAQHwTQZ3vLeTU3ijZox6zTsy0LMHem%2F7paSF%2FQRBQe0GGiZlFnJtMeoXAlqOO%2FifD56ZgcuJVhTidQW4NkoXzTMNymqNEGOqUBGAcfP4gWMfvetdfe62BopRD%2BIFFzhYJHNZkwzuzTuITpLVRfoqjXPSgtA0P1J7EINpUyI8%2FLhq0KIHzX02I9xiJdqpqv79tszw2MzsyvZ7dce06bYCQhj6aPr%2BZfym63sjcUw%2FITbyZjIIscSHWzwbzJUaX1BwoFgVTti3tunEuF5rTOi8kew1yLNWblQnAlyaSpdRY4DYMYduDV%2BRROkKuE5w3T&X-Amz-Signature=cce1857390087e8e5fe81783c4988049463fc7acf6a043efbe4c70d95d73f63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
