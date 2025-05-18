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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FONH6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsDl0j%2B6F9yBJlHi3VcXLYqNnrgRY1fa8Q%2F%2F0zl%2B%2BQ4AiEAivL9XqdgGun3qN1ATZNlk9mwHydvxSOmOhlLAfPQT%2FQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDECquG4VVaXROti6HyrcA4sPk29ZUpP4pfSTS6thI9LBTDb%2B6sm8CC6JYu9LET%2Bnjc25lYxd7VL8TZxzn%2FuSXknfiRkFCABZPO%2FGjO3NxVSb0t4Ze%2BR1tTBIU0TIA%2F%2BirVIyMsqa2yzXVnh1%2B5Y%2BekEpFBZTviywPCpyi0oFv3e0qp4DV%2F67c4%2Bnv82EJJGErGg2RuIGCdMnlddm9yJ6tl22OE6IeeQw1CfcNS2RLB2yclGT4UqzPAJjdfi0%2FaHYYz1P3mSHfdUcTE3SgM19TAxcWrF5b91BpD6Qs3v4QQ%2B5XOKg9ntP6zH%2FM%2BzV2rHP0%2B09XHhTJOIJmr8dDDqDqrOChY90sn8FM2XTJt6IsUtqqQ4mQEdG5dg1O6XA%2FgKez5gHJvA036NFotlGt1R8PWDsy1ICUDW3jsBHO04c1OtlANNWCy4iVlfC6FJIoqCGD4QABnDFzTwBNk8ESI8L5k%2FPa80BMk321PYHBzJDhtE34t9Ra9MEHZmWHvPcufz5mUeUvOTG4CfKXj9YPGEjQ%2B1rKJ8mVZGUltP%2BMcp5UwFKxjiRv0kBHXfbZhWGwVnK%2BhHRLRrQ1jH8qx5snW7bZXqh4Tdb88YFKX6aU4WQX0uITDpPXJTDJJ5MnoQpDRpl7oJkBwETT70PRUFuMKbXpMEGOqUBf8er%2BF97A%2BuEFJvmtMHU4x8U3EtIDQ%2BIdsTYW1Ei6Tc6eW%2FXK%2FMdqY1y0x7NxbFXy4%2FQXyw91cHKpps60WOZzLvPBpxP47xmezFDfy63635WJw8F5F%2Fw0w5BrSNw%2FiLdU3pMpK3TzSuADckPFyYBZZPYTTSR5MHM034mze2IhYzQOTJcmWU3yBr0V6QFOvntUnJ8%2BrBtAEMIJjyUXOUOpkWiX8%2FA&X-Amz-Signature=6b00b597c969cfa4c061677f69f2d0ae899264cb4cb59349d6c98a542386a93d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYS2HYK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz6CSzCPeD93p2a7hD74kX5RH3DD2qt8VOIenEB3YCsCIQCcg%2FfX0gV3tlgZcRXoJO3v%2By7e9iLSt6KuBsGTo0AL2yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMYOHOENai0z%2B35%2B7bKtwDwwjN3GhuO%2B8GjSN0idS%2BOVu1aB%2FjYUaxgZYVm6UOoav%2BojvvRMXvkMb9TKk7Btb6XcpOw0h2KNTKsyKQ%2BSKHJdTOzJCtX1O3AXYGnCU709%2FYWGcro8zxWL5IzgfnqXH0gPn6QNpxL0SyvXLyUZ4Bi%2FOHE3Mi70o38DpbbqZTcOkweGjOQaEgWhddw4c2zoLRMr3WFfb%2B0%2BqoOy6q%2F8aG73jpMcvFljecsEk2ruY%2BHyaPvkVMAifulpsbZCHOlurYls2xoM8jbASPnjkm%2FumNiIiqCsQZm2khfx%2B2qoGlRn4jcnYEN8UCxzgUjZoFJtzEc5uIuzrQwPbcXJ6xAKBygaY3WOVyrbcdGZunQMSRiwxv30kxAgsk9Qr9V66D9vBqvA8FWtAmYFoEIAsIaE05LY9rZe9Y6JHMqepiwfQTNGvIrkwvmLAdSuOWwgbX7zCue87AnsJF9pqWw6p%2BOzPOa2mLWkBe2VgFg2S2JKXnRNOROg2wf9eLdmniNA7abVQ630Y%2BF0Ygb3upoXmGN6FPFTaShyCGD3MkRueW%2Byi1Gz6N5ugVl0H3qwdY0wGjlllVoV5U0HGSfrvdb66d00MhmPk9P24qBiXSJtHJ1NgWxXP1hnRfchkhKtRvgOowndekwQY6pgED6xmyyBmnZlmGU0MMaO4F4VXDMa86cEWElOdui3ENntSlj7Fj9CeQ6UgT%2F%2BZatdSGnHWyZ4mdvsU7R8sVi4F89mQYr39riNi8eYMEBphqUwLdv2E%2ByvoVNgbSXt%2FPJ%2FaRNstScN%2BRKtCUQsAXW9ePEV87Jr4PIJu6AiFKdHAjj0otvLkWatl%2B4ZIDlotw23xWmP9soFDNn43AKnaZ7Jpo3S23Jx9e&X-Amz-Signature=453332dcfd0a067245a95f15f64fac925eeccc146b906c7f26960fa56efdeb55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
