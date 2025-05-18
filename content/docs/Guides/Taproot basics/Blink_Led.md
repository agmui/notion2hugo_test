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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNYTNPY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYZxbSGKm0MT0VLVsdFbiRrGQNUH%2BSynGABA6CMYIUDAiBKRSE0bHPmo9NfYuMZYYH%2BrT1GeqfUWHpp%2B6uxF7gbTyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM44vt%2Fa5ucOLnwBIbKtwDS6TILE0t153L%2BVtLgpkN7MOENNjIU5uof5YV%2BvZqy0QLSBK%2B6cMWGgMaxDyXpcZw8ux8aspBSOK3FuIKIbPrHJ6qFWkbU4f7FJcmFwLvVUimh%2BPERSCC431l35ELgBvRLkdz42OAj4si6g3cD0aQTHWZ0q%2BfSxOwlbtsvS5llDl4UXhIOOOmlP0hN4KSYjE1ubjO00gDy45nsRO1lDZT6XnIh9Qcd3GFQm%2BOL5v1D6VDIb1nj22x391B6LsuP5d3LDBBZ3KVFXW%2Fl2y8Han26b2MjbtBgCnK2JjkI0g9YfSRg7fyqkY0EMtMR4PJyY20kiDfoMCa%2BaVjbP%2Fz54h%2BuVNRqoetZN2Ps4xwT3NERxi1n9%2F%2FSpDUyR9Ix7tW5wsQn16DtKZFEWPJ92kLseLVskqEN707uGwa4IFp8LVZ%2FB7W9A5K6K0hFTcrCYThjK1pKeUBeJH5Fz1%2BMuLP3fp1ntaBOhpqs95yVkxhCocutzjzC6WYEr6hQ7ntYxjQe3SsAvap2uHvJkwQba7sQGY2ugTa1badzwccoxVZaDiE%2Fl2GtqzUhVVHVOFjG6FHrdW82rCnGTb7K1UsQv7EfjKgJRwTHAOcJb68nFYWMjoD9J%2FHGCHVecaQCloi%2Bakw2tekwQY6pgF%2BhxeTtMaS5TBOW0kV0RsObVJNCymtD53FthYFDnDu6Wf2ZKBY5Tls86S09RP3LU8qinvJtJFS13cA9VXYDKImWnhukJa23QGMEfctXmTi%2BRxgOIrHUJmLoFdxJnadhBTxBuWCkliHSLCF468NEdndUla9f2%2F894pmACH8atqqdB7vofBgH%2F6NHipZxbwJJqG%2Fl5eD5C3EwjLOdTUEsPELxqPHfw%2By&X-Amz-Signature=b51e205ff902178979e44efae2069f8cf565d6649e6b8101ada6efca2c9bd914&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NBXRXNL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtmofAa0E35XAUO4n0R1FuxXwVFLM9gJM1sJaX1CtFZAIhANLc48FTtjnzKUdMCVVBL2Sty6bDSeAOfbTff%2Bxs31WQKv8DCGoQABoMNjM3NDIzMTgzODA1IgzW%2BY%2FWsa%2FnMupYqh4q3AOesXlR8wE02gOVYEE8Gxs5DyI%2BD3fyJBBTCNPC0SrUpffbm%2FT2Q%2BoSyXCHRjrGadXHCh4drC5L3H1NLNAEQtfGmdYuG%2BRaykaxHpSJ0bCX8aAIay%2BsQFvZzc717VFjFYVCUZZ5GAymSYv8xGUjzpdzkNzu9lEzb9gZt3ftUlbWPwpH7msgAjRlNeOov0OKILOYY2QkdHu%2BXO6aci9v30ZEvu%2F6g0%2B1NbANn3czBVjgvqG93VrsCsYSmXGTpGGp0blVs6BV9PNsY46aAKYWZv3IPQIn5dkNozXmPmMMKNBkUDbLbMcLQVh6qeYjsflzTIjZ%2FX95SXdY30PQCvYPEn5umtU7loH8TtHJXfiGVUPMBcCHDYFD%2FaXaZf4dyMhcBaEgAW3BvCbQxT%2B4QNFUokFVHrF4UlQguHY4geb%2FlC7sUUGXS8Bu2OvOXsS366VCNgLbHb0wOMl2LYDfx2JwEG4jkqBTSJApg%2BMDBy40OyhYXWahsobxxDafbCJYVcIGkMSi1B%2FqqwzC6CCEor6HLBVDkWpyq4vl%2Bm%2FdUK18yZ8zpBENC9rFXm8jF0gRVuD3QALMoj3sUrIypxghAniXFQD8bqL%2FSdU99t2dn7WXe3ca7B1I%2FrTBAVuPUeHjMTDl16TBBjqkAU3G2P9qD2IKbxEltCAbNSI7ADzvtU3r5R7m%2FTSXNoxBY6BWSk8KqCeB9gtJfk%2Bh93EZVaMlSnS8LntUedlHDbvKFZquO05hysh5laB%2Fissi590BZqTc%2Bdp6%2FOtC%2FW14M6NV7S4I5%2BjGELFD8Gmwbvah0%2Be2MfER%2F%2Fel2hwfHq%2FbxIq9O5xRLwkj%2FNW7j7W5CcKU%2BUaayWdf0uEQ4SN%2FaQ9JFoP9&X-Amz-Signature=d693c8a1c5909929d3730aa66ef4d6d4d05c5e2e9ce8c9247ff42fb2dfd76361&X-Amz-SignedHeaders=host&x-id=GetObject)

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
