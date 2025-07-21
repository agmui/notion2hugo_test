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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43FCNGA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaH%2B0BALxtf%2BDdIh9dF2%2B5Y2UluUNrtOQI3c2Fc2W4AIhAJJLsfQkHL549DD24Fdn%2F5iae5p0GSp0iEw8rHwrE%2BVrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB9tdqphWUYgNT2KMq3APEd5dNB%2FPUOPeoekzLvFaEmQTMLuC4T4w4fLmBgX%2FtXqbIYIQTE19lK2iey4K0dc%2F40A%2FmL4Kg%2BmeVR6vsWEkk9%2BW8grf5%2BiNw8B244UDTF7Q1R%2FG78wpGw4Ris3IzPDKWwacueeDzi4vQMQkEPcFlTVpYMk5eF5R4sCa%2F4GbZT9j%2BOEphSGBxH5gKRQKcnomX%2FLs7WwKx87sSxsvWTsJRoLDwDZXZuISDCsi6j3sMFRGSi%2BSAN2c34l%2FjACs%2BuQwwHpgb%2FSfnBI5493wDgSa%2BRruIYbesqsm6xLGB914P%2FyhNB8IbppzBV9ofVB6JghObZajbGDSF05QjZiFB3x%2F6abF5T7RF8rYxJ4EM9RJK9xOyr2CAVQWcXINQz3ERO72tKUdmbOtZlapTD0ROi0QfP8Y%2FFM0jOmApNf26Pwgn3exCNFR1a2NCP4zPZit3WtA94vRGN1HjEVJh20giIe3XGSzV6xISrpaV39i4MPVQglqsn1XMO0QL%2FI16nfdTqo1urRRLVgHE6SAke2G7hiEq0dd0HNtSAAQTDO%2BnMqfkSwiciIL8%2F4Aw2KranqLaIQu8A2zUQYOqOSg2MjocTRVSuaKb1G73EqVOpc2tvJtBtMpU3JHtCltG59E19TDzxvbDBjqkATum6QogjRbYxdKIQ4CzPVN9PjdsTrUhIJMk0u7x6VOd8ncP6qBd1Q5pHA8%2Bccv%2FiLz2iU45LCBKZY3PMSJAPkvic5Gtxzz7c8uNrY3cWPrxLJu4qr38Jo4tXGiz3CT9cqUr05Xj5lfsFKahuYXzcaDhInKRrtRdMAMnJ6F05sSffpdT55LvCRLsooX61RR6pVLKsV%2F62THU0vIn3QXaXUuryXsf&X-Amz-Signature=bcbfd21901c74ea9b8374439edfd947790a641e6c74a10389063899d3179fd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JNZAK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8r5UJv0IHADJCaHJli48nNS6UTC%2FpJW6hblYo45jGAIhAKodpIn7C1ivOSEK0Yo%2FdIJk6lrSEKzL367IAC4UrohFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzgdDWwXWigGNUqiQq3AMNxeEmeFwEPlXvhE7JrMZ5bRDcAaR62zz4fjZPUyIxCKuTJkY54W1RVRQlJmaglr2LEkyMsDNHTtt4xZs%2BKnLOx8UwpTeP%2B2%2FMmyQjOSoUf%2B3NIgm29GNpzAzgwsrSdRe4ccmz70NyTgpirvxYD4QIXluMe1S5xjTVxnYICS%2Fd5Z59DPQu8900wZdufzL2RWtQ7l2b1Yj7UaRa%2BJSf7uYiD9V2BFIw9HyGxQgIMYSLm2cQvDXDI6uiXo96AjmyK0Ubo9AKrgulcLILGPufmzyQinVwIT0%2F6Zx%2Fgwp1UvNMJTUaZOXkbT45cAfMfNo%2B3b3ATkC2RH1cKyMMXd8aHQVcbSM0gQJ8MrahBQylwRHwb8G3VKMTQ5QnTlbgylet7fDUjEHVnZk3umtau90fQd5J5PTzX1KAUYDqGYGSuQysX2XMyOFG%2FhM26DZxp7Hxkhyhx7x%2FzVDA4eTbA%2F9Itc9gjQUwO4kh97k8hr0xhIN83eMRW%2BHJE56Ktyo6uHceqiLNm2%2FJVO8%2FtyvA0hucx%2FnXGzRzaz5ohiMglaLPJhlKEdJUFxhOSVnuozB3eNR5qyWNqUONqDb6xRDwzzg7yd5VeDjZ7tK1A8U41ucWN2219ABIQhf4MEz5hYD49jDTyPbDBjqkAUDrSaxQtdQyLeSnKnAoauSMoCxPXX6PKrFmdl478v0zRKPXvJ1LAqyyEa%2FRnFyF0fWCgRpb9JjRDrM6tYQvAIu5FzIzDTc4ClJdXAXSBYLkvpDs9be6FDMABGlMVv4CuwExTMmf5%2F9aI7%2Bq9RH9CfS3MjN9glPCweiMyG1BeuQOR4N1%2FCmvGKTBoelx0ylrniPeuOo50uHnO2UenBR37dE7A%2FMn&X-Amz-Signature=667324fdca0fc7e04d956fa3c46857e53aa41992a1c6b798e99be516d1361020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
