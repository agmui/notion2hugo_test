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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNL5UFMJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFiopGR%2BblkDPOSpvst11R57xatcDSIviyEp92XeDy7hAiBPhYqRo5LL6AlfJjFG7vNwQvRzUFhCBRDaP%2BbaycIt8yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMTlaKG5K0xtvV8eT%2BKtwDJgCJOrVDgF49nnHwdrMQhhx2kwccpOYWA9GpM%2BAW5ROuH4sYsU5CA0%2FEEaLcvGhDgnvDQY5If2KdjQ%2B948IBgoAoYDwTiiKgL6u2rDzaUtx2AYhMtADqceY%2BNS9ky9hy%2B3owNkfE1F4zc7R0Z9b%2BQRi%2B%2FRjGSa0Zc%2BRYwNyOZmuL%2BCBOgPadA%2ByxlXUYbpIY1et24DYtoWRFPbRGmVawHy72LuohMz9zKMXsQwxQzaF3u%2Fua0C7Yqty%2BWCkJNDZu56NF4iOXtU3I4T6jeK%2F7gRYVh%2BbJzO0fW6E9qeudzu7sQXQZH6xItcAWMU4VplfR8Xi8qF50ouIjgZLQsTZVtaLu2IQIGndPj1557aPsURs%2FGEz%2FlhOLQxbuHVJprEy%2FcB6SQldiyNEF5jy6T%2BnGI1g1ZxdndumAbCkSEu%2F9uOZyzZYvbUx9hg3Onkq1unNCRfEhU5pm2f0p6ryBrR8fM35X3CNmoWeDuQGw9V53%2BmZvjTeGl9mmEqtB1I6wjOmqpOns6B9YocY%2B%2FanwCy2qyPu%2FmGLKGOO6z3V2sLYQ5LtIE%2BQSuWhKiHVKTHENLTSKco%2BzvbhrFI%2FIhAtDMQyCyDF%2FP7XloHNHLmTOdXJas%2F8syrdgf5yBXZTMyNkw4PmSxAY6pgFna3%2B%2BKNJebrNhWH4A%2BKF2jcLZjVB4H8xXI5SdYC%2BHBWUZEwkdje3tKNQVYfjWhEVpGHDpKmY9NiSmtla1hJnVdUP%2BFSgC95Of5F6BrJEo2V8l%2BvtHLX%2FOKS%2BH3pmaNdeEUxv36e0KPz1vYc1KVWKCh4a%2BmkNAhY3wg%2Fj5WDsvyjMil1ym7uikW96lKEwBLZJERQdV%2Bm6rDSer4HnuH1PxFgHhvyee&X-Amz-Signature=d96485ec124ddf8eeba650879b649e1b4323a76d6e3a32dbc699d8ad7024da4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647B24EVF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIELIOqpH0uOQt4UrbRosvgxUL9s51phoxveVdvbsMuBMAiBx%2BD2rrWJ33WmXdzqG0h9PKX1qvZnNOKbA2FkxaLl1hSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMzJrXeSHIq5ckm2oCKtwDIC0m7i7iilanpA%2BowbRCYJn%2FGIDkL7eeqDtIDFTCrstJ%2BzQ4%2BdwAFCZ7qqoO4wEr3delSKCXuJrvnLd4DbzSTw8XeXqM2CMAcfOY9Rhi04YA9DOx7DqfzTIYOuo63TN6MrQF8Fh2X2XdPgTo9xHlKwEBxJcvw2IcHtVq8IT3oIzJvQj3Ognih%2BmEo8YKgVlyWHaEqDKTzi676PfCdd%2BAT4MNjN14Zf4dT3e%2BJHPfdE45Mqx%2FkXMnXSSf26wFWijEIhxLnJ7MkTldcu7r888fQF8zgANbUh%2Bu%2FTXrtV9w%2BjO9Av6FI5gswzvjm%2B95%2BWp1XeM0KbReO6eY6lYlEyuKNC8LzsDq46u%2BNcvoQ5njAlHJhZAcd0FXMqwLa%2BDpTSnxCqmNte52QpLtQmpeehwTS96x9aWB2NCNAOCscOu2%2FUFUDcBZeNlOfZRB4gkoAd29wItd2U7svi%2Br7OAJ%2BQiP6TRfna40Umlffh0SoXHxADSpFttZosjWnMY7SgD5NRB7Bc44HEH%2B1g94FghhJeXx3%2BLmfLn8b7wSGkvutzOF5LsLeRp1yH2U3gPFavKA7ivXxGwhuk2O9I9%2BCFd8%2FetEal3bZKkjUxc%2B%2BxPZzRPIyoB3GhsM6i6oIdK3Ao8w1%2FmSxAY6pgFTUF%2FVMH9dPD%2FVDxlLusn%2FXm%2F5GgvLRPIdIrMutJjCOivEhNvcovLuanPKjTJ1rUXwJdlgq%2FomBgaMcJa9rOPwS5HOCoZaJJ%2FdQ%2BB2N0dIzrYLmci9ObFYMWvPDx5ZmuklRSQfmBfsXUuB7SsRWXQPa%2BSFHIlFf0nzxptCEiQf1bQ%2Fe06eMeb1EFCWnzY4G6oZwKId%2Fkk%2B%2BdO92EXeOU0eTPl76Wpe&X-Amz-Signature=867d60986fe8cf1e9655c24e01dad5c3d7db4fdf1406b65074c5604900994dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
