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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5ME4DH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIALd%2BplrX2%2FX%2FApwd4WOTN35Fe0LTnLu72BkYgt3K5NNAiEAwdAkm7tV8CWCn3ZZOv5ZZaR6S1MyxfuBK7147TzEStUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxIjcphA3UPsFe%2F6yrcA31ITgr%2BUlwhliCe9n8jDI0GTQO%2BeqtnIGN29eyFUiAU1K6agn6Vzg685FhcGKwcjr1Dh1z%2Fe9Yh3%2Fwq3GG6ilXGbivT71jyHoLt42Vyf0SBKnpvMvh3zmP5vrB7o9sL0fpa2J7qe2KBsvm%2FTTv%2BwCccnCoev0OcMs%2B2YdxFGNy4Qqt8P1kWbJpthnd3NWdqACHHGY8x9TJRbtOSNpwGCTXDMwCPMCryFUuJHkiH5nJVcR6lOsLtedOUavC2hJwiISMjrVlSPFUr3pVXVc%2BP9c2Pex%2F3z8kS6kLSK4jalh%2Fuxbn71VqSn66LOqWaX8ub1pyoUuebq8QK%2FflS8QCFqtngINVNg%2FQdL1oAlFfvdTY1uqqtLWLc0w7%2FBAgoETow9ZguNuBaNB2aJjTihMlhlW6y7OwvrzBFnqHc76gM%2FxBBExemDzk8w3Y51k9yZKoukKnyx6Wo%2FFOVFfwV%2FKKZhRA5Ac07nZTW8SjPQbphAWfdP%2FZ%2Fdyxmx0D7mC4vkRziuOfsU%2Bv%2B9hyPv%2FGjACbxivPlisuCjYQAOZwDiJkQ0wzScS9bYHQMQrHCQME3t9E4BWpl2NUP4TtPcMjIUOrWi3rHwzsYf3VWHQLUePZJJ5ncwz1frRdTMfs9t8qZMLK3578GOqUBCOVqtOvyj4XxsMs7FziQ6c82DpM6UYQ2Kfn0xsx6%2Fzb2GjbLXP4ArfLdWYsdSIrrqElPC5dGMKP0b83rqRtmhbxEL4pJfa%2BOUpor7ml3NhdQy0WiYw17F1GUT0oUzcR%2BmG%2F0kDMGm3sMgpFrrnd0hZzCP7VAa1XhIC5ws%2Fb3mtjKjLC5DR4kBaembvdIN2%2F%2B6bbGWjyjT3CBvgrsoIaoN7MgtR1x&X-Amz-Signature=cbfc34f78351450ff7d2f34bf46dba395910201d231eb0dbed5d88c1314c4bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVHQFDV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAes7jP1AkfM7guGm7wyoSXgwqsi5lQFFWkc%2BnJSS6cPAiEAzOTieDq8SnJAbLMXOLc%2F9U5AljuhP6R4Alj5pHxftJIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2FY8jynfZPAHTjlCrcAxzX8GcJmKHs6ryBsuzgNI8LiVWFyUHZImcH0iJeVOSPZnVeBx9yEgDKXnIbl8Fnu0UEzVDBohDE0VcDERJNf8u2fI3OvpHXl4k0XjeSRZMG9lbQUAwyxniY%2FcCgkrRMvoj0l1Fgwlhs%2Fn5Oz1clGdCPGrusD78W8t%2BlLMdfRfUZ5o2oNvEsJTzcUxWZ1gHYNwVaKRZG4OtjBLTeEdUnFb8xP%2FSSTlStxUOoQeWLnJnEvgLiJ2CTH%2FKhmx7w814VEfMkh3nluwOsdShWDMQa9UlvJDm%2FWVh0gfRlwyoxDU0e8AoLVfqz8Hk9p2THWKKyUBUYqKe4eqn36inl%2BcVanm1yK7sT7WPDJ5BHTdEuSchFMOskNAdoKIFctwr%2B5XJAQUI6AUGoGEjZ2sWD8H7dBuRaEY6m0a0x6pCosxX%2Bh6jutk5Z1imKKt8qc63bb%2FIbD7Maeun8sAccMILGRNZmISDdyBNDHHTQ1kyQ4ogri4zew8jueEHqLGOLPJZP8N1dRY7hG9r5nqmCXzMPH8kCGIAAS8iXu4wBq0Iz3VRsqkn3fa8jcxZn04nhWqOJocpaTJfL64MYYbPpbXT%2BkzIimBsj8hfK6hjCKt6VpUAWEPm76cA1guRtGsun7%2FSVMJ23578GOqUBTR88exSP74nRLUtajSzhHoBcjjragsRgYOs%2FaV%2FIcLzOlCL%2FvXaJ8xAGrD7jc9VUm0xyiPCd8PtwCU5qXqe9%2FBC7s0acDL63BUCWuQqytkBPLN32%2BRRlhT1hZG874erEwepNSUjjP5me2k%2FQ%2FdBpE7Yoh3YMx87X0XjJmRnNKyxFGW2RGZhhK4yAWFY9ShTb77LuK7qWFwHk9DAOyIwAK162ipqo&X-Amz-Signature=52a3d829712df7c4f6e59380a05da5ec659cf9891eb3f6d7e75091323c37cbce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
