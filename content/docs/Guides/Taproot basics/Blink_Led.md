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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VTRG6M%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPuw5Naopm6M1cywLej8X7kUNB4gIZGp9pE1J8H%2BNilwIgducG1jW3Ps%2FmQmDhcHX%2Ba4GtW9lYfIbzgIPhO1r6CwcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOARHFv%2ByzOfN08hTCrcA6OHCE%2FV3nINI8nNibTZjs5UGHbSu%2BpAHRJv6FEtrvCKT4Gl9fFO%2Fwt7rdeU81JiW%2B0tfr5pATMRA6otrqDMOWQqylvz218jGWa80pt0RDziC5dweBArsHVMV7XSNu3i%2Bascu5S2sWw5H%2Bs2zol5o%2FP1OpdQ%2FdOTvE3o7usj8HDD6HVExvQq4U8LNFzchG7MB67kXxAtGAvbOXLee93nz8aZzGYv1Fw79Uju7HxYiw9CO9EOzxfRvAcoRB%2FsyVeiUF5m3Ut5bhpofYh%2FawMnNGC6qezuacjecBt%2FaYGMlImLGNRYn3MylUfuzJW7407TPwV1K4xWu8Z%2Fc1LVrO%2B6LHRqdV8ZkudA1wkmUAF%2BFcwrGSYP0RDUbQsw6dQFamc5jTL8XS0sZnAMF93VuDwFMvIu407tUqsf2waf7258e%2Bv%2FLV%2BjiwxlrYmFlhO0HogemcyYOIcayK%2BRIthgaElfzQJFyC0WK2v9GxFr1Ps8kvOhhZA1ik27j%2B3os1cq4IyfSEUxtdotdoYexgxpctd8iCvxkEvlKJHLgdys%2FLoHmaSsuF3Bf7dYBXIeiKaec8b68NWqBxaoLE%2Fu5NTgozEFSKe1cXzgstVLbOq5rYqA1iLcShr%2B8Rv8zHpA11cGMMeXkr4GOqUB%2BekwIstoD6Is1BcgfIqVidJSQQlFH%2FhId3MEAjOx2Ep%2BJtLgYyjAbcsQUSYxUt1JMMdJ6zoUMtaVn0zj3RxewekLJWZMFY56u0U2bexj9J3hfDtJr3Ap26hycYXr79DggIMkfTK41igqFW2IsiHF3NT4ORRervxBq9rdJz55qbyx1%2Fdb9zESKTJKoJcaBdv0lTHS%2FSoS2i0b%2FERmwSscExQPWqo8&X-Amz-Signature=dce548a95de624db1984d36463b3a604d1fb18f3054b66e06ad5d1956fc2ed9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCYF6ZB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOVMtZ%2FLs%2FAs8dKTaSePd03YjCDh35sJqxwhoDjeFI8wIhALoxZCcCy7588W1nsmpt7hjF7NtYOXVRJMT3fvA%2F3CiTKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYmEVuEzNI2zrZWa0q3ANvc%2Blgweagc%2BJOjTHZmBVimKV1ypljbryRc3SF%2FvsJ6%2BrfsBhkgS9zmwNrsqThu%2BXHJVMPPi3WYNcgFm5DR9PBaadQK2iQYdoIgZ%2BYjIrWPeu%2FFpErccgbwPd3NYSPwc8r5qsxu3JOx6v1%2BnMNwD5oif9NHhJapTu%2BNtW0qMq4BwN4lkxJ%2BBT9r%2FQeThgE%2BJTeetWKg6TEeE0zVJU4PVC5fvIdIE%2Fkz9R%2BOEuzLVHbKcSZBLbgvvh8vhbzRK8idDqFu%2F6YusNkC1QFFqubEtzpdBNTGxq7k2RaZogxXhdgNl5VhHOQpN0sULuXx6RvGHQqpstF7daPPV%2BGKnSWqrlTFMULFIQR5vKK9V6vEcyPcFCsfx56nLgXeiNZpfkbLRjutpGg75xqxOOPylvYypQP%2BVa%2B9H%2F3nIK4lxufa1KJGxM6uwq0dFR%2Fq%2B%2FJ5lqT%2F%2BTB0YNFF7YG2LlpOzSYc2SIGq%2FJdRWq2cAIUXpUju9q2SrgiuMgy2c5Ybo7Yt5WREi7YrKGOiGoof3CdxFVBmX20zdyMuQvPFdIZ1VGr%2F2kaHEcIufdDIWIhKhj4EOTygjNrUXcbtOJfjzlvMsoDN79ewVX0eYCFDefaI5gEmPNi7e3PL2gTCZB2V9%2FfjCsmZK%2BBjqkAQ8K%2F0i50Eq66UoHl9jZd2BmKWl7Yce2CsgSobmpkM90jX08RtXgNQidSls74Bv9xmOluSkd6kl2YnZzAG2NvTVvHY5lsI8EILjk2dIeOqkTzJRG0oSIWdmBqNbCoWPJ6mcX6qlzQpyOng4FBdcKF%2FFcgLPonO2m2WtFICCuZ3subpLcy8hwLdwZKtGk2Ur8Mpz8HPWPjd%2Bgm%2Fph3z6EHohfdSW0&X-Amz-Signature=7cdf291147c4bbcd1bd90414094168be4489f5d064f85f40ad2c875b0a653bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
