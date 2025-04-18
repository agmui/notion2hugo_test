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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAMDCBD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX4K86LyUf2cuDRnqcCvxEnbe5hySShXHOLg8QsoNAlgIgRUehouZKoHjBqeTmb0yQZkouNrElwa8EkgNwooIJAQAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBf298Z19XI4t5T4zCrcAwvkY6S8ABYO7n4PC9FITedER2FZZx0PTO4RQqM%2BbGLZ1Qjk02t%2BRWFQ9jRtXNx0CaHamt27JePSxQXKGloAMgGaGn5olDrpXlEIF4%2BQ69UHstYqqczxlOmBTI3YBhzhZ6QGxAlKdeUsq9l2FpqToyriMi01%2BmvmrB%2BGAsibeMwnezLDkLrkIhrpcF33kz5KiAwYPlndxs3BiFzRJJnGeyliEuHp4irMNLZBNkbz8%2FNeuYj1tSWLLGk6j1ZxsS3HPqCIfHV4ex2sN5UCkXrgXXIP0puYuMNVpfJpQ50DGPF%2FMA2zXEZJwMU%2Fy71Coug3bFf2Tqx9S7Qul5TAGOFlJhVP70NFMBlbTv%2Fbww7D9LmGUZ0Ze7xQJ2BjobkDPzwPp7qzqrA6J08jmkZC6klSC0CO9MHpnKZQjv8Cej3sdpdxNRb8KYlOw9aaPNaYgG4lxAp2HQLmsKyXUEB3SeVJ7fR9XukORr%2FyYhtwM%2Baf3648i%2BUcKU%2FetTwaN%2BkFE0RrMpxTLCKUrlrOqeISNLTnCmlTp6jUOlolL5Fz1IJTZ9oq2aw3UNjz%2BP%2BSpAY9xtA0A2Vym8fEO6YcfaLH3DYPvbPCi%2F6hKvizW027JBKKU7RuxiNiblljaLP5TGECMI3JisAGOqUBDboeL7ffkfKfiZR3tILbOVbhaORJZLKuIg2DASkNp6Kiyq1sA%2FGEHiIYf5tMSB12IiXH7pzcBpPYh2UHCVPHUgKtR9f%2BHHOKVD%2FPUKfG%2F%2FaRKJRTdEaONgvhsWdrZ8qSKJxsOCp2wvL1MFD4deqBjySm4QuY%2F6w2%2F2b93WuSwFWLqhmNzOgIiH4xqoJjjbxgNlytPb3nQAm4JYU9WmzbEFSEZ87z&X-Amz-Signature=983c447e170daedc76bf1636b6a55ce6f942aa953acc9fa391302e0a2f18de63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUVICFB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM%2BFpDa1k%2BdYu195VAri6E%2BFDIWAjAvkTRxiFfxWt1%2BAIhANyi97I5G4SgHGHhtukpB0wveEZeSQsfBMc3XKWOx%2FSvKv8DCHwQABoMNjM3NDIzMTgzODA1IgxUrzPGMPKIUHPpFpgq3AN3NXCgnu7Kdp3PBrGTGQBENqHRMn2iqYSj5XLzJHda3eTyqmhThryfDxnH0JvZPOZKSEGSHqlWx12LwN17PAO48mtC2WdbtJi89DaY%2FpbzrArouoFVIvbRSQ08lI%2FmNODE5IHy%2B%2BCDI6ulCjxtnFUGgoW9NIQhKtFGZFJqZXTMHqKs9sQuj0I1JC1JgILwiaT3i9Wgu%2BWBxWLYzTxZ7DsvAB91vCJUvLXdc5JIPoAvPAqKCLc85lwcSNjRrENBHNeiTWDEnA82sUlIm0%2B1%2BMcU0zPddTuYi%2BGBX3HsRDt%2Bi1jFxaIp8wp5fh9clv8yvaoPCQv3f%2FcN%2BqlwUJc0I3RujuDOtbQh9DYK40ytjTbsKh0HHPgTbIL4znT3erDaez75Cx3SbLtK0ijWFpNEqbSdAQMCXuydtX2PGURArm0G4Xn18TpNAdJed%2B58FKW4s0%2Bb4VJvWmtTKZXzLZxZlyGiYb%2FuSyQuCMKLLeV8OptiAL7vow3KyKg7rgynjfuKj7%2FLhW00RIeqS2LrO%2F9bhczSxrshU74t4IUFSsBcpHRf%2F6qWZ64%2BboU1mTwSMw%2F9SuRmEX%2FWJBqQ%2FuBNnCEYQM4z0qPAa5%2F886B9csPeW0RqUbf%2BCbDYrTJ0pqIIIDC9yYrABjqkAdYSPprz2jsbqzM58ltP0iI35FXA8UMd13I5RFDcvddLN3pfsjVbp9%2FZmPuFzUymp6EqXLRMcqSJQxrUpIlV81Mpt2Kw9NhNky0I2VpVyH9vklqzQlFkVBh%2BnI98%2FEdyINNGVtFKg6Bee9e%2BwSSkRrfjRr4sjW6%2BGORtgJmmCc9yGhvD%2BeKzNVumy8MAbPlPHIzcJ6XAr%2FsxZRtJXx8JLkkZxllD&X-Amz-Signature=36d0c325dbbe59478b34a007426c23e833cdec5f843299da7005ca89328569d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
