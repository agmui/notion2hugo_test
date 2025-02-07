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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGWFOOP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCZfiFKO3g%2F0BEPvXeszFC99Euwg4st4Zm5plyzZU3Z5wIhALl7AE5Jt1SVdVtP0MxmsegiSw22sLgkXMuez%2BUH%2BPZkKv8DCHYQABoMNjM3NDIzMTgzODA1IgzsaZhuX6me8jiDhF4q3AMC9ZZW%2BN8%2F8CJsQrR13HXE9YeNWQgbxd5mwvrHLlba4lpNc7Mfv%2FaqHyOLLMIh6l3QQ7lN17z6mMZ70dUXIiWa0JWU%2B8n21JTnz9BekZgR%2FNpj20LJIYRPVoRGwcvXeFbuRAg5sWLt7F4i7VemqdbBeCKsrVHpw3n8VikKaJRBbvMRmd8v4Ol%2FusWa3zRTgrJlKClU0rbpTwq%2BGDeLWq6MvWQRgukfr5NjYpLeSsLWN5aJGYl3BPURlYi8vE5CeATViAWomARab8AL4mc7%2F3lnBgWos1jbUfWv32dS5Fxze7%2BoSfRnnvh5l2mcrRfMWs45vHe1hYq3ZMrR9ZK6c3cr8ozpgHGVtEZZ3n0nndNKsAmJ0ZiiFEn%2FNVUN2OND87iTcBxjV2BRdC%2BNyYgDydteEAwmdG2NXrbQJWdZVDsk4CQPK2RqkApdTXR3ZNTHE7m%2Fgz%2B8EhulZBXxPSM66Iv9qb%2F9DQu%2B4txQOIag%2BiGirsu5UW3zT9u%2FUxIYWy35rF88n1Ux7hXI1KZG0vNTX%2B3c3A4Dzn2uWXABXXzexkCB5h6hOv%2BlqcwseeLCKdIz2bmcB6Y6oujOYfxvyU22rd9fOWNyv77HpAoOfIWD00o9RDMU3QiIEKac%2FuCsXDD%2BjJi9BjqkAW2gFp03FJqIgVCqfJgiZDyxKC6ieugdzm37%2FkBUpVreKJDMJBzztzNmLNJTrimJf7hV4yl%2B0DLPHP4XP%2FaChDoIxoOZTzHzYnx7t%2FzuPDkZ302wh2l%2FJY%2BkBSrrw0CG24citXWyMOEgx8FeH4XytxY0mS7%2FMt0dsxNWSu%2BLkhPaofnAPMe6CLZmT7glEXIPiUH6iwcDtuG9CoE6AFIMa8glFytO&X-Amz-Signature=173df5fd77618dd7e8d2cbe29fd019fe1a5c1035b1d65dd2c9ee382ea29fa778&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547QQZKA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEjc4EJMWPrPw%2FrupAOutbSSBpY7AyveSOmq1vINzf9JAiEAqC1BgJOFpa9sBcTudO8pTWBI3Ffr9uzcdJ5t5tcACfsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCPwRu1BUjKNKi0OYyrcA8JjVsnHTr3faQwaPjnT1Ev1uJNUT%2F05vshr6UldOF8auUCvaXrch%2FVv7Dz%2Bv%2FAF%2Bb1ck%2B0RbtjcdvW652Qvkt%2BbRzQnIxItHLjAA1%2FFvAsyz0Unhpjirghv5RJ1F33mBJrGD1C50oGG%2BGy5Jis6o9hv%2B%2Bq9WLl1gAaZjw%2FoByPFhuHV4A%2FrJ9cfRli1ohQSAYjk3ZrHynhjXpY3GjKFbga8p%2FiEdz4RVMtFcb5vCQkoAETVrhQmVTD1CLtKbPwA0FysAoltW08jk1pR12Z3A%2F9mpfkXCHFm06QAw8aV4YWDHeZM0x2SA2OA0hYd6DSP5nR0iL9Zchlldb1sC9f2QwxAfR08PfMsV4yk9EkWIwMNpHScsO7xXC%2Bm%2BcsfRgSrCCyqhNa4ooOiwp%2Bt2SMdmp7tyPjOeJSwao9mv3vlLn56tz1YeVwRA3CRzfAfD2pTkxpuyaSQJtjFLGY9fC7XZ%2BjHrLanGMfYZDGC%2F87TLKNPVIcfyGYSJvmhBrvCOYFV6KoB1rYLi4s0fuQeHx89LHtRNbPdAT1dTQuZUGwtZwh2WB021xZnZIEb1TILWUbFDtK9o1fdGuWUkIYihwwMJwtIhDNzz74xJ1ywvlKaT1q3sSVyRAzUWUJvJ4BJMJOMmL0GOqUBJJjk11ZLkP42vRLDPXOSTyHWnWWMJ7HbtjE2pJ003d1RKJ7Tq1iaMVAbHtc6iE1RrYERVHZ0xiWsYkL4k%2B3OpkQYWfRgYuvGqZXzF9M3pBBDFShb1Cz4A3M3r2ctQ%2FxiAMImj4JUXEzl%2FMiz80rnChg6n3sqpDc9DahET6z2Sq%2FVcaFk097%2F4Xm6Zln6QJjQCOuvjv8CZiie8hcF7QLFKwuZDgFh&X-Amz-Signature=ae671a8d8fa4d03bdac78f577998820e0f5d54c787883b115848e273ef79bcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
