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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGEDEIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCb%2BrPVY7ibBGA8Yv4vzC9%2BFCAd%2BME16bkcLuayG3PS7gIhAKUObaTypHYdZSmRHx6h3vAPTBAMrSaTMt9KFD%2FvmhStKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKfcHS2ffslhlhwiAq3AMexD%2FG7fH9NjqO0G9wahbmH1xaAy250GaGTkBm8dQVbIfWpCVEX9PXDS2FI8BDtPzGz4Uf1o2lkNdrQhNh8sNyolOtdqK5xvlRHdUpkIaId%2FHZHu27W1IFRFX%2Fl1%2By7OslKWUefJbn8uZhbAvOcJ3HZb%2F7HsIhSmiRIzo4uGHEiEobhj0zz9catdsegkz9AQ1BTkQvxe88JFibJYcKXH1PTjdI09sl9v4Clr3iN%2BTkcR9%2FFdNHVG7rMYhR%2BPPAW2x869y0BqAApxFjadv9svVDW3HIC1O8J%2FT6%2F4B7bWByVgkQsd%2Bkglr%2FKapHhRhGdTzTuQNo5hXrgMKewURaekflccyMJEEtpuK9cE%2B8ha8QCrrxroLf6c%2FNgXPiwxitZnU31dtPqcaghLsjMND9kuzRgjd4%2FGsaGgvyCzFMtlz2VkUL48EVgoznLQxZ%2F9G9nvv%2Ft0%2FBvNPbDGkd4%2FG2chAkEL4ikkMfZX4mBuT4HIU%2BOt94DsuKOJiz4QYLKarwIU%2FI%2B9HYK0YYT1hf3EoAsIMooYX03akzHjXAfg7oU1kSz0dtOj%2B8RzyPKi3%2F0Y6y34xMF7dYZKD43nDY8qlrL11X2i7npTvL9mRJez1ykg3xFklhChvNDJpoJpNQKTCV6qK%2FBjqkAdkuoczF8u3O1Y4OTCbD1ZfnJEMI6IEBhSjUlygCnfmsfcElX1ZJRK1YyxbUks6%2Bkxu1UZtSrxxYp0OyMJnYkPjmTtXXHFEEevDaze%2BIg4cDeQ9Ohz7MJSthA4F8frUUUi%2BDwLM%2BHrlaPLK9bPnPPuY%2BCeh%2BWYhhb7qzHQQ1cg1Vn7jDqdEUE59zSQr3OKXSc5Kqq4HBm1segS81pkXWF3mlzYLn&X-Amz-Signature=6c90a5fe3a14fe762ab7855d16cc0c2e58c863e50d487c2d8946f89427973d55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJRF3MT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDrwHoJHlwfPICJCAXHEtgZHTfyVH2pcae92F6yZIbcswIhAL%2B1BigPFtBoKN5vh6ApA6QM%2FaOwEtlso6nJZHPZERdgKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Sw0Q7FQwblsXv3Qq3AN0GxRBVZpBSM%2B%2FwbNikV08QXbHk4XlgCU4%2FSk6Ofi3r79KlR5HsGO9TnGXPXdtuhUiH8s1cjoZ41D%2FOivuT6po%2F0Eia4KuT3mwHM%2BVr4wnrwGOJfIf%2FHfRKIqcowa1y2lqwXB1j54D8TZrfUIiKS8Onrh%2Fyq%2Fs8BNfPWBmaHrWp8mQpEZGFWeRJQVNBVt8OSoCVtw%2Br1GRSRouQwt76zcRRFxsuC4iUtbpy83KvycH3mZUDebgOH3b2usIXWe82yMnGbYMOVlH7X8q0JmrECmbdWudUO%2FNm%2FRANrUsa%2BTw2BpmloDa6ElAkn9uskdMoP8lrqlO24z8CiVplcBbkQvwEN3gq3yQeyECfl3Fhh6r6mLbDAhEhz0Iuol2YSMhj7BLMwWtIt9rYO5HpPZUFXT9NiCj5UO8y%2BD9JkwmXENsyKbJB%2Bj9H82P0XxnDtb4Mbsz7EhpxlRoRKLl9ji8czl6lovqIW6u4NHSGJF64NS%2B0pw9tJwUVQ4YvikLOrQ5XrvRzEseSe%2BTS4l1FZKVP5xJ1aD2bpbGVro5PTQFSaZZflF%2B25NEtse0NplCuqEPCB2tVyEpRMxoDnrQydxxXSTixyaB95%2Fei5bn7ZAuaraG%2BKsptxfjMWhsGt0iNDDC6qK%2FBjqkAYrcuD5A4hyrF%2FwXwhcaAreoYijMNZZQIXQrEnMeEwAUgl0mv3m%2Bi%2Bpg5f%2FX10oo1Uv3OUo5%2FbHa2vaZkwokI9vjWgLwxgi8r8g3kQpChg1HMZmLNAOPPeUC8Pz4QkIiSz0FgqFNIvMvcWrCPiFKVnFPJig21w%2F4d4q7P2ETatgBBSSlMnWDxnz0Y4cc28Ubceg5KJgGR2y8%2FPRUPFpT0RcTGMA1&X-Amz-Signature=bb08fe5951508764932595046b55378d06a5b1b87967ad0bc78f8060d9d50d31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
