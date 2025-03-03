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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E57VNK6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEc9h0dwU5Uj4lFMsMAuqHDnsVuiavXdvrYbEevzMec8AiBoSt73BzNf6l0t2aC21rgFGUcihox%2BpSeJd%2B9WVassiSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEexGoCiJkJMFzXm%2BKtwD60COzo3U42wyeDwJBlZt9B8NOWX88DnzavC4m0FTAccXKzNYOldzX8Z%2FXjAJU75txrQ9MDyLFQcJ1nBJ%2FRtMAYlG%2BAHfmbYf7MW9mEHNYWu8gn9ViQ3XZL0wTTD2R%2FYYaRrTWdG7bDlSmgypXSHd43xEKHYvYEZBOIgLEREav5OtOrLX48kn6OeZUdzeZ3EVCQcGoo1ORkSljEYgki2YX5rVQRgC7V402ZFhkIVOWApw7QfVaqBHuXd6hBVyifVAS6LfmTO2CACGhHP%2BlMl%2BscQK32Q6kB3jZI4p63YwY3NI0Z%2BBLMwxtmXB0A2tpRO8kbgebCgI2DWV6f1bE9wn%2FS%2B3PcgK8i8sX4x6T3a5Lj%2BDML7VHc0ObE0%2F75W13yCQZ29h9oC4pbhBJ17uKYL6ZLD4rDBB5xtlOtK6EcabroSQFthZu7%2FAKHnwqRNFqrGfW7Zbgzf4vQKnlT7wBdnpY9cnyHrWg7sN0FNvPXip2fJFdqM%2F3%2BKoU7ENLMOreWMXnqmHUnKq684xNhOlGNT2Ba%2BOpLrTY%2BUh3PcZ0mQ6k4CFnG%2Btgq6dvbnr%2Bjmmcqc781bFMZy95%2FH0CGfiWIFZAuti6bJVdeBkQlbjiuzQmLaWXBqOgMwA1eKf3uswqpqYvgY6pgHLAqi%2BOaORm0ZbTWzyyd1to70PMvxEA5FeUFgJ6CbsyiH7JLKIz2bHlIUm2lzF4rhbAJ6qqXIPjmyZQXLUaqYrko5f7RXFaUHX7Lw2p%2FqeQXuXNc1wPpFUmwIAosOFZMbAW2Gr245nvJaR9xKac87iScpZFZ81NHzF4tPur5ORTCtQmTvcR0VGa4CarOKpglETx65rZKRZ69NJUwRuFg%2FtAPR7zIII&X-Amz-Signature=3b9154fbc2c9e9e40da7bee10d887f8598440c2f27ff30c4cb36bf3233db847f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R73NG3A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8TtjFKRbpU7Cbv7vOaYU2CLl73ysLghwI24bmeRTu5AiEA1XK1SiBEsZiUz0eEuIKSqQbd2HMRXjlbZnI4FkA58HEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9xqGmOpkrGIbNzuSrcA38kDOa3Z4xUM9Ss7MSKSLrjmg1AH0DOmy2tKpvMFCpT21ecpHL6Z2h84XkYvi6%2B4DWa11pGrv1IBkSqcxV4ekCGtmOWTOLTnOPLz3ZmJLBRW11eTYD%2B47IYS7k9%2BIDFJh%2BIHT6ycII4sggJT9kzcGMZjQxfjoMJfarZm9%2Bh88QEn6B7NtPuxA%2BYUZQCIfsUs3E2%2FNmkUS8upUKLXssZFYB5Vf0HlBsp0Hb3FS1ufWqAHCDioIttEoXnfvevLAzJh3QXgj3zMwo5YVmfovUDa6Lie6WHNVKm%2BdWh4iMc%2FGEDWVq%2F6rudp1Lk7p1it4N%2F09jV%2BCjkjOerrb8OSkyELzMaoyNEA3I30IimpbZk9v7w2xOp3sajxhE%2BWVwVX%2BsZOQls%2FpvdoIbsmVQu10yr9aT77dGpafKYNe0N7kF8eoVvjexrH0cA05ok7GuZTA587pPiZiqvolfMue1yf%2FmSY8DsLqDbFqMftUZSpxvHIQS2LLf1ExATsZ3pM8ksD0lmBz18vZ3ER0rwTJEEGoo5YLNnbgOZ9xPFs68KqiL4P8NYp2cNLuv7uufb2bRoJeU1aqIYNFGqQzcVIV%2BNaImM9Nr1jWd36D9kZlTpuwJI8j2WQ%2BXtN8dnAWq2cn7KMKeZmL4GOqUBIdHLfaUNRCBCGqBungPYypYlPdXJWoqNHOtawrzDQmaSGSeC%2FSuktByE3R12Da3z9%2FY%2BlrKpHiHuStsLPkHsxF4DqdcFGSHdoyAje1XF8kE6uhSQz12l2MVREc3P74rJVP7dMQ53m9kDYxRxwjmjd4PwKSZuXZwMJ64WfF2ETvXPQLEwPBF62n0ctyF%2BQ%2BG%2Bl%2FPnscxxRDh5EprWOTGwHgA9kvWK&X-Amz-Signature=6025c399a52f68dfd21ea8232830417171a1255a3ea574dc7b399264441cc78b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
