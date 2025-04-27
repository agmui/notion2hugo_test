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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5BKX2F%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRWrmnjdomRNooh7b0JmP%2B7R0%2B%2B%2BcLyVk1GgMJaLAbFAiEAjDGKlQtr45LxMWqNm4HozM2UAM1lv5LxpiSs440K%2FvAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAMpALHBAqIRvF69QircA3AXHY71ciR4XqGYpq4CE2rM3e3n3zNle4pkGhGvvpwoJCFvrB0u7DFfiwMHgR9os%2FV7%2Fc4TujnSMqupf06n1npX3NEm4TnzvbFZ6Ne%2BzYU7ct6Rd5OfVS2Mj540bkLlD%2BSP972FvF7gV68yMU0VGSsqEYAMrhFUJ2qs1UoVV%2FAZOHXb%2B5uDrYa7M%2Fe7tSMmKh%2FftRULgSjMWAHDwMMCoIclEMoWy9PdAnyeCecLyL%2B%2BfWHIvZjcLWSQxv1TYiOINDbZA9RnHHQmxWDg2c%2B06PTEZBxcygHezQmXPx3EtOAGLJf0wwFz3I5wg4%2FweSaSnmLWj2g6BjJ3IwdTllKNSKcoJJLRHj07LmmdXE5749MxUADTQ1gUx0%2Baq4KWIBvkj5b5uoq0oL%2B6fcPz1tOHEa7KxfaK8nVGhTO6FTZgg5RbHMMgQYMzWi5lZUqpbrfajagmHCtR8Q%2BnF4qDeGrpoqMl1UpvL%2B5evlpxivq4vRwBQ6cuk79eyZWPhm8BSs257PbJCYbm0Ei9c7%2FOrgUh%2FcwQde3tAE6OMG0ejzFkmAmt7W2HYjZXExbneppzuyeykGshFS67dc0LX7v6OnhHh5iAYFamlqr7QpzrqT34VcxpRRgUl2pPoV7HIx7BMMGMuMAGOqUBHKNgStWUkmW4qdXK69%2B2ZkZ3jeuOJA9YCmmWeioCGbG8wWZBzRVVrFUFwxYtXAL83Jyx%2F4cOY2Q8zcK1lJJ0zru5ZibV8mgZrj6WxsvHqTm7x4UNlzBvEXqe7L%2FFtcUlJiPdkU519wqr%2F%2BCN1dVg%2B%2BkWIk8BMTQY0uR5BTwoiKRSGsyzjw7P0aOnshiKFyt3WQlLI%2B9W2EdfpB9vlG%2BshEkzBTXJ&X-Amz-Signature=7982c65084a870f9ce8014221dd898ad498e83c7103ab2f269df7a683f1c5e30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZSTOKA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6wkyCchxsCjF6k9pHm6V4oiAti%2FvjAdOLETk%2FLC8sFwIhAPnof6YgrLfQ44T6VcoqAgGuzY%2BVCyD8Ltgc3spL1iBBKv8DCFwQABoMNjM3NDIzMTgzODA1Igyw2jC3Us%2B8i5XuKMMq3ANJrFI74t0l6CU9sqabX%2FIyYq4o4xt4LYgFuecz%2Byxpynm4rd2VgEom%2BCmUUCMuTvJR9AUz0iG8DuZ7cS7adkywvu7rbOy51nsGlxatBzUI0RucOtgEzafs90e4b1mekqSB6rUmpv7ScNdHdEVhb0J%2Fltn8BKy7F%2FzHvOVNehydA%2B%2BjzgH%2BmV13Jqd7LbdmxtfnNqKxAJ%2FBaX41n4T%2FFUAQ%2BWmvOOGa9vVlqyfU2ULpshRu%2BCVOAagUlOOD%2FQb49VozuJqPbTASEckRK%2B7EZMdg9gDYZLTGoVD7P%2FdgMiPOUCcB4b3Xh3bLVNVHXHNJWa5TQlstY%2FWVg1SyGy3O9UGoCIrdwlSEbVCCDM20GgLIyYf2vXCjTflZzwmP1FnHqsVpsKbkYdJKJfawED%2Fo6GD5aGH2b6pP4Zp%2FTSAR5HEnb0UAKsUQ3b54c1KINJipqLgOYjT7PD7puxJ7BWi2uwktbIGZtUOiwiFv%2F26vTXGCXvEmNswnAX9o8QH3cCJZwzU3vJAS6hfspX7omsstexh0ky%2FswQHCYWxOz8Nmt9r4ZPEn6%2BGK2UxKmA2xfzX1C6IZDfJuRlHHg7w7%2BsW5K8%2FhNrvfZO1tsANTnye%2BOZd3Un75Y5DrVsAIXHm7AzCHjLjABjqkATZesekRi9w3REMzF4mwAKAoAi0ttDk9RLP4TCUi%2Foe6%2FH1ku6t9XSwiG6hZjm2lCS2uZngahUGSw0C1M0HKSzO5MCBp%2FQGijx3JUsBhB4tW3wV8hat0qRwosO1jK2oFFx69ngDqmN02iEBLi%2FfCz6AhqgUzrfCzeMSB0cDWskJz7vWRo43o850EaFccCUkgsabv1SC%2BvkP%2B41OWPqXdYtmujvnu&X-Amz-Signature=bde21613f749628d7c5190042a528461c02a56882938747fff852c11f1b0dcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
