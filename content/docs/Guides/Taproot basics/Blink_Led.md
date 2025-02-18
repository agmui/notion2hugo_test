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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKTVTLN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC4nqudoaZQVLUdkvkoe5Cpw7irJyITQRCdzIphMoPATQIhAKjvxMZl0q8L2hRBkArKAYWDIGrpRPMmdgpMHSe%2FPFzTKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL%2BUXdoAV6fyFTOxkq3APrXJyyuS0txNLaeuqRoWA8twkgQ7bV7zmTMZvmjC4%2F3JILfbJZBpV2rIpOEqpoBW2Za6WRARbNjLTrj8XPd01nVOT%2BH%2BuYFF5lbuHgrshOBOfDDMHCeMe5TFMXyONzUNXeR1FGBX6OYy60hANo4Gya%2B8a1cL81QtklBBhfXlOJfHK1hlmjbr3fWdD205iihaMQpOLL8Z427hUVcq3m3%2BcXJm%2FU%2FN7TZOv1rCdUV%2FFFGT3aZe9D5et5Q2IX4HXoDBHadh%2Fr4%2B%2FbZWLkGHQB9ICpU%2Bq1Jun2gOPzG7bygtCpJSy%2BmUCqruDszAKZp4s5lJBtbForHwtTXgzYhn8DeJv%2FLRq7dp9gKnu9XQOzxEQShy6bz2sY224qHGtkEq7dJxrdGu8cUcKweP8%2BhqeirN4DZW1vAPVmvq3igcM73L3uBshptr99eeyLaoZV5jO32BHj57bbovZx%2FYgwyKXfRVsTnY6iMMYsD%2Bxupc9yKoHYpMC13r8ISayMOMsbVhzQK%2FwBrXINNNVx%2BMVO2z3faES9x5nf4wwZC5WUIOLBfEWWiFdR7UZh6QikThg42gerWRVjsDYPHHmRmD36zTqF5cC24cyWGPmF11eotSR77o9D2zTFt6DgICDM11V9szCPotG9BjqkAZMN7jJbXz3bB7wQoZFqEKWhKusVn2Ogdw9PGkNXGXHkn5wwtQM5zdLN9wCxMZpVSH2wYvNcW7SspHpG4yuOugSlLsHKIWG%2FEnqb5DvfP3JXGuQ7crF2eIMwKfkV0XUCWpKtCPJNVCWCJLUENyi36IPuw0XrDFOv9BhmwbQnlOPnf8pQeVqnaP603uzyld0asAv9e3WB%2F97UTovwpW9qyXxv5EUf&X-Amz-Signature=ac68574b1947aa06270b66ed174aa566d973e7d972c4df8e76c9236a23546c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW77FX7B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDb1BaAtjKEOgXbiqquN8JxRWyagloktBcAPPaY9mCEBAIgOFQqNKqyaN1E4q6L94aDarg2tChqK7BURqkfhw4Z1EAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrfU4%2BRreKhT2oKVyrcA4G%2FQ%2F%2BlS2XeSM84z1Yqa9I%2Fbk90tBFvY4%2BWdTUmCosnWyj25wGJqb%2B03dT2n%2FlfGnVddE3G0Fn%2BGOVf3wU4IMQzp9DSOBAIzS0%2BelNKNPo0o85NzFU8uHqN0EmjuckuxZKzh44XCD5dRK3LZ0vKC%2Fz0PyFIRZUAYNvXkj4gwjzPSZ%2BlAjQt82tToBV0w0xlB6Vt9RObqk%2FdsiwCdhmzMLZCrlr56JmhTOItL8T45ACN2FI2WCTu7syaKScelucK4cj5N1XIPfiwYHULQMCM%2Ff62DcKDvQcG56e8eW0I20yu%2FYXP34KqG48lqKD8TbA10C6%2Fr%2FrWqKoxzgz%2F5tzZ95dOj9Yu0Q4XHdSRcRU0f3jg0G8GwsSnyQdp4nzfJHp3Gs8F3DAR2h9MRaA69eqMWn3gS7e5U%2FOQbDVR5lz%2F%2FX74qrQ3St9xcA2snEoZKx9FE4jejfG%2FMEBVpUoWkRvnMnMKo1zRY1%2B6aua%2Fpc1pnqEMxKeazhpX3EWKQiOuUzI2eUyxaLgtpRB3F9Ng23SGGUmQIgaGwD9hS3qG51xS4VbYLHWmsek5Tn51V0GUeJ7b0PFd9DoMDlKIvkB2rZH2tDevLHX5LVN5rw0vlfmO0ruiRAf1tbzbayRxUearMNui0b0GOqUBxKeCnKcWe6%2FcDpiSqLoX%2BprVaLshMYO08Fq9mv%2Bmjk4xOfdWEzBnAbhnHuKgscRVqY26gZJENd8VE96m1oQLU17aGC%2FxKHLSeYyg0vPpVoKvi1lWX6R8mhPfaLIWpXax5QmYR71jD9%2BX22PHo5%2Fpheu7fz%2FciV8LnYJFcwzPIueNVyhd0dEJFRX20FDrvTL0ELrSsQlNNG6a0yauTbm5nwiqUnWJ&X-Amz-Signature=5dcb7f031e99ed9e05db58859a36be43fda3ee960069f9c173c9c84a1ff5cbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
