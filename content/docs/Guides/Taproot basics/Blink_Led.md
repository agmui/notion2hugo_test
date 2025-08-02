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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EE53CSK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1rdwPtl0UTsxG4Mzdi3GpHby0N7FslwaIb21%2FdQm0XgIhAOtnatVRu7aWvXxb%2BnedRr7Pik1CuqHOiv%2BKtKaJ4MNUKv8DCBwQABoMNjM3NDIzMTgzODA1Igz6x1fnEbTETAtT6Boq3AM8Yoi3fyW1yJUshkryt44yRW0e1XZxuBRZ%2BXfHqF2MfHXtLWkjetlzVUuCr%2BvWQhXJbbZeMYg%2FAM3RVT%2B4EWBb0f%2FLl83yjOY3O1Rkgu4c2EiIBqnL2ds7IS%2BWHIVgXZzJlDaITCQObHX0g%2FWMJfEiK2pVAHKvmMkxwwlk1jquZX1jsxPLw8sh5cll2ut8nPwuBWRm47aQEKYt07qf%2FUpIwjYCC6YBpPM2Xg%2BRhb8kSf0M4JFYm1gXmbyKGsciKFxDhB3OFU2DD4cltVHEYvA%2Bjetl3gyRbhd%2BECpXjgtx6UolTx%2FdqeiCqTMTCF3Fms%2BELg7kC4svYTADxtxycrVzlJ1Px2Kx1NKqtZULEEfSXMaQMlDtVPI%2BFwWlQ%2BZrSFW8Y3%2FeF1SuEili6jIaduRVHlJE3iTTBqV%2BcOMUvjfrnF%2FUWCLY8oPlMGqxxaHWkeGibvpM6wU7uCQnM2ZByOYJ1ImVtpcTYYeCL1jhhyDFwfzjRTf8lh4dUxsSa9l0ffTIdgrJ2Cg%2FzySDhqcQE5e%2B7dhEd0yR0qq1cD4JF%2FbXVw53XjQO0cMzPLqoodr%2FlI0RKDXvBlyHzf40Bb3Uwi3kyeSO92HRLK4G4lwuscat13wVp1AFW%2F8Yene%2FQDCdxLnEBjqkAfGthO0pwyfp%2Fzjr8pCuoReWWeA8hPIiYcl4oafiqErTI6b24%2Be%2FPwQXxnigWbEAWvjgE09T6Hw25gcmWBWKjyT%2FY5V4v7wMsG%2BB2Q159w%2BQt6qxDFHf4AeDw%2FE9i18meOCgqAUaXeK1K%2FZHzGUTN5ebPJIp7XDKQg21HwzIw6dr7EvkmsJf%2Bja31rXcFyyouCbC1FHnQDB9FvyB%2Bll0ZYhdeZrS&X-Amz-Signature=75cdf4dbf9e37e79fe9f7208394617d129ed07b94a9392f2ada87800e81951af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKUDLVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHil%2BDRKxR5zgnD6oOQa5Qp6EWY4%2FWQNa%2BYa58e2Vm0MAiBVW7ob08isY4B8Lhz%2FGFJdUQzgM9mVyDupLDJk%2FVnzoir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMR6moQa%2B5X7u7QgbXKtwDW13l7iJL6RxK2Lpo0R5mYVHpMqjL8WcK7v2zzEyxPjjZW0Q8vjsJKHBxLM%2F4QVeL%2FkEvPcfPfFJ8LpHngoDk4j8kWEQbcIYss5tgJfHo%2FLwpaCd6YJDRf58YdD7BY5IT08FBtCNoUSy%2BIg4Hoy%2Bf3079Ud%2BJ3iIYfkztUKad6Z84Ha0BGKTdZcZJ0N1FG%2BffgwYQ9VSsj5%2F8hbRZ6TRYwoaIhXE1Ut2VQTXwhz0usTFHN9SSLGe3CQl7g9rs%2FviXZ%2FsLQqPZsc1yR26ZrAtGqR0ROwAB3WIrFoEEcbkcMaG3oH7zZb1cl2i5syYBSk5itWnKH%2Bv%2F2caKkih%2FN6YbHuxiPOE1hhQCmoMPgv6EB%2BZJdVDDW07A42FM13S7VYj2PJDyeOEwijRw4bl5Vzn9xTtyXC%2FVicbrtMM5PBiKNjU7j4vSIjJoXg0uhb5vIDtNVu1EdWrj9ynOPiUw7b4Eiwnm2UDwoM6vIcOoBBIkO%2Bmrbr%2BjWyFVqprYKax62EjvRkA7pwAXtTlcP87QlrfpknPAKGbMgB5rumce4DSimDB6NAvAC3sjGVRRQlmMGx4bC7vP4C5oraPb9QVcT%2BcWYX4ebqZjhM%2FoqcgSY8oy2kWgORPl4gUMjPmWD%2Fowy8O5xAY6pgF8RqggQJeHWHdCL%2BILvF9r1OIMHXeFgWMVaXW1Yg0gk9W72PxhRpY8NQB%2F3mmKasSVKx98p3eA%2Fou6nPf0cTw6gXO3HrT%2F9OZUd6ufMyDMPrRCxC5PhyrYRBEvXAKh%2Fr2sTznrQNFlAPsNvbfVtcg%2FeB%2Fvh7QS92GIOOj1EQFLvnP1ft2Du4k1bPHQGXjgOIKbL9UpIKNO0t9rOhkHgkktYk978xwo&X-Amz-Signature=a69624718ab1b4367842f582ddf86b50fde8861fa0afedb5d9714eebd7c4831c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
