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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDRQRNH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7TTMg5dbR9lC8d1X%2F96l0FpfXMQczPxMsYiXIJ2ZxPAIgT6fSbjhbFDQWNKLA5dMTWGIvkwNCv2hDaTL9aV3%2Fau0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOrYlRApnvEg5w1inircA34bjfaE0uwp%2BK%2FGOPDdbY5K0unAp59OZzXIgMMgs5YWwv1d0cca%2Fd7CiV8Q2PUJlENG58a7scS56zLuvsyLqWt63KVuu0nvzMOcmsnQj%2Fy3pvTB2EqZKsdlWpEcr9oMqG9bkyZQRE38gVztZI0iTwqgWk5KP9AwqAIerq9%2F0lWIVUZbGC40f8wJX8oTn63VMw4mafHJJMGlVbqmUIace9QQGleYNVkBXuuUUXsx5cFUz96QHqOIZmGk5RtzjLJBN3HCQFD1%2FeQOR4oJDHOiePFIu%2F7dZP%2BI3Q3MWCeUfem3kvasbMHzQlmJ3R6EzQf871lO2AMiqwIz3GiCTsHwoWQfz0g72ZpQalmyZ64mdtEjjz%2FKDMlStEZEFQRU%2FaJqiyt1%2Bj7ydRHEDmoZD14D8m69m8W%2FoI5DXP0Kwq2eKqrrYVcHX3WENYQ1P5gRIGSSJQR80oCwqXBcScXWfjsEXECieEtJ6uC9XaI4Kvd1JvU6z%2BwApiZPLG57cJSuw6ex7jmUfnVYYh3aM2HK11qXQVJRvxypvaSPWG2n65xPFt%2BbNFrSH7oczmXLYZDzfvKAYfzovPFhwg%2Fcky5yMDkGPl%2FHZ37O%2BsptwRWwk84IzQDaLeLBhexd%2FRZbU0m4MPWHk8EGOqUBSdUdgl7OOmjBdXFhghIef9oUw9JM9o8OXFf8CSCUadPJsVdTNhR%2B%2BRomYVI%2F%2FgrVZH6vy5O7zCTWWJaYJb5MWJQRZNuDEyVsKJsB57QK2i8Wg3PuNkBOIX6CYF%2B31owo4kp7OYWnp4TJSeDp2HQ9AzX1qOhxmtmDeXb%2FgI%2FHQvvl%2FPR9nI2On4bIRtd%2BHzuDRbz98WX5FMxoEth5COnIvbBDJyGc&X-Amz-Signature=48d3c1de3b526e593cb9067c3b0b2afc012c3407c2787b5a1867ad38d1cab31a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KLCTYQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICSL9T3JV7C7maIMH2c1tSJtwERRdHB4azUDbbdFrZmjAiAU39OapbuQAcs7IoinYFv86j3nkfYvs7zjF%2FyMdImdQSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMupnnOfa0PVgFcXodKtwDf81y16lB21g0FYyu6u6soHHOAGkR%2Ba2SarhFjGzIP3wnRZWJ8QY7C3%2FwGArPXa9J2kpVq6uUqkc7rgJRVjVP0PYCnCwn%2F24ezCIrtGpTvX4NUt3R2XIra9d3cAvfrERCllC0QwH3sfRj1AnDJCcvqK1l%2BEHetjd7AbILPvk1sqYJmxhSiDiZlHkcTqKTr9WckzQ54UOISpTb1xWWvm2W9yuEtJ872tWoFbTwSf5%2BNE78VqW9mQjkcKbQgB9rpYRWCWoSwjwgav39mTWWV82MUlnkp6rWbFD59SBYY6ePxvUb%2BoInWbTZ7y6A486XST2BrwACp4FlijJI3b1tRv0kfnb8WlL%2FGAGEvi0jXTcQoAz3o7NDaX31H%2BWKCoEPMKSOi8vhY2r4YZkeocw0MHxNER%2Fbq%2Bun85FLyrfNKS2GB6Yv7dP2iiPvhLokHSrHJq7Ljuh1jdqL0d1DTQqQF6p0YX7FoTD8uqkomNgND0yZLNDGr7fNcy4gupdtLMj07MvH%2F%2FkPIS0AMICptPH04aaoohNy1Y4MAjQfrofZfTWn%2FwT14M%2FP3cZ7kyvIS5sP06zVPMujseVvDT%2BL5gRvXJQwpZhE6aHJE%2FXTXpDv%2F2iW0JxJpTBad3mnayJG%2Fi8w9IeTwQY6pgH09f8Ayzvf7Rh%2B%2Buc%2B6AVAqi86f7McE7AJ4nAySMpf23mDRBPPLwKVu8t0lLKyYWwP%2BIGXr0HcfMK%2BqCE%2FVDGlKhxnJqeo4lUZflLivAxqmAHnI6XMg5EMNAJXA%2BPDz035k4ODkAtokM4bA7oyDlGA9dL0DjVyNBI2Lp6g0hHdf3WL6q0lwM1mYOWkTeIeGjVTybC2vyUE5yzL87SHRhPlllx3tCxZ&X-Amz-Signature=cc3bb0f10002e60f559908f16913dbbb91389e3c4f682ed3b150d76c8e79b93c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
