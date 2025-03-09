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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2JE3JO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD8a4eFY0dGXbrn16Caf3MyXymHdJJ44uLuuKI1jbm4ugIgFL%2FKQWX5YV2dZSawYC8Pg%2FKk54oYE0%2FGNruYCs7bHkIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCO68bjOVBsYOD0AAyrcA5sbfvqe42NyxeMuUBKVt1iL7TOBqDH4mvRCueoPL3%2FRXb4xavaCIu5U3Csuf2a0jQkQucvfXwOcnHNM0%2FPk1XSjDSCi2x6TtOdboPI8FSqUsKRWcWYGJcAIEvIbvk0eRp1Yl9C4J6A%2BzDAMZ67Bd7CoGCj1DAv71zdLTQtdaQL4XQxvMxh9eXsGtuolQuEmEp7M%2Bhuo%2Bzf1oD93m8H0d%2BWJabvVhA7e4fAEi87i8HnOcW3P28ok8%2FM7kvACASy%2BWjRMSSYWku5X6Tfdcvfq%2FiouXixIkYqYxfwZTOFYF%2BIurTK1M1CUh85PCLhTXkpffUeK%2FqqeNibrdN1UpnEBX7b0PSEbiVnoiMYlUzeXe7L6gg5hK38Cabqs1C9n3hDrjhPDCpzyIcK3rruKKnFqT4Zj1DteW1dxcbVSVb2AIATMeYO4Q%2BpatIAkIn8lYSYUZrBOtUFf55O7qWDq2Enmgs26iVMeC12h5ldclNnxaTOEa4F90LNyxU7KeRVweYkDDBJLl1PTgNqKRVdIEY9do3OtGhyGSpRxieoAzUKTucyZ4FxbLFcJoFfwddmkntl3niDtcmgMpMZhh4bh%2F9BPcoNHZDpYxH7BL52G49LLkAvNvZMpbDCetm55u8GPMOXht74GOqUBz4RdlJYtg4Cmc1ycVeWBUs5lPDslfNlllaY%2BFKap%2BCKX1jklnDVEFwzTC0BOIa8XS1mD497Qed%2B9J9GFjDw%2BSQIzu1CfiZT0cIdc8FyonJR3EdqvmeI130Ov9quIKNQV5IWa0rsMCZB2tlRh2kw6z%2Fmo4J1Fy1uSDd8bTAWDKlI9J1%2BUFDcK1u3Nn%2BsqrrugLuSq52HcAdLhCwZhMIwLycB5mngC&X-Amz-Signature=8da823efddd86889ba4c4489d31610b01fe5b9952195e0eddb6e6db0f3d35286&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMHSH2X%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDFwy5mGADnBlRY%2B3JxMYh5OV0ZowZuZkTELwLpywD2ZAiA%2Btz0EdypJ%2FRejh0ylKyaWuir9uJABvxIoSTeDiN5dWSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMqY7OkvmQQ1ugdACTKtwDuMg96YpVaN60ytyPA8hy7Fah3qXVvzmu8oMU2iNa3waQczgVxgsZTGAiOD0AI5nB3L5syhpPj%2BOZx%2Bz8kirAXgT%2FBhJc5rXU2aA2XGYqMtwq%2BOXsdri0i3%2FNrZ1UotCuPW%2Ftv4M3%2ByPBTalSSptUA68WGtqGH57C4tIO7%2F84uYnSw3O2DPcQI1zVZPUr8dP8pA%2B9dkwGDH7I3ue99SlXqnpm5lDPple%2BCWcC3yWK0ztuJcLhaSSw76%2B9wLRSGx3ZIvowV9e8zQJE6z5lBwUOxzpKNONK41QQNkzKH8vYXhj84qHhA9n%2B2cJUMDBDUCFOqHhOxR5o5EnfaCX6tAJcydnPoImdOXdCrKWbCsaYrM2RczVLubnM6grQu6RO9dMfr6mOP1xpdpwVKGxC4mVU%2BizvGoyM%2BixmqMK0D5%2B6LUNM2XAwDNuWu3Rnf3CuBUib2R42BhXdLaoPX5HSAQzrhTGO0ax9N8wcfK0QkbRZ7JB33BgnBp23AC2DSNRkDuxS7F62N08A0Mgbi4YTdVycRuV%2Bd%2F7s9aHfH0H61108mYqoxHF%2B9hjKj55hI%2F8W5%2FkvFOI7LWYaN4d6AAZUqUdbeZJlwIhgJjKBEzDLycdEDpzt4tHhU%2BbLcY81Nykw0eC3vgY6pgF3gv1VBHa0jwdeF0xO8q5NZ4OBdoi6KRSsSXnJAoJFsz%2BQZCkpd%2F3q5ujbU3e%2Fib5Gp5AwkAMyXPjvgSZuMMOowNQz9HiOJVYbj2RC1ZXyIaYRcbC7043tw0EdgCMbFrKbANlHAh56dnDmMKf7GLpTTriCkBoLbbCZ6ahuuFXQTTNrF3HjQBaCV6Nf7lpdRcZ37%2B3iO0Znvsyk6m%2B7PZjcbPbkEQM0&X-Amz-Signature=8e68a29597e1b23167cc00685ac15665b725f7600d78f73c44eff18de7144509&X-Amz-SignedHeaders=host&x-id=GetObject)

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
