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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGM2KTDE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDU1NhQc8Xn7%2BJ84%2FbfQVu%2FlOYdBdgvLFxeq5fTJAI6QIhAPduUiS5S0Bfzhmc3Gp3bYAwWG%2FRUv4sxU3FAAFOuMA0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkduoLxZHV83RG1Wwq3APRmBqSrSKz%2BH09gDS59yLlrwA5xPO52gV93BDZXSxHzblF8wQDwGwm%2FjPpiqSqla4%2FWpt3miT5PaKWh11H9UHK8uum9Yb5a9NzwPVqmWXHYEyh%2FjYplf%2Fp3qDnQrPr48Tp%2BVc92d5107AOnOdxj66ygiSAvlcTdam7imL%2BRgCrfbFCNbyTS0DyKwXTXR2RtPUV2%2FgGN5vNcqoKxNTiv%2BZsMpo8KqASAzPsMIWE%2FlHBNmS5Le2Ko060lSKVXvA1Us%2BCCr7UAEWcVStZZEycTtS%2B20fruneIKpepwhkzo7M4jo5BucyvKT2JEaB3YwFHJR%2F8wijtkTLK5h8qVhuqK9CwMiwQKL8i8Z9CZ5Vpjb7fZexTreIn3zw480V6uVCfLX7t7a%2FNyr7tQKFydYs3uFnpTtR4%2F5RYtWGAlM4S84JohuIj7PmJRuiWafb9rtPu%2FmSba%2FdZApeE3glSpUTEFQiCPciTa%2FqwhwL50gn8ULBMikEBjgy8xZ2Ykvj%2Fo1lJ274w17TAjqWPV%2FHRvKJA9EEb6%2Fw4fLwUwZXrYgGJYrSF9IHzb8eX3iGS5x9J35Jjff7chvNfGXW2QFcF%2FIVyo5Km%2FY1IL8l7hwIryZW1bMcJ0uzAV6QnsAxQiXodATDnyoG%2FBjqkAW3MRMhoXTH9oGcOYlSvdX0CEPhZqP3ZHsK9eDLV9g%2BpIfx9nIpjgU6DJ%2FxZiz0PEhfYHPT%2BE8hSywmJQpSwwKkJWbbevyXUd%2FuHhq2La%2FRAxFAZFjIm6Wt%2F8U4M0Pdjcl6F6ueJq6tfxSVT0CWBbl03dmo5xrs2kW9fGDFNrfI5LiuotDbOtlJ%2FQPMoDQDqY8aUK%2FfK6PZ0hpZsoMtcLJ3JL7zm&X-Amz-Signature=80e1492320da3c9da506d0f1d66d235c5697c037abd21f9bd5c23fc62e4cd0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6AHMFP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfXyeX2YBM4YrDBBqNeqrv8Bz8IZrJo0UxsilsKQFi7AiEA%2Bv1xUDt02PChxVYJFkuE204crH5uowGKwbycORgxc44qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkoN0vj3uDlATAPvSrcA7JticnopaSuB12ILFkP3KDvMcyrJMBokkLs0C4kAHdltOL5WqORmc%2BrbvMl10gSSAceP%2FQAdKE0wNPIUPusNXPPgwOSLXLJ7v9yYLi12GKfO0TCI2u7ZgsCo0VlUUOwo8OdxE9oTeWEDJFpLBgjuaYXx16BsDavqq6gTfQJqUt1CC%2BqlbBuurAMn8t6GY6b55ENahtNvP2RzXRw89whChZ7dZBKqjrD1oTvQfVmP4T4v%2BrVsQynIyvFV8qH%2FWMIu9RbCkEIYoWmynWX1qMCIuPlhYtPWbNnLWXsloq8mNmDli5AYIP96C7%2FkvZo%2BebjHOFJpDNlbrTsbuMhSYLXZbABdhZnAGecK9%2BFyWe7Ov2gjqYPLnl2PCsjnHkuxfyhXrZ1m11gpAGGtGP%2FYKixYR4S82y5wIxAgitmX1yWOJzTMZ%2BdTatJCjvMptT3Uv%2FSywM%2FY25jH%2BA5AcfPaJpOAQekMCxsGyt6Ohmz24%2BUbPEp6DJVcx6AYcVUBtofvd0jrivgzEGw8D3Q8%2BN%2Bc1Qsf13qn74PVUBC5s0gX%2Brua5YrJBp4BV2aCr%2BfLlS7h6tEnXkI7DnarpTNUo%2BOa6zjyKc8NPVowqI4DDZQph8%2B3A2wGeaML7ddaJUtmOBpMN%2FKgb8GOqUBdP3oaypYBPaYjlVHwzQA2GPNRrbMBSqSgoosD8Pcceo%2Bgav3U5Th56Qgx3CCl7BUveTwDtgksyEyu7a51CHyoyqrtCMqThqOas2nLJaNfl8viLXjddBnc3GJ9gqZUWYH6lfrSdO71MG19IWifnOs0chvG5l8XmvCNYKtaI%2FyY5i%2FVwFQPX2HDvq%2FFISlRC5oUXaXNRWmPM5Ih30WtfdkZ9BV7sLJ&X-Amz-Signature=e17e92508ac173a096909353f004a5dfdb86bcbde96b1acebf848ae240dba3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
