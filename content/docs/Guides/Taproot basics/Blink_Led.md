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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJQHOE7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbv4F6Dhvvubw05dvopu6leVas735gXYXxVKRfS6wB%2BAiEA1qc1VmgO0UHAO1wjo3CxPsNxDz%2FUJm1M8XSKABcmO7wqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoyTtV2z5gL%2BR3KvSrcA%2BBpG%2FwvcE4vkWOxSB037iuyGb1wlgFrlVu2yN0ChEQtE2vlX9ag6yMeHRYOyrUjJDjCHE6R7HPDgiLg%2FEjqi4KZIJHBuPQKz1gDmrmioeImTJJmJ9z7lXGDgGyVzf%2B0WPweklJ0GIcTyolcG8UZHT0gOgbdqF0ru7oAjxXc54yNCxvomZRP88Okyz5eS2iDd8QOEydJrbZmPU5TKyDkrLLiXJNopyQtzyowzExxny3WP0rK2fieut3SfnWs9iUwU9i5HN%2Fy7zw4cODZ%2FnWUmtOos%2F3qoCfsVlpCGmTE%2BVmhLQSTaoU21pWeGmpzIOb87tVSGOEm81QHSFmMV3a3aIxWt3Zz3wEKxLPU6TSZb8ORuMJwJd0TWRiSYZThMFFnhV5sLXv5QQITN9gBhxaO8FNx7eepMJO%2FsBgTsp8jwzg7V6HoQV5VmR2RBjrt95y3M5IegfhJitaH76JhIauJKCOWMxNrs2Y0ZolwMZohPD1gJ8qPb%2Blmj6TiIlDCaWz%2FR6tWYKstKjLRKagsBIrOC804E81JZmM93HvTQxqicZFBZz8GEl9FFZkBbjZmfx17LM0201AJsLygTe0vjkJJZzDLYaB24SPrMoN3yk%2F2dKXOv65XNkhSds5oU510MKb%2BvsMGOqUBhjl9NDq%2BzvQJlkIewgr3ads5qLHgXccuNfyNhYEK%2Fw9vYuFs9iAAioQUOescDiwLNuD1nLtMMMDF7UxdVkvgMOoT8bIFjYR3%2F25fPFF9%2BCdvfHTUnh2Mh9lHYrHoldgk95nfY1SCmH9KxOLKh6VlsBpEQvTgDC05wdLvEG3MRUDwbIx5XOUPh1xk%2B9MJAnC08wmlUlu66OmqH4FxILA1isWUyHZ%2F&X-Amz-Signature=293182ef5ee40a1b81294d52a0504fe12cf26d095b8b29ba32e63b3244f911f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN7SY24%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0If9wQIjfCf0YOzY41YuGe6P6QCWv1GlICV%2BmG%2FVwVgIgSvxSYMZdg9c4luZgUMrh0ndsgRPArYuNqvZMOvcyRDkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVtOkOdIqmWU3hl2SrcA%2F8SvdpOLItME5QzxSCE4qwy0k22689O3xCishna6vu0R%2Fv45TY8c3ETDTvVNSVW0%2BfcUINmqQcLENh2yPSB40TwJy6hZiNHEY%2FZHvJxBnvA%2BVPKuUMF23hdyHkIVqBcRFB4u%2BW1rEmzOD6bm2GyZZwAiNuoJp%2F%2Fy%2FQ9HDHwOi6pMsZwm6kMfGGUptq88QJL%2BUg9PACki51jw5MXrV4xOQD%2BLQ7e7RBb4yiJc0CILn52DMteET96BzJTwGnLPqLKe0mCp%2B%2Fcuc32zGvEAYFk38ANukjoqoB2kmeSxwZS94iJkCImr2y1KpyEiaGf6jq%2BLxTPT6dZRcUz%2BKE5qb4cdk%2BsrXex%2B3h%2B%2B4t%2BdW5tCtk1GLYekrKcp7Qikni%2FvcLWUOPFFxV%2BsOOtUqX6Nc20DHlru6SaY7VYf%2BYtHbE0Xt79hMzt1SGKnfmT2yJvBzyBwio4q6CVd3w4bzwWaJGRrgVPddNcUGvyQche6agjfvo%2BttE2yG%2F0LGkfAlqatLzA5WEBbq0s7DpUeH7X3IVcNQlKwGmafZLytYVQCcpfios60E1F5HJDON6gG5aDEsk3bL6GHwgM5lve4ty9ZaplbSOae2hAkcAyR6kSBjB9G864ovvsCEwShIV1792PMJj%2BvsMGOqUBz94xYLfwPLGyH5x02%2B600rgQoAfxIT0zS6t7shhnsFhsLYKpK5adB2ZmtjeMgRCGmtSOUMETFx57pKGd6QSN2cQSxUzoRvBzKtDcmUVvRWnGuStOVKM%2B7S8VmX%2F7tnN3%2FeW6ekAi5Z3G4OkN%2FRCXooqvYcval7Tv14eHnLlUqZeI34T812RTX6IQdjiaBJAemsJfGiVaSYKuYYtJFKXvlfCGsESd&X-Amz-Signature=833f5311ad99515624abc89025bcf7a618b602bb70c05514efe7c31667cf9f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
