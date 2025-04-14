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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36WHBKS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAQbFFPKpO6JimnUGGAs1jzqjvWaqX6dzB1OGZ50QNMAiAnDlMBvXTbCdF%2FQRg%2FZNan73l5S9w3%2F4tNNcBsiXXcnSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMM4oaepeGVi%2FQbtajKtwDmRaQBz0%2F3k8eAHgHYjpeJc0alGRorZrDdNMs%2BK3Lxy2wgyZVCYYdERgDMo6kKg1ICKWhKVl3CuqCHx5zj11fRwkj5vjA4QoURqANUe8VhzOKou9Ip8zx2GCxGiJ3HpvQQ0nI%2FgRkr4wKZ9qyDi6aKLPh632DY2WUzYo7FeMeJ%2Fm5WRS8RB9pVl%2F0z7dIh2X1shUWhYMP5qJDUeIt%2FNf8DGN7e55jd09l1uLV9zKaIePXi1qeNwhyHQf%2Be%2FfPT54UpG%2FY31IksZyyO816UzrJJ2tQhh0BkcIAqCkLQSx0SFUDnGSx8LO7PWDZAv%2FUPcACOlU6I4GjSDdM1s4FqBLjuFf5Ahv87J0bO07%2FB1hTinCvF1KsTgmS5%2FwXlrBkufryuYLWdpO5CmWrtiH3SHRoMxf%2FBO02FLr681vf477SAe4BEcJ5fFP5IIQ4JQFI3mMIf7mqz%2Bdu4xDH20xdfsyfHqYATquWDFhHCCPWsP7um3GntuidL4oQ2gAR%2BUuUs%2Fn1b7mGEEgC94fh4Bk5%2F6iLU3l5B8BhPqF0jugtIvYQelkdsAv5egvYxFUFLOb0C3uR%2BN0z%2FiITeBJJVaICuo8nHg9qgZGnfocMzaVlNOsbESDHFrxSNoJCwLdUelkw%2BsDzvwY6pgH2livEgNULKIPZlitLoT%2BUiloesZe17Y8C2v4UuioV%2BFLmHFsF8qjvD9DmljV4GNsaktCZb4Ec5Fqn7y%2Bx%2FDkdlvsdtuSoTWCO%2FOJRp1NFSmfdKaaRpRQtIVjMCEqwMBljrsHZxYjO31jFY7odSr9t7KB5Q3wlxhoOgfQ63NXIl9eEAHSQ%2BxbecV3NeBL9wuO38TNHxHgWnG8RNRwYvhFXz9g7pK5F&X-Amz-Signature=1f3ff70457175fee472228ad1d5f3822d5971a7e1e76003ccb7a0330f623afa6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJ7OQYH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDak1N%2FOGfQWc0j6Uivpz0%2B3sDVJJJoeLjNDTGEXzZQuwIhAM%2BJ4hhu1if6Io5zRDzC12C%2FB%2Bu8ZDI%2F1VpjAo7WQTjWKv8DCBMQABoMNjM3NDIzMTgzODA1IgxONPwf5p48duiVqU8q3APnDrYS4zLf2Tyn8GAOSn%2Fx435Ah9FsyJj2mnMdIhGVK1O0VwKLSCT7gZ7joLMB87zXUAwmLxWwN%2FpjhC57q%2FrbvAmr0hA8Z8YeAgeXsa83kEzWCjttTH99RfFHepXkIxdI5VnTeD1M2C2BCaYebrTjh7W9GmzMtUNWzGM3Ct74UY7mK1dSAGHD4CjFL5tS1tYHk9YISA6wOBW7NQZttGpprVkeaN4RSCy90wtRuS0zuYtYd9AYb1pJ%2FZJ%2FCvMLVcSchVnOFGnTsR1DsMoOU8X8Ryp43BgB5YO4DTq1QfbDreVo03dgbq1eccaBTMX0Wh7t17NPUOEQTER8Z5G6NeQzb5U0amqhQ3wqmaOY%2BEV%2ByeuAinbPcEZ3RaoRLSAEKcvdU5eQOCJG8kyCXK%2FffIKdKXfGPtXtAuk7LvDCzvJWlesVRouwnsUM8vp5TX95732AigUF6qea1XVwxneJdek%2BV6p9j7swBhzsON21Tz1Jk9IhLxHXWgyX12XGfe%2F86GafhEItL%2Ff5qUSLXz3FrEIegcVcXrcj6MyG9xnHsnUD4vXWpbG%2FPHJnUIPAUx0TuTwLWPAHPlT7J%2FgK2a5TjL4rggPlGR4M31M2OWybwK%2FSlmT1NIKow3%2B5qkqFaTCjwfO%2FBjqkAQHTots9Z%2BDEoWU%2FI1NpgMdvPjXP6R0qPyKkiTa4KqeIR2ljciZ7P7in3JTWRl3DjWmHL2WHYutuzk3NNsMaewq46WF%2FXHEQlFh52%2BnROuzNnGOVhAsS%2FT0LMxsPnEo9GhF6TbFZWGYT0iEEo4ZDwO%2BqJ7PYrojI1JGsD%2Fbz2vyEP6vHbPy%2BljTn4XVSxS%2FZpaor4ppXaSWTn1yjKTvbSxbe%2FI9B&X-Amz-Signature=9e62708f53d86dc0c30dd65496217b3fba8f07730e13cf924c2ad93dd850874f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
