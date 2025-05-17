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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ23TXGO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMAzi2%2BWPFMP8RetV3ICLLnTc6YNas6lo10FGrYFAWAIhAL%2F2XWZMyHUjzKnRVvpk4NavsNy7tUxbRYoVjZBx6%2B4AKv8DCF8QABoMNjM3NDIzMTgzODA1IgyklnCXP1LVVvyPWcMq3ANbtcnsvbk%2F%2FeB%2Bsdxpu3pnvaMdmYcsTqcNhQ2JKm11EYlZB4lyFIIKHi4gk5Uo0RtsG4jLGKEpxw3i0HCWD%2BHKncGAtsHaPI7rw2Xu6d4mEGsLwk%2BL6CeW0mSqYUEhPvq8zqYnKwoayJrorM%2Fzur2Eh8D1qUiA4S4VqZjH%2FWwWZBNrdDNIYwu76OG8yIq6V1fDHHINb4F73gKDmPWLQ%2FzdvZ8NS8XVSaIwLC78agd2fDHNai5j0nlDfr%2FxJaRklFzHKIBNbDlvxjHAHxurD%2BNkAoLZAjS%2FcDc9rZHLxbi%2FP44KdPIBQ2s9DSQwYhbKz3ifAn3G91spNjVAQaKAHF1QFg96HvTLL0dUyFdTL9jKBrp4AhdONBTOQJcd5Gk20rdKGoLMVBCt0qKGKy3ckERNl%2FcCSyBdlQOoa4juxAh03Rk2S%2F71WCEEno3CS0uaf85P%2BYoF3k6K9epnBy2ei1N3XF8alp5zT2wRhMtkseb7EeYtX43GDJWtOyispE%2F85XTHWmr50ERGcRR4xRZbfjNkprtDECTIzEylznse3umk3lKQXjBT7AlYdlaA4NQDaQnZR6OyNUQR%2BnstdJafahq7ifpVHUKUsUmHIGPabZJVhvtj0yqOoFpqmK8sKjCTn6LBBjqkAdcm31kx7KRgi1I%2FD0Dy%2Fx%2FNUI8JfSJuFDtJuVuorRdCYKuFy9OKe1OZBfi1LIVk7v4kElw6yDNlI9qfRB3g9kT7zUNYvwRZa7kleooNxbv0dgv0g9zu2%2F29ndQQ%2BYeSPclQnCuhWd7vjwKspC1z8qUZ4SS96tkIXCyEvHKP7rqLGSwTTlncyl%2F68U9u7TNc8sMSasbJne8j82L%2BzuiqnsIBMJYg&X-Amz-Signature=5b47f45b44d837c845db2fbdb6e144b71a8a013586cee69048e30831d8c9f0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2WW6SN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq9oStC2aQDQmFxEYMDEnTTiSfDWncUuhBp9O1H06HNQIgTVZYapdLYRPgWios9rjDC6VDI0QigrU3ImmGvj8CCusq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2BjSeocsNUIusUlKSrcA%2FfGsx%2FI7ceEzDpNMDEaeRJhhgWdpNiwB67Bb%2B78Djen5F5VdUBOIv14RrHiRQKHhMe64SmR0g5jcd57Eor96%2BxJYiP6Bd2QnSPpwJJgn7gpO6%2BRkzL0vd9yaW%2Bn0S%2BTRTApFaDDb1X6S734r4Csk0YqWx6wSBGaoG4gfxWloWU7C1AgwVTKBo1NDbuo72iKPuw%2FkuV1xO%2FyqoJoSRaMep92gWMCBxWc2AD3g%2FxMyuaapYEaAw46A61X%2FYF71oLHTPMDwzVtFuLOB5QjwvpNmK1m9w%2Fh4%2B6kwkQx4HL6GvF4k2cMLUVZDAzgojLaUo7hY9Th94eqtqOQwD8filXYNCw7nUI%2BHJtiBRoWhxEB4kOGahfAj5uBp5awBq%2BPxDVmXTz7jM1dNK6ij5sWoSvUBWlT0fDvy7h%2FakskbhGrERaZu67jXjJ3vWSUAgGXfoHp1th35AaSjL3YkuAK8TE%2F4jmwhF9UmbqWic6YVu1PdF5VyAlA1Y6Y4Duxol2NsdnzmsFxJX%2B8oeJoswSzZNMTgsy9MgoBTDPj09juJNJTM8l2Spat3wEwmtQpYji1dCfZq3ZmN3Ty4dBPULb%2B%2F87HvNHAAFi%2FSwxhW%2Fd2yZTzZYuYkTXcyBMN2ulzTqcYMPGeosEGOqUBqeCt2sKjOlS%2FzRvhn38N0cZrtKQ28vjeaO944pP3MqSZcgdWyRo5C7fcTCXH5b8l%2F7Kk22Bwk4TIf2xtjIF5aT5YFXTy%2By0SMQPcOhfhLaigBlVvKU%2FyvCadOEPF8xuqUgl%2FtP93lNbWsxB4bGj7rdsOmNRyVCv7fi8Cksh8kghsJmb270Zs43ipqObu3nKMdECH7G2J3mFrhcorYLsYDpgxq3N3&X-Amz-Signature=743e87a87db3d2a2d96ac259f39ed05d00026cd7799187075dae9f998c286f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
