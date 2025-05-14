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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAOYHAZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID3hoNt95KNXaE%2B6ebWzoZe6dgllVvycauNXwaz5Ic5GAiBlYGwO2eltDBMVmb61aR808ow7eCCRk93afZ7pAYo3Hyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5ZKijG8joch1kBX2KtwD%2BIo%2FSyW05lDZxbGvSYihJ%2B4fn37RYlUxDE%2FH6Jb8pm1xYVXwSv5FmnZt7NMkUqeC%2B9S206FAGSzJfm7Yiipwc%2Bq60jhxYbaPZtEuYmyc38rGgDLzcZVvmw5ld9BPm4SWEMZq7HtmKzg7nepc11WDvAHOy%2FCLueR8cjBKr%2BDO7i6dt4%2F49VY1CHxzjTOVgk3TJDoBdk8mJ8yLDC7n%2BiTeKUfrcEwh%2FE3mpVkpx2UTEN6pDGZW7rQS48b%2FLD2s%2FMIni5ugw4JNs8Cszc7qLZAsQYGxLGj9BGRVlmk1nML7lG6TTiAodK%2BRwTQDkNXX0eL8G3dH9nX16%2BkT1epN9kmG1p9tt4rPy%2FTCCKmfmnrPzdKl9%2Bn6Vz6OW3KfNlfxb8mbcvi4Aw6iSrIAyFxUlSgIb7p4AOdsI0m3toNbR%2FEhX9kEo3vahBGb3AaEwU%2Fj7rRT1Z0z6Rl66xaDvXPfE2l%2FeLgy4qCutctqLhF4KeAB8D2RjUkNoVHVmx%2ByUmhVeKd1t2nD1z8YJ2R5s9bz0czZN%2FhwFdLWjRsFgmmGhqio2tSd8P8ZvQ7EQYBmwYSVn8PRbBQttFZKfSiHRu4C8dPV47zPxB5mdtaOHH34DmTtUQ9qI%2B%2F6TWVPhKfghaAw1s%2BTwQY6pgFLCi5X8p5%2Fp1%2FR0sKVSTXdjDOSGHy1e%2BC3P2NcH4QWQbPVnokXHV4WSdDtNnvsGGNnAxa1H5VwEjhwmYdMg6B2EVnm39i5MnvVcwmXRuwQ%2BuGK9PROpEBnOw5rXGxTDKUU%2BVfpxL%2B7HgHQNi1jE8lkN8FHZvrps1puYsAzSy8WbloDI%2FSyTe4Ph%2BEQ9IbSUyphAZ8kzaUVz2kJQJhtDgJA1US6w7Yn&X-Amz-Signature=3b50415afa2f6656a5e066115e910d30a59d965e14555f9a4d15fed0718eff0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHVSICA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICPuexdQDLYkg%2BhYIKgAe8NMY13l9IjHbQSO64L2ukL3AiBHO9rlrjU%2Bq79%2BdOySSDKm3AqwgcrMVCwYiWWEqW8ODyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqbxACx%2FPlnyokGigKtwDxYcFme8H5GTy7idfbvsSJ%2FhPWt0ZUXj%2FNz2X4q9nsyvEKpmVWxgqo9MOal3lSUaT%2BNLlljXYNpwx1WKYAr2o46oBkyRCLS0N4gXW%2F1uQdcLOdRsmKN6%2B%2FujmxNVjizc21SRAEeO8z6X4y%2BECwDLEPvRxT6%2Fw9RxnZuSPKJCW%2F9Yc9PvjyWkj6Q6g8i67kY3YBehgzwyfgI1oLBhSfHp5W0E6veft2QLHGDjz27EzIur4ZJg1kLHWR7mrw4Lq3%2BLnBP0iU%2F25kro65VfSMZkNyvMIyGmFggp548%2FWvzW1NX2V6hJyAXRaDccQUFxwmP7JnKpWvoaM1RBFNikg5XqzfNTfGLEm7jTgzURJ13Smvq%2B0kOge39y6YLHtHnIC3LVHtcBTh8Qzcl4CgmQoai3GMINXdysDmE8NSzshICIOOzmkrXgPTWxHnnl5o%2FUkJ9qtIt5Zjwn9qKiUzuEN8T1nZ4CXRhOJ6lQA8A1X041ToGkdQHBR18EBb26qVFoEo5WMzrrCtGqv6487TxBBaIsxv6m5ue564h6S%2FDcAyyLuNYFJYByOyvviWqjdnObuD0u8Ri6Qwe3g4HwENcgqQZlc5JbmEVTDcD3l8x1qHSbw6YInBDSOXMpC8f37GJAw4M%2BTwQY6pgH094ePEvudW%2B90esQodUP%2Blm66ZbGiBZcdMM2RtcXYBYjGyx%2F7ecr1Lu6uP%2FT6Qc1EJJF%2FIvlOAqyWkjbtNCZJeuGQEnaJ6kp0qrHKr3%2ByGklnygZVNCbnS5DOygbfg07FzWnlCwz9dLvFa3GNiWqA2q3wcleJ8CG82VC8OlvmgCRPJhWe%2Bn0MU8B6KjK02ZmBV1sKb11R%2B5eX7s2JAcALtodu0D6O&X-Amz-Signature=1108dc631cfd1844302742d751cda466f207b4de3409f158ac5869d23b824bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
