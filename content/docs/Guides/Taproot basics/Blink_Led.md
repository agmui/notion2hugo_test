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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73UHHNV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2BxZDRX0hsiKasNU%2FFnEEeBEEOg%2BP3AB%2BGdSZSB5EwwIgMXplpq98Q3cxBWgYR6UcTI%2Bx8Mtf5MFLq0Nn4VTwRrUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4E37rz2gaSuleFnCrcA7ywz%2F9qHHMkEc5BXaZ3d%2FCXcWMSGMK6sRXJT0EfBwlJEfNKuMMNa5bZhAfI3GJpRJXQfi0USTYdEH9o9DHCR9Kkkle11dO2nOtN9yrR3AAyZed7q2PhnQDDWMky8%2FJYVJIMjdZ4WVRWDamdyVqOHxNSFSnoCiTGOi6p3aW1QRVSp8CKFL3Npau11jSSfU7EAu%2ByG6jerA%2BkPPaHqVlI3eupaURmpbjAy1oiTtW%2B92L2BAGwU4SQHna43Jn8yZMSJtC2JNzJPwctD2Nx4jggIqF2iO5Dp8tBLUuliKP5SZhu4DkPmGm9ca3%2BTm9UjDENNkAtwqokMvf%2FNjPRFi%2BSgzjBKkaCdF6QloFwhFvKYIxZsIyRoWfsYb4M7tiXvn0ZxDcA%2B6Pqu%2Bh3MynuRlMD6rlse%2BO5qMS7IdwULf6FKhlIkoqbFiiGn1%2FzN5ngGlKmMsso2s9JIAtASdF2Y7BG9CZazkoZ4Gt4VKmqXowakQKbCUQgAOjLZdkse4iRJI4mYsQmctD9F2DPEBU%2BC1ynCWlczJMYWTMxfrRfG8aNdz3TZCwx46gSOS2AWO%2FuxcIn9ex30ziir6NBPMucpaSzpIhKMf6hzASrltGRBkvq2bZGE7wA6o2v7ckPs0smMMLtscQGOqUBHkjSNbW%2Fs3BZeNKeymBIUiwrQG5L2oxj0QkYrRHFeCYcR8LXYjZMF2pXs83rpSeJJl8qCnz2npOireM3Jyed1xa%2F83F%2F93aS52r3TNJVz3xo0pgAEN3joazAEk2VXqoqGycfnUFMv875EXLAh5IW7g0ggih7xfu087R%2B%2BxD0MPi5A42X9CzWwBLOnC89I5rmC9cml5DNIpAhmFDYTCe1OSRjXu1W&X-Amz-Signature=7ef37c3b0e4014fdcbf0cca12aad51608c7f0e1de9726559f937e52aea9920d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUU3O25%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn2viMfiSA8bB4HhPmY2FgRSKqZO9cs59g6qBBum2CnAiEA5M1qLBITgWzDzOi0nDnO5U5IBT9fvfa9q0nsc2%2BZevwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgK%2FIWvx49oqVMW8yrcA6GoJifoYFjaxl2HZ1GJqdsVV3qmbZX%2BkajDDd6e%2FBOr5nHNuztFE%2Fdbdck%2B%2F7TjCtPySWre4LCG%2FOwSgsxRqFaSrfatgeFcIIdp5HhlgTts%2F%2FtTzbB5vBgdjJuYMjBB4var3cymeoip4vlG1EWp4EbVMNUU6AEuB6QYLz5NECHF5UqQlUpNtnMMGbqyMcstd3ebbdtEJHuxl%2Bod8zP7VTvEHfSp1dWfQYrWA7BntqVmnxdjoz88hsptXDVrnntBLAEzCelhaT5NNr3QzCltbfmtlWhL9XEshGvfGcvsziPM9cc5qwhktOfM8C0BQkA%2F1d8VTjK0PLiP41IO%2F%2BvDeq8mk1KspTn4nTq0UkmiquvMpmoJrVLU5xhN2FYDUZGGhHRBDFvTgdqG9L0LjRmoCxQglTdk0eW6TZbjAH1nAw%2FoQdRuXTNaJUxJuy6frVB%2Fx6VP0xDaKVdm9UJqoYlo2tRkz0st572T0pQCuDZLIpzP1qZieiP3o5Y48Zzu7hw0ysP9BOhJCkKQiPcWS6N7bz5Kefa%2BbkvihIxmXjBqoCH1g9TPI9OjyO0WDnKskuvH0ozP8pq5FCFtEJ6IQ09A%2FsG%2FX1D%2BqrOxdbwlZ4qSIbXWAnPiyidLClEKjqjoMLTsscQGOqUBYpsr65zA5T9NbiDcUJSlEcxTnu2KvugDOqH4uuxXqgoLZN17bBGTIG%2FibXuasEWqVyW%2BVoOrJg7id8BF7ZdUmH%2BuTGepDEMY793iCqu1QwX6xzRPjXdfKf23jSIyDxFqN4vAKNU0vUnKYNvYgqA8rFaYFJOBx043k%2FkaeV8dsGQDEAP17Cn5yp7xBNlsuFwzRsXg8lB8x4oFhrjU7dl0Rr30I04J&X-Amz-Signature=f45f87ec7c2e40466fe1b888a0b1505700abb81312d192a396dc0e16faa1629b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
