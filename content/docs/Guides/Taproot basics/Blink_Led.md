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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYRMIWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXZQHcUqDwaE2J3M7AEQUS4wo8DvlzUzhq1EEyG1DnzAiBkK6CSKctagTztBlc9rq%2FNPc08vrL2QrtMf2cb5kEmSSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDfwoSYTxfc5kPnE9KtwDD%2BAnD8E4MV5qcgOFaTnoZMoRR38om%2FzoN%2F8CRDcI2DrEiOo2MXzxUJI55AUL7zX9Iz0xRL7ogu4IjnGluPzObqKtqX22PLTeHkwOujhD5m90%2Fb4yK%2BSbULyGssvdUFQr9n7TTatmElbbovKK0qqSnWSikdHh62j9ab72vx9r1oROJXYXXuApE48e0N%2FBqD5P7djx3RQE8sdKKTACe%2BA0Gp%2FcA3zxxzMHtoNBJbnr4XPfVGtSVKycPHgIzt%2FyKoxV0qFXxqDNW7EgyTkMtAn6M7PkpzZcMjQC5NGFQT%2FfJKgq8ylFbcfiOHaVI91sT1c1yUP6OcR4vfwRmYkt69UiXu%2B0hiSwKLP91YB1AvzbfNtcslWcWrtPgBRqfkk6CnxK0T6AjLwuJJs6oSLyXS9p%2BKcGXFr3H9Po2pDAMjUqCXVUeKk4pvlBlRvhD6RkusaRa24QJgXi%2FvrTi6rY1gggUavugQi4cvdMagJW524aLGCfnUYJvaBCFQa5%2BiZBaE1viwEhVB5bzFY3CvUodciMRIY0ep545mSNN2wSgLgZ7NMMKisu9pNnAD6Aw1sLVFlumW6ghouh%2FLnTzihLVq42SUJAZQrmYlvGT6HSMPjBRGB1yolE6cxY2Uvd4y8wiPX9vwY6pgFnB%2FxSOlN7jgsQsDxt44meMsjPABVVc5GxJKv3uYMLfqHOTxiX7wCoTJvkZefenfE6G2YEnWmIUBsxGHBuwbdt8XZ%2BNMgr5QC%2BJYYclOcX9xkSGYuqN69ckg6lxI4WggkaEWrp4bSCfD1uHCVpvHzXM4XGAcHExx73DowV5EQp%2B6E1qmovwGknXLLTOXMFZaNVv%2BIc1%2BQPYuGhLllRZLQUM9NHT9Nd&X-Amz-Signature=0e47ebb77646180642b482fe66c7ee4c2f4ed709bdf7f362a989e3a1147135f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBE7TCZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUb80yfco%2F%2FB4U2CJy%2BaDlybsFpF52gpIPScHkqrfGmAiEA5aLmstTUmXHA6%2B5Ne1oYrad1BwG%2FHryWyHOT4pDogF4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBeFlXoj6XCEj1oPuircA7G9e0%2Fr5jbVJXCV0vP1H7rNhraiznq%2B0khKGHLTDM6RmRIWTI%2FaI3wr1LcWXGIZI930IjiCZ%2FtwgScJRNJrPTXg1vgaEQgeWm3GERMpG4thlef9HtpIXaAgt%2F049S7elD%2BjDnstCL2d8v92cGd5WeRKA27KuXclQ%2Bc4py0jExJJ9MkZWeVth3o6xB6Q5gHsZJfNLZTHOUXtsUEZmNqxVQMylK37121wRL691TqQKk3T3VxJTGjyYHAa9m0f8CT609NMHXatqkdEFtoJjmNA76icalcq1clnnt18vvHxqXSWin%2BEr9SeSXBsc%2Fe8UzN7MGPTdXkw0d4mv7VQRCchMeE4RJl2b9a8zCc6Ac6UjrrMF4%2FmVetBzopp%2FUuvp8z1O9O91arr%2FigZ5wikzpeEQNUq1cRLZKvE0r%2FAymppmSaBPwHaENhFbFeQd2lAgQSKAA2UHp6zi1tZDphu%2FWpSmVEv0Yj17t0QXG8VG%2BKzeXSF0NJNh%2F7F0BCsPEzDiZDkyxjyek48%2FbIgVdhfWyFAK9ZhJIGrp1fcb4eD2OJiZ1VySzxfyFWYQ%2BSJdzh3lMsOTd8eTGG2HL5p8sibJu1p0qNHuDnrDyPjq5dqEU%2BBFD7YcqM4YVfokNhkK1sTMOf0%2Fb8GOqUBmXMRu%2BfrChBEV8kPXNmdOONQr2NaHU8GMZ0sJO1wsQV1mcLcNhIUrDVxaYun5eti13541psqADSDdaLf0Ld6n%2B0XdDMCne%2Bg3FXhMo%2FmHfDjfbzN2grDdt8ZLi7sdRHKVSB2rQqmyCdENjlxtlQKMKetBonGlYx1JZIV2mb6m9bNaH2QYXzb9F14RZt0b6p1zuPIjP4vMtzstrygGDiUwJWcGHsJ&X-Amz-Signature=41c63c69f478405c246ef4b8d67c1f5d355173946157009bee75d59866b4daf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
