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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA5JTTBG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIE8YQ4ktzKlO8yZjPHCm9YTIsRVwNj7QLFec4E1rkvPgAiB%2B4l4fWqj4%2FgefDBEpXG7qjeaIQTyV6fv9dHIMAiXoaCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMewg7fAih0fiRo8kzKtwDf%2F3ONveDKPowfJ%2FupmEGmB%2BnmMa6C0NFLwO1o7QnKmQ3pmpg%2BmlH4LLM7%2FswaXWocwlqQYEghj2k5jQgnlrMa3bBgodiy5xaEAa047EZeo45L2wKJkjo18VhhJTSDRXcI4amBss1HUYKEZM9R2PWUP6ajBEdBbWUrcxPe7Myvxk8fbk%2FrztKOvGHcHAUtKzOWE1PIo0Pcm1xdKEENbKKA7eDjS2CXsk0uikrHmPs0rr4H4i2hoMWTgRUu6C%2FKi6zSLDgTM5BzQnP1kIKx8%2BjpYEpI9IBtiV0zfcppotHm16IpJXFNrYh4j1j3RhOMniD%2BYFzOTje9%2FHExmDr0Rm%2BWSAYvl88s421JZjZjbqjKadSsB9kCyv9LJBHxRVEu%2FnClxuYbR5La5cf2Gpq5CTJRp%2BQFL8KtMUim4Xxb5%2BmznAYSfzbyVpWfgLy3MCAitYZZutBhapOb%2FFh1nTbXICDAmsQU31NySG3Antg85gxxgQLCKbvnl%2FQx%2FthlH2AkpYyDxRtUlhFkVAlg5M8ho51d%2F8t50AjihRFDmGcrQXy4I445qpaMHb%2FaSAJP9uL6DNMTTTYHAmaYsG2YAAWrmajfTBXEaeVN9nN5caw6Y2pXoqlDeJF%2BRKLU7AQGz4wlNiHwgY6pgF99TVqgLxeRDA4ZwVj%2F7MRRkmy%2FS5HnSxwYzGBf%2FSkUiuAz%2Feg8nhVTIn6T73orvo%2BIMJBX8s0ZMGOjCKkXGDKDLDNfZsg0he%2FaHEXHfgxPYT4D7TakJ%2FTrLTUmYRxOmcSyFMn7lMNcuGAPQ%2FeZYUKmjsJS4TTIwgeXy1t%2BtIujhF6RAmxZYhUK1Xttalsx4MJR%2FQpW3ihAyY84WCrTeUdu0blyIk1&X-Amz-Signature=98cbc1c254848d6f55f93439d29b640498360b65693397877b49d0f6fb128b55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ2RH27%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDk%2F%2BlIR6EKrE6hWbYhiFRs5KUA4hwuAjEjYJQKEvnAVAiEAmUqFHb0A0hFN%2BJua%2F66A%2BCtlfcnHDFvrUy%2FPS%2F5brX4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMLqY5r2qZxc5L2hyCrcA7cfH6Vi%2FRAkFQOd8ebKmFzOn%2F11SqCvu%2BOhz33daPwCR5e9BXEGEb8pipo8oTQNXqVz5OTpkFZomtFpxpJ7CQnU42We7KLMm2EpnnOQDbqBANPfw1WI7geUKTiHR96y6XiOMgbhcGgB8EUQU2WeXT%2B%2B9lt5ERqarm%2BcJY7Nu%2B3k%2FCdPJlSxiPeWWWjNa1B%2BsHbR9ShlG8B7yMKLxmFJM6dPVM%2BA8KDgs38X%2BTs7LsqmgdhEUqwazvyGSQwhAhHLYLljSplxAHqBYyzYUCcBpDwVOCq2criJHJcDcg8BZ3fHtomvNqI1%2BOiSc4dpRUsOriy%2FYFYbn%2BJSHFuB8trwDXKPk7uH395EPbZmZ%2FVdeKvOkL8cNzQ0SZ7yRqAX5Zps1S8TRBzLuRn0xpq7VBP8O5zZzt5MxqdwiJAaKMVV9hpNoElZkkDeXxbmTY%2FfHnVOv%2BwmelqrdpeWj5bTP5v%2B5gKxfnEYSy8J%2FcQ8bfi%2F5Ybb%2FwP%2BX0r3nChj0h8DGS4rcU4PIF7VTkeRqxZDnNmEkaq8Gk5UM7xsF%2FsoCvaPrg8pcWpf6s%2BxIgIlsa16SKc7azCfxHL3%2BYTvn2TB1N6PjTzUP65nY%2B3MJ%2FNi0ayLhPK%2B%2Fvl6CvvUKjjYR30aMKzYh8IGOqUBJ7gvz4a57P8kBwX5xRrhBuXOkCdgO%2F921K8SEEuxXaBQWILTZ%2FPI5cTyn7zpzkEEAjx1j%2Bfo4cQdJHINgnvWrQUlaBfyBnSLfEKlSbopOgKlHHl4H%2B8NcvF3%2BWnFZ%2FIfGZ%2BNw%2F0FIOfYEJ05U4g%2F48CmcWhKLcYxOghgGfTVZ8rwUwYKUiZirhpXP%2B9eG%2B%2BA0qW34V3LqV1s2%2BncBeL2u5nSCHrl&X-Amz-Signature=41029879b19fc2f4ed63efafed94e48708d7daad87f89fed225a677fa90c297c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
