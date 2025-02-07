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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7SNJJ3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHLlTk5EZDFyzFywagTJWXZntBucb4gtzvSA%2Fuagg9BrAiAoXKa8lHL1vuPN55JlBZ7ITxwegIam7jbZLo%2B9RnJEwyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMVSPXbuGfUFE7rnnKKtwDU8Oht5nC3Ix7pvrOvoa9pPBGO0zsz19P0%2F7cSoivFnr6gfLkSOfbYKAfwFZao%2BvKDrKMNNVH635ad2%2BU7oQBqxA6RIKgyhvXDUXLBCkcQkYJcbpA%2Fr7r4XVgVH8z9%2FZM6RwDMJt12oKKwGiapixrTaqq%2F2xjz0aftZkZRw6TO3zgP9QcT9K7KbtFt7a3M7y0OyB1n1BtVHl8onwmwmcT4a37Fu3bQWIMJ5cP08rf5TP8M7m0JHVSVgx06Uztyq8R%2Bb0GIFSO9dgfcyIOzKnlgjEAybMDMuNDQE1gQyQQ7b%2Bw2nvbkKjWQSNBhG0eK1pB4oFM1K%2B5PCa4HCQO8tjx5Skd1H9Ca5jhd%2BB3s9aMBBEUlvzLymIOtxAcz%2FTvs5v%2Fgpvan%2BQhl1qIBUkDFXo4k0taWtyLN0NNKo%2BfDwCBdyZ2yJcqNTjqCbZPa6%2FcUoPU1HfQap1I%2BwsBNdxzCLlvD2wRmWB50wBF1ujCVBA8k79stLnQMdphjfGtMpFaWz30J%2BhZ3X%2B6p2tjJyocUh2bAcENvJUdGcC6jmCyzaUeFRsz9%2By9dd8GlkFZFtwAm4Rs1NeOpRL5kym1OSDxYFQA9J5tz5mdKBc07%2FaB6E7mj8gn%2BdwsgbvNcU3%2BJBsw%2B96WvQY6pgG%2BmTxxqTxsIilKjIH6keKieslgTWdRuMXQt9VvzxKzTmRzd8HJShLGOp8LEcTDbcN5fvxuAuVAO1XM%2BKwdvM7m%2F1NBoKYf8Ztu38fhC1KwvaOoxGc8ERHWYv5%2FhODVEJ7UMCdLC%2Bw8mZ%2Bsny672Ebq3VJwaCA8Tydk8LyHS0wVkQO1jwh8h6EDGk6KViYGFiZqxvapuRdZzoTyJDyw%2BISiFp5KWL59&X-Amz-Signature=36efa6292d3f90fab37d579c538b2a8db68b9f07a6fca61b037ff8a6d6831307&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOV6YHUB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFU2BCZynLzwh53OGKFYMuG7bxl5ZRFpJYfHpIE2b%2FU9AiEAgr6%2B9yy5UzRg2EKjkWalzZ218%2FoWE%2FS1oZs21nqHyikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDM%2FewfSBi0ake6kSCrcA9cHmjxv0KIe7tug%2BibDFTWMomwbdrQRFuxS%2BBIoyhZt8M374AfSvCKKZMNP2qEqBx%2F8yaYDVTmD6SrdjdZXCiXqtfDypKMiRoqtWmJlYK5B4RcGnkciNg%2BTa9srelT97Pmc%2BPPgl6K45xR%2Fs%2B9m7PP87F8TO4pqlSJl9iqIhvyS9tCOQJ40qR4em9HxGLcxoLPDs4STeuPoHzsa4OS92LwFm4EeR5BgNFfzhdasDVemG%2FIMmugtWdARk7gaY3q2PAHlFjf51ZZ1NByPd9LrAB67u99%2BTzdg%2BdGyPnBiuQIA2FgXD1L662fUpxZTCFs4etNT50t%2BaadxvgM2tjr4SM4PGB27XgGtNL7dcyOuJfJ5nCUivSIn875GbE5P5Sl8dJV27v5lrrWpFroNzPqatVFUNUe3vKLRUPBrV3jFfhoLCSNAxL4gqw6fTlHr1RpoZIlHVf4QNWQ9NW8ET%2BGy8pcFiK3wbl2q2CMw7ErqDuqIPEAQYKOpzroKJZaKBurOyT8czp%2BgEPOuPT%2BOzavu9Hh8CZFBVXwwHEgJqto9Bh8tb6bdZKczrlVGNFd9rCOH2HliP0WNZXGVTuT8meHggc9R2yh2F184z7xNu42pEBoEoh06pWBOV0Mv6Pq7MP%2Felr0GOqUBduYXiXcAavhvke5yyFBksKmV3jY0JnXCCKU9PtDB7GegUttx%2FBIj%2F1A8vuTQWp1sCxDTY34zVTXPK7EfpGKOdiuQhp9TWHjBw3SdbgFROx%2Fr3%2BCtirI896e3VqcWtoXDQqQQWs8OIkhqz1xqIEjoadUEpd%2BUUj55z1Pzo2Z1aB4QdEeWqa47UN0FRsOh%2FThHe3ctIgH1GKzMTuupYNHNmi90NKNG&X-Amz-Signature=a3556a20e79173a82728631c07dc7aeb8ccb5c654358eda71fff559e36921169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
