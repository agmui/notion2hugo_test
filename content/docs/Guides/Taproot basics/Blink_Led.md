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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDKFNTG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGScUO0O2IFpBjqREONrqlXqdbAdfLPAHJ56jpmpHyaoAiEAu0odQZH0BtiPNh6uw74qIIl4inuoe1NadrdHFM409a8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF6EwIpvrdNFxYoDgCrcAylt0t0SKuL7E10dcTDrMctZk6no3aSlBZuvCFO0qdvolcfdnFAVvg64KWMLS04V9JSYAHEPe0JrVsmlBUIXtjFV5zxIau4ViIthWqZC9cIs423hs5t0SMJTlQGDwAKsBE3WwO05DR%2BO%2BkdfhvvpTEY%2Fk7nDoHc6fXb8jgcpYY2zFqhyOOW%2BKgfqJ46NXorFHgVuZ6EGQFh%2Bh04YwosiUdn7HfwU46Rqg4AMJXWr37Ed8QXCq1ZNeqcy9rvfgGg39JDH1MfQft%2FW%2BUWRl3q8VEhwRiPuyJUIAYYzkvvJEyKVusnEivqOfGwuB1J2VtJKHNjVY5sn59cT%2BQ727lCjhynOYxmp6mbgo9oMunYnNUzs%2B8yPNvmCNrXG40hJ%2FNHth1bqKB0lhnVb8d%2FxBl7ozDJVgw4hY8A95H7nBAn0tKYTUn108FnVgQp835Dyk9RBqp81%2Bmu3usJ0Ikswu7REckSFfHfuooiYuS2REmoqHmSIeG%2BvI9Wdf7qgtfdpZW%2Fm4s%2FMxk4V5%2BDeQxfHSvPLiOjERqCSG5AwQcYzKZGLjO9mfvedM20T67nijqJNzq%2BFUXc7f0mxOEVdHNMExc0PLPPS6laBRa2kp%2FpzV5NPj2ns5TJopnPbZ93PSv9sMNCl5c8GOqUBJtK7OFMjs4XEZb4lEdqVi2CokeiR7WFX%2FFbgumnfUvnszl6AukHvF%2FDgXteQAkYEBYM%2Fmsz%2B02j4H45HymuHLUdGzyLEw9NYLq0E%2FHqh4vhSSZ1RM3um%2BBi4CsElA1%2B8lvBKS8lhUguAY7IC14IOxsP49x%2BfK80k9O27hlFbE1nuHLtDq6RAgfm%2BmQ1y1T%2FetJa9H6XN%2F%2FcqJQ6DClXZSUBUxHYa&X-Amz-Signature=318dacdd3455a75eeb968d06434fa7401b9a4614d4349720a22110e4e41e226c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KM2LWXH%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVXiKBI1hVDFc4GT59vb5jLa1iRp7M%2BTJdlo%2FkxDwMUAiBiFpbOxiMF6Z9210R5GHPwxNt1mTTCpUEiP391x7lTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMi8aLfCDXcFnlnSqLKtwDN%2BTYvJPjfD5h%2B5HrBCLsIdxKqXy9tt6WrBWs18BRT%2B5Bf%2FMYkqyNGzR3HlEycvx8I1aeNgwvCGrXIpOSF2h3aZ%2BjjXWCN7GozwHQHeBCbB0zar8WX%2BhYkKsu5y%2B97Qi2KAcoSLahM3rhr7UIrNGsPNdADFtgo7kibLIcm5FMnhNlRo%2FBV9s2i%2FN9k3GJIFHcrFi1utgO60qUfZ0sG0LvMMYkv2pOsh2Cj5TvnuWu4lf5ix2AY2omNoExwRJHUeOm9vU8NhPGrPrFAYAJmNWPgMcTLQz1BfTstLS2c86OUEKHLe5ZvBk7IJOfwy23jcwSI42q2AxEzV%2F8u2do2o5xAKqE2eq25800b60eF3rNofA9hb7II67vtm5JHWveOONchm7O5FK9GUmWAVo2njvvYUy0VY6IbBwhavsWoLz8EAIw5AfuosTYmiw%2BKHpMMbtBazVasldC1OD486yavtTFOaUF4IntNI%2F5VlRlrtxWftucqH1oHUMITwJb7I07RBqhnCkV1XAmPTIFgFl1mexp6gcXyOdV2UMuUzpd7OxuIZ69n123UrIXMlHno%2B3p8X%2F2raWoOpItxFBO77%2FwzvIegzDJVSg9JvJu0e7tsxXpnEezuOY40166hopCxiAw5KflzwY6pgHYIgfgnO6qb7en%2B5jInnyPvwjQuDKPHMgfBgWljhk8cZcQPTrl1czSoeRgNG7bfVZWqrflhVb63W0hzmd4Ad4%2BfuULVvLyvPqY9jCl0PJJDHw7hUHrV2XS4LdP1t63szlyARSeIZM6eNGopmaIQtL6fcn5sHd2QGHgBL6EG%2BiK037ZtmrKMvqM0DhNfdkSZhsr7H1E%2FSLJBuGJaAIW8LqKYZTRX5JD&X-Amz-Signature=7c0a9dba39d5b3a858e74e74d1f9b15b0b96e3f0bf475f1cb02c46bf6e2d989c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
