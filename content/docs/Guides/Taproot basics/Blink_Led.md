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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5RMU6O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmMTcZuUSiuqmz3awG0A9JF%2FNl0ie1hrgzrb2wocstbQIgBpkO19t8gwa%2B%2B0J9OlyYdArLhLBjLbInPAQk7rznuL8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdhsmbAf8t%2BHTkrlircA7ZPtrDZ0yCr3eBxvKFb9%2FJXaJsDJ9JSie1YOyV5rLTOJsdwJk27Nk4Tovyx6%2FjOvCAxx6bFZfd4eCWWG15ziI3ysWJyz9YRlxvzr4iK%2FJnKsz4YofzFMBTAz5aqDmvelTjrKFvuF29QjiNrbLqJTGXCzuYPKQB9zSuBDcOaBJoOK%2Fow%2F3zloLra7tgGQweC8qRUX8EfUGgNq0otDFmMTEfE0fiQeWQ2IxRn8WOX8QdRMpLTcwdGaabh8O4PnFL3UlLeDYXULONDGjQ8huB8lATmnsz51M18z3VffZyrydGZt1lagw1eTUC0MWgou7ljK3g9rkDy%2FEN80oNCv6h997uo16mfEF%2FMWYI7IeFmNlNYamE9usYNLKzIKnAd03xy3BnIMnc72js1X5wU0QCwvwm1ssGbVWM%2BhDP42CYc2FWZs%2BTbHcwpJ8xoSQ56WIoD6DNB6uN53Ry%2B0mgv%2BL9uqVhod9HfOE3C72o4FzRJCy9mLNqQ6PbNHgdTI9BG1UvXrC6TeM1fM4n3pO50dm80zMS2raSggOU450ftoJdUhLD1ZN6wVFOk9D%2BrHrtLafrt66LMNbTnFPsIqZ0BbbjeTdoDeMXorta%2Fn5MKX4zcgLOHR%2FLSyCfv3M1VCqXVMJvaksMGOqUBUT5NDYmk%2FS8woPSg3%2Fgf1ZLNdx7yxr6pU9lD%2BwOL5PGITlf8VnSA47x5sSFYIuVesTs9zJ3txoXPGwLu72a2O0KsPlPnlj21vMzbqqF3s8xcO5JDZCFdYjn4uR4MLPuyaU3hr%2FVH4Ay38Q9SSVdqd6o5NDY%2B5D%2FxQOJpIFd%2FyeoDnkPRL32O1SHIiH4EJy66An9nOoU3mwTc7Ma2M6dAdwNcpyq4&X-Amz-Signature=5a3b6a9513573a8d7f385912f18cf791f07b59cf467cf556648cf27622e747ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA3WR726%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgjeXJndNOxG6FmYfGySTsV%2FplKH9gt8941S%2FzaQRtHAIgIMErScyDk9fCQbZhE%2B2zksN9tRusUeJt%2B4HEyVOTxN0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcohoMmUvxF%2Bk6qmCrcAyb8nc7yAcosT6Qj4rggk2nezTzbgRO7b1qb4L9P%2FvFt8y3uDOWKWyJGry4ctfqvh3QHgYVu39jfsqj7PXWGbcN1OMgDmxsBLtXm601ksVTM9BWawpgnnYDcuNaJL11e0njk2I5qPfAU12g1Cdk05p7PwhUYPSWCNW6yFWJYrpEKXAgg%2B%2F%2FSCX6%2F6aWLJnMG6nK39sOknJuaDHnDHWZ8vD4jTRourAXTLCdRKirayaC4lc%2FhUtNCLn7ioeA2TgWhlfQxrDwAJLfPazIhgQWmJBXvx5WoK3zvM4p0dpMaYNWMXm6AjJqXNm6%2B9kKiI0csowF3NNMwESlH2MVFWepY7feG6EAHczt%2FHDz3TXpVYg09dqj44awRzFB6xlBiXI52G0lawtJLMHvPZtbHOtgoqwOVpPRixiBDbCKjJhMaOfCJ%2BGsUb7aMmIe0nes1OGCSLNyJ0ybIUsAo2I6nwmBxHdjaEVSAL57ghI7lvDV6kundXaeibaeiLE1Xd3Xo%2FV%2BiulFnNmrW1iAItL3iC7WwQ3ZovzhyAPigPwyOSeD6U3YG52Jo60ceSG31WS1%2B0Y%2FYBKKaU0WQNAjOnmcRF0NQF9Dzo553zAF%2F1BbwcebiCT66Jc3E7W9F8LjvSVczMI7aksMGOqUBpGLtCz8ap47rRQFAcuFoOSW%2Bh%2BKD9hT2M386WSy%2BlBKH4lEw1iRU8dpJFtapXRSkT5%2FcAHGdbDrVH0LSAf0Ws%2B5ihf8uQdoMP96JBaj%2FxZYntD%2FWXl%2FTbOg%2BrG8PZa0rvIK0NnctFMyg5BJA9AsWE%2BuUbnnqHeZfSUSVlb9PJPUW%2F5eqlgBs2CvFLKzN7fB8js63gPcS4dyMsUPCToGSnHRCXsuZ&X-Amz-Signature=565819202a19de8f227a3360e58472d7e5a02f5b3f90a8410da6ae026a695e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
