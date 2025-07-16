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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEU2MLC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDV0Me38wtYZd5X6cvDbZCck5WfRs%2F%2FaMuAzvAAqeA3cwIgXCrlJ125caIAFdJw9xPyS%2FkuOFnK0YJhFXN%2Bx0FPLA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAjNTCLcsVh3DTtLqSrcAyX7NRyUS2cKAzw2P1n%2F2T6Y54O3hbT0OaJ2KI%2BF9ns60U0Go9mjkw2Mq%2FaSyEGafLM3RySSiQyBxpCdxOHi433cwMWpvpxzxJ5fZ4g2%2BxX3LABOym9qRbWvKLFE6QnZ4iYnuYHR4FQ6rgu0hY%2Bql3JXwrtEjCmVwjtKcgRC9%2B7Qs%2F3016bvHZS8oeVioFMVe%2BKUn7lWZU3jqDaV0FeFtbOopONbpn0YAnP25lkjhCeYO6DmQWnAbBcRGZAsz0lE3kvP%2BOTpBJwuCMfdfuXXmg%2BPlE2yVLJ3zzVefdcoWSDdgs%2Fb6mMpZqs1WqlYBUQwOikjIOZ16yjY4T%2F1BNGQgIaxmG9kQ2zujOsC8XVWeD2Aepf9Odclfn192P8K4v4xQSMMYNbd%2Bi66EKfTwLf63B4Ip8hDzfIGQcmU37PeaE%2B7GjL8UK4%2FZCaN%2B8SvFgMhxQ3pqZ4yTVP%2BEcqMSVhM%2BX%2BUC5Dh9R38tDf8k%2F2zHwgPjfNDea3H2YcbZLznTuIF6U9VP4v2TnqhiDlbIt0%2B2e54skwCu0JNrrrnJRlf%2BzedLK%2B1%2F%2FmNdTzgaW3RAlQ1A3jD4OpL3MykDS7lrJnUsfK3oGs4%2F7iDN2CYuO%2BAP12WoIz235MPZLeDeXc1MIXh38MGOqUBd1KwVGzKZXDOAu9THqGGfYO4bjPRy9A6mPNbu3fEj3zWeqeTH77xaSuOnns5h2lEmxfA0deUgq0kf96Irs%2BWljU3aLdcv9zSmdNqtOIAUfYyW%2FTGFhTMLHd1oAR%2B1zBR0u%2BExcCEnz%2Bop19xOKcCzf%2FlpsfIT5GuGxClOZ%2FzWN1WM7bndLp0JnYjZOkMixut4c%2Fowtn03Elnqewn5tZVVd4erjAM&X-Amz-Signature=8a6352964eec9f88e673b961b62b7f3fc24312b464c4eba43b92fc201adc2090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSF22C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC6e%2F3rQzTkHd3677HhTM8qAMk7lc6hSlF5liPCHRyIJgIhALdimrZuS3nOKFeGNZE2XTsf1yD4f34JuqrDS6sTaiYrKv8DCGQQABoMNjM3NDIzMTgzODA1Igz2Mb6GW%2FgqXPMZcg0q3ANIoOx3Np%2BWkJAKh9M4LEWLJzAXFTjCewAy%2FRMUYVca7Slqmd61D%2FYzz6b2AkR1WooOpJJ4ofrvapfwWv%2B1yTy%2FueH9EP9ln57VfsR6%2Buhbe8yQ3Su3BrPZpKHTTY1tFV%2FRbmUgo6caKiF0YU6RSfLvBjGDBkOYF0zWqytDb4rjfn5m1wD97UwIC8IU6sP1LoG7yFOkCoKWxKUTSY8k2QDk9goc9i5ql7I7OSfGfL330qBwmkXyDK9JQsoU4SnIenLByXSrh4gs2Rl6vkNMH%2BXvWLUtfUFdAXYc0LPLUzX%2BW2x7RUkDWSEv2he4y12y09prfif42p6KOqdLTSTEmIJMqYnknw8zJcELtCpL0Aut6Ejj8FcCgdUGeHG80lKm%2FNawxUw6iZHw7YUs%2BNT0vezBizpsCUWC7uin4%2BanCvJ0tzrA2deNhIR%2B%2BJYQ8LMsCsZVGsOf%2BMhdWXvqI3aAm9WeNlvoDkX54B6EUAR8gy4FsgjuDg9KRsjASJoIkfr8Z372aIYmFP02HkAJy1zyufvru3gUhGcBQWVMewycOPtYhOU5ijLDgmSmv7VhoqAIbsDF6gruROHG78w3fSqiIvlvRBLYXfaz5UzJMNFM175hvlPVwNH%2Bj4UvW8owMjDs4N%2FDBjqkAWP3LPJI0skR2p%2B3%2FweoselDon%2BmapTLvd3VPo3m%2F2l4Hj0PjelRCk5gCULLITN0YlOVxKwh%2FkKCU3ubQKMnl0%2FpLSASOPl%2FSfyPRa9rcoJM8917Fg8X0f0P%2B%2BH4QWf3zdNHZtrnRs3Rg4FuvZZtb98B96KtPqZc5o43WEP4m18p5Zb5K4Qv22d0ISs4bu%2Fa144Hc%2BKRriUE%2BZWO0EXTPxyKXmsw&X-Amz-Signature=856ee8566f199e65a95be96412a778e63a74d2d96ae9933654adcbe31440a866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
