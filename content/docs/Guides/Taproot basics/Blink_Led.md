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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBVMBK3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNHierT2wN%2BtS5dlIK28%2B%2FIX50chCMrGSovima6ilJbAIgTuZLpoIl2IS2MaKKt48UQ7BE4twGBKh0%2Bd5Jlz%2BojM8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC9fJd7VleLaJpNvKSrcA57Kkf%2FW0JIWigoqkWm%2FiPZ7b3IZfogc51X3QRzOzjcWTNB%2FN9DYSyoFLyhKk181swH%2BSu4CaXuWsfBOM52ZXCqSwzwkxjGlGvlG0sMKp77iENY8ZoI2G3NMpcjGaZFmDjP2hxzjR9EOsWV8RZe%2Fuqof4FieLzTPQCV4lQH5NaaU%2FPObG9We73y5Oyvhl98tJNUH%2Bqu8NzYNnJQCSPp13YCOzQQjHIDWZDxJcmgtQ9bOHo%2F%2FoxbEAJBNVaIcett6FBFSWOhZAE5LLLGc1ngOvov%2BExdMQXDy%2BszloavanzljIxSi1Hak%2B9KIroqulyvwVhSfJ2gNumelKkuwZlDT9%2Fn2G59Y3vfPv28eMj4oF0lZuXDxJWJ5Bv0HNkrBizZTv9gxtNnExgvhpjbpBdRmsFxADIZoheLY7ux1AQ4O1md28sPK5e5thD1LlTiOmUkEI69WnLkCIVuOW%2FWR5cpn0uLo51Atzf7wG3xVVftMqR05GkQcRTr6Y6ZymDP90FcRwxBUFMDbalNo6k01Ah2ylbBHw2jqQAeSwpWVJ%2BugR9b%2FNvvDf8MzxnKaX%2FHeGvmllLbSK05nROjGl9Y0qVbMuAPY%2BNPv8Csjn0ikd3w5y92HLJKXxPNEJW8bvTk1MLPHpsEGOqUBmbgHXCGm2hjCCPq%2FVNAiYB9J4Ka1UZa1H72LBixGdzvxO9Zq2QA3m9fdLFFnK1hZuro%2B24ss%2BY0AWJKE11ZcHE%2FsVBQE8KlWNpX68lETxMyfpjdcQWvPCZM5EOaUXfV7dTDNejlhgZ3WcJPTBH5UPfUkDB1ZzFRr1m2Tv%2Bf%2B8raXTdKKDl8cP4xdYUd7PBjPSSfEMrOeGYZoolyL%2BAtGwMOUYUcb&X-Amz-Signature=19a7834d4a7e0e453010c84a48d66ab72add21f92f9908e1e46a1ef627e87349&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SKLQRV2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQkV05w79rsbj1EBmrLbAspaeZchj4smH%2BRi2Wl155gIhAKaNst9hsYOuyu%2BA3P13%2BQS8Z7p%2FUnQPcfQKJ4A1HuAeKv8DCHIQABoMNjM3NDIzMTgzODA1IgyXUywnJThT7BEs%2FHEq3ANyKXTYxGIE4wkOJRySGimxtout7Q07PJtOT3iLdCu6juWZzN0bMe%2BiwvPXh7QtTECMYzWu4dP8JFw57PFhKFZh1VOYmJd2D0uCzQXvvSJTyAg15HP5S6ZAFOB2DAS3%2BjICVm5HSCRk%2Fa8RAgbieGLLqRgduhKRJ1SP%2BZOjP8%2B%2FAN6IPSYSWP2RLc5xMTfn8Qo8mDQ75on1znj9IAbChxOxbiPJG%2FOAZTTyzJf1k8kAdet8S5hTgJWA9cVQoSBsI6fO4iRML7Clw6T0SfK0%2F4JPT6PvMl7JG3iU1Fn1%2F8%2BlP94H7IGl5WnKOMJbJInFL9DePf%2BGdrrMeMuHcC6LqLb4%2B9cVArAHXbVy9Eue9AHoB1MRWCkPHssfRPT%2ByRiJFu7Peo60IbnAKsWcQAxCILqj1Jd23GVQisel0PuUU0ldddXfpHENxVS4n%2Fkd2LcjolV7EIKgo66DNE3XUHvvVD0ZU65m%2F9H8pRvxptEFyx00MTNUPKgthNZ3axoMD4maMm1MLc4g1AXn306EYGi6kBgNxRz1BEH4sX3fzoXlBh5YWwI5dQ1fo5EyBjCt6%2F7v6Z%2BIz3gE%2FLV9A1a9Fp0%2BtRXkunlgjtgqVab8OKJtAQGm5WEOi2%2BOaWHMzN48OzDPsabBBjqkAVaxnfNvXXUtpvn4aHPJH3M%2B1SGV2wPs0rgVzxHI26pJ2luPBii03WvuAZvbsyx8L%2Fw1sN0sKWrzGqqcRpF4XiDRh0ukWiyY%2FmVM5ZBiZ4n0y%2B8VqpMEC2voT8g5tg%2Fa0YZp2rg4Hn8xuTFpUiyWM0jBN4WOkWbpAlNeooHfS0qNe6pQIrjfSMFgimrYtmjOGePKN%2F9k7wNTl77gFt99TDRpTrgE&X-Amz-Signature=60de7540b512122b6c181225909b5c089e0e3673550d708383906d2928afc6de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
