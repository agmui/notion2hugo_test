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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6OML2V%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICyhKqytdG7a9HmpFA0iM6AQ9mPLVkPJmsDSjghJiGSCAiB9GaKaZcYHIerL%2BRIHG%2BYqAqVH2RlM78pfYIiq3iHVXyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm5kR2ZOSxNn7BPa5KtwDZbMmRqF5f%2FDU6siwcw6T4ZRzAm3eyfsuoje9xMNTOKR2OZ6nVnWSutSd4pG6ECdJKSeDOfgIkNcWY6ARXWXv24UANhy1%2FQZNwkM621zGw%2FwAEFWSDCWkPtWLyoUFz76cJX27hb7EZfrJIrw4SWy3YVbl7ZULgOrjk%2FAxqejz%2BbXB4BAzCpSMloMquW8j8Cl1T%2B6PNN3pTjPlvOjmTYBLatKMinAnE9ao4VIeacCakOJkeL2CEKF1O8kt9Psiw0pyq5Fef1sMZB9EzGvGfoP%2B2Oii7iAU0D4pq4rhmz6J9SSFTWIGUD01JeZ53u094jjF8st%2FdC%2Bh4F89aX3ivmg2D5ZH9wZsPpZT98tXNMkYYyYcDqzBiQsrdXZz1EXaEPA7uwlcd38%2B3zpkJizGWx1X%2FRTzOXED%2BnsGWVXlNg2WFNM3UDCm4cpYMcZJ%2FTOVR70VrHUSDt5izAx6wo%2FoLJ7eNaMVNkW%2BZ7g3x%2Bw7vnr8eohP4sRT%2BuE%2B1fUheqnoRypyq0KbFaNxE1a8TWMsJjCGEls9qccObOGmB5cdPlrdQVWPbWvxHC5mQ2X3KCcn7af5kt%2FX3pV9AGMnZGESFoI4BA8CzwIw4i336e%2B9kHoGdDaJBZSfx5OtHc%2Bbsv0wweqivwY6pgFRb%2FEiXbx%2F1L1vEVWCd4fsq3lEzapRlDsu8cxNSeawFF2j0sCjh0im2mCWJ3wqb3H5hKg8rFK80SI2JUKEg0nz16m3f2vSg9CGD%2F2BmXaXKRVc924ynwYGRTZ501FI6jWqQkkh%2BanzPYM2vwHGTP0gk2ILdkJPzGseuM9yuHdy45vLO8KwQUeQhL7BOLwBM7vXbgh6EDedtOGXrwM6fXevCYDvwaYI&X-Amz-Signature=973aa3529fdf3836a5db78a319019ba29d58f20a570d8e54096d294459b937fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTBY3SD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDd3HR821HIQ6gWfx7q1N3rd7wqfjNCcg1UXt%2Fhn1wH6wIgNQ%2Bfu%2F4T7kWRhw4aHGm8KBwxk9AEL5oLQFCftlEsDKEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlNn1XHMJST%2BnspcircA3qikvzK%2B5jpm%2Fr6mBaZohQHAMY%2Fg98u3Hb0eFmoMXM64Z9JQVxTgXFoKnionvR0VgjNJJwWSVq4JjT%2B5aLZcZGOIFFTdT2dm11AmJ5CvgwoqbbgZc6gAIBGQiC4q5JmqTHTqIcrB09sLju3aeC9CX6lNrlIiabsNqD87dDfbjq%2FsFAu5p44fgMQJY1QWgoV8n3nmQK6sVcDwMmhMsXUGYQiwPUUT%2FFjGFlT5dMRPamBVKoeoEQv6ldozc7r7aKJnx2MpkMCy5sChnPVPkFcnPZswt2i9nuUvb0edq3hfKjtug727uPmUAvjUylgon4MXJSEcx2%2BLeH0SdQYuvGoFKOMRLek3J%2Fwp6jHx%2FXYx4yEMaQVF9feQeCtj%2FztM2j7d%2Bw5g4od60SDW94pmZ7nWfABJOA4wKgkWmKfbR%2FSRO6H7Gw9V%2BFm7f07OpNSKPJkq1f2gVcEBYfrd3O4w7AlwIhtUGBq8Ed5d7d2XDMCYVLs%2B5p0ylUMjb7KxV6ARh%2FjBLjJt6X8raTbk54MynkM%2BhG7WA5Exv4tw3n%2FAfEVveiNzQP5JKPL8VCkS2oldzM84hsZDgqwCZXfvmSrg85CY906paHR%2FekAlMRhW4nF%2FUptndVKNQ6IMdh4ZwzPMKbqor8GOqUBuOV153lbhv9YfBbqTPbSZrnbpEIEYAhxIRlyl3zOem3SOt4wZ7RIuOjJ8qTIQZt2YXsY8MNPD4S2ZcJN4eqsf%2FMYSNLSxNnN9RHwSAKYlDmMqBTV%2BvmD380aVe5oQ6%2Bace%2Fm%2F3N4cKhKsJXZPo5Am6aNhqwbt7mRvD73l8EyRplKBRUCYzTWb2y7vCWZ%2BAjkbGCvzJgWVo65tm0YBXBWZ1GGkhQC&X-Amz-Signature=6ae36a6295e65271d749a7c7189741f8d734c3cf5bef795f2cf1daab6d0d794e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
