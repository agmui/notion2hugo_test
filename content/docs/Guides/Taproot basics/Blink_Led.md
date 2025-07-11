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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DMF5SCL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYshbMl6C4V4t%2FGZI3U40rlayOoJXhdQwEkkVgswDkvQIgC6bHlyoJG%2B7ojXwe5LszU%2B2QwzS%2BxN%2BS2W17PhWqtKUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCowbLMXP36TstqkySrcAzOlcnKHgXWwhLe%2B1HqMAgrXpuuesfZS9JVMkMzVtoKdFKEQhnYlrRoQxa4HmeiSyPsmHw5N5PWzj5prMlvSEC64dN%2F5H%2FQsMvVvGCfEpAAztbc2LMBXQ%2FzcDq564ic2VoObfX2l%2BkgCNsbUP7U3RhCYAmwskLgqjdcVklH0UBW4YPurRKq2BIvNG4poUhQaSm%2BVuSs94NVUIk9TmjsGqdeLwWpWB7qCgjTDKR%2F54i6uldSlIAh%2BGOIJHziod1AoHKCH2V2ZX8LWgzDSLd82W%2Ff6TwoiNWP10z6RZvDeNAuTOSZQLKB%2F32PaFD72EUNOeA5DPiaxHMJZMr0bv%2BY9i%2BCkHcEDMfEsyuzxH%2FKtFB2aYVqlRFN%2FhbHpd9%2FqD21%2Ft6EdSePCSlZ6htRa8TUSgiZM5z0vRftNM4DYP7P0%2BoPl0SjhE%2BNe7gFWbU24iCY21Hm8yeHq2wjnJsz1S8xWs3q5bKjcyWUpQmhs4smkGYI3JmSFT3ucnt%2FbSxlIJLlZUvi29uDYkRLIdYWVhYfnuVg6KIR4R8A%2B13rU%2BrFVgeOQfcvPKApLX%2BYlPc0NsjtHc%2BsvoWa%2BoFY4Wpf2BNRXRcROhuI6%2FQ3SnKuIUyTIvPDO1%2FExMeZ7WhkvTPCaMMD9wsMGOqUBcVNKZR6l3Srya8l7%2FUY0f1UOxfHNcJZIMa802A6rB7ysDrdsgKhoNjGd3Vz%2BFROjs6BNFPlYxZQHaa55lvEfu0FYsVww6%2FoEWcJRHB6GpX09LjSMhrU6DwqYoVlvpcwhh32qExpYFnzuNa%2FLmszZfsDuezi4yALIvSFHFScBclaI4CNjMQ%2FpZzW9pL3tGmq9qJ6D9KEosfzNg7Z%2Brhcbs%2Fczs6%2BL&X-Amz-Signature=0898ac11653cddd6700d83d70ee756a3b9e0b5eedba7a57b58560ee5651672d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCJEW5E%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo04YBr2Ka%2BoJkNgMVTDnddD970arA6llZSrOGRQ8PVgIhAMjXvI5pttkbBRN5dm05OYcpAQMqRRkkDC%2FkeyNAjPC%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjvTAm4m6XAbohnSAq3ANVED5VJWv0eLqthfF6O5m4TksAvX3Aq88bREQlkJ1jNULhc%2BpBelVrxtdokobXDOx4czzaxiKZbztXanRAKeAbmglDG87Mrwp4Fayfv62KngClBp%2BApF%2Bev%2Bw%2B4177Fmd63GXEXtbv8gzk4DYDfNSzti9Oc9jNza7uST9IGsuKcz1V%2FoI%2FBo3Mh4U94Zxy9H8zJwC%2F8uoF%2Fq9FBqc6K4T64FGDIV5pwm2IIxva%2BtbYX8Y2BjROoXqCf03%2Bo99TMENXqGJ038JGb09R3OpjUWwmCm4Og38Qb0eO5YDpEYbQWaqeR9BB%2BdTDaCo0INxuFnCFgW9xNeV2UWz9nI%2BZTjrRdpOhClDtEPjDhdt3iPudW9U7lCktjCLwNea33P9wtgl5D7BF%2BfyDBQl0Q6rDm86PvS5Kzzvo3eIoVsbQxHzjjT0PXd6PFrMAlQnf1BXWTGvcqEwxBxIDtksp5NuA2B9fZZnm2Kwd%2F4Pjr3cFW7%2FMZWVgfDLy9G4oeiCz90m2P%2B9FVIkg3n5lTaY87cQM6SJfic%2Fq31kVGaSDO3wDab5sK32WjeFJQZAk%2F%2BIys4io2UhMvuB%2Fm23oOcGnN0uetvzWa%2BGXX1m9sJxL8tNCv%2BihRPZEnTfFp3HlXUJGSTC6%2FcLDBjqkAQsj08L9EWTVuwNYHQJTeU5MGQe4v9u6uDMVFZ4qLPZw%2B%2BfteS2qMoar3JPkPK%2Ff%2BQNpFLrAF%2B2Sei14vUuETz99AjFUdvFSEwetemu43FbMsYDQC5c15dem2iV3rcGmLlqjrlm9IOgOwALsR2WZ7RjmLvWgw68PncnY2pExP4YqLok8edosZ8sBwHSAtZUg18pSyeqnMuBMSKSf2HDodgWZGXtq&X-Amz-Signature=71963e31b3beb99a274f73aabb6da59a7e063bdbc8f62ef797b8c12a65986908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
