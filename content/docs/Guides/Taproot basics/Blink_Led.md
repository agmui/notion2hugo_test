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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PR2JWYQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCYyTaBAt2enO%2B0tRdE%2BLxDy4d2pHpdB6FsoQifEskVtQIhAObA8oMEFjp%2BZEs2Qo7ETtWcgRBAdlVLj3dxoe8t%2B5i5KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYowPqzBEnZIlFl%2F8q3AOwkz%2BHha%2BC6shUOQIgd8gAPy0mYBNqQ90p1WeEwG1PPrN0P5SNvEsrRSQJoj6nuUM6ojUjKRDSKKQq6ZgxR%2FiGTkvu87%2BWJAjJq5NmiV5UNWBdG3GG9JdHFKl%2Bq34%2BtSuo4xaaKAcrRisxX2FJQhlBa%2BKdjjbpKYE9VLirRsiaqWdCYPBGg2GE3htPpUXyEcSmx8i9Rf8I4CTqObSYNBG%2BUj5kmuZDOwVU61c0fELgbFrzHyDAxzMYaUzKWKH6vsdfZ2Qwt%2BHIKWpjEBgLKEfUUuBHadIQU4oS1JOfs1fpi%2FCExp9vpyqlzgNCwmSUks8J1cfo6%2BE6e73KayVeP27y87%2BlvsF%2BeaedaT3k8qSOf%2FfSViuKyPjhpFbAlKo10Q90s5kYAuWTT%2FJ9MxaPkaiXREfoyoLRoPjTysr2%2Fsy5Qypt6TGL9QTHf%2BCbspJ8w%2BQmZc%2FWXo%2BxbMkez9e%2B22Qj%2FHt0mqLaLazDSMw%2BLy2nF4j7EUhWSM9czyrGCqR7h2upft0Xy8K1KezCzRsy1w83cKQQiFAyqwXePUHEQYJ7jjI8f5dXLB7AkdtX1iMbnlDQCdK9T1NYTHYZL29CucY08rRz%2BT2cmJyVRzkKfx%2BK%2FJa404QJox%2FecSuPbTC9pN6%2FBjqkAdjsVgnFaFkPYeRmoTej2c%2BA3yPi7C%2FjMrgCbgPULuY%2B9YnT5oVuLFUVYnupSYWTlieXco88zdskuAeKUyejYsd4XvmexJLP2B4E4K10YkZN0QuAceaiH%2F7E4s1p6ZcYk%2FLfbgvVprpMiVDAHpG5sxkYoopEL%2BJz%2FuXV%2BLm5rFXF7Aj3oXQQ60uHgAfgSx1YjZUbP3eQOjwqJVJTYUuThGaG5HP1&X-Amz-Signature=67ca15a566c8526182e3cf54f0bd06abfc7241ad19d7d9d7493c1862b8bf9554&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FR5Q777%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFGnsNzEx6nDDPyB3Jkhfn%2F%2Fmq9JK8jKl4fw5U00btwrAiEA%2FAIafsWTS%2BuIO8G%2F5a32znSF5X6g3oVNC0czZLkjPIEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSfh5Fg9BapwnAbFircA%2FinuZNiXg4htxqXmX6T8Qd8pGRjo1INHcD6sG686gSK2waU8XTxMNRJDPyjM101wBez%2FWbX%2FTaHU5uExRsX2CnwWi%2BIXxb6DUHVcu%2FmKACCGFRnLec4lk4iDYKkI0GA4CWNjhcIROv320EydyGl94NzaclkyiIIm%2Bi0LhFFeohmV9di9qOCuxq8bKXa2DjBmZzJbqaoUrBrMND7u7IkGUEKG8iWNzMdvIaIlxJmSi2cCIZuftKZ%2BxUDVGcGZ0IHab9Okd%2BwrtAtFkRDOLJi6y3eONUz1CYN5fT8XP89Q5hVeumNwxYTML0S4oJ6V8g9dAVEIDZJt9C%2B66As7S46jVDJoN6p51IyDtsmtYlEi%2F1Fjh%2Fuvoidx1Y9hpuY83ns01CMoLJJo9QXKcMzrDgjGp4JlC%2FKs1GC6WuP5E5ZLQtEm92LXO7sCo7PLz0o2GtC3HdQlc6Yfpc1rpvAkZLZw1iBrptBFozDNwyCjwzDr3CHm35mua%2FEQhzZKZ%2FDnUzFQJUepPQhk8ul02RUT8sZYvaP8CN0gzM4R9Ccv%2Fh4%2FL0NmOR3%2Fc6Yy4zd5rntwR03ohjArDuVMcQdkopAG%2FF13goTgiPvKaJ85IBRJHoBouGv83g9HlMARDHfLwklMOSk3r8GOqUBskULTdY8xQuzRO9noVCNtU3w7juXZzOIZSPTSP45UL%2BWKi3ZkLSnKWz2y%2BzijwOp0n55biQlroAMwYe22n%2FlA0UH8pLJi9DSZXfAJgOieT1zuywS%2BH%2F3XyR8c4EVQwWWgED2FyJg5iAwCD1eNta5LpY5LJKgme1PVACVr%2Bkygnr%2BRLvmn%2F6u9XvVPhKMHRthh7xeZu72oNRJoQHxx8C7pE%2BslOM0&X-Amz-Signature=ae5a7a39da23d36569f2dc7692cea631b7b28a9b1ba249aab1877a7479a038d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
