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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZQVLGR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDW%2FpB8WjGmHbKo9zBM%2FqJzFzq2b23udkY6O4QSvVNJcAIgCNOR2xuirBmFHJrsYTUGGq2sGU0S6ldnwReiWt%2BtphQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHarLkP167ukACD8aCrcA1%2FcK7WkMa1WokhdwH%2FCS3hZ%2FcnDSYtoxGFF2j2klSZv3Lp9ZfGzm%2FBKY83CMpOOxB6Vv2CcHHbAaB6ga1eA0JKC9Tbno1QV9E5FM8fJFnkvv9l4Wz3SV3nE8cNev8sMmWdYQEx%2Fheu5fAXRH%2B8thGwvbvX7XQRk7AkAAF9IixFM0vkP56B1mANqD0acvPuv0xI3743OhSUooOfFpKQE9DXnc5zCXmhjBIHav23QIrhm7rv7bqO6eYO8I2xfNwx%2FvSYxfrWQYNP%2BKDgX1UKCOPeiW1qrMN9avJVWMcm9x2O081CcHA%2FUHgULvVavQjstNiH1hUeqGHmnLzwhzYhc%2FsdxNg3yGCZX60AHVXrohq%2FWOvxYE%2FDce2QZpClksIUoAh7%2B2Jq1%2B2S%2FvmT79s0YKdcGa1byqhpgDuWb%2FpxstOWP2MVSiT123IW1GmJm0h%2B4wPdjoYf2h8dK%2FBWlFeXBUXsg9dAn%2FIVS0uG%2Fso0qgGX3JCcTxsGGUrbbA84lO%2FuwzOc4S%2FiybKj1vC6dr%2FM5k2616lThW5qOKS%2FCYPnAMsX1XJFLGVZprwvIAetpfiGjA9nKrSTUr0ku6T6dD3bzY9VRcjiBTrDvyjjRe5Axj2R0BW494i6AK0L9byWgMP%2B7tMIGOqUBMTxFGheNX0GZUcmgVyJ4VOnMOuY%2BslAoSw0ZrjQcaKgVyXU4jFurrZOtFLScLlBvojyQlmHh9zY7KIlBcwDuMtTX8PxUyF0Um5kovc0FSL8Yz%2F7shn5TLkBDvO7nJzl9Z2L1MvRSO6FkwscIq6t0VmVM%2BVl7K%2FwxBOxJkP%2Bra1PBGzd0nwd6uFteAcUXIz6jbuW%2FmcJC4cmgPbrbphhT%2B9tSA5eR&X-Amz-Signature=236c2e7d62a03f1a9fa482a48945ed86ed9657785d9a4426bdb1af034e5cfeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKVFNPN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCMDyPcvTRxifwj4CvFl719YYEut5P9ZLZHJ44Ut5xb3AIgA%2Bzu0tISp9YsnwNlKLzmqGOV8H8W7elIyDHddkVQ%2B84q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDB94w420PyVDTyasvyrcA%2BpzLIVJnz1TqXnCg%2BD%2BQnb%2FiTcDr%2BQuM5j4F%2BfzlacczqGq9RtDA1jrjRCqMkHRohl50E3D2pYqYHcAd3CVMtMHR%2BczFKNF2H9WPRp86lgvSyleJAobfDO%2B1vCB1kMTIUjTKRlG0DOqAwCMfvdN%2BRRFkTzJcfrqQa4%2FZupc5FzGA7x3c3yaFHb95u5Z7gRod4WW8SwkoShIS5YOF4g58%2FDdPP4zlrznQR6ItIZ%2B6JJNbxBWI1wFfs1Ny0YZbPguP8Kttui%2B0GXIxpczxRA1wf6pL6h2sNOMnrsM3J2Hm7r5SN6z83njt%2FoEaTdOjFtp0k21uI13BbH6Noy3yNave4FNNaGzLFubo5Y%2BkUw02760SoPNglk0%2FzREWU6jM5yJg3JCRVGIZYawFjS4hsa0eOMh8EDLYXEUVnF8kMA5iVdumAaCWym6YlBVlFrjyyD1EJu6t7fcGUFO5DzoFGAb2c4oRggFCmS34FtQ0vJE3zFHhonTprgbETAYzjnTbVkumjRd9m2Dwt8Yt6sfzPbScPvCxVNHG%2FKnUubUxzHeMkVEvIA3bQ9NPrjh7B7LOoGBPGUQtrA5XBohl4eHcZ8vAkMWf21bRZW%2BANH8TZMDvvP0E79bHWMH3XQC5NXuMKXWtMIGOqUBEtimk%2FiDbqcAKUNXtBY8cLMYrJZSMw8n9RMe%2BmyHuXN9R8cXFoTqP1c7AdmSiP9c%2Fx8jNnzFtMDuH0LP8QmblEgh4kKzTNFNLqv46JN1JBLbngupFBkKCWgg6nZqaOqXKhn%2BoXVm2qfhJW%2FdY%2Fwy%2BwvRA2JFfIRLmFv0XuiA1h5FGbcfQqs9hVtSvY5446UaX1caMUqF96EJA964eGuzsR8wSDZn&X-Amz-Signature=29084b5c00b9c3e75ca0950d43157384f0847d36b62325ad1b6eea0221c8e07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
