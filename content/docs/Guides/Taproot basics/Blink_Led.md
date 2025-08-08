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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=b97aac9254493647546f16b2ebd61c9f1acb935d75b30335e4ea7295fda6d3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MDQIYP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFMX5VfF%2F3xz1vt8ybdTrhtKaL0SDbNewrodYf5EiIHoAiEA9LvHG%2B5Oa4P2fjDuGMhFcMho9UzgZ86YH2rGQvDNjg4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAeJQKtAkhF3MgBzircA4Xp2TqH93zMQMxjn2tGwPNcOwPJgu61AxtFq3YXigbLd4io4pe%2FI0sdiFl1Cm58V6QJIEaNSDJ4sJDraoZ59EIIkdrPBfHJArYis3%2Fq9bp9BlmJ8jx4rxsrAc5Ons8A2uDWbAE4Wp4PcYr5AjiKdwG%2Badm4TdO90PdWgq8SPWmc4O9n1eouaj6TMAkn5a6atXJJGS%2FAxeH%2B2dvgplHRDedNBHgtK7IrX%2FvrPTxSWsFZgbcxddBGpWKMUrPwlcZJ0NLETbHt6dAJ5XXnYRDE7v48zw8x2q31TuQpoAaC2mzJ%2BEF6sjeElPS%2FOePxoUKeN2a6ESuESQxF9LtyfdwrZqMulDRaU%2FGXFXySEGIQRAB6X6IGFQxWdFIGoLB2CkfA9gzw2HaIixYo%2FEWZgBjL6exBB2BYtR4jxvNu8rbRc4hyZxtKDR2xJUAdEDpeQ77uRSYNRs0gu9OZl6Fx4S%2BpUSFw7kr5VH0Nigr6AwzEJTgK%2FufvJiuXkihsUqY0oNtljX9IYRLsL2UjnUKAjy4h%2F98KM3lXVmEU1imbSvC9Dw%2FkNhR%2F3FV0%2FlMex0Lc8u2%2FU3O9TgE92LNNdVnVXvbcpXOrVLFGcUA2ljfju0mQw7hLY2iYPSAnN0vhXWs9MISu1cQGOqUB650cC0TIUbzVJaJ8xW4ckNgP1ZmgS5TUNFnZvFxu%2FZ3H0%2FwK3KEWoDJhAkLLWbvJwvO4W9IHq5OcYOkXt9aZZXcgKXJRzwqSAeoUMVrVfXvPWaakcn%2BVb0IxUzMGSnRPwHHhAY%2BOfzeckI1j6PjnnHcA1poTsjdczQHvImAbWEhlqWkopb7oVY69jT8X0rY9E%2F2PMQrOE3TYQofCxyEjWmLvO1cy&X-Amz-Signature=2170ce0d52974d9227e741970202d949bc202b7892b3e2ab3721500d38d99307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
