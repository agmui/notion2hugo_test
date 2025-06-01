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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PHXYLK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDGLgk%2BErPuukqGc8UzfwhJPu8WAY%2FQpf11rp6Cn3d5fwIhAN4i2vupf1NmcRk1HXpc1YQlUNTFDKuerwSRBudIf%2BScKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxIHIDDz6A1j0VM90q3APgByhEWchB8YaRXtLVS40RwSZHC7CUDrIu2FREBfx1MUNv%2FHHHSDiOA%2F4tPz6BiE3%2BeKjWdL8XA8lPSFcs2u7ZMUHNMO278Jg5%2FW2TEc5jKcqUEyW8f6jiCZwgUem4%2FFo53QV6i6e2NTfVz%2FDWB0p2EbEnMg2h4tHqK2tIyXP%2FlC24nQX3WTW%2B1eFh2oRZomyysHeTSe72SHtz804UYr1ItW0FM7uY5qGRP6RWOADJG%2FZ4dyA26fsOX7KmL8FV%2BGWdBLTQPBhHqBlq880N4tdkh0E8f4bFCxjsiukNOAfS6UjElyITUjQXIZlqurCbzh8wPUGHfxkGO68xCHf4C5XiR5wIfeaXKZNMXUx8ThD4hMjfT8Ep0GaeZSp5bewcksBtOGJ%2F3MgngXwg3KGSR%2FYm%2FoR0Qpi71cJOPsux0SK0Lnq3pTvc8ZfR%2BHDglNN95rL5MV3kK2Jtc%2B4zvmJOVgQUQvawtbl4UJr1fDnO6csp55qGYx6fGbfz5fccfrg9Sfeq4FEpxTiGawv%2BEYnx1toY3fb%2F1NJ5aXekJWy4anY%2FIiBKXZRC5Y1zBeLT87Wl1PEdCgQ0N6IeqSeUrcbchKMw5kHNMQsD8vHjUacAG2UxZNMA6DC0KvWAS2m%2FcTD23vDBBjqkAV%2FPOk9E0YY0NgsDqG8wJJ7LEVSeKsrZfvWOPl2U2rCrVnM%2BjTkM1klJEY%2FYxEx8gtx7L%2FTpGC%2BSntn1RJL1UKpjR5KaEeBh6eZXUUmN31PeSa6cwi%2BISFbtLz9gWkQdf4lBN2ZbQu2YJ2zl00B7VcIX8KQYnJbnnMhwCh4mi3%2F8QX6s%2F2LBHbIW94ld%2B8WBQQg8JBRoXj8gxnYwI9uOz6FoLboq&X-Amz-Signature=4b722222cfa9e9ad8312d65708e19899ed3fe951278e34772521d1ec1ab812a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEELJOB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIADY0Sh85qoUY7z%2FGeug1AID6txKSwbQYQipIjRbxjaPAiAFCLDwODHFQqjMttXjT0Q8FOuKNBxvWvgoB1ManV5gQiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtba6Go6kcNU1Aop9KtwDHWRkrD8AElOlaVcxYhssHS9pVFZLLI%2Fdi4CPewF39ZntUEUWBL8%2BEM7wjh6waRSFyR8WgJzFvnwcAOZ6dYlCEIDHylPjV3nSEagV1HsisQCBXHfhuhiR2KFq6rrZxFtElUmcdiRoW2K0hiKwIb1gMh%2BM3yGGw0jtFUwNbROmkKrUc83xaPBMIfBeSpUsUp%2FfSDHAykbYWgXwgqKPUpsUSbmlU10FTSNH7GBs1uWRlzwTm4WDfR%2B5mqXT4gTxPjpg5Oqaju53MxXbHrWKFGymM%2BB9DHAaFLiecJiR4dTR4KspuSptIOgqXZJRBvYTUoLVjQs27U%2FGRFBH8OD1qR66vyKcndskkIgaSOxb2Xlat50IQXig841mk0QFvS8qXA804cB4usWrUpygjGHwuMRXcAaOmD6epxxAiYRhrrLYBCY2xDYOUViXJxWHpFYcqtnVuVV8Je3zALWd7JtQzanZF7xhgmmfYnWXrn3hma4ju9OPYjpDoSkZ0Qc1wHAlwW8v2VEq1tnOw5zF3aSwrQY6ruOBdPRFCFrUDxnFvNVUn1Zd4AeJQq59jR5WWgJDS8KbN7oj7LFS4jtuQrypyT%2B7Ldsb2boEJUFPXNB%2BAAV5d4kTdI%2FzH19Sae2l8jAwrbbxwQY6pgFzXIFQwY3FnGqg7hhRbdQROeczK%2Bq792YXIqyTbtONZQsbRdgnRcgwo1ft%2BGDbyCyyyBWZxrcB5Ii2pz8aAtUNTgU1Biuh7PNeqz0qrvxYGQOC6sW%2BMKQWPqMvWiX1Aqllx0%2FLFkl%2FJgxHxgdMHQSH8TFI9EWU5L2YpUKH7D48KRqrzf0mHhpqqp1wS%2FnWUv3GGo%2FlBjPm7dBQOt0mp93YxfZeml4K&X-Amz-Signature=aa92d4501e6dcc22ce011269a878732f13f9d87a5af34a6a729f43a3f436629e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
