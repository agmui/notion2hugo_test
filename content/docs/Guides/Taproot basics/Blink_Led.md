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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q65IFOAN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHbXmOJenr54cj%2FytrPG8VmBF3gUJUvkj2iqtxOTxogIhAPQLFNRJM0wDvZMl%2Fe8AdGe3BxI7p%2FoVM%2BiUHaOproq4KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHgZm%2B9%2FmLS%2FrpE0Mq3AMsbA%2FRGQeJgTotrYLwdnjdKSbC4WpmgGGYbWFIQ8dYOGAyw3zpLaHUIgAASRLfkc2NnlMk6%2FNZovY%2FYHHdk5gR2bspconAJm%2FsdrNuq3s710UgD8PlVX9rsDO4uFPO5LuUChDf5nHyM7wxmp7lCQun5VO4JI9I%2F6nxLsBZw0IiLEAcZxqKVWLmedjH%2FuPtPc%2Bm%2F%2FtHBUEqzR%2FT1%2FJuza58c2xOnDfyjwwO5ngGalTJ%2BMM98iPKUnvN2Xx7SaYrzFRo15ewgAbNO2G9cKmf2d9JmOSQ3vZspg3A2j4NUALBtB%2F%2FxHNTsNY886x0p5jMp%2B%2FkVzR1oVIlrPC5TjlfRwRJGJhCQUD8BosCtROPo062RIQN27FEh221%2BF5W1QY9ln5Sp3uccuO7RSVlw7SQxnXrLH6%2FgVnbZOF3qcHOSOv0ZbCmqXdVaRA%2FyTRAQNmSchykcfH5C2O6WlFQc8dTeEv%2Ff2PqEylGp05NkO40yaILgmZrmlx0TxqXZ21TyqFbvQzeRQMTvsACY68lIEyFBPArhVzNXkRoajLo554k1YEnWYwouNkhYtIu%2BsL1ES7Il0aNzTEer5mKpPYyKnrwaBotH3O0sFJA2JEqerAgueGcDzI28k9g6IYur0dmODCdy7PBBjqkATJSOpB%2B9S1BNLrYSD4tfWWYvn26TTDH8ECBvw3qtvBcMX31E3JGFUyaxdxKBYygGa%2Bucp74cm5%2FSKpLrKVSVtZnN4l7pt48wWROan%2B8cpXZssfUdqcLd5ISulFjp3fKoOCUa%2B6Czc9lZ7UfAyF8EXXCHrdCMlGnck86faYjwqkz5mS5U8oKStcsezLZbBvrIh8OH0xbTKwfIjyirnlyOk9pz2bF&X-Amz-Signature=72ff53305c95846f2e42e8c3e64837168f4ba7deafd040e3f01f0bf34f4fe82c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOH734S5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1ra%2FnYO%2FhHWPH2WQAM9NoObQWcjEyNaVliY6idlXH8AiEAi6%2BqaphaA8worw6fbUtD6YlZCB9esgf2USdRWLw0NbMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Bb1D84XEDnV6bkIircA5wTquwMLI0wLzrNV4%2BwZApNJj91eddojXAjgE80tBIxAc7%2BBfjDCU%2Fts%2B2Lw%2BYpSCaa0WV1JlUfO4sY%2FZBbPJXs7s8%2BZrjBeRFgQfgRp1%2BC8tjaf%2FJPpai24xjGcNZwAw%2BOQ47k2GqXYm86Krrruj3uYMIZx7wIFJLOqwoVnOpHt%2B8CHZNk5qVTTs75xlnV4whZ0i6jnpTWw0rZY2kVsW%2FsRBGCHfkOaDDkxh1bCsgwY7jsoSqai2ZTXgarUFFG9zRP%2BKtFMLuafxir0NyrNe1FOXfRobc%2BRWs0WIFOdMyMWDTLofj3h6msBsRzrU8yRgg3frIz9QKRbbyywpKk4Y9FAPIX0f9M5FnJBCdqfEpfzTia5v2mOBcfHDQ%2FQM5wrpaP73Pyc7EzKE%2FnpqjrdP2nOftULzyh0HHIIChrerDP46%2BjMRIV%2B%2Bezp34dKQRkbcDs5fzFlrcN%2F63EdtqJ8VJtnboujofY0F63Hq5EczCYhvY7McN7q45Y0nCcZ7MLSg%2BpQnuVhzkpa36KSCfljLrUTkxYm8i6NYJmlGpwsIzLq%2BcDdxdR4Aw5ElcWNwC1IF7HBs7hgpRxykNH9GpWSRjhvik7iqaIwbZfjIJM4hO76EYoItGspEsj%2Br8XML3Ls8EGOqUBsa9J1zuUmPvLyeLpYbB7AE0YIcYiFRKtf72dkjIh%2FW1aJpxb3YrQOkox7caJNuNHWiyoeouvTyz0IHDz6fdBmsg0AZWy0YZ1u4udCIrdEB%2F4%2BnUrnFdB1u39YggAsht4%2FYY6ao25Z11gW8VxTPOBORvR3hhtuxq3AbVk%2FDJdjyLwCnxwu4KiSybFelSyBXWVmI7OO7iBSTWD43gj1MaQHDY6BsLy&X-Amz-Signature=238eca9c6d332b5a40651270ac41bb1caf15126daeef99f80231a95e2c8efad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
