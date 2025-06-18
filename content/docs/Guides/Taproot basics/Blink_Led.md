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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3UAXXPE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZM4AU5MjN%2BZQqPhtCTZ2c6enZNDia72BCQ0%2FnWROgrAiAttWS0w49u6%2F80R5rzl8AuZL9yUYN2YteJCn%2B169noKCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYoOw9kS4Bu8X6s6bKtwDBaSXTEy5i7XoBPin0gDCFSXmerIpUOCNH8URSjWrWJj7t1nKxBCDJ2d85UbCIaI%2BzlnyZV0Slj%2FnWVicHdZ6EZNLROPiSjy1e%2FVH99JGBGyfmm0rAV0LFoyBTt8w8w4QinxfIKZxlgzFhLJv5UqMSna%2BeNkOW1loLChTvsct0D5m7EL49w9qrZlxuvqpyAK7bHD%2FSz3iMmfzWaPDFMXswQ02M%2Fp8%2B99FY9XRww5zHQb0Sillx34gZENaOGG%2BFnBbHdi6Oai8uDIWk4hiqn5zJFRAPZrSx88YhTeYP0Eoa0gX1CEJD8HxxiWxOBHFg0dRy6vSBS%2FMRWsYLzwA5q48U23f4xeK2PjRCcxnPlBLcpyeNXAaqG3i3mAd2V1KBkKX8GUqnkAAvYApDVdF11mpuIL3j4s%2F4nCrf5xi5lQrcZDCRVvWcu3JyrNIiusQTQz1rkl%2BEH6e4qBRYF1hBl3IU%2F0v5RJzH0BejLt5zryNkLouKleqwspbitYO%2FVgFap6VCouSx1oagq2CIWNsMXRoXH9P%2FTUtD9lZg6MRhnFcV9%2BsrvxKKuD3z2VgILLrW%2Bh6O3rgWp%2B7NJqW8HF8ex5pZO%2Bd9REXp0C3qwUQSkegSLCOGCYXYGqpdJKSgSIwsbfKwgY6pgH3AwAl1WihO4pbJEuqZazSvAwtmSUzRXODasK%2Fhqw8poIh9svP%2Fz2HtEAl3%2F%2FZasQ8%2FSR7OX9%2Fc56%2FV2MGrF8ZpVDBta8ivwnniAQPINnQQkgcx9t8wnYI0lToqh8k%2FH26Pm9OOBzqLthBbQdUbGMmK5aYlTZAVogwhsSmLp2BJwTbaI4qjBq6QON9aJuNjyuwycgtlEOc2nGdy4HUgNpcyhjK%2F%2B55&X-Amz-Signature=9b92f26ddf0842e642284cc47c00ae0124798900055efa215275a4badaecd384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ5HEJS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRWkr%2FybvhvoW5CJ1fZ8lSjTR%2F1ZElcPzdSmX2uxWguAIhAJyGjv1RZmiakJ0dVbFj%2FtbaDLwfgAXSNnahIWu1cs7OKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCzAHzCMkEAgAxOfwq3AOrrYdTPT1DAeX3c5FubkHy7S2TkCFRGnw0rSiQp3WYHGkQ0BW2ZqwdGECVnf3AHi4B6s%2F2JZoW%2BlBB9tqcpBgpvthnD3Dyz%2Fbrg%2FBMG8tIUSah3IIdcBIwF7l4BVpBSXORlvuWdt6hBmlr3EsNIu35Bvq%2BKDhAejkh3bBy7jdDb0DWze9X2RjqqPuLI7RVd6%2Fa%2F4Z9qDq6FYWwXEvPbGhIxnyHQLcpkvUMdJlOT%2F7nKfTHkfhDbhqidTTtFR0s%2B1496oaDmM9bYO0NYsS2YRFNwA1%2FeItR7%2FC9l3Zf6E1UNtclYPYTEngjcQnjHZf4JyS%2Fzf5hK5PaSf3X9icNDEfvORXcEPlMscKCoFuZBEVuWSCR0iliBqJBNtAlG7wj9TkbInCWBPBPC5crzPbdfo2FTiRrRwjfKScpiKL2lWSuYrSYKz5a0hQwGcavCW1ocpuaX73A020QkCS5%2B2LHFVcvBTjPu%2BlaryfebxrYJ%2B0jp01VOQOTzvPtORIntAhSqkVQnr33otiqows74Io1qwfuT1dsxsb6UoRpLVSxY5Qgut%2B0z%2FdZEh3KLVykITP4HQ5KGtP7t7MqjghFhViFhgpjfyDkXb%2BWTZ2Co5QnzCspnd%2FUc%2FYrm1WTGLPGSzCpt8rCBjqkAQuivHuwekz6ADqpaJCavowUQIFmzVRHeA83iy0CQJSPO1bS4TIbPAgmKMlvZ%2BAgNcdPWsvgwFB5OTugUw5yyAOqtseIkxHw02h1vq%2F4PTSqzvZ0JwQb6m6JrFlRmzwkKHJTpAFI4MwpBTwK8oxi5jCoNYozhKj0pnpMPs5xNUuHIReJwe4q%2F6JncnONnQsRG%2Fq7IJMyeqjwVWGU1xrbvfAOrdWk&X-Amz-Signature=54a2e425db4efec069b3028d69841e8ee9d38edb8b75b521e1c8525ef16a6b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
