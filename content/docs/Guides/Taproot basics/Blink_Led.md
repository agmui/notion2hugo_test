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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZB23PYO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDBn%2B4wy9ce6Q5dJ63vNDUHCA57yJsRcRDZYizCC9p%2BlQIgf42xEIaQfbHSeHme9yncWVmj5GXLIYyaELGkZBUJII0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyYYKyEZThroaQF8SrcA0YC5vnFyiNBEoiHPGLcazr3XTudN0tlNtxEIXlqlpe8DXsP9otIxFpkvQSIdmeqYiB2Zf4xi%2FU3JTjjDtwOUZgFShMBfzfr%2FVrRsFrlyxHBlZGtxOG%2BCAg3bmAmyWRPwyGlCAA01Ndjf7yDJhKnfdZ466zRIWUrqVMAR0n6EH4BVicJD1P4zoXTUU4FD%2BK5lbUeXmLvzUZv68NGkIEJpSe%2Fx3lZSdb6yVWhjweYuvGFaAIRsLkLIq%2Bhc4Dz5oZbqdlI3Wn%2FzEu7WgkCd%2BLTGZATWVBPofqSWPVqKptiy6KmAZ%2FC9B02Aiu%2BlECAim6neHRIYN0Z3Bo7UUcOuJP6RGvXHuuB1yvRClBp2RgktQ4dwZeRlhsuMbfWhf4nGUjNgRLFtRsTUqVqFBsMOOHedrzszCKvEz2fKICR3QvY9E1MTNtJhCHlr6AkX3SOwitmidTBiN35oHwmqcv71a50cifzkaW6wJPMnwiipkpnOY8c23zEsG%2FauCzhBvQuD4wwkkxhmivjR4q8klwM5RagNrYpz0gFOFxlsvMiT0dGUX24Hlz8coGLW0Yco91GDDWyHhOC0tJ%2BF3s42DDRIzDaU8KF03H9YlGteQfmz1ws9cHSlo9LM1Q64hKiwmp%2FMIyT57wGOqUBaOC3hBIzdfK73dErV23BB9WrtiNVHiU4SDJ5J3uMOfVTv0cOuHlMWYAoLsAc3buVppPI6jNsNDq%2BHdEba6S05AhZJqdYjRDNl4tpR02S3LRp84LADJM5ACtHOq4UHE8c71Rbm9tJXOanVnHUc4KNA3K80UH5ypUsaGOs7K3Q0Xx1qAnVPe9p9%2BEUbogf%2FdlZLkcL0i5oekZ3OMeCaMdJ4Lkr0eKk&X-Amz-Signature=c347d9e20bc131d78f973b3d9f4bd55e45c8d36b617adf969597181fa09e2d09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624HCF2H%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFWwxNIpe8THwEl74FBtfSqGEvOboqIoglDkpb2w68GcAiEAyxljyji6tveGvryactbB1lCQTOnTOEuj1NaTy1huWKkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIMD5TOE1G9v6W%2BXSrcA5WvGtRD7dy2B%2BlPf%2BmMK9aqMeaALSyxa0ZlHOcFM7K8kRdiTUgtySLzOetNiXOJddsFESOWcJZq1vnN5CaHJizIKPatVZ%2F%2BAmRnU2h03NIHkVmNaVVlpnfSaF%2F4iRcQg%2Fp0lukm%2FTDTj3%2BRT1QMe85%2BM64eOV0dannvMS2CJ96sJOEmiuwlHF6qH%2BPZiHefwKR8oiNtzxBK9WjpgncP4PsFSuZXscywdKW5gtmfKu%2BsgX70cwK35JxOVpJeuyumXmq1oQTFyVlBCbSALgB%2BYZeeyGH8T684nR0Rb7guzSGmLIoLYgmEEhyR1bEupoyLjyqutW9mPgTkRn%2B3ikMKOQFG6Kk8lliElcsW3GIyzWoEHoDi3zqTcKpwBxqIp55CcfdEZcTu9DYaVkRv94QTH4Cn%2BufBjf3LlneE82YdT31VQR9eDFkJZhk8tUtd2bwlBZOz8QZ6%2FAghUdSJoakMnj5doq%2FUMrgC%2FHqveeIC3JQDVAy8NZpKnPqxoKaNpVc4wgmvMmGScVmeYz7EcLQkaXy2jve3hXkDA%2Fmvj%2BhhVEbaALsUWM%2BrXp99WL%2BBbkBnUqmnTa3gU03lvHmsS2hFLkooP532oVTAyghC5vw4%2F30F1WF7q5r7i8BqFjziMKmR57wGOqUBQmx7gWTgM1z97HrYqe9lyaGYVEL3%2FF8ildB6ao2Wlpaj%2BtiUnqVeeYxgT0oDtdOvDi%2Fo3MJ8wWFeE2utWOzbQBNe6%2B6KM6BnHTFBhEutgUw7KKucDE5r0YTSLdry5oLVt4tLybOqJAElyqLxBvSrKR4NDy%2BVbIPUk5A6xtEK1Qzu0ie4fy0sKVpXc9xoahj5He1IfhQLyNq0W3jh7oQmLBpZQr4g&X-Amz-Signature=c358fadc473239d4184bd2929d723eaeec5130f1cfaee3384f60788350a39a94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
