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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IXQ7EYO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDryUhZbk6o4cfvKGhwsKb0SA2rAMA8xSiQJ1Mojp1DBwIgeqwiqJpdy4XYVcVk5ru%2FzhsDoh9Cy3yyagagoKyKRGkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLWhKHmji%2FyKHL2vuCrcA63Q5VU68AYQVLd9HHdBzs3vr1nLStLmu0Hze8ksUTweQYCJL%2B8Ho7SWdiVugkI%2B5cWxqXXEm2X4k6mnUT2adV0g9%2F7fPpQhyopK08JOFdWgFKZlSTKKQuAn4kcDZc70HZ84RyjspUxWjswiIWFhfuzKku5NtYv0oLlcOs%2BFrp1QIGfp86YGQeaLYrr4WCdmKCfkGr814z%2Bjl8Ay3bsLwjzVWn399H%2B%2BOD%2BLbKdAJS0lLCsowSpagslCl7o4usCqTHX1usBz1h%2FQZWneD8l2DNVy%2FYDNwo%2Bur7uySvboff96rWOAdBbpoEN2XMRItaDB5QK%2B0OK0%2FAZ626%2FhoD6XcEq7KWX7J%2FwG%2B%2B7NexMG9MNJkNloxsLfnEzxLJBb%2FEqUrOpI40vVaHeAwrK71lKq7Jo6t6pIHeZtpDg0YqJeEpX0h%2B6rOyHrzT7otHc87MzsBDIooyXHSXbICJprRSbmHxK51DU%2BqnFmyl3RjimC%2BAaH7fMF%2FuShwY9Yes2nOWzeaPtwOhvb%2BQ7M79%2BsVaf7mN9dESFVdPOmJp1nKl4cxPRGkFer51MwiW%2BFj4x9BcFiQxkAVA0Ayp8W%2Fd4ReQxPYXgpNxCyFZxEsSdeuDb8yExlQ8CEwl9necJn8sDeMK%2Bey78GOqUB1EjpdZlqwymOXWCpxkkh9X0ZyQe9I%2BOkmiXjEdxjFGkymRqTBQj1mRS0oG%2Bz2d4XKezJyK04g10YfziRLpCpqyVI3NQ%2BeqmT5%2FOPF%2B1%2Bz9hIFP%2BxJoYmzTqyT2dRnWg0H8Ip9RIB6u1Elaa7X%2FLOvzvn%2B5NQLocb1JTnQgWST0IUe2pyT9LWMhgGf7SvD%2FFTvxVj8Me270B0JENdO1TDXvbBz80e&X-Amz-Signature=4edfb978606cf18fd3b5ac16f8fce145947c52a7601c8be1f73336532333e2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VGSZKU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3QibZ4aB0eWm%2FGAW2a5IWZCliBWYwMMPPMg0NCa0UPQIhAMd9fJ6cIXzdx7msSTWdoJHzoPU%2FVpbXldk1Hcw2c91XKv8DCEwQABoMNjM3NDIzMTgzODA1IgynSY7EXHBWyLMm%2BAsq3AMRdejY99C1pEVa93Q19f%2F4j0kgKDIT0gafpjMmryxCEkqy51s4tP0Rtk2vWV8YcxmTBGY3HLRr%2B9bPc2XKSm0HY7tIm4Rb3Uuw39VzLHQQI9RPhrO5%2F9pznCXsorzvLtMishyiAWKwC8xPQcS0DsymSN2lBeW3VAjwIXoSFWRMwoagx1er5AN8C101rdr4YlV2Q63lUZEO%2F09G4zm5JhUFOiV6wjAmeL6a1k0xRQP%2F5yofycbN%2FSs0GjC7ZkWLANwDhznZTqPTyglSsBhLtzu53HxyxMPopuocy4alheEL2evlS3yawBPYzi5Bm0PRG62eIr%2FMtT7UwRXbt8yVDZVejE6%2FUULlLoApVOlmCuqkyUYgqVx4sD926OmWYGML%2BJcsfyx%2BvLjLYyeAF6lN1Py2a4gzeuXkBiH0KDzoJOY3JzcD%2BMflQ%2BvMOr4sTtO8VZj7s9X80FJbgcszWnWOdzw3dJWPjPsr0%2Bb0n0vpGE1nnPr9rbaQMH84C1ZMI58vMULD8waGdUZtLEugP5NVMHj2yCLD7Arr%2BQc4HZ%2B9eAOpcATOmu7q7mNdHHmewdjj4AlUUerlB6eB0w8mnGcjClImHwrFXls1gGbe7ip6wSSuFd2Q1TI1s%2FVp%2BKC4JzCWnsu%2FBjqkAe%2FOUKBlqhztbyaiX49A7%2B96R4mRYc3QPcBFVyURs2r3uMqXPJ01wt6AtLPOsQHkP671RmTlVcNuNXd6XEUk4zqXBvPXSmgn%2F4eopcbqDDyug5EStWUPvz8fFv1sdnmxRrreFkgY%2BiZ0jVlhk8QBeFg%2FgMEybvG0tCnIQsxI8iSA40oPPIqp%2BnVM3R20ULYGWNt0aLGaQygzpQhQAj3uOPI1Km1c&X-Amz-Signature=a4444cdd5efdb66cf2169ecadc698991fde4048139f330ef6728776fe94bfd63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
