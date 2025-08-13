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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKA2QR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTf52VCrpqwfJJLZzqajQuFoQWOJ9o%2F0Dl2UJk1UA22AIgYmvOHG2dACKvuvpUZ7UXGB3Gz%2Bg8nRv4J1%2BOjDUTDZ8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEKSmN3hXo6YMbOSeCrcA506SyV%2FlA96XqBLAigaPChiDx4cFnj8GznX4qga4SN09F8bqXjxI5Zy3KLwGVDHLc7yynqYslSMmP6odQWpEmTmeEL5QKm73F4nXH2u4j6B7veOYXMooKNyNGrocr4Ckx84JRKD48NI1NXh5D6MU6X2LXBZlerSIBcGjYuZD0tDPFt%2FQNNjHN%2FYBTje54%2F8R0czmMN07ZDrzbooDMQyA9KFyns6OlonIg1b9xgama1DLuKJE3G2S0TEjO3HMt7d0OFOx4rJPXNYcGqu%2BdlfFea4vOL8FVUUuRBm2NRV7NVeNr%2BMzfFxL7FfI1Qg3TA1OAukSMonCiuUFtvghX0KyXV772vogbK6RnH8AVRWDb44Zhe8rG6NDgh2xAwDTH07zX%2FoH9vAW5MFZY2ERRuuA%2BK0on5LHESXv64hPfIFoEqVzCvQrPdGVW7JZmgfK4mhqfjvegwv9pyUUENiUpWo1U5ngecukAva2lKCOtMRpDZSEKT5z3EbbH5z%2Fhpvmkn7oxX%2BOrQ6224rRhwgLzbtAQ24T%2FgxcMHicQmfOElZ4DrEY7TpqtujuHMsi9Nw4oLJ6CmkWtom8wOvaSfo7zewwfPJ2T%2B%2FzNsccgsluYYL0FtWWnHAgFDRbjpcq4JsMJaz8sQGOqUBvI1wTBxCxyJpE%2BmAUEMDuO1Uu0orFfaaH4BdcJ9ADlxOoA8IQ28Q4sSM%2F4zsbX4l124PGT1BRwsrkdQEqfhIAHmDARkpjQA5ToFqExjO3XBukXSSFOsJxrONoxMp5AT2yBKv7tUOkKEpwoG88ZdwjMNq%2BrlYB%2BqleVHCC3Rtm%2F%2F3XlLCM6BU5DcFZUP5UwkEw9aL37anjLgkTNsQc4wPzQPWmgnI&X-Amz-Signature=92ab90978101129f8cf9a4603c6993feeebd1b1014d71c83dcdebc6be136af11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5DLOVK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjasz24rcnViDKb7BapQblGtT8XZZ0ZKb5CyfFHfjkegIhAI7z8mO6gxjSwD8QsseF8iq1azmdeHiZyvg%2Ba96DOiTpKv8DCC8QABoMNjM3NDIzMTgzODA1Igxy5iPQ0slXQoIu%2BLUq3ANUkkvgb7GcKrZzoFvd5MJvOLkXAQo%2FHJJpDETuKozHHbBWCezzQTGhm5g3mizU0%2FS9COcC5cShyLiAovQD5ZtpeZd5yypXriVRemZ%2FpqC1fK6BAwQpO8b8AXChnYTZjlMsBguMUfHpnecejI9C2SCG2RrVhkX9anb%2BzxBxuxaPMFI4UPAE0BWXCWHDv1VGfKSDJIxF%2FGIdLVD6AoO6H2espalBj9n2XzGMqshzdTdGafi8hZhRa4%2B%2FJ96VYt%2FQCCdiQMhX6SOCUTxgb1Ghj1p05%2BSOjjFavEzyYWZFGsGkBolfTTD4wyCBDFjlf08APJ%2FUw2adiYmEUkssNYv5X5CsIImDBVFpxFqBbDqxr0iIebJ03pEQijOMzChfQpS8jj0SBf1UW6mZG3YGWqxqjjCt3erXfImDKmlnBS%2Bnhz7WWakJPQsVxMt2pUyqcVSaWtZUb46%2FiSWTXdlj00F6MfOkuy0A%2FZjXD3qMpa%2Fo0wPvGJ3i1gHJfMetaberl7OPqUEo%2FexUCKqk%2FrHuRvayD7IYFnmEZ2UymcS3FFamEi%2Bl0W1PgaL2kpWf%2BwF3bqDxfiRzMk%2FOFic2DQakKYm0sk22GK3bZxBZiLg8SdS8B6%2B6LW8jQ8TEZ2cWqKgXSzDTs%2FLEBjqkAQ7SggFJluUZe3eScGI621z8hjY1KRN118Dn1%2FFxrV3VaPKyd%2BgmP0UQFshvxO8VXN%2FyjrdLE4WBivW8TD9vs%2FMZjXvRyv%2FG2diBmPKRZwwtNpUgFw3ti5IaLaBdfvmIg28DhxtTvU9UHV4nxUhrN9zV28gE4JYAEcY3P9loQ8JSsgnxbHDBC0b%2F%2BSjWTSBM9Mho%2FgnCYGfpEARIryMiRKuv8ihN&X-Amz-Signature=a0772e792d578abf2ba8589b47102dc371136f2c626bc75c816fa01062ea12fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
