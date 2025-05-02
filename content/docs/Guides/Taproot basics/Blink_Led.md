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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOUYXKO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC1rkH3e0X4fdm2lTz9HJ3w3OFJONObGFHldLA0%2FmKJCQIhALWK3Iv5o97CUgZcQ4h%2FgRAyhu5wiZVq5VgjFAWkdX37KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQsw10mxv7HLha3Loq3ANeL%2FAedv8hXf%2Fg26vsibVNgiKkMVjM784vC%2FePGM8lRykCBqCqNyFU2UM%2F6dKKZQrLKZZCivYpfweqMapIDkCmE7d%2FvU68mt%2FwZ0NgqiK%2BFwC7YFlVCtB5i8EkTpCZsHTjvu1bL9oGy1bAL2rv82gJaKqv0x5YExjtSWse0f91an63vrPiZRhzIjdq84gseQg3MW8auWYMGZ8RCzSTrEOxDbfbc7fBkVjuSLpx4%2BVul8uRjQlw10p765I95AUFMr8FM55sn4nQ%2BLVnh7M2IOUkqAdNdWY84mi5WlNml79M0m8HQBaJ%2F2drxg0C7UT%2FvsrP1UKUrDfgWoXFJ3trH9dazKBUXnGMh9y07utLAhAFxQmFqlVzgyBwksYdyfmy13B16Mt9BQCobYUtPmhzzR9zBnI%2BxPx1YkCEjflN4xSvxuwi3MfMYYD6IpqlIeXGZOC431BYMr9DBVYjQaIXBukhbvBb4QLdo1U2YdnmXxB6csqLVhjK63M3Z9sAH%2FLhFSnYvuz644Ga3JIjYWg%2B5W7b9hyoyejs5ARFjCFimOOqGzxtLonsU%2FMffa79Pf3nqAXBkm1mScxVwNMtYXNMe5NsVF6ijNWk7QkiAq9vWfEWYkLKRAJd%2Fu6fPN1ctTCJ5dPABjqkAf2fQBTTE1PXbmMcRKwIUXxQiucMzEtAlDqZUVYjdF5nka5quJu407pFxQk0wAdTxUf7epO5MVF9ucBpf0Ed5dtcIqNcRsZzniPGq3swty0qLWZboYV8vTyvnUygZjsNQri2NHHUJoe8Qy5AZvPfOSIqNLjzPSdnbbkOlZ4JsxqoJWY00lLYGGVroftZ9ES2%2F6VXaHrxRObkdRiLS7tAyaAaxoS1&X-Amz-Signature=f434051c29b3af8a5f0c4d29eba901d05fbebcbabb7bd2896fd2a7160a5f04df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJUPT2G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCe4iejtXB%2Fx7PbyP9FfktzwdeBtp4wq50Q5dsCApw3VgIgFC%2F2hoXbGaJGXRNjWTVK0WmX7swqmbW%2F4xjoDr2KuSkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLF5xMvOnotBX1PdyrcA2WU1Ki1ZxjnaoJZX02B7%2BdSdlTk0HsAEs9ErHwSvWlR6iWyGvKHrNuN0ez2c5oSim0wsbVlAxRsCDIGu%2Bohb8%2BHAlZTF5KX71Ic5rWAc0ImXi3bZXEylZZu276PQZTHt7uyvRhcFyWQot3189Z2LHvZmsYb4vHxOPwA8vJPU7IIoi7zGZuQyhfaJVFdIiZYqKL8ywAcSRH0asYlPjPGg3L3c3ZoiCUgrEhSJYvSvj%2FRU6TNcTBaGoAfaCMWvK4VQQS%2FQY%2BYp1YEZVw4lb%2BMlNE4X2wv51X1wskb%2BBRKFwh03Eu%2BMOVAosfyvBPj6TAq85UgiEj86iatcLCrysJ4It2ox3r6MZakBw0aLO2UUvno7ZZjdmDC%2BYl5avfhdE3fkf7%2B9tzSNGyFC5xfXvESpX7UmmnBiLeM3Yy5dKhoEGUqFdnr1qf%2BvqdnXpeSC1VYXPi6cHcIdiM0vf4sjUpzNSJqe3bG%2BzGq8%2BOZEOAUPHHtf79%2FPOengV1vRUk9CtMDr6BG7CbbfydAkBOXPLgM6BfdxWPvPhdO9%2FeejTIN7z67juQ3oJ2ztGV%2FgluEB4E%2FVJbSfkClhbEoOWYEgzS9PhwoDWanEDx8jfkOcIoWrEFqv4zygoBMVt%2BnHqCPMJ7k08AGOqUBS6qiQaSMDKQ1Q8%2F02rXFfZy%2F55q%2BQCDPNqwv64YwmwbJPM1b8LPjQ8K9r%2BMWRoYnEqJYDCHoys9zvnit4kr2ATDoX7dejnw25qKxIOf%2FHl4cejN0VWVBTJ7jFU5OLWg9tGSS801HmCi%2BsuUZyEkP7O8uU1AvAyy2e1SpcjNqS7mFm9ASpCCS365ekgm27RrDurwtKKUDWyC6tyngGZAPr3VPz8Wn&X-Amz-Signature=a917fc09697ae2d245aa8d5598b311ad22189a7eb9afbf629b93f3bcf37d9a90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
