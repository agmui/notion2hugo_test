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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BGIUWR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1UE4nY%2BV3i%2FSrzVqSoNfqRz%2Fi%2BqTLYI1AZgaj6mlFtAiALkrgevM8BUoF%2FwVAm3kouzdU7jyc5zg%2BopTpnI4hAtyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMVCX9cYgXrQ7ebvGeKtwDzUwhDx8WT0%2BxN6EUvHnFZAqs3E82fHrf1z%2Frpm5faZSm2ja1E%2Bo8weecaYs5HEAg4EI2dpJb5n3ZH6xDQhTnuIvmyWiuihWhgY0P4yTOjm%2BQjWz4gPa7nQj4vts43XFnGNcnuMWCsiz8PocAS%2FZXqnJoxRo4CzBbosoAjaD15lLj4udXhixS6eTTm9i%2FBIBUA7Zye43XpTdHI7OQmwzhshuOCW5Ofrzifn%2BCzvjPskh9KtOUh0hNzjaxBPo%2Bvta9oZgfru24q1NEYhTuNRmIhz%2BuRAKVv7nUv7BCU8LtsGoQTuayvtgPfbmnotU0TrY9dh7w3y1Yq4tZ4jd7XrxCbIQahcZD9vXEmrLG71xQsFK1F7ubLCtpvkPq0%2Fs3S2CGy7YyUvL%2ByP%2B%2Bbi%2FyI%2FYrwAefKwq37BdP65ceBc159UGD7iZC8Y09BN8TEYesSxRkCPRKMy7TOMVjoug24B%2FZGmipn6FzvVhxt8XdxWPBuDemK8RP1nfdxcC%2BbQzZaQVXOQcMrqc1CEiRWRTdBP9c%2BnUwTSG9DwPk8FC4AJt5IZArRCLYcU5RY7%2B2J3ssw%2BVwnkzGw3gfrjICBS4scmtXeX1%2BSTprcpBQSGNLVbVvgDCHQmH%2BgsNdg%2FgPvE0wvbeFwAY6pgFKCEjbQTFHepiYrE1%2BKQpSVCj94Hg7L9%2F6TQo0ure16jHGApklDRDa0ZNzbESVpvm%2FUoLlGMehV8dvIzE8OWbYi3av7mS5GR4t4oGTLcmlQZ%2B32Nc3cm7JpSc5snrUZisSchVEAg4oRnLnEY4Ut7GAA0Jj%2BgU2mGIv4zkNaklXIXt1ojaAXNoZu%2BT%2B5dT0Ed7q82JzERF7K5DWJu2U%2FO9oErjHCGo2&X-Amz-Signature=7755c9bb8c549a286c00f62881b2f595a62d476856eb3fe86fb4bd4987246be4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2KGTVX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR86W2UdzD2U8%2BmjG7n1uxYlr2CF%2FlYuraSrWF%2BwyQLgIgG37sKawb9kP1YesFhgA%2F6bcYzr2ROFB4LNGyjjd2wmcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCni8xwC7t8UEsbgVSrcA84orEXwUfgacszWUdnfNWyiB4IhZFwCtwbr5DCt3HPcoRRo10HJK1rCqD8tHoqI%2BAP6Qg0psooUCpuORTcJ%2Bb%2BbFQmLnKHLSs3FhlccUsC6b2XtPR5gn5Ik1nmgXY2HJJJJ8oPfxp6aLCIVFuXVln68ejpK2cJNwDNyy%2Fv6wS700ICQ%2BbbxqNtcDqaOhyCxB8vD4lOI5efBjB7%2FU%2BoYSZdZGdPokiyAdzpHUGk8TrhZYxD8D57KDHASXVy%2F%2BYWEx%2BsIBFoTPN4rXbPcbYnxi8qIyTOTHKFm7mJjNbXXzwXUkpwwYR5JM35WU79Eey7OLPnMXvs5RBZgQeh%2Bzx5f4PFsASzoJXRgko2Sm7MJxC07Vo9A%2Fdh70f65LkUxefTl4zwS2seZgZUdax4jutrGnIks7wxWfUOZQ%2FsrbXH1yB5lDdJ6y7Oz0u%2FZNRufNhK6opzTzyBH7BPyL4dl1Y4hHtZayq8Pj1NWmODWQbFhuW%2BFCUjcxUAMunKvHXOJrecWIlLwDMIAICUpHG%2BgEB5xzpCIddLjqAhiKiknG3ZnF8VQiIRLRLmj0iSDkGW65M%2B%2BB26dBiuigeCm4MF9xoXjDfLdPjEvCUU5MQqjtZkylq3I%2Bq80nQqCDLN4hQieMMu3hcAGOqUBxaNIfm4ZOuUeHHAd4ylaHkvSmcRCuFkMk417745iI8A3A%2F8ChueZkVkYVJLww60VDXhGFX7Zh9sTrUNAgD%2Btk%2BQqC5l6Qr%2B8KyPZW%2FnrCgnxnNNAos8URFc88pZXj71JUY%2FqZRXFAnf7XefGxruXJi8%2B9GfRHbHLth7%2BSBNRCOp3kYt9blhO2e0dZ7EwnQmeG3r9JbKcqDGCjT0AvbPdJABcS%2FnW&X-Amz-Signature=7411c7ccba80320cd60068f96b6c740b4e5e8c4eff38ee2d7e8f16a35d63e93e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
