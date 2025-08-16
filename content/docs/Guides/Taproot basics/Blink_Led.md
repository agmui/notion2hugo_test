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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J734FVO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBX03fPpltOwdo9IU%2FwRY0EXj0Y4%2B16yAdvF0iVQ5Y3GAiAU7tK33OdJCq6PXukn29if7oT%2BXfSPjF64demSyWszXSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMYM0J5kvQEhytdoayKtwDL7Z3TyYN4e7K38W8DjELHjYgxs%2FRaxw0sz5FsWtNxFGBwTt4ph2uLblnMqz1pVYSa3v6m4jQOlX7l31m2x2iZ23rznA7vDHNA6uclPb1Oue0MnzGGSOI8jbo9isIpNZ%2BGg7LSderuDuywAvPJkNUDf6mSCHYg00ZnH8Y6lHxsS1QJrItthTSa012Z3CtpKoDVk59A6h7lDb1vFrzrAhKAfe7XVve21%2FNB%2FquvxbFp%2FqJPmHDwGzWqp2HbR5JDMhgLdS5FSq9V9G6sI491qMwEhKDOUTtER%2FDRvy6n4pKa1Ty3uW52LOkDti68U8MmKiZR3WNajVUQX17lDk06ubjpKAQ%2F%2FRFbzXwSdpPlLOLY2ReW9BwZ%2B1NXED0tG0RfXWRbwi5dOtV1bvzlDW7UXKAU1VntadRUp%2FPiZzLbkKEiLc9fd7c8OoT%2BC87fYP2oMZY2taUkYDB7LMNRVLdXWrLWS6xjkIlfW%2FOV8tk2Bc5KnJi0pCaAhRmv05yARskryW4NV2VT%2FpciWqDWSJCq8Mi8H%2FjzeWj7e9d%2F5aVqIJztQeF3IuKwcj%2BeugFruHQoA1OQZnQPtHPebg0YdFfyAnHJGIIYX7yZBfy3CB8b0CGc7amPLnBRfKfFIk3Wt4w4ZaCxQY6pgHytIdlQy73tLslIOMK%2FU%2F4f5qEQOYlANzWxqQ6LxBo0IHp7KG4AeXqohDxN4%2Fwif8F9cLLlnTDo13oGqQe9tgMJapadgpd3gjKyP0FF37z6GDdoopB%2BGW2iYBDcUejGlYjBVqCwcGyArX2m1G74ehIyiRZyEYxcZCGFTb83vq5Iqhm436GoRfaENrSjZT%2B8fEc3dbNxtsMTizu3qHCudGdJ%2F8Yk%2BdN&X-Amz-Signature=25b585185222a45ffc86892b1c0f1c12e3cd0a93170f4aa8aba5348aed2df813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVND4ZJC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDpeeya49PENXZIUbUtazxHxkf6j%2Ff3s6T4v63JhBYqHgIhAJL%2BbFKF0mMjYVf8SGcbAlE4OPJsUVJtr%2FbFjbD3ogBgKv8DCHcQABoMNjM3NDIzMTgzODA1Igz8vRp4c9eQih4sX%2BIq3AODmlTcU4OIj6B0A1NhSbnExuQobquMuOUCPcWtMlgeVwTiJN3B99btYCx19zXA%2Boy%2FDA5mayn10Dw4S2q9ryuK%2Fu%2BYFRBkIAoDSggz95xlUCty0v7Vm7e5dAhdyn6M203SAlRYIYXgn7IF2HpZfj%2FxwVSgQOc39hBeL08Dzu%2B0KgPmlvU1pIjDOhu8E0AEO3Ccfa%2BlB6Xf0qqwD5F7KUMZyzW8UfDwy5plZOjtOxYqW9fF3QFeGkaqb0TkUk%2BxvQpKHRZPMf7WBuIygX8QpFd%2BrOj7L50G5FhG76tZOEVtKNT8Qb2%2BZmlkA9qWWSF5YBTznUum0u0UrAsX2IN27YsIfJhfnrYE5xFdTQj4mEbqKKwdx8WXdxl26jIvrWzUcWboLSh1VB%2FJlFMhC0LjuHI96ATFI1FoFKG54e%2BEgbyyZdgGD7QDtLKKrN%2B8DxlAUrU3NkCquUcqOQ8iRhb5D3dlQwrrqMGhexYi07NhD0UylUElqwYdwLl9uPt8zZrksjsNxfWgjqcwJs3ZQAq%2B%2BuJ4gHK3uW0Kjb3PEOl01jUxesYOrtI5S4DXWyjGcrTaZL7lnFAEt6e9vVzD2j143DYPgz8eh82V0Yjity%2BsPBUEvogLHPVooF08MxcS0DClmYLFBjqkAWpdSufVeyPD8yP8ZIu3eiZribAzta4gkVZiAkL9xjWbZBfQNlZuBo1Fc%2BkB2T5jRhP%2FYkjawZRmFD1FBR7l8gDGOdV0c9j680xvMeZ7vlgZHZKfXuZO7%2FpTWjd2igJqm9wyW0HQ5Z4NQ8PFLfrj1zvL7tR5DFYx2GqKkt8ZyViCF255tGGT8gU1za8gH5Z0ASI7hQ1%2FmerjKLeSchY9OtPurbDb&X-Amz-Signature=8030266e8d094243674929809217ea69babc96cdfb92ce553b2b95f92b6513f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
