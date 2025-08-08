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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LC7SSDR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEyuKx39HEC1TKx0MPfaRHTPx0NvOIawElwRpJ6jFwLgAiArR%2BHeh1Yk8EvxRs4y0ahCT5%2Fi0lUfz5SgdYAbpXGMSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1SObo6iHD4DVpWNMKtwDTs9WFZKKnG6vqhUWgIUEYw8vGvfm5urVMBMC%2FUr9nSfrzOxzFugjG7IV1BHu%2BbAl0YTlV1KSHRTWAYmX3BfI183JBJNTrWZi316hCtW8hCU3gxTFbf5KkP4Mh9eTG3Srnrrm1BsYepvuMle%2FZyNk8CDAXiEj4b8T3rPR2FDUcrJKuu48KGxIM8QiJw0oZyJJUB%2FDWABCqAOLz8xt40FHhBWtgN0A3H65u3yowXTBShdKLBJ3gBT4T7SFGn%2FIVyXMjHt3CZLPhHABUiWjynOq8TeETRUqGKdcNh5uIu3wiAX9MUe8%2BGgokdP7XxkkxqkIl5%2BhBt3OTiAR3lhVOfYhixxr4taQY8HIZhIqe%2Bui%2FHOjoRMvpeY1MPtjPsz1JOMzC9w8zDs0rjpFuGFGWCOyKJWc92YhiXqdV2Irhhk0Fy6jFi%2BM42HdzduzvBbAZIv5wpQJIN%2BSEQOf22HWKlReJmtbKg608z9h8ZeE2FpHQjMO7%2FUMMWNJGrIA0edPf3gcr3gVfN4L%2FC3c%2FtCNmxMl8o0tRaUQbv4Li9gTIWn9fECRSY8O8TO1UBSRebFPrzb7ZdwAMuWO8HRnr4N%2BrH9NpdhDDiL3QQ6aKNxnENeXzFp9iKry0Hk1lwjoR9AwyLrZxAY6pgFcHEl45KaEbQ3uWqaRo7yRq%2FQo1n%2FYbDG4PMtiuOQo4Y%2BR0bh8SIduMoqPshPZoQTHJGqL2tX%2FKHl2x4gZN44B1%2Fen0vrSBucESDoF5I%2FUZzUq8UJD3whtlTi4XbzWq232pqA9V%2Fp4ApxwXrD40Mg17%2BFeXDjl%2FAwZFP35Exd0A0KskRFZEXnbHm%2FKhzoKrs94UkQCQOjm%2FLXrR2wgBGw1oJvN5o9K&X-Amz-Signature=9c579922a9eb835d8be2f5912a411f7dc283618955361485366a175398dd7b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LDIIUY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDrRroCPSOxtcbcsFNCkr4YiFMQGeSUpwRfyGnG4bA7qgIgAOAM54D3J3u%2FjmkhUZV0Y3Ak%2FXiBm80g7QdyRs3TAEQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCGqhYL8tNr2UvMzCrcA1yy9ShEsuvq51MuPuV2lBT2WSnI0JuKWH2jU0hL2T2gej%2Fn1yg8eN9tOIaohi9AM958c6ocLp08tyIyQp0qXOmRJvCHfmFhhqC0Qq%2F3Nuvu8Ao8pHAHjJtiZ7LV2K6F%2FseDTudb%2FC1mQwJj6H7vzKXISN6oy1SkWZJMtLUYRSHGKDbAggeW1VioebiY2%2BYKYSE6gKRi9jlZEyOmB1syNtbLWznukDOc2fe%2Fir3rQ%2F7L%2Fzm717JdSn8oPMco78dxTm83fi65BhDObb8HTv0y1dbr40XifIxI2xPTUH6EVWtIJh38Zoxe83mgYDmAQPrf2HDzMfJeEHGjy2zoSbt6HnB4p9XCuzLJSxBxSb%2B83rnafLxqOBAsgLRp4kHo0vFkIbmwjw%2F28Pup7XjkBRYtVlSs%2FIuJuNNIySN5dtayD8AFAteEfJBXUUOwaV7rirf4MX0AIbBYTpplo1aMoitncBKHHIBobenbVe8ctZhOr4q0pSNrJvThC454fLdVbudA6rKJQ3YVAgn9GBrSxWM4dKxaFd9nkKx1tPVH9BzS5QrnmHak2KGFwdy7OUMSfdw9eHupkK%2BWF60agZMFimLZxubsimfVv%2BnlBn3J%2FRagAjcCmaNFWb3xSf%2BytohsMIq72cQGOqUB5wBTJcasgp96Ju5QSgkAknB9%2BaK7An0nwM96m%2BsIbaBSE1is4M2uaxmfuS3q45SCwlp2Psfj4aYXpEebjUt5%2Fa6V0B3b82cmloMQp1HHAP0NBbq0J%2ByNvgsbpdt07jMZeTSpmcLaiGk4xuM2YNOovOlKBEpHoPnJ57xzxYLhoHyZ8NVDEMZHSD90WMCSRAZsIw369EC1wYxpTiCBG5vNCSmiMYA4&X-Amz-Signature=a2979e5b8806009374e8b6e9858a910586ff205ba1d566dee305763742b48bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
