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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3CVZC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCOKrAWRBuhcMcbfqUgH4gGToUr9Y0F9etrSHWZ3DxzagIgR2ce45j%2F4KzNlpLEjwtgnRc3dVjA26ZQrH37P8%2F0jL0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTs3pJpIYFo%2B%2BsviSrcA%2FX1hZYpYCMzSO2mgpzFvNJJlZBMHmcQndQlqiHxdL4PZbKsx6k%2FWbIX5wHo%2FDyu%2BBkg2Es%2Fo%2BGt3gVLrPP5vuYFNmcPbexnTwa3tOSHzCCVWLtrwlgjp1SXRYBzXZ6LXpW1B%2FdLTol6cTQQFhgD3STPShD7qMSK7hdZ4eZgAj5u15%2BOLRBnoZYqaxW9HLgkVn0dN5ewQeeSXh3iTaFtE12ZIB%2BeSobRZ8mekRpySI0cErZnxqz%2FXuMJwBwFcjIO5qSyDkPgva9pJf5IFNT3l5wG1YR7HLGEhvbQQCmbFjSeGTwtuJIlDF1eNGKBDLgN48rrqGqVZRN%2FgxiNeT8AFWU9rSNSjP2rOKHv5JQaGFObM2FX3tp2rOk8KQdVlcc0aVn03ZY79fp74HJL2knvcfdFt%2FEKhSxJY49N3JhcaRf6%2Fm34Gif6SlBnwexAdi56oKfkS5MRErrtKvU9phYx98DOIhjr95NRuyZHRZfUm0dTEGCkivXnuOvCayW0SQ15u22anWRir5E05t7ARMcaeHwJ50H4%2FQHrnsGEwFsibioi8kOfNZ23B7AdEsE0Q5PsK%2Bj9iNVxda%2BiNAsGpBR%2BzXDT8ZrDuWJIcK3QbC%2FOetsm820Qazz9KXuhfUAPMLvKlMAGOqUBscbVD9mamWit%2FC%2ByUJi4ngIfcnDwSW9f5Mtqu02zhlCFXrJvXQSf%2BjZXzCfcdD3j5QJP1caGKbIkAwt6%2BWjHGw7Ko06B4LvzqjdQpA9oL8WyaQyApOAGcdKijSiITsyL%2Bi%2B7WfELT1Jwwfi%2BrTcq0gskrXP0UMLsulJJTopStZd4%2BuClpnMb9%2B1ftW3wRDjKsLWaMq4s%2B6gti61lsg2ZBClutFMm&X-Amz-Signature=59b02fbf6fb6901d410fedc441aa525a540149a16d0f78153ed30adc4d2567cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD52C3JN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBely4dOomXL6%2B0Io1WQ4MmuKT%2F2VcEhB1gQXU5ah5Q%2BAiEA7TD%2B9MMGtCOu7sYaw9IdOndaDWQeWJXV0rNNAtU%2FEhkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B1giZ4PsToaoGQRircA%2BXqE5vGSL4%2FpszJlMsWFm%2FYQ474TowldQoEoVOiqjRktJ9Xf2fXKV30SzLs58U156DavD5tpcuXAUQoknoLLQKrIVoN5SbJXShxWJ%2FW%2B0DnjFFfW9QuBFL%2BolLRJwJF2Ck5fVXIaowYxqc5dwJaHsFiOlJF32JYqfcYlPNfPr42A8zT%2B2Yv1d%2F8aRtpaHwGtvEQU4RHIHYqlLLO1NtMWJ0JHTxFBEe2kTlAKFL7ycvt7rxqeB4pglct8xhPit1CcYQfQbUQ5c0dm%2Fk%2B5zreervGL5D9%2FsG%2BbmlLqeO7ykl9rzCBq9Qw3txa4H0qPN8TV%2Bcflj947yORZH7kfrywcD5Mx1QBKfJzaF6ayYcRdDBaHIdE8lI7HJIISFCF4Ajfljv1QwJtA60XKXjbJ3zUKJGnis0P0UN%2BW0%2F220EbM3uq%2BlqHM5%2BCgoRO7jg7m3o4lOLjA%2Br9%2FCdoy0L9gtEtJ5S9kgsekUbdF3MRyVyefk5nLE78un%2BmzlrVduW9VORDahghJvAbn5JYZZ635KUe%2Fc6tscb%2Bqvf3t0H8ees3QQL29HcB%2B0FgeAYeUaODF0ChPSMLHn%2BStib7xsEavo9ZPVO10%2Bes8m62f7eponzu06PaDZ1GDVk1Hk3Hm93wMPLglMAGOqUBsWrFuUr1ZYF5LeJzEPZeMQqrNv1gyE8Nx8xNLAwZnktUjhbrXQIKKEMq9t8ZVhvlwo14ALFRVYxmmpm3k3uXiAvu0Q98NXbp6aR%2Bx1W%2FThyWR7PKJa1jFR%2FfGlxWtQkmjV4bqRZj66zPNjX2k28X4A%2FbQMxM91psChGZ8ZcQ1XMW%2BIAT8j7TDU4x%2FnWiHiUxpUL8mKzlo6uhMKXfkCNoAArYKlXK&X-Amz-Signature=7fd7dd873bc5b6031d582bee7aa95da21322e6171e00bd6eaa2c6149dfe8000a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
