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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTV3HWFB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuwUI952ycQg5cJtzit9Iz753tSr5Bw7QFh3psziFbQIgCRecvjBgU4H9tH%2FcMuixSGYmeeCWR73eC3nl5f5LQ%2Bwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFz%2FITVIHdKmZbT94yrcA2ktl1TPxLZenGscTbl0BpXnh9OrHeEASfp%2FMCPe93GU3n4ZB7cNvP%2FmBbeXYSAowrERYprp3WNTuiPrUYvBXjLZKXZOFUkUFJkwCmapU2r%2B0XeavqQHxuE8%2B0pJ1xKJG53vUawCfrNxOvLMySHP53L%2BFCTdqKRzaK5aIXxOhTr5cMuoal%2FtX%2BLa6EOb6QZaynMv92e5IwXyqJxP%2B%2Bz9s%2BdM5rW39JnTM0ItjKXGE1%2FPGC%2FYZhgFusjBPxIJbFF5McVBTyhrGMPK5aC0bfF8mun3CfidRXx3QcvWbumfIhY5iitKGvVmO7QEJK5bsdupMcEpY5cac6iiMYd1BkBJaY7WLMjMIr4RYTQSVl3fiaAhGlTzF58%2BCwRLFPP1jtRO6lfD7KiF7FM8CBUHEVft7iwAjltSg%2FSzyOHYWTW8veHqH4AtdRT7VKsCkt%2B%2BV7pLgtvxXMxzcbrMxXi%2F8onKZRJkEs0liO2rwIMBZZ1rbFaqy1ZAS5AoK8aXAOJnts%2BL5ikDJ6uQBCI9MZPcsmc9ULIBKp3GjL9oNO1jQs%2BhpNdr10ctLLaWlZZ04VxbVTgfRncdvWomIz5J2ZcdbIFNgIFa7zdHPFrPeblVMojFJ50tJxSOtYVineDe0yfqMPbeicAGOqUBqbxNra3xi0fUgR8jajeXFLxHxi4K0usFA5b2Duc3IEiBRrdH6Rhl09B0za06%2FDQUTvlhrIuoYPL1X9kk6TMOaiADG6zU%2BV7Ar%2BOgNP1RuOQ6jRUD5nGYH6SnGCtQYppl%2FmkrzUfCG2O7oR4DZu2KW1Aq1%2FhSXBVH3lqpH8AFoQp0xgGu0b7qgMvODeCXCDdHCfX52A8aWfoeErAKNHqT6eLaFab%2B&X-Amz-Signature=e1cd49424662f30cae58063c05eb2178eb32868b2493eaec1279a74d53d2dd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM7TM65%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmVRAK7QCG9U45vGZOT4d1bKZxJKXUnsCK95dgjyafAIhAJASMr%2FfJfBc3mXMOX10OldyqsplBwL5uri2M5yl7jB2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzT53AZSNBWcr%2BTIjwq3AN8Uo1RBhUtvvd56evxDL0DJZbRMhOu5MgQdT0V11rSSkKwc0dfJwBpiT0mDz9VWess%2BgV8ierNEhRTVEALLXr7zAiVqkdjRmYDy0Mj60LlKmBUPD7ypJa8IYEVQI4UZ9%2BnL2M77f7ueV00bBChog8JyVy6WImLQYZ%2Fn9CnP1xGijzOtxukLsruaasH3vF8FLz89UKzZ0jybQ12JY0Blo43H91D4kpUK2foP8cV5CnaRH8LH37ESd09RyS0MeywfAW%2Ff%2FoF6Mw0%2FemdaTe0TN8xB8MwTogo%2BIepJLiN3MJxI3ictylMDuKPPexJD3XovfMI%2Fe%2FCzvE5JFwYPlGGSbNRAXJsHnKd9wqHgLNBe%2BYB2K4zW40cTJfzi8D43yXWo6HIK9sS6ZXR66gLVspR1azo2UL%2BVKKdbjdFY8HWlzhkAcpG%2B1hdJ0OtlTnIMbbuCAudBmoL%2FfHwISI81xtTAIhYtG2ZzM%2B9MgPTleUl1t6KsEnUX%2FQx7xXaksvbgcK3cjVC2K6CV0PtAI6hirhkkL1LbQ8G5iiqLgVR9OIc3YyL7p4T5yiizV1rDMZH%2BvoZ48ZUIfLaNiIiL3PciABA%2BFnF%2BwSGvq1iB8rt3Jy4mo%2Bg6jEyfBGHQDZ8BBAcujD33onABjqkAQ9FTlHrJq4UzZfs3%2FlV%2F2PtflNDDnQ%2BEl5NPhZILqauqCkhB1Ddw5PSJuMNyE6pK3NFG2st2hL8rRhF6PnQGYj7In70xTx%2F2x4gG1jsjNqbroOu0U%2F6w4Zvy7D8nqFp7b4inpXBLj1VCFVn6ypCk%2FJQE9ywrLLEbDxMEk5%2F9hkfMESya7dFkoWSAavg66B1YKGGrBion8exGmlVR4wM%2BAEH0SAH&X-Amz-Signature=05b3aab9ce23cea8a7ca6c983f0baafca36694be8de8bc10c18af5f0aab99919&X-Amz-SignedHeaders=host&x-id=GetObject)

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
