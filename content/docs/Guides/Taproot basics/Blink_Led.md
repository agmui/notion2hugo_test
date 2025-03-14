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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544GIDU7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8UbrZhl8GyjVt6Z4tRrF%2FoKTPNo%2FkChKpu8midBtutAiEA2trwRu8lpbxK%2FNk8PQVrujApmhlgT%2BW6WJL9uaxMe%2BcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY4U0bxoRDZH0F3eyrcA1BUpwZ5sVjcAL2N1yAeJE6Jvs6D11MOr39HJITyhd1T%2B4kFIw87%2F0tmC32cpuVrHHmbZId79VqKxKgliEJkXzErG%2Fb3Xr2TQok8kjpH2ImrQX1v4esSTN9zfHWGGmRjjwPCWOCIiWqCHra3YbGPDp9xXTCfhml9ESyhs%2BRAl6r%2FMzcZ7FX%2B6tQttAAiuTn4Lz9K5VnBZqnDk07qmW%2BrXNq4hxrJ%2FcO3xfCJcSSRSCFwZ17r5CkVhslPiA1R7I%2Bl73P%2BBBTWFC4igSWvlxL4yqFpJE3vUkVMdx4la%2FxS6ahPxdv%2FRnnmTslVo3Dwn%2Bot35AiSM2gVb0cx%2FHq851EwoXpiNyPq%2BpL%2FmNQkV5RxOzjj0KaY7d3WaB%2FNf3d3u4ZCArj1kOoCcdllVeK8BHtXLwvnHqtsBtETy4E95z%2FtvFrNeW9CXbbp4hoL0E9ila%2Fpe%2FzSSy1JVnXzQx%2BVJfV9hesVy5BCLctlqJ%2BiS6vAbm5s%2F0IgLY90UsY9Jr%2BFGnq1zLPV5%2FIZGJb%2FV2kPaTeRX%2Bue7ZRKtJpA%2BPZwt1EbfzIo2%2F5bxndEagPcd8VieBcpKgsWJDOvFJaITo5vvX3oF3Fip0Am6gWmoNbwsVALEp%2BpzNSxl7LLNiHWVzeMKaOzr4GOqUBlcEwG15hxk%2Bv5aSeod9%2BuCXJHhnosoJ1ATNyJokY4M5Opcg9GfnzTyVA9tAlmzGhFwhs9o5P1O0RUI1AYfeSxegPvzok7ZIem%2BbqRg4PddXDkujPeIdj6I95iVC2Dv32UhtQg1vanxxfmauZ566j1AfrrwCUsuWqLDedmOLEHIennMAdEz1dr%2FBQDcfMLp%2FqX5a6PqZ2d8UW90B0M68apMZIAX%2Bc&X-Amz-Signature=cc4df312b83ffff6dff74325e5fc03b5cec675ea991be78f914b0f195139c51e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQDSC36%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN8oypktZRw4mCi8bb7g05a9UCOIYvCjfVH2deufkMAQIgAggvvw9VCsIujvu5i8OqSjvIXsaLOwbI%2BjHL8uvEH2oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINKOWqEzJrpR17lWircA4aU0BT35iCx9tcbhUURleOSc9dSXBfHInql6n%2BX7IHCnFbkswtv%2F5WGgIx2R377N03goGUfgZEcnN%2FLqmX90xYgGCxw%2FxqN5QfgeD6rjiuh4Kdw8MMLwnSGY9WLLmJ5IcKQ3jhIUMpBAizNrDnnmviPQlY5TMKwr8VDRAAYpk1L1smPJtDXKovookg3Qn6dpsfxshIcCfMGCtQuo3GgztpRXastlcSfdcwIB%2FX7wGD3KgjY0OiBVo%2FLxNLGLEEw4Yigtxx%2FSCfrVavXEbnrGFl3RpPGsZoEyMu2pl%2BPuWqen%2FT5SRSWmKzwVsE17ODhEc1vr5lPvmMKMcVjBVf6K9rc421B1oMt43piZQKuga2%2Be%2BWbHj1LJrkaHjC%2B4e1BF1DjtsJU3gqhCzRDZIMQ270fw636gHNTcegIWUrPQl%2BZ8etMdFinQf2TBKxakxX5Pw92kfc5umj%2FdxJqZqz4FTGNHuNk7Fo2hm77A8VcZs%2Fv830ePNKXyej2YPunjZbj3D4xea7AFw9pQ%2BLgSSUyZVp8G3Opa4aujlL89D8yjphqx0UIsyRsa2ikSdHWDAizJ6vcc7G9beX%2Bt6xYuGMEGXgxx4av35M66PcdmwGxttbYSyRSGVhHVKnWwyaGMK2Ozr4GOqUBd%2Br9K2j2aQD9rD8m80zvhcd%2FpMhvAZGDaP7ZGmd1s%2FjxXxCm8V0M2wATORtaNec5YbMw6plaW%2FoGW0F69Eb4%2BElUqCdLnqDEZy%2FAOcyxywKDkIcdtIYT5QKQ8WKQYWAqH19QmsJkktKo2DbXD%2FcsXD%2BzSQqnybltcAu6Aqm8xs%2B0HWexckDvDCEUUdwyqIXQn1Xtrp1Q1iADP9XuniLuGgkFNGMd&X-Amz-Signature=145f09b991a73948f15f43030245627a30dc0db6166eb239e084c19626cbf6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
