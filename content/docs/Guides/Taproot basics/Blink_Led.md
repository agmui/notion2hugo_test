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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V23SI6I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICla%2FL5ynCe8fjzDtVASc5i0dqViua6R%2BkTZMxoR8DIVAiEA%2B7mQebYQ%2F8abH0WG7Cya0S9Yn3gD6TIMDAWYH0CIPGcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQ5Vz2kQdgKNbZtwircA3L9aOs33ri7QDgNfGOX1Xg%2BmML7S1xWkw%2FbhUm4n5472IZVoHevOrLbTvyQhW2n5oUMpFZTHBTDWbMTzQHCdfpYjv0FoeuU3eyfSvjjt6cGh79Pydsbx%2Bit7tPK26kDmTRYAmNM%2FYu4ofPphXo9EoP7lDK3mZ1j%2Bye5Tm%2FqS%2FcWT0oRJgpowty05%2BKSVByAUeQeNsZsgbriPR3VdcPptCT6fhEFlg4yq8Dp2DeN0MSsTkz0HKxkNSY4%2F3M%2BNk%2F6mxGC9zJCPBU6EnOzXusP3njkQIypGdysBDOzeR81ouqyMDafVWMckPUDEcOa1k0EjXLihFOjqdu2JSo%2BC1BfaqrTHR%2FezfyGorJ1%2FzviYU7uM3AwchAXRH%2FugD6u1LLPe2lM6uSWWeYH0q1e1xxeWDjcLIAVFwOjqtiACOq40nMQyQrhBzrKgSxIg20ajkuBbg4TQJn%2FJ0uIg8vQHfGFICJNkCaWy0JPwQxu1v%2F6%2BzzuATABDtS5Uw7%2FreXARHzDzCaHcE%2FUEQgqO1yT%2FqHmg%2BVhbKs9GjFhEEmtpzSF1HJIDbhCNAMH7M1B4FHMQGzkp86QweTo2ySWa13mgEVHeDAMEo3oqO8ZsVftmzlyj88cyrUXaKPfniSFdgJpMIPMrr8GOqUB6aUOHGiXR2MDpRGoxTeyj%2FLqWHzlfqwMtUtq0RWFCwoPdHayq1ujQRZrJSOzR%2BvxTF2u0HQj%2F9thKxKqH3bxmhIr8NJLMXXRd2Bz7tOHVVu8WsLXgAsQalO8NxqT9pG02fr1Wm7aQMGMeCu8%2Fd%2BjDPzmpa8rvC%2BZu5QPl0OaLDprBppd54KCcdrMZMonOP9z8dIke8yQ4qQnJHETj8%2FoXLoGe4N8&X-Amz-Signature=a8c0d5154e6c2c182db77ea79d840ce1563fd4c2c79f0ea28ba4268b1cd97cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAKQAV3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD7OMavCMkasCUWQEqDLV84sNgbPWKDgv05yC8wpcQL%2FQIgMX4Eq2g87OwMmhzdenYF2c1SH2Ujl6HNkpR3T%2Fejb1YqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCNtBcuZy7%2BJTFlnCrcA3a4IbK2DK8VvY4avGYjMQ%2FfI5%2F10vrr6jcjNpm2hfntp8gL6feHsZpoVnz7bfisksser94oqP03hKj7wQ9e2fBYYr%2Fr7avj4KSSAcV65BkxWMOa8IgC717jkw5AvaAt8Hb0%2FtAoSizKbcICNKFNqJF3Tlh0Nc%2BFJFYkZkcWwZ1m3p0JAsa8S2%2BCTKeOXQbt5FUKQxwmx3j395kqEqV17GOrBfLTzwSftv7zrdLgBlpUcCt9mfRIygJg2BB2wQR6kuY5i0PRg57cr7YD0QWLhFIaDMsALcF9Xo55gXto3vCMBipXFh0jk0fo440Rb6FzI75lZ4QwI8Zhw%2BsJkh0gKxkDSUjFQ1p1pQeW8PWhTna0gGowqXagWZkoyWp9JQBYlrhkXw6W85aZn08UoT4zS4TeM9cs0m%2FBAEMtQDUdllYkCUejV%2FfzWvaRa%2FPLiDckLk58xudcFqkTqIDx6o2Qm9VpUp4NddWb5j1Z5EPDaGTYiFeeHluP1UIpQV0E5uWToEwmzr8367EhVOYwErWdZJqstqC4kjkLknPliJdiyaALvt%2FdZ%2BH92Jo5EkKfD6mx7U2Wx81%2FDPmd7n1z6Fcko5P%2FYZdX4J9ow7zYa5Bh9dqcQNAmgp9F1utle6PMMPXMrr8GOqUBfTbin9MfzZt203dJLS7p9ujzJX4UCUDegdACfdYlEbZYqnTjkJOQnQC7LzT4SNTpE3khMaLxmna3osLuepn%2BORQ%2Fsx0hE%2B2MRgJQYNW%2BFV0WL9Ko5EpCmnMUbyeb1oyYBafd3DgfrOZ%2FG9I6Ymm8VA%2FCX7pIdcSXPh%2BaTR4b5Kg%2FaBwnFZ9jkcMEjf9ipjRlQ%2FWRBOVdaudtkX9XaunF1HMmzLda&X-Amz-Signature=1a259dc69ff515adb72ea8c3473679ed039c81345890ae2eb4dc096a46ceddf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
