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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLZP3NS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4SumYVL4qlGQXjnDqwea5jFGqCDKgSHGhSAJjhFybxAIgdVxU6aYpOzKrCEF%2FtEuEvY2L6SnYMHNGO9TQXwpSBmsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAPDjvOKsyfyhfTdSrcA5C9CGq4t3rwph6WI5C%2Fpk41HY48PuI%2FFvmYc%2FKe84sWoQMkIb6OpoKvy6frIvzktScQHkv73svrEZxJ19LywETlT3zaAsfHz2TWfzOQXM7PqLvI67VBZOfkTjuCRLdtK0OVLugwea756xcS9ytR%2BxZ%2FMifYHooYyzkDll4ZgaOf%2FoJFXPgoHoYlCLp7VEt1%2FlN3xoQb5xLqQ3bM27SW5Te4X%2ByhiCurAUEV8aZMu4Xg2UJ7q9VP1Fq49pZULhchlIarsP%2BqFZgxHcNUdgOSkMa24xmboBnN1gmeYgVl%2FWWOtba5ReTQOFV%2BWS4hmmBQVKZhfWyjn0GjT05XGGEZ1cBB00MJGRCjHKoxRiMqu%2Fy4oOayF9gJ5ewDGn6G2BrckrPtTyvwtB1K4%2BqvZBhnffGa2AZH0pxYD80d4q1pALdGT3nQgf1r1XC1kJbpYn5aFd8EHEsVeWNHLjxBRlrv%2FMiK9%2FEgsaI6ORcuCYCS9TTcYj53fqS0Vlb8kHPWsrfP0%2BPT6eguAOVWdd9Yk8%2F0VPP%2FVxDvlsqhLYnE92TXr8uX%2Fsttw6JsSp27iWHW140aGz2EjUzdyjYmWG28dYsnrVM%2BGSqIZOT32nNqCIe8lKNcxei0O1qbigb7Mf9YMN3E7bwGOqUBAjRLqJd9ct8ychPPelFt7M30VYByWb2Joi2GPr%2Bgh%2BanDnUvS9GWkvMXKNNhQlqpCLivfg6%2FRTOiVCMYA4JaS3EPA5HZhAta%2BvLZVjnJD7rfZHO1Al1NbudFuo9wMRg3e83596lcv5twb3WhpSJy0VwQ3vc0z3%2FdbDqU2T69CqRFmNwsJ97P8WPaK4nRlBl7o3C6XNWXoxbVhBRimeX3RNOFH3xc&X-Amz-Signature=453e58455c70827b0f8fd459d5a68d97b4a6b9c81b486d1b729f8585064d219d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6WIS74%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESpXF1Aa%2BdgDaSyYNLW4%2BZt6kJ%2BizpPi3IvTYbLFOr9AiEAqBuzFRAYg2%2FX0OXnFBClTO1oXjuR0kxBJi8GaYpLP%2B4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFkJoEI863%2FqBQZHyrcA69TBYCrgKv1TBfJO3dHFpasslda4%2Ffee%2BOoc6of776dOQFTBf9qJjcIvEirmUxcUnxwEwD0tWW%2BI0J2gFs8iguqKjHQtKqwv8WkpfuF19%2Bh9V2C2jtCikLdQIFubBNrpwcpsW3uuRq%2B676q3y3%2FsjbXTTKZZrnQiCiFMnWp9RdWmTnxPqaGi0sm3JxO1KfjwejuR8WHwM6GO7%2FKL81ObB6VRF3AGt24njeEDHlL0vC%2FBXfyT6AlfA02FLZ%2FKTu0JDVEc2DpQx6aHrPHe6xnHKRt3g0%2BhjKXIx2gYqJWUBSMaSOAvv%2Bu4%2BwBv9oGs25WgC4zecn7PeXcOaH%2FEAz3s8lP4s5jLRY5CHisDyV1cDJhnXQQi925KlgScOBV6UZoQFqXCB5b0WJuSsojNX5gCCKRHCNppqN0HfJH%2FFtvhJbY2uZme4NW%2B%2BEtE%2BsCEzYNbsVVvNjQVwyc0W2YiCOo9%2BPwfw903QVC1%2FnR1MZHWp7K5vItbFTcpQphyu%2BfzOW1CfkN6z4xL1ecrQfD4j8WXe3bEVAQBLK3w5KjsHQMZmcAJHvHYx9jS3pTaWIwWvE83Ht79Jk6RJ3Xl2WAUwiYOTcxcRi0iMN2XeW6EvzSkEyS1sWfvoUod%2F4Gf8WFMMvF7bwGOqUBBOkg4oWJURZcliTsGRhj9gTin5f%2F0nFcZl54MN8Kpp5ESHdVOFo8sUEC%2B4MoABQ88Hc3QjJBVZjo8ZYkgkhNegS0k8jiBo4znPQa62nGNdGn%2FBzKBrQlXu7jQr52DAnHTtfrOSzv6HCulUfaEF3udhHlRHEEoHFyUKOhWBwPBic01Ow%2FX7lkAWRdVojW67SxKbf0UczJwlszFgTAis2K11IkWFdX&X-Amz-Signature=877f63876756157fee6591281a21174d0f9ce9cecc2dfb7b2edfb481b15c97b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
