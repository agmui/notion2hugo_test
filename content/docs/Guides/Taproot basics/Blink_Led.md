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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJPHJ3K%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCqGlbjsFxS1TG9MZMPERh%2B3Bnax004vovAB5bwxP58IQIgbvb0PJ3s8D%2BLy%2FjCoe%2BG1legYc26cikC%2BVmuXbgqFhcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOWhlpWhTBz0HDjTBSrcA%2B3Wnr50cZSn%2BL8mQqYOucWFXvz4qn0ZdrHTtwo4c3UEwYqQTciRAEFIJIMmrPcQENxTgh7vdSW838RfosAJPmIdi7ljhkw22c3Dgl0PVVdi2uHzSw2KKSEn1R3KA95U0zKhD%2BuEYvxUBa2fk%2FlOm4oAQp%2Bwp7IK2g23jf3bfwkK5T9Qp%2FdaY9oFrz4GK5jXUgik4wntl3c3HOAOVGQVdlQOyGcb%2BnXmV%2BCmHIHT8z%2BSr7Jx3CdVCMCGq1yk1pYuF4n8ym3kI32w2%2BK%2F7qzlB6SgMFsYWt7486PuiBww0cmRXDE5dSInbUDqNanouNR7OwfvPER17S%2F97NUclMZ4Ld8v5%2FH%2B7OPs1%2BE%2FsHLfNmBmFBpvZoYQlb4dG5dFqf2%2FSuAhKRptONFE2qMezLkn64ejkK42bchzn1yXUkEYaW0F4kYcpv21pXB%2FUWIUFh%2BTNcD9O%2FFuQKF9wXZUvXCZShVI3EATbvVis%2B865RTgElgUnrWg%2FY9KGnrp3E5HmIiqVaBooBizEml%2BF8S16WEwgrdKuOKMkL4SNKqI%2BQ0WepRTW%2FCfkvuggl8%2FQtef1R2XGQA4nVhusNCqUUAozJUfAx2uv%2FydeIiQ2HjmQh%2BCGOTBINpuI9pXDeawny8WMMPkpcMGOqUBd82I5NJnnRQsKANUDT8r4jvxSKdCfl8Yw6UKdF%2BZGFD1qafXX4%2FJ2CuigzwUPV%2BlCBIu%2BW31IIFsjawc5IlUR5YNmpiJYwenoTRJBGrIo9h3404vt5Ud2PCQa1Kms5CZo8mTp1eLEusv4eJ8Ud8EkRDKirn4hsH5SiNusmJnlCGBLtLv6AcvR%2B%2FYYrDGsta9u2Q0VyBIX%2BYJwNbXv9IQoj0tCC1i&X-Amz-Signature=ff9969f721ae66c54cf29a3262c9e8faf0e33ccd138031b0c19b574f46dbb0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=b85bca3a37ba97d94fbebb5f8789215c7d99ed0aa72a7c2e9809488f6cb6ad65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
