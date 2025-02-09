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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOANPNY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRfdhyj91yG11knz3tnE%2B3KGuVqwBWSvSCNNmjSOynwIhANNr7JX1ZHxwkxsnVHNDFsVtbHBflwl3AEuxK8RSTf5EKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHWf4%2BAdCaq2GmpIkq3ANKIg%2BwL81RLf0O051c1JkH6kPoalHsNtizM%2FlBfKrTHlNd9V9eUjnr1IgfuUN1BMDTOVGktsN7oPb5huke5sEvumogk7id56SJGB%2FUsKqTrPf4tlIjJDpd7X2uaUvKtf7uVQbvQkH9zsEA8nj7FHdsdOwbvHxcLGMsy2i3hpxnfnaIh0AvPTOoQtP8N1ys1KAOcdWHZokQ7p0i5n%2FlxGm%2B0fdsFut3p3RZ2RSSSs5dUf9UxWlhIOUtascOBtl5iuE8t7Z%2BZIVf0dQ2GZSxMyIsTykvPP%2FfIBZ%2F3JjatXFN4YBi2obpohpuwc%2FP4j1Rv50fXbhfxfefizRIQeBuZyc282sPIjLVgr99BOQJKrE2h11jw6jYXTzXQMaLZqwcAJc%2BFESdbxXHT%2BDK8L7GNhM%2BrjOLCUveaXlgPU3xn32gc8QusugbH2i8uBcRKc2LnIe0tUIPQ0G%2Bv%2F6yhHfborHo2td%2FQDjw4Skcw9oy6FniC6HivQYfz8kMvFFz0yLKFu68IorsmE52zkyUihz9UHE9NVccGDv1UP5PODpyUMZrL5ZJXtV4aENX%2BaUaEC5u6FQf4UK1x4KHXPdOfYlLQVppR7tx9sIJD1HamlIKs0GcliBNb8ceTHADh4YceDDE4KS9BjqkAZGK%2BjdS2XIUX1K2%2Fx8JtO%2BPcUIafAKeLTuO4wGQvCUc8PC4KUxyiwmj8JCc5ksYIpOQiXGq8CjHfvG5sVjycQtiLPosMgJhr%2FINL%2FnTzhKedIagVHbRAeJRyt%2BtoJ4OQLkedUDUjv%2BW4VXwabxF7QIblEeVFs5mKCmJBamLC1QhhEGlFMr8i3JOjEZRh70D5f1Rrh2Gl6JnmNGI2eZA4AkzLpRH&X-Amz-Signature=29b173e14609dc88a327e5a94c24256a16c4493c5148c91a79ae725a9bb1a2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYZHPVZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkRlX0ucfMXUlpCCfLMAjGXJKDmwxHhfTVmyXFNSmkWQIgOzrbD3Osd0J6a%2BcPZHrfbmCOCfdrQ2vutjkJinTyVecqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDzM9Jde%2BaD35L06ircA9UNOfNK7Ts6BbRMiqnrHACOocjRK479KYqptsV0VpI2CH1PnmlbrtIX%2BSQskgTZLIaWOmqaIGAFlNedLz2onsWKbeIj6r3y5MQxm6kCJ8zJIR1cdPwj7SJQvgskD5ELzHUXYYlEOI1vwGOvSN3%2BtqDMeXmN37myOiHj2k0Laq8biuvtg%2B%2FR3ybfMUH3iPd2F5BFcug83I48qC%2BbxIMVUw7FLQ0tpq%2FsOc2QeKdjlpWtwDMoitALLfI%2FKZo1wbQ9j5Y4r8R2jqBe5m3bcAoRgAnOvozFs4ojZ2plLEyoj9IuAwOI%2F%2Fot%2FKOr6F4hRr5PwkWAPl6iLJDZxAQhKCu9%2Fz%2FknPKCw%2FdlcBr2KwghFICiFhuiPeoMFx%2BM4osqjvtxuFf15k19yAh1m1Mi2nyJocfCLa9Q15ykeUr0iVx74%2FlMfCbjZH307wfaiPp%2FaMWgu4AUB2ht7JKkSMYtzT6P47lKf%2B1gUtFKjAOSUoRy0LGHNoC67ogFUMSFJ%2BfEvMFk49CTwstuqz4uFh5%2BRw%2B5rQZeO%2BWfrNqkUqvwaJJKOfmVhsAdszMvVZ9Na%2FS7KxY1UBaSmwPLFRMDWkRfd0sKWVrb6zIP0hLvPw0VXQJBZfkrErq%2FeETNvBYRwiK7MK7hpL0GOqUBxCP3gsJCGA%2BvFZfo5MHXvd3dAMM2TTZ3DwzeEfLTknnS%2Bo7GtJXxr3ZRH%2FvbFTCsVeNoPUu52ri8wkT4QMpJapZu3y3%2FSKCOWgGpsM4mlFaq9tyOBqUAuEuMZdeI5JRyGw6shEgLq7XjLPCZ4FZoUAZI%2FAOOWQFbKdUqgWIaPlulFpSSnwXofv3IN0bARq2gHQh6shErQWM6IUC%2FL4V2oogGnRIF&X-Amz-Signature=ad648008014913bfb9e6f8e66921d3ff3858ede839b97cf203df5cd7bf207d10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
