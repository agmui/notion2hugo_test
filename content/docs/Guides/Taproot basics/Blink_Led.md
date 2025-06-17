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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHN6YLA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZkP12QDRpOD1dIvmsM5sUVoEEBzvBgcNxvxXnnh%2FYQQIgfOLIxn94%2F9F3VQeypSjbK7Uf%2FTJ75NGFbEY%2B8DZEUBEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDkxUBtOvFtf5DZXvCrcA0FVPbysjwwBnDYPZe05cIqE51O1hK0%2F4wDS37PTJV3ALttF9IHvORQK9sUtbPAML%2FJ4jD%2Fq8xzDPkIe4X4CZMUaaRbiJ2MjDQYBUHlDKD3tRoDIz3ruDF1LB5cpGoLEFePgQv%2F8YI00s4vcZ5GjDSTjMMbVkLXisbcPGHxpi%2FqEuQDL1yWDB1BkPP2OVJvAkw1IjZFcRBzfD9p2xitQhLnELNt8ERokQBbNeUQnkHk5iv2FQOiCdv867LSkhzLMFI2B7a%2FHZRtDfAef5%2BIpKVyujeQUc2uKX05sQyohAkf%2BOrsbbhCUravvhBoxR%2BJ1kafPbiBXUprG0Nx6XLhos21fCTLCtJ3%2FxgoLyqLaCDSVh6nBmOfyEcWA01uTDUZckwxc91jrfgUwnapzgwjtQyWf30MIe5fqVqoGRQ2w4Q6bQf0lDL6ARIBYW4CIY67UJZ9BLgmAKOTrFxcHjhoBmRiT7F8waUzA%2BDS9Cvy1QumCWy3o2zVkEHhfGoswKycjrqkS9fMxiNrJCBc4YNLzUDGLF0cx5hPIuXOVoVnF7jztz6%2FP9dY%2FGWk1hGPFYfaYNu9HouEUlNoZfRBpOT%2Bml3Bpmmw5dP2pFucce9gv7w8QfWrbiUWofHRNajlOMNbfxsIGOqUBGHG6hVkXmdMSyG%2BF1L3QzM2HS5yNG5p6s7r8PsRXgN5%2B1%2F5hYsXXIId%2FJ5gvnqnbaTcGCwYhzfVcqaMZPTuTCxBPZ0iTRxYbfJ5YA3B6K4FNOqZqyIXUpkooCCoFSuk84gcE%2FPercA2IidDxPNKYmpR5a%2Fvvvglv9cAAaUrAuzZKXMxmFlsO6wpYqEP2ZYrpqExvew%2BbdKf6gXnkngYe6EWxNao6&X-Amz-Signature=76aae317b4ce1a02f09b81226aaadc1ae702beabc1d9e4a6f0539e7b1961314d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MANPZXU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPlnYQcBd8NXgtpyc2PrRDAk30OVafIvlyGC0wJNzp4gIgE77cL4XY36PSQVZfY9w0thbRosfjar7PpspaBO8NAB0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLwsMvHbMd0Y5odfByrcA0Lhz1sdlNjdyvaFm5mwOZdYpGjpLODWIs45DlyHEIoHh8UPMv4c7CA7yeZZso0SD0f%2FmEDuzLw1x6nRwYEKOSuVN36lynYVT68e5jwtAUHAAHcT9rwgak8Cr0ZgY9ucOYN0vZsqthceYa%2FAoFTsb88wjTv6wUBu6%2BxmlZHhhwGNNTdUWIgPZfASx4lwhwWaK6t6iA9bwEf4y20pi%2FVp2umQzahpJFlParq%2F5qqrKzM654UrGgN6C8DPxe5IXAo3q9sFd1NzQdW4fpAtoPvsyVTdN4JGXqJ%2Fxe9sVjWNE9x3gDXKSHcO0w%2BoUASBnxcjJw7FoOcF%2F4MmixalQLX9VdI%2FRyjtTIw%2FH0fxdLs8E%2FQYh%2BTe%2B5XjG59Mhnmy8O%2BOXe8XA1YhamjP1OXrmXoyiIc9Ut8Sv%2Br6u59C6Bc6x2044ElJPqU63jo4puinx6VlJHTC1c6%2BEx3TApQVn5gto%2BUbuEaPW1v26CN4pwVl8dWDpL0H%2BPaK38v%2BTEl0g%2FP%2BycsyUWo3lwuUTddXKun8IrmcdDX6wXSWrfFchpPdYrP8B%2BCtJDtmzZ%2BGGcUXr061D3GIoAg%2FqA1jsnFIwEco3lzf3oiB0qxzdhFzCURAQRucm%2BZO09OvXezsEYRlMLLyxsIGOqUBNeYHtjuKzsnEj%2FCR8oRSjgF3cK%2BVCCSoqoSFFBjZkmPLw8XkyW94YFwsG4TUxNC1KBhb4v9zzGf3J0vNsNkvo6apr%2Be6hXoiiHSHXJf67ZN0zxWsICdbLi8qVtCfp1pcVCkLoIAh5YfKCQmREXpj%2Fuh52Q403xGx66m5xrdzxRw6WnGh8yIs4%2FTR5V8jXf%2Bxj7ig%2FDOTBVY03k5%2BgaocqWGi%2FNbt&X-Amz-Signature=8d2cb779a0e4274d6520a6c9f4b6fcdea951c7375137de7a0fe87d103e59a07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
