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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNL2FM2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUtq1V7GKiIb2EdUP3JJ1NEprIH5HDvDpJBtlDlNCcRAiAu6AuhXYmUEeJs3Tp7BfQUIRz1PT27UEGtkagit0Q2Yyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMLA4Ku3h5nxFTYTJuKtwD3ReUFPOYs3LvTGDD3YUFejyz21mwwMoj9YJZGOUe9uNkUqr8WfKTP%2FYhZ96mRjo%2BrdzzCzhT18rXveuTszBlqhmks4T%2FhXM3b3mZR14IK%2Fq2F8qrQ3LIYw38hOOY%2BlmLqgG8hZjx3pvLPqYOe1hHH0RrgatYBjyHCMgeME9XSGAM9P55heX6lIg%2BRDn3lPXOPMVkqJAx9vk6iDkKu7fp7p63YPacPKBQSexD%2FlpZ6XVIq7MY8xfSC%2BAKwmrJ%2BfyP9q%2BiNyxm8CPlKM%2BaY%2BDAKXqi4WbRFel2HCbGvTMqIMevSb8BIkJo%2F6RXS7d4M4gPZsRE0rjBD%2Bi4id4UIWFMjulM6pcOYjgVYXlm95F32c13D4H8Nw0t%2FLeZvzhr2bwPPsZgPIm8mKkxDOC0NB5SW4wpZ4x%2FLkk%2BIKdPYyrSsn0A6itNwixt8W4vyIKNMEnTZUhsMlGo3I63IQLjQ73hnGUyL2USqZFPY7hF4ynNfOdmtpZbc0mEa8wa%2BRUWLQ2%2Ftk3C%2Fm2UXVSTcn76t9z5WYeo6K9sraUZv4Fyw7%2Bu2%2FPCpdf7sZeYor8081lqH1CHvT4tRmGg%2FgxdQbo27hScReRjMqYzyp1DwA%2BLtRmAOlJ7Qx0QD67pnnV7CSwwtKK1wAY6pgFwZwbbDuWLq%2FssoN6KdcrteJhkft0bNmGvHBuTK9yKsh7Fv9dt2GWEk54GSnTcGghaN19raz%2FY6btGi3rlZc7l1to1bBPhSj8M%2Bhys2gcyTf25LAxE7uUX7i7aNjCgBIdgsSgIUSiP1wG1dpNpMDiSglcexJw%2F81%2FEcsCUoZuvcBbURhrWMZcP4na7a1gfda%2FS6EPYwlrhtQDLl2Bb%2B9kM8vTb9IcZ&X-Amz-Signature=dd7ca69590b15d377d8c7746c144e7922e48b4c93f6ea475fc2a03f069db45e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUQAWVG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8PKb%2BpXixC0mdq2WmwG8nHFA89uwhZzy1tvivFuvWHAiAiTwZ9Y%2BiyIMfwiqadnopimIHbNuJ3Kj3e%2B4Qn0o722ir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMBeAAPKYVdalaUcfMKtwD%2B3kLh5m1l7f4NCXaPfacHQPTxh0%2F6pLfNa1WVMplaTD9GfTiP2Vj41Ny0uwHeOZY61uV0fQgR7%2BCIJ1sS1Yx1FFZHe4a4FPy8p3OgaMnuXscJlfKlTITBeRKMPueI9lapTxZk7%2FABjskcBFRIMhZ6dPq%2Ba82Q2AonrJ%2F0%2FkJNJAF7UyNJMNxbWLjWmDUXvuMNNB%2FDBwnQaAI%2BDVcx2bzQ8gJsK5lxIhO9dUB0%2F5WyL01u%2BoMM%2BX0Cer9vTr9JAmwFI%2BhZGDWYYPVojban455VWvX5pzCjHxHrYBDo7BM212w89Nl5KB%2BY9fv15o5aNWafumrIjUcAZ6FxWgZcFxN6wJ6%2FzXvJn9cshu8KmSnuqKlu09o36ucc8KfSf2hJPMWhNMrQg%2FeMllEpZ4Kxe7KIgrBf6H3dcXcpMPOIDB%2FAd8wopB9k852aHZK9GaUZTmc2XaLaJiFdHA1uvWbotYznWkDseh4YUo7jFNpD7u0AF7rBCs4Y7pqf1KLZjF2T5oAvbWmloLeSU1%2BD82Obc2KBf2%2FWz41LZQyPW2QXpxBtwG056ePFRi3QoJ9r3w7A2ku8NoflwJYN%2BgPbeJ6JhjgVeAu3y2fCqh1fgsRREba%2Bf7EwLDK5IiQ0V5sCWowv6K1wAY6pgHBJsApSVDU%2B2trDq2D2rJwJQWOPWIOjOsO2tcQeRlM3axpCnW7Meh6ZOi6RJdJ5jlvKRs2VBeNWOcU1cnpt5TiW05Q9oQP3k1m2eopI%2B55e8NA261vQHy%2BUiidO1egbJgKz8MBZDHm8Na3hK9xiiUbRWxFxJPWcnjCPIot98ZqN9YXUK2kIeCp00ulEML6Ry9XUbhbefSQKr55pZ3g5rLMctqH5kcQ&X-Amz-Signature=56b87c01f7448b5d915df1e66983a49b9172df96d9f48abd9a02bce6d93979f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
