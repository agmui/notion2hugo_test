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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZUKTRI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCef8S%2FNY6g5kps99tc8sZlRjdqqScS%2F4wcUSU7L6ik9wIgEDyDnrOoXf47f%2Fx4Iq7xEyJqkleF5fFRepd5O6nFaYYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1JFcQUdFmM%2BTncoyrcA8sf9lt6DcJwea8RfI4zjCWYKEJyBIaByF05lYL9OPkWRbHGveTCGEXlU0u9w5%2B4W1ajtczux97Xl1vm5HqE2pBqdUXAQtQiPh%2FC3nA%2BfI1LNT%2FNguVyJa4KWmr%2BPHVkB6LlDZFrncqPyQ4JAPrMuJkRH1eRq5qyYt6er8TSV0bjDyYcMJH6G9Ay94bAJkv%2FwHczkvJaDnBEn2560K16sq%2F6eJo1EQtaHpgzn5%2FkTglqo5LIMBq7%2B9%2BCbV4gyIx1Mc8cyXl71zdGtODHDosPozJokVFf7mTmIaEoOje2F2WK%2B8SJXgsNk4EN9DaU0zHML0bn75XJkaV9Li7b%2F80%2Bux%2FTQDGRAUfl5DkAGXMkQolJ%2F0MGMNJvOon5tsJjNw1ckRr70NTA8kEUAmDGPPOMLUIgttxhcixxfPhgYByzBReG0NFhaC%2BulLNUWGGaq37kf8LUuQuJmqmgo4XuFk8alHTu0jJ5K3o%2BxtFPg4m1vIn9b7Qw4NprXYTjgx9XkN3NXeO3GXCh6lQVLDDo059AAFGeBmqhFoYE7D0IAnFcFq6qG7grhRcQNBwFORWnOpjzq%2BWRqup5gaaoksBiA4DytrQpXwO1vPTAuH5krAQltGv7kk5l82sKWkyAM%2F7BMKSZ4cEGOqUB7YaDA2z3QEbctirVGxIZaaB9%2Fxw7tE1UvGwNkEi4yJ%2Fn6uYkitxntUXvSxNvCVjLoYPwh1otmE5thioDq5nljhJe2kivno%2FGZQoz%2FxygvgWmxYBW2JAKbiTtunBckixi4%2BN0KPHGMifU2g0ERz2QqF4zD2%2BYW2WSygQMZadV6YMRqYBpLk%2BGYpDN2TKZXdh6t1X7g%2Fxc97vGZYlk9UWMs7fsAJSW&X-Amz-Signature=74d9ef140d63b1a492ff6f77172bc7ca73c273c58d6bc1f517b05c0a7f6d6eca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFK3FAX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvo8%2BvZP9kK9FgKyMRhu7%2BWA8SnaDguOk6yafZz3k5kQIgfVsOtxlvIhKaiChOuSaobTLW1xj%2BuaVnRSuoxD%2F6bW4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATqIZiR8cUeo%2F%2BikircA5YhY6kTOnv7wHnzQ4VYOvYzCeJi5fA1xEod0snQs8TrM5zANU%2ByLt8wAQZwQktseCmyLNCsVvh2iRdP%2BcLZR1k%2BXd44uCjYAaWQYYYbAhnheYRi2bRNTA1D%2Fn2yV%2BtN1orBCyu3Tgs4VhtxE56xYxY%2FQZiSlL0sBq0ox%2Bn9Iu3WWFA8h1DxWawWWUK25G1llYCKUrdq0r8nPulkQz3iTGu6IcX7APPiKsSYID09zYvrXtYU2FCNa8CFfnGxYT4U13JPH4w2xS0q9IutEZQFzDv7Xfxjx9fYEsUmWiFrNR5Fv3aBXYJz2Bm%2Fq2tGsUpB8A%2BAX0jE%2Bj5AWLt0ZBLRtfgwD2yb9zocmaLHS6ebXOHMZUlRRZCr%2FdEbgWCYrHeHaOMdMaOm%2BmGlX3l4zxaiJch3wtNUPlyMKyMbJzLC9H0Gcs%2FKtN4UBE0wS2mey%2BGB%2BwQlzkDl7dJSUQ1hhZ9RH%2BlyzQGg5wT1chnIqyhxAqVmS6o7fdzgwDlMMEwNc7XlcQCgtiTmhz19wmvnnS91ZwluRs%2Bc4vMyfBq6XN9t%2BuRbT0FkmYAueessZmOzIO37G91G03MF071TY8v05DFvT0KIw3Nn3qfBtpzPOJtV2wyVDMbdF6Ei1l7G3vPSMOWI4cEGOqUBMvessQHmOGIiGxPpBd9dzG%2BUL61YrB%2Bu261AVDPh9YCuEUoyAyRjokx%2BeG%2B6j4uRUYjOy5xttxGYDvGs89%2FhyUJ0A2sdVIFfY9EZEfinNneMZ8RKpomg%2FNyqQuuszDZEAjUsBiv5SjQ02aNiyK7g7hRiwSD1hmjuNpUjSkDtmJ%2BCwWB0Xlx0Z%2BVOZOGWkdVhTKAu44we2%2BU7aZn48bP9j8RmcxGw&X-Amz-Signature=42ca23867060c71558636d2b35c8c16a47e17b7d17f7ea80c5ea262bc9cabfdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
