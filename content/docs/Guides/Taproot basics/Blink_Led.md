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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWQMVNL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCXgb115ZE%2BI37%2BN%2Fjg0u563Naj0xMYTcS06DQxJQIfzwIhAON3Du74Gh4eOIUNW%2BFN2wz9QWDOVocK%2FsVVDP8UwwZGKv8DCGkQABoMNjM3NDIzMTgzODA1Igyy3oZvMBTIDmjUNfsq3AP2U7DwVY80grsq8Olnkd1hDOHzLjXAMcLCebZnToP%2FLX4tCFmP7fr9jjrgQuNeWi3SRffwwF4aRpR3Ui5WfesLBR%2FYxbTfaWHmnFyUkSVrH1sARN3dTE9QfLbGyNKj0uzp%2Fh89fS9nNxel7X7WUKq6mSG8nmailz%2FeHsJ5nSbBZXQVTmTwWsPtixqRYh1DSbB9XbNvW%2FOOCUZPBUDML%2BYP8FHU%2Bv94N2ppIye%2B5OAW3K9dsVdIyVFAC%2BUoq0Ff0jR%2B%2FuQWGztwORYwolz7u%2By4oib8idNNeOLSrQyzHeVu%2B%2BrprhXECuhJZOHDMvpyROLNwrJSRFTOXfF35RuCI0bsb0bIRRl9JNS5R8Iv86SlWAGeo395L119L%2F9JrFxYzL7QO2D2Vqi%2FdW5ULvYHE%2B1rpwYbLAsxivoi8OlXOCe2Xpg3Ukclp6GVjuldFbvn0l%2FCUBLXpOhHFIoNe6BYvldlvEQhtfFIhPaQAwcv3T0Wv12NFof0bafI0eLjbO7Ni68RCDN51ZDEQOIeNMm%2BwL4lE4Vm%2BhtfrNLj7%2F8NaRtaMWifsqQ7pBpICFPUrjv2%2BoiUkgKJxRJbjhT%2Fey5PQCSYY8sieUi%2B1cZt2zfg0bJmvKNcoH2uwQ5aPVVVpzCB2P69BjqkAZSnwFTsuxGYtI%2FA9g9hy1H8Dpd46UYb7M3GWxxqP5phTePPGANF9VZYeAZAbe%2Fa%2BHxLC7cAdAxQev6sex1HzcuaU8%2B5usw4%2Bss2LA89Me1vH70hT0uxqeBmNPhNrfIgS8jLvBWn5TbwZeleojgHt6veJlrdESBnNQkoQDuL1F44cCoYQiDBzrZmWimu4IVH2EM9o5gp2MQTRh00fAjRbkUmILgi&X-Amz-Signature=e734b979272240b4eb29f78ce1cb0271f76000158e477aa28185454c2674535b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IM4UB4T%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDEo5cy1GcFh4liA8cXrz8%2BrF19AuXBZLmxmJRCz7hbDgIgTD8GsGsNGv%2BehKVpIKiV%2BVDtSDF4mX9UauZ9Y61aTVcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCWTbEL15G0YVxJNPSrcA3isGuXv8VPIb%2FeLIGPtSnsFzNjr3s5HpUYQRUwBIlq%2F7wHKwz%2FyB473xOIdeX%2BhLsn6z7WBh8wqmJrHw4uPiQYd18wBmHlAv3ZrQfAwC%2F5cwvhF8rtTNmJGrmVLSCC2ZhRktr2i1wuOT2i2Us8q7dh%2FmwHnhbrjyHPThEBxfG9IyCMfOiJ6RwOdxYdRlXUdjTjwy4oZk4Ffcdqc41kL2%2FF3o%2FevOZrYCoqOZNFthCG7wleQFwgmIbPup7PNMjzu3ugVz4Ut7CZPcvPM8OESJTF9CZxfTQDJP3REIpaYWp4BvZQa8Kt2wTMJJNPd8y%2Bg6oqSJTYgXeW3zgq0V2MCxNOloFJWYPgtuV0ChptFKp%2FDQKstJt3ZcYEOgCsUPp4Yg0b7GChcu5a%2FQywQUSEHRstb0nitlNonlcMqJY40OwTb7Qnfxiv9uIPutwwjNmX0zdvrSqfroYo%2BUdHvjULsb0neVguZCq4uDVjZKb8Rlm6lQYBIfibPYSVgkWQpNv2FqOE%2B0rEIvqxaQiNp6UIgSVN4jORrfrnwEbG%2F78v7ZvG0BGD9zFrA413FQyXETPiLUYI4kRmUU49QHSmQyVuCiRsnhOEPnxCkm7%2FZbT9cxvchHd53Fehk3dkzn5JcMJ3Z%2Fr0GOqUByx2WBPlDpQlfTEMs53P0yy79PD40yPrkdrfoL0QO%2F6qZHhmCJIaOQvtSw8A7Uacbk9bRNexZQSGjTKB%2Fyy7EZ5%2FO3y6SvQpIg5Ten%2FjW%2FKGG4cUJt2lbwhTo%2Ff1LRUXK3%2B8VwPi3hXmZDyuPHm9uvN0ehNFa%2FMKu9zy80RoJ63Hm7vCcL2QrBgqF%2FZnU6t%2B9LPcDbGtm4OqDX9IamhQFURI3O936&X-Amz-Signature=fac69c4d3dc74e67e4957737bc48643100f511b7abe93c244198f37e3b693786&X-Amz-SignedHeaders=host&x-id=GetObject)

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
