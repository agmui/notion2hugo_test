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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEDIUUO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCRHh1S2o%2F1%2B5Ud9VzRUbSN%2FUC1hFh5BNuB7gcBctFKmQIhAOADXDDN7cSs48J0IIaan8qeg4IedsF3jv1dn5%2FR0cGQKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym%2BIl9GwI6wUHuXYkq3APK8nYyQcWZOJjcBNaap6CuYMLgO2nPZ5nrC5usUISypt4uIs64ckjhBwdg86u9ht28K%2FLeNHet3CnoPhZTrUoxpQ8J9M7vDaoOE71xeD8dJIldJzxll6sFoZw3t3ZUfyDTBFuf%2Fk8uI9vkwVqcXHbOquvL9l0SbLiwAkMhVaZcppggXf4KaP4PJQWcae0rxPeRjFLbizdWvuIr%2FW1BfX4hfYbW3CKYqIvHmML7v1t3wJ3VACl9nb4J%2FxvLeDgbZAJT6LnjMGNKHKlfqXvrWwF0VA%2BumIDczwQB%2BCIklrpS7Z4yfeVJTKrP%2Bkm32FB7ltwdfv5v3QzNohKz%2FSIUQMR1vIEqPgwk3GjeoTQbd1%2F5GRTQ%2Bu5bf2D%2B9FSa2O%2BeovulNm9QpnOPS%2FpSaohGzILF2PJEgMgpAROYgDtd1noSWGmI5HSaPgh0fdSDSaDohPwQhSrPhSm4dZ2Ev0xxYCyaSoagbcrsvd8IyEFdynQoPibhmP2InYZbLTQqi6LuRQVkT03Lf%2FNkKfXhasyKonAqdih6CYawQJ1iuoohYRsPnwBMSqSLQf337LuXOQdlPT7VENcxhzvBJqDX0CdsnBh3zRp7Ox%2BOrO42wMxx5v66wh71LRK7yvuUXV6nJjDyhYXBBjqkARFGmmJ3ZgopYuGEqC1%2F6UyUNxap7sKFFYuzzBi6v7W%2BJGHIy6gzRuKk7I9TnYHEix6JAZPi8i%2BnsGK9M%2FvEArTTRX9YXPsosIjxnX9PJTgjsucxDx3Ny5e0mbdyIjLxh9dgfQv6urR0QpO3qMxqq8nRHYEdKyGaxNMyly0OJ4ZhkBWT1lWVkHzhsWDlF6x5iwl9coN7cjz0sdutbQtpyzMfFmL%2F&X-Amz-Signature=d823369dc36f79fc1202fe165dd6d585b0c3422d5dea9ce2f35650aa74f9a5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FSUQ2L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIH0BVO2kPXgFhtr5%2BBEl5rHIJDdZ3smUbYBEZmzphGdLAiAwIhQIlJFBWhbJ16S3CSEVZLC%2FfMnVgwZO3dh6LvKSEiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZMmXpTdoQJTrDRjKtwD8ZlWehaYHccK%2BVCo%2FTzQtDmFAMkmyCUrTEnYN%2FtQ1NQyf36GbUejGnzLxEzfF9c5EJV%2B37nrcFk9w4PeCw8eFIu4RX6GaNVNQZWvxKiDwdYtV%2BDbqOUkBJVvaVmxHX6HqLGW8Y71aEQ0Il%2F8nXNcNgJkMLanciNzKXdzSMEMRiYh%2BlNs6dJpIVuYyO%2BGQY69GEkztu5MjRUsTPyeVXGU7%2BF6h7tkhypxgxjJqPSoMKFkZrehE90SJvpEE4Nbg7FfIGf38KS8vosupbIanZGuvlhEQPoo6vz4%2Fm9jYY%2Fhly9qazlFQnRKRIj1s394%2BBod%2Feudvo6cDHH0vX%2B5%2FZOXzV%2F1JfHydnXmPPmn0Hv8%2F%2B2PzOKxfjMGed2HGPvq8ReT0zTsSEfWrbma34Frz6khD4%2BwDSvrUbiDWO%2F4i05zrZwjMI%2FYSJYLlLz7sJyCYEhIp7oOumgFwp4%2BFEkn%2FInwst7TJmkHU1t1qyS0pH1Bs5FbL3yD6aTNEf2%2BF%2BZAeyYUWxJWHVHYHZuqH7HucW7L4BetUCSdvp6I2M%2BXCmscTN0UzYQFSy%2BL%2FFpvXSNWSodJ3Fs86LmSKKc7dOIw5gWAHb1AX2FMrX2fCZSmgsyzRGw5ybzmSf5D2Whyt6owvIWFwQY6pgHpp1yEEvwrpcmx3nVHkz3CaBMdadKbWkHRwIwivCOX9eu8oG4zehGC62VhjTOTwd74%2B1L6iYph58rgYaTgHOAad3PEc9dy4emXZZUUsPaGX3%2BZjFUSSANC4u8mthTRMcYtykdGmxs%2BqS92pkCU%2FY2aKL8DTEkD0p4G%2FTEXzpwGtnsbpPLrg4%2FelMElbap7YNgxZMBxVBFB70m1DjTdHcij%2Bva0e99q&X-Amz-Signature=541dfd2323dd4c6698a960d03387e1698552bcdc778abb79262ab395571361b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
