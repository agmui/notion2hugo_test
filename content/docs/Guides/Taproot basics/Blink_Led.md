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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLYYUSN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKEkv%2FaDjf9mByhMFwNoBRrR86BiVtQQ8NKSTF%2F4XFsAiEAvDJkbALBO7lmRhUt6GZ8LXHwUSIIIOS4z6f3IqAKmekqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyhSRGjxGawTH3HfCrcAwkQVXbv7mxm75qVL3H%2BULGtDKJTFpQQz2dVIpJ3mPU5VK3fsdRP3NGKZMZZWkok%2BRiPJUaJaga%2FGy9GT9LCyE2%2F9NSq6vPWUsFufHzDZbyKJkohdWZnpFGQnsNqua7xfjgbXYMmNHiKmcnyhS9NEeKxtfhqr02xk1X95HNvpZ6n0XPpfWfstq69mK7mglin61S%2FcGnvb2esr0ZUFasDX4VGEYu6NvEtrsPRhO0kvBrPW8mnECQvL1KQousCph0MVDt60ZWy5BNlRx5C4dq3Fe8OzvfEJmxyNmxTDthXfhF443gUs1siYWc%2BSz270AJ9PKEF%2FETweTizS7OA9kVBckh8Sza5hM6%2F4WepFXK9rC4fTW1zpVHHXwESGuvufEOeVgHbNa4pjE0X1cXPUm%2FL4%2BMxtV4BhrnsmK41bjohOaF4s%2Buc3Ch0w89dR5uGU%2FQzmWQl9VPPJgTCPw591hrpCTpLAvF1bBDchCnKWrWkuSdA7gzvybHyq13pc%2BZ084i6sVSUb%2F92iB5CSG%2BnyDz2oLZo1SX01zNgDDsAxgZzdJGyr1nBf1sr4aebwcSY%2B6kkj9BdWUGlGJIY%2BYbDNPxiCyvzsrIrS6rViQvS90a9DkeA%2FqiqxMXtJSUVKHLjMLLBrb0GOqUBvem7jcK29S5Pg6Eed18b0Hd7lR6SLEm%2FGqTzWtFn50hCieTT06u69mweF5CpRCaC2hh34%2FKHoirUwkxW9jMhdtvX%2FpkWbBvn72XO0vvoLHJ0VO7GFERl5u2lXPH0cviAIc0CLi2MZGPXh%2FnlIw4%2F2okkTl6TFp3Et2rQOLX2iQ5RVPb4g0YiEXdFe0mX7lxVdEL6nahAZGs%2F8Sdfzzf1hxylPx69&X-Amz-Signature=3acfe16fdddd0ea4f46fd859cb298b4060fb5e824cbd55f0247b85011e198a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZGD73E%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhROg3wkEMfRAa6oyyIcJH5EDSdN2BiA%2BqzUzzFzrR9AiEA2qS7UPQ7gtVIrylWwlgjnswhMQnqozQ3AkVjxE9VKBMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsmlCsWteDoHJDV0ircA2024O8aeo1Z77SrdMA%2FmCAz4x%2BSvJ0IipLhhq8i6KhdWWcDV8mnLjrZhc7eneqNVYuuy7kZKTdKczA6IDljDvg%2Bcw0mWmaoEa1GKVpFFfJXXrq4R2TeE640TqiHmFxgog0dhGTRYivCyi%2B3Yb34nYnQTzsn6aMiyQdUHTx0dRkV%2BSv28QmJaJWQ%2FCTJrEyNsA1mXJFWtawGXOXoohrEK5nXof1EKoR0cbbZSQmviVMfHdniAugiVdTRZcDLyTpZxCEnQPxTCD%2B5d13Oudf4JbkR2Yr6%2BV7qK7wTceE3c4jQWmWzwAPz20YDpGNpTRSAuYEXQuzVeUannFlRSGGkvUvA7odIF%2BN0l5ypnyIUf3dJCX32GxklvhpHhCQP%2FcGMFJ%2BHDH%2B1OaJS%2F2cnjMcpH%2FupyGdqxG%2Fj%2FMQ2z%2FCSBtSiwFYOWTHkzfsVw3vgV%2FCZArdCJ10XeglSSdl3CrsS2jnM8g2GLRHQX4BDgM0ljEZ%2FBoElTEirHWEy5xSOzQgoXfbHqzwB8dA6MywjAIxaNrK0dvLKF44%2Bk3H6ZFyajEdX8hH4mzpgDRAwrHSgNduJY0d5YpF%2FT3bkvzqCeVsBxIlTMLgQyEHBDcpOYZOl7keAI4IFeZyhgeZbl0s%2FMNfBrb0GOqUBo5ATwuj9i1A6rdo5NJibFUW28JZhTw88ra4jsc7udPaS1doJEFVnHJ5P56RZQwKgdwKG5WAVizINJ6YCQas3ApHMMfK1RUIGzTRlRKfv9I90g3iExhT089XRTAcYO8fIt7BW8hFKopB1pFeVwOHYJmZxYegBMPmH049DXxwRcCxMFaXo4TZ7jTZ5GFVF5uNquWdZ%2F5MNKBlQ1N4Uaw4rXGYAn4CR&X-Amz-Signature=d6165a143d4311aff8b56307323b522a9729a466193839ea474feeb7725788a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
