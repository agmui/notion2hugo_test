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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZXJMYL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpHM%2BOCz2WleP63o1v03SBv40ZD%2BI5Mg7m%2B%2FMmkFPXaQIgBwh%2FQCqqTdK72MG3E3l7TuOW65Wm7nenB0wMcR%2B568Iq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFwc32ZzpsSp86RJcircA0amMxNSGANHbYrWOg6j%2F5aS0G6masAQ58IPCOgCPZzIgZEm2TBOrgnZQ1WOoPWlxKFE9FP6Ba7sSF8vGKTKSn1L0DJvqJnrLjW%2Fj8wsGY%2FeEbqj1pNY6n16cewsSe0mX9qKflhsttI8ogl2%2FRBV9q23sVWoTiCL1ZOB894wnr8bQlQd9mt2u4smiLkLOfbIz0uKU9QRYyjgAfJOTanopR%2BJgk%2F6kE7qQ8OCYM67IOxkitkDX95sV6eqsv9Y4tfdx8OX5HLNKdKpDeCdUPx5FgDpkM99I3cDoE0rJhdvZov5IPADw5N6%2FGkSPqPBbkozHZ8AeA7qByaRiIsUN43ilsDGOKm6W5xDDF9Gl%2B97SmSTNW3VyfS%2BaOP3KVUfPSHoc54TfemFccxO1q8pp62c3SxLnYGUVbvr%2BjO4LNqYhbncnynPqQjyhlmasGaiFJy2MNnznpCTe69gTN6jNN1nA%2B2ygKhDJC4Ikqp1Z9EzgRzT4OFtK5zaL25L5bMBY%2Fz%2F8NNUX0CM2xcYhVsja4L2S1HcE9%2FH%2B5zGKqe3b4GBEi2gJ0LNtkNLnK7vr9SmYdKqaFDZMvJ3Hz7qIwiTqJsY3cpuxLeG373IqczN4XOhFIuFKs9tUEI%2BMxJClbrrMP%2Bwmr8GOqUBMr0rBuTwnoK9NJCjXwf1hYvHD7Dm47bjbULbfEuYCxiqzYA%2BqifPhKzHNZUHjRxrkvwGhii5GWlpsIIdkTYffY3pA%2B0TFmPi2k%2BongrMamHwlka%2Fz2jDqVps0GgqqVyZD8gEFZIBgHPEH%2B6yfVTbcpaPELYIORVDOMmZy69sAsq1OFMTMiDyCMJWaIHGZ89NCC1CDdcRg9yO35JFqYPg1msTZQ68&X-Amz-Signature=4bc0c7ad223cad15a0558956dc4c87fe6dc81956a6265850acf2daf877af88d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCX5JYF7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5HUnJWbQ8UBZth3CueK4gaxi7BP9zdIVtgyEiteu%2FaQIgfPeHERGG9CmI4PYTOdZkqpCD%2FIY67onvzOG0O4pVDvIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDF3o%2FT5%2F2QWtjtcFECrcA%2FoWRL8%2FcJZqAeFFzRU%2BjFUEet1qLdmxdO%2BWScZjxKlI5u6mygkoUT0z%2BAfrhtu7%2FrgOPxbc99sFPAc6rGhrGKDF8oqIX6EU0W0eo4SFUHC4cL48f7r%2FWPAiQ64k%2FAu7ZPTH7Gu8SkkUYC9QZ%2BbmUH7wA8xyoSEk51biFn4ZDFsK9DPPLcfp3X%2Bp7AVYxdRLsEgy3TaItD8wj4MnrdXomVV6RQceBD3HEZVv1mar4g7yH0gcEbHO4b79%2FijLP8sVFgsliU4soAGSM5pFgan5vDwaFFWTS%2B0PUttm1jSEnC2bYiYrK8Ny3jCkbGxcF1oFLoPtEqLvQpx6sifOwuigiF4ad%2FncJ9InosIdGtBCR13SWbdrC6o8M5JhJ6cjVA5wRwUFS%2BFE3X9%2F60du7e9frcedpl5%2BH7C4ZviL4uSDsODdKFuDo%2BElekXEmMxm9UUXLaZtEmpenH538qtRIdRcw%2BU225mnVunHxFehWXK74f4Qa0ZMkILVJ9EXJbpoOyUqWuq2KeiY7i4Sv05Fe9%2BbFz2mSSp3lYVoBC3%2FiJ5%2FX8224w1uD78ONGjxugnNFifVg8Ca82ohMeitt3RmDnhLnFK2eskW%2BAqh0C6qzqsMc3IYQCRSImP%2Bt0%2F5eq5KMKexmr8GOqUBIKOXaaOsgZame6PnzMk%2BIb2naKE4%2FvOOLpUgntA24kBIbQro2yXlKcadPtD%2F2tm3mcX0S0KxEP02OWjPlo1LRuhXHgc29e5lmUScs%2FGKM6qEgOK0Qm0ApwPj5wHdw8LNyEYJYGtUyX3qrtPOI1ZczHyAuZ4KwTgar%2B7iSEdT4TGW2zGCrr2opW6u%2B%2BLW%2BHkmKY8I2tXV6gLR5gCs%2BkAAwbXokOUI&X-Amz-Signature=e9cf5f9d19e821156dd91eaaf314f3be3995f3eac871d5ef7c4dce0ba84a9974&X-Amz-SignedHeaders=host&x-id=GetObject)

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
