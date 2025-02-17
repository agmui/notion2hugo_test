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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VYD7VI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCt5rrJDd%2BVl6UbgbSvg3BuW2o1iOm9jRMZH2cBc2BsmgIhAMl6gz6St8l6QT7flsT9TjNZWrLTJ54LybCW96whoeUfKv8DCHkQABoMNjM3NDIzMTgzODA1IgwlQKwJZRnyD1H8nUcq3AOU6JOouNmLhYiels5Htbp2ZAPIcHO2xwEWL7tbpZnsDAFCK2mAd6DcjtES0BwEEI%2BCBdGCMdFvJV5FTsV80L%2BN9%2FA8PY6%2BRcGe7QLKvYFIKXlqTSokorwXTox4vvmiZepJQLr%2BPGqswXFHmODyRJfF8uQybohdsLTjLWAb1oUShdxGxF18wOqZEtpzkil0NlR4E36%2FwUKXHNxtO9hLIWlXSExc6brAYLSrYgSraXB4zXqxqvjnbEEb9frV6R2ItGAu0Q9%2FIM6SYoO1ML0C7PLe7WZXUatKS3bMoVjcTOb70M4mihYWSWQuhIsJv9zvTNIqt9Eo6pFq60JpO%2FR7QfE9XAIxu9NA8glXJ0hvrAMXIoizAwNeEvOCvn0dDdIaWmHwWqBNfX75QKm9L2ulu2J9nYC0dir8x2L9rcj86dy%2FD77Yz1riGe5YtxAI2z04teSU2dWi%2FFdiQRdn6GCt82cK8UpDGJm06cmmYXl%2Fh%2FsnX4hVraOfgsAoJtoa%2FCbB6tqPFdqBYBsTrUP15%2FkfxseNYOptedMFePt0O0P27JKN0RQiBcFw39mrj9reggsTQnCIFzZr9QU1zz9gBXEXTCTfl40HjivG4uhZ0Qr6ziMCE43Xn4QI5dTWQF%2BUSTDIws29BjqkAdzy9lAYQN2h4D9qeQuKn2vVcUt7m3VGeqmXa0ioYK5stkUziKdPrSVym0hC1yHHAP22CkUOSWybOe3oV75E79%2FAAOByKVs5lhgXaaIJMbrMpVXtcT0In6%2B%2BfdM7AKPyKGuNMjA1J2b3waUWyMKLR5rNH4JY5UqM69rdlNLvMNAxRWcyJj4O8P2HgDoFHX95SOdno3zmIYzhcrnGKtYcqsmeN%2BuZ&X-Amz-Signature=bb5c54391b8b463a02a3cbd47c1a9ecf6525f358e258c3452aaf9795b5da25f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666WUXMSX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID%2FJg%2Fjhlq9HcZIXaoXmNMEDyIuOcVQYULg0ocHSZ60qAiAaFetTjVa%2FuhvSSxWIxVZXvr4F8AMxIzNhpWTpaf8%2F%2FSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNYegYy3oI0MLI6BYKtwD16q8efgE9%2BAo%2BU7co%2Fbi3VdC1Wo1d6j3nPGg6G4xESf97QGwU6FBqcuZKiz8t4x7aQfnf9mGJ2lGsazKWjD2I7%2BjWDv5WbaScTRSixx90Ox3G55J3SQkW3d%2BY8PrxSC8bX8WzhbHWjPErzjsk7b4JPbUPFw6QNYnua7bNnddN8eKy2jzBpPsxttujxrGM8GKNudf4xtbYqADi0aj6aQwNfwNrbdccwi4AuxMjppguN3EIklWf7fBy04tIjwf%2BjjGg5KdD%2BSucupdo6KjIrl1FI8bRm97%2FeRzaQf2AwculD28i0XwbRKalfUhEcl2Lrfy7W%2BpeFTJ4iEplSrcnXaYypa3Y7h2TvuzvDPLZi0TT%2F%2F%2BYUalSVeFxJoTfRpPzvQulhSRTqVYJwCufTUgPQ8cgpZkpCpB%2F43dRKnxwoZNHfdwPn%2FVurdx%2B8BiDPDpjdkyVqcArSQPQ6ecuLQbjPsjwqWmaNUcEniH5FD1XNCDYFTwBI%2F1LgeZC0Nqx6hRN7BEqT1Rk%2FE840ySeZpbjYVPAZPSFz8sqnzjx6QpHDNjj3tRnc%2BUA73BMvrEc0uefSAU8eVlZu24lg2QHR8W1X3Y%2BxFJN6TNJomoQfYYBenW%2FP9GSPcyx37QeyMAzx0wkfbNvQY6pgFfnYE8H8n8n%2BpzCYHbps23ZpJqD%2BQ0Km4a6pgWzbZSSVHfbrfQbPmnQqmCg8%2Fis1FdX4RSWce4oVRhRp4T6sigdt6MN%2Fmga6wqWOvQXHn%2FYMf1ZxwYr7D3KBJ7x5rHJrnGbswISSxfQ5v21hB%2BF9H3QSjPM5DZvH0mHAb5q5Px8EGtZlB%2Fkdl1glaOjoIXmlDIlnYTJJdy9mTZeTrEypFgosf8Dyov&X-Amz-Signature=c44c9ad0cf61e9e1799d8a9f07bc220ebf7413fae15a5061ce6f42fae1cdd745&X-Amz-SignedHeaders=host&x-id=GetObject)

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
