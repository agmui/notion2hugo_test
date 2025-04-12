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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWCYS4L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUrYdQg%2B6Ov%2BZ1SQc7nRuPYIERxb%2Bu7hjnjFKovRazmAiAvpSLnSOGyTL8%2FZdLYfeQp%2BFDNlLYT%2F%2Bo%2FM9a%2BJ2muhSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx3j34%2BbQrlXtIwIKtwD2zAB9y%2FFgLlf8EeHXOXG3xfK59U0QMx8ho0WF65g82VpHxxNMz7B%2BOEgrij3VqSMegAWHJm9O5OS2jqVdz6I0Kr6MHmn1kYYqALNxX%2BSBEThqKPneFxzoCvLWeHveZJAOq1Nu9%2F4OFJtLSopXK%2Fqd8Pf5lGbCQ55PirFEXEpU0oojz6EeVvPkXMgx9gJ8ue1X%2FEiZXPdTEdwsSAt7YHPCubBTFGPDgj0WHwVFrJMaKQSwWr%2FyRnQlAQwh3zTIcDIdjhjfsUhW0rNYuMfoNvWsOoaHZas4CtW2uzaWYIuf5nKsIOjEKjQipz9f80cNAj2oRi9xTvBpvuOrhPwoWmhZj1Et8%2FME8pABRGQ78m6rUO6RpKfVkFqD5LVG6DGz04hRtvi4BFwIEzrMmPX6g07YfLh5dCb%2F%2F%2BnwkLuqlCNJ7E%2FlyCuo%2F243YsuIInImo5vixE0VDtnMBZv9IPaeEfeUtxxJy4X9MeZ1uzI8hn6Gu5TX5grSLsCNLv95pPU9PSg5Z4TDl2o16x5Ifbcq1P7kr53Bke13Vw%2Fbi3XZhiVv2sQBE9mdf9qUYkWDeibpNK8%2FbfJQp%2BIpZ2B3EgxExCp0CT1PmCR9xzO%2BKm3WvwjDMrJ5oDeZVFciapx9wgwutXmvwY6pgEbgS%2BI5z3L9NvK85b2nQV8FvnyMQL2CaOJ8cwP4BvgyYlfzMOHLdzxtdulwhF3muACEivragAt51bwLPFhK%2BCtrJPMM8UlkjsbY%2F5tda8Q96OIlKl5JKqEsMlHK5TEFKR080b1KeaAttB5%2BR6aYkBVAGid7tYQ3fohcdl5ACXeQyZypZ1Vbftl%2FisryEz39hkfZ2ujofb1bKWmJe5yAQgv58n7B5Nd&X-Amz-Signature=8fc47f65c3780a8fcd274dfec0dea68fdcc791d7fbaf0b9868d565a4b6dc20f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXCQOUX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC1IlO6C26qKQtWVaYDgYugfUTjYfjTKqF7GPbx%2BnheWQIhANz6TUzZvsVXSils7ShQZ8NUr8vqht7k0nwpyKelLe2pKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygWh6qh5d4pv2JWZcq3ANKdTiKz%2FL8Nojk%2FvxYbwVVjMZTYCWZF9vMd7DqHLh9EooekU3xmpp6SJ69C72wosyG9z2qq7k%2B3nsOs9hi4nT4FlHNTHJqfXrqWcWtM6uJgC4KR8lJUZMPQcKn%2BF57jRdECFuhZ1Xxga39dV76ED1NfL%2B%2BNP7fqN84vuPwZguh0bysuxeFWY5HXc%2FDyuWDYnXWtdbs3c4IWtzO9ryGiQtl8tW6O6Ho%2FWYrcJUWopw06Vc4M8FzEBXU%2FeSbM5m4NHSQXzfYYe%2BcN4s4R1ragQ1QBegWdrkEsXjqe5dSaMpmVCL5aeogWvzz0BPlmUQfRpqEStCgvPs%2Flz1G9VONzF1uttnBJcJLlghpCRgxBYfG6mbTzY6IVXqCZPvTIU1gUYIgmxlA6EzvoBiQ5Jl1IsWGnnmtGW8rLWl0e%2By3WFESxUwGfhOokR5xoJsCWV7ST98pdBeON8jCdZ7QjtvEdvjMAhTc%2BPZAxoD9ZXUdIpwtfatt501PmPFH2NrLgFPZCjCRLlcqDgkDf7cUSixL5u8KtMLzwayGFmWsxIhc8VCBiCy1QUU2YYxgfCyp2adP28dRZZ%2Fm6EqYHjgRylNKkQ4zYF1S74sDR%2FC00lIE3fQ9z6%2FMxD%2BYW5OY%2FodO1TC71ea%2FBjqkAaKWhX4Diu9vO%2BEXBcPmmXrdJIUx2dm63FIPaj4MtCW5qNgA63xd89l02pfZz%2F146yP1G7wTf3CX2FBi%2FAMn%2FLtVdIkMhv%2BEAJOKRYctVp2JJUtVUc4xk1HjAm5JOWM2ajoxQ7C3WUE2lO8F6VkA%2F9CSzk3XYFWt2MbefX5iIGnU2Zu%2BHpwhuXGpGTW3UpGmb9ZCKKnb66iCA75PbTBTuU37E6um&X-Amz-Signature=7b500af8ce14b21b7aba4743e00bcea0b9169df7d037dc0583fd7c05728df145&X-Amz-SignedHeaders=host&x-id=GetObject)

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
