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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZHP4BE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHZNh4Ef8zuI%2BzLA%2BFSmpaVgjRhOtoySjKMijvGWQwMUAiBOqeO2nXD9YOyNVQGLdKaWuTIo84DZyCPCF8Ngm3WJdCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ%2B%2BGnF%2F1iJVYCYtKtwDLs9dFdgLdv0eLHuiXnC0TRACQVM3tuj3L2j96lbLJu7aGW49PbHBCMd3MvQ0zReENSOV3ETFbUeadMxc4B3o9EWV%2FS3537Q8JFVuUBQ4%2BUO9sUXZKDIMJPQz27whaTJHmTcX0KfkazziuNxxgPDgw7t8OoElrTuD65I3oM4bkUCw3F9QVf%2BSTBWwRJi8sIjJDHOZhpNByHbqKU%2Beydr6M4lgQNpKUZOwTigPJI9hq%2FLj7kaBAE%2FZYCWDWI3k5%2FeGgfn4XhQmylTMb6I9JL7gv%2Fxzf0IH7rTkNLoiWvGMr9Dbt8U6f5r7b25u4SLIoAu66KEiYxxg%2BnBCrSMXEC30cRC2N8OZQunxCSN9W1ssGGM9i1y9a2CpJZLZQUUe2WytfkClYOs0IUJE2t3LfazAcB3UnstG9myhR32%2BEDEMsB6%2B6psIvyl1uMJcQZLGJL0cn7b7cZMQxZ0SCNhpCEZkUMm%2Fm52KtsgocWO7MBqMBA9SleTLHNSLfqeV9nhtumyYxEGemz1pyvyVeUh%2BOLxPamVRcXX2vP89CIEMSNPZ64zrpiYoKuvKP2Bs8lParTeLET4Y5z%2Fs1Rod6RoQkAqat1M5dBqiFswFts0zwR9fjwqWVoWGZViMxfNPBnUwvYeYwwY6pgHUZVDBxzxeFAUE8JouBeDwDHe2zmK4IF5PZJNTF%2FkOrSJ8IN7ycRfhEhNWeOG8P80k8GFxE5M5BgEsn2769Etuhr6WwdN%2F8RuAE9QrC2dd2D%2FNxRhx9dkceELegwcH2Qjw8p5pauB9US%2FJGFww6tBzH7vm1jr5oa1fsA326ORFrPmOSWXcw9X0BMx7wwmsBUCXD95CqECcVUokx1gsJ2AzW6dIP377&X-Amz-Signature=3aa10676541c5a3272505e9f9d9bde6f32c9c3b8832261270ef5dc718379f3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2EIDWV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBPIypkSh5ctLdGqk8djReaogB88L2H2eceggOUVoQwgAiEA9vY%2Fx4Hv4FNJriQIUSYqY0XvVCo99zSqIwewc3wQeKIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZmnJ6u35MAntJoZCrcA5EukJmpsaZKOMXe3u14X%2Ff9rXxQhUbJw2jjz24yN96H9ODglfyjD4yKEVelNs062Qpbr55EvsaNUNIytUo9AF3QMVZ2l1kJ0IOi4RsxCj9wCPRrBhqIFAvopPBK6N9okyYR8fnmIdRxw8GfVh6Bfzemtsj%2FVliQYXYaCKfygfXP7p3gNImvORUrpgbrXtyToVlSB9cXAUoHHbBXhdg18ObfaN6Q8RpsxPNWQQEwb9CQosQ%2FrM%2FPLO9KFDLYZfCwZhwIUpDxU1UoxUYjwbIBZcAuwHZ6CZcWa6hUFXDafbARD363z%2F9kWJyTXCOxPZNvnu%2FT%2BvYfjpoWpnJeTIEEvTdLZ7Zr3FcHd3DWgLZLSBqB%2BNdXClkDU269NvV3CJpig5KoxFOZmm0cKd0UGoJ3Rmd9NcKzEyf8fBiyCqlVybAMGf9esk7w6vJTK7b%2FAHHSQi1isnvrytdeiIf30dSu6JBrdE8CSCBG0yHfPIfd3Z5xgAe%2BHYaciUiriW84%2BKxo2vYn3ZWTKyc%2BL8VwUFAbjq95PXNm47T%2B71evFXtOtth9ypUlBaqJNPd77kPiU2QuM2Nbkm7bLwbNT5dCTsYqvft8sqk%2BdDWywTHYexwpqZ37FUVTI7Wxq4y%2FVjNTMOGHmMMGOqUBFaHOPdFhGtXKMRwzPi2ZWkDkpR81plr9LmQMO4jdqS1EkbpoUFd2IW14FSvJSFHdK0jJNnKbolPdtqJvHyOUPXlYgzXBYo1Lyxs4FoqwZLcs0G9C%2F8w9zgl3hl50vRvmVknbiSl6wgsHGCmcSoMiujHEBB%2BPJfwkHX7mI4Mle%2B3VbE9CAcQNWHE%2FXbt6RU7E%2FCUhc80EEGgkt%2BhAXeAv%2Bl9Iwa64&X-Amz-Signature=bafad407539a134d7f3451f0169066364b0b2855e7fa0b9d565f0af59e72a0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
