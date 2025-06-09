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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3WWSTI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqzhJnVX4xQ0K3CcLHd%2BwEphL0Ye6n%2FaiBPCcXkTGrGQIgEkb8gcI4xxbXZh%2FsVFhJJimNWQU4R9c4uhUwC4ZGhAgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9i5aFe6BCfx0k4TSrcA6K0kgwFc3xHHKlPqaa5zZrvU5iJqNn%2B002I1ZMR3jC5dj9%2Bri%2Bj8kGEp1Kn6hk3650sMByIqxWwJE0h2rNX94wBGoYE0IFK2NWApT%2B4vekpxYq473i2bQJ5ZcmwtLQ06ZVA3UjgfedAw2%2B53BIz2JVkZvWedZ9z%2F%2FcqoJtdzOpkv0AkyGei96G4kBwmBHmgCUDyKyyLq7Ke7NSy2p6e2Hl1i9pQd7BK1%2FGcx076P9G4xdfqh6uNJElQfglUIHsSP1o8z8jDXLxqd0nqi2EC7IiNvS28RoPtCKA5dX8Dc02nVsa0O8ZcGvWirdBAZbPi5XUv%2FMf6p0op6a5Ia3C5j77UIUNx4zj0HyFHWZDEAlWt9X7AWJijlRlb3tw7rFy45kBxdnL7fHrMciuyhW8Weh%2Fs3lRzgntDiwtTLOj41dXJhkcNKRHiaoy3SAUcRpBE1IaEQfGIJ8ql2x8HnfnaM5cRLCSMNkG7Flj8Opr0W0vk8M0UIEqoraYwF%2FW5c0eC1Q0RNfO8Utf1WNlZkbmBiBR7rzEWJRC2bewwSytGUcRztmf%2BNxk62W7bP0mGl79sccexfnvrDa%2BQUQtb3TPOvjWhio08XFGNOFsqmHp2wQAlK0%2BDww5jphOR7bhiMLjWm8IGOqUBoUhMq4CaGSo0TG39rfeTIvQiwcJkYLSjZ2MDkhmOQj73Y2CmjbGRr19XNdaQm0QQUUVIb2Y%2BRn1ISJnraY46jb0LtLfIOwF6lm94XCMrkCt4DiGOlY5SRFY1Tbhwc3%2BY1ZeeEV6CySmWjDcpTU2Nk2HsP3kD2asWjtc83g19SWvTYRzUKeukBjr5j1f43yK7qnYgyCZwoGn%2FWpIa8oEBMkPHfzMQ&X-Amz-Signature=509f7cdf43101578671b3af333437d1c3c1404057a4ff02de4cad0f6b489e950&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBF6WJV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCaDB5rjjxe2QZqUbiHes2GLJmUA8adgmrZZSUXeeiJAiBaCftZhiUtp2XlXl2ofgRQTw6kaRn%2F3AT4OR553BdXBSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGZPIQGeSbbX6TL0KtwD7DoaGixF5pkw4E9%2Bj4SMUzhOa862yi5LbEg5K8V%2BMUuwKxp5yubTX45NLDoqskq2wNaV1GQc8NUTV6WUi37irMHJR23qXGmWe25TFNsXPSzyFv%2BSp797n%2B52pGE1PbJN5FHP5BiLwtyeWbD%2FVOIS3VPR16%2FC3dRFjkS%2BpqAjIQnMWt8%2FzYMNFRePoQ17YE4J5eGGNYXuVZMbpiP5X8QKP69MZSEqsQ6BjmXBpSluqR8mLVK9xlkb%2FxW%2BAStUP6hnYrYMOxpfBpxH0LpYoSBetcIJKqsW8%2BLMQpSgP3nv9nFbc9yZfR8ZS7ZgYzGe0Y7F9zFNFt4OgwdRFmZn6QbviwpoEJiUwKYVsHLYRV9VCRoJ8SNCYkVlWgd%2BwUcZPC8eQK0icngn6OEhC5niG6%2FweGeB0NgFUGoKW1lB4fjEbvceC7CdHe16fZfYUKL%2BXLwUeBOevRyPaLA%2Frlyfotnnyknk4rsaLxmT6perz1rgXzqq1FQ%2FWAFA6VY8xmNsCuXh34IOUioC54xmYCjaXCL8lext7sCDJ%2FbWSOBV%2BBInnliFZA9BOGZY58fYz4H41K1vgv%2BMVevvpxn8T1yHZxxsXLfMD656UGQxNklhJI5n1Sq3fcKjjAjcYn05CBMwzdebwgY6pgFVU4mwyzFhB8lVWz6Hgpt9R2LHb18Pp44et%2FECpRZAlvc59C60xpQ%2FGo9gIMNyp6CKTWrWW8Gy8CcuI1CS1BBDjo0XycHM2DW1uRJ57CQDvj5rs28YfT69BsAW9SaxLaJJXfQgLDAPeFa%2FlTgrxUa2XnA7ljakDjJO6MH7JsJTqNKbhtRauy1PNaodY2P9qRpnU7YFtQPUhZT%2BTv42iw%2FXqbmElKjQ&X-Amz-Signature=6d81a8dd349b50880623b72e4f946977f006167f6742a1850bef358ce3a0089f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
