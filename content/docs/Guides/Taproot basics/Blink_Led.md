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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVAWDWY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSOVmrl%2BxKLfCf%2B3bMBxztnTAVY9k6qFFFaqHc3zyjFAIhAKJ3NNWSEUvFzQYA6yOAzDrX0cH2f1qyK2GmL2CmAZsYKv8DCEwQABoMNjM3NDIzMTgzODA1IgwkkIIUZW5OD19l0mEq3APVua47hz2TDnASOmwxXfO2FuXam3efH0pBIkfRwotsOd0hWWoJXhbg9LFScYOVqFXbkrfQ6bpFz%2B8rZELi37kgrOUSX8%2F8O1uRxPFWK%2BLdIk5NKnjHwmXopd4tONMBY3uIH7jVYXfv%2F4P8XpcIosROUdMswg3sHUYiEtXtXbGPXBJusv%2FpvnQ%2B2Pyql%2FI6khX2rSQ68L56HRarPPEYnQ4cn4pqI9LduMxMibotw%2FZt0pCiOjMvqbtYQdqzZhJH2j0dYoI9ZTcENXBtm9y4J4yVt3IMWJpVm%2BMiSrjz%2FL0xTXNAVONG0MhUzftc4EeYShJFxdM884D9yG4iT4a4XexrHKNVp9LN9dKZpLUszAs0sc2KU%2B1q%2B02sKqqI2JgY3M%2Fvdw0WogeC%2BQiLsg%2BGGtNC86EnBwatTg9utKf9Vtd7%2BP5B%2BG7w0Mwt8210q4KygBvDxgPmbHZkqb2UzTxgQVMVTGt9qowo2Pne8%2FufJ6982TWd%2FmOHJxNbuHdYi%2F0u%2FfKqpw0Wx5SOv079taOo51D1rJ%2BRtRy5%2BcKNrN0sL8vZy8Tnjfxicp3g71oKbF83naZuGB3RNnjU4TTlfKW32ImvaA3s0t4Nv%2FzQs2vD%2Ft7qscCEooXROVVNa%2FCb9DCAtOnABjqkARM3kJXyBgKYhq5lMHr0oPwsgZ4I%2Bv7eS5zYKS9wI1qopo9BgufeHHuhIwpoWE67J171w%2BtSOZDzUdydaOA6SO6p%2BFr59%2FtWbRib9bG%2FSClpC3vIA2a15gHXkiV7qdXxoF64Dd1vqCRYJUtCw%2BMgNx5CBbHy6UZATmup15ExDXaNudlOoDaxgqcoOtDRFpbjDVr7uYkxSsB8ooG5PbP%2BNnbsuGgV&X-Amz-Signature=6f51e5dbbeff52ab07422c45521d1c78c4873d2cd0504e5869546df07fedd7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPA7FZR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOnFZIspXYUnt5MwbFNVpGcjT%2B07eoAvFTFrJDyF8PDwIgO6x%2FdGTS8KwL%2FDSgsvIJ9paVCe1JUCQQECDCvAc0bzMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDH%2F%2BrUAtDshM4hePECrcAwyltHmHjkKwTurQhXn7RbJzWqXdmpZ4p%2F5QTnl1EzRcg25zbHWLh5fgP2eaUU8AFHkV498%2BfwKS7ON%2B0NptatqqfQ0x5l5094CFKxEg1eV64xgFwbg1OmVV9vRlgnWa%2FYnDDxPMPWxaSU8QKvoX0wIyvdVW80e98a7A0nNG6MUVOTfhzAAQEhR%2FL9YahM5x2AzVvaKAnzW6zq846KdfydPpXp7LUJOrUGipMZmvxxEWQTEDU3M6FOlF46cxe9qmXqfwhkQTEH0ZyqQDK0ciKfghMPcnp3f81qO6gCrku0hOxyRnhaFHBSLrt2lf8O6LeeyQlc8SHtyRHVRd1pLF5N8d%2B2Ox6mP3jERZvCXzsMUPF7g6Efy779tA1Vtpqzdzksn80n7X3HGGy%2FwHRlMjVTazT0t1LLB4oFatkE505mkfdAlg2%2BWHTLE1%2BYtSpfB7roOgJEJJfTYBh%2BpCGHn1fx2EV8Qrx6dzGnXW4ojfed4RDOXxDoVGGdGz9vG%2BCFeRncCQIZSFSfuHMzVzwXYrGnwAdt50hnMEXZ97VPpM2HhxxL2wUs2QbVtAuCI2Vo%2FLU1MevRF5MPDT5qlQOb7gNFCp0H%2BRBhsQoNUpLhj3c7LJ4YZJAFJndkAxGe1KMJi06cAGOqUB7PFzYL8iRGnx1G5HlJbP4yl0F38JWjzrlmZr4AgG2XfPp87jK8FpR7ueLXQyepjYcZSMTWlu%2F3YrGyXeT0TH%2BxQgqlu4HGlryRZIEPSbYAvw8zKsY%2BomslFzQ4vzWr5XsJZidyLuhGEivLmAxMdTnzNkWzvbW5jUJGmcQQZkzvCZkt9M%2BkpH4xEtrS44J7ezi1Gbisr9CIYf1kQF9Fn53Oq2raeH&X-Amz-Signature=14424aa9a40db427a3ddffa8efe5f51587a1cd5b97996ea9bc439f0fe9bf0ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
