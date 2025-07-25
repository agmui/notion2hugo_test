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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HQDTBZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC%2FsTimqHQsA2hn8NeDGzwYumXGN9BmF6PHqvv6ci1TTwIhAPZGN72iMDYNNkVFAtYrsDO4YZgwHBodbyuBk%2Bww6%2BoPKv8DCEgQABoMNjM3NDIzMTgzODA1Igxc6JgJbE9KgoaWioIq3APtej6rVXuSx7SNQOZCRovckxlRSpeD128hEP2s8A932wuJW8b0fniNOW5jaGeoGGAg5qqHBOjHfrw8r1BmbDNUQ9b8TGrE14zGGOaBPk3KExlxHCCVRvnuoMVKw%2FplsTwNi%2FaZ2%2FfXjnHxj7PSoZKymovCJ3m88DsVfjN18GjoT%2Fc50BptMtEsEw3LR1hPwbm5Vmewrh4DvvV0zJ%2BgMYi6K1PhZ4MyNokAw24oa4M53PA586WcDZN62%2F3eGvnQ%2Bd6ylY5pbvWNSGsxCXMjxjtJTdOJMWfaYUjQrU7OxlqUJ5KYjDVILQZtFPXq7T47gBJW7gBJ1PtQqdko39NJ3EiBuDGjp2eVxSTVTAxArTfoTssAbJkrFt1W9LnbMKcynT1atZLm82B1k1%2BIN0f42P2Re2B9Vqj8fYxCX0qjQRHGapxLhNeVKrQetUoAHzHYBPx4mUNNar3lSMXAM1g3%2FuhCkFjC3mpCN4D49Cuu90mdxYJa4Uc6dz8GK%2BxNk0BfPR8Q5187HdAdT%2FNg%2BeP2UOe3sie5BzzydeUjJDNpyZFO3T%2BctdVYsqJx4AnLz3DD3Cl%2FTkoBGFA%2FE%2FN2D9qmgTsmm6S5qLL6CIr8hJl6%2FQI9a4RP9LFrGqJ%2FS68UqTCNvI7EBjqkAV%2Fca0CWQtd%2F8ccDiaNlXQWPM8oeot%2Bz0lIGM6%2FzZ95Zu9WM3ScOJDILd0AVCX%2BeGyH7WCq7iW%2BACegx22kO2l9BNdwuFB9s0Sa4TTtpl%2BUSG1BYtid7m7n8rF4hpYU%2BrT9pGTLCFlNqcwzMyM7TZWmb3v%2B5W6PBQdla9XWNY1dHH%2BIH20AhcO5LwHkuNLFbIfq62cnINhCAb1Ra0JRd%2BAYG%2BgFu&X-Amz-Signature=0590bf2852ed97134213e35609391d7d1fdabe91f0209770efc6a2927740defc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65IDUXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCU%2FEwps%2FVT4Mt10s%2B4PoZOCltA4I%2BFkKk%2BtKg8LvQfGAIgD9D2QaAmB7FRK%2BGqQ25tyMnZ%2BUSdhPfDwTZUGMtCB68q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIdxqH67HPV7%2FOdPECrcA8g9IQ3uJNWKoVGOQf%2Ftu8M7f%2BCU4l44p9bx%2FzMEKLJdgcAIZaQa%2F68T1xBiSS7u0%2BfdRHQD7TKDNh7%2FICmU3lEHip9ceIrRbDsPSrh8CzuX5TVdPJzhdD5gGgr6MLJIhlBh68vvPzd4bdCI9tknwFwMRluEl77HbLndcWlKwXMXOaBQCR3x502vS8BBBL0Qqu91drUsypm4x9WurJby0VCJkFEFi4Gs5R2K1lk74s3VI6U%2Fq2T1nDt%2ByyR%2BneP%2Bo0eEMo6NjKRQ5WYGW2YIhNghsMRZNlA1WlLwdV0Gob%2FwcEqSjjPDUMv92Pf4qK5mKCOZD06IYqKPAIMKBj5Y72EGTT8DblA6PjsqxQWPUruCo5tbh5ZYfCv0zKmZTHo10JJIrvpQKZOI6VKRbVHI44Ht4fNx1wBnugbGMZqZNkS713ycjZqhkOVUjP6kruio927mI9oJTAyceZegNGQDAHq7JJfJaX0d4H50kw3puOf60IORikI6RkCGdzz7MrWcHhQoNe3RM4xe1ygwbAAywrskVAKQW%2Fa%2FtZaMipTckos5UsfgtjAno3Oegc7KFFq85Sm3Ky6RyR5hioOcV5BGBX1JWmR1F5auh3eP%2Fv5OaRe4kBwATPvN%2B0bLG4CkMOa8jsQGOqUBpD2G4LGTpCgoMGEMYo6NRaputppaoXiIMkhdlHEU3CSAzfJrTDLAz4m%2BcQF9nKcXyJuesGRlOYxImoL5Zj%2FAHk76nTvJSvegK3aFxCm2rxqbG2Bx7O6ytqlQwUKN3eAquU04fnZ8yl6hl6oqyBSqBvbyxryE9PQwLVdXaysTV6LmnMcLaKxbh%2BpwMdVqT%2FqOpfLZD3d5SMHzvt8IqCMHv7H77B8e&X-Amz-Signature=721ffdf2d48a18423495974608bd90c27e2ca7b1ad976c6181f2553c74f1c89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
