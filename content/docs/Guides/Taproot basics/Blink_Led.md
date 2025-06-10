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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW3LQJS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdotifHycjCkbxChwNXzTUAjktlCW8eJom1gKsB25nnAiB1rE%2Fm%2FV6LOIKSmQfTzhp7%2BRaWFh3%2FMLxS3ITdbnLw0SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI1e%2FEWRL6QkWKDISKtwD4aJ2Drlbi6PmbBsw4cJjWx86evY50uV5HrYDsYlmWLMeG20T40GNPvh9rNLHyGENKyH8jXfdNcL3kTuB8OJyLYH3oPzyKjNoaDbfEmoFtUh77ZbfLeAsmxQ%2B6BxxENA9sRymOJA4wr6kaCv6CKovWpHaJvb9Wgj1yAqe8y4VhUPBDIhrMS7qpu9uq44GurtciTo06LHDCFvfEhb5D3byOSyaQmhT005hEGRtMfM71m0RI%2Fe5ND47%2FBvhV3YgTvE%2BoMd2Ja0yvkJ3U7OE2WSfDiscVzslvt89gdK7Q%2BbY%2Fb9boKXVGaGNqImR4D8gn8TWYMQoa%2FKaqAZQl%2Fs2zwQkyxyLZBzzKlr7bXWBRjv%2BWAk8R3LvrV9OzT86KAsmJmLrTXrmMgfAyAT3NSFWSNezvY%2B2i%2BbQW%2FgAfUUU2N8AKTBeh6EiAEntSzRX%2FJ7NhBkwpOfCXCnejRhT92k%2FGn8GGqUEgXPSif5N5c%2FtXCse2M2LBuSwqQUEfnMrH9ynsbKHWzag1JXtNfzvm%2Fxu6WXJHpzKyf4NFWKoDP%2BGBRW4WVeik1Nij6n8vBxcO2kpgTdUqVwnZL8YjjjwBDE0jGW2uLb3atYGsI7KlC0%2FeUWD9QJmY%2BGtWuM6ywyLDdsw%2FuSiwgY6pgGvpwXZK%2Fg0xr08klKGVdGgJi%2FevOYcd4dqR026epVTT6qg4bNHTi7zAdvLmVPXfxNsqqVnWAXabVz1xKsdFBjkGhaXCAwrSiV3ufAHDJAYnqbArRZBJcrefCzU0QbyxYRBoGU7eIskNZKxxmLvWgqnwYaljqIn8ja7Z7GCWyY8qConSf42ItiFlnmPy4Bpiy03fiEb%2FhP5TGNGoiSkKfMyMoe48EJn&X-Amz-Signature=7f9314edb789e57637dafc34bf5b817f2d806fffb48da6724be0043b88ccf3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP25LHLB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDxsWtVFBzWSanYcOXkq9MFxOxYeUbkhqBXAjxap7k0QIhAMmF0kYze3IaUNmFuKjyvfKt9g%2Br5djnMEBTWE18h1fGKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8%2ByqsOQ%2Bz5H32JxAq3AMvXcVbrJZJ429lq50mwwaqo5T0vbMXGPhUR799P1dfI4stFxZsLQzEFpsllil6SPhmCqAndnrztLU2trGQjqO2cRqPKVbXhEhLcgoSQ57uum%2Bu2KxpMkKrN9U69mQbwon7HM8crQ8WGBStaRJq0Py7yhl6bugwTPdSH%2FmQtdNIm%2BWtv98pGZLYuCKH7POkh5wYXEG8Xf8gv%2Fw7fZThEwWGjSJcJJP5WZRdLTMbYbMh3VZGQ0XGkBvg3ugcfn32gajmS1dKQ7ktQIk7p1Mqo1wp12ntpiQXeNeItgwjxdy5Hou4Pdwg2VhytWGl9WnxVA4XT%2BkeW7yVEXTkTF3C1A%2BzsbmJsxKDXVj7u12Pp9xlFn6JTrU%2BYDRnJ3J8FCYJRJTZ1pnh7wzwRnyvYDvoTyqBfXRdRxs%2BooiSKFh%2FGUZbPxc0uhM175r0KEiTR1yp9DzRrBk6qvgOLphQtjZDKDBuWa6xBAwp7cdzQGrcCMgIK2DP0IT9v%2BOSfpQR1AzyKGmELISNheuxVckC8rLexo61EwpC%2BYET%2BnmYzT8w21%2FKIemxJ2FEatrX4Uu7GQmH4c%2FUvZVBv57wiL2MhiTQqVwBDFgk5OGaKsGqNE0TEwWN0QifOh0E%2FTNHN0bdUzDV5KLCBjqkAX3pEKiT6A948Etkm8m7PUDmImECtf8G8uGsi5s79GCRIOwVT43HhdyOcwpiv7pSzFkygbKkInLCcUyP%2BwNKi%2BxzRxvFGiuQ6Gw%2BOyAEI3yNhStzRRWfrjgda0F7n7uVc18vqCV%2BW%2BkIgwHT7l5Dgqg20CP0Jit2HYEDOnMyM6eR%2F2cLPmYZAdS1sX5IIrRI7TAvvuKkxFZ4bqYo4UKKHsbYqQZg&X-Amz-Signature=df4359d8c65f11f54029e485149c8a98ee59c9d48348ec50e21ab732029e652f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
