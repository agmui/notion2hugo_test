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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRTEY3NX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP2j8qaQG%2BdJzr5E5RDKS9pqgdnqraXR8BmcQxvp%2Bg%2FwIgKeF0e6K7bJlAQh7LAe4ApiZNOmUFNImAeZjkguw0zKEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEH3vFf9TN0Ag2dRHyrcAz39PnkTBmBy4wflgCkb9Y6%2F9fLO6UPcynZsXFdl1pZHtGgMnxnUw54w0p6eRoBgc1lS6OuKnYsM11QvFTXom4hLe4eYBeTJFa5QnkktUGVNEsj4sZO2wW9colUAjbDXIrf77symJ%2FJxWwlKTDuloKDJi65iLJjT1%2Bb%2Fab3RWKj7baSEKR3DBVqPeJGqUWAkEvbnzIShuLpHtUX5HnXLqj%2B61z%2B3LDVszucnWjU6dtJdalLTwrgOxLcIIPIhwT7KXCNQvlHVrzOTeOUNg57xb%2BruxxMfEoRL%2FwP4Mz5FtAE1DFnAB%2F37WE2LN8TlOvQwrR6ZoCbZaRsaimaetcXf0SRcs1LZDsZIeKU9uniIOr%2BQVs2AdVUuSoN7fsrduSc4q1MuApQdbiU9m4tL2dy7FKyADlPrhnwpz0VVVD3wmtEgzOeaccKpnq27U8%2F5ETFM15hP%2FdZE%2FDA0W1RD6%2FuGDu5GGIdKQy1sZgU1caea72jleK%2BMeW6n0og5fXOoHCTv6%2FMNdxdhk8eS19l2Ynfnvnfwx%2Bzlkml5F53p0TxfMht7W9nhg%2FyMe6TgrdhWsmtsoSqn9wpywdGZwBIX6lNeYrdxCLvLX7GBx35FFI%2BAr8YEsc1GWB9eujHs%2FQV6MJ%2Fd%2FrwGOqUBq15W2pBgah868lgHHf4XLztC58ReFDC3RZG5V1IUJQWvuu2b8Rp6I5Hzx00xIPceCA3NT%2FjsrsnAmbgmd6MS4jh5RuEtce2zYMS1QgZqVYmdLm%2FfWSmT38pI%2B7aoCYwQ9k%2Fhfk9IfWSXk%2BJRDjk%2FO0yOvGm5I14broD8MtJW8RcVYgGT5VbU9nKW7tpcEv1e%2FNabJ9epCV%2B6dozir0SnpULqMur4&X-Amz-Signature=c81be44ddcdc033683ed3669caefc7ea33d6150c0fbb9f9214952ffcda50be34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DDKPTV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuqYvtLscI5VYQbpS%2Fp9XXqg4lYiwnpPPbQ2R5S5Y8wIhAJZexo8C7kamsHuIajBcusMKEJhqa6w3xc5pYjf3%2FmyiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbUFk88bgg29xZc9Qq3AOYtHfUaSjipu2ZavNgGa1NewK4Zuswg7FocTBeWeVYkf2b4ldVYmK%2FFqGnWvW0C3UKpJLkbPjM1tyf94ayx4Hq2WtCLnEYuwalLrDaHnMuGwWaZuxSglIIU7h9IG4nWG0vV8%2B6igt3ykKuWNrrs7JPzPr%2BrT88Kqw6WUMqWlNdBdFzFAA7%2FmpdgHGnnDYmWfKmwP2x3ReLEC%2FmLgJbqSQO7VLdxWZ%2FcVEJUK498WcJn2iRDr1al73MLS3%2B8WlPzwHRgzbHmUlLQhDfwkuC14NYDsw%2BXbOUO3G3%2Bzk3zKMRUjfPC9IauwbE%2FLoJacqwyvIfNHhSql17eo6PTcT5yBJ0YnkNVxVOBAcsiCAB0S9n6156Snde3SOQht9kmSzBlTMx%2F0rTFKBBGk8HoOV2Uzk3wPvnXBZJWlpEPM91yRx1ieUHmbJNZiDiPzs5p59xhi59p2fh1ZJZDb3CBioPam8YK7kVnxg%2BoSds%2BbFNWM1Jf5b4nvgefXy7PYJog5oUb%2FToOFPj5cxj7s0nIeW6xaG7Bc8oFtvmlXTaEi3IIl4MCku9rs9T6Hk4HkCSlMWTR3LiCQuiZh5MDZ87rRlH96JVBk9MpNbV%2F4Qz6sFV3dh74Qtb6zakK8a7KmNQSjDQ2%2F68BjqkASD2uZZHT%2B9G77Vyfnf5Z383dBa23On7ZLXXsEKN0IxbJhmzJtO%2BwscuYOcOMsT53vJ7Xayxi%2Fy0y9vM3VnPD13cNk%2BB9FijnaoLuJXaTWWzI01AHvXMaIQt0Rw9hFliPHym%2FqnGgvVQ7Zzw7vE1WK4saiI2BjNKXZ6ZYDuA2HaP3vPlOqCDJQAkHXqV4rNu8kZpVqlRdQXRRxQU2INfhfSc7exs&X-Amz-Signature=6130c879de2d6bec181080f60480d0444cbb74ad0038769da2eb7ae827bc81a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
