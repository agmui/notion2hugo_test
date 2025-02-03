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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5AJK4FR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxycyFc2ee0ya5cCYpR6dqKkhVSa4DuC9dzC9IXMMwDAiEA6vqEvWJbF5nl93ciX7b169jPEIXfCQI52QWsBLap%2Bukq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDF6z%2FKjJDFWo1y2aEyrcA9jAKLF%2FXspifOv2tP5Lxq6yflAuTQUlt1p7hAp1wO1Pd%2B6ugzXRejbdIiJCtx5ACcYM9k02Ic57boV31eS71ZG7795iIKxYPCsQYNc%2FZN8VOd5voXzGmuff67nXYyg1U%2FSLZS5wvh%2BjWg%2BhutuCqvBW70QUldVIeYVbf3W0nko2SlBx7dEIcBpsX9vWqgfjxJNNzcisoPZhlvkG0HRQZ%2BO0WjBHZXumEWS9f1rcVsHY9ES%2BcSoDTzde0T9xtWJVaxE89UTAy7ahjbJqsBoOkYcVmoeNp%2B1IH3wGp8f0p7qCy%2B1o0tShuQz5qKePXB%2BcZpeDy0BloAjKWkLdLMaXmcizhnAs5g8xwq%2BxDewJg6HYRL2iIVSv4uq5zpQeuy9yq%2FTQby1jR3UMJb9eWTiZID0JGdaFI2hE%2FVgbcN82Mxk1O2gNVEcJfnkS22jBBwX%2F3tvVEAVyYFQAQ9mbfS4%2BHkWwOb6wEfdcizQxNOFJ%2BIsBYrtqjoBZIDNiS8%2BKcYMZ83%2BsZtEnxr2J9dLna8JeiCOL79aQqOBIl9qAGUX61JncZHbKGzF%2BuALwsMggX%2B97D64pqRUZNUOKallKX9lc1qRKxTNWH83zNWx%2FI2dcsfq3THCA0lwXZCJ9%2BFV3MKmPg70GOqUBoA6JsTfeD5C%2FBXgzQDD9RAnXkwiBa6YRM3ZTeD7FTQGCSbFuNbzuYXKVgSxowWV8m%2B%2FmaQqaOjv0WM%2B9A4g1YqKWfdsCREk%2FEiEUl8%2FUSJ5sfGHBinvHeDKJuxSoEZb4SEquxyxS6EsB%2Fboys%2FMV47O%2FS1k6DYKReIvRvCtJeLjAjIuuvuZHKomPia8YrltbWsdcIfbP2ezmHhmNJwNIaVQCG%2BHE&X-Amz-Signature=33515d58032b4132f7bd0264cff92d20c4717b644ce64efdc3a12d304e9c53c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USUHN53Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVfoUARq68QIjTiDctRPnx5vmSMnt38AfqMeb1b6cLIAiEA6WP2sbe2oEFRML1%2Bc2vfFDxJP7cf76OzUbeJGeC8%2FUwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIoK7cK0XQheyYv3syrcA3QtTbRmOp98Km9I%2BuS1DoPx0VwnDjfK5xdtVel3Ytw5K9QBCKsl4qL%2Bnb56V1DikACRNXeVl2mwWpXG1kZmolnBwC92cnj%2BRrDd1zAbMfk9BIW1SOYCUMwnLRCZF36lfUwzxxkuAHjwqnf3zE8li4p3Ybs6KzJp04xET64QTHZUZXsHzPJ1c76vRarrVZuj4z1biZMzhcjoH6HbpKJhJNpvPZc90KvKktJlrSmXsxE4NF4pNHouDx6eqqvnwp21IXhYuc%2Fb%2FtYZxxFLy2zEXc95BD3PitmuO2vNxilztkeeuV2lxUvTeKOsb1KOMyOoIiGwR%2FGH58pXF07Rms12es%2BflVagNrv4m6hGOGsMXvRdvLkeK7zNT64gB8DPuNyLzdgzuiOTxwkDyXgFENfpECEWYb56vH1b2BdkPu7O4%2FfFarKnjR%2F94aG9VTCWq8DU5QYpRTKH6IiUyieiRJO1PVik5LSUQ%2Fetf4jCd0EZiS497vQE4i%2B2ZDY1UV%2BGaxlXO%2Fg1wfC8yeMp0i8rGFWXEjDvg5Fk73grV7BwB1wKOsGlQS6Il%2Baz4zJoXnQS2plxDYZZr%2Bv3tJQGYxERJFNyHQls2kyTtKK3Yo5kpFpZ2YVbb%2FHzCH5dcCKGGKZnMJGPg70GOqUB02Helvbm5jF6JP7PAWHZ6KF0Xx9lIpKeFIf1DpD26uDUQ9NHnhzhLwqcI02kaS90duPdIHWrI0MViBhAnVbERM9jk7W7YJyyYhHKw0tWhIWZ08FWBHrqkA2%2FcAM%2BaAEjnsxSlOXsPuFDGuX5W9SsitT97%2FTYI3mjGwTjtwKrnnRoZor32xkCESqQwWwQ7s41pQc4dHy6UXA0PFv2WRUb6ypMqOyz&X-Amz-Signature=650a3a5b20bab2cbfc22fabe4e0dd184fcf6c0165bf256c36891b9d3c5496505&X-Amz-SignedHeaders=host&x-id=GetObject)

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
