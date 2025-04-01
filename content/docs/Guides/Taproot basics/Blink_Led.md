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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3JHBIJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAQ6ir47MQWJngzD8yKsn5TyH%2BcqUMz5fYqqXzYDt9SUAiEAp8u6QoJIUjKHnYEcZfunmKzA84Z9ORxNOVN1LTl7p7wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB%2BpgQzNDM7oUE26SrcA9YCMYZHzGSJTRVjOvmeV89lsy5wA2V8Yoji4%2BmGXY5cnc0xki%2BDdic%2F4KiRr6nQ%2F4UgG8Xj27bvPA5nfHKNV331p2B6XAnBFNCrZnufbZy1v2qLtR%2BFUinH2igc%2F0ThD3FZTDsuuPWKleXSXMLOJ8LU7HaiHijBnKVOlCNd5ZA4Dq0eowMNsmaFCdh1l45B%2Fd9lMNCTumTjEYjj%2F6CQGuKWdrJ3CNn65LDBOpGHDidZ4yvrEkZU44aCeKRXb%2BSf94135gUfTriISTKIIQawwga49MAAqFgQgwUtSbsr5uo400N1m1x0uENLIm03RNyJ1diCmWY%2BhpNO1B8zQ2VCinPhP0BVCv8zE433zkv0Ngv8PHHzoNikXJVGMOAaFnJ2%2Fx9MRm%2BTSfMfdEybSmtl9%2BYtv5GP6uCp%2BvcyqfpxABzALzIHlwdXzjRpObGr6NA%2FUSxKUwEM48d1D%2FXo6yik1yl7DbXLtbfvpXEc%2FzPVCA1MYHSY2SRh3Pa7QGtDebJBoaXcv%2FmtrGdCHDa7BI%2F%2BtegqMaTJCwEsbd5S7yWfZGlCxVT0CjTLOhaReXAOQ4XL2XoC2LbcqL8nc6ctkZqaeCOPcnK2m1jHLkbV8Yx9hK9mgu%2FzABPmVXzfFE6BMIPdrL8GOqUBmXawzFj%2BDRZzzQUlZ7N3BF%2BEktrpR5%2BdmP6qYAgookBgtJQBn%2BENVBXqgJ7CcPqxtDXkQRQkAk1lbcZh9dYJ2RHhgaSJ1j9TwgK3ycmf4NMx1lMf8A8lANrBM8lhvH%2F2wpxT%2Bv%2Ffa0pqHUTa5%2BhDf9DNApjRULNRgFGRN%2Be0rh93TgHY3mEMcGlkWMGmPUwLNDtqP3fyM7BBsbpv1aFWebZDOP1m&X-Amz-Signature=d5d408c3cc096be052d02343c4e64d037fba2499f7a2f9679a8c7c71f6d26335&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ZDR7KD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID7Tt6kKmNIohAa02cPGsjDYKNqzcmUU7nnvAGJV8d10AiEA%2BNCpm9BOT9TRmDPu3YaTJYUvX4Gc3akAsLLAEQMEDHEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6v36oMsonsKdxMYyrcAxrEyDdT5Z2AL8t7dPhPRxP8z3OHr6Y%2B3i76CbJlAD0K3L1pEYHIfg11Y6NDt3R8xL1yJXKaiRrkf3JYSKWHu2CdAQQwm4ILcRng4I3Gc%2Fa9eJWrNbTUR0u47LEXquXIIyepV4mrmz2KefJsKQKKGub8R8J0KfODRjy0sOStOlDNabOIPQj%2BFCOnQPT%2BOxuKCjnZXf%2FVPE05ptMm1EplmWrmCrsQ2yCrXksyA6JX6BnzxyWjmlz7HaUXi2h3GwNAmze8iJglteu%2Fxgu6H1s2ZNnmz2asEspc7i%2BTOgrKOgNNw9tgqkbwiUKJEdWNXX6IHBmr03yctggEoH6asWboi3alTszqeboIOrzY55ISkVudY%2FX2KXnWGmgfCWSv9MCJRpR2PrrjsviSLj49Bt%2BT4m1x0tWEaSMpyEe6FBok%2F51vmaCWbx%2F2Oiv2Z5rOatmGM4we7X6VWF2JlP0fWFCg4DIkLSaW46PWlwZokpY4mASwG3sarLcWPVQSAgqUa77yRbDkR381rLwe6aKHtRkRCoR9frvAR9NlwV9nYq2zFlI%2B%2BYE0DDqSSZcaqir0S3wx13xTki%2FXirXTh2yTpbVNbvkxkNcqUsXg15NVDs%2FLYuSXC7hjCbK1YsYptgkQMKnerL8GOqUByuTAHeb5R%2BHv1Ro9FBicEMaCTMcwwm%2FLHyHgZ6QWqbSVfVhwfBfFsoiN1SohGsPi0pEqSPrf9YH7O7wgzruhhkcmdTK7f22M8pB4tD068bXi%2FPPeIbQXoMvXY%2F%2BGvze%2BEXyctriI%2BxOxWV2GsjhiDlm6aUCXW7%2FTWLtHnya6vtLamSQV0gzpgQulO9f6Xw6G0c56Og2veDr%2BOYs8zxts1G6ufA9b&X-Amz-Signature=045a4aa978fb006f7402ba6fdd70ad014595af8cf7f0062ebfeee36616f27933&X-Amz-SignedHeaders=host&x-id=GetObject)

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
