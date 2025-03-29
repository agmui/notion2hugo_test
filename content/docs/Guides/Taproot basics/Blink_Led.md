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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLQOEZV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHEVkpYJi5vOHZe8bJ7ijWMtTy7oVIYvprerWlSN%2FjCWAiEAy%2FTL6zdxfApJ%2BZrw1kcNCTEBbdzWr6K%2BHLkCw0cjSQAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIzDwCMWCuhEgUkkxircA17BMhdyW7BrCebUdAQrAGe0ksUZ5o74eVqn5x%2FlIIPVHzQiMt9f3isyIbZdeJgMTYtCXWtDPk%2Bi%2FILBJau8EP41Oh11PXrdz5ICMMR7kFWnylNBrisDCBRnsnDTEGcpv6zgIsZ8qeF4%2BYfAcynM%2FEKE9ccamsLQCnaokIZCz993e3xdnfD72yo902Yz6F4XtanZ9ZFJhtXo%2BBzGZ0IJQCFRf3woivdjjS%2FZI0V5A7BwY%2BxZDxuUHtFiblBTWE6%2FJct%2FhUfHFWxkbNaX11vRntxcFM69rN7bcgh163H5z%2BgG55RVmjlCwvgLiikroRDjjq4L2eDa%2BRvgMv0T7fGO8zJyAuSKf8NSLm4jDN8mXqzEA8nR1E6QaEzo5lvFTiiZPkVFHeraa3wknOCUnI0py9fa46j8gFpK%2FUPsjp4VN43VDbb5knFCrsQ00tEYp3G7lYIv5JqGyii98Qj7qntp5Ei6uXyLy1n7K%2BBPC8MtrYN4F6CpMpu%2BEOm1nOAJVu70uahHjqUIaiqw7Wjix%2F9BHjee0kmKCHpwYVmySDchhM3TwWMedF9OFmhUTqqE5lQa1bnKwu82eGfI%2B8VzOk28QW0pKGLdmYNMRosjnFMQG%2BGOd4IFaEyVPsd5y67pMISgoL8GOqUBEk7zYbNxnLk89rCz477fB4CsTNP25%2FKxFaiNWx%2BAQBdRvs1l%2FxemcF9CxZv8N35AWk2%2FLGg62e3n6N7wghrJSMGQ76ruEOG4%2BxKvb2oO4sqNjE6SmFCKi%2F7f8uLhCVS2HuFXr3LmVaHuLm%2B9Auj6ZkWyXa8Zuk%2F%2FU1ehamnIzMjk%2FFiTzaT%2FQb8YOBlRu%2FiQocf6EXLi1tNLFMSidsUkHNuMcluf&X-Amz-Signature=094ec0989991837af9fb6e1408bbf06a8026ab093fe53a1ed245d3ecd8c90301&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMFR26P4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHtUbczC%2BLsr6R8LBQP1XOihqoCaCQFZGV%2FXRbLgBhRsAiEA0IT%2FHzQU%2B3LVGD5jsQXwCXyu0eF27R5yVtL%2BzAuCZdMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDG8iRMkOxgBHS1QNxyrcA8%2B8pQs8gaGDKFKof5USxuvsOHR6Xo25Id03hsCiVrnflKZlpy5neYyW5ANhz20fGs0cHzlW8hpN4NDryKQe55Rsr4ShYn8jE2XacK%2B%2F9dODYxYT%2FEbiC1QXqa3R7G3%2Fc1S4tonD10JYTMrZX41NjOR72yInn%2B8LYnADsuBYCBMo5tSY%2BsLYyCELdMHPv9P6fWUEUJz5T2K0QqIGVakigkUdxELIa8BFo7bDQf6TVMqaeNQajD54gqB%2F7HBmUECN%2Fhk3q1ZdlgcrTQcPwL3zCM9vQjdt6NTtKjmMVlkmxp6Bt%2Bf6qKAZ8ZcT5dby%2FEdogo%2BmWaz85uetcESa6A2yGwpqlHZRIOdS%2FJ5pKLEwGFlyQ4rKMGxzf1DtPtEZq86kaAHOegg4Yt1bQ8T4JzmI4meWdHHCF8%2F7%2FlQXsAC%2ByGpfoeeHpDAgsXzYgu2rykDEwF8bLxDYk98Pz1w3s3C57NFsC0wu4HGktjgHsfcp1aYZO6Erpx%2F68hO%2FWBpAyZvMRqDHZfZpEAXw9OaMhuu8AGNbP4VTMsNVGH4PCTP16e9P1q1l9EvqYkmSSZnI%2FhMWHFikGjLkF1ix1pkpiCIyBhcRFyIZHS1tXrBlB715fC4Rf3EDf7EI6deJ22ZxMIKgoL8GOqUBz9exL7QgyaWwIteDwA%2BltZ%2FCPQCdT5kzXX1BZRjQU7G5N2KtFvPH3AQmUFIPv8kPr0mYw4YFeBg%2F1laqImOF0BaUR9jv4YZOnkFBsgn70pWfEdVddskl8FXo2d2wM%2Fj83iztaBt9PVLY3MVKdCROn1glwAAUy8TYNiFTlxdHIXDvYIVh7nxd437AMiHD3K0Spn4o9SR0usq3voTysRiJzw2b6HjQ&X-Amz-Signature=bf4ec180e75488fa2c09cc24fc3c2f64a04189d23e7f714a2dc703f9ac1494ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
