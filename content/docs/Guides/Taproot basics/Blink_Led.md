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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXH6VVO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHpEg0ar5w27Qjwi3H02uYzJ4Yi2sSkEhvyZ0%2BtjgRowAiEAndRBvQLmUxx%2FrRJR4L7CACqy2lHb8NlWytCzr2WE1uQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH%2BEZorkQxy3hkdKpircAyH5f1mJodWtvMQPVCaLQNL5zD9ttEPzxnDzj5vWsT8uoKJJkXtwiCX4jHOFuc%2FKMTtsxIWQ2Z07JntVdMVU4sOMZh1N6H9UsyjHhYMyT4bTm%2BTnt298RTwcdBl7HB9Oo3rdVhhc6LpQXTsXURjS6RwnJsD853DYv%2FX0GLCiItu2UTgT3TDBVYNwabTRqOGspDUZr%2BAl%2BTo66vvfiVneqC7%2FPUwtvGefeCjx7PpABv7ZeRy6OMMAVQtAl3aRjp98feGHdLyHP9V9y0DEuIUYj4rRGD2YvSZDcm6LIxH6EUbJnYa4cespQcpLJQna6AOMClYO123vqKTV67CFWARlPSvA3wxOTKNOKrFERSOIcmJndAuWriNZs24ZyYXj%2FRbYnYsOiCnTXNvG5%2FmCO0dpsnDjfb1wmlvGjtQCA5LqBYTO9JrWS0zMo19N1qJU8Ya1ElOBqP1flQSEJqL6d9%2Bij%2FY%2B30puSCsbj%2FODI0aeYUf%2FitKtY3Rk8WiRGjtyoOJRkY9r8oEQC4uBCl04skuMnYvQW0CNplF9YyEGlpmO8jfT%2FLgpV7jF3IPX6lnZqv9falUZgsMxsayg%2BAa6IjGnPnmwgMZOaGr6%2FNfCeAAiHX05gQ%2FSzrAg3zAdIgYQMMus%2B8EGOqUB9q0UBImluR3UkyVboF1cIzoe1fuUK2FgFRYalM6o%2FeHD1NgrtsppAnFxQloraebi8Mh1WzhcIbhUzeN7nw%2FrFxpRsqCoJ%2Ff7NbYUnfmzJ3QLqdlP2NLZbKFzi%2B8aK%2Ftd0vMkQAlSFnSi7YLKMDOF1G1cSfxaPsv96l1omf8rftFFvYpeMlSy00RgNLokwkQKggs7LBcdQvtgb51EFyZnBI%2BrJ9bu&X-Amz-Signature=a408158e111c29e4765214db1e9b52d6758e02954212514172c98a1dae970aed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWIN2GG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIHb%2F6B2dMHQMoLRhRssBDN%2FjKKiTJmly7crKd4V2cqluAiBbynzpKbIK2%2FKBOgGesYNCtChBiMWM2h8jdjBH4fya%2BSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2FU6zSMCfMDT24ov8KtwD04xyii6SW3yhGtVirU6qxcBMdtHyTdcwxDTWfO04B4C2c%2B6Mso0fj%2F3y4oZ2OiZkZ4A3o6IlqzXHwfUpY7bJxmHs8FnPJ4xT%2F05bt8ucd2SX4wLuvVTtUvst3L6RAbKs%2Ba3%2Bj2Bz9%2BTQlUBMN1j%2FC64fMyvU0miU4ctWFVjMnAScn6u51leWmXkBe6r3ZsnkIOiX4aA80Fcve40cIZrUZUmJhJNRFvcpfnWB7GkEXaSX37F1ruRzkJRXcwfbTtIeYjyMJFmk5g2qN0xEw3iewXjwBt%2BMLdeL1%2FUdCeHfW4q54TWUcAhIIuESSIUj7oxBZsjH90pbaz5dmxmaUs6Svhk%2B%2F6uMs8MKmXtEGBQ0bItF3m8JjDD506l71t2R5%2Fg1oADeN5BkupPsrIWfpBjB5CGeL0o1Es5F6JvvyQ3kXbNH4QUvpU0rt8f7FSIIbMp4WKahgbTw%2BAW48DI71aQTkGulv%2Bl1HG9KXIY7Ey6Gmkl7RmcLp9jJXFDt8%2FojN9hjadTXg5o%2B6I9%2B91UPgt%2BwXYTWHtWsAG8nKmUL%2BftjwYiaftjbzzcUx0R3XZv7kB1rliWbZGpU%2F10NMD7EHATe4r%2FORCfoGQPi6%2BnIC5VgkZQOsdn0D8caBAgpSQwwi637wQY6pgGyinudviWGyJjKX7UoqSd3eUBo9GVdeGiHQ4nltjO8fcbofOtGQezyyrVTOGLCeDn4UzeJaQ89ofLJNj%2F92eS4pNObbkKUp8Y5OOiyj63o6vALmP33wnSD0lcBV%2FjWyRofzvaX66ZIy6xnQOheYp6xY59gv6PdFxxvmUT7yCt%2BCQeRMx5VzkViW9QEBKwJNS9b2fjK9h%2FeKZ6v8rmV9J1UwF30cZNb&X-Amz-Signature=17b159a1c091f1d241d4f40f6f7038302167d9b55f92676c2e97f71069df075f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
