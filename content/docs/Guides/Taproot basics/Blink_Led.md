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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KNRF6I%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDF2ncyiHwh9HPTBbmZ7db1ATfbrpzna0WsYJMrNQ2HKQIhAMHlaUjMp63jriEDPYqG0mmQdDpCLbKd4NaEDEu%2FFrDXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlu6KiLBEq7XUsIUYq3AN0gAjdY6pfep%2BGKuk%2BluucPTWRCtFnEGqXObol4gIs31flK21GoT62i7eccj4IaR5gqZ3n%2FA5ZbJH3pJEEslfNIgtGevYhtLf0gNrBHaROmycFDUbCLMFIDxr3xTeJiAvRReOvlhLt1zoUckMn5ByuXfZVLD0RHK3PBpC6LOil3gr%2BiCMC0COQ75q44ml7QoEavMrjML91gI8m0aCuUloEG4Z%2Bmzsef6jsN2uzyysj0z7HNrHN2ws81LvSWMsYRz7bAZqaF1unbLvpla3Xje%2F5CtuunAZwVHkHNi%2FZL1IyDuH0iQ6SHITsxrK3F%2FB77jkhdcmLu0yXhTmb92kXGRV2tPXt04bQsM5D%2FrJ%2FWScJkhvptFwEyGYADW%2FvYn8nS7QxE7QTzh8cExqGKgiiDhhvibiCrmGtjb8H%2FdImwg5qcncwFor8brhQ9Cfec7lGkSeJt6zNH1Gw6Wl5EHGQEAk8f5lueHR1brzDPUXoam57grjMACpjn6iyXm9jWZQMBga4%2BHyDQp3hMqoFb0ueZFXV%2B9cKRnnjO9AVOLL0AiPsnXkr%2BiK5fT0C9ZdgjwR0i0QN5HWoMVhE2zeB6rlBpFANIH5wISYPSy0GetHQg4ZjteTpPIDn82AbOamK9jDiuv7ABjqkAXd53mlC%2B5nUTzliaWXhgGtkJVnSq%2Fqxwva8oSCAanGZll%2BrHfs%2BKqAhj3ZvhO9TBDIaJ47HwPxXaQQZ6ntBWL%2B%2FBPnI62OZuq03jQgv6zGIu27klmXspwQDN3A2n4R4FyJhvFvBwDWBTMiF2S6ghqR8UIA62UaitbVtu%2Bl0xORUjUjHcdxXOYZ%2BOf83mxvhmAB0CmyISZ1lIT%2FL9rlmtbF8bzfv&X-Amz-Signature=eb11eb334ba01b6a9f11ffc2bee70996d3dcdd020366451b9a9b7e121139a50a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5B6PWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCntadplEA3NzbFjrpca9nhZ9vt%2F5TOm5JIE1mZb%2FjSgAIgQ2Edb%2BmbRipcTHOckWQ0KLjEilRTawWX4znTdJhK4u0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9upeJHch1L4XX4eSrcA%2Fh2W7%2FHpgNN%2FRLF4JW9mRMCotCdA8oDslqEE5btdMDBxXTj52cQ8pIkqlEvzpsKA%2FKLu7FjO8U9ONuN%2BK6sgQghn6tuBDj71vuQ1chlSB1UO1miwuLkOoh6buIiaACBQfs65WIcy8nRSml6T0GZoddLTuQFdUKIctNclI6f7mxmUkuD44RJQTwzvPzZBSFaC1ytIjQLZzt9dHUBY60rLEqmdratKO1F1CC6cywB93%2FoYg3Nc77pdVnv1W1ljRl7IVoA4eEGgauERC3ZEUI%2BilE0LEiXSgiJO%2Fhyw1mSTTeVKvu0dWe%2BEiwPRBO2VBsBC%2FJZYKPEkSs4gGI9sztTjoe90UPI7mGBoM1IhdmqUe9AE%2FeaiOrPTk8cRo7sZgt8ZZYhayXENwNdswEM7INYeJD9pfdf8STmqNvMoCOtg%2BXHbFtmtQ5Gp%2BagUE%2B0lsTGRevrgUlkQT8NslQ02hjGqPfmXffIqZCWJxAY9v7UyB%2BJVjVkQReKXRft%2BmWRRP%2BzZIFhgGxfGgXci%2FCt5MD5faMn703sfQNHp8p4jtwxAKHd5cphr3Jp10wqE%2BrcDZbfLf%2Fx8BZhvaLxnkqf4u3Q1k0GJXK0orq1pPskL0WjcYBpr8zRlSoBGTJoGucPMPa6%2FsAGOqUBBNLolRXb%2BQ%2FkpcmBoZzba3nOIKG%2F4rGYfnjeeaVRXp8SwPn8F27IGi71%2BNlNBJ4uIbarDHfCzw%2BA7wVAPqsm3B23sHuVD2ijUm%2Bx3lo2pfSC9s8Oc9F3lid1NEok6xmnDFHVhZhTmY8makX2QgpiGcFfV%2FbMx1qpyU5kpLilYoOJ%2BGWSJJPI1n5D%2FcQwzvY51AwIxDz%2F93dBoMtw9aq%2F4A0I%2FrNg&X-Amz-Signature=006c8255247021f642d06fc0f4515cf21fd8c579db57779b544d045a7a156bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
