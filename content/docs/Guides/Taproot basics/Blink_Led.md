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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGRP7GJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFS7nG22mcKolVOj8%2BeQfv%2F1DOarckLQrGPnuGKw3Hc8AiA9KCORS6lgvWw96YIUCbdfa3qCARcQMksXhzjeInHUzyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMvZV4enAMzvAfKan1KtwDydCULdU7uZb35m%2F5hve5cbkf7gDGbj4exWK3sEQQNFp9Tb2ZIddQ6Cr9XxEc%2BT68sYpHoHH9R7vPhvo3DnXIbFtzLHI3A98MzdTtvxMr8P1Z5oPVzxwLqsLURO6cjyelmIvdFb5MICXad1YH5UYkv%2Bh9iq8JSXMehtnjAxB1T4AgF0yXlOzBImgd5H5HeTnjL%2Fd2GrEImewmqS6Y%2F3B2hsZKigA00IL6Tz5ZUhFhOt7kGJZgCTYoxT7qTL1ag8QAXJ7WFqMXZ68hqzJIhx5AQFpFHRAQnKa3mRFdBgcaZM%2FTr0tieCiF9MLLyjQYfDM7T1E9k6%2FD0v0u7hQc1o4BSbrxdkd6V8N%2BY8G6tvYUUiFTKA8yIXP382jwC2eP5Ayem6ewk0uAf8x24bl5Jj4QiiCmEM%2BfuoOUoi3Zlb8Oa5m5KvPYcTcNtaxt988ovFGnjfzWzPr8rxFBF8ALBx9EWpE2UEaA0MisfTHL9Ta3VPcj52Fh4YaK6uA%2F4waopMzEZNoizpF2RGZC4qq8ILUB8R8g3Q%2FzGNzAm1U%2FIwg3QofDfxiZ9%2BB2UAJm%2Fsl%2FZEdi765%2B%2B2m5ivt0GcZGA%2FstehSI25U02a2Y%2FuFADf%2FQJyRh7FdpcQneJU5Q38UwsIynwwY6pgE8Wp8o2gfShv0lTjBNvMi91%2B8hQqdx2WLoMu6o5YUMCvbKHiIAX8E1kq7hwYpIHnOT0DhJ8Hd2mlpd2TCDZd2DjULzVOtzx3tN1hKA%2F5ypQSmSY0wr4iA64JprkF3BJJMwfCWEyuV%2Fu%2FdmU4v%2BQH2ruQvIzUMmxPQkO9Rb0InKQPQAzS0G5o4WBiuIXj%2Bid56DzanH9mswsjoIKfd8mq01lyr3L1Md&X-Amz-Signature=691bf5e086684f7f3c3003e69e370d68d4d737140903ec96077949b6b00c3135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KRVOY3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDH1mpD0zKYijjbYtnO1H3P8WuYKxVeHfOe%2B00IsrzIxAIhAM8rR%2FtpVIzw%2FDQ0Htcj6i1nMuGi4qv4RUs4JPkhdCxEKv8DCFIQABoMNjM3NDIzMTgzODA1Igz9fwGcbdvl5rjYaGoq3AMyYCypeco2Kwk%2BYrV3%2FLViJEad2RjiTAjl3Zdshy%2FMngBk963u6ltZOddpSMB4v%2FN1%2FSCYJc3OEkzquf9jgYhrqd37tEBxPSkNAbZEJLmtD04zviq%2B4PXkea%2Fx3%2Feiq7v1y45SSYP5Fs%2FyCGsk%2FSlcaGfE0bFIl%2BYbO1zCMP%2B490OUb2cwmkQjllTo8yOEQeuRpmJSk6MrTzqArvDjc0%2B%2FoFP7zLMQYytlR9oN2N6DkckYwalNQ7YFy5LTjkJHfAoY4dplNKnlF3fSc6N59KQf%2BXrkJBNG6Vk43r2fxGGT3cxvbf6w16QJa6tUpjGaRlgWP6HQmIeSQbj3AiD73sNi0TBhGFY7NlOcSRW1IMHaWaWKjbubHbLbrqA19SjO%2BLEzFVdq5OiTgAWxvRj%2BnuZjxCRZWmJRUdnVJy74ebb6Aq218VQ1o3R6gfY5Cv88m0I9yAAC9GiMPWUsdwOZQZVHZDMWdBSgkE1lcZ75NCS68Zc3tx4mXMXpFje1JDa4iJn1ANfRyMH%2Faz%2F2MChKLaUZOynk%2FpcpPugryuqBTwiZCykDUWJlquNC25f2L57faFvfwr1Rk3xKw655OasrtmYwFLXeU1avdIs%2B51JIZueWbuiJM6Nes8yNUytthDD7kafDBjqkAQs5SDJWokBAGLFXjnVSYNmChGgaryIgTsPYHz8eIWKi7s0htqN60ITvX8sdL5Q0LOhMGIBcgkoAv0ePN0C18FYvMqeAMRZoDxpIRxMJdi8l8ODfElPlcVXOTBo9BM2OMkkchjxMNYbAprGoOo93EE0OaJKuda0kPGPQJ3IKbdxOZ9YhMXSnWe17HtfUDBQTCyn3r0lwus%2B2cg6nKA6RwsWCUObE&X-Amz-Signature=98633e179d287523944fbf0d2cab223826e62318961601a5e2aab1663cc8ca24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
