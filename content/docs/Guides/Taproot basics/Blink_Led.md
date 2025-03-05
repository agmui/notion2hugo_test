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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSW6W57%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM2tsrgIhkwtLHczoelFLajKVO3bGBW4GyruR0p26i5AiBhr3x2b8RC77sZ4%2FNS2SjSDaB7ZDwfRq2hdDkqyifW7CqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGYWTGXis%2F1OUPOJKtwDpJU1Zuca6Abo%2BsgLR40s%2BxOgwoYo%2BGpPisyfGsdO3KXmEP6Um2sQx89AiiFKvPdqZxEtjfxhJuaY0%2Bjbp7uubD25bqiV6o7lCCDuT8ETsQ789ThvEleyJRFj2a5gdmO60dftOaHXZgiHCXCbBnp2X5yn7hlPKGqN5%2BLWPtqK1H7N62sAKuV1UwVsL77wVLl7rSFSvysBzZUvr%2FYqk8BTE9%2FQWj4aOBwTNBl4XYTBaZM0YdTp3p3J1o0af2NNg3NLz182qMTDw57InEoB8li%2FPfPeNyTST7SFDbdsnpwnn7fNKE4RVRW0m%2FN21cRcL4hovhLHCSr0G0A249EIyZbpWIp%2FIhCUJG%2B1yOrMNY4DUJD7WLLOop0jl2tRIw%2F5rh31v28fwHYkKIigRaHdH3ru2HWbI9SFwLFEyOHH6ZRTv0G8sddAoVoUUBT5D%2FD0mkr59NlZC19Lev24t9oY2kbwC6yOlH218TSnC8MDLpYbbcW3wrP1zSYykBGiWyVt2wflMOQYOxcI3igu5%2B5ykX%2FkaZBhBRbXyTzMTJ4CBBKbm4xp7nF%2BAAv43F922dgYysNzqZ4VXWbxapXhBslQV%2Fh6aALLXFegWGAQGYSbqLJxu5%2FtrudLmcSWrRL%2F4QIwqMqfvgY6pgHA3eb3%2FDRrk6DNQ88qhRQfyuaLhOEKg2zzWlLSAIl0owIUoKb8VuPNmoGyf0HY1TUF74Mj1YmR9y%2FxPkMSwo5uO9sUUFigIIntyDq6wfod4ov48u34r%2Fusty9IJv8js6L05wCtR7xn93gGTTvfoORE%2FFR9W%2FC%2BYAG8ztLEmC0ZiSxPYHURoocEtr0Y0TtZNCX3Kj38fxt532p1ilmIGx7tgj2pMEx3&X-Amz-Signature=7ef96335d481a34fa17e6c0f1d2518d972a6ca3ec8fdf1ad767ef1036da9774a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOPILG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQc66hOPfTaumaOHYcTQTNLkPaUdz0UyDzzKZm8bxlXgIgMzvvXFWhnUnWf1Qbc96EYWH49dSE6XV02d33wvylrkwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1bQdHHUgNRrN%2BUxCrcA534S0Z0Z%2B0cgpnrjf2eh5KswMjZsrkV%2BEE%2FsG6QO7Yu9cpE3bYMWTGOluFHr3jvmNqJFbPb2kDOgWTJxTR0Z4lYXBZalTV%2B6U3ZGNRP1fwhY%2BDsKe59FITjJIaOFZSWBYuojeH7CbDjFIR8mKAQYhTS11XCptpbesLo8QCJORXjDDIl65VfDyCjRzuCYIeae9nYUX0daPx5F%2FQj%2B9onLNr1wk8HfZRajizxxNpxO0IvyCvZxKCc%2Fn5OZVMaqhtNyZ%2FVOY1Aioz%2BjrLRITQFTpdka3CWD59vZwtu5AvTwjWeb6jF8GZeLqc%2FD0Ok30CaB7u2coUqV15vLrz%2BovH8M%2FdPywXGdJx98BERVVSB7feby23K25QijEKWo%2Bl8CpFxc2Eld%2FyCvSUJNBva2DjdEjY39vG5hKASgKbmWLwxR9IbZ5xfAwd5UOuPEno63gKTCCi9cpWIe3KbQ%2FZbPudJ001AILPBy2tieB8qm7cPnq0FVTYCdEeP5i8Z3PavqcEr3zh2f9MeUbICUCE%2Fzc5g80PxuvPY3loUPhsY5MSTRhasD%2FWIfT9AxdfIkev%2F0lqXQnNU8fUXkzJmeI%2FCgEph1AkxFsNMaqRukN52ty04ZvZfL9w2TiNcTbfvPPduMOPJn74GOqUBI76El%2Fi9ExJax7afEhlsZeXy%2BDSUee7yVKkD3caMa6yc6vPLZ5WocKy%2BYDVYd92nfV%2Bqr8yykp9qGjfrVwlFySiFodHDisLJYB8nTZX83H%2BBhzxQiBmPX6iDziwJiyY4p2lbiGXbE%2BPL0BsScYHAABwen4uNe7iSQYU8rVV58BM%2FIxppNeN%2BOKqtc%2B4itmYEd63dcPM17hqTdzKKc3QM8SXTYc9K&X-Amz-Signature=d85fcd7b594c0d6930ad9950cb2d94f84ee8225670212ef77b81e76a62aeaf37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
