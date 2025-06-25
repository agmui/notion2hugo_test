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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGJPM3B%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDCu0kHIQovE3%2F7fnua2K03%2FcBJtRUUVsaq6mJ5tYBgQIgexW69DgaeQ74XfIfUF%2BejjLyOYy8WkO6TG36OEPp7Fgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWYdY9GsTT8VV5AaCrcA4kXOfjfZkLnD4SRw6mVrGU%2BcnZ1wKgfJkOU0n1KMhOdbnkfHQQGZBK0NjpfvyIo0mpaFhLT18kvLMqaaRcsFgZrrVpR5peP6BMnLBoM%2FgMtyfUzJ7s3arV5cqXj0WGitSwr0wuobqeQgBZAOukSMT6jsnYLxOkWLHzmM1aSwMFSRPPP%2BLad7Q9SMO6lLkQeNkZ4l7chTFGKo%2Bp%2Bl3YDTSRIbpeQKgZWireqyuluKh%2BOiK0fpmDAi%2BOHLprsuy4SV2rgDsOlS6nQbrV3AVsQVckG3yH0zZ4XhHHdI3dn5YHfrHfVL3M5CCMmZ2pyllD4oTQQR8WbQu5zSPn%2BsXfCWDacmo0Dv%2B4SI6Wcf6qhjXRt1CpTEud65MDrg2gDmVbDRpujXMXyyYdZpvWK3VNa%2BaPCLSX2KMfjPrEDxZJgNIMnD8gxUnMRSamIT6WFZfTdXi9KfB%2FFmL1iMSOZ2WbZiKsnlR5SkRWX6K6iPnewPJvODo5h0sqVSTveoOHGq2Lg1vG%2Bt4JKWyvW2VKtvRW%2FZ4p%2B9P7Be0D15meZJcFITPwI5ufQXzdXVAG6KziSHRb6lbQ1%2FCn7Q0skdTTJD0P%2FGZxwMWxeRZdbzq2mo3KAOUBCpZQPgIzz4XTIZ7j5MI268cIGOqUBUHtYCwH14heAuVbb4acreUmurBDsdmHopf5CoI%2Fsg9huAg5csuJphfptsHv15ppPy6kJG6SP6nolUztlJItpDSECfH9lVRl9f1raxPFPNoAEkiWSwpIj3BSFzGERpOoXtzeRnmVg7wsuTdY0pXiN4fQH%2BrgxiSPVitipNwWy6AhagN0yoZJGauB96%2Fxp4VwafMouwvzo%2BBJwx7GXXu68940l8Ppn&X-Amz-Signature=e153beb2910d9c8d250f2f32613a8ca8fa3342ef1104b07f6f7bb6a11b62df24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUOW67L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDlk42%2BYJ6He%2BZuAAe3RT2HJdU9TrzlBkCc%2BdKyWDmP6AIhAPQk1ulIuI4iRNrlmkwpUi8M2v3hHLn4c2gTJaZweU2iKv8DCE4QABoMNjM3NDIzMTgzODA1Igy21L4pteBCG8hSjmAq3ANYX3M31sEPFlK7K84AUoo3RmN6rgM9mrXIOxON0rF3pgG67ubwFCSjwZE2TgogMDYjYY1Q6OumU1CTAgDrlP84wQCrRgZBM5lJBSluJryKU4wO2jvCScBthh8IsGdB1XQLay50MyHs65aNHchEdYoAYYMlzt3mgTukGI4PkdpsGxSxA5K0P9g%2Bo29wjwtgS%2BJxzowruDdGdfoGWnw%2F1rSivpPhz%2BQ6f3cJLW47iZq8eaXiYz2Z6eYjz0cv%2FypeFMwJCB5PyBEVyNL0cKrXcCLzMJVQ%2Bxq9I5RMEXUiZ%2F8doZL5NSzkWtxeoPBxRrZgg5houQcS8u%2FgA1w4ReMUVOhXp1OedtA5iC%2BWtqCE9g%2BfsVVIIDc93XshfYWUzJGyUw6%2BKTSr5ZjoL7G4vOyAnx9pEFwIk2mGCFz6%2FaWPLiqEkIHaRNbtIuRmlm%2Bx6VKlY5mqivoCjxUL3LVtl7GgPKBcp%2FGzMoUg9hxrlvLjyE9NJ1E9kjS721maPXBeSLpAqW54AtFfxkL3VfJnlsqdhfNcL23Wr%2FpDkSIo%2BR7SS4Nn%2Fjbfom3nQmUd7aqvhgvBqxS4GS0gqPv0dRgpsoC4FcXvW78cCWrMrZSBN0CspORwUMzKccoaA9y2aotILDCPuvHCBjqkAWyjlpwGvyH5RNiW%2BmaLxFmSDqmy%2FmpirpGFxt7r6I2dUunjFrmdEbuPeL9ngSLCOUdTwKpFRfo5Qtp2HBo%2BIpSreUwvUHkRlj45%2BLkOHmHymedH1UC0xh6%2FHmYmMQJwaDjnwyQaTZJfHkM43smAOAc%2BXwzRlVMon2QBgZUj2aipaIRbiTR6I4vo7vayQ8X84OAWdfVO7fXHzMeBN2G5ArfWo7ib&X-Amz-Signature=8373129aca0deee5e57435ecb8a536f3314ae73dab0996fda4ebe4e99811a5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
