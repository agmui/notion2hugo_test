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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XGSXPA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDwjJjP4YQ5861TaFE3nM0zGACw5Hl5jyq9CvyEL1w7PAIgcsFpC8Aj35cMSHyw%2B4lEort3gkKkTV8LbRBWviTygdMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNh8HqcFup48lppwpircAwvyVG%2BOMjZLzBXA2%2Bv%2FJXOAm%2FMnRhsIgolCmtejgGg88bZSXpZ5uXN%2F0fij7j%2FIOd%2BePJr%2FGDA%2FDIjp3a3F6mPBtDM5MEGJcP13FN74H7nLK9OUBcwusa5BMxzynaE5ixrPKtG6XT4QDssIQR26VqmhHozkcNxF9DD6bQ5z1Dya4QZP8dCc9NJNKvSfBQzyXtVq4jonIoQfHn9EPTT%2B0DLLafrILCV6ngcNfUPpTd05chbTqW%2BOEoLtQYRDsmKPKBqR5nU9NSDoi5GvmJltMKDSOk47uq%2F%2FDOoem8L1qi5gXrrDPAANvCXyi2HFs99xeLHMyEm4Co%2BIXglh7akd9LH6EGK8FKnkD3En%2FpxMAFpi3dPA6p3O%2FAGBn3RIXUpm2JcoIjdhIF7QAeKJ%2BwqXDPh4NBAEBcjriAIQFItscAbolS%2Byxzp8Eg7bH%2F89Y5VxXTNX%2B0lf4D9odB2p3W5NcmvnH%2FWWWrUf12Vh3ioa7TVplHv%2BFAHatsDS%2FyfzPhBspWfbAkEq73hK%2B%2ByeQ2XgFe6%2Fa8ZenTaUZ4XwtB3wFuQHGK57hA4LNP4YVDIs0gHk5tg97QfmsUsxmrn5R8HSzVWebkV03xMF4G2qogWyTdYQLVMjxp83bkEU4B9jMMG%2F6sMGOqUB5wuEDPoyFzjvpc0Nt8yCkXFdR1zmLPNXpNS427mkD%2FetbGf%2B6VI5ERfkkrGas5PawJIUsWbIbq%2FYTPTJ9DwrzIXhHyy0%2F7AgKUMfBoyZSpNDmJRcpUOk8h6S3f5fmSsZrIz79x2MjHuihTwPsjsHlhg5w1TySX6g%2F5SHeLBZ33cRUw7LzHITQ5NAfAjhPWGcmCP7XwW%2BiZ%2BquoFTZRXyfOFkowN5&X-Amz-Signature=e0a9190183818ecbff1a66639624335f4c9544706bfc652790b7de8a5f5d4436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7FOM22S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDZppkya3USyDljIs%2Fjcz9Me2XPxfM%2F6yr%2B9jcRYkPm4AiAoVqNWFPrlh6a29%2FOaVvx8m16sYx3DKbpm9oGFY2IjMyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnFOV4JZzm%2FA8hWl4KtwDzutVoJbWWZq1SHwTCYPACKpSkDb%2FnxhBKONr7VWHjz7JMUN27zS6Bx%2BsO5qtgrsS45yVubVynm1bqibTjIfBcsPrs%2BTVeYoBpvGS9eptdz5s2jUQwu55yFwaquGWRq6kRBiuTc0tg7LrixXHXAioVjrh3P5haKVoKWUG3k8raSHs4%2BwH3SyG4Wy4Lwq4M5c%2FHv5cvP8CypLE70rI1cfr%2FcEVZNtFllKdFy757dXYZLwumWXwTwahZvihn0R53K%2BjVHjqTvlKnFaM7NEYF%2BZWU3JXU8x3QJxbtt0JrutSWt6RU4Eqgj0adyj7kkMbRwNqcQI0AwJlt2oV8e%2BP2%2BaugPx2ReYdiN%2Bo13M0MPykzsuZj3H3mok%2Fj12nFc8ZXxI4YkyRRb%2BtgqbtqxgRMbNYXSnTGUF3%2FmVfH4vdSWeHz%2BjttgcTAa9t7Ou8gTTZJ3xIxKikh77%2BFX%2BYDhI2A7XafgUfLhRiK1sftG2N%2BTeU7vH2VQG2rxC6yPcFrrBMyV6OTi0UnvAxlv7cXDrEsmMHfQW2FB%2B6Rp27Y%2F4O54UyjOl13HPt1P8ozmc9sr5CPWOevkLaxni0iGcm01k02ZdpxYy8Vgz8mZ%2FgADvVrr22Gpq3NyGIvJ7n7Qm3%2BaMw%2F77qwwY6pgE2c%2Bvi80xxHyeuyRsyFO%2BDF67cD0ccerCLu0A1dKFyqmvQSIBKyXHfgvZE%2FY2BUo0G%2FP0LrUrmBhFoRXrCfwOv8vZO3jYfj8cCh7Nx4Tvg3mP55qSH77sSQS3gf%2F6hmRrb%2Bpbj1Gw97iVZ36y9EGI3h5eRQ%2FeBm4m4bTQfjio%2BoshqXPwn2vMJkbMbXATIrLAf4Qh1oiy7rsiHwGUlzoj4G0QppMEp&X-Amz-Signature=3702acefc39bc9ce8e7a0ea037c7f0957532bb67520bc2d35be7b9048bc454aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
