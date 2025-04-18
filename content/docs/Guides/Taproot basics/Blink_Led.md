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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUGHC24%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbonkeawqU1mCTMGm%2FJEvFD7KrwF7EKqHZku2TY9l9qQIgElFl2Ss3qA%2BIc%2Fq3m5nCvZRJZkjjya8n9uSeLFaB1eUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL60AFoZfnzI%2B5DycircA9EAOb5taKx5TlnV8OW3T0PIIEONhdaytV2peHdYXO1L7pFca1QmtuweSJPRZjn67va8bVyRxlYwTbAaO24hIzKKdkOAEVU2f4CWzahvMj7pHdJh77OBHaFsAx0D9zQrgnWehjRHISLYhZIMAB1Wa0Oxqp02LQu%2BoL7iEKWOj%2FFJElFz%2BhBay4oVFJFJI4jYydJGvyzq4%2F4YJgXcR1nS9VuCY6ahPtDF0T6raM%2Bsv1I1mXyVEaZKNlwXCEyuJ4cNAihy%2F7cw08p4AEvJNglufvCi%2Bpvf7qg6ca1ht623N3XzmWoNS8KGAXy%2BrBKnZ2PeCADVEYqJEnAYMZHVq8Hf%2BGe2jTq0NNZjMshe0TwDq3%2Fu70BCIVcxEwUPoqO%2FkSYB4WU7RWWvx17Zc5XizGJQfJ0OZ6eNacIv%2BuTCknggo1nM5GT%2ByvUPuK%2FtJdxjz%2Fg59NKfVXOlilgHq12SvDBYL4%2Bn3SfZy3JLlq4m9bk%2Fgt1%2FOr%2Fi9tjYIJA6BTABp4FDp%2Fg%2BgeuMPFr7jhkeW%2F%2FmrU33zkbDmGv%2BCb4g33NS1EvoO7COgQeYxLXGL4eLKb8HZHLrMGpALHkPqwIIC80PThHsyTsxVBJ%2BmwEyGasj0BBEYJ3Q8sF46UmAs8XDMPSRiMAGOqUBUamc3o0W%2BreHS%2FHA5QmEAB7Z%2Fp62KPO6DlTMsLt9bPjFMFAUaWIGyk2ph8dyRk6ifMtwNESDJUZtDW67tVdB%2BD%2BOzjfsgGo79r1IM75KaSkNA1LSr1ogqSRKkp55MGlk64xsqeXYfeCOZmzOlyBFceeuEwS3IjDpFIr%2FB9iuoWqK8XNxSU3GXrHc9j8v6y7UpPrLvcGr7VfgfgDnTjGTh91ArfoN&X-Amz-Signature=c9931568b9b8d2b1b15cea58e77fa0efbc44d05a2864e937b3aa70729c6f7ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D72FLV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3pwXuk%2FnHeHNLbuhcSv73GypWGwFJxH%2FbzfcHe70i6AiEAhRx%2ByPcWqhqHdRrOjoDtTtPNo8dR%2BTAC7zF6kSGu84Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGtL9b8Snw0%2BazfFAircA6K9fNG2TNAjLVgWLCgxx84hceyI5bxkbhYHv8UYNGlH7Xzn9R5XT99QxCJRlXqLxDbA0MZatTJk3hJDLqQkQIvviqd%2FaK%2BxMP5L7Mg1Nt%2BLha87z9D1VPmomz6HfdTN8ltuUojD4iDARHeeVagbzzmh27eh%2FQ%2F%2FyGTq72pwpudCI6yxcLwhh6YB2AouwR7wjlk%2FXquTeLfOY4Y6CabyHvI6%2FzuoAdsxDFeYf%2BUD1xgnfAeu23Sa913WFw90sByvmGpNLoa1DZPSCK0tW8pct83K6njgv2k5yRVufJ5vR%2FG8OVZsCijrZeN4eiKDJXABpFwzVohG8U4CWqXT%2BF1fzzrtOS%2FeNJCGLAp5YpYcNW98l7CKNzGjXRbV8H0NspRLE1XrxpOyJJ%2BsrQDhS1nRvMWVlMs5a3JIa9jqbKHUVZxj%2BvgCSydUloUHW%2FWUgR7TC5E27pPWh6GZEEhJa3NgnSJUvju3Qq%2FlpaCYiTpnqHjwn6HtEhEu9%2BgaPFSVaTC52BpZpg0MzgQMqn2g6FIXXZlv2YJEGTGx2eYo6zAqSJ0PMp0aUByI4W%2F4wWond6tc%2FeNnfzo9XHLuqC5X%2FsJJSyWB7PqS861zI7mSYf%2BRn8WzVabUPvqjNEoOYvtKMM6SiMAGOqUB5o0DgMduj%2Baeuq38KufwOgM%2FPYebLlnLTE8k7lgqa9DKS%2FA%2FVs%2F%2F4XvAfS8LrAkFnAPJZ0oN8LhnMBdtcFGc0Q%2BvVZN6EKEvIx5ohC4sOV0lslbnpfFHkZgl1%2BJ1BjuSFutKO%2BYvc854r04W3sL%2BjV%2BX96z890J8Q%2Bb0sGozaYodNhmsGEthKgomJWQDwbHT495ShB%2BqvufjIivvy%2FoBlp4On6XX&X-Amz-Signature=2222c82e9d34466a254fefc37c8d06c53a8140fed145dd9ac29fd4f5fa8c46c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
