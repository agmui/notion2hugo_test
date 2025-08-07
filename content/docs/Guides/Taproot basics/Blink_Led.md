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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ4VVHVE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCt%2Bd5AFEJHZvhePZajGbhtpTu2bih3KYnvi9wtk2WnTwIgcEFbHOjAmzjQh0RVxdqs6RBcU6SHAq6Cjsx0hhkaFfQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FvC%2F8A8blc%2B7PGYircAzf6LtX5aNstxj6MGjumGaMIHmRB8MC%2Fw1RxVM9zGC1KO2TvuKhEN4H3sKsBHiWgvV0eslFVrSTMI3ebM7QsgL%2F%2FlhobTEHFITolWxLHm0FudxLJwB6FMt7L53XOQ1TjQAwtbeSnhgxbYtcEWZhhHtUmXYbAKiBweobCEQm14UW2Kl7UK4iZPS0Vb3NQyqUYa74FgOXhlyCz%2F8URlbLfPvLJ%2B5rWmr5IBgR8NRpHNcrposVu%2BmfwFoSvhP%2Bai7itnFpuYa%2F8WtkcmfJQa9%2FvQOaPVzaqlP%2BHuwoP%2FlbFah3tbgzvAE25qkQf7VmvMxNLiMPd7xXeoHXcuX5xvovS70CDc1MaafPbCrmI8he4ItBEQVj5PCgIjQtAr%2FgHeaHzS%2Bc48Xdod13J63jR03NtzAvGBel3GgwyBZc62FixdugvfhnzhEgrtJwnXRD1OMT1vkjnJg5uYIF17ng%2BLksfgVLQzz43tliSFaKexvljJRQ%2FH8eSd0TVCJWuJotfCZvjBsZWZJD88AaLOn22L2OJy3ASAgQAHT1yOOC1q2oN4KzuF8QUDVrdEp0vhLBFi776jg7EyujRV53xY3gqOKikmUsKkNVpn9bJJID6kIprl38EIGN7C%2B5qlC7182oyMJ%2F50sQGOqUBVLnywCGsebJG2nKCXebus0eSs%2Bj1n00wKMm5nb1IPKGMlGc7fziMvU1%2FjQWRk4Jpz%2FNmlW0mqtSOwK6W6PomcNv%2B0PkxxQjYImUq0dZ9Orq0hNpMj3rj2jkYj4V4RntYYLmiXvJOtIG51m92M%2Fyy%2FbVxS%2B64B9RXGXtOBvVZE1K7XZtlZpYzksoE2NmX4amfztHJRVcOL6Rj8c5rsTMVmgF5jHcx&X-Amz-Signature=1d1180a69ce0268328bcbf630c46730be41f416156594f3e718065c9b7d59072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGOO4AS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICARODsgecWzsVeDeDim7z3ubd3V%2BYCuTUfTFSND7goEAiABjdQ1VBIvDBHz0P9W7jDdpeAOrnCrTseDFAlocEUa8yqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSOO18I2Hn9Xd0LnCKtwDz%2FvMEJTRuo2v%2FToaSVZhMrxJoUuuBB65o5DY6GAq%2F%2BEgK%2BQxMTvjhan7jM9t0mKxhZs8nxEYYKvh%2F7YyrX%2BYq6Wz%2FbuwfzY%2BnSj0e0wdYq7NnqGQmIq%2BN%2B06eyUYKDBJs%2BlM2f9ZYK5XTkAV%2FYMO5q97t2e0YCYztBo6dMDOB0HR9ql3qVJ096b%2BztYtyI5qQZn2jJ5%2FPUUCmwfO6SKBEfPZLeZclf%2Bndvf2c39fwlUKNQNbTCmuEMt5j9F567MmDsjTlYT4XJPm6%2BmI09j1Jk7WGyGizd0TYvWVfRVD6ki8xCso%2BXcAdytC9IqAeUNxjf%2BkdNy0oTIMDoY2qZ%2BEieHks8c12wBPefEqREf%2BGk42WO7qUIJjkB2u4CNqgFTZgNhFUrcVgF37kOQmW8s5oRsK2J1mYahnEhKMi4U8Jto7DNyiPMACJLNxLaQtQTArtRZ1hoorbpKj4mWOyrT7%2BWMobvBSuTDhr88ouMJGPCKo2CQ%2FSTaRUEA9RQYc6fDvFWhh3WjABGIwp3max2Mso6nVdo2sBbXdeRH7PnxWc24ghPQIvo3QXkqevZCk0uofC8sR4uZqpFCv2dwALqXODOzV2xydjepFOo8b754RvfK2p41pySQeyfusHqkwy%2FrSxAY6pgFScYsvgymB8YhIAxUbLIIBO8LnoxJwAG32%2FtJDcZlLey8xZljqh2AmxYqVk1NUex%2BLLZYVxoT%2BzGZpTf70KlfSvZbpHQqaa6cTXb32XC3ssMxmryjH51cTiUa01tBX%2BHTrnuqmG8upw3j5QNz7c8F0a7uIGkEKadsUaiFRhnfvj%2Fd6pgxP8cEui0v32wRfaANV3eOfGP7yd1wutKB16c8aTVfDtHQ6&X-Amz-Signature=759848d385f12d331737b4f2dfc2c6ad46f28cb7179c830e8a167b3c2f2c53c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
