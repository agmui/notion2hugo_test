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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBU5CJZK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCBawIzMkHekWk5145GmUY90OIACttT7RMSsk0u2u%2F38AIhALoyBUHzUDSTNRuhyv1vnTHd%2Fq0Jt%2Fka0qvUBq4SfABLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvGWQNfzUqLU1VFH4q3ANXpP%2BsGFKNk9g60RyLznxQ2HJHV7pcJ4UVSMmnwTNZzxWRVwishrb7Hlimb6WMyR6EF3TE3183VoMz4nl%2Bkbm89fyw%2BrIROuhRVOMKgIHa%2B4Cm%2BK3yLY71PJ4u2TQpIf%2BtCzg1EUnxwsG%2B3ceIBV8PXjGhK4MRm3OBuvziIPzo0c5FQEe%2F7fmLvtzRqqDOWu%2FcK6hfwgUbdrALIzsjJodO0a4Qoyksp60kIzxUClxBuxFKFoMfJvUvo5RPozfftq9196KPMHZlxGo0lsdAGyqYOD0Hb7UGrwvbwrHRUrIGgUAm239JnWY0HNtBrDzuR%2BHtEHSzgL3yWOvNqfotGnE3y%2FOBVARw5Z5KZaYFfjQJ2oWaLfWcRZ5aZH4qTSPpG0IgvUMc6xslzFAAkumBVn%2BXGJJUP72TrNAWaQtl0IEyufzsgT5iWOlgvaEwTu7CrMIp4ERbZlxhxSi3n4Qty5XLIGF699WiyWUl9zj9m8cEdppMTD9cfK0e1YGqnyULKIm2d8Ljrk8ceLgju9vtq8xjimT2iSEBxBdt5VxupZ30d30CWvd2VbPiZszZIJelAxYD%2BXkT4bKz9RdyDU7YhygvVp6yLl0p4BxKhmJP2%2BuhLEAvT1Hhzqbcx%2ByJoDDJv9G9BjqkAYTG8QATOHEHEgF4bH43jrcDTxlE7TUXqlp9tgwVhzMnC6GEtqstN9ZQqoDHoCV3yCWsDvuqrQP2pDgrYabkYnj25fwbiycC%2BngWtzd2xVlmjYDFZ3cK0YJqbQuVWeDIK5hO9G92RWZiQyRafC%2BZVpYrZt4ylkR2sPhAaGLlDSPW0SN69Nn5OY08BgJ6kMirmdEmQyYTXLBbt%2BoeoYTlQlkCNpmv&X-Amz-Signature=2d0dc1348cbee63c26a58fdedb4b964b2f997e3cd5664f81af08b8e8de9b1a90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3K5VSO5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAa0t1rl3LQS434xttfNL6S2R1OdWpb2HO7gjopj%2F6%2F1AiEAljrMM3Q74xi44QX1fdgVxBNl7ral81ONVTDGlDEqjOIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1h5fpF1vumEnvQZyrcA%2FEi0xPGaY8VpdBJ794EqOlwIzmmAFBUho02ectnBoAYjBIY0RilS7uNJQHuDvqyHvM1LK2Rmaju4saiYLP2l%2FslXjA53VGF2c9L0WBs%2FxSLenG5Xy4o9op9lagv2%2FIe2CalDT3AmRF%2BMNmndrBwSKaAYZCvan831vRYERS6NEQD8Ht8dcNC0ihszmJ5maWS6icpXCifd%2FQ4IIjtUndvSOf55xV1sEPfa5jzordZL8bjdSnFxeb3SQonwhMo3JetFpBBK76ZNLReoXZ8F%2FZPjOvsOupJm7BnMVFGoGTA9oAJBBKF00UCz79QJj0EKvOxfB5qQNuGA0uYFxETnVsqepYRcMrkEDVNSix3eodeqSGVxwHmc1g2Ar5NI5Ez8B1B8hIEVnP6aWQ72fPJxHXB9LU8KcJDUuCTozmXJoDmmbfIB%2BS1B2OM%2BAyRIrk8nx7JA74QRiTozg09b5COMqj9MPMR1zDtF03HCh3D%2FFdHnqZtB8%2FRnA70Jxb2lCkyW5gRABXkvAEBhXu29TKR%2BPa3EQAdztbHyTQZcKWAii3SLR4I07QzFD4kbeWEYV0fZGqPeBLmdXz%2F391RrkCnnuwmhZ4scOQC32ZVn6Y3GQCSbynpWmWvu7KGKyu27%2BRhMK%2B%2F0b0GOqUBLUQbt75OXD1AAD2aPvNN0MFmUJhRUCnv6IjCoX%2BdvuB7adr1epOuT85u6HOxDbnok7c%2FMqx9PULZZmQKQzjGd6zMZgtSnQTaSv1MKijZoplYrHE95KTlh07hUOzHTlQvlicZoU9sLv9c3DBpxfvfIKEhTRp%2BP5kmG1TQQE14av9fBbnHgQwmt39pPTLpaixQBhlPaq2vitvFNkdIrBt50%2F6IzdYA&X-Amz-Signature=5f8063cc892809bcd0a69533d6160aad36bc382a22994cc93a747d7d305f426b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
