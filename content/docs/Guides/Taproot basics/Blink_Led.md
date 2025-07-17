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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCCIWOY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB1q166dryJvL8Rsywl9c7ZlK0zJYOCAev6E4vsZaCrRAiAibK6adbFE0P9yhYMEMJenJWnY7Z3dDzuQNQWIHfSIQSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMzLGv4%2BS3xH%2B7qFLWKtwDfoGH%2FPfoNehIS5UQ49Kwp%2FP%2FFYIUxZgkPsqzLuo%2BmXMHEDpYMn53XMZ3YBJR%2FYE8Ez3ZkzBRPLYTARER9FTVPR6uVJWDVQGF9%2FSYedjMEaZd%2FOpkd0oEIkvvCIqaQUcePRYnQVNnQvINzYJY5aCRtYlqAohq0chP2mvPb4OAZ89KgQGmMqTbq8%2FzbiZAB6ZW1juUnNlAh9rxferopi9vd812KaWF4FtebuhABHvtmnboFUDH%2FPXlwnjRhecZlP4lBmb69%2F2spVT1iFtgICCKC%2FF6lEh07bzG6NfZ9tP6GhhN1GRtyb%2Fx8Wsii2cfUwrtQh9ApoDwRabKR%2BIgBWR9ffGzP8VYeZ1Rs%2B9FVwh5%2Fjy%2FnwVU5JyFKzigrpg6InxthuQu0J3S25r0NYGK7TaWiisCmOBeNR2pBpxQa%2F3EKds1QpBk1jM1DbWFxNMIaaftA4QnbOWHnSOU43R19TJBqorzsHqHmOj5MsHvUzEx%2F%2FDFZFZ5xSVhXkAxnS4mWvcMkd5xtFe33sCown2JONnGjD2d%2BowfgeTuRaGMxJrEHor%2FtEHVUNkgQj84xq1ZEaSJXlev3AUg0pHdlxbZbRR06gDMM%2BtKqNvIsIhYuELGKWYbd0tWIcFQXws%2B8t8w8eviwwY6pgE4aqMiuH3KIuXxGrHawgNuEGHjjub9F%2BfsMIWSGO9zqlapWta2hjFm%2B8b%2BhX5Ur3X4J1G%2FVkvuiF7eJ0hy9ljM3iM1BBi3c6AcvWz1wK8BR%2FiYDFoysQG5Clh0ADLRzx%2FhlQWuVO3Yc8O6QNiz%2Bxie6Ks%2BuPO73OpDbvew8qos2aRAEdXG8dxdwtA78XVwD5JcQ%2FcULtP12eFEx4c6DVZpmCwTjpqX&X-Amz-Signature=66a4886ca28c97b26491ff4485dafc5ebb477cd6daba054bb095a2be5f3db890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJCZUD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGajiyXt3oYeZNGAGSPmnyC2%2B%2BJPQOPpgrdNhIwtbFSxAiBuFYogej7MEbvdUr2pTALn4cynuJZPLcVXUt4jcDHKjyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGl4ZJAzN6sXDBy5JKtwDUeFgXpfRn1nImOwtWhS42jrQw%2BgaiWKmA1Y%2BZ3eiB%2BhtmGomg9zGwlj4iYBIu26oChwIYWKmOHP8QTMKnqjvm%2FB997n%2FJq7c0t660SUhC6c9WYwuHffDzIPXkwOZwsA0EQggM9IivmzlX%2BNWqpqLupFHhAV1pRDbCp%2FJLfzO6UK8BBKGiJGC%2FDHEuzUPuwuft3rrHeOdY1Xdc%2F%2BOa97yma7%2BmUUVHVkVCzE9f1ZYIIshdAaaV0AI4rQzXDfWI%2BBuxwG1OEJEFzd3yg2fFXPyAZVY1uMrq1jefQ4nH3RjOdNWYaK9JG46P2SZxJlVa5mlz3CBsX6Ivq2iOfiX4BRwmYbkM8ImFobiWqfKSeY2Mi131bE0wMupZvWh%2Fs8dpE%2FWZDqJgvJyIcHK0UHc2lbN%2Ba8jL8ZxYSp7RVTT1rVDuVOyltKLx2hkVGzxJeFh2Zm0BPp5OYlawXrASH0%2BpxO5ICJpjD3JiLQ%2Fmq6Ejnbwu8Uz1dhEmUPrZ%2FAmo%2FKMZK5BUN4dYFvXpTDN%2F5xDrOfuSGgcDz1XeRpWfsxZBQYKkyIZAbX9mr0TXloSFvkoHCCWz8IuryMAuwVKe9DZJacgR114JkHbcehCeBOgjDXWTMa9e2dE0tQ8naMjkw8wrOviwwY6pgGL7GpqOI4XqPwhHmJP351rG6VsUORri8DunYtCXVfzgB5i%2Bm6siGMcOmf3NGfel6fbxo8ekQe6KSTBYwt%2B%2Bt6DvU6OouhsP2iuqD0PtnDPqfM1I1JsMN0zE8mYaD1%2Bv%2B8pr2UNVEGjDSF2kTr3fz5Bznc7dMxk%2BpMnmkFrTGTLzI0gixxw3RgQuKWHg5I5CWacgsxFJXXC45Piq9vUiPdt0QjIcE2a&X-Amz-Signature=389396d37caffb80d815277474891f07ec6f3abde3e1d2610b26d3cdfd259ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
