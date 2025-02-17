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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGNLTO3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCZqnuhjSQfTkOGhlMrqihDRdEjWHaJKWwHE%2BcF8F%2BMKgIhAJbpD1l6Bppju13LSdlMapvEhMKdDR9C4%2BKAOtLzatEsKv8DCGoQABoMNjM3NDIzMTgzODA1IgxiOzKPH2Qm2IE8iBsq3AN5a6F83QHtno7E9M5sr1DamekKY0ClRsYpxNj56%2BNogYvRbfN0Lmjqx3D0JPsuda7ej3T5jA1M6MikqaQ0kI1%2BQPPNCbXFsmBEBLPUKrC45dyr7ryvKMM371w5WRe4FjTyuyZjyeqpBER9oXLGX8YcekAbh2uXhbKWre2L6CfN2URFlVfL5cajfuuqZl6JW16gY15pDD%2FpEm%2FGRktcpZzW9RYI2BZ0q0viZZD%2FiDa5VNmbEFp%2FN8vnCrD3k7p6Qj0i7bO5a41GKq4GLnVkqj4LrbTJpXGmOhShPYInRTWkSmLHJ3LDEBHeEvoaYKYw0rTPSNwA6mCsWLq8m5XRPXATZSdhtsikTGbahAq5T5GGsZ8n4OLUg67CzIaLO%2FvAPsnYOxyq95o8DISpbIeWod0XewICgnp4jmQkUXx4Ig3o85CNayMMBm%2B96SWPCfqok2AbkFwsJBWRAulvRva%2BtgiqAkf4l%2B%2Fl3cMlv1qb9EdL7EhT8dc5FbIzyO%2BrYPaZH1v9d9%2FkrxrDhY2n1ejNIfK9rOnlZshQSylAhnsRTWeugWizv5GKP0cV%2BybpKxm1UJ91rbNNw2eohemWBkihaRKr0G%2B1gjlz%2Fw8iD7j2zd4XzDPUsaLx2zxJMdbOCTDYm8q9BjqkAWblU%2F1irOS6MmbwcwXKJudTSHcRmSpzWrSrnSKkT2H4ZzxZbmj8Gs7kfvID1TP1HLXQxmaYlwep4MRGw1Btr%2BFTuyAVwMViTeqAWCFKx5T0IG8m005o1X0%2BHJbK0jcE3PyfDfaN9gX%2FwEHjAcI1ChscWvjARy8%2FxZfDBfuVm%2FjbbXlM1Emc3W6YKhGEMzI6OaojmUgk5JGEf0uAeLHEo84t35Iv&X-Amz-Signature=591be89e84f06ade2591a738805a85868d2285ecbb72bef832636054039c705d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AROC4QX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCYQ3fs%2BSpsx7Ux3dK3apIryoiJtqsT%2FQOPEZTeDt1m6wIhAKmJCgfvxKUrDVToKgBaI5AaUqUsK0Vr9weYK3w6xoFiKv8DCGoQABoMNjM3NDIzMTgzODA1Igxzad6qwW1a6rwFbOIq3AN7zYOPXj26pxcp5v8V%2BFlk40%2FF%2FAxaLWTeJ7GBJaWjcrpOPYwkvLTXGwO6Kobt6VOSuCk2DSXVlt48SGxbjH1bihbuq6%2BsANaVyGrTaNkB0conK%2BzICc2w1WC8bx0lod20xliiMuINXYTqW9XNLf9GL60p4UvkFFqkwAv7tCS5QyLq%2BhodACG%2ByKHj0z7ULAO2rpbibFH6dySdQR%2BQakJh7ghZM%2FMaGu0Ql6JBRtwu9ERzr3JB6WbvkjsN5aSUEz4of11P11XyvD0mGsfvHMWst2TvS681tB2dM6LzNNNvnckpqQ8QU5YVDhKyOKFgaij2e7hjFbu7GjM2k1OYtHeEg85iC5DCX6ukCiYZJ0SaD7rppUeupELcsx5XrCqoi79d9fpPg60ZT5QN2Qs%2FtRl%2B1cPN%2FiLMnEExdeBc586I4AQl214C0k4SyYlsNo3dJFIMgKwBPXB4eM4beBWZ4e7%2BT1SUhWOW49bL06cyTMmXbMg%2BeUYkuwuokymhHtf9waORsdBtXNlKKSW%2FC2FxDU9rbTzjEKlnBW8smokrDg8y4mvAulFsLtgcZ%2FWlCCbR9OhbpvGeIWzzRqMWFHSHEFTgIK0EJV5abnxffig7rpmLa8uKtZRWh6UMCfJA5jCbm8q9BjqkARh%2F4T%2BSgXG2TokH4cUipU6BVHhdLtl458LiqRQtcK0tukMkKQVAeC4lVKB%2Bqgq%2FpF6vLpWgkCSRgdFuBtGXaRBh3MxqsA%2BVUSgXIAE8Q9VWowrxqo0VbGgkmL8fAVX7qORKuqGmQo1DO3eOa%2B6uXvrTzoP%2FUdXqMI6J6TmmW8kmM2bX24kWT%2Bn2BBjvasE3G4cblh83d8%2BKS8C%2B%2Bjr6sWMj0uHJ&X-Amz-Signature=97e155816bbcdfb4601162f6b942cab86c0b384c020ec0760df40ac3fc9ebf43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
