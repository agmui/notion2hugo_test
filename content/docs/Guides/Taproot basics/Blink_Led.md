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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654E3SXHW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBvVbe5eZOvcTmo8%2F1We%2FwbvbQXBu0DfD6NNH8TVlZr4AiEA%2BwCL0SCzbDDlhQbp7H7GELqKG1gBRMVNPisKna40FCcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGi9fpEmScV9o2mpMSrcA%2FbBhAAIYhvJzWyGPyL%2Bl%2Ft4QXDp%2FzoR%2FXgH0UG6b5d%2FyeSMU78wwgRBVaYybMPDa2d2fr2%2BmyRZbKtsAeUgBFAxTDZdlfbZ5sYyl16a1piX10W%2FeD6vzifVahMKDlVGG5BZfqRvN69%2BDQuwWsrwCzuqSJq4IibSy48tNCcBquCbZTVhpQ0rVLaTwLV3dtMrv0BFuh0mcJd3QQD%2BRTV1K0Wp4NDsuI801c4s67tpofgC68qGpLJ4pjmBYbiEhWWvveyTroEuaeE9xJpscaiImoFMcSY1UNAmTtbOK3neA0oiUsezM6D7EwBr%2FXwCF9hLpMBt2aNoc6FiUaQnFoJBKHZfIRLOhi2n%2FK96WIfo8rb06nHJVEEbgnNYXAD5eH7at77Ntw8vZeixdGIdMYGbg%2F5PXr%2FD1VKomBBnLxbumS0FqmI03PqEJHI4R4d93xrdexveqf3K9fx4vLgKxub%2B2DvpmIt%2F02kA1b13pHUtOXA%2Bzb3hY8QclN6iWUfjjpkK804AKNqgpHwSv1oKoGkAfYb1ZyBUrrGKZZUU6%2FKsqC07dLhH3i3lMBTT9%2FBznQuk3Zi1qTc182xwpMnuU8YispkdEnhM%2FDyXnrNYItVhDO1KdSOZvwmdTGVGFm3AMNvSscIGOqUBwUrfhyYGyIVTC6co1%2F%2Fm7O01wdvhpzJ1WLwRbixAXvf%2FndrdKLFsg%2BgnRlxCF62g0y0Mr51Po72jd%2FXMt5BAzS3kujwJUMo7o3UY7HQg%2BL%2BiEuY%2FMayP27WTW8FI28PyMLc3K7Wc%2FW9TZUX6AN0X74u15CQlEno2I%2Bo3Bc7hWeNNDL6kjW2at4LS1eE5r7mbfRaBLz6NTZFaHaKg7Z2rIlaf0c%2Fo&X-Amz-Signature=07eb71382ba6a2e6b7e2e3e25b295d94c8aed20676e2f1e1d934ecc0cdd66aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PD5MJRS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCGk4uZJTf5N0IFZUIOw3WF6FuujYTr2ZHKbBhHM7pAFgIgXloOOCnKBuNenQnEmyuYk1rZIsz8eBMNrS31mOUnww0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDH3AgXjsDrfWnVcRcyrcAx8vInrrcdeDomCBg7J7rny92ettkQojx1ynFR1W3%2FK1W1FRWsOiMgSraQhTUPOQxPeIddcXyKkKc5xYZFn7tQmhNUkKslyxhPkvRfgenVPHYJ%2FS84o7vFW7THetQQfk5zNwCoMwm7WMNI1XA3USvaoGQYBRzLpn08vqYRWgQuyLDYNZ5ZQIeaL%2BgWcmCDuX5GigFg5k%2BoD2sOjuNOuKcppA0LT8sEuhaFVT7kz6zsOi4yzRTb3omyyqkjEeS81Fz4Vb04ID4J%2BcwDXxtfnr1QpFS5%2FF%2BBn07fT9gSmdINtQtQ9O7Riz8xokY5fVfd2EFqMR6%2FQpzC4khpAXbISDtBmRz15TsQpI%2BpoJ0aNoGO8QQRkKvoSnCVFXwnFqhjQRAiO94Y7hRNa01guEiqN6WkqW%2F%2Fgbf5N6ixiO8aPnI2JeajsM2sklo%2FAH0wBp5EabRxbNuyP8SVQ36Z2aQ5XWn2%2FzZY3hHrZ3cmZH5RyU5G1Ovb2ku4xPC6ynYEqJ8kwEqJiZS72ZDgmPpI4Guk27A%2BRs5tGt%2B0AgRjbn4w5cS6aizYw1Ic%2Fkrg8MEXI1x87082Ss5mukWfeB7xYRNyDS34Ky9zPgqWM5P1ttr09JR8rTlYAf3Yt83e0cvChrMNDSscIGOqUBQ4h6%2B9fGI%2F2VeEkOkNux%2FwWnvsA8S8ubi6IveUQweUV5TEtLJergs%2BOqdaqoq0VUAxJy4EroT%2Bz1t4LCEdHZHuc7HBObsZWIKoqtUjv87u1yi8xTQugp8zN2WJZZYQpiNwkgLz0AyKEKl%2Bc7d2ChoMZH3qRikMIeQ5VIjeozvTPR016ZN4poUHkMXaYyYLAIJ%2Ftblu0iIqv%2FdCHNvQmfFh9uw8f3&X-Amz-Signature=48fbdb6a3f5c95d67b62e1baa7eac808bb640d429089202ba74174a39aa3cc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
