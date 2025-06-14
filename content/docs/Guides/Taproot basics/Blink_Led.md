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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657X3ARLL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFGSkbMDK%2BM2F3AQXvKrgtLDDYWB554lJRpiRn%2FQPyYEAiEA3JLBxpMPQ8%2B5o3Cc5FUSQo4MeRCIoLC7x0bY2Og0VZkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF%2FzvEMTwE6hXNhtSyrcAwXR2iC4udjTrQVTsB5pC%2FQL0Y%2FKMX7er7AKuW7tyTL25G45L0cHTCTkH%2BYH0iEYhjFKpmAUATaWkJSEzyGW5h%2BefsPfTqVvLjZDQw3VoTPQGBinoemWu0Rn%2BRslvRjYy9eJI8GmHA2EnENR3yYp0l3xX246Mw0TEvXmjnsByaHQ7VXDYalja3ZY0um6NrIZe4iceNjax6vUA%2FJuawft8BGvGPFVDyeV2Ylnm5NiY%2BmaItNx6YIXuksVGfRj96qtf%2BFNbsFztMP3OZRNaYEspako9O6k0tT%2FHNavzHQXjvSS0Ih4lvBcez974%2FpQIbQ0o%2FPCaL6fmLOPiSm3legyUmsKmfBs3AP3SdLOK926ZmrV1gTQgHT%2BfY9inPvFOo12dy16ChIBRT5GlQUv7WJeh3WxXrWGLbHJSXsKc4N79ERi5CyyndA4P6P3pD1vFYPLu91G2jSCnGgokKEjyIzZunucyt01Lb5G3bWNMYJi6AzkY6H3%2B7qiwra3Shmvas%2BGUAxLy8RKeHJNxG2fWuMLXeI0ZLoJd4n4SpZJ3Fu771X%2FdsiVteQfZixfL8yVRJRlh0xAjTPguF4TnbZF3MBkhsyGyOe1w1q%2BC7lNghr1LCUY1yA67zkYCLSxEwbpMJe7tsIGOqUBBHHJuQ0ykhbfZfoIllFI0x3%2Bl0osJyCiknThmO4qWz6%2B%2BRZKM6qc5kQnrmMenJQt7mhDtJKZIbDDu2Cyw2gnd%2FQkKlh3FP1k3vIGDyJiH%2FwCE7W5iDXoZeEl7E87I87itVqtsap5rQLovUhOzjhljr1f%2Fu5Sgui1AaOEQpvPmNQL0ByZrxCBUpRNEtEQQ2j5bytjvcDNRw1wXfLhgAcZSY87yXlT&X-Amz-Signature=317b1c5dfdb6211b4a500c8dd16f6d1ad1d3ee816836429b8ac5f494997b2e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3CHVAA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDbfHGXz%2BTh1rZIXXo%2FGemIKkXkXGuuHpZouNs%2FsRnKGgIgEVVqljuGwB0T4HDKud7zxLTZ%2BVu%2BSaW4nOUrRhiRC%2Bkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCz1mhL3Ia7ZHXm31SrcA4i5OWL7mraX21b%2BaMzfEGIq%2F9wsoWl53rz7H1Jcpf1lf4ir5GI%2BSt7Xyo109UQ7lw4wkns7N2LFFxr%2BNqJ%2FZ%2Bi9lgD8nxhBZXxJrSf%2Bx4z0MbcFyOJv4lQIxSzDZbAfrKHjYZLnOzCgMsR0QJ6ctFi4YQJbtdKqQm5MjYggUZgRJQJmzT%2Buxz4gxnw4amgDnDjG%2BaAcJBs3vOdHtrX%2FMc2B%2BLr42znC8jQLycbyvMnX%2Bz0A8yBd2EBtPnVOHt11bvH%2FHciY%2FZU1I%2BzmKbbDe4zlyHzVn6qALOvnFtFrSAp2YokuPGQCuB9r%2BqADoNQc9tO25u20D2bKWEBOnA1IKixVsxhqAmMMu2Yntk2OAmWsDx1NTx4OlVBOc1eDELRQceBgNx8hRenD4M2YZmV8XfGvyxIBEmZvw6mlyqoCGr5xnBTlyujqpX%2FJnf45FfaKc3yjz3MAmLWXBDzCchTerl5cmxVCjy1uue2o5JhOECHPSRlM0z4Ho31ISmm%2FqPqetn4ZKxQrQBmSdvn6dlpjYJZicjlclafH%2FQso0%2B2bRtQW0w58KwT7H3eak74CxOitdqXqeJq%2FokRE4fkR0aatn9BACs2zUzY%2BEgNZ3rT%2BOcm9dSoJP4VCMk9CI7pjMMa6tsIGOqUB16IoVkSeR8btJF3voaPnIJluTdOI8g%2BEsObGVqeXAYQ6ZNYflB15oQ0UhVPc5%2F60x5lXntU6VilkvawlMrD9GPfn0GYaOFEKOiLxcFGiDcxYcMaA%2FCT9EGHsM2rcSMQQKg4olPvYUpblnpRoJFx8Dp2VzzZoroa%2B2rWG3rLjhfnfZmQehp2Nq71WBLbIS5n6MThln%2BcNejAMCndOF4ws9SifgGxF&X-Amz-Signature=6a851abbf79c17b46ea22d1c90939da2e79c9667dbcf4264a2a5195a65a29ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
