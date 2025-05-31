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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNV2SZ7U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJpX0rqi8nKMqY%2FnFq9gu3vzWlR8dXs03ptk3KzSPrAiEAo2AP7amFfIizuxM6Tv2P4MzqsnAQRUVufKuYTFkgqekqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaC0ZAuugn27oInMyrcA8nBSkoMaSYsCmIqImEkKW5IC9F5zF6lv9JIW7YzwPljWpOC4QGB8q8FkYAsJe3SZevifcx2duGf89AchIH4f06oyI%2FryszETCU7LeKdd0SGnGcVJXL1Pgq20%2FVxoRDaev1LADAwDsYp1EsVR4FmHXrNKch8Ov2RL4%2B2lGVBnb83zS%2BASfvBHat0PG6PPYTRHWvCydZ469Si71oLMtvbxGDFFhZSoDFAaPOkm82eRB1LGImAzOTcz0GQ%2BEtFgjgIYCED7aS5ItE80fBTkRg82zrKzTT0s1AFxNd4PqY%2BuIDSafaHum2%2BbAt8f%2Bt29761vc6v%2BvG4kCntT6cdaPA3mIz5SPPfNYX3txmt58tvUDXi0QYC6IwCn4Vsyr7u8gluCU9UG1Q%2Bc4D1t1ocisINMa%2BMxgFkByVD6QLy%2F2I3sSVmINbaQq1ZJiSxI8bFTRnJtvmDpVMtbzPVm9aC42u0FFfVNFLyg4%2B1cKXmi%2BrnniKFs4BWuAq3w6TZKVWqSFaX3OGWNVYf41shL0S%2BVYjB6rVpQvXM%2BsGvDWSWeFs7KdXnPxx6k6XMevL90HJl11lJdhTqjo5ZXCxnjbV4XBInpORXqykYgLRXYWYJ%2BMh8om%2BF0OhoUsTDqhpK0NbAMPu07cEGOqUBOB7BGX%2FOZX7svRHYYvr%2FGVCnCrn2%2BA4PTNOQavn8%2FXke5N3A8loH3TNk5ygYNv%2FanCJieNF05I%2BMneY7cYmz9etHu83Fxe8wsK7xNysfXHco9bomOqSRpqW20LV612dV8DrESmswZVNDhXxZ2CO9iMcTtswyVExzcqar4VvWixWuAGs1bkrZnl1HYl4C5YjMB2raQTxfTnglnEaoh3S1Lgldd5Ba&X-Amz-Signature=8b106d9056121bcc5aec37ad3a5ad2087a4def9530bcba442461e76fc3a439eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CP6OLWS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHtgsZdKmaTcA9XSL%2BScaHs3FpCtzTBKl4ggXDuPfhPAiBeZX1VoY%2FbHytlBADUOmtua23Tx7O5KNYI0DRYLCReqSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXhDfTg7gBGLRQylKtwDh2E2p72Chg5PW4BjZcgMgFFNj5hOIL9wf2fdb2gXVQ1rYTy8AZ1edhPusvHqmeoC47E%2FiSuvCXWqv07Q%2BRQ9zRNukevLK9Yfbsg8WtrqVAdjfp%2BTw7ml48yB1hHw3Goycx1Qhy3rZ7XeK8ndFf0oDFFMkYdnExjWeIgX5KhaWGjaRYLyCVzzvofOjIqh2sX8C5AVfAzunI1oH8b7cNubu%2BeIJFFUddUnBISnrFnaQdkWSfUTPActxlcSoeKa8ZrmxSByslfKFNKXXZTCpMMIU64k6nuilksQXPckvEkqxIOdDyMQbzSTyRfANwYbFvwN5LPZ1eB3kJnnJkWJAnQTIgrN3kUgQVYZz4956KDOCFzT4anGOmSgnrfqhrLWPhw9IVuZAxw4Waq9S9mMC8T%2Bm5CyTittYSpH%2FgXU2bPTaaVSk5pYv1PFyh0yQuqZlW6allLSi6eNShtuFNwn4kYvnQ7fYPR30Am0blWtMvocFy5Fe7v%2BIqZRpT1oU88cHmgV4Mp0JjWBw%2BZGAILwGHaKsRKtcGECQ4somdQ99Xnj50wrMr8Pmy%2FrU1ST3egcg4mZw%2Bx10jID4BW2V7tgSWUi2JHUrULHL%2B0FSmCCL4hkPrKHk94jluFqXQygbwkwvqDswQY6pgG%2BcQWYg%2FJTOAJaflBVHfO%2FfWAd4WgB5bzKGHITu4Lt1TZnkUE4fEy8gm8sjet95I58IVXhkeF75atsV30CjVL24JzZNF%2Bg3Mlx%2BT8AavmvXOKm1Gy0S17ALw%2BEv8kNyohxkQ7WXkm5YFEA%2F5Ak3lCiCI2khkoArzgzJf3Fc11ccFebd%2FDSv7gan3O6grSwl2hU2cPg8yUSc35dZRIR4%2B37rH1%2BMFEz&X-Amz-Signature=9f2a76bc27bb7dfcdc0e29b0aed40a91b64604fd79c35fce8a5a2da3021b07b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
