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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=bd877957480918f078e8cfd56ad3effed537019189aacdb5f674915cd3d908ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCMLVIS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8jKF1hn%2F67PJHsvpDLTveCFowfXfGaW%2Fu9wjp%2FNg9QIhAJv0uFyT4GrAGH1sTFp2xoukhrjca2cJ1vmItBmnZIrqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNyD9h40CR%2FkGYsYq3AOTGLPX64MZunioImK6eCGRBCkmOV%2F2KXyPQ7JyZgdIfi9WZ%2B%2BnsIkiCxtBzmtR4jNQudBl0zVdzwPOT2J8ONAokZRmDJEZ4Wi%2FbwRrJQZM9pJVVw5RqFjAP%2BbsTaRq4m7YQCkBSo4M6Sy30gjZzzZ4F3KT879C4jkZdDkP%2BCSQKrOdrM8yOuZFGPXbXPSKG4Kegi0zv%2BqfwP8WifQFEM36Voxz0TLkNU%2FjkbKQrAa7VwHYEhMz%2FV4XsL6lTRqTPynzp4sYdjv7ou2g2ronmRjv54yS%2F2l0p4oqovc5OvR%2B2b27RQ8n0YmifO7CcrLjybYSHIsVw8I8306rykNDCOp0VwFtm6A59RRZNIj3otM0eQKtjB8pA%2BT5hAsQ3I3yEGB6HfVVayO5qWYnv0wNPcX3DuzmLw726S0M1HlZtKIvVIFnsJIuS%2Fu77Gp1npEOBVCrXcwrCHzz9auHYAhW5B3vvLdiHpdgrIIpyCGxG1bqBNZenEDv2TR5OKTijxoYo7KpMvJ0qc394uRgUPJfIqYSEELCZyXYoHtE%2FCcXDNikUp7AkA8hei1wwc7m2XlSpcIX4K2iG0ZwxRTPotRzEgMsgU%2BUs9dIkwgC4ukZJzR20VN3SQvjYZ5RqeoSCjCF%2FdLJBjqkAXNFNQo18Eol%2FPisHAutw6M6rpwXxPUDDpTq0DF2APCQeiw9WF8%2BYMQg4nRzRaYrCGsdFRbvJi5m5Lcp0PrSehsDz3l4SYEKtIoh3hODS2j2BYFJSpr2UmJDxNq6iOVp9vV2W6CBc2SIIIpQNwNk6pLbdsUjV1jLfffoj0tBZj95hXj%2B6O2oa7VCSUy65K9hvEgMBH80pwFk%2F81uSm%2Fd19iGWjW5&X-Amz-Signature=b32d5a5f409cb4a5259c8fabd0d54d1a3a97fdbfb0fbd6054a3a3dfe4bea5362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
