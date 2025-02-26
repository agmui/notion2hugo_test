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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT7EFE3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHbY8CAI9sEzx%2BgQ%2BhBYASIxcVwkRvj0cTMDc1nzyoNpAiEAyh5SUW0GKyv%2FCZkgq3CV9gKW5fr9y1nOxKsSWFHfnQgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOSkT7llkcSi2ibuTircA2M%2BqFlF%2B9vXgRmvLtx3pFsZIss39jjUSvOnaszy1NrbMmvy0kvu5twXNifG%2BEH3fqOz0uJ9d10UIwpNXG4z4PqoBJdul69P6aVRJrakim44szv7CB9uztNAqCVOnO%2FdzoYc%2FWsSEY4jtZqgK145M7HJ%2F7nd65g%2BRAy5eYoipnSd%2Fs7c62XyDyOjzZrhlm6ySWmigRed2VoRHoljsDWz%2FzSDTYIsAb%2FlEe%2FlKlqHaUwUusibWtS83vymQndOk8YErnj0B38Dk0LNmbUcI6ePqsMhH76NhIQT%2Fgc%2FaAm5Xt2cG22sYi0wuggOqNrbcH0lrfuWsrhQr0SoRnkoMpBw0rSawJF5hiUsQAbYuAUKasyTfWRQbHtu7wxweQT%2BtH8mU33%2B9QxdoCstOhnqygA%2BYOrD8ijbsQfyohuQXWkZm984g78IDhu0aBIxS1i3i4lh8E8EXvAwyjkhNLpRdCV5fqvOXK1YSenfAnuimPFLF9r%2BF41rsToCP4UimE8yyfDf7m8GB8X73q%2Fd3Bu9fJYoNgC4QlDTPje%2BWIl6hI2vF6RiUghaA7y1dJvXZGw3AbkDxjMsCM%2BE7GrV2pxyEL6cbU8b9dsPVKR6PJ40wmsKub4xFGqUWsYirq39yz8DMN2A%2Fr0GOqUBU7d6acMXYKVbxi4Ns%2BuAkssVxcukoAO7sK5gy9ZhRdD0zoE6BqY4LxftkTCcs%2FM106H%2FbB4RIa%2FbQ%2FM99u1GNfxJfoQnFJZJW90%2F%2BPE4FaYUe%2F9gwPxyaLzo03ulU6WHStI8xZnbbavFadcNZoZm5LWATSpNyibUXwbdNzAQeELSeLBqozwD25WN3%2BzHfUUkGJ5Gq%2FIpUVXbrxa3rWFxHBsiXyu3&X-Amz-Signature=72336a8742ba885b23d173a6555bcfd018b0206e904a972ef6ee881f6572872c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RPEAT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGj0KCF80pEwj2tV%2B4nPwffKKwjfuaxP1WqTcp9KQEHaAiAv13X1h4xVShcaLRAADzlo8tYwvzL0Apsa35hYlY6LpCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMmhqM2uIMlOJRSMBLKtwDF8Fj0KRY%2FWkxCS82GlFiW%2FZxmoDWxPT7THT5omj5CAO13pgGf3DTCHMeDT2Za6%2B46Z0j5gvTfwk0b9FzAcVJmJCLmrskv%2FQ5dphaXW4cd0%2FxWFhGAsKGTfTkTP8pqqGo16qiJm2o3yz%2BSmq761lbLSf9KH%2FUt4OfV32s2SPU5TdHoNMcXqAcJgFToT1je9u2SzWv9JEyCe5vFAAtagV7XZgrBsr9DMBHRP4trkOV07VzWjyPpOKxvfIDsC6%2BAmT2FmS8roB6dYjkRCLj5iXCrsm%2BFDODqzOORxPeS2gcEnLahqjNYsZMhO4JG%2BTwmz%2FQHEiGJ3WCfSCfNMtsFp2DtayybZn6wPHRVI7CNmHO7JkCpojTIRhzc10NgaVCtG6Mpxtt%2FVnKd1H0lSg7%2BAn%2BDEnac3x2DSlrM4kZebme3VbTmiub0W6jf1LtpQgT9rSbT1NYxyTT%2Fg1MjxBkWx0%2FqU8xf75i8kZudBmzncHCrZMZk5cf2ObGkt449mYOEkG8qZN2tfe6qsxrweyYUFNAo0KRayz3vQM7tkzsXtdG6Gzu2Fom12dllcbXF%2FfrmPCP%2F3%2BYNkrdsW8rNLj8ysIFyzR3esmbOaD4uJDN6wofl21qQa3ey14zsiofKBMwzoD%2BvQY6pgGxvMbpxEdN58D8KKXikRWHuZ8UvICcpRGoHJ%2FjuZ%2B1j%2Fut%2FnpBBvRX1gNLC3Vb%2FgWtab%2Bt1v9YBCK4Le044g7D90%2BunS%2FkJ1AEWVb3ga2vaqzM1%2F3xmBZcDws1ysmxULsouSwEhsbRkFiel1suVT%2FqOWfdFYJXOzGVuT6ImwAjrk5u3QEysOW3Fx4iewzCMtboPSc8g4ZUUZtHD33o5JD%2BVBgG06JO&X-Amz-Signature=1113d0e07be39dd0832d84c02ee984226cfc24ff57fccd69e04de7b97535b8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
