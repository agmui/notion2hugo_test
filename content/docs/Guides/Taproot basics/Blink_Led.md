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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFVBBBI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDBaGlA7kL8o4uNMN2u1MEONHgQRFr%2BQomXrzrKDEahAIhALON26SsicuRvbpq8RFG8dZXI4XFr1PwqYt5UsabAh%2BJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHPRqMRaaQNiQWOoIq3AOgaBh5%2FNQxkRCScVTeIbBoUhZ0zyr7afiyCIVTa%2B33VPhNQxtkVlwLM0ayV9M58O3%2FDzOKVTjxrmlAslmZs6iyZYbGy6Uv5QZ%2BBWEfB8rWh54Ogecl6bbAuYp4YmQJ7Ndl8xQVN9sd%2BIFX3CFgSySJi9Tp%2B0TXlG4gLVNOskotB5gn%2FLHosDbpMr75%2FDT0Yyrn%2FpqKyKkQjuiPXW6zat6Esiazv%2FXHFKZLigYVjuPGZyn66SngLOoh8VVJiKOD2rL1H9HEDC%2Bq%2F4giDgB5y2Qm%2FwD6x4loywBPXqqkiF5RycFG5zh1fTi7ivDW1Ck5pbtKsxdCGMgY03uskqiEJOWaLiGpM2y7kjSE782sCeTTlw7TP6SMuSfF9wwSYNF%2BewZQSBZKcOBYen56MAB8aneC5p8hahAZlGkwVAhIEbijZ0SGVQfsvNPxmx89N3aOA%2BD38GA%2BljmNPC0vj%2FnbL6lifozbrWb9SGxTz5h4TBtfkhy0Vmi3K8PpPsGmp0S0xQrhFcc9Ic%2FgLjkzwv7f0VSseTTp1HKplKmMd0p3i%2B8Fpb0WwbPhoCVcpSlrTU4mGb%2B6dbJ0BMzn7pBGCIcOaU9Cdqao9Mv17fOIKGyJaLpqwx9hkc9j24l3BNdjxjDVktnEBjqkAcdVRIzar%2Bg%2BJc31j7s0gy95pQn%2BtVGqwquEXGcR0Dv2UAUnEeXfsV9MqDwiAFmJsdEIn9acrMS6ySrYDxq5Ufsjp837bk4ke1Ky6rOPm4m2UCESdlVfOvsYRPqHkNAlE2RM3DQu4uBV1Atqp3EP10%2B4LQQIY4sKPUtIWFe1M3S%2BsYgC2rOzUofoD4F4Cll5gk%2FwiYS0lkRyiEHcZKdSsBk4pM9R&X-Amz-Signature=f65bd80700a566b23181ef9ba5f6d6bfbddff94fad84bbb4a9f5d04b031ade43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPE7YZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCLXEejs7o7uKJFj3oqS%2FGwEZjdJSzu2uF%2FGk5qBYX5NgIhALIgq7DZ8P5XrjWaQOe0D9Ar1R563gALMOazkgtJslgRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye%2BftXUU%2BmMugKNuoq3AO%2FrH4dNqMoBzAKvYQpReclixXBUZZZ2SRgLhbDRlTHEJSnbeDFl4YGoMQIjeDiuwMoKEjv7g5jnttePgRNU5sQDHo%2BmCTL9%2F2dxoNhSbLHQO5mfcPhE3wfp%2Bt%2FC8DAP3uSb6385bDpu8SRDxJ4pG4M9%2Bkn2E2DatcC8KOK013SVDRBs3JytfYrnVm1Im8QmrGmx0EPmN1a6J6aBNiQ2nIWmeUX24v%2BWBDf8dQTdn2VO84OQqGj537IHYCBhqBfegO5jpMawICy5vAunTjr%2FY5Of7GL5QYtBjKaf%2Bx25dwl1DLg4QEogVrJMLgNqgdK9J8ZmsOyoMmpiR3RXLTFB7DZ6F7sdayeZ5g7qa1%2Fkg%2B7XJR%2FiBiqZgr0fEkjSRLZQkUxkW%2BQnRtqrWWrhXx4HrLvvL29%2B4NPMvT9riAJSZlUJ%2FguZQB6WaADKjIo2pTRiIwy6O%2Fys07WJiMs3lFAc5T5SOCDsPq%2Bc%2FbTLJe3WYCnhi0OjUt9e15rZsAffg09SE3oWyYNsBk9rXANYCb53VyFjwbngaJL8bj3okf%2B0%2Fd3b%2Bg8Ku%2BsoMvwbimKJPVZ58c4VLlJRK%2FPEcNQLr93F5RHW0OhRMaMD17hkFzlq%2Fa%2BjH1ArKFB3l33St5cHDCbktnEBjqkAecc0jD3jQTHd1pMBvn5BOt%2FpU%2FUdFJD9veymZSZRJlvOa4e5wbo91sc2BCaBfr%2BvTL%2Fpk8uTJH086v4EkNAuVAtd6QfjyuAx58Y%2BDRXtKNGVj3Ea1df2EnY22TAEPtqnblZy8D5gCwuu08vJ6eFISzBquNJ6cISaN2FoGD0XCbvfwQV7cYIvAagxfvtzok1KpTAlFVxtWoGdOW2dEjm62aNLc6R&X-Amz-Signature=febdd0dc4eb54c22af5213f999dc1e9879873107459ee7e07742fef429c19fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
