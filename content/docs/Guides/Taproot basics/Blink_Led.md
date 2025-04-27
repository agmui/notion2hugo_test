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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THJXG3B%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXGMgw6cmCi79kSqII4xYwO0nEuW3pzQEfzgZkO8JhVwIgLlBBfOOIY5u3exPAoBMlfMbOfCQdv1j2%2FRqDO8fjH40q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDA1WankKrCNXRx9vTCrcAz0we6aeJOPD9X8olllmcD94VRqCy7F0mwkTRcyXpubI7ZYFJXjXRNhrebyX82FTFmk8zjfck4VXnlB8xy45vnGI%2BcVus2EaLvORuzmyBD5DQigTt%2FF%2Fgagi3LeqwGA2AAwBgxdbnkmMGVJGkGb1u4MYurlcVZ2cSMZPH8uDyq6HfHG04f1BAi%2B4%2F8f1QMrZhJE%2BgEE2CVz%2BX%2F4bT1QtZopU%2FKTBWUkKRXFU18UwmWfHrH3Q8VRaPHgaswdXWjURh3PmY%2FXPc7eAhcvIiGtIt5pFxVjQE6czQrlfzcsI%2B7%2Bjpv5dG7GRu79Y%2Bc4tSnDG6w6M%2Fx6ojKuTe%2BG6ElXZgVAK5rDzThxR8h%2B2I89Qkx7m98nxaHwh4mP7vP76rE5NagJwDWe3ZmkRwqs4Ils8I3efzn3g9tqiIdqDhJpDoF4OzB9qFQtdtoc44hZfeF8Yxowo1k19%2FIyIOni1%2FGWdBE196HB162Z5%2F60gQuQWZLx%2BW8oX%2B1IR%2Bk%2BeVHvaeFW1WxN2y8x2KUIYXekxE8SDvdAAh%2BwXVUDmNNYY6lvXfdEwXsEOtfPL6AosIR0kS0bYgFz2tG7IgL5VadDK1Rjlx2mVw6%2Fck2doLNYUox9iT86S0nllFPPuucs28XuOMK%2BLusAGOqUBVVE%2BIahO6GnPF5mAXLJ5HCKQK6MFqSP4F1yco9Co4osQ17SKcsoWOa%2BR2tp%2FDYt9hF%2BUkjFtH1%2BksVa1lzRWqj%2BfWqsF7rTPU06Ah0vgqLzLD0cwYPLsxYsYYymsE2W791RA0Dj5lRZmn0WydZZXYrJWe8eDnt6e6XfRT4vhmPKgGceepOgjiWx2TzR9%2Fo4yfX1tU03nrp76dewg3muu6w5st0V8&X-Amz-Signature=e96f46cb9504d7f0067f10f853902f1aaf93e92ffbce55f0163b2b3c460ecca0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFGQPA7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGqQzr1OTQ6u8wsIl%2BaGAHoXHXDDV2Nr3%2Fo%2FiNx8SGhgIgAL9p9yV02rIddwfHWHsukOeiN8F5IMSP9%2F8sfvlS4wwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHjqAz8i0XqdCjZaiSrcA7LGh0%2BrvOGjv84I4sOallgWy7h8SvRNMR7agOpbzZ6bVamU6F7MkjM%2FsGHz51NZwZTMhqGViYxEi3ppdGf4F%2FxSKzeg0wbcHH1Mak0TSi%2BlYq4j50A87X3qgEUCyrJ0YwqBNzUQT977U6UTVtYp4WH946Z5PSyddjIvLwt3rP13Y%2BiGOX2AAj3i%2Be38aXupTRC0aVQUw%2F7NJ4gv7JsCuE5o%2FeKWnmM%2FR0eyPJN%2FNwf%2BP8drmhhHJscKuoNtQofCiwB96KmG38BMmlHhRgo3PFjJe0pFLJwikfsPXg1yZ7oUa0l2SrhdQJHPHV9JHvBm0Ru2Aoy1wc%2BREcxaeu%2FXlu%2BfkfiI93IX2TbrYgUFfbiW%2BtCKh587yvM8rppuzNCr9bc9lPoVU8uH1hvQrzSgLq7Gt1jss3VCbbvA%2FqYoSfa1lLgQ%2Bx4zFdQ%2BAaqQQhLhU4liYaExXRs79Ii0pCADw%2FYuiUi47AbaZPpleRTb1Ay%2BkgK40m43pecra13yUNNTwC4z6ND69NfNR5RVVD5z%2BAjc1O2KNH3qGnbtX62cyG5cERGyTG8lzrJwFaGyAQ8fJ%2FZ4%2B7%2BfhpEs%2BXSy65RcORcLSE1%2FvfBLoTs%2F%2BOKCKxK9gs0GBd8kMbGZKLgPMMOKusAGOqUBdpswC5fsm7tmVm2kfcNYmOq9eO5IWfzbJ%2Fe9c0cUTJQz5D27mSYL%2BClxzIUleXXvQ%2BogN6Q2oZupi9Epzvn5zOTzO3ybuQE%2BqQn4SmuDMfyZy7i4cXhNwVXORq%2B1pge3VUpp1aDdwK7Ide8%2FyATVUQcna4EbjJ51g6QXw3sjZfdzrhXpzieCqFNUb7Qhs2ivDOvEhg1EjclYT1gCb%2F9DNdiK6Puo&X-Amz-Signature=6ae906fed502772e0e4cafeb63788574ac43b00b1a2bedae1a64750740cfdb43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
