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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RU2R55%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsU%2BQWBdxRZjS9YwR6eWB%2BeAK02qlHMf0aEX7NnHjQbwIhAMeoQX94S3wOtC0QvhfTQGOolZS3Q%2FPw2cEV0L%2FsReMnKv8DCCoQABoMNjM3NDIzMTgzODA1IgwGvT1cdSpLWjXOl3oq3AO9y0boDebf0gGqTh651OGaWKGsF85jWlExN5S2sFxoBVSseaHfbbrh73qIW9JbPh7jYNrNmWvOVWTmz68OFvBgyTX8I9VO7mHwQl6%2BoNdg%2B9IYM0s9buR4AS9dIStZo08cXy3FXdyFuU9mXgVYludNsc8d7KJMuMf5lmfBDhe%2FOrlJ8PARmAzfGeZ0lojkKmMzUpHdlVYbWKBeShHFKwjZSG12q9RrZ4IFNIvXC7ClbfOgnxOAZULuNir%2Fb7cJVYuMrU4B57VRexhV%2BDw%2ByZYUmytUyP0o1cLm7SBc0YkTHeXLVzFwwMZDmm%2Bi%2BdpRe%2FfksBx2ZFQppcsgGuO0Bd4z0i5e%2B6oYv%2BCoGS4%2BjLycnUDuMWm8cQE0hdM7mjX2jVQwly3ht4OCD9Y3JByvX6o2YxVxm0D5wMjUsUwxZ52bfm0YJ%2F1VQNqYobZvC6g%2B1LZeHUIx%2FrouXMuyu7ONVOQQMv61%2F2Cs2bTrUFVDnsaQn108%2B6A%2BLPs548ctUkUk%2FoB27g6keIDW4KBMC28Tu%2BbuddZI6Go1sSnuIlR2h3WJrLooNDFc6E0WUf9m1cVJ6orhXf%2FgPrnc9MTVi7dgHuiA3u8r7wBibYOwRFP43qp%2FSU%2BSLI7wdem2bv1cSzDm%2FqDLBjqkAblrnhOYpJF8B4Qs0PsOn%2Fpt3xoim%2BfOdqDzFM4xMU1FJFBoP83B91hmMCp3cUkWOZ1Kyu7thnbpYOUHhk7WBGiQ%2FB6%2BMR9njWb5O%2Btd8FH9RL51toruMtyQg%2F7MrQu3P%2BueGq%2BUldm1hi72i6kn1i%2BNTIufHrWAaoUCCQnK6xmtfIhZKT%2BtxGkQyn0KvJy%2BzPhFXpj8T6wGq9jQaYETAzSQMPom&X-Amz-Signature=1322c4ac10c976ee46717807918ac405655b9bb019aca12600afae3240126210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX24ORP4%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCF9VspbSV8D%2FB1MdC5lkDFfntcmZ8smjhPRfVPz1uSMgIhAJaonuyKaGCippTfEfhj3NNY2KHaQJhPXfztA3ij1uxxKv8DCCoQABoMNjM3NDIzMTgzODA1IgxvuWBa3fLRULUqhN0q3AMNLcykMxLRHZHhCOFgNgg1ZfZuqYj1yKv0hxtM6jLENA%2Fjb4gpASLI1typ39eXMyWkshGX9F8eqSJLl5%2FyLYYZpt8cBODxom%2F%2BPwt7xuTA3mNsd%2BamM%2BpCC7ZVxVjMo%2BOvbkaCfDSgnwcPCD0y8lnQI7txPxLPCfiMk5fTSuQpWfVdN7ofZfTDGethTBCUUOa2C5XW51%2F1Wf9fQi%2FS6KWW5blby1AISQDKIAS2o2LlGnIulQV0notmElHTpv4q6ezDGsxsPGsvcFlJBQJSMgS%2F5fmRNOOb4%2FOaEB%2BK8APk1SidHsiUbuOYbas4jX0WMVfDCwrD%2BsXCiLMJYWlV2LYSu4XihDS%2F23Le4UrHCRY3HdX4Vzm3dDL1oUKrey44FGn1H8EqwHSggxkblJ319x3rPBl%2FtE4kqBE7s2Jr82pm5all%2BJRXgFVzEvUwROsueaFcpJcHSwY%2Fol1wht0GhwHf6oc8TDXYf938X6NAhu2YihaXKeiEe3QxFeoJ7jkqk8ZBLUnQtXLydgbwUsjJaE6BAxCjte67kEYGoCZIwuvaIM2tgr8oJeGfrN7mDr3WtM61OAI%2B5Vtv%2B2lOdfDmLqnVGHiM3D0goh%2Flafovp6vnvJPEzFf6VcfFDhlnATCC%2F6DLBjqkATb9PHJrwk0cYVSvOZuEnuZUEr8evjgl6wRv3di1z3j3zDl3dK099OQbAOd2dZ7mjt8MSPVOal5FCqJ67twnp6ufP7ffXB2ljmxBbAh5LG9xJSGWVsqDwGUXV8B7XlV93JjSmPgp7Q6D5Dp1LjqFcd%2FlLYSVTlZSXPSr7Gl7yQ1vvHGorl5tlI6rj1DQkE5JsEl3Wb9A9bU7kHamajkXml9oJ%2FMK&X-Amz-Signature=9b6f1b802626fe55dcfd0a503e78441f4aca12a79482c44133b10d41c44781f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
