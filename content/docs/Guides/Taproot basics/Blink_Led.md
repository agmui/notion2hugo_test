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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQKQ7O2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCFDQ2L1ZBA6toR8cVHID%2FlL8GJfDiWtFtLNVQiu3W3nQIgJRBd0l2Ktk0QTsEZQ6aJ2NaiLV%2BmJNXE4vqBXTUV43Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHmUlocn9q%2Bc0BD%2BnyrcA153fcMO1MDVR79PwsOakhAv212%2FEmR1cyPZAJFTVKbtBYavS1hlCzZZeueoKIUhuc2zWbogdQ6w8cnjIkDqzS9cBsw3RgWjmzLiJyj8Uf0fadZ2GTbDi%2FQvy4vdavNBlBd0ulQK3eVvxdZZ9o0pMUtEVC5dzsoshKKp0ZrFGYki%2FGZPkDwpgN7Y1rgVQd5jPYIzPT%2FlYiMY68onPi5571tPmNmvR2C9FGlLOPagx9bujW5g%2Fj8gVbfIWupHePSlDA9ZISJ3aTRRXA8YUFawAsqp723863qGfD7VrkM9ywkkHj3BpUJLgUZlBJIy3c4XTqBJXtxsCK72jwrtZc2gtVx2Mag1Td9PvaEya1HmuvFfPaNJUgszlqq%2BgqQjV899c05%2Fs6pD3yZ2xpLpdbrM081zBjqjJhvDp0P3Uk6tpa%2Bh%2BWSoBJNkOycAv%2BETzgyMgCxLKz8yUw%2BEQN91Jvs1QJLdeZNY0XtPXPWb98u8ygfRn2731cVhD5W%2FQWlG9y9cOlfDECmO7dZCKk4pOMxfA8rWxXBxcwYQNGnc4YVdYYevMZ2AvgOaiGJJxvSEry0VFD2SGzIAAkIVtdbev%2FFC4QWoV1SBCFpwERkY8Myvcq7H0tFfqCCt0gS3pQICMPKVyMEGOqUB5COr3VLJq3I%2BSMjdhr%2FrVY7Lp3YOP2N9jI1HjoI7VqjpP6tNasdQCAQ75QRZrHaPOg0uRSEbhcvJqJ86JYlc6b1WcNSkCAZbLJLoyWy%2BtDRtsW%2BcdHFP8hvRkb%2Bpwp4xwMLfQ21VGhQ4AhJvu%2FHtRyrhVT9MFp9LZ2N3QEUR5m1hrcMEjdHLTVQWkgU0Wn6MqY51PkbEpeJbbUJ6S5P7%2BgQdjPTX&X-Amz-Signature=6fa35bb369547f6b1117033fee43d1d021addb1dfc10a2b7f012cf65881e1e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXRHIJF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCzbOIK1RN%2Fh3SSPDhqzZNj8j2DEVF7FBhL8jYQkaYu3QIhAO6bfk31tYQ0uAw2KfoIv9qxyhT8QQsz5HjzvmHTM3vLKv8DCBsQABoMNjM3NDIzMTgzODA1IgyD5oi5RS5foODf9qQq3ANK39piKSJQJTUPkbl2CipveEwBHrZMDj7qzvqyQZhYPnske%2FInoZNyIK9E4RthFovP2kiD2RnsbzGHk04UpvV9fpsYSLHkxjH1HyWrC6ioBt%2F%2BGH0CcLotBYlY%2BgFUvjE6XfIs3kYoPahKiv7MYhbNTsqeLVzOL6dChYVq6e7Kd4INMtvkeQ36sE2w4YAyEgBvAhOEoA6HR8LbucNcEPH4By32vOHOV3OZjmiZbzfYXAskIUexbx3wYuOXC8ksku0gYNIRNLBbJ1LAz2qf7eQ6%2BClmLACfNvIi%2BW6a0Wr02194y%2F1rUvAFxxesJ2HewUOFrIuE0QOtsADtkinVitJoLck2gjeSVUvfln2ruq64pjYGU%2BHUaTRzsHb0Tmr4IaGopsGIUczgb6oIMhT7ub3wOS102tPva%2FwyiejM%2FP6n0UPlSI2B6iTiy90EAitc92QpO87aAWE6Lc4r7x1BGLJeHkWguvRVNdoQ0I7%2FudTmqn1G6MzuQWBtluCfRTzP77W5AFN3MZdBaPuZBIkv0yddadOMwVgScSMUEGWKPby7r6sw5U6gMQNKd07G1fQj9RNvyaT1MBjDHGjuDntJASZzNwxlSH9B09ceO%2FvgeR36LPIZQss3HwZu%2F8wRrjDrlcjBBjqkAQUmRB2%2F2oMHf4ergwrjVkoYy%2B2DJvg7e9AmZKWmkNmfni7qWyAexohrfU9loLoTFXCLIVO0ipYJyeDuMv9nwCmnrURBguPBulw1veI0og3C9Zxch25a%2BQaCcyhazws%2Fl86LN1VPGQ%2FE23iIm3o0AX46ttt0irKpNZRrSsk%2BNBoUA0EgyL9Tf1Bo1k5PmHVMZlCcVhKKLsPqlIhqEbSIWawokQ1t&X-Amz-Signature=a72639ed7d5fdc3256e37dce44bbaf8e832d63d4f8a5a6239fe885b32958a1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
