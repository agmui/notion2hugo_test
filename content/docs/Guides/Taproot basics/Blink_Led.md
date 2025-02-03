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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBFH6IP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo1H1K6wo9OWZRLsoDLzNhznzlimUOM4mfrKQa5rKqgAiEA8XnOrviHnJnCiNYIXBz6SLJvvMOzxUF%2FTp3fSFVUxBQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNrW4q3QWrYvRzpTwSrcA497zHCwldJSnss%2BR4uQRxR96sjbgllT3DvFZYimlwN27zXlQQZ5%2Bd2BLnbXVmPmYI0nWa3PWo%2Fk7gDLa9MI2aptboS5D1wlyipy8RkTLJ6MmEA3F4aQsH%2FhAvmXaEQVndh35DxaGp7aCFKEiXsfWmL873qZYv05ben%2FPo5x69ayjV111KzJ6Qb4o34MWd5x2k2hCL%2Bd6Oji5Im5z7Zz73g2Dq6b4J0JmHDh28gjNHCop1cBMgMebIYa7C%2BIsSAzjrAGLt15gN4avhIYmlO9fZ63zR864TlfaYgmQIy6AbDmyXutBPMmcS82G%2B%2BIzugADVzpJw4e9Rgeu1gKFcB4Twyv2vV8mTvfF19jkESm4Ounz3FR5RyVQXauks12PL5%2F9lBNOu091HgZb23Ek9M49KrjQqyxejicHO2VB9v%2BPkkn3%2BDd6%2F4gvi8DUuvqbq3VVu%2Biak%2BJTML8VVsWdYPMNdWuq7mgDovM%2BqDUzQ6hE0q8H3dWUc4ruynbBlb1l8qjowP5iEyfC%2FtQkO6C8QBSJoOp9y3g7vaxH7MAlx4nIiBgojB2r20z6sZ5d82F8UO6kxEeMjE9tqPWLQJW57K9sKpAbEu0spY3iHARYa1laIqVsZ4yDDc6atgv7cv%2FMLLUgr0GOqUBfC7F6h9xRWZJmZp%2FhiQu%2FFOhn%2BjMEBBlck7V1Mfij3ZQlavj%2FayhZIIXq1WiNcPnl6x88TZoZQhEgpqAKI6e4P%2FdY7uYZq2yihj5ccgM0yYtwxcnALql3pG6o%2BIJuWLqTZn%2B8ZKb7TG5MAvEoYtxBgMSkxsWOicfXcDtVlgGcg3Fe%2FzehogzMw3CtmGYijhDX2nC87q6YpH8utU9KU0CaDBHuIf9&X-Amz-Signature=d1e052e3a35ac5d172acbcd4950719fbdf828dfd79b3a58f68a8864c1271558e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJPGYV3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEH5Zxg1%2FRn6nHeJwTWJKXpndw61wz2IaVR8EuaNUmzcAiEA1c9dSzXCiIej2XeaEbTDxySaMnn%2Ffpy7fnI4eJ9BgiAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDG5TUwigO1empn9tKircA4%2FKXXqykgWMCRz%2Fu8jRfCY%2Bi22aOF4LVaR2mRVo3Jq3zIwRcHyp3i%2FCsWwfPwFqzdaLRSiL0sNyPPH0r%2B6%2FGImGHFkl%2BtyS3NMl32OJPm5XO9P%2BBeo7vP7CQZNYyomSzxAiKAiW22ob9ii320Rtk8EeFJL5r4d9VWwnvicg5pakt%2BHWAawoFqD0iPQs%2FsVqWPhhMRgnmsQc7oue7lPENnSKFoOxLIXQO6akvCR7Bk5%2BevV83Wh6a%2Bxld63wnHbBZJSFpZz%2B4lOauBwY5tsgJQwjR5fknzIXjUj3Y6tk17g8c8sfvyFuUHGEGNXcyoZbtSoIXuTvZcqHwMuF%2BPn4dJX%2BaYXtDfMXb7WFSG6iFbLy4ZKVH6SE%2BlBkAujnVIBAibf4a0lja2VwsB9Wxe4WkLoHEqorUN5g9%2FvNwI%2BvG%2FcD7l0z1DCrwdOVrX23dxtz%2Bu6rNYyYwZIcCTcZFVPUXA%2F47q3GlNLJaUoG12qHLPcJ6B58Ulgv0YRpC%2BlcFHYcmWxfPLRMiwhZqdmBpjfF77%2FF2qTRdVDCGdg6fhOGmsjHCYbnmTZuVH%2FieftZ14bwn2Z14pO9g4h1dRm2HdDfxuaoRa8mULg%2BbM3u8496xephbdeu5O8Xr5drrnJ7MKvUgr0GOqUBFrAVJzR5y%2FHkdU%2FI17BERf2db%2BU4kzZGZVgZVMcwN26ibv0daGxNouTLOdkq0eNOlynaomKNrPC2ywcPTBg1mnhS9MOhyz8Q%2BwX0UCOitcItq6WN2sl7%2F7Q5FtGlPBPaxpKbuuhhnjnryD5stjU1l%2BpNApBvHjhIv%2BqGDlgSx57QTvwxhn%2F8yocctytk5%2BxA784K9TqKs6JMf1Xh764T6jHJ8Gf4&X-Amz-Signature=e2d5598e4c53817645db73935da75795198fd3e307fd3782086e9f85dc268a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
