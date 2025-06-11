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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYXRDIF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqK%2BKA2JKfIV%2FrIaz%2FHaXIhdn%2FuRdP9qldbK%2FeylynoAiEA%2BGWAMCNyQn09w53zlCgOlWzqLCf9fZTLu9Ft8PBLhNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEW2lLGC4wZyQFVWvircA2dFptbbGlVIPTuDhuAafnFPxYSFysbFp%2FS9bDa3MejGbuL7geoxiXzXVYBr3vRoNNAEdcfBzebfH%2FnSi9nL49MzwfUGfAxquJW%2FnQ%2BgEn2tMfge8UDaLvItzgbFtfMjYR5XX63eGwqvU7HFdVNPFzryzrYUnvfWmE4FEQPgVIEQ21%2F7OvNAGyeu3CawAp2MBGU28G27RaC64mInt37N47aHdhGGkDsxkOISFDRFhShk%2BHa4AqLJzV%2FzTZi3QpYkjXcvSZkmQZWghxwTgf57Ne44dvz3fmHeUI0ZkaoRSxScTRhb1S0E%2FgKAOe97TOdXEvmcsIhqEkJ5VwkWnv6Au3jVCK%2BHhAStBm5jPIABt2qC3uHHEXoZL5cL2alPl6LaJj4xSDFbd24W2Ag%2BnCNTA7ml2xdQHvXR9ZYCVWWpHlxtwivxHWiXyOwhcRbOSLqL4Z%2FQUqReTNTJpa2SrxZ4kxHz%2F9cgwFmL8EfdYBKV8BE%2B%2FKJM0IGaZ0Em1WrmPRXtkU2pMh7HUo9PaTrotwvuQ5cpLVJitXlC5jqurXWjruemNrigMCWQYZgeWtYtJxuSi5CHCah8zQsT1A8107kN4bHRj8RTTnUo96x%2FnEX3a6PNC0ZCGi5%2FSj0dZ6zrMLuWpMIGOqUBukkUx9Om9t5R%2FKzetUN3iyf6yP9gwrlXWubzltxQSPy1aFeWJkOxgl5j9djiNdWZMuzygK2%2BTgd2TV5rjbidAf2qWnYqvce5TTam2okSMMIUI8QdQPfVWFb%2FVFekAL%2FiLsqEe9R25r91rajkOmUuqL%2BEpDvD6eSkI41mrryfoMgMVGn050Jod3O%2Ft38yYB3kn6ck0JUzEnjRJLUt8S7tv1Toa8qO&X-Amz-Signature=01c1a72f5f4b2e617a5ed66df6eda90a019823dce0db42b772084f8e291f4913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3OY2IR%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyAj2F5o1Gem05p8s5jcYyuUg62d6A01IGS93AISsdZQIhAIXuJo98HAPvW%2FfLuEqroYwnGEFd8qwzIrLcINhdoKTpKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSPPrxzdrsT8FMZwq3AOvri5RgOPLRIUVxaRTMO4FknlyscuC8n9dmJ6WYn6JOmqsj8N7yyKo%2BKgPcmtTUW2QX29YP4i4RB7o1xxTYdZe7Gkp3DFIOTWa0vsQWjtgNU180%2FIgaNHrGjy29PPY4KIVtXIDSYy9uJsRuCjXJJ7TcX1W46C5cYOXI77AfwHnFOaXIuN7vg%2BLvFEe0zMYJd9SYh4qbOHEwQJ7hn3%2B31KMPmuzspLCjFBXeBbWIGz%2B12XJNSM3jDnp9F21W%2FzvH9yF%2BimXLeTvrsx3LkpI7CltCJ7aY4CLEN5IVQN%2BWN%2Fk0LzJGf0dJh8fN%2F4gPrBDMhEHThytaMJVJYFVE5Y2lmSuHF3d2FGFd3OqtZMnBt4TZuoRmP9WsQK2PsZpe3lXTmxvrRyVtWtghW1joqmAuQP7tzUdiCFsAArCnHJvkXAfiv0R1U3Lsounm42nybg4DSYACGmyUMfrwY1lcWOdJFyKhXkVo8yUs%2BnUw8l2YhqTZ6JRSzV5dWjykqwg1iileBgCbU8A1KjuRichi3wPjPzWqkcIa86vaIL%2B4d1m6OBEjqItMJvkeCJhPl7y6kksuI3wvDXqKB2jI1TaXqYRB14ogQ0XURmPPDrtzqloSRiSdtvNYotkEIa1aM1nEzCylqTCBjqkAUSekc9NG71fwmes1WQZlCw3yXKFKlMZNbfZTBdfbgTrGi%2B%2F%2Bdedk7ZnMUU2dd82BEZAb%2Bh59ORa01TcEI7csEV1kxYM%2B1BFCuffjV94LxekbLGVpj%2BYjM4B3bxIJ7oWRfcqiGP690JC1bIp63AmeGi1rBU0IClY6pYqh%2FancH2u9QpPHAKRbTXi3c7262ZQsvFGFc3Gk8KkOJjfoWeA3o%2FN7HpA&X-Amz-Signature=42f95a5460b1f51c4e65e4e662259b46223e047702a2c31b4b6e0d85dd39e98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
