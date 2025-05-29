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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FI23VP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T091000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFsKn7IA%2BckJVQtpqQy8lcNpcEg2o42UH8VDJmTHbSSQIgazsmaElYES2PGpRgtt3SEyOsKHTA68kvyGKg18%2FEx%2BMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQMkv4GHB0iRapQoircA6yPBW%2FO0bIECP4EPToWKCiTAp7TQssfaHpGAH3xWIpm9aJVqkMcZ6F5ocqkoDU9YDNxA7%2BBnTkFnhxOTk%2FIGVWSb7RG8BLZZct28o95Y4yBOXIYFBH6FfU8AuXqs6Sdzy7CsEjwT1kTnj%2BldZm5itmwaqrItl2cjQqdStuY4s1YKZa7lnjPl267KiemSmiFpDZI0JnhR16LU8j8qDQS%2BHmX5rpB9P0lagT%2FGVXtGiaJHZGWfrwUV6zsr%2BzFccRvOPebaxPaBGzWEpm5RXrH9ocYdfeZAlEhyDTfh1lP%2BbML48F89O6VaxOHVG%2F4p8Z0T%2BgnRn7nu3cqLiAX%2BnmyjM5mZFo2w0W8FS2tsE8TYGb1O25KwuldtIciLgfckSXWOg9TXPUyYI4tumnHX1UPNKOUAi3%2BUBut2czbnjlMOTzOyNb0lwH3aNXuX0zXdmQloBUUSFMLAVLiJdjF0xuEA3IMeh9hyXzI7u3pKzJ5xloVjfmdXNjDaymfur2pb44hFO5OMDvTJI03TUqlf97QQmOLQf5q71TLQ0a5jgeykYTYCPbwx2%2F%2B8xMFVpIwWhrUeUIeMVfC5udTMcp2twSNkNKv3jkNu9%2FftLoDIT8o8al9TwawEbzfvjok%2BVSTML6t4MEGOqUBwYTrqPbOEy93esVzji9YEL154PYGfBYcWZYmJu5AVE9cVe%2FK900bd1h1PhiAqQLpRyzHlDXY%2BKvDHfDICI1zW%2FhZWV7SH%2BFcCRAdS%2Fr8oJi4F4X3Oa%2FT41WqVQ7tALhsfbzDe083p8Ud51aiOMehS8cfl5Tdble8A6WNU5CLdDC6ewZevhiVIdoI5sOqHwE2fKw1aZx0KhrhmGMpPgwL%2FtVgh%2By%2B&X-Amz-Signature=05754ec957aeaf17f098ba1e5c7ac5914d40f25d709157595e50910d3ed3dd71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBCPM56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T091000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF38C%2FA2TrQwXBNarLlj9iiBUKLFMNPoIh0Hcx5HzAmsAiBualyXZxVX89qQhJAIPWQNVIbFlVtd8bZOnYCfj8CIPyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWC9nr92KTQ%2BeEt%2BKtwD8v%2FljLuKn6Neq37fJVAIi53dxv06zns1xpw9yQDmUiaAQBHtByfYUOgWOedY8dYAoWZF06OMzz4Q%2BKqRcKiAsQeIO9yvyrJx1UT%2Fj1vZrMRxARrM4POqPC%2BB6w%2F%2BNElnnYKj9WTu8sHrmRfUWQPho6urdaMmwxE2bS7Bc9WvB4LVcxUVy9%2BFjFfQyBCI%2Fml6u8ZMEi%2FoKLSXqSZZPJVdqfglB0BAjXOdqCe41obvHcsCufAh41lh7LyoaT%2B6MU4LipY02JXxgbybI6VI4TwbQCAV0g%2BkjH8Ia%2F4%2Bls3bUPxLyuiUQWMP4YS1wyu7k4CthWXbZq9gCtLyNWbF1M7ci%2FxU70XNFoSJa3QVjUbVmAdaJxZIrWylwYLKuzJLoSX8l8QzGOTYaQmS7g265f4f%2BYqyrLbGmlrouGIaHz3BfH%2B%2BY2oP18ezoFHfqBbdg8VwJMC%2FchRhsBHdXFwHoQm1L1c6NPcnBFRoPIrewzdiJxsLKYNg42%2BLAWFbp6JJJLMWrwC%2F1lECO0zdDeRq6wBKFLS8bbsmFDWdUmGJ27mJaQ1HgiCPzAdSOafbooRIcnzOvBG5dJIO6XmyQmy%2BqSU8bvDiIIjJSuipfmyaoYh1m7uSdmnw3F%2Bep93HbwQwqq3gwQY6pgGYA94H%2Bni%2Fq2bgz6mkh7alRW%2BbJegIca7zqJUTEUN%2BD1WaUlzzraj8D2QTC6BC2%2Boorux6vXc0%2B9%2F8FrCtZ44fMe%2F0u7jSEyVjHl3bKVP03YGQHcS35mAO4AxuCMnf9v0rRMxnYAtO7FM65FV5g%2F63XNa8QlJpS5E7HQiz1PSM4iy0O6vx5ocidiYkMMhQM90BrC3rrzFyWdREdSfe7u1sQLiSIuKg&X-Amz-Signature=9f9d3e3c705f11e385009998b165258214c58db8ebca308234ea023cf67a3b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
