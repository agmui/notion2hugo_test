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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUCMIVK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFm1izDpm6iSneq3vP1rRFaoUN8FIqncrZxEKc2lxbawAiAG8BF0NaKwrs1xt8FZI5k8ST%2BK%2BJEb%2BduQsq7HH0a07Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8ENQ1F4BMb7M5G%2FYKtwDPQAfMV6hHdvefFlY7zqJdUM9cuthbGtxl%2Fv2yONkd8Lpt1rcXxoeelXYb0L%2BazUakbhvzSyjFb1EK4OvgQCtYDtvjA3lkJWvYA2ACO%2Fj6hah3BoYgIPT8YjRltFrlxJlmEcvpOY72pPxag7sg%2FqlQ5TspMVFFVPAjxptIXTY2QhtZYs6E1WLVU%2BEeREtaxq7%2F3Xc5oyUzeIWTxvHSzNBrPYoL54cyvgyHWbuTJYC5JwY0Frtl9NnlLaFBTS3LNf061dDNpN5zwdUY9Di1SKNHhiTOwtXjRVnsgauX14e8qJUUIhqEGwMnuyJLNxuc%2BxGSvPCLixIUv8D6v7egTfamU%2B%2BqCxP3PtswlozEEG5bzm3DOyACaVhoOYDKNXgd3HksJMCSLdQNHmFZk04tQEvji%2FyvMCoXW4NYrVbgph0JGKDOyXqDgSueDO0%2FGwAhdz%2FeOHCUnUAIM7X1tOgS1EhKZn8JKVXFNs1LmOoCNxMNeLEr83kBflN%2FJWo4FFkp0eXdHvKlFZeOt1aaCoHsCu54SmU8xZi0ds2XiYtoKfole%2FIeHvmb7zc80Iay%2FK6rZmjc0ZxSRWB2pf3rA93dGopEFBxtXfj8DRuCaPGOhc%2FPmFm%2FI0OaSZe557lc8AwupPewwY6pgG3YJOGPKP8rr8ZmWjigR9uaHBJOPYq1Tnbgp75XY01pMOwpZMo8dhWrFEhINL41HVx227ykPdQtskOKxZXHnn1R1kbQQ2CXNqvxoliOzZqUH8mHLFzyNINE%2BZS0OgEEvtAPdPqSjnB9b%2FTKBKugaP%2B%2F3Vd6uwqN%2FE3Lm7yU%2F0DywYZ81tXo7imtptrAuW3IzI%2Byc%2FHqav0FtdvovqczuJvkMFWQKqV&X-Amz-Signature=ed18915081f3f2eab1f66ae1d0eb4aaffeaa38cbdb560d5e7366183d29bf43d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHIOXSP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHUNFC8nzNXPf8ghuAwKf1jEi066pP%2BMf5WE9GiQ0HTmAiEA4FgBEW14ZFHnWNYTvtsXq9B%2BDWiJicxfZwmmSqKQkKgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEdZ7iUf3aH87gRk5SrcA4qeKnc5b8QhE1yuCzDPtS0eXKl5gMC8%2BtOSCX4OFrF%2BHR9w5yfY9ddJgyiRlKT23d%2BpEjWx1tamk23293QCFMTeXkTjHiQybOyvo2iDp164dFGB5jukm7Y0wc1odqkL091HbmaHSy11Gc7M93A%2FxUTwBccyzA6Shc1ZzsOi2WREiKAoEqZPvZlnSs1U0uWGh8hbOTyi%2F6hXHoJV4hhYfyEyzxDPPbOUFQArdaoGvQxSBjjHDTUdZygVAVjYr79h9qDGVuqzk%2FXo8vJc73B1lNexRDDVX38QsCjUKPVwR7G%2FPqBrnCHn3VzLHITPv0hrt%2BquzL6%2BtO3gGj3QdDQJvH977HSuDdUHMiGXu7PI2EvJmhBSMOg0uxAyZcF%2BhTA8Ji6RBNRXgQOYYjThEKFFCYIjRUUMQT0yTVwY8Ldlljbz%2FEvSQLW8%2FCqqjiYrn5RkFIC52nOdJcbeqq9BqogKMvDhAER7rtB86Zq%2Ff5KrtsC%2B6BgzfsOU4UIMDOr19tPBapvvwpQFdQIBorqhEHxM8JTNRS7zvPcf796C31UpVJBTOPKFW6MjSPC1BwKD%2BFQ6HZXdyTOuvbSdnZMhz%2Bkm8%2Firv4%2FlMcF2HlxiNPYxALag7l8v6%2BUeI80JVE3lMJaU3sMGOqUBBvLuIGwKOtBaWCfGED3iLJw7dXTEyp%2FTs1yNq1LFwdKyoEe1EDENhEXqHCxjtAkIZxWw4qBxo0d1I3gM525GJ4BFYHJYFke52mrWvtYJQ7xnfomlj4%2BD9921a2o26RjW6rJQZvOi0Z8yaM6EeFvJYj9oLNFkJJL8hb6%2FYjk%2BroYsGWUvZ2%2FBVe4R9372%2B%2FNK4%2BUuyNn1lX2TpVPn%2F161eAieQ7R0&X-Amz-Signature=99b17794a539c41000ab9dc1aa94144ec325707189ea8d36eecba8d11848fa55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
