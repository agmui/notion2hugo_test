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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBFBPEG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICaIxfmZqkBwIzYlzIox8o4GUpq5x85PrzcdrRxDgOoVAiB5xRXx4zNYPaulrVimvq8%2FrE6RVslaHrtKvotBZKs5Eir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMPxQYudHhGXbXtMKZKtwDb9hSyy6rfljWfxYYFTBR8uWULAPHMS4E0WfcrBxvNsQPCpIh0%2BPPw8UIvZBKtNd35lF17XGifZWczupAayp71T1x1B0CNxYB%2FSzo874cZxUmlPtN0m9qLY4wbsuQyycVS12oXd48PxG3QYUJfL%2FtEom42LG0TjJ0I95Mn9FixC%2B5xMXwMESnvxRJPrpZkPlUPBv0H5Tan8kKElnYtS96L5%2BHS9b9SbX9USe8LivA2lDeYwS6lSxW4W%2FCnHszlluqFCJSnEM%2FHWedf2LB0HAhGEVTVr6xLL3RUnpCnkOXlUCb9gyKfJoAfVXW9L8GUFnaNp9gR3GT28cxutfGbCwJZT3bHcX%2Fx1P66lMuci9H27BiIMdFm524lGsJ2zaLshihy5nUVUEfnkSjxOl6TvFxAJSIbC3%2FVJCvnGkUw3voFjrV1GonRENg5a3QhwJOgKUXUiMjSeROR5bJ5KGWPc6xlMdPM%2FtgKGd6B7sIJBWTbJUcWVrhGebmqieGLNKI1%2FDY0pVCjL8ti9boye4vnG%2F4AqlPpAXwr%2FDWPb1EuUiUngyHeSLZGzaP45HOy872QMHMpjkzNph3%2BIc09horP6S%2BHnTo5bYa912oqcTL57EgMmTQr2XafP%2F9xgka%2BU8wrvuWvQY6pgEghYwNFY0wtkKsx%2B2RVrUUrs0Mc8P35YM943Hdmm9exVB572coFquMuS0O4A5aQtUnGzM8CBbxcHRrkt947FT2aV6WEaGxhBeym%2BYuZGU%2BCcBY4DwOrjsRRZiv2KSr2x%2FP96nYkYdXfvOGDLkXAt0EpzAQV6zJC3ypjCCBoZAfUeFrPW0X0U2jPYnH5g0LkA%2B%2BUXmFKYMMNKn%2Fah2jRbrNUnG3HNe6&X-Amz-Signature=0ca21e025007fbe01d72dadb8c65d89b1a2c7ababaece265e8686647575621a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGU2I47%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD9XtzmqRnAAa4bz2XZfjlib8OqHAIg0iav%2FEOxoJD%2FugIhAJT59QMZbO6j706QJTpUF%2BvDZzfOh1bVwlCgKOvJjdxKKv8DCHEQABoMNjM3NDIzMTgzODA1IgxAVeD2rADPreGKbA8q3ANcUxwdA2u9dUhLp%2FfAIg6nhkbH%2BkxumOOlOB8xHaMS%2BDtcG1GMA5J7j%2FYC8iOg4%2BomMzg4yWuv4pcRmXKEw%2F0uEmz6sNuG6mXdo7PTnxS93z%2FSWC2WQeKcjJtiptTgAZNIVh%2F3OkojzXZGcMRtK%2F3dngFVPdK9GTHhiMzjKSaGKy4b7mPpI%2FtS8%2FFsfsS%2FJ0MOzyeSReRPr%2FYRkzv0vb1QOI%2BL%2BZtst9IdBn2IjHqqhQfGmqZ9xRgMhwWySrxyJllDcM0JebRG9G1oWSTnLeD23cKuGNi4h0BeioAUZn9BQdrRPuDKpUwrL8ht%2B3mgtjxfyH%2B7tnnfhxOqnh7%2BeE222MPbWDcyFH2HxAqv5u2Y%2B%2BrRoGhck8F0eBiim%2FEENawKPiZlNOP8bSsWhWw1F4G8JUHx826O%2BuCL%2Fw5wqK3jypqOUD5At9Fu45Y07xS1xZpUdXV3NKXyoyVaTgaf9Od1bcAeFzqq74XRd20k6%2BqkhaEr4kY7yMVO%2FTfc3rjzXiP88W%2BcZOpKzC9jbqvbtJHg894%2F8tkGBmh9ZqsFYvD6xBf88LVe9CUrMutpkqd0omvCLwRM7FbBJOuDWOrTv%2BVNzorBJ%2BO5TnOoPzr2keAR0TE3%2B2O4g%2FTXsaF%2FLDCM%2B5a9BjqkATNl4v7%2FhomOmExTPT%2FZ4DVwEpibvBh686uMR73XcT%2FSRqlReFF6X58ML0vMJE1CBdjpAQCp0d3px3k3ZbzolfRAbNE5GNP5QimTZYsOWyQkYow1dj8gAyh9bzZGzOsJ6BdkDweL84IWQwKKWcjw9347kQfX6ZuMfOTdddOY%2F8ykrcVA3oMGoK5kiH3WdWw8ZeF4I%2B5zJY3wRztmkIQ5vFu6puXM&X-Amz-Signature=56af22db70b9f3f5f2bf7aff29e4971f0252f74a723cf84b1a375251c565aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
