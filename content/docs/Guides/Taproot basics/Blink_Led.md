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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMVYQGC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCLYsuaCwW%2FtMnEfLYoqxQ%2BgA0DblE%2FdyjXS029mgEXkwIhAOYiEHOuzuWq4dEIHqeZaGo0rZoCX%2Faikp5PEdQoKaEJKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwRwKOC0El42EOOzoq3AM9bY9DMf5Lxo6FAC53Kt%2Fx5tRGEXKNBVyc8DgxW8nDd7%2F12rw7DY8%2FrNf0v4NsJCRRuSDa%2BoH%2F95Mk31s6LLpBxyi4zKKIQKympJbyDqlodWnKIVxSqF9rz6N4rwBbZPud9VqcZIqIquM%2FDevs%2FjkLw5HA3PAU6QPFPsZ2JzD4KbVXutSf2BguLUx8Pcgka0lRLP9gMxCNNKhEwHVlre3oqgouF7MwSUqu9AyfZXSs%2FPjnyx4vEFMc0RU3%2Ftm%2B2XygiVE5rlvd4PEQN3nVZPZFCDZsDUnKokd3HQzH3Oqes%2Bk3yZCjXxq8e2a%2FdlwnIwK5KoNsKLnLQs9XbuvdaHGICc7yIn9GOWCcHm8zhk3rhnDboTwq2FNeTv9iIEhdORcRZsl56eQ9%2Bblprdr1U5FgzPHMz%2BytGk%2BQUqewUpdq%2BmYjnqD%2Bb%2B5SqDG2yYPCNDs183EHbeBwNr0%2BM7%2BfbeWGtJh2fUr%2F5yeLAhZV%2F%2FXbSCKhS9K%2BGjohMiu4h6OZKDZNwn47rkXmV2F23QTIsqjvvh8n5tWfYZ6m9vejRj2G%2BwbEZPf2GtpysaVlTvIbYQix%2B%2Fg3Av1zmZ7NixrGYomtg9MD8IfIkODH9RBYeQalvp8cZWKQ55eM2pjwyDDmyNPABjqkAUc6%2B9e9lneExWBeqxC7reBX8eH6HOtDIlw%2B9pTyTZokUFGOWR4E2KHll9EFFLkTeSv5VELOcs4KHu8pf7SnSJpOfWfkiCHMgJzlWdCuaJemUupu1X%2BYAqVNHiLNStykxIkloUZXRPlFZ0IevjjPlOfZet3hi2jxK40TsnPWC0k%2FI%2BfwQRQzoStv8RqzE3Ma%2F7xlWoK2c7d3IIqH8ZOjiyqfndZi&X-Amz-Signature=b91588c8bce21884eeaa0babd2c3cfde68b99267894e9e4676c2bd8813756a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466525KBTLH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHruleM3Xhg61YWc6nhabNX6KdkmdGbSUv15sKbaIpf0AiEAo8trEufCisygw4RkWCQc2nEeNStjwvs6IcEi8bSnIOMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxZ%2FEFe5YD21G149yrcAxixR3Cgubsrbx5jXBcFQce1wAV3IDzAkzsE%2FPvMg1pFyD%2F2hy3o7MdOcPaKYL6oWI6cmoEqUke9LYmvPlyMRvQb5BJHIb%2BOeUXHDHrnCEMF47hYedhyl6QPq4vqWtIuMaLd1Td7axEmW9f2h9iO8HfTeFM%2BSwxrj7yT9IoWu4XUWM72KuwVpYFjcrd5oeUMIpMCP53UcSjNYs12BtcaEvlZM5WMtzjfRzM7xmV9EUyGOTgzcmBzA64kd5a2Mqv%2BHGy2AP%2B5WmWDMc%2FmZZIhrMGuy4pdp%2BMI1fs07eeRk6jTFd0Yni%2Fkplo2Ha0KJwaj2aPhcHWtatXaGGcR1jX3c0OhC5Z%2Btwzf6B8%2FMpRPEdwQZY8VkLrlyNaTIzwZ4EYclMb9og0gfdtvFlHDgbyT98Gge2jgPGGGVVFhMDHSkoIJ4TVsCBDowL3BPX6f%2FCkQKY6oQ3Ivg5e3tIJzsiA6AuKOrO7UOH0VN%2Bn34ObtYUQfnVXvLaGOX%2BuWLYtHpSuTYeNuz444huhwtSNoIIEP5iBR%2BNhaLATj5pfTdOhbXpQGpin7jE8xKy8hMLS1Gd0fKSHDfrQKjeDBFfevPRYfx3xX%2BWFENfZ%2F80xPuWuENEmQkgOZoWp6fEnQ%2FO9nMMbJ08AGOqUB4pYqWsT%2FCNQo0WLuAaV1%2BCTRlCa4LQbLhT8fOhObA%2F%2BvSb03wTWlH84TI7FNlPui5U7SQx3%2BmoSaAAjkMJocV%2BU0rNzOE%2FPg%2B4QKswsXm8621A39PHrdSJMywjwkFJ88Iv82CzcFKjQ2MXaWck84YFjxRJzW4wSjPG9tzN3jxslPvxettkafoSNtjMhnqeQqRZLn3jRzB2A7NXqZJ5UCqivxvGY2&X-Amz-Signature=c51e0a50898429159bf7cf1b6f02e266953b073621c2f61c18777ffbd9298a22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
