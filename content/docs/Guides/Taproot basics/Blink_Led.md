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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNBIFG6%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaZcANCZoMNsVDfkSCUoNoft2N7S4FxLNYxKaZy1cbnQIhAI46yiQlv68WKiMWK2jBDzpMS6uasokbtnNTUHgkDK9%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlNS7qcFXZJ2gxwO4q3AOjzptKQIuiw%2BdmTrrcWl26PNglEaCMgch7NjOjR6HFNk%2BDfnWRZitfe%2Bu5KZBceNn1rzWzL3Tuz3yVs7HDWp0MSxsoljnoFnErWp9HNLxHeQoXSBcW7QD5V0Aw6zzR%2Fwy2RsYT0V2Bs98TE1RhKg6mfYT3ZMrV6tQ4hwaCVpDU0qz0Sz5Q4wQgEGA1K30zzqVvhOrmA0rQ03AeXDUHY9cLjj00gATvTc3hCjIZxzWbD0LOVu36P4MA9HSfVQjiH82%2BDzgIPCrITy3qM9WsWelBedLsfu%2F9AII8DyHQiE2MnLRzFUKSW%2BhzNm23uRv5AOeWI%2BfqznK6bTCGbWyHaDgAh5yS7Lg7wVD96WQ0DCMZWbQE6Na2V6tFdjQVfV275pLWEYlqa%2Fyr79199gcmMt4wefWjsBRw5fMU7pymQBkCCaIBUcKa5%2Fh%2BScSXKJA6Kz0EGgyooTg0XyuIb0s1fCilWyxIdNrGR4BvgmAO6kxF%2Fl%2Birll8b2Wj2QG68eFfX%2FgAJSYuXcmHPuiy6vOjHOyV9kFFifRr958H8tUp4zx%2FyOkYhwgvdPQMnCPPhKObyp%2BSNAtu2J44dy33JlWxtsy4p5k8Gws7%2F2s%2B8DXnO9fDLC3KN37eyqgXfLF6HzDl8p7FBjqkAahyJK36ku6hJnqq3wMzgJ0iPqGpPKHtsnvhmQKFnAYB2vyFoonYCJS4ERL8i45PIKiOL%2FLrNpzCpJ77OfM1zjsmDgrc62CBKNouCl9vQoNeYIh7QpirDbH3ilIk5hLAf8eWaTcfkv%2BgiJ%2BmJxBaEPe%2FbzXKmWVHm7vcULwQES2BTGT3CaurZUNpv9MjWcTC9pQbguU2IZdPsaW24sFNgZfvhzP2&X-Amz-Signature=d2342b19343b084ca8c1f63f0ae1903fded6b19b0bf9e46df556a873a7d0ad1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLRYQDS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlz3KWBm5ShroC5W5WdFnVGH7fSzjBEBthD9h%2FjXnGoAiAwwr7m7i%2FI3esMDgGkqPnPC5KGz54wZ%2BsaogCeL%2FW5gyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVfeCSnnWvy5Gt2bfKtwD6esq1ke9nQK6scCTQE5p4bP1vN541BGviZS3fC7upv2IAxUHAWUJH9qixyCQi8PTmt6zaomr6VpjrW4hsLtr7UehZZH8mEEY9FoO01FoCyjZEcRO1vz9lg5oKcOG59JDmiMr4t%2FzpOZftBqOwu0guVhYMPOrCnLdK6oO%2BMkiWEsET3sUliHmWw71i9trfkAfnQpqeGV0%2B1ZICel773roFPUtBYJx6MgfYWpNZs8k9uzTjOXD2TCgUnEpr2Gm1l50ozgZp%2B%2FyVYlvoOTWJAbM2KWRm9nHfavhfqwLdV%2Bx9IlT%2F5cU%2FWcvzLEP416Rnwb2UQckY6LKAoKIOuEJsOWEDlTg9sKFqPMfyWpcOmupFZImnwds4wmmgfNEVUwv4o5%2Bsfq1ubI2xzqsl8He2O%2BtnssRZ1c%2FSAf%2FpPxpGqJEuimtalliaMa5P9KG63IJqGMgZYbYkvCIlS6S2Eka7ZoxSt86%2BrowaBAjhwAhb%2BSWPRSWOa8RMgXfiKPXpK4kRlQrOa2m1akvgE1AXTDKn0L7l7xUgcBsp7%2FWdsj0NEMDgvPzbaAnA0Yu138YwZMxYgBb5RbMqpeCIu7RfLjm5FgrYM6AQybAjFL16PBKN5wZyj1PIr7FW%2BkIufYcFVAwr%2FKexQY6pgE%2Bbl4sVZCthSKTCyOjAwHDfV0eKzSy8g1WJbqTBhI8LbMfDW%2F3NhDLwvXjuUjk1tJhXg%2FGTqEzeFxXT51Tt%2FzdLphyDFe1snK%2BdyCQzEC3DEPDOF%2FehZzTmxPkSevnwor4xYS%2F8bOYh0RdlCMUrXZwAunWtXjoM86kOaypbeXkxjawxSJHH4wEtKTRbw7kopvUvTKOtbDjW%2FfALkxVBAiVxpWHFadZ&X-Amz-Signature=e3b0371de0720ff8f03cabe187f384a6455a9535ebe719bee0cc040b4541059b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
