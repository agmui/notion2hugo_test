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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMPOOSC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCK0ACuj0SoDqMPP%2B8XZJcxqOzPir2JctZsx%2FzJichulQIhANqTfAhI6sRNRVoPWLcvnnpJj9kq%2BCHYUda7cikolqXtKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2BLp3%2FV88%2F%2FaIc8sq3AMsgk%2B2X9ffDSVb9VFGeVpp1K3Y6E%2BJxFZkJc3HvJkxcf7XnhkwfMMDCF4Jhq89KxXx%2BL2AeYTRIMdoNDqBStlreLF14kZbw%2BIRhe3QKpnRHON%2BBYIqt11Dihgu9d5qWFFOU4kDgjRu%2BekxAzKCeUFZzludQCUuwDmMfvadkYdMyD0vN1z0eub25umEV08JjYYW2EYsAI4IBWgP2WOXh6aecLRH6He7b9N5ciej3%2Fbj4p4XpIRzNq1txOzmHdVr2Nm9Aw8EFLpo874b2UjYz7VTKTResMOzSNCEUGLSL%2FQzYBrRlgZi1NnJauG1i7L0LFdBoebHf1paV9J29pQtfvzqaguLNv%2F%2BW6ZCJX%2BxDReO1aoOgByk8gp5PpjKnCf2dvyU3o7EX768U7rm9cxXPtH6SAA6WKd9HQxCinjcXTXYZGC01UUWEpxwHzDO721cKb%2FUcDiN28gfFE6zx21OmW6sBd6jv2LWl8VQ0kl8Fv8LkXRZdUhnO0c%2FS7Q9KwX2Y69OQBJZWzreD3gErO%2B88oIaOxK7udUmDIjaqE0GlcyPDb56KJVVFa0y7DNXg%2B2MhiiEWHBVt6CMMIdG7a7Wu4xupqtIIOj0dLpNK6hyfNTF2y%2BYc4nozaDof7D8uDD9pvPBBjqkAQI2F3zs65TzTvqlWEvLGuc9d8%2BHkeFAuziI2f6uzrgmzWjvPMHczUIZhz2aIQWtoT5S2glJuoAWXiACz2REcRC%2FFGaaHNTNzcnBOXRsF9PXlBN6reQJ1KQOV4LSFAtyOwF6lGZWq5V1ZoSAG7foJm36o0i0%2Fh%2F38kPlfUsGhhjtM7o8ZTNckhvpJ8NlpleTHYSDga4hsztiw5aMxwsK7Io5tf%2FE&X-Amz-Signature=602cb60ed2da88a2784ef3da790fcf79691415d1af77947aa1267d25b3d05578&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJZE3O4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICLwQ9eSjbYDUDmq9z%2BA%2Bleo5tlCNmUhJIDNck%2BVCdoqAiEA49ObgU02lzVhrTOV9X0%2Fpcv2o1soryy6BAhR%2FuUtHFEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAssTMlAgiPz%2B9t2yrcA%2BCFuX%2Bik97%2B6ACLOnm04lQwnSXinv6cXOIpb1RoGWKomoBkAxfzUn2xIWOFZaYNaqBqTzvQHSrpv3DP1dAcMP4GEcwiPvgRy1E7dCw%2FwzUTk7RmMT5SRTneorTH2XbajZ89v%2FZVegJHIOKfltbrcsRoz3BjT%2BaaQdaOGKR%2F7ibK3e0F5YGwenrBM4geaMdzIwk52dJSAiroebowg%2FvpIhHdrXtxSjmyhaPb2B13GvNTFZyc1gq3KMsz4A69vAub0obyG8Ytc%2Fl04h1rawLRFujZ6h%2Beu7FuuMbOhVg2CQdxLRTzZm9yWzXz5iTl1Clk3KOoyOPT63AsGnY3%2BVSW1KHSTAFAwTrtlK2%2BjOBdW7Dl8%2Fw%2BqQAASF08U6DrwPDvYYqHgV2mJf%2B8wx8RJcP4x%2BiTS0wAq1R%2BrJe4I6ZuKXYQZ987uLWsp3PjUHfJLjARPTgazE0PqxBgbWIpOkD19IaZQ893XgfMm59jsCYjmWD4iIO8wvpseOPQ0rAY3nuCg9jf5H%2FjLIDPYnyhqn8CNceEUA7Bv2Z8ioJH3MtD2t8i%2FyUgwj3kUQgX8L6sTzsAGF0DYxQYibazIIohnXheqULx6Q2JCtfmSiVei4wPzXVOekBzFGG84WkD%2BnajMJKn88EGOqUBe5wkSHmIDZsZF%2BTfltgsfo0tNagVMLaFwVt4bEUZoy1b7vOuHI2IV7%2FzQbk1WrPxvtuAPW8LofBbGM62XXIM9KzgTmLiXEaKUsDpCgfAEjLbx0aRHcEFS942KN%2FwQzhw8Tv7zyQlOGqxTN9kKCY2Tt9X36Z2gkSoA0K6%2BmMStgActpWdPUXcz14zCpmsdn3tNS%2FOWxL0OqCchZjFKo94vZdQSfTM&X-Amz-Signature=c0f42a6c4e7b729543dc9393dbfb668f208681596ade0faa94fc8eecdec8b907&X-Amz-SignedHeaders=host&x-id=GetObject)

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
