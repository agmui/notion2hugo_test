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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYQIIJD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICTZsBoootagOyCOv%2BrZHuSeD2zf1HtEaUhZhyrVoA0yAiEAoACUAu7XULVa3S2d0pLoKu5LRuAINsyupHo8em320Nwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHLK4v3G4Wz5nuALTircA5NJxBFKzJQCyS5sxs0V5gYjxTgWzllfZmUcR%2FjbZCSsU3zb7Or59ACvlrB0Yb4FQOZ2Ak8%2FNJLO8E%2BdZY7dNs1Mrv6w9mw1AJwmRZBlHv71F%2BEI4OhOhpdDHd61PjDRJHD8g9eEHQIQ3LRaiJf6j88qUG1swpG2ZWubpnxFOh%2FZy%2FmLsy5gcbSAiC12dxedSF4x6fKaWc35BW3QB2Krp7A0SotaE6mM7bpJtRAUSZd7YQ1UH5JZL1KDkCI%2BBtM9TblrO%2BjXLoodmVJMxLIMmuIB8%2FmlKy7hMkAC3hxWkcwZzFWk0VTTmFStWbaUMmdiHePo0gLMHUlhfs4i7hNOwqTlRq%2Bmm26%2FhO2WrhMqw24wAtUugB1fE35L0OdYSbNB2qAqWkurHFYFlbsP8i2p0Ts%2FOKBbYC380RiuWcXz1d30d%2F663TzM%2BWO7EhYxG%2BuTcPRxwaNcRLSdaH9TBbJYOAtTRMcwSj3J2NLCHUJ3G%2BkEvJqfbxS8QWWVS33LRP0Gj3wu%2BlXi96CnQGjjsrCXSCv7BO44laRTl0RMmu9jcjrRnM0oTcsAsFe7Y%2Fx%2BJapXjWv0dw8AOMYYk5n0YhnHY7C2Ycnr3GdKGtH05PUEDLwdjOItXmiV3SW1FBdGML3I4cMGOqUBcouo8nUh6YQCSjgi0iozROLlpY%2FJrpTS3k76mdoH4uakgNussvFcV1H5leKBBCEnCiMASh07PVbJPwmM7i1ok3yXLfeRQ6IHyUWBqHrGTFmJkX343nva8l1uSppjcAxJRObIqyBpo2MRHVk34cEq3RmrMlFqv6jVBho9byOUsNg5NbPCincvp6DNlz6DFi2bFU%2FXL7MW8otfv5oX0tJEhPMk5zYH&X-Amz-Signature=9da30c6df5a6add23322bbcaababe6b22dbbef566da2b3ff4109ad4a45c25c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYWPLAP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCzrw%2BuEgvPgr1smFHUlkfC0C65h9zj%2BwND8vAcwgDV0AIgIqGb3e8KtzJyfnIKkkSR85eDK5a%2FHMQtOM6Z15MuciMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLwvnQTi4CDf6y%2FmiircA8rI1olzCedL8JoxlahcbAqsAYkMZG3kmI9SiZvPFuaNp%2F%2F8hqYGtNJ%2BaibIofmI6xuh8qkILjG24gfV3ddXjoaViLYFGvzS9NJ3OGlJ0UDpgjpJcrbxCNXkTyYRGeainUNC%2BQLF1aCLo2KS%2BRhEVn3ZRZNfp4BcRmEppvu8sBd7ZuxP8%2F1fskI96jlkOKPqgw3%2FFHzauq%2FOocaHXQ4wmbe1PvZg2fkxG%2FB5u2PUvX1RsoVS6PFOi32FhkRj0szOGPC5YUrDdDQKhNW4sjjms2SK4IPao72ZCwCqt2wDZJdSBrLN6O6pqq8eTcBvAQS4stAeheFngvyCpDk8g%2FtPb595vDsUUI1ZEU6VBTzcmYy4YG%2F1AC8XfMwD7V9gqc8UqLJLdX8ecX0j6dDwH09MQiDdB34AVj%2F0hUCvOAWlRwsqZwAdzXjbmt7C9MQ2D3qcyEpchMNvRwKKozGio6njPWe1INmRvrCB4zYBgwvyduNIrK0ErbHNJlnrHrmQmNTnsi6Ezi9h8AA1RgezfWoBV73MG2QNBo3n07VW5CAi%2BGrw9lWjVORCm7nQ3JWpaLqrI7nwzWv8Hk2fud0H6zkVYJgWkFCzxh4aaYBXIZcQj9NeBP%2F9FAgu%2FLYxZ6ubMIHI4cMGOqUBr%2B8uCX6itUNGJPUzFAsA%2BHwAhhcLJ%2FUP94U8ZYSnNVIpBzxqjPY%2BWC96UeT645qkABIl3lI0eSxc4U3RfHv8XF9mYkAY5L0Yqkdk0TfYh0PdGrhrN6v3qbIuYlvSBwIL8Iyjzm1fUZOKmAousx7x9%2B6rQrwdt8dGh7ryIE4kMQG%2B3Mt%2BTuz1xyY%2BNQHh3uvzhwlXJq1pT5t6RbLLw8lwitFfsdvp&X-Amz-Signature=5810577a1155699f087a9f6539d9c69c579f69bd6bddc71614e9483169b86569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
