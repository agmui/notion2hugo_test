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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FXG254%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FRQWun1EZN6FVvoC9iWVfERaGsUIBhGgj%2FovQ1xppqwIgJcyKaLnU9guyaCuzg9g7aEEop%2Fv4X%2FkmNV5yxR%2F6lDcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDlxQkRrTKVWc6GgmyrcA7j5YurDvOCasoOEYGmQ8viZCneSq8ElAKMznevyWwXulOXTSjCEaBwWW0aCOlMV3a4hQZRIWnXNJgOjTQ0n%2B1t3CyYTf40CSnkmc8QmuYwoxGDS%2FNldNdH82yC8ALAxKxS26YwJ%2FlJuIGGb6ceJUuRykD7%2FTNuDuBYX7zfMlYcTP5oMSYgrKT%2FIJbBsWpSX5FUq8s6kojcQDi1a3pWvl77KqqQlgbWZJx0YCZTTvc05jGFgbbL22CbjddYTn8YXOfk4hov0j2OUz3u3nS5wyCgGUIqkmrWZMuKxM4XFlcM3pII7Grl2358pQ2FSH7QQEjoOB3tU2%2ByOQeIxHvU6BU%2BqTcV6hWgRBVJCFJmm%2Fs3quERuFsl5jipaTONYDq9%2Fv18GgaHQ5WiNhazF40Cq49hSqEY8UUMb8IQltyLsgeiy0PPMCvf2Ep0j8mx7SFqIzzXBfX7%2BvagF36lu8xh3w3pZyo7C27clnsMTtZ%2FZHul7hjCFMK5fQ%2FqGmA9ZEYwQ8e8CJlk9mWeTzvsS6sRy2ea497tigcQw9gZb92vjBLd729hAMPdG5mRcP5yuGWNUR7c%2FoObZCe3yplctuLJ8rajreT7Y6mxfYOUTOPdIjZU8Lnm75ezdbppkpiIsMPvaj78GOqUBdSB%2F1T69RcuCrBk0BzGZEaAK6TMiZgVtieEgzCS6B1cUoo7KuCwgAbVAS9j0g2e4pxyvw2MB2MlaF6Qklfi0QU00x%2B6nUqG7RPZWyJ1sQGpCfEsIIaxJ8ER6TlLLK0mdu0JD8eOrhjlDR7HeQ9AQAg85YGBEQG7MtgEJ%2BWW%2FEbTBtqKjFBofjzCEq18OmFVP7DcmtA%2B3YtzM8E7460p6VlV%2BjorH&X-Amz-Signature=4991311e1e55c36058534f360c095e99164716c33021c0b88fcc9df7b079c41c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDII54S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7XhLhf16Icv4tTniqMrhRlRSgge%2B2F0FFxBMo3lqMsAiEAs%2F%2B6mrwn5v4tsMwBHvRnzgyuT%2BObyZZHWF9WfCD%2BBXwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDN0kOW2%2F4gHvI1v0gircA%2FbXoMuW1aS%2B9odiKxEw5oNfB7vHFOsWkEmkbZZvkTZi1J6mMw16S5e3oTCRuttlx%2FDiLcpiPkGlSndFOuKM8Bl5CpRU6Jq7ZGU0%2FRKGLpBXNcIuBv23uVDf6O3HQUnZ%2B%2Bc1u%2FlH3vnFbCYByuF6kchd4XTQhb1beTS0MEey5xwRvrQa4VXdO%2BJwfnGMNMAwTsLIzG7iJSt2y%2FTP7iG20Nv%2FGo9t4aFcvJc3n%2BljSoDrZezjMqziX7jXBROFVbumskE36vKVU5gEwh8Wj0Q6hqcir4akopfsb5DkrsJpH5j1XUyHt%2BYLPE5tLuXNLOCDR9z6CoRyGVaruBxak5oSGigkHX1sw2vKY48Lms3VHE7ZuexrCHafVNI%2FpyQUs2SU9XnVVWiB6pkpEq0mu3LqBGl0m3gmUpZMFJbno1YsL%2BhykT1RC6bQD7LhNdw4MA2tUBCGzhtA6xE8m9Zu67BRoAfTC1CpnV3TaY7LqDPOGqe0wGjt3jQTnK9XXIDkzD0nlEvHJJoAF5WfmElHWSkJTasUQNfOVvxwPQs%2Funmphkse6kCETxiGWHlIsFldIUp%2BXzVc%2FXFicvG09esqa4xJCHXHmcU3DkYMdMYItRFknUJxvFSXlnc3GvmzhlzDMKTbj78GOqUBwTRW%2Bx60XoUbIog6LHng7tjVYz%2BfuPxM%2FuDMHW%2BZGXQ%2BkwfJtnXczZedwks%2FYQ5m3RI%2FlV4H6Au%2BrajYovjhZAWM0OhQrco361diytUDDPkA3JRownZCkp540mcWTCUZmyy34Zx%2BmQzSMmvvvqVxmUk9%2FhqVcNmwlH1FqJP914S0Fwm5Fh9nKILR5CuppO7bnmrHG9dNFMGIocbxD2Bug2Ygz9S%2F&X-Amz-Signature=e57bcbfbb12074f83b6a30c479f5d8436874836995330477e4aa4fd99804ec9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
