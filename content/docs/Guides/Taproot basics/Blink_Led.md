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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSK5KXV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC2UQe2hRwjJOezpzbuLOHhhlpfXXpNvnc438SqNtYWEwIgBZPVH2o6%2BDY3zEuS2EaoU%2BMLcR7QATLO0k0ck2VUWVYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCPg2wHaNqEQP49pxircA%2FYN9H0o47J7RPOj6g2XCLXgdcRUR3BSUQaRrkL%2BKPjZ2VT884GIAXt9UfZNDfJtjo86UgjiplTPnsRkj0eTFpD1BwHy959d6EKXaxfrRtgaSLWvRJe0vJdvY4xc1TXrw0jon5L4fc1EGIkz1DmRsZDp5nhqSz42sQONzHEaQlsuEQ4y7gjoC7g1i7T01AavaG67IwUAlTy0dYYqTKi%2FeUkJHEdoxOBxSxkG%2B2sk9ziaJ6S93gjtn1yvo2Lko7SLQ%2BK%2F77SzpvHlt1ShMdY9C9Fh4p78fG8oY6iwlGQSNG2o3%2F%2B26%2BKW7%2Fafkc6d%2BofU1BUpTE%2BNNrlGeljhKfsa%2FyyMrzMzajne443PVs3EC3lL9vaFlYWGMT2QSEqAbUODgLBH6xzTN6l4OlFyCtugO7mEk4%2FJvHRxSZ6BZskBj7OD2YMtFXPkjwtEXb%2BmCXOu%2FBDzybgOO4jbNy11lUeNevjCtShSblO1DOLY%2FyFQu9dRDUzTK7BeBNIYk0Db7%2BOiushXRm9SGHHZ97S1ZeU2lIyAryekkQ2L%2F8jj32uP7K2gBjHByVLoRpxaOkC4e0OqOBPNWQBcBpTi6RfrnBEl61rCG%2FhjeAKOFgKfETplf%2F0d9hTB1soh%2BHDg7NKkMIHvksEGOqUBmRUf0YrcMIyBq5c4a2mNBRElOaeeqZ79iEfhCEKCp4X00TozzF6glvQ0bS2AjeXsOBnCBlktOTU%2FFjQx4aFNeJ%2Bj9kx%2B%2F1ZXOx3scIh%2FWV1LmQb0h2DbGkdN8k2Rg2DDmWNBxUZasblHdyW4B6co1mu9C2c5w%2F9NqFAACQIVrp9w3%2BIbqQLgtWbYW8CtF9r%2FPydcznRaWOhZWaXdCDBgtRGqobJA&X-Amz-Signature=3a783a855495c6e346734a774b645b5e934d1ac0cebf43e25a60409fcc641242&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYP5REZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD9j7Fjyz4sHmbBb5w%2FXqr8fnulCbG%2FFGx22YPT8nK5cAIhAPXxbhFIG%2BEp67Ded3DLcVRjG88QACV2u16K1Zo6TrLiKv8DCBkQABoMNjM3NDIzMTgzODA1IgxnWdF4lbGCK1qOg%2BEq3AOvkKVQQLLelHQUcNX%2FbkjrtcJhWVw44wtPllGW%2BgnO%2Bo0Px%2BHNkPRSLRGTzvtuRl6ARqQxoiGo1Z6j1x83pSZ%2BI790ElPAi%2B9Doyk5q2AuZl2oflQGn2W4L7Z1XC99shBypcyt0Dq9ZFLr2Ea%2FZiydLUl7TiEFdqzgVOdMfzLNLhQ%2BHS5yFsHbvuZTQ7i7cCOBwMeY7gl0mWa33NSkUK3S3BJLRKLrEBw2WVq4bxm0mundNkhdfw6%2B6P%2BafUEKeQnYry%2FLhoOtRM2r0WdqqvuxHc5GbBi7sa8a%2BQifMRVNN7ZLq4lKuINWyPSK6cuesSPpJNB9b92QmrzV6JEB9nZOXs%2BUCoeyORoKMQE5pJuOsaTHWKXqAj2MC1PUj6Pfb9d3UDJcpAqEeB1Oxdsc11w0CReO%2BBbZxelCjxpJx061CI8rhITaZ0jsK5bvScefgBYca%2B%2B3m%2BCIVwSMhGe4SnEM%2BZcP7jfBh454ARujhQuAcNYRpUnzS92IORPI0NhQAJxj1CqifUUT78QWuuLmg0oQzp%2BNcmDEV8i4if6zbXziLTrYchWRStkqRZsPU21o0RCPZQVC7NVNdaBKkYUSHH%2BXOPaZ0Tf%2FyPAI6xnBHan9Foh3Gq7bETyWWpMk8zCd75LBBjqkAXltdYcrlslUa3%2Fh3y80Ay6%2BM1iNCfhaGFXZ%2BcQySwThPBRttqXZotrDdMlNNrDcSy5GGTB8lhXzDvi8M1w2eMYQKf4a4d3n7MSh8WAkP5GQfktLulY316wmdvafIg%2BMif0PLjtt1Fai90z3CkBhKlYS%2FNAFKcNqVgOWN3%2FZDDG6I%2F2JdXOWRrX0v7i1NGsuaE8F%2BaGgMUmKN3DyJWn%2FJqvnI7Lu&X-Amz-Signature=dfbd8ae08652d4502c665f069b2a6e4c17ff14237b8aeacdcc0376614eeb669b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
