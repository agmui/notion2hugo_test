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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT5Q7LFR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByBZydmOjAuWf7Fn8FndPJh%2BE5qkuPSInYvMhZGtUe1AiEAqHVgm7yIiLSQ9WYkzP15m%2BC2cHUHB6LomQmwrA1luQQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYFO3Lu0DPN1r8c2ircA87PgZIVL8PREXl1chHzpkLZb24bsSTp53hvdnsUz00jT%2Bm3bZnF9aRSK2I7nnqWvfoGT%2BvXvNPwlmcGtumdyVbCd3W1iZcNkzSQNEt2FBNyZm03sLJTqnOGKmtkvqijUMD9ev8lJddrOmP2yH%2FWz6Zr97iQRiZNVltJRHj5QM0mFOLl1aPeoHtBtLVN5jJiKk5o2R%2F4vZm51AY9sQC36%2BZKbzDGaTeEfYL0NCkK%2BT4AjWZtHLQFPKl1b1pgEnzBee3sRV%2F8KSjpGQ%2FvOi9YsJf3qdodyswR3BxG0GQjPdTHds3hNxlSxOkZkamnDTo9%2FVz4mKWt9BHg0ILxddhRmfoomLMbRWxMGdpSKt9NYgl67gabuEfv0lUd2ZEL%2FXc3rVb0oFN%2BB6WXs23qz84KIUQAdOZNgpUEPd0CpdhnOp4rRx5KvFRlm1RZGLLN7Z3Hgg2NvkS5gOj5fYKNN94ngOjEiirFpfhERa8e0Dq6DHY30vhs7tBt%2FJBfuO%2BQOiK1Q044LjHN7JwU16c3iFsow%2FoAY0oji40Bhp3Y08XzqOjfj2JtEmucRgdEP7MSqT9cT8Xs4%2Fz%2Bw%2BE0IK2ZiGdBFxpUn10ZJF2%2BvfEypx%2B69UW8j3ZiCIx42QCC2C3YMMTtrL0GOqUB5ekJOn3w%2FHujTCYgDfSFpnAPQx86K9lNxFB0PRQ5puGpMTspUrg4qfjH%2FfeiM8fe14zonmDvVWKEWGyQN2n6rF2RINhxmLb5NfnEOS5REqxn0kGEAPnBpK%2FxT6UTqRtmklc0nelLTu9I1%2B%2BaQVoiCMln1fo1zwbdniYID1TRnONZOXm1IdRhajPda2aQBKODzgwMKLxrQN7J4VZ9unwDp7ak7t0V&X-Amz-Signature=4e0088d69e2596af28e3a70a6e062c2781453130ff7052995ff009d4d7a61627&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC4RTK2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSboRb9szMW6O90Cf1fevw5R%2F5R%2B2CNEAJx0pfTBCtwIhAO1GoTfK0LuvqBEH9yEOX6jKwMCSs7mIDCzWozL3eEiiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCQAUoKyVY0L0%2FJMoq3AP6DXtH0t7cc8qBFnPFfGXrsIzYNIs7%2BVWFH0J91eY5aWQ1F%2BsqIOwZ9r4OzU5qa4oOzl3ieerklyyd4uQgrBnYEcgoQ9Fr1QhxyZjvbY6Z5cfSjSn3ESibycOwJbUzEksNGuWfs%2F1tjT9gWJpDXCkSiYl2OtTqVrx2zMEeindoUejVZwoCtXiUz6xcJ4t2lXGZv3l2TukobBLeU8e3v8p96uJx%2B6rckfc5ryp%2BJ2yJkmjUbFjQI0zxm72ffcPvLr7PJqZr05rXIC97kYrQpx3%2BcFeg%2BNu%2F6wN5xJH6kMwpbsupcLOQdhuJmm%2BlBVADdH%2F4eheMHhdUY352YWOgh1H4n6UKdy7oQVS1hqA%2BjFORF4Y8cjpak5WosnQWeRvDcO4oL%2FNmbR2luBDHrmcNx85fGlQ%2Bsz40M%2B9gd0sec792fpdLQYGZcsuCLXhLE5%2FeuRuWApL97PwGpe2VN%2BZv0jJbgZszpCvnsGomRSDgufqsJFfDO8sK1sX2tmc0N8R9ft%2BxYc3HsuGM%2F80GMlUXMW9Lm8oVBKYJWkwuWXTt8DMLGGBQfjG%2FuSZzkZxbFeJ4dZeu1CRYfhwGvBVTZUfljeSXAhKn3vKIJT%2FZZ9A9gdEZfeeu7c8Q%2B0EN0rYPAjDt7ay9BjqkAcm1IIe3viGYZ5Zk79JMTjZb%2BgcdXD9GeVxndnRu3sTBbORkIno4lngo9OFjvCpeu17eAZ5Sz9Z9PsUe4CL%2F1jf9zV1B%2BsJYnXExX1x2ceNMFrdmetqdcXEGcYqQupxF6yx%2BzJgamONvBaB7H61yIHcYZv6Qens5QWbavhgN2hVWmJyrc20RHv%2FNrNoC1ZwsarXGM3RH%2Fp3I3ggq%2F2pynzFsLHXu&X-Amz-Signature=d04348fb556b48049fcbaaf4540921f4932498bbfcf6da5412d61299952452fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
