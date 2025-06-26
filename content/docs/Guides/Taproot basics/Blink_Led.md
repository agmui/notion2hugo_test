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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJBQOKO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDXAe0zZdPjopgoMdjQIs%2BE5jO51u6Oe042Ypf8q6yIngIhALLnFaJYRavGC8d5tBNg%2BSb98Cgbg0iOiTY5nnFpuRmGKv8DCGUQABoMNjM3NDIzMTgzODA1Igwlx52eKqGuyQUyVtgq3AO%2FvtkaE8M4jDPYv4z0TecpbDNvgxhBPO6Ideh9%2FOI9ueYbOkQY6fIVfZOWDbBT32%2FwmICw%2FzfRouKVvGyEf6%2BQeW0Aq4%2B2ZKLLgs4YJHNUVjHMBY4UtaaqvHF7piJMOzHDHihrUc4iIWiYEeuY5m4ejbQzS9E8uEXxEiU%2B5K28d8VyFOaAHGNOr6MaFkYxlMkjVZhP2K3XIAsRi8Uwq9eXGkDQtM0yLVuHX0qOusoD2ii%2FNgedhHADbxUN7Cz1nBD03JcYLbkbc5cehESVyrSqRvjpxMsOcZCdbUmIIV1eDVvLjroDPBrqBQT4oMPbOVLQuOpnbZ6Uln7PTkJWuqm2N3uMnvz61EK1X4oIBCfnu8UUGX4uB%2BDtW4CxAAe0ME8dxaQJg1YCRL1TZWv4WnE%2BKeJsYBJtC4R6mSu0ktR7h%2Fkhp25FLwZUJ0%2BmMr%2BnMYcJ2NAL%2BOI5Zs4uYXKLciXgYypOIX4oMkKnHjVF0%2FwD0%2Bc7koPTWcT%2B7kkdSNLrLBIpmbRMj79u0qSKcu25rwLZ1P8a91xxiHGRE9bUd71cGNpQ1cFNbT38%2FgQURobDrL7ZVtIxxIcvjnroMFKUTDUIlDzs25pJask6GHC8hk9A46A%2BpYoefZmBdamYlTC7y%2FbCBjqkARj4Omv5iViFN1plFMUPzEd9MtXWnP5fR7J6s47KD5lA9Iw2H3hJDty3RVNcdjTslxWzQjcJBTt%2Bfd85ydGPkelRGlpwW2yclBOWUGLQPacv5aEqHDo7zXo2f8xZv1hW6F7YiDHfmpqGbdgIspWKwu0NfJiSqj6PB85VduBpOCkIJg8vHx7r4DyX11TCqEDnpKZXtr6Amt6ficKDDks1sE3hLn4v&X-Amz-Signature=6e34f76d4b70dd6f1e13166865266c0a94a95b28a14017d71e5cd3b1176bec7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXTBPSH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCihQPMN1b3XVJSBRB4UaJBYyDGSkzj7RDcB6lgUQTtdAIgBPqRsenmf18vcdTDoDr0QeRfdIcBDCnbnzfAciP26QAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEZXKNVDtcjA%2FDyBnircA6PGg81ciOFWszj3gfOJScZTghRf8iWkkU%2BV0LKTnK6tnbAA5txwitiEbXcrBTGUqWJmOMOVAYOCkgGGLlu21dKcuveAiRoyeqCOT7BAaNq38TWdD4zQpJsXxlIuGvdj5JtJ6FLI2P%2F%2BvO6HtFCq%2BmZFByvFZRmns%2Fci4gbPYcZBgHXFAU99K1rL6%2FPI8uTzsBGSfpzuNGLkUotB%2Bqk6UR7euB48ukA9P8gC87DDvQbWPrqMjQW0Han3dKIKYCH9MK%2BJsbU5knGd1opM%2BVC3cBPdlFDp8XVCdbzbKxUBDARqctOY9NcW8xSVBmfEYF8dUdi6oHbZuzYWTGY1JiqWcN0SpsyyEwr4Aa52fEnOINJV5GdE0JAZOg40FACsONodYDuVLFu2EFuV7otqhu%2BoKHp3aNJyZN0WosTLZvhZ3PzaWyuQ36h6dBN2XbiF%2BBTP6Ymry9HCQX59KxGp%2FYN5W7CK4%2F8HxIQegHh9zehM1DCGorTA4vonan%2FAmpeuJua2qN8EvGq6sZf1WkQVtwzzopLI5V5j8xCx7Qj8sYZEo6r6a6HgyzcFZGpcxhp3MbdaPlq%2Fzj5BVG%2BoUj52T8VNbdH1B7fMGRM9wUYubGavFiGlVn3pHuR%2FxlKMVLPOMKbL9sIGOqUBwpbDT5HqU6jwVx9THkKBWiZaViBIV77FlG%2FA%2FYV49HSNcMbTRE2nv7dE8sjF3y2y3sas7%2FcCtmGbomt3O30zNsnXm74UJ0no7%2FDf7okeNNciJMvALN3Edvj%2Fw%2BhkClzAnfUGeCWht8TYhCAkzt0DLELaWfzon94p%2FJYC8N7LTnWcJt1T5DUDONt9YU%2FZETi1g%2FgDhURVrdnB%2BX9KOk6nUQfMezAK&X-Amz-Signature=01fb6a38253d6ad72a198dcc2fa6f5905f49721d55dc5b79206d8fbd7b076006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
