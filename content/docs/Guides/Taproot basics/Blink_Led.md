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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSI7HNF5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVd6n2xZsJoWR1vPZ6nkA9ZRH4iYbAMvYOxWEY0bnUJAIhAPw95At45vWCTHAmBDIlzof5v%2FH%2FMOLdqCRtHSXKx8cNKv8DCEIQABoMNjM3NDIzMTgzODA1IgxaZ8LwvF%2B4AjEH1FEq3AOHNrFrbOK9nQ5kK%2FgFOT%2FQViQ17h5tWARWNH7hkbQuasWkl9D3sBFlq3K0i6wo2rILgdsuQWFu0K4tWi47SwfQlfxCeS%2FKRu9Oq3eXTzVSMO5%2F0GT0tyl9ASvjOBohAV1jJXX2LTs9d5ZNe2UM0MxMQBE8wpQf0lutqHAb1Q%2BbCww2GUNLQ447a3UvVMZyqup7h0OIyk5l9CwIwrgsCChHm0m%2BdJIuLP7RqKyOVqxU22e%2FMG8TESJZuO2oGSGMA4PWyIGgyiWMyoSPSTRWd%2BDYSmlE%2BBVDlwPL21OwMCxmp53e9mjAQzK6zzMgLqfBRDSSFsZn0wjt4rAQVaUdEVlPtVE%2BCfCrqORqOnQN9nw6%2BdaCe1SSB05WhAJJ8dXO2x%2BT%2FweBh4lKSYiknZeUIyy2PrxQl2ijNLcWZdDvvjAM0gkKwLfo0ULSRf45G28E6ItZI57pmfCdsovSH6pMEgeraYN6aRsWQfAVQ0%2B4KjkaBE6gUPBx4LEvbSDtKmo%2B69bQ%2Fn2kfILSsVyd9dByQvlO1T1QnBlKJt9y05cAwbhTnYnpKQj3owNTWdynjnZ5fh6XShkdDG1Nk7%2BqdwKfiipBo%2BbL%2BkejX28iE7s0mHmxID4k9gWrz0Uy8j5k9zCu7pvBBjqkAcniH3cgVwwFfIg5zx%2BTkC7Rq9OO7o%2FYpYf0aGpq5huZcPBdsDc%2Fce72hseyLccBoOdCDswNkRYdQ22YBNWRy%2B1Kv5vTwgkNKxWSUKu%2BGGqKB%2FFcp5QECAxPJ13L1Cbr2BLLAYTW47rHzrha4vBlNZ2akyA7LUU8Iru4%2BI771N8piqUgmMGUUaxUtyn2k7RXPtfsgqpn6xsBY0I%2BGejQX27O%2B4ai&X-Amz-Signature=cf53f814282dc5fcd24b7ee4ab3551f820df26364cf12e2d50430c48cedc7068&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DB4CAA4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXILEBFlQg9qlQXhWx2anzpUn2t3ZdYC6THazOmAn0vAiEA4NdbU2%2B3S1GBYu2Lqyj5rH%2FLp8nlZZbEhXURumZ%2FlXQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD5rnM7PUUw8Av2nHCrcAwzCHrRmLJFCrBDhEAMYBOoEcvdcWHivIFn4%2FYHY6G%2BHPdkE%2FOoeROjb2Y8yR9bjZfTXTgvs8HRBn27NFRt8GCQtE4nok2StYwlM3pS4XC6%2FkQSD2kYQM1KcShZCVR9XZZYuIQ%2FNB47DSt%2B3wfxIEpSzOBxR%2FXnmnNeVMjuZS9iWDRFDnxXONPSW4FDyS9gphAvpgpKgzwG%2BZqSzrQO%2FKiD1bnEKZ8TiWVBQNaXYZiKCEGKx5EvT1BF3j%2FrC9btGx7xdNmFppBQhPo%2FsftECO%2FoocJtmWidsx%2FIF%2FFbNnKuQwS0uYMwRf44ZyWDA5Qww1K0Wql%2Fpm3qOBD2aIJkjATrTadUf8KJ5SX9dN80CVRDl6lvkyTyhkks3UPhbI7MzCyjHxioe6GeA9rYyJE7njKy2U7MtBXOQjUiS4c0XrjWJs13yD9pmzUTtB3C5OjykmeFBpxUfVz2547j1m8hk%2FcuksWVkaFrui6AmJmUHGKA%2BYeUgtUln48YZbw4yVVNDvm13QDtcPomAQqWK2DzFwS%2F2WgPHE00pkdXJgNXAZmmnTiFKxPrDUK2QHHCLO0uKGaXp%2BLdOXBa7IO4mXc3n6MqAXPaCGPymrIKcLJN7G900hx4iXMOGlhnNiaxxMMvum8EGOqUBhlydso1U1y%2Fl9cwSSwwsh%2FhMc0nYWD5FJJNGGKPBVuE7BFUJt9pHd4K6MPOQIyvsYwDCbvdTz8sfPAcb0VSTPPYAlTxNsD2yuPj1W4UjvzDeaAE8nWcYeM1LDxLkiX44tG%2FZIgbZJlZ9AIGQ2PEyEZc71qZX2e9FCijoOA50BqT%2BPBUa4D5duEuCgPC0jtaN6ijbxzX6ok%2Fx6Q0FlNckPKuiFLzr&X-Amz-Signature=39aa95594f4eb5ac63459dbe32f7bd160bfea6fb663e188debd6d4a25127a736&X-Amz-SignedHeaders=host&x-id=GetObject)

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
