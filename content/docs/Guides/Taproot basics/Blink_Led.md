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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5LZ5KH5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRYFMmeBfkzVT8L%2B6yM%2FPVamVIMks9Pa0EEjP%2BsMcIAIgUY6SWEseFke9lg%2BMgIWosrDT2cshxpx5l435RnljYvMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVNKgzSsPl2ppFTlyrcA7aw4CibDee%2BIIAXQpCth1pxlXly2eKsuuQ7iTqbEpN3%2Fhv0nuyYDQMGzXGjFGNhv3tMy4Xgf1zAfuZ%2B5BPchtCt4bxkcRV06J8Ki38%2BQAw4CmCe2jIOsmmbmhp21qLJrq4MQcrgIcE8QLYVHaE82awxC8o7qgOafICl2PGr%2FCNCRgONxNjZLiykU1ah84h81zhJclrvETScZdmMp7XvsEqKug9zQ%2FyXe4QgbL984s50CaMw9C5HdhIdS5qfSxjPVQd%2FQqebllKxyD2hxZ2WZhfomZj6heKMJZXc%2Bc6sKhOkETSA%2BtAMzjcqUGgHputX5gSRWAHkvt3kJbNbBWRy%2F3oDHQALueCH8ZnzHoEG7u%2BC1ERK39XOtmr53sDy3F%2B4S%2FE7UPTRiwZ5y1ctCJP%2BSNxbfYzDFCvPDTzMzq4D0rFiNwG647WpO5RlOLzSm4O5lqxOtBw%2FbNT6CvJ0uFBGTfm1O8hyIxbqnexRq9hSbu94nORNVCLT9Vab8vN7G4qP8hpYvc%2F3yMeIM%2BfWgP2xkHlaGaGoRCzSM%2Fl%2BOffH4%2Bgv8Zyf7g0fduYVRd%2FULKxXLzBPPWIhNhxr%2BI2X90mQMUSeIuc5XJJkMbSP7F6n45YMt6w%2BD7H7K7F%2Bz14uMOfpr70GOqUBk%2Fmh8oktHLt5xQYauXtexCzz9DZtWZ%2FTIiXAu4iVRGDZzNECvUDJBxoV8W62rwOy5YA4LLVmeuKZ%2Bi7W%2FGyC2aMmssni8JS3GPFNK73VQIiNOAsMNjXnzPaKGpt8SNpJRDb09DWBDJhThg2mUyW4iwN8yav3VEAtEOmmbWtRabgK7E7GzKuAqv%2BgQuw5xSTyvoQangG5FXkk7yc2H9BcPVttsvl6&X-Amz-Signature=512cb0f7e967457bd3981fecc072b9b918487099ef8316e479b6baf8d1e9b516&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVOY65DJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5dlS1WcGvYy1LIj3D7eKTTL6oDplDGlOrrdgFhy%2BcFAiEA%2BSlXdgniGlv8BP4i4SVk50a7gfqgkQ%2FulCYgnbqom%2B0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEI10AiJ3eXlq0IqsircA5L5tLf2iLcUePb8UaaM4FDPJSi%2B2vreMT9sjigLHnZbxUNmdubzBZ5m9t2LgLhphAQr%2BHAY3%2FgVG5jMTBc%2FbkiDBknsS0e5mWXsC8dvt9eV9iDNwx4CTOUkT6z6dIwCWfMSLiszwtag01ljrYWQ1TOgthiCoa5HuXNzfjhN1Wnl4szHvC6tz5%2B9QLhkvDOWksKKlygRKOT9rZsDWF0rPb4LDtAnsi%2FZrIRhhT%2FexRF1DSWZ%2B9t65d6gHu0Nc%2BUrYivw1%2BOMU%2BC83SUVPF3aeyMVeG6brQOL9D5Iurjkq2fxxuRARO1o5lZNmP0gra7eHUrbCX%2FH6%2BfV%2Fbd7VqBjDkQi63nddXl4tIxhvd4ArYCewdmpYJCD%2ByW49qdscqBpRZLJNOh1TJDrP9ldD3%2BZtlHbd4eda%2Bh1ccVi5cAU7ZiEseu2MCSdTgXA7kPZY8dmmfm3zmdhM%2FO4GgXBUrx46EQH0wOopPdpYxC6UR4fOCsbTi1v6Qu7%2Fst9S6D0%2BR%2BdjKhT21WGfUheU1fq%2Bml9DAPizeTeM21H6zbn6vkYzchLH13aWPNGDFCBkDcQVIEGU%2F5AfodvSNtrrWYVHxbcB%2FMkIqd1Geu%2BvoX73M8lBrhJEd5ni56PuwAhtEuoMK7tr70GOqUBgpVpSvGKC%2BQeameXiNstdei5jYv5JKKievHZy5%2F9D5CrhrbB3BysXr1cKYqfpYQrHE1bQ%2B%2BhGXO00cTtS%2B7cbNq1K3kx3tc6KbGditbOuSOdGRHW6cowSBc6Ns6DRBnsAsfQdoYhLOZuecm3pmJYWbIJHpGu%2BzKjwxhv5Ht6rmhLHWtS5cnydPhjaRs4ih%2FGK8VOtAOhNVLUY%2FdDGR74EF9%2Fqp9h&X-Amz-Signature=f62ccf5735fa7c7213c0fe41238528ab43fb46b31532b3c01c2af7b731a56da8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
