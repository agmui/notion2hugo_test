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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQJRUJB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAHvyaR9BhYFoH%2F5wlBzhJNkksnyXi2TPeqX0SICUU8AiEA5FIOstmPaTMqAsRWDCAy9e1TzaL1gGVj%2FiqVH9O0bigq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPQ9IpKy7BuWmOijMCrcAwZ3A5qMeovDDi6KdEg9kddhTLswP%2FzGyTuxDFuFokqeCXfkP4%2Fjg6HKzkt5Vk0F6RcWUvlvxpiv9H8ElQQ9PqW2OJ4TviH4q8Dv7PqTOfZ%2FsoxxTKEHa8GKEnhOncJiihMFHL20fpWijvlz%2FJyPfpPYLUpNzup%2B50G3uo3Uh0ERp3A%2F5PYZE8Ok0IwsB5TNfXrIbOYjxuEPwcEcUetz9JEOviFPi%2FO6KF55iSTNcH9ctT5mRBStUN0oBvlb7rCj%2BsWXRDHVfB3kprkAadB5ivOd5SCZhhfwyJLUIMbj5iUOHZJYUHBnRFPhKCg4COlkOYF60tMz5V6s5Mmc1Es2nyYjb9BCdZrs9JquavtETRzgAGaNAIUS5dq5Fdg1VhxAiTxNL1bWZuGJBhsIelVhWrDEF578KgBUkHZQLqPv7IhsyOREPv0N0iK%2F7zXDRoRZxiDyHhbg9udab8x0RQjgjnUC6Wh1PbH%2BV1U8JPgw7REFCj20acRgeOR3h0sKtARSiB6JEIPWDjjUJe87DuwkfGMpFb%2BLgDxzIgvjGvumJNcA4nxDjKWTjNlj2LczrRx3o%2B81IVPE4tJ2su3V6mgec1E2%2BGbVb09SdOD8krboX5QgaOmywu1%2F5Oq7VsLHMLT%2Bq74GOqUBQPhsTM25wUQwpMC1dE%2BTWzgwL%2BD4S8a1GL1WCZ0shawc1dAlHj%2FEFa5AZh%2FgATS2Y3UIvubuUUbipbkXxFhqFxax00tG1%2BN45e4jH8Uy22cyZZ3r8z6GbyfBs8b1wu8rrAcCVLqMFZZEJ7%2BYG%2F3t4bYySvweFdFyz14QzONUyrRifpBYEISzOtNkQ6DtaEHPRq60HFYim5X4knfjsVmIBSy1WBJe&X-Amz-Signature=257da0eafdc3c98f7133dd45e75e635836b498149ed23830ff3ca38229933954&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUJVZFX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsHr8W7k2VQbpdRhcF7h%2FjVzib4codNry0Dd8qSyAHkgIgUwUtLUpVvZSvOQpcxk2umjY3Jg%2FtkvZjkoABttaf36Aq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOLeGOc2JOlTCP2TxircA9vRp6xX%2FcaUmg4Km1G2skUIbism3lWRHNqeSL7YG28rMdBh9JvJjZ6bXwFJ1xUqdVJ6Mx1lt8dib9OPzkzZxG%2FgORxCRrbM%2Fgj8kSHfymU5%2Fa%2FU2qmjrLpCqNE3TZSydXUt5VKf7Tvf3uqgXGHD9OuCGd4TBOJr4T2F4fzUnGOV5dQSOxuOaLQ1U4nqgdKtbcWNXeQYLhdzY0w10%2BPsnzESyuw%2Fu%2F05DNBLky0zo5kPzberLXuRUNfr6gQZ9wVOJoX5cYlwaxUQ4%2B1u08xeWzOlvERHUt9KinPVF63eZDDwk5a7G3ibP7wZC7uqUs6%2FN0EPEJyTR2KP5VCXj6uYY5q12RtbgUy8rr1jb5qSmBbg3OGIU1mjlh1QmeG79BoB7rRp9b7%2FDbbOmcy%2BegOYAceSlvfQ1n4mJ2gLHxDllLJKPo0BiF%2BuaqI%2FYlQbwH8xEl2tsMBs1X8S7Gi4TdTbwkEi0%2BKWfFjlNEjfrfnm%2FwLvfAMkQVuJnlI5MBNFq1FmiZTJJBiPp8Uo4rFLAEc%2FYOMToCFIsYdSdGMN7Yv5LtErocQ3k7Tba9UMfzaYev1jodvG7uf6kURYAPGQwJI9xUQWMpcG0P8qbNJKTQkufYe03bFHcuGg7IpEHWJ2MI7%2Bq74GOqUB4%2Fz%2F7gU7XJBrcbtzoyqIxFQA7oOHUb4NCX46rwgq5jcUpCQgKITkK2AtdlALfjjREVaXbaajODT%2BvFZp%2F%2B1uJSXXej6FJ0%2BG6tvyvRcB7%2F2LMXPxUadvao5qvmfuqid%2FH8ZbwoZe0OzENtelmEUc9kFk0xGKfIsWpZXYc5DLkXUp5Do%2BiMxclbQ6pqSO3MFAYltKoekHrAw4aXWvKUL7%2BIKRDVSb&X-Amz-Signature=c9df49e0d1e8a7b59c527e610025d17ad312ea9eb29caeff95c6625bf48615fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
