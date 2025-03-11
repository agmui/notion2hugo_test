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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXEPXA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDfw2mishISL4aIiUygmxiQ%2FeC0Pzx%2Fy7ythGV6jjdUHwIgFOsepsz7F8sofRUI5VXZUQ3Cvt%2Bv%2FGL7a%2BltGQhb9pEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUYAu6lGmWBH8ZZhyrcA4URiDZ74RWfrX4w0CCwa9CvbWzWffu5GjxFT92w%2FDAfXC9NxLdWVOWjnvFjEgyaEMp1aPxj%2Btp%2FBnu3BRO2jjhsOVYUSGwyCEl8qXLWUGOiYlMX5ZuSoABYUGC0wkMVcjqAZOkjmxvdHkW%2Fi0b7lVrYrSySKveUdoR7t%2FvmgdWfX8Ffbg0rtsSdsZiBRpUwGrtQ6H0KJ3%2BN8BBPnxe%2FMumK82lmo1SLhVyHdPfmRLZaLyOMpqYA3Vh1oVFeoG14YOLw%2Fx5D03WdCsLvKiPWkI7nYtu2pXVfjE5WYBgay5J3ALQ9n0f1H3PjLMr2nnYW6U7lUL6ky%2BVVegn%2BeDXGUpj6LOWxjH%2B4iH6p17sFQLKgczsHvfZi4eLuhtMcbASmFBHNukLCD3KTUZrhKOxOTDm2dFDNaViM%2FCvWWC%2BmtDchaoteXn%2F%2BnwK%2ByaDfTsS5TkIW%2BV8xnKjyGZesMXf2UWkQezoRYdO40I0nUV68UtnyGx%2BaR3vpFXipMm3r0Zi7iP86uKNJWnLGSSEx5RZ8EhmCtUexlCJkfr2hfvLa1wJib5RLD2Ah5vHrZV2icsnq6TVnlfJNL%2Ba2uZqzPEAWJJPXyXj9sQHr5ZCaHqS1v9EsciSAEWrMfaMIWHWCMJSYwL4GOqUB0ACeXvchLaesviz13mqi%2B7WrT8GmptJASsNRTK25RJAWaYQnFrOihn5gfvJGz2Csf2dDUg7yzHnixSfOJxZG%2BIyhiDq7ch3k5MTVxjNO4vjfwrm3qgQUq1qt0t7T8%2Fg46aQs52Fvs3MCjNo7zSuW86IKoKp9Nk6Gd92XYAx4Nw4CutBA5T9ro6mM21keBr%2FZOZmu6HXydJVMu%2FaRzCuZmk%2FvmL%2BF&X-Amz-Signature=e08e3b353292555f8d6f46a2c424f9f4881a0440764a18e59b15593cd172db99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DG7WF3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIC3ypiLpoOSK4hO1fmxGa7%2BuH%2F1cqDInOuMvFNUGq%2BZXAiEAwT%2B298ygC8%2BbS%2FAtSI0YVTRZe5%2BPHFgP0lZFGP4ZTWkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDc%2F%2FURDNE7upD7PSrcA1uPKp0ScJ%2B9iGJW%2FiPcqwJrSCN%2BSeyh%2BOeSosxMpM8v8fvTh1UeikdDZK%2FeanWlNbZoJ0uTqejHlo6BrpOFj2UFQTMtkzB%2FctSIOwFydtNRg%2FDRxC5lCATwebF1G7sCXj6CngazU1GWBLPDp7BlU0w4ySzVKnsSSYWprjxAlKMZTNTIam1ZzDs%2BYsSDUeQ0vkb%2BGoHITs4H4PMvjl0MDUBith6bLzN%2BC5Yl0xELVh1OO3gIi%2F28yU8ZHk2KN7%2BwhSTqFjRnQAlbJzey%2BHG2V174f4BYXDob0q0i8nCOw78wZPzD1SS6JBRZXnJR9YVcaarJeMj72PxE7rkPakZrt7CV70ChVvYzqqB%2FCUGmgBNLKFMVXXq9oBbQrYWG21YL0Z6RSVnd3v0S%2BHz9uQR5U6S9bAL2XqMcgK7rxTX3dG7bfxwV4uJ6OqK2dgiUnUcoDxcWTut6QLZJAmpBfVJozAhVET8tfn%2FNpAvtSAwrGB6%2FG3eXwloDnQXtk3YhCuXKBUaLMNpoib%2FWxI1PEs84hPsVq7DFtXK5Toq0UIdXfhZj5cQNKC0kyk9eD3aV4cBPlnE90rHrXhWOm6x8Q%2FgpqDVvO%2FaARBt7usJk6USiyzOqGemw5wttXxuOnDAVMIOYwL4GOqUBP%2FChji8ZxIhxLyHL%2BR43uyQSOwX4KjQIBuFKr9%2Btpk1n2A94m0A5Jt8Pn3yUaGBYqRsRZ2xzvoaJ69AH9ASsCjmBDznnvQZBFJObp4%2FMRxHwGZBQ3%2B9Lhu%2Fd9Ru08AQfZqVWfQJhThA3hi%2BMGiwvzf1hjrcJAn480%2Bg5sMyiDqlBt7Si4NwmdCmh%2BQKN7cVbf8P3pgyyadDCtffAPK3Hz36crJAf&X-Amz-Signature=c11ec1a873ccbf5d122c0b1fe90879c4f93faa4d73a02914acd94c37665f8b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
