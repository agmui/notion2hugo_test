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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMG65CNK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGWb4pYPLdmFbtbdHiHfUJ6lqfF6kgiIr7rK0LkmABRMAiEAw0NI1z%2FL01AKs7uJ7Z4Hfds6tojr0tA8eL24I9y4XmoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNH8m20Okgnh45RUircA7huJRIvnD7KR8OB6I6i%2FYuAFlP7ZZjIXzMPgwysp1afT0NSzeGYK7VxVuIOtTVbmCrdI2l4UWTyshmuNvenduuirVNtXYBn%2Bu%2FyglAwHLLC%2FtbF0przDXqvdG4XiSLUVlqclijYqKAtpIXQstVkEzb5lR3XHdNevJVf3JI41ipejGFGQnhA308rbi2QapkCHRq6Ruu9I5pRgkfhdd5PTIXwj44Ahmy0xsb0ZBxDsIWnRZk4Ita7vRSgX%2F53XjCrmGxijvbf3GO1EaAmVBm14p9yqRaDJp4r9pDrZQ7xCkynMm%2FxtHIv9qSyWaurtXDwYlm5UvTu42b%2BMJZ%2Bxw0MDlX%2BkZa7gRQ5Idsxv%2BFkT%2BPTpZYutKkEml3IcvsiM%2Bs6MZYu7U7%2FCaA8K281l0i2yAUGU0tXV7Lpa64yUQkh0iXgCUD3ZDxgrujhEFZlkYSK43DfWjw2Kub8N1m8Kk%2BoAVSOW0C8DTK5nmIt5DFVHHd%2BKmRIqJ%2BpUKz4QhldNwddMxhyf7eOTkl0DliU0sRAbPvwP5Bspu2Cp9gectYhgmsSGpbck9%2FrWYD6STi2p0Lj8CA7vbTrKB3OcjFAGpv4yxHOkLDSJgyHcx0YgV3EarIDKTCFBJKcZc5Kz92iMIC%2F1cAGOqUBH%2BNlvB37dQamkhavitZB3MHmewG1fhszIoOTIREA5Ep6wZR%2FKRRTuXpxjKYlJmAvlUZh9EcdiRtXYldm5TI%2B8bwTtUeL58Miz0WbkXgCBotly7%2BeqIDe9gHX3a6djAPrxccsqTj38gP8uZOnYWzeIsmGeub%2FTzi1Z0Mi8ENsP7k3JIPrANCpzVvz1Guff%2Bd3MKJ%2Fsw5%2B9MbQyxr790NCoocDbOyW&X-Amz-Signature=ab4e226c80ce8deab4503db312a5bf67edaa7d726837db9f96432c0267280842&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R35IZ57%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyrZf%2BV%2FksZw2nTfbs%2FdVs92njTGOi%2FuFe0zXOAywvQIhAI7%2BXMmQclZQIcwtHJBqHK9UmsnANQssPbyZ8RtccbC3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkAj%2FbhKArpj9o%2BT0q3APcw3gYlPHhBY%2Beik4KzlxsfFdUwiDfL%2BvaEfMNMS5Q1Xh0apMZVL6yPV9ht3%2BjqTnikbr0Q5m%2BTrJTBBuTxxXwqBv%2FvHfm%2FUkplvO3XgKvGiNHn8hgTX8h2IHy%2FH%2BEBjVTJbWWIuigwqFCpHtHI2a3SaWuhrgr5rN1WaoheKd1M6k3jblvvr79bTwHM%2Fv1vfQesm5VGJ2Z3EjDZzmwr%2Bz7gpFqg7TCdvIHKeQL3wrN%2FKBWjUuqLFnGgfe6OWWnMOxbdkK0Pi7xbAv%2FfoVGmNc68JOIDT00U7Daf%2FalYeEpyYIqL%2FN8Vyu3ywTvsrYvvhAUa%2B8cbd80mSLKZTX0LvB6pPQzgGE4Mu8aYs74qWZ0sWa7Lzv6eaFCwB1oYAfU3sdHVcBxZpYqjxXsW4%2FYJS3EqkhhnySUCZtMNLJriIUzyFbTYvqSiIPdQUO%2FsNrJ1Ip%2B%2BYlYPmDXBuKXwxKuY4aL5K1AYDBPz1XKd15lDapb8ypPoFoGYXyFSujcCaPKuD7wCuqZiWev9yMhOKQlXMzslTRHVMBLiv6ff51R2a8KDSwDXtJsol2%2Fdlr6KaEoh6P6t8VRsrVycFfMnHbMNY8Gk2D8NTnUbdbFMA%2FNy3mXEqGLDsBhYCYUNlEfmDCAv9XABjqkASH5p4kdjVd1LA6weUy2bByhb%2FbyiSlnb6yC3gGaBWqoMUo%2FIjRqHXZ3qe97Adub15OPm%2BvXN61KX3j7VP9tqrz41Q2dCFsX92W3PY8%2BXwZ8VWl9H%2BSkneH0tbPCIcnm0yGrgyNLn5bZLGkFxsHxOeOS3KQL9J2cSz2CYCVdvgH5kllcsP3%2B3JvaQfwGO8wNyhwi0vW3H5MiemYNPyL5SNTSqKfA&X-Amz-Signature=a224c256b283acde034514b7ac97d895dbbabc30a8f35d61723083a345945cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
