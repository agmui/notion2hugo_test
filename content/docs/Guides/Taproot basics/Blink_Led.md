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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3Q2GO6C%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYm8J7h84SVvdRPYNPCsPAdOwnLnlzJy2x%2Fgyyfia%2BbAIhAIyvBd1VaumlfLhLQs1Zyys2JppTNwPpP5VIMcq4HlHpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLrvPMN2YtNPCajI0q3AMwCYyt2O6U6fFR%2FfRDCnkj3o%2BufdxSL2vHiIFJ4bz1RmQALUKIQAEa8T1ujzGeZ3kJzpHGi%2B7iVD%2B1mBTLpIfq8WymdWqVqc6bo49GuZ3tGUo1XgmjBxL9w7W2cA5Whvswd1wSYBqiKmbcquUX5XcvBXis%2FnUEGdB4xWl4FuyR0bAs%2F0jMO7gUI%2Bj8ikHFdEz%2FTiJxlYMKssEHNrQM5QCKNxm37bCAo76e3qVPg%2BCsXyS8nT1wdt1wNOWYxejfEfcWfurJRKvDhDn7MZiFVmBDl7Ynlau0JDyRDyluM4yCWDq4UDjgRJw%2BNkQUyD5GhiH%2B3nZhtQUAnaBqb6ywN8KiPSvpe59SAWhKBapK4Pv6MneQg16xH5TwbTm%2BocTrD8px7MQ4QYgikVt1H%2F8N3RaIl54g7LOIl9adA%2F4P6ryOwUHYinmNTooWNQh53emNbVyJYd3Nupt1jzW2Uk1R31M7J38IC%2F3uRlWmzZVyn7YyLooDybaI25RY9UhL9t%2Bo3EINo36nAnWj3PZSfSxB0q6V0M2kGZ6N2lTxbmEIz3C7po%2F9CLMJ8g7%2BBiTt0sabZCvRKB5GACAnomp6PXCsFoV4iTvxJlLCYXPhs5D1v2x06QGc5XomzdClwYMlczD4vdC%2BBjqkAVOcG2TeNovZJPKAna8HSK6mNgGN4DFP1OO5QbyQ3zGoC%2FAK7d6cIwVztQ8%2FiKihWdNEaNaAPlE2w7MSq3xCsamxltqGvFwmTQKMwh7yoNyy9d9xqugORf1q9jSbdqSUaZFLVExU%2BhKmj804WOn7LM1OmHhdbe8oC7fyFX%2Fi6367drX0LuzaZuO%2BMzC9AjJVFTNXltXjdGiPtDS5uZX52cJglOyR&X-Amz-Signature=f828f014d468ba7a42f562f35903b7dc833b122e77f6d3d8a98e24f7a4a1c3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4S7ED6G%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy5K0V74Nd9HU7qcXUfDdgxVZolzTFWF9NL0Ky0Wg7WwIgZgfd6sxp%2FuAqqNWPLtHmjhDOgXJC8LpZctru%2FFfFP8AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrw1NF%2BHQwem4p3wCrcAyOaiE3ZWKP3oQ0N0ZYodKJYB3SN3Kh2O7JA048V0HBTrq8Iyxgp%2BJ9JoXS4RNBCGbuN5dFkrazMK5sJhLyYwce6g%2BID4magSPdBYnjMlo6RjAFVr3zKHWqdgaebASwU%2FErDQjCgDNbgJIwfYKbPqiuFfl8WiGRnss6V5YVP4WbnvVjFTVjYdYUJ7X7VuyXbCKgy%2FrgZIdbwalMb0ptc8uiEQLn1y5M5Yna5p%2B%2BunnDfw0q469nLjT04xQ%2FOm20%2FbfcCnc3P4o15u3L2QyO7vvWdpXhopj9gphYcfb%2FvuV4mwgw1agLCFVZg%2BucNHEgZw3d3ldJ0n2ebDZFIZx2x747H0NxqtNv45rPO0Erw2ZDUMytFk7fJ6qeWEEBzicKBbGKe%2BNJOS1NuHpGsb%2BG6a4OuR%2F5PLa5lAi1YHJ7ce%2FagcITIjZRFpiL%2Bg7r8ktJtnUssw6dfeT8T86wRX1bqsXnRGinoyDc2j9UIpiEVJDzm1CXgHAnf06lRnoiGIYjERelWRxGIeGDqFMyq9K7xs5cfr1XSP9VniNEpbZ8hL8BT19YoHXce%2BHTR4iwbau%2Bi2%2Bl5K6L%2BEQxbFqij72XFLwUE%2Fo0oxlxvO93vXUoj3HRtdYNElg6NH9CmNfJeMIy50L4GOqUBp0RenEh27v3qjXDRhEAJLJttQwTrRnfISg6ZfpXCUByFHUFYHtGKv62lIZ5JK9gcDM%2BaAWGfTLfjJ%2BH5ofDRYSRmyxNN8v5C7Osh5FjESJh3eYVE7MI%2BxXqTHxXiNiu8eHHySOM9Xjb2OhjQPFONFqU7DrJz3voEXSq3OnWjbPU3F%2B9IKkr5sc6GajsCQ6ZblLYVCDzv0H1HX8cyoJkBqZzmyR4B&X-Amz-Signature=518ca27322473bd27e237ae3633ebc87596d500f63cabab0d1bb4a3439a0cb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
