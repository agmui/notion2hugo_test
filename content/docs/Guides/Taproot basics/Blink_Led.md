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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KTD5MC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCSJfkeuFIUAkIG2%2BtlphZaROKR0SE79wFoKqtuVGPEAiEAoyyHt%2BWjhcBLSJJwEcThMfg71BCxTgVGRAobOdlaFHIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5SCIXqYjpnT4l6vircA8lIrDoAYT9VzGDWjP9P4C6aUvfPCOA5B36sC9jGYXCHyejsQnFvBM5y9lSoYzajJwI9QcleBXfKqx5y%2BlwH3oaNr4NZE4nVttTFG6mLwFSSa%2F3kvGKORWTZw%2F9eXEss79MQ9cFaG3AxCJRTZLXpyWx0YaKnIM7%2BYYKSM4QvwnsYzuWYleFXGEzwi08AGT%2BRhKH9GWZoqq%2Fgl6rOUMDlFo8XpQV07HN%2BC1QZOuiNUh%2FH1H7BMmaGWz1vWzxi0YaTawO6RyIen%2Ftwa7vJao2jYCE2jbFL3Ie4c5q4WA1f4TlNNi1OMUUuV4dboCwAopMnXJectBEG22DNphh%2B4lAhcGk%2FA%2B4nWP1j4VqvPjfyPwRwRRPPNXOyuERczsSXNb2oX0I3bp3jaNZlJB1UBcctqvTImTy%2Bh%2FTsb84ar9%2FzqI8MeiggTaoWybe3wNkbzFeWzhxGLgplgmIyclT9q%2F1giENPxc4u7OG0JONjWmeIeUNb3z7gaHdnFvyKfV60ZqotMsoDjJihH9g8H0MZu2KS3P3qyDth5foRfExcIW7RqmF0HQ5yg9uQrUqiME97cvNtvTqWPKbfNItyKuqRGeWx1NRV4n1ZGeh0szaxl6ENlBPbEVa9RIY0STgJqRLeMOH4i8MGOqUBCo47qMaWfWBFtfhAvwgOQ0wBVKgwkDr19j8ZimIKp4FB1oDP4w0gDXp4gWaAYM96l4xYi7tbaqqWTYpFUujYU9cI0vM0LCfQibtt87GPJAxmywaJG5lnJndBwGf21mxhFI8D17SIueP1ri48Z6J3PXA8MSy5Ki4QgiiTa%2F9IpZCezZKVHVCIKoB%2B1iedmCqNaXSo4G2rIvwF9hy7YFQRqlcV8zcA&X-Amz-Signature=a75ba7033b83a371e23561a16cd6e9fc067dffbbd886cab2790dc126c63a803e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRPWG4JL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYyA%2BCu7RA%2BhYLEZac9sZlZ3mfIebBzV35V0YPhbFBAIgHulg6MRmZH%2BsWAk6lGbizFufDCJ%2F9fJZ9K9cTpV6%2FAQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxkGqSgGbO1Pv%2BuVCrcA2yBFD06KVYNGfs3Y1O7X7pzeyjaNMml7k8AmFPGIfjgvXeIt2LDFK04AAmJZP%2FnliHmIFyQo4DDhUxjV6nHSodijwFJoQq9l%2B48KQfUjvyMId9wRcqBRMj%2B7uhbtESZ33%2BYw6Ml0D3%2BPpj6ZGwEJa%2BobztRspz7XEdXdHl5SH1YLG4zL5dCrp2XQEBOnQnTLZGgxykWT5RjDXDlisY48sx%2FJz%2FVkh78Mtm4QtIztErP%2FR72ydRe4H1ZJO4wirFs2Ealou6v7ae6KgFFN1py6RHa5tZt4%2FA51qXnCZm735wLRWMGakoQY6QutJPMoScQFygrDNYHLvFMZjW14WT0FcNVX6%2BIU8PoxFpKxIeBVWIwhI7a40B3%2FBaMLMen%2BthEIibbMTAZqEIGMJd25g94vZqwBJRMzEbvzpHl9%2BRzx1z3zWd5f%2Bw9nS2rNseNN4QF%2B2YMrUYryIONd4sFu6Oy6QlRcIt1yNsbgSiZXmNy07iF0RmIfp%2B3y%2BYfCc4WeJmbag7xoJkDWpsFt5KSxrASvkC6J94g%2FPzACdeR0QacKsKu%2BavjGmF1mJrPsu0eo9Ywym432ehjVLx78El701X57BQ%2FwTXj2h6knv2cH4qQiKaj9ksOJzhF21R7WqfhMIb5i8MGOqUBYJ0vOU1wJbVzmlS6VU9eJL%2BjZdPF5WEYYAXRHrIQdiwr%2BwTmVTIY48p9SL6cuNI6NW0RI1dybcCXoGkBSkbwSaWc7hfiDWYZGFr3oFszqjzQ9jX8VsAYnDL91Vwt5nuYEnBrb82PbArkXzGt1Mhw1ocLzYZt%2FPKN6O4bckJUSurpJIeBvrA6Gf9UNUb9EMEvoZ%2BztT%2BZprossb0MdRbj%2FfLO23GJ&X-Amz-Signature=2a954d7da82852fb44bc8cf7759ec96aec170c5861d597415d273bfb63cc439a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
