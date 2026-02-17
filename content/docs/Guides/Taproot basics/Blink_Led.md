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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5V5EAJ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAz%2Fa%2Brt0Trv0YwM%2FKg4eUOkVDF%2Biw2gQqYXdhDpufztAiEAtwPpFCdJUHROi%2FFBtRDKK%2FOI8%2BsBz0K9c2raZc5QSZUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMQKtSn8Z68YJHiL7SrcA6M8yzMAtM%2F1lwW%2BHIbjy4lS%2F0CZBX076gOsqjGZAOZchad9mejrJ1pVgozZcudxJylAjQJuUksWd8a94nB1lbWu4cncBi%2Bhy4jNXxFXYd22AAwEOEm4Enc0E3ngPX1SaunjpakJGGIfD5GCTm%2FKcPI2zHA0TjOe2mAmYdPA%2BycQhJc53iq1KIqESBOFc0oIIbGl7JH8dl5V2TgXrxDOVP27RmUZIFee1S9Yel3eEFEy17h9ij7UuGQHVahyoVD%2BcJr1mSG2hH4V7WXALCbpMZEqA2ByMf4CuAqnfmECA8OedtV4Gg9AT2NgE9TI9W20lKovyhMWx9FTzLQnDMbWLsk71kzl4LiCe0ztK%2FQEVxt0qiItNedLRewUjVD%2BN1wjaZcG8FP1mBcm82A1RpAkHwvwjjJvkrFNAVCr0h4C7cjWruGp6v9JIz07Pd98%2Fp96Ep%2FlCDBpoC8UiRIDRjuKNBeNo8Z6Z0vsRfB8SVBB9UgT9b4cULn%2FaMR%2FNkm83JkyaUlJguHJxzYtpiWItuk8I5bSHxi9tmM04BqF%2FLDojvJ9Tja8kzGlxWek%2BW5NoXfqKaN3y%2B91Y5vkQjVSbMHAi7THHPlo1CpgtQEvjd7Q2OVpcbkhI%2FTRTuP18IOsMIKYz8wGOqUBEEpAhC4HFTqqAbDSBuCyG1iFBrpf%2FP8ZsICHqBpDxM8cThWj4eAr2VOMIAA8XRB4Ysy58eyq8Wazh1aUJnl3xO1zmLim16rXnqkYLcHPoz6mkX2OmbPhLRaqfGsH62aB228h3Q%2BHv8LfjpBI9OwMbgRe%2BKC8%2FwTZ%2FQItC%2FAgcaO5veebqq5TeiQi4iZIzKwhsb9dDXe4hIwnIiGFH%2FNcZC4KPNHv&X-Amz-Signature=26f79dad5775f0a3db281cd7c4e96d8a8e49048b3944b4e5f902ea4f137a5e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLXZ5QZ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCe%2FHUOH4BuAGPgqk6LuNUQzbD%2F75dm9ZzVvEK8XHw%2FOAIgJp%2BldRPtS3OEMowcuVq3Cgvk87l3XV0RqfbRByUoolIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAjvU16z4MiGA28QAircAwofm4CRAb1nOzJ%2FYH0SQ95tX0q1631IsX7Ttzidi87ejWq4MJdHG9urf%2FRIX8ewB6bG%2FrJq8eabPu%2FNZQoSKCC2fJVi6ufnGzVb50xmPkQ0R%2FKSUsa0%2FFQ4R8GhdAFXHyBTrZdMG2%2BcXPsl4Onl%2BcNGW%2F1X4eDmJusm7q2BKmtsGmdVKaEv1zoaSRH7Ut3C%2FTJjNABmbumC1qOBJbuhYkmIJxIU1D9rXFUlOD%2FubYJUrZdl%2ByAOdNTtEBi02v%2BQtIhXnodtzf5IaenDbImQ9pEZ6DLDb%2BuyTSOCCMx%2FO3SI08svYZ7SlmJZsCMdxKVxH1Wgm%2B7OTigun0MD%2BWVbL3rCL6XcJ5vJL6xkQZNoCkTCdDXvOqMOVx7H9PmmvWaS9nLDzPg9d82trFW0RDIg9zdqqUbVElxtEquiHx2dRwapNJKDcKUUHId0AGhXI65LpLnZIZZIr5HpmXp03rOSDk5hsYBHkcvNZTOela4nvYkiL7XSh4LgDFZeAQPY3l4iNsV%2BXSDF8AKi%2F7mu1vOz%2BIs5JTtAZWlRjDDVXv7wAeY2ozNVGj3F4xddFdXw%2Bpt7me1v%2FnmHgg3aEk7xByWWr4xtop10HqqNCRPmSKRYYw5JHZq%2BYVNEeZ0zKZsIMIOYz8wGOqUBnaCKIk7Fl%2BZoZbJappYnnkedbQ4MrIfAAUH5L7hRdPeJd3i8YDT4MvsiJVHR48XkypdIVTVBG7ApC%2BwOEYbFEgiivS8MlIF%2BN8P5bN8Lb0OqjQg1FsiUHmS7ViugqYChvtr%2Fi4b4%2F47fIZJIQYF7aF7ajuBdvPO6%2F29wdMWLVdyOYB42RQnorwD0cPan4ob6CfYI%2FGYLpgF1Q%2BLlNqSuzbFZLx%2Fh&X-Amz-Signature=3ada5183f6f573ebca6ebc6694a27abebf89322a8cac7ee94596b1fe97b47856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
