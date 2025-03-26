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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7OXCY2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK0BqxPFKrVdvzXgfHeM1YSQO2guuuchG30xYxoynyGAiBH0rkbO5brkDTbiBmY%2BNGX9au97RE%2BODPPsirmBdERUCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMxJ%2FsXZlwQqCRzLBZKtwD23bnqnsT4eb8GXnnejPy9FnQenRh%2FVFdZQYv4%2BknVzuGAXQrCrcWhON2RuQ5%2Bd4Oljo%2Ba4eC4BrkMrbvgrHtozG7z419f5BSdn2xeTboEKwMl6yq0AZ0CREi52DpVkr72jYbQi2vZ9rtiWdym%2BS4uGEgWTTDED03QOOIGyn84HuviT8YF7lWrW8YqY%2F38FBwkz3MxHPPJClxN1tKyCs9BCvnxIj0H7VAbc7rOlUbIpOzyrSjB5e%2BzqNe%2BOPd%2Fx4LlVCn0%2B9%2BEpL9r8e0e%2B8U8VhV64W1V6RpX4AzSn9PTmXkfJETZTClhWdOFqa%2FZRuq9u15Sh96ssaTXScc1hA18L7QEJ1fJrEteJlDl676x3on11sh8RbZrD2amw03bGle9HmNOoyAbKMEXecP79ABnjvTrFpHrBExi%2B0nLUzqSJQxsEl9u77uZAUHlleNHRHTXq2yXKYQQxIVkso2QSRMtbivypDHVn963meBArplJRixR4r%2BhDa4%2BUYuQNouaEETkIOKubTXE4hqagy9v3BAhMRBNuMC4ImooBVA4KM8rCU8WnoSJtyGSkDl5NWiyQhUhqRasUdfsGtrrJQvx5NEpgqqoUqgbsi01BIga9MCRU%2FOni6DT1boPYiu%2FTUwsfqPvwY6pgFW9D1nVcRZ6nsD521iHtw2PZczwmiKyR3XrXUoSVomXrzen0%2Bn0E7rJGkdhWwQGdIKPGQpoOVJqJRENUguYLPCMcpb0MBbk8R2i4liNfYEqzipSunk3ob37hNdUP%2FKOFy78XfE%2BDC2kkUW3MOO5hv%2FTBVOsE2QptXykmixkp0OfxI0S1IIw2HSbTlaZGbiWxnUpXa958o704T3dwchffe%2FwzhhSGrC&X-Amz-Signature=07e41e51c13e5896318e4c7eec440ac661ae2cca1b7de55461bca54ea8d4228a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GTPMA7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE081%2BnfUKRDj3%2FK%2BQUccBRvrqZXtDYG6wdRjbOJ6xYYAiEAlX6C7UhAifYaRKpcDqEdi1%2B2IsFWU1yKHWh2Bxou8IYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDNIR9TnnssvcQBALircA84TUWkhgl0ieKWmfaxg1fdNZxe7M8M1cUTc4mjfYq51HfKhcYoS%2BjF3hUGeZLl6gINWHQpvncEzYtiC9aMvQUspCHTkMewuPD0e8iBAJiMyeK1VImo5O5xpQJM7i%2Bz59uB%2FMVyx%2BfLSsR9pf7UIO2vFiVFH8s%2BNFVPwfmtoS7HRPRNog53L9CdbJJPAVepExsW%2Fv3BmWSixj%2FCJ6CKybqw8wqSEJke2kbSBuR82FWTpswQi02Q%2FpU82UUE3gyAb8UvFl7O%2FEMH9Nx%2BIC7H9m9KB9DexlXrvLN1fuVpCFdpn95z%2BtDBrNuDkNURdf5DypJW7ZnA957v3BH%2FUatyxh6izVzQ0YF2qQ2sIJhps3n%2FFExCeqG3I5RI5FfVp9CnsqAwATjtkuWoL4ycwYREvl9Ne2cmEdjwrw5YMmq3tv%2Bqfl%2FWB8oo%2Bf68soBbHiTYn4aUdjfP3IUiDSKh2PL17%2FiUz5H1e906Kpze9gVfNEbpS1zadC%2BY4gtHwfyHZeJkcJjSHyEmgSgX%2FOlxUyeMr2JnN1d9o7faAjBx1UcBwvWeELCi5OF9oy7V6ILRv8hBZO4ISgEaE%2Fi4kAni3zaGjkBqG16yBYtjd7wargbWDZQ3bTsFhP6kpjqEv%2FfEXMKT8j78GOqUBC2eng5RwyklkfUA1FpPIlAhaOCrP5FyPNk2DYpsmVzs0q4j9M421LtqEmRCMq9ZMtESte6dNOTr6U%2B2pcpO9xaA%2F7yxELRepvQRwhZXwvVftUaKWW%2FkjAWJXmqqenRgx2leBoZdSMnhJ82uonvtnQ%2FEsq7tMi4swHGHNlc5DU7UqKnwqBdtJ4XOTsDLzvIz2oHFgbqyuuCEXh7XS%2Fq3orHCkBtOz&X-Amz-Signature=11bca4ba40ea2d060396cc4707a5b2851ccdef2e5c2f7a1c1dfd773ac057a888&X-Amz-SignedHeaders=host&x-id=GetObject)

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
