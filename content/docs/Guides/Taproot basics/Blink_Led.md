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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLHJLRQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIB52zF8kv6QDgpIjsgu%2B9kgGsshvonFBi0gbWD6TIoLDAiEAmbvYAYXtYja%2FOckc2zOm35OFrz5kx06mg%2FqwIXVsD2MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPhkEeWT1s5lZpZfCrcA2g%2FxQ1KtPh%2BoMZuZvZzndWCuMzsroX92NYzRQo7GVib8n31qgPvQYRVjD2kMiRIqoS3wU2z6IzwiqwMu9YeZ1yTTnTeKJ%2BbY%2BKN8EMOIR%2FX4D5DPM1%2Fg%2F5KgwF8oVfQ5RINLVxkihb8KXK2y99zK1rqbEe64l41K%2FvXyuYM0cVHHbnij6CyOTziXK8gJ764DcSQYaq%2BK85p5CszGwR59iGvsdK7TAsNjHlpZGUO55t%2Fo9S0sS6FEKf6EUQY9KXJgWoSC1oFAtkn3OWFp4NPnQg1S3KWdYvc1A%2BJJD9vA%2Fvo4GjolzgJtAl8Cp93OUwh7oA8rX%2FKUVkZRwTxZijoJtqROkOcBMdO5F96saYDSJPtdKSlwzCfFqCy6bqHPvc8lRRfEKXYD02W3Sf%2Fu3IAITKhBhSAA2A0CQwUFqZw6sVWhVy963FcXOyQJKQarrBFvS6J9nQnAXrdsbouW%2FDCKgEtcqzI5W%2FfWi6CwsR6jJyK4W6MNrwn1%2FnnSWWAPxeAUfpiEUUodsCE5%2F85HfwkwHC9hmVpoOhNOpPkVwG8VTba48HCP2dusaEmXVSqCFEBYjJHW%2Bt6pzDWERVHsnbsrLZgwwEDtsB8UXfI06PDlbFVUq564OFKeT6EyPQSMJ3f18AGOqUBLnB4VyNtveckWXZLIzVw4QN6Wsho2Rp8ARcdDJbFGtN%2FoT7cTrjO2jDIaGm1QXIiVlrRAfwR25MRTPa24ni8n%2F7uCiKw6kV%2FHlGfaj6GBbxTO2hQ%2BIcyPlvNpziwp5NfEqlK0iPpXpWGkK147ji0usC8LFi3LRZWNwDmU6rcyxLKdmQ5%2FxphTJRlFGYzQky6j7VoJ5ROqe%2F5vG%2FwaDooPOxZG8Fi&X-Amz-Signature=e7e0f0c0191c9cdb19646335428912a1af856624cc5ef655973a3a961471eb77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U2KGJ5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIALc%2FPCnVkbJqNfMcgv6ZKcxBTD97AmzB1v0dfwP7r7kAiBOWPuK1qO0ldAkaXDWtcQG%2FSielK%2FmCKWy15S6IJAFqiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8gMSyYKVyx0Y9OHKtwDCkGKLZvS2YfM8b7UFAP8j%2BHdnKQgo8F2WK9zdK4aYdB6Zlg2FOJPtzHDw7h7P4ohLBNs3vRbisXxtE7gG5HE7B7qyJVO9sUao5QNeqfJgwaX%2FOsn3d1r8gVVsWkwI51D4VgjsUvY6k9EZqFJzdMgeu4Oieh8YAWB44ZND5OHbo8XMSZ%2BvqnL6Dm%2BKZR3lbpTyXdVBx17PYHTnbSKb9mi4iKHekK0kDLczByfaBr%2FJr0Nv2yuaY9Oc89zzXhZ%2FFAnmpd5IsksSwhn09RdTTM%2FZR3sCxAEgiGgU%2BxCPTQCaMrjLatjeYIiqOnDOG4KkOKI1%2F5mLc7msZoa%2F81qDmQ%2BbdYKcMmHHtlXUWlrLbsMgp05JdG8H5nLMtiPWVM%2Bl4%2BdHoNrt0dr1LffxHx%2FX2pwJkj3DPxWlbcwrDzpV1wc7%2BSmQbXpvyzyQxKjcCpBUkanU9apMCb%2BImFIpyBXLl2Tbzqz4PnrfrTjpV1oSeSw2gpgBTbvvaXHAhU07clkBaNiKEhkU6gxHxaoVAdnZKfFUMAQhLZNuglUQQJU0DwzC6oeJSHmDtGDnyE2JPHiSYf0CIxSzq1k8zzvu9MZzGnhehMWP2dQ5%2Fp2EkUKy117MGuEG6WQl3Nz%2FqixmS0w%2Bd7XwAY6pgFeQN4UOHGpwaV%2BsV5DbX3B5aSDkkP28%2FFLS1Y61u41ZChTU4uBiPPiQuefJn%2F3F9hTGm8pw%2B1J7fz0HW7UBlIfBoP1YVmBcoGUC%2FMdUkioTZYkk%2B3N8PZXczFUuz8C1mFoxFwOb9IHqDZOY%2F%2FQLqAsBngmVLrGQ2vLeod6GAJ9Q%2FkzBMXf084NzkjZoVraEic7IYT2fjS8i4VcOECdw3zJNUGCf9Be&X-Amz-Signature=b5e940fa1bfa9e5bc5725e1281e24326b3533a85075e3bfebe73eef00ba106e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
