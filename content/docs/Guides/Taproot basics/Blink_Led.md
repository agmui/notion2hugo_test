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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD45WAY6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDo1t6zLbPwYThREoYrXeIOCEM8O72do20Pq%2FrLfuPxfAIhAMiPPRiLBXGIDzbWXt5yOfvAb7c665PBfNzKZo2FmDIvKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8pt%2BPCHqNySyopFYq3AMTmXtPLDfsLONvSPA1Di%2F8Jyux6d9gWSCcD4%2FCsf8YBwD1%2Fp9sVra5%2By%2BJHNNY%2FllzHLOX6v%2BWhhYPleqhfU04lqt9QG8kd77kFr01zH07rSuVrMh8R7Rd2We4B6z9b%2BXRH%2B9RNb%2BmC5HkQOceYa0Xgv4LtGNrXfeJohQbyoe8yY8Ds6WTBFBjPNKHRUnEjorUunHf7SW2mNBfW%2BrhejaMmsq6dYu786y%2BaxnKUlnTy88F%2BqNXLiKfQAjfg6nmvqWKwEOrLw65D28ZDHlQHl1EL9N%2FVpLuesirjSuUvwwmSFNkm9bGvmOBoPqb0eY2OXSldQEVQrZWUCB8BAerM4MRL5X4iq6QUP0c1dWmjuvVMY5DOgFp%2Br2GhoMTEFmuLD09h58rvWbRlGnzMr1RRhITXjVOwsUA63PKpL8o0aQzFME0IBu93bldRKpeEsPN%2FXWI86N4UhLEsBcRQjfC85G7AOVWXfQnbaDcezIUWxlFMPvIXYB2ugxB6HM3yeVyND%2Bht5xHeKcwQ0sLoRuAL6hswxZHxzyx2CIe8xpq2EKTIUI6Cn9iDaRt1qAKJgF814oxjVne0e5%2Fs%2FuX4wLZ671O9LB385jh5nUjBdFn7HcyuQFKEKRf6SpnjQp6ETDlvYjBBjqkAQ8RC6TJVwah5kB%2Bx0ARH9ZE3D%2F%2FF4AvqpYuoH0pkEit%2B0tb%2FVfIiJhRPdcj29ky1GbnMkpnrcvAE24LZ%2FV1GEOaRjYipxqpPdjdxpsuLeemqmQzKqghtZsREdfJwIiJUuk6XLaLJp%2FJzDtoJ%2BQLg35Rss9LyZcW%2B6G9Rg63OalDg%2FUQt7Q%2FqHNEnqGZ0BSazg56oBBtRbeAhHOWIUlBGVx2Czds&X-Amz-Signature=a4ba2145bebc9e2f09893e938963ccb0e3caa182a64518afe4c2b1b3b8b685a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOEKODAD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCWhuVJXwOShccPpuVNSnstAGL9%2Br865sdqbGy5vZ6nuAIgC0sGzX8dUSES5EXEiaiOQUtpDizuXb7DrxqypNqQa1gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6sXZ9yAQ%2BoYBirmCrcAzPvpxt8g5fDRNsVYtJOT9puH71wLEAfm%2FPSTvJMFFU3hVjNUYixxksNLSH11wxkUh3Z%2BuWdbSSpw0qYek5MDzQgLDwyfvyS0vQfitoV5UQOVVYMYHwm3N5%2BUZqAnlR%2FHATwuv5Pu48CE%2B1TNnKEv85LQO23APoEzW%2Ft7k%2FEnOGXs%2FMBvnxhIhVW4SRM5Wg%2FRzSKDIUkzVp53D62KipUW1dDA%2FH2H31D6iHxCfopO7%2FdZjkMz3zZXPP1isPrEYd2cUPAlFV%2BM%2FeqTmVREf8Eld4z5xclzPD%2FQiNUwUUiy73s4K%2FRh2NfG57d7VQ1bPduGUthT9mWbI%2F7fnA82NwJhh05gVUyU2B2cefMomnCMf8r%2F3xxWM83EOPo4mU5NgGS98crYgwvUw%2FUahWai10ZJ2gpmo7n%2FQHgs%2FRD06I1%2FfQMJx%2B0GhLQ2n9Ac%2FFJQi%2Bv4p8pE5kGHy83RG4%2F2FmT4OWm8ty1D6DslhWnSJslLtyGLc9s6lS2aOOURo4u5jqXmEoOWz8MKqr7%2FHBVzD%2BD%2FFw7OH8KXlrYzOl8RCPCIesAkGayZcQBFMkVusrnNDb27chM0BPX9jRErmsK3sOf2d8wwzmwK6chDwl%2F7Mxh2sKLnfes8pXHdZTW52uTMIO%2BiMEGOqUBRdgWD584Et31KAHm6Vpfc1hR456%2FmU9I8AlcjP4WyhHrdVbSTQq3QepILt9XNLWabD5AuGa2TNaBtuEj47jMv3mKzpDpeFSqOwCMbES8GNcWzFhtA2TGzBA3BfVs4%2BUYOeySNy%2BiEky7wWjyo%2BQprsa0RsCvzZn32c4jaSGWj%2F8mnWBlIIn%2F%2B2rxSrycR5uksIa1E1d%2FwYXC%2B94eVTRBeggrPAv3&X-Amz-Signature=11bda3cd53ded0fefe38db3604eb70f0f24490d1a81b97f5d7dc7e429b877b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
