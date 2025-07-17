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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFGZV45%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFtbPxdKAr%2F%2FGbIxHiil0lH8oX%2BusZwKXVUnRprumYIAIgZ8QRse0f%2Fufb1RssUvxtHrhRj1OTH94xANOvaok6Ry0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM98piDomGUXlip7XircA6sY%2BnLiYj6EgHVJkIiuGPLwT69mQqREU5%2BmAXMmNk1o8mfaHL50z%2FQ5ziGLTIkaS4T0kXywkOThQZP1Yrzl5UAJM8%2BThY8OEu%2BlFX2mjuyZodbQoyEKLh2f5Wh93ap6VrA%2B3g0HqJ%2BqTGsZS9CuyKtHrE2UjTrqoyoF0ItPNMg9YZw9%2FqZAjGzpTaHjaEfj0n8v4hIANJASNnx9AG7%2FmxTpKCgGt8%2BGbsGg1wZd55AZuRohZprjN7QeoFP9E8DiFi7Q6wTmuM1Xor8qe7C7etPc1H5zyVDS7xua7fmvehD9L4Nv%2FqfQ9bcOVJXn91L%2Br3pbLj0Zj5MQF3xBtWKhdCm6U5v%2B0cJNUU8EQW4cvWYAry3vjWLwUeAslNEPK4SUEBkKCzHP%2FyEgas7KeCQMWtzXnN9BIOh1JH8B4ILkvJMpX3gRg4tp9dgJu1LgWz%2FdYkVf8yBsHTfvJWrsOew57c3kx6hKm9HKB9cKTIFK5CZJaCnNvUqTpuDNP%2FhuSSXqAnEIM7tXgRRFpqeMBic4wr3l3VBS0GTUYMA2jVV6XJKq9VBMi5Gsq45w8SrgsKjpgETN3c2NL2ZEyJRpYaDIEQLJ%2FF3Wucl%2BGXzLqMZRnnal404489UPJxF0IdTKMMO35cMGOqUB65rcRUB3dg8WEr9KufiC9ibbs7RJBdLvXk4U%2Fsyf1iOnzyN8SX%2Fd9HVKMRKi9dxp1AwXKmdt76W%2B2cWnV4fobWxeniQGUevg43hpjTWyb39uh%2FTTd8zbcU9pJctsKIZFAVRGzIFpkZBcZu1K24nZ6BXPclhMPrK0KhnjgfymezPyyr69iaUaSNUhYFB0Ln732zWH6BMKgnAOkWzvXuME6o1H7mfb&X-Amz-Signature=733bdff6761c83f1b0ce4797fb7c78d1b6ec29a60fba06e9c1158eb6c12f5557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQJRU5P%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBbOhASzmY9Y7T3U1pN6URoJqmM2RDMUDh9LBjLooqjGAiEA1OO9liLHcaeeRqCXW17cO1IEOh4AYwo9e9hjGHrbJ2Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGoHqIJJJ6Xsc%2Fx7jircA734nZwYSyY0Ls3FPjJw58LfEJsGB4%2BrTuX4vgq5urc%2Bj%2FHBSUxQee74YetjdgJCPa35EbAFTr5s10p90FRBVRl3AYjnLYJp%2F2Pura5bia%2BoYjX%2FBFY9Hv6wM9oxiBgilAB1HFOWFKbVzcsYjTdSeCgqnwjI73LRglQKT%2Fj4lQNIGLzp%2FBneCiUAFKXQPWvV0jpCNOf2cPN6Ddhit3secc2QM6Kfe6iwVT5TqWPmr%2BhJpncqTOwaWTg352SHGk8UEuRuCtgek8PJplODtCIINDnhP%2FHIlybjogG%2B07jXQ4CcrH4Nxq6tKAsRqIhvElEqyDMO66gsn3HnicJEQXUqzv9moUDSxeDTHKF00NjtKtswrtGFguveTu6yUGfxLDMRZXc1i61uiKWS6EmTCgtXe%2BNyXoccRZ%2FCpo3KSYRrjcHyXEglhAxWX6wCtKbr3%2Bb46YFwX5tnW9h16XH%2Bg07y7FlyRCIx9l9AgfmobUhDHWJgT1KSJ7D%2FNNAO1%2B6I7ZK%2B9KQWUm1mukGoBMhOZQCIJ0dQi%2FnbjeY1SwxyRogWNPSJzPMTVpZeEA%2FmWgImpQ2Y1eILXEL6eJ2GbyuMTnbpsx250MxusOyz6MghzHnNbf3Iek6HK%2Bv6Gv13qOP%2FMKG45cMGOqUBkfjPE1wS8Ks2L1l5fH8yYLc0aNRJeni4g5u0O%2FyK3DoBOjiV1klAtbWJlhB10A8TzRpXntT%2B4jeHBO5khRLlnadsLorh9CHuBr3s8OWXnkvLTXEIDqVYXpUspzNjvi3biFtBq3pWRumV%2BlOuqA1CR%2FNzkeP%2BIEImsZxGH1cXKJoTkdSAyUrMYlBluFwPFOscPjEs8AiiGpQyz3AxrMsAmaOaVsX8&X-Amz-Signature=ae2cc2578f78c5e904cb9865a1a70b15203992eefeeb7987b3b75b2746ca4397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
