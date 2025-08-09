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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXQQNP4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD6WA%2FG%2FA0KOnUYU5bFtpcXMDlm2FYbJWZUjiQ40OViTAIgWGOHJVrnVDwviZAn5uUWX%2F1RlHMs7N5dil2LAaYToCkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkVw7NIAcTnnvwm1CrcA%2FimjnFGk4Zvs1G74Bve1dXThH995VDA0QBlk2GwcfnKjmP2P0muNRgfOQ6maVYAhGXy0xhpf1dtUIXbZ7p0mGZy6b2b66wRmTm%2BTRaLWRhNRojX6DyL%2BLJAArdiMEq8X4VMPa0C%2BFfDjOfTEJOCJvrtoitpEs5bWbedVb2n7VIQcCYXKDzCwZPXafaQ2oSe2XJSTdmuoE9o6a8EkhJWNDZlYc1%2FF0eFIjhJBHlA4dtNfL8jZ%2BvnegCunB2Jmg4R2TeVCNfEv6morJjshKsmT1pQB5Zx3yQ2AnUfVvUeM7YQ1223Enz%2B6QHc7MnmYPbYtHn1ELRorQlzW6XoqHhmjlWb3S6to%2Fq5MEML3UHHz2Dw1I6eF40ymtu4pZvjDkG11TM5SQHRDp3S%2BbY6MK0POvqZl%2F%2B84507zbFox7d3Ftvzz0n%2F9FeEwDP0AqHIBOSpPK%2FezYDmSzKGseuTBDbCgjyTouB75DGzObbtAiF8w6vs8jogwieT%2F5a%2FTzfqTO7ST2l8JhyxNdCFbZizrzqHYF1kWPEWYXTn5dSIocP%2FYukbazWdyxn8MHGfei4v7%2BAEOVWEUl7Dzp3n3iWDkLXwGMUKUcsFoR8PhiMq6i7zxiq%2FbZqlnBrNWlC%2BcZkUMPr12sQGOqUBBQiDNyXYNYdB%2BVlqPqpmkV3Ta6OMtYy%2FHc0JJf3RqRKONkZHtZTIrMrTjg5XHMA0SwdS9AsvjNtTQkt9OvoyP0CkyxZNSpFcQkZmPqZl%2F3IUS9No6GYJNkAWpfkPxbPkBd%2By1Iwxf0jJSrxqdAFGKT8SsNQv7fv2w3HLZhpgQG5Horh4k0WB95npmD6aPcPZCaoBljp%2BlYCeqCpVjTEmF9Urq4TY&X-Amz-Signature=6919f817daa2ad01b62f7781423610afbb81222637977a7668eee8adfe28250a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD5MIQ5V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHxQDbCv33i1JDPq4TsvAGIr2m%2BFti6ywEGdsCmjS79XAiASXcxsM40AwGQO4O0LiC6aptsQvcHW6iVtnkA5Bey%2FBSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaznqj2J8KHZNKtg4KtwDjIa5AcQLH1NKA2psD%2BUDpFyu18R0d6e1mbbHoNBxdxrEjFlTxDAQMjSPTgRGqwZNFPPE%2BwmRXTh4LkPluU3gjPj5YA%2FLZ4s%2BL6jVnAGGu%2BmkkPJRl88NLNjJZYn8jc30jVKp8Nw0qklwWGk3gU3KLdIDxhGOoOvV2s0JF7DTsiki8tcueJn%2FXmP%2FKolFLyJiJdgsZao3ttuqmX1gqsi7sTIiO%2F1Zdg1Q2VrL139yrtFr1tuBzYPYDOmqDy9HIG6qVTQtEekoT2mcTDt8A3tf8XHuYm7w7om%2F7M1SdiKQPrVfv7d4g2fXBslYuYLYHdwa3vgcXl92G1QMpqa9nq%2F5FMCKyDM8qJO4O3gUBH32USAxjsQzutoT%2BIiJSR63ZuM5dMF5enOvnCeZb0hWJVECr%2F%2FLPfw%2BPlNb9Hv4atckre068awMYnfDrbahH0kjAPxTEuBGNpG76LaQ7eAU0WA4y0ViVPWEl6RE8LA359dDJueV2cWDPvWx%2FU0On7rl0v6eykQTujSvi9gee9p1vMKvmtdiL%2FBgx2OFKvWJQRaM0xq244cACA6GI25MZkQwWnuFQocqjY2cx0FkPiWZHKIfHzSHhFg9SaH0QcEpIehqeAvbwo66S1jwvxrIKcow1fbaxAY6pgHp5Wf5hcJ5Rs6%2F1K9pBQE9MMVfkR0PJM%2FECL9oOz6305vfYT4SwEzOlrqAR1UCCGdz5eOfd%2BwzVUd0be22S3aAIAm3qdeKIG3FtZRGIF%2BCYr1%2FM0upkcYcMkfuYyuD6WoNStZPOjYHlAYVY%2FC%2B8y1JHIkw394WpPREkL3omIpYdzggIYWS7JsjdwmQiAaWQM0QmJriil%2FR0u%2B0uLTlewvqlH4IS1I1&X-Amz-Signature=a10bcfe918a9d781a87a00c30102f4d82e9ea38f830a5e9a59b86a1ec95935e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
