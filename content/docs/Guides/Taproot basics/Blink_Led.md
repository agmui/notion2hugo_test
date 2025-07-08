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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIB3DDNW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiht1VeK0%2BgFHdIOrkB3fiyClCGJ%2F6KhIpCyK%2FL73sVAiAgtsBz2WBPlyDQwsll6yHfpQXEMXcImfY%2BUOUnNpbRkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKkGn0NTOujD5EHAKtwD4a1BHu2vwdVavBuCooLbSxRBrteouOSuEyGTHTMQoXidGcj3O%2BzCxRqrlN0QFm%2BEW%2BiZURv81ntrjmM3DLaKWwwZ%2FVJiN9F%2Fluma8pmInuIpoDscRHbSM%2FwYddQB5bmXXEWQxIwS%2Bi1Tz5txIZ86AWmG5cuICL5GRelFrVRWoy2FxjMmI1S%2B66BoDBQbcPhRqvku4hrU6dpQ0G8QF4YaiH%2BiZNDDr76p2vFI7vrrPKZ9ARmztdfvr%2FOqo8B77%2BDnQvQg8pJ4OAxD2TuoV5lIRG%2FkN%2BnzdnPe8bDQKQ1PNS3bJb2sGFn6BdrX5Zu7vv9%2B4o1JrljIt0g6AYIUQArB%2FKCpRhbZs9IDTErY6G8RbXe%2BzATkLLSuxqOZkD6ZsoHZ%2Fl2LJpQ7j%2FX37UzrZWmHxWzL9IU1xMe2RzNygiQOdQs%2B9FwErNznlfdgKdJ%2B%2BnrkLMkD%2BZIUBq15Hb1G0xohqGVY%2BaNwA6f67I0PUgxLFcIuIZv0Su6q46Ip2h%2BCJC%2F7b%2BIkaQE9duyY2KVrDjljLwCLsAjlOH6eAeWPFjfPBOv3JH0xl1TVFEeBeAx1wvXkwpysO7d5%2F6Hi9varYrfYdjZPDLr66UlZ4KHOFOKFXJUpwH2mLWyr2TnYErQw98ezwwY6pgHYywTj6x7JJ6cJU7uYcChnco5ZSqS%2FH%2BDzyqiSxcqbpR7b%2F8Pjp6xl%2FlpDX%2FgsJ1It8D3GlisXiD291NJYSxN2XETevF1N7C%2B95snwCk3o%2FtmVc0twgigkN7xsyfC17FZTiARcXW9syY2QdV1Jap788XiJ%2F5WQsH15tH9XiueXaTC4TPPUfEmY9%2BtGX7mHZCD2TE3lvXdNh6oUZXbxjZ4vGhExZmW0&X-Amz-Signature=cea422a5316e54c765267cd1a46c7342ac4b35c4f34059219e006b1fb369e9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWNOFE3W%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDdUfOYdo%2F1nqJa6e1i%2ByuCZ4BKgyPGozyY47ul5F4EuAh8NF%2FLwsiMv7iUoMNlgt7H8QACoGUBEhhnqtDkjX4ZhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNaX8RQhnnf3N110Eq3ANKzNwVYJW1OVKr07hJLq8%2B3tFiWpuicUpmDp0B2Iwy9DdCuLniKSncq%2BYY3pGP%2BDwFXASOtiOAjx0NvO1UfDfEc9%2FklwFKlmjGmCm1Bz0IKT4khYc0P53izTaI1zpvd4uS%2F2I5nbO5NBe%2B1sW3c0It%2Fl5Ia%2FpNisthA3REQRpjXAJgRU6YxXef3p3TCua2x86j%2BSdbWy%2FMqigWdVl93fXfFMEZpHEae8qZGgAgqscU896tp6Zp1qF%2Fr36iH523OGK9yWBT0JJa0pqPAvUM6FPzksHB44C1N3Z1Jxs1%2FzH00KPSc%2Fl6zT%2B%2FL912rN4mJ2qlq1neqB8%2BMAZc%2FWWZ2E8eRSudABrlPLzOOmh26wbIRaxRMO5zKs6%2F3izE4WeMQnAoJVtTRlyhbdWYdxCJzW9vWlLEunVy%2BC5V1%2BNLT3DAPXkAtgi1j5caaA5fD67xCsy2IiBMswEL2GSgAZQSpO3MJ9%2BoVnQsgVG1A7Rg2gP295zXyaeJ1CsCzOmfPAazAVmw3VF%2FBXTlGc44zWAMkQceT48xVSXG5TbraiGDLcmaIDonFpJa6ADlySa6%2BLMAZU62iw0amm5GodaYolzzVKp3BqZrGJDvyBjZOEYOddtgGT7F9Y5N4%2FKV%2F3Q%2FDTCSyLPDBjqnAapA37yTtOh9bvVqswZTQdhxrYi%2B%2B9i%2BMXmLmD7KOvgFZtcMfZ1%2FFpOExgf99yzn75R5WOCyTam%2FAUdadREY6bQIuG%2BcgkJVEcDBke8vbQOjls2FcML7bIJ9vQUXFkFij295e5HnoOW7XwypFSGU%2F7YqZms%2FYNLSYwRDsbBmIPjsd%2BZRh2UYzF0wKuqQ%2BR%2FHTukK808zz3xEEsqZJxHh%2BCYmnkTcBCHA&X-Amz-Signature=83113f5d47e3dc7d460edb023f67d6698f765785ece3c0408635996364a38b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
