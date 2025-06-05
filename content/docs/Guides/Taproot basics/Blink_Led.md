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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3Z6DGD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCX5Kf8esmVJRbCEUkhqPFNV0TJxUWmYxPYRbeLOhWb%2BwIgQ8%2FeMOyEUCypv6vi2rZDEI05yNMAslEnf3BorbGbzgoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDA8sQMLmKENk5ntHircA0XTu0%2F%2FQSFlFJHoSVIUspMHUhrYSo1kDyP8zf%2FkPy706cq5%2FjeTMo1AanXrNa02OtcTjplvc4yAwP8xMxs1ZvoB1JJwSsPY0HdsPFlog%2FEJK8bGmKrPc5mROWgiPQ7nNA7RZ%2Bgxj9%2FbraDXkccCZrFwtbyQUAHObpaKKaqSzeLe8YzkB4Urg6REliQaxKMOvEGmJPMcShbGJi1r%2FGskHfyqPxq%2FSRqy6Q%2BKhMdcjvpU9cEXDPh9W8Yr%2BhXHeDpaZQfFgHF0dyga9Zkj6KGaLweMozgqiGa%2FtJxMZTM8FJDygwZhSf7apAy57kFcaMMcGECe6e1hMlfxUCug%2FDZSNlWkwxl6%2BWuRAdU6baA81nL1aqtaZMaCSILiqgwnOHHZB3vKXuOwPhyasC0xqL%2Fqq58EkfSd496kbHqbpT8VaZFga7TFJnIsRBWzP7iylBVjoJfoDt5iG4FFP2p4WRSc28fOg2svMBDOhCK%2BO1abcfnpyZMw9AFOBCwL73YlrusK88T9oatP0QtnoyW5EY9TcRk6%2FyVxZH9OUkw78u9ktIVmztNS6UAvKk8VZVd3z6Sfu%2FTRP444vynMEcEi%2FyTtyrDkfA1WwJHzQaxH0ShqUF39D8wdNWBfiCaEzkorMJyFh8IGOqUB2PnWMyy74xQ%2F3SHn%2BosnGjDsLO%2BeYgUGH8kWjj20m0k3xJYoDjJjcb3P2pVu8PcJgfPtO1MG8%2FUjmPzpFVdnY%2B%2BjI9P0bKg1LSrYoREDHz8OLsKUVbOrEzkHZzvpmjOJcnKtgPLjA6pIbaLRd6I075t9%2BOWxEWAVEGCRZLX7XZMA0T4jVPfaWGtfp1Nzf3m66q5cPACBY5vCs8%2FxMC0kqLQwDSSn&X-Amz-Signature=7d50523ad53c9d12e12a592518cd134aec7cb477c95336af359b4047ce598291&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653I5LRBS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF0yGq1redaV9Mz52xZfNfb9Z6D09QjJ5RetcNwjOCgbAiB4ZEpjNZ%2BWkDbrBoUJrCLJLS4ldxvbx%2BaMJ5%2FLIcTNjir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM7h41cIs9QAJaWdJMKtwDq8VPGDf9qHDYbrZv2eQgaNBULT2L3begGfXv3VspSLNNYof13shQI0fYQpUweP9D1Goztr4YjxvSiIElMi5EdRz6N3x%2BfPY4OB7W7U%2FRDTK6LSCaXdOgntKOQQurLS0A%2BAunnzUnB1YZhBV6vxzf7M5bolINRawZilh81dE4yHsy%2F6QdyVz%2FhZ9QrFKmvPvJb32%2FGyg%2FHnxROY76qqbtkiotjc%2FY3nlFg12G%2FdPWAC73r7rg7A2enscMonPcwEaYv%2FNFsZFzZKmkFvX6YS%2B7ZXNih2UM6Cjpc0RBKuaUijQaSOD8UKDTfji3MQBesRBZa60X95%2BHnxKuw42oRJWdzEsCkkB%2F1nqRw1RoWOWKuWlWQ565W83jEviaASBRnlE4j3g%2BX%2BLi%2FsgUXlrBEUs2CV89nay7JAdDpwrLmJxxrBUbX%2FSwLWUM469PGGKQehqwmvz0xdchsM%2FnG4pKl8mG%2FSUIMcmHeUBBASjB9A0Zj9%2BuC4r0MTEZgfoanhfjR%2BwRm7IrxnxmyG25YaUNBzJoVIqeJNPdMzIbmYLQuH741PLT2q6G1mnOnuw05PAGFVR1cd0sbVf4xukqMdz4QzW8iqOBMkYwWrJI4z%2B3V7g%2F2XZFA1O8XUzcT67VImQwk4WHwgY6pgGRNbncYD6Eu5%2FmClctolqoRIN7xmjSutH0L%2B7OWhN0UoalQcif7tQaJtsprKP9gm0FY4HhNB4wImCFNq7q7LlN0QWE1WuqbklNgcAg3juQGDVonpZPz0CzBIvfdNoG04PloOzOnhjeGE19r5bCeZPV3VRCnA%2Bd2MO7VzWDmvSkqAbjjp9hLiWDfIw%2BoO7UhHkzrQpy%2Fk%2BClUFqOu%2BvK%2FIFV7BsOqNh&X-Amz-Signature=c04eff0a9ca9f4ae81b6fa9ab6b921e5516b910feba3183396083faad0a57d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
