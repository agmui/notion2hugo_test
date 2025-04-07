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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XNBA2H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Oos3xm8suORTsnnXgBbFwE1cOSNHSn0rLBFr9cVu1AiEA9kKlusHhAXZHsR4TqwD2BWiH7fyfO4xSEwotLSpyF2Iq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFJ%2Fyok3WKFlmxw%2FTCrcA%2Fl8s0IVrvQprZ8xHTvfYhOLTY%2FviMMOlZUW3prYIET9ghgF8l0r5RtvqaWfGK1RpydCpYHwAc9B3sEsa%2BQTMLQNinK4K1GnI7ScPUmZ68prZEfUPlEFYO5X%2F3G%2FgvzE3mRVB2OUD6KyLnon0K%2F3P9YqHfkDYgPlJ3aldiaWPSesId4FHbze7qu2N%2BTYWZ%2BBejMwSeFApsfKcHgF0lZ0GVzCtrqM0ZRkd8mUHdxe9AmQr%2FcBuGu68XpFgTaA8RbJjAN2lG1h3cm8XPQO86gMWsJ1L631RwZ8eU%2BTbfQ%2Fuqd8H3PywFW0u5tMAwlwHGDTDLtJGCCo2jHpQ0vVB5Vu8iCckYcQtOB5EN3Fw2LbtOzf06zkU2gAh1GIXAK4scSYGVn8qB9f%2BZU4Q0TZL3MzUETShX9vsKiXlDFPXIexpKNOelZJRVShn%2B3w%2B1YrHVn43byPJssj9rbGrs%2FpGwmv47df%2B6o2%2FRg967KrtdfiH%2F0PpuYKY6hnfM1f5hvaSJTngpt84n8nJS0xfk%2BLXccu1GbO%2B%2FzNl1Cob9rfpL1xb0Of5sl0VZntpBBI8PT75zYn1CXP4dwmMgGp5HQOsUFkI%2B81g0BDtFAolWs%2BuUdDHoXs8Iq1v%2FstjcX%2B9U2eMKyf0b8GOqUBJ4%2FjiZqfUKX7Gn3u8vpyNCvKp%2Fkq5m7Ak%2B5re%2BSzOhv8ya5J%2FjLrVw4pylypzDlFl9ePqXmT3tkiTmNJqZtKSKjSGxemUz6Y2uFYpJYgJ8kQcSOnunfoqBbF9OOzrUPtLi2qDN%2B%2Fz2AAy%2BRNE6pbYZmuNiM9iW3HIOhV%2Bv7sqWy%2Bj0DfWShq%2FaKOl07Go2Rm%2Bsd82RD4JvGuXlFijpLzTsZAlWP1&X-Amz-Signature=4370e4cab99062b1e3e54da88c67bec67720dcbb878e1790f523f43529691bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNGJ2X2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDHBgVmcpzhIyKPqHqFXHCGSk2mf7nBOcYHgF7L%2BceGAIhALEiveou3zXkUnG2b82Kt7K1hyiqSEcbBMv%2FeRpl4cUrKv8DCGcQABoMNjM3NDIzMTgzODA1IgzVK9%2B2awTFq1jUx90q3APv%2BSTh6gECH75o4mnhbbrtQ1PHSLySxr5ILpqEgsC5uVrNcGM3bTYXyp7oCmf%2B1dPseyTiglXxAXp9CxL8En7L6zU4nU10FcpF6xMnCtDK7lWqaIm%2BLuZXqgjRrjI17dXS49ksDhCgxhIyyvEzOz8i4jlu%2B8AI67nVU22z8okfkakm3At4LxIukqKpNhwLBwEWpc1EO1Okr4ZMglQRbpSEhP3OUSgzQq4h9RsgH93cabm%2FNhEAUHqz9SnEvRA2c2Gf9741ozyucXVX5sI6XaRvnLclaZ43CKpbv1BQNRrzx0NZ%2F6ir3zGE3%2F%2F4DkEgePbo5LLLZQD5jdvyPLWRQ5BYsArvkFPy5hme%2FKopKOSredwsFZQfvqGN8PVahX8wn8q3Ai7YGtyXK98IkWsP9%2BZhOEV1gdOm1SmjjkPasqE6MdrTW%2BcjhwAOCL3H%2BYfEahNaidZtNZWnDNKS8pFVkKO%2Fu8A8EdX1aG3paRWrnluZ22JIdnmiZrXb282ZM%2B7f20u91fDmnfMTp%2BOF%2FvllkEpJQMNwyLW%2FVdox2VGkapCZRWBC%2Fq4eggA9W6Y2mDEm3kSdLwsF4fF81O6VdCvsJz1vkRSOUNeSeLW9Ni%2FpnI507KIG2VrljXIVeE5NTDDWn9G%2FBjqkAeMh1ZEyhCkmn%2BPoszQWMElW1%2Fkcly8x8n%2BYa0fxx544lZ%2Bda5bvJgp11ynwm%2FuKlry0L9DBefDhxgLo5TRWqrEmSU6PrG9Fz%2BmgCRuplG1FDmQCURCCDYTQ8UCcP3iQWU7K0S7l%2BPCTCRyCFi%2FywdNFjfC57UKHFAl3MPu4z8A4wk%2BnXte58VAOAxXLMTa85VtLd2R9cHsvFSezFC%2BRjFtz3eDu&X-Amz-Signature=861b719cd89e839bc82e8e460042b601c6ac854fbd9d0f369a170f22c871f26d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
