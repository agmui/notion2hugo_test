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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7IHW5G%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmNr8yPnqRuAP4UdfPaUu7YOHKEJus7GyoWrf%2BY9R7hAiAg84rMrULB5lmAYJys2WwkE3QSx%2FKWNGZw3ex52JEi0ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXpIW9LgKe36Az0RgKtwD%2BdcqdJPg1LCq1cyZf59S0E6HFgpqGmuTATRlNM3JoQ%2FSqdKqbLgKCunHv8tMLRwhf%2BphnnTyGZiKdCGp0oD45zrRJibawcA1ljve5i3xjTb%2FHWN%2FAhVlNYf7KvV6FPqwBzLy9UqgwUR7zHuDH4KMKg70ClaiEaoTGcYIGszlMrR%2BvQOtSrcxYwImvA%2FKDLMe9PU6zS6uSmM7dPioeLyRqyrrI%2B3iJwsussfFbHCsCfGFZX54LxXwsdhdGyEB4LjgM1%2FuikQwjiOw7B5HFTlsznQMkzo3r0DzRE3e3m9sJfo6YQYwFNDNmsJcQ%2F%2FdGtNstdALDere8D56CXM9j4B2FZoIF%2FIlF%2B1lGiTphiw0IrSobSQhktX8gUy%2FvtVbB2Em3m1FBnpU22E%2BPR5RQv8WRDvmk0Lqai5oO6xu8uEcHMiLxRYhta277uN14ZZkXpG4er1KYb9iPWL4ENHpN6fx0CLBSVlBrq5CZaZg4pzajVTLSxcsuXPQenrnj3el1YSj1bFDjc6XdG0dKE%2Bu7X8VPybb%2FZqq1jXH%2F25om0iA7IqTrZK85ozPegkNZHnojaTh76tu9OfAEhdJzKk9oqz7uJ7LaJ3WFsAv6dJiFklpkIGuORqSceLm8s67P%2FAwjbTO0AY6pgHoRCLCuuSg2dDRUW67kn8iJrOU24y%2FYSsr%2BddrOtJTwi1GIyntZKZjmKCHRrP3pML6XuAF9T7bHYY5LrMeq1WSF9LnTGQJSQSQgsb%2FqK7j2Zx0CoQMQLmnLPpTikAPnTp%2F60YfwKlNWLMAwKJfRKn8GmpK4V2DayMgFE0C0qgft5shNUBr4hOkG0%2F0iRE%2FetJToajFHoHSNUqlTbapCClg7VC3xg09&X-Amz-Signature=d55e222744007162116416f6975b92b6a82f356769e6f577f6ab93795d780e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWJV47X%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBskGNj3C5FhK2Yc3kqXNK9rk0hp9SYhbJTPY6BtYHhTAiEA%2BLbEOs%2BOX8w0Lz2b1GOboJ0BGsRTmMQ0NofY4pfYp58q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB4AxpwW74%2Bbm5yylircAx0RVi4gpF9J34q3eTOVbZFWZ84wMad3WiFIq%2FW%2FydXZDd7Pg0JSdC7TZbdMQSaf6GD1ltxrE05w8Y4Q3CZBWIX8DwmexSRSXMmDAQnZu4nrVlgWEpCrqx%2B64OVf5CYE62BZA9x3u5WBE7LQzRULuopKMqd2Fi0UTTLQZ4krR2VWIay0gpN4vwyRSgHtOWh0MNh2mz2AViaPhzsrLRvV1wi%2FuiP01CkG3WHMpptXNJfeG%2BxnDFTKV3z39t80Q61Yp0wWnNouOwGCcPAFVIqKy6P7mhJ%2BgzQ9o4qcjCCF9CZbR3Uh6jueVU3grv%2FviZKaa78MtUGRS39iI0%2BNnbHEoZajDs7bPNSAqXZVxmJIUNYPMSDN%2FUB92ZLv9xlbPUy3JXrv50AnrrJuV0c2sAX8PTpkhfDL7XestIxSbLcnTQBTAlDBHUtpE5XMj0HPX3fBK%2B3rwqCprQ9QEM4fsx5bhgF%2FjCgw%2Fm6bJOGKKCMH35FWi7Z139iupqDkyP%2FyqYCQTbcs7OyRD8i3L%2FcBPmMOi7Hq5%2BnZYRKcXCTXatWVB98c%2FGu%2BLeNc3TnfGLCHRHmJzEYXQVh9PNHsDtFMTywlKKiEE9UZavXuyUIPJ98VTdxrShb2Esu9AhAcyAizMJu0ztAGOqUBZ2v7uy%2BkQfhJjh2C6Dt%2BhXMKNoRozN2MVr8ZQStiZfjQE7rl7pTRV%2Fjvj04f3e2HPPs5u%2FlK9SjzjxQSRcGQ2phHqSZ%2BM2kD9fFk7Wq32q9QQsEYtVwMCcd4X3W%2BxjBadrgIAuoM4aR8dgWiow97dYddoA%2BQeImkkKfWJ5xOu%2BfFWyMthvS2lGGlmYJPZfhWOa%2FE6231uwbK8cp5hDJrvOs%2BhQvJ&X-Amz-Signature=9b173ec4921d0dae39027232ff7c6a37baf39d02a728cf0c1e2e98bb9e3647ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
