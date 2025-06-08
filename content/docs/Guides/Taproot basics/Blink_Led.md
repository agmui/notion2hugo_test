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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FOAHWZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWLs8xIEIY7UXGi0eo9qHr5gvID8BScnRgsOwNiX1%2BpAIgMy4eSPENFz1d%2Fiyzzxu%2F%2FCaKfjLdbjtEQB30C5uVaEkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuZzz1TSQhH7JhUlircAw0%2BxQZzKEaxd4NbatoRQ3z7YBhPV3X3c0EEVr0qd64Us85nmVfTS2B2XiqKok1pP7vvFLq%2B3pLgh6%2BF4pyZJm3HrnGa3ak6tXA7pCwXK80ZtT2%2FrXho7QfCZB0BkZNOk4kKJUHcoooMPKNwQtpXTHrse0nJurZKc7BxNcica7RFxqd7qnSGg2DRDY0MfhUhu981ep42JUE4UEwv9lndVQxsmvyT8nylVhT8v1bHS66iunSCM49B94xAWYywLN%2FemMs7Wms61RECj6Qkpc%2BW953ucUoLE9SgJdoyaPAU9TQuxVTh%2FVFBzgdO3pz9XhlaHcvNo%2BKdb0y7WfKlsNdxqcTOwSb6zfbAGVW5YZoA0tMl1CLBZHaODrG8QvZaryLG9Eqfd9zxwNYDhwQ50rpot4amBqi7TrqcYTZKJOhHTQ0r0ULriU%2BNmk43WSc%2Bseo%2BIdyLf8tXjULFmRUXiflef5KNw3EU2w0h90RDbnC%2FYJh2CQuHNe4qRQv2M7SQnQcrwwKjswzT4vQU28iFqA%2BRG8cKEyf%2Bu5TTfIA4qCB4fILfBaiMA7%2BPDatPAX4fE2uqzmIAGHeMuurs38cO2d5TgOh5l4LG7nk0fliaXndyGYMmtFkGoT%2BotJ534OK3MIudk8IGOqUBjNzw%2BIpH5Fq7xHeXcgYcB4ieZGD26gDRxpVjWcegsQoYTT1Ze2Ix6kXx%2BPhBPyr%2BGDZObVNFc7yTXe0mfHMkqX751IR87KeaVj1jGEGkF7xLhKJ%2Fl9j8W3%2F5wNpvVEa14ZNzBLtqly14UGwRx%2BnG%2BZgteaWEUkwRUbzfKkdsWlwSW37PXzQ6fsvfPSZl5lf5lDn0izPIfvVjzwtg1VCXoZDvqRuv&X-Amz-Signature=71e3c3ab5aa2613caec4f0cfba4dab984a60d7c639f0e0d4cb335f4cb20cff84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EFKJE7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr48roKRYOMLvt1m7pEfKNccRC0tf5zYnTyC9IM2iivAiEApefWtmQCSvhKPn7jITHQB8oms6K1RY7V6WrqPq1ulFAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7P14ue7VsgbWwJVSrcA3%2B%2BZbt3EW78dUYp752z7lTYBNM%2F77X5tncFaYHbgKq95zWY3sPr6fZhxUTwG7N81BhXG632rriOEIvyU2nanO8XW%2Bhq998bybNA7t%2FPf9da6%2B%2Fvfyy00OYKspd22SqDwF3EKafxecm3%2F5R1sdG%2FreaAHoCzA1oasCc0UHSZgz57iXQh5ck1csDZX6GF%2BNjvF5k1K%2FG6WqgamobPVE7TnO5xZ0IxZBvnFtF5fierQKUXBy4NMOQwcTeiksE94EqOT1WMNBEefLCoiHIIgHwTUbe55zlbjIJqhSWXOz0WMFubyGzTQKm7kkjwA3Qa7bqxd696o1emfXwjhRE%2BJASKkDS%2FCn1ND0BNZ6calwiQXrTssk%2BIp%2Fg6Tj4u6M8q0CUgUPnwESp%2Fq3fZie1A4rXvW%2BHuAc%2FwMRpFCnG2rWiq%2BYHkWKxvVCWz8hLawveXEzJipNUlqaN5Evk4Hz353x7PSZM1Fag8hW%2FX5bOQARYkCKcr%2BxyF9qMqEnU0%2Fy0cXrl0dkeFggAJyEVE4D0pnXBBRRO6eACoWs4XePGQbMfcE52J%2Fbi2Sa9hFOOs%2Bzgp5yEVFU0LMHSK39ysHfReSkCNSzRzISykpDF8ugOfU9owSefW3ctvJ8twi%2BQZXsdNMIKdk8IGOqUB0kSff1ON%2FNA2EARo%2FcaEieQrqPI8%2FG7CGcCOwtTFJ0bDBc%2BD%2BY3BJU3ATxC8Na21u04Ut9ZZCruaj6YBE0U9n5VGM%2FJpIZ9Sv8q6e7zuvVLMXr73YEXCEN0RD2O%2B4HyTp3ZlvoGCgQ%2BJ6zTpvcHIoCXZWl8qUGnnUhziNVV1iHlAVJ26UcMNmdqWYm5Lsj9q2hljQOc3azMrxZIWVneR2TiQJDPs&X-Amz-Signature=610df1a80ab86020fa612062d08cbbf0dd17db06d00a2af15f8a1dd3fdcfd317&X-Amz-SignedHeaders=host&x-id=GetObject)

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
