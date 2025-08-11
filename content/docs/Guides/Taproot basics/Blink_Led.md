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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=0715f671a1536dca07ccb796d072c1831752d1d272b928b85ede4b783f106a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXWDNPMV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWlop6dK0HyR2HQcYyDLVigdVVpM3QcW5hWx7Mi8GCwAiEApP%2FKmzya77%2BoVDV90zRGc7T1fXeXiIaV%2F7FgJmWMSq0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzCDETmgqLKKPZ0qCrcA9IIBkgmrRJdX9%2F9RFZclklLgKK9CHkgfdPTY%2FgNkGm2atJzCuRtfdYsTLy4AhTTh%2FaENDf2Xnkxqyaf%2BQJMbRjeCMAIExweGVm9D0zQyRJWZ2G3BdVJOwvubXlXwjx9H9sDc3rnOxngcY95WK4d5ZS0F6CIK%2FgBedvMpnu0GnVtQXIU07RqwXiKPoxuonyqTNEi%2FQUae6trao2RE9dwxkGZFodX8B3Pge5iSJMbNrl86cKSEj5HD4IcRlVSogzUX0UyOinbNZ17%2By6YmnsRnsdrb%2B7n4kcKKw%2Bc757dd1uQ8Tw7FdHy%2B6n%2FUgzk9H0lsY%2BD93GEc%2FU3t535zXfWDw0CBWQhuYbAS2sXL3xprixh2MIiAgUXCtb9Bxsw1ZNvhg%2FbYaIBdiyE2xmbj2b8wSn7uS13lqs86qdXMB7UkkTE%2FWjU%2Bfhn0HRNBkV2S6Z3fwUZaXU9QMwEsYPPNOLI3oAbD%2FrWLE3r3zhO5RoIfRiAqDrSEtcv7DEFieSaDjK%2BnBScy0hXoUlynKdE9AN3h8hxwLiwuzRve%2F%2B246d92gLtohyYd4Lml%2Ftepfu5NUoLaLioipWVIxqr%2B%2FUmEnyIUcihxcAFZuG8%2FCwOqUYmx3EPQyA81aAZJyuwylZOMIud5cQGOqUBF%2BexmWbUBZag2%2FyPAulKXoL8jRE2wadQVy9mUul4ZszZgjIsneUqKl8D0cNMS4sOm43LDp6nr2OXM4SVGY8E0CJIxvcc%2FQwzEPingDn9YlX4R0evlsBJcIDzFyreyd93jJOPeMi20vqHJ%2FThlgWCRKZWS91GMmm%2BTnL%2FpUQ96d6Gz2cmP%2BiaU0UyD5tOVaHrHuIK7tgWN5%2BVkvSeW3nUGRZGNWaR&X-Amz-Signature=2d2a124ded9ce17c3f4b6d163a79f9e57d619e5bd7221ec50e6dcd07eeebdf89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
