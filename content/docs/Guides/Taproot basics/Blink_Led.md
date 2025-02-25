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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBCZWWU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFydafDPUiL7ikj%2Blvp2A55EAzOCnnB6icjQQ4GSwzuDAiBDVzFYLQZUrSjv%2B8Tw3SfxqdpbbZmR4u54aO7DRsb8GSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMaLV8A5Sv%2BJKGndDAKtwDjR6Vu4ivKV7GNY3SN7f6owDqtRXKg9b6gN2ZB3mUMNFmd9JhBcVInZXein5xpl0ijeMMvQGkzEcFGbx8o0Tp9dze9MF%2BqRONqTsLfKbXt%2BlJzMqItkVzkdTTgEYGHOH4iGbh%2FTxqbQ5uOnh9k6TfF0M1PSnIMdeJHzf7u8KhPMqctphovyDb2hR6NACDpqlsuX%2Bi2rKKwRBDijS9wnsfsC%2FeBX3yk%2B9x8BlycjJ1AZufP%2Bpx4mEIfZdORPnV6Uh%2BOwtX17fA1WnhaYVt6GcmZ%2BpU2R%2FILp612JnioPEHUmXIVUuqCzQB%2FvFVPN4%2Bh3WDjhwS%2F4g6FrEfgSKrnB7QcZnUSuSLSthJZFfWzOrO3ia8vPXLfJstal5MgMAwC0oiGp7U1w81L%2Bya8TgSNMeIIjd7FIdanGkOJrU5cDe9imy7qVO0xebrvPN5pFU0hsMSPXpK70%2B5RzXenBZ%2BIECOxe9Ui7m%2BSu0fFQoXL3QywhTlATbvSa%2FDX89Ejj3WOKR0mYx8BI%2FnxDcfQqhVotbzdxkfvnopQL1RLjE19ivzy4lPoLHAmwS7oBjLL7LUAmnqydshQiQi7bc65Af19NGK1EVlCAcrYCznzI52pK6DrCX0PMAKZ73DzqmLt6kw37P3vQY6pgE1daR3Pkm0tCScTucq1id6kpFrnyJ6Mlwz8NJiD%2FxjIcaqaa1mbz8ll74dJauaQwwQMtSIWdG0JbQW8P9pqzpix4TARCbVYhq1h9MbO%2Bgo63Svwka4kLLCmsNkrr75tTxGl71KOyNeNN0Ny943vCAd3kKFxcx2J8Kjkt6HV19edfFAlOW5H6LtC7buEhRivVlV%2Bftlvumv%2F76btcYqSRnsHjkI4GE2&X-Amz-Signature=7def5ab66b89ffae7ee3b47d6e3fb880201330d9fb2b03d7887e45404de6b292&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URN2CQ3Z%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGMX692ycwIoBihU8y609hviEUAKnHqS%2BYTtjNjCvZZxAiBqHcQ%2Bg5cXZt6lLAWRNXcDNzC1b5YvSVD12TJEPNvUUir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMToj4f3qWxTdvOYhNKtwDWz3eruux3koHh7sMXVGioFZFK5NTBf1oU%2BYN70DdvkylXOcQrdg4jVu1E6xx%2B7uW0M3Re1wXkVicBtF4f7JLPkk5REyWWiOCzTgcUeErr669XaIZvYPGCFH4u7XdBDc27rtjMZjoeFo%2F0FiYYgF3Q6tvaItAkVqmSoV2wdD%2BGCATzsNG63IM8fTd%2F9TTkIYGBlG%2BQEg6vhcByBbVkHsUjHKShqZs2OuCVqAzRh0DTSdEOP0%2B1D%2B9SluulBfCi%2BiD5YHcHWEuHcv9jHnDnCm0bhj7mLvrtnn1rRmSgM5NjOj%2BsCIWTzmgUWId%2BMHj9h41yetxzw4STnYDNEyj0J9noN5M%2FY1g2irteKnmu%2BjDZG%2BeCtXA8BW0rG%2FXZWZojEt7XCCSc0u12yYj%2Bt4btkFC4znvATEVqskbtLF22JXpZoc3L1OHfLrJyAYcWP8RaRDG7B4MIwjigNuB0LvSixX6tMGrGcVDbNA1rUQKXeyJYhJQOr4YHsfOd6ofOlRK40jQ9LBlfc8tZ1v%2Fydr6IFjnLDi9AdG1Zc1Bn0tPhp5CKXHuO7EL3k9UzLOWw3zbIm9GcGFrRM50QjMz706WTedJX9GoqIabtkxu8xG%2FozZnq6ooiypmUBstJ0Nu%2Fskw%2FrP3vQY6pgGSk81ioSlJ8DhUg3CiH93YxJTxSt4sRNq9Fsq3yq%2FCSwitKmWECBWxomxz%2F0atLN5ovfuTONTQqAxZSdJiXbe%2B3KP7n5831LjxwOUK2z14IH13YaFuaic2NjsHGyd9DXHcLcSRxZkiS%2FrG2b4uJW24xZV2F1XSjJfqH1iymeEUuOtPMNbFZX9wZUKjcd39dbBJNUI5ZRak3eXD%2B6WgMRYRcLztn3Mh&X-Amz-Signature=17a9f558f3b0800e6aac348050c935f68a73db2c5a9dcb5d7f559d2af5cf9aed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
