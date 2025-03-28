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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7DEE2R%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13J1dLvcDbqcZe%2FbVCxToKJ4ZW4iRF1VuYKWl47pZSQIhAKLJHwkXMmgiP5bjL1wUuQmJAnuSm2EJnTU0SHDoEewCKv8DCF8QABoMNjM3NDIzMTgzODA1Igye768Tj0ppIOSpJWwq3APR8VH047c1mYM6vVk9A4naq5Qcbc0gzxb4bElJpsDzDSK1VhRHoANnDYUH6OwUO%2FGJLdLTlXr6zsIArVW%2BVmY42xOQ4zBV44ShG%2B3XSOtTBz7Tcy6MqBzrtdkPTpm3mhD9NhobZy5DD5K5%2F0sK%2BcQgy3xsHCzpmrsvOq9vKpAy%2B0WRCCnpbRpKM6YLk4WUtSYz2tR%2FEqrxThjUc%2FZ7xJiAWLtxCPY7QCwwMBfdTNxPXiOM8RnejI2og5di%2BzPboE0%2FRI1WrvRwIa56mYEsLqysHQgj%2Bcmqj8%2F5pD%2FWt2SayWgsHUIUSi6uzsvgplfv4J9WKKJSgPcPam54ci9Be21ylyY40wZ5YM98TI%2FYc6K7FotjR2CNpRdsJalA2%2FFV6ESI5ydetRlz2pRtKEBmydt9srFx%2BMZhfzZmPZmO5u1sElAtdaIZDySCIj%2FFqe9%2F947J0xksfRKAjoAb3YaYyovzGST4sHF8ei4sMM8U9AzE014GLD%2FkKIRZu4hWYFi8xNlF1ow9QL0DUiSoyWwPsfLZjX16t4ejVv6W%2BHsTC7oKjsh9b6k8dkCWfDySK3Vce9PpaEeF4%2F%2F0bxzIAx%2FOW7zVdVbWsTyBaEMsRxpvPF3fASJltD34d08vkNjYRTCh0Zq%2FBjqkAYO7Uz5xdl1jJv%2B6eTXAp%2B642mtIYj9WMlT1602MqUVrw3BodZM7nXaDcYbAY4%2BK7gCBLV98vJHqBPWI%2BUPMG7hW%2BqpceRfRs%2FSMAfPfAJvQ7Gl%2Bg2mK4L2YfvCaGFjz20tbu0%2FtiOh16arSJeR4nZ0CH0DsWbsHz3bojSFkMdq4eFEaT7xo2sGkVJEeKzttCaKUNedM4%2FfOj4F0njLtx66%2BqyC5&X-Amz-Signature=8f19f096890c30b59f828efb1c7fff5a7969426d4834941d65d25203494f5beb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVBZMAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhk9n5eU%2Fq%2ButRwsu0aseKBiwPBnSNFHtUPHRPAm4eWgIgPeSwmi4j%2FGBrOLvmXsA8oqRRXV6a3G%2F%2FPUcqUibs5SEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPH4GsmPku1KGDJErircA6fFDBxiW2flA2BOCZGrifYRvyLh%2BttUzeYoeL5DvERu96hfq0wUnFH90XfTnBN2ITWC4mljbVuF8GXBC%2Brz5yRAfFj%2BMEEiqwn3wnU%2BuyehHvO0T1Cmc5CmpzDwc0rIrvPlvSKIuraZoneN%2F47ktlJnXzVF6a262BLidaQIoXYTkfFeGioge8YWlKrYEx5DTZ%2FrARfDErjWr7WABRdzZgl%2Fo%2BCEo4aTOTqpeFrR7nmtvknQJkExIzmaKgFXZdUNuR%2FtrSiAU8eZXL74SGCf3J3pyW1wOt6ctu4rlJJTRgD1jWNDepb8mZVour0HgngxtcTU4pwc3CfJPaadgHAFFBpJT7r3faJBdScLHwdgv1E%2F4Su1HQv6z8NZPqmLZ9XQwutIVvs3hJhxXJ2v4f5v19nn3gdJ9tyO%2BlvFNnddT36MgYXmQtjDA4uEZxR9S4pwvACKZn9Bt2TyP8hTaTb8atA5uksKeja5pR8PwGg9RAcz1FotunrvL1sDGokfPJzT83MkdsvnJnKgG3sL36faKIhrR6sgaU1rB1ekfdvNjLgA0T652vkRjf7iY4p%2BG5RjpDsnUQc%2B7o%2Bri5O7dYSTdgn6DxFEdgTlSjqZE5DOMiPBZOzcaML8PGPYYFSKMKLRmr8GOqUBkOhgEOGpkuepYgcHA47CKz1BxFbi79NCDqCEs3czbabGoKVu37jgmvbWSt10%2Br4EjcrpVOEkdgHe3AiNxu%2FMfE%2FuDieL1iXIqwBebWxbWiWAbZIkVY4gDuRAJ34lUn3YW5NHA1UGprd2KPnQ%2B1BAQb1oetKWOXr3zGZdbJuCWHV6f4qhfBr%2BT5btpHJn92TVwetqa1LE5M3YZQ0HCL6nCpcztI8P&X-Amz-Signature=5888ebd9c3838c7f284de42992b73afe7103f6c4a59e78893e462d993a792119&X-Amz-SignedHeaders=host&x-id=GetObject)

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
