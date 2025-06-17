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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPTIHXJV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Cn3cUHUgSwt48%2FqF2CkoC6HluoiS2KaJjZekruc2pAIgUUgYAHgjeGudMaaHEvNImXqcRJ6D6etFqGJyVLi16H0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBpAQb5pz0WQ4zUjbyrcA70FQZuD%2BL2URA6l8tX6x0KaABqkSM5WbDuzaOim7f9cQipn0g6sQy1dWjPgSrNo3mXd3439G1f%2BLiNtsX4YAsjWeFA2wXXMDqZIjznkh8HiN3s0REXCMIx0te4LdJoZPYByHcY4y19D9ll6INDAjCF%2BILbFIaLfrcH0sJHGMeQZ17FTZnKrbsAWDMr5DxXNm2IZEl0MwRm19b3wGLN2hDlt4bLJKEFvDh6jLyEuQVNJGWFmWdjruasFPiWDnvCY7RbXykttiPfFNy3sf15JbQSPjg14tcBCSKEYf%2BwWZN3QvYEIfTDTsVj4HB7W5O0u7p9EIgdfnplbN947xfjCMyL9V4be4UmYBKOkW3uAp0i2HgriDWHUMvt2b%2FsEnILgG8GHvbJ%2FZP%2B8vE%2BrTvrePoNUgP7PSx%2BUz1eXAnk0fQwFH7sYQLhb%2FHPF%2FNElKmX1qGNFiGuFjjuVpJcD6aw7tueVFfuXReCDKHXzcC0bLKw6RTmoa0MEsaEMHvxld98KBF%2FOqhSuNFGuhpuXgT824zUUN0NgYVwhemkgjltj37jDWtzDxRab1XSmglxYestL%2F2ejqHt%2BAoAhY%2Bb0EULkHQG6MN3kdaMEV6TtjEKQANqz0Tp4di5OfHefvOPoMNrrw8IGOqUBrpwoI3myrjDvUYXkN0X1fhGxaaJzqBKdb2PpmghD%2BaYIabzLhGjnfqSUWv0CjSVi31M6M4Vv4IVlUaIne5M1KKRpkiVBwtjD%2Fjd7jLQLrEg21fDdPiw8QDiOZ8r3doQhxG8NxQ%2Fp2D0rQ%2BaVm1Ab9krgEv2n2rlVh5RXoARWPJwzw%2BAP1vVXy9NAubqWRhSOhS6qZjmY4r25XUdSPHiMe5JLPFMq&X-Amz-Signature=dc914534f4a1be3c1c929226576c4766dc000b87b85c5a6cf2fcf538c9401d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KFU75L%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClKSFcIUkbVR%2FH8qKVm%2BgDi34TeL%2B8LIw1YTjV0TU0YAiEA9xhl9yhJYzJ7p6xa3q6wdxZ8XT%2FToRuQodyt8ooEr6oq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCYdCWsDm%2B1dQ7tzjircAx4Bys6QzLxMi%2B40%2Fj%2FHcxOu7zL1bovUtDTXUurzUx2rN%2BGjgz%2BEhW%2BypNBxyRfLLnOrU1qL6vtHMnwzJBhFPB%2F33QqMcAk1%2BdmYC7tkpVi3o9EeAh2bHzc284Jce7LBJ4d%2F3b%2BfugyyoauSbftljh1akGUBFIRzRiYdyEsN5%2Fv5Wd%2FwsGD%2BJm8stIUDWS12dXOv9%2Fecye2YorG1ZVBNKR4coGP2mb34LnhUomIzhFdHyCJ9HX8JrhQ7xKiWY7GHMLRA0D9qW%2BM4Pw%2FKDIi1byLVwkX2JgSJxT%2BE%2FxN9ro1liQrTct5qhlzpXmFVPjj0URk5nk0D3ZMabRenZGkAxJht24anAe%2B3EudopPu7nvNdwUNOVVuh%2FIILC1TET4hMn%2FzMvhqSrpCC5zhZdq604ws5jeVfQlrAM9UYymsTELSFnBFQBcqp8DvSAPmL1FfPGhrow1IUThAumB31QmlAtxdFKAZsg%2Fc2hbwyStx1izj%2FOOSxzhmuycSpbUxZ0YGb0T1Zw6sP5Jt39SqpaCbfZ5EctMEKAUlI3GVh92quE5dxqyfS7Rd2fT4BJPBpcX%2BmVVXEgsiuiyuPgrFbzaCppu1uLfQ3aZH9Xi%2BJ%2FtcGy3WxMxlEWJcc8aihrTFWMI%2Fsw8IGOqUB6hOUTB0UbqFdP4%2BI1MSYH35jElMkcN32oI3Mgk7VHsSd478FVaJ3jHLjfbHsNZAgaoTmtAtWCH2vbol2pZZ9vJbzlbk2%2B59OR9tdJTGx7tMOXNFch3hszVptB5xW0QAvQWtwxAsCyl6W9ExvTZar2od8O%2FqPASn4W4Ipkoup2vlGIOdlfNhi9PmHgPi3b06mA0xH7lnYZ%2FJPGZK0LUNdkSYUaAR2&X-Amz-Signature=eed8e0d5d44156ad350c35391d9cdbe160e9ce8960b79c2fa5f6dab684c9ff5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
