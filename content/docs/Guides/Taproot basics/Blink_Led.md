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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6ZIP33%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8xmy4%2F%2FhL4bkB5bhCS9zMPEQPGMOb51WXB1ImqziZuAIgCa%2FQJzfQXGhaUUTvBTg5OOHkBaiBtjh0SUxUqvjK1mAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmJDl%2FPtD3rm6YziSrcA8vG0PqDNLVan2e0uHnLCtc1TksB0oqJDCzBQeoZcxNOAweRCGB%2FXU5geW5ckmT4vFemItVg2tXZmpCxFA0L1usvRgPsuJEgxR56iajah%2BvnY15t7VMUBmooTBbfm%2BatZSLTMpjABQytKlGkpxufn9Fwlc3b3iooapnRxGam3syskTJgJZfPrP8NZ6iRvq%2FcRyaSm38yrmZ%2FBv%2Brgml7tB4loxAQEIavtknSwGcAU8vWUbj4x0OAuAD%2FGwk2fUI07ffE0DmjPjvaqzKAmnFT3quRkSoWsH2KjVeGnx4SHVYXjo8CBxoI%2BLt2ufETqXT9fHCk%2FFWAJOz5Ww%2B4tQmSVkPW%2FVsHplzoGOC58o2XDY34p6cTvQ%2Bpr%2B%2Fax2C6DB2GKc5IPccOLlWHtBWBaB1b5CgJpYKAqovnqiaAU27BmPlwADdLHkiYCOhqiWaKmA5UgJOLZyMmZ3GLBnVBtTuloXRkNHaSEyB%2Brj5JjS9%2FfXtj8c1wwdqrKb8SgI16z12SVOQk5Ps5GIv%2B1%2FNSOu6U0kba7RAkEsw5YFQtewR7kYGVHv1B0Az8wcD%2Faj2LPrf2D0z3meKCHVEyTGZn1UO6Tm25EAC8n8sjYYew0F4mOh%2BPsjFG%2B9GQYgOsAy%2F%2BMKStscEGOqUB3JBq1n4LtHHPKrW81gHsZy16AcdEJT0UoddOVGhgYSkPuKDwLUYhHc9gb3MEh%2BHSBB7G6XQ0hRHTtfxoKbChoNGPRI%2Bm5nZ6yoWYymcK0qSgbpcCg2Tzi68hOYjdldZYunZI7N%2FFpPaTX2XSBamH3m%2BAUDDf5exNuwNojBUiHhqJnAZpKR%2F%2BWr6ECfs3fAKqn9hnY5m%2FIi0lJJqzZnYj3iHNYSM5&X-Amz-Signature=38da11020ccf84d3484631391ede42cd95eea63e9dca01fa18f237e90168123d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BFO2IWS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3mVR%2FiwKv%2F7MPTkj3k2jj5qXcOqS8QuuH25wqQVlHJAIgLbkCl8oq6FbzVg6zJY6DPTE8fPMXn5dxqXWd2TXjDlMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW%2Bm6RpeHILthI0tSrcAxYz53t%2BTqPWrEmqm9ngSJJZh4HQfNPvdgTE6WXO17QFAagW1mhP25Fvm%2B%2FzRM7XiDzIsY5VG%2BDLXRRuhI%2Bsz0BnG0llehnwoQvg%2BWlOsXPbDkmmGc6xsZ1UYifz2GdL65aXiv9TPSRUo1bvfzcs6XZ40dE0RKsuIUO6M1Eoq5zqpSkyu2oqZMI0zpgBvuRmhE0zNr01HZ1KHYbJpIxq3KFjSoesjd3AGjg0yK%2Fs%2BQMzlzHvBOvW7NnWhttntz6pEalcPm%2F6Dj5yer0gErG81HpZ9XqKYiIpEkOwOVM6AJE%2BzBVBuGoUiDbEEm2SpRMHtAF4tzxnyGr3by0tC0XcaVo937Ob9a0Ocok%2FGu4YMPvFeQgwnZ1K9WOPz%2BVmOGwEE889PoyUW%2B53xVFAwJvhlP%2BvYaAcAHzZ68yW4R5WYW0JLITbSDNRTnGqwC6Crwy11Td%2BsYHTtMQ3P8rvErcQKU2lpus7o8lEcocoJ3dDA1IeUtk5wixfwbfOjh7o0OfsNfOAvtFv9eo1YmUp29BXkpgsM0BvH0LYpjUki61tcim7mx3JdoJkNMQmQHHs%2B5G18abV1uUjlRDfiPYKDJW1TitQeuuYOXxByz4kTFDav7tuN4K0hdlnXSMuzQyWMOutscEGOqUBL4SzirB%2FZk2HKU%2FjG3xtKyF1QZamI56H2LncMj5DAYt74rC5Ig5y9nO%2FnQtyoEwIt6KaBGTwjsv5p5n3zxpj4DDKBs%2BoIS4y9rWtybRN0yLlAcPd0Ts%2F1A8Tq0SfF5iElbhUeqdbc%2BfI13V1XwHwl0m9JRP3mTd75iH2Y96tM1Dpgy2a%2B0PFfLqOL1BzxvMvlVBNZHBkWMh%2FNAOeTvum7%2FW%2BMFEd&X-Amz-Signature=deaf9b2f0b5eabcab9027d119afa1ac52edb96dfcae31a50f39af52fbabc839c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
