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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CVTJY2I%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAWRjYW8oDcdZRLh5K%2Bx%2Ba9h8nrj1e6Nn7w0J2mZi1pVAiEApMhpZhwpszLlMh19zLLBW9SE%2FtmsWkR%2FKmH6m8L6Pu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIRepcMtfLj56YkdSrcA2j2l%2F5wts8p3gxuUQbHreMbTwKbyZw2yM4BMvNgsffpA562BVY1dhW04Y0QJ6V6N7wV%2Bx17ZWyjhFhCJv%2BYx86%2B0n1WSEFnaRFIfZGckD62F0t3Eko0B9XGz2max39FjPj4LyhFWtjlbd3RNwT%2FB1mUqeI4Ams1egdoNn%2BBMSLSSsNOepkTnFrPFXiqjygWusLKdUEiImmFTWsuM4axy8LA3B1VIZD4IEzSG0pwLm%2BnUVnO%2BAOUKELa0BifhsAk22ZZZgn9R8muUR50cHNAIxl1Gbkx1QELLydSU90zlYWAKXTUXYy%2FmiS5mZOT9qZQPDsnw6iFZ5wW5rHIrx5h6M1O%2BYcuIekyelowN8aspxXvrfNfxC%2FSOP2h%2B%2Fo%2B5nEfrPXeuJa06JRg4iRfoyn4WvtYcuv5cCFEDcC%2FOGiza18FKbztQ6sZLAgy5mcy8iHbbbaeT36rQnLEmR8jzOZiTsoTzXSupSiiNnqOKzx%2BhWCCHU2dPiCKaVBFNL8uVhEWZ5VKy6UMHsReAC6SPJlYdBDAkBVq1n5GgknB134hBaqzC0xSGJ%2BG0JzeFYdbzHFiKnXtWRHCa766rlE%2F%2F1nntNRPwdTFUwbbNgHhaoJ12WQahJIw5UDLUg25eStuMIGw8L8GOqUBRzpaxhnetNG7yWjaa21faMnXqj%2FamdKPTlKFCH%2Bm4Aoyq57rTMJRIIqrbF9Vim7syJ0JEi66H%2B2mDgb8RXmWLi5Dw8gue3CVjfb4iDj6bFHb8vRar5UW%2FItvm8GcBDGGYybSjjUly9P33LcYtX5EqzvOzWwZYq8QWwKc3jeQmye9hMz%2FK1gv6sDbirwS%2Ftl%2BvyX8Jdo51eFrHpbi8baHv%2F5v3KTP&X-Amz-Signature=78507d8eec1184f5534d5563abc7b7a7630f3646a7eec24bb47235c2a478ecd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWT2H4A%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDFje5sQBNP8VRcFHYW%2BFMEizNUv9CCKwM3TF6%2FJC6tagIhAM8wPEGJMyMQ9fo%2BffixNqlLVldOLdQK4LHMxOlKwDPzKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPBQrXBXAhiMONikq3AMOyClMPiwuCYCPSoPuKfmXFU7edBfoB6cEO5j7npLIZ96NFXISW0K5AY9FPtggWOIVHkJWvNnOGN0KibqVzDqnyH2fjo5L5zgRh4L2ZdakuFJrlyfEEAHFLTYnZ3kST6lJPWi8Ev20TYOoarCTRRjeNHw6wUqOkZlYrj%2BJJcLXi42BSErKezRdRZuoXx3%2FUB6KIQbg6YXIbzysvRJGMkKCGbpifXsnI4Yk%2Bqw%2BGhV7F4G5fJHkzkbfDeD0uU4oGwykWkyHOTfL4mjoRlSW%2FZLZNTO8yowxX%2Beak2WvTxl8lOsxKT4YXOVzLMAqRG1DlwAep5wRIPSNELt7SdExqwjpa4tT2k8AVcTDcC7OVqbEphU8o0JdR6QujErQlpjL5CXc4iZZgd8nY9kSKO%2B2OYXk2QFt8PxoBmCM4jVenhE46m3Vpq4FNz8oOapbXXBdfRP4vcc2qj%2FDCD70Gd6PzXC6XiFcjnfBfo5APQmWrj7bZx1HyKN51VPzYik0%2BFcyPiPhW%2Fz4pSjjbJQE4VLoeT%2Fn980w5%2BhiSuJxGfMZ%2FQOb4HzeopIQuLhFGJGMYXNRWqMJMmjQWei6DBjz4NEk082YIpucG0fMVh%2F%2BjLLYOItG8AOiJHer6rknViG1jDCNsPC%2FBjqkAfKKUFxjVPIoIV4YNKVFwTcxXqpERQvVPFa58WaE1gfVEbWG19f%2FlFQw6%2FoYn%2B%2BIx%2BNUS7BCi19k%2F47QRGSZ69oScXxDNp%2F047CZI5FuzS4oO5iHtBGti6CTsb1bb0Bnv9HoT9NB%2FvVfWTVd9Fe5Wk1PyWP9JTbJ5yVJVlOpHGQA7UqBSj9yy4UyT4KmbC34LmvyaIYwvHQ2JI%2B6lU8QNv5NiWdP&X-Amz-Signature=98e1ab856596a8a40714047b560360a94947fefd39cf0d750ac3837bd4c4dd75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
