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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLALQPO3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCopdvKOsha3NA0VfCglvHlYH9S2Yu43fKqR%2Foqr8bUDwIhAL58Rfv2IsKD1N3B5h28IlHLtQx0mPNb%2BpNteHvWLaOmKv8DCG4QABoMNjM3NDIzMTgzODA1IgzVzx73Su3pS1EY4H0q3AP9mSJSY0UX3lApe5Oj%2FyUJ8pmq4jUyPTT%2BhtryiP7N75z7FV%2ByDU9mPX0rJ4pGuKECF%2B3%2FLmYiRhl5eYAOQLdOhfPlwTIRyfzUD1Xc1rJ1lyDE4sMcU2vSgu%2Bj4KXLGjD7sfvefj9ZSTes9x8l9dKPjVmJyO6RyPZJhjaFCXNzPxgVD82uQTsSSpAFat%2FiNqv6WNueL181kgMAkVy5PW40QLFm08bgcgvRnIDIVkyJymLowBeTa7iRfdLnv06qqPlbM8SSTr9z%2FpMgXFO30YkAP0JXEzamJZz7jNo4vi7wqTH4p8dcKHrL7q%2BZDKCDP9P5zY90Oo2BMLfn0cyx0YR61zrzUlW8b7ySCA7lROQpeqSuImgKI9Pww3Q3Y290aX8YaRs%2F8M7UH9UVGDxyJs5htdVF9RiW8lZFoe6%2FJsHiVrGQj%2BqaiNfczMUgZh%2Fkozh18Wc%2BwmTHbVnbNmCVj%2FHzc88LIRb7XARvbIOXmiiZztOdkYrhey2nXxQYPO2LMnMZ8sWl6%2B2qJBxN1jGG%2BzQRmCOh5o3iGyPQCDurkVw8iWMBXZjq0xti%2FVhQZGb9fUSr8MvxAC6fEfnvzl9W%2FkDU4mdmjjpjUlsn1QukvQx%2BrZsYh9ooAHenr618XzDf09K%2FBjqkATy7kBDEZQ9efgqpPt3UjQmF9LdCDPlC0TdzHOrDOWj%2Bv%2FV6SeZlZ9eggv31oMorRYRXi2ea2seGqXbUOms2awYRsEv9ud4Ofa1BfOhYqFdXDp8wwyQjY1os%2BL0iZLO7475AQdZFt6Ht9x%2FhwwM2Pp%2F8ZQ9Cgl1zgSoEN8NqcKJr5rkqzJStk6zSCCYSR0JFoPcrMNOxznHpBJNe9RPSH8an3yla&X-Amz-Signature=55c6dafb6b5368c2aaa17a59d4ea4020a818f3e7fb472c8ae4f3588bfe3bdcba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHRGFH2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtIOyy%2FAimKIoyNfniOLNx3uR9hj3aa30eMkdN9YkIqAiA7IUhwKUO5XyDh6DWi%2BVOekjQT%2BGThXrvxpTgUBBe9mir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMOzAjtkOA6a0YCD5fKtwDV5015y2YGer3gJCsoaXeXLFGyBCsuecUS1%2BNTiCevLxkKUnFjDDvXN1i316fjrPVPvnbkbGSgX33eCaRgVusNsaK34do8q01%2F8PtEfV%2FMmZG2uh6UDYKfiPoGRS4sYc%2BOEoH5OcUKtV9kYco7g2HwcuZ2%2BQBeI3jEAg52IjB9gonCW9wttD%2F7M26pidbQ0GpTa7y7f7t%2FcA%2B9%2BLQx347KHLNZC26w1G6oNzhcHpCovFwAzj3Lzz8EiwA091k9yoG6GxKRxkp6q7vkJP3GS4chaKqt3KQSkBWPlViavJSUN1pjEhd%2FQFCmQJ3bRaSgOyVNJL0bg2FC0D%2FOVtVmax7BKxT3OZN9FRWnQEfMjB88Fy62TMIb2tD7gmuUYGZUprcM9C26hIjZ3t2CZRQ5QpkHkJYX3zSnVxH8Wix4Z0kpNbKsIt0m4G0BVC1r3vLs5aVgHpsoYkDyB2Vx0OX6VehQ41KqzArNz5sak6IQjIHhmSGUE0aK6FEQjIe3y1HG2I0yyb2Zur7KRBr44IZ8lqYEKpXGMU2jNJ52ChapBmX3hsBlKTU0aXDb0MnK2LopCJy3SNDH6y1phUABrvQ8z4Nt1%2FbhCG1ZJpBbYgs7xmbRVQGsfsY5UWgfhCzyhUw69PSvwY6pgHK75DtRcUm4AkWHLHrW8cyoLYlEczj6qmKNbV6vhzxizuCAytJ4lmoiSqeF0tMlTNn%2FSxrn%2BWN5dM1%2BH2ezmh4Kr65hDwb4wBctjk0q9SG9nwTfFV44bQM9o7jKZ2cXQyk4z92o%2FT9C%2Fd6dFz%2BDjXEqWM13%2Fi4LMRjzBqDgrhgSdMPyL7wfPjegdtDIpJGRzeUCh3YbzcLmXgDvlA8cs1%2Fby3myvXy&X-Amz-Signature=057fc6ab338977020a4299ebf0b8b038efdd349e99136189abe90eb745e70f11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
