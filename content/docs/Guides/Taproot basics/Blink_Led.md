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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZMKG4I%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Bu%2BBDV%2BWej1owjvAyuG8MvhiDbmmW0fLzKaN7AAqrAiEA2%2BQUXu7kDY03OaJHTSfk9kupZ7s9ZXGUsztksTmZw0gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu6IApyX1uy%2FwYBqCrcA%2FqYTwQeuNbOHB2UG2itjCSbUHExOZ0Mdm8JDIqNudRbapzNCYslEUUiJBuWBBrqPG8Kbm2G8OT9HuCtuOM8kWlzxsbKgVCgRfApBVdsSYGk7wsbBY%2FHj%2B7CeQua0y89g3PRZMJKY2M%2BivceKRHTYfXr%2FS1qukuBpqZoCQ9gqj7ssA32Amga0sfkEXdQEQRS%2FzbY85qYZKT2XiAz3JjPIYA9opkBa2Gly4R1ti9WrsQcsRI6Ioj9N0D%2BVR0m84V24OIwQaY1U3CEb%2BDlP2ZrZx4UcI0DIGxThNq42GYVx3PQl3T10Eeuxbuvi%2B79DL1lJ5%2FyFIz%2BkGLmSmoizC7ypgz7Icn4rw7ReRFroo37kalN366xcmyS8ZFe3jwyUehE%2FatRbWOuUkDMef5RQ%2FWEcDPaOqGpT2gZqkuvUFcv4NjNSo4j8vvDBmsgT7Z3%2B3hHnfeoRE6RzriB25yZCuDs9iAqC9HQFiKOt%2FXRcnB85GWoZTN0KyEBxlRxprVYjlZ%2B86smoyijRWA57MjLTi4cLWxZNVaIr7LH2K4EPFZ7lNIrqZRsPBd3RoBWijf5oDOvAAXru2xhAecmPqIWBWh4NuKKfTeUueBNSA0iGhdZyGnb%2FibDDZN%2BWum8r4%2F4MK2e5cQGOqUBNJOuF5rU5bXJRnMtVPguJFwE8INc0Hg59cI%2FtGuCrnkIieYpKkqodajWLzfgkTmhVkaKNJoi%2FuRa98KrWgQK4KGlaSywXw%2B3mhRMU2TAXCTiFCZoLl4T76ukcXUWiQrAzRA0DSiidSTN4suQWDYKYxMmx1p0iEMygRgw61TeQ4o9B0VkM%2FEtFGfn0gyN8A0GQkKQNr3MTFUp9RLvEpJdXUqe4ick&X-Amz-Signature=88270b5397c27380099a2913a9426680719fda387ab529ed260e4705d15f7bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RIQBGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKOvTkGUWJSTGZ0qBkGfDs6lINn3fcZPQh52JKR3GVjAiAREThuYUytODg5mUlJnkb%2Bf9yKrwdktwh6A5QFQaKjyyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM96%2FYrdwlfDWspNJ8KtwDN%2B5%2FJQ5rnLA5VoNxoaiVC%2BYWRQsF68p9vM9zXRb9pZ2z5dlQv8p3OllfGKeL9e2Vs%2BFCtQZpnA1Qz3Tfn5MPR0%2BCkdlb1Jzu7rLr8j6nf9W2sassCwTfHi23enHiw%2F10Mfh680sP70hO%2BIAvYs9SBLO7pe%2B7UCHQp%2F%2Bxlh82sAfiUENlmcC0Hgj73%2BJxR%2BcMW3aWLgJOKsZOnq1ymIFTPN7WbN%2BkJIRsLEyGIUdY15Ai8RpU6QSumhLAqUftls3J4W7FODUVbBKIQnzhd3yXnn0ieQFPRf65ey8W7HdHxgfNUTrfvc0tNGMJ3MWdUz9qTWmlhUHc7wBqS%2F4XXigAnZee128Dw08fshqfE3%2F1h2s7OyiXUvtcS39zzvDqR4CbdG7PmW9KQyEFBWjfRaVEU9%2FnnzUBCihHQNr%2FMFSjtsZMTixm5RaXuXG9F3jvgwXgv%2FNYZV0Y7EtnLgytqnZpZ9%2BFaM5zBmxBng6tD57FL4fAO%2BeWtVP5Y58y4H%2FIazJ%2F6zmIo%2F53GVCgZ1SkDkXqduTH0BInXtZe0THt8wdSZm%2F896CRMXavTPDwL5w2cYyMsz%2F42wIIAMaVvLQCMgx7JGwdzRZzZakM8pcmD%2BWhxqvgkxGBCUsP3EgVrAgwsp3lxAY6pgFGaTl%2Fcyu0%2Fiog4egtZjwdwbgE4N7nb16Tmnh6DcO7nbQHxEPmNoagJ7Svcy7rcryXMa9bcfMJ%2BrbTUjh%2F%2BngHaIQURJ3kvung2m5yjJ6jMQa4HErba9SmrmJQu0bG1LXREOZjYVLOmr8jPr1tVRDul1UosHxEUlRk8wnjVlDyzgZCV7imDNQW9OIBnbYKnGGd9abRGEmXNGzXmaUj8LA2fUvH%2BVZZ&X-Amz-Signature=d1f999e717aee1d208fccdde108deafef7ed62d5911d3ec3858b704847ebc353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
