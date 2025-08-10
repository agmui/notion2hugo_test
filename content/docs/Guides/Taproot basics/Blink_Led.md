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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZN34ILP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEEjzpG%2FJjeGRr7zx%2B55SLz9w6Qoxoko9qH3xJyNaZxwIhAMbxMX6gJHyndjMBChNzLZBG4ETppIWqCnzMgYLs4cA1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CkeUL1lsUNzHZGkq3AOuGruwCDhh%2Fd%2BjAKF%2FA1QUIqJF9hmX2bN6HbiUHiF0QvJj5b7uv2RiQWiTdGyVaOvj%2Fj4xdtUJVWTM%2FgtRJlIr%2B5egtAYQgIdrAcYgMBdvyh%2FMUvDCJeeM4j%2BKO00ftIepPrnz6i%2B%2BkxL4qnoJECVmWBQgsAaiyIfMpqR0oas5N1Mi4h9sEg3x7%2BR6hAfHDe%2F8zHH183ZDzqPbLdI%2Fx3GRDviJCW4%2BaS69f%2B8MFGy37a%2Bh8kTr0lCM3TD9QE4xF2phyfEUhqzBEN%2FbyqtNVFtajc4%2F2HnyOJyj40oK%2BaVAmv0h%2BgODknA2MdKepfwt%2B24mR0vT3IipjEtwGvFbOaniZxQ5sTlpZXjXhB7XhQQoMcyP6oI8djBSiGu%2BSp%2BnJancTU8eccBTkGnb%2FZNB%2BzmyTofGl%2Fw91BPqMg8AZ2kMK2hGR2y6W6VDgnAbZdJNtcbPQ6ddx4xMeTn%2BCf0eh6TJ1n1WQJfBsGPvivPaKgFUpZM4sI6HbkvKhUUN9Ph0H6CkNYl6jyb9z5leDaaxRtsR94k6sX55bXoRD3B7L3BEy1jwzA7RnRLBChyoPf2pV0916MIgd2DBuIcF4KdHWRNlwly2ttAO5idOAod5jQ077pqhS8a6bVrvW3rQTzCquuPEBjqkAU4vyMbMbUkqtbhl8JFCrCVRP9bBSBil8yxKsYFhfAquaopUBwqpd6IkOTQwUWstkgENEVTW4fiNINlsvwWD39l5ZPRFWZVDOiiutz%2FkRzpw8cYdnvStJckd%2FuqhnkfgxtpJGxNMeyyY%2BYHdP5Tgp85XDbs%2F2umtWFyLB7X3ytT6LBMLjrLDJARz4V20Kshm%2BZwJ6GGOk3bR5qP1bJRMnO%2F6BZAF&X-Amz-Signature=909c8b1588ee45f33e19126169f91209f0cc20057e574027cdee3b7a7e5df64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGPUJAW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq01BqPYG9d%2Bm5Z4qb3pDh%2BceDnLkWW4qhiV5YR8GbQAiAfa7BAsHwVCRxc0en0xFTxd%2BapOHf1qBb%2BCI3n3RSOoCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCUipkfSxa3Gqv8DKtwDwGNwrzTh7g0jdqVp98txvj2HCkNI2P4InQnaOQVWEikwj5Aivh9hD%2BuP3tAak4b72KEJaSZV7Q0%2B5QJPCiwdMwhOnc2XHaDoubSO%2FhAsMP8dK%2BM5X9%2BMJkWIt1HoZvUA2UzVv8GeBvyOF0S1Wbg0NzL3Rr%2Fs5a4%2FOPVyJ1vPVQ%2FX3jEIumKt6zwK3xDWz%2BeNbaxzNxd3K7ksXHAfy%2BB03JpBxZb1A0NBMXjqRq0GpKu9riAY3z%2BjXAnP2snhzeOONPlY5tii5DfSvTyD6BHDUs%2F%2BmIzm7ijbKnyJYA8ZJR9Rf7mkFNDXxw%2FMyIHSeFZEESajXeyLgQNCQvqBHnThHL0E3bBMuXLKHj5dK8NuTgm4b8o25wrfBMKbFiViUiGzwAWZwzN5b4um1zKR4o0JkW34VlCEJx3pZbO6UiiE%2BgJmMVzZVYvwE3FBxjKZ7GtgG4mS0CLnDdR3OUvRHplVLfrOqBSZTDbwbXX7vMGKxSkciWj3FP6a8Mhp2m8EOYorDtPmdPV7R6P4pU1Mv66oX8dLSXmETcgncGIGdHfWP7ej%2FxOfrvOWZkFGzs72A6HlxbzflGC8kft2PCq79M4OA9tPFmDgeG9Zmgjk3UFBt2dn%2Bufg0sZpxx6Ci4Qwi7vjxAY6pgE9stJ1JfdRm%2BsfWQOckDRC2WWFRgy1jPkhoqNvXxBJjRJLOz2%2BBBhnrEWLv8e3Gdq8%2FvOzmh1ck7zNdB%2BaB2L82nbFcep5BOzDJqHccca%2BrxgDsqw3TT0EBm7sDyQnLXNcFFxXofaHll%2B%2B%2FShAtk3B4f1JkycmdsE6O3RZD%2F1yLvkzaa4VjaKa0y5ajOdtGV3rzdHmJEBJSRs7uhlVGPoJVYIyD049&X-Amz-Signature=72524ced6500868327fb235ba67b77d29ee5fdb306ca7816478e60cd93385f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
