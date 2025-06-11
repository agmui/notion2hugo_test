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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXM3XQSE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2FfhW7dH0QY5D1u%2BCK1yUvAlziqKhJf7tWQTq8N9txWwIgMHR76mEq9nOcIH39JUpg2X7lSjFVVM7z7Rjf2HRxc2YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImkbpGP%2FNns3%2BDZjircAy3EZKtqk%2FkDBUYJeD0QKr4UFLTi%2BooL9Hs5aUSdEIUCt%2BBna3Dc3hXKyHt5Mro%2BcoKcSnELPxFo3wVOeAPsSHLSdHnZY7xo%2BeL8fbGLY3DUFbIa%2FcnZWbEPWovz3gqgDt0AqB9JYE5KtV7E%2FjqHTTbcw514KdyMRJhFtkk%2F8Hf3ybldPHDOEVyoZI2PGEtqR6XxoXjw6PpF9T5t5Wj3OTthKgEU5XVFWkq0g1bgetkDNRaTx3ftsB66Viuf5uomvflH0yejksggHOCLi%2FrwoJvvdm2xq5vebHRjAuoc76Mlh4KSUtam52wS862aRO5M3a1Mp6%2B7vxr%2BNQHPIxhZOsXAYRWDLSbFvfd4EwE8ntoKMLAvvTMQZ0%2FKD%2BUuREsfKJJV12WXnbK2A1hdwdSO%2FT6QSADeVbdYOxYHTiqQd7I%2BQ82fQ9FAnKY7HkjlzusV0%2F%2FhYVxcyE6K4vBAPrQL7taWRmj1rY%2BH5Ld7iqCIYAm%2BX%2FEjAr75a%2B5xVryGpcFY36j09FBHk20U1Nm0colKrqzyrMe9UVdDDmlXY9nYdzGDTian%2BKKEH5FR7QNIJSWPVelDqRs97sSx1E3ABdhKbZrXE%2FDhnOgLDm4xO9uWyY4xFra4IWM8NWVaJPIBMNjnpsIGOqUBQlVd7gWUbwuK%2Fpoc0vX8unIVb2a7OI1MKYrCjPN13yghosRHaChPCkYiEUhuHhwkRJIOUY8im%2BUVacDf2Xd0LeHTto0yEIP%2Boa6vNQSEJcgq00vWNSuoL9kV%2BJIS12R2orehl5EOjXlnOKF2yikrAEFcAW2GvVAI3tSiPPU%2FbiW8OJRu9Eq2JSe74EIQH7Qeyw8VIFottMXoOQUfAD0znopOrZcl&X-Amz-Signature=824c30efe03df2c4b567e96fb4f8fc11892472f75371d83981aecd228593d47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7D4O4J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBEKOKop65nSH2uFxvtGFdr1FI93IrcTaU6273NmMWS6AiAuYwalFrAUkkV5ZaAFhsesRfYJREw5l%2FhSUrY0LgE9ZCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGQkgbPWT%2BA%2Fl1p8BKtwDmvivG1ICCGgFVovugimwY2Q7Dq7kW869ezAPeZTRKyyPNwO0r5P%2F5WSpXUbDAPdYDH8eDaivHlzQgpRvwdorX5YOcwyUe%2FJEFuuDGLGVEumsDCFMaOz0n4W1ds1GzxXM3B7D8VgiE4iuG2ulHgzgD%2F9Ix1a%2BQhlyEi1Mv8a%2BD%2Bi%2F%2BvujwUYp2b9XAOb2nkoCXbuPqG4XTwnzxgD29Qrib0rpRXB7EVwHLu%2FlJrMNbjspKhHm187GONLh9ybKRCcSyDbX5nd4lwnohMVjvz%2BY9kf9VYMruRQaZz0WZtwHkKIXtddK5CePEqKmRlyczmtRNQalgPXU8Jy2NEh5I87HKPg5zfEV8fQNsgpMcsJ6kiVrmO%2Bb3rOwDo93HWGsVdbeCSnEZFX%2FYr1qQCN07xxGs%2FSHoDMMRPX5LnueW8K3%2BBrABRe%2FWokUaGyDRcx0GSEqapbBz8ji0NjYrLpShUIKiY83lx1%2FO5T7WDF%2F7%2BkERBvMmux1PgmI82KR%2BEZwqprMW%2FxQS%2FdYTbP3AdtGXZ%2FuHqpII8g0rs6zGWET2o35t4WVJ8mYWt298CvzbpckwNrQ5pRdb%2FvGt8%2F9jHHVa8mQ9uDuIFwS5BuzqrBTiuPb5BI1Zgrchj6MxqGmfbEwquimwgY6pgEUuHSYDRb%2FX8FmQm7r3X4hY5Fz79%2BNbORC5PK20hMavJ%2FORP9DechiBbsrTte2uewggeCNjAUjno0DtPNFVaNlRTsGVAoVKfgzAGYfTH57jh2l4k5YABZuf67gB5N5liVb2UkrDErLQg%2BgGVCmDPzIaAlV15BPkzOmfDLMbpDpQwGIrTHQlaaklLeIBltmza%2BCFBRzuGs2xWbb2uCmWARS0l%2F3Jt%2FC&X-Amz-Signature=f61f4f6cb25a4d9c08d7cb653fdc764dc7287a4c05427ebfc20add588686dd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
