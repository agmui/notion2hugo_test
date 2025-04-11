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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXKCLAL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBE88fpPlyjiAlf8kGv%2FpAIUBGB%2Fd1p13IOVsOmbAvWbAiA81ni2Fi%2FhFF18JTECaV6L2LZ0Q7wE6ln%2Brc%2BQuNJU%2BSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0hJaYVo4wBwcz5QhKtwDgEvCK6iRmKZxpiEbWh1e2ZavrRmYmNBuboVpIq%2F3k03X4x3XnOP18kgpbiJwU73Jv%2BMSs0HRCVOjOFZyyN%2Fqgpl3vpLtVZwkNv4ycoDVmFKDD7o5EGzmVDb9ZqLdhI4obHdm5d8N%2FWGP2gjkuX60VGSBOovPkSAu%2F3n94YtOWrEdZdF27xj5CAV1lVYmIrRJ80CNL0PnxF%2FDrDPlWdmNv%2F0IHbiWkf3F%2BLID7Pr9HHJEN8j51gBbKYv6q%2BcVlus2F6WeLdjlavLWD9u%2B8XrI1zfb%2FLVrMopnB4ScGnAv%2BHaUr4%2BCmMoNO6L5%2FYsM%2BMfWrABMI01q6maPICd3OCYqiazL%2Boxa8ncJrHU1wApZzwcs7k1dsSnARmI%2Fb8kyvPpnDOsiM5ywbayq464gnZ7c9BbPTLjgf4%2Fd9dEDgFjxlpexTviKsAawQ%2B9PdRtgtjAWgNUT%2FczLR88zLxnvEHykgZK%2BX%2FEiFd2hdq9wTmz%2FsoxdOwHlt%2Ft4oFEGxV7HCszYi4C9cioQFlrpyYanfsnu5aXqWhoB2WkOVHDYkzMf4HMmzaghEGWyvsBCGpvgU25KQO38pIviy8WLBJ9l3i4fZWqMmKD3Vfh6OgQ2U0S2WgTVKAXTkygkrQiThMMwr4HkvwY6pgEd8BbC81u0Gk1RXByV6ACA4ZM9t3UJbpQdd5Gx3ttH6wjRdcN%2FA8dw1vvCXhkdS6PpfkL0owFDlXWjVqiVJ%2Fj9zYIiTXYw%2BYUJ5TSni3zuMiy%2B2%2BJeL9YnINz4dGLY6u2RH%2BbYdq0DYyhaPYH9RBAoxG3qAnYDuhFvNPpSRFroYG5sPaIU%2FbdVMvy4n1zcmH%2FMpzGFaKZsp6wwgPi%2Fp6ArB1%2BFGCsW&X-Amz-Signature=5b0085660df6168ef7328c1343e2081787458116915d1609f379a8a710fedb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R45PZQXV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICQ0LzBskSulxoL8c3SFPBq7Fy0iS%2FTNFmO4EH0VG4nTAiABtiyLt%2BAOWcOK4PnI2tj7l7RcbbdbDzOWta6BtgqmviqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOCd4tt0btjUxYXdqKtwD1oTXH1EUTeTbL8MH4Ewe17KX%2BWfyvxauxNprLAfcWbWE9Yo7vj4UWb9FixohWgyx1F37thZf7eljdd20MRpzYocwQ2MwQPOhG080b1ckg9k%2FddKtyVyN1fkKU1FvUxkduYu4vXpmGHJ07JCLKh%2BfZZ8B96xx3nQOP5%2FTgyXhE7ycAKfV5Vya%2FfJAeoQQCm80ddqP6rb9PIvrUXsD6A4iCCYQLzkpy4siboZyVJ5n8KkyvCAMtlZRseiAtyesXcA7EujQR1ycbU5znRyZ4YYA7fGeikIe23KLITusleJlsOCVVxnCwm2tgK%2BannlzrTBjBTikXM0XWAhINUV1X4Vx80lXXo8Nn%2FZezi9v2LqU9qJVz%2Fl4mLsCsnxOgbdKG6yUlFPvVedEaS4H1BAIqKJ5bor%2BgD3T%2Br7h%2Fg1JzByLEU3Dn0FPNTRaXFCH3sLSTy668kD2NBMoxdgm4XIm4678GTHDiJ3eYOtiYpqqv6nl57RmTwVeKcaxCYAjk%2Brb4sNE5oCiLraR3yRZTenLuwxpa1slDxiyWTtxV2%2FPsmxJLD8R2qgyk7MOfDL%2FA0gY9rk3J%2BACqrqZcad8X8i9gZRmq83z3xD7qXcxFMpfwCf%2BfNlRyrL443er98woKGIwxoHkvwY6pgFj6I5PfkoeZOgsIlETyKdTsWAwr%2FTOOafriNbu3mQSoRuFmfSvKLa6m%2Bf4CEZvhLDOuwV%2FE9KGJx9oYpSTw%2FSFy4T3eZMoT3xOpw%2B1FZAWF8JiNcpHz4AvN3wCy%2FPUBj4G%2BySNQ1r0ffRfwfJSavCZSCydtilD3PJwS%2Bjqeu0CYECgMAEgp91DHrKsSEVRuIhnSSrze1bnot07k%2BaFjXclXGbkmeYq&X-Amz-Signature=b2d17334234fe68338279e6d25b754dc5059b98d9afe7e960bd1449f9fbe08ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
