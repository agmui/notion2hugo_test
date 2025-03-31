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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CIYD5Q%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICEDuwR5TQgBoqB%2FHS8MENU8UpY8A%2FcG%2Fz5pussKqyL2AiEA6aWF2AHOqf9ebJaergaqFuyx1laf3aRW5WJzs2hjdb0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbsGfaAJ5JBjQXMUircAzbuwuZxiQM9Iv6ZvlXZEAt%2FhCIjY3YT%2F1x%2FxI6DU%2Fhhg45M8tNOFOD88grDfFOmRSSECxgUyPpVvGvqy6Y4d3bl%2BqtA%2BPmAR%2FcvHsszAcH7JEHuzuClGNGuLv0qncnT%2BtFpyp2X0OVYcAIqX2Jc%2BSzAD0pBsl6jDITm5sTW6nje7Lr2zZNfmRuRQYwqHLkqWJQGgEMFNmbIpSDeFfdspOq4dKN2spxUD%2BY%2BiEbg1zECDQ4%2BdLTT7dLBnhmdQ0pGiYlx22N0yWo8PlPtgom5JTwcTgKjH5bpFyCo3WEaAOeSEhUdJ%2Fs82l%2BQ7sXPPsYLwltrvph1%2BK566tfsWXwOaMDchJ%2Fla836aMWsKclL%2FMpfjBZSuvex2wH6DJme84v%2FQfoUUfQ9MLg8IYdvcJC9jpyOxdy%2FmeOu5oo6%2BzMkzfZKSUFI626ZUE28EFmvblB0gY5sOtrwRObANHv5h93%2Fp2TuBg7XWXN%2BOvPaNnJeWegU6%2FNRBnG7nwrKrgw8qEbYOp4lkBwu3yUD6ugCPlynvdxDHcoc%2FPx6MKUuQrrfPAGZde3QhaVaXpsF6%2FsYd9JABsux2eyy0Ip9mxwgMeU14Zm0H3c8yCVTAwv%2B8Ezjt2gLwfiYSDbo6eijqgyIMMO7p78GOqUBmprrlS1PUh1LRVMYOX9fhMLeVXjPPvmE5ZL7QghwKJrRDsZBX0iqPfAGCrasOb0LTZyoS%2BldOXcAvpZbeocrz3FKR8rLt65AuWxaSvdY9cEzcAFsKdMcxaEWAHnxiznMc5UslM3CHV2fcaa4vDRUYpCdcEuKW%2BzGAieEII8%2BMi40pvBI25SUkCwFGidT7e7TgjzBZ%2BN1GSBQqlz1om28s2JqjHvO&X-Amz-Signature=148fe52da515948040924d7ccecaf3e8ba331dd4cf56dffe26b8e8197c1198bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZHDLPL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIC8GVjsl6CPS7wFTWCznO6xIITqn2jdleGapad43t67tAiBczO%2BDAy8GoPxzfPkvkZBuYUyAaoMa1XjK%2Bm3Rcmd6PiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMltC29agTEbx1BjOTKtwDxux4Yeks62s4r6%2Bnp3yTxwQyNUTLHAOoyA%2FaQ%2FdAvELPKX8E3ojO6Yqj2xxmsFapXL3k5jjn9EqBcrWbxkHiq7HDkD%2FsHV7j5Y0uXA9M1URXF4%2BuIzPMHSVF%2F7HUL1BPX32jpoCKjrn1klxeo1rPHJXa55g9yjqESsf3X2iE43kzpjcpQhBbwnFAqnUIcKPKGa63be836qZuSneOQd6%2Ba7FEDsquu30awOLcVSiIpH6E9b6izQ43f4294Eg2gLvCLllc84J7rFUQl28q5Tw7pQEPNIStZu5bzMt6okKxPZmNIosTfOpQzFqQbXNaUG61%2FyCNexS%2F%2FXXVUFrt0h6l%2FaOXXt8wou2jzlHgG%2Fx%2F7iIp7xSinpFsyQ0a%2Be2wcY6y%2FrSOGmqYJH0QHJ6utrdBGEmxdOyVk8%2FObjVtllfKYooJ6Tqq%2BsRU9WsPn69S7GBKhYz9xVugBLAFVbZo%2FthW440%2FNukTABgGTJDHq43hB9c6p%2F7cHGrZfa6h9dsKWWuPDWIkP9yZExZ1zhkAb6QSBXXqmCf3mVk6yLUDBSJzdRUk2B9vLe%2BwfZfc1sf6DgjxD4tGd1A87EQi9B9%2BbjLxzFmrXIujG23oWp52VzKGHC9%2BVMglVMlVkHcUrVkwtLynvwY6pgExG%2F2MTJevQzkaT2iwCX1FAN7VRKRLZhrAkDLuQc%2Bj%2BsMYeBYYzIf419tXvLEIq%2F8KazOgePfByguSbA2fNVzl72qSCd07LwCrG41Scy3cWTlGtPGsYf385jZj46JqJfIiMVuzAa8%2FFSgtATtZC8NRxUQRarlwWhu83kTHaJXsBFA3ncsgrTEF8lbEalDZ7oAtWzZsmUzUzpApBXI9v2UJl8CWR9FX&X-Amz-Signature=cdb27981aec3b79e56e68aa821375aa95fe751ff74697cfe2fa8c8b0ba45675a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
