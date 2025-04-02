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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKWXMYZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIA0%2Byz4Blceu60R1FOvsni%2F2mXugAKTNzOj7XHUuGX8OAiBjiNeiJnvxWlaMPLp2ISdBEFCKQQNOP%2BJKzLo6UROzcyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMICbx8nmZ3pa2b%2BbgKtwDmXmlfvLUZgQ9hhWZO47%2Bud3P7uXZG98Uxk91FdDXd41jYrv4S8ZW6ovvKzxzl%2F%2BEk2bN8n3qXClISDJScYBOZ9SJpcewGYzBbGQ0ux5%2Byq0J7tO2yZXzU%2BZPQ8elNgCcdXcmBTEMzUbDkblk9%2FDwUnvE1lg0ZQKavaJYeNrPgXdvpWfvtCwBTAQcGwPAcvN55RTLv5gI8UwMCd9K%2BcAINVxrDfZXgmDbISVjK4JbU6RUoJNgmeL4Rc8%2FpthGq7iAaIOdzTc3%2FDDAapKtWYqczwHq%2Fepkzd6pmmFgeoW38lhHy7otVz7HWMICX2YUDM0vWZFmKdnAKfkP%2FbW1kdbilipI2wermPiNrYCD7lOkVrHvo9RMNRtZvAhvH95iJYExs5kFyKu8YOgVCEqT6nJ%2Fy66KQ%2BUnUTad95JMz7%2FLfmMEne%2BVHB5X9BM2%2FkgyrR40cgZMCImsbhBbl3I4qQcqiyX3ixiZ77lN1YK0SBm8rPxRAOw3%2BQaCf42zMdOgTLhEqxWNMgmIEvklbOXO0P%2FwPIdF3lk7o7PKMy6JaLzHCqvg22cOS1jJyb3pI%2FG6pLlSYfSWoLdOX%2BVvczGDWWTNrnzz6RgtVto3XiOyP72J3wf%2FsUgWZ08CXADaiUQwxNe2vwY6pgEp2S%2F4Q%2BnJOXPCtVXndT6Ykk3kW0cWZhR1ngWQ9FZwYfK0a4F4%2F04i0qjhgER6qd2OQVlzzuSCdgi%2BbzvzPm7NWjfVnLCJTd7IjWwUkew8T%2F%2FILzvHLOslx%2BG4yP22vWRrHovaKLMQEApjM6u89NlBHDPXHz8dXJxXjWMhlJNED%2FIFgOk2e3WHO7SFn4yOmjfyHRl96yIXp6tMQK8p6KeGuOT7UikN&X-Amz-Signature=26d9579074694fd87558de7c7a63408acbad639d9db46b49de835401fba6e849&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBR4ASPE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGXY1g2hjSA8sJrJ1kZpJZEh3PFH%2FYew%2BsrDGQx%2FJxN%2BAiBSSmXEAfdL7ueLX%2Fh0Gvoi8dnk6JZpaNTkmbe7Sr96XCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfMYfHXYKCGdinfsSKtwDyT5%2FmAbchnh8Oe6lBKgIxIxGYfKpF6cqDc4CYWjQeV1%2FCwZ8bv2LkmnH25zW3sLq8TRg0qevE%2BcIyyfeAhupzs4WZheCMVzoxhooYPgmBjJ9uGoh204yWfdOh0RHClNRKBETR9lQlcQ7M%2Bk%2B0pgm7cBM1nQfs2he7Gx8nmr0D2T7VDPzxfbZOLMrsGLKJ%2FtmCXoevAXVxGbihift0%2BX7flTIfMrEXdbDTlVflcWMblkazLAy%2BGt5VV6ZQSXcUckOrRwXIGCoPckLsu1M%2FlAmrP4ZtKRVgaCc2N3O0v4JSSxKCb5sQZJn9WSfcWxYWRBXmeRbSNRPKOLSImvy3qkJeP0zH2EwJgC7SVhzRmX07PNa1nyRNSHpgVc7ueVxibmhiXSraMz5OoL%2F9X83xNIjG6g%2BOuZVjjKqxPPX7UGLe7NdHyYkWnWG5fXGONeTYaOlJGeaEcVEaoC8eFsqX3lvSZKHpO2yd3OFkS5nod5NEvPasO5Hqa2Hg4SbkWrIA%2BClYvFw3NHKHmTMMa8xw%2B9jGh4E2CGZYLkwuTnX2eFRloMA%2FGGQqvKaWuZtYWdHgJtJQ1wx83rpFSLC7sUc3HxgOPGhQJz8jLYheWHrqQ7g40WhyMpSvht%2BNTDM6Fsw89e2vwY6pgG%2B6UoIE9T12RlaF7D3N97sv7j4JmK0wyn%2BehABOxV09pv%2FvLmVAYyJEwMaYZ5yLaRw0u15NmfALnGQGbWorcz2sUHlUrs57wUVfZ7ui1DkecjerE%2FNmIgIjsC%2BeYwFbQVJ59HKikJFi622K6zBSsYvq2yH3ixXMsIi4EDcAsp4aQFyL8fzLo2syQImD0ZIiXXgQMQLZvfDmXMhm%2FFN4hp97gvb4N%2FT&X-Amz-Signature=605fa34fe2f6b8ca151f9c744bc92ca3f0eeb28338ddff18cfdc23a8fb358b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
