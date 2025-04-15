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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONW44SR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqeKkXXkWWrmMWMXYfL6l%2FZ8YySiRz%2FETr1JSaySW0zAiEAsIEaMs1FqKf6%2Bjj23NjCW5M3Qr%2FHhWStEysxJ3WPT%2Fwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDSeDpQp6BKP2GVWdCrcA4IdcIjvXTIyQ00n%2BZ%2BecCQ9N8%2BHsjmTojzhJwZ77jmGM0jFNdrcauL6VvoDN0TXC4p1048vmyzKkx2oFtBEPN8Q2%2FFtn1HLQnVQ4AMij%2FcX9WtRRtK4YTsSjFmWWdS1AqvA8%2BQtOWyJk3yEQ3sajKFfKFGlrAOD0zxK628kIbfOmP6BcgGpXk9dNePUm%2FE1qyV4bnmd0tibO5uG8JUj8wGe6Sc9jTJbcv%2FXKfKMB7V%2BZpyTlaQRCc0M8EQDfjDkG1VSum%2Bp14iIOctKdoVsK4bgpaXfdYCdt%2FNYWdq0Y6cfIrVk4AK%2FwZQBMQ07u%2BqOXQP%2FFXjmCC6VIAirtHbDxE0fGpbOffPyhvu6CKsC801oYCQBQFtLQ%2BCvzFJwggfD%2FaUEHVvliYvTBAu%2BCbA5rSKwK6As2ouFrM0A6yRfLeNHEyg4QfyESjVeCz1J5e8dYG5UX%2FYOEckaF%2BwTDD7qhW87GZgTQtiflKtzZPxjptyDhAzge0Xq%2BzWAUDfbJG8M%2BnxBKVJZyuf3SOOwdT%2BP7jQtX5YSaIgheVE9a%2BIsmvc5ONDcCtUZGykwssi3npwgKGlvFPXnrjHZomdLtrQd%2BAKmU72YKTub8zt9IVWZF3I2IYDc19KAHtM9Cg34MMG1%2BL8GOqUBMB24rRO%2F%2FLlhPZ%2Fo51Hr9qOR%2BGLdEtlFmaIm%2B3oYKay24R%2BmRyhqnzmKRxziDwIhnuaC60%2FB9651sJDV4us81sBYBF447e3xvuMkEScURr7pFZLe2NbijFn3fzxFkypynmg9jsYKVsaLqVJtZkQbZt7PUfUsv1PZuzW6w32zMycweGQiOfpX4Qlkz83BYXoN09JdswwMaMeW%2FDsBQik9dJweMeON&X-Amz-Signature=860ec950963a6e9ccb522f0e69d588e74168ce70ea2c9344dfbde571660cc8be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPILDHUU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZsWskxa6YD4Ad6JhxA8qN5SSoTPMQp1M3JkXAcYZDQAiBJAXTNE5sDVZhW5qDFMzUyHxXhoWbjLt%2BnclXOGY8OYyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMEXfqrlBwxv82WyYpKtwDv9CV2yXehonrditxjRXeZeE1A%2B0wXXDjQemNbUnW9mu63YfjohxLZRqyquV9dLHhwhaXXBIytA9eSnOBsyAXGwJYRatxN4bsp%2FguP0hrooe87q7ssQyyZarNUnS1NgBdGliZNlzt24QLzdj0KAhnN01NmDAFaC1rUhCuM4L%2Bs%2FPTlIYvPaH3yG8c6R7H4vfYStNIF%2BeC%2FZ%2B%2FRTKvXOZA6k%2F%2BU3xObQjQ8ykLy%2FCUslhDK2Xz3LJIFWmlEk3MKcdxZMry6%2Bq1KZRiIBeTNOntkG9KzBfyO26lDwGbRADz8nDnbxjCzviBQqHZ9197tBRaP%2F%2F0EWXqG%2FroaCSO%2Bwd7aGf9vHs6cU2ewU9VD0c2Lcv%2Fqc3xMZj6BhuhaUTk6%2FrUES%2B69wY260DufHvllg2%2FvlpGpjMRRxO9067UvJ47dhXJIKDfpmpUKQdY6wJMa6xZMBm%2BBvVJ6LseD7RsXkgpQFHCwLpd7fcmCeQO%2B1OrAo%2BNpJy%2BRtbx12nPXCnZep92LFm5pEUOs8CIcGNbxpX9ZgVJ60WejJpIjtoWXi9NIVIaj0TJnGyGFQiico0PhlKC7gTenJmiXkfM9F%2BEE2ZyU29zdoY4CKTTybzhufrDi8IqsziL0EC5CmohVl4w%2BLX4vwY6pgFJVYrcngazhKEGg3VfFZSFMnhHuvUxIeFTbnjZVcqU8iI98MCgj4%2B1nhpoNOZw%2FjYeLOpL4mGYwtYfEoLZ7qz5dKkzpZVXbpAlMIq3yACHoqMAe12v5YM16qbY2dnglPnq33g2AkbDfymjET5Ybj6F4XNDH8wdppy1%2FtREWh0R4%2B9yH0pTKBN3YzUbT%2FZkcjTCHW0SCQGvLDsZStolramUon6hATQI&X-Amz-Signature=23184570204189e9a2277f8361f35dc484166fbcc5c58b6fcc6df51ae3a34d03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
