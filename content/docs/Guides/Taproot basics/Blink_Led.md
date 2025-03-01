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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QBKRKC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDmDIevwKDeNZQo10IFRQDcDFS6qMYdi6j07Fm30h%2FbYAiEAowOw%2BjfF42r9K7s2k8sUvMYzS8BQn%2FobaL636rq7PiwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9W5E%2FBaR9FO2omryrcA68dpVX%2FGiyRxlhX7f62dHJQIA2%2FxEbIrKZCRZg8nQqDIr0JCk5MCTM9LehK2Z6B1VoJYBprs8etb1XLCOXEnm%2Fj5gk8MHbI2SCnhq8UATrXGmsMNmJ11YjLt3uQkpz6GFsXR7h8WckYu6QubMTwhQ1Bo%2FSZ%2FUJFrAYjr%2FKG5NFpJhY0esfpdKLGehcUWnHdYGPXCsudzElzDo%2ByaPq8W3cJqXyS6tabEVXKbdeUEVWeKCXUGFZYEmlCSiXHy%2F4pQVqcom%2Fhl97CHpc4PfIT8ClPOiI5rYHuiPH3RpOS2zLIimzhgxwIGhBbbX0yfem1z3vdsFBY2YUnukKgEHAi8FTmJulXmZpHn8C7dZBBSdv5OrIkKZhSrqKjrEJd9O59RAnWPP%2FoaKmfb3iNc2MHEOLNaVQzlGX%2FGLhC%2Bu1ftefVEVg972Rm%2BtuBuBdambcEtS5SOGrKPOrMDPuzT%2FTPj7mWRagfbj8f4xfLeolRREcd407wWrjICHNBMn2VTW2echP7GjaoxC7G3vm2dJuBiw56Mda47sPxL%2FXdgCyledCtPPpmh63imLjm3vDU6V1vQnbsLTgd65D5uQbcwj%2BcLL3ebG9UBY0obt4%2F879pRZvtQRhsvdZCegimiGw7MLC6i74GOqUBP0vNn5SsHTZ54b3zpH4JP3%2B9xncZgP9pWZMMnydvLlGrvbL4%2BnDqA6kigAuS4hiy9xttrFwuE6lbYSr0%2FLTnWFtxEE0%2F8AKjDgp22DqpRkwUbJqiIW02aBURrXXFKOMKVQmCrJqA7O1NYW%2FIBwvQATZXIvnpxci%2Brpbl9KwDMWYVwYR8vrWY8iIfGSQLKOGQEqZwFCFmZExtWpoKiTu3pgAIRveY&X-Amz-Signature=794801c38c43ca02fab610224bd7f07d9db25ade32f809401e8150d352772e54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPQ4QGC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICty56FlWYH6fje3vEY2igJ2Xw9nnHRm7XxpJOeQWznaAiBOg8ZKOo%2FKbVODTP8yQseKWsBd6fXYYkQBF9Z87eRtKiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHsC7o3HWx7eAk%2FciKtwD%2BlsZdG8%2F1iEgsHa44b5nixRgSUpftEonKJrmuBn8Zc%2FmknyWr%2BCdgFLwzAUhvc%2BVE7vb1v1DhYIjIKN4XcKcwXu%2F2ArN7QzUM6gNZyJgKozE332GRsAUj3fLLILZ5l6JkZzy3waZngb1hQVoZGfCQS6xNTjB90rbAe78kxhGIE051tUCPGPgy5uC7LJvA3fXPMPl8185cTHFdFSrLw0aacW3gtTWj2VdaMJN7kSsTA9%2FV3TKWbZICEPApFQUBe90T9f89aUneMdNYkekDTS0ICXeFspZlXW3Hq3icExEexpu8q1E%2BYlBHpAatRIQJ5hNFwb6EWJNDlxuFYgcbAlJRVHX%2BA3SjBwOfJcmsWWaEg26WsNDw3BF%2FO4%2FV5JXrM3xpQOxAHmFBzrPnJLHrTgD6xRtILAjmHHdszE6FcnlP9k595j0KzH0yPeoWORguQBxQRYROTE7mvXsvmQK2u7VWeMqaMnjzj5DVPzCt1F1R1zeZ5c852Wd0zDSqk9hDN6P2pFaJ8ghw0IntiSEhv%2BHdCKp8WcIlD6iafmgV1sd%2BXkym3zRWqePJi0nU1reRRtsrJl76F9I8e5f%2BucsyIpQ%2Bt%2BQGTeuonA1ni2eYqz3fMWM9I2oHUrj1j%2BRIXIwkrqLvgY6pgGQMG1xvzQg%2FM3wbUQmTuJj9KBjM7aIw0FnZKzYC9FULYdayxjNJjFMa6%2FgCooRK9WVB9mosNKS9rCQUwiMFP6M%2FzfhUdHQaWAhzjjjryOGh5MA67b7ksMfjRh9zEdbub1LEYmX2UIXqusouYmR%2FhyY%2FKWTIYQci0QpwwkoZxGU%2FICbQEMJc7GcUkHDT2jKEanRRGvuy%2FV7s8HQH0qpwYiohmuPPJ%2Br&X-Amz-Signature=cc32b4fba852538bf1d5bf90f8245e3aa566341cdff2278793e3e972aa446b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
