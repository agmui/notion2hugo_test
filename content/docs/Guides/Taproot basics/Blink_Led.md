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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXDLON2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCviV1kR0u6OWpdhM5sUcXCpF0D3s%2F8PpAxTZs59017sgIhANdeLlhZX4pU3F30W%2Fg6OYdhZu%2Fiom%2Bd24ODtcMSJqwgKv8DCGkQABoMNjM3NDIzMTgzODA1IgwZOLZFRfk8xv18meQq3AM%2FDB%2FRc3pl4qHQz2tz11ugD3%2BkGfl8hixOeoeDCwy5elbCL06QTMh9VUTeW%2FLRvN%2B7dmL2U3cSDQo9vHExLM52fVmhcdULhwYjORMSjAFkjE9koVU5WUaMNSf5jiWhnrHG1ASWFR4SD%2Bs%2FBo3LDA%2B3cwSqYF%2B%2FqbCkbahbkE8NTqEKt8%2FgZf64vFNY99iv8zJjIUVGoTwDb0JTjA2LRZdRMjU23SBqRDar%2F1Aq2mZhNgoL3oUcLsAAGbz%2BaQ4%2FtoG39KHjfk%2FDUxOUnqqPjv7M8hQPUZPbeOtqoB0HANUG1Vjvgf9lqr6JpT48%2FLo8G2ZwwAc71EDVl55iPLZBCMMhig1bMIqibtPuC4m0KmoGupmo8zAcCG6a2NwF3g%2FGYHf8wDfR8j0Eyz%2FkGW03r6DS2Vtcm92Qsay34fvc6Q9fVHQoviru8AbSlQjjZws4UFjXnypNMYODr4LyzOjQVXbdAylStv9ktOk3QU7WCoGstLDUBkfWi6bkf4qXUNxhD%2F%2FsHtc%2BljECs%2BBtbZj%2FI0n4s3Ezjav9GIsXpkGH7FFqbRfzeeK6fcwwBeJF7fn5QZrPmf%2F6ET%2BUAaIBgny60zJXUCAy05aJ0oENV%2FSUEhBJ3qde6Hf61zCxyv8NGTCCnJW9BjqkAc1rypdMZy6n6Qod3vfVWYH8pc5za%2BD2P5cQGDs%2F8%2FDFaOLDDV%2FuR0MgmvzgzGNRF39ri8LQtyg0OLuXk2SCBN5%2Bg47WPwl5khlggdI4KiBitZGMy%2BPVvslu42KI0Gq1RyO3Szy52vDxEFnTgp3GLFmwpx1LME8cDEprsoc85OCd1isc9rCfxNs8yaPhSuRu0NvNl9YO4Ys2zxcq68BCd%2Fu3aCt2&X-Amz-Signature=23fbf88294d3743c0db0b4a8d9c9d7242d8c6e927962dddff41da73feb0f9f54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUBYHOO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHp3wzjaVERbduotDE2oQnUaVNsjssmLNqGXFIIour2%2FAiAaEaTui2pqAVfE%2Fx3bC6G0cdwl%2FS5NVodg9gImf01kkyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMiN8DbDTVR4LbxXZMKtwD%2BpV18LC3IjO8w4hddlX7fturGIFkSMZtqXadv9tWdNW3uGLGmQwPXOEi6puen3EPQxS9aTDq0KT0LzmZKcEVX%2Fo0mvwMudSAZvBwx%2FsXltvBmJRbbGi%2FKEaqkqdabAKlA3hMPOTphUmfFiXoSiSpBg6XPIxo4SrG1V%2FkUlDufoLKG2%2BVjJCCJJ0odOSidoXApRk6biCG6XU%2FAEnDy6fD4Tpg%2Fy6T0nGze3W35hAmrtmetBFVa9aw3Qh9HwPMGhm0f83FOsyNDd2LcbPYNuw686ucKbPIh%2B4oElKwuL9OMGH8fZFI2nw2kecGYq9rzCne0xJeBc7j%2BfgjeVQLOC6vvKIX%2FPl%2FA%2FpIgzpjhHHUa8aShPC%2B7BSUHQuR%2FRMP9Z4bU4xsvv9F83LJXmaRURx9M49YXsipl%2BAH529zNrUZ0Y9MvRK10aAIk%2Biq45AKijjHT9yMFr74QtNqOcq7O7MHZktbiCKZXfd%2FrMqCYaZhmINqGrF0ERBbhruZqcwj4o8oR2uv%2B9K8VjeO%2FI5Rkb%2Bj3U8XRC2C3nxVQ61rkOq5SPGb8zCXeUP9i5rctK%2FqVpkYBavybUjUKdx8AjwY%2BuU%2BcpJn8QbTnqs00Y2BO51zvP6rH2JbJUSDb9cx2vswqJuVvQY6pgHnP%2Bd3aK5ybsXSqh25Alk03wBZZt8FkSm9vkCuCRod7TzncbIqbI%2FlEm9bmezg0LpnI%2FcHeFQQqNPCiABactymSRCjiKUa5%2FTOI6FMdhHcKwCGyCqWXIihmKR3bc9nEwNPsJVXiiVy3UYykHC8iquW0cVdMR%2Bdnvrufr5x1yBWyMzz%2F9XPr04Ho4Y9DMU6I9h8Ff4Spm717dlDFcXHqwcypl4ngd2E&X-Amz-Signature=fc3801bf72403f81aefef0ed90b893ac5290cb935c5bb4681de953b24832102d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
