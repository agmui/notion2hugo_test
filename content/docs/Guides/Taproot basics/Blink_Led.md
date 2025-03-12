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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJZIYR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDVWCKbzqvi%2Btkdhuh9AH3cwx3IkyHtRZ%2Fsi1q%2B%2Btzk5wIgNRA%2BzGL8aTkEvbJ7UghEcfndSqQp%2Bith0xKsSh%2BsMIQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa1yXYKuMbDJgzzxircAxrY6QpUlB7afyCrIsV7XqtYvh%2B9yGHlAG9Lwbfn3F50%2FMBTRSgnIMQmSgWadGc9IV5X%2BuAsdYanD9%2BbEug9Kw7TxR8notOVzKj%2FW2wPIybe1M0vrdEkKYWmQVeKg73fWy%2BYdWDsbYjKbQHEEJLAuQFNE1eiJhAEcb9IZpM2bgPPJWWRJji1Cmubcbx9lCskmMClyOR3048YB6IQsAgdCKOXwYZawjp3CIttv%2BklYJIXnKE1dinVkCA02ZfxGBYIDQZxa8hTy2wnumViYowTSdGNUezAEj5JXQ2lGAGmPArDP%2BnIkOa8tFJTb9E3JmhK2rBGdT%2BeAFIsUFFiZVw1Zirao9DNr1Hq8%2F9LhiX1FifJej14tgt%2Fm1f22LVvtTyypK5s3AF32xMZe3pyn3pYfd9%2Fi2aWt%2FIQFJ77PP%2BK5Pka%2FZhwwMpPL9%2BzHhJc1R5UYzMq6qGoZoBHVk866Si5gZ1UwowSN3ud4VJeYGFwxp%2BClqnKrgpOUGo7DmRt%2Bs1zYUJUmdTatNwy8ClPk8NBlBjVv6Hg2015G8j%2BJ4FHYIPk1ZpIGgC5i0nxK%2FKoosmlntKN1aYVkapE7uaD%2BfmkA9xBi7vspAVdaNMNG1TsV0GeHQKVLcNY21LAdF45MIyEyL4GOqUBm2dTsMtJIgG3tdwWFBm4NBt4LbW8PlsrETiXW7Is2qDvTyHKjIKQorp9wiZSh%2BrMhODHDcPBLZg2tatFDlsgxSlZtQRevnZ31IJruM3MVbn3QM%2FA2cNqRYRPgBewTheNmlTL3L0fP9Y318nHyqWVKEHpZTpjCkif3EPhflfg39Q3KxoZj%2B94R4lyIgZ2Yc7dADUlG16gX%2B1B6Ihnx3%2F8U26iRKrV&X-Amz-Signature=4bffe6848760f9980b6e040a40c0b03e95bc55ccdbf49ef54c421259d10348d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4CJ3ZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBS5vWnkllm3OYNVEtQiu6WDmGR6kfkYPqhZvKBLd0PZAiEA4GQBdt%2BHIEcDGhsVfj1g7hlG6wDZJy7oUa5rCEiKUpQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnvtduJKhfrQLwQxCrcA%2BkTSCgEkKlacthts1KPtorKQW%2Bqk9qV0vu5Tf1Lg42nyQEYviyjJpaO%2Fa0WU1CiTVpoMqRMDWdCho%2BL8gEAXl8jbJmhTFPbbMi3Xw57qx5eHdCpamkfj46iT%2FPvd564ZGzw6OYBvFGTM3BP4zrhj3%2Be75mKcB%2FCk3x8esZLixZ%2BsDdbFzpnBnW%2FgOtGd%2Fx5claO9xyXfR5ZWDMZ9C4NirgRjlhnK4ihkJeEVBocP2XRsvKtdDBA7l3jKr%2BdkIPzl%2FczK%2FW%2BBjoS8ZCbcCRktNV%2BQBIR7fg1iRj74Na1hNzSmEg8SLpcCysiU%2BCgVdJGxgi1tbxTSa%2Fr3uv5kXBqMzIoMeAxliKqZ5mNMYstBSBNJQW6BHInKyCL%2ByF3Hq8DLfQjNilxweimDySyZcTctImtyMvSPcdKCqM6Kh6e%2B%2FXTizGG8wnci5A%2FFKLGBJ0ygmCkd01nNXpuimy1YPtGviuagJadxxnuiDPAZXZw8qFN%2FonwE13r8fCoNeRL8ux5TE3euPIQjwfH7ain9S2%2B7BpDCZvy2nZ%2B0IY13TMs%2Fna98cGYTskLbEejOneilyJfY6yfApFUI5RZp98N%2BDwBUiMaG%2BGfSuwQne02RQZOI33szM3Fu%2FzkVOy73mXfMOeEyL4GOqUBif5p8QBr1FXbAMSodt9QmmMH2auvhOoVxtZhJ4qKoQ4WNH5t1ae8ExxBkrqfLg7INtJ0kUBWaeMw0Bd5vVCtj7JA03VREKFljKoDl0%2FsY7OqSdedpoFjg1vNxce9ESOCRo4JbzePeDxjRgh9KK0%2BeQecbACr%2FRF78fzKRFEfUEwZSo9Fe0jd%2FniRBdUBrvg9Fpr4SaeIWY7%2BdCtwxa731HZVhMRh&X-Amz-Signature=30edf5e6170388dc05d0fde0b7ec0986e383e48800b80e8fbf7a5ed47e737973&X-Amz-SignedHeaders=host&x-id=GetObject)

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
