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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5PEWJI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJnkLI6Ttp6rm3Wd%2FKiBSNJ3E4fOQZ6MNeQhMcQweJnwIgIRmfiIl%2FNDu32co2CIM1sTtCbpJHKcRNh6L1Eo8Vw2gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETkWYB9G2IL6mc6rCrcA43JNhgeNSse4ibCIT9sQ2QcLtplKcEhIkAHLmSkcjwhKZuW3gQAx%2BnfIXEi0sgDnchVPa3OvaTinQP%2FxmYJHnohRg7ZVjPDW3R9s09ucl8zRqhVyhrS4Pqp%2BFkXHvu6BJ4Hv9wq82Adh%2FZGy2I8Z8oN6htba3mk2q5T81jrCCZ%2BTUgc%2F389%2BJqDUy62ay3nGLJRKwQ5BRg9CSRC4%2BxeHBKepNNLEyG1RgbhpX6gEdDKoOfDZhAQGEInm%2FwCZVMjGPII8i%2FgY6YqMqSb%2FEOFwVvYGTS54ZVRNyGNbZj85pvGwFIxC8BwYFaNgjM8qZ%2BxP%2BsmGI2A8RbMcxiCIY9%2FXVD4N7F2zYFNgdehFdASGR4AbnZbzQjpEMIepiIozvAkZhzzdwC8kCPAt91j%2FKo6gkoDZvdm9LXs9iZFLfUu0ZV%2FZCpMMttpvoH5Uhstpxf2tysU5IHsbec9%2BF1qGghED3fOII8Z4jcPTSkn1Zs9Gsyk0aEQhzsxO%2F%2FClN%2BZmK6CQMk5s3DUKEjrKXKAG2CpSxUYqgstEIn9nr0uVwZbSmkmnpcFGBTZRYAKQVQ%2BDxm2SCZdR5m3fN%2BTt29vZ3w11n%2B%2BgWM7IJ3lhxvL%2Fu%2BQPOYY0vFsNW8MSFBeRELMMLbK5cEGOqUB9ioe7lqdwHJYyD7qRoIG8cEmTiN2PShcNZWGtSRSt86GQuNBOZT9Mnyh2Mcw7f7GJktUr%2F0mJaIMXWEUK53sXbxC%2B9mTR0QmjCt5EGhRddqCX9Zl2D0z4%2BWRDY17FMF3l19WFmjc7BzDKDU4PoIpTM2K2lK44ev1kunlnsvtXPh1i6kU751krR0QXLFNbgP902n4BvClGOt%2B%2B56zN97hrMnxsLaU&X-Amz-Signature=41d959bc05b4b0cbd6d43511af9544dab313ee1cc13d3b06cea9c2eaba99c677&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJ4JYDY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpp%2Bw%2FVeqZ9fV4AbB2YSRljizELy8fIbrT8iresoPdCAiEA5tV6x98jENfHWROIyAK1EPpEriIWUTUKOnElRjX6mdsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRowzLaUB836Q7%2F1ircA2hPyCR%2BzAJa0Lc%2F7eiYNBYIctmetvWMvn4XykBqYFqPhGub70rZueKNCsUh6jQtK45YYzqsUr%2FRD9BQwcRDMVSL2CyhFWrDwiOX%2FwtRotF0ip%2BRIhvyfZZSkDxo0A2XHRx7eJ0N3wIkDOGndPhD%2BbnV1Ds70aTwqW5ebZeRIobItb45kuviESm3wu6Qj9QKGNRakBUN9cWGTcW8utRj3IYit0xi6mw16UGQaNVmLDg%2B0rbl5ZyD3kWB1ePaTYnZyQh7OMxA10re%2BwYOpIriI%2FpgXi3WV1rgqmTrsnymNQh9Ur9yvFHXlMKjQ6HPXPykz0QVdExic%2F%2FD89W8MZPY2ZQmtgBThVMsgQ%2B1qNQX%2BqJRmn2D%2FeLAe1e9VIZD%2F2Kzh0ZtroCFqTzX6xK6pVuM34o%2BvfMOV2uSFcKtJLWm8CKHIffjd5k81lYNLS4a7yjfhyX0A02d3T2tHwdXRIG5SKzABA1Ru0x5UhKgaqXPQ27gE1vaAKT0mPfMqhyqWZ9UlinZvIU%2BU0GJSnntELl%2F%2Bfxbh0yTenddUkwm8TFaqkg%2F03ZPnAjjKYjH0hVudj1oI5%2Fb4rwUq5U91ireexf7ql6MMdM%2FwSpOzEPXIQGCm%2B5b8QKrGb4cKtgZITs5MJHM5cEGOqUBKue0f3EiZ1ZmleJVo%2Bcq5eTtjCgUyeqH40ru8onETIzMDLxU083UfPvFvIe5aOJW8%2FGTmNe6gFIcXCZg5mkfFlQKXcm19QvmVAGghqAIkt9W2KsVb8gr2d215QmTC2ouDDfWZxczuwlQ0EQ1Ty34JSAotUbqH2An9WZ0R1pm4gWNYQ3LREqrbs93pHAYAaDaf5CpKR%2BZh2F7RXh1xKUlo9s3%2FjLZ&X-Amz-Signature=bee401ce0fea999c8bbd19e60a23da5778c113841948ad5ec2383bfa13c8bc9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
