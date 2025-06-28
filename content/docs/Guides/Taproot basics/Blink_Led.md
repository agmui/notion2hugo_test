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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UISQT5Q%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5w0ZeGlIpEXoZ8hHvuf8U1Xe2cT0n6glD%2B%2FP0qxaJhQIgHbAlGH13p6SmeGcvX9G1Z%2FDWKTP%2FyMI6fh4HGOTcYRgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzsADHQ1B5NRxzVqSrcA72ueES6oZYkAPlRfWbg1pWccjq7r2smLiB6uq%2BENaZBljzDJayrxCFdgNeSvXLFhpa5q1MDKuumvmAQG3Jo1x%2FW8Bktv%2FWla%2FZY%2BF4TFUacF42IG7K9YPAdbTlPx%2Fo0pLmz9SWZsCo%2BJ5dblP5tr2xMhzKkeRlOqbThFQHiL4cuhCeGq0R7BVSkXN7j1E5jNK65%2FuBJzyBC7iK0V11XX1zAMfYiQnsJkRhw6bSI5EuJXEAYU28U3w8xFWLV4yR4WwUGcdkTiv1LfDXQU0Okf3hF%2BKz%2BeRXmkcLTCorOIcZroGzG29iw%2BiUR6DKMBk%2BUjPPTJOOak0MuCpv%2FwGyuvcVU5HDmoTDKYOqcTxJJxvXzBBIE%2BnG%2F0JwHpjqSw6DdPL5sP5aDWEgdUrnl8Gv866A9j8OKMpTvNooy0MGCytcNtKdxBy450vMvd7%2FNaBcfJgvwBkYit%2Bu5Xim1GyN29FXg7LGMchAwpO9kVs6TJROrdRPbuDY2J1DzOfBXfwgcHaMiYBVCZ42me3qcX0lvk5Acyxr2eiMQok%2Bu%2Ff5V59apL0vQGKE7eSy0hhiIc7EU1ORwV296gFHhOOR9l2ZbdQAzU5%2BkS0MPQWd87yFDJ%2B2T7J%2BBGDKcPdsi%2FYZ0MJnS%2FcIGOqUBOiJHvmb5sOnm7vDQzpaUVaneLtOKy5N4dJHKfM%2FBcfTuldMEqVRsDT5otE1fH1Fcif1yEweNIOdXwP%2BFibUnU2fxcPnRbDyWcHaXlFQSqpThXDDsBEDNpw%2BebuirKwUyQh1MUzAOneqjb7xg%2BGfzvPGvfOfjf5pF4QoT3yw1x4DsJ%2F0azUpbBcq4DRafsShSEEWHjqznP2B5WIy4LOUCPgy8BLyB&X-Amz-Signature=8bef3cf7d191a231e0ef2272d200a6431f402ac3c2550d8cb62ba53dcdcea83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJUJ4E7E%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFzv8PYb1JNiZa4LyamlHxcnR1YUDwoI0eKimlkGHomgIhAPf50CJh37junbYhZQc0F7Evs%2B05aLNtKrXr3feN3xIKKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDvqfq5UhhcxBKC1Qq3AMKFE6plPbkQNdhwtmmUY5I9orTCwG2DTpe3bQAJYt6MngDce0bDa%2FtuTZgW7M7LwT000qBsgYGU7K1iOYI8G9ht%2FF05aHPhkF69vEaLNkciYHtNska4zn3142nFrIKi21hFjCCwbHPBvHqWaTOWPhDTfBKDEy6f1bBu52eWNd0fzevI80czJQMU4DMCVw7ElzMHMKYNcobaPc5ZnL7VjgyQ6XgFnF1Gp10KSGlbrWerC7Xr220fylz%2F3oVScCINsOvt9RwzMHSoI4x6z%2Bjt0DNrYA5xp5VOrJ%2BE1S2UesvLyECrJezZ5VXhMd0QaWEpf52pNyreHw9JrW225daOH8i%2F0xgDl7BS5BbMcWDtRP4iindsphcU%2FkKp3FJeiHPHpSXlMUxqauGmMgefh3wv9QOJnLiKL9Ua9MEqWkreNHYH7dN0vwt0qfIoUcjeXRePTF1ANNjyY4gs69rPkM7RVKxkimdeTf2CFNtgelBRkMv2oYiZNGAGP%2BTuAoViEMTqrBsigevpnTcgt5jBrVuPBFPBbHvDonj0gc%2BPwUS2rSSwENIzzwVsMXGUoVfFFy6PgXrpbeAjgzM7ol57JwOj8taW8Q%2BZvTYEY%2BpnyDOOO73eq18zRpvp5T8WNrpdjDq0f3CBjqkAVjNbzjMhoTgMt%2BWF1uLmj8aMxWjkBbScfMSf1NVRKeKZJKa1Bdoa%2BH374Shxsq2STXqwxe7Ad8xAYPci33vsaugQJXg5hFhB6iZG4ZZpYSntlOQck7fW4cHHHY%2F%2Bm0xLntGv71jo55oHEhOhzpSenDb4uyoFw%2F3IpHnYdCm2rsTnk7wvj9sYd1r2%2BtioSYCs%2F8ll7RYJxWrHDMYdu8XaaNBJrU1&X-Amz-Signature=929c4b0c1a0cd9f45f4b3e9461f05d53412b25e8640258281e1045a103df6ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
