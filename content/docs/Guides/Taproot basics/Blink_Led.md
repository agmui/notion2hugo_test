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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLXY232%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrxdt5bplK1omqXavTrjM%2BCs8W21aPR%2BMrdFg7IbL9AAiEA5Nn%2Bb0QgoGP36Kv6SHEJ30v5FWAFeFo2QBbwDvLzqrwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF6HhEAPkEPsjNl%2BCSrcA4bC%2F2CFexm7FtXDka3hnIa0HA5NH90mc%2FqRSW%2BXGguSxenK%2F15PD0tQkRcu7efHyi6E0GtiTfsD%2B9NjXUr%2BcToO%2B6kTW%2FZeWdWlT0omVGIkHDsE%2FuU8Ta%2F9VxV3CtyO1bCCWwE7UqX087jQca2qhz9LajaiaP6hjSxUKB24vKm4y2tVfEt4U0gjW3Z2IT%2BNJRXLOOgdWHa4uw4TW2wR6Dl4onhgC8nL%2Bbll%2Fkwc5CR5ffcqtdfcHrYnX4Kh5mIgqLQFmqvF9Kma7PQwSrLGZzGJNQahJI9llpjxE5OHHis1gx1EI2YBaat7IbaQfflCsZzWGF7VQR5hkjDtHkfYU12PMp2xZjocm2XbvQ9b%2Bez1hCwFiHrbPBlSPjFct9yyCW265iUUbnDxYQNEdsjJY3ZBNvGe7lgQIyPsU1HOFG8l3FPdFuMc40vCSsl%2F8XIDWkDwRb7PhyJTJAyhk5yfCI1myDtGSxzDnGHXxpv6JCNa57NwlHjOpD%2BPfw3%2BtgJKUY16z1BV01Letv2JAbjg9phdsCA7%2FwnAM0DxtH7kyMXIN%2BXsoZgTzp65tI9zK7WmY3zlFeQC%2BsVxQhuyqaK8Z9HwH3PuSxKez0b89pTK4TRhy5jVpXQ8pdrmBrdnMLLg8cAGOqUBqmUT%2BE6mTx2aEDAymjmhHGIiX2Qb9cHTdMCjn5zzJ5zyK%2BQM7kDoRMndSDGjJVGT4Bvn7d0bo0Al%2Br%2Fp9U%2BRzAT9noFmE%2B2Z%2BhRLBS70zT8vGcmatIUhi2etsVnfb2%2Bt33SZJPQRBoCUbPX1is8g2W%2BZ%2BaEzVGQlbqoga8o0QRaQ2s3%2FHR%2BsWIG3dD1Pzt62kbd7IzxJ%2FnQU4WPzRPlIPYT%2BFtBP&X-Amz-Signature=2235f99de5d07833e1820079280cb802b05695c0f505e7f8987c1690aafdced9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE2Z7WO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvc%2BvlVYsWWT4t9i6nhluuccFf4jYkkyQFhEf8HhE5XwIgRfEttSd29hDLbRG4Wo8Ew9x2t6v0iRZnQfG%2F94BscN4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPW%2FeTfzJaUAnpI%2B5ircAwnrEUed9wzWGxvn8fnYYjnCu5CIpthPf5vy12J6xEEbyteLeLYP6CSlsh9psAcrrcMH6OvmTaxDJReRoTEmjiYnkC3Fm03W%2Fri9%2FMmLDUTvWn21clxScZ4HlaBJTAIEIDlU6eNaAgEKEPecJxJmSopPmhNkBh0aY4o%2FtljEtrf1U23hVZiS03%2FzbrTrVgkfS3T7VfPeJ1q0ZtqqaiTUsTIozPTnLN5e7s7K1UgmX%2FZDA8eXnQWNK9%2Buy4aigkzdqOEnUt84s4FvM2YIhFptCHuNzB%2Fm2nHHJHPWkWgykd5ILnvzWpzjPSSTIzvodQO6N6pPs8l6EJJBhkXmFM%2BA%2FPrxCMzmNmx%2BGNIueBkn9ucGvN%2Fk9i5fbRUe11cDrDD827XTxtSYXwyMboedvnGFtwMHwxRjm7hQbDsyAdsQFrI6w6ac7zCE27JMIdQubOMxJiLJyMvZ%2FbybOD%2BAw04D6k3iM2lxGBtsK3lCZvN%2FAXSSxTkbIa2IH44BuD%2FXtCjlMANXbokQUC74jCMijHA0getU0o5nCFnK7SFosRJvdN%2F%2FI%2BD2ozmJgh1%2BsCD05X6nevAZiWB6MzRSdhdYdwhj2xNkkEIi3vZYOrZpXGLzLR%2BnN6nX3CHqxA8OesRGMN%2Ff8cAGOqUBtUmhwsw4N0FAj3DaBVjXHtfk7lRUMcNwzwKeWYV5mfpPiizmCni8OyQarTgy8%2BlI%2BNcjzFh6QU8oL951cJsAdA7hC%2FjWsqvWl9e6AgyVRBuIQ3pA%2Bs%2FROywb7qUTSWnbDlZqFoW6E%2FFvJM1l8G%2BH6hLpbrM60%2ByzvuZR1EXjClXOMp9pBp%2BFEvWU70gxfgNfHvzgANX5a5gbclLvN5LE%2BzzCYkdY&X-Amz-Signature=6555be8721cceaa779547ca0b65a61ace3254b8441c6451a156a16be213ecd18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
