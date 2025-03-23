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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXNUFWG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDCcO68u%2BdUL439UmBtYGLR4tTEKfbo7syGwBHmy7epdQIhAOJWNUKXub1HkGDJxDTjF6ApvXkFSlvR9gWq2UTSQRL1KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAH1LTa6j3MwKJgAcq3APOBTTaJGU0%2FG7UWVwk6WZDvZVNNkHw9qgs8UrojLYCM7U22Fl%2F5Oo017CCe36fy9M9k2AegpyiBFy3XIkZdCdOilQqpXl%2BCvE%2F%2BSKtDYWkAorK3CqBunWxvHko%2F6C9SXxNp2tiedWUk0QRMcfowbiHIvKNhz7OPDLkMndfrAUNwzI9sdfDpGlQQo9zFDA%2FYIH035w02o95HZk1n%2BerayohNQIGrp%2BWD8eXXVI5DpvNaq2vy3B6FdzQHAD184LFzSrXGVYOeWL7h1l5XuabehkBQAY39%2F7Ec5ZUivmsONVdTEHHutQQuLluv4%2F42yISegOirMznsuAKQNS2TwknZvt9g4%2B02KNTUUFlV8IviykQqeBcIwtK5tyKwZUqXOWMoTa06lPw2Hq2EooVVfAof0d6MQwnevFtDpKNboQ8Zharj%2FiN5ofDZoWLJ7yONixZltXNljX5NzrQe3MO9eISheKyHAd74fnaTZURZ5uXUpCwHHObooHigVAsl9CYucBCXd%2FkE3cRPl9X8RnJzo%2FJPDNxuY3WJJfRc%2BHC0qn%2B2jvfOcHj4QPfvnyU%2B%2F1Ju5OsYlbLPX7Bu4SXiLcSO0gbBm3zql8iZl4fX2YcRuMUnnOKAWVb4V2Xqw1t%2FHJo7DDC8v6%2BBjqkAWV2LTveokYzBYn70cZY5wNtqj6pjwfCfG1Ubi%2FubkrBFgKqHCv41zhVChlnp2FVUk4mAQ5h%2BIsnlk29dn6aggjQFgGdvdGKc6CJ7tgsXsFf6r9Pkv0s9C77ZDOUu67JMTItibSMHgQt2%2Bo9mTQ02ta8WB3RhyH6rZMHIYFnXeQ4PV7u8i726XLqszMaf2qP2hkU0nVL2jFS%2BXtzB8keRahemg8h&X-Amz-Signature=9590060fcea48a9348693673914c4d770f23016d283607dffd0bdb97dde4caf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBILJNJS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDiE%2F4V9%2B3m6PHVRQCWqWfN%2FGtgxRjpH2rKPA3GeuIwoAiEA5lB2FrCT7UyCaWBPKqaapya%2Bo1vnFl5wCwYXNOt1lt0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImKlwDEO0n6fnBvlyrcA3XTsSH96q0PQSYXefW44%2FCOkf8rFqVNJq%2FoSYjK1Mv%2FGiDlhXepSgjEZSPcoYJbugdSCbKMkrMZ2ebRpPoeLnHaxlMP4loN%2FNpZS9hiSShm09cg8l8cOGd5VA2I%2FNi9Odk2XirhouRT2kxRSNwfM07VGqupQTBm9FbErlAs3EJyy3zAZ6IJFQIZIWCgf0YGg8hGqiHlXs0NINbYN2ZO6IKAD%2FSqwDYIsjVXW6OgA9ZTFi3G4gpfs56sLsHC88dyeqYp44WVE6VtVz0dFZ2%2BKLrP1V%2FVasIXsDSPpQYF5RGGZ6753u8cVdmP7u7qmaoBBKWVlQuuZcZnb0ecawBTQzQWR83cJP1cGp4P7OylgYTK%2Br59JmENJQ%2BPmNgNHUy214ZcXsfoa7hT5msbi8bICnLhB60MZmRnEXz1QrdbM8LobbdsAc2IG7ilWhTVPDx05sJlbN4zOn21saMRswy3%2FDPtyIkC2jLmAed1KrO7RrgB8Yjttj5YplGDlwTqtPuMBGEz0o6sEXz61JlEJqi1euCA3XONHRtOZr3Tzq0WpheDIfdFdceo8GtjMqETOGqDdyLOR1YF9RreaWL9lCgs5EUFHG7wmygY8M7Ka%2BbxNJLFoSxqlZ9xl2f6wgJoMNKk%2F74GOqUBJ0ZFloQa8dzDIgmmX5YYPmlITMoehMljtFw5ZycVk8uIjwkZaG4i8KgiEFfalutZoKLWfLb6gizHTiP1K1mpF3nSf%2FuIeoTYbrwsMt2DnZZ%2FvoQ%2BTYSd%2FfgbbhwMyVyAyBkz0njBW7F7OZoFYQc96bXD1PvOhj5NGwqguZor9DASCVtXEJn3mXZ37GC0bd7sDi3tvELaH50J9lqq0ELj61Xyak9R&X-Amz-Signature=2fff890340bace50b370ba8650481caa74fe8f005b5d3ea7f473efd54eef02be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
