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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTY3RAZ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzyn83vizB093GTtfJ%2FJdsuB54%2FYSeCLSbAEu0rEyacAIgMblq7L2VKRWvQh5j3ccLSBqWwp0bL6c%2Fsvj%2BHFLhvrYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7B5BJ4Jqex2wy32CrcA8Ms18Q3LVeDxEX3AJI2VNhvX0OcIrMfEzDx4NusObgcBzeW2jYzNgJz%2FVI%2B9D9C%2Br%2BC7RuldVdbKkfj4wAauRAv6NCEGZL4CEK%2BZk5jsEH2qRNEQycYTdrRPQ7%2BCsvtWJOfVySIBvPaDP7jpEM7KESoTJBL8MBh8TsSpVJQppQ6MwBtJmzC9lZs5IkmTU4WF1Suqz%2B3FXeKovBIVxJ7Q9htgydf7dQLq6AHSnnmdf1L2XZeya6YWfrX0kGQByaT%2BUYiboVDSYk0HsioUo%2FxWPrO350cVYimoCCOxLk%2Fd7F2uGiS8RAYsrk2QATp0yvYh96IbA4MJOIJtkFtVl0l%2F%2BvYYNxJqgYD%2FaqL4HrmUrR0%2F2VGudhXIiM5fAeqfk%2FEmy7DMfhdPMcDJRSxrRqvJFezx8BfInjYDu03piMtWyuC0tjiOq1GS1q1z02hRFmZ%2BOrtME2sIQmcznoZhfeUQu65%2FTXhkVlrUeOOlB%2B%2F6KtkijHDztWkn3dpEu%2FfvMximr9xck%2Fjavv0eUMdGNLxbBNBpVTi53yPcNuNfE3AbZBR3PcI1Rv1h0NIGuvgo7N0RrxUQ8xy9JvkMFIi26QAytf8BUxjn1EGd5Dmnb9YoRdIL%2BDWjZlUON20z1IdMPzuosYGOqUBhYotqkWzk%2F697Q3%2B%2FuePW1LTSvbaLC4ZuqaeOMMZ7qVxiVGrbgaNTrDHBs4aTT8xLEzIc4ivdFEDB3pmcxKkDbn9QPsGbQNWwEe4icTqoPtyN2Nw%2F2B6tgXjFmqlLVaCuHlXc0BRC9L8aYTLEU0xSToS8CrojLUTM83Dl%2FkTmUn3khXUayGWKCQqHj6Wb1OxJjYfYJ56I%2Bi2OvQ7PONkwK5H5akX&X-Amz-Signature=af8e1d9c8ea66ee2905aff681a7a3c585b5260c6de001542b1c0bc12e7bff12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736NC4IJ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDbePOyPzf3nS1%2FjCj2zH3v2NcEiW3vgXknqcWOqze56wIgLdaA%2BrjE%2BCQn5fQqlBjYYdUqw60bycqmDwvoknM2T4UqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeCLygQ%2FIGK6m%2BFFyrcA%2B8ZB2iVrfVBJnu7Yz86IH47xYIsY4OiNh1amBS2c1X1aWsPLzuuf90%2FBuPJU6ZAqQVIT8D%2B812SGn6a3mUysVwxlpcG7l%2Fsya25XQaBw3x2NIRaigPOZrErO79H%2BDQFznxu%2B5qylg6y14xcTpja6IJzTcRJdArl0em5ikAjtYBhCE8F2wdt25EmWHCHxAV7m1jtBVwNJpTaO5zr1uNhFEYz%2B7jnrH6eXi90vdFu8nbHf3JyoJjE3EvbMrnKJrkAco4IOPk5FyMaIJt2rttAnm3aqqwaENrieV%2F%2FN%2FludBFRe%2BdiAVkvnQsEY%2BYP34Z6tbsMCc0wUl0gxTfxqGB%2Bi9qiHvBVAMs58H%2FdyurXOx62io3x4be9ppxah0cPRzhAY737TWDtNM9Stp%2FNztLdZvklveEZgPBfoP8cPO%2FrmAeITRzxZV%2FtZiHmVoDmVxxZOb%2FwfkjgYszXIizao3BHMWq9kS3DHmwS%2FCTlbsawSIYGQyov92dxB3IApAIgl5KN9%2BnmHoT33wmyh7Z%2FQTjBVZpZo1vC5%2Bi%2FAqRbRhHGaeuXFxn1DjlzLG5fh%2BEEkZ57vNJKPaCPbSjJLUGtKTAqa6KunZJk0VHk0l9MIsehT8PQlVfJhMpkprfEGDDKMLXwosYGOqUBoiHK2acie1a%2FEHvFn9Ou%2FriLe0z0dZ6KRok2PgGBatZKHwgXzXnCxYaxUq%2FwNX6Qdd6cvz5MvQgTCWdHcNPA%2Bu4o%2FfwYyXc1%2Fgm%2BLPB0n0iFkuF9jld4oy1LY0EmJwVIETGUplL2OE%2FRg2%2FpK8x%2BybPTrZMRfhkBTmOs6p0YQjJ8F62HgcX7pTHzybdDVl0Qw4RRIyHvpyJhxHn9xp4%2FRuXuJKbM&X-Amz-Signature=2456b870992eac148fe47892d5b3c016cdc1dce04abd235ee8f99a75ac8a583d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
