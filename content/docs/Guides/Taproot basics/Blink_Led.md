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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YVHM3X%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEg8aaNyxSgaqwWKJjok21JVP1t4CMEKuuje1r3vbIuwIgKGizmfHCX6AXOjBkWrAJdC4S5e67v6reS9nbWB7Nsigq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcHGu5irOjUF7pVXSrcA4IY6otjap%2Bjs2YMCZqLqRvmBxDFMpDEMVy5LyERUv8A%2F2hx6ozVIcnMdFTLKgzaXB%2BlIxRN6JQf%2F0Cxn0gM0icUgFIIkuR%2BKfcizrmipRndQNeUJzdXbrQiUPTguGorJSdMNbFAliR6T89RZ7mmce1bYsHgC%2BJlUhvlcOg5QwoQMdhLEO0R9BUPsvCSZqdfWcBf2bteIC%2BtrdsKTptsyjXtHvQcbOMr3BCNj6ewoukSEfS6ALludj3Mk39nCQHemtOFsjGN%2BIbzFv3qZtZ1ePrfh4dOEnBD9BQGoEIdr7Ct6sPMuhNN78R23BsyvqLi1RSGXOd07JK8cqvCfDBuDTMakdqUkM%2FdsMv7PRZKRSy%2FVsh1MgUivS0xc%2FskyRNei4kDlVAMhSItBW8yJc6RjTSOid1MCrFUpYLVFbuzkDMXNHFxq24VlM%2BU1knKRnK0HPvDZWJ37M%2FtEFvRhRIi5faPwHsZkxpJ%2FifCWU8FfNNK3benOtm8BgZCLWmp%2FG2HW5JQ8%2BgKRU4iiByZITsu5fiHLg2vF0uL3fJh0JA3tKyMhLA8Is34pZxL3yt8jWNX%2B%2BpgabYPCzFLOBca%2B2RYCKwsR8%2BJ2AQelHoPNZLCM%2FhM%2BS9uWjZHqyBJSqs0MJDDxr8GOqUBI9%2FhJfzLMEoeGikieaFxgRZ7roFIUlTLoFx%2FPOwfuG6jxnYX37u%2BMh707ndB1%2Fc6pRBpyVvXYZFUy%2BuVndEjcCPwZWk0BNKApOC%2BJXlH6c%2Baf49Bsk7LiwRYurqwg7Ms1rO42FSdXBpeS6qTUF9e%2FibgqX9Yt8tz0uGm8av7em1cZr%2FP0jyl4cKrwFJtZv%2FaJwIy1m3qWctOpfOEOU6n0nfcXD8w&X-Amz-Signature=732086cbcbf43781bbd2ac70e62427eb2ac631aa599d6386822e48c77da8e67e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SLPQSN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7QI1xDCqjKpfW4q1bPCXAspxp3dai%2BDFnOAHeUSxbwAiB1ugIeWaMmlL7vjAKkNUcXVp6GhjehDOaMatmJ9YogTir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMJtg5NMcF%2BV23zZhJKtwDuvVt4pER2TjAyQtHY1886rkzSOUFXrzcQYvqIlmzyfsFrN61VpZIOB0zUJejQuTnS9ZILqaDzMJwbaKJEm1%2BbBqvyFUmJGvCyVOXIB4S6VJcdr8JuHdrv1GYkNWVGCEef9c6X1PU8a3zir80qZEsGXlQNgxdry0qMvO7NPrEoCJDz0PFED4YjrUwLvsi6H9ylZhR5N0dw721iQZisJPAH1QYFn%2BFkfw1o6kIFx8e%2BT29CdFj3xP3VgrtvrarpmwKKyZWfJ%2FjooGQZ4UXFEiF5qOcpKQbAMKol%2BK1D467r6bq%2FRAeAy%2F4CnvEk2JcxqtP8%2FxN%2BDgLN%2FfIyhCCrAdnPDptt9fKvYqPgTk4QpsBePxCxaSfxEY0MvWMAwT6NJ3zADgrgTG6uIaMR0k1lKfTz9rhIgK4EWgfd5U4uyDgfjV3p5%2BxSp9TaKK%2BRESkqEtKpJAmFeYj2X4cssNpnXw9FLnDLFKGISpqeHD2VLzZ0U2qlHDXDfuf0AH%2FMznmpRFcJZ19xo2oRgr4B3MDGJDrn9nvN32Bbf88FnTUxJ0EArMTmuWpIQbkt2uvkrfAvBZsGy3y83R%2FAt7Hfg%2B3so%2BNiEymGqWpzMnzBWFgCyoPyIphjG4tBv%2ByTa%2Bn3FcwxsLGvwY6pgERKlWHg60fpgbEmJiB6WUTALxQtv4FNahM%2BCYzdUzf65weHsGGWFHkSegnNk935StCsWOXwkgQ3FTZvx%2Fmys7ZJGJ6849LjzC%2BNGQXG5jl1PHrS6WSvpHnuh1io0TqXDjRTkNtvqsoNfVCQVwykY1vWXIW3qrJi9sX916r2glEg4Rr2q2s%2BHLDfUv5ESpVL0xBVvCklvWZNcljJP1S%2FUd11bSKenOp&X-Amz-Signature=e66b9ca0931ef2c84a065db1ccf292b816ae98190b822639a7eb5caae4133324&X-Amz-SignedHeaders=host&x-id=GetObject)

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
