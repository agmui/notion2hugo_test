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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377D2N2B%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClZl7rx%2Bt6n5ORQ8cdTqe%2BXJ%2F%2F0vrKwlazleyDiNaXDAiAQ2aOQB8W8woK66VE6%2BaTUM%2FI8VlTh4QA1ZvLpBHiEXyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMLw%2FsKGn%2F4QUGhzB4KtwDpS430%2BRHUv9cDz81Vr0jg%2B84E87%2FwRxhEK6TqT4G%2FE2dKBNIdlCvM6ZCTgW0ElAi%2Bbob%2BT1i5FyR1afjpj%2BYifJAXtI656z5VnmI4MIqTzn90%2FjLPn%2Ffb4XiL8Oaa0Tkutcd4HiuTACyx4xCxJrxecNauYZNGjk9kBRsoRLHQvY%2FupGhEqxsw8TpzfSatOCRXY73u6nV3YyAvMqIboTTW%2BaNs7pDUHPvGs0lw%2FHSTcemFBVLgRRUw6gslEbWoMnPwLaKv3iaLptzy7Yufsp5DElbfav3iMQA3gyvawLxmysyYdHRQBYfSgPsrQiSUyTgZ76Np%2B7RbdysHsC1Mt5kOWiEabn50TdlxjpH6CR7v2K1FSI0pF2DAQQJ8vwqiIKU1a83UmXrTH0FXqRPE7d12kvSMm4a4%2FVFkg3cOr3HFwb%2Bp%2F2fB9IZchX%2FbOlPinNwr2kGGnjW8zZLLuoDg1k%2FqqCRlUD%2FVEpCKDFaUkkpxswU2Y4uvbq5ZCrXb6y2TNj5LXSVtB7VSuMTAmItj5JVU9aLUuPJCywfTQ6gHX9h6XuiPHZffo1wA6l7asl8NWAE3AJk9wRy6XlYt49iEP8fo33USxeeZ31tJJFBYy2KjRGlt9vGtdwcGNP1h0Ewt6jwwAY6pgH789ZpaWPozjqvn%2BRYCqHwWwZphGAl0pZfuHRHDpxwT2dx8Yl3dtlUtkDLNdwMv%2FYzwL63zEFgrcwCQOoYQW9W%2F3a6Sjzm4UBv6bqVgda70MA9DQnWL9P1MACLa4egi5eH747ZzCByhYyIFteZNgFw2dueel1poa%2FWCW6Lpk9k3t0PCeRCIu1K8FX4IuMM4RTgHbwnTcA%2FmSG9pISDCCHHevTfETNw&X-Amz-Signature=41bb8033ec44a91529e743482304107f1116114a85f7392ee7688205cb8d56a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3FJNMM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzWqs9EUaiORh%2Fka4JzjmaeEQBl3HXd1%2BKhDNV43jwdQIhAPOilcAKe1uFErID%2FE6gNYkpWQ%2Bw4YgCWOf5ZRGt1QRqKv8DCGsQABoMNjM3NDIzMTgzODA1Igyh1%2BnSkEu64RZkvpQq3AOKa01QiNhJziXj8kuioP%2BRVJbUwW4Ju4G1ktKd2LKcZ7yzWgaCJOzq9hVLjf6FSitDOukcaIiMQAL7wlQkpXnHSS5PawmXzgQyGnBdLdSjCPR7qhM3%2BuvLxPXlYzSGHK9KZQKBhhorAzweP2Nhq8ZANsWyzSkmdU%2FqDq138ezZARtg5vQahOtBwldyIS26ppAyOutUVtmHHgJeVTCI3G2XugZr3%2BPVLvVHsPWojBUNGgtIT%2BPbOsW7bP9TCjFMfP9Gmruu94sdD8hI7pSuI3Fy30%2BNT6xO%2FeT2pPl4xRoBbQlyQPJNNTzlSpKu6P5hnq1FU96vD04LsyMx3hLsEyS565X0Pnm%2FCT2fch91JsniIG3Uq5agws8nTXJXwKB8herdzmORTZzV%2B9Fvb1BDUs63BcuPkTYqkBAFFDR80%2BPbW21wXKRjYmhiOLH3TF0hU0adjylmX%2FlnHIcNDZsOdVawDsd5ZCYEcYYoF8rBs0PygXyauQ4eL3X5%2BWdupYWpyTV7yrOijYNLg9c%2Buhk3o9G89QmVPXF%2Bcq7LcsSQ7oiDSwbfdIWJUVhox8P7NU1dh%2BFovtL6a83dsxC0iQpVXS0uej7rtWQbPeJ%2Fjy9V6oYm2CUsi20F9osTNJxwRTDmqPDABjqkAWnTMoI49bCTFWb1OVVqsBuMqA053El4n0YMzqzgTuq6A4SWlzyV0Ub5uXnv0tDjIXHvG1L5c5YFW4KCXltSjD%2BUXTvRFN18upezQyst1Yg98JOZP%2F7anL%2FeqQ2LSZN7hLBUkT4MjPDJ2QETdrokfyvdjCIgY8V7yhSdSI8Fmg1ATNW5b9p8C1RzE4kprpPFO%2FjBNvTuPv9985FlrITRkJOZDaq1&X-Amz-Signature=ad5cb08866283f61c6d3f4f8df9482438dd6be5c5603136916af7702ea050dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
