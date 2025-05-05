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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NYMVEBV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDMafMR5h%2Bu8iJ%2FjNqrEnOloTlBrrYAW0k8o3IAqzD69AIgWHbIo9QNxSug3Xu47Zxhg2ss0WYO8O4XEPQjAtPz7TEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOeZD2SOdQyHyZ1X8SrcAyYNM6RlumoDo%2FMAY4iA4Yo06QyVj%2BCmRrJAM3E4ZfIabPcDGxiX2fMlREY5DfF7OU%2FgUizxBdWr5yHhaoOrEW3r68B4A6V6oJ1nY1YPaoNBFfCdetnBS%2BEm%2Bj6zm7ApA3bjVuKPLyomayV%2B7Kwxt%2Bx6%2BUnT5Bhl42iQjvMh2TwJFgLy0dzG04ScW6PA4OZ%2BKZ1ojPbByLLWS1f8jq7riMXl8SlVexKJB8%2FZfuSbjx17FnkeYmBLxL%2FWEaVlEA2vIj%2By45qp1ODMJZKXnQ9rhbNR%2BSOXv00%2Blv8QPiTJdMbfsELpWbv%2BM7lIQNicfb2oNW8TI10RNwFYKPOogXLkLQgh5IE1bkTg6ycw6d3fl%2BwQap1YUlN5vRoa%2BFH9ye1jZEHK3pCC%2FpdOOoYNR5VVVqFbdu4CmZm%2FBs3WTUDTc1bVtAH%2FxXYDrLuQC%2FreeY9omBebdRy4NLK4akNarfWB08wQi0KgIOcSHesTSzoUhgKB0oQn79bDQxL4f94oF7waxZ9HWu867xAwiEM9LlUYlfOQ4hxpYMogUS8sKWA4dh4BC40wInVoiDT5sSK4cRWL7GneJvSmg8U8HCICfo3gCyyHGI8O0gSg%2FB8ebOCaQyHL9P8oz2EDrPpvOIjwMP2C4cAGOqUBUlPYP5ccjYh43x6VdYSV2VyR%2FF5GXBA5rVseGiS9vtZOWUfwx6U6i%2BvWuMnyJdYVCI0r2kjB0hniMpqPklJlHEngq%2BInSIfhVteewzJ7cCmIFFxxw6vqMGlkbAiYpB76gH%2F6grWbAkUK5yX7LCDs3bTV8GyljnOt2RUTdZbOn3bk3nAubHeD%2Btzh1bZtfs%2FgLSriKcvfdiL3SDLpLwTSXGlZK3xs&X-Amz-Signature=ca727b7eb31d7415b8ea97d9c626043cc5871fda9278286bfca86007cff9a8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZWG42A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF9PI1N94pjScIWne1SYpQoAW0kBMBOWW7MwjRYCQGBmAiA5fM4FCy7Z4wM4MWDFMdu%2FX53jukyp1NRE9Ddj01suMyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMADWkANUabvoaKErHKtwD%2BWLAvlcDOaBhnRrtj2pYAy54lMqs95e9JNJuQWJ5pCrcG2aRUJgUdzccbajepR2qOVg61EB%2Fznf1FdHZovP7bQi6069jvF3tdBHTi9sZMlqS%2FXcM9NRByBZFncA%2B2%2FPiyvJh2bsmZK9fTrARxrBgWW%2Bf2L9th3WxaP%2FHf%2BN0K8jrib4AdTrezEkPb0n2NTPY6W1weCUoZlEAJFWVExUGsO8%2Ft0JhlmsgfAF%2Bi9d0MECIzrHhvb3B%2BnxwrvYZxm4N24bYkb3GxW4nm5%2B5h20S%2BUThgsPGLq1iH65t0TrpH6UhtOMgByt%2FwlwAojvm4XN5eu785sulIT8euFhDiRB5epKqUR6k3FIzlvdhFuPk%2FCN%2BHtWGAt9%2F2cACi0zhq8tG67nUSvh8bqgfPsMRC%2BrOega4cTPa98iG4CD%2Foc7eTQz%2FaVbSbyUdGUYMPrAoecZH6rEtjTaXanTo%2Fg%2BKqAsln9jfgbkSzQ1t0XcGecmw9G3m2n7C4WkqmHMiuA0b6ego9FSw8gl0b3V8xhqum4M63EjcbI13deHK3UXxY7DDzZf2cjwISEqPw6gqTq03mAnvBS8cCQtBpwBh1ye4Vx%2F5KTmHTcuTnAL9PZsIvtNIJkir9bmvUe2pqmcj1QgwkIPhwAY6pgGMELKbNrWgaSBeBoZhHVFAicXEPBn6wD0EYKIUofnOvj44b953a62D1DxJCFvM6uG4T%2BGvN7UYiCCDT3FPyW2K1eF1Zuz5OWJsbU8DQhDqfT%2F6ygSyBalFRbMecy4gBXb2yKWOcQv5cV%2BssYEP1TG48eWwR5m2UAJavNQjw9VdCNKCo1z40iI0lRk1an1gGIxZFipfZ%2BmMA89OzxRncIwT8bvXvlpV&X-Amz-Signature=79d017dfa10a7edccf5e246ef5dc0eb4df78e4a9049ea51439d1703bfa8136c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
