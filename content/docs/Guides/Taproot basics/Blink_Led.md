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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVRE5U6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC46cm8%2BYZFSDff8JrRUSVdhUDnfVvNZ30gG0Q81xHd6AiEA3w%2F6YyM9YVNkZBbp18%2F3chjQ0Z2uEN2j4Sff7N4SRTwq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDBwRx8MmBnBmbBO83ircA%2F0kKHYiYyEFHF3Ap2v02ZqqbPPBIsIVPCR77R1ywGFoeHTlckq4jmATfX%2F3CzItpxV4TERgAtlnnPUvdkfjc2a1Nz56RGf3PHjA%2BaNqj4ydswEyYYDWlZw51aesrcd20jjY%2B7u%2FwCgDZsi6llCLnMHQ797ErjtI9vpkXLN7lvAcsCff4RzDwUjnfZa%2BQR1rWDwZr1VzR9mZhm1lk37yDpEDi7%2FwL%2BM6%2BBgKOI7C98teH1YwsJE1Cr%2BBDaU51lYSL7rEHk8e7lqARvvJTbBgtZsje9Yv1maOuTAlS8Qn0UphJcDuQW1datt0iwBFPTn2h7ffFiQA9BPE7FD86rCSHJhDaVvvMR0%2Fhx%2FDLaBEE%2BLqi0L%2BDSG0IRbBwWv%2BeQWYIwR1TfPZFIkxFcsrj01V1ip1SHYCEQIDzd%2BuwT%2By03YK56ByKwjd6OE%2Fmxhpy%2BcNFJE9HgV8GRyvmAzf7AuN4snMFBoZEu5bpq%2FE9meo2K39zYaRrYy%2FOrzDYA3TT%2FGk0PAa6kMCu1QMkvjVOv4CmnNnWutcDtwdYccWwxc3HJll%2FUsl3t%2F03c4AjAiZTVoM9r%2BopYs4EyPAXEJwGyrwCHwGcvlL5EldFfUHh7%2FERnY8OqEu9UK1r2Z7lG%2BCMN2C9r8GOqUBgTGKNN7YVb0rNw5OYccl46J4xtVuzreVqnXPnb2ZGuynRWZWIOk0%2FNb%2B9qjirnhBd1AQFuQfWmX6P3a6gqyMCxKnD6zglcgT2Pt6sXPPLd9ZhBH4nU%2BCDHuUKFBL9aFgTqES6jexocviWM%2BPC2%2B4%2BGZfS%2BnaNVD9X%2B82pItAx3TXKvzgpSoviHiDS5hzvWq5duhu%2BQyyM%2BQ%2B1hNpNU1MrwEOHSgB&X-Amz-Signature=790c222f4341f16101e769192fa7653e925bfd5016e587d02a4f7b618ec43746&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZHHNMV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaGvJJGyN8UitFMvZLaF7TYV4V8GLrk0XtPUGDa%2BbSPAiEAkdv4WHjlMQhAHx%2BsbOpZ0uo1RjyasnwoR7tB4VNQKAoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDDHan0lisSlE50bhSrcA0sxfp%2FizlF6%2FqEWa2gujHb4BMUobprLRryvXFuhzA1ldp7ZzOZRjGUrCbhd31Uq%2FhbkHOytra%2F80gZRE47knhXm%2BZgeJQJvsxnzjMpQ5TEr3lVnQIYq0ixQkJUFiMGsGmsqOngKiB63dA%2BEP%2BDXCFu15QI%2BW6BJyqvGrOBqQenWKhoHtbUYbFSgg9uKG6siEDivKiB5dH4OUuR7Z%2F3xmygynF0zrKwTYRB%2FSasxGyXfBmgnc0uydXiJ2ZWuSz74dSW35F5GIkJnH9BCrLN0CFSb0ZfsM6eUj7%2F4tr7bth8KJUhpO7z94yoklUDHBI8PyKvPLH4pfLn%2Fdk7RJhe9gXpTwQEqsL5JsttnyeNdh4zil9ggrAHc6wOVYoEEjgaCgzv6VirNIYKCfn4FXo1%2Bl5SurYMjOrvzuDRiQPfqxwhIg92VvSWgEOsBRU5rdRGt258I8IT3Iqzl047SHJeUAcjwgC2cLAv5DtTTdUUOptX873l%2BH5aLnUq4MWJ5c2Zy4bTvC2XJWN9P%2FMO4CwBT1ScJ8XKDuRn5tEYdXrbEIOQmKH73nEtvmhKkKcPYUmkXClMRGxvm%2BK4meE8U1AH2jG1elAMUU0U3qt6IdB1qqE9mULhcwG0FlsGEARpkMM%2BC9r8GOqUBvOR24zCjYml8DBO8W1XgFBPAIb38y5Ns2udX1F17uhAGLBAmTIwCYDxi61XNedUOtRSBR8qGAea0gCpaXNwXOMUTEyapEc6Z%2BE4ut89UuYDDeY3gkE5ctlYw2X%2BiCADI5U66emBMqszUVa8cfC09GB86y5UzezhPZGPo4jdDxzmgcMW6sFmLejCt06p9pzjigkim8LF7bXyo9vhgIe%2FddOtA5D1A&X-Amz-Signature=0951ec5cc96edeffb64c943d652d218e9f98b9929530b5d84c592b37ea711c76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
