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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNNDD2LF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZKKaiKedum2ckhuiN4FqHOmriWP%2BULkP6sdXyE6pJwIgSweQhR8Kpp7D2UVYDicvjtJF9TJ7YSh1NtmnNsUi8AIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHoCYhycf4m6sxzyrcAx%2BIQEV3HcMsYx%2BWUXrkNGfyzqvwXxDRTOtPl32%2FjHPQICEfHpAx2su6ZQZtqDf%2B1gwnLijcLFSF%2Fk96pXI0Fr7w7HooF4TTbX1k14BxbuJWym8wL0dPrgzj1iAE4PncsH5oOHS7gca%2Fnly%2FQO%2B0HM%2BQSxZobgKenOGGjp4czY3v96UvDOhhrJQUX4wndI%2FWmD%2BoxtMON2gtGMIqEMb%2BEBslCizGVahBoHrc8AO%2Fw9m7CMfKTXW7UmV%2BN18SYicgDVI4MFBZ6rL4gBSbpsN%2FOE2C2fKZRBWH2SMKTkll3Z1VQazAasR1svGgr0MyLw5M3vHrDQtdqBlsty4bS6HYAiPGIF8prMKSO9vlHETkFL4xGSUGc746q9LwwBpycTSA5O1ThBk37vmpHC3C32y8nxRHokEoeg%2FE6JQsvvdsORj%2FWB1t6D9Nv%2FdMMDh5SAl7zjY6MbWYCl6dB75Bv527PuB9FVFoQBI%2BIOM5hPp4DwMcbx4dcSkF1lupJcr6MRfA2nxtrnuS%2FQQ8GN8YXP0qYlNaPeAH911Xd7GhSah6xtHPcqrZfM4TTyBPBn%2BEyBiR9m%2FF2Z2HZNV0xxqkI9eC2KB5%2FvxpQKOTU6ZDq5UaOY7EBT5pUj6D43R2DrEqMM3178MGOqUBu%2BPX6zTOeTHNtwAftUyAK5B8uzKsYKN9zhxrKLtH1h%2F2QHllo5xqJRC6jVbj%2FVycwgq4UPOPmyIOanVJKDzqWQWBGeBJ0y9PklRkYaAAfWyH0RjB6Zfw2yaqjHDRW0vm5eWfPWj%2FgW%2BzSkmOjEw%2BVJdhULEnDGzEiBxYDPFA%2BNoLRfK2wTEE60WsQ1%2FDKAq0gxV6QBAC80oI3fO8H9uykySLDVmH&X-Amz-Signature=cc4a5b28c9534d5408f5d3e405ba4d50613034358a96707496cc5e86d5030485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P7RVBY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnoob6UA71%2BjV%2BaOI%2Ff33%2BUICcBpKV%2B5O%2BNfMf%2B7P1rAiAlHGbrruCZvHFy5XhtMpLFS%2FOH7nvAChNaREqiEIVWViqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGPjJpUSZU3ifH8TIKtwDZlL6Ot6%2BINaPlCo%2FYAFEQB2V%2B5%2F9ko%2Fn1zAqDzaAzp7I%2FdF7zAz7SMgxJx2bY6ddbAxZ7GUMwqQK1xnhhdCqrlRkXt9J6J%2BnP1yhKoAKMmUqrAID%2FM2VKxqBWX4pQhI3qAySgnDiR9EcRxWkOw3zavwczX84Uu0cwYhydOCaedgbkyMj2kxUvjARvDDf%2BGrFdUdDYB0l9xVtHDa5Kl4ZF7fjHyD8XhFeLBMN8ZG52%2Bp7%2BwCzQBcvuCs6QVz%2Fl56jttc7SvNRsjG%2BJWK7crnkkQgAFeKAKnJN0i%2Fzhwng9AAvBlEQNrxNH6C2AeFY1hqetLCFthiBR5okT37XdiO7Zh7osSlwDYBJr5GNA%2FarzSyyOnt%2F0UCZVelih6XtTb%2F0x%2FIPWFJ0K%2FwPiy7BOCB%2B%2B4anxGtC9dRl5eD5Iix7TrBZzUUe0Q9jV1mLdQFJ0IvoQ1%2BCYLODwloqjAG1oPS2o3qoOCY191OyQCgF1z2PIF%2Bv8Sm9IHECdKbbW2E5NfZosBGqEmYE1i%2FOYWFDpkHUSJi7om5AdWfXek0CtiSqB8rV5v992VgGMx%2FMJaKUkgr9Prln3MbAwnwl9YuYmMJnuEuGe7yJ8txPm6TX5xYdlIToTKJxEnJCpva4j2MwyPXvwwY6pgGoMkOpwv4z1ekfHMqE8ZIjxPj2WnpOyGm0WsgCIh3gjy42qB3Ny7o47ilrp06LJw%2BPpYy6fmBnXaWdEYjmhc%2Bb3oIiP96%2BaFgHCxPCuUfZ40rwZyikAC1Cj5hjs%2B2wpdKDhRDDsOFThVMZAf7gYekmrX02Txwvy5pFyVlxWxyvXpYzPT8yZRS%2FKI1VfaM6x7JqWBhvU0df4IDfwEeGxWwgKHsGbUFw&X-Amz-Signature=fb3516b222ffaa5815711aa0fd1efb0550efeda7402d7bca67d26c026704c0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
