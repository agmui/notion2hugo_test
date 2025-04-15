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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJRYAYZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyFnLJKVRU0b2FifJUyp2qon%2FRdJAV34cU5Py8YKeGPAIhALPnzsJDbzZbeVXpoN9ElxWUf3ZY%2FZ6ExYIYWsKd35erKv8DCC4QABoMNjM3NDIzMTgzODA1IgznIMO3v%2FV6rT4C%2F2kq3AM99VTJeZPg5C3I2UC9dLsclmLv5vQzsyfitSmF3iK8B%2FFr8cif3U8MPvQbng3FJxaZW1JCz%2FQvgAMmcabBx63mjsO7%2Bi%2BpMOCjx2mlUY%2FoHYspMsMqz6B7jFy2u1hxVrcxEaJBUrcs2DRJOZGY8jgZ%2FuaKjhy02sF%2FYhYw0CnlXjgWZE6FK2bUwJO1y7VqSdrzJVnjd5mgLaSyqpprtHzcXEOsRlosWtUAum8CH8qpFTmCJ80HPNFrehVleYWg3CvlZYM%2FKOLxEuPPK0AgHHxpRkPBKRlNbnrAGKYQxY9ZPAhmHsr3UOL8AQEx5DcsxLBAqceLKMa%2F12DLwsR6YvVrPbrZl2RlmRJDOgdEgWplRdG8f%2BGOSgkGy3FfJCKraVKUc8oRQtJ5gHtLPYaF659eQX%2B641OLm2Jg%2FQTqH6aDEt9GHtrTvzjiPQgoukl0gYWHVINxRYr6adEqfAu8bOEEmOj6Y457IEDHiN1T4XP%2F%2B29nbMP4eMFk3OQQz6WQ1oxZDmM6zTotSNuJdZcTbKdqDCGntK7oz0o0XVq6YiGNB5UbS7NFGwWeQ3gLXwW%2B9tgCRDsGRIz7XP36DITjAqkEsxfuYplTdl%2F06SgRuTTU%2B5MDOUYEyGsH5T6aDDClpvm%2FBjqkAfBAuChf6KqQGESIvBQ56%2BOHH9LRM3gHw9a%2F7XgI%2BB1IbxFkPg9dY4HEWud0W%2BdFa3ypcNahJSCXG2ILS%2BfunJ1dOaMh9ofDeOvwg9szjySfU0BOE3ulRCEQ%2BzD0T2Fl0eoz2%2F9W46Mi6CQQMH3ES2GeKj4VfCUC1yFS6EZXhlUHPaX7n4yyV%2F1aiDHQDbcOhjhc8lZA0yP27Ng4eEnCta64vCc6&X-Amz-Signature=aa4ea641430abf8134969badec880d0bb2e873cac4296db05448eeeb10529204&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5D2EKB3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzvboBj8FfY78f7cQHFXtFm1hZnT8H3ubrT1NpvKGKAiEAk6Amn3Ha9o2HSXKl4e1KdazP8R2BUyjUPY173EXripEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMbe%2BxmfZY2lZtY22ircAz4j5YCdqXBoTsL16kd%2FAHdlRMww85kooP3DCos5pFpYyR2Nqeo1n7uTjtgkrNm%2B4r%2FZlgJDRmyeUYIt3UvQ09bBQQzGZCTf7BUim5YRlnbeKoi7%2FCjT0n9Oo0p34WHD2Rn3Ihvi3q8HNTNjsw%2BiWityK%2F%2FwSRSKz%2BQiSg80LnNzclrkzhy5DFhnIVE4ssxIMqbF%2FhTiyx4ex%2F5d9v0Ao6qGjzJBvNfOwoOvpO7JYr0voKgDuWPwKhjp4f6LyYE8NUN%2FvxrUZhsdcB28zcuQDLM68ZbQ9LtQ4SlruozFmn%2Fk2Cv0Kb2%2FQzW2nHLdWQag0WH5ynXpp3mgVg6pO2wa8m24beq8letOm5cEIkeMZoZxfITpS06VVJh5g7vSzZO5UN5TgSTLrSj1NSxmndatNHXweUk9ysH%2FCledSg4wNu1artFJB%2Fmmkv7Sd2TVFCY1qVp9Pav5FgBZhTGrWqyDOP%2B5J1AaDWJnq93LZChio2fVQPJbHXmsElZvigo5gTs48sJcCnyXGfCfac76oFYElq50BW05ZvDuMBJXbgC8JThG%2F%2FbhM%2FgiDBXOecbdY38YTR9wWL4ByYh%2BBMQRcagC7fitdRy%2BUlM13XZolYLmOtQPBbauF9%2Fs9%2BjK1bh4MP2k%2Bb8GOqUB7JvA4c6BYminZxHh3PRbLCLdQZ2NTNHZFw8So8nVvaK8yGTjgz8YhoXufMmT2bagorf70wDraGkk%2BNzu%2FjfT88yOsZZ2SdvzIW2r0WrMPQqkCCWFfk90xPmy74LPYKrbguxM%2BGBW9b37%2FMIArco0LeOVjherEU0jjVp8vSo%2FKqnW1qKV4KE2YSrpzIJtvxBCbaTbYM2IsECCPfWLW%2BYtzseW3aj3&X-Amz-Signature=0962a07540b75e082a1657ae57630948219323559def158c68d8993bf8e8f1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
