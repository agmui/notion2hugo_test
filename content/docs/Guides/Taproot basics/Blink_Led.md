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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUVKCCW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrQMmmdTQD0axP6hJHeUti9Krc6sQKIQW3MWVxDOrK9gIhAPVmDcu41cHEC1e4CPXkIM4FSU1N0ezuxnTflNXBSgu5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8FypfuhH%2FK9Un80q3AOJY%2FdRy6wdwjhFf%2BUN9q40slWkY9JbWMslc80Ysus7ICJcCPFFJHjoklvq1eJIc5T0vKPWouVsuFz4mAroXeQVlYTOZ1Hw4rhl4nKc2yvfej05fe6ORlG8kbuvgciBpAB9HlS4WtDs%2FefjUMg53j%2F58zslP%2Bx9CvFS7hMjT9zTFwflGgUpyJ0TaxQSQYHUknm7rM1lJ73nVKsfPtTQ0sjJ58lDxkM11C4lvClpdhGWQJ5uYMHN%2FDJug%2FXu0XDeaBcwg8MyegyNHEc92miFXI4JltS3xrJLb6IQ72B%2FrvG4kcPeew4K1cMrF1PDVgTM58yrkU8vUdy05tJ16KI89gX%2F3IMSBWW015qf7WPeNe%2FDHL5Xfk031bB6aPsG5tAOt2A7Q6DRrX1QsuAkYJNDCeYRWvYkk%2Beku6cea6pddkKS134tlmLQAP3T0XS%2FD7U5rZgMILM4twGb2vvxj86pzJutIjf%2BVHdFAmw%2FHHWAe6PMpxq2jTgYdDTzrGokplbRtU33LiZeeFAGbmjwdr6f4loERd6rvq3uxizUIfjOixpDd60ehCLlzLmo%2FvaE6MZ60nQOv8jFXPPkZI3IqnT%2FffOiYa0GUspcDmLtN9knGdJ4YmmaudwzPChAnoc%2FcDDCvbnDBjqkAQDgSx11BOah2LyIPQKwiLXap6GFy%2FdSVD06sw0Bo8tA3bZ2WrR0HV%2B5hF0g7j1EgZd6xCJLKOCHlBOOKNUqZ75owWgM56Tg76DAgMmogLYL2L%2BfzB5Ato4eWsWH%2FDW2DbVKEDEF8PY8P%2Bsqak9bHqETPSWzDvebPyj%2BRuPGpR5gbRu0%2BTkbaXiZ9EHatEGJQtlfh97kVTCoa1wKf8dGDEZ%2FlNY1&X-Amz-Signature=caa65fea63b7cb64bfa99116f07ee9a5b4854d47cd1be5df9597941eb3f25640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVJAG4P%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKIK8wzJQ%2FCLE6TKkUpfctg9MPAjpkkR250%2Fe0Z0qkQIgS8czGUzaLNWmEw0LX6tVRYzPIGiGXs4LyJ1MAMiMOe8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7xUpoJp74g8Eik0ircAxw69zMoEUX%2BDmQxZYtmHXMVWl73aUj9eiJLWfWuB6AbwtqU%2FLTTjxX81l9ZwBGgXQATFocxA01RLm766mW6e0UZFXFXSPNJAqx%2BNyDc2%2BwRVrD1Bo6w%2BZ%2F6vXAR18jnbVTM8DJAdyITOrTG6Nf762w%2FE%2FPgSIpk6tAwwvKZc41z1brFEzNNSyA2vcnCe8h0IJeImGfrnpeQjSVL%2Bghh7nR50htEz%2BaQUs4uQDCMTLwPeexD%2FBgim1pPUFaIlrilgQSvWNNFdFo98rlDy3cc6QEOf5prtiLlGXaKLFnkwgpulkstgydI%2FTssA4gHicyEUMBM26mVSxFYiWh%2BAAHef3T6QZo%2FLfq6qCcAXAdHIYClyqfkGmY3MjfHCJ1zoLFn36mzdBz8CJsRZBfh3GSRa1yb9fV6ZMtbVIhW4hzyHinlNDW7CzkS603MdLPajQ9l5ly20Or5%2BF1CsLstUmYOR%2BtWgKLySF6pSiri5GObLwx2wWz04r9AXBIWSa8FJKy6lJ%2Fsq%2BarCTZgnwk2ertb4UInTdIG8If6FWVezLA0cctuaNlsBWU84B7RnpDl6g%2Bkr3XOGoyvlJReaL0alHoctphXKLWB8v0i3MZ23xE%2BpaSIUWqpKOtbPVcK9tewMMu9ucMGOqUBGJw5v1EnPXSxiKzS32CrYORTvNRXjdrCdAWRFNxEBcndeHBMhCANgukliGqV8xLyv4AmQFO9%2FZ00FjEbG1cdTDNMJKNCf3jBwg1sxWbmczoYU9KCLv8qGynSGA6vmFB4kqJPnJxSKnGs57wfjBfRi6UTcxXsEfI4RDCcUwt9Nq0%2Bo8EX6t8ukcLVTykv0obrCHsA7mRVNXG2oNCLO3cCN0imu3ZM&X-Amz-Signature=5d796f35c0758d7a994ef7ae9a81df7c6ba83f21a65d7194350739e12f703ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
