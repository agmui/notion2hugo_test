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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BI2E3A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHirQY5CwsE4vaUpIsjuFUMwCev%2BtES3A3R%2FDpzuU9KAiEA7X33qQxE9veE3pOB1oMmJRF%2Bbf%2FFJuAR6fS9pawGOo0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPW4l75Osex9TDzzsyrcA50JJBM1Nkbp%2FlxD9p0a6q6CTDrRvGIq2OsP0NS%2FQB%2FzyXjQL4Jw4DpJS83dMYev6EYokSVMrY45j1m7akN8vLxXbIJU%2BbW3xvuO2xUS5HbyS4PcR%2B3wVFDgBdKbyFPDMyIVTwDOVH2CNk5ErPAXpS75xn2KxsjrwrZa02fheKqzIqYLlIJP%2FsYlfCzTIC5KctSJdtbP19DldAIIQenOBrXkEKSSlEPv6sqYkw38drycsewVtdmk4HCz9F9Q2XNgpCv6Yj9gpCGmJWfc%2ByJ1RBis6pIkLv6Ks5HPgsSI7X6HmAI%2FqveXYCDll19%2Fq8yuQcc7NnyySHEvBQNTqLsuNayOcGji4I03YW%2BR%2FsJVSsGm4QcRQvlfC3Ig4qqA74QnTi9JgV%2FxlJ%2Bfle9bukzyLzybHHmsDEiXz%2FtpAVB2Sw4tztees9h1zWTc0lPgxTHm0L%2BxMCEZm496tH1%2FTkQMq25gq53OsUFyejD%2B%2F9rsYB5vEgeyfKuIBdQ9RwVn08q%2FBJ%2FSLyKmJCd4RBysdG8iiTYdMSoNf32j03wDfpuGPx0K0AVaJMFucPVipCfbXZRUrwCBw%2BflMU942XinxvKZU5IoP9jcPHvdevVzZjNhoAOVnA4szLtWOtbNyFRiMJqM58AGOqUBnNdf8BznUsvdsmCfcpIsjaX3CBTBoi%2BxfdPZbItXFjN3UFjISmvIlYrtciiiqAQoNdKDRe%2F0MtOTXavRH7mCjECcW6ZYLIR3wN05letysMSoOUh7tQ2EleuDPhborwYUkoAMw3VQfJuwAtjVBMFkRHFRKOO2dHtALqQQ7LPeoEDosM2VaXXk7F3B0GrUFN%2F1CyuU9v%2F7RCOZof7UJfJ92cp2ta8h&X-Amz-Signature=1ac15864c4f4f28761ec50874dfa3a117762e2bf88a4708b07b1d72082f98799&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEJCBBH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHN4epm3ABLSPqLiVu7C%2FhVI98WPFFXdyGeQtLO9UawIgfOMOGUYrzKMwovpHZByBX%2ByvSlJCqikAjfUy7YQ3I94q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGiHA16vUqymphMi%2FSrcA8eF4%2F4qPDtMcolS2WWc5SXJh9qzXXxjInlZ97x5iV5WRWnOTWyFn8CGRMHt1WTaUhlQGQLIdKHjsJ0%2FpKxFXpd77eEKRmMrNsGpjIFHzGsmF9gaI0Dp0%2B8ZYGwUCNTooUtg79x3Bf62wJMacDLYRDkHuvrMfFSDK%2F07ipTbxQiL9Nxr%2BeAZPl6VSOYfzQ%2BqtjQGE1CWOsvBu9%2B4x9zT%2FvIwh8ZZ6ALw9o4LW%2F0gRE5fCGClm%2F8Xx5VD%2FnrZkvhrHDBDBQoS6w2P8IjrHaGroAdXWgWgbEOqeMMfciGCHYbJkj8sDbfoSThkVzVfGkPu6l4au%2F3f1D8EIt7jxsP3p%2BiDd5ECxjWxtwb96M8VvCzSQjotO9qgt7vJ5ZY4pZkOVQsyP08g3NllThcc6nxZHRTDGlE%2FYbdhjHOc5Sa%2BHNw5rv13tRZEDMhgRvCIETC%2BJSl%2BrlcGS3MlBWgdtwpDKOU8vJYoqvK9%2BWeMBmtmjN8dcP2BS6pD2JANxfC8unOTYNJvn1wjr9YPJ8hnVVd0DH6vRD8220YIFTqyFFTvseFxG4%2BMmjMnHCYMzRhObX66Sp23Pqai9B%2FAtfnTwzHMiILbxjvCTn82U%2Ft6Mu5RfjYRWQXCiPfX08dJJ1mIMJeL58AGOqUBjde57ZR5HeMB0WudxvBZVy9d6C0m6RtWNgyAGHPs2nNL%2BnZCuqBdoooSQ26LDY9foFr9UUS6z663Sw35of7oCP6%2BB6hS%2FbUTs6KPzON4Q4UpLma0bbGeibuV4wY%2BBqFj6a6A6hdafnqHKQduGvakez%2BYrkRD61l43Vvqp8OwMsbeJ3oCSfO1dbJpwUVzsEluAIzgh7I6WgSpmeEBpQw1VvmpAGir&X-Amz-Signature=34d29bd5ec2ab24c520bf72d5ff1d0e27488382cf41f3ffa8a49e5c5133db096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
