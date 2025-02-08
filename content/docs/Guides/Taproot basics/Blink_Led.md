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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QAX2OB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDvH5j%2Bm7a5T4g2wAvdTlCeyGtRoPsAfvL374fPjSWvlAIgD0uZ9bYTEwgxjPuCz1B0wFGKojQXs%2FdwTw0%2BwES0m3wqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWvjMWbIopVqiC8ryrcA%2Bm3PpYCTGAF14IOguw%2BJOr4WZWioNJb%2BJrm2IaTcsZsjI7MsGgXAHrWdlML7wuAQ2xspi3VeqCQVG4RTAhT2pe7paHfkppchOvRxp22XEZY1Iyj4GNxFGaHTr2z5pwxcSejZbCjlIubaoCH8Mh%2BjsTzod0QULZwHdmA%2FfK%2FuPaf4CyUQFreL8R7pXZ6je774jtkDLlORjiPqh6eZjqOjkp9qttWU3%2FBlhpez%2FucIpS4DatknLfIKBBE6H8UmB1MUnjiK%2FqDtN%2B561bD0WO4u8x3cUaJwArI4j49ffRfyL1MrckzIoEo%2FYBwEdLTvKcCNVBn0VaHVTyU2gWGFmVc08Dsp7LTK5LTw%2FsfMKwbTK2NwSm%2B06c0M%2FKQcJzCZAYIKYCbhvTsMuBgAFALgvX2HMOZc8x8jEOc%2B5%2BRqI2jsSVF7y%2B9MAE%2B%2B%2Ff%2Bonc5a7dTNyrX%2FXcVFv%2B60Od4FzLREraMDzgd%2BoHJ7eWFVB0PTGZ9wsfH0wFUYOVed%2FprtoLUl%2FVfGzBw4%2BLwd3GvFgpWdQOAi2HqEY7a0DpmsYm%2FmV1dKvP9B7zZUNSOh2Dd%2F70cwomWMbHWfEYv7y%2FpqCLy58RKFo5XfXKEtFfCu2XmQ2Ufu07zYPOL0JL5HsUyMLjwm70GOqUBaPbP5FCfnJLSY%2FD0T3jIr4K088piqcUivXSlNsathcHcEohITMnEQZw9aBg6j0esAwDjO%2FcKLvDctWm8aw7DCyxF%2Fb%2Boxv%2BOX2m%2B9VNkztAi578wcY3G33e1kolrh9vlI8FWGd9El%2BrFrhTot0f%2Fzz40D1CL1m87WdJA8MwdkzpSpSphUT%2FZIW3%2FGpVAISUKx6lwdcYg5r7eatWR5h2qD1iY2Acc&X-Amz-Signature=38c0265a8ffb7032d8251115f1abed92370cceee45ee569ad4e30c5ec6a3d9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBR5445D%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCEdw2yYn5wIyRkpw9h2R7oeCcCEVGAWe63LBPgdUYncwIhALJH2sah802YUNZYvi4JsCwdEZWh0r2Uto8UadcyUnLAKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3PFm0YlGCpz%2FF%2Fw8q3APAoJlfOKLOv4FRM%2BdOJSlX5apUOzx%2FcuPWjPtgROqkDaiUqov4uQqjNorH003d9PmGLyiIuxp9DSdR46GicLm3ktrabcwByReHDDUnF5YengXUbOQTBvXwfiR7D%2FF7g2PdvJ94wH25cdQ9nxnOShvlALb%2BiM8n0Y4oDnFI9HGwz6VwjwpG68ilG%2Bq%2FY7thv65g%2FHyARwDie5JZUlrWjnDF%2FnFrPQpqX4TLzj2SXJLEeEJTDXOxxx%2Bk3kIqQKdOhj0nO0CryVun4hTM0FMdyhBu4R4W7aKTcMaSnrtCijeVKufY74KdzkP4mflL%2BXqZ4NQFAkeTarXymYbOj3TVHEXneY%2F2%2B8OEew9zMVdyxoA%2Fh8DQQdMS%2BMCl97reUSQntjlcFFhA7IkzVsuFeLbFNeszxfoXSRID%2Biz6aBqeJpWulayE0dxH5JI5Qs3KJTzmEs%2B8A3iIw6hte3brjth3FzmUhT46r4HeFIvWEcmHzHs4MpUSReHsN51dMMor6u5EKWC3uiBCyZMlhWrAFMhmAQqZQpKNP2WAHBdYWHewx1BRtZFGA4p%2FYRQ%2Fy0L3SaaUN7B0heTGC0iv40VQUuCSXwIWZoSq0iHzhN5NgKfyruqwliVlQm89yyaBsJKW0jC78Ju9BjqkAWagsLzk5Vt7nwF%2Fp4lBSalGS5C35SGG6iOgDr%2FoIkOoWRBDudMU8kjLumncvOyU7GeJZ4gFhLGH3BhTmtpiC3lM3cQH3hphqBTXmMbaqLBk%2FDkocBiBveLr3OjCs27vCQpfZ8XiOL%2BkZRE7DD6l4ScG2PwxP926CyO%2FvHvP0Sp52CexbdvgRVH1gjs%2BGmhTWYkYpcqKDSeiQ3LibK4H4oP7HX%2FY&X-Amz-Signature=b33c1fcf6bd64e1f09e60b0b7a0bf828d2611fd52a5963661647fc9c40eb4169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
