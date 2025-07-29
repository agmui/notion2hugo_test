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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VY4MD6J%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjh%2FVtElCkoUf%2B%2F9uBa6Ictmg6sixWaL3G%2FI2e6PHMUAiEApbQoB4qspn2Tlv%2Fw0Ao%2BBifjuzn%2BaT%2BUKh9ulr8vykgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbeR9voTHKKnZlcNircA01erjnqlIxKbJW9vbG8bNIsnwgh7%2BpyaXE3AmK5rmLysYZnkfXdE6Rl7%2B2bFrQhl15UduJSRKs6tThWhYHz1h5LUv7dqUDMeSvt21EX1X21IUGPSHALY4OqGM4j6jvYxfqVpZ5a9W%2F%2B04dqT%2BxR%2BDl4lz8KpkGaqQu0kmJ07Zz1LZrw4jKi50MVFLfAMipTtceKDbRFrvJqXxuDqpuWOTnprdx%2FBqpXapQG%2BPVJVgshxMWo4h7PeTeel5Pgbe6T6RC83ebWcv%2FmpR3efU5QLk0bzPo5vOhKBbP16VFVVJCrOJMvmmxkO05C%2Fpb%2FELqQ%2BqQkpn174vhV8oW1jKKhpZ2E%2BK6KYWLoJDZtk%2BP7V9Sklg6BNY0U0enDosowaH7KpfR8hNIYJvmmwSDYE17b%2FANPXIEwAngdcG%2F2slm5uLQMODdlA5tsbqryICLMipHKI5uQM3SQMe%2BSlvcYmn3ylfjNxQ5n1Ja%2FfCZ32pTHSYu0Btm2XGNCil2INCsk8nzFPCRdbXbiiI9Amoq7kuz1a4ORqWg72tV%2BkuqrViViESYVJThh8epHYa5dBOyi%2Bm6WJvSvU4nNApVezNfw66dXrqQ6q%2BGS2r8TurXdsLQGFaMikKwIFgtQbGjxKOo%2BMNSKpcQGOqUB7nwX32eHjJip0nAfWi1nI6jvB5%2BSheTgsCvHJZ60jt00U9jUHMPa40%2B9Nx2OsrZfGSC90dXDW14Nip6qo0RWyn9GIlygabIlkZxd%2BVogQ3lGCVcCJnk5Wuo0HnrN5Rhxey3KmpMCuEts4NMPmAziceGUsugaOyC8bLUUv9MR9oTfHKQsjarRFy%2Fz1%2BkVTNx5iiEINB8wUB1ItiFNoTXmK0RFfg41&X-Amz-Signature=614b9caa3664aed0a220ae89ff585164fb7d06060d2edea0e243ed8175e4cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W344H2GA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiYcXbfhvPswJBa%2F%2BmOfblbOWn7Ya%2FHdBcELEU0nyw0wIhAKv7O1ryBYCcLPrQKigOWALfPgAsELJpsR6d5d10te5eKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZYDy47UdVllJN9lgq3AO4JewmMjQjki9Kl8N7TRaTyKpxQr3iFG04ZNj1vYydF%2Fj7Cc9MexzaRpeIr19CZOtaxSmWRAq3StR2aVqJJJgcev5D4VxZqKwU5ndqpGTTA9JifvsfU4XYvrrKky498LIBT14e3zl5AJGy%2BA0H6RyLa1fq4hCeEbKQpNZkXsDUs8ow6fvep6iAXj3Gj%2BN1n%2FGhorfKc538GzgBbXjqCLl6YtYd%2BfyivcluTt721Dc6LzfdgsamNDbeVfk7d0DUlUeyaJH5RYKss%2Bl8kciSKKmIWvm%2BcwQc4ecSkeEss0iX7OY2bIqqGjmh0rE95L0XKGxAOpSb0TSa0pM0CR331YQ%2B%2FQe6Zb0gkCLRrAVms7W3ZnlbyHSAk%2BpDZvtw%2F9co067nD%2BAQPgcNGyr%2BI6wRK7XAwEQPfJPM7IXDIHkfTdF68%2FQdElzTwqU3dwXWM2n3pZXsdbawLId3VkV3r0Iv3fAMl90NMqHMnWWtdkszyfp5D%2BVUN87zgo01YuWXoJFBBQS3CmUga8wFt3twkNrgEAGoYPLmE5AoVtEHnwZd29pVBO0n3cInJ4tWNZj2T1%2FE2m4CudVavwwLQf0YLUsjZlBq0G6KZpYnHrhzp0UKkGVuPS9lGc83fQsGbeFZFjCViqXEBjqkAWxjqOYtgNWkJNgoKMopHpITLxXgR3YVjMBQvU2kOy6NRXbRZp8bnXMe4T3%2F4oBZRTu9saya6nwnk9mFzCPqzMoVESHc%2FCXOirjbGL2GVeNe9dDELpHip0kJoRAS5GBfRHrg%2BpbJXK8kUG2vgi3yDTgHuluFJ5c9SZzWxeFmLZnDHlxith7bmdpnFExVMBCrZ2e%2F8YJ%2FCB6WHZy1DY2KjLITbZru&X-Amz-Signature=716494f6a05d65c79aefbd2850b08d9a071512c7053b8f876585d8e5ac88e266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
