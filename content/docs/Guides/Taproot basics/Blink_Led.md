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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45N7DIT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIH%2BsVklmUpD94z0t90EJ6vj5diLG%2BQkEgkgUqLp32pe9AiAy9wP6QuzWAdT2A6cofHtUeSY9MsryYXxrywsiRzde2yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT00%2F7fo7%2Bwvk1SdFKtwD1ZJYNpYdClmorgYjDxjj47ea0fK0iK%2FZ%2FZrO7tPkmsRMkb4yc2uJV85e9I9EIWZ5d7wDbbkmKmfHexBCbBCkKbo7CsUJ9L0OyazjVwvsyu7Ck8HSBKQYeKLZsroi7gRQ4FGxt%2Bc5Qi28IeKYrjoqtIt1Vs4aDivjhjkfcLoe1wQQ1T81aUAiaLpYINGmJs%2FeFHmHd6iy5o2NQu2b3zAZI75G2JwZvEXzLNRwj7fRsRvakqdSsP6bVjSUGWPbbGDVY5ObVVAQTN%2BbxHzUAGrCDXAg3qpMY%2F9YBXkAy6X93oqqURzVpB1Ily3zaLRiOYrIr8nQ0AyqZfWeDkh8AhPkB9UaNDCw3RlmBhiyRRjDms0hXVGumaJtLAZuejzINWh7OAanH8fPDOvTs1R2wQHMXAdoyyO6w4AT3wTty5ineymfDhcyrU5TBWYJW9QUXRGUvmkmXcG%2BsCX5%2FIR6%2Bw5%2BlJlG05Adzze%2FWGcyJ7WLt5RLlWKds7A5tVYCaoCUGZ%2BsOt2rS21aODrbskVtuFs%2BfpV6gtILo02l7b%2FT%2BAySczG2slaXvr8%2FERBn65YDPbBbkdufrW%2F2xMAJbsaDezdNijtw55sU9oc21Mp2JOA4rN0DpKoFmBJ3pbn%2BDdUwm%2BSovwY6pgGn5ICQibI9DL72B83vswytTdIJc5JhL0to8URMQBcm62jQuGkK6gObPGDHOvRBA%2Fwk%2BtXgJ19349b1HbIHFMDBYH0u%2F4NiukjbgKUU2bBpCHpy%2FQ51oWNy4ui09dmGXzufMNLdbo7fDOOz%2FkRR9%2F5SmqrhIWF4zMZxGy2hJodYzYQfh6Hfiw5xloM0oaRrzAp8cKVPJyITGqLum2STpWRJ2wmJmsVY&X-Amz-Signature=178c7dc2fcb86078830c5bd0a71bcdb74f3bf47874d256b9f83fe0c497258aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOG7HK3M%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIB5W%2Blv77hGeq38OPiK3M4QU0RjRpqvZ4Yj9vJocdm6YAiBJW9QFkawx3I6Yoy7gTEPupvCWs%2BiAzF4WiNQ0FSIRnCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0t6uPJSGlyhjt1mKtwDnrA7p50xV43n0nAqomK5hYhddgx0rJckssrEfzysUxdxVSNnokCHtpJ0nNIbqGt8OsstAHTfpxBpHk5%2B4Z5pPKIOXmFd8oF6%2Fwlnas4YojfBDmMrJa4PxpUrqwQNt7mDWGUikl6DtmwpnaMP9E0rs5FIZZnB6SyCJcWfSMhJfwhtF2hq09zG4tiPVJGfGDefbjN6eceJm9NBPu%2FtOXOvj8DedVZGntBeYWo%2F5pfFGmbdKphNCLOwmJiXza9BqbshfQlATYqqiIgF1mD6xUwQC8xM%2F3IvLFQ9qa%2FlcDOw8DgmOyvM1vcIF6x84EY%2FI1Fx%2Fhcqrrd1NPmsiq1hdqKBKcg1zAehObCBIEAqKGwoi0xSALB5qkf%2FhZRSI2jIF9cB0afqLadDDbd4Y29EGHeR3fam68c2fFT4ybzDZ6ubWvJbBXVXvkJkVwRqB328iwcARQOclp4wDeJN9JkLXrLzlBkIZrhuXaffNj8zPh0S9Dteeb7dP01%2Fr8lHBzn9n1uWpFG7%2F%2B6gX2N9vGHqp3PwD2u8SOxNNjzQ%2BQjvr1pnV3366hca8E5a02BQkd1h2MHRL9y3paMuoRKATGBmOGAsCLtYYBPsA7VRiz9HTCbnP0FuVfK2iZ2bEpGw6aswnOWovwY6pgFvpbU5i6sjZ0HL5nrti5V5EJibiuLQs3U%2FPD168LMcebzGOfqgsQTbRuSnERyABb9dRuu%2B%2Be4UezyfmbGJKQJTMt6RA0BQGtHUszeJaE3%2B2BU3gHdZrMDg9n7M1X9tIRv0oww5lwg85GlSkTsF4UTGK9xQ%2FYy8epAubZluroydcOW5IaZyNnBzzEIrQf0HVw1WI6Vf33X0lR4V42cgUIJB0otfWOnc&X-Amz-Signature=ec0e621119403c1a81d66cd45c04423fd63f78b8dd915dc6c1fc0863c130224c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
