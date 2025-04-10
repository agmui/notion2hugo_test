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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXF6WS5S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCG5zM3IUkkGZ4K8ndumDyYckkTpQf4MQoZSZWddK3DWAIgVNfMabX6BVZZfpfCuGdJfWP3tgyOaB4GChrHNTrAqucqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqczEbR3vDbrJBKrCrcAwa0MyAEI5dhFm79asg6cEJt6kgFvITpx%2Bbw3B%2FmC9U3xwIjgHKHlRPWN21rjeNq4W20Lf0GjEopVoCeqHlwzDCQY4tc4rEYYyaQKfOoT32cGTIYKQPHoLohI5akcyRqckyI%2BYjtuwrKaPEiMoZpRtX1Knmafme%2FhJWioMWGW3RR6YWGoJpczA76%2BGc2QSzPULQqjaEvH9MHcJMZ9Fo1J96OVYkUvC3PwqDtMmhVWvRgMVem87QXhtGJu1AUs5jRkpQc%2BpZ5vs3Zd6fs141KnHlmecQSfpyr4LbC7zlgQE%2Bm7AUit3u%2B5HEqjv%2FjgIcwVTK61%2F%2B5D5BcF5%2BBGYvLeC%2BdCjNkYMgW2U70djfiBwLxF%2FGiG5nlchCxyZoqK2iGgAnZSgbsxLm0z9wTRYp5Qxjfj9uAwPzTST6doJqlcYaqa7m109SiMfGmMST57seVYiVVZFDfuflWrKsUwrp%2Bwye06jzK1gpQBEgFHQCncIRy8DQkNCKzd3qVdT9kGWvNRL6a23b%2FTyWBYs2KRlap%2B%2BdWPwELkHM%2FP6oibjiIPJStgqv1RgZrsGUOVEDlR3nNjhaxHJuvhGLawiB0jwUZ1Y054WNSFRoOyuqmMYPyKe7T9QqBr04zEVe2BT63MNKy4L8GOqUBe4Z8jMIf5fy3LdV5h%2BjN71UwTxk1BSfdx4n7PHSE6k%2FodvxcaEY6ArSju%2FbmMUBY57LYjwz6C5TuOQ%2BWCo1fQjzFiuY20pgcPd6kUTmf1EnJvIE2Z%2Fiw43N%2Bxl3eTAPD%2FXRnun15fgcGYXJ5V8UUY%2FVmOrs%2FvfI%2F%2BA0%2B%2F%2FtqNm2zL5WDW2UGItkGj%2FERYvWLRphQklPI1XHRTAaLe7d0m76pUmkW&X-Amz-Signature=3c09df4c9c4e5ceb88c5baebc918d7dd15367982f331bc7502d24518f4687ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IMLFSXR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGgMmFn0fqYDY7sY7mD6IiDFDyog5UAiaIzy94ewoSNzAiEAlLQ6ML5%2BfmI3us%2BVjgTAe4ebgtwzKufOk3zjXubgrOYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAWVmTqhSW%2F3Kit%2BCrcAzOY42YCjRDTtkvSW4WoI%2FUSw2s4NIJplcYHvMcL%2BfxEaojERfLGYmyDBy8WUpcmAKFGnGi5lVRxdl2bugDDB02MSz7R6T6YQwwyCAJWw%2BLhVURGiU%2BJqX%2FTmHN2Zb0%2Bmzh89wRwwvWCozOVVyxbi%2BIIRkj5rGsTvuek%2FggX9N9OX5q8rFUAZyZfX0YDHtHGuSuGZ7ZU3gzEXIRTkMvVRF9%2FdhYCe6NClk459dcSNyftDSrXRU0sndwsQMxUbN21sPhojdVGswHuLZPcfZT6jtKQm7P6eFHe8XyDMswzZpY2LciGybhGR6FuXcZ%2F1dDdbeFvSU%2BRDl9tkGbx%2Fnzi%2B0Ij6n5VBAiZ0Yki%2FvSdPP0ffJ%2BID%2B4e2tZ9KAFL3fA9B7ugq%2BchFz6uj3ik5uMRlhRTA4AKa7Ln4lGyE75heoDnduCtqu2g76%2BHCpr6YeEWkDmo65Htf%2F1k5HxXUM%2Fof4yXUNqg79j3g5ZjjpegRbuwB8jOAxgsl3wQ7upFKUfNwCk4g4CVLJ6Iegs%2BNO4MXiQ2iVKiKRpuLwKB%2BJe4DJkSrDLIbJK27EfZshodiqA49bzyL5Q%2Br%2FhGgV%2FiOpH24DfRXFVxxqoVRll4mao3sKub7IEMa3fSfaU3WGFGMI%2By4L8GOqUB4Cc%2FytT9uosupaSW189TUd6KZkcS7MaGqS%2BL9mwS43tJzOdVOB9o6xtwwocIQH5eEdp%2F1kcEtQuw9AD%2FCeosq%2BYdn36k%2BR9lleUjAhfrwLvDZYkJAobnszEWR%2BzFni%2BbRsACG6yglO0TAzhqO9NyVEUYyv6T7sIYGnLWg%2FhDlLeosxd5VOj7npH3zt9kvk0w%2BOUJA6IFB8uz9ZnM50VOinfOP%2B3S&X-Amz-Signature=789934ae342d17ad3e41e3ca06674c790c880d18672bf648418af9d18bde36be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
