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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRSC4HM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJNZ25dIvUQJS1qx5lfULlipb1%2FD31Le0eingNmE5mnAiEAmSp%2BxMigNRDbku82hecvykMOW8gyyQr5gkdjJtKzQHsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXmM0vzn0PXTsxIxyrcA9lPEfyvK2Pv1Ml4%2FwY2E7cVdyoGkNQxvASoc2Yv4eu75O8BxE6gluvBjR1mGqqbMeER2c%2Bzny4YCD6BY7eNGVqDozGHolXEvkokcywaM4F9Pc0FXJF%2BmFLqBG3uD5qJL4VI2EHVMJ5aMmkoy2xzoSzrifAmVt6qZ1A4il6Z2eKmeTD36yXG2waiZZssW4NgGdVv4nwMC3mtkKU%2FQR7EkYaKFF7Qf8nQYtfLFC4X5yV3IRQwKMSudUWH73E0QcUJxP9qwMWnETek7QAzbYZEbYxLGrYmvXGJB9CjRgLH1p2dj3PTbLh0bShMqEDpiwbwJ12HsxAcgbkat8tyPbS1ZPe65YKINUTRXFdxeo3uPEhfUUYslcftxzWxUOEi%2B8BVCWUSZlunsK%2FNKfhYyh6tOWKmREYWbhbsTMr8cHbxgm689i8jDy0AK4Iy%2F2FCmcs%2FGa%2FRnjrwE1sqC1L78GoPIcqD256kSLqoF7Z0mbQWsjfSkFgV9bPev6X5WdRrgJNdNSiMFMiIwtkBEgsm2sVky8FCpre8JxbdNE4R%2BIcgcp7%2FIIOT45Tv7Gcu5xSFP5y3lUaIHuptTNsssufgrcPOa9%2F2m93FdjENzet%2B5LZQg17%2F%2FMAHT0atP90t19TkMN%2BB470GOqUB5ZqkeRYf5KRAIdsy5IRRBXwb7PW8JaiNFDMweaJwfo34W45w%2BFxI%2B%2B3PCSMd7A00sWHfj8hyxiOmMNHk4oSw4p32qZ%2FoKRLPZ3DRYCmnAtc9i1cg871f2TZlKYeATAa6uy6ao1IjP%2F2ic4B10vlahqqGxCZ2MakeQpauavHq6MQqzOYrYy2XmUAX9JVGU8v%2FLa%2FuOSDnOeALa7dVPOWl3%2BBcsqPs&X-Amz-Signature=002032c752fb2c55abe2053b894173b28df36bcc6414972ef63a4d560ab93eec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGELFU4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc01dgYey3sPHyc8Mo7hJKgbQmeAbbDBLLaZBuQze5nQIhANh1EYDterwhbzG67%2BI6pO6Swfcha8cGVjtvo7epjttlKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2jU3STVN%2BQH4%2F%2FEcq3AO%2BliOTH8YQ8dOV7niUrNDKv9unV4Zl5Klo4sEq%2FlecVIl05iuQwbjJ8F1D9WENynprJUEOuSgGT7gBTdn1pvt99Re9R8yYLXZELNRIBbblSbp%2FjffiRXBs6P8bdHq9LEsqqnvjsLhBQQZ2h5TzhrlHgSIUh4oPlI%2BVqlfD9q%2BcLt9hiPq470g8fn3UGXgVzG9qxZsD6VEbaWho2JsFP5Vi0XPER4nvf24V82IK9SWiTcEcBHddPYOGqAQ%2B20JXJliRLLWBhqAw%2FS5Yo0w9%2FMKsaeKsOQvhxirgZugiQ%2BRU8S947%2Fggfj1X2tvsoqXs4unIEuXwH9whSb%2FlVtRb3bz97yKHV5OKPDmo5dG2sN844U0kpi3wCHPsTBeEJGA7j9BG%2FpRDZzpdscms%2FBrUv5D3vcnMZEFa%2FS3UVIDfY4nNagv7fz%2BzRQOOr9D6HmB6LMwnetuWfY1obBVsjB6Nr0OklTR33eY%2BuZK7ggpp8cAWJk6KZ89GFpGodTsUZPman8sSVRDYowjwNS5ej6AvvOl0VEp%2FqvHqKSNrEgIj4xAXYjPf3VbejUzQg%2B8uiRkztI0L6Pb2IaZrIZPjKvjjxKjxdfp8%2B5TBN3MlIMeoMAugUatiQKU%2BsxTwVBQk9jDAgOO9BjqkAQvshijZhVzaa2EZcJhQ2LSVoUOWBDBwg2kdWc%2FbmbK6b0yyY6qgpDB9HdC0TG9p%2FnqMQBBv82dfegqeE72GoYyMi6APjPr2Rn7byBjb61RUFtaSRXRvT%2FxEIB6RS%2FYgqja3W04zEQZslSoDvWFZBcMzd2xMxH%2BQTmUoPplssp0yIObxcdK%2B5dQZ2PZjbofrRNcU9jnRo70iJArBOAfgYKnjIaux&X-Amz-Signature=d9368642dd3fa75d0b905bbcfed00ed8f3eafc5508b347c6aa2b9c145daa5216&X-Amz-SignedHeaders=host&x-id=GetObject)

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
