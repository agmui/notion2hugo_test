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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CW6W3S%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigo2pg3vrUr%2BpsGjxZRwCX%2BwcRdnSuVFca508hy1JegIhAICVbH2kG4b1l4uquQrATnbGkEmDK6F5%2FBnM1KryjBv5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgwFoEqZTNyXSuXx6gYq3AP8WoyXzWEz49NwuVT63Q3%2FL9SOD4zqLaaJwRPHPvhGarGFt1GcB86abyWmh%2FJSV33h2sE3hw1Z%2FZYplgZUEwEGRHK34lJuVbdJJ2XMTGF6QSEl%2BoWJEIiIsAJdAFgs25MspixQo3o8ZjTf3%2BGbzPl1%2BO3awy7I3r6pqq7b%2Bg5ZN0zYzFZL7Jh8a896vZrTyOPAXc8rmEaCExwt%2BCFxQOh8RlbT%2B35bTYsXLQ9ZP2meDxtMRwqwGcwyYRtbnjmDxcYY4kH768dz0vqbAwnDQfARNq4pgj0pWRglJ7CBfebV3rBLsKAQf179Q%2FhpK1T1A8wwK5l8CfPa7wzuG9O8kI0EnjgMkXJ1LIWzvLBMdDZrYmv3RNkvHIbdgHp3ctS3KRWVILIXMxJ3Ksd0ZwJ9m0p0wjIaaNR3oyx2L2hcUD9WNhfNn2fKZDwvZJaXybni1%2FmKSUUVfjqt9YepzEf2dTofas0cQeSNJV8pbeiYnn9x7AKcrCQj7pfyhqOWu7Yvr4HBU4p3TSGy3MAAAMDUwbCEhS%2BkFxcdGRlqvPb%2FXS9ghuG4dn%2FdWMP9Z44HA8y6da6EwcA0EY7g7N1k6%2F8X4VNk%2BzIF%2F72rm38nq0w97VDyYViio5N0syvDzJw77jDM3be9BjqkAfK14bb0I0o5jCviL4kwQ3qDIrkD5MgJaPzR0lAoeid2xr8Etv76FaWL7EP6U3ShOQV25Oy6wFbSaSBzmF%2BWWbFK6s2FM%2FmxaqYWFuC76uNuMoO90gnnHrD9tsf7rPhrCvSLvd8wLMtLrGSTSQoGEfCcDtEqsbokAkuDmYBfWecapGOSYZSi4aaGHDJkiKquLNsYlFTgxMcFIoVpoHz1y3VwgDHL&X-Amz-Signature=6550006a345c0a4c365d32d60ccfb0dc69395e48214a0f6fc91ed0b99f65635f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR55JXFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYZarb%2BdJz1Z%2BA1gvOZzaIGPQ9%2BC%2B9U9XELrEZfxyoXAIhAJNLSF0%2BcUZHeYXNNQvaHtT34rudCOhlPa6BAhpuZslMKv8DCBYQABoMNjM3NDIzMTgzODA1Igy80xJEtOc2C%2FG%2BbQIq3AMTpSE4B215%2BiM3vAjPivnY5gOq%2FfL%2Fmzp4X%2FpW9rJ1QlfKQrz%2B544rdyo0vAxpM8EzXsLD5FH8nieA4sV69QD64i95sNDjvVaF3lYGhE%2F9122UYuyVRmSMv6lo7%2BNCouU3O9pqy0wGWraBX6ymO7HePnxQRShkP8%2F7qGiLCyt611wnszsjGzkBGxVPQIkXNq2AwPdAI7GYqoIiQ6cxPmI4b5xE60NvTj2bPbGHp%2Bz6ER%2FbyqpZ7QsOWocT8bSeBaAuYGaIOpnkEx2ksEF0%2F0jSIEiVcTLRDv5LBWRQxpgdX3ZV%2Fak1q4lNsV9bMH5tooR4kt%2BEai7SEa4abal98bfMT8wFZbtX7FCgFRIjX%2F9MnCmGeFKOUGXHFIv%2BJ2tgKYNlmHoT4%2FIeqPtpkC3KOHb0CUY0ErfRp%2BuSFE2A5BKaM%2F%2FRRhAniuGgbheSYzJV3aZkFYMc83n85ZQx4I0tldRrhnCA47CFXZTulS0C41mlrWifPhAarEo0Z%2FRr9hHGrUGzeHBsQrxlY41pzY7jD7PEKlhBlRsjoXwd660J0g1Rnblus9VEvuarV06Ea2e6CQ336AwgfA8JdoagFRSP68FK12GkXjV9%2B6A9Hab%2F7NBa%2Bwd6CGunqr2NWf53hjDH3be9BjqkAZ2rtaWNvYEiLADDRMEwZfVyHkI8dl34CXGB3UFM%2BDsazq3yVXzNhrxEFCbIh1O%2Fbm8npfPkYz1BJ6RAPzF%2BrOgsSQLWj8ZIHKJsGLNZdqL9bcffFyfAU3SVC6c%2FqtWynFWCT6sIVcGUZY7R3NokdIq7aa5z0pjCsoEzF6NegYIixdenOxI9d%2FiibkMyKsgO7%2FEJT3rpKRzmPFdRXNvm3MhWRY0u&X-Amz-Signature=857761bd40cdb3b605d81cbe920dccee757adaa116973997356de82a1c343ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
