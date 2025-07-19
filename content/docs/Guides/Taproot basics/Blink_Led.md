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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXM4MY5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3TO75RZee50qjbCz7oDh9enJFLTLTdzq5gp%2BhUvTGVAiBXCgwB8XqRFih2qEWs24hRzpIOZky%2F6hoyuCTdDBNvvSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOu8%2BvVvIepaZSqepKtwD2ijj0x6Z%2BczPw99C46SYEbpj8HO9IHT55HzyIf1cc4%2B6rhT%2F02l9pl4Wk2dKrargW5gZTsbkLNVdJAkSFLqngyuQ1tmw8oGN0TVLGj3q6hHmTvC5V%2F7Uqo2ST4DTLY0Dak9qUDBfGqLwUy3f0Azu%2FeDMKBZOwkhj8kalBRTB6Fv0Z0gCLrCjKTLKAvzFC0tG3uyM0cAuif5SF%2ByN9ZfIJLQnovkZd2RHpSJnW%2BK8VtYMPI1r6VXUH1zM9HiIFH9JwZ3VkZjMVxaht4devRekOnLThlvx3Z1Mn19nt%2FkMiCdXyn%2FmXgVWlJmKflr7%2FW9yVVhI4z6mvsOHDD2nkFPlV0P0Ql5y6nkCvH7nBT5RhzVTO3odJaeAe8N2pVu2uGKORxQUG5Kq1pMy0nX7jOw70waGSmRArSOWtliR%2Fbi2OkVjeL527t422EJpbLgw5nSmYlBbc0gulNizXq%2FVJeedlBTj%2Fr1hvCMgE%2BvfdXGxJMRG%2Fk54olU1utsBBiYpx9OCg5CBkBv2OVXI33aZgI%2BTD2oMLHi1rUZ5kawv32OuknAvnSTJxscoQ4tj2jGjTgJinQiEmnMNRVdTjxDJqHMVhAzlOsOaSbpumkl8RqBAWWNxHEyrErBwJ5uYnH8w9MTswwY6pgE6yJaIxjAzYfsOhYOfSgnicYlK79Miv1aQ8qV5MjNq9fa6QpMec5l5%2Bv0rlbReDCGkFG%2FA40WNp6CHfb6GDiXPXoYjSFbK6WeQihXF7J2NIKILPMC9e9xMHNkqSNpTVtzmgW74Ddf1Aiu%2FRVc%2FN8hwtpByPc8is7DUX9u7xOgnjD%2FOmdR6hPnrrwBxKZcminStnh%2FBFYJ%2Fzq0U%2FEEoiFgNu88P3%2FJB&X-Amz-Signature=ba5bd88010a7630f97768203a7a1b29d9bebe9001b5d7883c9b90d9d09cdf16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5A7HMC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSVpPF%2BrU201FaSCS7TgMzG2ZL7%2FK%2FCwG6%2Ff%2FBsl8%2FgIgFdUf277GZF9B8L1mM1xQknEZiK26oIDJ%2FqxBXd%2BP6FIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEli61aip%2FnBgudNqSrcA2N2sLIzgeMxyXDvRxO0d0bF405s3GukS3AX40VSaDKeD%2BJ4BCCpwxLP2%2FTkFmVbE%2BQPB%2BjDougCOJH8ixkpNaa3ZWOmk%2FT450GWzpxf7kK%2F35Y0EDAGaWlSQu%2FV5SFFI%2BC95kb1NhVaP8vldgRZ93iqjZ%2BvXgEK9%2BNxYfOBMZUcPRmIF3lSNfduvD6ERYkNs0A8XIeHkDTvgi%2BEFllCpMuqtVRHlKDWa2vRxfeLWWrSiwG9lqGyMl9wf4b4exVgvu0GchwaqgFsF4FqXvb9kcvVBqRFMpUWO5x%2BjNius1AevMQSETmgob%2FcjNteups8bCWVte7wE3yyfUyngrRzrgU4zmqNX7H7fWySVt1s6agjN%2FD0yiApGzaHPeW2JKGQmFrCbStmDc8nofga8scjvKaaJv4f4RWnX0ORQzso2HRnFRQoGxxmXlNres%2BMiBdKDOv0dbi%2BZekBeaey7gbmW8YVHxHu5m6AODIgACk%2B8gV7SJYdsQkVQnQgZMojQMstxhWJut%2Bn5mLZ2sjy%2BRzMLpGn39Ud0OHM7QcBTf1xdHlBCD5w0%2Fne65hkkhySzgm0W7EtOQqK2KuDyZZuEmUlnBJoRIGTT7I%2F3yOG6hr9sWKrVGNEG4uUKG7gz5VOMOvF7MMGOqUBqtmh%2FYJy9ws3T3asiuG%2F3b2RDT0i3I7NwPPNCB%2BdjNkqiv7EDpyux87X60KspbRPapbc4SlojKO1ckrUiRB%2FlqoGGW6PDISIeQSHFmXPwUuF97T8NfgF%2ByhCzeV4zlOiI7x5itje0YsM92nZtF%2F%2B%2FrCrfbYpXWLKVg00TtRLgBoH0%2BlQx6ParRIkAGKgkSbVoA%2F2x7uLHkyg9Ky%2FUs0hlhryxtuF&X-Amz-Signature=4f6eb7af75f4c9e7919516845fb1cba0e297031838f5debdb4fd404b9fd321d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
