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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFBMY6A%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDT%2BbAjUWM11rwtJwlIXfPl4Pp5AkDEE4iXAx8GvpsCYwIhAN8ZXLxA%2B%2FTMom2xO2oe1TKPeTJ%2B1ZDphiZ3emDN6AFsKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORQFw33cqRvqMokkq3AOjOKdDbmmliV8a78mI5vnHmAlKmeW%2FNI3ccMePyr8FxpLq7nhyzwRi5duj1KV2Xxlz5tRajkkXl%2B9%2B6nntuj81Jh2Aaue4PWBYJjrAAK9UPyGqMisMRrMBhWZ6QKxkqrFn8By5OODPvduNM%2B2ig6CjjdQh1l3tvjSXss972z6ncpJvxlcWMlx1lRObwIPPxK2f8Libr%2BsaI%2BGXE%2BrN7jbpsRTgzoFw0OPC95sNbOVo1D%2Fdo8US7gSiu%2BsEQdfR0HseOEtY8KVi6%2Fm9S%2Bc28QYv3sb%2Bz6JBvjxsOpjHpnE2Yr%2BA0lQSSU8FShBcuPnbGxlu58XgfHXx3TeLbtn%2BiM5LZV2XN7cGsJMPJHaoV%2BA9vjyl2ESkRWaj6JFP2vyMA6F%2FSvQuDi%2BRj08mfIfvLw7IiIndzLGrs%2BWXUWjEbVly%2FmHR7l0VbMggC1y2%2F1%2FT40aiK1POcJYj5C2Zc6DKEE8qZiFWGgi5sHqHwLYoutBBaxIbfnw1JARlcfpE%2BCZoAFegUBP1mng9sQOuAMYSIjUj4EyLlzyT3x9uFqDDamcV6Z%2Fd89lHBUGmAewR19UgzuCGkRaZxDPhXsRF4a61oDtLkn65nov9%2FehTYFRfB89dOket0V1YmoZ5%2Ff0e0zC9u7nBBjqkATdm27yYi4Ymm1O9uCODMv%2Fdx88d6uvieIS%2FxZEgcIWfZGIpEJWl3rovVPWa5QJzssbWpak01Xi%2FYYfDsjBVLCopPXzpYVoR9NwOT6ZgNmFvZO8%2BwidpryyilALe1E4TrMvr%2FG3XmqLo0aM2LzDBhFyu7A1SaTK6AE3aGiGOETXq%2F1b%2BF7fbrlPHQrPtUa%2BuMmFvmj0dG%2BcZSJ4wlQ5%2FD8spB2Vp&X-Amz-Signature=a9e8cd248304082571f5908a088ad254fbdde3162b3a5585aa4d11f9ce5cad19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GNXDL6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDgwhUkBJh1yaUMuvcerUjddLVK38QxRvRwXC%2BGrp%2FnCQIgLDYTVXcYGuJkBbvqWSZTQHM4SsUxk3It2k4nnaNz9OMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyhkGSIFcJOopi%2FXSrcA5JpFMTeIiX2GHWUOL7T1M2IIO65rWytrXUDubfDQk%2F79v3v3pKQVvsDoD733H8ZuWRgXjaLEeudSb1tyr9RBQyXbBf9Jn5pGdia16JFXq9Wy785gxqAE0Gd7WXJfWDOpTwlQuanrhbfKof%2F8UBpK%2FQ2IYPoSxWqeLo1OakugMvBAR2gl8PAU%2Bk73Ok38h0CQdL2BBaw3fkvwmEYgEfvasaOAHNS%2B2mmjIe%2BEs%2FlJEpmthJmRfpHrVpZL1P4%2FBHM32NAjPpbTXVdphMa8hy7aOCLi1bD%2FTY4vPM7j7GtMPwYr9uG19A3C4lR2rvh49dFxdQfKL94c3d534h%2B3t2yLDUko5knQER5KPg1Rc92inXJAfeK6%2BQYcrHR1NWmCHnlMVddfPabcqZGYvze5%2BfwI3diDSTTrtT%2FFdfSz3b%2BI%2B7jX5bEA1qzzT6QWQBMIPRjTMrHtYR7agZgVl4I0mpOo04oWbIbW%2BBoqZA3D5vRHNfwFxri9SdPm%2BMugtA%2BXNIi1yaS9kyVcj8p9Z%2FhfUyB43OufFwT2J%2FsWtPYfPWb2pqaZQtPQSLT6w59JryBAbTmVNvFRX0GJAp3ARCHsbGiMjdF0pl4rub1EopllMlL4ZnREKGajnyXzkaGkcrpMKS8ucEGOqUBuuvlMrW8bAu4VeK0MWnzgk%2BbjXZDJnv4V%2FnXsvbnHLnv90Gv3Vz5q6cAAQrF29FYxcrlnUSLcjKuRy7T0RNxXNmGakI6nTxDVTi95%2BL22zqvStUftAlzhofCFH9XvaOYxMTBPUsx7Cemi9nFYGNzf2Qg4XSkBxXQi8CFvrOAhQOiH2TD1mJLVqQ42lvorSLHqMQryvSDaSXbSOvp5EqETKrWdcYh&X-Amz-Signature=3343caef3758524f1fadfc2c70df841d287ffecb87d61c62a042bf16d421d9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
