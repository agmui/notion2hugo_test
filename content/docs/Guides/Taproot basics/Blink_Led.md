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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZSEHWJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW692ev1lnbJI1ttqk9F8EpUOPk%2FgZNsBF3q53rRrgWgIgehg%2FoipOSkrebpZl1JpkWImYheNFG7QusMfCZVfZFDAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPX0VKPWavPr0mWvxircAxIMvRyfURSnhwpQtgl%2BVJ4o4co5944Fs01mFzPgZ5VlIkvGAh8WOOw7icYNeRFCsBup%2BpzV9akb%2BBE3may54u7zx%2FolA7LaMbe7I33q12j%2FYXJPT2jVLIULQz%2FlcvwuToyQyP%2BbT6xMUyPlEfZiogVMnYj9Vx5qJmvWIREPe2D4NytcGvzD4zSHxd0DOXp5UeOoSH76GGs6vUSg%2BJHiZH35jv22MCnCXZm8hI00s2Sthz1Pa2V4IX0vjdXghuVKVuhBjJgc76dcPOs6BQqFoVUIGeL7kavxy%2BXJ5IDeT84aGMNBHczjeYIhj%2FRiHYdaIuiOal1TQqtpr8k8pwqcdrteR8qRXQCYlB3teGfHPIefSeVG%2FlmBFuy4wRsjY9veL7NVsXHuP%2F7M%2Fyh5n4HnnglWGg3JVdy%2FmURkzuVlwwFoJEMbXD4TJV0ovqTnTlnujWO%2Fmz0V%2BLpStJov0Uu%2BCERgNvJvGnH9RYKi4ZwquKuB8aoz5TL2f4J4FUxbc11CcXLJfmWZKW9S3UIq3o2efbLQrK1ja5kuym5zJgKUXBuZ9wqazr3BcDBKVnnJuZ2hwpcoGD2M8IlLO2aqL7kQWrrLv9cWnR6yQj9pEVBtruwXRNxo1nozEZn6%2BsSKMMiP9MQGOqUBw6WhyrJ5k94j1uIrXuzfnwmzLIqQ3kob%2Bux3LC7EXak4CyZXojaI29FJE%2B%2F0CBH8jg1f4JN%2FwFRTbhlnDOFtZZKOrsQB46Ztbk%2FpfZnKnP5cp8Y5YoschOayGMyNesznEG3uWWn2%2FzbjhDBIn8qP4jznGPHs%2FYKoRK3gD128zp%2BZE5vOaepTpR8EP6Sshvbsp9Du6L1wiHXWhTidclZH6y6gnEa1&X-Amz-Signature=3bb58fa6872c04adb7d7be1a8c032030ada242db1055a608c6cf001bee208b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCANZF6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCvAe58n1OX%2Fe4KYkjocxu88C40f5YV3pMVz0fcNpgKAiEA9JmVorEbe7rIDMO3Bo8%2BX87stkaHYVS9Te6Q2Jmd%2BCEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOTPl7OFtBM8LJ3WMSrcA%2F4Vcyx0lp71r6UuGEK389kHq%2FKjAsf81uM6CJEEOuWaYtkQEM9zoqI4ZjlCgz0SXZbEZwR8ogWKutFRgjW2QkddzzJDWKG6nSWla609R9N1nZ8kCYOAHVERKhf25jzWDSa3Uo41kpd9zVcCq3GaYCSLEGAPmbRt38ue97mKBNxIO4TdChTehylfD3ZVcgVkc7g4zXYuWyrD2cSEy2bWnKYnbAwfY3bFSP%2FKDXChPo59xn5m3R90pYr49Q%2FxUPzcq77nJ4O2PyOY09bMRTtv5wVK%2BeKcWdu1Xw1t%2BFavL5HMISETFVFnf9N%2Ff%2FDkh5%2Bc5gb8%2FoBJpjciTg9Kcj%2FbA3XXw2bum4d1RTfzwBgQuWqCLF2Dh5IfJVibIZe%2BUCHc8naTTo9Nus3dW5bVhw8lJKIZlt%2ByP1pjSMcSJEiPYvA%2Fm0CfSHkMZce13qC97zD61NyD9Vs8ht5hjrru0aEPWYmbxnMIcipXRYRCFspfE0cUtXu2XXlGQA9Q9nSzEH49T3OuSn4rIvXgqe2PHyil979fUxTeK49Q511Ivjrrb10aezaO6loUILoAHKe7Lh1h2a8n5I5h7bgy49D9qOesBS%2BbSPn0UnKMWHOqqSAk6jLkxhWGNRYzq94gVy4IMLaP9MQGOqUBzzMM1yf4H9JuwPLvGbjngMO%2Bt3fj2AEw1sQskVusWx2tlVwmlzzGO7Z4%2BnvPWkVzV48RJ11nxi9JyIo%2BHcPZeYEBPerxlZtvpwGMrK4VZnqO8a5qhKpBdBqrqEcQd9m2AVxRLknDXd76WQzmFCnYQn89mZ0Go9sLKYY9UcPbmo8fdan6EadqIXINTmA%2B0Yom3vaDWlQZZl5NihaHHTxrWCw%2F7o34&X-Amz-Signature=ac82541e57a78f31082d69d4018efcce0d18969b9cbda913d206028fc6624784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
