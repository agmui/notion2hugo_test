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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZOQGUP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD3fPy%2F6jmb%2BJTmAMy%2BBCvA%2BcE%2BqIfiUuI23vKnxCoklAIgIvon6W2q9fvQ5NAl9fuYOwPzuunYr%2BVF%2Bn%2B47fAT1g4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOh%2BLCG42LdzPXSt8CrcA1NMJwWunzb4riS154cz0QbHpDDOwo9%2BEiYZ1CZ2%2FumAwVy1kk8E%2F9rNwzgzaFHKxsG0bNr5U3DbATYya7IINQ%2BZ%2F36b8YGTAdXUEupOrrLvbFoFbWo1Oy3ce85%2ByBTkn92cE7eovcFioMLpuJNwCdcpSJAiWJ4KdHzyzxr8qWbbm%2Bb5BkH7W98mG515dMOGXEvVGakMNHueJs%2BpdlAA9Pz9A2w%2FqcE75QuaKdR50rs2aOU9lPY%2BINEC3pucEhIz7g%2FUp%2BNUDI1Z5SHgeIfN%2FA%2FqR3XdpF2ope3Ezpm8Sjby4L89u6rR4sDTG2W39hVn2KlSIVPhr%2FDge9MBSO8RjDNLto5xn23rpXxzdZpe3CuqonwGu16lUtyutTOq1kADnhauTCQSXwc4yngHoMyh6bGR4eA5VQNxtuevOEJUZGgw0SA0WU41b0VoiLxSgrYRhSHXd%2FJ5%2BzR2zbr58QnkAvhmDdWzdchDtBITs0SNcCVoDFVtWTRV8U%2FdhHyaeVAYdcDviNxLnWCvkPLkL%2F%2Bcz%2BBapuwX65fEeEcK%2Fjqv%2Bdqp%2Bv%2BOdCWa44NJmNaax5dwiXmLMndn5DA8e6hK%2Bj7GRCi8UdntLnMP1A2Dv508fJVOHK6jCIQ4HFgA%2BBbqMLrSgr4GOqUBExdWiKHd%2BdxDYQKJoW7QbwkY%2BCfsM2ovqKYQUlrqswETe1w6kHqMacRTh7wHos5Fyqs%2Fzy%2F%2Bm%2FRDoHFHpuOOyfDDAjIG1UTK%2ByqID8BWvHPsepU%2Bv8752w59sscoK7YPwG5s4Tw4aEoHD1t7Mw3m3NpyBZjGPSB5INH2R5XfXe1sD2NCga6FzYNppHaXeck3Fyi8LYQ71Es2LuCJEIxazTP1NLaL&X-Amz-Signature=c9425b3d9f2e083ffdbda2b299624d81d38c4b0379b12f3498acef0beb4f8947&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OSNOSV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG9kThGdsY4cN%2Bh4ptMlGxK%2FlOZvXUDaLJ%2B4OaGSkSwjAiA22%2BflHPQkuEQ52DTTRrN5t0tqHciZ%2F9GXvND%2FZObhbSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMcft0mKR6hFnBiRduKtwDKavoGaaw2v5rUOVg0NN5IA%2B3u%2Bb2gzEuaTWe82u9Dk%2FQkr5cp0p5wiQbBVgVoIdRFxD4K9VU3XGXxN2%2BPS2L4Sm0DmXbDfGFGPaR1IRRY87x%2FfrZd1bDfE3p92zd8WCRaawlMfTQMGGz05ozxOT%2FgZqksxmhFGrdwV5jd40eK1tK4khCKWXCjL7l9gej1eKvZvD%2FVq%2FgPXQj1YLdOxYXYSaNCKzG%2B8ulf8JFJ57LWQs%2FzbL2hgqrznLpsZ0Zqd3%2FgG3i5zbcZPB0i6L87vbjObYu70Qmw0AvoosTgb8GSL1zFV63ch6O21YYxYnlBJxXCijbyb8%2B8DfVIEm1JYd%2FofFEtN2Xksp2R4atBnE5v5EMtme8deCPczBCwgS1mXzWk2X5NktZ5Cyt%2BK8%2FHUkGO5lSmXQpP9dSZGE2D3MshHUgRW61JDkfAKzq%2FhbZznFt3QPOS%2BeFReFl31vbSoIHISn0mafs%2Bhr%2BMoHukUJCJMqqQHsBqcu%2BMhPOHi7YK7IBTZkr4VYuiXszjz2Drh4DwFYsy%2FzMdgilN5T7ZscnyZcVdfa7o6OQ7rQ0Gqbtiza2tc70XS71QMKFhhGr7kzVeIF5mFEtayvGCVvRls%2BKV6xnVXFtAnAqLRyHHHIwutKCvgY6pgHInkd0R4fqefCxJVwIp6HnpIdgUJOAciduFqI2tnUCb6YIDoZdBLGhVD1Wv%2FayZ%2FI6omtm6IvFvm6KnhM4dopqsndPIpXyg0F7EYDXbrjR4ASXIof%2Fn6iPE4hxYMG20sl%2FWyIwClrqjzkFgNpgPioObRuKrmvHCubIj8YclcvIN9XlAajcc4BCuVkoh9j5xIVrqRtu0ItuVDHgzzk%2FufnHm5e8yF4x&X-Amz-Signature=65ecc19c199c1d3f9d3f4b8a5d350036451775b700d7f1b65f2592659042289e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
