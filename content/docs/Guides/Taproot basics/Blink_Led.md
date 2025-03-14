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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5Z3OFQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMW98UZCWFUAUZ52S0CbzMBvIgMJHPWRuLDn%2F9Ih%2Bs3AiEArr5eGHTj%2FDKVI2srUXxm2%2BaOjTgdbjugkXY9NPs5ITMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBKUN3ZCLQm5lho6ircA1ZdIF7tQUV%2BpMI79Y0mppoKhLq5Zhyre2qfg%2Bh5%2BLjUBn%2Bc7K31D4S6iC1EtPC9juWAc6P%2B4Q83SFFvUMSH80jrAGge%2FH4Oy27EXjfOV%2BTuF2mxqaUb9mfvWxxK5kK4qH6lD587KHUGXtl%2F1fiz0pgh%2BhXQVI7Xhh2abq%2BOPm7mxeQ2g8AEqZAxI7zamMArQmDm03tsiYvXJMIszM0hu7LycNepWSlLs9pnflYoiXLMbAqyNsJ78jgCACALsGHUxy4Uwchnuwevr9X9so0iybgVX048As3fXqW6seXPTFnp32wsdQNRTNDu6woU9bxobWldAgnJgCePVUqkQ6Faaqltk2Hu9OTOHkJeE7OrnmGyam%2FBv3krUApGW27dFXXxlvZcrUZIj1QY0GVc0Bk8GcM4P4l9A%2BhR7Afki%2Fu4kgQt5Y2q0tCWQ020uGG3rpQpG%2Be87pvovWuf%2B9kVTNaLK3weo%2FxQN%2Fl%2FetM%2F6wmvQngZ%2BI0FjYGNSUfBqNoPGro%2BMwtl4IqUbMZobUOF9Hrawd3YP3X5dZggKfZM8RrJ4ZgbtOKPR%2BfdmTZ6hnlpvQxszuyiN48%2Fo6cMHNxwO7q%2F6saBTGvRJ26t%2FT5AQU1fHE1vFDaX84HtscXT6eM5MJCi0b4GOqUBafocqb70D%2FcBY3bQSk%2BqvGoxCqs3C%2BIO8EPxBSHAxtrjH%2BWpRqocJ9xRTymsY1nNZ0SKPWPSvboTeYkG5X5mHoQ0x76SWkgq1DxkbHoB%2Byp8Oro8EOi5ITyzO36dxySeCMKxM2jP6s3GAHigJbxWmNIICF%2Fmr0WH2BglXrhdKi3PxnX9aaGU8NNWezUcjEqY3oUF%2Bf3%2BkJjMpKZS8VabcQinGzDu&X-Amz-Signature=cd7ae1d5a43c6cec96330b62a97440afaa325217602251e36a08469644c1681c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBK7FDQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdzTR8RxjFfSdvhxGi%2FdO1H%2Fvkh9iyawqehTHHFgkr%2FQIhAJoKuk%2BGJ%2BFlp6PejNld5wh5FgPBdKpNrscquY%2Fupfj5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylrPwW17JUd8wvlCkq3ANx0%2B4MNHAEQIdYfjerEt9f3xFFjEdi%2B7ivkhD%2B4oGHLaAiAXAW%2BK5hyZ63tRIA0fVFEii19rVLARGE7lazDs0fgtsXK9IKSmI83QnsAWtEvECsnh%2FV48TGwnRtNebDxD6W8SxWo92w25MD49zAw2OFWefVK6ggD8024MJXdYC8omWt49aQCcfct5TDi5Z9B7iEemmI%2Fj19d6KOXi1RaPY%2FF6fNXXz%2BBJ%2FzBWFjeuswYamJvuxkrViwa80fazV4ZaxyeboLng5zH7gwDkUoR4l3gEGCtrq%2BFBzHHbbVtNU5OrVJfdu5OTVuz0IGIwsCPzqi%2BtLCNHKiq62edGzezY0utsSRzc6BBp7IH%2Bjy1x2OyRZ4eWdh6hntAkbyh4ZInJUGhbM%2BtpOk2galjWo0469GLGxbjqkfpN572ffvEV4fWKZmOQlpn2uJgPBTBwpQ29uD0T0TwJTxn3CI7Fjfc20BQM6cUp5E4nSQqYkCgOK86nVV%2FbKwowLK1X5PJsPu%2FndJjvxy1%2BAMu6TpTeP0A%2B5WDbJ4hcZT4vhjzeuzi1sqQ4UmNRJS0EDHO7h7lA1oQY4yTQ3%2B9ZMuf072rubTJTDtZAs1mpQKlmFkUJs4e2J3ufmKZq9jOYoxgUO93TDTotG%2BBjqkAbmW5uejbK2mv%2Bv%2FpK%2FyO7f2r9nh7uTSz5EuuH6Jms3QA17g%2BH%2BIMKxXirm3L1Tpiv%2FiFXNaYoST1JKXiK6phubejLpnrWX5trdXEMdtTIIarmZODnsK59WfaN7xLDyS7GrInteHEdO9egnUhjLE1KDZ55Y2qh8yYwL5oF5Bmh1c3REPoppgnF%2FocMt7hM6%2BTx%2FaAtX5XBEgyAqrwjRFJshKsleB&X-Amz-Signature=498ee6ccdf9c033581008b3e3ba81cd2192151c2454fb7001ad8291e1cbbd836&X-Amz-SignedHeaders=host&x-id=GetObject)

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
