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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUH63RN6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmY179SNEv3Tj8SwbozcRH%2B9LcG0p5nW1T%2BeShApwdMgIgMEZpBFvk8Q3%2ByQ3Oh8jEibQmkyeB0HZypBrARypkuHYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI7mrtF1SQG9O2i0CrcA5fiqdpTxWQLhAbp0VtUfzR5b4VgGTvzQ3SRegF7HxKHy2EPEL01MyMlaGQ50o5F9Xe9CPbtRxjVQH%2B1ZCurv9Od40LB343ri%2F2v6MST%2FRKizqZ5z%2Bhv41BHEhnttU2l8Sco4AcQR5N%2B4Qf%2BGhCGSvwd4mdROyzMzQIu6aHDY6cKgkIa8q7gp%2FBNRD5XqbuTKElWdspttlXGUrhH1PyKyvnW42Fzfx3VnV2zAlCYYk0kkdfM1SyO8x4WHuBVqykMn78b1xS55Re2JI4%2Bs7Ao3wxx45YGgfE9Husg1vEg%2FQVsSIwkhb6l5KIS77%2Bv9KxZqVDbmbw0c10gdHkyf0eMhZ73ms%2BDjePROKQzBFiuFYzUBoyRR4NT6GoIREz59rsqx3FqDJvBMzXBU9Nviy859GJ82ReVJLHzmpQPu0Nr6tikRX5d%2FNxs3hN2Uo774tNPGu0Gm18fYk%2B5H%2FcvTZ%2FUK9Qeu5HDrydjWTxfS5KJX8qFxX%2FvCLiDw5GkMGdrd8M7h2rIP5Q90ugc57bLk6pVX%2FemHO4liYsWTXaVhw2FQFHLFMeLG4nZgGbrpTlL%2BSa4kalF%2BRQfhHDFhC8OeOzJVubI8%2BbWkgOEqqSAgknof7f695a3n5XKVhouczvuMJ6Srr0GOqUB11u360uHEveEojFbR11JK%2BDdMtv8ErQu96W4npLdZtHQBIpfbY20UAzISDrTQ%2BasqudnU8s30zs1iD3jckLVwIR883VFtRwOlvAqW5DJeiieowsJJpM85IxmQAWpInllZaH747GpFWRe7jlN44oB6BhXCODO%2FU09HFAr%2FntHTl3d4vAqQznyUCL9rj1KffhwQN16f1jOywuW0IYeY2BoaB2a6AQL&X-Amz-Signature=16ae2dac6a02a74d0ca8bb03c9a0830cc6183353824ed068cf2479671ac72093&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEAFSV4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkdXZNeFRE9nkB9wCxs983melsZkhRkLsV2DCl8%2Bt92QIgRoqBiHA17teyioZg%2B6RUoSfp2iyBL1BliQRWV2ZCtt8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHq6IRD5tn4TKYeIyrcA80c2CXTjqRAJiK89VElQrD4eX4EdNMxCO82CxELa1zkEBu5rMMS%2FAwb07xHWg%2FO8FSr75BTbjAhc%2Fr8%2BlfV1XZ3mrmnG6%2FxNPylXog7fIrE%2FiDdckwZPhIXaql%2FfLTOpewqcGpVIeqfmQMgFivOD18GVBM%2BPo9o1ePvXz7M48JJkD3fax2Io6U1mHoOd9Lepq4xQ%2BuD9%2BWwCSCH66FJPOLfJGCsD1NqH5H1bTcHY1lWJlCMrU3ZlIxWUFzgLIl676UxI4ysVaGb2WQt4u2f5ev9JAQRZv3jI9Hnd6Fd3fgHFJxn7o5gRYHtDOBX0LFJ3IP5OEhUL7af9VNI28Te66eGDPFPObXr0KASBhfMgDnl13yEreRo%2FUjVgCsCgBD%2FI4VDoTijSwY9RgHX31DEeSQYqBcQpzjT6dk9wh1EM7TGJDn5tJYbWME5TSR4fiMuRZ3QXNilI1aojY5kV5DEZWXBmFMaja5Hc1yS3KdJu03war41AiGeUhbewz6joNaPKa6wm%2FKyY1rQnqRpjO3xeF6FFUGOadW7ZBQmJFZz5sYkF6v4AKOkJtdz1mkschqQqtGskjNkFnA%2BipEamly4KrACeBSwJ2V4lN%2BA0QfuPXhidR2frPQ6KFoblgEGMKaSrr0GOqUBQhCieE1ARQu5djGTqBwiSF8tQerWp7z9AB7k5AQQFeES%2FcKvPl0xlqusKF0XAiPgzOycPtRZ3uybO45ghBKYX9x5zfKXTs8f5OOm9Jq9T6XR0%2FyAtZCnrHwDZzbuFdrYNwdrSea%2BEypSozXp4VwRK4V7Dr941CW2aAljN%2FB2uzv%2B3DEl8zlu7YanYGGYiuXTRhukBjnTf%2B9ocsE2IeWSgIlJ3ge0&X-Amz-Signature=22fe79602fd34971d282e93cc0af9a550e00209aad44fb26ae9e09c955c978af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
