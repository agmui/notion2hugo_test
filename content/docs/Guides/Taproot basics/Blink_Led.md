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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY4HHTL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtFADDOwjEX%2FNxX8fKPagyADQIv7N7hEu8lZv9JlGPPAiEAltFHrJl6sSlV5HHhm3JGGX%2FEYwI1zuuOrDFVtSHWT98q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFDn3lWs4CL9yALmRyrcA%2FKVQ2YuPRT0CvtTGb3bGx94%2BdN9jzN1pud3dMf1nC7wYF%2FXtiGWFnS4yFqApFs8TnUNxhjZYdmEG5ZqOf8%2FRay7WkNN%2BszcHE9Vi45jYU00AdSr8HNFKrMQzxRiVvFKKU8mf%2FnBxDl7aDIFlTutKVcpB0aAPO2C%2FNmMEXNhf0DUiz0%2FtKTLSGLQPj5nElNBanR07II4%2FsHSLvmGJX7GbghuyHzvrOBhr7m%2F%2Bc8ePylLq3vJmilouXXdpqqsLGk54U4bRRJ853Sef%2FTcHCyYVO36BEd%2FhkdE6KlhdZD4LxatTnGBZ6P%2FfhD79OyA9rweC%2FiOKzjU3Ghrze%2Fu2ClvEANOAQeGraQ2RDjKntzGAJzu2q%2ByE6wBqkeQYPrqQ%2BTW%2FZ9FM27OmiNSaXyFV6E1rfbbrVdw8m20%2FtatcE39bjbHYAgvc5d95mkQhnhuhgzCrM4B1ManL2JEObdpGRgjr%2Bh03yLdZv6AAHV%2FEtCWnamxYo2dztfG12DE5cLxq2OO4dlOauIYJ7oFrss7puq4pH2z2gRR65ygHOFvA98imOS4RGGU19lWPkSSDBjVYQTlkgxFbutDA%2BpcW0GKS2BmskX4ocHYcm9KfG5MovBH1qadx9ABSOUJE5lC1%2FvWMMHh1L4GOqUBrkfptfFp9erhBwzidmhrPdjk%2BvTvALQjayXVPMRDi%2B%2BZO6HF3qsZQJWNt%2BSgY%2FQClR5wj94TNRlCiC4Y5d%2BQiA4bejx4Q8m%2BIOySKR1rJ7WEwGFxiXK7OoubIRa3rBIkm%2F06PtWZyBVZGlV4VsalyskmeXIHwflSeXQS5bg8hSj%2BswR2lGRGJZfdrNSnLHyiTbWOrZ%2FY%2Bd3Ok4ZNTtJP6u%2B1xms6&X-Amz-Signature=4f1f80afb819eff615b8e113d794059feec3b74e0c0612b2b5fc6a1657259e57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOGLGCW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYj8dtj83qOioyVxMWHuXmObhnwxtBMbQ8ILCYQE%2FlrAiAxyqxfPTHctuLi40w3I7zLYdDmxAoGNUYOMOAxQJA1lSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMRi99FNh8YCbvMabUKtwDuZGjWosWJFqPM5YA3iEyfT9iVa0XBVxzn80yrS2fxvIS9op%2FLa7UDKlopeAeU8r2Jt5xeWjObIDiFe2Pz63yRkmi2vD4WkiB8x%2F9%2FOoAPgwIsDHYfvO9wYRDma%2FM6e4jI8rJqhvdhtCyKEolCR7F0hcq4855nNySmmMeP0NRRMyQ5CaYcPF8zedDGiNeFCL%2FDOhY9BjFZGZ%2FRj5NeEUedd4nsFs1LTDHsQ%2FVwAd8MsMCGxRpvyLLja4%2B4Q34eYLeur4qnP4yQ%2FcRG%2BFLVJtYOhs9y8pN1Rb83fWCQWJxsXBDZ%2FWpYZinMcnvyCkTyvCn2%2FCCOiD36W6gAymeVYJjqhUMuL8r%2FRJ%2F3YDoQLWkR7JLj4bDLz%2ByoT99UWHRNA5TOGUSZWhwdYrg4UWlCv012hr4jPaFOBUfAqstz9Ja8f9m7NM4GXaS%2B%2BqijownxECGlzirWBTk7xdjh2XJhlI4Qg5rjKIOT7dDD%2BI%2FmEFzRPjHhaRaALNvaq%2BMHK9vYqKGOg4Cpab%2Fb1KaMbj5kunZH40AsZDYDS%2FuRECRL%2BVoLoYSk1R%2FGqJLbDVSTDexS3DaOMLCVvI9op7B9PG9%2BNdC2QgdrtUBOPf4O%2B8DmkPoxLp9r%2FePU%2BFOoc57ECgw8OHUvgY6pgFxvDP%2BzMrN1BvPnZ97cKUqVtPw%2FNLiR%2BjymfGSt5rySXunQVlWbP3Yn9iXcH4%2Bp8Wv4VneghaaUN%2BsUlMMoT3GfwmERljyVlImM3vs8YV02bXlea5jNPHk35qOcdwDtzfmcHXAj1kvaw%2FE1FFLt35yT9PXwmht1IxgQ90RTKf0QsAacluQLU5DnbEy9%2BdEIoHq7b7dmlKlm6bo35N6yYgl%2F2Jvg6zC&X-Amz-Signature=ef3ffe70b6d34152dc230ed15fe3d2445014bb84fef429d712a754ff1b25ac1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
