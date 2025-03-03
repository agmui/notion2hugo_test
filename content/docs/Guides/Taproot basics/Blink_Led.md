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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JM72VT6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZSLkOc8ZvhhUKfhpTK9dRbS%2FhU5Jf90laWvyKpEw1AiEAitJiOT52be7QAFcoF8zLVwkDKp9KbJZ%2FwDXjO%2FPi9GAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQDDhDQqqii%2F28KRyrcAx%2BlEC1F%2BGvgRry7MNdokdNkmYA3KNdxiP6%2BueYApWaBiXnfTSQJT1hz9Gp%2BFNO6WhlFSNG1DJ8RkymAcGpkoo9dEOMjfvGg%2BwDp36AXPzWHsyCiYfYfnGrUpk9Kfjpy%2F6lg8CHtK1H7wsSWxlkZmVR2dJAhg6Df%2F8opt3bd2JeuCcvKiTVrWGDuj82PvjDX%2Be02Ru0t3zs9EMUUue1%2FvxE8wnZ%2BB6qQqh1UIcTzYNurglKWa%2FaJth3vCgcVE4yoGoQAWw8FXJcHaTzmJGpd%2BuprTGdfLAcb8yQoTYms3aye03gLprcDdwzVslC%2BUJqt7XFD85rO6jbv0TxY2nHgbycbQ1EYHAm3SKRmchbLbw0HSfEtxanxjnYyAYZ59vkqS0Vj6jrVib2CVRhsVbkfhJNTOduMuFfDzRZCIK4PXhw7Vx6fOmt0QVcCufJtVA86i51zoUkZsUCzo8wHLj%2FCUJLYDqWvRPBlYIZQO2aXYxNUhSgeqlKDx%2Fym1rCocE6WefmWDoHcq4Kd%2BWq2K9ReiQsbnM2jEhqZupjPPYjzmezUJ%2BuIMFLb3au%2FDjp3u4KI6G2fkDiGyi8SqKjIJIsFUFl5fn3OEj3hqvEWRslA45Ws%2B6qUn2GHAlabHqn7MIHblr4GOqUBU1x6y0eJHGeSvl6jUa3BkzcvwFiMPgSjG77WZgAqgfwhuAhwWRB4VXsgLZBvqQluoIOlLmo%2B6%2F6zOZc%2BMCKVR4ComBid1vOK0%2FQe56QrOic%2BGpK42Jxx1SZSLNBN8dh5FS8xvpTwIeAbrVwyY3G%2BBdt%2BAE3RhLLf3bwkrwqK59m0piy6TO%2BWCSvrP%2BFDoF3X%2FLtCtyiyDKeCrOXiAfbnsXTdPQ4O&X-Amz-Signature=76695a02f50da420ed5be497ec6bc5e422d8b1c980e122bfc6d2280ef01fa42d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RRKGWK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzBP%2BzL4fK%2F3W4rxWwYM3M%2FZnA%2FSRbPm%2F52KAgY12NIAiEArWB6mSiADCyEHNhsREo2xZ4rDsZe%2B777fP3pYjNk3QkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2BNwHh15%2ByJl5RqSrcAyW44zimOYKuKsyMKKzBmpHBCbD3WhCR3tTXG2yKRHCN8TRlX3FRty8u%2FqZOYRZjBn3wvXZzRU4aERyFiwwyu%2Fz%2BS7aR4AgHXT1Vg1lvmmUn1HbiEGfUMBQjVFX6jMEf6Rys1LiZ96uARKumjUPBII0TsSFI1zKpigh7XH9GJT%2Fa6O40JgcGnqiQF7nL5KF87cj3%2F%2FmuTFvhJm2gVyFurfQQp3hCsM7YdQtv12gsd%2BiWBy%2FIZr4mHgXwhJYwY%2FdEfP14Ulz8QGcdA1HjNNcl0mFprn7P7cX9ALF4Wgc9gZu89PDXwGqH4edQ8ucXD82znsG%2FPunPTzGvezMhUlPsLBJZDYw8WLEHwy2zJzZFVE0ZK7MvdKw8FaenpK4MyzMTvt0iB%2BMeW7i9x5ZIJJsDN4aRpAWCnqQ%2FCQkoIwRfClsjBrnx7Benz4jq%2FxiG%2FyHBXdA1BW%2BV4nAW97HNSgvNqUZarJDVI05wWaZO1N%2BQgyTYkNBLV%2BItig1ROYSdDkYtO1SYHSEeiMtyE%2BFAtFCGNF2riCywXany01gssgaHZPEm9zJ7TrGn8%2FaIFoDJXWPUPo6itbDM3FwKBO0QAm8fucGIn7%2BRRWHGMh5CVqroM999CSI%2BC8myIq7Am43YMN3alr4GOqUB%2Fb40gNwLdG9VS1yuLcTQ0qzTq%2BnHgkDFCWBzRlmySr4fz0vFjUbTZMYzew%2Fb3XfQO8%2Fe%2FwUvsQOXn8OubeqbSsmRt7U9O%2Bvwn%2Fkv5b2gkBs1bTpQmEKdIcCh3mPd7r%2FUNd%2FA4p%2F7bHioGb%2FA1MgQRBrHTYbe8wBXRZWvUDARmdwVnkdv81ImZL55K115QW9l8whfOfkm4AjyDYUDBRJGhiQFeokO&X-Amz-Signature=66f67eec0c627359b18dea2c42815ee7f69f51931d0f56d59b9cdf98f62662fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
