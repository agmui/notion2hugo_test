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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y22OOT6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4hiViH%2FkwjoeekzK5Xuu6UOMMhniVai3YEcYk0BaCSAiEAvyIwjCMiGITqLoeNCbW%2B3VzyQEzhThnal7m0AocnPZAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGrKQtYFHtEQ7oJehyrcA1cq%2F4OmaytaM07qnbVXlNIG06x68D3vnxPBA%2FyHzh2imFz3kuf1%2FHkogO7LQV2%2Fg%2FnbQro%2Fn2stzo%2BhMzh8vAGCC%2BmPl1GJcIdNN5VcBrKHm5Z7wMPRbR3FA0oWRWuCsTmtINRwTVCV8mBXxXYi5m6plkxgwmGMgK3%2BD47xhP%2F4XtnYa%2FYa4nAUeFtiDRBSx9iALSYyNz1IAniPeyywOutPXu8obUe17omJkqUOTW2PQYiOC6ch7%2FfqCHMAQoVthVEJ6h27JC1zcn0DLaGS6IMDJ34wLs%2FRqDGCJrX20okS4lvfW4EEHpSPgv0QcFdKBziXT8bU5G1ZYpmoWugurEin0pA6yZw%2Fao7efV3cAsF36S0g%2BJwpeKwoOD1JYIlcCTgsVVBnsB5mxTdbnA6hOUqXiLxyGDZZHQfnV93bKmHCKFyJeFL6ul09T%2FeUiExft2RnLhVrRJsYYMg%2BHQpm57qU%2B%2BooRv92ndx%2F39ko9WVShk42NNHQdmpgfHOBDNltkZWxPjTg%2FacTUW0OGQ3YqtT46EbvT%2Fuv%2B8rQfuc2p3AwG1twbChjMEVd%2ByRrsgXWdq%2FG8QejnHH35F54KclNxEfe4B6CxaQy4B5xqErC0mjCR0JOvtZZSL9gRshNMNCvib8GOqUBjYDI8xdkCChqSy82y5QptoYq%2B%2FiYGfHGAjXAdI%2B0voTinnEK2Gs2U6YtaF3kxFRj7jzAXwSeA8RZLG6AKpy7AO4eJYDKgBd6ZcwnqgMMRQEGyShVZhIrT%2BdeDf8j92gwD8rrcbNArSYxpJS%2FsJA55MDERUiYGONp%2F%2BrAX9UMHV8x7VKcnt26u2Ai7%2FaWkGBgYE%2BX5Sb%2FwgXME7VZDPs89hcFIjhz&X-Amz-Signature=7add327bbc799bb0e7cd789ea23bfd6e478e789da19994d58c30993709b63adb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666B2ILKT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0Z4Ld6djYK3M6AxwOb5Hs1BDx8%2BUqzZfQ3ubHpBOFGAiEAsfoa2A84CFb6ivL4k1jdGsw5Dm6UleKcLXUcZ6retV8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAD9gJtwnH839BjL6yrcA3IJBYcBCPyWynvRZMicf4mbID5wVnsS86snOCYQ8FIUClrOgNeUYNsZwy8U3lYjFEK55Tk2IhCVw24q5kNk12G3rGpMQ1IviEjUNGP86gkj61kicXMqI5k8nVTpofjIh0Uq%2Bd07R23RzI4W5vVT%2BbOfbJNPxODhn%2FmhvrJgaT7EikhBymlho%2FoPEmMS4ZlmyDSPIuHjw73StmiNA6k9HfICKlLGEWCaT27XHzZWyhlTFrzmB4WjIFQxTMCRy16CMTcr0rhtmMmNa8n%2BsXYluGnRe4lG3B0PD%2BdMJjYFSFplWVwi9Boj1v75VREsm4pxskjso5Uz7dBExMNykHzc%2BVEqJp6ON5EP06SAqJZWfAJ8E10gbxRYhvXXwv3L8IeDufIAq0gv9WaOQfIDlOm5ayV%2FyIQq8SEvf%2BwHQ2KP0uhPimP3nCmjFP1bP3NXLilWkbw3WpBwZV71rAVcLUyVBWXrbytTM3636TS0og5yQIMxEsusrGrBufNH86ReklgZhXD7JW3yZFdxt9jNTV4iXyGGxHUkdIJ2cnIswKfS9lRvEdUHWrGH8J3g0hsW%2BEcBPo6jwiVyWkLt6iN0dVf%2FB0Sn8BXF5o4pqUsYyyURPFRr7XN4xAY7Wh8JyCi9MK2uib8GOqUByY8dZ%2BsJA8XUnkX33LAnQRSlxg%2B3Cp%2B0qdc1iDZ9sESCEbGhF8owXHEpZFUwHNrsbg433B8bbeEv34Y4h8KAgfvTN05enhJ5iZsgiGW%2BPGEWmjuB785iLRI1hiiCfkFkn1Q7DmxsOk425u%2B%2Fu5WBo5ZFq4w9KjRHxx9M8uXnxVmerrxoIw1uRwaRewNyFlN98AT6zVGpeOK4hnoDH%2FgjGKVZasy7&X-Amz-Signature=21017893e1a0ef823a3e6b2430c1b3ebd7619f8830fc180ea6c86eae406e3c83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
