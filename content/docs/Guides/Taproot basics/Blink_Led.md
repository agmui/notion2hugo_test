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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQSNVPG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDvujQDxJTVrD0YykbbgCO62h0sJsAGWElfVPuM7VFeAiAmlH8nw%2BMhuve1CLXmgoZ4O3KJFms4iSVGHsuut7XifyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMa%2B6IJ4Z8VupxRgdKtwDPxHHLgmP7FZQoT9mPF2gaYTjm1u1mLog1g0PxynGq9NpTgzvx1znmltZOqiEYf99nMMgCtJ%2FPNLh12XB2hX2qHIGetdU7wTqfF9la4djkh76VTqrIOcKGpq2PBXD7IX6rNu4RFOqzNP%2FceX4hd%2Fe%2FLoee%2F%2Brysat0Ed6AWFVwppsz69ao0LpN6OCe1ScaMpr0SZTKFvzARAeUiwPsU8d8A8eQ7LIUnt1eFpVo%2Fzx0jECFjO24ve6eO2TKi5Pvy2eSjmn9wWjE2kXYeUlQs062wNF8YQfwv8hazpv5XvWjc28A5PLqLL6c99TI3oh0%2F%2ForRlD5H4mJBrYLwKDvdiuouJkHGtEoL%2Fdvo%2BohEOFDYFfKY9WOc4yk2jfNyaFcrKSqfOCEk79R66XJ9FSMSh22vJAILsdoMvZxTME55uHj1EPcFJOi0jB2wn%2BULuzDW4E29bB0UY0XlAWaxXQHMY8or0NGDEtL96yba3%2BWFi0I%2F2j6gEyQU4bnvQLpFy%2FoqpsnirSSjI09mLxKszqmeVzMJ0RQ2ly9g341pUmXNZbYJYO%2FtS%2Fgw7Dk5be5QhjSO9f6WFjBKJ9XRlstlp7eWgie%2B2uItjdmwdwBLj5oQBc5Oswce83hQLGOYNnIRcw3f7DwwY6pgH2zeWUcZUMucuOlJy9dHUWx9cqrPoKzWbZCi6PWDcx06D%2FU25nmWmnIdQWHznra19yo%2FlN%2BVZ5gBH%2BDfb7zwwLD6q%2BOxmy2kd0%2FwOKXqJWe0kGpj3GvYahMog5DlcsDGV5PdYOeepdj%2Fz9NAs2ENqOzzQlKaX3qK3%2F19zTwBtUF4mUJeLdEH%2FmbFWm%2FZEvvg4rB08Vq%2FZNVsCn0lHnSqQMCT%2Bzzbgo&X-Amz-Signature=dd2664f6fb1facaa8b6424d23fd63bfdded4b82f671c485ede25009ecea01897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWDJAXB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUYOWmCpkh5Usa5dGRmrOI5C0UTETV7UkR%2Bh%2B%2FiVN95AIgOe5GgftR6wyO%2FAonIucq9695iis783GyMGaO1LtRaxQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWa0NeWoGrw4b0gcCrcAwIMIpMfNHVRQKqoezWf4AqHNYbWwyZONpwyankQx1iPEnU5PY9fSTPPc7SHNeq6AZJ85kNeDbB7PGBbK9%2B77ukKcyXzz5QQZtRYQyMYUTrHzJTDpNkHqpZcxkXSjdMyRgenDMYGL9%2B2fO750s4IEOxnEnfrLTMFQkqEawA3%2Fugst8pSt%2FQVuHxA4OXoOSNa3a25iTSP76OregFeHi7ZuVTCeclrmZ%2B13M0QBXUhXEZ0Tq1pPRJV71b7%2F7WDXA0rO9DJkqwYVLKccTPEZbP5La8agprXW9Z%2B7M43ygmSzV9PAGYJzkZlhKMUnGjsijKJuQMMssR85oBFQdYnk%2BXckon1yC40Le%2FdkxHhrH4rHI4ohzpx16ZZWAKaMLZNByNcnnMImRFTyyURo6wUsw2Mewf0Sz6MZ9DDzJYljJeyAPPoXvTGs28V7NDXd9opCuVAk61n3z0L6J%2BNMrzCYQFibsGIl%2FGXl3XmElHcNSe9VfAMyNDHAkr1ZdBtogSi2VnY0tO%2BoGIaipvyaA63wF2s0nlm1P%2B1QFpzE60oTNjGY1zRiVP4gevG11nFJRzvcn8%2Fugs%2Fb5TLXyk8OJURfiBTLHEfC%2BqfGz5HVPckxqNtzAQg0odmLC2CklYv%2B8p%2BMNL%2Bw8MGOqUBI293UVygBypaf3VqjDh9VqGJewwPNVMKXBuW6bNltoUNKZ1s%2FLoqeO%2FXiW6hlVn%2BRbyF6qKyjobOdNxSciXHbZNWXlajH32lruuAW7zQa2PlvkuBt5z%2B79HJ2AReNWOndblTTw16nDv9Xtj8gKgqfJUyaLg%2FAQkgKM%2FMHIqnebTSFQWk3aB68Gc1dzi2ITlh7bZwtgmKrgQWrvcHHCR%2BQola5VJe&X-Amz-Signature=2f2662d542c16f4cd96b00e8263061eee8b414e80f72969dc3c500b9e31518f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
