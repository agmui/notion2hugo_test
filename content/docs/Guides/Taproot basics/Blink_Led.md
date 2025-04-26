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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTBTAGL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fn5%2Fp5MoIOAHRQ%2FPQmjvmApL5lLkf%2F8683a%2FJhOtJUAiAG%2FMMj%2FCPOIijlIB%2BL9kaZ2xADfiVBK6WM4JEIOhmutCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMNGMP%2FxxDCBPESCgoKtwDzfcngoiyHomCWB5xpvZwjeSmQVMKzvquljqL9SNON%2F3IcDlk7Mhx%2FwK8tycygqsrrXpK01ld1rJMzd7z%2F9eeJv0Y0Ikj0b3zrpKz0SAbz%2BEkrPfZPp2h2%2BOlHhFgz4inoYxc%2F8F3NJRSy1r0S3xfgFkg6WhtbPmDB%2FQNCw9OWMkPTW6YSv8c1nFSC4cjaaYVA9P5DU5mhXvN71hL0X1BKdEB1EWXutIPCE2sGQUYkWuH6hxznFse6FXlHfglHVD99%2FDLyb7rxsh7z7mKGfNTz92jP7qu2VWO5M63cx90ljL%2Fw5q%2F4iierD%2BwO9ICriwQbyVPsGKZtiy%2Fq3dluaAFNmrmgHcRbSZepS6Mg6OMyGNVY%2F%2FS%2BwQpOV63c1fKSFeq7MsjhxENT4bKil5M8xljP%2FiBhkaxdLP2YfIhkKYc8GbFAkNR1NZvrqZgyFRD%2FArXMnYRtYxqNL960A%2Ftnpd6JMCB6Cyzf1k6t056mr91XpDAPGin5%2FrxYi1gyUPN7pKzhkHJBrs4NnB%2BsIIGt0O0ApTWCvnxQdTt2rXjHwsQl86NmkU5KPQCGz6eXm4mpK6Xp7SLrkze%2FeRijVMxQPyx8MWdfHwnAkrBdXuyC1S9%2FTNnvWTG7LC1s4F9iQgwlISywAY6pgHY%2F4PqzGCCTF25aAjNq3ptO5sOKBLQs8TRHpDxMV%2BHk47fU6R9PrlszzxOs9wmJ%2FyJQ8wGRJWlHEhFNKDLF3LyOGVLZV2MQ1uv4zWdEssF2ktdw%2FVyBaHz1Ejhfz3fwI4CSAPz0ITwyaRU4SGr%2F%2Bh0mewqbyeEaOhU8RtusdP06k2HNfSiRid3szriNX%2FN0sUr72dv4LL2PRi28gHkgqRWy984lypJ&X-Amz-Signature=793102144d4bf15c92f43591c1878c9f5039bf17ad6d46e8142339ce97ed041c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBEXHJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCVPaN0gGVZ%2BnWv%2F3mRuvtWzleiDez3iVJm0V%2BkwY4ggIgEC3lKScrsDZXPLFMNj2fw2t%2BiPIhwFWFxFMDIfxOTa8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKDTBqvtWyFBCBXoAircA8OeEGgGQtENm%2BTO6I5uG5ACrLqTHXtPtZLwtbwsXqRjU11cEYH%2F%2FCSt88%2B047JkwNp%2FuQSZgSNl2ONkxg5jrZDm2nXU7nBECKNSDu%2F6YhbyO5PepNwEgZx340It3BAlsQEIO0XJqc%2BxrNbNqVswvvmmziq2aA%2BJBquyntLZ%2FZreYtYBqpCirrnttH0KbeIwa0MnNlFJwWrgafXMR%2BAGXNCS%2Fh02EHFSOk2%2BiKdVSA9fMsu9eebSLFKPIQZJK9tT%2FnWdTiF9JewudOEbueUG9DxravYgJe%2BIoVGhgVyCQP%2B0s8bm7iGLC0LdRWNmOcVTB1S6zJIzmpCoosE67RnfkSPT9g3tJguU6L412Y2vOFrnLXkDfYahAMrjuVYECofk6rU8Nbbvas1Ss6vdHg0rx35zne9LFlLBkQGVCUDrgNmkN0EE0RUZQyKy5cKc%2FPlFBwPMmBoUkDGJFinXcFOsH2vVOaWzsev%2Fw%2Fi6UuJbDSNhmM%2F55Ehh5X8frwU2z8VnYwlZCgTgO%2BFTOZPaSExER692w6aIoLECe%2BAnmU%2BwrLVW1yutOrs5m8d6%2Fo%2FF7qSa2L35GEpoCbUq53jCxT8Hw1MHjeCHosZ%2Btrw8CJi0pdgpJx%2BZ9VPiL8Nmv6znMJWEssAGOqUBEUZ6I15I3J7WIUQqRaNUJsBsph4qDs8MO%2FbHuFlykVLCZz31SNzVaSf1D2Ccj34k6v8jxDeG4qLF192ilgtaIWW7zxkdJGnT%2FF7EdOlpfqrpj2DkGi15ySzOrJ9kIocKYZRK0tcWHBXqs4MtF%2Bfa5IjUou6Ev7UATA8q%2BJR8lx9vXdKTZbYbD9PtYN%2FcUBzSQAbH40iUCKdjJp98eHJU2O0PYDCi&X-Amz-Signature=710d49de3981397b8d94fd1ee9821553201a77bf2f3215bc8662c0dddd601020&X-Amz-SignedHeaders=host&x-id=GetObject)

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
