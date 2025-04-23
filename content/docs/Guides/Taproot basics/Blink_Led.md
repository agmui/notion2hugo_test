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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ETCJAN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDRBgkJFlPF5oRU5h72n0M%2FFKKPKYjKN6XlogXOvLmelwIgcwIG2AadOrN38pjw6tcFl0DE4oiEO8d%2FX7lU2uM7kWoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcJKM028Tg5D6Y3HircAy7XOcl40m%2BIYQz3yB%2FtT2I1Ud26b2RpKHmNXN%2BhGG0pWMRLuscMZjubDgMUBgP3r7VqOLOFAeWgmw6li9Mf9S1sMCpZLtgTuISgbnJtBsHLj2w946v7cl045GVFv2XP7OzrIYVpL0YccztCeSxO1figgae%2B0MRzdo6uFVSJ%2B0gjrRbZXq1rhbbaoIAXtcvcmN3wlF5D2Iyr%2Bwpt%2FBVfS%2FdPVSoHtJXH9HOe2taq992BFz1i1wJjCXxMQXrpmzEarMcTLROg%2BtFPYDm5G9yA5uoC08od8CZzK1dhyEVdMCCQLCQl7MsD%2Br9el%2B0zLIWlTVc4B04B20VksBjiR5u8bfZf9sRW%2FcuLTXhzTXH9ca5pDZ6EBqnittzB%2FQOXFsD73yeJOeteX%2FFS4BFiGKQon6ZPgNKmTHz1xZ8EFuJvteeehaZyJTCNUz0zDgt87Q5Hko6Nla0GiojyUDP5s4q1sW72ctG5ywofP0TPqWPdQnJc4w0F1PQBrDSpJV0N4xLzLaz2Om2e36LAqXX0Mah5HRQz0AdKc9UZepL0qVXZ4vCH52gXH3qatSQJ9TU6HKv1HdFL%2FxZRz9jzey9U83Wkre%2BqXSTUfovf0Y0b79%2BL2M%2FpJ%2FbQZ1ZHOYOG3gr8MO7XoMAGOqUBwWmn5o4wDX9lK5nMO%2FqqqWGW6LbgKDDIhwh6d7fFKa7seH8%2Fu009bUssXFj4inVRk3p1zsOOvHQfvj4x%2FUgyuAUh2QuJGjxQ6aORUAFoBGKIRyzN1G1g2evVWHXIPeDx6VBuedJMZ4OE%2FBHOFiCWvmjfmfx0S3XQ412FvKmlO%2F9MqaoL3ZzJAhjEtd9qji3FCIz07ReZ3Tp8VmNnX3e8rLmIA83S&X-Amz-Signature=7fb87c0c594205a27af1d22aa1d1014daf7f6b1e049f8119efe4eaa7a13e2776&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAPUIFG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGtGNxfd%2FHtQnDCdKQW%2B7eMF7gZ7zjU8IB8w%2F%2Bj6WQ6FAiEA3%2Bk4YD2uDQGhz5idGq7FmFM2iS%2FYJ3irYhEgaPvwCkQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU8Gpf76IqVjzz4sCrcAwW1YlCVxv%2BwmYFMDFOHDb3xXjb45Bqr4kec%2BBm%2Bm9ljqpEZ3XVn1BOUuR4Z0082zJmoEygvODNazWjhYkCzj65cn2x%2FY1Xrr2dTyVLVSc91vI%2F8ViXnS5cFkPwwU8jUsT5CC0M1T6ouCMGhRz7xlGPOLi1Zl2A7J%2BELmgYeIQsfvnypdHmrXycuoO0IZQfDnHv5ahwqdyexlBXjxIPd2mOMBIcwhKuNOEW3GWa50Y4RxJTpK2D6pDg%2BOnUicdfTCpHnTmivPxyfLIKCljXoqQFkYmVVGkZtPyLWjRsRn37pVwQrTqkf3cQ0OeyNt8%2F2bh%2Bg86GBFwK2oUEVgbP9wukpUmm4kb8HG83TVs9R%2FdQmzdMzqQndFrRJFiwSrqoJW2kK45ofMyWZ7Iqy3g1tZdMHo2yFSZI6KYPCE8XZ396XwrjePc%2F%2BlV5Ag03MZNDM6bWF6Z3EevW4fEFY7YhlMldtDT%2FAPmLFvp3Ihea3a2vxW6Gq0ewI%2BendcQru7vuT6a01fmr1rtdvjeKn0tNaSEHlzC2%2FhcIAHE9U01SsNzvJK3qcxy0dykz%2FZgqlG%2FIZrNILi75Z1FATQJHJ6zKLtke6yX%2Ft3jf5vz8G83%2Fm%2B%2FXD54HIsAnGcUxlyc6NMJjYoMAGOqUBjIFP39TcW7lxWZz6ZUWxHTahMo1rt%2Bl%2FXGrA60jdOOZcGrXF7nUT4jkhqOKaVcqakm5nv9oJh5J9L56Hi8iVzn2%2Bn3ocKkJcZ1fAnkG6y%2B1fZJgGTPBxeMd%2FanQAiyddZ6WduRzU5B5aKLQ8dkAEW23%2BZ5eHsmpMFHTj945biRSHcv2aJ9qaVzvopevqQ6QYBS8OcPAMChKXtnpvVrxVDWj5FchW&X-Amz-Signature=35fedde561debd3daf833f14d9c6becc2a17a53bb1efd3b656211e4e61528b71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
