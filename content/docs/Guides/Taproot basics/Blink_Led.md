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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW73KS6U%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBFwzp32alBxEF%2Bx31JRd46HUM7YDqEBHaGdkWJ1ZgNSAiANdx6v0B4ZBg5WKyzbaZ2AbXBjuOsssNC%2FH7eBxUQE2Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMyBbvLKj3KvQEF%2BHSKtwDENxsRTdPGhljYvsDqm1z5qFuLb9cBHIMeFTRgYdKBu%2BNDqopwwKoVcAl0g1hJ3HuAqETyELIeTnRbJ1MqNp0q8L5TM129TX2P7k2S8CjNm0BTpyP1YuctOL4g2LqNGT4A2yuUKIegep8%2ByRRX5YpG00k9l94imauAF5M3E6EtMK8x%2FuzbjmRiOWkSPiMkqg6FbEVr%2FSSKGIJ1MzeJAR%2F8dfzRmbT%2BPVsnQDh%2Bkr7IT8aJ%2F9OiZm%2FKMG4jKFO4UJ7glzZeCb1b2SUxGmLVls8Ml875Njcq%2BG70bm%2F%2BjBfADzvOtt5VcETDiHu2yQ%2BV62hAkBRCFBRc5RXAN2l22ZaL0774Kq9Sx9JKfobmd%2Bf2fljZSjTgBNCEFUrVRdyG3oUMfa72ogMrmtKJSTpcnUDg0bHdFKz8VJrnKlq5djx%2FiUXt3QLHIlZZLWZKQXrDnfJJKX%2FfovmFBeeUkN3p0On7kIcYPohJ2DiQ1JI7I%2FNTXSRw1Q%2B%2BNpeK0WGzbPVPp0mx92IaSdVpuUkC2ab8egNsArQSmVluQYlOH64dvt24XaqlXgAuakV%2B4HfeeDFtbCDPV9qAyz5zAQQcyaTz%2FoCvND6Zs91HnemcTgyUehwGcg8YFS59kyCr3CmzGEw6uq8vQY6pgHl6rM10wpOpmdqGJ2WkDQKN9VlqMi33dOf%2FCcIsGrz7eJnGV6iuh5FchQW0MqOqibOKoVrWhmRpSTrtgc9RC4yp2xNS1Ax3V6lXN4RDZhoqJ1TNArP7UvwCaR4yAK1iPiQdpwilfTz%2FqUh7pAq0LVhhwQ7ewviDvO24%2BzqsSo0BF889lPwkKKXe%2Fl8rAIq1EuDvGgnvmMGdmy6LLkLJLFdt4a5ihOV&X-Amz-Signature=8ead684c15f3c1417b37627e8f7cc094a8ad750588ff27edd25eae9537078409&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSKEAE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAJL4AWdHCy8UMpzrUMYeyl8AXJV43Tn3%2F3%2F%2BPysrujtAiEAnmyVKyV0VHEnV7qRPhZ7ABqFAGTOwvdfTiMAhtE6oGUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAqQn4wgQQdzDAqTrSrcA772gAAugjFl3vvcXqYIna4R58UX3zzw60DHFFv%2FzlUGSYhZVa8bmQZrVwJbI0NIrGCQBxeEsU06BijkFWrf%2FNe8onDjYg49Mhx95H2e5OH9CPq1j%2FJoOd7wYyNDe2SghjIIV5SIlH1CE184DjpJ5lj%2FRygIAq%2BrMRFrC7E%2Fr%2B36CmSKgyqIkdJcXE449lApHj%2F5g6XDOLRKAUzuoujkhnWuHCtrnHPUvhB0AHBOdeG1KmUlfzx3%2Bkh4z%2FUMdM46yS1o37wOX5yJIXeKlHiVkoqTzknpYw5aKOmjlRTd2Mk5QbUe4bqdPh2tGayIl457ASE%2F6QeYlw1wRcUEODGr3%2B5baZ6MpY8YqhwCMySy5dpa18eq7JoWAGGVpe%2FwEFlZ8iNqZp2mkU39P8it46h06c998F%2Bcg%2BDKz20HcoCNFiFZZD8Up838zYf1INyYvAc4ks7yPkpIJEylegVjnhv1uN6DgXaZQpCEpvjuhn%2B63mle%2FTzxZiSF%2FgpxHoe0VafX0Hck%2Fg%2BN1FxOEgoJRxB0Q12t9U0ogsTD5ufZcfusdcgczb6ycZj6TtF8pF0NSMvItIraP%2FhxJOPzGwwT%2FXIWkReMmU5vAXnKJcJU0Q3%2BZKTnENIxnxXN20CN3FfRMJTqvL0GOqUB%2F38PLoPUOxLpXQUQ5MVqji1yhJQQVG3BRpb3S9LlI8wBVk08OdFefCepd649VkBLzDAWWZGeyr4w7gNwAsNBvHMwiew4vxpg7yj6d2GxoWk%2Fm7s3eKaTf4sm%2BJfPd7%2F21sXIQeT0FyE6krM91fAH30V1E5Yd4RaWX9iP5oK1JNaeWO6QBrqSMy%2FUA3FXYh2%2Buvy2QsLAfYHt0S2HXaD%2F1htgHT2M&X-Amz-Signature=5cc1e4fc90ad11b8a7244989b12bc94f10818aba2cb0426048d13871ef5b54ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
