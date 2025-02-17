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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHPSGHS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCALWeW4pa4nnR68OvsLpSiSA79fIDED98pkNYEpHporQIgAm2qLByM%2BVXuJRJZxxM%2BfJ2SXm8ndMypPW6vLV2zLO0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDK2gl2ZeRLvxxip25ircA6J2irePbtp87G3SZ5Hz1hpoRqX%2BRonslW2hAmGDrL4c%2BIi51nX0V9kux6dLMCSmaZtN15HLd9mVsN5IAPLYt3rgucUCLbkuKdwK%2FAhRKMSOi2j72PkCGM81gGoSAKLCEq2t0IeIqTAWpaoSVPgR3fucyuw0Pa1lGlx7nyCq8CrRSMqJi7G%2FEHElXpipyATc0y8Jr%2F7Dd3Fnbs8Hmg8shlPUE%2FXT%2BU1%2FkPnpGCDlZfM9ybpq3Bt3801GgXV1gO6iIsJYrZWac%2BxCyRT54OY2EGjVlKAw3ot3o7qIk6g5n8cpTOtGrqaZDFcfURQH9yzfS8NInlE4FwlQwYIGSY6RvHYdMdHSeN5kEwy83TR9Sbi9VkzlHd3oME1r67V79XPcIdONC70Z4YzvCbdfETOJfv%2BJhccsWfhrVWmqZlr%2BIxennsq%2FBBkvL%2BgsbeeYpLdj5jeLRCNaQtsjc8C2cERhZJa0x4w7CHEax6mD1o7fwYGeOHExpyqm2%2BFh5g7Nj%2BLji8ylIlujiJkO3P%2Fr2cmoLt%2FArpGgKjl7G02VD7tVPb9R2CukMprPFTEqmjuSzNShMwfExA%2FGfrDv6rtTXxce43dNvm7Loc6EGFNWZ6AW%2F5Jr2afRMTAX6X9LNip%2FMPHLzr0GOqUBP%2BaMpUzgrRQMcGQKXNpiIRcZNIshlDqBe0xqkIa8yW441YBqvn4qyCq962qSK5SyU8ZrmAzdTwsnXpzeGQiJ2ScD28QXJctro%2B3WZ5tV6kovc7X4aJJZNxFB68ibqUXcKUVWCQ12ybPGiagdmL7fEn4h8GuQE1qwvhmn352o61BBuWvQ9b608XaKh41aCyGYCesdtYRvWXXEnapEpFpw19MM98oX&X-Amz-Signature=9396b95890aa1bf0065be57639ea0b5d1991d557037bd8cd07489a64eb8a4a43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q62J3UO6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFaviAnRDKR7cWr6mloeNXLrzAy%2BKrShYZRTktsv8THnAiA8TKx1QAmYqWbul0wBR7wnghfY2WZ%2Brsf7gThq%2B0dpZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMBE4zNyfr4FSTg02lKtwDBvCTWFryZCPowX%2FfLd3yJfmZW2GSab%2F%2FZJ4wlc7dxgzxlvEt3GCleXyHxS49LnaEEXxXWuhabh68OjkCfuFtOTJgcZYv2jKUGZQHH858sMt8%2F%2FPdHwbvQCICy2jSIEfIZ9YY4bpcOLy%2FtlZHUpbaPICGRD28uZh543tz0H2Fr0xp4PzVIahH%2B7mtJPcPuZXn06aFTS8vPwb5L6YxJMIZjd1jkIJ12x5AFpRuVVrgDGYSMZlokj9ig41cdLtBMnyCznYqHzufMZ0gWYibLI9y56kWO6L9pJNwoeO7Kblz%2B6uM6K7G0ZlJp7WnKfHvndKOO%2BBZGEIzHEgQw0lDUXf%2BH0j6wVqbG%2Fx7rOKC4kMQX73YVAQEs1n9y8veI7gAm91C58v5rG7K1x5tbRKLlio6vrQOLEalzWZs3j8UGnUfB8xV%2BAQT6IWmdeDZDXS8o18QFimKa5KAeDdK51dXFUbfRYsmO11GN2r8FMM6gGjV5w%2Fs%2BylUQoQUHKsSaU001Zqg%2B8KEolYmzvz1ZWuagUcLsU3tYZWbCZES4fQgUToeOfIrV0XKI4sPnFmshcknJDDDUFfa6zAPzwSTMpLdCnGtAEo9w2%2BnzfPxoIzJi%2Bo8fj61YAUGEIFRFBLkfsIw1crOvQY6pgFvey0p24qrr2dP8KPIVK7gYAW%2FavOt99MJgqN8V2AcKU8Vk4%2B4eobzlwrcCJjMXetQHwAWbjNHjEU%2BkwCxyeOQRkhycwy%2BLPaZJtz77mQzaY2BThccbzuT03GWmzEVyheoxNPg2d%2B8vNTs7r2berJ3hVw5DUTZejNUCcW99h9mES2UIHrcp5NMxO56%2F3Aj5%2BAT%2BzMdmFGdDuMrULdA2c4aSzCS6Gel&X-Amz-Signature=b2e9b8d9320724f8de3de83f5c2b67c53c71189ad854226689ac772068889d30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
