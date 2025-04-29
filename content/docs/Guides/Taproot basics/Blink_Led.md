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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBHPTH63%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCklwH9j5nwoLO6n9a5ibw9rXokWf%2BztlDoDi6N1BgupwIhANyZs%2FjaymdS1TjR%2BKHdFREqzI0YlQwxd%2FrGjkUTQiMgKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYErgdl0RfmK1NOy8q3AOFwhcwH3qvwFPTdWqIIx4JoV7srnMHPUeorTMjJOWrb%2BVJuSxO0AWaKjS0W1wxTPsX%2BXsHGe%2FeA13rwGS4PyDZs%2Bn8uPZQ4gSP%2FLh8CZNFYCNzhHoHihXNyKCfwxptAet5zT%2BMu6U9ut4GmFVAeLzfiUkbCSwrOaW%2By1TGTH18qYbnNKQQ4bUVENqjB1T6VdYrKaer5YXadjpFeWRpJ4YPn2ZlBK1%2F2T9Oon8DLC6es2jvhStPMxes37sv%2Fl3Gb7wlBvvU%2F1vyAz5qsxtEzVd66qy4TF%2BJYAknmgCasmXglYD68FkVYmY8W6A3oAIla5YuMNgYO76%2F6IDNT0eqhCQH3dREgA4wPONeN6MQsk31x%2F1VTOjde0YrWKibCAIZ4UX11jhWR3PsVj73OyYJquldz8OnfNWLv4lo2BL7X7SPsEcuJhX8GGTj79cOPzahujLi9zbUaBjdMPTSBqKdt5D%2BaUohTlDecKmR4QLt816ApJ0545JyhGOnQAd7AtsE7PszBVOBaHIfdECpEmqv3j86ShlLsd4hWWnRX0PWJ432R%2Fw9TWvxSlNsgBLrTv0uU8vAwu4gvm7Bajv2BjQwyHw14o6XBT3VuTe0S22nfc7plGOhD3dfbjfm8R4cNTDuk8TABjqkAfZzOoDLXZg6jqb6DPiO%2BQMYYWN28TBivIVBUUJzHCohPZSaTBU%2FyKkAaBpaZr4mic7r22dSSUJXjpuVq%2FbLrCGF%2FfTjXRcO%2BSshAx6bj%2B8Wrw6D4ElR%2B2MB6cRXsk5Z3MKisR3vaq%2FwAWQYl2QHF0mzscxgzOM4fT0XlG6DJWgH3FqJ19yzCZCBgz24CcZ4PHpV3YnRoLKMvzTMW7XKWsP9WSjC&X-Amz-Signature=cffa3b5d2da7910ab54221d80bcc6ffcc59a0d4eede0e7e1d9824f5c28749a68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWNNGTF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf1AjwCofzpgYJOZ7%2BDfPKsUyOJVITchC3wA1v8sUDBAiEA6NHlVNVo8BR6TzVDGhsxxUTUSgeOmt2ZSOTu393p0HEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD5aeDEKWYstGs0RSrcA3w4n69S2jqm1RPOw%2FkBdNVxt1SUWz9lhSi8xXk5lYVqRBi5ipOvWqlCy%2BBqe%2B4V8ANO4uggLiV2IEWu5Gq8eDc2iC1iXrDvXFJx1PFT8ScaDCATgRNQxGjFHH%2FEp%2FZ7%2BF08agtJ1prrdpPm4Zl%2Bz0Fs6z2CfYiauV5Rcs3iQrrHQ9hfut5cBwxTz%2F4U0Msf5Oj3Hr4xXgJRb7p8jLLaqAva2903uq%2FpVWLTFt48wYYZvbVRhtNufEhLbgd1EDmAA1CescZlW1dNo4P0D4gqPqil5x5sVQzkCKVm5fZZOgVFNluYgteJoYvjAkJotz8x0ShxmbWxI8mzXGQq%2FXNPa6q1nXPm4IRbTeFmwAemj4pA%2F5JFz7Uie9KofdzWScSIjGReFbeVQXibB4jBlNlZ32mtkMkRgC9mrx%2FY1flP0YR1exk339GEsekW0OunGeLNuG1bkf3uIf8AumNGV1qmJh0vunlI3kOsN5e0EpKm2IFoGaiFG5xXdNyeskV7ZutnFvytKs2jWd8Cx37bfpuvh%2F6UM44zelcQlVr5pVuUpAW5%2FLS%2BH%2BUwXv1L0o%2BmVWVG5NiCLUAjjDkuLbpGrTQlDe%2FP2XU1A2UkvD4v3pasb5Tos8YHA%2F5WZgtO5kawMLSUxMAGOqUBhTYXonYliMvBN1ErydXOcwRhgkXk2R20jzwEULqSPwSF%2B%2BQQLEaJRN4UYMmi%2B%2FytXRe6ccpX9d0flS2DzRAUexjZIcPAlqthh8svTksf6%2FMiryk%2F3oBsGm5o7Es%2B82UPsiAglzcyLg0Ly77CtZt4wkZy08tLjx1GU1XdwV%2F6llbtS%2FjKIq%2FQC1AfhSJbmCR7c4xV2UPijkzzMtqKvZfk9Vx%2FiH%2B5&X-Amz-Signature=301dd93c774808197f7f045107120d8328189e52a0fac1fa36c68e7e2b78c065&X-Amz-SignedHeaders=host&x-id=GetObject)

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
