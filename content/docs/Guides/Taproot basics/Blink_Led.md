---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRDFMULL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdwUHjsCrH2zz%2BkuYqiBIlOVsQtsCggJhxVrSItGN4yAiEA27LSVGNMEuj83sWVSTb%2BAPRQhgkDyy2GyEPuG%2FUQgTgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFskBiKjDfsktakn1CrcAx2hAFxqyB0AVM%2Bdx0oPhchjvgxvDrSF8lRjkSQOSSYMwDWGNMZJ400%2BpKoycma1%2BLQ5qzMzXxMJuU3tjSTyKxAuCH5UdyWjIOChf0BKvsTKsyp5H9gnqh1M4NamXpYApDooR77wgxpyXeYnAGqyBIPSAIBkZIHa3dA%2FPxT%2BUMEjypd1bn71w47avcj1vJmrTzd%2BkAalb9ChinJX9dGpf6APWFWCeYNP4E7wS1WrcpNiBkjapapC4k25AqqPUZF34PgHgARSgtWKGpQjndhtoMApeAFFIbI8cbcTbNoPdqPuw9ridf8rivdk5uxh4RBFrXFUwWN8kgY720okZnBdRhGLq9ZZueA0MxkwxCixb%2BDmHwiEJHtxUIVO%2Fs9ek31Hs%2FypDHoLJyW5QMZbN4CoYExD4gZ6n5UFdeMwxzTiFmc9i2aYyxaGS%2BnZFp4NNKpqvVipMC2zL2%2BAKojZ87t5u32351sFJ5JL7OWAmTqlbaajunaMJSIuW9Z7mi2E8ZARlakjvdMSwUp99bY1bZvnLg%2FIbm6R9Zbb%2FaBCA%2BNBNmezgKXFstx2g0PXt%2BnE6HXW3TyAugT8Y%2BPxFCv2aNYBVCeiWynmbGpdgHr%2Frf118sO5OIJc%2FDp5Jw3RhU4CMI79yMMGOqUBgG%2BSryA2JsNt34eXk4Yu9fWmO6D%2FGDsy0rtPT%2BNIwvHM8rmqAKE781uzuVed5ivpWB%2Fx4Xo4KkajAU%2BaoD%2BDJKP6%2BdFxCJVnSOf2r4RKdDweT5rcoeDJeL7JSN9vxPvprakMsfkhdznq3ltiUpO9JjCS9fn1w7JefuySMf8Ee%2BzQLvPLtRxIuj3o8jlqGv4TogMi%2FbsUAy8IzkCWShy2en%2FdAF8y&X-Amz-Signature=e23ffe2663f78a5bdf281283278fd9db83de233fa9c59948fd210bbe9115cc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWMD4ZGN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1lnETuq2fDhQwqVlcN%2FojfUvl5S9HvoHThkaZzFs5pAiASobLbVEHoRoqweWWkvJuZ%2FWxnv8qz0x0O3dcquIGh9CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM26N9H%2FIgGF4Gw68JKtwDTWuIDbVv2W69U6cVN7yPxgMYvO6tMcPopIxMCreCZmJJHqn5RvJ4clQOoRxgMxW%2Bl0fPwDGxB8W3QIHNf5AE4qwgslM5RQyn%2BUEjCacxR4x%2ByAiMahL85xrdrpSLOsy85ENlB2YTiuqSfzNaaJ9wcU6jkg0uaWkQpoPNWpCG%2FuP2wH2NOIcvLbP49BK8xmxztNyqfk3pMYOmqMRSjKfPNV0rlnaaMQWGVqTvHB0w4brEWowrRXHG8TCpogb15ES5Izt9V1MlATTDh5St%2BOEMH10GP6xBleIkw90alC9MzZV0pjMoY3y9%2FQeGSP9iMP8H6daDofYgSfXR3nSvsrPBRUL81Y4WgV811r6bvp90OlHOBab4%2B3fnkP%2B5EsfU7Fl0TCkgurWZgtq7yfb9qY7KDmTjIwwcBunB2fVzM37bw2FlS4VOBfIJMd66KIZ3aZ1UUEfZOcbxYN3NaDa1t%2BPM7Xcypp6Ss6FQ5ugzw4Vqz%2BhsLpDIRXGSP1fIhfuOAJrgVju07kehCkLNetYPZ%2Boxi2vb%2BruVjzVBgRutRCopq7dEW4GckBj1m%2Bf39drrfcWBHKbX481%2Bi4SywLXATkOw3CO%2Frd6yOw0EKA9YCvv%2F8LhGi0Va66VgyMz7B%2Bcwrf3IwwY6pgH9VWbxRU0Lmp2tLeODUJb53MBxuTGW%2BO86YxLOL08VMSWHn8VjL0ljOpoHytMaH8sXkm2ZgMUSwbLBlT1P56woFsGI%2FiPVuIOmYDg%2BzXYCXUS%2BZXSVCIAdMt5%2FYnAusDpOkBrxz0eokr16GrJZClU4w9MH5g4rFKreK7J6xMj6EJBpTYLwLcO%2F5iEN0hP%2F1tn6gUZAGT2u72qQXDdTRe1Gf9jOFqLZ&X-Amz-Signature=5ec2b2e07f80322510298efde1fa7c7224fbb13c82322b2eea4c703e0c79a6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
