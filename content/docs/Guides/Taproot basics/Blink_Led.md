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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2H7SQKE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZ9T34CvMg7YiBGZ1TT42UWhw7t%2FiKnB3Ub7EpN%2FVKAiAOSHwqzss75uDE7FYuOwGeMEYa1ZUjvw58fHLWtAAn9yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMsciaPsX9dfpI9xWMKtwDlOsNwMKXcVKv4PjmMXxNWmI4OtSAQmrCmopXLlzLnb34mnCK4E063VJDNM6bbHm6qjd8TPxP3jcWA72UI9BR1aV1XglA9MWICWoH0R4nZahgpF2j7rd3l5qrEyhesSyJ0EQTqkHm3AVQ051OyfYsIe3VIx2nrGk1JA%2Fjt94BRk9iPnnd71lIvWF3uwGEa8CZFlpwuuQyg16FA2tvZor2UxVfIIMOXAT4iWYQwisUNyZLOmmZ71hLrhkPcmY7LLz%2FTOBQI9SWxx3Pp8bV3SNVBSEYcj%2BBuMaJvCnrl%2F4kkryqjcES8EneqURaNzXpZm4JUBFi%2BTZLcAcBGon18aa2TrKAkFWR%2FIhYpr6yz%2BNbdwvKxzjLUlL3FejhBPJaJG1wLwmQP%2FCTO37K9b%2FXSa1uSXWD9psUwrffIJecPftCXewI60EO19j05EpOLLHlz219z3uuZr97Gfl2kBLNsaLTCqyf9AcqhTHY7FyLJ3um8q8E1xOSzfWed9ZykE9cVjhw1FdALj1V4nnCIDRhLUW0FcbCYpLTYwbnqhlYfensD%2BzkPc83ibg0NnDTTwGV3EkegvuJ15LipsEHKnKix3uItfT%2BBEt2sjC8AtnlXaYPt53Pd93FePoQLwqzs%2F4w6KvwxAY6pgEZdjY4oW1INhj2OGAHCfMRrQzWRSwu7PT3QyzGYC82KyA0ZWNTIOX6ZNKB%2BnXGV1BPwxLxw%2Fk8VbpS%2B3Fu8VGK0VmhOJP0plQZI%2F4SaqRZdu9Byw14O5h0tdJmjq7PFlUQFQJpJWGNfejNUxvLFZkZI75u0POxeWadjBFL%2BcSFemRZzRs0Bl51Oip5jo38gObE3WDPDknwzIE3C4CfS2mYy9P%2FExYa&X-Amz-Signature=1ced2878008e8e4e3aeafd1f3efddfa430093ce8c8f4ef06f0f50c2229c8ec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WZSYTV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62v%2FOSSVe99A4i9ie2mTm06qWiCg44ngB6p%2FRkeYLVAIhAKGe87UeGhxjb8%2Fe5%2Fb9JI2zIgBoKsECuJIhldmoWhWIKv8DCCYQABoMNjM3NDIzMTgzODA1IgyAQBta9FUs7otuev0q3AO9nQC0GgYqTg9UjBfI2pe7O%2FyfRFVRc67S1ZOj%2BfMuBL63ZxkLWzq8HgJXojfTHqS%2BaBaiekJYuGW4QcbEwqljKj4Z%2BHIlpZDqfDLst2OerP%2FW7WsHKZV6qNEQfRCreG7xrcDMPHnuwssKi6DfR5StsntmdbOItAyoxRdDiwt9rT6%2FVoUSSqQaBwNdAy9kqDAWlGLh54YzkdEs%2FF1xxscTguDKmP%2BbPuXwPv%2FsA4MwX6iy2YV9D7vMbcI8KUlIr%2Bd1TQYA7O9bgBexIh79umx4INxxSOGGGkgVEea0FI%2Fe7ICg6X%2Fc5wN11a0qnfwb%2FWNeJZAiSXTkE6kR5ZXPe5LZSDQoSHqZAZcpL91EL8qWhvMUbBVoScoLzzuRrQGL5Qpjrmqulemo7VGvl4qxhyYPFAQIUfoktquKfxV2mpflG1capN4SOXruwuPhuCxp4lvu9QbQgPb6fs6%2FW2yexs4s4Foa3XdHknKjqaNWHxMAWebJZSSWfiFcuLe3xd0iLQPJi5jGCa%2BKrv8E6TaOrG64A79dfxgsVILnahXIQgF2iwuD7OKr6zvmoiPX0Psr3hi9gi%2BljsaBgfEuze0zrQ0pQiCqwkxfmAO7uo2Vv4skhc8MhzXKE5OTouNOuzDIq%2FDEBjqkAUgv66xv5750fTY4%2B1bwtw%2FzldUta5xKN%2Bufq007zjYo0Eqfo7LNeh%2BWo3D2v5LbjKvTtZP%2B9agWGA5V6b9teY1BoN8qSPPghYKCAk3hNtOHuc38l%2FKGtTpQvOkTkrp2QK0%2FLVRSBDEFIYxr37ebLJhOaiOK%2FZOjhy510m%2FLBjxZHOZTpo%2FTEZplhIFQ2mxGqwtDvirpiDlc3hwpmYMdYoZuf7%2BQ&X-Amz-Signature=ee02203c529b6eded1728ee472e65c33d7a81c7b849fff5ca4ba3dff1b62e305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
