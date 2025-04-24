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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYYYLVS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgI4U5fdh1MyL9Ca0RkuY%2BxlsqBEwvuTR4Th1XnUgkcQIhANfagV%2F10kBmr3Ykb62ygJG81cDDehq6KsAEYQtCH7d4Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyXi1OjeKgRc%2BoVkM8q3AM17z%2FhdxkBV3yaciMxTUXa1oDYx5ZzeDSNQrekiFCKLp4JuH8THDrj3wxSIVmG7c%2B%2FzCVjwgPzt2aLna3Yjy5v%2BugC5hvOefChFsEYIxcQ00Iq3PaYMFMkNEtyf6yHkG9NPNbWxgGyG6uxgjwc2zv6X%2Bx2ug9ibJIxdCPACLo0dokrSoQXMU1kWmyBnHlDwcr4K7pJaTLR1nNhD2%2FQa1qtyARYkWwk6H9Re8yod%2Bvm7YweiW9xhzlg0m2lEznoTAZ5B8IXg3cUFoXroaCQyK1EuYTQYkgwn%2FZsIiXT8coXUXshriS5bwJm3sy4chcYXjcaWiK21FL7ZL%2BfH2q4dF59KvqU05G%2FI0i%2BU6jqlIFln%2F%2FC94o3xF5cVCh8ZRxtklCnKRQcpmj5trn%2B487O8rS4oINl6cdIFEw6d8JZ%2FkJMV4n1ao9yTtmkadnIto22LuczNRx0QU%2F2GAWpjuP7Zw0%2BDOZJXvNUcQtjtDMhjejbmIrrO0pac3j9UAgDQU1E7xWUlPuLuAj%2BNNGpWvDZn%2FLUB7xxUp6%2BYHPQ3jeqWl5sish6AMQ0nBr6PKIaYAAjDOx6JivPomyJN0YuR7i8SpE7LNdCi9MPeZvOLDebXVbwQxEZuMGHnMx8ITX6%2FjDZv6rABjqkAdLKVWgyiFCrIC2DeA7AZUkRuQ1fmmahzH5OG%2BMaWFi4IGGmf79jU5FqdDBEcueo494JzAO%2BhMQI1SPzQKl%2FMQosDkTUOIfDgMVDbjiNX%2BOtnIOettaSxGIcYs%2BSPipQcBjhIbhCsegE0CTB0BNTnUkBwvdJuFrAODtBRkChe6N6ytMIABzDViL24cZeCCkBZlkRoeHe0moorshXfaZ%2Fft9SPra3&X-Amz-Signature=27268d4122feee640beea5a13476d52a7be1782fa8732730745c6b4aa3d4f766&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVMP24U%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhKCIIJkQIx6J6gxqcKRUC9ZXE5VE5K49a9ZD%2FVGSXoAiA5kkOzKpCY%2B4jlfmAmbeDTaHv%2FjsbWBQIS0P0nLTk0kir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYUT0aDFLGTeMi3FjKtwDJllGWUyZ5GqszBY2M90wHDJhJQALmT%2B4htRUHU%2FMC3Vh7%2BwjRZQboCSJin2QkWQAZiJkgwYH27L1joBzgevj5zX68RYn%2BFCufcP%2FKAXmqmtvqIR%2FQUWkRbiTor5G394B8oObFCier%2FW6Nwlq8zyPmtPeJCKWQDO25OrZfU%2BId36Tuk5VAhqt5ME0L9ETLZCkni58DRC9WVD9Lcw2UgOCvytvZWZfV5pkuXDC6ukV7rDMsCJofmW0zGRFl7%2F3Gba%2Bd8x%2B3NLmPKDnlNWbtG%2F9%2BmeG59DvFqsQ%2BwPZvYjmbI3xEsF%2B279R1fSK%2FSFCOYiIyg%2FgEvONJmV3OGxrcRC4cD9KUhsPzPQdVKdiYVw%2FiUPEyYJ5NHogfuchvvh4MOGMjBni%2BwJUG9K%2FJ1YpB8Mrumme7WVIoH%2FkpLcvJvAFrF4oUfoOjjjHKhegxZ3c%2BV8s45xLCi9limb0TxfA1kLzWRCiw2Is7bP3TCDwFus8wYBL9Lek%2FoZ24Do4iOZRqIv9joBKqkm8daah33c6m9vWwu31xBo7z050eFLqsJuwlmPSmuljHVmt0D5vl12RTk2%2Fa1cZ9u5g78OknOeyEZa3AXkCuCIzm00LsRbMdCcBGqpoHjM9DeSuToA5Vegw8b%2BqwAY6pgFi0R84Olpjwf1wjMVD3adG4I62PZvJL3vl0TDmaWTBsS16oILgnG5MUE3FWLyjfLiyMoyBhVzW6n1P76Nlu8SucgnObHuqm7cmnIAJMsK50F6wvxu2gc4q7l01HIaWsLsVUJrrWGJOh10KB5%2Bvgj5pFjYx6QW5nPdRT02Ha%2BOf%2Bo%2FtbsulwvgnUHC09Nk%2F8Yz83snuzFTk%2Bk6%2B8TFQH96MXZmy%2B4J%2F&X-Amz-Signature=904ce096284a3225b6a48b8097527d94539657696179985c7df861083f01c848&X-Amz-SignedHeaders=host&x-id=GetObject)

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
