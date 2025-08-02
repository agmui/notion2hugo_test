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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTZNBD4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3IO5W%2BsCALa485gMHnhHmunAK5agHbXEvtjyvG%2FpFRAiEAkQdN8tC6RVhKNojhFmT0g7ZPztn3w3nLGZuXlBh4dacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBWQh5IiMnyClI3LsSrcA1UwxnU5NhoRxEC6BgjCmapt3eOMNfPO9ScoJTnCnHXmEpDAn1KG1RW7vqRoJdPpeSuguOkAmMjlqSSc2Vwow9Z9tx4H1Q%2Bp7PqKokNQumX3HkZI3V%2BQAmQhlQDh3DZYoX81k03NlsWSSaMZhbsMBqiZMIAzSmSRwKyRfW5OXChFLibghi3066b6wF3gUJgvhVlPmXvLtNv4Sx%2FAEQEg2p0N%2BEMqN26VejAYfNyaKQifOWlDrEMcebJZPJnQhC4SMaQYmlejkN5tS8RPh8YsioK3wU40hpIeZZ%2BrFjHYEgC1arrx3mGdKxPz6ztr0d%2Bm4tGB6nrVq8XPtJFZQy%2BBnG07cpgnK2O3lQPxrZD3ENsZjck67rvnNiuCXfm8gdTQiIVjGFfLAL3gC8bXKsObZYCSt8NVfhIeB%2FFGcTI2EiUwNGZsF6JHuUnfKSAI%2BzTUoNKVfbD0Svpn4mrLDt0YAKijHjr3DQeJ0HTMjHtpobWjncrsQpLkIh7rPoSGBhqva%2BBpF8T65XS1MH007%2BWTAfaQq8FLbBENzpymrbSwpJgFmIR96QK0BLd1nQDoj2sZ3f7RdPJyyeD95NazBwgsQRQE4gVfjPg609JIcFXdaqT9DL9iTBDgFAuAJivvMOeducQGOqUBdgTPHVDRyAiEAKbTgAHItwNjuDAa0VGxPA%2B%2FLaXVicnR9PswtS57LJe89njuX6yErcDiTmKgnbM%2BxWHKhiCBDm%2F8PIYe7mQbqu7zD9%2BiJH%2B7xx4s%2BxEs8wO7%2F2I0s5%2BrMabBrwSBPZixlrRNppM28Zie9xLu2agVMd3J7L9%2FxA78CR6d30PL1lW55jLEejQ%2BMGTgs%2F%2FYJtoO%2F7jbtcnW1edFy%2Fmg&X-Amz-Signature=7e5b6368bd8939dc19ee7c6e689002c7862fe9a9ed679037c952843c7cc07f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27GCN55%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTa9%2BihxUXWVSVgB89%2Fegez2%2F%2FIjtSAvudOq3nBzU7QQIgfgA3VQ0xubKa%2BJQBjXkw48U9NTCtcBsbYFSKm2f7z4cq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEiSPtbWdoCzAoDLmSrcA%2B9iETcYJUzp%2F7nSPy4h5Bex1x6oSkZvqf8XxJ1eBZVHAGuxAJ2ZXZKDlP%2FMJWsjyaMr%2B2YAxlCkwk4m1bWpdsOEfqsyxYLAd3cnnW4ZTB%2BLkp32Cpsaj0nG%2FTQNHzsvIsIAboITw%2BMEH46ml%2FmPgqEeM1%2F7Yr0pmDMVq1aGuW7YMUw53FaG8AjdkLT%2B1Zoe1Wx57v%2FvxwifTwXN6QZlxx8pU9Eo%2FzPaNR8plnpK%2Fu%2Bmo5CypS6e6iTJ0lB7uvsZKYCX2vsf9nWtyl8GxzMKLIFyLfWEEm6PbIMu%2B%2Ftir8aHIruv%2B4LboVIfsihVtvEVBf16vXoMvWV17mFcPzIYE1Y6Qiyc%2FwI2ki9v69zHyflHPAnlfzPeIBQ8WtaiTWib3%2Fd5P%2FmAvBlrrXhzU11pqPDHDfeKDk8I80SUPXU%2F9zqOjkauH2cfqD3D70NpaKO3S3RHbaKUaT5y1C%2FyaO8gc0spE3vuvsLZ9B%2FIfTUANPSPpEbguKH850CNs41wc%2FUdfyv81WcNuRr5%2Fr8D4gqu8uUM%2BUbpnblegG7hJg%2BywZ2Bg5gEIiodfmmtw6VhOBJi35EzGoLN%2Bewcd2g3eM8Y3TVbcJviV2HkPaYGwACUK%2FUOF%2BF%2BA1MmYWp4fD4VMLueucQGOqUBWBj9o8vnZ%2F6N3M1OrNg0F7v6EryjhAZ7coCaI0hJkSF1CzSU30Yeib5d4wr%2BGg0rmLE0YomOWVbnA6uEIDTkQ%2BHXq3fUMZr37maX8%2BICyRJ%2FjsjQvNOPZiWtsm6S7TBwHRVWYbnRGMK5e6exV5oc3K4bjBGqBhl2n7k%2FdN06VllfarfbRgyyCSDFHe26bJM6%2BIkFWada5EYlpGsTOT9lkiSYdqBY&X-Amz-Signature=d680e62e1497ca6d415f8945a761b7ce4d8d16e4e071b514574d46a739d3c9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
