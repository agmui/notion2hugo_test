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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQVE5OD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCNR3%2BTbvxhbTg2rshqsI5ZHhD%2Fe03wxbZkI3VWDVzsNAIhAOdkuETKhtoneIoeX1GwhcWs6nsrIXCGRcEacR1TKjMdKv8DCDEQABoMNjM3NDIzMTgzODA1IgwKhTgEtZDTOJhWfrAq3AN6yY4u853NbCUgA9eZ3sTW9mrx7B56xDyicTK4UUIpdCt3HUFAtMNuV%2FGyFnETIgusjBte7gOkeq2o6jZ2FPk2H%2FapRZie%2BpvCQ4xDDyR%2FS5EwMCPc5kP1ZfFaH2G3bQ91EIUfqKWPUZ1ulRWiLUx%2BoBPwhKtPz8iS0FpXSAHH1AZpsP2gMbiNsGGv0KuebMAeciF4q%2FIeveeiHvwx1K%2FlCbT9nEVfZqWFVUCJcGOBni3rk%2BcfBg8ciFbqwGPEa%2B6s91dcpFi0lDem1CLdZN7OEf1xpBGyuluH0KP%2FT11%2B4lUiPOwwPtf9GWi6V40kClJDTI7L1UG6FhgxvDnmqStuFPzg%2B7NAqr57lhB1alfIeE%2FM9hJparQLqagtNrgYFla66nAlB4Zwqm9KSEMXulK1E9GXQMa5D%2BDiGoG5KXdkcLIOosVVE9ebEqq0NYSzLlaYLKpWi5da%2FzUq6eCkX5QitSgRRiz2LxP7DUaFgQi6Fq1ms%2F67nM7bJId53xP2R2bW9Az76379ryruU2rF0a%2FIFUmVTOlUGigxopJkOwj5lXoqQpF9PAV4Y4kJx9h%2F%2FgBUo6vPGuESM5h1st1LI3kEB4qkhIFizk32pDnwiSStfnXC3j9YN9sazgSFZzDj6Ii9BjqkAcouVyEZwnQiTxXRt61gD9gwIaA%2F1F4wVxO7a0C4B68aIY4JIi6yUD5kye6st9qSvgbo%2Foq7YwwIGHSgU5k4sO9m9d%2Bo6gtdOsbHhQHtJkLB9kRyOqw0qiiejJb6dUmnt7XIg9z4M9uE1t2BkoI0a%2FFd2ITY6NCH%2FwgaAyKly6ACZMjqW3iPg5gzbTztjHP10L9uN4z%2BOCsbpwHHpbErUyrfg0yS&X-Amz-Signature=a090459295dd061d75d73cf4ed2a1f5927670e04e8e6de5288d4494b71c01364&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUAEQOT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDSJ19FumvC0fDyIr6y%2Bd%2BPgS5%2FVh1jWFb67jBbma%2FbNQIgMKM%2BGJOraIQqSu8GIGP3b4WzUmgqUaE5nhPpAeBZ7EEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAI82k16TLmlUusFjircA2lgT9VAX1X5jl%2FAZGryhcOqhwbuAuvsXrn4FcK26l3edoBt%2BcF83sITKZbeY2VRlfMB3jQ9ltGnIeXq0svUOMyXNniV0T54RZ7DQyIVQjFg31JP%2BG87tCVKY6eZnUAku2Mxsef5wlk1vOvUPtqFasPAVf0GgjyRiPmAKZFCUOyLv%2Fm36mzIJ9JTm%2BRRv8th0KpZe1ozxkq6HeUt%2Biqs1ej%2BGPZu3alDIg5Fj7AlOBG9ZGV4CK72YOQFx0yGfyO2vEoTmpqbCr8%2FE4dErMnxGbqWk5yAGSXyTSkfJtxwbCvVaexvFN3Luk5GAjdF48nHK4wpmcCkGpUwhmFmbn15z7WNUkqxzp7b6lcViqsiIAiXdfreyMSUAYV10qSGxdtFM1RdeQDktEMbrkfFGucJjXtvoNoBteIyRxs1WmsFbUswUllv%2BsrJz3NCp8vkOHevjZmWBtxTi6IzVttv2JWlaquViUxvLP857HaNCNSk3BpffVvReCuf0jgJVu6AZtqSVzQpkf6hER%2F%2FkgMf%2FZhPAKA%2BCv%2BTr9bMeFnV0VIbvZCl2URmzgOZbhmt1z7q8wQIoE4wM4mQE7upTTJklKRryrdiiQA8v0O3pYckLx5WMdeviNQ%2FHLcqW%2FpAyYQuMMzoiL0GOqUBmdbS%2FSeu8ngaYU0q5hJM6FiYbIHSNOpuQFttMeUM6hkLRYttmrexQ3L7LsolBDvXxttLIJCTDkPp6A4bAXCdozS7E1jpnn8mVxpGHgFK4uDM%2FctTtmFMwleLQUMTrFrdXS9ZbxfN1vE6xTUsOsphJVRQKRK1gNUqOs3%2Fp1iQjH6XaBlqLywg%2B1KfZNn1mQy6t3bdfZiX71UV3aqLPTAUcLCT6ZvC&X-Amz-Signature=f62769ba1eb23465deb12b1dc7ca628ca85a2649ed382145d53a45a9fa2e2cac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
