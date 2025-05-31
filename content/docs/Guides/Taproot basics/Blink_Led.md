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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B227BB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNn91u2C7UIKGlr9hQSf7yHB0hy6lbYHjUeTnOqaGOcgIgZIN9hOPhNPyEEF51H%2FXWYrBUpuXintNYN2wZPwPkd5kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXsBSNicPe%2BXhlx1yrcAxndYBQ8hd58tsZy4aMy7XRC8MiUpZuQiD5WN2eO3t9uV2c3Rum3zRPsziKghJxxq2DSVTav7rCAFWd8U%2BQeEbH0ZiWQ%2FMsAqHpxTfkyhm2WNeLzn%2BWtDqgSoiZwPUqjPED8vfacV34ivqnOlx0vH%2BsdP1vpSPLIqrsATpiLNoZzdzG%2FdQ3Me9KyNVHyIyztVo70yRZ%2FymuauKlE7xZdUA0zSgq4GcsQ%2BGz5ZEAMRlsYXNbztSTEMVUn6NnhAu7IpZ0ojtZRYSjmkMyNlgStzyg7DrIYqGoz3kb5ZYSvjeWnPJZEXYbZshfY700z26Y7iF5m9Bm2bofJMEnqA7qF0zMufHq3w7P8eG%2FtdLzR1FyDCSSpqnd7WB2M9YnLzByyHTcGgDcphW%2BVP0ywtXA05sp%2BuWxmkUpUFeFiN%2FxO6MXnRpJb6ZGIRAXlaKtfVgGFGq0FseigM5PpmiErynkEJZHTmp8y4vNZhJ5xutqIybEdCZPyc8leAHFpnMyq7VsSO16awnPQPOBqhSi4LBZOdi3o4KtqKPO4gudUDCvNieWRy4QKHgV%2FXrSaTe%2FHpbiGEVc9mhmSvbU6BVAMJ%2BB09zVOo9iPKX9%2F1Vn6TYIZd0InaMR3kPVqVo%2FByNqwMJG868EGOqUB%2Fuz6%2FUGu5EVUBqs2QCGA%2FMbWX9sEAgUV0t0%2FU4dVKJEbBZuV59OtLe2k9KGaHwkQklWiYSam7g%2Fd%2BZ%2FXW47AwICTKd4NCzjDgS190itIQpyvkgmPpthUTjsshwwPiNbbKO84KdEF0uiRgFW%2FkxqnYacU9LzZaDtLH2keRA66RwMPkflrR1voSlRws%2FVhSHaWb7%2B41itzYOHbnKu%2BjuD8149mokAL&X-Amz-Signature=5f53dbad5fceca184e035ca5fdb0ce196d8bcf973f0744fae9605602e97d98d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4QSWNG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBObTWAW9LEc%2BFc%2FHjriZIozi7MPoNn64SYoft4%2FPPdZAiAY04kqzUxnJwI4%2B%2FxqECZ638tkSKanBSESrKS0aZU0dSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVovd98nABHP0DOw%2BKtwDJVKY%2BgSqjrp4bEkXAKDUi7uTQVQuFlCNbm4JkQB6VX4nxVCgya5qYuG0%2FA0Lqyec5JDKXCacvok3%2FCGqNZmpKszzHox2cn3ukDcoy0HF6WL5DNLMJtUGWr268WbqzO1o9OGMFFky0MBitT6%2FcO8uQkVIOZZ0YTWboegIzClTOqstvYohLxJZvsuvW%2BLX8MAYX18B3wxCIio%2FCa8JZwzyyR0ZJvtnqdQ0z4TQTuk83OKfFHK4Dmzngv2m5qk8iecQ3IyTuxOp2odvlqZeQlUXAl9I%2FXg97KOOvKGX%2Bwj8uAi5L30lNmwQscDj5ieYUxj7psNKAH%2BrZqP2gAdGA%2BKD5rV5xH5KoWJXJb9pJWe3wpndQEchRWvI9IBYTAP8t8hWdUm1LSAsHQwH4ZudH4Cp3MQZx920laajgRF%2BWYv5l43o2zBONHC7cOAypLg5ZC91KwNBfgQ43i2%2FrSvLHxetiDNdF%2Fuo1oHbB04b9PIRepu5914Abmk4iGzen19d%2FRwVKuRHaXB4f9XuxRNauk29w9TV%2B1HXa7KhlsLsFn%2BTh52Jgt0rX8qbHIWn%2FunITOMyrj7xgq1vLRssYmlcW8FA9F0DQgZFWLrbjOWZgXdtdwdV2L7UQ9xs8j5N04wwgYTrwQY6pgFBv1L5rz9yH38TwRUIMmDWq33Wz5B2wbDcrVeuN2XX42zHQFEBt8BUjFnkO3Izu3czQMO5hpnNK8gRztK3tGgUbQr5FIJiL2I8XscSnSwWxD2WLUDwS2C5VEWcnEyUBn%2FPXrALSRTPBhNTSvkcNRI53JrfkEsvZsb3iD5Wrt2diPJYyI%2FMvk2Lud1QYt5h7kdFdBOGOh3mBIPBfQIffCciTU055iQa&X-Amz-Signature=7912b9246d35a02fbf56400f79520641314ae11e37c83868f09a12befbf89f38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
