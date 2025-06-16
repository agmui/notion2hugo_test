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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YU7ATXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSjK5xTkW2HfPmYJcSWzfTfp21yMMnDaVCq8VKGFpYHQIgYmZx34P9JIxdZFxKBGmx%2FKEkD6Ijw57CgOw3UHadGvIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEt%2B4%2BtjY3gCXgsfWSrcA1es%2F3WZAESUAjSx8BXVv%2Bw6NKuz7DC4kCQl9r%2F7Wtuhbkm14Dkr47WXtIUoMTb1mzntFH3MHSr7wU2w3ege%2B11KS83Kj4XiBn9%2FQGvFrmeStAzsTsXdWEm6zO8GD6QpVTomJkCv5POxfkMpNlS8QZWOHPAjNI%2Bb3ZNo3Dznmo0QFc3N61ebSIKmMda4EB6J8CfOXOIkrJROJ%2BumkYuywR%2BFDGfpLvJj6vsYzkqN2x0%2Bi0q%2FKnaHFMB5YLtx6%2Fk8zlp1nEI0R5OEmpFGkWZolZVUngtkuQVf1MOs0zQ2%2FznZe%2B0xSwrKrjHujIC%2Bm2jM4TAIgCz9%2FjbPIZILtJ4J9KQ4%2Bdfd9MMrVozaz5qpfV4JGAoMFaaKE6RAMjdHdYZFJ7BwpWBhJJd2Hwpn8fAWdg1%2B9uQ0o3Brfhvusq6v7Nn2opbKjBmjPvw77HLhKirczsXeLIYBpxB6KbYVTQd%2BP7%2FlCkamSWHO%2FG9%2BKioOCQCnkNPwdzlVdR9RjJSiDMQ2VPGE2wD5iKpl7lKXCDLv0sm3LzQnQw6wfKXX8Q61WAD%2FDnXvCINBhl6eGjP80Ksjqhhgy99YB27M3ZG29kxygLdw%2FLz8R9hKCsWv37PPrq3Xtnf7dqahcSUV9mw0MImJv8IGOqUBl%2BXJj0xXEy5yoa97RufZFKYkjbNcEBUlvC5BahwFjFXVNHPiPxRlfXQNpYTHq1P9fXgXiLmmR1EtGMoDde5lzY4ko1De9kVwL%2BrJYczAv%2FqJTNXVoBMwJNC0AmT2A1YdfTkpsQZpNCoFhzjqfnjR9SnK0ysfY%2FTt5we3vGuWl3F3PwKHr55wEaYsSoobkTKYd6fbJmS%2BMfMvGauFJt6RRw1a5MZ1&X-Amz-Signature=86608432844ff8c7c0f1939763cba87a5e11ef3f143177fe717fc6767e2ae839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL466KXY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDdOUyfOFMOcSGQxbSfOUy6tsbZC3vOlJIBighISnKTUAIgSd5MwgrmkXhn6p8jJNOC5j29r%2FB0Cyb%2BRKnVBKaJKbYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNP4gTX3pL6KWU1unircAzDo%2Fx63YmcRbG0uUCz%2F3Jf4PexRJGOxyC6yOMfqH915K%2B9LvjW%2B%2BcJznHcyYsxp9f60nvPLR8NJ%2FbHVhci%2FiDrbSPKIKIvHivOlPY9tyTuyqwwJDoSKNzuAwkJVcC2NCWdAJi5d3Yy7UAVPzESWU1dDjUFdY1MsCslCQoRe1upB3B384Cuj%2F3S5gMifbazvMT4nUDSNkUMBcFTHNT3pJ3kFiqDfLszjynJSo1DMMhztSU7QKjYZkYbeEX8fQ3CzXNsC%2FBnpAvGYs%2Br%2FnER3XXpMq1mLIz0Epv83h3BDxnZUNCn1LR6T95Xhh4KQI7m81DwHePbk3GNXz8%2FtwUZ2XlyWUUSrdt%2BZI2VkYshGMw5As9KHD5nF%2FRC8wPTpPsB%2B%2F66vfoOk%2BgEoVy7tdlkiaNWtGGyo%2BogcMOvbMH2bUEVZR4lU%2BUNdoUnKww1ieDuWkZmfiwISKyRXI9c6D6xgxegMnwgDX4KHl37gbnm6Ril45xGirxXRxSGZl6opanHQT4vYkaW6TEY8qzmp0%2FEOe%2Fqjyy7BnbWNHIGUPdKOULzdf6HSh00FoUv5mZ1sHz5MJD6jFZJFQBv5isv2dzbU%2F3McOZQ08Aeha3UGDcn82oD0aB0q%2F6Ex716f5cfIMK6Jv8IGOqUBbPImjY2ILfo1bV9%2FGykdDPjx8ohCtTyonSFIqhnutLv628rQyF7GQ9Mepq%2F9pb5yGnkqTkMK5bpsZNLUNT%2Ftr6vC2S%2FaWQ2Zdm%2FAMJByAlBwtCOiUFMoVm2g3EXs%2BIsOZUsZNPrw8y7YvY4CdJSa2yZh3zFHAet6VuUicIcEuwBMwgPQAH5ENsrZiBYVEGP3r0%2B73bSQy1pcTWrmhn3sS6G1%2B5HQ&X-Amz-Signature=9b80a5a4c1063e2be11e48bf4094b74155fad8f947495e5b78631677d3d982a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
