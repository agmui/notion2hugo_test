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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGSRKGP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyjBBba1Mr0EjWgjcuKDMvH%2BPN5BM5NaY2z3DjY8o7%2FgIhAP%2B%2FH3jMR9kVXaDyktqjpDARW1OIcF%2FooaZz1WtfgOobKv8DCDUQABoMNjM3NDIzMTgzODA1IgzXds9qr4IfnhqMJVcq3AMRdWevbTcYGn%2F0Rg05mbn1hcU0Xhre953w0lJVZHUrMAzBqGuD%2BWMIlQoShML8n3Y9ySmSsn8F5L9%2Bu6Aknn0LGKN6TMYwXQ0oTn07j1DC%2BoNIk6dKqJykJMkJ2uxH59cPDqhXIu7iglU0VM6GxchLcx5wjoSb%2Bo%2Bnrr6OhZRyrIJZAS5TFaC%2FjuWjBiIqi%2FOWf52i9dSNd29HTShynrrB6TJdI2Yhp5dNVsuEHAaiF1dtJn757y5XA6pnLpC0%2BPncZ%2FliFtsEJpS5L0KjIyZMrXiQ%2FJOYodgkS8jUzCqUoQd925mDyfhXYjpzs4HIiRTD63Ka3N5dbEo%2FJVoqESsZ3fFgJ%2FAcN1B5XbIzCb0Ax2AJw4BIxe%2BCGO91WsfjDjWsamUSLUw%2BE4qD2xWIVF%2Fat4jweoYbDVDvzI%2B4cmLFu%2F8uFT7gmzbhb%2B5XhuMC24q210HAhu4ga4W6dvaOCxEaT2ILAyVykDibIzgW%2F2EQNxpzD%2BDAF4%2FwFUvZs0h4uItU9Nb26ZPNXodMHd%2BgY9ZVe6LkJtg%2Bwhvu65rWwC4%2F4h%2FEZXtvykqXNuERwvpTapxqenwLtt5oI1FJrrzkvx2M4RTfO0s7mjd%2F7KC8mteSNNgTUCN8qXYtena74jDKtJG%2FBjqkAcOXJzA6pqNTaNMB5dEJTSmacbToWH1kBjK2utX00imKOItrep0bmZkN1%2BN%2FGyGVQ6yG0E6M37lifcHr7GBKoD%2BK08MAziplchQMB3viXxKjFcS1lkZM04ASHfJWruBDgje1kv%2B5qCgTmKpXKqfgqUX33NJYja4gIvDgqY4zvvfbrevhX%2BaI0xx%2FX4UqV8rM3zy6FMq7JkyVEfFEnuQ%2BsiG%2FPL1C&X-Amz-Signature=1265a095bde39bf90591a43ac7f6e9b4aef485e73ad31daa36597fbcf3d94c92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZYA5KR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EqLkaknn6ZYiOGhDd8OEYT3VDPAR5iAPwAXNXJQJbwIhAM2u9Fi3o7uRrmKO43HKNzqn%2BZmznc2xpIKjxBEeOXA7Kv8DCDUQABoMNjM3NDIzMTgzODA1Igwstf2w1AcImLseaSsq3AP989y10z%2F7gRGsk1%2B0nti5Zzm2YBVMEaKRepeUbgzyauzGC38zzA4JIInGlDx0qqmbJW8wmM28CO21d95uDwgqXfsCSgQWNSI9TSpFiHz6U31NsAUJ7YBxdUXIdCdMKy%2BuKD8jpF%2B0RKE3L2IerRaa5CIstxoOKeCLORAIESrx0hd1mVj8%2BfD66FENlNzI7FVwmy5oq6WdUY13QlsDbAS%2B3xyowzISDCVpTWxBFhPo9VKu5sbU%2Bp%2B5BkepDy3SOcev1SOkmjSRhzlTDsMrD9ub1f8k7Gzp24GdbR4X%2FdRj1ArMgqq9ZPLJRZDr1uangJTPQNHwnxRwxTyaQxrr8j8sYl%2B8qFGGFBeCWXHcGA3aWcpkmXjpejYbEb7lG58jrWOuhQhRiVyJ8wxMY5UiateYEwVeEcgFSJLRqmdIWNbsExr6hdddgD3eKEot48gYamFoTj4XtaR%2B2U4dzb%2BAmXOhFO5EpZY7JYXYlgFsSbkeeNZ2hqNazLPw0dJYXlk9aMQcG%2FvZWCMsRGWqxcrnUP3gpK12GNUeKQPqlw%2FtJTSh%2F8YAllIMB2H%2Fjoq8y5t90jj%2FlEQXiOetR7o8zVgcPShSbViAb%2FmXm%2FE%2BbDpc1h9IcgrGJJzd8qwNABNRiDCOtJG%2FBjqkARPkhH5%2F31asxeY7uPykZIhtV%2FuKJBYKoNt9LpiKI1BNCHCx8m%2BKeGiUoZCs6iG1rr0SoYIagTSVVcCYVkK%2FVEXtAKSScnDYBj8dUi7I1ebwJ84EUDv05tu8sblii%2FmIhFj1cJceIbUMI2Kuj54qO2h0uYNw6bu3CDiHPws4RCe24tKUrY7aroITLEOrGqBvP3iDaoFB7fmN2RlB9Mjg2Sn997mE&X-Amz-Signature=c5a2cbcda661411f088b76a909a002f61da31013ff73ecef3b11fa91604af4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
