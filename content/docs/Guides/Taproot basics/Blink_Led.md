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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPLFISO%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGgvdQTlnMCBhor246Wff9yyIVy1%2FgTbGC0hLEY57YGjAiEA03fKYPwK7sGLANwtJ5XBmKovL9kb7hPzaA5akvPCTUAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuP%2F7xZTmWodG3A8SrcA2uDL8ekljf1j%2FyQCr9sxml%2F8KICyqvJqwDDDoFOYv6MkK4yRslTciLcis7XJ6drmY4kZy96buLLTEHIwf%2FjZg%2B65XEzCIrkd1ErY%2FgwUiXWgvHQfgXA2KbTdfHoY%2BNQHLQrGT9mwXGkTabWAn%2FpCbiPsvC3d68iWxDm2uYXOI2ncD5rtgDCu6E%2B%2BwPcZwgk8LJj%2FOX50%2B3XGkobySE1Noy0fAJX7Lte6i6HJjHOzStgZPhM%2B99wJrXrMLFZa5MKTrZaNymVdEqQ0Q0ThI1TEEsv%2Fe5%2FnE6LcXPe4gZ9CjJN0GiYw53V%2BcffzaiuUOCzdP7PhCzp7%2BX0N82C21RSgsXzAfWJyma49jWPJcNIrDU3xtFFW7PwAZxbyXipymqjluyjirz%2BNJpp90zgwVm1dwYriXdMgPcLiPupmi%2FSqUI7B1l0%2F9NPKEO0G8cE%2F1QaRV97mzgbVf0if6lOTvAKGN6vj0ywCUv9mvgZb6DCN4S0eghzd6K2TSRGa5ZMKsSdzUPqIiLBgJx0CzuQjHcQFGFAhAYY7JjQiL2ib2iy%2F6sakdT1ntJpNGYTRr18K6ecM%2F6vuItw2OSj14mkBFh9PAM7dCzgkpexICWA9%2B%2FciAnhZCO8KbYbczveHhwXMP233MoGOqUBNdfG3Q5SfoZsFtopXm56udNgfU4gxnXGZsdZxTWUG1XgDJR%2FmnT%2FFpJrYjc6VgHgR5QTzwzLoWJQ91WekhB1nzwPPOb4Tm7gNZU8pFJzU5mFtMaoRhO%2Bk%2BMFBtHQr1Nw95bIn%2FzjKVSfQlmCbdPpZl4KbX1uBO546tqikEuoTyttUlQE7ZGxumcJ17wwaQsvhWgknSiC4JXRPS7sQT%2BWzK1OyDNk&X-Amz-Signature=06fc5f1f65eef417e7b61fc30df924b88c40a34925bd1de12c84c5701e5b9a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYWEKAB%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAR0SZNtzX24YDBMEzRWUP7jl0FBU5OlG4zTHRLZylSJAiEA4xAyuU0lHM%2Fx5CBhBm6y2fl9sUrRSAm1x8v0%2BxRI20sqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN1KIJPxmIbrWxQ5yrcA2TuWc4JxAQwsh4bIXUlDIJc%2FA0W%2FJ3yAGUm2sjQyDSxixrg6LtN5bAX98eCKRwW6YknzMlB78A0LcPCAvgZ50zZQ%2F1eOGx2ZDL%2FvPektNBj5eHSF%2F26JtoY6JEx2OXJF99T8%2FHKx2wj7SJB2%2FiVuyKDb%2FjWOStjpBiiuLlZMrN0guEYvQ03ccSiTZKocYE4NkD%2BehLuaSKn4LL8aB63NLxoSOd%2Bj2xUj45%2B%2B4w%2FwMV4WU7w8m3SuEC6ptPzAYoc1IT7%2F4g4yraBHp7soow6goRRf4EkTuOhlhVxOOPWOQrUMibqX%2Bd16IqfQVLXiHH22pZhS76H5rJ5QXmT1gdZlv6o6adBjg4Uc%2BLGUG3nFfoWIHv87o%2Bf0unXKnhNzsAhHroXHjqrvwVsin6EC7ed%2BQxuo1kJFDHIoqhoQtBgi7vm95dnnAvhLI2XgMq0TBAUKaDK1nd%2FQ%2FW83nLOtpeK6yr6Mwg9dx%2FNGmLlYBP9PB9hBog0cRQELXt5p15AOWv%2FnPEcYqqAvWTll3hY9e2Yy2Fy5vu3UOqC7xr3fc3ulqi%2Fl3FkWFf7I580ddJOz8YV95iHIUsTkUEHusOKImFvFTPBcM3ajsQrePmSbrd7izGYN0kjsBTlEY1gP7WtMOyo3MoGOqUBTe6KnOhppOcuDanWFrlA7K8n%2FxdajFlcnbiXW2nNMseK0KsNR0Rhe3zUZJEyQa7ZurmrfugXs5y9haJ9L%2BlaJbJxqRmgoVpkVf8snMcHP3W%2BB0utwdVHq9bddtgvqnHQ8pAYX7YB%2FdxrZ39EKNBwczBe1W6rEBqTOPmY%2BjOPrPzuynbg%2BSErVvCQBly7f2xmneN1WxG0dtYsrHjZkFGxcAnTySux&X-Amz-Signature=04e102080316c33a6670fb3a706a9bf081419803f714f5500096bef1f083ae0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
