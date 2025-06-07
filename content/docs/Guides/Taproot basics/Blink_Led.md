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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATUJRNX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5BmfKe3RaOP91P2MM1SO4gtsHiaW0fBvgZjLOiLK%2BgQIgAVZFt%2FIdd8XNXP3In2TxYRZXPhqJDfcaYSUrjHcQmk8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEUulecwgKhwHYgznircA5cAe9a1%2FzwtB3O0SIJiccYcjh8Itl5kbLTVma%2Bmc9fLZyCuPZrD%2BMQn9oCq9%2F6%2BZxHo98U%2BchIBRJkdU%2BgDcgRLBpV3XRMaIGhIaws%2F%2FONuauVkqhb038NQ0Jty92DYkELVJIKirqhRBscwQmh8vVQs8%2FagGcgg259Ih7kjbRhBBCtdZfFMWmxmw09HiMIF8VmfebD1FXivO0w7KgZ6pT%2F%2BypdnuFYpxN7WKljSjYyEhBuAufsgTROrbZVqiqlTSxSIGL7aPKySggE27kGWGh82PObGq0NXLeHRnVZWxrXWehDkONybon1dPe2KDwR4rn3WPcyA1%2FsoK3dMtX7bzjBV2rDb%2F3dRITX1kl73Zc3h3RL%2Fe1b%2FK9l4a8W4iTCqX6Nza3y9oFofd7X6bR5e1OUemnzxFjdj4%2B%2BKgBBXRFFkfx6MSlQv6gAPWnONk8Ygq%2BGBpV%2B%2F752%2FF3CkOaxMhOUG%2BPyRuaNPLpdSbwG9ACACOT65VHb5lwTY3i4yKpsdoW0t5Pz%2BbU%2FjCZdaM2Y%2BQ6bkWpNERiLYUhHAUHh2bawnItCmj8mO2NOgkSpWqQqQsrwwWWoQWcv2GaV6iSNirNdan%2FK%2FeA50UANPGPYHcT0fYjVVRxYFcEc02JZ%2BMMn6j8IGOqUBa8ibyTATVkg0scibwbc8UPAXJ%2B75ddVodJQdifn8XrdIxHZMSAQacVvnMCTZSlNVpFThn%2BhSHPJRf3naaI4k9oBV%2BJq3cK6o89Jcp%2BHEDO2dWLkigAty7e6GWBduLWKWL0b89%2FRKbTWWaf%2FBmDzAiOKAJ%2Fxf%2BFi51ASWAq6CoyuMxb8qQ52eT0heThjspSFLQLYh9o8WeIs5iNF%2F0rYEtGuuhmAn&X-Amz-Signature=e9afc72532560fd0b6d9887b79d943c8e3f480aefca9e33c1563c19b7014602c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6XCXDY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClhWDZxM0i%2F%2B3gM%2B0ONMn8D3hz0WjV6UkmhE72ziZecQIhANvVfZxdvsDorfn0EzQ%2FIF2ceaPZXLn27EBA%2FsryOL49Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzMklJcLKuhX3xhN2Eq3AOHJLJVSVR5VSCRUyt1CpL0WuPpmmph37gDdFiAsL2LEZ9gOw3dS9uglGynMn%2BfByNbyg8HkmlGZsB53hl9SyE8BeEBOxePsuE4O8b6n1Z9Yb%2FuZCv4gTt%2FmBo5EVGBIqLv6B8PDsBO23tKas3aydyM4PdG73tUh3aDFFg1fSPTuUeYpkC5ZwEu%2BXJtMY7lMeTJol1rPdbFDRjdP4OE6BNrDi5VRXMSel5lznRlh4Z9A%2BnPmrC4r6FYBVvSEyb5f0wmlmi9Sno0lsX3ac6owg3%2FGg9hpEInk3%2Feo5dnolo%2BwjjIEQvB45pTmwRoxbQvUAysuRmX%2BnRZjF5R31E828wgbHexeIjPTkofVSQCKC5nqPkJk9nJQwWF%2Fy5UrT2MXZpTuwiNXOwNeql%2FRDjGypYDRMSE7ggsQDbJY8IF4TuXqC0DmWx3i4pJVuEOCoVM3N3T%2BzOHcqCRbtI9JRM%2Be0RyAmwvxjzmRG4yCC6DHwr6HZ4duCEQbn%2B5nhf4l3k1sr0pTZ8XLfoDtuXNUHG3gKt9YScncNtAwGhHhYfLfHlgGdBa1euawVL7r267YF5yCFIM0Lr7PMo30DVmqvW8ls7uiGPhzkhkC5hKlIAPuDRwUJXq125U4s0B9qFRWjDG%2Bo%2FCBjqkAbYTfmQWLBi1HX%2BinkxeyXrdodHvxMnOBa2mwvTw%2FMEat2itDBoYPJCllH6bonZbSNJ%2B7WglWaDm59C4ZYCqwFB7O2yzr8%2FbO9qmQzyMbUcbtUUc0ZR5ROfP8yGANnOCmDcCb1%2BwWPzexOdEYIS%2Bgbh4uEFQb1OKeBOMIg8sIR6bKMn0yhkRAD3K3L7SFthEJUA2MXFrYeZspLRfrje6yzmX2bVu&X-Amz-Signature=bbc37e7938658173f3194c0d2f1a9be9ebeea2b3c0a8415fa4d83346d7ab70bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
