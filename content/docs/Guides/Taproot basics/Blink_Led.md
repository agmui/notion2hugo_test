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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHNBRMA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEYQpgdvlOI9L45i%2FX5gnN8Ngu0Vsp3CngWkdUruxKHJAiEAlpCD5qCzHIxsmaW%2BubMZ0Jz8MWqp4cqUGJfeiJA1EhgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl7D1%2FD3c%2F44UdQmCrcA0njVzYdPLO7WGI0nACqnrMHU9GehB8g8DU1XHGGXtdbQ%2F4lzb4lh7ScRk8rWZd7%2BUYgY56skKY47SEK9YYEEaIvKBTwtVqymrEXC0%2B1UuC3l7TX2VCYiL8aR0ilNl9E2QbCoGTzdf0eAa6EEYN0HJm2LElSaH86RilmfF3vet9SRUoPtJHvDbqcDCLPLXp3sJimBlz%2FhhbbzPDqOxPhBQSe%2FF4LqY2s2OlhFUhTtusaCVyGhVxg2XVzUqGfJttiOOgmwz9pLMaGeE7zyowrULdrdiFIEa97SqzVODmyOqMawB3NubKo8EqFjO8aYZvtvmZQwYKjbQRQxBKwcQQS9DOwY0iZ%2FoRrylaMFae77%2FxrScLfJSGJTZRZE5O2gRdbPqJbAsws%2F00CeF0K1J6ZTz8qyWDQbvBTnQhes%2FtkuPr4vLPexa5zXT3%2B%2FB%2BvqQp%2FWNunOTdE%2B39wz%2B3uK4BXqcbGPuPYVI5XbAIxsTPVXti6P4pUd3AWsScGGU6FuOarkKfBPtiAieoY%2F5m9VGV7U15f%2F%2FiyY%2FcYYd6NRvTKIJk4ph6gBjQb4YOCjXiMKNHtFH%2Bj38Amv0YB%2F%2BI4FlJsscrV3lfwL0eohiPXQg%2BiqnY61o9VeYs9IGGowjt3MMuvt78GOqUB1s%2Fq76drWMwKduvaVTWa6AA3ZjZjJkXWsbWVwE3VRM4UWU1AA%2BbePpDT9EiPYAd5WL8eQWJ%2Bdbu0cv%2BdijzmDxNVwBz%2BkRFtJrPvDIWeyQWXuosB36oY%2FyC3Z5y9F0CeNsOupeKBf%2FQw7BN3OPmtg6aKX5zSGPXru%2B3QD%2B%2BuYAdkpkyYh%2BXahvv04v5QoObCB8Pwq4HGWV%2Bd6jJziMvStX9l3%2BPW&X-Amz-Signature=e5760e5d098eac3271b2a0c780b28ab47061676cd69405ca220668873dde4b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7GZ7MI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDP0sdpc7koHhcI%2BzC4fKVbFIkt3XBcBU91M9fA%2BEa2ZgIgDiLs86oVBiiVCddUkCTaLuhamLvXkWvecw6vJ7ksDdEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGQ4A87W7Hk63laLCrcA5euOWRhJt7vBpB%2FT%2FnWv4u8dCNHtQugUwzH%2BlQkcEudcHYOe%2BAXbmjMRVZzXaxEboUqrJjL3cEUHYkoqvp4F7KTPaHoOnAAbR%2BQQKNBi1gjVYnbSzT1mCTfhDFTUQAjiwNsU3fTEZCllGTXhb2ccV%2FgI%2Bqivf8ieIPQfBbwtI1yuiXqHucL9TWnOe3VwOD8qzUjPYwUvd9fVIEKtfAf6SRy7TwavDzbruRL%2FaFoPFw%2FfIDspfz8iBd6h478u5hAdfgY4onvhHsXq%2FlNBW2iGnYH4Ex%2B55FW3HhbH6pnZxoRSuvprmC%2BZB9FYLJZtriS7od%2B4yJe0RARWv%2BPRBQ%2BWaEE4ydTG2d63ZMkbhCxq7%2BjDr1T3zsWEXaXkRkPqizjWM8luvExw%2F7brs13ok2ksim0jzuZUAtQzNr0XZXTnq%2FwYOp8QOuLwEyH5hwgpbnSJlRvCW%2Fu4ux9MnvAefjD8FDAeytLk83nHJzd5Qv5GswtF8e0X30ilLjMXD7Iq8tLyO2f3cObFfg1cnFmADw%2B2xiEYOkLbGx4wsqLNq9C%2BwAY5VdTC9%2F4vo1GVDqJUPSdjsxZtmnngZtWaR8WDdlnDsEVI3Xi05sau68EXoLGOtCsvk31qGRqDCR18oj2MKqvt78GOqUBzOpJK02QfjoC%2FGhAYmSqQ%2FnQx3a0mFq3f1eCOar%2BLvZK2tI4dh2tDYEZ4%2Bb0AIo1IWTkYwHU3SOG8UO0shR3uTdiy%2BH3DaRBh1dQa11RC2CBxvldTmEM1qVGxwK6dNhDXicRanJbc3n35ypzOzZjSqTDQEnRO6tAp9F3Ow%2FcwYUNPChftuHaIUx6X%2FfbcNiueoanm%2FwfRj5733MYNDrvIyl7qkmy&X-Amz-Signature=32986e23102e60b7aa002cb87abd9f9385049358f51df803ed87bd93d710cae3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
