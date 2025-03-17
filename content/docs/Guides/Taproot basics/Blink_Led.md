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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJ366F3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaBUWjXjnGAMWQIK2Oj%2B5gkKggPPwBw1%2BKdxqoVi5K7AiEAmSEzaFTIasYSPncvaaoQeYn25QAWbM1MqWeJLH1Fqcwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG8bqRNYA3WTggAy1ircAxL%2B36uPIWfedO%2F9BZK988kCf8Of8y8T%2Bdhm4XwwanKadWK%2Fkid6edaEUEtxtMbXkOFCS0okXS2KDZJXOEkdR6ns%2Bkjcj5G1dhX9rczszNazWaHUBtVjI13HzvA5mHOJfVvmcY9H5nVUfewJBWqdqETK0QE3GgdG1uZJqC0ljr42yc%2FlQAesVP%2Bkmh8jut9%2FEX85w9QsoCwlU%2B08sqY3okevGUQodIAqGe0mPW0zuwH%2FIwi2fibi1WZVkv4%2BJMTjXvlHaIxcB2m9QkF9QPyE40f%2FgS0%2Bt%2BvjiMCnjzE%2BnTLy4CduIN3Ag2xbF3%2Bie0T%2BxcdJXCNZZlkYUkwNzXanfyBst5cwKYsIxaolo81itN5Y%2F%2Fpo4ef2%2B2H%2F4UTMelNdjHanIbNTk0KcTiZRqRG9XCBLFyN7SFtGlVEikBfp3TrBadewBcqHndnxrCMw1eLEjcxDKVGD6w7XWqHRBeP3pX4rM9%2FEsAraF8IAgjsy6wuqXMFHl6%2BtkFFgYMKSL%2BG40nHtgrpHfAJiHjD9AwLJcC%2BtdtajPmKz593OeOBB9zqLvg1uwxBw2Oat4snjg65BNR7Lsg47%2B2L0cL41Fn09w9Hy9N2TMSFjv4%2FONLgz478qnrbHjvnL0woAcBI4MNGv374GOqUB5LupF8HhYlPjnBA0QSqHTPuGylwz%2FfL1vD2TWmgDb224vgeIPKOYKoYa7G7mYEYejaP25MFhK9q7HcPPQQcRVuUwvyNeRpm%2BxaMvCkHwhLicsDm3HWQ12qOEhjZkemz3RroaqQhg8pXeowr%2BKQI7gIvLh5epOF2Ui6tGw6des1z29w6jVq80phmKpNAdxT1cXXTceEJzgH9JsADwxD99FEMjku4D&X-Amz-Signature=3f0c23cbe1bc5fa60c45199178acaf328746822f3ed5acc99b703fbde6d9135c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NF7DXW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkY5huLrGgj7O3SuOHloplpYwyvZB1lo6LqwrBJHRTPAIhAPsUOvtX5GgH2IIbECfd9%2FMxttzGJeBbHUD9FiU1qQo2Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxZHDmnQNJKNM0RAZcq3ANNYcGcMpapRmoMeUjZMCbi2b7xVVSUQS2esaw%2BOP0XDQqLhlWlc2LDyPoKYoP9CGkC8r0BmOX257e67CBGjp51agjGbagnACAlcXDTIH11q5v1HWtyBZau0QI43flILpJSrEmh6HVHHPySUnBwLBe60uIS5Y4V8UKgu9T%2Bip1fINpFT9w%2BT5nHHkkTYnOE5nUgYyPWWR3BPOZ8Ft9ScO0hVAaQOaVF1WBZjSGh6BUWcxGVo06o4%2FF1Nq5S2ttp%2Bcx434xK8uL6lffLaCN1ewSD2YeDGGiQDRNAX5SsgdcKOgAodl2LTJVnLKOZxVnFRXpkzX22aWeicswX2RanhjztL6Zn%2FNzgNoNLZj9eDEryWj8bdjFYJmS%2FRJcGYOh5uhby0K4gcNaDa8Sn2kt0%2FZASUFWWkmFY%2Bxs6bcByWbev%2Ftif47INiW7KKz6UIjlJFN8%2BsF8%2F2alQz2SeXiPLatRQwqcQiyoooNPfxVD%2B5U6wqpalDc1L3mU3zKSzQACH1aCshl54vs99h68a9uznh9o3vjy8tgchUSDGKEeT0yd0L4OBXm%2F3rk9c%2FCEKPUrjowiVgD7Llm3nEayiJvlxWPvM9THYBTEdXFh8zyxkG5qm0VOn9AxuCaiUeyljjTCcsN%2B%2BBjqkAfbwuk30sdVtpo64dKny0FxHXzzkLE6yfJFjKJ5w9kMReeotol9pKkxGUqWVrEfXJedJd%2FsOM29pr4Xy0wiDmZctHz8ao3BSyJa6QHRXOdtgpaEkQqGtAfC%2Brlk4Un5oy%2FQllJffpDPj8G6bZ%2B2WZH3IKWeSgbW0hN0QbcT1wir3xSXgRI4lVe7FgbhosZLsuRM1d%2FzqMAwMmaBzDe%2B8fIDVIrVo&X-Amz-Signature=d8562b448ae2fc7d95628465624c91c576d58cf79182dfbdcece38da77070bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
