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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEBB65L%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGzMit0Qf5mRkFRnG8UbDAY7RFUs4NwaSoznSP4vXsAiEA3kZTXE7%2Bvji02uzR5gt4zbX9lEcNKD1Pqu%2Fpo%2FUj7AUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRrSuA2pxq7UFlgzyrcAyDVFRXe7rP1QpjaRNYazEHHtMD%2BnYNag3NVSzt5tNUZTVRd9em%2BqW8gKCAJNKzwUjhC8VpL5Zc9WJIxaMfYVnr5KvouXzI%2FfPPIBav681qEvhIFWrj%2Fc8%2FG8BR86PbwM4aB8OT5ICNjtd5lPim%2BY0k4lqwFSmKjsESX1FmmWSKQE5qIMbAhPqWKgjYYLk7plbtaH7Y58Cir4zLXBP1X7yWTLcxpJ5AImQcIuzWz5xw0O%2BCtEiE3A8Iv0k7mj651%2BR7LH%2FVPi9v02niM%2BgWqvOCt9ZsgwOYSFoTcibYuKQVU3XDI6HdI4FLFy58Pud1fh6tyjum8%2BwfBQzRoM8cIllugtMmCmVDiniU%2Bsy9nHCahETWz25lxWrJMIRe2j5XYyhrPM9ZSQik3bxkw0b73cjCbYac3si%2Flz5sRzbvVPsJbKNGpcCmSHpqYjO%2F6dW0BgqDQM54WKgUqUCd%2FzBS0wdxLplMgLWAi5ffY5%2FULtbw2F5eEFJFRJ%2FBcHqjkoJPtdobDLKyd%2B%2BZzkfiWGbzEaqXLoAyoH9yeAeZeAkOhzJ0j9ByqRmyCnLZ726YygR576d5C%2BNEnmaftDEg4%2F5zI9S6OODRrlpbatJvUhtRiHkO05KbwVz6ktZyxfAXHMJexgr8GOqUBEDRA537nU4ctzMXCdwQhx%2FS%2BU4rOW6vDIDPpsOSVzvkIglJWINFSgpbQZtBI3oxD4A2u8TZ3wwrbzqdZbPSPc%2FtbIWfFZBzXv8NDsoPorCvBVTPBxZsufyLT%2BLJiICY2GGSaFVGr3sGDp1bFbEbILlELq%2FnvOFKu4%2FM1U6BTLEXpW9Itm3g1%2BeGcGeDIMCltdM6s9%2Fj7DqPdoy4RUxJn7vlz55z5&X-Amz-Signature=21ee4b0de208f7c09d7bef25b062dfd24b3a15828843e254c641c349dde47b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABFXQAA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DlgVNpmwhcoX1vYGvWKu8BCtCXGtdCDiLlA9umGWEwIhANM4GGwH0gYXs3nC4QsxvsCFP4P5yFBdvDkvQCF8KjxuKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lEy7nFdBs%2BuQWrwq3AMPNke9dvvVtvxzdLRZtQvBhmMbBD4azbgQnwmKrOWU9G3c%2BvZcmQxUskv8ge%2Fhuy%2FtRskes5y0Ja%2B55omI7yn0iHtWtH173okTJU7xWC8AzEFPVdbOOD4Zx82qAzz2GBEQsxTPbohVu829X%2FGolX4gSoisWkRjiQ8fIg2Z6GdGDHulPJWDJQZ2HPYbGiKexqZxjZEzAsnYrHoe4zpZV987%2FvGXgwyQPPYSbAjelbk4VfJ%2BPtGXrERyrWxEWN3iou0684HWJ2ewJeyBYF3v3xT059qud3xCV%2FqUmmp8tHAZqipYOVz7z6RtCW9VhbdUg8m8lKUFnRN0YAjQmX9r0fSHi8eHI85gNyj68qKYr0SCkQL1O9omGXKfhJhlRIl968vCy7qi2OZyC4GSSZOEQMIxeW7UiO24EVDcKYqDgvzWgp7djVtqHaaAcvAazAYlCUy5cFB%2BtvJSOPalf54fVs%2FCySpdHwA%2BRkmmsX6NKHKiXRU4keb4RraBlzI9XyYLcynMGHvrUmNxtoh3SaSnsOmvOgL1A%2FlR4ssh7hmepuvwL43hgEtGQvAfeeFmJo5ilrmL04axnRYjOIplxngh8fRGNt%2BT2DE%2FkudoQJ%2BFs1%2BHg%2Bo1zrgkFpgA%2Fn%2BDdjDKsYK%2FBjqkAVKwSIDJ4sUqOlJnwHibQbxEfA3kX0JGlr6%2BGa3%2FpW9LgV5x3MDNejrwyco5gpcF08QBgxl5wR%2FN3tRYwKmBLY4B49ts92M968RI1StPg0U6DVpaRkmv6XW8x2wZBMn9gVYQYhDpeTmQoM09eaImhSlkSE%2BHSDn6WtPJgVjsG335fxIm6ASKtOo8%2FA0TOU53cxlCM2u7DvUSQ311RzB1Wqm%2FKJdV&X-Amz-Signature=b01f78252bd873f323b1ca31b6fc0a874b97d59352afb1c012c697d3b951b9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
