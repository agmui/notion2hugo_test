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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUXX2RF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw5cr61pzHd1gBo65tR9IEdACFzG0C61jb4ZwniS%2Fs4AiAE%2BRifn2AVNXMqp0zjctak6jj%2B1V%2FO7rIwYkq0mrk4iSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMySRWyB8et2Tew%2BavKtwDBH9JmvYoX%2B2vkI%2BSs7%2Bu0YrvUkvl%2BeX57PowRuBL0E7mIAr0Sc70h%2BYHgXuYfgH%2FLDZmFcOyTj10enmBWuBk%2FSsSzvNF%2F1T%2Fpyi3V5Uq1aPY95fAwZlxo7Y2pgPWlB3lhEXVnn5TXZaRDy%2B0c%2F4hy4uNH2TJL7DhT3txqFM2fA9W6yvL1xnBTsajyrywd80tBzBPP%2B2Yuy5o4wTkUfpaULsglmhuEw%2FVCzb0DmJ7PljptZDDdbWvo1Ff0pxu4DO0yndF6BDVK%2FKmu7e%2F2VEy54Dr9Ao8IiEkeThy7G4De27lD5%2Bis5r3OtQ5YFDeGmM5psKWhLL4mAhPmlyFyoEYBhzXnJBosnL%2B11su7Mgs9ZYv8Dt3UCHE8eYriouX6SOhdUZC2kJi%2FCcSw5%2F7sblG3fMpQ5wQdkaUY47iQSohRYYh7sBK9l6t5QHHULk1bffLEOAZ3uQz7yLmOrZACcZAEvDRJequMK%2FoQ29p7CB2m0ybZhk9bEIY5OaufW7ClMt2YfYfZklu5k1gJJGVHaPolst479zFvhqx%2BxmtmEooJ9my%2FdhCYe%2F4cQ%2FpGl3KR4J%2B808F6MpYqUjOMD8wkfIhrorj%2BHGjbH1UKj9%2FWR%2FCmaMTi9VvRfvclvAF2wcw%2Ba%2FfvgY6pgGI%2B2eX%2BTk6cgMu94elKrpHuAk5DrT%2BbXdowq1luValYTsg%2BbvUZmYC1Ukx%2F4zfE1E%2B4PQ9Ut1twFyoCujAYvBG6m6SAKsBfHYjxJ05HDPs59jLsrwZW2ZLt1pMUqTJ8Gxxs6s%2FJeXaGs0C%2FeScLPuyKTanQ%2FVlK6YePyooSliW1FD5SRzjsEN0qn%2FIS1mxT2zKAH%2BUffUNS5XBaGwSDCJgsXGO3ItT&X-Amz-Signature=7a7f70f928d4032628653c2c52864ba5edf3cb0936be67c81a97041663b4b923&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQGYDR2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwcQhXB%2BXLEGKnCztYMi8audLOktpQwiL28PQr33ji6QIhAI28RLFV7ZEQ5kbVZtUYI7vs1wlR0wQVsdFJRXcqgxKVKv8DCEEQABoMNjM3NDIzMTgzODA1IgwlQm1vNsmTawSP9Xsq3ANwCKtGmv7c2dZUzUSg30Jkdmdok9RWzrTf%2BoyNOyu4gRNQ%2B66XcPegLaT8u90LdX7olpV7Opae1AjNj2RPEQDI7vG%2BLvck82OU1dUlJH7S6lWLa3Q6641fffOsPI7vopy7ps%2FMQyiv%2BpnT1gVg62kb%2FaO%2BlZldEqhIcYkkdznmUtOo9OEBI7OWm%2BsBwwB%2FZsAuKw5O4xMIFDdMwTTTD8PJx1ioLXWl43FMjOuliBgd7L4A%2FUUaniZLAe1Rg3c0H2ptnLhhy%2BUHwR6gezLOnptqjCGvAak%2F%2BALDynpiDWVIM7idvVsAiaZyewEtsHXQzwFekIZ49P5DdipzImD%2B4GjQv7Mo6ASxkiQvSFTdT9UIkdyOxJMBRAVSqwj28rl6JDbU4XNpIrU4poyJLvce42vMMrQU8B63MDj11pGEBB4eC6eBVpg9in0d%2FQxB8Pwq1V3pyx5OcU1kOQ3BGVMobcAeELLwfUg9mZWS1BETODK%2FyjgnxsZPeK5kTW0iWZLZfNEjFOrYfu5xJfVRd3kHVNR2CaHCacL4zgMamCRxNvsCsXcC4qZBWwryJKbYC47i%2FHsnFL%2BHjVX6Ycds3aWz01haPb1iGicWXY7OmfB%2BbbGs%2F2BDB8tpO0%2BAkh58SjChr9%2B%2BBjqkASrJh3tym2FEJoN2orsWE9m%2BVi3U91Fezc5n9r9QkHBspjbRl3jigNeYfYc2Jdw4WeS0Rp3vPMMNonddweNuxSoQp7WYTiiDbmMJwkDRz6rE9MT2faAJAA25iYslc8ZJUaGz%2F%2FdgGzhajHfeERU5pprGA9GQmGYQjFpWSr9E1jxQYOxRLQdil7d6zwv8l5NSJXF8rH%2FzQdSUGfL4ZnBdtPvBgYKZ&X-Amz-Signature=b7907a88572cbcdf6180982f0b2bd6702c122c904953298310565e2d7054a7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
