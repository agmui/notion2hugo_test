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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCHRQGQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFt%2BqPHQ5sYqWXe8DiWI%2Bk37Nox3AzyCZoxedgBZ2AsAIhAKoFCJ5neGgvnBfIiTHh9MatWbVAPWI9ZUHhImheQVwrKv8DCGUQABoMNjM3NDIzMTgzODA1IgxvOV0VX47vIoN8kYUq3ANKdjb4V3J1SLg3TtfIvibvFw3NKlhseDPSVbrg%2BC2ENSTUTrfEzbyvsgU3GgQiTWhDv4yZT9uius1Nw6e2wqmjOz8auC%2BqNBAEYcwuQ3GMCLVJ3MnSfKJWIQ77taolr3tNBHteAn95a0mOqONZ33Jv%2BZgVRzyG1VUJHDfumjMUVs2TO549wlGzdVwou6pU5dyBW1obN2aeNvlLCZjnR5r5Up%2Boq098m5lCuWfBaW79dTMQr4Jaf6NMPxrjra%2FtSjraqXANjF71%2Frm2Dn0H5jIGmrQUJidiJJ%2F%2FNq4EnSUUH%2BIhsdSgtb2slLowzfoSP5HvMZcL4dMw%2BTPXz9OcK5h7yGKfTRz1JBsJjFJU6jbCUYP3w5GnjG%2FRXpJF6etjA7tZ2Xsuh8fo714oGPo8qR4cXaxoNGq09%2FHlUZDfIJELIcM7qa9XHozI7Jeo2mOkbmrJxcdKGknZOX6nVPmi%2Br7miiPao1ONz50i6fgX%2FRruVDPg1qf0obu2B7DgPSsLI7iOl%2BwECipu48Ti1C%2FL%2FkX6Kh8V2Ffl0qMScaYLIH5FGTm4OgX2pdbjwHhenA%2FIWfaihsKQJmkHukf0kOip4J%2F1LjUVpXYWejzLHW3CvB8hF2ots7dLMtNcz%2Fcj1jDA9Ju%2FBjqkAQQJQmLTHBBX1EoSs%2B%2F2cTpXRdPrRWRG5SOqGtuVibm1IxdjEk7%2FEFkZvaEVUR4rRfu9ul1RwSATGW0TopqEaNvdui8FGKFyTjm4K%2BUQDzXs7M8CGC3VvO5qWuzfjDbPw1KHFYb7%2FzU6vMk14A%2BKLO77gt%2BJzmUekaihAtkkZPF%2BBjmN85GRqTsLMMmrc7MXOxkzPyCF3JIrHawauO7x766n3x%2Fr&X-Amz-Signature=319279244bb2b83a3cea6b5d24ce47c4735f6ddec57765be95bb9ab86f34956b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYJ6A%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwigX94dDiNDjW0KpNwuAlktVXLI41FUMjfBwYE9C9QAiBGZvASJG1yImoPcm8tMav3XrzXZrJLPbY7xd5AwAmRPir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMH7y51%2BETvxCNAQmzKtwD1%2Bu8KoNti3MIrQ%2FjEayOyvyPjPw0D3i1PxlQ29UYUKQTNEYvWlaXtH8odkFLeVioZhwILxuWAOm9wWLKdNR8qwF8jlZ9QS2jk4uj%2FHbOY%2Bjen5LcIHTxTQeJSoF%2BD9Uau04qFoNifVzkK25Rz21KsGSBaqIb7rqeaw0sXNogbkSbS%2BPIrX3CtUsTtVGkk%2BYF4rTgMPgugkL30ZKCzLIXHGW%2B8HxR2rrgWklMR5oYOB4pu6HckjBzloF22ObzaVX5Gdr%2BK5NEdJNo0GjACab4wMuVxAcX2McJ0Ha%2BsQISC%2BOx4VKROEoy8rcorB9YIz3tEVP71w3whti1ZCSfiwqAnPmVHBxH7rBR87RMzMt%2FgqeEkK4h%2FtE%2BdV5slSKrYBLnCmTP3D%2BPiB8SflJDysvsogsXqSSBrKfyt8OAOZLwu9jqRy35gd0aW7gku2W3lZRiC0Vox8hdxu8T%2BPWko80yVotV6WIylNMNJwe2LZFDPPNQDj99E1LVGs4L5LMM7yez9GQykcjWxPSYDcTd4Bo%2B15qqwrBHN79XjOUHiLbVWnlHk7n2oBrn2emmTj0rRlDEG%2Fko7xXI2iZlmt%2FspggqPHN7unLluK1r7NNilVqJOwPB867N72DA7QV34EQwvvSbvwY6pgEebVhVjT%2BVZoNhORWCy1ald73ulESAUpT%2FeThJyN6WOLGd%2F1SNJuDoO2JUStHEk75XGQnUGLXUI8zRX6PdK9cW1KR1TuBgnKgrQgDQpuBX%2F%2FOElxMb5WRTx5Xdl%2B4GZEmDLDlfaXXQ8Bcq%2FPOYqsKPS%2B0iLqwqJN0TNM5B8sArAz7R5EwryF0MJA%2BUz%2BYQxVfloKRdUO8TbJ%2FfVgs4VtKUituKK2ct&X-Amz-Signature=48efe2609dab1eedf25f87cd1354a6e2f0850ffe4bd5adf770b26cbf14ed7ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
