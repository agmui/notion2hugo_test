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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFGRRQH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARwZSLr2YhV8y%2BfHJ9YJo5N89Mwm3bI%2FeQxM7cuFipuAiEAzjzx5WuNRPy6Wq9vvsYI5mXk5TJlqCIJMoBbmtB2bcMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYOkUj6ftgHYjJ%2FwCrcA%2B076rRJaI0v4y2xE9u1IoehxhpEqMKoHpN8Zk%2FJcqtRK8RVC0rm19hXA2vVYuDWRjSZEHAW2TK6yz6QX3XYngKCQooCsWE0bwURanZPgGIbSCF%2BAAf%2FcZ5t31Wit8ntfkHe59B7PKO6EdGWVPJdtczN6nFvu5nm6Ni2Q5fu%2BtAILByQU6QNxLo6o1XTMOCFEO0vCTQlSOTcBdyLBXKuvHScr2al5Con9Q160WTWzC%2FI%2FG63xfn3rSdprAH8jlwgFUrfhLIhz0JGLHBZQyqEMhJtUFuI5DESd978LEA7Aeq4IIinE9Bi0w3pvlupkbOjVFVwEK1GEK0XS1mPYRhI6Q8%2FXoJD%2FCB5UHpYPXr3PFlvj8Z8xylID3QIdcEFHycAaJQzinGTFcb8DBKmsrcSmkIftYGhQi2oLeI4L7ndag6lAKD9JT0PQkkM5ntJ9HIZWrVdQyBWwPN1L5mHUwRF7SqTqSO4b%2BhtnOr%2FMYTRdO8Owb3Giyp4hpU2IBk2BiH%2BW%2BsuqEj3s2q7We1mKLARgVS5V7cTltHVav64ABuUHbOy%2Be%2F44PiPKvDB77jPqZ07CAWl7eIGqy2SeNGcwBJ6nfzFCaPJhAxlfJZg7DaXASR%2BJoSp0i87Ao36W11xMLTbl74GOqUB%2F%2Ff90N187wc2Bc8z%2FPAYd718zkowRrrCT35xIA5AmRv15alVO4CUngpc5tBPRn0rbRbE9V1SXpYdSzOfhh2LPgJNSmyZabQ9Hw1Tcn88vf3pwOh8q%2FTGprbqxJrCDPJ6wHyWyOqpubgwTpHKYXPSLFMYnvAW7omWZxWRZHfp1xZJyr%2FAJV3%2BbX%2F2li4%2FAyD3cPEJQCJcJ2jBWVE8EtAr0NoCSSDe&X-Amz-Signature=c2b68bc666bf71fde96c12d55df5f7a250218931423a8730090f2754f8dd2bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NUVWE5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhWgU2FyqVxWWmSGBuNPbRUNiQNGSEEejtUANKqI8lkAiBinmnFsSLJoXlNAcSIVAWscqoGTeEIao7Ea0mpyZZ2VCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5H4wqaJNUMLYh6dKtwDMPd8s8Qu4pWcj6%2BZRjLISnZVYHfdkJvhDjSKnmmlc1wWOzDd%2FYym5C9dmEt0KpbWJKjduKwB5gSmk%2Bn0MTJP0arr1CIBY1B8%2BV6Y6QyRTbVsU7c75xuTvHaeqa5W9RR3zyZZMZoY67ulTKB9jqyC3SNeKfS1QCC1GsjA2BGlINW73sC9SwxFptFSsfsnyi%2FrxfTldBIXiXgBFkHGyIvizi3ingTr4n1s7ZyS3OX28fnV40%2FBvD1ZvvMIbKE5yb4nNcp8ebTKmJZVzoZEbIH53CMREK1Y4%2FwXmcTvD9BduUqjYXbMjTWyVmSzxm%2BKpom8YWi8Vq8L%2BFtIo3DkyzvcDSYArPO17k%2BRfRqlfXq%2FDcRW0ZxCtp39TJ1RQLyU%2Fb2YwanwMVZAlnNzxSBlTxsTElHoZC7yRMXPY4xVARbuV7H50cUHQt6%2FNnBIq5kH7rvJgBi%2FO0A%2Fe6WHNruJEfCYQ6Mr2gAOGxYnKp8QnF%2BnWcP3PY0XNMSUBVBjLTVpDKc8IgQ%2BuM9AgWrESDfoLOfMK8r29yj31yVrdtpB0QAFxLX%2F7GWPa%2FSVWP9uwKU0NKcZtquys%2FbdAHVZ%2BYAY23UwTWE9irzTPnCJw3MiCwTPrCL6gs4L25Gmk5I3D%2B0wytuXvgY6pgFqMp%2FtKH5PohVEV9QsLNVUk8LOHLTiUFqlVYZWlCEZykuBT1bVLJjZwL054pn4uL6TbLojytpL%2Fvg%2BMQgX9OGyGeVkYNcG70hEL302lvOGZBFoFItSTLu26R0szUNrAo%2FN0kPUOxXESDOBJ7zFxds1VNZSidx2I1Z9QixlYgheSb%2BBJSHVS4ujdGBvyNutBH78C4iCkBg9kddrQJsX54fIup83kuWK&X-Amz-Signature=d12289b1804a4d6805ab43dddb9e5789cdf98db989bdd281a65d1d65c813ae66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
