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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3RR2RA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XhT8hcHAyVgQFAY7hpbdKNFO1qOG%2B%2F0pk7lBCGuCLwIgW9mvh4ycfkynWzQlKgcrjeWve6XB4qErlMu2EZicMiQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BXHaZ1t5VtTF84HCrcAyZELArxO5zF%2ByB66GBs4lQswcqa2ON%2BhRfYYN4QvJ3zIrq9iVv6sXHApb3yB1MwsTk8EY%2BVOIOBl1dft%2FOLrA9hB49thU%2FXAhJwKKk4XfxnrgDusy6me6zCB81sqbt0mtvCjpxz1mmkAnsmq78rw8WwXZF5fPNGvToLuq1vyeq9YpLQydL5Ifci29OfAHH8rl2GMV3MlgjGZRG4LRRRQfz3UZAbNvtiVfxHXs3TMms%2FKMYgpPDUjwEQfKAGpTw9UEoFMvjLeg75OzH0HXuxI0dncg4llpN4fd99dGpDBNqOf8taDTVp49uDrJMuRZcxLYnKmrr9IvyC6XxMceKqKz6xWi%2F1P1tcZLBtaE2B5QXRnF3FMvK6cXvw2B5VjmIGaaGIuwLmT3w2LgVhknCiOpujXvhWOfQ7YwdvDzV6s0aADBhinKoVwUpPlut6tIEd1%2BDt1ICgi4FFWXb4b9t2I1vO%2Bl5GkUTA6sB2%2B7DxbNpMngf3crew6ey33DwweT%2FuW1HHnu8LwWPv3oMeIQqpRl0B8G7a%2FJxk8M%2FyanSfQgXKIonhv9gcweMTANoVWl93SvKfUSHzFfU3WuSKv5ivy28D6BSqcJMBmDXZdABcvQXhZHM4uxTLa7M8PboFMKvWnsIGOqUBDZIIbYv5uWFOTUjwDC%2FblGwDdewK3%2BU5juN0atBsoOJAiQ727iD7PSLzu6BojfydB76Q7WQHxIvvpr%2FxCB1RCH5NOQJ8xjlwj%2FVGHi1DIrtErDITLRYp3yYllMqfD0qtrlfncwDntP6kIIiClV9QsCNsFUOAUl9ezb0JnPD4L5ETUFD6W7cMe%2BE6YGucE7rL0ai87SOujQ9zconibBfr9slJOGUI&X-Amz-Signature=fefa38217090f4e844bf2e1d5caa5095b27cf0522fb0a0e229ef4a39bca3cd22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUU3TQZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ%2BkNnmN4ou%2BMMSVUJXTbLnmCa%2FlZL5s8gUjbztrWqYAiAfvoxYUq%2BJc05UxQpoYohf1y%2FF9Jgt8qqlFHYPLnnTziqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9n2D61QrA7mtWG0KtwDGXcLgRoeO%2FNwHGB29jl%2FwI%2BlqeiVVugidjZ9ZLyginh314KGEf9bn54rwBSD4BTSiXn1yqj%2Bs2aay5RaS1Y3g0fwQFrMGKULv1LsQqKOY4iGAvndPMe%2BWX5t7q1TVgGGKaFNN2A3shglblwv3drf6Nc10dLlSVTLL5E%2BHWvjLOxyQRhlYfmyE2Q2YpAGw47hH6mmen02DWaoQLU4SUrZVZblAUV058rLlcHZh5ULn%2Ba4XPM3kb%2BbeRswafWnrT8n8y4AmOaOM2aFrrW6Fs1S1nNBAMshGS0jWIZySAUsKxOkgAm05gosbggAVlF0q9tEtsrDjC7bZSw58k0G95pqGJIxU5tIGXuz5CgQjtxMtXumhtMt03Ko%2B4rdGYWemqudvFpXEJNYwHKrcDPMdGO3mrxkgN6ss9nM1sJfm3GMr32aV4lfg90BDkO6Wuw8RvWvvBkjl19TG%2FFuspZXgRqsyGAsyVx%2BsU8%2FHyoje5XU2lPNUlpYu5fwWoUcLTPBZaE6N8NRm1IkknNDZ3nsLSm1PbrTumvsUWJUkmJf6aD4jxEVvORno%2BplqTA4Klkm%2BB3QTPVeM7bl9%2B2f0tuRKwsPxDtJB06zrwjTIMMl6SqpNErRjmxnWg%2BSJbeB0pkwg%2FaewgY6pgF3Xid7XX29BsxZgGZpvo2KdO3Qu1EdZgxbmeH9cGlg5IwV3ziFJssNZxhTwjHNE68kE8ff7Y2na36WI5uKgof2S%2BCjsAQAoeYNwSiJxjGdho%2BsSMHbUoRGehiaBi5mT4awDbFNamN8r%2B7XVhrZPaJrAFj5PS6WUnN8XUrj5gogdM4bMKqfLbTxU%2BY%2B99YQfFQW2O5HzqY8hQ8HEZXswIGqj3dGBZE5&X-Amz-Signature=510a71a3ea0ec20dd5ecc8cd1818314e197367eeb619bac0afd8d0aa9a3cbe67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
