---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4HBFWP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICHYgxwc8alTzLcswKwpZxux1VbP3BkKUb3vkSegRzbCAiA%2FZYotYnVWb6eyG%2FyHe6x67nGd2OZHYrJDjZgSeaHk8Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMWkbIbbfuMBtUyNw0KtwDEMk1bn0k80ZUji%2FBhFhHHoTzjNNZxz%2FmvPo3BC76BinRXpLX%2FIqjniFMFS1fP7JBBgdSfVARNXxk5l1I3X34u0y%2FnDc3DVSB%2B%2FK1jwvWt%2Bq9WyMIN4%2FTUgY7eXMfL8ARrLWesdlfXEHpHIiVUr2xa1%2FfJAaxNhoZcxG3M7uuYrsSkv26oJ4cSiDz1tlbGFIOeD4sf20Bc58bowFSNEeoeVbqFz54Dk2XtQ9zAgh1ux5VxSpCY3Ur25lkTEuKNg4IyVvWdmKBQR8MLnrm%2B2M%2BdlifeIElADqgL2v9djIJc8gVJG0icDnnwJ%2FvnUsju4UzFwnVUl6xvs3TMIvTNsENAcjncqC61rRuNh%2Fm0CJ3kjFjiefn%2BT%2FGpUdv5iq27Hz6EyCkSYkG0LQnYMZgNFLXW4eSuTpNPM4sAPhlUHvc%2BqIJ9SeZMUo7T6zlwwxrIvICvGb2pycNmzHfCvKRSCBsysgztHaOLzfFcCRc1Ctwck9i6uSXphr9%2Fv0We0nbRyXk2oRv1tBj9tCZWr4F2WZz%2FsxlcGp6h823cob90jffvYf2MSupGkNY3el%2B36kGhoZI7Dy8ncIQgY%2BC0JG5loqM44ptFDGl4NeCW0IviDhk2HCstfCAo9F5bLygQA4w0c%2BKvQY6pgEc2m8aypeACMj27RDf14DdwEojS8P0scgLB9l%2BHU85GWZl4QGhNKqAW%2FSa8n3Bd1jad8bMBUE2P%2FASP9%2F5rsLu1XN8KK4ctxtLESbyZiXgksGOr8uNQls6%2F35783d7wR0DaAfDfLyghRUfUv38ievRLz2IiXnfJOseY1NkdwgOkGDkND67gxfMjTdybYBzJ28ZdES3rRNiX28GF3p6uQYMw09kgfaB&X-Amz-Signature=c02c7cd5ee97154eee5302cd450701e8d173402c99464cde5e3d629371712327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBL3ZD3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFiQdW30OY6iFio3i0Rh9WF7eSOisFl%2BwyHNeX8eEDkeAiEA7fPmT%2FX%2BA1OIZEqrOeRuF%2FbrztRa%2FDzfoVGM6ogLhu0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPlao493oBW6YRGFjSrcA5ok1k4EZFWx%2F0EwYqcxAyRz12vMDIt4HcKy3u5ZLRokmEPpK1LZ%2FdFtz2mmJlxZvrmVd9pRrtU1L8nK3pEECdKlgj9Lm8x9GeuULLHHKtRB6x1EHg%2FDHgKVdToXy0jGvrwcKltAh0T3SKdsBfJ8Z4EhEhP79BFXKlyfEaziZEPcNZ55capbHOfDrJJPTJgNkULT%2FalHv1yhiFT2tRnrI5rkY5N7xxOtfmGI%2Bu2QXy63Ei%2Bpr1os2uIBj%2FtERW6B%2FLnfX%2FBxh6dfstAuwoddP3uw0ZuzT%2FFfIs1nNKcF8wcodzktPK1RkvvF4OKeZFt%2FphFkL7EdZOPelyXa2b%2BG%2B9USwiY5Gn9yWYu5vDS9GeBh8FRYIam3I69sj4ZZvrlVFLwLJwfbDyF6vldmJs6dIWoKqM8sZRInBH0A8mFenTX4jZyq7xRrKqzKT8YT5SBBBkkWZ0mFyMy6Db8Rye9hAqXIX7YQXscG4EjvP8s7kOlxt9kPr1t0MwYwoLl886xZJgVUaQ%2FtdR%2Ba6bdziRgEPT%2BURgCNcd6udq7LIj7Dyaau1O%2Bbkt9mzVGmn42K0OGXq0RzDmwFvdDBGTbH0fCgnAEknNhJI3jgDUzrSupJtcfCSTwdHbi9DmD2AIbkMPzOir0GOqUBbMCzcxBoKtvyRP4pkztMY043qaO1zwyu%2FG2q%2B5qTKNg2DJcXBMBCWT6mmquXz%2FYa4jYF4QIyLgyM%2FSQO1fGYOKhmJ8WKyZ6R7JoVHqg%2BXzs76PjYWW01QetKAAVMknnwOVS4tCmqlPaVVEPGkAgCuJ01d11jfk%2FgJqDxUWofjf5bEo0ZeJluyr3WYDbttr4i%2Fh43E7KsoExWqWJ8iWZbglS5kEot&X-Amz-Signature=8be4ed922ffde4f5c14550389f63f3ef729c876718143463b96c9918d781e5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
