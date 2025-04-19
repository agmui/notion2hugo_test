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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCPKHLO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkd%2BcPdlk64YNODpGVRTwRKzr6y80VzwOxngPM1x0q6AiEAhHkt1rfF%2FvdPrZJG0VsA7xlAn0nVTCqqf5H5i%2BPHx%2FQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx7WSWiNVHxnNbcZircAz5%2B3PFc2GR%2FvrAj6YGs0YTkOmKWJUO74%2BPG4JN1YafL0%2FtO06Z8ftssaR7mOkVJ37Y2jZIfsvpbH%2BkfKG0eqjLuZPurfTrUSgoA84WSIHXfzV41fpt9TJLu3TMHe%2FTNduL%2FysqqlroQIs%2FcpRTdn%2BlmzFnyL8wr9vaAQthNlo9YrlXUPoc6wEEVBcpVfW2XNxyxZw8ViXi3rjHhMJDzpPq3QHdJtOtYsDMXXwTLieiLJeJVYF6ZkbJa6OrYmbMgN3ZlFgdbjVT1EZxeBVbmNV%2Bi6WrnbHH6rSSOjWvAZdy6ghJx1I065lDjegt8nEPRQVkCK6L1QUYePjkqW5l277uqSilORS%2FKRkYI4wtLBAb9EYX74cV2lYXtIFuxtOjl57ia%2B16%2FdCswMza%2FofdUufSFvyM6ZNItibQ9owM%2FIyF8fBles3i16CayWOdxgTIkLwhiMpjOlG6wB6I2KbjlEmG2akc5PJYIlEmDehC%2FooRcXsYeS%2FylV3PohQ2pepjpeBKfhPirAJBFR8NzCXkbljdZrkUIKG2j6XEyQj6U9Qpx4A6WWEVSyKwSmfjF69uRBqntI1yuZfbBMTvzIIyrPsNa%2FEmjov%2Bx0GQ2LvLSZg6RNgZz2oERtWvqtnPnMPb7jMAGOqUBNdqH4QM7qA5C6gJdiHgOXMT8WlXHuEI8Q%2F8cUjSG%2FoTWnxsuzVUIOy%2FH69aPYHZnjzYjupASCy%2F%2FM%2F%2F6Cd69hl%2FCcTEb5Fb9tE0JOgTe3p%2FruZQShVf9vMPHu7YI46dGvNg35TzIQs6bPjcevNwEjOMeHU8COQ5sEyumtbJLdmtWsNDe24pGF6Qth7p1UuNwFvFZo4%2BukXszi9NgZw2AfLQSp2yq&X-Amz-Signature=9b7c22ee99cbfbfa31c21193ad956a65f66d594889a751f00f49d5ebdd44b98b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOMZIE7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxv5cSDX%2Bad13MDp5pG%2FoqYdKAaznrazPPoEKKYrhcmgIgOBDCBPIvWO3IukoDLVlXTX0644MnSz3FQ7OKyWMkpCIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc0XZUuUIs9%2FEfMqyrcA6gv3xbDP1ftNasuldxbzq5%2F1Bf3U5xNEj%2BML59MulSPGE1YJ8yztWTvrCb5x41cwma6Cuv40d4fpsgbTlJVW42RKnpHk%2FdLwEhhU2mfL9lAcx4Ncfgqu3H9WKvogXVCzITI%2B3272mnBBDEDGydaP9PaoaEqQdc5Fwzw6xDsXFUnD15JAgQlUjF0aIwcNpWF83PezBUsmG2uX5N47k6Cbe6vSuL2Yqj%2B%2BfQfLLoACkgYbo4y4tIexVhyPTvg6e5RvfKlemmMHmx7mve7bUhWKuwresAqEGo3AaEbkrrDLc2KDWNNssO28TM5FFTO51s09Wa2P0MyQ9WBVglNk9s2JhOTgf44h%2BtLigjIYE%2Fo7wSSFJkXxWzXxMmHgb4AmLGqNRLa9z7EjsIahL3Jgqs7iBjcQKP3EAhRT48ij7WJgIY8XnExyMCyrKnWngSe%2BBOIezF%2FfL4Hq38%2FSiKRAkN%2FYnAUyC%2FpqUsuQBs0HVkiFTuOPMWzxOhfPiwd3sx6JczzkjfV%2BV4j4XuDoNEZUY%2FnZR9t9QAaQwbPKPI9tK3%2BWHOPSLvT4sFaciJn5%2BTE%2FXEcrP0%2FFJAj38RQKuxmHaREJnWtvbD0RT3WDjHxgKrzIUWjmf%2FRn13jcpaiBRtCMIX8jMAGOqUBJZ2ykRi9ZM7jZLsh0yY%2BvbxhkVR2vEUf8hBTYcHRf3VKeEl9uZY4AnGiHI9eFwEBwupBDA4YufvLEW%2Bc2eJ0OJkPgpGXVcsLX2l6bDftPK4gSJrEC%2Bi9D4YYDtNgeHkrEEL902rW9nGovUNoP9vuv0ZE%2BXMisljWAVDDGXi%2BM2ibkIwkH2NpopStH0suDi0Uqb%2BYrRWm2pG6wcEHJU1RittwN%2ByQ&X-Amz-Signature=ea5fd31957ecff298e5dc2ab723cb2f16d436692f7c69da7a2ca72816c8cb360&X-Amz-SignedHeaders=host&x-id=GetObject)

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
