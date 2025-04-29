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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225XTXLD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1gQwePoflK%2FtowstHpH7vjvjJfKFpmHO3OPhIN8YqVgIgehslvsoR%2FEV4TpgNlai7gGRQe0n4foyZ%2Fex55IyTkJ4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUltc0EwYywSLhgkSrcAx4zrAPXvS2aIylXkvXffBLzdkR3jlg4BDOvz77ZC6p2YcNvJCW%2BSYmLVUjiVwl2RIVDEUJnx1UiYq%2FTceUnobIL4WlCXgf7Zn9LLNraBdd50PBCdttBdycMSZe6WGAzEp3ekB2tMybHFfF%2BSjrwngGKH%2FQ002pspfcfaO%2FB4u7AUFTou5cFI4KbG3pQ%2BU4LrwdhmFWX4Sdk4zAe3BWp%2F1uWxXJfdRCNcIbgYZ4v3iz3Q0qvWbp%2FH3Cx%2FHLmGABvx%2FeeZnBoCBj%2FD%2BAAwQMfOoEu6fyU7lPil3cD1V5R%2Bb7bdfeQZ0gOLnDXLqXqn%2FfMNEhp06p0Vim9o1%2BT1iHFWF2XtGCKYFBmH%2FZ1ZNEGU1aZY0%2FPc%2BI039z54jLajRu2dAixIbDLpddSmC6y3ezdw2mXvlfbQW0vsHg4h7MhbjlBhFYhX0COPjZB32SvoIfeaVyNYGGPnztR7iIw4YSieaha5vc8un5THS0xjVXspZakzZpvpZh%2BGGJ0UY2aUH50cDg5RtuU5JH0t2NUqrNP9A8itFZ3asYe1GQ%2BCbc%2F3Z9jVD23Z%2F2jVN2DW3MfkZNCpASMS2QxYJzoo2U6ACuLCkWHpx2wfVluG%2BnHUoSlWnaa2UYTOAyIHbEth9gwMP2kw8AGOqUBUK29nk8aGQsap6tfo1miFvK74sMZkcb32Z5jIePhTPEBr%2B0hWC1oO9WrrZDIB9heukleKmg1F4F4brHz52r9RInjUQuFT3WoKqwJiU4qu%2BqHI2kE9%2BVFTyg6vs9QFXwRlO8%2FwUp3rWHpzLa4YpvlBG2H1qUlUtAHreENRT5MMSHZrdeAmnGKP%2BRbIy0BQmJhMO5%2BzKq3iXNua6n8JvsGFTVa0YVc&X-Amz-Signature=bf8d92fe785acc6dc2bf6ccd413a2748f6b36c51bf43b7901aed057bc09af3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q565HTRF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3ICk8I55xPcDI1mGYz%2BhqEzw4bpGxi9%2BTUjXVj7SYfwIgcUDMVcA%2BjE7rYqmIfQQz7PbIBIeNxjzwJj8YxX8DroUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmzbcinaSyJp6d2vyrcAwTSlrXQWRwaWB3Cq95Oqnk7mvU%2BvDsX5IgNdQG7%2F5lnyqWI5gqqNo27DMkGehhvXCICn6pYtpukIvkeBYCnybreVf2AY5u%2BJWzHjkybgEdGlgGZPg1BF1n4%2BTiRtDrYXmrzLZ1eRsj0SN90WCdLZdhDPR9yW6S44lddITVK6e1acEpkNFj3r1ByAsD10BFZkCgzq8iJl4cV%2BiboQbx8fpWnt3Cf8eOpM8rozdzYsGWB50DiXsL9IYaS%2BHivMQaAmp2%2FT6ys6kAtnD6DQfzkuQwk0yUEHtuTqdpLRNpPja%2BIberQoWbkO1eg0BcqLHbyYwCy35t6xG1WROVxhfmJ5UnQaGXePPshtjHZK3%2F5FB4%2BfCHKShgHS5PWmou50YfRyL1AGbkANGkuXBblDIUE%2BCmpCmLR82Jl6fQWTr4QTHV%2B9C%2BXpfA%2BNdiCx103GMsefscTV5am53ffY%2B38FxoCGW%2Fs%2FieNrVbIvNhxrpZBXLryhH2D5%2Bf0wQmavHtcWopWKrBIs49zgVPaQpYd2QCpDVnBUaxxmhTlsMWxw3CAQrzRdz0aKp8TBENEyKdxqU6TjVqSx7b4%2BHR4ms%2BbdxbbBe5WKOeHrJdNTdDxJ5LDzMo4YavONSDUKJ%2B8ElqXMLCjw8AGOqUBofmQPXIcQP7h5jSYe%2F45wc5qh50YbODSSYH31ZuSa1slJV2ahXesJdrxYhnWrz2pf4gIH%2BcVrfMrAsx%2FbYT0mv32Ppj%2FxyGLb7hfeGItn42SzhvivYiIf4Xq0rqGCll%2BfVQod16xvtUsY8aavY1BC8gKqLlcR3B%2B6vjpPqw5f1rqcghZJ9nbmOmi1mL%2FGvGzYWf0ElPhe4AMVIO8Zu4qi91yW%2B88&X-Amz-Signature=a99e4d561e69b650925ff6f6703ae7d2e45a20fb7c50af77341748fbf3e006f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
