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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3FRYSO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCiRgGZDEWTQ25dG3Pq5GIrMvc3yYEwu7jEBYNJNnKFHgIgBp30H2dD%2FDcwZehtGSE1U3NmZ0f0aS03T32yAk2XE%2FgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG3FnCqtwzl8i9kKCrcA%2Bn0qd3IzI5p7cjt96NSuoCM3evvXaEKXTU6hHcpAvGRfgQSC%2BGHEC15wWznP6FNHXfEs6nCgmGf7ApaDXKwPQk8ngUMwOgoJSH1n6qYSf05h7IzfRvCP%2Ftkp3Ev3%2BhzjKhzexzqYP89HlMikGkV1o6McK%2BNCP75b6hB2OOW%2F1n54Eaogwpmqz4cQ8GhSlaC98ea5IAYwZK14EYoTxRGcE86NNx2f7h6MkrFn%2FKsj8pY9kzsocwizenE%2BolAYZZFmwThtq3ikCtiW8QRdIzppYuaKLWbXw91FYMwkgd8I5PJuT6RGAcbG8g3SzUM%2FE28jNxhekafFIYhBowwhw2856DNiSb9YxNuksAyx%2FaligfD6FFPPbaY836CzaEtAFgdO1%2F0SwJqcZSnDekYIw8fMZamiMBigKPCogTzx97TowdPcAFJOZTak7u925lDBOoMdHyCRl%2FWaBP1uMyVxaAvZlSPItqTCujHj1CQa5zls%2BtFwb8EQNk%2FA%2BLLuflYrtD9emXmCLONhv97rc2yQqZ6hauyhOm%2BUeLTZVuffv1BkUr8sfREkGVBLpIX8z9KGh0li5v5FzRQOQ%2BcxjEf0PzyxmAj2Evm8JuzEcY1BwhYDe%2BbtRbcUyMNMXLXMiVbMLW0lMAGOqUB04AdzNM3pvj%2BBle3HK0kgrhMr5ykJ%2BaBkmrYSCVNmVvGfbpom%2FcPgSdsu6h2mAwMGwzdGjwR4C0Io%2FrxfDDEbgtZ730mUDDyKswJkxKJMYPqRos0L2pRkNdwzIdO4q0DH8CWJetzVYAUopl9E6CpJKBAr%2BcaTTHIb8GeRdkC63jPHvMRweyqviuC1ot4j2QjPEw5zxhkQY%2F9sBGAwU07WSvHn19W&X-Amz-Signature=49504c543ee6f5b14265ce0dcf1d7ac205038addabb15b212eb1c70caa327bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656U6OW2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCeBi9B7DllQaN983NqQcpFUhsGhp2uJHwExV4fPAERCgIhAMDAxKiolgCEPA0KmhcOPQHaAndpzVswdL315njC5FayKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcnaJcpBKLZZ1pWHgq3AOeEO74jsXdHK1oXuVhOL9yTaZmxI4Hsw7tTjpMQk1v53jYwHd6E8rLG4c2h%2FtBhIuoKwKzbCG1hoUvMZtTCYWv56dZP3N9uJ2J1S8%2FNCgsd7RYNW4x53cMzTkHa0jqBIsd%2BHLwB6xwI5XrpSu9y%2Fj%2BB8KA5LCaoGDTbp1wZFK%2FuTdziExKe1zl%2F94KWl%2BfIerCte68kzH0uWPCWjDMToWNwzXzQCJWkCD2EJq2LC4yYCiQE6Gt5lqSLGInczvGti3eGcT2HaaYcl2R6pThoyQYtslJjpixHd5FPCYJcwpdcBxBOK%2BCkytDfIAHLx%2F4SMg8ZUpzgfD%2BeP3zETSQQNr9YExEVnEQ%2F6WWtECDCmuoH0kTa0ClrFrXMg3d%2FCeVS%2Bk2dhkc%2BbPE%2FUZFwM4j7SUdEQQ2Uj6U84V3wIrt9wkY%2B4ZEXSNAhHI3Uhg3CjBjizdgzfeJ5%2FdwHlGNdobZVotTWmuVuwcickrdIGd%2BXYHEVDyRyJr35INi936khDEQQof%2BoQK%2BsJ9Up%2FCjOccjL7Egc%2ByLhMBZzo8l9sobhr23uY01dj4f6VaOHCaaIKP0y1xKi42Lw4iTO5RcV%2F88EGbbWTajLLPPb7UjAZHMdRpSI6GIsS%2Fq250qULv0zDDRwZTABjqkAfB2uYUFX6x62fBAx081vD4Xm2PVwfE9dCz9MFzPNlUz%2FKp%2FwArd2%2BX9NdhwZKoK2Wkmey478M8bnAGuYyyiI18v8DsBPvUmVro%2FpUVoQl8M%2FC8URZbzsONvG5eqAw41VNu8J9Y0G4hx02KAyTCcgYZIzdyqZiZ9fhaJnuKBWty2LmjSGFZc6BHPwZdi9sFdKOAgVPyAU%2FaKcc0zak5laZIcDVZE&X-Amz-Signature=07bdbf1ecf30a4e2f1a5f70435dae3ee169d1b475baa28f0933a74d95e0bbbac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
