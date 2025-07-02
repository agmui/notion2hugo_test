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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLXFPKV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLu57w4I7ulr3pCz3WuUqqXaiOaGx4TBoV7Pe6norlMAiB4vfEAp8nHvb1s8ApvSz1ETQQx7HDXPz%2F%2FARCzwU0XRyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPFOAtFm2hGHVRcS%2BKtwDX4WUbqQYDmSCSDNWuS7iy5Jgexo1c9JC%2FQcVekDdhu%2BLQY0wSlK9an0fjXBQeFK%2BQJZAkznWNsSZlm05CBMmgs2hZE6j2k22SeeHO3c%2FyIHkm%2BFuvzi9%2BwksdTIxVnFd%2FvC%2BMc4JSN4Aa9wPUN60cvCCv2poYL6vCnYHaNT9E7ulPnkT%2Bcf753%2FdNDqhDBmG%2B4VspR1TOeqVwUo8MA7T0BmA3bO0o36LZUh2khQq9cSIKY79G9ADA4Mu6TaikA9TNpoVFjBUjo1EpIgAZ%2F5Lt6YSymcY2D89mj%2BewpGiDwBGtdXpTKNoIpMnRiqGx%2BMIzfTYmb7%2BPykvdnchRMk4KMi1sZjitpPxvlyv18JC8C7LrrddoXqnPNBg5Bdq%2BAWeJ8inVB%2BnMnjcMCB6WwRUD8nlMN6ISpjklavI16WVFIywzTgFaOcOtDTNFYwHI3wsvP4x8aPDEvniOx83AIb1pVjPSVBRnyKc53qIcr8P4iTxaZEGIkIN%2BfSA%2FsXvXL2W%2FiWFR%2FjFZZ3cB3L1gtKmA7klOnbD1Lxqu6HxYYFhiiANYGZOugQfUxqgsPipjoUyb6LlHCB08d9YpSZFlfmffyXOT6FQI3c6vZP8X7GT2hIbY1eC316RY0OIEMwwp5OVwwY6pgEOOLBofIaz3SCzgfV1usVGoiik9%2BNn6U8v8nqa1CYsY02rCZ3P71Fn2xp6d4AnBjPrD4f3j1pCoFQd2gkfuxXTU0qXr%2Bsd2aVjBJovLBMo2DwZXUUhFQMkJByAqZKwA32h03fXJ0NUep4RrQy14dsjoe62U6LaHspEo4c9gzJyftskD2onM7U6Rs50rjMK%2F0%2BEof3TtxKn%2FUmdd5RJ1jul1W1oJmKr&X-Amz-Signature=0e14b469aaa84ab6f2d87e531327838f6b86c00b0bcbcceb0626ea3b33d24a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWDK4EV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDZzd3mTrKyDP4U7JMw0EpJ8oqNxDuqqC35q3JuYxB1wIgY%2FW7vIKZ19mq1Nw0clFAswJ%2BuJPzQHJzJ5pODpDHFw0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy%2B16WuNHZIC%2FBmyCrcA2WIc0RwLSS%2F4VjJxKNbYV9h6z5gCbJG4P6I%2B7APd5wGXTICQxjI%2BXtpDEs6BWrsjC91hUqWmBbU2vBREtSE96VFATetN8R9n03XYlfXPT6Z9H5dq%2Fu46SN4btcutOTpcccZ3r48BLyhuPB74AjcafUMEzsN%2FiSVvbv%2Bxjum5ofbgAhUx2bWiVcILRvWpktSOV3hNptOubFHuTwYYkPpcQ8dRF5ysDsPbIxouMnwTuegUMIyE17yQN8xEQNpYO9kpbVMbxQfyMwNu28o8RyFHLHv3F98BW6i5Bo9wmqsKEt2isSY0qKCmQejD5dgeHLjBgRtohwFIbkATxKy0cGNnBoMY5QbK32j3%2F8k0iO6vdBnaXEX%2Fhaj7YWPWpKQlWXU%2BCgdnMPlepSHfnIN31F9L1B0J2tM1aKI8rEqeOTQtkOWkjssCu1GA83V6pn8UamWdFO1g%2F9XNcyFvTL6UXqkDqXVng%2BqZdsazv61UCuTzTev3A6bl4teQTjOfE%2BE9BbjuklyZInVogy5znIDxSLp22Hs1JdpPR%2BEhYLerYbz6RL88sjT6ogJw67mA%2Fo1ZqyGtYeXM%2FfUq6NUUez3Gnl7K6ytlIYnER%2FtXMwBI8nBR1fIfemfjQ0Jv9B6lSlyML2TlcMGOqUB6wO%2FZ0UHCa3%2FJh%2FXpI09PUWDpgIqY8nMuZVNZhWJifD4G97ZoK2bYusLeFm2WvFnuibO5y1oLAFQ0YUNG0I5KtrKXgY%2Byb5OBRrTfdYSohsG3s9R6GuAZnrMvsrwcyn9QezZLleEiBsclR3ZAFG05ndklpeafCW2nZQNdcpzCtabEvGyQ7r5C38yD2WGqGX0crja7kDbxpc31Q8Q8aXZRsGmdnOA&X-Amz-Signature=6d725746090cc9c074c09dd8ed11ba078a50592084113c9815b5f93559d8c883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
