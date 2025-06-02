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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVUGNFM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF%2F%2FLb5uYOcelan%2BLwN1mng043QTk8Qz3L35Guwz34dHAiEAgNgRBRKia2nzlr9upI7RKwGEtgBLsMExD451PPK7tPgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxlHBw7Sgl%2BjPAxxSrcA87iJAj3UxaSxUriPnR7RtnRutBTJZhv%2FuUBrWNrDEQYAo8FQN5mNPzW%2BC%2BNe6rddldDAVXdm2Jcck5TTSdhZH%2FLeVPBEpcpdu9KNKNNZfSRccsk0HiJrUMZwBDUzDb39yzuRRmznMy%2FY1S%2FSxeWgLhgq2sF%2BSgRm8zXx2k9Q92Bzaxf%2B3ky8zeiIN0JC%2F%2F8lLjZ7nEi22i3tEiVdkuTz4WDA3K23vVh20w3AJiY9qb6otUzxd0GTBoNGE6UKe%2BceWxW%2Fdw0cLcQ1m%2FAgAMrRgTBEmsLs8KHBenpFKgk1TSIaPPzEjuJvepPNQMOv6A3%2F0sV%2BfvCbJWDJJNzDO6qNy2NnyzmWtGIultkmih%2BLWasxzZPuEeCCpUFek%2BJsZ6rmJiXaLnSHUzU84e86JQiU6AAKu0cDDFdr40xBvgjhUEsPoMIZwmQ3GskWIYwkOG0O%2BuL6AdQvZO1%2BEWCy%2By%2BGB5AHXGN5yMZ2s%2FNdl9kQkHeC4uykvJN1c8KM47i5su36SDmwmtJU3nc2FSV%2BERABlGlMNkAAplB364u%2FxcCUShUppcxAVy%2BobIVrNk%2Fm9eDfJ7xeYUqltgkcSq9mhNoZyXQ1n2FPXRv5agJ%2FwCVXmI7DnMR1uXkVK%2BYmwJkMMyl9sEGOqUBTtWsifr6svnm5so0aHUgx5GoVOh0afbg%2FllVoVBUD9oYw7FaDhO1r%2FtuY3vJuuuuz10ku6TNX5D%2BX4x4QUPY72PVBl4vIQtePPKpzs1XRRKck9dwT2FF%2FGETqGRHNgzQb%2Fvux%2BDCXw5SxlR6rR0cI7MRLTMvmhF%2FyPTtoWmUmiHjqOEd4heOJGveWmfI1GW6EeOXX2qV28jMx637K2A39GKu0qjZ&X-Amz-Signature=9deb1ae4f00bdf5655b127215ac0caa2b82426d6a0afff78382858bf02e52c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCEZRXV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDl9JAdQjiJ6ViHba3x7HcTZmafgLXpbNQtikZm915K9gIgOlx9B3NTGxtOqVt5yjTZQlwSe%2BzaGB3lTbrYIV1memwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrT73gLwkZb3R%2FZ9yrcAxizEuzY6I21DmSiKVMuezIabK3RDLnC4dOmIYfKgx57dBbA0qlalP9p4rfitkdfOnXrGB0THDQ8fOL05ItaiKc8%2FN8c4egnuPF6h27hAzKM2i0gpqTHvomK8teIuDZD6f5ixM8zhseposl%2Be4rEzt4YUCQ29FI5GR8tTJaONLIMU8zADZBPyMqZJDizyFE60mtktPRr8b72XeAH1HmlcOIbeFfnXiu%2BmU9LoNE%2BOWgOxV5%2FCQjmSAIsqPLFdZFQIr4cX2hbqtLB6Wr7jcQ%2FeBzhijTCyE17BUOuy39NSxYQEGxTf3QWze%2BgybHhl0bdp40DpHQJCeYz3qcxAfA0ECePrU6HUprVgEtfR4J0tKyqafGI9ap5vyGFAq%2FzbTppaD99Lm2aPMiVyqun6nU08X%2B%2FC6jMSwoBvvBE5eMUDtog%2FoY1v%2Bu173tbrCHEyrLu2f6q8Cto1dYEHA6YCFIduCU5wUmxt7or%2BmXKobDm6%2FeJawcNCyIGzTgtAl%2F0R9Zsvda5ZNiMms0UBEPT4n6AoiFc7CNPPCo9ozfXpnCgsCLX0Dq7nX%2B%2Fbonbeu0krdOF%2B%2FUFhIF8MWaEfZP3FhsLjpEECECjNNkRlRb2tIV5%2BJ4Y6svg8FYyvK%2Fw21fFMLX09cEGOqUBuTL41VZ4rIQNkE8teWBwyJqwzdkoy%2BuAUXEG1dAy4olRS5jz4BzS%2FLWhEw7FYQlcWK5hnzZqT8diEqmJd7gSmY2rb0JG48%2FRcbJeWDBwoHHU9miJZ9iocJ%2BgVA3T0ctadDlF%2BZHNb9Vw48irOejo5D4RSQ%2BwHpOz0mRcJZ16qyhBljkPbDDGMYRlhkn%2Fg%2BqU%2BSfEtYEgtRwl5h6xdlB9dzG10sYb&X-Amz-Signature=b7c20dbb7449268a7805aa8a15ef3fe48dc2a067c563a2e921824829a45a1b22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
