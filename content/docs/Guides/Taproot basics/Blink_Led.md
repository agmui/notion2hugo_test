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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EBBJCR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbzbnCHp4BGwktpMVbKnJIX4r39ZwJyiFLqmpEMAIY1AiAbBnVpBvgxiWObLevUPQG7tInqwuZmKkGgMwsNuO%2F4JCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMLopEUDTAUwZ3T6nGKtwDrHvzq3fZOrGbi5iSHH5B8E2V69PuO7cQw%2FR%2FMbVoqkBzZ34TOt%2FsWQDAiW96CH1rLkyHw8nfa%2FJvC17AZC0qLG3kmnFnLItkeHWCV2umt60xVfl%2FWW5IqKu%2B2ybI9KG05IRc2A4qNyJdBLx%2FlIhdSVFTb8vgJEJqYEo8pT%2BOGxfR00gFQzM4YLbXd8Bg1OYBS%2FynuPoJuUC4eXFKTuzDPInC%2FY3TJ2jZrCDUL6RFMOjShmufeB7VZJLLCSsyltCiBvoY6tWg7BGRz1R7F9UCEk0%2FL9R56wj1XdGc9qLB0wNF8s0uvfBxlya0d1%2Bhkz%2BaDlUPXS41Cs4llUhrjGEpgCY68qK4McFYtbF6RzFgQ7WKSQ314r4zXeE2y3Ykv39sfTlZeml7dveazmLrTF6wVFVvuNr6EgUf8blPMQ5KVRamPbtebQu%2Fr7bm2diO1vErBWf8sxb4xnOrFz9qphxLjOu919yJx1FJqyhka1g5YaOPqacMZOgjOeXXtQCB4qUSG%2BBut5mAJkN5F53vBz1gdHrF4%2BxtOb07i6dmwKpHehVL9aV7nCb6FIJ4olCYYJ%2F6Q8%2FvlzfJWuyxset4sR8rLXDcMcKd%2BHRt25gtaZ8lbIfG1nWtyLcvzJs3NF0w36apwQY6pgFJ2O%2FNO%2BmHXHOhW78Bvlj3hkXR%2BE0X67s8Rr%2BlGrVE58nJdWQ5AlFRCwpjuebDrSx3BmuIYEUBEZK5jQ1jJxuvOAx%2BE%2FpvZf4MwZeq8XU8MWpJLGEfsCgBLHdODZ2PNSqQy%2Fqf3tc6aqi%2BBWeclv3KHMRWWK3Nb4jGVc6xZwV6g3iWlczQrh2V7ZoxTYt4Tc8ToKAAyeFU46Iwsv84AWQkHXdB02wy&X-Amz-Signature=dade13840bc10cf3dd3e615ae6e7c9faab7f131ba7355d0a5cf85687544f554b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO7TMQ32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg0naiIDH%2FkYyRg%2B24xwp0BhItD1AjJ97DVWj%2BJ5RChAiEA77k20WnDeWOqvGhtX20AyFp4ecMCuFAHd8gMCXrJhecq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDP0qJmIcfF9vuYMNyircA86GA3PBrpjl0CToHfwMBZrGZ0U7zqqv3FIckuUYl3OlfPOjGgcQ%2F%2BMPo1L2MMmmidOXFifwZcN%2FgGpDXAkDZk29DVrErzT8c%2F4arz5kBeB60w16MQVKG6nmq1FYTkaMjAl0BM4fwfTP54Z0CgezFXkdI1urGt%2FvCvPHj3HxA2jSJ7xX4eIjANDljPpSZcOOHs2n6S4klS9ldf4ukOhKjVF9f0iBrU68%2BiWhlA9gCBVc8ebELLNSwn92VISWk8rMyO0EH40Br%2BGro7fdiaPZnE3fiX74mx%2F4neCmJDE2lOJoFvc8bbzAJxmc5BcWbHajN726%2FG%2B7UmDaTc0iFzyUA0EvFQHZEucxLuX3Mz2Ii7G1KyYmVYBVGXOEdAp4XrsJVj5i6tREhTrfJwGOtgI3M8umJDooTCc1bon4yQgA8CPxmy2R24N2E0qS2QsqROomGKJm9H3HqPyLNBh34BhVaH4gN86PV1KFIM%2ByEGFo%2BVmsUx5jwXZIm5SuC%2BojUNFtnxeFyXCRzTDNCLGhLcmISMbdeJop9ANZqcvuYlmYNLY29pBVgiMBnL6j84l0ry1n5JValhKJYWFV%2F%2BmarYVnMCjgsG3VuyW0heWv2Cf8vXQUVwpJVOf%2BzQG9ZNQNMIbnqMEGOqUBS%2BWFH4TbM%2F2vlT273cBeCBH%2BA1nJfKWGTNfyO1eCxTES8OFAwWQ4oe%2Bcv3JO62VRvjcKYumhki%2BQ3ststV2EoF%2FFCdqQJBrcwlGoCKa7FCO%2FDaIopgdd0WdkxK5xRRV1fY9YqPQSx%2Bi7Sj%2BzCoK3PZjfSsG58l6GagchC71QCgZwtm6FSHrJ%2BrlltZacxpvJJ1d4A8yC2Gi3oh3%2BhD3C0mJLBjhk&X-Amz-Signature=c6cc1291f0d0ccc62b4d86e9d637ddf6a741c3fb1c99348bf0022f0c9b2af5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
