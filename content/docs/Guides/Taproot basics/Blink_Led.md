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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3TBMF3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD8eloWGWs77mOGPGJLZ6vGnEr7%2BxUT0CkEx5r7a9SlHgIhAM%2FyaWbA7I9Uc27gwWrjoZP6shMG5%2F%2FZtzobA9LFzBkQKv8DCF0QABoMNjM3NDIzMTgzODA1IgypiWxVsLOxW14lDusq3ANrXqszxwCRwwfS2vhq1AvVAHxmqMoghp74LqjXZUzrAS531Xgb8pI3E77N1E434dcVt1XAV15BQjZLetgfmW3oHYpFaQncexls2SewQW4RH37NS8SRwWkYw0He3l2BYV4se3jbpH%2FOrHbm2W%2Bd1AixM6DHZ30%2BYFrbg7rF7bbLjhrICTRMX87K%2FDlgcQXr9RiyJjRaETafvxyGvvRAkk2qClZqE4Vw%2BmC1p1FOlnqTujYhbEVNq6OMijWinGVVcr1nOjFq0Q8Z59PrEeKpMJ2NVAedXiiE43oXnG7KZJVfrpkJyX9YE87IwpgD%2FeoLmt%2BJl18DQZGaAoCMdKc9H5W0mN9YdOvIS4r7ePsx2H7h52yuv9OS6qMH4CN7FWWbayHmWWsHnRJSK6zh5p05SyrVFNPr9xaiVyoiMKJTWEO4JiUiX682HQGOGv8R45kiITAL9zv2zqWKpeSccvZ2vAMsCFbr8DDqIZRMAFqCn%2FmuGEHCQBY1dEjJaxc2vMoeS2j4lVsNU%2FlVJyF1lOqJigTYlrNHOJTz4b3jEwtraHeL7F5f6LAjqvfbkuXrHdnrFaevPPjquKbJC7yaYdTRbyBuuD4Kp29z%2BueMxXIBX9kjQst%2FFev%2FNip%2BqvDnAzDmh%2Fy9BjqkAdbIOnSTm%2Bsy%2BokRZY6mBxD3ahRoqFxpY3Gu0VQkPB7txJZ3OzmwcREbCIqPabX2M243q9P0UNK8iqu%2FfXSUT2D5Cl06xFmWi6jzsuaCrGA7UQow%2F%2FHChcr1QSlAE58MjW%2B5SkoIMeBpuYsKp7cSY9kiZmfm12tBYpzbMXoEW4KkbF90c%2Fg%2Biw6EowIyFABX9g2AZPpZ2mo%2Fta4oP7%2BqIpe3h7r8&X-Amz-Signature=ec33bfb09597992e9512a3ac26eb3a976db1b7ee3166b8107149b6afa443bcd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7QS6M4H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAM%2FGPaXUxH6U6tOXTVWl5V2EYtWnmZ7iU91X0ywT051AiAX0zZVw1Knp%2FAEofT2EHzNmonK4mDYZHY2u%2FQGkaUNYyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMUS6OyPocxz4XUYmJKtwDGPE83SmrBJrVPIMQ6i%2FrRW8oH9%2FzJjkQsuyAQxvV4vwHphnKqLSaUrmB0zRWOFpGxAVo2BACuPwSCqCll7Ht%2FdME%2BVwaLpJPNXDrpt2%2FlJrqRuKGhMkqOEXevlRB2hBGC4vmoJiK%2FvjgAbt37PtEUrwmVSqutwsKMfJQTf7QuXM74g4MGJCK2Dkxhto0OY8rHTapt3SQrHg4MfberuWb1aHEu%2Fn1DScqYYThevo1WlkV3kKiraRdNB34blSqiaLV0Da41dVJuufgPx4vTBIYMw%2BjHcqTaQtJiVSud9Ap6QlLyjIiK3fKPW9Ecl2Bt3uE2Qa5X7KZnEQihDmKPl7C58FyeZiDRd%2FkbAkWWystR5%2FIK6%2Bnv3EQt6pbMVQ0dwRVm%2BEQi99QVxJE1b%2BZ8uRyVnzS4D4SjKWbn7VoT9j7AVG1TJRg8gJyt4XDtvoeUE%2BbX4kvsZOT%2Fgc2sx8dKT%2F7UZzbYvfjTA5aGr57klqAfex%2FG%2BbqpHhRA0VaDOGKMZj2Yg1uwJoMbHFikkSEotm4wgJrhs9j9bzqe68i33CO%2Bfnupo%2Bn1DCTiMYtHwKPXeAQHNIAbEAX2O9RRIYTCTyXo7ou3HWCYC%2FWQRYfc4MD1%2F4ie4Wh%2FJoSgiOpE0Qw54f8vQY6pgHc011U0pTsqddpPVyHvFza6IubbxImgxK5s%2FObyDof6JgYq4FA1UUy2f9Xi6EGCQw7XJTL3DEhn%2BIZt6W%2BfaUZJSNOJXdANP51g2jpfC6CJhfu%2F03GXArpX0yjLEL2QBXGmeD0OwigUjjFhX%2BMK67dUTkSxS7Hv%2BwdN84gNl%2Bc3L1MUytIjj2z5zz6rnTIe6r9hnAp24vXYQnUgt%2Fi4zSlQpx0536I&X-Amz-Signature=deda866707102f884d9276b561e7020873132d340df03ff340e3d8999181989d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
