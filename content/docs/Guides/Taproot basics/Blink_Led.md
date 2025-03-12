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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDQ4MDL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDCBgW47%2B8nbPNrt5qd2%2BeEkSg8LquxtONt9gLkTJl2dAIhAMgyWmdA5Vl4vMRqvBhY0uWph97GQsv03KTwsCfgRp6nKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlY8yBHA%2Fnj75absq3APaNv4%2Bz1y%2FxYtbSuyW5TxuwO2KAohifNvuoEfLEHrzs9N2NU2oZa3BOQkBMZPPxYTvGq25Ow%2Fo6MwjQhr4OJQ%2Bs9pe5FoFDXFLpqtW3RolD0%2B8nEUOp06fKqniWDf4BNHBEk8v2JfIjur4tRFNJsIVYDNSPsLLHPY91Wke1%2BjwohSfjdtk6e8ItxfeON6GRkqUSTAtXLChesVYTOtRMxTh%2BOGDCzUmz%2BKFicTuE7vpmlhqUJ1bkHOnjg5j5T2GeFngGCN5Pp8Ysw2INpxePn%2FL%2BTPy0ty3WaHZfj6h72Jym27ydmESv6woe%2FE6%2B%2ByD2lIgRjzVoBVkRsp96tNOEmV%2Bj4%2ByC5HGIfMP5kXVZXfoN%2Flj3mj1C8MdPZaJ2Ri7WG3Dn4JJ2sx28dC9Ontu976hVf2VsL093AwIGvw95KukguonxUZbVhcRZMurzDvkRrhwYLFeuwopnNJnuBtB1BaQOY6z5wflNH9i%2FB1sSwmDXdNT0O9%2FslhksipsHA8Lb3hCuCFUkXdOGVwzo3qIYVfFatj0ywT%2FDDr66iqiOEjfmOw2DXeZS2Br%2BwkmY5aRTIKJAvJWrJlO5ko%2BxHKYVuREIYqXPyxNdbKidbrYSdplERUW5TvYaQBwngADiDC9n8a%2BBjqkAQLCVEGZxQq8h7tH0fiTZN3sIqaq0%2BAhN44xHm53waGxa7hrl1p%2BJlg%2BMRA6cp67UUXGLPkakwQKI%2BFaUyG0vwWDgaGxJjd8EOfSI%2BIJ8Y3VBvGoI%2Fu1YqG1xwr9pWLb0exB%2FvfHkHcyOP4eHjMPPtj85UORKfLECmced%2FwCapcTavtkjGmLKnBE0Js3cTNLEWrNAXYqMIsZ868EbbgEcVz9LiPb&X-Amz-Signature=6a76a53060714372b0e59db6fe84a15e2290481b81b8c8e8416de17bedb7d728&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQV4GGO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIG2Jz2IKfBefSjSx%2F2feO6pl25VJZiL8sPZRiswt%2FgqFAiANBFuDCPjw6xD7xNhnGgc4EYlaeRSeYLOffOT77R3ytCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVRbyto0aLNjD3fsKtwDLrhS%2FQ5bxF65h9aPejbxsOjWcS7k4Jgp0SPl4GfVc0U0WV5PacNafrxYTHDT1%2F0ImuC9fF5aS1avHuCe9jX7D930jRtdM4CC9y3dJ2Jy7GIUYIWbC3StzbA7PzhBgvsNn%2BT8Lifv6dInK48kRi0vfGSxA4XlpOJEuskOGfIuNbVVpsQmJeo%2BdT1a5tJUxIKsiFeKVG0aIjeuG%2BZyu40OptQXsnn2LUSVNb84FSKKqELj4r3PmQ%2BV%2FY%2BhlEkz9NnS6K5u86YiyCotz%2BTTcUiGA32hvOW07Lfqej9k12PvoPVMfwvzWCUFeV%2BMbN5ghU06sn8S5j1sXvoadlIrKl8nXdyEpwLRIDoytyqiXUkaLzoog1CMF53MSQmexaoH7wJu6h%2BfMDCsW0%2FTR8YWUiA%2BwgrpIdDs3XVvLUb5Bpzgy91jQBH%2FcMDWdzFc9DhbZg4tlSdvmpShoYBzET4TpW3R4eqCXMXKz1o7y8i0cZUn7UWKNOPIwWe%2BZ7caZxSabvB4UzlqWoO2nNJFzPDrVls%2BXuw9bcLQr0dPaFlVkT4kQGAlG%2BoG6OeMnN0Jr5s%2F15xlTdfJMGm8kMMHvYU6cXzKVrFP1eUND9%2FXLW%2Byy6wov%2Fect4AjjvCK3%2FY6qSEws5%2FGvgY6pgHILFFRD8Ukm0u4BZIPXeXvQLBGRo8Zmd7t00DRMaa6%2BNoCsqTNZSMBvbCra23Wi%2Fbi7%2BVBXMYyQCVK4ZDZH9U7fz02f1BUlIqwoNSB1Cr4bu0DM%2F4q6vhhETztaHaRAZQc0rgOxRUFMhloH3Qz76MOZh551ndwHLsHzTcWiVfmqdfbRSO%2BbOKu8XD%2FxEiPBO8UqUsSl8JxJ5bIjjt1S0lq1Aen1M9s&X-Amz-Signature=4cbe241c6507debe8585f0869bceefcde577165d41987a08ea801e249eaa2f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
