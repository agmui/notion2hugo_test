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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMVIHOF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJxJnqIK%2F4ARklB8%2FFgEHaOugqbqTJDcRAdfZburyK6AiAZGx8Bwb4JdY82lZ5tqAHRbqT8763xhkyFTPrFEnbO%2Fyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMn%2BYbaHDV0l1Y8ZFfKtwD8grmu9uv02Ba7mdmQpqAzGs0QplKndUyhvi5itjAYlJOqboZBsO3KQCsN99iUSCfpGFaXouN6NxZ68uLajAp8xzvb0pSZM562iMj3lc64SkLu9KNgik7a5x7Yc3DCdQlPP9Rjuy%2B5WEJQzQVrWhD8lmKsPC5aR%2BqOGwyMd1iRPKw5pRHKdhxLz9RPVIiiyo0guSWSuKEoMamfwElyGKoBdTp%2FHeS5UPv8eiz9pHwNYyT244uniASmiQ2gYiOli3MIP%2BQygzxf4xTHxI3rvmbcH9jhksqy6tLRNsoUS8ZgAUv%2FRFzYvThcj1%2Ff90%2FW7RoetqfSDPq6ugaGpQqI%2BTmL7bdHTR%2BsbJgWgmoNwGjQSSWTXIb%2BV%2FUgAXAjVHy3eeJd5cI%2Fwyd0UGCpDmqsKvTrCkQvS3VhJ7egvXJXRdy3gZX8S5G7zQK10SEML0vMn84R%2Bk8AX4AOo71sRLkxP7euvjeATIzmpiKSZFFNx1wffmRwdyV6Y7965fwzVYE6idni%2F2ZAIZjOuNbJPHrRn%2ByDO3vBifbeNOKD%2F1FTALSzDqvSVYqgrDI0nXO%2F0RSx2CTlUABszLhjeEJqlJg%2Bf9DSrLsAqkyl13Frd59%2FH3HOw4awr8%2FptWHq%2FSCFiIwlYrFvwY6pgEiCoYqgrJFJqp%2B0cFwqwTerGV17C40Sd%2BYy2kKUmyFCseLbqUecCYk7Ji4vc3XreWxzDmff0Bueru7Iyal56C2zcm9B1Ga%2BedOQYIPHi4X9MyZreQxMGs7mXu41ZfijE0nVLqEN7MOTtpbtNHkci4k%2FLXiCCqbPF9W8KOGFXli0SKLppWyqxzNLFOS%2FWVeToR35%2FCjn5VJYsWv4cJB7OeZIvp2tTDb&X-Amz-Signature=931aeda41c5db34e9ecc27c55805835bc32374b01678ac5457772587e6d5c5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=43be33a4cb8d35f4a93d92d3609690f254c71d9dfade3fc40e2f7a4fefbfc4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
