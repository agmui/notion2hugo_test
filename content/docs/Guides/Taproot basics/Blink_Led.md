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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JH7UMO4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCCFTjBOty3WZsvB9fsp0UahUsdZIuvnQbpuBk17LOMrgIgQqDX99iSYEnYm8zZa8X1IjVbioLCVm24ynV89UYRuWgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHvBL73Ani1lQXRAiCrcAwNBTC9zfuPey1CCSgnDyCMBsT5i1BeyMInlwAmkQzjyzqYCJwm6uD4C%2B60jt6uzRGIsqORfzVQr0LICuAf1PIg1nm7qO4ORAvGZce9JmRkYGynqVskq%2BBt6O2y0B%2Fge%2B5d%2BN83s79dxs5GFEpniRqNrOKjOxE43g4t4sWDq%2FCv4YEVeNhKNQIzaGU1euwaAunLDBwbcPgoij5bs3UoPhvcw4Mjbctt64Cl%2BVYhOj2bddGFyzbbtJGJmj1g7Trf7M7X7GFocrb7NY46BhYG0wvu1eRmko18dAf7EH%2FZw46N%2F88PC6J0guRAoTQVlJfowdIX85giy96Beoh2UJa92AnZOX%2F48AyQ2PNWU1b16VJo6gLQiNwBvU0eYwJIBMYC8ls4eV%2BG1rEbeuFSZhjNqLOzbGrhphAIKjOU17XQOue8n%2B%2BLDJJJNU4GUQ5iyMyatI0iGbaN0VoVNRCTaWJkelCIOS3nnXidwNerliLjgqiGlTpGxZVh7IL%2BC7HwHYRsHgOtNMi47ru%2BcR8lhyOoO4Tr4ufElKExM67AkH4Bdsw%2FJmVYKdWkPdNm4AWE1C2931rZYPcgW22hAjSn1RdK%2F0%2FLVD4SI5upIVpHFfbt5jCrQyO7%2F09ht%2FcnTzINQMOyX9MIGOqUB1RrkuzXlQyARubKY3%2Be9wiRRTTqhvAT7FZXjDSib4xFGyEMGNzVjzFhv2O%2BBjmRtQk2slR9bBtZ3f8rldXOIUuLHgM0Las3XIXl0dsSvkySZ3SDIQO1NPraRmn3L3aRjtZq7tanQm4Mr9qMFDpYaX%2BX6eYUEB6eJTJpa77CmdDx1I7gaaBHsUXN%2BvS3E7V8LnI5voqFYlWubpw5YYWnpeLTaOAwS&X-Amz-Signature=38d19b79fbd3348ec614ac73caaa3bf4f76ac4ab668082231fa2e073d37a6409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNTWOJA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDy9mtieUU2%2BaNZyjoqI5HEBarsNKPvb1%2FqYDcfPZtHNQIge3agOkp%2F%2F8Cl5LGI3AsnYj0NPDbBhyJslwpploBcBisq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJthMKaNDbKTIsC%2F1ircA3LmTTJ7tcT13mt9pebAm3vswy5qNk2SJF324hAmuMJdkJeHIoXa3uyfu2nEBLMz9ZajTWcf%2F3nsEFkBB3%2Bm1M4k2pZWSz9YKb0lcu3qp2eeSryXdSltW%2F1Jc8yauwnMiBzcq92lBKDYXOxEKA3i2GChjS3N0Ioq7LkXTVbthkaSMjFKzPUsAtXsOeDfotewi9fd%2Fj%2BDpFV%2F%2BGIzNSDpXFk7NDnKR26dAmJQoSRYTrvx5orfy4qcaMcEF4%2BNFt7XS13Xi8NkKG2qJVxrIw6US8FRI%2BT65GsLzkxWLXxhshyEBBDo0oDWnGLgxja7B8UPY5rWj6m0jHNLEtF%2BGG8Aq0Ypk5EVV%2BTNcbh19hD4YlAxBgcOvqVmN3V5zsVmsEZx%2BU2U0bMicDH3HX5u2%2BmsnigObkk4JlvQpHpkyzukgCURkJRMNP3Bm1OcRCoFUEUpTydMFVdWln8NgT%2FgPYZnEtUxGSxW20Eo3YnvQHnVxfsYW3fSD%2FVqtjSi8XyDB0asPO9kzsoQfK8d5cdtQdvVuLvlCopt6cbNUNWXw3hCqpwX9qKs%2BCkqpYVfGr1tz%2FFrSOvSLM9PLlg%2BZkvc40ixybH6cgp8vPmLndrsEX2Id3j3x0rWf2yAYvl2YAMPMOSW9MIGOqUBXNkPzpqAcxal2ZUWqnoVWc26W0ux2h38auRo23ZCFtS7Nt9Axyl03AjZOwjs%2B1oHhZbVb8i1VUbkG2GoaW2DewetmANHd8snW8zonuJFs1sc6EXPIHevI%2B3CvBGMBW4Eud0Raevrz8kxs08GdVDmMzMKGPfRYgHxDf5vOYeTFEj808gbQ3jYBrus11DYxWxNHCfb4HCS6z3qhEcFZk4Ca36MaDDV&X-Amz-Signature=606386a145e2a2f3db4fe56a33e95e24da61f9d35f1f1ee1250004e20a2f8d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
