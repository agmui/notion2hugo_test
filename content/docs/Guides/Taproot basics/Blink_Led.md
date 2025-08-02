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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VNUMVG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBz0AGrZB5TagWlousdx8%2BJO8o%2BvCYHyEc3Gu4Ofo2VAiEAkAo0VxY12mpF3Mq%2BR2n7FokB%2F2uu%2Bwpkm64d6Cjt%2FhIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDInfBvjRzJuw%2FuxmhCrcA7yJCALAPC4V6tMbWlTyzOtVSvac7habt7%2B2QIy%2BhFFDe3sFZeu2xGJ3Und6%2FemNh6od6QOg6u5js7KciT%2FJzM5b%2FMAvhpSz97ZjdMDOENizlK5EMVpvpNXxaJbQVlsjn6kMsiMTzH9hfmCaXLLt3l3%2BMsc2F0QH%2Fc4EBjw6c7taxJ%2BGVFYLaoR8B%2FAQNK6ikgW%2B0IfXeaP4Pa%2BIfNVZiLw9VAsYVL0Fvl8LZDriEgAHmH%2F7xvpQ%2BOaPu0cVVjht3O9la1o9txW%2Byr51ZRApN8W3GQffpcru6G9oer4zcomzLCPYyaQvC7BLwcLxWd8DMs%2FJkGnQrnXPpQkj1c5c%2FyIM9OCILotqCVTjdpN6aZM%2Bod0X4CBIRJ3GlWm6Om7a0eUHrkPwHgkyXpZ3jQ1Q9BNsAT4hRBcTz7vAC3ze%2F3NtcTRSX20Qli6OX8o%2FrKcj5y0%2F887V9FGu%2B8Hx7zPC1HGLMh%2FdO7mAozrQJJRxPnx1XgkE85KrtHVfAb9rDz6qm5cb9gdH8Tx7Lm9zBEkWU3b8DLN0%2BEitpslVbRDEcsqaxl2ftI%2FH%2B2RecFf1FNS8%2Ff7Tb%2BNwRTWMPb%2Bp565bske5so0NbWTbQ7p3zCMRX5Z2IMPhWRiNMRiiNlJSMJqWuMQGOqUBcQtM2ydLSv%2Fb0z%2BPatoJYklYTN9KgK%2F4EpKX2UcMHTrjJcQIK13OzSr%2FC8dACy0d6f59h%2FP5JAPKqy2UGgJzjWEY%2Fik8JmKtnhx%2BDkud49Maq19DLTzfX3B97997ejfmn0AdqM4RefRF0JLxIreqlfxKOuIwMsuaqtdYRZIB06MIMfoFQZzXnDBhq%2BHHq%2BTgfWk91vOxWrwdBBnLRTfanko1uPAS&X-Amz-Signature=cf22ac4f8b2c840fac6840ba6ab750f5e7258f4ab8b048dc3a35adf1554759fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXTRKYQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6jbCs1n%2BxzwZIWgN7sQZQWjYGosDiXq7mwfJLX2VLZAiBCa1fVrLDdAklnEwvIagqx1CLE01CaC23mqgjXZI8w2ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMZ%2BTUtLe1jvZAnt53KtwDjlJcvWyhmU7AQ40LJX04%2Bz%2B%2B1AuG%2FxXcz3HWISIAeiJEn9iNSa3JCSKI2B74IyL0AiMOHhK%2FmzpubSwcylhzpttsjP3%2FKXSkPoeL0qDWz8KF7QoryGr1D04O4AvfiAJRRwsYiCiJ%2BGkoShPap4XYZBWCFDP3Mj2q%2BKr4iZ7qIr%2BS%2BYSyPgJs%2B65dLFpBd7XDaF4s%2BRnxDzPKI%2BO65Eson52frRNXgV18K%2FZYi0sVaqenUeBnihszVNLYBntSv7NG9mu2I71Dgkmezff4qQededkbp7dSSveUd8kgBf3Ls%2BJklzKzViNDrd1GeinMQP7WG57ka8VA6P9R9MuMaPJrSnQduvu6a6yhfW439jhsfO0qtIh8oXOdxP9%2B47TaLpaCk4WJM5tQu2GzyyqEHtFpIFeGuGU9dSStsnxZS1IVNKwUhX59b5izw5ZFkKZGR5Y1gkA3qiEJVCH28Z0HrsuV8wFIbfEdaM2ISnD8mdA2H9kKBFuWsa9W5M5CrAF0naqqX5KquAaDA4F87NiSR4sMM8Aw3xM1i5kHiW05OBPNI3stUCgHzo%2FytKSQ7Sx6e1sDn8szSKSWrNiLiSrx8AypMz095GGxdyFVryifHc5X7JLvRbqhGtHIqU52HOUwtJS4xAY6pgEfN7nn%2BAja1ntI93QtvUbKuXSN2kHgwA8DS0c5tfjtH%2FH9Kztv%2Bm6tAjyWWMSP%2BcyVKSLX3%2FjTZjO8o8VBlfKDV4iWl5JXLoOaWbh9MnYgK%2BTfc2Uiug56rAjTTecx9Y34Wn8BnsSSZ89EosAwF%2F%2Bwz1JBh2cvDaWxSvTcg0FYuwfZmYS5AC1B3nlsI6iSExrh2rjQFAGkX4AP8gnDUKQTz5e5tkwl&X-Amz-Signature=648a379f2b61b03e9649dddef96ac66f8cae573eda0e873c2be48fd3df649088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
