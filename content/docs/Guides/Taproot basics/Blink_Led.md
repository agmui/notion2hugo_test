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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJDY7P5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDd8t6pv%2B12XEa5vbjXr5S1jYYa%2Ffbqtn4qC%2BYy0DjXwwIgZJyH491W%2Btk6DNQFwnKIw%2BIl%2B9lfX0LmPJm5RvhU6YMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo8D2kXUKwawh1LHSrcA2tZdk5FKrNmjRPi0m9ne3Ydk5gDsA2jpiTwzCf%2BO0J2lHACoOBQuNcxnRUedrdmhroB%2FyZqt15CNTto4qa7PqJAVWUuLIB9KN%2BBRsw%2BqUP1fC%2BhACtJzl5Xkg8s%2FOthMfI9yyr0t6hnuWMHO68uyQ2%2Fg2P7lcw4HiwAcgNWzcZ6SEpX69iK7B07ZOO4b3CJGxBqPGCD6IzNfW9j6B4KyX6v8rjeP8fRktsRxfOeQb4mNVxGgCsUrb1JbdIoeSxVcbtV88%2BtlaNBw61Hhq9l%2FPGSXWYuEIMsmWzLnl%2B%2F3Hr8SwYlmD07W6UD%2Bfzf0DC4nzBqLxaPYTnVHu%2FgZPiNvXIpGc1b8PtD41KoJUaFFl%2BelGs6yC%2BCz9bP11KEX7ppf0yb4LcHXy5ya10jEhXcqh6M%2FTUff%2FdphfISDLDFuhmtpGJvaBQ0uEKeckfcsnyYxfMrkg8lYQD2WqnbSQdxpARVOOb2F09HijGwAd%2FFSdfX4UhA4j63nlr4E2jMxkTWngA1tbSUKFrV%2BGBhuYu5LFjZN8PvTz5BkPcX78PYf4pVYcm3ntaWExnbK009MbrmBDqA8I2M93BrscP0nkKZkgWwEnzwvI3iCnTrgxaMffADv7Qzc7y9qHzgoFGRMMWbpr8GOqUBcX4WhAK7bAG60%2BH%2FJeh9WjIFYCxR%2Foi5gRTX68%2BlpIi2bcAHW3GfaWYViBGBpfgqd%2BbHRSY9UtKoy7H77d%2B44U72GtsWzxvTDDolkguj52qHVKIxq6QG%2BJyJm6NBYmnPhXCodbNCEcshfUzu3Z%2FkXWefNn01MhewjaKkyXMh0%2B26swquxAC4EDkaf0BntvZrTdK3muQiphwmoBnyTkiM8kFL7Us1&X-Amz-Signature=c0816101c0bf16e897d4157c5c1ea6511a47644ee7cc449e49bf6645b25bc33d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDA6LC2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBfygMA1CoeEuW5jVWxzwz0wbnRlJlISKCsjoluaD2I6AiEA3h3lCBTsTOo4nU980Jt9KtRYS9OY1l2Erpv7VMJfN3AqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGonz2EKxTSHJzPTqCrcA%2B%2Fp7SZcXP%2Fyk7HkLGqpOaNhYn7ZAu6XPQitObrUtpBO%2FrIqjCP%2B5MdvjM0LIaB3RrM2fOg%2BAOkQgpFnNJSAWff50LWFWSayNjJb%2FP9q8OUP05SAYMPg5rVz73TfZa6RyYl4f2Kaq0ZpWR7Hqq5OMjA7T4f0FqRz2gb31Dp3UhmS9MZLm5XqYmZtnURiAj7k2iewYimgZsr9ZRWCQad3KdXamx0OTsrsAJ6v4B8fYvX9nbdWGBAE7xtVkeIxDPQa%2Bu7IdLPZTmrnNTDLQsnGy7WSxedRZ2bp3CJ3K7ydOIQv1BH8Uqvoj4YBNo9cyCW9TfSd%2FNeHNkJw9S3dvN6hMk0GDyVKiwi6DCrbJCDmJSn5%2BeYOsD1%2F785rZHSsSSU5FY9EpyA%2FekLuPYtyhy1GQxKjJL4d7E9gUEPPUiObCkX23GLbB9TaaKyLYCh1Pui6e%2BGGtLtEwGuLLy3v6buJFp2xsO%2F0r%2Foj9sJAKY3hUCmnit5Ag6Ny9gnpOS4qKcLABYazHOY4ti4x6eey%2BFKiu51%2F%2ByOZrpfM1Whrw5sBo11%2BEDsYDmWu343LBAwXTw2NSGtaPSTH2TzIxggw9%2FPwr9axe4SKVcvgyRqjdsyQtR6gfMci6urj%2BgBEG9VNMNKapr8GOqUB6340X9hCrPU%2FjMlNweivXBp86Nkjo5Om87yHX6YP6A99eUeLH88%2BDmFN36K9n7p2MOdUzSoFZj6dM5pE%2F%2BYHckHfPnXdgYFDGdtj2O510%2BM5G3IgaHG2xSRAaNtujwd4XGF%2BzXY1HDywJAnkh1qJ1EYZNyxJdE7xuzrI3K0ngZoReXKiRBK6IXWrDDxUgUq8%2F8rKBbfwrFrP%2BJRDclF7iEpAN%2BBS&X-Amz-Signature=fe1b695ef4274ebd928d63c79e6bc5492fae1eddaf9f1dd9eddf32377f38c74e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
