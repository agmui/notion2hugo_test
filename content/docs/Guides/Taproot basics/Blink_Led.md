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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQ6NQRP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDiFQmQuhrtuC68vZ8fiEEDZJopfwORZoVZ%2BlUPUIZyrAIgFmeoguaXs9yV%2BnFzf7l1roFpno54qplIhFrwJtHUjPAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAnYQ4RV40qochK7CrcAxxP%2FPUe99AZibZer4qd97NAHMHphfNaITShOUkYH6%2Bmj3zSN1kwZvPSju8dVw9h7YUvy5qTLLPZAKoPT5sn3G%2FTkB9SRu%2B%2FiTso4eHhLQw0HJZ1CjvSPlDMhGZW2jd8iTvV2q0QGgubmCNHKBP4hwXXi%2Fa%2Fov8EFz5uPLaqezPhqfs1a8KzwnnWG2XyEDl6K2HUEr3J5Un5eNyMJhM6I3R5tQGxmQzsQxdN5YCQR42EeQpH3uwCQE1E2boxZfCHrl5QRumhiZANXiL7Vjr%2FJaiYKOqtNKbdj6fVJk%2BWz9ZwAsw7D0zUIycuBGZicRx1z1mlwHJiZYNC13%2F1PYIN2VovdDFEI5xl4yOubEIw%2BVmogiOBgAnqZUXnR9j88WX9kuT7l47auuqqp8KHQcCqR3G2AyxyX6ywJAFWO3r5Y2lcQGHP8SLbSJUVGxbw4z7ugnFaj5YPnGazPBMRsQwo0327ORStqleIXOIPRIj0j3XRRSbS%2FJJTqLYgXevFVzBjYYPCPmt8rRy7Q9nVc8GfTCPVK4hTz%2FIzPBBq5oOgsGVPu7KJWXlqo9B5pvYZBLRCVXZaHtjhabpZYZ8aokmhQVAe9gXED3W2usntua3IDh%2BLIzXjNy1iN04GX2QDMOmNjcEGOqUBEsSSjg2uoQfAJ%2FOIOvAKUKy2YwjJDXuoS1GDXmqSmOMhBLfLCMnCF9IEgjtIt21MeEk8QMV%2BiaybrP5oG4%2FBRVWofvhP8%2FNk%2FwBr0H1Xlfi9DV8iF%2BvDLzx%2BaQfXfTpOwF0OXfz9Jj9NOOGiLJ4Sn%2FJdslUNEQkqFHDU5u%2F7loWNm4sarFAxAWfXMxoqXS%2B4DeMKZOWMDnEIRZUhCH4ceM37AhSl&X-Amz-Signature=66788899c1df81437f31b9d31f6cc2928a0575b4cf98c884dff124e78416ba9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ5I7P7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBri1SuYK9zvu6Q%2FX%2BajyJLrGACBouuCbpRy0L9kAGVAIgbn0VW5sj1JFk33fEAzHIFJAXCfyfMRrTtai9%2BR7XkC4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4yg1MNgGpAoHdK3yrcA7B7RktiV9FAV%2BiW9k%2BYOEzYuZ0gKiF3n2Xmwc31Zag6nxziMY9Fk2XUiF6U3CrWbOo%2B9WTWDaJK8PNRGp9w%2B3Wc4kpBc1c%2FO3Vy4BGR67CPcEdm6MdiznfOgAY22S34WjI08wBLgZo%2Bf7nWzQNFOPdF27saXktsF88lEtXMAUGyH%2B%2FNpIZl4ijdsqUxdLQqSqK%2BBU8STlqa9byFqrEcwO1KqwyxQEIWyHoQ80AX69a5E0iMvrHhzAwyatTJPOR73%2FoCAzD9S1qtg8HzrxmoUK61A4vbVWD5pW%2FPhOwdwGkWKQCGQ1xOs9wo%2FtwAq8sWemDNU6TZpkEmGNklUam1dwUwg656Qgh6AifVrKPrVqNfYKzc%2B1iQMWsB8GoWG%2F40Ut5afOXB2EainAuXWCWqcY53H8G%2F1s%2FfpXdYQldEfuD0vmvehSmOVLzl86MbLN2MIUBApyzC8%2B7J0xmzEZcW8IijsEySxSxYX9r7NoV7%2BDOn%2BBjIC3%2FVQDv9FYaJL6RsxvpaVbnYe%2Ff1cFglFSr8Ie8PBP6%2BdnhCEnpRqcg6sEQHOXE8ST3%2FO1wS%2BtaUqZ5P5fhDPu9SsaxXdRPHhjQ65Eeu2MgDV2gB2kqk2JgpOCvYHDdfxI642MvIyAG%2FMJSOjcEGOqUBvfFc8xfwu%2FmNI%2BmyP5%2FQ1qaI9f1MNaSGljhxt%2BzNK8hTI%2Fz4nQdFi7O3ZsusFbLwE1iSlVwSpWYAToiyQkk4pLaWvkDqgiRkDV0fcBVum22XzaGDWSilBVQdc1bqA9FFKx5Ji2j1WS2WdEDXAv6rOuhs0iC1gjaERAwxBI9uftEjD3OC26fr%2F7aHU1jLOE834G%2BVnWAQW7hw1g3voyi%2B4X7XhXik&X-Amz-Signature=f4bbabf8c4bf9423aaef867dfc94aad4e3ff894c3bce2ddcfaee6274815dbe75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
