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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEZVAT7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4idKJmbps1%2FrcTj4ID0OdLkf0qKexDXiiCGeAxqHtBAiEA6qU1ewoZh5yEoYA2WQzuECvWXHq6k2iWNsc%2BlQvtY1EqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ0lHzybYu%2FM0ftrircA8R4ckQ0SU9PyxgekDTh%2B17UG1kXfzULPYnqUERKK2mD6Ld8RjTLGZsSsLmQa55V%2FKtV%2BS4S6h01OlzC2Or0vBNfN2ocHgiwEwQDGj8hPTtKu18zUDxGR4VYhYPwkxd4rGyd%2Bv2A4gKi6%2F1Dp9GMt3yeiwTtI7su2jsGa1WxMZJRxfbs3sjyl0Z84R2V8bBu0Is9qc619G0NkXspeXa7mZpTGzrU4Z2UASo7GNa0zLtRbxya%2BztJ9KFmSkbyBemvJ20Vie8z60Ro8zk5DnsrnqaA7HlCBb01zZ6dNrvV%2Bh%2FtkOjSQTNg1zIeMwsepWLePjJ6WkNnh0idFGIT%2F3McQzJUpVMfAbDzMwEYV1DLSlt8tvL6fIEEl6jn9zCj%2B%2BJB2uO1gyfAO33o4pDvDEO8rCN9RpXozrthK9gkreejafwpz43Wezb8FiimryjK44LzcyW6casOVzfM77Zu4jx5893I9IxNGkRxMssnGIzTEUUDE5Q3LyBVqtpUsX6uCoqB6ikP4XiS8%2FKCDUM6rwauxIS0%2Bv74lAjLPBckAaSwryYrrDGZllsTeJUahf9E9U%2BHHqcA6BUsvX0LB2xVPuNXaJinT8hVya5no%2BosMBkEjDOF%2F5Y9B1HMWDVAmETpMNywub8GOqUBo9vyGvbnx3%2BG6XN%2FKprRvYSJJsiNodTAR%2F%2BavkKNCaxLMtvl76gP2yNEErBcajpec%2BxCzvQL0VeIuBpe%2BcYTQosJQs%2FNAdCAdYVmPlYXV2LnEN8cCRqsdPN34%2BHODwRYcpPYXZ11nGm4Bl4qh%2B4Z%2BynBKY81QJd8NMKSiX5KUjANOSSMt5D%2F1CwBnwEkc8ZNyAeIYPmgzy9XGHmXy75MmsrDmhjQ&X-Amz-Signature=40a50453a252bf6a0be58c03e76ebc2242ace87c6a92eb25cb4292edc8293eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKL4DU6R%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFf0Wra501PBgrqFxFDq1dLJdkPgXu2C6Q%2FVy0ZG10SjAiA7F%2BrjcUAJlQIK7W5fUFAsu8I8VOE20BO5iTgXaom6OCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6EI79C07SucvOswKtwD8Tdv70WHk5O%2BHnRq2eQebMh7Hjo2vUmft9rX%2FJXCFTkudsaAb%2BzM%2B6mQqdhtSGTLPRhZFBLkKk2tLzJfBvMUh0RURDSTLS0VG2IEBfLylJxSEyhP9UP65e%2B4jKQhS55Xjf%2BlTQ%2F2p5RlDqqMKCIFdGgGrISjqkDsrZ6cwd%2F4DamZRUgMfYOKY74O6zJHZDXQLKlz%2FPmw6NA%2Bvu8j%2Bnj86E%2FqMBSlmos6OJ4EhLPzOchfCr3gGqaOm9f7MEtT3fOOfzmF2GULJanJQo2Yi1%2FE%2B2HkKl%2B%2FENJ0TaST5PWb1VPjaE00UjMlYTNTHa9wNeDAcP51F70o9HwGOtfBU6LLgKqotyt%2FI%2BRzBGP4NmD9CGai3dPFXkXEQ0%2FCyRFZKJQMxLk%2BhfaI8tjkeMgk2p1vvmd7sM%2BE3MfzEcOTauNeAbN37EiCd%2Fz7U2IcMOKIZ7UJoM9rdZRGh5XO3oGhr9C84rQ%2FX1ZzIGHD%2FYtI0PDg4ot%2FljAoonVz92nNo5X7w3zuY%2BZHddBOP0w3VaaMcQM7JdelNzRdj20tPgPA52iSRfIhvB4L86shNUcxAwTdD4TYInHXPqOCA1Wtf7r%2BMIg0IZubhi2VsJfdpkIffM6m79effO3UYPYuNBoEM68wz7C5vwY6pgGw53fdEQXovcYj%2FKDWtZ0K96nnLWrzjrKYuacDAuUfVeeyg6Uk5x1wdHrs%2FzzAji0UZVMghyw1s3NXMYkav%2FuEplQltjYmmOrIRO1MaLVI1ghmRMXKscOMstqrIcaVNmmdUuqqCaRiBrRnfB5nV677gC0Cp%2BJ6APQ5ztygVM8dhwu%2FVG0AFQXcxHwdSsvZYH9R4oz5awiNtmPKKC3ckU4LFnbaTaby&X-Amz-Signature=ed0e7b1e0ba1d29eab9c476ff59ffa62baabd3bc8c2257b7e30b8e00bc12a825&X-Amz-SignedHeaders=host&x-id=GetObject)

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
