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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSACOK4F%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FGKPffOPldGKNzqphgh1fPC9uawqLiuRqq2%2F5OnpLgwIgYDPu%2B5T9wNf62ql2A4GBCjNzSFJXGOH9M%2FsZToa2l4YqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEEGhN2A8LYSqor2CrcAyQbrNX8K9OkgV0ibf4tPGUa2V3%2ByE50V6A5pZFkCGhj9yUfxVaHjXkPWqNGny4wU1mK2z0mnmRepcNESTuByUzM0fTEq33LMsVqctbfOuzzKg0WN2W08xU%2F%2BkBWu0VD5uThqRZLyegsh3SotWWH%2FvX5jdlglXblR2g%2Fd1VFgzeIjPFXEygUT8ZDCzDaximDvX3alDLjd1DxOXSJw0CDbMU%2Bqcf83YvMcsPqds9SRDJ0z%2Fg%2F90SZX3n8l2tZzA7E4zegNqpXbWoNdYhLPwK%2BvMu2eBgW29CTJx7N9qcg%2Fxz6UcfjQxrqWXvwYFahlTuNbCDjaD3nKHcDhqAHT0%2F1TwBiZkBc83eL48uN9uO2cl0Y56c2aCEyEXCriwY3xRpCnj%2Bf8ACXFLvx48xGh2YltaE%2BE37hEICRH%2B1WRvlxotwq1LB6yOtxfLbj%2B0qw8zdS8jUoOv3WgNQHTf4S9egW8PmJyuWtJSBRJpBqXbarTrGgQTCujl7b3TShYwqlLk9qClcCPrci4BqzmUjxstzzPwC2xQnEJnkEwWwRzx1jg0AWL1AAimEdKtySaflZauQ94jtnSAlGbWTgUdlVPvpCT6wGJdHtSBL6aiiM%2F57cES1zBquYXYkdAJjWSBxVMI%2Bg%2B7wGOqUB42exO7fA%2Ft8YprBUMOI%2FkEn1ErxYeBcgD5pFdImBGW6g9Ip7Z9ucT6KPMpoRmODuud2NBLdC1E46%2Bw7nhv1ZinHo5hctBZth3XWcIq%2BQEsBP9xvF6lvIGHeEzBj3umm9zinGDstqRLjXMmvHBSSLEZArO0cl5NZUNyAGK7%2BBF03p8M5fX5e0OjMpfg5nmGEYxjmkzl20GnflhSd4KKJBtD5TdKMC&X-Amz-Signature=deac85abde3abfe21edad181698d686d67c62cbca6aeaa457c869367bb4d63a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKMGCJO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIMuSYjkCgI50FEW9qK17OZG2fI%2FRIu0SwQQ8RlgB5WgIgBKKndoAMz4rFcNzyxWstvT%2B7bf5mhEKjp5b8H0iHQ4QqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcTZ2ke%2FeI%2BOAj1UircA7dG2KIVEnlgoCHGvdnSyi7xKwi6ELMsuMbeIFvxxOduqpeir32NWpm0vvqy1PdYb%2F3ig2PL%2FodIb5ibccvO6ycXTiFGXnyMuMR6QVBTsfz6JhgXPhUP9r5W%2FJNIr4k5IHETeSrxy4UTHKZueID3HeSKBv0B10qRzJqcPh5kn%2FwhdRcV2OhgVe9wh%2B9mrIvNKUwuMRoL0%2FSjZ9TzzR51XOuZUJmFRxpGSTtSBdycUSkLewu8Y4SvwM9oQG3wcBBPzpWZ1y09xZ0%2FFTCgg8I9rGqs2nzeaswWjR%2FwKerJoJRVNYt%2FOQxpXENGRxImTTQVWaknXh20eUCdB2Xh1%2F4I%2FaCYbU1yYSb%2Fod%2Fp9nlPkNIGh6KteBHFo%2BiWZVeOwEAL7jYorH6wntknb69I4RKT6s%2Fw3Gz1%2FFEl7YnZ2%2FfhfHbo1jjTKxLRfRx9CGRIdPskTtiCFCf86J46AFOlx9FVAlUUZY5Jf%2BlCvZ5fNn3cPsGH9tt8%2B6K0ri%2BzLKc2T%2F98aFnUn472WwAur5QJlfsELE0u0wyKSN8UyU4OmzP%2FdicFd401opx7NOLxRy%2BK2%2BTfGXtynjEv%2F6obypR3kVo873Pb1QFEVpq6Rxepyc%2BBfg92re1w7uDZVdjfrIzPMOif%2B7wGOqUB%2BxduYT6pmzw%2BsfgGyVRQiLTTo236UT8%2FKNCqYvsz%2FTvks7VXGCsRxWjjXq2W06kXiobsKlirxvuA5XofWUCzy%2BKTbkNmzs2nCl0TrrhLZ1vm3A%2FnuyeqlQAxqfDpHi77cl4vcSBPobj72JgYz6jZmi0T%2Bbtg7%2BWRrSlCYyLawJrHapjkrHWfLTCjG7x7b7WYkjnaM5jeiHXaewLvxzqZhAP8reBd&X-Amz-Signature=71bc2474cbc4b94525a8db26a2832960748635a6ea0e16bdad19c7ce7266c0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
