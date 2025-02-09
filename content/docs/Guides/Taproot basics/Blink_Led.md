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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZUXADA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaU8uFdUx3vT6o%2FYX5H2qTrAZ7rR2%2FW8MWv7tqvaUGrAiBnbgVw%2F0GoaAHH%2BT%2FAcMKnh5YTpyFKil92UZeuuZ2xICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7fg2RwhlrFwnSq11KtwD01bdgpmZXr8Oq1pwr3EpFtUOEWOgEzNGbYQopDNt59BUs4cVYcP8gwjn7mYZLXE8YFhFkFYiEW%2B%2F8bmzJRE5wyfqt5klLh2PMZPc4jKkvTqz1a33dRyXgW6Sgf4QuZ6DY5kFJkILFAPxvoE69Wu3ofcOiC8p1OptBWcToTFt8PfDESHPPgZDQxzi9APL9sgtLZY74OkUEksyWbEsBvHS6aYXbw%2Fry5DyqIXg9jNuGPJpvsoTvJVR9BitpkHA4QvR7n2n224odUpMkYlDDyinWmeaHgqTtabjxdV82eg%2BalLu%2FOLlIoOdVIAHLFrEAT%2BsX5Is9gjv0aYGOO3PPnmOetxIKL5NjvLo4BB6v2LQKO3HFHRm9AMQuH4TBxQFJNH%2Bzfp1GDjPY18acz%2BXMe%2BL%2FKIYSR5b%2BWXbyEoV2VbxXFWe0tWa9nQ4QmI1F7q4WF%2FZukDS%2BqjliX3vEfkLqHPezbfwEp2Jb63CAGgXXntO%2FPwqHpL7pn1ppT5WmGDLR7vOgI6f4bjyD0Fb%2FU6sPLu7sU9URJKkwSAQAEq0zoG25v1o4URHZ7zbAbRMi9y1B7b8bPD9mk8epoOFLxPGXYFcd%2F%2F4ziNUfc6txsT%2BNjp7Y0MCrEvOTRlq2dI8wskwz%2BOhvQY6pgG0JjK7ZlD4yemBVEaFgzX3ymSAZ2V%2F89jGh8uKrHV9h9g%2F%2BfvbiA%2FOhUOYe8m7P5MO1BZdI8bwGn%2FazfFVKYXureiVHGI%2FHDKKI9ZHJ7U8eHiO9DdlFo3%2FFJWHL6IZdMogztbjHftKUBQn9SBt0ntGHr6HiSOfrqR070E3r0HBftT1haYAqYjbBCnYagBFQjNfl%2BuR5wZ7RlrVryFIPAobjycdMB%2Fj&X-Amz-Signature=eb55b9e86c92bf79c0fe01f6378da72e75c7a591ba90866d9d81e05178ab38e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOO7AOJV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHANjbqq1CazPMxn4KPxnFZQ4rNmB6ojLPPQ%2FE1pQ2iZAiAfsvJxIgIEbzIjQ2JJKuZq38sin7E2fajsDMayWUIHWSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEUum6qkLr8JSvl80KtwDbCghdDQcbY9I9uN9iuYb3qukHsQiHwi%2BMUroekvpXDdIAnqXwH8k5gwTtoVSFKSjTXLEJvLEvK8pgfeHpfBOsIY2TarqaTfJ05EAohvDSzPIucNqP3hLlpf8uu76CjlN3m6wwG02desKn8I7smKHlI22UZvZncsz33E7Gt552hwbusBQgfzdI5THg9U8yH4goIDVuyzvCdMI9bgYQCN8ZMt13OhZGRSgW2xB3t5Egxw5ZyYuNmGIiWt2MUuUpHTQHiCPAHTj7oVqVz15Y20B%2Fc38GfbvzfneFXSE8qLwjwzyKrmHJyJzd5b4hMpH19xq%2FZfDIIvP5BFCPy2oKItTB4W1TLOP%2BpwQMGLIyRsqwOPXvd5ZYD6O28BudjHMcQtYjvcYpN6ypW%2FtPfFcXQ5fZ4qtDhXGJG49s3EQvgGd%2B%2FH93ZyUVBQUS0AFpvmY85IjJMWxSQboGtpPUoMrfAB%2BPsrJcNS7trkGtM1skYEKRdpB5pLWXlIuz0oHS7NlgwVtLW4p58LulQcHd4gsm8POAcdFH6qwiUaR8LVpUMAQ3MMYTuWo4xUREZyna8znZ8GMXAbeVlk2eFRqp9zU8CsTPY8p7%2F2LRYFTPAQor2kP3fXRUo%2B5davTnTIs3qEw7uOhvQY6pgH2ZZMwN62hJY20%2Fyj4BQAgtxVeBcHQbxaKeCw5%2FBF5PPS1lkGUQadR7MTYR%2FrMZUdHYa%2BsuKUJBs2Pamx0%2B2SiwWF6HsTnzWVo11A1icbcW8Qxc%2Fz6aXgWru3%2F7sxzI42AzVHBfZLNGPULskGAX9aJTIuOxo4fqy%2Bf58L%2FHGprGyWGb2GrAfqeoDMr1DRsyFtFg1nZTzVL0pveLAYSwkUAZ8b1md1i&X-Amz-Signature=f133fe820c54f56f9aa097e883b26083e3856dd20496c8587f69bc1bdcfba2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
