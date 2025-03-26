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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GTB3MN6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Kyn2wc110Vr%2F2yXDzzkZF0w31FvBrawVQz6tkZzXZQIgHiV9BgE181xdm3fcLCr8R9GUw5LXAFq3ym9negdKzE0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDU1TklROZrvqbVaTCrcA85nJbXNmlEDtboTrpThMHAnpQQdfc0X1iI2b%2FyGK8QYT8dfsL4jGTg8Ysn1wmErmS3nixb6weu%2BYFniRUJxWqR4gVK3croDzKx0eF5GMKtNpVKg%2BnQKyuHsJOPkFQ0yqL%2Bd6FH8jdjN4P3TAV8BnzuFkAJuQQml68a0IBCnmPu00y%2BB0KDcEL9KQvQvvIC1PXDO46u90FXnBCQwV4bITAGuqFk8eG%2Blmd2ti4U8tAG6u4%2Bt9ZxdNxxiQ00NjKu0rlN%2Blv95iqhELdRiLqcSqQesfcKtMEuq0WjmSzW2mqX5qKnrmuypJlKOTa0qpDwTylkuc28Ev5EJ7DuXj4RGOC3Vam4z0Hfn%2Bu8%2BPPFtxlBoelp5CzblLCeMWJCvFE2GP8RkY13vP8eKgdkit4dDQe4CUcI2HBEVB334BndRCBBSukCuPa4yzUXTzTrNv9KNUNF5Bt%2BJmIs2fSpCzsrPy7JQrfUJfPHG6XV6%2BehBU8B7h2qSkb6PIBLQXhHNYilbMq4GwtXQLlaT3dXCtPMcQ1qAOtLD%2B89fYSEa1%2F6sgMLrpNVwXJi8qPaGO5dLN%2Bmlazi2mhYo77MApc%2F2eyo94MSfeotOhP%2FAHVA8jAmU8bdO549IwtEWEj8fI7MHMJ7qjb8GOqUB6D11b5Z8tf3GPk9Nz2duivpVUqxpeFztGV6az9JzUcP7HW3ofL3p3siesyVHaoYABgLVF%2BwViq%2FTH2Lq54It%2FEshlXkF8onJqBrgPTbuMNftGBflgTUMV66%2BuL%2Bbm1PntingzVQSmmxfRSRd8JBlghes2ap7uM9DALTcxu3VYt3JuRNBlKFRWVU%2BLRfwA4k8TxRXrLb04DjREHJop1oGH4%2BVtPA8&X-Amz-Signature=c11d2665e48fa3f35154fa86b6c7458798ae2d161a31a43c819911c60590e828&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSULBSU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDcGqiPGJUVa1nyHX2YW4AHH%2FrU%2FXVoybL5LxaUqTTuAiB1luFX7FmhArcU7Cr6MMsp6y%2FYxHR0ClbwwKJ7hJg1Nyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIME21iYRtNGqlwnkSVKtwDnLaaxYGppbuwtrqVtAq4N2colVaeHKBMgN2mM0s%2BQHHSSoaAQDDPzX7cMtz48jtbj3tCwF97%2FUIvcwIZqqvo8fT2pyyujCi3jVyfCWF2RV%2Bjp5bOD4NE1RglplYw1%2BexdmWNBUFTMyBDJSMeXTruieqH3n37Z5BKMmyMld2ShkeXsiExkw3UfLIwWpCL68Ul%2BPDLEbMoCZwuDu2PK22GAAHOLmTlvtNOzXay1b0f21upv%2BDPhGhP9DN82mj%2F4Bs3CMCFLq5DDBCZRFC%2Fn5AGhm7jUdiI9AYwP7OxJlRLsNLDel94wc9at%2B93SD%2FzQJTCnITsctbPGaoWsFxdSKjEZPJLGhScJeES6hsZ%2Fm4uWgYajvXBhLro%2BjNbRRS5huIGOOZQ6NFwtg2AlfvKg0I5Wt3kTZdjAjK6vbqsFgrNM5n9G6WlGM0UjQv4PuFiVtErXO3R0sjQ88yQS4jpYrkbcw4JGiJZdTTCT2LrVqKefHTqWM070uYrYjzNguGsapqW6wbsg0xIU5YQAINT9ajvcRre71yGT82kPrLsT%2FBAUG2eVQ9JBWPQXmgMacihRfxHI5WsLdVDIbW%2BpWpTfRX21mZUIhVGH1YCm%2BAj4%2Br7pW9458EHwkMSgBubbXww%2FumNvwY6pgF9jxBWvun536IkjN0xlPOjVRDPX3IgYrQW%2FvS66Rv4R4kKYKPBhVyc%2BrLy7hEI9vF0DaJovpg6VFJ%2FiqEWjb%2FK9T5cSP%2FZ1ZD7gt5Ke%2BDwv71USJXasIsEVH44WJiN008oQF1NUTCiEKwtYPLvHqu6YqqbXxI6EfWcJ%2F3MHda6Ts8SqKeVRGRaZGZrzwLBWPPKSdU%2Fy0GjOdDPPvkRrhvRSAsUAPuB&X-Amz-Signature=5a04c8c2a44cc67147592cd99bf50875e3d1af432ac35cb68494f51333402040&X-Amz-SignedHeaders=host&x-id=GetObject)

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
