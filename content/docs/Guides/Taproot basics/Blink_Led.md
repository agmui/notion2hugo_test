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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WOQIQQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCss6Kty4j7INn0f9L3faSVHEVBE3FMf7UnWXuGqeUaYgIgLi9H6oO5T9aPf0dEr7LxnJehnEUBr4nuldb2Er24sKQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHNw51sfUy%2FTMoDgGCrcAwoEuhaptwnuFB2h8jSTWQWpIJ4n%2FAgCdt8RSUgQFAo0moIATxLwALlD68G6HkS9ipWsyy%2BAnBzVD2Ll1RS5Rq231iOU5GLfWVIegiHJaK28MSlJetlmRonejwUWQtJ4seoxa1MY37CdEDTKimG17esUxyaNlPp6XzyaEDK71CoUTPinEXsio9wViZwqE9mm14TPjXvmrssfXgce6dPXaM79VBhHQ3MC4t2sbIPx7p6QvP%2B0U1Ew7QIXjMBKwAkS7t6AnK9oAcRmCU4LtzaQQq5GIXCfKhqSkDFg%2Bjw8xTKdTQXOr5lUI%2B6zaY0zO4suK809CdlR%2BDJisEaCKcKnfoa2g3BLvbtBiJtzsRTlyycguMw%2F5IQJkOXFoDhUT0nGPy%2FzUPlMGYUo1xIKZcK4kcOv4%2FbuBN76pFnc7XHb%2FofcdqJIZJp5bVyWVWTpL8azA0jhJNL%2BG532lRiAqoVJ4N1eXDSroZIAmLAaHt0T2zq2PWQ0AQ80QaT2U7X2Koj8sWv%2BLrD8MIQitB%2FHfI80FJAYzAjFisf4RIHhkplHMSsneDV7aKNcjQgR1BCdDlLHDSzu%2FbjTQmmNpzkOyU%2Ff21QqNZJ%2FtWtM7ch6OwZdCjbN5imW2CSZOkvYgQjgMIjL8r0GOqUBSIUjwBwFVJYG6ptcHKaPKIu4SjaZz%2FVvE8sD7%2BxeGfJbWqOfvyy1uOAKZgeW7zoRmlKUSQ4PkK6c0a%2B0p640OP0bRnPfpgNQkWUTETQ%2BlPOVUKEfqnOl80jzOX1R%2Fz%2Fe7Z1S%2BXFhZaN1HZOZ8QFM0y4tPAfjqzrbiN1MHo196PJPN5WoQhQg5QyyZ3N6d1tsxWisSY8mC6%2FyFUEN2xVq1mtd7DFb&X-Amz-Signature=f127a039611e418c2a16031be9bc709841d0eb694b43517f834a8d18dd9c1245&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEMSY4Q%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa5K7PCOSfHuyKH6wfY0E%2FVquDwmqfg7L6Wzrl8QgjKAiEA1U99GK%2F9H0xpUawXiCzExvokX5GsZrnX1J4aJHFjAooq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE3ht2%2FElBd2yvjkIyrcA1s5uT7odRNKTgtdvDOeJ%2BfeAgs5xUWRMuM0OuFXOAAwuBCH7OgeS3vSW2K62GuO%2BWvFCx52q6y%2F%2FFge4vsUbBmlvwGmP%2FXRw19n%2BAzYvj60izpwQDpUTXWo8%2B8UzT2vtfZxt2NPlyzHDzmkfOggtVZni%2FdionP3XvE%2FN5ehMjQswVbH7bgAzPFFWWwSN3VOGy5jaSfFi32VE7hW4zrPOuct8qKc19kMw%2BrW4ksuQO5moA0fY3Zig8P1ydaBeDtUMrGX3%2FiCc7q3RSfudGpG3pTxznkN8zyM4ZvD9xYQ0MEv%2BUGnoAgRB3uHH53bEDpWUCUqPng6ltM255%2Fbb7YT4nzIs0xoJhZWp3oJKbMM8UQmOX63E%2FVVul1VC9U8WYAT6YJKZCQo6ETxCixquV5ud2LReGlParS7hKzYx9gS9ZMtExETONiLlegMnUvbT6aHd0jmhO0s4qYuBrzUOBJssKSo3TIeKUZwtuuP8svEXMBHzagCQJhVmq9QORtMxaiE86VzGuKIQKPvCXdmn1IzeUes6%2BYR5MycGdoIESKioxbXEUKvXLxzyaydb72%2FudBTz1IMjkZjMIOeRsdJ24bblzQ1ymdJG3GagCXZz4OQe%2FbUwF5xoswHlHmAe1YNMOC98r0GOqUB48uUnDEU%2FBkYQe00VJLEQZp5hgr8dfwCIOxC02Sj7BqkbHa0DxFLw9xfHlesf6ibDhVuqkyIPzfMu6Qfe6etXFZXMFE7ZKTe%2BL8QDM1aLWRS1%2BoY40enjY4F1HT0talBZjYXn5eSn82PoUB1sWZ8U7CYDVoEvS723wi7H94%2FkXNyh0borJS53Ygwk2vX%2Br9rotHbX5A9B4AWC4E7ClORq2hSM41i&X-Amz-Signature=ee49df8b212fa15651f9b163cdac8a550c78adec35aaadb88bb4f51135f04371&X-Amz-SignedHeaders=host&x-id=GetObject)

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
