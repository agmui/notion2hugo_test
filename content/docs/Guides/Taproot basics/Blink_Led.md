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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBFJIPW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK0Z1QugONrw6zBccb%2BDZgg2%2Ficbtvq8gW2z5WqbT9kQIhAPqCWrIIqxfo8V3PI8wJPFtF1bB8G%2BnbQsfyOYGkhswMKv8DCDkQABoMNjM3NDIzMTgzODA1IgwOjzYFi9uGt1t%2FZdAq3AMmYNbuXxKBQo1VIV%2BsqPdZPt3noiLIQdLnBWdpFQeJ%2Fr0PD%2Bj4enOJ6gUnfzANvv8fZ4B%2BvQpD3KuV%2F930FKltF6%2B4nnju16L0%2BopAaoWdd%2FZEbNi5ADHANQCJGSLEVYv5YmPGtCAME1QaZ8MaSXIzvr50bs2ijf39V7VyoEcwpdVwNUvyiM2mfleIyrNqQdBI8Zw5g8jGrxvpGppdSuBPDrKXLvkLWaza7%2BfR1wrwwFHpO7fTccckO8taB6MPg36O1SfeHCVPZ2nnrbh2T2wACJl8UeQqpcG6znVpakR16NyVV3fMJq7m0futTRvsldGjDG8QRwwb7TpBTuD4PwERZoO4vjGuD8Bhk5erok5gezmikgeKbsUlmIA%2Fu6hRnAJH4P64DMSLu6LT41tbx5Een5drrtSVwOpibGE1KSpeiHwMt6Vak5BQKVs5d8s4D50rXbGJkHwQ1wHagqQPyedGYMc0AHtBJKwooEeiSigmPxCFIvo57RxH1q648tupWutNBpj2lk66UnqYcHHciIfwFGFQRfD7TwgwHJsCnuHusbz%2BvrrZzltLhMuXBddjT1ZgY%2BcpO%2BxZH1DMf%2BkLRlQCAOK6A%2BhYb1n9iOfGzWSGHymaJPimXNnx2E%2BLFjD47vu%2FBjqkAW4oFVAVCSl3Py0%2FdkYB7xkJM4ZbbgwxAKHdYJjzszH4RwqStTfPkevltMV8i5mGT31c%2BK1rL8V98cSuq8gpgjhY5j6MPgEJ9%2Fq0UP%2BRKx7mHrIGGQfOD7iMBaerOApLwRaFYQWD3Xwf%2F0Ow2qV69J%2BPEsKv5qz0HxP6dPwN2xnh3KOVCJq4Rtka%2Fr9ir%2FPtKwykerNpYeVXGuoSRV7KbkNc7t3v&X-Amz-Signature=36a02294c43b09eff5392a28db9a4f27c50570720a7e7973d3d850bac27e0981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDZWUVY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKCz79NvNRoAJN60S2fE%2BMnNyMWL7FNGOPq8E0YGERKAiAshtU6wXbZH6etKgKa%2FwQ%2FNJJ%2BmRnAh%2F%2BAuQzZdnnapSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM3Ifo%2BtDr6gR4dvzWKtwDyQQ6oxIBjlbxYk9MSf1b0qfJGL%2FlMbv6qqoP6VRLLaCYfzxLfzAj2oZJQvi39PkPxd%2FjR9WHN0vt06SkrWH%2BDwZkMi%2F21%2F8eqcv8J4bAETuGXuMYKaNG7XhU%2BqviZc6pVtqUmVeG257Rk4v0p91SQ%2B8mbHczSy1vLKi85YYve9la%2F1n3eqbifpr3VDv5AF%2Fjg0ElBF8ARYMVxlBJTFeiBXucIjz6Q3yGdDpDb7e6o5lwQSD%2BdbTc2f%2FI36bHIBkcoteD9x67ttIfIbYMRoNIREXXSuKoCqEcboWG2PqTH20D1b4jveEg1XguhFHvAALifXGLzp8m0DP0qXqedYbBaBM6O%2BslmdDDrIpEIGKiiATorZ7i1%2FqOE8Prf62wPSUJrs1qsQF65HVQGIdudhXUzxQqQkXcSLHqE0orNA%2FjN%2B5RB%2BAZLx7SfcGS1t1q%2F0jcMi78KPJlz3xskLktor5h0phm7QPLG9IpZ42jg%2F8sYU4pvdBjNt73qP39JivvUa5QpwbgtfA6l8JS9RLY7s0fIqtcNc1M5PTk9A2bPyVuzNZhdC9rKz%2BdZGhxu3J6FAg5Q2tHDh9Z53dbRu4kVNEz4GbOVZsES5f4AJ%2B0QoNrMx0AfGYi2oZf6ITPWBswyO%2F7vwY6pgGnSYemdLJ40dXM6t7b3OiGMPwZ%2BGNOspNQZXfvZRAcX27oL2eC4Je6jvA9H0Edk4IhPNDPguj%2Fdmwv%2Fo9T2x4BLeCSdwCf8bhYkRxVEiAacSI2bWe88MxBWI8%2F4YibwyBSSYNcwxGsMuKbs0hjpQgy25lE3HhVdjaPYiFS8G7FbSotT4RxGXs32sYwv3h3R4b%2FeSYHOCYnJ4J36kYNOzlRI8lvm3Bl&X-Amz-Signature=c72037ecca70c489cc762e9b4227a864e4f9a9839554938b587e23e4016a76dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
