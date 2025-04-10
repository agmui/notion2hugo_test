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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPA74LSX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDESQ1XmDUHnpbJ0I5YM%2FF1e1mDpoIy01Bi4MSKVswuhAIgdu7bJi9l6wo%2BBiv3fTRhTqFosJyNr%2FE0qBnd%2FrRODtYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQWufw341WhBN5%2B3SrcA4yVKzIr3BD8F5nui3dMWhJDJTWI89D1P5msD4KdVU7Q2f0Jvd9QZgXo6CCwq0C32kp8SLzAoVMnyRUrKBZuQznImloMWv3GrQwhBUpQZ2cC9qpeFofAGrZqommsGaalg0iKdAFWaO0tgfbrI0bkbu7Jhg3KM7cfqGtwW3IsPJYNDPewCRtxUSEbSCcGgRvc8%2BzjGY1dWxqxPJmX5icVONq8PIlk4Rexfoxm6q32fxkkiCo7OeK697aVNiYSu0MRUFMPIQs76aAfY2EDU27IDgznlnyiDPOJF0%2F9Cl6DuEIuKvTKabjYLb0qCFrSX7VdpqY%2FxzYx8D%2FzFqGs2TZczpb5LUr3V3Ca%2Fx%2BC4LvQwQpBZvnRaK9xTSrwz2mkjR06BYGuROtXIPVhR9FfrpprUJKy3fnbnEKs83OhlfIoT%2BxyW0CYTkh02KdMXbEHLKPaM2fsPeWOQLvEdlKvwB1qdpjzonJtjuJAlZEW6IQgwN%2FtzuxkUKIwIT%2BbKaS2YIb6mVYcACxkDMSADvphbtyupL2oJUzMlFD1ZGAAGVGDeq3Grr%2BUTMDIhsH7N%2FYG5gep9MRtCkhQUvKQIqKe0HkNDd6ykh98KxZ7dQcQzf7k0aP4nSL7KW6G2rI5SzkRMPqO3b8GOqUBxREOCJC%2F9Jl%2BnM2iBGozQzUBm%2BVU5C%2BgkmVZldTDIp4zSWRAofjgHKeMNNTofsDdE7DlVEYcPpu1m0T6czv9sMmcoxxcp26frzt%2BjbIat5REGlrGZvkyMH77vM2VJH6QCTeoZYMDKHQ4pZjRarF6LwAm3m%2BoAleC31O9Z3eGevaF7lmNA5turclTfD7daxP4DI1o%2FSsqwxkMO82jD%2BwJKksbm6SO&X-Amz-Signature=e1510ad21665b0b8c9c39cc4256fe2bf626ae4529e42f95338a431a0eba195e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PTB7S2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH3Fm4qB%2FTiUMq6wjAZy5w9MtX29HntRFA87hq7OV8s0AiEAicbukssvG3QftScHtnMzon%2BhtoHbIdTliNBZnGW%2F3sMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkYWIz2KhdhUeCK4yrcA7o9nUv4A%2BU3Hry6Jy%2FUeadVXbEb13P3RIFALB7IRfU%2FG%2FFU3cPGzEPeJSyL%2BM9EakXyBdCNsxZFdOISGmoQ6m06XlLamVAXMep9O0WP%2B5rbojYarX1DxkWQL0Q6IXsoARQw3N7H57MwZp8yDlEU1XowOzImdKeZp8O7AGel2Bpg3c67rBnJY7gOJUzX9mLyWt9VLi824f%2BparvZqZZhtV604VzYjQa%2Fbn64QLODLScWTMlLcUTWyrKb%2FQdz%2FLd%2Fy9dCkeBsG%2F5O7H8yrHS7QP3Qv9jVRmy5CtTIqviQvccy30J7WXSS26%2BU4pRz%2FqZEKW8o9OcurGjv%2BOCvFUZnJASmwqeDYXFcfDMVhll%2FjG4sZGOn6d%2BGyJiSVo69ll2wyyaQxSSOhbzW17UCJAXzD4m2AkoqKa%2BUvJc2ua%2BwdorXSZrWKUegRNszeFHpDUWm58CABgNfBW30SUE%2BKMQowg%2FNizpIuoaPuXiip7x40vy6U2jKNhEXqMJipKfEmgmcaVulNixqeMbWFLW83igGm%2FEQqllKDPhvLCX3Haop40no1UwyZwOM0fy0ZR%2BFuqGyXMf%2BSh%2BDTrorDzCADUR9aRoZJzWwphp9K3uGNqs7fhBm0VMeMoxyY6hc%2Fib9MPeO3b8GOqUB%2BX35R9WORiNpjApI1M22nwbk81eu7InM38qBKTULBCv4WUfrdV4mPglUSPtERlMWC08EBkDu0d77Mp7qh5WeM1Dvm26RqoiQKDLCaqRJ5dvHHahv17ix%2BwnWmu3rqaQs7Rxl6OyISZwj%2FU1zspJHO8gmEt%2BcIH3QTq4skfnR41bYRfc6wMt5%2B7UGqFYbCLOUXbOQ9z3u7ucEc443nhEO%2BgTC7iO3&X-Amz-Signature=28237cf76f7ad5eca29578e364761efd9c21b9b9bfe99a78ecbe6378505673b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
