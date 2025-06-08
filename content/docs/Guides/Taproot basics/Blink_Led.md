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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBMVAGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNBQhLkQE6%2BIYK01bx5HLhDIfIp8KFpspWmb2fepJK4AiAHHcQH%2FtnnGcy%2BWz3P8njhYsVjsFr9N8jDxO%2Bwf7C%2BjCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeFHdPeRWj1g3NsHoKtwDpURoQKQRXnTsPdinFdpbT%2FW2%2FLQx2f006lzRM4IlAGWZiSRtWD4eORStQW4GOUPuqSgPtQnmx0adAWOmI0fzTSv0xzdm8HBT9XKU9C2L3ApIM2Il4Ri4NaSAWoCV97CNqUimMD7x5a3W7V3ZBz9pz5kRsNrLh2WZhSVcdan1C0iSNNnCkUa%2B%2FR6%2FkTvKWPKn2axDq3nsYlj%2BV6jihJaRcsUm92a3Rq25Ts4pnYf%2BI8dhpDNaic7pZ2Wlqkql8sEsJWECo9GQAJ%2BPnEuHJfw8%2FxhlNmEwEDO6UQ6rLjzlIXF0uO1nLNc%2Bh0jDBUzzCnhNKGhR1Ll6PcAPLBZN4aaCYXAKnUpRT0FG9gpivWge1icJ%2FHsPe%2Fm9g7q7ftDqWB00Ifg3w02CDUCNy5dPACjpPlVKgM8B1RwBifzV43eK2HMYl4iZ4wpjBywp7NDRhBJhLXV8AYKd8CwOxI4WE%2BWTBs0VrWZcW1%2F6iHKU2RLjfArrLwsFacjDL2kAo9KrxYC2hJyXL07ZTINvkLsGDNAyed%2FTSCKD0YYVQ%2FsZtRRkweihAur2RBWwumQQZdYqpHbtYrQCT3BC4Yl1NI4ZJsNjPbTefEOaLMQ8kbi%2BwfhMtQqG1chBL0NJa4UP3m4w2MCWwgY6pgG6oOW7Zpd7UwPSKGtoZk%2FtA%2B8u3br4cUzNoqtPllypFg7r%2BfLLTPw9Kfs37oXJVZb%2F53uHgAmFnhfloE9SDOS85m3CWrhvhY%2F8yLULWPy0RZzuenGs75njKjZCUOwkXOHKNnZgtRWqS6qbskyR7oUtcUD39xuC81O8aPi0aiTBZ3NJtmTJxAHXtvcmTUWUxSvjISOF9etBD%2FDeveczQWhi%2BVVQd9kQ&X-Amz-Signature=043525fafec444f087a2eb4690cddcc93296a5f2f3484566dce68d79efc12a07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2MPLL4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYgQRmJ25LW1dXXdac9fBgWwGnJzOWLKNXZpOOn2wKhAiEA5J%2FQJsikLFo3WLhRZXi0%2FocQfYPLNx7HUVE%2FUWiyvSUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG192GczapoqXFb%2FHyrcA3ZprX%2FhOKj0URUpUNTJvsioeZLyHbfuOKC%2Fw74o1bR%2BxX0V6d%2BFBJT%2B%2Bd%2FxE0ZSTwGNY%2FuHxdp7dwoWN4d2wKhdnaG7KODPxYwoD%2Ffqas6XUugdSqhbDAKxr8V37Ler4HIkKgdX1TiGRZdg2%2BKtq5hGper1YST7rCXCgnJBgL%2BWX%2FxwFqycZd9EPxcmq4f7%2FF815bnCiywakp1FwX2%2FcwzA2395cNfdpxaeOcxCs0tEdR%2FyTO5zOnIyOS92MEf67GakA8JW8kHP7m9jeMxXCK6UqUVzATHcrgn9O6hTaBMtYtbgTV2C7KKFicMwo2wXTfWZ0QyVQYRvYoE1UNElXjMffBt4hCyU5bk3lJACP1gEhSsS8VmHCNaZNYjIRUgXq8EjT6HocGG3YJPV0r9Ibex4X6xbAKQ4WfAHNLtOJt9DeY1%2FhdeeUgJLs2vYv%2BxhP5%2B4guGn71PyxRuaG5pI8EAwo5xtzGD96mlSoGxwGKA%2B7TTCpvNojk5VzIfoH5nu1KFvtTZ2msZeMiaNeZoLsnw6QPU%2FKaLkkUkuCAmiH6ELXocI%2BVVJOqlv%2BrDVC0qfUvmKCaqOIStOwFG%2BROsxRx7feKcmQlyu5Sm6WWE9nR4vKYyy0vX0omxZbSVuMLPWl8IGOqUBtY96tsX4qZHhCPdYfixl53V4JrNvfe6f%2F7gLMB2Y6q5o8MMDwBvF9dwfB9JSDE7kaxuLEY9Mi8O5ReJIPAKMvutakxz7tfovueXf4%2Fsmk7sbrflUo17mNEgXw5rAOhVA%2F9hamUPxloGqj2TecRQ%2BOmzSYKUU8g6YAK2g5cBYRD%2Fm32xK40o%2B1BWGvq0OBIU7W6k8dowNOwyccy%2BEQD4uyBE7y7g3&X-Amz-Signature=d21f479aedb1ea9d98f4af9fd21be55113e67776549a6e92e84696aa14a42197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
