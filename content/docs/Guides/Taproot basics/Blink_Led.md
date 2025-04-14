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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJQTODT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9SkCK52ty0ZgLcrUeTKo2P0%2FyX8rHVZKYOs7N4JcgHQIhAOcwL8U6pVMI%2BoyVMcQIlouQT8sdDrU1J2PSB0l0aDBgKv8DCBsQABoMNjM3NDIzMTgzODA1Igyl%2B%2Bg5u1OS%2BmtR%2BqMq3AOOFLENMNPtmW%2BC9DMHvwm46wXQxERDS6yWiUM2WphSZ0VzdVLYA7RJERmg4vOO3im6Mw95IlrunIMjaO%2Bxp%2BwRZtUJVQ2rnlyV60w%2F95Moq7ReAhzc84D7pYYcIl2PcFWWgZzpJbmRxArGZ%2FsTromVIFLHk9o9p2jIoFcVi0nNRh1Cq0xHnvettcLU2weZhcDpxDhWnIZKiF%2BfNcTNe1zwFhRHIMaRqJwa5zjBAenwTdx5HNL%2FRYru1U%2FKujZ7Bh8ZgkZm%2Fme3SprAqeo8tGlw%2FyAPPL1I78sC%2FinTJIV2WcLkVTfR2egi%2FyTxweOyyyN0fhPbzwwkOhHF2bIhASg%2FB72nrNtpStlIoJPMNpN1XEmHUa1bDj36ZvhksL3r31k7zAXQ2QwGW8J4i9Ng3Lf6nddNGyFfpmeBt%2FGMTKyZFlo0D3JeRj74x64c%2FzW5qs0FEIb%2Ba2Oks5Ut1%2F7ASKfvHMXgu1KE%2FU312GhyLLzHlRk96msyFhZ9YOTdtXPzh8Q4Cwd6Ai4k1vu9Hbs6wiEJnHTzqkHJORO%2BSjAfNSbUUzfSar2lixFXKUxUnhHUtirq0EPJDPIyNlDJUEkA3HgqSMCFIOyV9i05Pzwzhq9IBBFMyTvNYIWOyHc%2BvDCFlPW%2FBjqkARFeqhhhAK6O8nL71zUUQWYOz37PzSW5O8zGV0HcU1wibb31qemIX6%2BxVtxjfAti%2FRA6M19B92PP%2Fh9xJxWiRWf9BDqQyC6xnoE6WY6IeOQN0S%2BqHW2JrWdJ2yld54tQqTVleusyPFgDFedhiAySrTAdjh7kxVobftEaCPMsRGDvf8x6ZdSIeLRYWSV5Gf5%2FpkC1Lx2DCclzM2c4weh6d7Q2tYS2&X-Amz-Signature=0bb292018d6e5479366b21f00e3ddfb089ea05984fdc89e88a6911210c9dbe29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNIY3MI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBYg05zTwoDKkuRH7rV31AEBBcT%2FhKMSgKbAAmnPzKMwIhAIKHczsfQCkvsdNAu7zYrXYZOdlu%2FZf9i%2Fv8aERNELsHKv8DCBsQABoMNjM3NDIzMTgzODA1IgzohToChfNCY2kYJXcq3AOEWHvtLOVKkFlDYLqlK7sN0zyOKvtiGAW8v4MMv%2BBCdUto%2F8PwUV3eEPFEL6tyy22WKuows%2BGsgib8o94999QuBVwuyMh8PEGxIL7Ybl%2B8mpn%2BuA033iVJTotXMtBTzlGMstdkQ7LYNWqipUxqDHlxKeFL5Vqy7%2Bv2hYNiU7%2FpstLv8YWQcaQ%2BBB4HISIO%2FjWxAgQLR9jFEVoWaQ9bYp1Wj1H1ARBEL3Y007uue1On3YQQ9C%2BsVNQtaD51fRBlFi91xRIN20CEgVuz5tbv74kxkx%2Bf5ynHc0EWaNrlrQZUUs38D7SdxyvzZ2%2F2Njy0%2B0SXU6hui0bKBP3%2Bqne9DefrJK3Ie63zvENe4j%2Bw45tkz8Po4LXghdYs5EmbQT%2BOWks6JNjLQdCoq6LDL%2BNaEe5T8s12a%2Bkft2NCjl3LL8XKIRXxGmchjpJBTZdyL0Kf06Ue%2FSlvoamma9SdsPBd3kexEswAf0P1%2FnU1%2FMLkT7h%2BtetcV742U%2BVeSN%2FMf5OvOe5p%2F2BbBwr28rfRFpWKi5ZD%2FrEUIA1p74xB1rySoKVopi0qCDmPvhpeo9S5JjY2e772F0KbDmKFoqS9fEf8Cx%2By0ZcMJy49WetOc0N1iEt9E6pMKSW%2BshVCd1PGOjCmlPW%2FBjqkAWwk5bI1cwpkOLu2hlUwRfTb3Lg3FIdEfFY5ew%2FCyy%2BdM2fI1Bwe6YV1LkPCma17oSC8DZLBI02Gm3HWjQF4ZOBIrKEqq%2FkOxX3iYLeYXhczzpOMLpZJCmyKcdBBV81z5QOhRmHWztWeRrWfizndGCycXSE%2Bn48qJiQc4U6NF9bwFinMsKvmgS%2BbAF%2BSyEdr6CHfQxiJUmWO%2BtgGpogRIb9%2BcsDa&X-Amz-Signature=43e33996a0505cb207b64e60875a377f68fb6ba81e9961a54679e234b162cfef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
