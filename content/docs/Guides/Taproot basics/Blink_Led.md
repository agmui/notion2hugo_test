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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5YTEAO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDpANgZcNNJdKKeA5N%2BV6iMV2Lf9kF2ydpntzU6cV51QwIhAI3rUYm7eFiuge8SGAd%2FMb3L37yhE0OASEMcRCDbRVLDKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWPlo7z5n8QUTtPfwq3ANeDjv2m5uyWvPW7ZFFjFzQIbQ%2BkrAgKaIkR%2FRZnDcoeKd7bbbNMMVOGmOTPqrLEIf26Hq2ZNeTeNSJgscmWgt%2F3aNy33LnekWTBdZooRiirPfJo7GTDruyd6TkNfdjolEuvzYY9srNZ3%2FzLj5%2BdywgM82NyUyL1wntJv9KfDG7G2x3k6FJ0hb4cIYO3Tx3SZZ0gW%2Fay4E%2Bk6p7lCfsDgQJktscg53yK1fJej8JmnVePacv%2BZURn5mlzmhXHoqKHiRW%2BcjHYeYvICHPNxxqg5o3q6UgRV4yly%2BKar%2FryahDpZKo2pEz2ilgq%2FFqYX0hoKysoSYL7m61Hd73zGNRe7M3HmLchflt95gHC7gOUcbmhv1eLHdiVo5cjLuTCsmgjWqj6otdLAdVdTE1OUABKVLJI%2FeIz3D8VFpmIhybmZVHM2ngR%2BX8plTcnFE1EGqXgZAvJeK1YHZhUL2BLZRUBgePQiY3kD7YlYXoSpH%2F5RE6aQ3RQmbp3f2%2FQ3LZ9cICzblJMSr%2FjA1CKUAovM67hlPYLt5RN%2FQYP02jBfnKu0To5JS2orG8fdWTSc72%2BEwbYlwKE86S2QzX7FrXABWvWsjA%2BisouxDtHiekpi2RfWOZcRGhukhTH0HSi868RTCPmaLABjqkAeMN5lzdgWumqQ0wIxWxkpuJE7DUSMSfHAMnoZ2uw170uGESsdd6lWGcG3XHq5LIppKlRdPrX8GfR04Fsa48NZuGbdlx9OiIx4MGzniTeMBozhj1HKPBGODtJahXBtdwDxo0RgXkPri7%2BpLWx7yYxwJiyKf%2FThWTmI%2BoXGqhD%2Br2E7dgPWb%2B2VvCPqE%2BfPwLCyoAfmAUhQf%2FEFWSayegBG6nIPw1&X-Amz-Signature=045a875e4df65b98b731b9ca277167bb711d7e2a27f31a98e8ddc94b4ec4768b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FMPM3E%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQC2ajQicJuUy6nwr%2FLmZ5BISQhFQLSk8JfzV%2B7LR9RnlQIgFBeTtMdh5EMEh554Bm%2BzEbGLrXAggzO%2BKv07s6iJgPIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtfYwHDoxwF4iXa2ircAw%2BBM%2F7ydYu4u%2FxiJ3Y%2FsZGVw1%2F9tq%2FOdGZTNPZs5Ycd9ag7ca4PcA%2FItjDvpNpCBnPPSaqMUNbLKKhg8JPjGYZmDjiSCKhon7bJRoqHt0tEpiYzga67XnIsCW%2B4WTPYxsRPnSGL5ozqGkVa%2B46O3BWBPxA2462K8psfTnI2Br5h%2Fcrdt1HB%2Bl2ak1lcIxSV3M5dcj9R3zV5Pe%2FEscX%2BzZmdEPgzLvvBMBue8GovsFIcVBQR%2FNXvms8Em35AR7kr5oe1vSVWEecHDOhWXqE%2F6LAH8MJmr5W5H3dvExz6NsBF6pVKOdtsDxxSZj5JoP4s96vWhVs0QarxMVx1mnyqasMz1b14GCtAWPhHO6yjz6mS07OmZX8gc33yi3Z%2Fqz8WBUdSoijDrJsoCi2AyQ6jduYfmT561g6MKgatsL2CxiTGjK%2FHSdnPdsFI7GMlBO21rb6zHgKyc4FzAdHclneCScqqhaViv4YVfpKWbCL7b2H0EM7s9Z9vhSdlNCel9y%2FGihJJTTm%2FJb47ISPtU90cOYXdbG5J555aB6ohSQieADFEWZYUh1v9c%2FSv5hKHJALg%2BaeqNtMiNOjxkkDzdD4jSPDrdypcPgegcDUrIXXJYMDln1hBQpapN9ds0up8MJugosAGOqUBUQEecW36SgymGwVxKTHUrUSqACO99Q3cz%2BlU%2FdQd%2F1FAtToTPIlwWbjaOL0farpxPyI%2BEoIITufT65fwaeyRIdO%2B%2BRhesmvUaOu7FI3nA6f3gIKasZQ%2BOJT6ro%2F79abzalEyYYaoVIAsyxfYztQJUBUMXLQNT4h9U3noJOYJ4Bqx83Y6P6I2BLzIHNrsFigUHQ%2BI%2FDdUjedHNZfrNFkHLTmNg6ps&X-Amz-Signature=2745ead4ff0323336b49e6a2fd72081b0ecabc0bfca879228bc1c68db80694ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
