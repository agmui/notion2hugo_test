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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCJYSYV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBI3%2BXT%2BHUEWvYzNPzz1H90VcaPpCgRDYfi2O7xg9FAiEAvz86qCwAGDoU5buVoel8iNOLi5eyMpoqk5ktAGc4hOEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYPzp4oHlvfvx8a5SrcA93ZKl%2BqrjKViRA3OKrtZnBGD%2FXz2YcTVzB4q9r0691bOyDCXPgK%2FTTUvRZVXhnPrlrHA0MkJ0dvCzn%2Bw4AjejUl7SYNZ%2Bsq%2FhLhWwurY83KgNlD%2Bqc7EAiATHCmltlOCWr%2F2MEv5TlmrCVzb10oM0KhfTM38N9a99XXVg1g7ClAszbEgYsZjnLwuGGZ%2FFqtESyXukJjrG5meeAKTCBxS2SbQ%2BSwsKfM%2F%2BUJssPk0uCGscDmSJSt5jct6eCI1IIgXfS58RTN%2F7PWnLIj1LEto6NIZUWS%2BexMklaaN0FVH%2FG8oOvlzt%2BMFepc0zeG31z1vRozoLka3L4RGSmFntZ%2BlL9c%2BloBWhml8jApc%2Fb7yOBLuIUjGDI6KYzbEDBujah5TGxW4U5CLccBGpQ1bfYpNuy4hQDGcC4BKPsdB%2FH4sY6Qf24UOxtQezj6w34yv6Xq31MQSL4Ym6qvVpftTkoTeCqEB9%2FAgxKkSjkyVM%2FWEhFpbAL5kQCW2BIAv6hgqwSlFdCdXKbNbNoJaQTAWMJYDJXfa79FXXsR36lW2wit5MPR%2FYKviLFTQGBIkEyCClXsfeBhacR4bS%2BOH2RWBEGTBzo5E4m0eTYBNpU3cjbzCI1fyV5bitdUOOS4kTKvMP7en8IGOqUBpmg4NDjjeypcKJ4uIiBL6T2aEBHygY%2FN5MggyRvJ%2FmAvE6mRrIFJ%2F2Cf7p%2BOQYTxZx%2BBV%2Fy8r9x%2BBsx%2BtYVRFc9AI8muIOMyvMIenWTkMOTSCvqxjYoCLtiDvLM5sL%2FvZnDHep6QuQl6agedaGI4erIc2sYEgVroi3qJdOmXpos6fXVUA53CrnPVhIZNKErnm25cMnr2W7Wk0VHDhrSNm9DJ6OwC&X-Amz-Signature=8d3fa8e661fc5c4ed9fb76850d95267ce84c8639cf74c43ecd794964b03a9f66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7AUOOZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUqRf%2BoMUcp%2FHJiktMe44cbkDcwgsTvebrLAhyfGkS0AiEA2KgHAoBARE3phleFRuascKjAY0jQJ6X5GUYmm8hQ%2BIgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZyYDEJUc7SUgK6xircA1hrJFVYrcexoKxPXawgPVJvtKpst3j8SB6%2BjGrLEuLi8uKUcJjwQQ%2FvY1IFnx06sveKrc%2FeSaX09SQLbipdXwzm1kIfSOhvb0gsueRDsSW%2F4%2FKNl77dxqqfy1VftjeXib%2FWQw88iEiADwFxTg5jT2RdvnXdqjggJC2JINeNrnQkXkfrlFLXi6Z%2BvmNIiEyV6V8FYxyDFQH6SXSd5kjJgpGdHHCSAHXo5RA%2F0RhlcxhM8L0YVECSCuQ8st8LLu3Q2Zn4%2FIxetKFxYhCa95LwbhucMNCSj%2F6Zg4caWUggPK3ody1DpJUfamd%2B28pCjwfBuIjWWJLQK%2FZXAQYvUEzv3s5i5yEy3REZm3aRbjdomIQQBLjbDckU%2BV%2BMncYIkXCh11MZ4OMknUmt8yxNxZVmyPmGheosoamoOw%2Fnt5WPilg8tX%2FG8xV4diBwrQOkC4Tkiu0DP4xThaVtafpjQUgY%2FiT%2B9g8ajatdva1zyQ4mZvZsITaSr64GR%2BtrsyrzCO5kEYN0WnWaPZTfNNspeqOIqnfL10oJipFjn7OihNhQhPD2DKI8i%2FT0vz3%2Fp2akfQnNZ9G1bW2z6HHMMHz6nnG8hYjzxNjym4Ayww7%2F1JDsElPakUVzX44pIOCch76dMLWSoMIGOqUBZ3NoBErF6jGYxYOIqTin2UzeDm9PbhVgN2IkjNr6AdMWOkI0DVCei9dtPI%2B0mdJiZlydpf8lOfloPPpmRCFrl875GN7tLoBTN823jAZJR7GXweDfvrIIPa7CX8vN3lELOubof6oBf4%2FTv%2BuXIJ2%2Fxa%2FFSPrnfBMb7dDtjtLNP5WgOwl96vd2Va0yAor%2FQKL%2Bh7iJEr8L31O8SR5X5zDsUsvGW5Tv&X-Amz-Signature=2f8a4262afd896e6ffb5eed2bc5d1ebd4eec2f02268e817cb191def540f6090f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
