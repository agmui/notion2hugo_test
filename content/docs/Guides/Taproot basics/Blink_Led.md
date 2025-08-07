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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42X555T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCyPDbc%2B01Trh4QAz1njKEwQ4IOm3YoKMR5zZ1G3DYNFAIgQHpLvcdE5fAi1tzz2HfJYs%2BvCegNX0sptcnUhAZ%2BwOUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyEj3pk%2FhLdfl9ggSrcAxdkRYTrANrj3d3OioFF90Vf%2F7tyv6KfYRu0UZccjQDSsHlxvoIBQrpPfaXnPd6jNQu6olLhBb0roAzYRtOc40wTUo27L8F0HbHeI7eRIyFYrSYCPeWrJMeiGhb8iKeFHhkswJYnPWX0wKXeD2QAmnZbyR7kPYxuokP2Jn6AbHRqPWrh3X4o8u9RPNRoCzV9JYP3SZuJgEGID3hvBFGONWGL77aJuFlDFUWaroaoz4hPmX9U%2FmJuq7ig4kjZfH%2BLQX%2FOT12kEiHWHgbEy%2FACoODah3DJof9TDEfG7%2Fk3Wu0N%2FybwENxzlKENlk0NpcbfwTR%2F8Kb%2FNe%2FBFqN7pcq3%2F%2BdT4JEyo1Y3xl2x58wh4VugnbIdUPrKHHiM%2BH%2FxrEYs4hdxtPsr%2BgWzNTcMVBOezCkfv2wLvs%2BPNPVMOh440WFBt%2BMP7W7qQ2SkIOVhCw2l%2Badti80j6Feex43vhXwe15Ib2rSmY0jKvkPuL0%2BM1HJ533pFxSVzZNeHmg3hcWn0C%2B4AOQPcOOTj9KHO%2FC1CXHOEszTGiowGbeU7pPDHNOYDn7WQDROtqaI8a5p8kbbxMLqQEI7xouWKX%2F2smakZR4JWE3CX6UqIlN%2B5DaaDF87LWHLnAgxwV5gUURFbMJHI0MQGOqUBfXJKT6G54HaPveckTlJnCOZxsTqYbw3EMahPk4VezcNJ0rQdLA3KmTI4BgE2gmKe%2BevtsWMVklkAwL8QfLE5QhFB%2BOAPJH2zTGDXIL4PgamURL7K4LQh0KzR%2FBBjUR%2BxSb331yZudjKknfkxdr2MLFZGgL2g87%2FLkurCsKo3UOwOUrc6XW%2FQpMWsbL2QA6QEnTHOKfW2W6Ydnl11bHUUblT5ox3y&X-Amz-Signature=c3ebbcbf81f79fe2f8ca9174e486b507a5eed43f9d4a5ee449cd99b7b46b094a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6ASAF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDflrDwMZK25gkStWddf%2BUUhyF7jdS9v2s6FgxPJI4cvQIgSXk%2FRPt4hGSdyQ3K9ZpWEAvezFkyoBAJXjBV6RaBzQAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKseAJA7IyKjcByXCrcA2bfeFCrxoh%2Ff0UNCSxvhVE9M68yUH37Ebv2CJTAT6IVYNezFNPjicDw%2B%2Ffyo8CYRmnJWQGs7yt42%2BWZr6LY2Vzs8A9%2Bbv9CIrkYBfFG0RkrzmlMfdAwz3YNvneJVbhmmJoCUESzz6TuG9jKrll%2FCkDYtvp18N5XGRcNQwLOZ8Mnto%2BRw4nJIely%2F%2FiUmqkqXZljV%2Fr0zCYugzd0ezmxsnnkCH1wNwcULajx5TXsP%2FFgWBHCos3huzS7p6Sk%2By7bsIZpdKFSoGZLCD6m8lEVG1gAhVpqSvcKw05H70X8Qh84n868vicNyPYcNow8%2FOc%2Bf%2BXOxkBo9HGWWP28jJakKJqugUsd4%2BmNesLsVDJQx%2BbH0FFpUlrHDAhl7OIyvo5KIEC9PG5VdQrmRzSs8niAR14HEpVkcJ%2B%2FbYHR4V6ng%2BXmuAYfLT1NY50OjTmtd8hvshnceIq7n3nym5KDSJT4xXck1XJnopxRxLvBsKJxmnTiDwGNt2JROrYVsaqU3QW3DOvQ2Rsk4%2Fa4qbqAFWx3T2HZu%2BC4XyGO8b8FdIXUXr8oYaWmAUXIF%2BlizC9S%2FOX%2Flk9OspCu7kcpc7z0kb%2FkWewG1LQNZUMAazeqER2xbAbl%2FFftNsOpkC28726XMK7I0MQGOqUBTBb1zKEh4bIX2pEu2qjKyOS4BqFcWu%2FGhETnT7bQWXhk3aRh%2ByueAXeVvlpGWamKTsDzF%2BRZx4wgi6Qwo%2FcYA8RLfXMAo2JB4sh48FMsSqNmxBf7HcC3soDDqBwNDcbje%2BfdMVH2CSTVuK99SPkD6%2BzhCAeHoLrwJUyv1poiG8ISG%2FWSdJpZvtSpYG%2BInXa3mbYD4JD7lyP7Bym2xn%2FxdmXenZQz&X-Amz-Signature=4e2b4d2c33f0cf9a5776fd6f1a3894d451ebb73db7009a3b77563276c44c93e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
