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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3YJDU4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwWVecNen1aSwAWJ0ZekhbCDlWVuBPL5RIDNT0kZbOuwIhAK20xb%2FTJ06vFyYJ7JJkNd%2Fwhp3ff7qOaMxTICPJnYNUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJLTKfDVXcCVTrGPsq3AMK4togghHxyUmtyw8yxIUALwQtgREGaWBLp4SyHafcOoYwY67PguCcdAat6cgR0JPai0C4ItkkaPOeayNmXXHZDmdNauN%2FvW9GVykazq87LazHRsIZgyttRJot%2FKc6EEZpwwUg7yJDda%2FpiAXgnW7LJY%2BlkHi4i044txqbdJtSluJM1T2NR8wWyyKtv6vPU7EOT%2Ftdy%2BEIvjdkCWr9ry46kFPn2eBgov1iXLRdsDnMaePZc93cxnouhQ6IZ1%2BhlxE21y0BK1EI%2B%2FYzIm4xSmcUloOMP1KiNICy%2BlZgpYYZzDA8fo%2FEg6keNsXd5ZUNyg%2BP33DQLIcbpPK0K4p%2FS7n2G95TZFXrhjkdiLQ3Gig%2B1F9IKvOC%2BzG24MZGrM5inUJsIBgXTrlAeh%2FlHqdMlM8FQlBu%2BPCG2Vv8M86A0ecJ%2BdX5nZcoQF4K3y7R9XW%2B%2FYtSckf6x8iXpVkPRZy2vFDnhEykCZQOUPsNrf2Vj0PYKrR20Jb2X34gR9nZ%2FQDWtxZcnD12V9YWo11gptDlmcoAzKlPC2qBYZnZWzaGY%2BVlG5wcnZEd%2BMIKBzPaFYUY5%2BWo4jMgnCsEWqntnMWclp9y7KAtyKkwGU%2FHvDzAALn57iGquIxvWAnBXqosZzDj4Ma%2BBjqkAXcAKF%2Bhm1bJ2KXlDAP57aKFjZChoEvoMQyPuejhiCbx6CEvq5%2Fdskj%2FttkVBFmvEOcsY5ebLaP5i%2FEZFCyMK4r27A%2Fk%2FcXTo5%2F8NnShEHz6SySaHHXS0gqsTt55RxnaIlL7G3miphV2HnUoSQ7gKpaNWpIwdzPEnWmXbWHJsqo%2BySFY%2B2Swl%2BREk33UwrFACM9wrAOHHaG49qs86MvBcGG31b9J&X-Amz-Signature=7d4bc9615c608869d21b4df58cd38c3ed5659591dc53791383e817241b1dfae1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQJSKAT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBRc0sI4QksXVwYE9KjEo%2F%2F0p8%2BQEtK8GZ2u8B4rs292AiEAoZQ75XnNcbNRaGfAroEwCNymkBmOrh0Aydb5E%2FiqcUIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg9WqgJRRx1efEPySrcA0mjY%2B6rbjr55J3SAO8fhbvREKTRzmSReBdibsStNpaaxhIs3zbOdWaCenu4uXbfFTouCaeCP8p9mw%2BenWDB%2Fn8kkkp0X3K5srj9VLlE4jKwRfOKsecqQbZtvLUS%2BecgCd8iRLZ8oyL%2BMhzrrJ0iDvvTWexZjdnjE3s5ix9VjEv6qNB9JSO5mp2j%2FdE3KRZNpvP1vHgJDr6iKL%2BZYyPuSOtyGWVrIBIt5Gpj09TwAcJJT5d6ak3uFDo3MD2wsYO3k2xAowbWFTmPwIRDw0DghCvh%2Fqv0craArSb1DgpBnKDczoKqtHJgHsxZjRfh29581Il%2BG2cR25QLB%2Bg5dVRY6nEk1L5Jue3MYDES4qjW4j4v4mw7Stms1wCwffxR8ZjOR7CEXilyBJSDjNIIL6A1Bh74pwmaLJvt4hVgPi9DgBvZsIKme2hebSFQCxMMTKkKM77YKBzEKVNF%2BfGQKzX4eVMJMjsD1fJ9T1iKbkdM%2BfhXqba30xVVx2ZVpV3K6Y%2BVansRMAr0agTLVPEek%2FuBqQwKV%2FfaQmPtB3ccoKST2hjDoExYt%2FFvswOzRci%2Bi0KYg9l57W37uy06m9w%2FFdrKtvtKgl%2Bd7j9ZrazCjBBDoTZLt4xKEfuiKa5G4V0XMPLgxr4GOqUBRclcq%2BG%2BoJLaOQ2Guu11BB%2BSeI%2BK8t7LJH%2B4ZFs848fIzmCsKeZJN3BtcaA0qmU0JDGmycEwwvLK8eGsp6htm5lmcS3I3ssDPyhZSQwE816P3ggizNDKCbH4Ym%2BqryAB8KeBgVYXACns0xAWIW0E1dOGivmfU16eY%2BGToqqWwrvVO0zb%2BwvHyRYfeDFnqxbH67KIZOsVi7yeEefj0kIn5qvyyO1a&X-Amz-Signature=7270e6ddbb167c99502fa65516db7f445c2f2a05f3e9c762d4fef55aa681e9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
