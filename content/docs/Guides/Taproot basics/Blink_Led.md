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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DBZEMM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICRL6zZAQVgDlA8W5T9Dw0EHyHLXmuATD9ZJv9H1YmyIAiEA2jxSUla3ZJpzgp97sI8iqDmxuFvnXR%2B0b5d%2Frx0GAnIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpOi9Gg7ifvhiqcjircA3M9DZ5%2FX8ZuW3MFFmlJ%2FEun0aag0s%2BFEgW65QOaikONE7CCJ4wEPBRYe82dJbXIjcyp0YqF3reP4r%2BBOJvKvWuBEdVw3JPntIoHESklQbAyTLOZpeWiJkTb9341CotsJf89i8piNN%2Bb0M5NFQtfXupEmtrCJyo8Preg%2BzOZcCnRcuQXhzr1moDtDqbbQZYmh9RnMiMVr5S33G5f2tKDKShpBkxrfKnl6D%2BGFZoj5VKa3QT1zlj9q6yKqPvTf%2Fk7lcBtZeRhaNgHlK6vTmpV%2BpBvtsqa9yWKhLqq8cCmwjBxhYiVjDtd7WalcsVahGyVyhTvwrJW2vFWWkTaWKbY4RIVtZza%2BGdAKRVqw6kcu349K5EOcLuDiaiP5vOVuUJX7Sdv%2FfXceSesI2UIvQiEr%2FF6eNIQm2hmv%2B4Pb0UKaiF3xGQL0Q03qKv9v4Q6%2FYySwQ%2FpIcBaFXbw0INy5z8lkTDZQUeGSSiTzBXGo5okSzd3RKXuWWE423f4loSub5dahF502MNc6zdKdL81VzbT7mZ6%2Fkj61nPe1jmEdozagNokBGz7O2X8bRXleorlerfnj3yA7yTJVdMDt0dMx8Abrzi3tmmUQC9skayKZG%2FssPff9WREE1fTsgyY87x5ML%2BT%2BMEGOqUBcio3A3jm7DC0%2FVvGdIJ7T%2BA4Wnv3yQwLLJYflz%2BSpzC6HvY%2BVOMogiqoaZ7Yog3M7ve3QaHd%2BRK6UJV%2BPfO3xuyjFhRdi1gePvB4HfN9mgMCVedFEXklLUU6%2FoEZcLUEBvMgNkM0LS5RELq2W%2FJ9w0SxpjHW1jyFM1U44Zx4miqToN8Yrm9RwzNEStBWmJpUww0j9SDy4DjwCcS1NJPgX9bB%2BLUU&X-Amz-Signature=73e00fe34e7e5feb75bc88b168e9465d742dc4f28c2f724c4af4e98bc8db08b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBEF3EW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdA4e4vS6otL%2FmYTHTAbOZtWpg2NodQHU9VqvGDF97fgIgaHMXNDYWaX%2F1YrNXgx2Fcn%2F%2FuA5Alrz9sKQf%2BwBbjEwqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJPLr4t072z3OuOMCrcA9f1IQzOJDxG9JlI1Ulf0y6Vo%2FFDeV2hCqSwrXax1cHPxz8ZyAqJHbCYk%2Fc%2BdvMyjY7OM9aAyg3bCKsEcb47OYiL6EYHdGmg%2BJJKpOu8XHwOcrbSzkuvfAXWNTKH58ZbOhhk%2FnTCtWIc8Sw3SpObezR7JjA801hV%2FzQYcM83UgHyygyF10Lc42DaE1F9JNGqPTOTrUgtS24XR9ddVreFUDp401WTr4OynnDDEl6b9ECYZBDupGGrLJDQWA%2FW%2FWb6Cs0UYFpbT8InPtEBXsffehl%2FT4%2BzYUqU5xkvIO8SBgH73cPTq%2BvDFJ2Ax22qgaW60CyK3uhAgkNclGWpCiw6NJ8RQNKKp6lyYvuGqlPAUUfijzxqlhTH6rsHxkZ0fpajhVyeVCpT1NEwBnGhhYzIlbfiC8JLyU%2FtuBYPVTx8%2F2bSnexm8BijcRau7EKz6YucMS4XMRPPHDdHWsSr8hsQC5RQIwT488XW39T%2FmNyLRXqF71ToCuCMyaIjeY0jS%2FJRDw3l0%2BzwEGtTyj7eVjly%2BTuXHCEHvi1FJb%2F5Wi76yn4%2FA%2B5dwM4YwsbgTIj0gzK4S1En1SwcevCUi9ci0i7H0m8WIunNDV32R46SYL1LCfQGpZvMbENPSK%2BmKu%2FLMOKT%2BMEGOqUBSuPeKEfV6%2FWCY6ZR6qW3ZDvgIkBb%2F2bDVKhQB9RP6aZSW60qNmyeXfY8mVCbhhPYnYJjIPfIKipLvZVyYxNVrfZXKhONp%2FJKAzlz2EtjntWSHdQ4zgUCvnBJ8DXNREKja7%2FCiUNh2HeyljNslEzyC%2Bl4e1EGATv9H5XqISTKEwWVjnGz1cS6PBr87B7OMxEIZwXU7nuMRNhQrZg3Q9UfqMU0d%2BI8&X-Amz-Signature=50bd232884ea7bba67c6faae611fdc4500c99c3a0f38ebd5733b345b280e7096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
