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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPXCJB7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDjxzlaPVMXBVLOxgnq9RQpKDoX7EgfSGxP%2Bhy6wnONxQIgeb9qY2LpyDbEIZgpqUrS1fVIH9kpm8Qa9SFhnlJ5tHoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOymokLsoKybec5qaCrcA1VSB8HAdOZouLefVWal%2Bi0JKqYAzTJ9YvKC2XzxoKH6omuImZBG8Sj6JlpQajcUjCfmUgi%2BHX7pX2XBwhDiHrdL5%2BJJb%2Fn2%2BPTFuXCa1Rw%2BuxU1YSjY0R4L4XYEQWiXOvKJ58cqD3MD6Vjp8CfiwqYZOI3aKhGymN3dHQpd%2FszC6N%2FM1DA2LO%2BiRHNlZ7a7wj%2BcDKtfUTSI49k4j5JXXyIsZMF7%2BFB%2F%2BotvUq5cc3B4n4K3MNUuXUwl6xqRYa0dVxyM6bFO1zB8Nt7ixI%2BhJAzlqtqUyGVsotmibVUO%2Bh732o%2BJiPWcf%2FSiP63AUVu3rzUJZ1dugu5FOLYwIzMiXL1d8QeI55UUHEw2xKWZ9GEdOyGinlKD1SEPtK8cDxp9tQRuY9WmEgIkvzEWz0d%2FK6l9Vi4pRqJ%2Fd3Qgz2ihbJWEbItV%2BD%2FXKRpCtQp7gunu%2FkEmU%2BAZDW3vYsVGPRNlqbnqkSFxHg0zXKo1Al2wK6jvmxE8GidfOh75jG0686jvdHd1sC%2Be9bFCEVaxC8TBIWeRwM1dSR6iu%2FQfx8ZE9ybD025XP0OMEABNSyRZzMNFZ08jeAn4LwBVc0m3sCfeEO3OeWue7d5LoMdqm7qQupjdtYDxIA6fydo5OBJtMOqzsb4GOqUB5FL1LexnWYN97jTtvy6HsgJBmZY5ROfTxYdrupLiuJiN%2BL2YtTyHrmp74gnrANPAGzsFcO4MxqFDNRAjC9N8hwnFu1l%2FLR1sQr9HBurbzmoH5QxnDqT3sGNHOc0%2FXjrK7H9JWfdi1433qY4kPMJ35J9fcdNhhLruaiAV7Kf6ci5%2BDMwGFamUGk9T5VTCQQQNhF2uXKFE3ZJWH4abPkxXtXJDimBe&X-Amz-Signature=ad63a6b761db35614d3e33bd3521ae6719e70bc5698df88a5989debd6c3af2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQBJFNXQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGDK%2BTsMGkRE9CWmOSM5VcW0KOHrOGYTQ5GG%2FLTY6nJaAiB9MEBE0z%2B1HAcuX7KoOmtp5pnJoG%2BMBm746j3Jr5jICir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM7vhAubQSF7ajnWyIKtwDgHlSeb0ZM06u0P%2B5B4LtsvmDm%2Bz%2BIscHbhCwByuAJ7osvvae4c9locSkaDcRZ5UxSpAO2cfbbfvEj5iiAqy5LPgF4CIWuMserwGwoFETU4IXG9YkydXvFPO5EFFy%2FIu2fTnDJoxAfmny1gemXe56rpi6G1PHnled%2B4ZzI2l8FSNkXrVWmhYlXsKP0I6NP8RiLyEIhs9mkvlttjw%2BheGNbG1c6oFwrHJO5kUAyeciEE2duzQI1dd0eTDwZadSYefS33Fs0zrEtwZOvxdQI878xzDGv11VAUv6Iit5fjuDFOiTSjCoM%2Fd66OwcZJLn5e9a3uDTT1vzFmELMwFU8JokfqcV1pfW0T0wFFBpFhkkWXjrL%2BdCO%2BYFcFh%2FJhjFiyN27wmmKtTYt9UuHC0ovA0c1NqP9gM6Jra6Bxy3qSMmylFFabwoXrv07JXv7BdsnNltj202auD0vHAOZWGYJ76LrBaGZadFeOLVQ8%2F1Xry5xuVQNHCwPUCSa4P1BnJCz5BvzS81QJJTilKi%2BOPqPaTbWv0AA%2Bw9sDKz%2FHmvdiKp8%2FjAU0d5neJKrEOdZSp%2FSoDPKQqXhbunVGu4MXoYs%2BTeH1DxEruKCUxODpUJ%2F9XjACI34MxWud2s7OFnbSww9bOxvgY6pgFXpez4ODoXW%2FbZnBQUUjt3Jql6tFKQPOeLI5k6zdGpS8UuOAM6r2sEh3FPZukttpDftuxWI6gM0vL%2Fskr8zxNqJuf0KZqQiB1G4Lm%2F7WpU1pfpzhBBGVBotrne%2By8vhYud0%2F3cpO5km9ptxkntwhcqydNrVCLqhFTxujIL4SbYPVDYiDQHN8XI%2FK3IWCFcooXugAJl8JNjaY81Q%2FD6FPhtL9r3IMcC&X-Amz-Signature=49cfe12e764a75e2edb45b87f07c645697df82d6684dfb010994627fe91ca127&X-Amz-SignedHeaders=host&x-id=GetObject)

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
