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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU36TCK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBd7akJOdcZTMikvPrawwE9ZsQoyjtn228mnkd7kGtmAiAn%2BXHUB2sCdFWocyTpSA3ak4Pd6oseDwZTS%2FIfMG8e1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwznidlqfVxSRzi22KtwDAf6LDBKJg23v81ryVMC1tNu1iXLHKz20KfhA2YdMMZWg4IoEEXWBgNljX3iluMcNcbVr5vwTvmpUu%2Bx2NoEP8G03cVjQukungy%2FUMWmGoLOKZYOwBcKAGDj%2BzGdA30opXRi5Vp9rYsOIdBsfmqMjWGLkOvapLq1Mbca6XSNSmvGPpt9kKkOGeadM5uX8utqYsNhHfgyeciCmBkDohmL4MHSXxMiOEqP%2BaA7fUkOTnmZtAluueqn4DHoTNZfm3msDmNOKMg6ucML0s4cbwZZbFGFAuhzrm8ox7kKcNILn%2FuarYcDFQVaKvB30HdVyy9Oqt%2F0aeiD2foFGIN9p3UDui4g2eLas8TVjCta6UGstYPD3THonifpaRuZ8CXxK8RxhPjTSYjPK8yktIB1wpEylcarXAY43QtCmrH6vCn%2FfHX4TpikkEypdxk%2BOGnLxVBvqhirkLz9lJO2oNHX%2FsUeziPAzPBxEN%2Fit1eCPuaKOoHlT%2FaPUm9I083E9zQ13JyVATF%2FxTwfkE4ddsDipdFgRZjDbd5fkGaEro%2FeX0MOoC8uS6eaJ0uH%2FEPbcDaVi9aGGopfMwacSQWO0MrlkPXsnXVVeZw%2BVxQES2BYuW1ysLHliKwOA5aeISVQowUow%2BLaiwQY6pgEXZ9qtk3fyywYA7jeZY2ruOexOxTgXrLcWccph0y2b%2FE4gVvQ6oS3BBbHyrdDD%2Biu42GIHYWV5Zqw5AI9xZiMdsi%2FZ%2BMZn8eBfo79VZa4oPQzUcU31ROMIO18jNMZURIWQ76Bw8ZX4Ff5NJ3kxlpc4OauYpyU1I1d%2BBWtK%2FeQiYqlaz2H3ylwuSYZuluHEiDMY6H4HFnstswNzxVlSGx2u7KsBNyQh&X-Amz-Signature=5c452d443a3aa9a85e350601a6e0a5ac8861e24616f47d25812149fbf075d09f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBWTKSQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYZ5AFYlIamGapM5Tx%2BLtL3YScBQulLNjYrzxKoSU6MAiBrn8ypztb4yyj1lUPtJ%2FvWW4c%2BAEAloA%2Bj6bFOe8h67Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwBg4CIUA2g2w5i%2BSKtwDOCa7L%2FbRjwbOVle8cC2pP89O1TLB53yAQnb38I4F6BN%2BmLakyW%2FYbeal98uaePJa3qGsnxfd35LNWKrhqsQJOvtOyQM720mHEts%2B4UjNVVqTjVfFZ%2BGu%2Bx0gNcuwCPQiBEt1ba5kHLdDzFPVzdVVO6DbcuJNhc%2FIG2rpcq8KmSai2ScBzszOc3NrKfLXWcAulyQVkmd8DIJK%2B%2FkR%2BnDmD%2Fe%2B%2BYqcTMDJgbpwcIAoJr6WcuDiOE3nMkcKfh012TIwLLYUU9EMO4482NzAJwBwwzpTZMYpS8IvT0qWNEQQ6Ke6apBiTcXJNbbYtK7buv7Ri4jaFK9%2Bes8lgpkBXEUOoOM6Dhy3dDPB%2FTGJdKxRcXeiTYgXhE8MbziMBodRfEDxprkJuO8h7F89BbZVwpUmJfcrUJEP2Xm%2ByFbvtSPvJkOsHdwfffHeoDivn7rm7HnY1BMUJVbZ42wEFcU0Z%2FapoxAWLyXUsUwbLLFnEx6vTtx%2FS7MHRGrgW4iWxgjU5Hm4OZM03eGdkgHAdtNIlxMSNIrBkGcPJwYWLPuP9fe0gnnukMrE8EGVKJfRsfQicwyaZC9HjUEZxRa4RmMOH%2BQRe33j3ty9LAAT8NiIFUAfwaSb9jzs4BRcXkauR%2FUwv7aiwQY6pgHS0JGVQfyUWdulZWoRWLmeW%2B0mbmjnrUwr6yafqrsW4kY%2FMPxPPRMUVgpwziyQBE6mj%2F75QKJMnmAEZIl35gUEUX1Z55FtU9kExCnduyZcfdMzUnfV3g6LF5h4VQHNQMnojgPzihRSFNiXsblrRHwzRE5JTa6EBVbqHBVlR%2FT0%2Fzycf%2FRH3XDYQ9NIvC0djjx0hgQK7sD%2F2gPwYJf4v4NJ%2BU16f9uV&X-Amz-Signature=0eb1409f303e1d6bea4bdb55e7de19226394fc416befefcca075849cea12032e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
