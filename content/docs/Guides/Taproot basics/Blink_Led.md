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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWMZ6TY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKgF728bNPKwyrmJKj37WUeeEZO02VwUghz%2Fh5bZRMRAiEAjq%2FtrREauY1pyLAeUvyw9oJ2HbmRC%2FRWywPf%2FbK%2FicMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZPVCMg%2BUCQlTBEBCrcA32%2BFLswNxG%2FOes5XSKZocp76spnCmmoNqEnJjEH%2BcNC8oXuow%2Bcedre9LbDtdLR1wfYRGq5S2oWVTifNYky9drzrHAf3PCW6F1tfL4mk2GfLxoDZfKQiyJzgCZBMjvhcYZdJPWHfcm0J97MDMWarmB4CeJMc03ZHmoKXep8NAUxE2m%2FUPTAnq%2B%2B3JjdwRZb2JP4e9hoOe9fAbTxRdEv4VifYMBiSqXLfB5iJIXDi0HfE0qCKwJBJXJxps9c6lIgXYe089KqHe6J%2BZPQR8fB9VTUo3uwz%2F%2B4SlHBs5yLTZsP0w%2BTZOdoHia1Vxf%2Bkzyi2uNwy6zUfn49LnPMoMdh01GhwUd5P0e5GCqM%2FEWAjcRAdzAUVKJ6SjP310UHMXiNEhqRH80W1mJxnPGDqJ6k1SCS7lAKnxc75ZWQn5SCnMsKy8icRVaR7%2BlFWz93YuSgfAgvJF9GGx7KETehRpJ7nbw8oH6tZwV8UPvvcKC3sodmtBHVRn9qn4HcUoBsLy0IB2guL5rs4jmV6NL4Zg%2Fv%2BmIZQi90ZgWgxlQqpqtBY8De6Rb4x3n1uMymsVvrSmvt4Syi2IUg80wcv5JDqS74FiSto4iMoYHHHKszGVMAf%2BotGLL48gDBq55529lmMLWitMEGOqUB1Q5BSezhPv5DGQoCNPvPyHdcya6kFuP3M%2FT%2BuA0ZICXuMkHuf4Fi73mV6Ox8aLQIo4t1SPqwEdAsyqzwUDtOtpB%2F4E5Holk%2FnhOURIePgejKCmUM4WATWpNcus7iFfJ7rosc11aQmkUQMD6We7izlAm%2F2UI5wwY3O2wbSDd%2F0iU1kRL9a3ZUeENTSc4zb%2BaSaybBDBLeTGm3R5uoA4V0COONn8ZQ&X-Amz-Signature=f80097fa8780787e93aaed99c87f00fe50b324312ef4cd18078ee5d2a8bba01f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXTUOHN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCQhtX6ZihHbaDshj9Gd%2F2C8F9tOKaNfjLKtDw8j9SAAiBiDyne6NpLWFk%2Bz0LPeGIeOiC5xgWedaSgvagA56mjDCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbRieUn1N%2F82CCd7uKtwDBKEjOq4uFxJcVJY617LxF03in9LPzShq4rWll8gZmFJpgms8jL4IzgyfAd9w6pG8v4WsmyWb5ZaHkuKPZNcKRjBLh3Vz81D5s1hepgzkQxzy3gKyEqpcBuQff1ScgRse5GxFFgEyGlCLzSnNydvwjSOs0r5YVHITdGeVfRwvyTrThWlHqBeZyTlQJMkmCHeU%2FIWG%2FzPm7oagX3LVKjbYacL4RYUtW2yeKcKqmlDjD3oqJG554KEe%2BG09Y5EBzN9eZat0kCV47QjfBH7DGgTykbHvtRV3uqnO9ntUwQ0%2FchAgkM4tB6VKzbtIFfIu7tmdUTsaj%2FROS0%2B3kIOVU3BT5EZdpDu%2FMGF63U5y9SZZLStXv%2BiCHu%2FpGRUJg9DFCyoPP5xQzQktelytzVAOpIpm7JT7EdaHN8C05VY%2BALEiPndWiCEc7xR%2F6a2d1ZwGSDhC%2FP%2FFK5YvZjL7Ku1lvzevC0%2FQ%2FoKCNXMnuoVxyH80yiSY4%2BxCBH3%2F2PxD5bFKTp%2B%2FgyaE2z8szZheho9l0a1nhjsEpp6BJ2kM3mBjox7ui%2F%2BWtTQfsLlNorKZiPEakZ5CUY1zFpg2KTLEKWlrVP6DQSMJjkLnx4FdO13%2FhhpXbQQ7lJNaoIje5bbvMt8wlKO0wQY6pgG0XXT80diI2oy5h91oF%2FGFvooifwp7JXgjkQYX5qRtzHyvLs9K7bXnuzqVBeDrvil6V7JskQCt%2F2ZzKp6bPIF1yF6W6AUcZMM%2BPacRUoXNaWGIS4BNYNtXyY68B%2F3Dng3z1gTn4nuLkOyGRIXknOHhHM5SunRL9cDFVRF4kteHQoMtb%2Bgy2dK0ReiXB%2FXGQHf65X9xp%2BXT2YRjgukf73dkETv7zogU&X-Amz-Signature=f4951cb095d85b09c3bbb16769aa46912f3873015c5532c31e38f4d83508a0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
