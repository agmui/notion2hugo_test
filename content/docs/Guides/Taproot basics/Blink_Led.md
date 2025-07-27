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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHABLQV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDTZbK147JPGJ54LiuKnfdiptLIpD%2FgoA%2B4yFnyfC2eBwIgCqrKrZMUkIYRm2rvS%2BlE00rt4QsU1nmUoCNXSKBfQPkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCTlwT1SQDwvyqmE2SrcA%2FBafHlnS5qSm0ngAeR43uPNpZ8PxXqbFGK%2F8Tntf82q%2B7xLXTjcTGli0hzGCVw3vk0RBeaXoOyAVu6WUISYoBW45ytmiCdM689Iaf2mxBbOmg3K23vQCAi2AVmuxLpst0bZEPUZ4g8P2BbDO2K8bwtxRrMk8JHIxXY6rmki1u4uezhuq07abcY2p3GODrgFS9Ih0shA0YzQSB5uQBsCa1281Gu6N8babnSpMjxlDixsm%2FsJ%2FJDZCD4W8m3hqLcluFlU07b6lXhIL1GsN5bg%2Bf2%2B%2B8mcxsKHnbFYj230RDBG1pJ1Z%2FgKCYweUPhOenjKOzZ1m63w5ncKsbyMAy3iC22WfCG8b4hvDeTchWLl0zvQOzqxz9WvYGPv02kr%2BuzGtlpMu4PxqDhc7Dyb4IJdozwAGZKT0FS2VH6eNG8v7%2BbaJfI95Dhe8au9u%2B1aSzglvCXJcP6urcw1%2BAsNMUHnu9Gxe3tux3MKdI4mgM5wV2wAYtfqiYvsuL3RJgg2nkrwE0ZKhLi1gyjSei1TsDtH23PZ0CV9jJ791mV1gaDJVmH81taaWS2za69LqxzkYqGoAt4nJI8Jur9Bg6Ak7kppAO9QM13blFQmQj8sdWmFaRDH7mjdm8Lp%2BEOjgFQIMMS6lsQGOqUBdY3O1A7teDjjG2CbEBghKIltYu0TAOwVWVPfZT14eCvmVZcT265aArAHFQ93KKLqV4MRy4%2BrSB8r9zOJ45HsADfRDPXVBN507q5%2F%2FcBzq5n4BgDDx54yoaZyKCIE6j1%2B0iwrttaqJwOPlsQoyL4%2BUa7iupw4EYjmzEgqo1rungZdIWcaHWlb61LFXUUVFIglNgd0DjMj0ILVQqm0EQLmJMPH71kT&X-Amz-Signature=47440be5c3acdab9347554838306d95efbc5a04131f687a9154bce8f384aef8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJQ6YTA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDgFD1Z66itDordLRywlQx%2F2d7TNXVrBeEWWUT%2BdW7f6gIhANRto0wcTgO1vRT0jNy27nGjSoL1k9sGepA108CF0CXSKv8DCG0QABoMNjM3NDIzMTgzODA1Igzk4DprLLbPRphvmcYq3AN4yk%2FkUNs9hzTUKaVFGKbnOXvzbRhh9jAXxYZAjEgPi3rY9%2ByXwWrDGavrQ4V%2FdBjOJgvmaqjs3czyrY6Jp3y69FqT5gpJ3djM6tmmErhLFXeOePogUAvJ7E1KpWY6pYfLK9BxhNhCP5RnHjvDAYTXmiOq1zI%2F06Nv2xYXUBdanwkzQrfZgArVzh7P7kcysy1oMd7Ec4J4OqS3roz37kMEiuBM%2FCjtXp%2B4nyt3B08fnJV9qI9OE2FKRV7mEyZp7p2Lri%2B9tUca649Th7dRzisddS7n9LeRO4aMg2fgJIKxmR%2FXXsye3UbMCShXP4JLO%2B8NnPNIwGxaEFnJ5IiZa6TgyBGLqQkkq%2BfLAqX166BN1mT4KIPgODEyZtzh1mh1cfCvlFusC0WxxUtu%2BeQjb1fOo%2BlIQ%2B68P%2B0snetuHOP%2B%2BoBxlHx2hE2URVTQAQW38o6h6babIVkphVw4tmmiR5W1hgO8iIWuS0dRQAEq5H186SPIGAveGoHA98csWOsMViPyNuCJeJPAbbdmSB3b72%2FwY%2BSQWvlAsoVuoAfKByYizJyLtDt%2FVRh0nQjBGdd3U1PqFWthtR9AupNZz6Ztb0jFt5eY1yVQooK%2FIvNy7fi%2B79uKBuNvUJDyneMy7DDwupbEBjqkAe%2Fmjnxnq1Qb0DdOrkC667EkqLJT5P5%2B0xx2hamLbbizr%2FXuOFav9j7Ge%2FWr0xsaF7mi9vkRCgNISGMKmF9%2Bbms1ihNqnUD9QDsKXT%2B2TLcz%2FqJz1NSAQ%2FV0EmZvtPoceAl0g2P01qnHVNchrjDd56ljYADTZZLy5pahvUSHFxNpSariWeLThiF%2FwGfhiaouaNUtsTm9hXCLCTjlig9O1bwUuw9%2F&X-Amz-Signature=c8a562d71e6686062d17d85e3c0be17d04a1cebf5d1a6f685627980390c444b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
