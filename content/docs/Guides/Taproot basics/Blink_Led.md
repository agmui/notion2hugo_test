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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MIMF3Y2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAYRmVeEDvN%2F4jzGIKhEX7iMRmNi%2F3MsoKUKF6g4D5h%2FAiEAvJXQMxR5WrWDKl2n%2BEywsPqzY%2BtX%2BdgarcXm975V0fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA42Nv2XYu3Puq%2FAfCrcAz9rbrdEACJPhaa0fLrj0%2F3AGw2%2FJ%2Bh2wV3xoXdUiYD%2BIJ%2BWd8rrdz0D9w5y%2FAoHS5SGmahdTAXjIvOzHcyMzZkuP8ka8nxPSRgco7EEk9DllkYAEhnmbh24UeotYlYU8zSI77IUBLYfVCuFP7Rty%2BtqYWOVIAJBFlWuxyM86SwAxfAcPsP5zsgxk%2BfGoYOzaaW3LMhbsyJb%2BVjAa37b6QxVHbY4lCW2AP46YfgdFm7IjGwdnZ28Qs9AjO5GBqt0oWkWRn25zBSDTe1OQGrWtQ2ynWWJoGEw05wU15qmmIDbwh2LTvWa%2BmiqwYxx47fxa%2FwGuo5BKtTx7vz6%2BXSmbBKPpuetrR%2BjhRYrPjkQejEO%2F8LcZqRzO4iahXxmCCsQTC3MKmK0I1UiS5FgB05NQpyv0ABBYnhb8UkhcziL51zA1cUeDzlTaHfauRqU%2FJ9I4bWGL6rjfy%2FrBBi9VG8NHupKaR2mGze%2Bef8LnNKciGl7lJBPsVT1ZRH8pIW%2BST%2Fa7%2F3NRkEPfR%2FNq6iKpgImCE61wua83LlH9bP5ZJtojVjolgoK2JJ0169qS1pccGB%2BHTsBnafb7kIfrsxuRPjM8YhrlS1USpF9TxwETi7t1e%2BtZUc98KEgumTmGtDLMIOihL0GOqUBIo8TYCIEYXDRJ3HqhSJSwTNx%2F%2BtWGGyjPsZzBNrHAdh127iZY033SZ9noggIHGGYjXqPTkms9dBuJCbkndnK9kLG0WFJPbc57ZHWXJHdv0xoYkUm58x%2BsZRc2F%2Fm%2FSl%2BEclL90E7Ft6Zu7S1XL4IOlDZg9AasKq%2FxaOQbuyBywm%2FCalrY0gLOdSbo0kcu%2FDHrj83P%2BOw31AJWkGxxKLFMtbFPWZ6&X-Amz-Signature=a377c496d36f01cc38d21a002a8984a8eb1b42724e2f68a4dbb65ad3e946ad22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIS34IB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE0TgPkbq5owmprdBna9HhBwY3gxLCN55tc12AwOkT7EAiAZkjGsiN7%2BvXWZDdNFyoec8QiHPiY0ft4IPd78Zo3FjCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM9ZGSQ7K6GzK0zymEKtwDnreVtSUmiETNj4nZ2HBmjTrnSIP5qYyDI9PVtuxSO7grz%2BsfSmN0itIGA4XdjyLfrH0dZWCNullh0F1cCvfJS0aQn43dFr712fnB1Rz1qFnj2atBwbamUtbVsD341tVcnO9vhTwEpKeamSl2ErKhemiTlMrnKUPDTK8ZrNnjNSqXRtX%2BQF9oANYtmeizmdN%2FA4UBT7eAicMCzZyjqp0u87GcTnuXzVMUy1eLrVgq7EeYbMNI2FrFPxvbaN%2Fzzbu25Lm67bE2Sb7RQ4N7z6ssnvxHVBBBTADZvyqyVQtiOcGtZU7OC7KAUHzlhGvJoOXL9RklEPBc6dJqS5DRxwP5Y%2Fg1b45EPPDyoNTcgKudXrwgcsu2uHBgq0ZvaW0651rL5bqIjkaxz2j7XFvVwYUm1TjXAeRa5F5YjReSFLJr8TfhjEIAyRbxA7H6cM6%2FFN6x8BfA8T%2BVFjN14hN3zgugsPWQ6xaFRYnJuM2tlQxhqn8vGh%2F9dUCRW7CPU%2F9oIcHE8atDJOJ41ddsuUoXKF1L3dOQQmSqTs4u2%2FvyaoX5ME3%2BEHtRWWCfhSxncQYx77B7%2B5L5RxIY%2Ftgm7m8eaoEOTmQWfBGFc3F5S%2F1qSqU10YVXr9AkDgl3Qc0%2Fyb0wwaKEvQY6pgEQj8N4DrDSbp2OdoYFWcWQWoM8FiGXuSH%2BQebfSuAOsH1qjzIID%2BtPi90uPvmmw4uu3W4JdyGS7n0valeLSytua5yN3NaeVm8cmyZuxXGb5V0xFG0mtkXlluleogq9QzXZZhI4zAr4nQbQlB0dHa8uxw33TNlNFqRctVP%2BR84JDmqPrS48rTVwfNw%2Bgkb%2FBVTNWi%2BNoMdVsKqTqY7Cp1FTWEZ6sxFc&X-Amz-Signature=1491ba4442523a57a6b348791bc339f4cc0048abeb104a8c995bf2c161bfbe62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
