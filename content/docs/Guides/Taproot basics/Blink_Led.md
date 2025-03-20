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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGHE34B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCakklWHqOzmlglDedAUV0RtxfQPEhLcoBOuvikdsOHgAIhAM7W6q1rW1gDwg6k%2Bs6EUESkid2cIt1DR2dn5wpXXF6%2FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIFsroxva%2BXvYZdLIq3AMyFqO1xNt5x4PtcrdYAtxWh%2F7mL32Jh0bS8SpQImu2u3nmfq6pthaZSpWsr36R1U2bdy2UAfhKiQ7VNtm0ZEWPnhu%2FuEvohvrUv4WZnzSfXhHMmkGAgP%2BDoQGQKvlKUspKSVteAJOonQfyPGKWh%2BzcTcBVMITPX9t5VG%2BSsKMwXQlyDCthhmk9rFtwpxPzBpGfdMmnYC97NK%2BIMR81c3WSAyS37rHAmFsLxrnPmPjJeyXCLNLx30Qlyu2Bd5NiFyI6jZW%2Bdkz8t84GG0t93U3J2Mhc%2Buku%2FQgIj%2BoGBa6XILfqL4ATQEQf64omntgrko%2FvL73Owcv73fgUiGj6si4FG%2BvkOs1aWgTqdqAfQJoXkUvliLm%2FODvn6vlMxSanD6bHILyvD4Jx5A0qrhBJwvNRannfYjrU9HPUzh4GbOwr%2F%2FIY%2F6DlPH3ShsM4K1kMgvZPFo5NCN3PcmCiqP%2BlEEmUpfQBBM9y4Xbr9cL6jRLNTLzUizzZZoSgaoWBzuXJsE3I7Ru97TPtoiKovPjOclbjH5Q7s3So40GKkoQebitYefMh8ZTi3F4B7wtmjg1wSvEA%2BLBvMo1Rf70jeiy5Q7KM5KYLLMoRwrISBVEfPalKWCdmIA8HA%2B%2BLjBVSJDD6o%2FG%2BBjqkAT4VCjP1rzSHoY5fZETypWIhqGaG9XSTinC8s%2FTynPIDKAEEOrUUBF7HM0ESZ12GBbuzgmbZZWOWbYnIY2ZZI6VNRyDA%2Bnbz2k6QnA%2Fr2AJywVnkOzzpDRx21CPUgzzfdOrsf513BQLDkkv%2FOEncLc%2F3xd1Yl5xfhnNuinj1oWwvWIhGCCCKrRaLL5gEutGnuIDUjuElgUeVyR7SsjGa%2Beqiahbm&X-Amz-Signature=587710953667ec295b15eeecce5f90dd71e9ba55ea5c65282b306c703f724fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFBSZFW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFmoO4hWzLFsZdRBbgKMh1mQ73UGy6gs%2BEoGMTdv9MELAiBQq3KKcpd6M5tIfSeDEJGTJYPMlZl%2FQFNhxkgwSSAyFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1t%2BzGYkF2xFWUaoWKtwD8fRNP%2Finvskm%2FoAn%2BKI9sPZk5QTWnJ5cs36jHzNct2sNFbzT7Elf%2Bz24w6d6Drn3LRTW%2FUiTsJrpws6T2VRJblVHzI4182PD6hiszjZT6UAjMwyzXoR15UwR6tPRpBeve8eU8%2BC%2BIemvPG885B8FW9tPziadzPk88E%2BntQU1Pk7APzXO78C7fbCyRRvDZ38Het7VgSlSWeTZtVYXmgSnubTUtoGujelyKMzqWfMW2jRbuXOBo3pReOL5nTk%2FS2rHOyXJprw7sXQQx86QXBRqXodcyx6%2BTctt9z7uTPnJ%2B9BA2%2BVRV%2BbwKsurnDJzsHBTKQxns3Uc8reSQdBnLGsPc0FCKCRct3TX1dVjWxNn8Xq%2BhVuwbJB1ivfzErZwrj0U2tBtVTQqthIL5VqqvgQF668xAqGu%2BuNkJsRsVoh0HL84NpheTIr5nlQ5FT8SEp4Ue3xrxw1S88uJ2McE3AgjVh9vaD3jRyh12nJIsfh2IjF0NifMZ3JnmyWHuAeB7OkqtzAQwNAXqNQhg6poj6mRUhp8JqS4LND0Fswsr%2Bvtri3VH1MdNz8XMwedOmySCqAG6c9Ptg8RvU6k7PPQf3wVjD1nl1Yv4Tfn761nAdTWS3P2A%2FZaoA3s0RfHXocwxqXxvgY6pgH8nFxsnZkoD4OIJbfKD%2Bnrx9nOayFwjR%2F5ui%2BTrFMY6JCad%2Fit0%2F%2FnQkHKwF%2B7jLDs3YUZSdk4gIKfMVu61%2BieajxOq6eUqraiJIMmRR6R1Lm8t3dbeFtTeihVd7I6chYrPMld%2FRUWr%2BWgiG4VREYWkY62OvpbiIMXrnsylBynu9IyQbafGlZGKSI5V7hhoFUDDKrtosmklc%2BvcmnB6lTcSNnF6Npf&X-Amz-Signature=5c0dc2ec43e3deb3e37a75bd21025bb9c9d8202a4cb1da2820c73db1ab5f3995&X-Amz-SignedHeaders=host&x-id=GetObject)

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
