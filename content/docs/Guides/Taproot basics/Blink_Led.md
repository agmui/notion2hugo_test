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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JHZW44%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEwwumCjQmlr3wtACwRLH62FDZApXXAsXLzcO0sI7Wv3AiEApW99wlA6zKAzprLmPC3qxBBB9%2B9LrsfZJoYTD6s1rRcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEm%2BJoROIYcBaiPBcSrcAwo8LvMq14jB8DqG9Y5%2BFK6%2BWi9q272bSJpmy1sfb%2B%2BrUkEoN%2B4C7HwvWC%2FEv%2FB%2FdUu%2Bt83%2FmWVFqbk32OI1dGBqRsmvETkOohwESvXotZmm7BCt4dxbOK6pxh50lIaDkoT4acR8RLUQUqTR81p5R6nwYkFRArfVLVOXpnsMfMPQo5bBcE2hIdQvpQ4d7Ny%2FGhFm0BF9oMBjnsQHmVwJdXp4uOPsRkIYpG4v1tes%2BAjvvCgFnzGwfCtzBVE6c8nauvnS1NSBo2H0DlslplEhw6wUU8uZkdZ7807irBT6x50p%2Fh0U%2Fh%2BJT9rNhtgWgu25w99upZecV5z1uxRmL7URBezYGKT%2Br%2B%2BE0gVcQpUH8pJxu5cGKRgoMVuvJzX0rr3KPxiGnxhFpIQYHndKqSLjwTCg%2FbEFdVlujfvB3zRx4dKuephsygRy4q23DB6FOCnJyxG5xYWPQ59V7W7XAgWsrucxxseNLt6hHK6F3zIj%2FFA0U2PyRvYgFONXci%2Blsv0DtuDoqguJUSILLTP0jmQTCIP67yco5SDCZcztxgVMqtEja%2B%2BWm3fIo7tR4V%2BjPawlqDUTn3B4k14QHQbtlFUzrUxqUJTUDpEysQAsgX%2Fgr9QMKgfEbnqY%2FJPyyS2NMJGMwb4GOqUBwcHKWIZ2m%2BwQFV4XTldhTWnixAKRwJYPsRWk9WrabbD1KwfGvE2J9%2F%2FvmpwJeREspDCzUbH1gby%2BWjG%2FGKbJYYTrtGBOxLUc9T1QT2lWjodQirqdiyc8ZS9WwMTyBCWbNuziboQKu1tk%2Btn4gV%2Fn%2FW5JprdUmXyBtl9KOkylyNn8UeV3znVp%2BoUbfO88a33UYXBMqkGksc9Ve3rxG7pA7VbaT%2FTm&X-Amz-Signature=a9c4644e1a8869f403af2a0855216404788bb010fa8e25e318358b3620326183&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHP23J4V%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGTnm54t7DJVY%2FMcBAvRaojxMXNaB%2Bxy8djHdD3BfNRdAiBJeq3pVubYuOB%2FDfdNUPKmDeeMpsrXiMYcvY9BuVh19iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWF2ScvnxOT3l3uNKtwD2X1av9yxdz%2FYtXNuXED6jb3XAQMV34H2zXwKFp2cfGRQ4ROgZ6Uvp4c9GNg6Te1FGsXHD9UKlvWP%2Fi%2F4On%2BeByaeRKBaXPUVGryxxInSYEfaGtusqs7cvwmx21ayJnXQEI9eRSqfLY78J8OJocHmrTDvvpD%2BIjDGHZAMEfI6TRx34609JCf%2Bs5ARGk2pdjsFh4p23IrFytEGxJ%2BhoAJYWQ9z6Z2v4WgULadr3aB57MaWoOLGG3VoqeYJiYOHdf7ASFboEaz6yw49%2Fu4OPkXCUF030MsAjkORqQI0Uq04IFSkonwjWsX3%2B1xk8Wqa6FRXDH%2FqqE2Alb%2B7tV744muiNcmPmqGGQQYIKxS0csCdNxCdzrNexIpHU1Okoqydui%2FqLX%2BOJ%2Fo5XLS1VV7jjbVQYerHSlXoHwCyNlb%2FFR4L7mnwPtqyIo8o20XkrTeXU24Ho0Njvw8F%2F9CF09lyn7kAg7PDu3lNZdh%2F6kyZKAyBTBjAPb%2B3%2FLvpvULFvnzzlXAMvDTMahIUfweMNgT1Ke4HH42eMdap8cIb7Yd5LoKrX380fD8LJxJR3u4gZxGVtrqgBXnDIBpsy1MA0%2FYrrZcPoc1mETA%2FPjLhGyzup%2BuwvKau8aH%2BSDipUhhr%2FzIwsYzBvgY6pgFQECLUaGuUuRkSc5hqs88RI%2BAWzo4%2FqwFjXm71zbwpKmevQHZ9LoUkAN%2BcmE63bMm23lWRrIklvpjeIeyHO7PDVa6PvI4HORl5YAM4XS7aqrWbuDFJ6Gghrb38h5k2M1YABbVSR71t%2BopL227HNQIh3n8iDLkIiTCsHE%2FdrISl4oHMr9qh6p%2BpyRd0AeURl8LVQ0sWRTm8D1P8rfD7LAFJ5mvPdJwe&X-Amz-Signature=33de4fd71f127cf40cb0eb33c58422fb1ca0fdcffd2cdb572721e3a55f50e938&X-Amz-SignedHeaders=host&x-id=GetObject)

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
