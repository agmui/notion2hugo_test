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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYNUJMJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFoZiouoiSpjfvpp2AqRRUugJ83k%2BZ2XwKqn8xlYjCwIhAJygW8cHUYmcjrAMeLhDcNldSlTdl8ujeCUiuqiNvToBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA72WSqQgP98UywP8q3APOz5El0XTElYNl%2Fh%2FeM4skUCwmLIY9K%2B%2FmTeeOEkvguDz3EAMBEqEEk5EyjAcxhIdroLthqUm6FhQVdAvwtH16xNjggPlVGLvLPwG14YeuDwI3L4x%2BazvCLGBfBR7eWlpmw5Y%2BAXe%2FpyJBjs%2BLhDt1JLX7AsebIqAGnZ89FGGfPKswqrngnQwYejdjml%2BxWzTlfszDWgHJP7DSVctDVFbgQnnWEzWgqnG0J1C4vB5z61gNM2Gd34WdE%2FMbkXdWE9kMt9Zq1QKqJQU0CPFxeH70kcT6RiIPvDjR1dBPvvQ1GeB0bytMRlCWTh4%2BisJ7yuZILWKoQQM%2F53BBqnl8j19NqpgHyWbq2HPui25Drq8SFBstQnPgexV8fsgGT13jDAopEqW6xVfI0e1WSuNjTp%2B9J%2FnDma7CJ6QEsyuaxTRZ7LIThod%2BP7xXeq8K227TEnzINapoSIXqvLn4ankDfPA%2FBZ9am4WBhw9Cnj5oUfTaVD%2BT7%2F2MHEmna8IujMslFmQlv8JNVwR5MNiHoI2iIbg3Sw1BLRK%2FWdkJOTMjpBw%2FXbSEN8FWCfiRf40%2BvNkzlSz0WPAKLQEW5iQZkGHFWJwV0HK%2BBTbiMLswlW5fbaGMneUp9dutSWA%2BO9KH%2FzD3oajEBjqkAeNUKEbl1mlEfNu6SSMBFk%2FJQStq9zjbD%2FTfr1PsENAgfvNuoJJ2dBahShbbav8mDsW9Xr87msRilJHg7R9MApwGsaDxBWhWtMvfAB4wVMJYm%2FU14P%2Bdeb1oAMRQEMN9ow6OfiwqwGm40sluT9r8uBoZuriC3LDq7iHZN5oA%2FvMhKLvygPpZP34eolNhjZ0j%2BAx7fJ1mGaMr7spZtiRi2Ls%2BY%2FyL&X-Amz-Signature=739186ede8053f73109fc0ac367e00a8a8a1c9f35f5ec0adbc58a633f5b4014b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7EEBPZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD01i%2BnGNejhlbeGxOXBLKm5oD7ElRWQWyqR5ujXC77pgIgYSO51rsny6fY%2Fic101O5bbdCCByK06rh%2BqyFiG6YF94qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC976Kry8i7%2B13GkayrcA1uTakbpE8tEV87P9pR8qYAwjSNNRhawOWYrhwTn9ulgj%2BwBYtGiE22hhwkk7%2FCvKUIoP3jDrxqk0tlUfajayB2jwSbVuygToZ5qkqW2ZCa4aVozfPCN9%2BOl6rA0ZfEiD3UVSPR9h9umqwGRg778G4SQUzbWgLBVWSFnCIdq4pR4q11%2FVEDLuGzwFx3OXMTwhI2cZ5LCYwC5lHOEeIPSpHmidbPKRYTJe1%2FhIcdepBe075vHnndZRDsYQZG9YIqgG1H4G%2BAW%2B2opKs0H3z8nQ3bGGaXgTaKTru4RcMJJrS17grlQMg5tzsfsTNS2H4EwG2xe36IjrKMzt66cNsv8EpCa2%2Fs6ShMxVz7%2FoURTmVWWIGZ32PCoSKohFw4HTc3sz8Jomt0WW5mSJzwvSwvGXDkpxS7SvWn7zq8rWXrjQVdXoJtYA9GfQMPkeZcAiG2V4mPLv18T3NKV3mDjqwo3wkYP1948wWnCIrAsIYgDfCNvRusDTWw9dhq260a9aCZhS0lNPpo%2Fo2TGmY8L45SpIwLhBUNbL8wmQmwTpBiYORvpkbdlxzj5aVcvE2nxWHyDhQB3UUocwYQX0kIoDjtYJrtUSjbHJkzzgWXrIA%2Fn2MnUMw%2BAd8xUK0%2BDOX03MPOiqMQGOqUBPMVEzR9%2BifFO70qZ0N9ZYRo5WpmFeloAOSS0k%2FmAK9ia4CRhlSHRZFYbgILqOIU0BAn8aFj8DLIro2GtQHGKc1fKkuYg8rkagAKCj1MJI83KODkEsVihQ53R5nH9ixhYZ3zO3gIhvfIJlRGVlEbPfZJFgZ9SUPGRKtue4yXikHIzVaQWPhn5kaNAFy9ByWB1aAYGC1iP0IqNloCxYretE3m5VKlY&X-Amz-Signature=5de7d793b382fac430b8f81de3b5df00fe7e8a496ef691c3e548c82e34812eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
