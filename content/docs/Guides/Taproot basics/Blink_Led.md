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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJVFSLW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6WaXNEEg192W3Og0zlCAbAdoauGSt1Btv1GB50VpgrwIhAIlAceX%2F5O7V5lc0OY23gnsgn%2BfD0zqkenZfZZ%2FxQhVvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLG65gQ%2FNgGApZiosq3APfLcLkmai6TmBccj5cAZ5TNDAgaDBLm6A7tKackCq90W1avLgslDUtS8gIX6SvsTBiGSa6yF6SREczt5q0a46lcjTC97Hg0BO6Iys6Tx06Ai2hGcijfQpvazcgYhZy68TCJxDdg5KQPYSAUrmvtYwXtDHBVxhBKYtUwekYFTLKuTj%2FjUhTg2OjTPkzKdlPrtdNKZS8wMIknxbHnMBy8Gl83PixTHYohpLB5VLa4zkhpbTscfddzbv04cIFNdzB4mcGlwzn1KkinANDr3NUN9HvcSy7ngcbyjM6vSEX%2F2Js0OjkBNET%2FXvQx%2BKE7C0t08h9iu8KAkJG0RMetghilmbDgI388dhxWhkxlQ0b4f1YOlVEZjZa8VEvlkzGRl9EmT7MQ9A8YEv4qd3yWGwiwv0lkFgeoeCKz34f3X3a6QiSXoWn0f2iWXOp35bTZAs%2B8%2FJMR1lC0s94zc6Awru6Cn%2B0%2FJHivj6iaYlw1j96CfDGWgmE23xSLf1ENLuYEv4sg9xFHYWB%2BEhRCvtIx3hi0CUbRlJHUB0MsR0TKe%2FTYrUfS7ySAmfBSNw4amb9HKiYQGstrpdTBlpQCxVKNk5V3I0YmU5UU1Zdr4RNU9an%2B1UrMt5rWLhvIDmMsS31tzDapfe8BjqkARSTid6JlYtumeaHYWmZjrolEQY6xTtChRUnwxL%2BLcdvgNoLfbqOisPn%2BBkk8NyseXdLKLUFCfMfxEyQG8exLW7u%2F8N3OXtU88lESevh8TCfll7JB1EJMfYynRm5Gzw0o2BOrkJAq%2BHQ4U0LmJMGzpbsMIyXiTii9k5kkPS0xzQmcTUtkMrFA6cg2bh5Bmzv4pFevP7%2BiLwlTJwJKwdOkanxrbfT&X-Amz-Signature=9a43fe789b1d6469252d132ffe2dc708103c67519a8d6ae30030e7444ca5cc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCKPDQV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsryrqPyPHgNJa4lraNfeTPEFabiy%2BRHiqnCfw5eIt9gIhAPHCFCNIslVA3dcdDorYo7iMcOtFtKxYp%2FhlX%2FcKGRzuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAI1HXx0pZK8yvAVkq3ANFswTTTrQ99ufMRJe2NjkemWf%2FEF%2FC%2BKfx59t3jihkbDdMxRD2hxwZ8xgFFphIs4qWY60gufO%2FNWmOnmDa3DsrCemiJ7GOu4KJ0mKN7W073o8ten0FiH%2FH2IR0zcFiTO78nbhrUL%2Bge4ov1mKhJvg8ZiqUg0q4xyM8%2BOc50OYaYwElXHGdC17TX5PGWLUv0q%2FfQzMm5J5E4MERyqclGx%2FqZNi4DEtWq6k2CnKE6q8Inp8ZMloPFbvLxg1Hxcjf9q9Az2UHr1GcZIlTb5YnkfCO9SEQnqA9F0b1KQJ8uYIzn8CuPwA5vG%2FHblrno9Iki6Xipf1C2uQOPP8pi5wcT%2FE30Yh0XDscLaHQLoMvdqPTQYH7Cdy5AIPt55gB2CdFKvQEKYPcC%2FHsyCC%2F8tiepUwXP52QfT%2BHhsofhFvyLoJoMLpwTtypwS32sUUrPRfytbzVD9DdFJB7VJbwYRHwlOwayMw5aMQ76OJ3528miuxIUBGk6TmG2A%2FWRVulHDDre7cfmO8FvIgcP1jXos7SoNqU6S3Ca7qMtOoZgqH4UV7xsBicCAU6hkreVzsxc5bxmnNrceFzuCuASLJIPXw2OpA7%2Bc1hPoGUaC910NnFD5EzbFFSh6sC8NZg4FipwTDbpfe8BjqkAVo4%2BvyOysjA%2B1wV61pZ7Y0mHgIIgfrJ4jtaPxOawHuSgS%2BQLYbSY0vCaU3axKMvJQafFAktBBqIezHaXxQvQ6A2LhyUCUbcm26xozU1bY3E6ADX7g%2B9McpddCnn42egRBiCY7pChKecS6Op%2Fzga34qBxCl%2BuI6NSpkF%2Bt0ETX%2BZZPXPmHosoto7aZ6dgi126twbSMajVxge%2B%2BYP7Sb51BnCSyFg&X-Amz-Signature=f184666b43b685c74bc20354fd07e18ccb95a11e1308678fedfda9d5e25623f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
