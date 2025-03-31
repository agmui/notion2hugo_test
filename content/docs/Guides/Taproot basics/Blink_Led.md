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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ44ADVQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAg%2FayauzZcKUZqe%2BRLAHicf0Z0RVe3U4N0w5Gc2LxzLAiEA3i3GWeqlUlDy3mWQMeJH5z32OHOKA3xPuNnCR%2BXDKVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDI5JrX1EvxkRuyHKircA5aBdUTSMElWOAlL7tbmNZ1cXW7mcpWnnzJVED%2F1esXzwntF2M2ykQi5PY1a9lN0wpIGx%2Fxsicgtw4RP3DueTCGEUFfbTDJ2c5yaeZDbdT%2FB3EFEvoxDwrKmnf94tPYrWxEuaEBcZ2GXWylx3rSn4g4QpoUcEcVfkhEBSBTRq8He0XmSeF3lOkVqSW%2FniecLOoZ8eivOCby3yW9cz2luTwsIjorE7geuUxTds%2BHp1gelHGj6Lwod76gzgnMZWunCR952xNBYwTQsUmkUFazfWC%2Bw%2B%2BTCDizx%2B4g9s29m8VPH5ieh3icMM%2BMLhlZfKSEdN%2Fu%2FZzegfOpV3E4nreSPb2NYuUlR6yfFpLcN8mvILHtAS8FmOnJysqY8uGmYLTDDVD2LWRplgEBQg9FDnE9we8NwgCESuFDZxvrLwwokvAEfejqYMPTgggj8KwJE6wPVT3aQ%2B6C0NJGI13WEOiLiayP%2FZEtgFZS0d%2FKJnadVie3MrEH5rquaZsHiXXyJGef%2Fdgd3dKYN98QumQ4qjs61kVXJjxe%2B9MfuyiPbEOySGbfHrSer5imCTg8A0QDSocqqbCfnSZ%2FSLHJu7aMb7biIL6UqNStSEg7wou%2Fd6QEB8RKsbx5AqQCuBqKhUDaDMMuUqL8GOqUBsD2MQGlOJXmtk%2FIVQNSnxhHKpORmy%2Bdg6tRKQMwXKsHs3mEOeE2XEgKAZZIAL8JaKjqwwL%2BEQwNkeFc55D7po%2BXCtRP5bHdbvo4w9sHLIiOeQ2ZdYlkVqxocHpwBcql21P88JjQ00eRnDno5yShR%2B9%2F%2BbXLv%2FwADIKsutlTdhhV%2FqIlzUE1IqSxnzt3vVXnF0Wx3h52i3dzV5vJrvyGfZ9w2S5GT&X-Amz-Signature=59e8032606ad724ebcc8d2428c0ef8914978985deb02d0cefdd7ea6aaac0240a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJF66XC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDzdeg%2FSw3mpSXjUTwMNpOBnYUJr1NFopSNA54gRK4oEAiEAlKqpA89CYk3PHWb7xGsAVgTsqD8pxFXxcy%2FeYjLTghsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2yZgu9aYgOoxABqircA7ijin0AM0bL1sHYFhxma2ppxyWMVFWmNp3ZM%2FQgeALPnfS8ct%2BDzr1vb14qaUIAb%2B2nqNiFxpmpnwbP2kMzysl58U8vM3frmA0IFT0QU%2Bnap%2FSDWgGPOrlmf7fKLpgGhBBxHgTUKl0b344RE0pkCHh9LI0mo2EhOe0NE84QA9JtdAil%2Fpl1MWkuOxD2B1RK9kUf2No%2B7LFvhcy88%2Fky4wmlAk2SQhn5%2B9FsR6UlWJT8mzKwI44B7uLVuYrxl95xX9Vp8gILReb%2F%2FT42ZZ9k17QId6LJwt8FzfG%2B1Oe9VWToAP%2BXXbweCLqVYKjg5Jy32jE9HLmW73dGLqrkqWETaaH1Z0XtiG%2B0rsqTU1NSr5AmVpAT4kyGv%2FxAaoY57OPx0E1Mcy9yd5w5%2FY%2FMFMpWLoHhiu6uGO75lYB44O%2FjxdG6%2B7SXfcHMtnQuNOQvfTiIxO1D%2BBv9f0OOJ0V2cnAE1AKhMVPihDQZESICj8AhmJpFNL%2FfMUn79rq8FFFMwkWPS7YMJuK4nx7ZUQhUMSDVdhWkChW%2F%2F%2FEd%2FtaVkF9jgvFPNwECk%2BO4fYZGzdeJxS%2Fd8cKIJQKdALtAbvCGcnTeDVrIZD%2BtvwRDjAieTB791Xum6pu2lFC4FJuO6HfwMNGUqL8GOqUB5m71NvPqMMgwFocY9mfLUdO5VTz5aeTtabAAdZDE24dZ782AoOl9Y3M5mO30IPvZa%2FETGuUbva5AOAFX6rwbdK6%2FzJ%2Bfg5cMQNyQOBvF23CEMe0Sc02WLQ3yBTPUMHz1p6y%2BVilhw33o0jFes%2BtEaa50DMRgGyLXfzBI5lKu05LTfOxwzRxKX8lHLKZdOCpVAEgOUs6A4uyAfoz1%2FWghhcCPjHdp&X-Amz-Signature=e9ef527ba51ee5f9da3ef71276d10f0ded2fb987c772a785c31dd5b3c0496b24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
