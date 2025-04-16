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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CGLBH6E%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1Ri9eJyISxbPqLUlqTSqpq%2FP0U8tk5mXuzqmri7dqQwIgN3MsAgTqK%2BoG1E0x4DN1QUw0ne1tMMz%2FoWbLczd%2BYeIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGO53VEic9q33lQqVyrcAy%2B60k6XNfHQ%2BhECysp1KgcWlCYUslQDEXw5DUhxvDGMEWioxrDx36k9UxMXyrz9sNvPjK6pzcosg3LLlUoY2H9v7UJySuesEJyjXdcdiCwEgrxfYfCKLU9pNXcZq4JRde%2FEWzjFfgfZ6aKVNa6SRTe7suA91sUfC9d3mb7htMprQRObuMVyZfnGdYv9GV4Q9JAO08OGtudVYGvcVxXldtcQAaJUcc%2B30%2FFmZg1jPZxOxEUnKPlgs7NsRTyCmIwvd%2Fm1hMMeb5atjdTzd%2F2tIUp%2FIyqoRVfriYxwfk0lOYgMExIm96HQRFndD1WP23bJ0E5lPy14lic21G1YORnlbQ5h8SxB6dZofDDNU4zB4PanU%2Ft6F2CJXmesCyc7n78fTvkXnIDCxGw4pxYOBhR5jTPoXmQZWIiokbOrZ5X5EZ4lVM8O%2FXwTc%2BzdnCIUPFExow%2FjnF97vFnWjzbLfo0y5%2BdeU0%2Bbdtm7sWrjkWt3UL0xD%2BEVGTU%2FOxzQypESoOOEwRTYHjSPc2jwbExtQB5PY7a34Ll7CxYQS5xfLx1TMURXr%2BY58Gkd0G0Uwjx7jdUyATSHhkLmo5MqJ%2Bk%2FeWAfIUfBHAFl9qQyQ3T6rAnNJ0cKc4u3c0yjQxgAgneUMJmP%2Fr8GOqUBPoN8LbOpkSkHuTWeGk0TmanN9TS5qw9sSDMz1wNbbFo9LAkDgSV8%2FqfS6JZJvPMvNpDlF2XWsnOF4yYIch5lscFeZR3Soo39b%2BQ8SFZazCgNCj5f8ZW%2FWqxOSUrV6nSXB2%2BWeHZjPPJnSnZNVpbuTCMHOSQNPkJ847PmN5EF3qfAY7WycnSQp%2Fg7i%2BBU4dPRyJNQ0B9j33MTp%2BgrFgPEr2aQMNuM&X-Amz-Signature=e00535e478bf21188a79e7b9d0777bf9efbd58b0da3d4c688dc6983b43c80f12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVMQ5CQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBais9LM4YgIixKBk0Q820%2B5c%2FMbB7jGsy4zrvACnXqrAiB1%2F9XuzY6%2Bjq7D1xpVXqjLkbvwxQZOXHN8yHQIr2UKwir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMRbFF26PDozD7LnGAKtwDVeX2HLzMZprqN%2FM5v9kA%2BfLLJq4AXQb2bNhfBvvsKHUB%2B2kQLrtIHzqvzyG9WokIPSS6PXQDMZckh7QWwGGzhmn8wjSORkGk5OuxaTo1buimJeqfmC11puluzxE8%2BfAqMoqXt%2B99ljdaYbQAGOJZnJwpQJicRbHGK%2B3XBT1RUVpFOkwaEW3Doi2u%2F7xZkgroxuVLfkrtinkNbpxLaZveN%2FbQgMzFXI1emzUpy9UB8e8%2BiqTSNWkBLHX5BR9RQZyDKJIARAT4loRIyrTZjAoYSZGnRjEe2Q%2F1DYgPvaMKWpSFwdsVBkSOvAhyWb6cryvl%2FmPcvVeLfQGBrRm3iVY2aQVNMXEV3Rgkejy7kPQa6murnh2WnBXh9YC8p1Mns6IUtiwOAo1YSBGhAj9PElW%2F02%2F%2FPS%2B5YcMky1uOkFpurtmSFS9bdJUAji5UvIYGsVfF18kK96alVS5txgjCOPqV294rDdf8vVPg6NgfpE6v6gOrsbI6mtDH6YFG%2BU4BhFkPst%2FvjTlKsCTp4yjBWSw%2BQqVw%2BXfnUdpclEgS2epw%2FJuCSgYpo7qlLt6ZlvPkIcyB%2BJmksgH%2FwGe8QbJ8rIaqrSNmDtVRPVxcOOP%2FB0457V0g4G%2BDtqNEJCVN4sYw2o%2F%2BvwY6pgFtVicXA9LRnIBntYt4tcSD4tdx7TyaM5XfXhdSle0hfgXLUbuRXHpc8DMRYqi%2FgbhjYdY8UnYZzz6CaFXuR6XY8nxmr79hJ9bHXUvG284mAbwGh1hRFfFk0VsOgUZsYsncT4pG9eSykO8NG7r0YXm6aNltOUQkPdAcBfw2SgGfuSqj6KP%2Bpgy23Fbnt0G5Y502gKIWt262ZKqZCrNkwcMtSFQ%2BjtpK&X-Amz-Signature=c901d41def162868fbfb9419c65d63828e8395c29d5b397aad90119385b83cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
