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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6JOCHV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGJtKfsfCfj%2BqrXIp4%2FdGBO0JsF%2BzgOr2TnuQT9kGan7AiABS0n0%2BPcvF7j9FfxVpBucf3rFf9WjnGJrJtio43YxYCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMxAT4z5UhYscd%2FPVJKtwD44K31lFF00LTvfeDZptK24tuA7Dc6mg2c%2BbJgzGSghUOIH2gcjvPOFLncVsgte0zWN7wWBuRJBne9NktTFp91XMdU%2FklcBnjNsj7LLid5GTpp9NE9ZSYjZmQdPG%2FOhshZBEIwNzK9nHqO1zEzFPo33zVa9anQjEul6c7eL0uFSdJRQEmyGSuc6renmmsogYUAsENQpEI2NhjdkruXXIpHvfcaCjpbt3CcjMsmkr%2B5WXOLAWv7Em5J4WTpCOLbvK4XqcnE37i30XOnBciIHJvLw3%2FpoK7qTFpckDnC%2BCJv1B0DGbOYTWXHam5ugB3MmZUJwvOOMMxQo9G1jaecMry2Ka2NxXUYXqfYu9Pd56KnutY5Lms%2FczVhLBjF4E2qE%2F4T7M8QgKqGdTFD7LyjeRjs8OdZbZycWtrg0Lu9B2pSV0YoLn70Jb%2BNd7iVH10fh185dtE%2FaPzBy5VjSuEqYzoJhMMmwHij5TqwzWvy5OaqorCGwcc%2B5HkMP6FOmU1dHRJtUL0fM8GS1NTSfmSumi25ROLCkt%2Bo6e%2FPxdT%2FbEFopayv2IT9uAoWXtmIZ1uhTRByJ%2FdTaHoj9CrGXXfwPRqz4qDMdUJYwEX5VbqoBZMEge0eZnwomUQygkNpXcw7N6FwgY6pgGUXrLXqaS%2BSAlTCX8nNKeqPiibGaSvVL6LhgFVMUZbXZ8w1El%2BMjs4uiwL0Act%2B6%2BmAplRkTy7aOsfGgoW%2BOfijWwm%2FvoRBaETgScPcf%2FodGVsIgKCrV6aicC24z%2FAOEvXzb0QgedAFtmNKs85qAAA06jm%2BbWnhfRZ7rIHcbNU9i%2FZkhIl32FFeQpiwe1jzzcYc8giSm%2FmnJbJqHvNRoZnZnueADve&X-Amz-Signature=2e8bf7b5f89719df9bc693d9f0da55e5d6f74291ec53586c6e576887ace95271&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX7TXLU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJrH1yQ5TUIK2q8z6F0a5k0a7%2FiKkuf%2FqUuFWGyuakCAiEA1dwMC7y5W%2BupjlD75Wg5dA7f1E6hcP%2Fn%2Fp1m68WabCAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGXW70jnrjcpDdhJWircA90xqVAhUatTwQ%2BBhYTP7QcFUGIvhmjZtk2FllkeP%2BQzHwMfHURozSvyBlcwjB1GBBR6rTTsFcmiXefC3Rs%2BKWTa1T9s3t7e%2FmdkUwIDd6UVjhQdUs2HSxMnuc%2BlAfM%2BW86tQUEsnwJvvmHZHf6A26LALG6jeyi6lJw37npKTgXo2E8mCkB8NbDqSRb286TCgyUtukNYbK5XgGvxMw8Rn%2Fyobtt0FCGV2y9qt7lNlrX1waxexUyAs5Kvbwqif4pHGXM6LkO0HA1ytyvZzm2c5YAtYCPTBiWLDpW%2FAHCzkPq8pkLShY3K3ymDDUcCp4hy2NBurbJs9g7cAF9YgBWgWC%2FnrMIdTtm2UyXiZZRcUSb%2BBNzHZtnJS68fyhtSlVY6Zft2jqNhNZj5vsWu1lB7cbv66noUbUdw0Yd44USWG5jznHlTrD5mujXV%2F1%2BYjLlUH3rFJPA8T0Khp4dy4WLQQ7brUPwLsQVSeawdtoKBwbwCRbP9WKQd8zSsMwJFl925wyOUjv4g4gc%2BP8%2BiXRs58sJFVw%2FLnUa2Xt8iNf8zPKf4lk7RItBhO%2Bw8sqsQLsesI9MHud9qinWZ8it82yVgQY0Zbig7ZHtqMcDk3C3hIdOgrn21T0cVUnZHi26fMKzzhcIGOqUB8oBt03HLQNshPO5nToFiDI9pzGxVwIA9Tu6ZSAzedjw1xARXHyNj%2BtKRjk9IOq0Vl5QwKliVrghQ%2BLnRuVjarKKPhoFGqXeAncG6SimL%2Fxsg9i8qGjE2ptfSZ5kV8QNFNpjuEkD6zGF0oSSLJTiz%2FNkczpCDn5jAhGPQ%2BCGeLW%2FU8qmU1eeP3k1UW3J7rPlL9%2FAq%2FhPjBSeHRbhladFEx3B07OCW&X-Amz-Signature=8f6f25f2aba356f1935cd5c1acabae1abccc13511e9d84b0c2968d04abc5c0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
