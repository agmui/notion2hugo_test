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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4ZDKE3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCunhwfBG6lQ%2BaJvhvWtq8c0H3lvJoAGfgk1eI%2FJ%2FstGQIhALRRBgqjXbtYOACxJUmtnigt2VLzPS74bMSZUPo0PeJYKv8DCEQQABoMNjM3NDIzMTgzODA1IgwgXZ15cHGn%2FtPTEvkq3APadMDEjGv3UXVyIToM2g8iKGoRZ7yrNoMjeGu7CQR16rzEbLj7poA57jlfmfIx4WK2HL0s2ol5Wqa94406Zc88yShOTZZXgPgeLj0WhbCuLxl%2FqLXm%2F%2BblWW3Q1fQKF2ZzCusICL0TnEYhaLBrEftFNzqTKxDH3Udaa5sLLtD0q0YTH6B6QmbCIuRk0w%2B2VK%2FC4qCKRU%2F%2F3YCadxFnkKLqA3Pwq6s0isxU3zvAdZuEmLBiO%2Bu9eS3eqPSv6uRuaOKfa7jSmboyiP8%2F%2FXK9mmWs9JrDHosLEXnGoMauoDEpNAhwdhvZL5zzlV6eggL8YI5a72rcjEa3QFwBUAURf69xC2sla%2BBGL66BgZrX1TmlgpsCHRfXxeykPiSo8VOeagwcZH8ppcRG4UJkMIe37SkkTMcvIy1uh2LBrrbzZA2%2BGsa6GGF1k3RXQVnwgJp%2F72UIx%2FLAJLDSQt0Nd%2BRORse%2FwvbEwAzJEkZGB2%2F0YWozDQI6wlguU%2FjbaFsJGBWUPZdFOT%2BvAm%2FJF%2B7GuqiMey7pxaYp2lS9Ub%2FQjEH3Qz1ANj0WvB5OtxGuk57rgJamUpjHgu%2FCq%2B4T4N4AIU5cGMJluBAY%2B8LLmNkZtEuLcXsJ9zyTxZvxBVv1cy8cGDD2hPfEBjqkAXh%2BWMnYhl%2FlKRP%2Bl9SipRh9pGiEbYurw653jqN3oktWeXomXdUMRkl%2BCTWwbk4Pt3Pfh%2B9ieXBtYUCDe5B0lUAwQuSIHHqtjB%2FhYg%2FwyWBUfpUJMVgR%2F7UUMgm4n6SRfzj%2B5AKhKWEUj4i996%2Fi2ekOSO8X02eYIWGy%2FNwwzXi3b9Htpv4bbbzN8aLwS8RyJl7Pf7tYv6Zbwy%2BQLTufy9NNjNZM&X-Amz-Signature=c4fd2da3564de66b513a3f246b0c4c96d1ec5c6cc5ce37d1448866606d39a105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSTTFWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvEg0JM5uU2kj6z081VYpLhNvmP95yqPEz6%2ByzBQvGZAiBOONvfJVQ8TUrSIgHd7e4%2B6CQqMrDBeQ6f2HGsUPZjfCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMJAYlIFjpxMP8fEdbKtwDfs040M3id6jObljaGOfWXr2kbDelxwax4JkJRLzrxKGlIAD1tjYkYD8I%2B%2B1uG4UgtRUAi7jkZ0xAunBYEN%2BiVyYXbpc1qotibO9Lv2X9Jwx%2FamdrsSseaFCA7TLyB5TAxYX%2FFkp3m5uDsEttxSNtMMn2KTsgz7SvPth%2BKSNl0s0ecdiwL3TQnZPBlIZH%2FbBbn2j8LdH%2Bbl1VaLa%2F99G8ugF29Il47s3O4ZL9PKj1NVN8Czk9IL8AnahpTeXTYq4zvbxXg6RjkY0QMruZODJ5PgwoN1QbpPXoa0DL1VyhmYiEtyMhW%2Bf77%2Fj9mp%2FbPUM%2BK94jCZjvOdza%2FdESBYk2sBbkCU6%2BMRyQqlPa%2BMGQAGQ3mByt079JIvVRhQCcvbc9X3YzW%2FbvCabZbrjqc7MXyXsbUl8aMp2jIJRL%2FlOQKB4doeuJ1B8syXD8Oq9pdco1bm90i11NrFa%2B0SgZgq9pNBSauPTp4rXKZ8tQGzzqvV60wWwCnZzyio9U7jNrWepRIQwLRGcnB5ygAxYyBRneuIc6k6A8%2BVGmDbhsN%2BeF5rtxi4SwnJKKhHgizwDQNTUyoHs6xds9%2BxcraiRS35bsBRV1I%2FOCwDDg3E95Ze%2FqatddALPoQ3c8MMdW6Ncwr4b3xAY6pgFnJn5rZyGOnnmJ9Unb2B0o8bLbhLUohRBhJRhcnc8VXyyz0kDZfNpTCA7hm9W1e%2BYxVQPqr9kjfD%2FRvCp2iQhft%2B8x6DHIr4AzkC3v3TxbvckDLef8ZNvTZrgbH5N49N48jpi5%2Fc6J1lSmaBZfAMC8Ps2mdEccusIE9kbW2WF8v%2FaHC3qLrL19KJhMr2TSCoPOQyxZnRiXxRBUa26%2BbTQq0Od%2F5ZH7&X-Amz-Signature=53e8af2143f836671a08f339a71edf732874c9f4eb2822d784ff615da8931c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
