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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XK4WHO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFCGj97FBLLP0u8e9nX72aBBeolxoNBQWXIj2Yv6DA45AiEAo%2Bfj4%2B%2F8PUwwVZv0l2uUPLiYZRCKNcqOJoFW6XqscNQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGnAViMG3nuqGm0LgCrcA2GGgpTi3TXG2G9M4AKQ25jYK4f4gkVRyDxakoXo55%2FytfvXO6bPAK9j%2BYDCDQSljuk9MZ3B4Git1okX0YZcK6WfrH91yP3wqmj9Rt0wGnmcMQVVbZOg%2Bnij27pjGqKwFIXZmuQD4Yaq5J%2BGLb8mu8ua2uxaJL149P3ez47uTBTURtxmruUgKVzBdunXmEeg6SrLzTGzHRmc%2Fnp7Hy4wGGEG6MNRZf8%2BAhJwEKZveeurwT9OYeg%2B9pES8re7TEm4jq2PbNFyX2SXhQcTZgBxogUFpR%2B1uQVFXSNZPoACrOtqMF3Yz8gE%2FiNd1ZX52917qckQZIDGB6SZ8z20rhK%2FzXBQBVGdf6iQHTdD1%2F4xOjUBPWEQKaK%2BbhUZiWUCJsvrQh%2FTp5u2geKdqfnUDFslvikAJx%2BKkxBBH%2BrGB9oTXxZ4acsn1ETOUJNwI7IBrKO6zYIajHPlqTOQArKyj3wubTmTmZBPiYAyV2Zd%2FA8JK%2Fspwc%2FUDdCDkQjbihJoXED6zU%2BQlHXFr%2BHUVFoHbX5yqDjcgMNtSQSJROqnAxc0JjH7LmGXAUoh5D1HKyQwyZB3Zv8iYKbMS%2BPlXm4VutYGdpqWkG9g2AeU8kIE5WEToxi2kNhF1T4VwsQ9kMjpMJPmmsMGOqUBYugF052o5b5N7y%2B%2BgelpHa20g61KiwNROcJpoIAvjKvVeuU51HNj3tP99ZadS4gUmfTB3QmHbTBqxYw553Ad%2FV6Ahdo0lFJdDNN10JqHPDJVFBJ6MXcAeze%2BZhUkKAU96UrIBKFwHf9zwbpnd4kVgmTtlJhf%2Fvh6iQV6bzdVhFl9sed%2B8c1TI2vbw%2Fq6cd5dPP7%2FAlSLPBCSm8oQAr1xpKzDyQKH&X-Amz-Signature=49a86cc006e6b80c32b20260c67bbbb6f4b56a9fd55ffe892dccfd7aad62f415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE4KC4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxrL7OxWZ12cap2i7%2Ftvy3k5pZHypj6AFLqq6rdVSNfgIhAKyl93t3T3Wy%2F%2FPbbWi1U%2F7hfd8OD62q4iAunZk6EfC1Kv8DCBoQABoMNjM3NDIzMTgzODA1Igwxd5U1R7Twtttxsv4q3AMWItIh4fYpBGS17HnIqBFKp40OQWUSE2ucHjyfTn3HWXaRsg1vCGJztW%2FDx6WAZ6HLpHqWRLybGeaGb8OtPQBk2ju17LUwaqGvNCi2Zgqbod9rmOwsk6QAQVXXMLWfIhNPZ2Dl6cLiWTt8s2G8OwYoUIHkm2NNgU4Wd0lajjoa91QPSCjZp2reT8CKoVwFi44SmXPklx6wCF1RUY0IVvRDzsy9NY9471Gi1IV6rw4ItDF3rwKlUtqW3jNGmudtHLIFrpbQkXJl1sNBiPgpB2goVSukj2wZMgE4CTYyLyejG472Uh%2FD08DyZiY3zAxCKgRPzbartBS6yjxAHmoTZnS4xJz%2BJg%2FTnITk5BBuBB9kl1Lm%2FpM5rJ3O2iRU7j22KwyH0sfxlqbdHdHLcFAFsimqAQ90DwNyvOTOIKoPx%2BgnS%2FlhNrU5Eg1JV4Rv%2F45SnzhgUy31xVjl6X6BpwMzxEeMmz4Px1oW9bZ%2BmtlbvOjLG%2FJAYmXxap%2F6RtfOK231zWkqUQE7XJsgoR0iFq83atOn7Q45IIOK43rjfaLFxIys%2FzlmNDKMjD8NJLVNVLHV6H8E6U87%2BM041GDdknkRthujF48HE9b%2FWKrc%2BzDlhHc44dNQPWq%2Bbh7JwGEjojCO5prDBjqkAaGJln8lH%2FlMIYdQZ%2BTeDMVpSgplgza6peUORtEiSZEPpwiUS6YdY2Kk68WLHv36HtUeCzkLH8iWmHWojUU76kcg7c7QUmh2M50P%2BYvufbpi01ee9E9O53Z4aeUse3L87x5wlJcV%2Bc3G5cw2vgEDCKRFCaWugtDs9ygrsvTfxkCvkBbYADVv0LKf3LGSusegRCm4GJv17P8TAuRMfUdhauHj20UF&X-Amz-Signature=5f050d639c68c3e53b1b9f02953153bcbfdcb6b962c294cd623baa4cb70d0640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
