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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUG5XQGF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCr61j3sjrcRd73I7uT3bmwQ7HqvDXDiPgyTm05MXYzKgIgDJ0ZFEedGYZbpyIdknArHF6YyR3Q2RCJfl3EiYweKCsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCHiU5z%2Bt8Db87MMqCrcA8F%2Fg7RitGTY%2F%2Fmgcov2MNb%2Fuliy3j0VDnxcVCanF1ShhOCszEBVXqSigNh4M1YpJgyBdBqEYSToFEDNrt6WcNC6vuUgg21nVmH%2FFCzU1MZUprWY0PKV7xTfsAmSbBCV8veUANGrY7DEC8d3UdTcAmoz4IDAfSKnflkvYdkYPaMjS9WKWNnQQOE%2B2lK09fDbAXqv7ZMQyk5spvoRkugYNfqF7Wek3E46qQ31KN2YL49gbzvf26CuTm8EhVr1DhVBmvPyB0OBzqZkUizteL9MnBgnkBaIIMdlUxY%2FlZ71IZiIvxwVh3BpmeIcZurbCRiXqwxqLVwIVWVtkMuplNusgCnoAlvTJ7OWalDPKljaBbliM36qqUj2Lsm%2FmdGVlWgotHwiYtBdkCaTOMIH2VzY79anxeZz8CDgjycgxfCRXWpy7GnuV%2FWn5oe2KsRpbSYwgCM6FAP6uDOU%2BBA8EN9bG20kds%2Fobx1%2Bexx5dpg1vyIUMWcfR8C42Wv%2FIBiOB13dBau6wCl4UZSGIrf5tESLN4Pa7ZIVkIxtFL7Ri3S9KT0xrrOAM1zMLJeB8Zo1iQY31wvaqA8y%2BVtDujyR9seq%2B4dIUSQGNax3u%2BC3uvmojy6a10keVT49nihh29b5MMzn%2B8EGOqUBHLokbW0jniCQWohPwfrkxZlwNspeoCYit4zOTh6zJJ7PPP42l7cwWD%2FlgCIe0Mke0wJJPBSZ2%2Fo6y1TX%2B6EYQ%2FZUTD4DaaYXS%2Fsye%2F%2BOSJtq%2BfTypP5qCTNGhAPBX5GMH2XWTjFpn9xtWSYxN7hYwMm6R%2BtQzsSALR5iQNYPAlQ3LLqX%2BZhDB2WQzPH3%2Bzo4zjZmen7dNUAJNOf5gRUsDMFVz23%2F&X-Amz-Signature=c2cd73e26573936fef93631afe037ded7ba8e4e9ba13b367cb690842f3a7286d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZOS3C5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCdJa8F%2Bnz3jHYGX4BEE%2FbwolDy%2FZEGxri9xVLhfJR%2BWQIgD0k2moZKIM%2BNyuz6982%2FN96Sua0qBqSsKQzY2py5jKEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNe3BktmQ4RPsNwDKircA5%2B6jRsHNWqVzzeNA61jXU%2BKIS8Qi47LE7n%2FuOgCp8VCFcHwga9sn7SMzsBD9C9%2F5JnOA2AHrJ3Qc4VnIMR4S8wooY71QMuV%2FCTm%2FSx9psPrRzWJipm5N3kJzoeLv%2BHAOu8RRiadSjEidT1nMbI9MpH0QO318WBCNnV3%2BnNGmMC9UnpNvT5kSQ6jsx4NegMsLn32T0368B3JWffOQMNDRcxwc3R0vdqhsX6t3gl%2B5fITCu0xZOwg%2FXGKALHX%2BYHUCOWcDux3wrwHIRkz8RK%2Bo6%2BCOMIgkZw0eRYY2GgRqXoQX21T%2Bkg9io6oh4ATJ3vtVv1KD3FP4jnAD4wMK2TB18B1d0QKfPVBbNoASTWYNdtP%2Buns9JkboWLmlABL7dzdVyt9gG6KL%2FsejLMM4i7O9KOORDsAQmUgWhPqmj%2Baex3fBASWYAH3519xFYGpYNXgJgVp5DEs%2FAqiSBiyqUqddFeAUimP1xdHX7Hc63RENfiEI%2Fdivbg9uXvCldT2DvrKCxhQc4Jshguk7N5Uqs8yKdT2qbCbQpCGKfD27u1vbvJVI9afFGHnXPSYQBdmLyQPT2IolHuXnoa6bjsJmGemUEq4HnxA%2F%2BTFXXuvsRqKmyFqlYz2xLWmrSHKx8YXMLCg%2FMEGOqUBDeuGtkUZP0TTswlEluV0Yfy0%2FrG%2Fn%2BVsCBNxk1f2Gj87tx6fmPbsJUC8oDM3W7qn56BimzPT2W4qNCvVBLaisYtK6sLmUbCXWSDVoJfIdj5krhdg6gpD8Jo%2F2Q2r1SHqrGffdry%2BsllZ7m0qBaSxeoryy5ELtlwJT8lp3k61Oy8Bcxgs7JtwjGn5n6Q2qjLwutDWrZV%2BZ036wgd%2FSLpo%2Bf7hTIwb&X-Amz-Signature=8c654a92b2c102ebf2de219c44770d628a10c69703ec17e30e09a065977a4218&X-Amz-SignedHeaders=host&x-id=GetObject)

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
