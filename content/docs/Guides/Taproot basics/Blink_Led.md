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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RH3UAGN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZg4JCLZqagvmUytCshzstpJuTEof7lDhWUhPVcMstpAiBllohXPQAC3Np03ItYJkly4f5KuQP%2BRXKy%2FOF1d8p3bCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM2x%2FIh%2Ffyqs%2FZzyZQKtwDr%2FLtHspuNG89dUxDhkNuRVL3Pbr1OMUSy1SGwGm94XlpS%2BykE4gby52AFbHcbJrndQJ5y6X0rzXvZlnBf7Ios5RlY53pDsW98FRqERO6K5AEzgWpHWcrnGR%2FkqrmJN0YFpiu6g%2FK49QMjAFYFoKSOFqU2dyU00d3u3LN5piDXxiDLYq%2BIDo27Tq0pazigiKpqxlLDeerFUAbthmlhlgA28XwaLR995S3WD86uomc12nUZ2jdqmKhLPsBNrsPuOAe579X%2FWlJdBQMxz70jVRzNX3y0ayiPTncRXvjrQ2H0ui%2BpNHCxrAcy1Fb79jDUUiQeDxwjyZshNZoUW04Bukvb9zhZhCw17sPqEt7fPQIALiJd2zBcBmNo5gK62me%2FjioL%2FcSD3WnwqENXGfGD0jggu1boCqUnlbbArDGPrpuRE%2B9T7hCMTWEJe6Oaw57vGD5Ht%2Fe%2ByRrjokWC3EznoJ1zQqU%2FZOzrlpSzdy%2B5aox1NBfTJoL0f76kKp%2Bc0GCFMBRUWnUwXuVCJO4drqw6Ihw%2BClL4%2BqsSv%2BSNsBYaQxZhr2c8o3hbGI7jQqqKRsD9l8o0TltMMufVO5lrPDqwOwqJEh0Irl7q18njhuWGULNJH9iZS4lm0COwvUl318w8e7VvgY6pgEjtjIjjRT9Gth2w6IhNMyQ8sAxJxmIHWSKi7RL9loLyh0H1ApMXQdFSNFK%2FzJXd16lX58vmJPuyE1fcc6uQdzvwxV2%2FZf%2FaHFI8dPaTELFQZ9xWpjszpPfYbbUxFOgYNrdHHHy69FjGVMqjKjRTqCjJJro7BLJwq2gJbbPXUA8uOyRUz4b6Gx0UDcogJFuaayaSf79QJWEJx0V7JGnlu3gJny5yxs7&X-Amz-Signature=49abc017c2138b53460b1dc853d6aef7ddf35275b00eef5820a7f26df14567bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLMIL3V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDF6ZT%2F%2BpD6ke8jc0igRq4vdn22PsrWj8XeWIDCkpJ9AiEAt2j3YWvJ7axOqNzCXydVR5yHK3xdqqRaoIt%2F583Mv0gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPF%2F%2BvD5iwpTt3R2IyrcA8aHh21fW1QCwAMvX7rWtRMhiMeo4WX7kV15%2B6Vd2M26MJ9NkeeWA6BAGxK8MM3stWMdxqjj%2FYfTPDwGE0GQeI3A8yqfn8jpaRUGpawaW1%2BoN0kj4%2BU2Y7ZOkfwCsCNduJOws2HmjqhfWr7F1oVY3c1uneTLh77e%2FBBVQckC0%2BR9m4X3He6c36S%2FNzIeIAKQnbU4D79eeacWc%2BQ%2FmhhlxzQUbEAw8S4EOwAlO1%2FjXOjMmepFUTOjUuiKcAZLwv29TYLRvNc15FU4w6j9GTdjthUxSo1HsfXsUiKJcsUniRFDPQKVYSQ0d4%2BsuqdqCVcQbtcNoBbOCYs4yJ%2BON5lBg9RxIy%2F%2Bg6QMFfR0RVES97nnpYnfayRV4W2ISwev3GwTmfflFuSODw22ZcL5LPwisL7H6GUJr6g5Mu5pRPyM%2FpjkMjJ0zIWXJcKIdMZcx0AzyhtvShiubD8EgqCAADgbZMQlB2rsw78%2FkqoGpLQtpN0%2F%2FF4OafynkZtMTIgERpbTdRRLvJ7Tump2Q%2BmXTFPTXS6b8hmz7bzGTGejw8M1R4%2BOLM2pGO%2Fdq7ZuUm3rFkPfPYBEAfKLH9AHRqWYGyC4WSrW8ZGvB0eVVy2kNHtPH78TNDzqouMmPtZgrUpHMILv1b4GOqUBHvFfL5BZXz1yTtvCm%2BrZZaljdl%2Bg%2Bh9oxgBjEu%2BC9pXTsCWJnh9ZMpLX7RtVDkXPRQj7E06jaArfn0cdBfiNYmlPgyPKkt0ylbYvPM%2Fgf3MnfWmpA0B%2BCVw6gOSq%2B09ktNGM6qcKmQD%2BH47TCNoqF%2F5099Fd8IxzNM4KBK4fSw8fTY1%2FYLgTeSs6tbdl%2Bk2jLZgzVcKrYUvF7wvA358nFNYHvYxE&X-Amz-Signature=b2750b22d49a0be55fc6be0a366604ba4214e4d161d25000f9c5124251c7b961&X-Amz-SignedHeaders=host&x-id=GetObject)

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
