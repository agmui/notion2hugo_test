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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSLDO6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7K12nGPtTBMX8M1LBgYR8aVwJseRc4dztNiUHR5DhAAIgQDsnKj1JM%2B7Ng3jlwW8F0qfT5L7GFjqGf3vvt0cXifkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIZxiV8ja0sVVCEMircA0wYshPRWXH8CYov5X2pSx30Ex5TJx%2FGhRg9XDyJ4syL05dKMjYglRN5pqoaci3k%2BHQKH0ve0IuvbOcXd0JHwaZiQe8Wj3TMz35WPLRaOmW6tx7P%2F2UOUAHArCZAP%2FO%2Ffbv7rRMsvToBowl%2FDcShsPXDQhbRtqx0kNxGhmFTIh%2BXcw3jAL6f42pQwFigzXVH5%2B2eeWnHXJhmrKFwJpT3ftbW5TKTPRhBQoakeUvPEqD%2BvG%2BKmbP%2FZoDAdNJdrgAeKUFhgW6ZFNX5e2FfCR8g9kqvkuS5bzL4ZRKa1YChY%2FP9BYsYdbkwpAXqaii2GlK6TcwsfHsZ6w%2F5ePwdqUcuoi6WDyMtCbvznPrxzyPZvTtx9EA2gw%2FR8FTzS4OJ1BBFZ8LKzc0dyLFh0eKio39Mqt2Lya7Phq0oST%2BpA5yFi%2FOANIphT7ErWAWry4a9KqrE7K73L%2BTmRr3ajxIX0Bv1u5Ts3NEQt%2BtLL3m53aVHMLd8c4PCMenzZS60fCdjaadoaLzFfyAYR9s26VFsgSOz2abntsS3gq450lgI4upkyZsFQsBDgNQFJBqcYnxtbB6Hg1zfIR9MrHrbVQtcTm85PySY65kpvkAi8T1D04SpZcvTZijCOFpoWgLtbOKXMO2V48QGOqUBKk2cZrA2G38dgatKYDjClvRHY7PJU0KsW00Rcz1kdd48YJQnGE0QrLEQ9U6ytk7B1BPO1%2FlB7z%2FC9azCkjH6PKB0BLER5XfdTycNtxH0GP13oRZrDtekuVAy8Wd%2FSnKmfJFr9Lbgy208%2BluRsAXjPCVrNBhmAtSPSDPKJLlSeqfnemuAcZvPuO7pEcxpQo1HzAM%2F00h5EPdMgY42qa7u4GeHNi9d&X-Amz-Signature=b8c765bdff6d23b9364b051a8bbcf12d7cdcb0e2efb4fe9fa931c58ee75809fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4J2EZR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrEFfZhTRfD3NPU4YWUXjIwWExiOEW36XacqFZAnJqsAiAAyUeukYBXmrvJfNFazSfxVzCqHDHwW59xqMxKDXxfjiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTFUHD5SHXaEcgURKtwD5GYEnkdOcKOuK%2F7tSRnA8nPeKRJ4i5zmelXtIXKkJZp0YlUHSsw8g0rmavaZ%2F8Jr7wvX1L0IyWegzJjZ7mJAUyVTM9GghAbNSQf%2FxRIpJHe%2FZyHde6JAy8rTEmJrBrkgauI8aMFWM1jb8BkSL%2F6eaTXhRNq0iQN96Zkf7eXtCVdP1DduTBreFbbpktqfTeG6wvXeLwDdmNRWBSp9EVpx4uARA%2Bng1re6C%2F7eIQ4B0LGwBWaSkDlFH9KhW7nKmMmCmZWDIW1rsHFKfbgO2Mk1W3oiXPG5VZZoqWylIWX8VUDa222dHVwiplh%2Ba0g8PERIvNphFZ0bG%2B%2B2%2FeGBNDRzMky2Q1xwChYW3WB7l1Nf8i10t1GW%2FHBTpD4WuVhdyAvn0YF8DTFBdR5iVaHF1ogtTMx8zbWe5ckDf%2FU%2BdSWjFFIQDPgttdavXL%2BccWIa3Pg%2FFutOVngmCmalWY0cf1sO63kfGrDw%2BQYSBnsY68hAHaeCeRqcJTvN7mP6gT0%2FaDsTe6OevOvpg2cXhClxR6v%2FlAFSrsjBqjkLuJJ4C4Sb4OyBNhINPt727xtCW3Sf%2Bdl4ETLnNL1nR4%2FZJfP%2FnlUkhoDzZv5Q9Dxl5fmhtfkNp%2B%2Fh63liNX4DR2HKoSkwoZbjxAY6pgGek34DICkjcRMqhJSwgjGufCpSzMvExpKbQbKCPlOyG8nAbSySUqvBJrw91M7OMjHSyJ6X1wO8%2B54s5IB%2BCZOCasAb5kNi5RkypaARwE4N%2BzKMqUm3Elp8IueVTVjWgfHWdHC%2FwYErznOSXI9PKYA5FVD07xfbtPY3%2Fm8xMLbtuI47odfirkhtbSzimb7ijEjwBsUz0SWMijZ7tqqDCe9GdjQ6kC6E&X-Amz-Signature=0b1e110d923fb9a5ab2a8c50440d326644217f033eb4e050ffe22668e2a03253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
