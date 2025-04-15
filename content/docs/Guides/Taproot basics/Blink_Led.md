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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KDTSIE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnAfENZqzkCk0E2BFZlXzEEU9MmL5Gr16LUaZJFSSHrAiEAsa7r6lGyZ19p1D2yc0%2FXSwxaQZ%2FPzc7vBQDI0gFSStgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDHzDZUl2EaWXIn8hrSrcA47Ijg3nxLNBLv50QDcANLI31GU9rsvO0UHlv1R1ykxcJ4rPgnuKK87RdA0FNPwDX5Lhl1QgdpuILPZ0jSPNCIXyrAtNlAUD3pktD0y8sp3doMPx0aLlCUKGOTMOM5LhodkBsDA0itj%2FcTdMl%2F74ObRMbfaGIYoGXkZK21zdw14SKAiVJahvaZdjRPqZ5QZ02ge9EkQcbU33p9TTf8mjlkqnvZ9hIHKP14Fe%2F%2FfIt43AXmV4rGOKBe0b8NjYqrIiEaYIbDjh%2Fnf%2Fq0MgUJSWNhzUvph7N%2BlnC4yYeXheIaB3lJKt0C%2FQpRt6WxJbealfUJUJeSzrs06JuFHjqBkXOr0BTYAGHhqhWg339GtCJ9tvVynhCfauWZPSK%2FeglrSrCsjQbD4gULjRx0rQSR1FXydHvu3Shpsi02YXSauWFX0GYSKVzNscjZ4cKZzICTh9I%2B17X8UGxkR53j171KY%2B%2F4beFO0CBYgWwxc2n%2FmHG%2FVOuQl8AazYU0YVYGS0tFJ0BbdO%2F3bSbC2uusgey2dLyVbJPGLsGymwrxl%2BJA3m%2Fpy9saNpYzKv3NwRhfvxsAj0F1RVX3zAcU0999PYcpqJaMM6OUPhLVI6v2jznMURKGgwjswwV%2FjTlrRMZj0gMMXd%2Bb8GOqUBLjeb7aEQ8vRqxFVuoGcNthIycHC%2FRUvXB7JyyJOniPWlx7ld%2BEhnKz2XH5nHekFBnbTF5KaDwMR4p3qdt3q%2F3v9q2b%2FQLGXHfTMuFfaeJ2ZqdihYU%2BQpZ5iu8V7KPDsygIkIOyg7xdARHyTVsvhejQrfTnLS8frXaC%2FkDmjeWPiaf7Z6wo7v3HIZ5NCIKtmnfxeh%2FIMZhgoVsLBCDw9MvwpSD6TD&X-Amz-Signature=ed50689a48b084080f38c1bdb7d164f23cf6eee2f439e346f6459e2baf693651&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGAB2QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDi0SkqKB%2Bon5z6SNk2ZuTSUSY1u7qU%2BaRlf7Hqt8RwgIhALhsIV3b9g8ubueAzW10oVE38JTJUrQkmTGL2Ge5IcFWKv8DCDAQABoMNjM3NDIzMTgzODA1IgwTmBsaxSzHErVhAmcq3AO4FHoAG8fzazNFb0BRBUdSEjMh7JKrKaV1Wn53IrvRTwHJItRMSq02suyb%2FNFUas6qRScUnXYp8s3jzubyECTpzyWOnbReoaVkfEEDWBDq273kSxVHHphjIzC1rkf8ySB%2F3ijH1cb%2ByQbuWbmc2FqgOle%2BEW6NNmunLMQAvXl%2BFGFWfnKR%2B2gI2pkryyWVMbAFERxeu1qJ6GYY6LswRZFzmifOUNddEqkNbyjrteuL8XOx%2BMvZe99pYhC0oQ050bPsSPpdGeT5o3gZnOprlJkBhXisFSfCCEQh%2BX%2Bl%2FTwD6s4qmzbSLn5TojXLbRBG9kqrffnbwYLsW4LJOzNSzFl%2Fpqe6wQnA2RbxLGz%2BaOJmP8azwHmuPuyDDBkoMAlp9Ag%2BRxf9L7mRq8Gtxcyt8Ma1w%2FveCUpZ13LXL6qGGxbd%2B3fSjY%2B3h4NYhFbNdG8TSBkPALWPOiByRjt%2FwQA2mkUMbJaprcE7K79y6qisRQ9cp5zFvwGlWu5DRIzI%2BwFxY3m6LZ0ncXGUdn2KU4CpBlBWOziqkf8JHV%2FVqzA%2Fl3rTBVkKc46TNXR9m3VSReWPDJ4A%2FoWK3miKG0dkn%2Fm%2BvekznTW6qJ7AnEBWn%2F5kcVa5Gm%2F7%2FOCVDATXJ1VLajC73Pm%2FBjqkAeQjN7qulCqtfJwR6ZeC1nF6EXiFKIjkqLvDtTk0dbvCSuvIyP16yeCDLH49dd84nk687YthB%2F7jrIK3zhofGaiHcDBnKMWNg2TAsLCmWa9XFiCHUjYWE6X0XKsufQhmt0Wpq1QUMyqt8iixTbz%2F2WFW%2FrQExAsN7Ukb1kA5Pt4zeAffkZ7g1sev4ov1Vu1UXL1C1ocZnbQda9oT0aR0wFXImrgp&X-Amz-Signature=cf7484f02c16045883c23a8bf650d3d358d694e152ee92796d068378a48c22da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
