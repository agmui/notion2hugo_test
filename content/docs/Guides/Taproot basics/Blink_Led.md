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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQJVBUFR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW5ub9aVHhmXBd9GqdCkkXGe2zFphfb6YlQsp5NBgXagIgRsIGas7kK0ZKXsZNNYtEELI%2BlveVddqbh2uyCc%2BsN%2F0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhGaHaVZdEQ0bKSnCrcA5eTG%2Foppk9eER5ep%2F1YMsGaDutKiD7rD%2FOvBNFIjciI17EImLmtRqhMrZ766ig4aNBUllJwYFAHCOPtmKeWvTrd3oN%2BffOA0HYVWEBtHf5%2FVHMBERjVPM0DfLYzxjCh8C5LlYyW0KeD%2B9I37qHuwkNOz389jF2fqJj0lo22OzdMZKEgyXeYybJc6gA6d4xhreLZxEVyXlLYNuciByndLKKMcCgZ5UJdlp3WjhE%2FNt8waRhbalGWirDOuV1a21MZhxQpGZOMr%2BoTyOunSxVNW0ClKp2LFOa0nNv2xSb2T1AxF53xqc6wzlkKaJY5OaH%2F%2FRZb5jnV7FdzqUp09eEiiXCEn4H23WTiCa3ivzNVBS8qBgu4NQyQkjD0aYgdRkAAM631L0AQrD4cvd48AtH10cxybH6sIEfKxKImzbpzC8WO19MuAUTutzGCnKWBen3s6pwdPu7mg139KnnmsbAOf0F028Z%2FDMlccEe60rpKvw%2FPsrOH7wHguvLm%2B7KWsG6ZC8WJbmHNOWiQGMg93Mc4wgvila4Tj9lkJPWAccPUI07pOhlSprkKXeZjo7%2BUv%2FO9%2B2mi1TwXbkXUeJdFZr%2BDixxI4W7RzXYpB2Bk4Rbr%2BQ9jaJs83ZtS%2F8Q%2FdhWjMOaY8cMGOqUBce5aoyjZjjvz6cd96gCPJr9kIsHocCOPtAzV5wirwzizgiU1iMVhSlgWgc7gRhXCqY0%2FoDOWaFKwX%2B4lJgoO%2FuYXFh1lvPhN%2BpznaHA5ms4p2nuNtppZz91KlhPGwaT89T0JC0nFI0%2Flk%2Fp0swCa99bR2yl8fwoCnSV8mHxWAXqclM9SD5btoP39VYJeO1hZrzcqXxusFsv9TIwNZ4TyjyWScoTp&X-Amz-Signature=cac4e09352b1c3f2cae0b12f314e8fcd2099ed02087653fb70977b24cfb0df4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELERQ3T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3TiCOm9SPER7R7UYUaYUDr%2FFBCXT58p8b9XkZpAc9wCIQCPu6zjO%2F9xB5Vjel5UvIlDHC%2FFo7awC452ORTt%2FjJBqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8M8JpBHmau3%2BGviKtwDI%2Bxoz6dYksBxKmEkIYLiNEeNYglajMAZK%2BwY2xmCvBcmLeww4e4doCIfCxxHb1W2irQye62HrL9xOFMkVpI6W9RXEa7rqDpawGyxPOsfMd8YxXJ3hZpxdBCtAe%2FMdWt%2FG2pw8sqiZP3lQG9DO3PAxAFLkYfKD24hLz8qntpNQdk4AbkV7aV%2FU6EmibqFONhmSORhbnHo2mu7mPQkPlPpSfPhCCSIXebScx0sz1qjYj0Wqa1Wt5H7%2BFgsW1ICYCNxM1ydOU35s%2F15rXkCbb%2B4bXqOMQFzWTsBGsy1pQu9qp3%2BbG8OF0GIf5B9H0s4PW8%2FNF0UudOsI7Ndo5uV7RSExAIqrph4wUgaGmMAORHeohYombm2NYtyKBYDEcAC%2BLEdZeJCzAp5iujE5Nazg5ecna9g00kbBahShP16mVrMgS%2BFuQVeVG%2F2F758xtKPeKHck1MkGOc5BrdtQTcOte%2BxX37S1oVGnAl6hlezzvxxW6l%2ByA1ahjFlQtxj00GowwZJEr2MWNBdJgT8L6vAWQE2oD9jJEYwWpqVhOVdpa34xFgezVZmjeuBEOV80a5kFi8A5PppJGbWXVDsoKqdMXzz4VqmdvZf%2BxVNPz1N3j%2BPxg1TRLul8m2sF7F3a0IwzZbxwwY6pgGvIF66oZfHpM6ceTRyDPEfz4UiXAJroNH42VUJDf4ILG%2F9DTJtxQTvliyTVztt%2FXNLiwVxTB4fqTqj4XYR2DxWv%2BU%2BXHpMcNomO4sa%2B4nRvTjp5tng%2F6kFRG8vX13vmh4A9fA3WyJ0jR8IrJPaVHo%2BNnYDzaTNOlA%2FYstRvIoNNqcvPvsAqusiNbQE%2FlwBXLrPRwQGfx6LKsmLsBTxhVn3T55%2B1KFn&X-Amz-Signature=c774c5eb0d1262eef21aa9df749cc7980199f44b74cc5c640b09337d8db532e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
