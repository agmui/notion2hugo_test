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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64WHG2R%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLuLpgk0KxjOO1DjqfqPN4qYucQYqVJjtcrJJWwaF6aAiEApvv%2BgzcgJDtE%2FOjiWRRuvcqZJHj1HZvxnKViteyRh3gqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUF2zo6mc6Sd43XoCrcA0EpUYTskUcmz6xDxSbECNjeguv4%2F0Dru0Una%2FZrodDHc2SlIormOAn04HLSwJFrGvqAsRaWConvEXF9bOY2AfaCXBJ7bDGlVkFJmkfY%2Bn1LxLQW46oS3kfSCkvwlGbzSHTklKn%2BxWTzJET1N7SSATdCiF0Q%2BXDSs%2BN6%2B60SIomkHQsjknoz5G3AusGXpuBNBTnTVl5c5wTzbaFvgz0MbfXToqaBB7JuKFRvHtY7sZXWKEU12V%2F5%2FfLQpAnZ1RGJMUZrNipCHp9ol6nvD3U0xGlZvVx3PxjGiOIjAcWIqNSoZ4QPeXkFjJ5iJEAVDjAA83JWsWI1UFnQcmUUC9ep%2F5JclmGPnu3xlN0Q6GvgmW5ZhXL9UvO7Ve%2BIeYZqTQNlJE5iuhdypqMvMVG174vw8Ykj8F1ULK3G72l%2BY%2B4p%2BQgheP6WXmBQOfMFV1zjD%2BCE%2Bqhm3NpLy4ygd%2BMMjp8tEetgoRIlTU5nT3sS6BDHuaAlrrwRQTquEX4DMqVligmQbd22ONyvb%2BFkCGhD0TvwPkQ%2BBgtd9MKlfnXN%2BpUnTPmEgt4LfWNHVzggNQNLjphGLfTs%2FuX7J2Yl0tRWKBrx09I57Q6XDi5ne%2F6woYpK19VUlXUBPDZrQZPAdbb6MLDZmL4GOqUBu94gVgPnPpW3eDgXDfHXkm2LQuJcKxRM6hbiXtRzsoQsH9YQaVtVE6rBsZXTbSTaARBCpmVkDhYS%2B0z3kCKSJiqshEGh%2B3EdnKqhZLdtUqYxBV6YtRU9cuLXX5dzeuTwfb%2FkaRmKzk1P0B11xRhsaDnl4Oruc6i0DpZQiSw8Dgf8bEiM7jHhgPxXrzc1mII22cZ%2FlDoAUVdYTZML8y1XdKCZsb0E&X-Amz-Signature=8edef607cca7115de4542b1db228cf67af2606c4ec63835afc81f17a810618fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2C5EOH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2ByrYYj9ZHKh0zjlg4fIUwmJ5aAvceH7KEXxIHZ7RQOAIhAM%2B7zQJxJ0sjv8CoBlMV2899ms9LtgZoSZfo5lE2OnoPKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3h8Z1U3orwMOxBaIq3APRF1FWhSSrW4GUhHw%2Bya1e41E%2BND5b0Rn6dUDgKRjO07xGfaR2lWNE%2Frf2HxbCitMZ9v27GHLx96eYiCw7IYa7drq2d0TLsuR9ZtB2bUDOrTrWJVkU6NiZVY5bkatlMKjJSZCQTXUYZQ3GJPNWg0xYqJw0XA5r00KB%2BG6Q7OkT6iYU5fhEkG6iXeavaIJjMWYmgauZj%2Bl8JK3yMSoI%2B%2FmPqHXlE8oQcvUykBZ%2FKvusrwFYDgvnm8mB5FMsnHs%2BjNF1ZK%2FiH6H6OlMdlh31SKPR4g8vvoFZStYQJGeyjnU8dK1Jl4m4qvGkCIC8ys%2FYc%2B1bx1KfEW6QRtcMJx8im6FIiM4XaqO4CwA2a0eL7cJ5bkvYbHJKIuNqZoedZkkjaQvuNMdzV2UpYkA1RMYNseTET03g3xibVbDeMlRWrp8oMvK3k9w0FqeIp%2F0YX1yQRdGv8uL6edG5JNkIqmy3%2FlUOrGjsZfN4sOWsu%2B7qrTY3Lbokopz5obKLmjA1W1io8fkC10a0oulDjhPxodj6MITA3Ne7l5%2Bp0PuU9KzOuQ1aXHpZcOCf9xVDcP4A7cYH%2FtUcEL%2BlD3gt%2BLAATnpuYFE%2FA%2B%2Fv6of6fjyAKA97YNwD2zZ%2BEo2pKPtRadnkBTDH2Zi%2BBjqkAYe58ahIqwwaONT0x3hvVV1WWCoPcp6ihM7djUIxtIvVFKO8v9mupjHAmbhzggLmyD%2BAJTZ8WuEY%2FlBvPyAUceAketTkZ8jpVqY1Q6NFnlXpcqqGoh%2Fm8I2Mih969n%2B%2Bl%2FEzW2BbpBdsZ6p37NJHh8gqqw6lNTGPXPbaarZ8iLcDhOMZtayinqrQgBwFHnbFcwZ2y7Sm2Zvz8U0e61xzc5eEQ4m1&X-Amz-Signature=e649c5706a6728c7dacd23126593472997b6fdbec49ad0658bc801c231f37891&X-Amz-SignedHeaders=host&x-id=GetObject)

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
