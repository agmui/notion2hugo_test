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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KDQC5II%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDv3lrleFFRJ1UYaMfkLjA8lP6fDitplTF5R%2FcxQ3lcnAiEAh4EkiR2zGyoP0pzDhaVuwbihg2DO8WiQuyg61EDAUvkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXth0BgGK9dbFLFrSrcA9UtaQbYY7JUqNNIXioJ1K8m8cxPkTlXj2n6mdzlQzd4lmL0EZjiYnDydgoCMcRVAOCGMD8zKoLPTx5xpia%2FN%2B%2BfDIqbhEobiK9kMqV6f2WcrWIy2ZJqwjZtGogFATumjv4VzWa4Ne5mmcGGooYYL9El1GxRngITjCDfvR3oHBNTmOlRAUHpjtMAMx7%2F7N8VhFt9RmDJ9dBN7VSGptnMTu3x%2BvWRbdXVfd1T2Qaul6Aq7gppUxcJpjNY%2BkPTYkpDs%2BoQRtYuhHTQr%2F2%2BM0RY%2Bhdeq0NVTyphE%2FoCHLooLHuwSkv2HsIxzKKWgBxJEiSlp%2BqKM%2BWBBuNHjLWuakGMADydTJjckQZBG3DM2%2F3%2FYtktlxuDvNH%2BEDIwn5mWRehlezJaExxZEMHzD5zu058lVKBtQjGBGj%2FQnijh34qei6DMc%2F7ztm3rlKqCHVtDftGRJJqAq1sgij39xIeR%2FJ0Z4xGp2zDKNjq%2FJN05fOzNsYzbyqgyYwXRgD0tBAu%2BwKRp6LfmTrRN1eM6VPIdrCO0oCTmcd%2FDtolXF7kFqdU9nwnYX98U7pKvcLEGv0Oh1pomafez%2Fuov5rSg1w6A%2F9VxW7YrMOKRFglRzTOQ0kpaFaNAMU74LjOEoPsljBmZML%2BI58MGOqUBFoSd8fOTZxHlpOsec9np4QZjAtkOWG5kitndqAs62Q6QsyDhT3z16InQDl6Z%2FLQtgqSsRQA5GJHMRbDjwLqYcivtKP3R8dlDaTaCv%2B3mvUZDKC7QLjl3b6mh%2Bl1MJoCyuBxBKYgiZNtuEsokjrJD6H8fwh3Q7Mj5%2FWYMv5LMjFJElgr8Yl1XCJmNSJumthxtfPrpB3Z%2BtO5KCwPCgI8kWy%2FTV9pW&X-Amz-Signature=f6ab66044c02eb7e0c8f5a96c58d909ee65dbb300099a82535d3fb8607d307ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AB2XLI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHkBrEIrXFHQM7UvcrYgtoe73kigt7JXAUlwdlVhWx%2BAiEA7wMNYwIAtqhjYxIcD42kEZ8RkIiN5%2FhQbyimilvuA3gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmxgmOczntZBPwPiCrcA%2BmX%2FFiUvnf10%2FONgnsgAT9JZiecr2ctloBVsARozgCxeNurg052CvDoMMfjdkRJ%2F4vKTHeXPPECgD3VHNBdd4Nn0FIT66yg6qeB71hT3c7VOrXiPVgM%2BNcykADj2lFKdquxiDVzOZ02t8ohiOYXUV7LBuRlR0dOaTeyMOVJrvP3r3NFoFIerbvoxcroVgk8yhBZyOwDpVwGcAmt3U2dFobW4bdFTsr3Cs6sAh1DZUJ6AK3nbFTKsCdX1F1f53DBs41TdwKJBQiowVEd1vbDjE6gK2cChhG157kDjt7hM1vrHjTq5EpxF4rO6GD4r%2BtHjw84Ow3sf1eLKB7yRDghl8cwKCNquwjVqZHa%2BFLGuKSovFDwDxhoLaUzibiezDAFkycdqojDdAgcxPK9UibtDzS53RyOozndOgOCecVZsuoTuClMbYRyO%2FZ1LeHuKphYgepBkBdLvfGneR6VIKLErDmpdaTQIYukvV3zTWv8d97WwBWUAojK%2FzShEPERZ9G4pA66aGrE3ILwQL46zlDPngGKIBuE7zKimxa0OCnng4AG%2FdEycjhWZJd5xuTh35g%2BYIEyrc%2BuH2Z9bijKvjBlLlI7Eq%2FZV8VeGwYFWF0lRk8twOSnzVU%2FQLY2OiBSMKKI58MGOqUBrraFLUvyX4tStOASptvd4wB6EtvqVviG21IFoOfErBy5QbmSzF9yvURI7gSW54wK%2BAcW3Kcv7Y7K6MVxXNMXaO8KfBD2K%2FMDgLkozx3fr69rUr0BdH8uwtj%2BH3j0LFcc%2Ff2Pqwv%2F6Vf%2BeKHroAzUnE6TFS9D72la9R2t7Lz6b20rtAEcWSGw4GuMXxNmDDS%2Bv9v%2FDUfCWFVzwaOPWEs4j9fQPsfV&X-Amz-Signature=b092f0e5700dfa48e093f8f48426ef124a3189122b8063146769f183509c1cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
