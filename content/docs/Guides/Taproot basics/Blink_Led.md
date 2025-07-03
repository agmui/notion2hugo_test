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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TDVJ5US%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD%2B6B93FWGjx46qTPovg5RbtfYNo7qa5KEJVALRygiVjQIgDkr2ZkOHCUpnyv7SINwUXMOTL0MB0%2B5SRiP9jwRRnCUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHUSSsPXrKfZSciLHSrcAwzwy4d7SkZYBd1IUyzrst3yQac7zFc0UIlxnon9hp%2FjSbRy75Bd5QOdoKsRepetm9vBx1jeHcie8UoFgl68aBoQAq3%2BxV9nRDsCFfP7B%2FG47y30VBJ4r7KQBQqPz%2FX1bkeZDnhNRJX2Ee%2BbhlppiBIwr7JY5d2oKZYe2sx0zGOwbfLmX1GM9FPTmQUYKt8ZMlxEaWBbPa7Z2PSTIrkSIc%2BxH6hpyXeEchF6Ig4VJFCOVSJ7cjTH%2FRpIVlblGelQm7aQQP2rdTnMPCPOzIlv4Cru3nXoFiSgyk8oNOQXRPLuGhLvAhCfdMDFcZ4S9nXAQE%2Bl4RkiOwa%2BDYrE1Jg%2FMWqE7T7XwKrfOW4uqSNcnWRKU%2BH%2FApd62M5yYKOXNhT5dLJ4AGDXh%2B7fVqODB58MmelF7A65cfzOxUqRZhgq96vt1yfOmcHBRuFTMEQWVlwqV1Lje%2BHEX%2F1ybOSyMUkT7fyzr%2BvyGjx2DeLZiWYMNOVXr3dVQOHqs7GKbKl0rVmxboHVePJGYUV%2BdibmKEYVufeDTSn5%2B4vePTdX%2Bc91mOmg3GdZVlT2sZFKVCbAF2wnT%2F3jhrckqiESwQY6awHlguqpjzAVU8jgop8qHsWrRMYp7y1%2Bhn5OvXKdlocxMKLemMMGOqUBZLv0yiDKNWcLSuUmV5FoInaNSIHrrN2iwhe%2FiGjc54NqcWDvvIO6S2B5heWCyAxoBevxe74%2BNjP2TwoG9cw%2BF5PcH%2FPygNXEXDXXbJbgV0AyBKwW3C7WOcCRI9XOBtB6lfDj1rGUFjp5MduO8AK0Pdq%2FtJSABgkof%2BFSR6eYkvqO9%2BE2YE5lA%2BEyv2SGO5OeDDPmT6dmdTLRLeprhd%2BjUNUiFRSL&X-Amz-Signature=b0ad51cae37be9b8ec0625f96065bc17a790f3608cdddddcf0a762385ae36e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4QF46H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFeUlncFp6h4cu8CekIqayThe1G%2Bf6BFjMTRpzca%2BquMAiBvWWPPVvI4SVndwI8WiWqlegUS0RoGuhS5zd1g9jEjiCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMrVWW%2BC2B9297Te7DKtwDFabKfpjOBCxfzru1Cy7%2FlCOFsXQHdqGA7IA4VEu2V9UPNCIyLcO6HmOvl6swapGAwSp89uIwxOv48VHpM0V0TtnUrUK2CLPwFbZ0pFiGnR5vdljadLv5PPQRQfS5z%2B6zV8ZxDtKNd082Jh6mfwzh3iUQoH3nn1sdw9OsvwEXrERcCWrJDSqkvPbgL%2BSLZawE6qwMdT5t73KDVz0%2FvA3npPJxVxDmTvSilQ8Z%2FMO8CRfCHgKDz%2FgEz323U1IeVi1xd27N5W2gQK8HS5j4KTWKOGUEdNpzZQiCpOdnGIh9rJf%2BXD7JEOs%2B7d4lXQlA3pv2Qaa%2FMbr6yjxS%2B7C6bmgF8mESkTpAd%2FiUC%2BXLxGFovY%2FeDT6RyVOS2G3K73Dg5bDqQd5vTead80BnxmfLqYQP6APm57xbNLJBnmW5wQhMRH0VPg1jmpk%2BKyIbbTLOhC%2BnhjGMm6sJPV4Trs9oGEnCcRvb8f%2BpFuxCIU7j9IPUlDulrYW3y%2Ft2HgJBCIzmK90%2FuT7Dpbn5GeIbx4xwdUSDbYYyiurjb1HtQSj2ALXv4kBn%2FoRXQkQBNOiuGg5giyU4CaNG9QqG9d4nVDLUTu83s1E6we7Y6IPB0Dore1eBJNIV4SFVqlRJ5Wh9nTowqN6YwwY6pgGVL2v0UGdBXShLGIsI7%2BuDX8zF7gxvc89AT1BW97y0%2FC8AE8wTwPcPkQxEDcuAu9Au6T3WU5iTzkdm9RttJigV70WTRWJ6yubJkwj6CmuY0xCPBp%2BugW5PBZJjDGkIZkly58WqaLT%2FPh0%2B0R0dZ8cPnDkFNmqZ%2Ft8QgF%2FILRntfWTdwnerFNTkvddQ1zdaZ2ZA0uhACpsIaugbYt2sxUjYfJovW9bp&X-Amz-Signature=f4f439d6752438809a83dcad1fc33c025d21b88fbce5ab0876cd9e59181faf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
