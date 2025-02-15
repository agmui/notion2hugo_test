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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5A7UG6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFDfIx4E53TGXGp5zk%2BUKmSVCQ9hTvo59yR%2BdrN033JTAiBM8NS09SDOU%2FJ%2BBo6lq5kt1QRb%2BhXBXheH%2FVjV2QTyHCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMLHSLSRDiPFBgNvA5KtwDqe%2FhkBBWggaGADVDA8fci%2FO6uWMOaBVpfJ2fJEF3cMq5KoryPpnjdrmFSk27CH7%2F2WoqFyTNmyXbBozrgRc3JoRQ0e9vOl1I3nPtnwdK2AysVdriVk7W4Iae4yfk9W9EME%2FQPMzPmIIZej9JziFINXCY%2FtC2f5lv2zpZOQkIAKEdfnF2ZKqCculiwzbTQeOSJHK79qH3av6nAJgzx%2BUV9hJPJre0955HHbVoVCUQKIjTI4zbcEtXXD8zOMvp50dXzTd4mnflw9kG6WyhW2rHzYpJQtYKi4ydgMGl7bo%2BiiNsaKOQCKUcg3%2BYMpxlBrf60jTiP28xNvBejGBYluwecD0pUZw%2Fa28N86NpbRnNWQmCGIeR5YHsXtJLdZkxJY1F%2F7eKoZuRNaMT2uTZFXl3vFZb7aacLwe4GJdYQUcLzw2zYC4rrlDolNI57AHRcw92CntElWwFgTDw9%2F0D8cqqrpM7prRMPyWc%2BQYNAId3GPEXO1x0mNKgq%2BdlFOtapWaEZmvWK0L%2FV5j%2BCsduDwLN1OxC%2FmLHxk9qJ2o%2FmzHJeysR%2B6QYnPkM%2F47wcZ%2FLcAzV4UY3MXoaI2Oc%2BMpuFPCB%2F03PWDthItCR%2Fg6%2BILJZF%2FzKMqBCoaOOqZxsVBww0%2BjAvQY6pgESmcKZ2o7Wucxqj%2F9rgUjvtpmACORov4s0m5ly1DMojkM5eRHTaGTIvCOnv2%2BAciIcrmwhpsOyPnMRPbR8gkV5jRDufb36bFm5%2BPAH7OuXOG0GCrlPunkEj18bMJr130PbW7c478Tm94qTrd6FvUgJU9aCUvPJrge%2Fws2vWtqkymFoYOLPhqJZIpOuq5BZxneWEmaMFUlI1n1M32siTcy7%2F%2BeOOCZJ&X-Amz-Signature=9aa1fd8bba86fb69b9834fb70431248da821d64b1d70f869978e3ad70527d2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYNGNJJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC5TXO2Crt6PdjHMWdnqbJVhqNsaMgfXWpXXh%2BKtMgYsQIgU%2F7Xgxk2Do1Pz5xBKGTq6EcjbyMsZx108x6B6KRURJYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGypHoCilOHJkqtfUSrcAzrMA8akX9HzaO32DUHAoknPy0Ai8nu9PiytUdd3vBdtswtQwzUl3ibKaiZ4tt%2FMTcgEeIgAfInNpxkHbe6tiWSrl50SU48q9SaxqKjdxfHRdIlHeZXORJham42NWElXafLe2F8p1rXg5ViHQLOKwCcxbdkdNOIz9dILox6PMKo7flMkCxw3jyT0BwStAig8GmAfOCy5l5E%2BwwmMDW9Tx0J5yYH9ZrKV%2BD8v9SmGMcl%2BmumcS%2BTUnN2sijSBuUAVbHyeFlvpGSMBHpeWzbpcBuJ%2B7SilzHFySNHbZQtb36ZHLWKQquS46GFOfVlrHQCaHW7ctlaPeh6m9Yci054rVjLZivkMmvoTdbVx%2FVB7YXaX4asWsQ3NxcP0HhK%2FdtxXyoCiPKYKLVxi0QDkXkKM8calfCsG3q4e%2BkZiQgI3I%2BuZ9tbW9Il8oJFLxwfaQDTSgMz%2FnKizId3ZR4c8fRBnffS3x6%2B2PKAu1JSnQ2qljj7ahcg%2F8Vj28W3hrDTrnkHw0bt9%2BA8QC7dztr3QbmXKR4Q2o%2BwhzpHnOBvKsEorIPj0mQ%2B%2BNvlsIjWU62DmfI3x8yyfOM4etskLFWbHZM4dSSMyhDZ8SYzo84luzWiQkWkQeDRLqCguCYGfx6afMJbpwL0GOqUB5u7OI6zolWgIz6OZsdjmpg4bjrlSMfUSRu0HMYg0TrZq%2B6Hz1bgbfl1WiGZ%2BGRZSJqgGDQsyKZM6OoU%2FIR39h%2F5g%2BPY92rUBDYvehZ%2FRype%2FgahVuBY8LfcyZCHdesB7tfM0fP0gKc4knVpw%2BeWMXS2NM9yPX8yvJAOSRjwJLanXbcLSEN%2BhYinApUrUY5vbEOGHXC25lr1fDm5fhuhXDWqRwboh&X-Amz-Signature=dfc375c6591d14075eb9f94737449fe38245975df1d979d64538c8b84a03b8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
