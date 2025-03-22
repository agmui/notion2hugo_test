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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7EGNSGF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA5wukdIjL%2Bj5AndjSmSj4kqRqpCLrNGO%2FuacAGmh5XNAiAKykAhvYUzzj%2FfGsFXkx3bPwiUX37c6CVO7SM0Wc%2FRLSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyEc6k6NTOtRBVmSKtwD5xRrLoGFnEs31k5zmn0zs7fEBeNr%2FOGJ823d2%2ByPem358gqMs365DtWvLfzWJMyX1IclFEdBj9l1W3%2BIerYTOEOul2AutYBBjjonLxXoAVrr%2Bs14a%2BT4%2BP3zGScnNNs1IRJ6Z74pemmftbrgtZKfgY06dhT4G%2FyMEVXuCaX1yWoIxJkVzZLDDpoEjulqtTmvcXCyeDbqIGs9KgkDnM%2B7XLzm7UsvZP%2Few11T%2BWEWcbv4fZNSh9cuehrn4qoL5J1lqLOwGUZD%2FmFAPzZpgKhY1RbmowqpGhIeexSyZOJjPYxLi8Z%2B6duXdQy2%2FV3yKZawairHjLHhh9ojBvRpe1j%2FyW840%2FW2UVsAjXTq5aq%2BZzKVEB%2B1wwozv6T%2BwKcQ9TejM70uO1g4EIALbC3kr4h8NGFEV08F0M07epezuydIKrAcCIwP%2BHv%2FbEWUu1U6uZIuu0Lrhh02sE5yU4wFHWBv7NwEUjIHSGHuRDBz9%2Bmgn7fTsC4tpqX4cTJtC4vLzIIXvyOpo6s37IwblUBUTRqP47rzug5N4udx4EkX0IyqMnvm4ac29ZI60qMNEu6dOrwdCCMseEAfU5Amg5%2BDZX5CsZ%2BYaWppyCH5uqRhP0cR5lk66b8ib0dEPH4V9Jcwovj3vgY6pgFmyWzHi1A%2BasjbzZWnc5i2Abgg9AKQLpVuWT4YXiMFPNNTkeEqXsa%2BVSNqefr%2FfWenrcAntakKdVsygfaxYyi7pD4nxTmFhLYCUojkhwiMJSwVEYrdkFt%2Bw2icmdZbYXO6sh79eVtMRs1gXaknMS6LmU7RHhLjpY1aX%2FTBJYyo%2FX7L6%2BGYXMfgdZhRoXre8EIq0ct9AXB%2Fk2YfJRKATJsRMiW%2Fi8tt&X-Amz-Signature=477b7961df04d7224a4455bb09881e95956d517b2caec076d187b2190d8645ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOJWYXW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZTECJZakGhx7Rh0WG4ZFXyq6xXhPer3v0BGfAH716kAIhANvUgB5bL%2BRD4FQBGGhN6FF9AQiR%2BaHvOHhtMAbp4LxnKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy4ELOfA6C40j4ZBkq3AMI%2BYslYwczYxqK9H36QUN6UQD%2FdtgBrsEy2ARW5EAQeJ5x7agitZfSaI9cA%2BPX9dqsx3qnPgiSKE9VO1FaFfb8mFxjX%2BVm5cqPTiAns3CVBKFx8cqzOeHQJe20h98hfPhbgPMYzOGdPVWnKCGV%2Fk%2BWSJRq%2BzlqEfoukV8VcnqMDAQB8pFcerGE6ptb%2BYFhJercjNiXbCWl8%2BTpXotlAzwan45I5DO9ksMdIeRM5i9hxNl%2Fp%2BdMxzfrgPcIIb5WBP96hm58Th0aFboMIbq%2B%2FPqjr1P10nVNd0CuMNjEezz%2BiWmGrHJYXUker4IjAEJwjqEDemxgWZZRX%2FsQ19mexlapVn4tRsSb8jOW8cr4at7z%2FngTprOgvJOdwzFMAQEf%2BdkCuXWirkuzSz4rEa%2Bai40J8fXqs3%2FEbNOCjedqV%2FfqAYhvoRGBYqR9dY7UZSsuI%2Bvps985JNWB45zZ9uvtbSLMm4zUtQ2g5HQGctJ5knoffcJ6q0JBrIw%2FfHrZxUnCCHeJcbLvSDf4lr6Sx9jM9mznmWcYuZJoboOYCVT6ZPcTz%2FrMhL46byvgFHA1KYZhAiitpSMnqWMjEvKSonHbqxY7vho%2FaXvN4o4QEZzbixxQkYevHsD02wfr0shw2TCS9%2Fe%2BBjqkATJF2w5DsT58%2BANCrVUnKVKZK8EKzyiFmwsRPYrs%2FADwkuShSc332XOVuoH44LoQ1NhouEMgmJWCln6Q1xSxDQj7t8CUrYGTBuIEccX0rRHSovFQNJCBKKkZz%2FxAG88lw3J98gviTm9hX%2FHHu6l4xonK9SoCHLVPkzFAjwLH2AFFRnT6muTlo1LTfS%2BszP1n07RAOUHEB%2FyCv8v3eqYy7oB%2F3cY%2B&X-Amz-Signature=b5386b5329d6d476011d851655835dea9e2536f53f794c4a23d916c551ab18f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
