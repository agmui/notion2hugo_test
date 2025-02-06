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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNKEVB6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICXfp56HFjHntgaS8UKUJY4dEmNOwZgFLisCIqpDcIhNAiAV2qtWTTDIxSihjNVjMdEVIlhMEOMFyR5UtvcH9vmDICr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsvRzM5CdS4a59fwqKtwD3CxlMbWhlRK2Ws6ZE6C8BW9SOnoUCsCZMh7Xgsh2u%2BWYp0cR2rEJskHNy%2FkqLbqYmxU8k3VagkadVUFVw9uwLWVs3GC9NriwuiE7ZquH4MiUd8YA8cQDCCMonVbsCO2IclYiNFXTHboExaUIkslvNY1VMpc4x6aj1xZ4WvPDDworgcCFEAP8ckDpC8T9XcIKqUZ7B8vAoHdBHF0TdwYQp6N7c0Gec3Dw2cBquMCZOhceoK%2BMgAFhLTgd4jH9Wlp9RIemZN4dAbr4LANClWunKYASzZo45VVA7Qx6Smwmt6ma2J3P3cpTw5aYrWJWmkc6S0jUoY44NdUuWH8Eyhdj0kG6VkEc6we6DnoQCdv45yRt2V8p2jOVYBYB7x%2Be18WU2jzfHsmbucKKR1ukLJ40GmhJqzds3GKpHWEcTaQ0dVIgyNJ%2BUiN%2BLtvxQlX1kEMO7ZgrtsD6C%2BrR09y9wW0d6td3IfNmpjJg1l0bvE7c3mrIU7scVbMP1O0cndv0yM7GFdXFX4DM1%2FHbeyltYG75zeKpawX6hHLvE3w66P2tLUFcu4skJ4A4xJ9PFqOfC0ES7faZKEDEtIVMBphuEAuqca04dUifu8MBXD4I7x%2F7xes4MXoLtn7UdHe1zD4w%2FtKTvQY6pgFYXw%2FNf3O6C56uD5BihvknfjY74NA61rNfmFSHcVyh%2Fo8vjQiibuNUgy5%2BYG56pJdvDIA3k7wf%2BQbIEULFnOZSfUN%2B3OKHX31V%2FbJxZ9pkgNg7ylaiileuVKr%2BfY4xcVKDWTFgIZSdkjxmxX0%2FzleHMe5ZJqm9Whf1kbAmshZqSyd5oOOureIFSZW3nPq7fhY4vrXmIR01ASSuU4ejlVagJWh8bM5v&X-Amz-Signature=b3ac105c6acacdba40af2b57055832b74d987d60778526ead826b1ca6aad545d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHNG44H%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDNnnUkcmNFV9%2Bo2JeB5TAAVkUZXkesAT4RQLdqV20mHQIhAN1tKlK0O6ar1V%2BjDWfjq%2Bc0TKRo%2F0C3BbeGF0VEWUFDKv8DCGIQABoMNjM3NDIzMTgzODA1IgznphRdCQ%2FGvL91Knkq3APB9tbaylFnG1w8PaFD6GOjh6hijb763A38wSXDj20IU0UVTZ4m3%2BKAV5u5rnWb2Kb5FN4BSRaIgceBOoIKOl%2Fy50t4pjY8wqYKR8L%2BdCzkuZCYQw5SgDsA2n7RX0UJt4X5e6h41pj14Tdw6xpQ1VLdudFH2lk%2FXyqwDHwwpJJTfkM6kEVEx8WVtisBIZSm8ywFoszmdvb0q%2BFkQ1Y6iVuV3pzuwc8c17p85naiyFqjh58pkCpj%2BQWrYrALMLeZm%2BKsZlB2oXC%2BDAz9Tz9foSteVOl1kH2b9H%2F57g%2F6n92E4s4m%2B%2Fiyrm7K2KhR2bPpGzLHFksQlzp5RMjSxwHZ0R5mdNLARejoIPhKRgQBb%2Fdt8Xt%2BAvKXfl2YMhITcDHStT97a6f%2FEq06NOvV4GGZcbInR4%2FRJA4evWw1znJIH3F4x2Zim8VDrNw0jebikFPkOBHriImFH3uQdAWvTVp7hBZTttxJULvI%2B4bmEmhV9k2R9pOyUtQAjTcnYep0Ky7MercXlYn5Ck3giQ9mvmlFaXiwXyAbc5rc6%2FH5f%2FZeRocBqyc8mO9WHmHWlndFgzUS%2B5N%2BpAkPTSXKMSXIkrt%2B7Cplbi1GumVIq8zbWTLzN2ZJ0qBDMVxvQ%2FbLiHkjDjDw0pO9BjqkASfUPup9CtOn0lMqqJQYnyP%2B7vALMFbYyZXk9QCbqYWtAVVSXChOghI4OTWhPopvN%2Bx4KqS%2BC3her5N3xaQPbsEsRGp8XA7vKOlhHEJydbt4fiTEorPFONwY9LIuH52Pzokz9ezlvc5v8YXTs9f29%2Bzm4zMTwCQu33jPJ6P0cDsdEVZs%2FkO1TiC%2Bl8ivby5fWmSGDYGWX6UDabkTj6NKqsNvDCVn&X-Amz-Signature=e621135ba053925b49d715502235833a7a5b97774a3b179d5c1d277a13baf54e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
