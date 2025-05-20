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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWWWSB2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz9mcITz6LRqqZsM47FVrBiEqxL0yi9%2BvuTgAcA69JcgIhAPnrUJsU2zFaX5Oa16DA%2BgGvO2pQBlIMKQS7x7Yp0XYpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypG4x%2BQkURX9Y6XHYq3ANeurgBQLH1kN9ge8V71%2BJsQ0X18rNfHB7tHXiiPC9UK37GY3W0%2Fiuqgzn%2FK%2F8zsSGR%2BSkYcKy8GycuieHX3BseN3nsRbbNXjVLKF2yXqZ7tLI1%2B6XEqA4BXAJ7NqYYhx3ha7YwDwLPPfDxZ29FTuMSTSIcvEZON449Hf4ysIt5JxTk5Cjj4seqb36Nz9XFvpqPFhI5JQJ4VO8Dz3nMUxHv%2BGqc6hJ918vF14g63qjovKxiULWFssxtBsU%2BOtped5hU2Eo3f18QdkVqtWczuuAi83Sfu1xhuok%2FRggHOVLC4xFU25riXnEiozS80xFXD8bHn3EPQRQ17KT18e6b96EEwPfKUyBAfWwEyLO0uYdUKk4ipqHeMHwk99E5QvfLwzVxxEV6IDBT5Jhz%2FN%2FuvBMV%2FW5jZ9gF6lq%2BKvdWuo6KVZhPQqpEb79ZeEkSuMpekrUfZzh6M0%2BFeCdf%2Bm93HDpwHz98ZJlt1LLfOeWJJN%2B4gXTWmBY7ofg%2Fjk2O28dPzF%2BFXsy2rjYZcmV5CgafEDIWuYXdnkwIZGuNdnz3FAqeaLneDbPoIriBtDj0G4uHaG9KQmy%2BB1tKnWGvlZcy2baIegW74SSPAKTmIHuw%2FDvuu0KpwY6MUCAeEGV0qDDTmLLBBjqkAdqYKRZuNO5mVe4IHNIGzCKGxaMBfUVWHrRFK9HgWHURXUyX%2BZdeC2PVPsvWVKjH%2BsjI5GBpjrYvQY5yhs2HzjAfDivqHgsR0gClnYtYo%2FuLwSaKynVxIaaM950LV5reg6BekUv7nhaBAXKDfuZhGjgP0cq4gXKdx62iUJ04lkiEtN9bfUjynRdhC0gHyDIGjx7ks0hjs8Hu%2FB48WL2IIxG6pdX2&X-Amz-Signature=fc24525fcef227a26fe9ebb1186162e6d0df3aa691810cab09a138c543fe5ece&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCEPZUM7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnlfzng7woaFv1mKMcvbWlDE%2BRzy5DBhtTT8At2PDDugIhAKi8c3XtZnSvd%2BbVgSQG5Hi8TBN9RYe0XHHD2WAQWqsrKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwguCxAwIKWNHRXIZoq3AO3UD%2FivxDL2a5LSqPpUQ4jGml2QKBaymkNNLymG%2FWOwDdJSuO%2F1cbHIsOKEkRY25X1CqajFrs%2FAvjVWFqUpMt0ur4ii%2BrU0W44dLEMg7%2FQzoykD7ome1j5CeSONM1TiHqyYpMz%2Bgq%2B9lWuLGF1888qL9z3D9%2Fe15YBczrahZftSDotHBq5f4D41j1atnS6PpOxmO3hetrbVn4Y5gEiALD1s40vV%2FXweyftv%2FCoYsHLYDJNPF2XgYCJDXY%2BsMQKiYMpfGDa3XRRDQkr1fF0qA0lPFoxuiM5GEO0NIylvy55U9CQsZlEai7MxZ17YAIDBStj5a4HGdAkiezSpUmaegHWxg1Jx1hryYo1t68YfDlyWxNPk%2FsUdg0CBXlCQHNf2kD6KWC%2Bws4Q3qlp5Q5TMXwNgDLK9xlYZ55UpXtPviYEmfVwXXmvpOaWe7Zg6JL%2FEhAfWxvFrc8SMoMvwlqz3Lwk%2BGlc24AEn%2B%2F19kVDoiiTcyJDcgo3UwGjqOvgK6%2B27WA%2FBYaMBhEFvx9hjzzCYrauASdHVVwCN8%2FnNUqV%2BQ%2F%2BgOyOIdYnwX%2FMTQEMcNT5LKc8DjPmy22Ka2roKx6cAchCP2VV%2F7KxnxlSNz3H%2FoVU7YzsqE8E3QOQU1kw9TDbl7LBBjqkAQT%2FhlxiEJ0K2lYU14%2BvR4NcoeFLLIOQ7GrtZKNb%2BblaZP%2F%2BB6LCxos0BJFJvGuSuKOMrLsWRpET%2Fw8AJSArYNiTXb4eGgkK7Gk5XrwKr7KcbuOb%2BfuQOkRljhb6PT42HcgoK39T7xyHEnZHOY3Iiqvlk13rdCrK14xkqt0X3EPN%2FeF3%2FTWtxqq10V9rxwhK3KTwkJuEClVREyRLQDo4V7sNUML7&X-Amz-Signature=7481cad4d8ccc4693360d27773c788d10e039eb091bada45fb9aeb1047ecdd91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
