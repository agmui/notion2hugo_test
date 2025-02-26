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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6CDTSZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDukxulP%2BSZH9ClSAkAxkX5jNlltTxCgV5gX22ZQ9Ii8AIgDemY%2Bf8UthZEHotQWS2DLSNABVI3Acqdv84OigH5ttYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJA93khhDWH4IHMmCircA%2BI6GV1nDIFZ49MVtORtt4dAws34P2xMcqxCgR4s%2BB%2Fpn3rR0i3eeF3v5Gx0OCl8Abtt3nSCuc%2BIV1ikQvESXtpV9ycoAkfWtBqJF4aeOiUwaJJc4dauPHpS60KRiQkN5sXfxMb579epoGps71sk1PikuVpSuVyBBoRj4D9g7lPmerC6e015lRGFbNA%2BhLftPVF66kjeZAeiKn1fO7EVVs9Dnz21luXoelZ9t5%2FluxECfB3zPaZHAElbPTBPCp7hmPutqtfwGEWuRbmWeMpttg4aPpiUyC1INu49pG4OvxrP%2F0NAapNlsx0xngRYZdiBRR2IZlFEuLZUAUNXQ%2BRghdYPflXoTsotnctGuyCNiLiqaEJ247389GBXkx9kCXsr0LSCPrEngoG5xdAzblvoXVSL3bNucNgqFbONCcBxF5INaPgBFznVeoJYSAc6Q67Dr7uoDo4NIo0%2FiXT0Av1cwTicdsWQrkxmXT4YOPfUFjBvZiV%2BlffgUzAZdkALt%2Btlv3RiEXZ1RP5GVNBij0U%2BuD4VsrAWlWzPrTE2dFU2t3hgPHehXEH6RI6%2B0rivJhBDNlmCOsG%2BeTpeISI3pbYCE97wbhZOlcMNvPAudZN0h2blr56dAnV%2BROY2CPlHMJu%2B%2B70GOqUBOEKxX1hcZIhLUl%2Fpb%2FEt6%2FLUGqRns7f6E%2B0VYsgdZptDGsNuR%2FZViAt6fbeLTLAgx3%2FqNJiSssU67rhZ8GZps0FoxHki2e51%2Fd7sIiV0gzqJh50ZfgEbTQAydhsxmD%2FqkcweD1KY5PryYatSJckO7B2JlzJJE%2Fw2TO5xtcvbwMXtaPuuGNfXwxIiUH3IUsH4ROFYXzgrYMHqOKAvIia5IG2wM1Sl&X-Amz-Signature=58b5760cb8626bd437af72535970e7bb7b4ab2ac2ffe8f8052928e58f398d02e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQISEHF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFWacFmIU%2BE9cFXOkpnoxFis9rG6HdZGDZy0K%2BJ7enUbAiEAl0j0%2FyyrAozdO3JE8EwQXfpEI%2FuxEfSkXjfrjUuUkbMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKmmEN6LXfA7XiEMmCrcAzYEmwJ8ej05%2FHkPwl8Coo9kYfjpIcgNQaRwjvn7uJUV4P9T4aAfznKxNrkfvqL9GDzHnXq8peHy%2BDCZMnFW1frkg%2BbjqT3Wf7%2FjwSfK6TY8jZU2CdBT93m94taJa4POe14QdyPkjGEknQ8kvj5qv1RntjmyBxgekDy1TZ8TU5dNtN9rRsWEhfqtyVANLrRx4qZg%2BjItQUTnLnCnvQJNKOSWP1rpVbqwM8b%2FopfcIEC7ZUVtu3k4yn509oC%2BS1w3SnW3226XJ96quzS7GwhV37m3cJH6P0TrQcYDZSugXkO5DNklU0DPwdS2Y78IqutqhvqzipPK%2BNjSIjM7nJWG3Y0nSlRapRxLx3uEOd%2Fz7kF%2FmQWcUGILKyy4lwPsXn6q0JrwHASpmY8Zv4iQGLoKNHCoju22Hkb1kQa8RgmSexTbmUV%2B95o2YWTOzyzpRwvKA0CEj43f9rFfmhNSiTMFygwhNrcQRV6OjYUegPncJvYp%2BMA11JHgaqRezoai63qRvvFkYekuR305f6iwilRJgGrZ3jZ4FDiQnhZ3eLVPP%2Fqorwm9hMkpbKZncTui97nXKL7X7j%2BZZdv05%2BiYzCMTUiUFf0YTUSaxKEaa5zZLLKhy2MyFJFIdKpVNvOTCMJe%2F%2B70GOqUBqan4%2BGRrU%2BUDaY%2BJNM2VFaD5QolI%2Bz%2B%2Bs4D9YOc2bMGv9qvwvaGQCxoRihcpOe9skleByt8Hp%2BsH%2F%2FBoyOb3sXcfm%2FJNSpR6s0i55i3%2F1Kekb6T11J81E7Msl0vj1KbZP7MM%2FJh8nycfpopj24CXs6hNY%2Bi3otfPHVbmfTMMxYjTcjiUZWrL%2BF2QfTpXwIzkyLkxTG7ifpPY27JkZEy5G4s2okgE&X-Amz-Signature=5a301cca909487ce19b81d35b7a2bdd35674adf162e2035c326e3789ac0501ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
