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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEUIH75%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6utPEEpNRupgmAl8pIn%2B4%2FFVsSx7rVEMPfi8F9But5AiBrYWvJJV7quL8FYybu74JNlWSxGpjU2o8QHSyvD4N68SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMojPh3bNVlrua9Yi%2FKtwD82LQ6tQ%2FKKVQ7cFeFCEddVC%2F%2FMcVaWbFz0vHk48Y2XSHZ9kJ1tLpDq4Bjpw%2F3GKxxjpn9YDsHZ%2BBzIrArW1UWdnMUNbAZjuvYtyWkShafb0fuf0xibF0AmCwPHdVisTiAENREvy0VPXw6tYgSls4pXpH1qViwlzpZccYJ9PKmlFaz%2BOlFzir2iPLOKjEvihFDOJRXoqVSviPCYF3ruVQwPeQcyCvfppCsgAFZIuIp7Eha6Hn0myfIT2WSIkT%2BX%2B67khfkmXtiG6j98XtgvZst3TiWD6bMtO%2Bv4NKjJ1%2Fm%2FbuRSq4lX4zV4YeinKYgDMQrGbpF%2Bn%2FGU0aGoes%2FxRQw%2Bf5hCOjjwoa3jsDJKOl%2F7huq3nEJOWVNkQZcoY9ARfL5SrUS3ARDqcRYqgAhplkio0aG6l3R75JgUWJKTuA%2FsYO8z%2BvPA%2F1wqnY%2F%2F3S8O3X4P4jpBoGSUtASDDpBfpXBd0wOlXlYf8F4S4jTlMiIAUhNJZbqfuVDZeHFB%2B1WxDtglBQ874HG4PfjIhgDae59Nj2PfedehlcpkTse5MMYOK61w4vkk6fb7CbRfYhLnVTBhk%2BUxo56YJGez0KUpzvvB3IOcbdjiBTogM6zV3C4t2r89ok7xa3IF2C89Ywm9ydvgY6pgEIhRLfSDc44IT8qzCwXgGlUkd6UaPP03GZ2ey6KToq7nAoyUn6%2FW3uizDucpuZ3FADS05tvoJ%2F807a%2FnapMuOxE6E9LjOcqfIlkcbf6T9mn0MduFACq6nYvoM4wSX26CET4jMozUYyStGg3JaFX1uxKGstq2wpCxVLuBV0Dk%2F%2FhvOUv7GaFqK%2Bu0sNxz68%2ByxD3ahfHmbjxNVuDNdE%2FB%2BM7dbVlvIR&X-Amz-Signature=a47be32a0b07cb43455c97c2a0c4cda80e6438d9ad25a25c70d97fa726ba70d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCIL7B3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB05Ey9Jctnd7T%2BlGU%2BMj7dUnHkwOfo%2B97Y5OmXWtbhwIhAPpS2FhpkAhkEpp1tDsKwoddhbq6aU1PDdmb%2BeiXp6MCKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BpULqS7o6JbL%2BXi0q3AOXtnp8SlfM1MGR%2FBbCGGVdWe9RDWGkJeTUJJZ1LZUy3HvEcUHt8brBHXqsZtGzahkU6TctoeBKKQZi77uW1syzpYVb9a5Huckuv%2FsrjWjQQjbOI1tz0Ms35TfpfYjE5E00z9JBeLbi8vgOPxAFOxzK%2BKHMkHZtMJggCmSEIfJ9P22%2BMWzoLOEY5qvWTcSBZJLwbLv5QuRxRp8JpqUsTY4wRUdKV5140sR%2FhlgPBzHYXI0veROwkf%2F2p2h9WjrFrcT1lMBa4TrtZjR3NGnBLwWF11EDIpzWfyoMfBuBlZki104x1aTJYJGQdxeetkGM9plw8kp%2BM3pJzg1qkrkdIhkVg5pqm1cbegGseTHXQAz97jeoXtHFpxNZZafPb3vg9o5ByBnbFAZYisJbI5XZu95%2Bq3pM2hCj5y9N4iQlP%2BtxPOpnTQPlhiFgnEvQHD%2FG2FekchMYYSQ6PqTgaGDdLchzehhisJQvJCYdpDv%2FAVwShu7%2BYXlyjF0c0p3W8viqzyjjAzo9ijYf%2FR4cL3V9Z5U0N2l5SENnj2Gi0vMfevqQJbFmkZemPVBzUUxe4lN0GzN3ktw8K%2FFhwgxAYIOUuxUjLap1iR51yxz8iciql8x3XffVmthOS34gW5YbazCp3J2%2BBjqkATILwk3JVuJX54pKT67GnebHjjRFSHYCKxlCoIuGG3YHNXNixKKJZmDkUCGTIE%2B46UF0hj0Ecxj3ydQ5ICnPiPbh%2BAnrVn3LSmvQ1hHjkfN0yLjBpMbQtc5FdiUEB5pS5jRk%2FvyeJl19KsSuN4k0dn8IdzLPkbxi%2B5PDDgyIPNDDkoBLNx%2BllyYeIdcqzhr4wHwPzO7IsM98pDrpfXKxu06a8WDX&X-Amz-Signature=8c69fdf7e1f38998dc7072b9516508c0095e68becfb45b7eb3324748978ec601&X-Amz-SignedHeaders=host&x-id=GetObject)

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
