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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT27FNQA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGgEcfLjJtZzx9knuf2nNvKrS5kbKsnm615UVEOSF8EKAiEAq%2FCamzVZgLSzspCAG0MmcPV1HipzzjKUhMXmZfxNAYYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2koLHS7uT39VuF2SrcA2ukY%2BMbGpCL%2BtBNfGb%2BMS1E3P62TV455mplQ8RnBANZF7Ul8i47szVFjnMhCxYI2wqc2M4Q7TZFqnF28XoZUp2XnPK%2BHU6RrxMwf9Qgi%2F%2Fe6KnOIbav6Yc7V0bd3WssWG9JEm0XusviCD%2FMnc%2Fj7xFEihZRSHa8qJf4xNGrMlnMrvo8ChrVJjF3Ze5mrJYmw42BYKqyzK5SuTMFgUvIyvT70ZEDee%2FmeCaUGOf14viBrdX9CH3%2F9OSlEkPjOKn4RGpOTmX9Ad9dCcfIlO4UF4QRoDf%2FDEq%2BKHc7yn499zY0iyf7qDOo3pylmo%2Bi77rNPA%2BqY%2FyK%2B8MxLWF4fGpVeKP%2B5oRS7Kn0CKwlMRYvk4cvnjUy2Bt%2FDfYu7WsfgBUg4r2LRsQ0boOpEfueopqYOTe8lAKmMk37SkGNhQou20aD8ehQhiw9OmCYdQMh6yQjmfa8TWBjCYPUVXZNniWRU2oPjvT98frkgXi608O5pAv8KLeekmbo8z2EjZ4lLdemdpuRPj5tbItmSzYRDXWlveTz6YBekuYF5ne%2FO8KERLe8WmTalZWPNR0eJvyfsLKBpW68%2F8LeELuvAkv%2FqdsnqqlQ%2FwnAUz4nuKuRqDW%2FQomm0HILCt99stnMHRJoMKjHisEGOqUBixqwMQWpmXfILoNo%2FzI8lKgNrzdoDAQu35VoSSqJWSyjplYtCzXFT3Fb43MEb7QJ2d0qHxswNmRtRqZQefUSlbiq4yG%2FC4JMPGe2qTNejg7mquXtfNiAWrTvJ5cKjZeuaTNjnBR6AwW5TMhxQMDrlTlJpfMlYEVA7Ewl8EG7uiq9sx5Z8UbrOmqE2yurVwPaAKvhNorz1umBgDS%2BeX9lsd5OywNT&X-Amz-Signature=879d525200e1fcca8128c9f5d6175d2a375c365e5defdf2fde80e27374a422e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGTRISA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIE9FD3VLxvXvYTThiVxAaPNzpSaL9llF0GSVADIpBxd0AiEA8drYrz2VtdN3JZkPhPBDCT318zyY4WjjS%2FxnJ0IYvncqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgK6q%2Bd9oH2RYV8SyrcA8a3wH%2BkL3h1JIajrnMfFvIsOdiKltsS1rooWczpOsGS2HSYrzrd%2BnKGEwc7mnrYM48O0FP%2Bws1F%2BeFl7Kbxklv%2BMfDZzLwgOJku3wDSZ4lCbIBW6NXUX%2BJ2i6rB%2BfRPeCjwGYjCMZPlg3pVfFyO%2B9vwBzbm%2Fx96JXRHnDsoCLQgMR603ldA5jacExulpJgQu44Di6NQfTboZz0Fx4y3m%2FLxYg2z4K8ydDZZ6hSnZ5mnqa9BZlkJ%2FnTmaeX6h7TSOxON3FntSRd%2FeahI1iT13Lxx0AROu1bcLVUCsmpBmlQfWAoSDKJ1dKHSOlmajD3HUKoo%2FfFCehItOIFN2zeVGL1vaUCC%2FaaQenarmqEFi7SjQ4IzRPpbvzn7rpHEdlCARDkZenLYcsJJ0ibhbdAZ9d07QuacwNnhHgSvSjab%2B7KLpz%2FJIsdncbyOZNmqnEEyx8XqqmAfTZDx2NG7IoCzRMQ%2BJwTF4ukjgqBZ8XtDiGQWWe7u5EZ%2B7Mf4tJF3YnR4UhrZIgYaYUfhQzyMCEyk8EXjDQaXYlZPtDG2bjGEsQFgqOWkw4APSsp0UCdoNPLRNwZCVIcCkfcsSfyI%2BjNjXKwLGKYGuwV4R0g3SGbc7eh2uOd%2B9E%2BMz62gQmsNMOrHisEGOqUB4AT6EIxKIgURY3%2FjBOFj7QGJhWsp0LXgWZZeeUhRTaRQwg9UPwwAmDW%2FTX0BhoYGPMOOD9Knm3GmSZ7JZy9uw6VMyfX7QQl5m0SF4%2FnbqmtN8N%2Bs9IX5TpmwNI8NWvmNfNqB3AwzNdu72i8qiUTb93PyI2pQMtJ5aNyToqe3qTsIwmM3K5NKOBPFiPC1sYKRyK%2Frv5RU2IBLSAHOfYh8fsyn%2BXjk&X-Amz-Signature=46fcfbf92cb952570b03554421fb435810b499d56021a5ad8e5d1329ef210f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
