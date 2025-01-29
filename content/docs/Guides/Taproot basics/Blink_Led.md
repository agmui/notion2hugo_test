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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MNKL7K%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWMP6mqg%2Bck1j0RDBfKisW3zVZ%2B0dQD%2Bt96%2F6j5P%2BapgIhAOCsoBnjcTonhUEK1v0sNNw1qIpgfIp2FNNLPb9tH%2BlvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6yhrS8sb%2Bt64MdCcq3AMuRsaEoXIOzOFzpCDsRUo1OnJuO%2F9E%2BVeM7hmo%2BE3dxdRkks5DPn0H7r%2FYBUs7LtrNOGw9Ppwo0chJTt1QZYp2p6dDVnDIZ1%2BV3pLkWUCcieYNF2z0yk2%2F0XYwj%2FVci1cqSWq5lQdIFlu1rQtyf4YE%2BtyM7ZACuGXJ8wez4MAqxNWsG%2Bg5uUxUWUlTuKlm5PyRaedAFg3vBWB624RPN00NJvZmELVwtSjUOf5z1%2BmYHwNa0plYU%2FQJlPMDlIYYiCyMdLX7Qd%2FZfeZAWACrLUD%2B8AIeUaYAsDWDusoYjPAZWdU%2BijruyvClKcz52IdQoF75MqrfFITTIVP6tZGJQzddfZcxoVWJrYIcWwCsWPVLBMqG%2B6gk5j0dveZHxSTm5T26C7SKwvnIhF6fN3MppPbjgr%2FOr%2BIAXk%2B1Lmlr9FIukBRq80p9LqbK2U6hhYsWJob8CKdCBnTt7%2BtjoxDRiV82PFHIG5P8bzE%2FxG%2FRlWnpD%2BsoE8sDUDay2eZFwJY0LFbzGQNlnF6ZsYLW0lma%2FCGX3zg7BhKr2occyJdddlklCbXc5sDIpjCbezjJ2HrTy0SDum%2FG2%2Bgqm7oxuMSuBM5AQmcXqaKMD5Phb1kQvU9j%2FeN1%2FdyT70KZwmYkhDDchem8BjqkARgi9vaOcajfRUxyAJ5xD7BgydjBAa51OhFg99uFQxFWTkxRBDcN7KfXkmJJBToBFygcTIjbulZVky0c20xhlWGi62mJdaJkPAPzNIWr9KwjPuqjvP2kqLt0%2FC5AYqCylgTIfJntMV7TXVCi7rizVp5B4g014I8ozXCJSXgT0ErfUJwKhseQ7ymNtwce%2FFAUe0G7Jua2Qel6MFuGFQGVaydIpIRK&X-Amz-Signature=ff22a1f789d9be437782832a344e8ca90b95dd77f35b514c2b2a6acfff3224eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJK63OH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bzmm1UKsd4fyEyJe6SUJEo9vZA7A7OYfIA1REhH61vAiEAsdR6nlYMQaHfCgIs6YxshWDH32El%2FLLvy4nhdXWMNGoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjum84SAVivI3kOCrcA4gWHLeK9tqa%2BQ7jOlGbjGDytx40nvTw%2B6z39giW96NXabItWTOAHf%2FN%2FT%2BnSijR3jyQ15Y5Y5EVIeWaEBDMO%2FaulvTEzp%2B1LHBMhNS79c0XWRxXz3cCP0KG3lWiU5il3Bm98WUuAeA1g6haqJE9SaGFnaFLFb%2FM%2B9BEuqHzUB8%2F6%2BRgslabEJwDYchMQTImrz7cK8nKUZgo3E4ysB7yo%2F4uw7Bna8qsqx4%2B%2FsNCu7ktxet24%2Bc%2BaCiYUA0smlzp2DVPkAcrJzhNhKWW3TlbmCyvin8yzdFQWl5655DNYuAqEPKzZ90h93fVIJ%2BkEmhSPXLkXUuCuwtgtrn8MJb2c%2F5AlJV8J48JvieL13Rh83Zk0gsgs8p4EuqJwba%2F5CLQQmQe2FP%2F2JfjwcMFSEe87JpG3%2BtMNQNS4VDKjEKUaMopogVnAovYy6%2FQFqb31bUd0T5oRTinHstOkUxuNBuqTi7PP0pzt635%2BdIcD2MG3ozmqW0uKXLDWWWCSrhEzKGwUbSONZczhLJdE6Q6vpVw0dDlwoWN0ZSIXHlPajQNfLnTdk3As4M0ggNAt5%2F8KSKe82%2Fk9lEM33YruFx7M%2BBUZKXsH2m8hs4AWOyPUDKCyrGDNqFXhDSTT0pdk%2BaxMP2F6bwGOqUBbjnRsPGBrVRl2dO%2BA%2BvWt6V439Zz3WsCaWSAXKTayLDxxzD4UMDdPfdwWhm9Z7px1hmsRR1Th6whuETBSP8EwM8WDenVwHLL0Q%2B7wOQ8vkjVz3EkShk5yNu4MbAzEqeDqfGjUt5vivR0vucr23Mlr8Dr9%2BEvGqEukAFBZuRawLnrH%2FS2oFUrWHdJR2o695HVfC3MZDav8w83cMFajB%2FlTyHw89Ed&X-Amz-Signature=46ee29212bf015ee11de356a33571d87f579c1741c8fc73d405b1a0773332a93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
