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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5E47URC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID0Km8DXvn3dvHXSYJsekUPH193vAWIjL1muHYyOo8g1AiEAp993tQ91C8rNksZm8gfVHgSBXPIGl9KOPzZ%2BaTXwQZoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGjuGFeVkuKPOa7JuCrcA3Yd4fcUzWr%2FN%2BfG6%2FDzEUcHB0lUF9noMMAWzNw85eOkWEmViVchg%2BYZ9rQnxmiuW2QzIndoGGmYEHUJviDrm05bdwWuAis%2Fce3ALjIGsjwtyqmT5gUsWda8F4XCueX4S0M%2FsWXFKBqOco3a94TEyx%2FnAv0xbJfvVPvZ1VWTgoXDYogheCi55hcI0J%2BF9jo61uOEwR%2FspQvoHCmDh78big6dJeQbMIcPqCRT2v%2BZa9d7NPm67i1jFyypsNH2wWKPmK9Xi%2BUDky%2FvPReMebG6c6PeTxITVGfg9Vs59YmZesjeR6AiD1%2B60nB%2F629WDiHJ%2BfcYiDOXk9EIjpEhwaugEQYSQ%2F4EbDYlG7ohWduNYeSYtkPqBzwn22iky46JPu6ZGu2dKi7ccazORDOp9hDwvl373zGWI516bY4ZACc%2BP2fASLBO7AXvsFtAcKULYoBe4q9PlgvNu0LlQV8poqgxUAD5T5fC6j58VWXWwwjFC2EdpGqrrLBNGy3gANB07C5geM0a0zHeGzVMarAUVUXKLtXqPpO4SGE4gq7MhzHl6iGh2Qftpi0LLzX2GGM1jUX38sj7IJM9ECzJTwGIUVbgz8o%2FgZus2CaTjwadmiUbMo0sPWOYjL7sgKTOrx8eMPLJg8IGOqUBFOoR5U%2BEIrcrP56v9Pmz34GsfE1wPidappL1ESkZ5qaLmXQJeaTltn%2BpfdrF7zO28cd8a%2FRQZ5FAtEMJ1x76cdhCT4FsTlYbVCvH7G6qcjGn4Ls1IyMsWtwRtnEGNc9rREHc6LOSVNO1IfWTr6vUtBTDMDsEF%2BA8sWlQeWjRGUNMoxqu7yKWXmd4Sn9AB8zjxzav2RLkF7aU%2FndrUUBZMHh%2FuTYM&X-Amz-Signature=6c8669937d2f3d6cd403302197a41cd58ddc520afb8e0a1bfa07b8e5e3f83d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNO6NBW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDAfpuab8YnhdqCC%2BIn2gZ3KX7%2BTUfGnI5CZBERyWU5yQIgcakz7VFm4R7nLqCQYSnHyGmbXbU4aG6bg%2B8shq2ksrsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMX3o7WthnP1DlPf9SrcA7ENBEcUgSvXDlfe5NjvYkiQWLY10v%2FHCDZkaAJ8k4SAq62%2Ff0iyRHUWjGXieNoFdQBppuQ59aCzPtjVn%2BC6eebLJhJYbF2XVuLIVwSSf%2BOTb5gjU%2FDw53gEXIKn1aLuCLjpbM%2BOSLekZXiJiVIi6mzSSwEhFpCaBjaC0OucUJ83iVBgyKFU7EWyFIzwb7I1z0PxgmtCPGOsCOOOPkuzLXCw%2FODR0LfuIGkshVUC1fru3bkeCLG01pDjTA0aPFquId%2FPyTpT3vUdheg2ygRBdihyc51exhI61GyVYW94%2B5sN5JO3l8FIZXLodEoM1O%2BhPYoSZcR4AncFlgkBi7IwXdjoly1g2n01RkbvoNhrlm%2Bb8d0NsNl58yYVVzL%2BbOujw0MsI%2FhVNo9q89WqkEEcKTUP%2FPwnCn3I7BTecXw49Yy52cuhaZ%2BlQsspHHqJC%2FGQ9rxCgOg7Hm1IXBw3vHFvGqAVuR%2BsMOQ%2FZfPIPATp77y8Lg%2Fjpmo7Mt80I6wxW7afDu0bYrR%2FIZTIH1Txo3dJXs1YUMQcgAh%2BtxetyWynUwTuQKSDMTNwrW%2BjYcSBjpDuOQ%2Bm6tRJGtadM8JiIVAG8oji1LfJfUAm6I7w0iWONOTPi9VK67LHsSfHZy3jMNbJg8IGOqUBUep38Fr3L4c%2BxjNUnrVmO7dipyeCIDtjTBp%2FlkpobnCiIK5WuNwlTbgAzsD93TslRPwrwcDklFRBm%2FO9o5issMUoVEdb3VNVPyKVGvwRteRTekQenqF8rs2xm8d8kxPcIIyWsAdMQwHp5Mm0M36jvjykD81vrwlw72q6j%2BqP2m7%2FjY35QdvU8ZPDld7uGvygcOMlXCWkglemc80ERnw3XDdLgPFz&X-Amz-Signature=9a49a5dd4b0414b43f18e0110d7e626bf2dc66c2a5ca1322e00bacd0b6cdf925&X-Amz-SignedHeaders=host&x-id=GetObject)

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
