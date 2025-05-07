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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZK33LS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyDjBHRWsVkTROjdwVBbprdte4a8dJ9VprOG6EnDkZFAiEA4N9IBdv6WHSIQjkVTfTepZxSiOTMty3RmvFEkF98Wl8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPQcuc2t1lsEbHhQaircA3OrMn1lsprNJ6rCMAMt0x1XXdnZbkLjpTTkBNJDt8cxmRZj3a0luiIyeX0Bts0iEdJu%2FMCmd%2FrA%2B97DIhFgYinRyfR0B3y2nr9bWHzM3XLlAfCoORfAX56QWN19IBCRtGdW6dSZkn%2Fym2eom5bb6uHkJOE5AXEifE%2BxJtPy5oivIYlrFL64EkwikA0ShFssZstPTgmqY7jzvQ4ri1XXFsxro853qH71sBP%2BYcdDU1SjWzq7dCEQon%2F8TGf9Qe64LKK3ZQsYB%2B0kfi%2BFTRCm66kKcYiJsTFGgNmYTV31nBzWTgCA8R7LX3FE8AuAFiIxkt4ViwEFDqxuIYROFRDlZHokiyrnJ2EPttoAmleH9cbvG0K%2FzS0gAL0NNNECm0JlgMdXC7%2F9xd19jdOpstbupLc2szh7xVQhKTCPwlgIeH0YHrMCs%2F1Rb8GQSNw6dgJaD5aKqmIVb%2FV%2BBT24xZ5Z0z8D6a5Rn5o%2FBI%2BXnlNtZvMR1ixO2GQ3ZCTAIn3xTfdLzunmA%2FZuRnrKQDz3oFFNXK0VkNqHcaEHK5ogIIn7KeVib%2FqFAUlfhY1LrjNCPACCOBMsWx1VtMzQEIJ%2FWGV3YwE4k5Stc3a7gM3UVuxHOhY9XfWr%2B1h18jBu7vTxMPjw68AGOqUBJNSqOpGXQkMvFQCz9cj325FfSP%2FsqlYS8NLpWTiYCm%2Bm3N99yzin9gGeKmtz%2FXIJOWbmOpmH9xwR%2BVEBx6SESWsbCkgCV8k9m%2BiIVnmmvk3inx8nOJA8AE4qzyjl5gFON3XVMiHlS%2FE7piIWTIHWZg1VcsdmbZXQ9a0pUUSJUuupkD3CNqDiEeEdicdheuWVdhMf687ZyMrFoIcqorXFr0JNZeoj&X-Amz-Signature=1ba906cad1a5375ec6c489a66bb8663bcfc4a6ef64ab89037723be15bc75204a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UARHZDAI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ZlkXQu9DO%2FJczRVkq4yBAKKvhSIsEpMmZqsnk0cczgIgQT0aQE0fqxhC78yB7tvfonlxQydpRJw7MI%2FniLfY%2FvIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNiNRc0djyrObRWoZircA04elmKxdRXv2ANBstfQwa7hyTkzhXLOu0rKkAYhIxNLpX9T2Vsxx9gxKlEdg6pX%2Fh6phO58qtLHat%2B7L8AMbdnyPRrXZuRK0rSsrodbn3I%2BjDIRW%2Fvuw%2FEDOpscTqWQGmDXY1SRbVtvVCwfMXDGeF05Psn8VdEBOEYZv6pG%2FjNcaF0UJHJOJ4yWqA0XRnz68kASmau5rtDEdM3FF1ADzXt9sHDtl9woVzv7RfvlGxTW2gElAE9aBVFWTDM1Afq6P1XhqxzinCVrBcK8toO6TOhNq9foYPSVOTNZ17qBAOpVLEksJCG4Ywx9mWQaFzBGTY9R8n8TWY2OMFVZxggbj1CzoGeKhs3RWV7BYbes8Xc9NgULBK%2FskwR0N28E8NcpRQaAKRH0cWDI%2FF1BueVyU8IjTAGraAmpr0xjVzi78LnZ2XGkz21tM%2BHWEU2HUCE6gY%2B0RfvIdh4ZvL4uc4z6aBNPvXlRnrs4kTsmIT6vGCDkjDS4VTwaQBW7n%2BTM4rH6ZOJv%2FlBiN3wHuPawIwlsUzzdPRJWKmkVo38oPn1EDf4%2BkI4TFB32lvZL9zo0NMffIhYf2IJ6PinAXFc%2F9iEF4G%2B7Qi5mAyIAoUyIRyXjKQ4%2BRBtYVfXhr%2B6wGcr2MIzw68AGOqUBKrKNhuTCseOxlbsVZBG7nCXw2N8yDybW5XQspkvmjZowq4UYNp1cjZcmhlWVux4bedDXYpRKJGQHqQYN%2FEG%2Fg9msEfC%2BWnJfGn7kNOSktFaN51eT9nmLIAWq0oMGPgi5Zzy%2Bz3Ykhux56UgnEZ1NIl8lq1N4R1xL90VVhGA42aKCbg9R6YIU6YpWNOGDRdr1fTmvnhZxkzWyKAPvTDGn1TUgrlkd&X-Amz-Signature=fbfe32c6309dca594da2582c87620c3c46ab1308c8a2a24057890658a6233310&X-Amz-SignedHeaders=host&x-id=GetObject)

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
