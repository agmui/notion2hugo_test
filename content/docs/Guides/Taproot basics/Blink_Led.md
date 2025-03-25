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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDDK3SH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVIby4oZ5%2FPGRjMItNy1MmV%2FSt7OLPlJVLdOBAEwHWmAiEA1NMm8mghNWe9RHRHcUPqEddCFYdCm4nMAZUaTNkv%2FyAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNhTqz%2BzctzEbhHXRSrcA4N4Fnrod1f6Jev4ZMwAkvUwd%2BJ%2BFe6MGGE6uEwQF2jK6J%2FEQYvJQIIqhcTb793WusAgi4Im0xgl1eBuvOPxus8Wd3eQ4vgnCQW9X%2F%2FlUP2SV1U7wkSLD0LZbD3kygq%2BZ%2BNBKxOkL53X0sZcUgN0o9FvOO%2FreVZDojhJ3Wy5rq%2B2nRdzlTysO%2Fpe36CYBA7ICnEfa%2FxPKFSbc8uoET1FceSHskTVJShQiQKlHzzLsk6tge%2FUVTIjg7bXbMQWgz8dLqc%2F39SfSQFtRfhWEAGh26gzkrYAOFau2Y4dy9HBiLWcb46rPPvqs%2FgvbnkMxhGXmuIVYEwxJokeySRFSXBdMUN1ACtVc8HmlhlA6RZYT%2BkPg%2Bp0M6KSD%2FHjguFvWHxDja6izOLlnxv2CSDu3OUf01MVRQIM8kYsbq8HqS6BerzYLMz85rMKTnPkaSV%2B2PmXO2Ted7jBuqLvg5vbxF3pZXaUxZay5QLfijBx1lIyrnetFY1rc52vMBfJeSNoFd%2BxNLtI66%2FzengoZnjupd%2FMBUA7MDt%2BOkM5o5yi2nBl%2FWGTY4qdlfi%2Brlxf1gvWZx7CbFdx9t%2F7cRGo3Wo28InCRm73BXAemkl9%2FjLv8eSXdLvyZR7u1ProIfMo7RlNMPmji78GOqUBVQt8GPJ28KXIYC%2B6OFXN14yyhzJLDukjvv9Iy%2F3cDBKAMR6xKPgtJ69R6Ii4eLZ43CLd37XSUEBi0tCENlXbn7cPSKLSp7SitgeqSkoDmqE5i4%2BT8ARQXUv0RRpaj6QLxm8Q9X1qND2aYPVXvd%2BzFKZQUE4NQZDXY%2BPUqPIMWPlGaMn%2Fj2P%2B5Nt%2BJFxW4HyCMYE1sylbSmELiodyLvnUSxY4m5t3&X-Amz-Signature=69200fa93eeb4624e21245ca1c715f54e0b6e69dc9f0635de968a098ad6250e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQNPV6D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesnM2b5k0If9WN4zXblEa700c%2BJ%2FlkfneInRNtXahlQIgOHxCKCsPvhUs%2FL1YO1jqmIp7l1D7HmxAu4wA0u8sqJUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFxqQyI1oviMjR42nSrcA7EJeXYx81rHVlR2i8Dpz6YW0dLAE0cUhdw0gONAJj80LR%2F%2B3Lk14McoOa5XTYJr7jlBXeqkevrUi1REJjFOK4VED5UqJsx0L0oH0uXYYrSaCEY0pxTPXkEDqjb12DHTgBZxSbkL45W2NIMyziKY3BQGPnO%2B2x10Ot6rL4Pjd6kBRcaogRkqSNEDHAkaBEY0ZhD8qgODLnxqHumu9crZnruZHi3h1LqU21wjLGBsqCEDcWSsDwB2fPiAw9hXpsue4nBcQEqceCj6V5qXBlgVCGALvUMhDOF2PPDZ5oUbG4ShQ3kVw39xiNQSq5n3zQYeyGcBT%2BjCOKsvCUQmPlIeDpeYLyy54H9cIPQoBX7Ww%2F8mg2pXumVkV3Dcbfko6Xs29WFiXZkcz8ApYYOEyBHsNVMZP9VNXSngI1t9vw64qG6POX7hpX74NfjZ%2ForDHog6j%2FZ643ZhAY654blHZxyGcOPtX4jjNdXE5l4NgFqGhphIwxX%2Bl1Tx8ozlWwFQwQZgTk90tVira5qklWKK1ByqD66%2FtEhihTkwWq0GWByqi5QgldHI%2FaNCafBwZ95H%2B%2FWqf8hX2ov%2F9pCBHwumkjc6wAfL0xWk9TNcsOaVPHLUKm2Lbu8FcKvejuWKLKYiMNqji78GOqUBKpCSNtVsR6v9SHFc4AAedBenHRrMeGcHP82a%2BKh83cBvw3uckMLX3V2jYF6xZzu9fkfe0eMJN3H5JBkbEkKoZRGdG%2B5v4inDEJeXHr9SZl9gZ7EOAUydMH%2FodKlIAM4yQtAH9%2B2kx82IUEJ9n8yPkv%2F9aLEh%2F6KGC8%2BdMyfZTH6U2xudxohjaaHvxhJJqC6T17BBemTOCKGLF3b08Us19ieFVMft&X-Amz-Signature=e234001753f46fc3f9cff6ff2d231e4c121a1159904070a828550c49aa227f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
