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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHY6GQU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV6z0pOYOcENdWhR6iw9GY2H5vrCKIQDnhqNBra02tsAiEA3qqfMWfN6XzHLZltET1Tf7H8%2Bir8G8AnBl81RNB8b4cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCxxe%2FapkWoFNhlNJircA3HVCEOb%2FF8W6e%2FsYGQHL83ZHF9F3%2BJL3%2BZYcOXNBvxPpwPgrXsqpH6OoVVmDFQHL%2BbLRVwmE1DmChqPQDtFH196FpqgWbr6r9MuGDW%2BlYDTHtvrxmMqhsgFOP956LFwHDdZ2TM7P8d6trF8%2Fom7UMUbMwr6IxQa3qc86ID7AWzxy9ZSYwi0luf2Npbdap9YCN4Gmc9%2FsDDqjKPHQ4VSdQ1qeZohUvVKganC4EFB732o%2BiHq1jzuAHcUAPzAN%2BF5GEv5BL6iflHXn5skGuQM%2BrMW1efpildtbzqhL%2FmZ0rzJZQkQmIEYC%2BKb8uJYE35j7fTX5eb5aaOU2k2d5eTVrGsFwgqeh%2BpIHzMIh0dlyw3JbOIFTepULuZmfKHdI%2BTF60V2tlr8aM96PKBri%2FbNlbNU3VylRT9W1041wj6hthvbVaRLwjbFu%2Fql6xjbO3rGpoGxGw%2FsLLFIXc%2BnHXYTcPFaix%2Bu3SKdZ3mcrxyLh0yqStRwU5IJGT2%2BXMP6c6qLBorxwCFs1pwXl6eHwcYze0egOJPksgw93iIfLeVE727JGQuO%2F6pc7ZFneb2N%2FIQ2%2BLtVc7wsZGfHosnejT3Lp1Ixl1wcxzgfd%2B0q1%2FUWrYOCdlfitazpfnQH7N0uMIHk28EGOqUB7vVAQnTAa%2FlosS5YWyhwDjD78hqfqaNA2h78yNRSjQvgRKFhz7Z6XW8VJ5NSJgekum%2FnlqugxNq4kyvhu%2FLp%2F6egkBA0njJIa%2F9FbvRTv%2FI3Ugm%2BIne3rtKtwfO7i98lNCHZ2OuchCtR0lWE1xcOFRwnpDZ%2BD%2B1bEIFRoQxMuEB6s9UXMla2mBFdahX9nP0nLJXrwWMOXydeg8qtAivJrk7AqqLc&X-Amz-Signature=5854756bb2b2124feaa33fbfa1f972dd96409764e743bda3492d281c6aa602c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LHZN5W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7oFKhgQVdPV9uwZi%2Frt5PgA6VTEQjnu9e6Rq45LJghgIhAPoWjV%2BoTsDPFkWo38%2BH1M0ItDrr4v5J4Al8JR9H08M5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwAWCp%2BUkfy9Qyjqx8q3AP7FgGdUnG4jT4oa9A0ZF9TVnmMVRWHtUZxEUoWQPnmq72eEVSfD4Bw6hDoHf82afvBRt235rOw8FbOKpC8xHuSlYVhEWG4%2BcwWpP3bdgsRAcAh7vK8CZ21KtShFRpSIRdGZso6l6Am2OPNJXXJltjfjw3ZzwtVO2aUQbNIBPQFn5vwaKZlu1ymvcfOLLrDtG1nfR2zEZxkNTctWu8X4I0coHyR0TUO6DF7XRbGQsUPIHzlBdrl3DDt37gKxmCSGHLHy3f0VyjITBgCbINY1L2eHghFXRBSutlaas0aep9z8IJOAJBfSQl07cqXKPgvXby39d1Wyhjji13uclqEtZRuPpPm9OByZmXxUyIMw4jMbDQoxfgyeaDK4N3sk19Oqi7g56G%2FbDgvmzyH%2BGZZThxSZqkPaUfcXk7hYo%2FDpOmQQKL9q15qUHSL5G%2BoGeeFV2t9DWhoKe7g9aFFzBh2mdg5mxf2pH7fefQzuQZTF5PKs8zOtGOEhktiqYfqCHcznk%2BZpCYL3GlNeXF4bgRtJSciX%2FI7k3JV6QNuYsaURD9kBjVtKhiMp9CJ%2BC4qhToIwqqBtTAia6MNOGn9dgPgl8GsMxPZpRJVkoEeAQ4J2%2BDMHvgsv86gd%2F2TSetBITD%2B5NvBBjqkAbrDh7rSS4yFlpvLsPkZ5Rfh8J6tmOcYm9qINn4qcgpqFlOykSjSajyBiMCzT7mNJm08dMi9SVKwvttMjtUN%2BTN59rMx%2FEl6qPG8oxoOn2ENCFI5bRQVI5yasLK%2Fah7dNyg1LhAvGHN522ID0gUSFKghIT0iinRIRjF4SJjI%2B1lMODjhATrObabLUre%2FS4%2BF%2BzEImh%2BZHeIQDW%2BqwyhTjXJYWpjD&X-Amz-Signature=abdd7af378cb7b741036b19a4ed49cb5314d97a6d5337654ce3dac34c482baa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
