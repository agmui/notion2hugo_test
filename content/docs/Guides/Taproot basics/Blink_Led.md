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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22E2NOT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDewB06Jps%2FSRLcKsvAcJznY7h%2BEDCUCxpneCvbBvxCrQIgIvACRFoG4Qhu0dA9v0lbtkFaXqWbE7jlioFMJOhyxqIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiF8N40mQO%2FkMo0bircA9LxNX7HZeQu2XKOcU28pGL%2B6BxFCfvX%2BfmrbipVMQoGXgAvwimY50C%2Fvk4B7SyxZd02CqFLNC%2BQMJRUtq0SaFIZ8pAe9Hczer4c1xsLh1G7P34toVFnFtFYFtz%2Bm82GXNdyUZjjChOXsmfZSFWFq%2Buwlbqd1hUoRJESBLS84tBp%2BqTCUUFQkc6z4faeYgqItIJG%2Fqb3ZppK7TBA9ZGh9o0HygCxmQEr9jKYV9kll1ponC17mRx225fFU1ALDtapNsxVcE%2Fa2IIj3jP04JmWMUTBXZBLQuJnr6UwQEY3oxkF%2FhNvw%2BveO%2B17aaYI04igTQlXDbnZdIjbEHGomsiEYbZjwc0%2BZLarSJFgS6tzl70ORm6FL8Qbd1x0Emx1MeUMAlOs4%2B56jZ5OTVaV3y%2FYmeYA2THLVJmrqh%2F7GTg0yOyWSNO9T1ZkMbnamON2AA1Z11vzjQpGdQTuPQy0%2BYzw5z9N5DC8XJM6MmJjiPFMa1%2BZHOyYXKS%2BRzUrsvCKHwfC1yG%2BGC5f5a9mFqebnWDrarzf6YDTf4cnhkJi8viQ8TfgLD5hEjmNdjcJGuhFUbaONFm6Dnr9WAHMy0p9ZeW4xQb83qyxjiMizd8VSkM84XONSkBWVjoNjkPD2rXFMM%2FY778GOqUBMFezgBvBVIPiXM6JbYQBshzA1BVcSn%2BXlZ1yVJ5bmistgrpMco4EewLLbGFhxy5f8q3%2BAYhJmmVnVVieuHvZkdDrnLlFOkDyDjFTgHG%2BEQmZDewpF7KVOFAk7jtxqH%2Bh1E2t3SkiI2gQOAa65wjr0DQFgj1ku7bOVfeK0EOp19ODB3hxbpzB6y94TyyvwTcVSMZLeEJA9zzPcs2jq0wB8QOZ%2F%2Fer&X-Amz-Signature=21d17b3536f521d53e78e8d69b64fc628aa4f9d022de42c0f5c500dde4fbb513&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGE6LDX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCpbLlUwpw6oSZ%2F2o8ovBwAyB3F%2BLUX0%2Bej23tx0XwKCgIgRidLyy9Uc%2B7ta1iUQZoH99LzIZO5y9zruIkLvXpS7aYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwPFVDwnLlxOGeDuCrcA8JH4KSTjeP9kVisqa4oPfkQ0q1yIU0xkFcquvCCJcu9WRCnP5rpP%2BMjrTLYTFeJyuyaZEUcnQYkH83wa3rr6lY6Wn1xW4dzVASUMbDb1%2BOCVaik%2BOYqVBpHbSb%2Bfo5ZUGLUEByk1BOiIGUL3cZeFf%2BKgFps%2FiFvBDifRv4xP5UVq8MipNZDlSfblJNCoIUAekt45EskVQNBekCSE6uSuyARI9A2qzH60DfowPxe2irUdKNz7jldLoHtKQDsTq5ioEN0K5PfyyDN5DhQpOZhpX8fFMBml5CD7zjcnbz8B2qt2%2BBq8BlufOpxVIebip9lPZYOAH0qSHU9SRuGZKh0OgX05iN3xqw5S2fhWOlMq5q1PfdcHdgJCWccTycgRciU%2BrVClgOv2EdpN3Vsdf1Zw%2FRogNRB0Ockxo3oh7rwcukHIHsVzg2Z1SU6elU0Zx8NbQxCFhkABHPOaF%2FmN7hX%2BI%2FzrYxo8zrcKMr8JWmU6Q%2FA2FGl%2Fsese7tsXcSHU1UvIWBOblWKawyI0FuUPEwJm4PVd93bhkR9A5ZL%2BSumaIFnaNDaUcuW0%2FucSZnmrAoj3yEQxW4513z827XZA8%2BGkcVubUaqyZd%2BPw5fYN4LAbgXPJyDh77EyfxHWtbdMN3g778GOqUBNnzzHhhdxqAxJyfoZd098T4DYkrh5nk5r7icVKYR6HpT6zpt43cV5gp7Ykjek146ecDIZNQVUHwIlXcWkm2%2FBOUg13bHeouRLP7pxMCijZfc%2BM%2BtjCDscmj232UL546nrBAQrQNcdkPoFwtP5hiV66QV%2BTtzgtP2on4jhyuoAam3YDRBb2IPPoYOq9odNk4AUcCErnlEuoLlbr2cW6sD0LpS%2F3RA&X-Amz-Signature=7e2d757c3b280e92d1eb83119e82bee55c4233450b33e06ec0c713de75a2aa34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
