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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFL5QHR3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEOHiP57wOc5CpzIbSoy9NHc3FJ%2F%2FoNhzJyVInTS%2BnO8AiEAqTv25IDR0rB4FrNmt7fLTSpE9lVUjGCee%2FvjtIuEmC0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkhStibrI6n8WPf6yrcA9TwYx1r3JJMXnm%2FzmvmoHaU7mWkImGdm%2BMVmMJ8ha6fvBa18q0%2FW675ivnra9gU%2FMnWColHH4GOwZuFziXry%2B9B97L87U2p1shhaz%2BY8TZQiiBlK1kUjeOt%2B%2BK5U0UAkLPUOgpWYW8l4kBi4YivRuwg5RnMmTgZdoKMk%2BtIRJ0rlI6Yu22g2uEKKN0v8Lv47HC2QQzN5GppErN%2BAKGGyvySTEwDFeMfAsLHYQul1mrxt9%2Fqp9Ssg0ZE1qjZBAZ2O0c%2F%2FalTJaQzP1BEor58kkum7IgFGf0rNkq0Fcv%2FLrAtugOFRYQfMGN4I9UZsNatkCuESdV2flGE%2F%2FQLJ0h4enTJVLFDIGblxERiJcQvgCBs1zvUlKVgaKvr0uM7ganFslrnT30KfkJCy%2FsA46tbgrCJ9HAIEamG0LYEmzfgXv6WFZVq6n7NPoGw5JRw8gv2dahXkftH6mgHR%2B8N08scg2Ilw6LH2mOeBKZ%2FamBR9Zwz3gh0LrUtqW2qdMlE0tyVryhwp1%2BKkMn9T6u%2FcVs1hBzMQZQ7PDUjGW40uT8GTCbRR%2FJ6vA8W6Uacw0a50J0fCJqVTffQ%2BmfEXw9eHbmKAgq1lgW0aA2M0MP2UdSnl32obAhy%2FZEgo%2FLIVDrLMLaG%2FsAGOqUB2eMkCpxfSG82uDTkdgxTwGSQg%2ByWzrxs3oR%2FGw3GebvPmE7dGTZuC8NQUIbSimSwteoCfedwsuYIzM9WYOcgTcpaIrfIgXtbKJ7MMT%2Bs9jBnWjX3AOAx1Cfp1REYs2vIBKmZZhoQPQxkO1NKJk%2BItbnJc09uUp4Ec%2BYUXxmx%2FCyX7JA7JTUwjA%2FKOOW%2BRC4%2B6cVYYRLyPba0ma8eCgVKG7oZbKk9&X-Amz-Signature=fa6e4bf08f95d0864fa6253e31ba274c9b01e1c75eec84cafc32db091cf79941&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUSGSFU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICUJ5qHsTOGQiDzsVLuKQMPMgqAGG91AVsdud%2F%2BHOnyvAiEAxfzUPNnX2oOoeEfeDY%2Bd0MFFvH12UAsCQkVOcre2vH4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgKOqsO7T3JQ7t3TircA8hBw%2B6glJlsDnzsvQbQQb6sSOLdrlA%2FYnKmmYA8PTEKkvCRjTORLf6fbVrllUvtGmWqSHLWAvbfWguM5vXldG1EHKELXzQztThZAcQttXPKEXDxIyE3obPsJVM2L%2BH7BQRqUM1h6gYFCf9jDTzZwQicPLmulz7IoEHKfdQ4GyuL8XXH03f84akjcy799A891EvTMXyE%2Fknjqz6cvFxAcTreADRnWnXfyojJ%2FNfvsuJqipwJxv9KSUaZvwMaYYFaH%2FgyLE0DYORsXktfZ42%2BlX9J8glsBrpzOcXx%2F1IYZffhDcqVKa%2B2%2FVrnqHhOzte9Oqu8VD5Ip4duLNzLfP1SiTEAkQ2gQVBvtNod6UQOtZ%2F%2BZrX0ZJY%2FNqZIQ%2FgKezDl86tS9hEAtwHMzOi7u8Txn0kT8NxS34QIlsjF8YJXiyAoBoaj0RYHk6EPuFoQc6wc%2BrnDUWbF5c1MsdBtxLdQJ%2BWeHihXu%2FW14kfA%2Fl2VIbN07UVag2q4F653sMXZQPtPWe4KjlccOqk4tUMPvRGx6sbYm5QOnOd0GwpjnZPI1dAeij6QGzKNSnIYAOiMGDB8zru7LxG7TeP0sTpBHiovjf9pcw2gi%2FFB%2FpQ8ge1fnftW%2FpY7X67TzU0lQlB6MNWG%2FsAGOqUBxPVUEwFEPuq5j6Uj8iCjw9afATyUeYC%2F2L%2BwyG4mxQjgunSRIUNM9GJb%2F6lmCXVtxRWr4stoCL%2FcjkohQ2crrRbBfT53DPj03SU5iDfmCOfnfklb6wJdALMt0amA%2BQfWZ2QdsPKuS%2Fg5ejoZ%2FQJzF2Bl5DU82PAY1W52smcbw3ooUj6xBhIMaI9MMqEKCPA97eXEwfzaJaV1D8dQhDa%2Ft06I3D6%2F&X-Amz-Signature=aecc29f0dd208e30284ab9074edd02823a03dfe1d3199e3c125a012cd5ddc5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
