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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTDJGIH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDN9MbRp8vVn%2FSwTLnCkIqp2UWW4MxUG%2BHAOMbt2cxbSAiAncqMMpTmQ3lr1RsK4h2BZDsOmCSHavp7ZKsx%2BXBBYByr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkWNieSMx%2BqR05JFIKtwDp3FhZaRX2acwFJgW%2F9ndkR4GZXTNUuX%2B21%2BybBFylEEGw4sHoetbwN%2FmMx3zViI2H35b%2B%2FFpS%2BOAKOFjIEPQYJjeGSHYQs3vXsrZCaPxrdAS4CSwHvMEyQWoke86MACVdTfCsi87itBCm9eUtgk5Fsvh6EoEy9t0uSziI%2Bp1ZoTPWAa1GVfGuWaDYRIIuvtZS5I7ydd2s605ZWyWfcx4tPfKA1tlaupb0yf2FJ%2Bu%2F6cbE3OqsghLfIaSPC8h4myr51p25o9xb3HVzmX4xDD400o%2FAFCwusekBVilPq9t%2FMpZxqvjzEZoap5VgFGoABxFNq%2BQ2NiLbV1YNOFe1Mnwlh15W%2Bxdn5m%2BnpABCTESNSLwS41GpaTP0iHTuKUg8ziF7i%2B4eyt%2Bsha55kR8xdbhVH6HtVptytm8o6aOwGAFnWHN5qdpoPZRuvb%2BQGGLFc7NLbcgRCWKkWTszv3KDV7IZJ124kHdAZkdjTTrxqFZr%2FE8PLxsWb9pIeOPK9mjPUYQtXNi5lntoOxhkgfIZhdvjNCuaegwdlFNafkFykM9tet5mBqLXklHn5xa2H5G5hZSOP30w5QbtT8EEMZ%2BKw2KEqNepLRHv71TarFKssjkPTRjqKx5oPcQHtUe7Vcwke%2BqwwY6pgHgpYabtZYBD9rj4taxbrTYLqScax2lNxv8d0RxHnvZ5yJ%2B%2Bobln1bqh7PmrcVDWhIs5ugwwl7kd8Kxg9zn6VrGv9ScanAqoHOBSBNvUYIQ5w%2BgP%2FGln4B4DwnUUlFiF%2BC00txIoWuAYRD7uN%2F5OvTtb%2FLXyy0mGMPDFJfDolBx%2BjE12n%2BraWZmtB9qKFi78PNpTY4fgQVKHHNOe6GqeFUO1Aob8cJR&X-Amz-Signature=2ea8182bdb8d45bc73d730ee043235203052a4fcfba425261bdf621a1af3ec17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5E4IVHZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7JcoiM8c8lHkX3iMs62R0%2BqdBE1X%2FEMYGiBT%2FvibAugIhAMG9E%2FproYtPJtWfYX3Jbr2sIIWHhQLyZCg4idh%2BMMQPKv8DCGMQABoMNjM3NDIzMTgzODA1Igyj2HQTw65nv0baJF8q3ANSl90Kzcfcm0mq%2FxxYlDjW69O6kW7c2UJyILRJFTE9M4pkKrJaRCwxCQcsaoJOe8SFkxZbJLJtP493B%2BE0vRDKBZX38k9X334DgS1TdxJyOmx%2FYjyb1HO3wbrayD3OdqBkXtY8RDTrrD%2B2D0i3ivJwB02mMNZ3oAcEpgzKw2aAPq8WocPvgVFrh1tYvTOgJToC%2BXerw7FE4SEoD%2FgkW95PMiVEGtMh8oUX5dKUYTqOLnnVhmKWEAqBdqrE8UqIyadcr5Wnni3KyJ4bltB6N7rjlwVs8j3ngZiOV2utjlXB7UlEMbznaPm0crRthLwt5UKAhTeTks78isNMJfv3btcS8eVyZ6va8kkv3yvobWBZI1iysVChfLY9m%2BNiIYOy2UPLGztw1tQalXYXGS2KsWsyjz9QLiPXP8GleiA6QlDdKGpyFs4zpMPoZwP4x0lucVTTFDNmKsfMrcxM9z8CzCVNwd0DjTxzosrJgyA%2BY1KfBtnINRTQXEnIBl4t9f5KXgBxpgxGWIAnlw3gDvPySOtbXcIX3EibAmJ83tQFA9GqYKCWJCVbe%2FgQlCxfLqswlHulMHuOXOoXJnPNBwaWm5v2YhQiOlTLETpBULPXzdyuUM9ZaIEV6tEUcglGRDDj9qrDBjqkAR3J9zGZXUlroO5yeZfFEqjJq%2BoKautH85H8P04b8dwyoPjvzfWqR1pnbIIYbmAeI0lxgGZp51rTbIAEIORb8ln%2BMEC2s0%2F0xGWf8C7mxmzRgpe38lqs9mJnVEXfMyNEQjtxYmX8YnwOV5Rx5WqICGJMpc2X4wfGtE8R9%2F9wQTfBcBA3ptnvAh5W6HSpJqCelxfpdURnviQAo54yVqbfagCz2ayi&X-Amz-Signature=328fad9883bb888eb7abc74df78bdaec95160c403f90f09066beeb31c3b0370b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
