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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETKRAGO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfdPe8Qj%2FUcUy88I6cYVvNPeCEuu7pzQ%2BRUB1R0ma8hAIhALnEsXcg%2FJDXbGyjrXfA%2BnMOGXGwhagUhaP71Nwsq7LhKv8DCGsQABoMNjM3NDIzMTgzODA1Igx9HYuBJQmVr9%2FlJggq3AOXfzMVOigep81%2BKjBOnjQfp2xG7bp%2BS1svD0woZL1kvWhRgMNoC6M1ZZaZdU9kDdVD9KyRFxTjOCGakIuFyCBW0Qnk0dozrEMXwBSIkTwVBwbyvAozt0DMs8gMFmtWjhKqFvx9qRwh6T%2FfYqN5leJxnrjLQn7rxd4hnVzKf9i%2BhWGSWjej4hiEUV2BD4ucs%2FoOKfsiTkBbJYPwg7rBlfzsthp%2BJ4%2BuQRtZajHNSh5EIq9dwrSFq%2B8%2BdfKxBG5VRXCV2hg9QsXuJUu1M7bAdHGfuv3LNgeu%2FVV%2FyNcZnLk2lYBlbhMvm4cBas54h%2BwDIRGvuLLB3r6ZvVCIUR4%2FEf1BvCnXM4K5S%2B4E%2F8VKCPh1zWw9AY8l2EgoOaZNZ0D9S1SgW90Dg7r%2BSDGlIG5ohHgJ9B4q4LRhGROBy4GYnpGUUYq01o4c82VqJwdjX2qGOTkI3kFTEy9x%2F7y4eqW3cNtDRdLwSFIdlL%2BEfmt4xPFxHp2fMQ48tXQLXHw4lIyTyW%2BneziIMeRxHOwdhd5AH%2B9fng2mPn4DUZTuI2rEN8T5avmqr83QHVCXnqzKQHxIj7RmX%2FtPucT40fhMgQyuqvDpiSCGJAezQRVXPlzPmFV7L15BqpAsOItt61Iq1TCL6bO%2BBjqkAa%2BYELTD189FY%2FMOZiCIoCub%2FbdBecp2HWY6KQ0FRc5osg4ne6COrXi8D%2FnZr97w0z%2BQ1vqh0xW3Iqr5o8rXdiTwERnwzPZKiByg3P1sT2bQkOLlTVZRUi5GxGhhx4bAt8R%2B4kGqQmmGPKT1imtHM%2BiRlz%2F%2Flz1Kv8HCXj97b1O24TdVKNKbwCwnjtecrkBBpRnRy7BCP2qZMAgNiskoKWnhrMko&X-Amz-Signature=a841b7734354ad9c40b65f1fd79102f9a625833222fd90b58672757e0601da01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJZBBKK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCV5Q%2Bfk83GYRxerS7CPWd2wmRCMd0I%2B0gqSMX8P5Rs2wIgH43EdO4JzByh1tFthQe5CJ8tOEuomhoVBJCEUE5fiBMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE6mIZ3lwBG8XUzQgircAwzr8deTfbUmC77xw3rWqUW%2BY%2F6harw1OG6gEWLh1Zx8Uy49bqoVbDyE2LSM3JVHRZ4tv0xqNTbTggpFACIXpp0cOwY9lVHbCGDKWLD1ZmcTLNDhOSvQezCKjhSvTewTkjY9OpU52EoSRFpOzzlD54VLsM3uvlkYsLkD%2FCIGxQNUL7ZpB8aqQ1emsiquMEyqfQH%2FwX914VEeRs4wRzWLpUXDlBcuinFheu1safMjUjSKTEOmnFDBp%2BO56%2ByV%2FlUUE0nVjqp%2FWmsvw8hUAEoXojjQvw%2FvnAs80U1FanNiPUbe%2FJL2%2F1%2Fq4U4PRc9eG2N%2F2E58YFFgLiTMwyi2eUiYcBrC489imPjFND%2FC4HVOV5BVXuKychwq458D9tVnu%2FEuNMvPHh8Xeg7eNwARz8YErdmc1AfGhWNaY1JWXSvZ7r1ZrzEfRyJCymKI1iNRpg2HMUAgpBm%2F2m9AQuURLuNnyliIpPIi4fzzV4YMBuJVpj5EAf%2B0vHUUyL1yD40116JAd%2BsD%2BJNgA47q1KzYoybtN3%2BWAXPV9sGR093GRyn%2BD9NUWdHgFn17GtMrTMorjBklUuh3geYfXWtjBmiDjAE3LGOrPYKqUUMxc34%2BcrqxLTyg%2F%2Botd8rI1wVKsQJ3MJXps74GOqUBZt%2FJMcBJ1rj%2BajaaJE8EugkStG5AlLs0CmMLeRoX6PMjZDrZLPQ5kIAWfno59yJzR11a62u16O7fwjjIJjmkgSryxUNwy2CZ9fRDKwHem5TB1DmkYNXPb1fgSYo2oLX5mJ8fSv40sheovElDCTYPcP2cimZ3u%2FbWoMsHP2qt%2BRn2%2B9cSlF7gF%2Ff5dOCTeGk%2BOFo2%2F6jowC4SdOAkLFqgFnZuiXjz&X-Amz-Signature=309115f745621dae6d5e2cb2bccdf623ed48b3421578a6d2d96e88fdeb441b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
