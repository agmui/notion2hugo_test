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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734LQAEO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD4DEheSV84kCkuy7ZJyPXTgtylofFQKzZmaAUATQWYewIgeRhW%2FvN5cUSEKmzMoKBHIXaWPAqQLQBn1gtuXuL8PVQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpVizl%2BgikY3t7eFCrcA6IyG7KtN99TVFzxE6pe5pjQgjuud2CJnJHt%2B%2BoBSGStj8baa5MSpm4%2BdeQj9%2BFfeinDuPs4PFm76RLfEG7HMSGKrfmXRafyrDLvJTZq%2BtZnweVdG08modu1kc%2FDDOrsoVi%2BrWBCZbEOsiKCnUwQIqWWuEVH13Hr2x4%2BOAJoT7ZSUYzYA%2B3CZKz%2Fih7E6onxrOPVqjRSsxujBMn2%2BvVWAXob1ZFBKtuxX0h88IbvheBsqoUGB1CKmmDK2jTNiABrKB3%2B7Sm1NZHSAXDq4R6h9VeaPztYcblrWmkZ1IPEBKJTOAd45A7adCKeTlrORvrnLMEsMxqQc%2FfgNqjSot2JeScIIbF23urJY63gYa%2BHim4mqNgyIxa4h0961Z6br8cICB%2FGt2fYOGSvPikfHl8%2BgdJqtWw8%2Fq7QLcHyqbXo007AOsAyy0ODWHW5TA06TTp0D0%2BwZM0dcN13NXap7G65wQjRcXrQ8Alg3AQIrQi61z2%2BLbFsoRXFl2npkvWpfouC4qDe%2FpVCOy0FeSeCQsEmEe4lv6fsNtSVUmTCV8qhIdFxrfbiU2yZ9cJ54PBBXtq7ZkZoVp2fMkQU%2FWocpIqXlRcA%2BFa7myMg2TsKhfKrUrlsBWxSxXtP4jht6zGtMPGOi8EGOqUB9nLlpU2x5tpkT8o2DfEHEUQy0MNyK9bWbvXFU%2BajixFVpRNCs28MUS0OzDmtKdjk%2F0kP34S%2FDaGUQTBAhkDiy8bxTxmuKIjoASUsa9rSro3OkfKOz7f5SM8seqY29s4uO17eIO4shpj9fv%2BvD%2FEhA1gpw3vKS7IVoyVtyaMEwJpASKbfIPHhNKYK0mWqm5p8QWBTAXFLhb7VziKQbYR92ABe5%2Fjq&X-Amz-Signature=97add6fb82888739e68e5d0be73a366b9ba33795e7d3e682a7d0e87d495c6d22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGKU6L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBRhcn0VgcpeQ2hWYC%2FK%2BS%2BAPsU4Kwqu7bw3GmrIMTs7AiEAm4QBn9nuuuDgbyM3SzDArb9XTSlLdnV6xHCBRKRIDOgqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMU3nUN2R3wk09ZTyrcA5bNhMXOUVvYuPzDJLu8O0SHbEi0aySuu71Wswbdr3ar9KK1OLW%2BsStC7PR5uN3roWU81DTZzASdwVs%2BVRsA2kCs%2FFyaUWwz2ay5qNFiROmZ3yQK5b7aq0PGcAvVyYda9Pzl%2F7yvDYqAM4CxcvjVpEJEiKhTF2HZjlRe%2FN%2Bi5DF7aJPcjbyRYnlkOV%2FPg3Q7o0ZFS%2BqjSahb8AM%2B4hpXW63tMYrT5FjJdWrhem%2BrJHF9rfKLZnVihX%2FRhLqCs6i6%2FuOmzgRNrO%2B4aj0nA3gIFr%2BKiWJYCtr2D2igqB4y7VovxKO72ioyXFam5RAIB061DNGbBHbjhBxx%2FvdfTmqf%2FSuVDBojw73AlsDUDTfXEiQroJzfxnWtRIbFeF2hQk%2BLWNvOYUq3tvECbAjPCseHihF%2F5W9c6zVYObKXy0ZEDRKCFRSotI2S0lcHSIuf3A5TkET95GyQPaQDXKxPHIDDevHo8ORzg00FCNDymcues2HsC50STtyXcd1z8kYKtQlueM%2FOds2oOls2FMfm2ZwZlSrAjWZi4hcwEvF0nvQMifOiMGoaPfLXoopgJh8ZiGyMDhOCmcfkYj5W5EiD57GIddnlEYIs%2BTy%2BsWMR0UNfr6tRNjTZICSvmr2RceUdMMmPi8EGOqUBAuccWcksxAWW5ChxBMR2wmOdvj3FbEIINXZOJY2eyH6EcTF5h7Ml%2Fg9HpWB2Mu7l29sUZEVOoYGJ3Y5lsEBt1nOEILdjB5kNcegAgAboIkQAkwlHxKKHGr7QFJHOO1j3ATyrc6yg2cPU2z1MXQkR8ERfWXJj1mMjNhEUtFugX2qYNjhgFU%2BiWgs%2FC6yjK2G7XySJsfjeh%2FPRmbxA08wipkbIb7Qx&X-Amz-Signature=fbc544168c88e3b13a77cfb9470ff8c7455a21d7bca57ab7f18f8aac347743ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
