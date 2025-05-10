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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPI52B77%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICRcciWZ%2Bmmslfk%2BY8bkQyCQ541x4efcJdsp8fqYkjlUAiEAqQBSfhku9QXkzvGmtDM5aBr7zvQQwSXzlZncAk0lJO4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn9g%2BuggXYakxSH2SrcAwIZ9P0ZuAxtkK2%2B159UzJDz7EYU1f2f9OtHgnc%2BPsUc4RihZjYxVNt24fADteZCoRd%2Fyyzs0nizvwjNcADS%2Bom%2B%2BR5U8z%2BRpXxB%2BtngBLbZemQYCNCLKVNZqQV6Nm0x6oN1Y4PDxy1XExBGQ4%2FoPI5kiPAOdWRk7wBjAE0FrCW2KWAZrgEhwegpbRBsuG1I8YuS49bApATGaweobQ0TvQWCsTk4k2k64Xqsp4Iwqzy5F8E1zGkiIjV8OBfiP8boz8HJ8EImKV9Dc69ODnBygTIOzJE1zRhgSmW%2FnqdLMSCZmoSr0EfIVOQYjUZJeOojZzvJ6B%2FdKV2n0kgzUNEcPe7rvkDIX389agdjBKKx3q7TJqJ%2F3gf0nFB4dtgrALHpQkxxQZ65EX8qBUpm7%2BBXHfz2%2FdZu%2F%2B2c85xu2BplZ%2BbJIdTNPc9E9YEQv90kKJZlkY%2BKa2VmnjWW8c7QqUstIINmcm6VZAqQwtvnzknovYjJETmkUPBp9lO6WoEFrzGXg73t2VoyoucwsHh6afAto%2BuBAFRxaiykF%2BCxKIaK4es5TewdBPrKQp0kYC1U%2Ff6vAF9mk%2F2G2S2fVc01hi%2FXu4GJ9IKTXiO6hUX61qJtI30dTHU7kZaUZjuEuRUHMM%2Fs%2FsAGOqUBv7bwUPTnRVrkRlStVlV3QX3Fro0GjRqRCwvt3CEk2tKOF5F6TZFaY8JxmJHwBMqjHvHHGBcTI%2BLV4gVm7vi0o2SaeLQPzL82mJARv2wE9Twl0RyCMx8Nt9syVBRh5Y9UwY1KWeLs%2Bje5kWeAHCOhGPVuCgpvf%2FpJcpMChIUjRwzKb7eDf5KouM%2FeoDJJN5j%2F34wF8RrjTkR5UwdICtWQ1Ds84771&X-Amz-Signature=653c973b207f1ddd52ffc7e5a9bbf757d9d504f6ffe369f226a45a9be4d25024&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4II5JFC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDC9JKXPk06AZJO69lTooLT933MLegukJDnIf6EBRdfeAIhAPsH71miR4m83%2B4ecBEEku5jHMqPq%2FBPWFL5m8Or6kOTKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf79oLF%2FmFx3Mck6Eq3AMWl%2B4gOxSADXWv0LRoo9N0vL8rVNO0o8kZCDVt6%2F1%2BkdTLdo1V27tw5h7u3isytzJv6KYJFv5%2BY4JF7jCstL8LmHNOXRLRNgo0XVLxxdpL83C%2FM1MgYF0HW%2B6KJ8xHc6Il%2Bxv8yGxsALRhzzhq0rhOmuZlnK9QeJgY9Wii7veLeGRgkwS3T2FMgmRQDW20u%2FBjdK4M39yDqxzOSLwVOG9xj%2Fifoska0mACN2ZPINNsyD9hhNKYyu2VXALqbQMo%2FkHwmRVomWX1xwUTeQlO9rlzl%2FpkT4rQPrIpyEW%2F8CefhKdd6veAPLU6mWt6uS%2F2oGLinYq0Jn0IVdjMhYWaT%2FmNlf3jmAXms9gUZ9nKu6UrUt1nU4RuBv%2BaAeXgIuHSDJ3wobupVsGc6syRYlDOxPjZa%2B2yV3fftzpezJScBaMA%2F1FGuwXIPGKeRsK%2FTd5m9dPnZlQBFkdNg%2BNWr%2FyK8g9i6S4bN9ewer8hYlV%2BMNm1lMSciwcmDYBJ5lF2%2BNdXdJV8JsMzluazQt%2Fegh%2BxxFi7RPESQGksJRfm1mqx6lTe1N6OnlQbJds0bQVwHSDk0JZWtHnzgKDlIzg%2F29%2B2XKum%2BjKZHVaGjHUmullavnp3IUf69saBszzeP19a%2FDDS7P7ABjqkAcvYOOkJkAGRjyIQ%2BMG2CpkzsrYQ0Q8RGmSWwiGbpCqI%2F6JT4KQAj1W3qUsvFZK2MbrzJIDWLXGXQxhmLNC7Y05T%2BMlCBuDKU3kZ3Zi%2FmMmGVLqIEIEeQrFjqfBv9HtBsL9T0zltwcr3crNGxTHJ7gSAsrLgPrcWoWccVoApklm0uBsToMe34ft%2BJo7j0ANZuqvKmnhPGs7YWaVvNl1qnQlO%2Fhy%2B&X-Amz-Signature=63e29d9ad6739e6b5558ff821d4aa2316e11102d1cfc68f32335b80eaf5acf45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
