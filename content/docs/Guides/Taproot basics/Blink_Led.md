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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IDBQW7T%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqgeNZ9r8iM9Gti8waSj85J%2Bc3nXS2svBqn4iCPCd7ZAiA8jd9hkYjpi33dloNnZXlFgo4IpLUqZ8VMosMO2W6WjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjBbHcHXPWVTQnHwKtwDGoY9i4khD5RHrN45BjcXq3US2QLjjpRAtB1FbRAtW6cX%2BEueUjPLExt4gUPjvmQ5GSUm16mrmXOqIa3Uz5OzFxXqXJ9WOQwHsq3KAyIJ3kiXVWcKAx7FS9KqRrbyGGC2WqtuNLuugqF%2F57iwfRD81Y9kDho8LGzpiFTwhDvbaDIUVRw%2FpGPyys4c1%2FMwau6XvKDogVOBlNFxmWODwJrr3fAqpAM3uzsZKPMb8szMML69CXtydBbd791I8Bln4FyQ0lmu7ZE1SOMtpY33i74rdNWyRX%2BQ%2BruWwhMY9t5z973tEV0KgJ%2FkTmW%2Fpx6FUg8d30POzuKIzC%2BO2S3qoxhU8depRx%2F%2F2RnYiWfFoEJn8DWmZSsqkrIOAE8JlvFtztWeEEb0qQKowl0R%2FIeQgMmuBQ8zUzCvo84qdntG8y6ziZCv1LDK%2Bw5GXkXgM8ZWkV2Xv9Ql9NgvSc5Q3l8mp2XCquo1CHt5GWLf%2FABW6udUuTc%2FN0Hw63JpuY1bmOEtfMVUzBn0nLKnxH0aVSbtwxMMDH5qxBil994%2F0UQvRAIMHkf7lS1OYf%2FSbeSmTAgInG0BBbVdi8GLSSe1FiGDIser%2B%2BYSoC9pEb3RZMWDvQmuBZSToVcG0kpYL0mk9dowy7zpvAY6pgGXh74lx%2BQqB%2Bef%2B4JqG7S9e4QMyGWbwTdArCZ4buS8tBuQ3LzG8HSLOZOwmobANm2hRvRDp62asPuxrj4haGd49%2F3i1CM%2F%2BgODi8dPQ5KlK%2BCJ8kBPCBVUsy1tpdJMZ0MuWYBU%2F6NjdiCnkHbTw%2BqdI8uRfEYXKdNJtDwpbX0P5eodobBJx%2F8MtWBbzl3w0jTs0Vgic%2FS8%2B8xRasLolS1uVQqPXuD5&X-Amz-Signature=31864905075a781b0172caa764af9524048ad07ec2ea5efc25e30a9960049e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5E7D2Z%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnv%2FzLqgdi1xgHcJGEX%2FCqKtr5bPVhVezkHwh8msQ85AIgLjbqH2G7wvp0UklzI8ibHaE045Dm5%2F9g9H6j8bNRKf4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxp5j8UeZdfcLZyqyrcA9BA0uHoraBthsoDYpsEkYLdpGm1DYwXfWVX%2Fr%2B2E%2BLxs0MDdiPUjNm7cWbuabIlSB%2BvsEA0KHs3habgmpvn4x8DpqkljXPzdempGwuIUZlsptb%2BaKoEQ3jCo7ySsUpbxKcqgQGzw8UbZ%2BYfZL7pNTJH2idXygipi9korObX%2B6RP7Gv7qN7YCAf%2F4K29zN16vPsjKu8EVvFT5t7vkAc%2FFd2S0NdkrpVsQrVuRHVtnqznxPSnTMsLB2p%2BF3oLOCelP6iqmejGlstJZwcfex3BCRnIOOJwiYEAnXY5Lo32mj%2B9alio6HKgIhXBu4XoRFjEy8rXm0RlicqPbnlPp8E%2B1gjhIOLHqi5uSxo25%2F8prJE9aXBZ5c1mcA6liH1jlNyH0485D%2B5TO15p9sFGwoIKboy6f%2FIwVkQq2RSYS4y2GXLiETUOyqips7FVE29y9DXX8JHsGUPpwiSurI5LSncqvw8h4NsK0XmBaUWlCicd%2BEhFAoMugPqJ1pmr9mxvGS3hl2kBEuTitab7f9Sq1rUnk30MsYSed9LajUJVERb0X7rxRSLmvoQFuSEu3%2Bln3aHlFPuva7e47j7JenjnDW6h7Ml%2BryCx7GjVMN2brvLQk4AnadVpL5iVo5T9rGCeMJ6F6bwGOqUBRnnSYdw%2BGuMoiqTwYIXSAnMGC3RTs0H7yTX1dx7SdgTcuq458P15JeRdv2YrVXFGHbFo2YxXNY8wpP8DtXnVr3TEvwzHtMONxt0%2B6SPTxC%2Ff8CYI5d7QIORsOeQzYtVFzpxM3gwYMvNX6CPHMdp12LzxmxOmXqLSfJMVHd8%2BTAqXQT7P5PQKB2Nb5dQku9FCq8mMolliqusteP840hD%2BDcKpw0vE&X-Amz-Signature=610baefa7c34db995de8be406a8974c35db264e5f6f63a1a79b5a681cfff4fef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
