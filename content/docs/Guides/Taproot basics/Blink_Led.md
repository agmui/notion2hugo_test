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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMTV527%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmmW%2BzgO6W6PoaUWUre0azx13o6eEHirqIQxQDXqdlCAiAEvMOiEINDxJQxV69n6Lb891356yyEnwYOBmsIO%2FjWuSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSk1swB86oa112DRKtwDhA%2F%2BG0JwbRN33KWJsZik%2FOks0X%2F6RJlZNlq%2FTNijCCM%2BNw5SZFz564DKG%2FqgarbIHCbjrXrKuShT4o1TgXivzAY5TtZtbbGQW77X5ui9cu877T2Zrl1Ams2NeyuExwpsfrqhsSDpJ7PIWDzw1dtyJ3aFEzc8NRM4f5XMPK%2FmAkiJOCpb3lXhwP6dxdAXWNEDVZJa1dg46QTrPS37m6GrutE2lXt1Vs%2FpX4M%2F5GOlS4ujNjecOg0hFhYSU8bVGSGnjxiWcp78qTeOC3Pvy1EmylRqIakxv9fyQ8RUPHhWW1WAuC5uyertRjGoe%2B2wvVzujuMNy1nd3DQUEpHMO%2FRKhGqLissseAZd2J6h%2BjlBbt8ff7L1gEFyvEGEwIvFCPqoNbAQZPor2Rgp3SOwPIZpwr1yzcrZxAsFsNteXuA%2BcMZqnuTh6AXwRffTHvuI6PeHNXBMysD2T741uFxfrlsQJqwTe969xxuoI0Ex53SPWIWHqMPgbHZdUjbUg9r9JPz%2BHAQDbO663%2BKGARLtiCegWtKEiCnMaptm2cPLD8hDmDds6WMa%2FGfYfp45jEZBBQMbI%2Bkk6%2BXUS3CBg3W3Z9qGbmEqskMalAV4FNOzP9WJe76czFJPBoF01tPYYW8w5eLmvQY6pgF0nDf%2BOYd3q1DGYzSM%2BmR4CFITXCqKaDW%2FlKeCep97j464VkisdWQJ77cmqhJ5TblI7a39FmAbBXwEhf4MGPlfmZsVHAUaAeY4xSd1kv6d%2BXunPiVpojQz%2B5cecAnNWjp6zptSCPBP3GPSeigzu0gOTkCEsiVE8hVo6DGkwaTWK%2BDViGFkQlWEVXxO6T0axDswI9mjMY%2B16LcMZvP8BXJB8erIhKZL&X-Amz-Signature=df9ae722099dce199dbdcd454efcd1bd5441be00791eee7f0f76716888a07d15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW75BV6X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWRMfqc6fU5BJJttpuMrYc4uBkHdumUs7eCdfRYrwElAiB%2FAtuFDVWF27DvpQeNgbCBDm0cc3oGkMqdR63Hdb2F1yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngTegkvWi9kgplLxKtwD1R3m9gxHYDGnS%2FPS%2B153%2BFrl31l9rbJGQ9yotnxK8wz7s6rbWWL2LZoFuq8o32dEDksfhmbofWU5AjWMQtPiP4Kp%2FK3JU65V8v6aA3hbXBz4hvqWFDfN4zUMio2bImCENw1ZyeLamA4N5FMnNBPt2RTYcuATMfxktoVVbSQBJ9l2nZ%2FSh6ZGMLYuU8OAnG9mmZ3RLBshxfzxIh3qu0zjh7EPMajF3bin4x8lKCJViwzK1R7Fw4rNB206376382J3R5RcbFJDyqu0joF4Z2wVNg%2Fb8LmzdXJEleNUUZf5xylFH63gNtk1LN2vJ5kzWqs2HNapFvWudHxhAz%2BeXcH%2BNBAntA1d5OcL0Izyf7Dk2gNjVEkQ6JQzemxqleFJtk1NiM4zKxjjg2ZdXFQVRExRMDGgGxDM7YkyZNOE0hH2uvYyk934OwBWpRQq%2F%2FxK4nDe77PIupsUR4haLRf%2F20tsO53YlU9USTiAoFQcR6jktVeQkLczTROq3MavPMzek0hACZqdYVmO2xJ61zGGGpl66DnagzNM5mcC7DWpV9tzBEb%2BXuYBX%2BJNlLP7KRne1aqpaZ%2BeDTWdyiUsF6hRBCBZ0Tm8ALMBY5oapUqcO%2B0fYZ0WMAasz8sCycoQJtcwnOrmvQY6pgH7GHpxu9h%2BIS8w7WV%2F3RJwIqJmIhcLuZi2EdwYyFjmZTSL7FHMknPfOjKso9f5qlqUGgcWTuk0fHccIzMros8DchSxJm5wVeF2tTNQ4Ji7nf2fUUpiDv09pTXI95BcALdoMls3TQ9ZYDOsp571PT24zQ4qA7b4AhnUXpFcUiyi1%2FDfzzcFQNZpm%2FLEh3P9juRZOYv87xEJD8QlLpBfjyfabo5UZt2%2F&X-Amz-Signature=d6397169b87941957894ec6484c39d78e48c58bab4fc29b5375c5c4a78323eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
