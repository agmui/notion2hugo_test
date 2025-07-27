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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7L6I3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCHjM%2F2ySE8jN7lYjfAuyEyVXZZhHcVIPi40%2FHBWtiZHQIgRgfma7dq2lG5kWrwD9Yubr2p8cQtY273X%2BYGCivFy78q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGMQBtCnSj%2F7Hl7Z9ircA75Hhgus25EkQGJLtnD05rmADQxN7KQlgBTzsHQxlg3BcvQZekP%2B61Lt9iBAqFNIEyh5eBevpqQsPM45ZTGJb1XM21NbWmRIlHdIF1ytUu7ptmhu7aE6MQD%2FK4lyU378n3NpsvPwUwzP0n7EzJrq5pKZdy5OOGn%2B9tWxPCPdiYTja8OIgxjidKMFW7FHaa%2BxX1hUk0lOgiCN4pOcvgtm1wpLqhXqOtjZPrhO%2B0tuWPoPKnokl96fwyk0mB4X0A4%2FpKgJQHCIgb415vHUlaFmuAJdkLeoG1bjdkyOB3mWjLTAVu7wxOr28tyqAo%2B%2FkqH8igb4sT7xjyL0XnXI37%2BA5k%2FoJKCpYMTT9eYXV67n9RuNExCDVgqWH8ghScEOL64Cfapfb%2BknuTjJULy%2BKIIRJjPux5OGgeHzL5lo0vJm6Od2FygllkyfAHgBy9UI5NBfsWvoyV4eud0ZJrVWX1yH9zpsCw6UYgwutjKGXkE66ubQ4SHxQoBfW7o5L%2BRYPzJlnBs0pmfB%2F9in6LvDfA44tEcmT4E5uVVV1S60ARIx138H%2FizWo%2FtPSfKHPKSwF73lc0%2FFq7iZL9A9A9RYSGt0IpjRkl4BQZvACMzYxac6p6zpkAFkHN51UxhSELWSMIfcl8QGOqUB4ookFgbvD9sdKr1YhpZPJv%2Bb7nHPwV1%2F%2B4QDBQd5cFlGFlZky2RQGYnXbWVLa%2BrxZFxka4WzB4QfFNTqt8uO1NlwLDjcb0Pk1FxsE%2BHR3%2BmX4aIbGXAQkjN3qlnsS5PnVMhOfcwnCZ4WFF%2BrVS%2Fu%2BCYHq%2FyKn14rS2HrffoVl3IAoGVIV%2Fz8Khq04CrfFSemKwqAFPyjhIFeH5%2BXXof7de3rUhIp&X-Amz-Signature=114d2d1d74b5e1755f0071d20c62f63f2db142b56f7b5923019fbb537ee60a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNEWY25%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD0Of3UhTIb79NaXq2EB11g9byS2wBW08sHhEM7YqaqxwIgJ2MmeDL4l4vZ8U0WYoS3%2B8jOyur1GbRP3NvJ%2BRLJsQ0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCXrlCRwBJ0ABPl%2FayrcAz9OIdcO2lRPJNzGpXObK356E0cBhPaUJg4p80r%2BA5QLSvHQ4TIF5mRQWuFGTemxVh8oQcDw3HuyToofeCJK7RWMO5He7TCNv%2BfodusAiVrXeeeg7rJrRoUsHa%2FeumnZdA%2Fub5n0sgEojz2yq7FZaiYcJakwb%2FKlFCEUXoLghdUrWJKzISPhCafjvgzIMtEL6OdqCbQw%2BJcQz0bB6qA5gYSuySR8DKZDmYVvHqbx8zczgoNwpKqPy4xN7k4u%2B0fIHS7PtFZQQIPtyBg8qRLNMgWkb%2FZcF%2FE9S6%2F7Jh5eROuWGtBR1HPbM%2BvSSMBU2%2F0hiLVDq6BOijN%2F0vA%2FtybsQyQfrkf%2FPzMxFmXPro2XC4mZDBCITbqwuMpbrAFt%2FjQE%2F%2FrakDWIQPi8N3QQmimgdrowsrNYKELY94DNs%2B43Z2lPYeqzXJoVCpPHL1JAv1ti1D0Uvwtm0adb11eJCJpOEtG89Uh3HkJxSDqYIyVkHkOMjOYPEGYDcC9Hm%2FKmSFu%2BtDNEr1xpHIwhH4722xAeyi55MXHl8Dj9hvt8EXiC9eEgOfFPvLMGudzxyW3rCidsVa1CAVBdlY9I6BrMDlxIM3xHRoniq0%2BhHe6x9Pn65eywINE9Ll29nBF%2BMIYeMJL3mMQGOqUBlRKQoAHLa1KtV5KVtzF3tuYmgs2sVOMIPSgUyPu0hKdOk1z7uMXNCQl0PrteLc1cd6B7PokSjD2PxeEA85ipUwV7HGK58B6mRXbGL8Vtsn2SgamnuvWSuYX98OkYEmGS0DjmK1k03B74A7%2BTkyJe2DOxh2sdN9inQsHxagzwoiG%2B%2BiZW7TSM5gKbVpyFRBogC8tTKTu4g1WNpvRM%2Bfj%2BDb49QpK5&X-Amz-Signature=24bc22ca109b7e12c0057d197db220219951aa1793f2454c0e67c61b09d6c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
