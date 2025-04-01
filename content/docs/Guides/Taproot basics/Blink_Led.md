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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFLFILD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIExM5BOZpG4LF2O9xoW9D8mWxFHK%2BlhRRmQO%2FH38jEEIAiEA5OiSy2y8MWhSR6Tao%2BdpxLB4kpiHC6OOOSUebtPDilEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzfcBzL%2BB2x7KtKbircA%2Fc25Ecz9EkqotPXxHMmLoeUGf%2Bt%2B96HpRaoHMm8ghyVJTyr9FJkUQ%2BUlNqINvcaFSU%2BKrjobOrrVXKcl3OZh4RoMz7iax9911z6d%2B%2FaaU7glNUsCE%2FEwylPxb%2B2FcIDjeqL6USNpJwn6CAk2ejmxIwJj%2FDS4gprvGsxNH8UCLWiHQDVxctAIedIgDLiS8ci8o0XLlMDJEAl3I1hLJ7gxVtTTA4El%2FrdoX0%2Ba22WjfPnfwPp4LW5kBpG9qGWzt4rWc0cxsV9mpnPHeX2NyHbbP7Sacmy%2BdiJWIjDLiCpk9%2FiFaHL%2FTzLPXxgSTjdWM4LksMnEjaXHkrmXCMAfdgLzuDBBTtOF0w3O%2FdbCqQGlX%2BIIT6qcip4JlIMlPkqscepxcYyEFae5lX3wXRo9WcKPygdb7JPSmNewqyNSFGdAQSU3iYPc9%2FZznFIKtcemFwwwITLv2NS42xbwLAT5UF1sqOrndazYkRGpqgUhsFrboAol%2FO9DHRg042DCYfTVpkKLIJl0dHYi3Sl3K4VxlLSqDmMVJSCHHP5DSwBMy4w%2B0AjERk2HB%2BHMPQmQRC%2F2McKeR6cyA%2FURTLIAfVe2S3DT%2F9OJhJd2%2FxyqqwyLikYNSw0D6pYaZR9VCXq65IdMKKWrr8GOqUB5AFhomnk%2BE0ljhG8teX%2FzhDr0du3gmWKIPFDuyXcN2IA4ijwm5IdhvT4OhlvkBreKXDCynrYaBUgir%2Fqx0xpC%2Bq43CoIQz%2FMEeh%2Fza2TKQqWQLjNkbg5IJd0ktvts77tveSkmxNwoqUpxul2Jahaq5688%2Fy3m92Wula2GofdUC%2F1fcDdaI69vE%2FU5yBko6svRejq4JiB2M%2BThCBnOavooiGuVn6s&X-Amz-Signature=0c52718e5029a9d2a20a8067546d9634698f6061297182ae7181d9c7b1e0a0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUP4KPVO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFdiI6VQMZTQ4N7cYsq0OdAwzsZ3E%2FlHuYXzOqLAvq28AiEA8QoS3%2Fe6576FoR4MfyHwU5BO%2BmjzfJgphJDip4ivaE8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSyh%2BY4KhlWTDpR6CrcA%2BhFedozcbwuO%2B%2FRaJYA0ZIcS1Mk2zSAipbh93u%2BJQKdDNN8%2F30q3vhIUWxA8LOZNzaEuAY1tnrog603M7rmItFJfy633tOhutQzdiK6N810TZtU6TaDPUOQyA534SxkHxlTKAQO1BFlY0WkJlOixGRzPWFuVaxgTSt2YjNHfWFCiz64Ivsp1MAxeukfEkSHIYAy8xwl%2BNMm6okqdjd7KupgdsXagxlrOD3aAEIwePZcO3Gxgyw%2F5oUbq1MTpKAlLuT8aTP%2BOXLGrZS59IfceHgSmxygB3kOlp8VSTTuKi2foZSKzZ781N3GqxFFMITd5deq4pqp5CQoGxB2gILm59yOpew2wjY3WeCSVpC3ciGvJvnnXwTkr0%2BwGxJBmC0gFbTNiyIMVElx1s2VtebbWbJZ7MBO9PFz8VXEY0IZng8g%2BkoImOowYWwRQc4B3PDnP3hFSrYIiRNuJnmIhM8Ul0PvnAOzc48f5IUVCg2bWCuQKctrENniiLeftEwckhRmaimLyf4GuUVLguBf2YXtPcSzEqb5Bvxv2kmvtJOb%2BzCDdNqahlkz3cQ7CLpA4VvPoXuKZvmsZfplrV6K314zrFDg%2FGZbc3QU9wEgGPihP%2FN20jnMqQp7Lh3QxRjCMM6Wrr8GOqUBsTJTeOywp7XZn%2BU4DoxoDH9z8761qaxGHNynpCiusuHcUhIkLVJkW0SLDNlI9XVg%2BbdqzbVmhGJDG9pD9lwpmR9iVR0gyzwnJjZVKAC7ZsduNswkYUKBv7ZVwhSTkau4sG%2BY%2BMxZXWeKh2uQIO1cODmi0hLyVYLHPKa8crLu1h3uqGuy1wyWepcT2AYEKIWRjzUid5P8UDYOmJU1ixMqwGSiuRt7&X-Amz-Signature=fab251e75dd4a850d24e758186f2a05b526c4ac47cea1c605af853f07ad31092&X-Amz-SignedHeaders=host&x-id=GetObject)

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
