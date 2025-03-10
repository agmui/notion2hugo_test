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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLTK62O%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIA1yVDWwoRbmgI8R%2FF3soq7cQCNrGjxC%2BTBEtQUAIBbSAiEA42dQ3vFAiCmLsJFCetyAkMDcbgtqtOY8iOY9xfE1evwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzxc1X8fOiicOzTaSrcA3UP4O2ijz86JWbHsqIce7CfZn%2FVupn5ouquUReZn0AFhth%2Fq1e1cJmLTqBkj3wc9Cbzlq%2BUuHHbl68tIiOrarMFG%2BOfgZ4v2ZoD1rErN5HwqMP5mQuJosTwCWXCUWs01qqqy%2BNDyPvWGEml4hqvcFMs7zz7YKyqGAyE8nK333ZT7JYUKjT%2FJhaSLBRb0TuXFNjU269NdL5cNOsfpNTreGHkdDwN%2BEqvcCNAM6r0FYpp5OuJSDyiKjM0rhnKG29SjTQQd1hKiSeZ%2F9BfRHcOqRHyWnxS8106wUwcbj1IMtCWyBiQw6zxZo7ntFbmhnxUgWoXtTfeCLBZtOyOSdXSX3wWImU7CTbB%2F2QcdP73XxwaVZyVfC1Cxu54jG%2F%2B0zq%2BfBMaKOGwWzmHAV%2BZ%2Bb%2BQfOlvH3%2FSx0aCijyX2AGSm%2B1rBF9%2BxtwMPYwxxXnk%2FefKvMPnUuOAIk4P0%2BzkSYiyNHHUX5hNbv0Thkby0OdhAREibNyhRFbuCJfrzP6OPNEu9HEInEBNUA7TTm%2Fc9zGQPUILviu6o60kHrAuZNtAyWf0qL%2F3wZFCNuJzPrK8K6MOAHRVMFmAHkx2e8GKzLy%2FsocdCooDabFqkNVcuBG22LOBdwrRF76458OPDPUKMNvour4GOqUBUO15PJAce7fDiXAhDKECH%2BIwWEWMcOkkVa0FyhX%2BvarzgoswEreArBXU%2BdfTpF2Vt6GFO0FQUrJ81gddhd%2FwJpBeBlKyQf4ufieVvbUXQWNQaPWwDKO8wTjhiLKf%2FaH6P%2FWsU7CJ%2BdnAZQZT9oOTbKMATPTsD37lYCklAU4yQ66u6q5LUc07kFoR3RF0YunLOmDqlzqt5XZGaMbF%2FZFK2dTknB7k&X-Amz-Signature=c97fd63057233df47a569427dee5b1ce736afa1f5a064b96d0ff89998bbae74e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSRIOBS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCzjh9rCT6dfgEZjg8NW6%2Bf2Um2v4ahhq5XQRFUhHVbqgIhAOh8L9UCBfATVj5AhKDA4RlOm9bnsIqvhlutgUf%2FsZG0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYgGRlramNbsEF2qwq3AOtz2WKO9bnd6mEoXiYMeJEm3YyvSYXahqemfU%2FcaQLo%2FsOyf7v3FXKTtfKalhFV5ArTpZHSLA9TK12SSsETOSVuhdwDH8SkVKeNRtTFyESuI5Xui4R6PV4KegMz15Siz5bArlQyaaFozeKKnXIz74PVMKz17wAHAPfSMOvLUBc%2B0CQhDeoTIbD5FIDvdQX7APLo%2BUq0pOOsnPFlT4wP%2F47ycIzyyOoNtQqamm1xV1aLJmvxi6PqsDNpTFei5q066HkLkIctP0jJeBGbZUicOmS%2BaN76CeAA8OZOuvwGNy8QZGwTlwNxCEjth5pwnmIJXS2fchIld06tOWmr418wYatdH6N9Tg9I98xDfZR8hnV7fp2AUSl3A7kOgWMns80jscSJkNtBW7anBglSOqs5PMPIgR5IUTovlZmGUmu7Sf8ruLwnorkriJZCFf%2BYrusjKxrxuplg2dy9m4zi4pn0xz52dO82cPN2jlvmGK8X3s8HBkLvcz6F7xz%2BS1l%2BOzjRBM8KAGuFOuCQe8ydyXGeN8rDad2Uu8sa8%2Fvi7tmiFDigaD0bxLdbaCesha1OdpDyNXFnHO%2FmTYJEANaCU6o7gz6EXglL2EMuU%2B396RuIqk3LHHYMoUJMDRTgW7ugTDI6Lq%2BBjqkAQ1RNJEL1YtfJFz%2By7RwOG4AJPTbrUBsXAE9vsaZ1dWVqg66VXNTLWZwQ5cpodDLRiv3ofu4QCrkKj0pLJtSzg2ntUXSK877o7GCf0YajtsBTxWMEj20%2B86HxI5rDNV7MWICZPcMnU%2FOu89Q2Afqcetgc6kvY624swTTWMAbrnN%2FFxYwBC60%2FS9mEP8DDGBESBuF%2FWom4ccvTLrWmrDD%2BRDZ2ZZd&X-Amz-Signature=41c7a9be04ffeae7b8ed3192b87858d2ee3edf8f96a050938252a0f393e46159&X-Amz-SignedHeaders=host&x-id=GetObject)

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
