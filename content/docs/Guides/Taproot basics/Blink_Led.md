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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN7OMI6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzaGiY6ckyvklCFEWycNo8ydgxqvJxkdv4eNn03wnXRAiEAhfGablKSDkHjdQsSkgo01LGHbptUfyHQbvx26%2FDxPMMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMkTHYBvAbtlAeyxwyrcAxZOiS11GoCUTAoDDpWuxdTFZBV59Hm4iJkRpyIO5PvSg9bgRlL7GLGLrxjeTG%2BgTrBWpxs4GNggAOaVHiVR5s2xjE9t2CGTQameuyuKD%2ByLj9Hj17rViy8Yjgjzu6VBcLn4xXxj5LSdqd%2F0H3nRsz4VwQscZwHFBY%2B6jBbO50dHZtzsp%2FjjU0N2F7M0WdLtddixmAR3RWHzsVnaZ5%2FN2r8MFy5jUURAD8B7KiT8rwp6ffHHAub7RFo7G3JBNvb0JMlmPUe1sYk91cL4qJKMjiM%2BOgtOTmQlAT%2FsHFRJmtyNN%2FY%2FWEeBvUKYGdTmyIvt5R7Z%2B1mfe%2BXMwhUCRSK7dBZzBpUAduzWtKLyGl%2F8y5XRoz4NkoIJfPx3N%2BjnKSsAzwaXYU%2FBtFjv867IGbFPWMLSS3pEKqdEfzZMszy7HbZbvPQZ1buVwaN1F5QmMuUVTgy68BabKxJ1J4SjERdv%2F4S6LgFJyyB6Ust%2B1rOR0NzGgM6STWypPGgQI6fLyFBLH7cQ9EE9joLaCTQTGtyP0SVpTXf37gyIXVona79k7un7byRie6GmLiVrnObRncFooWcJFMjf5lSsQxX1u8XnNZLi5TCgJKUhakJMefBmgfBd5ZjLQyfunrsTugegML%2FHg8AGOqUBb9DHOpzQ2iTpPpI4mL54VduFRqmq%2BVevUoZCWL6NXVlzPHezfYVO5mZU69H5KDtcrMJo3NN1lk7jTJNpCnj6gQvvCEqIa6oiqtWabV80gkYRGAWptygnVPBkdi0O%2FpuhLseHVdVQnumfOh1KY%2FYIUXlwqtLnRoXndaoUod4S5peo3PVY7WZ6xCMRBAMFx8iWNzUdOLkLogiGvSXI08MQYG6KPXXP&X-Amz-Signature=e3bdba011d8800b552fa433f14a2b05cd7a6392c698f40401c2a5ca515fb27ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSTSUVSN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSYb0TOaKrQftFgcesaJ6w5c7ZUzNnxknjaPTQpi9T7QIhANz5dilVqMlQklfQ7WoHNoDnFC4zYsKMRhyWxXNZdUNHKv8DCFwQABoMNjM3NDIzMTgzODA1Igx7dvYoiDPxLHqedNEq3AP%2FSFgCrQxZGvzg8PGvhPgRA7tXjcGIhVgdMcwoO32M15V5mKqJi8rFtP7ZibvB5nz%2B3PNJZqex8oqTpBMRQnKmwa7KAXDYyqhE%2BsayZdVL3mmxDDVOTVfyFr7fXVSKpYoVgM3aj8Q06buMTrU1u9r%2BMjrPbaWHVok%2BKPIGs9LDsYIqLchxzo2XSyLZZGuE24g9WXWSD29Z3Ku6C%2FHFRexoRSg3eHcZ1V6dJK0TaYk5IBsnXbCffq3l9bEyWSIOfaz1jf4i8IZMvwvHAtgzfqAV5u6sU9NnIVLPo6ds4DuQjmX%2BtTjCvxzA5flwFkDc7S1FOCFa04Qxng78lzMMGL4K24u2uZHKWNWDrn9mXJlmRMg%2BqmBIPbN1kIHqBVTW2pEWQjGDQelEQY2NkCwsDtT6Ua458zU6PVaI8hnLseHJf7oc9v9e%2BBFFICFQisKJMTibdk9QajEp4C%2FuZoIuor2yvD62jcfXHqsr9AANMQ2ZoBWQkFgbIZpCCFvZTLUEhzDHNdR76jSyciaC%2Fc%2FQ1MQbbneLKdHzibX2EEqdE2a0s0YheQkkS3Lq%2BpDRkj1IKbFM3M3dlAGyfLbPLluVc8qU4MaRbBKwzN69UkNQhNl3alRFgXOzTiQ2ogWOLzDbx4PABjqkAf6Vd9x58lWhwhrPfHDeltmE5z%2BvKbUDsJupYaVG6DMbn64htl66HxQYvJZz5jUvsGs6X5twGnOnKVWXm2%2Fvvt9zTxCe7%2FmbsbF%2FIXve9Hlz1P%2FIrAOOnQtSalJsJKehU2OoBdu3DOYfGbA31nE5LA4WP3U5Nn5XcGrbNOaRTaQJDS%2FYhj4zwIuTBqweZ0na700a0HNoFxqwfEkgkINVTsff5yEY&X-Amz-Signature=bd829371edf1625bac74d3646f37ed1c7beb8a265dd787f5052e603f5cdcd197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
