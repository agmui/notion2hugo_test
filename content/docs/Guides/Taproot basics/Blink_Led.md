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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4WFQN6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkBaHKnO7L1XfNN1R0I32tkHNYaJ2Pf%2BVt8vtRE2hh2AiBsESv1mvh0GoYVDAf%2BhrzCWFP%2BlWBKh75d73Sa4Vf%2BDSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAzt7%2FrDrLMt72BFKtwDh6Bozi357m8BjdYEtDbKGrWuRih3p1VJrAxmxnZqpn%2Fak0I4LVzzmTTOStkmttAhZAWrvgkIZbULjMC%2FsDAyB0clFR09jRuJBuFXoB444u5Vkq9vZkLe0L81aAxQ9zqaBP3tvlBkCdFpYm%2B6mcej8XZ3%2FhzpPSmDBsMmmpx8kIXbYLWWagb0Fy2gRlKi4LAc3skZdTRk%2Fk%2B3w8i1SeLJvBl4Y96k%2BRuU3yYzUf64qMO8uJmLVud6eNfj3e%2BTXi%2FP30wWn15od9hoe5Hz566A2JcoA3%2FOSjCt5RM9FzRzIFLR20sSJbabNHkU6%2F7QfaSi677TpAloWLAxkskyBuhwCgSM9DtwtSNc6QQKumugopfTUfRbV1OI2%2FlrkpU9U1wy6GB%2BPREGNdXIz5b%2FwkX91g9I2NcaRl9olpH7b7WDf8iIHJTOn1iSeRr9EH1LsAch%2BXjD%2BoR%2Bq0DPKO05YV%2Fhp380%2FruLsxKtgLc1NFrQzjJnzUQy%2FzRXWUQaKU%2Fpq0Irja8i3sABsizdTSSQSox9ZA0%2B7KWRWwjYaMZhGqvSG2OQLQAwOnJK8DB5Ypsu7NVPHEanb%2FNpMNBplOApFWpxLNDGgdxVsIp0iwjEjpgZ0ugdbtPYyQ7FBkeJ9Egw2rbBwAY6pgHXA1bkQQ2nE2oYfNCmmPIcEXq%2F6wgJWXhRpSOmNmIIvkLK8QcrTp9OT4lq%2FxGLyQPjLfmSqG2hUAQqe6hdJKVrjOFRYbJSeZ%2FTfbVR8BfUeRV50CimnCMNYryNZ8GGeeiaF7AMEttHEVpphvBqOfvgLc1%2BFDzv4Pqr%2Bjv7v%2FkaXRls4sRgLc%2BlSvP9mH3GPuGD3itlOd4caz4FBsTOqBwg3M8o81cg&X-Amz-Signature=3fc438e233247ebd16e20a5d2b20805935435e4a545c62aff54b89ad0ef858ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJTPZW5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2aStK9X6MD5J1LKeJ2X2s1mQPjZtQR0mqLi%2F6M36CzAiAyi8q0Y975Lj7JvpfeEjioupAgS8uSOCQLw1DmFLmB3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kVTjk03swI4gJrtKtwDwbZ2MB6kzSPKMy2uNtb2BAXhZFK7dsQbXxFr9g4%2BZK4mrHoM8soyhvH5yJxl5M5Gcivz%2F1gdpLSzfDLeGaTNq9yp8GS44cN9iEz%2FeMU%2F%2B%2Fk3dYJbO6HrpvmbMsXQQKelsDVV1NwmSiwXF4BDWXDMpXqjPDO83MntrD8UpfY11oMYtj0gxWqckNsZo44Tef5XCUGsJhBjNeD0bcsb73GcjnzQ%2B%2FoF0kxOCtIvQv25YZF4g16JPeuaqnfE5Bk3szngutNkVAEeZPRplSCFuoGA1C90nJazjtKbZDd4F3pHJO9wDhtUvmGnpdOKI5zffxD64sQQbiStoqPv10Ue8pAMny0PMAxCFAKp2wKLd5u7NrJOVhpZVLLZXrOldGiBZ6UL6j4JqGWS6ksbuMzi0x%2FXzDROy7VNTgYU46x5eanlgPCYWy5DB9lMZdZuOkYGJwsVFEehDqEoEScgPgfHU5A4hGZLFrH6rdhQkVjSEKl2MQ8pr%2FFuz4L2ODPMfRSrAWA8595QbMvjZihYUFE1MixfBCvN9qZaHoeTIx4RFFEFIZHgsHn%2FbC1BCkcSu07X0niFdEE3cxNhAXQNAWB%2Bx0EUGz6sHZn3fS4AXbTRYaXCJ8YohFuGVsfL7tniVDMw1bbBwAY6pgFw0wmemguddjBkIIpH34SBE%2BE0bKdFQ2SXMcrwIVg6qdLdeAu60v8MHYMx6nIDrN2dCzvawQ%2FLqcGBqZuPCOu7wqshWm%2Bq%2FOzEeYccbIonlRnhmlLMkZsK1zQYJ5kCprY24%2B2PqwWOul65SGBn5CaNAyW5l8yDZghGzaxXIj7P8ZIxlj8APoa3iWqxxYaxaXH%2BA8%2B3j7ZkWTnlFtJ4kUVvaFbyGaeO&X-Amz-Signature=bbe62f62a464dfd334725df05e0edda44cad91da0728e1e9b84c3ff17f06025f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
