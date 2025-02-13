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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHC6R5R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOyHXIgN%2FDdqyQCulh7NbA6iD1d9jJuCAfiuQk6bgJQIhAKhtAl1mVlQC2FHIPKYZ6xyZ6ggzNKafiruqotou5th9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwhXa%2BXsks6e%2BCUXfYq3AMCJzySldV8253y7lZkIVUJ4Uas29sQimf6AfeokWRhVmlZcRBsflh5iDvveX2nx%2BSb7ps9OL5eWAWnoxyiOJvsAUjRDDuaJtdOExbAgTX6RWBX550AD9lsj8eyGO1xMI0JfMM7zCSq%2B9rW7yk%2BGHcTEc9%2FjmFYJ1alE6J%2Fy%2Bk9Tsv%2BRfT0kKLR8gjXayu44bCKlOkjEDLeplGSblahJ%2FrGJeCL7SjIgL1fOjI0gDHIDxuKeMlo3VRI3l9K7QcED3igi0fKxsVqJZHvIUxp8Sign6nsIPBiu9VUJ%2FqCs7eaGAE6j65qcaU0CkdxoXf%2BPttSlkTKEB6V1%2BSL8BIpx9gIy%2F4567Ry7gZ%2F9kYLOQmRM8MV0C64xV%2Bpnvlqz31S0X2rPUewpKO1QGh0Q%2FYDqeJr%2ByMaL03LCyQ5aOw5zj4PRGhO%2BzpjxC24tcVC2p10PBwvLSwnLjxQPbvkxEvmamzv9KMmYc3PPZYygCkomrQ5aI%2FNBviKFhoy9itHm2201CT4ITpOJIXUUBFw83Ok73gxzT1t05PfRILWDJE97SuR6pdVc%2BRspjN30p3Rt1SJX0Bheid9SDfs4aiV6JRqD%2Ff6%2BEsc%2BEYmhPObtuIkyrIJ5S3lN%2Fr6PpF04CY1zzCErLm9BjqkAd5Df0ZxMsTx8IZH1xY7VL8pW52Ea2r7qcyavU3Q3t%2Bsp0yx%2FN9rXl5tQ4gNBqsaYPh4928YyINfDLhjB1tcpOMv83t3cXmBVL0fYQGx8dHOc4brcxIXKk6HEBh0SSVGbOUuZKSrmItUaOklr%2FMrIoqhW4%2BPjqv2HnNcbYQgZ823mVylQ295EOrcX9bf9b0auanFTZfNnruxBOB%2FJ76M3%2F2kDItS&X-Amz-Signature=8b351e0d579d3bfa080d17134707f1fb197bcf91abcdf3b2ce5dcb35a7f7135e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ62PU56%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMC4LQbNvkuht0XadrVNHNUtTsI%2BEBiCddSv6b7eIdwIgBE8hPoUIGqIamjbJ6MowYh6n%2BK0%2FrTTWwQuef6mZvdAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKOYARiRucWSFwKjNyrcA8136Yhdg%2Bvbj3wvb0W5pYh%2Bwl35Z5yNTRtEDOlOF1UBDpoXWv%2FHOxvbmwhNsF0VU0sQhE8le9nYZmd4NmKNam3viyJSRsh%2BqfviO8fvNG3AmRhJb77K3WwgAnKcvq8xuAnndtQOvkEpAUo%2F32ddXffrAnvUi2cpNChY27dMOXxgCngW06Jc7lDusdLg2C3d5nrSOYNOOQc0OLxr2LcMO8Ez4S6wa8g6yfJszQmV6E1bLeliGOXnwTZmoX6QZsEI1rOaEbfammZN64MFmx8HaTPi2oswBVDMlOOjuZ8GC0OvPiWWFUjLxnBrjDZdJwN3HUoNOtJJz8hxvg%2FmxGNgb2ePQ%2BEgw35HDfAlu3NA1hqcX%2B4ueIqYd%2BeCrJnaxqEVnGhiaM%2BrIDIgbgM6SP7fzA1jGlF9cVjYhZyVS4mX7N0sLBG%2BhAjs%2F4M1ia1lCH6ir9yW4WIh452rZe4qozXti3rVawTwfAfhOY0bB3kb0Lo9roHafinHrq1fmt0tpHkVKhEoOR7n5DbBwCheF4MF4%2FWS4tOm%2FGFlGCMOFeOZhmx%2BZdiAnE6KLoUUBJQVBtjxgxhjhZbR%2BA8fqXVbZJF7l3CirpsA%2BJW4AYrHNkeqtmuMSL3cqL8SVhlMva67MP6sub0GOqUBXe5sUG9qlSOgoloFavVaEIvujf6mynxTprSqDcI0hB5NPslyauhI%2BbWdfpwMX4cA%2Bim8YP4C95FndTmkTIgWxzouQIfU3KSpvge02OZx6htzGsYmHX3Whm3Ujy3iJoCdHvNIwpBKFI7FcYDzhEPgD06oHNpQ99gQjj29nTRy0tHEY%2Fch7WP7SAoNH0IbxtVgCGWxhBFqkhpK1h3vO%2F%2F7l5VgsZ4B&X-Amz-Signature=3b331c263c6e2e19b7e559ce1dbfeaa3bbd808efe91457119d3b8f3674a63e15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
