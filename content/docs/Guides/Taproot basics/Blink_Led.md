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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24HE5PB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2zbJiYKsgOdtGFJDWTgnwCcmrryWX%2BjLOrNR2BKLzPAiArJyctl7qN%2BvbgQNS5m1rxUlFXrO8nIjM5tl7m6of8uSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtki5V0LaVs3UDegKtwDywA%2Bbt8vsF5UlIk0rVEDBJFWILeNar4wV2EbYb5675gWiB5Iq6S742oZeyCJFxSZ4vtMBKtSs0AXHXKiBZzTRIHPauhs5LXC9cBf%2FSH%2BE5ERuY%2Fq%2FErdHRN5%2BE97cM%2FkEErXGdiQxmauikpTdE7J0vOn0pxKdmM1dHocVTeahh693JBgGzTMmr8NeCM9CU3GL8D%2FR6o1HtOnse6d7%2F9T8UlPwDGPIt5j4FtqYu1LgXCTV5l3zMH%2FKrK%2BSD0Dd8OEMvX3BcMATXHX9%2BAQzT9O1PS1xNiW5MpBRvvmMhYIK4FvwGWkFyBOTrXhVyUf%2BiA6GwEbAc740k2cuqpXuKSBbqM8%2BAmBnKVvpz3S920uWH5St2%2FkG33%2B1L7Aophk2DfkilvTI5MEr5RkPaofejzlAM3fZXrRTqEHamNzKj4AZEq1xKDLJRu%2FwQF1FRVnydFtMheG8b%2FCWv8ZyWdBX9ufqzTiQU%2Bg0kPgj91gnzCe7apK2JjUvtm2NRX8DSlT1oye8hjYSvZ98EkDj0%2FZna%2Fm6m2UXQPvHIVOWI429ixZ%2Bl4gsKQbyn%2FWarTknpuKibCU7fkfMQBvI7xmgtfFY%2BBdOG1Y8Lu3r%2B47%2BgXeda2htAlcg16lmHpNki2tIHcws7HNvgY6pgFd7zOjP685kuULahEQPAnUCU4XyJsqtiqtHYts%2BhzUyzxG6b1JhMp7KBQkq1ABkoSv3TUm7ldIhXBWFi44aQYKq86ErJ67khac5EAHf3exLdKQsJGte4gyNoICIgkYPfXQwyjnnZDnWfVAH%2F6X5H8AAdkTVarzvhEjWBw9gHGknx69siZEO2623YrOisx66QjJjSWKBSQ3aRtCRR9RQpdRsEX%2BDsH3&X-Amz-Signature=5e69db10933cb19ebcf71a9d3907d2bcfe2bbf1fe3c3fa2dd4cdcaf337085cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UKFJBY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFqIP9%2FWeBTmndZ4hTJeZeVkZ9W6udc%2F06HNzxt3FSUAiB4odh54HnGMurHiaiiZUQn%2B5mjGdafe8mqf56sHj5PECqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7XlbKqdQcHTt88FKtwD3ZGZS71OGKb4qugXQl2KWtqZFTh6t1RJ%2Fe8DdhXuZQ6lAuZ2om92xR6cvDcBbATVwSLJ25u9mX9unWMSAYYcA3PiVQu4x8vWDNZ1ImY6aPX3UiIYtgWLApWW6DKe1n8htwfq%2B8t0jEvCEL%2F%2BwHUUUVRTDbtFGq%2BokBRgsK5e8ZVRvyws2rAwRYkrx1qnk7VefzbfvC2kmojTbyFutdR5UUU%2B6Z%2FH4kXsa8F50oPnAVbyu9y5bGAdQAUuV3aUIzYfC%2FF3d5ryliEWi0H2PoI0LgDmZv5KbpM%2BcYmzA5IKEWA9csGBRbj%2FzLG%2BWUCHQD4TvvlpImReql5K234mPj7UPKsPEaKUig31cOh4c8b7YN9Y8mjB7q376X4WLH8lYG9dlK3A1YDECk70U6Ecxj6CAAPLxhPcvbXS9wLQ7OWLLI29mt2jZD896D9XPHEWQPqvcOS7UhgFBED3QlswTWS9cc5C%2B4XeHqbsuYx5dwxgzXZGDOGPIZ986De%2Bk6ZufjOw3qHIk8OhShXje%2FLKx8qsayGXZYEUf9%2B1dkq7SxpQRf6G813pNB7ityqXe3x1syc6Xq1nEOhLD57L2vJ463imRE7XA0Rsi0To8dhwCvpRnebhGTQUWCnDCF8XI9AwrrHNvgY6pgHyXZsNwxDrtp4woeJri1SJNnd7LPi405e0PrYKu9y3v5ts%2B1umW0IMqnFnSn020vWtWj79V5kUNlgtkclwwwv0wNuujzoGM3PG7xtl4NUqBcYrPuFCNBwzssJuGndAFRBnfyS76IlFiazPoETBQk%2Bmc6euxE0BgPIl5fQ5%2BJVy5IrAC%2Fb74pr8eys0WaM0k%2FDS74EXVPqqa%2B7MyusaaKjPKRaXLJ4A&X-Amz-Signature=071155ba3dba96031e3f39c2c2fc7e94a1aab288f51a933e52c98fb72fe59d68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
