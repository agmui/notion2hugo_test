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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP63DOPB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFOe2J1S%2Fm3jtXGy%2FytkDLHxlRe50AyQKuJZBQZL2R4KAiEAhKyDB%2Bsps%2FYmpPb%2FnxExWDV7%2BoaB9bhFWBBOP%2FhTglUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIjL8FB78uIDVuT6wCrcA4vIYfiSfLlAUOV%2BEcH1ySOZ0Jsr93rzJkX3cM0krfS248gtSeVj5i5OTo8bP5USIHBB9zqqSJrY5FILJnld84ZISVOdKLpCdVBQK7RZmBHXXuV1lyEHf7dKMcAT%2BbgLzUGBDHe7lI0mu8RmqeEbtYwUR8SLOc2uz6LoTkqgyZAMk7eH3Mo%2B8ofUIlVW22Lx8cUzartwMhJ7%2BhvAqKmrtdH1YA%2F24ZXx4YeirBcr31JmeYIqMfjMDmerL5PMh9nJrhCjZ0itcCSdgFsqp7g743HAGv69hXtV5ntpI3P6SVwhhYQxCnndphoUs%2Bxv5%2FmjwTdiNQYKEXUfQMGTlaL7Vfz6%2BWpK8lM%2F1bIGH%2F%2Fa6jd7zT0mYCz5k8DwWLF62yKOZOWFy7St31Ynjq6uKyzDJZTrA1%2BNQCtIZMIa6weqrN2%2FK94FtS%2BPOjdal%2BdQ1mRiwEzeyEMdTJ1Yb1IHn6KR9slDKKtJoDMJEhhTK3HsxEtHHGGZEYSm%2BUB%2FagkALlXpxZw7aDIB%2BmEA4GMF%2FVHxvCl6DNg7IpNxaxe8cXAH3bSrweivQfmfxajziNzAH%2B3rPa43yxtb8AfDkGkbLWhUoMvaiZa42p0eXK7%2FqTWnUR7SEceH3AOGPToBpGhIMLe%2B%2B70GOqUBsKLwrw95N1a597TqzKEnqH4eGYyd1c03u0PJAljMRtZ8ycs5o2KloL9s49QVin27Wcs6SWkSjUwAALYKbXmP920H2V4XDJWhTZTJduJszYpL1s3gIJij1wVfQ0Qc2JAGoXAOSCuxPc5rqN8CX8nIT66L5ogtWTjNz2I02SKUYGzFF7k1UJUcNDeEd3ndDfnWbwcsEtlkgn53mzJOUMYgtClt%2F54m&X-Amz-Signature=1c31cca71a2f758383f986576bd9454024c4446bb854077123ce1d8581eebffd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHPR7D6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDr%2BdR1xuxZoyFLuyspozes0v4geJ644DWWHuQSrJPv5QIgX8RMAn%2BY1DlKuQUxNQrAcI4%2FNWgWSZ%2FKY4q%2ByNLkYR4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC4l0oWnabPtIClnMSrcAwnDP%2FtrCv3MGO5D%2BZnuwv0%2BlFTF8lMUXaUbLqKHzOH3%2FVGwSFNb2GeOKKScBAzJB40Vr2XJ44D1UH%2BYP73%2BaYY0J%2BNlDA6EsET3squdrVXO%2Fm9%2BNLXYY1vked6BMYWttRi%2Be9KtSP9i46UvAABTrNILmGj69Q%2B29S2pvnt6dfk3TE13VmPkMi%2FAeRkoQKqKbGIlRrjNC0b2WnXyhnXB%2FfNeH7f%2BVv1Mn34kUElep592C3S0twPDw0%2FiNy8OEwoxjOrnr60G8aocXw1Np%2F7DeHZAjbw%2BcyeAdjr8bel5wc03xVuc5CC4uhy0FN5vG%2BXMik5gyJZHqcMj2QrPQk14c0EV2NAIvgJC94eEVdiwMoiiY9YPy07QM0peYl9kK6Na5DMeBwfnP51G%2BWrCZSU7KOmi4mzqmBziJD0LTr5Cq%2FTAAkVGePxRoaI2vvWNHl42tzdJJkntbIe8mUJDEVMceNlgKZNEslIl7BW1PBw%2BPc4km4H%2FJZ%2F19VtoeUimxMFag1COzoblOtBe7MzJoUvpvcgG95s0xXTbafhMwUY5nVmGQG5hOGbCU%2B27yNRxHbPMNeWk4aeskR60IHHoDAZVIB48LQXDAiWr8P2GTBnS6YTFNxYe8i%2F71XdmEOVhMP6%2F%2B70GOqUBdXmgYzwvWFVKQIRxvjOVgDaxIpBK6ch7AU25ABtNc6Qop7RbeSqW4OmKnKCuNX4u12lqVgg2AYrTxFPsxaWZOeLRHDqEsvwCusE9HahlKuMMNQ4BQ9uy%2F33ejaYc8%2BJPVemk1yM54EQUwD3r7fIQk8Ap800IsOW%2FxpMrAiF6fVtsJQBwFsAhQdZih9YLgABaf3cOScQOF7lQ3T5wDb3BsX5C5Jiv&X-Amz-Signature=69a905f331ac326181734408c64aa5e53f70f4c65974ff53a7cc1a8469fbfab9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
