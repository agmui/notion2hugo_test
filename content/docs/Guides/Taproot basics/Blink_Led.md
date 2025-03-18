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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF24AFWQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5fgL9a7p2ehlx8I%2BmLP21BVDTJvKzAKadVc9fiTfMfQIhAPZw82fgpT7n9gIXn7ZJaonUlz%2BTuohCPr9w1E4jyEyIKv8DCFQQABoMNjM3NDIzMTgzODA1Igw0dMd4M21lC8xPSyYq3APUP32bpTA84YAwkTMYgY8evcnI1EiFkIAJ1w23YaT33%2BTnb2YoQFWTHYAF0Dc19RQGhLxJrRXEWQEFQSCfc5FRfXe1xfB4R%2FBjx5j6mb7kBLeWgDtGvxTDDbNG9iVQWwQ%2FaJlAg0n9fBbHU2aOhIquwvg1q7GLjeU4MkgGA2ffT5LKbfpzcaGsIdpg3rOUg7fmYRpC1Kf4rPQhX%2FXdUY2L1GZZs4XZZp2jRzcT8QAzesRRaPAimPZoQznikUzxKZQazjQ4sqTEzlffmhKGQS4Mnv3qaFlV%2Fi7ntrgfreF8aYd0AhTh5Pd%2BS%2BppbMqNV3Au3H6SyqxjvFSAsyDZJEFQPSaQrFo3oY2t4lt63gJSSshoJhY7QqLC45YgU83vvQtMt9X3Vw2jS2lW%2BH58JnYLj8Qqx4jAAjgdvQltsYo1QdEwNi5MFWTz25dgw1KsGG%2FoQjYcs9JeTrIjeXll8Id42MawlHGDuWsHsjheUCPnZVEq94lUShR1f03l80jRMBoDA3PEGBodviBD1SblIZ7RAjyXZFWEja17sAtcP4klYzq5%2B7IWkWYOqe3iJPJ7aW4aW1NfcQ0Lz6dKkXCMTKsW%2BM%2FfkuTwwIjIGB7HgmWt%2Fp0XY8WC3o%2BiA3oO2zDCyeO%2BBjqkAbDNU0adcTYQX27GIxYGvUJRg%2ByZie5Et6DNdywO9yGHshk0l1v%2BICrglFs%2F%2BJBD5Wwd48RScOG8h0fZrivD3BsgKBh9n%2FI%2BMSIASIN96yEw3RQPDf59pZjrPpt%2FLRj6IotQ71pzR0u30QWHPsgB8IN%2B8%2BZtdm7M8Nc14CU39FMjIrnNUIFgozCWX3y09Uae24GzKIB15Ij5jq9kOcYNPvE3xQbn&X-Amz-Signature=264b2c8b0a6dcba5131ae6823c1b412f51269074ea5291b9638b5cd10391e149&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAQNTDW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiy53oIqTtsJysQQRm7ZIblw7aFukrWTJB%2BhGDGE%2BiuwIgBXVxiZuQvbW9PxfbXGOGlDs9K01eDx8yw56zXLVeeUkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEHMioJEXbvKf531PircAyemPnNa%2B7lRstCIPT6zLePKYK2OdYxKpLLc6iMBlV9%2FnF9lMHAM8XbOMyOfAMTqtWg1vpHApbI%2Fa719Lkj19sKJ3kfd%2BcKTgXzC6UcOqTmDTMBRX%2FgUxgqQg67NgzUaxN%2F80JAt8Vvc46y8cKKEYFP%2BSfX1zkRQxESV4dbCjZwT52PnjXzrHVY9LzXnZMTkkhIGAvGHc0exVL8jqCCMDyl0YeKSlvFj5kHKLlpJ6lBfOuMYjMoWLN8GB9IWTgejKsBetpe3rfqOFmvaaPHbGTbMxVH9BnrwwPgI0y5q6h5PlcTJ2w4pV9ZEpTruK6XVbLsyBOub3CNejrJc2exmAsahOJiOFbceo9HUBcXR17KlWGdjCZO78js1WAMZujsjVBpeWlXVuBkIbGEVHu3iHIOBFEF6hmEWWTb3hl3ITG%2FYZxldFo36iOprud%2FSSa5AmxZEP0Xah0V%2Fx4kRzSyT%2F%2Fl6uuY%2Bz1X4abg41UDxATDmCU%2BpB3TKghwBrzipg8s5KOkcQm%2B91XBNqgKYL3xpf1uxBr5TWzq%2BA5wkK%2BKsP8GAmhio0r0qIDylAsjagqWPSfWAMND2Fytfahw%2FekM7Fe6xloG9y9m0RTGFFmK950rxAff2rnWuVhcy4BrtMJbK474GOqUB4JrIOHYNJyRD6TGnbG9hsqWTa2%2FvGvavPELZcZb%2B0PB7nT6UJsqDYIonoUEwLwW8LXZkpNfF0DSlfSPCwNgc4M4IWraAhUj2%2F7ga%2Fb1ZjdYAQ1M0DQmLDWp6TqeIw8OrVPxKgtJHQy0rK%2BNzD%2FYnnIL0%2Bn3hqWBlK%2BEu5up%2Ff22%2BBszSLTiSd6PsvG%2BJXuVeT3Dh9W0pt6KhQxH%2FPHhNrJGlvqTC&X-Amz-Signature=d85173853bdf15ad0dd559c2654010dd4c72ea9e8c30fe315e9a18813f0a0a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
