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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKUG3VJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICR2a74Bh3MTYMsTh9AUVLmS%2Fb6JGDeESWJG7vVL%2FT0UAiEA9z75yBuyA7SXK%2B1uXQOgh%2Fg3x2CnDm8P4JQzX5ui%2FsoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGEsLxIYah%2BkumJhircA9xEPBC4N2TmWx4Y%2FXPilg8v3lMw65pz1XokQVrIRpGcZNGdCx1pmyjiuGU11Z%2BVJOoQgklu9lSOQFzYQZ03pK3jWiXo9%2BLrbZmhbJIgwgb66ZizZWmc7PfOR0qFyQ2fprHG0kdX02VKVF7T6MKXnFwFou7qxsSeyXlUbQ8gtwZT1OiL22lM%2F3TIQ5yUWI%2Fj0tTjPFZX800wQuTrVkpdFM38VZLR8OT5ibm%2B3UatXQ0oD6xFeCT1Rc%2BJEqGPsm5XLUXEl9ta528Op%2FBIBn0pLftkBekh1y68ddpM%2FK7N%2F98CiBqTJp436G2MXcFWKB8d1SmsGixKpr7YZgY8cKrZ2AcSZwXDMRKSKiiGu5PcJu3dsfyNddBC1K0dO%2FIWqs4kcV8%2BAAe99DKlXrbydLXziCDgQ%2BcM7yunqD3wTslPS5ycuDCJHng81K6x00Jwf2EqRj8IsOxeGB91tEc5v8BGATNbMN%2BOTNzPwqZtGru4Q7fRsR0nnoyFcNC07BxN%2BU7Jrk7gMxUcKlfdiJfUeBMHLEwVsMca13Qbuc613V7OsAit16AwzXU0miCMIC%2BYdAKBUPkDzBCXXSLrd0GzOjwOKN%2FLIykMdxxGl1IJa7iFl1b4dsuqijnrg9ixIsW2MIGEr78GOqUBiBdaIJ5ZjYkGlc1KqybedqBNLFZ0a3NFRb8M4F2YcmU%2FsE9FQf%2FwBVLAcOob%2Ftsn6i291CS8R8HlcprupPxNqdTBO8PThRPDlEouj7LbHzjIvik7EZM6UhQ8LmCVDpkt9Kul1RNYDv%2FNv2jYCHQMP1%2Fff%2BS3ovpC0nWAsArcEbxGWVCUUIYckz7Tc2CCh5b%2BJGt1AbeqgiBljENOEBw%2B0ZAZKR7S&X-Amz-Signature=dc231d3a7737655edb4baa5dedfc2fc70764bc10669903594e47d48ce2ebbbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIYEOWO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDRguP%2FLbG01nfO8RoUcARv0X9FXngNiRKPKsVEJ52l6gIhAIQov3V6GDnvIvytOMHKxoiFpwpXfMoFOcyUMDLO65UiKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNoVXOlpsGnZjmuIUq3APziTttcRAzE9gulKRbg%2Fhxzj61Bhqj9Qw7gEtKuzPxG3kbpOUmzj%2FY3iTUxQKbwx%2B71dMH%2BZm6RW7C0AyampcqNrGMB7NHOqiXU0B%2B8p%2BQHEpDCoI9VjEI9fHjeAF6I6sOa4ujkIWrQnnDRdsgytgjVWnme6HPaJoROp1tTUrOLqWuDaUUDK3jSrGkGdK%2F5xl4V08aFRsxCkaj4cT3JK1iGTFHCtASdplK%2FW7tsLUkG75JNrl%2FC1lRpDg1C9MBpCydlBLsTZIUZbwgL2BvvTsqI3g02%2BBq0KkLlWRsIre9SpObtmDqjDCHJoBSzmA6L4ZbYP%2F4wnnm2MUGsPta1kFH99UbDcHw2C9TdLIUTxj5uvUCmBpYZt6ZpkzE7Y5EHgiLWIdcPEK9w7dTsBoN2T46QLcmMzX%2FUTyBGFG6WIyZzvMBbiwnG1QqSkJh2lEtq5CEjTJE76V5wnS8G5mKjCQjsekbl3ckwREYKpYfUGA8og3g%2FatXp%2BS3oxlB7q%2FnK7okBhri3g9N1173lgAjLL5Mu%2BJr9zaJ6TnRXZvcNw0rUvNoQyR5DE67SpexrEPMBBaAYAjLM2qXxqXgNS3QGPBC1XaFBtQ11wcWM70M1Ghe4%2BcvwKdVukiUFrtMYDDWg6%2B%2FBjqkAWCFS4jUqEF5%2FY8tKigmiSltVUEwFVTzuvUPPmgjbKSOEpYLWdtUWLuhcA%2FHDFhzS6e0M5huDJuJmprr7jc2KPbeRbViVvo%2BjDREgQLXx3qZ2rWGGG5AaZst0desJsPQGW0%2FOcGaAnednIeST7K7e1TZ96YIPYyDblqfn%2FUh%2FpOhSeazuaoKvkUWOzDrBgGOns3RfBtTtM8Uqjvh3KAPLmlul1z0&X-Amz-Signature=c63ce69548b015cca74cf37348db52b3e0b521a995b6bdef1cf2afe3c8e42fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
