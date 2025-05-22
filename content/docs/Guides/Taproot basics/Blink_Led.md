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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VYEEYA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCVz74sizsHpw9Dujd2pM14ISXvhjOS3TgZxccOfvURWgIhANP2dhyky22fWS0e8xEMC5oYmHcOYv3aNAdoDH170if2KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRl%2FeTBfLnChh73mQq3ANMDGTgMuJGI41OUPBTJaTGz%2BHF6wBjJYWyoKUnOeTpu1U2i%2BEqgR1v75UTFO2Z9%2Fo1CN8wowwJcfy66tp2agRm5PEImJ%2FHUP88SV3G%2FS7SnGhuIw5F0b2zQIc9PS1IfXIygcEXpk7nmbn0TaFpXX5T7520wr5f6HxGfeHEk3qjVkyIl78YJr2UcOUSHzmVbEVaz7Xs9w0d1QcXkIf5bO%2FCMFpaK%2Be3%2B0b%2BH02BeayeZF%2Bvna4IAFaHrVRHknGMsyQ5nC6saLKLkvbFICN7FchVvD4cRJst1Q8e%2ByshuOBof3A4KTVwxWSfi7yL3DHRtYfAOvMUwCc3XwwgnYQcNZkgZcEJfqcJbPXo0p8QxQ2QHc6ikOzyL%2FEM%2B1zYI8xJYQvTZJTsaFz%2Fw9n8aS6lJqKBs%2F7rzHKi6LKBDMd4ENTJH7hQ%2FUXy9VgqqTr2Vmv%2B%2BiKTG8%2F13ySFSsBzLVyocU3KPds80%2BL3r9S4f40jg4Pm1o%2F3nqVsp0qj19ce5nsIQ38wFpuLxxxVHx2EkxEbCIngX%2FJDRgHd15bM1K2hJ71yVy4Jls8fMvdh3D153bID75I5KWsl80p6nWVgPEg8azL0zfpJGbb1kcibO412EXl8pUvLgB7jfh3x3zFUEDC6xbvBBjqkAVvkE4R8lMER286scDC%2BlqwBJa%2FCs9N6ahWHjTLNd22DVnvzEVDlnDYW2eIVvK8e2Lc7HclSUeF4PCvZIuGV2awVTi2Gehyns5wbzwe12kmj7%2F0Pq9xZbmnV3u0U60PfjgPIQwxv7enw1tdeiVi2%2F%2B8vzOe%2BrIczZMpDh%2FhtcHsypFN8Ul0w2JVEs0rlW2Rw6WX6bLz6CQ%2BBqMXGIv8aZij%2FSVEZ&X-Amz-Signature=b8df58c78b253dac7a2bd3899f2702fe288a7730baed77514a6cbc923110bbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWO6GSRS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEiDuSzqWJX77zFJWIEPUGxirRaTPjeNNeYx7XISL%2FONAiAa8qaS%2B4rqil5Uwo4kaIkeObmWFHvncNHecwOy5omS%2FCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGObCXTdllmMF1TO2KtwDRnsL7qNCfoj%2FOHIc3K%2BgyZR1RQctDNw9ID1fQux7mjTkyS4GkaOjPu%2BiEdAdt73n9l91Db%2Bz1aHM4l2uRgXeX2jNZU05jd1t9u1VhOiG%2FZlmOy3oqdNdszRpHkMDGSDfTfjBGv6wERLVK3I48ia8onUQ4pvP6G9PmTHtzPcd3XCJT0Vnb1YZb%2BNefXMFs6RYAZO3B5O%2F1OgUJd%2F2ueCnb16FXaBbWQ8VzY92r7WvM5RRRUxjcE%2BmQd%2FNq%2BY4qiYnzIF%2Baqn0HviMn0iWGy8OOSAFFHibUwpbyrKOraXzUB5GRMejMi%2BDwcY0JJZUjTv8pl3PiXZF%2FPhfhkRid99vjaJudr%2FSoWOaJoRsOt%2FFhJHx8hujyPeXJ%2Fc4G46agv3eok0tVsszO7WFK4%2BPQPhvvSW9diTdHU%2FQknpjpwmNYULaPbcEf6V0%2FnKmZspy4ai44jniLyq4kCwSjt2vsyVZ2%2FLsNtxrcQBV1P%2FojxKER5rTORtJkDm7IdA%2FxBo1u9UMKRtUCzDiExVYHdAbuG4ngfKxfViyUpyTQ6W3WGAaMbPu%2FQqORVBNSc4Tob3OGWRpsaxmTjp06xyY3IqOsfMUHsziyztj%2BVigpPV%2F9AjFM2G3DZmIXYnbQ1CSdVow5sW7wQY6pgFO7jp00uQTSO8oPiM4PBgAVXUyxFtDyxhXcPjR%2FhpJpX%2BqgfAHUYMkJVxtJh%2BNkBo1JAe%2FNHHbEPrdFrzeyWXCVvIZJCf5BFgpPJwSASrH1gwUVDLlBYT5qfz7Sx3qJRQfrLLXfEIF3pfeatNjlVJa4KID1g8ZhoT2GpxrUU6dWMf3c8digR9W1YFXLBw3m1k9r7k6%2FQNOniDS0SRpYzlLaPzGLWDY&X-Amz-Signature=945c97bdfefb3dac682f9e7cd796ed0333a175f79d20b471d093340d48f49aba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
