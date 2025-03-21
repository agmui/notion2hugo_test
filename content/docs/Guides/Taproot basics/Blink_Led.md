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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPO7OW6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDcpjk421NUIiSMAlIvsmtPjYan%2Bz%2BM6l%2B4ZW1z2G6grAiAEdEow0LehtG0R8oDFsUhrVzXziTlShJjUqbMiwQAvhiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg%2BHaCn3ux6MJiCFyKtwDcQ59Hvo8GmxwJMSuMad60k%2BU2RhOy1kEdiNgfIq9Ym%2B5nZSxOgyxYmRJj4VMvYATEEw1dClANh%2FOhOpXWa9znTQaPY%2Fpzf39UMZsHU2H3M%2BmTDgIixyYBBCqrf7DfCqd46GkJirNnYLYUkuAk7rQ6%2BRYlVT99XbzESyYt8v2hs7mQWNRuC%2F%2BN7TEHN%2Fu1nyTzS0LbNDYUVfalpq0RDVZoE8Wn0owUw%2BD7dAXtx7VsT%2F6UmfkwoqcJWrmel%2BTZwc6Qv21ElA%2BBpQRDgOAE9wnly68jF%2BkzXiraNuzAnyOIGrd5GA%2FwL9gAUL3KAbGrchQj47l%2B7Yr2qYppdjGdxbthbVWlkHZVGXddCJss844x5SGT4eWxVgbAF9KDBUlbLDuJNxYlSUf6KeONhKYOpQytpAR0nGEP%2Fw09Pe1sM26Vns7S%2Bm8Dc7MdqNNfMRrvol1o1dYvWaHaNWkqgNKVPzgz72VdHgVZqOkxiAVIoW6lR6cAA%2BbezQai2Nc%2FiIkPPR5IruhcqSG%2FVD7aERaRdt8Fu77nkRjoE7OZ1dxyfFs3w9YxLiEEAXyZXwHXuvyIqo%2FE0X9MLybn%2FAGbaSkktG3o%2BtlB8JVlN%2Bz2IRytxVZg%2FihUUK%2BXozNq2o%2Bi8AwgpjzvgY6pgFUvWzdOp0rfH3lNcNWfJxMnZS%2Bxmb6d6eV2Z%2BgQ%2BTHtbs4ZiGbthS%2FGu1dsdo4FnbsKBBD7FBx34dcW4jSlJEM74CJHPCUyjZ3oziQHPKYmq6Hly6SI6gDr17sffkzuD%2BqzQjiVpjaIpU%2F9hf06R4UGAQRwkgoQji8kU7u9eecboea42C%2Bu4EZwDMMp1U%2BdWXveJtD4g3t8KWCOzYDgLjHuBOrIA0I&X-Amz-Signature=780789693294ea3349b8bc5ec588b66e25609ecfe204a423f8b2d58ecee70ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PA77EXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHyQ5d7qj9Wtn7vavZ7hwlm7QIymy3o0DHM41wnYpet%2FAiEAwW%2B5DH8SD9ThJfjHV9ThpXG0NTCCudkk3PRWBqSzBE4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgDjg%2BqCzVPUYGiYyrcAxtO6EHAVej5Je8bEg3UI3lLWSYnt6DjHTCy0pQzHW%2BAOX%2BkX6or336lMjvPNaEc1XdKakl7wWIfvDtnkJ%2FShuExPFBj9a8nSHLUAtyDaXb%2BKxIy%2BDQjn9rJAqX2TLk0mB9U6CP01juHpbJfl2NYsau%2FadVPV1vzYZFKaT%2FwBpaztsEHukvztAVSZmCnqgHresMX%2B2s0kPIykwQ5qZWak8yt%2FgjvQLz7%2Fi%2B%2Bfguv4EJ1LVKmSzW5tZ1DhHpJhdAUU9bUOTkI9Ltzu%2Bg09MB%2B3E3U2bi8DhWTl3yFQGZat3YEJYj3bVACFMH4H7iREP8Ax63j%2F%2FHXL0CAlpkoMWi4L9nA7dJqGDdh%2BMpDHMjHayK1nWFAT5OCUN6pAcsCP8cDUgAPqbgFSkQNZMLDQzyiWPuWS787Dk2wISB83FjlPm9tXfWhjkxST3ZTADQct3uSof86kzK0oT15ZzjhO%2BD4jQpL17MVvMk860V01aEBfb%2BXw6GugDEXM2vhzzuLOIPV6DAvDjUqi64regs5RTZM%2FbRQflkrMrpGAJshHucq1bueSQYGYYHCQZY9VtPZ8jWGgjiHMg%2FTyUCKKJichnQRNrQ3rA%2FQoOL6hVdZqaIYL0QiNvnEIK4a9wPa4q7PMOaX874GOqUBmcR7n1lTErmr%2B1pSr3%2Fa15ASKgqJmKFeljFt9gI5KEMce%2BXHWiQcDr4rrsgcp4Nowc3S5bIy0C0IILbIWUnD%2B76NteMPt1CCtYdhpCQuPy3JGOe70rtWaocWSCjqEzIwh%2BaRouiNJKkeNZepnaGHKTAkERZvK13gYGqX8r31cXqG%2FACIHn5IdhCnv%2BufFC2hhbbU60PxGRcpR7IPsEb%2B6Dztvg0k&X-Amz-Signature=a0921a7e05a4332bbef8c1161d01b76d2353fc1dc78131e43084650655f186fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
