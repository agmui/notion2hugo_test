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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G62MDNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BKzd67thUlgHhJYes7JwQIzZFWV98fURJQGDKyRlK4AiBJKlAD142U5eUc5CbsJickyJtCSchEpW1fEG%2BE%2FqHE5yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqEYtd4bDWW%2B3VASOKtwD5MVD%2FqQS0Ua7G88Fn9Eh%2FAw7Q3XWoFuM40vY44YzR%2BVEA%2FEAMc80G3eCrefzVbdEIIQucOzfffmz7U9KjlJGDvv6GdBhKu3JltpoTFQcfXCB9z3Qzse4Tk923saXgD4xG7zg0SFBjyAytYJK0fzh%2BYyAyD89xLLiehAfpCWp7GcooDihUg2Sshrssr2IIB7XHNaL8VCL5G2I98qF0Kyu5mgOs0V1o%2F1cAdkK2LLJgf%2FoSuvVnZpEiRug5LqJxkL%2BJokozDxmHFlIvprkXp0ZhIFID7x2lullOyuiKrv8EgNvLrbgNfCAxlJ3nbFxsJS3k2liqWTppEE3nX3Nt36QsIOpEwRG3c7cNonq%2FpKHhChXPJfhM6g7WlNmNpV5FUyGA3PtrwAXoMocfjUlqoBXVBH7yvgVfNf0n1gNB4yVNw7MsooEUKaGOIoWZDp6uCHmYQhto1BShQ45NbhamUu32%2FJ67KRKpd3DUhVAsyHiWRlRYJay2HUE%2Fbw7nZoqm3fg3Lljz7pU6Y4j0n1pIORtuZWwoblzl%2BweK9v0yM090o8ezpSMlT%2BZgeS4wABpKqRlvyH7AkidRy1PA%2F6JOdSq6y%2B%2BsdRQvc0IJZIosUvX%2BxitvasL7jwU2%2FYoq8ww68n%2BwgY6pgFvnhBo3%2B9FKZTYi6byzKdC8mEjr1SlzmkEdqITGCc8xKbkLYVgs7wcDEOqoNLcGUYFnr3DI21uKxZnrHuvdv%2BjkyHQSb3CPkgKS5qPLHQJAM%2BbCI1icllRKkYruH81nBqgRaBK6tFau%2FTxnu5%2FnicVwHDOGn0ulLtqe9Vahdi90RVbuNf%2BZYtk66waDR4IznaX0JSHPfWpW1%2BqGBo73w7prdq4vJc7&X-Amz-Signature=6ca8401f7e3fe6e1e7cc7dde24fcb6230a0333ed81836a03cce24c44b53dd804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXI3SY5E%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErETVBYPx%2FDacmlmm4fujNoS2GdFTzr5AQHjk0qEX3KAiAb20PfC8vNKGCEoN%2Bo66sS0gpamNzbcSoF4Gnmm48H3yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0uYWTQmcAFnWKteKtwDCRfoJOcmAd2HgRUNMSMSEvhfi3CM%2FkdwAsEf8YTc3kM1Q77insK5nggISnqQ1iUEziZWDvK064imFTeBWW9Wdtueb%2FM%2B%2F2ropJO%2FQlLpifc0vSXOATtLj7c70WGUERmSfPcPr68YA4TM80LvxCCmamI9lAbcuMVVQEG6xbsOMFQHB9KKP%2B5SjBb5KtRown5XbsDieTV2vw0xv%2FvqXeEPcxgG5t78Pt5RnLml308taFv%2B5gSCUfaMFTshI5kHy%2BE8iISWPt26GlhINMf%2BcjE95MNoPNcL5U60%2BXC14rs9ZEHZKQ6iipGUgf6lp9dVPyapBVgtKN4%2FA7Vle0dPgb1pCtT9VILW1Be1nPFSh%2BtqvSjnT41kMSVPU9fvVm0TXs8VwepnYJ690Gsf%2BSLeX%2FehciMRDbW9BDcn4UAWrZ5B7Ok%2BfQUlHja8kypzzUORYCoEmQaH6opt8DmoRR2U71ZBWUYKE5YVVq%2BqLXh7gCQDvhVXa%2FdOWe43nU%2B0zr8ghn67p0gXC1dzkwrUsWWlZ6axcvdMnZ9koTVom6t2uz0bOQB8sMojqZ2j9DAwWOqkVkyNqYAp166sZA6i%2Bg2oU69%2Bxv4sLslCt6Iwh1ud%2FxkIN3I7XTX%2BP%2BV8IgV%2BegEw7Mn%2BwgY6pgF0sNBWARSNMXAk5jB6sjCMpxyyK9oamKcHsr9NGPXYR9rEzri6eA1EJ76uZxUJJZHVSGPxfg63LTOBpBT897pRylRInwWYaG%2B0R9VXGDdimdlTc2%2FPovY5uNQWLYnTOLGP8S1I6Rc%2Fmd9AC%2FU4Ug13L8EwQVdhAiSxexBskhfOd%2BhWDsFbVZFX7Z5WxRpIYagjFVTi3lbs3O8KMaWLx3tZeDcUtvFB&X-Amz-Signature=367861d1e304eca76006ca34bf20a53e118b9018aed950e09ab7b1b762a69ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
