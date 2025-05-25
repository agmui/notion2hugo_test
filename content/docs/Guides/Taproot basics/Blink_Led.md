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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7CNOCC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FBoIowkHzzjEqv8VXjW8JokoN%2BF4bf61XD%2FWpS%2B7qNAiEApzqP7C38mJfRi5OFNhc4XQZ4WuXqGSI%2BcIdRTXq%2FGwwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOj6XPtZ2ES9mb05YCrcA%2Fx%2FWE5PcDgwqM6m0jai4OMos1AMXtSgHleK%2BCeqgvSzvIhiRxfi3QS%2FZiV%2BjnR9w7t0jN0N3Jk1WLoqehKZIrLS5kxNBLEy6Y7r7hu3n%2Balxn5b6ljBwkQDeHsgabcGxX3OCQMfMmKqx%2FWalgvkbjrPft5LMF5QxErWM%2BAhWJc6TPZfsjkwfSpNty68RgdWm3RR7bEfw%2BgcZoOFbanhkWyE5bAzRJQXNANKaSxuLWL9F0PwzD71LWrHWcXiPyjKchAncvisIv2xWQtPddNMyGje1Q1tjLd8e3gmqgiCeNB%2BOIM%2FkbP2QMd%2B0eE%2BjwNzG76Ueb1vOHWKZjornX5Ej9ubLEh14K%2BJgdJ0GJC3LOCYUTmATB9WcQoLj7Ds0kEyTG%2ByZoRJlAWBg7A6tQZffmIVng0wLW6Qtrq4ugcFPN4kgW6QVbLpnNT8owJL2butJ%2BfjSwZGwIx842LRosQZFg3Z8v7PiK8UUf7VXRc3QcVFaKwG4m%2FEDD1p4stLAiEqeJdLL5oCDOUlxwWQbz0M8xqw36RdCyqpfTN1zL2aZKY5I8b1n19wDOJ5eAa0u3XpCHpzlFC6V8iXOUQoS3WUKpISRz%2B5q7o97zj3ZA%2FK8Y0N6vjTETPxl8slpMJQMPPDysEGOqUBuQlJz7R0fY4L59Fvjk54Rlnn1iiK%2Bqe2ugrfhqy7KcUGyrVJ1cR57GjOgJRYRPOwKh8uGbVS4v2HawXkIl85QWNej785rGJp%2Ft192LzXC0OuKazdUrnWOoOAtre%2FW7nYFTY9nhP2nYNBM8LK8ZlJ0WWvl2u3Na4PnRfpZEfTr3uID76BFfxNHCMAUOmOkjyBQ14nUKXQv6k9JA1F8xPieF%2FEc6%2Bk&X-Amz-Signature=6f4a356011a73d82ccf2354e36be3a7ec4ee6e15652a783aaee789ae5ba89d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OZKT54%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCqWwQafzcrL6jYPUfkQX1WHbdLmqgY1UkTjq2dcERRFgIhAJTIU2Q2GtkDCTA2eyLyPbnoVGMq%2BVkoJ%2FZGl5gpgADnKv8DCCYQABoMNjM3NDIzMTgzODA1IgxN7Y4nY07B0oqE2Poq3AOLbK4wzVljqiyGGgTz%2BqKHb1gGhp7Sw0WPGaCqkfOJc2kodcFqInOrxYIC15Hp%2BMS%2BtHjWmMuM%2FjarotRFSHV%2BVGSdRUztyfy408%2BqnPIibr1AxaCDXzTLVwmXJm6qzdkequoaJc0WPYM0LaupyC%2BhOh1d8uv0xwnKSZRYXuguEmZkL6xiytb5S21Jo8zHqvgXAm1Z21rlH11fWuGmJos8X09KyZC%2BRSkHGEplcsLT27yXNkXT69gBKU4SaGvIVwKrdm%2Fb4mkUAnw1DT%2FcF0tmm8heUTzsyFaK%2Fg10LLH4bSu7RXcM59huTWZbK5DowteM5gY6Qew%2F9Er9anFXuEszZ4nK4OpFW1Hsj38aLVmvNVSIfIVUrGwPPB4DmhJIhGHyiWfdqS8ANGLdorw8HKV%2FaLRRvSTBKE8UPClRzEtsF1oajn6hBNZndcBjYkiFiA%2FrFb6Lo4p6Sz8MR2RPKfYGvYh1QsbuxKAAZZaed8rwi4nJfpDJURA9GHU0euWGq812h%2BbXR175lt4o4%2BSB%2BKsLSqSQhlbhleQICLDIoihkmnBGJO4y4fzShlRcuDVIS78%2BCewMz3rPDfcWuOXsKWkkCOLm9vzAOSnqnFhXl5jiYKe728gqFF6kFOVWeTCCucrBBjqkAfpJbN9Ig1MueZY0Yt1GhBKePHeA1ryNYVqWGLh4ACWIkGU%2Fs2dfka9gjW81e4RM9wVzGPE0%2B6RMxZwASPtyuUOyinL55dkZfQj4mAB9upaX3hver4lkQ0eGOn8kXDQ7JoW%2BYiwwt5CvE55aUv8h2GVAqTk7pvROUqDj4sr9T2BwdGTchEr%2FxRCftCGaYa1eU%2BdR0iC9s8anF8U74LhpX2aaZWAj&X-Amz-Signature=125b70f6cfc6e334a7350c38ded60792153f8826ce997456ba4d65f6cc68c217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
