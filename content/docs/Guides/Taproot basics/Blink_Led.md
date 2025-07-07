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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUPNJQ4I%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCv%2FtTF54TRAJMR31P%2BULmMCH3ILDJU0LmTOLDtNt0E7gIhAN3sVkmfsg9Z1C4t6EO7a8XqkKoEdr6NDcuTdZphXohxKv8DCHMQABoMNjM3NDIzMTgzODA1IgxBRIeiHJf7RO4I%2Fz4q3AOd69B1x9KQUUcVE2%2B%2BfceNfUTQ3ZqmenI9KRgNfA516CFd%2FFRa%2FnhF%2Btz8AWKN%2BM0ZPtIVtPr62%2FCEhYw3VlqgPPO0VnB40WpSGDJ27j342PC%2FIg7XwM2%2BdVbpJRACfMoxazxYqfkIdrq0I18U9KvjAmbQ%2F0bb2h0z2pClZ216qf3kj96fsdx4rprON6pOOziHjeVRyJsryabnbOre%2Fnqb191lMy3dFCAdMZwXZG5jE2tboiR%2BU73TmErb7RZFSZ09TtiNj4l29ckZq3WwLdcLbvOY1CZHp1gXLMJFGFGVz3QVTok%2BSYek%2BTnik8DI%2B5T8sJdw6z4xXoenIrwujV3UT751KMIbGOBQ4JcWwqGT6RX0ffLaM5Kyg%2Fw4dL6sfhog8HFTIqBPtvDEzirjRjQWqqQAH8tV1ph0OYXfAjT7r8rLXqtla%2BWwRZAdxRuso3qW%2FV4yVeyyo6cZYqapEPuRPUZnoiwWRhaQ%2Fm%2FwCWDY%2F0S3bRxU8VNWGVkCChA1UyqTqpQu%2FlZEp5sAgRfK4RE37yfhNLVYJBRPA6ALE4jnizNygNTrnoSuxxwsp%2FcJPJkjt3ABdBlVx%2FooghAltvYKIvrYkmkxwezLWXkKkKwS6ZVvHJswbbDP9wQbGDC3uK7DBjqkAeAjnX71kmdMsmRlThKfgirgsk4uvoSS3pX1yRIvfws49XelVPsvGj%2BM0k5tSzI5wI98mqFJSFL2DyzIpdRdiSr5nWEiZ4OsFobM0VCA%2FkFrmL4x69ywA5QJoqcz%2FlH7FNHeOWJIbKpm7UlyEfw%2B466Lso1aOm9GZM0nHreBldUQWyho7SupZYOFp6MhC0WpW%2BmgkGGJqJsFTS7NN7ExTRXogw7h&X-Amz-Signature=9f6cad2108291e6b78ad63c1887aa46130dfd7658275a761a03370837d056380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2CWSUY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGxNa74PvyDQmpdPggzmhVd4TJbqa160mCSZZIiKmclrAiAcE2%2FdiriDcOigXtvFCHs3kccfAJ2ngeIKZ3YYCgNmKSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7KRYOv5LZg62Nb1MKtwDkT13hXhRaiGMstlQoEvSAdKqdkWa4ZskEPW3ToJJf24YXnW6wFPTTqJLLEL%2FbwSoeQLhXRF3pA5h%2FCWCXNmsNGv6Uba2sx93zdL7AO4rp%2F3H%2BeSaQ9zehZb6grhXZY5ksv2cnDByr1IWyLANWGsiaTszWKaA8Rhu9hgNGkc%2BpFTqY7OK75tLW3ci8ZMWoR2Oyg5JqU1lkrQ%2BcfNB2PgC2I0tl%2Bp%2BP3UsX4r925Zkbu0%2FVEOQqUAtaD7I9fRkrA3xK5aduae6zn%2BDMaj2EOEkwQICyfGxP1%2FiA7YrFaX0TWn9NW3jtOPnsXObmFnVqNK6y0r1J2RX3z3t5Qpovr8pjXYBC0Ki%2F75cm%2BKts%2Fr8qnAM2vALZrl1ZrHJJ4R2UDHUgyHgQ2NDjo4cbFla1Ld5Ie87tpYUJrjYlmD6YE3uQZXX3LRTVQMfvBuh2CPLYYYO0xLCa1wxi3wYHJ0tpjVdVSuccGXTKZG6gyAwauBMFwN9a69yPIk0s4XnVJaJnJXtgE7oJUoZFgn0Y6mM9m%2FAIjseY%2BuU64dL8GrO%2BcexH6fuKSvhxK4JzLjMm%2FCyYUjgiWGwNlcBOoz3yakst2ve3Q4P%2B38QSHbBS2IiYEThUY8pzgcuSG%2Fvg0WtlSMwhriuwwY6pgFfUvN6ilUYwhuThOB94lELhBhXqmzbjKR3e%2FjkjiGlBWTGKWdH3Bt5iFlVLVqNehLYCXATM2oQmJP0uuRbmJKPP4O%2Bx0wcEc30FqKk%2FPLTWrNcctz4n4JZy0gl9ngqHF85sS9ag6pWvoASCLwE4Rm3%2FZNdMBHBkNqqOttojTS50UBGdssr7oW4ffOoUyJh8ngNY1H%2Bc6yAZm1t%2FVe3CWxLfQl23QBn&X-Amz-Signature=a5c851ba9835fc51d579180e986579bec2ae8a86f359ddf98379ae8bcdbde942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
