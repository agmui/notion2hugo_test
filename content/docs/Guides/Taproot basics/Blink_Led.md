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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPS266MI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfSKhF56AuFeJylAjSsYTMrmPH7IkPFC4wvFY5AOQI9AiAux6gP07zVhg3icmD1vdTWSd1l0T50aLkzW0Elmhws8ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMRsBi8HyRsvS1rDFFKtwDmIgdn%2Bfgk82k7JRlD76MPYlT%2FQGzPVTdQVCvtGMxj8wcPKVvCLnqlPxtn7aZO4xKnabU4TpK8KgxUzjKNDyBYASnRt7oufc%2BAXPocLQ8efbytdKgukXqic5pRK45RHent8%2Bqd1Ijt%2BBCoohyLcU3AtmDrouvISebw%2FvrtSuvIdros9VtITq%2B%2Bxc9jzDKS8%2FurzDzIw9pA1d4ZKedjjqbfBQJmV4AMmOEk43Ri%2FLKss4wYfxXHUDviNQUsiXRPisYo5PAfK%2BOVkgxjndI8B6JdFe%2FDyqq7djmyqKF0VVuEQYJGA8WFblKz5HB%2BowT3ePphrXtILngzHLVuN%2FiamGBvgmjetz1qPJP%2FEv7KWpRHWq%2FkE3Bu9m0sKjybISw5crImh2p8uZzGzTRcuwGaAD3AQtDLbQmGNvZB1oaCuvKaYISsxVGr1fe%2Fk6A8Oj%2FEhmWXmN9YUBm2D8jZF6Wzn0ENIfw8r7X8nIdT%2FgXo%2BhaPVrIak9mlby1c2vYVVASKFbEHNm0sKSodLcxKUZoGzyYvuFFAzakUXXesCIFLh%2BQ%2Fw7IcfOjG3KRg0vlnBpUNWU0Zu6DWcjngCe%2BmgRjJcxBfHxqgg7VXruI3%2B53l4dMWEvyFuX7g224Gupc2uswntDtwAY6pgE6B9mAGI%2Fm86NUoZyNudARxx2ZVv19PZgl5FIUmgi21t12x6fhisoqelw%2BO%2BGiHYYHibo11zQ%2BTv%2Fl%2Bc1tm9Hzg9VqS3iBxTOG9j6rcV44TI7B9mJfBnp8BnZhVz5%2F006L6wPThjgfTzYLSANwWIws8MJrGhx%2Flcf%2BVRoGpzURMlxvdJeawI8oSP173AhviQr16Un0CnoCe3PXiYulOzASRnWpJuGI&X-Amz-Signature=6e0b1f4db05a5e00118b38f7732b335e58b282bf26d38f0cde666872e956f4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFV4TJW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqibdRlup%2F%2FuotBDhh3T0XywvvV4ZbbWmhmTmBikEQRgIhAN1OzWEsspr5KgEhTAXvuyn%2B2Xowt20ZP42OkUWCSrCCKv8DCF8QABoMNjM3NDIzMTgzODA1IgxQLs5MfLiDS1Mqf7Iq3APSSems8uAiLCaw80FAnFatJGBVdkfbsiv5uJTWa7khOwlx4gaOxA503bzl8WsYZqijm9%2FJO6MVpALSSFkGHOTF7xU%2BBuhOPqTO%2FYWVICp4zwfi0Vpjy3qftQEQOHA2qgzjoSC2FYm9n0zJAKWxuY%2BNCWr8GLuvrwCQ6pTqX8%2Bo8iHW1CtI2ZliVz1gtwlJfhgVl4XpbWiEGyGjLFcJqVtz027UMUF%2FwmD%2Fo%2FfKbcu54%2B%2BBIzxb99SITR0g8lOmvGrZi7x0TJ2Wb96d7xqvn1gTfW00tCWDRYVQiFnULX0AKLdXtiPlAHW49YAur1%2FHpviLXj6mnV4PwqJ4ai8%2F93daFbgTVJ51t%2F7pLkjGpDhBsrProTu1R6fRfo6TYG1X2Z5Ol3CYfur%2F93ny%2B3Y8DW66cS47cbf2PvAjfwCd5nLED1AwEUs8tfLtsCtQLhFGbOm3%2Fvnnyw3ieDDMKqfuyCmTPbrQz2W33a2No5C76SUrevtqpRcMLSRJkR%2FyO5%2BCiAB2q8nSDesL%2BBRhepRpGqoqKQdxfi%2FzqvNep0mS9YJZJeqtavhGN2gsoWI%2BP7DFsK5yn%2FGLMsvr08Hd0IKnDWXis5UwU2Xpuv2scSEvHWPQgG2Frs1hM%2B5QsignezCO0O3ABjqkAeNQMX4z4u8BctNr15%2BBhFrciKgA6Dll2wCddsNcdyGz%2FelXj2GaMJBRgK4NUd0An9aV1nZ%2FJINPooQhRfOy%2FX61wuV0yDyjn907D7hGhhjTlBHWFWAxV8fJBuiAtv4k%2FX8QACz74DMFuBLRk5Q9hkn1jQ3C7yE3%2B0eh7YoGJINxpEPNRfKZNorRQ2%2FB%2F2WLSQxKPw9MqudJt6iEPlW3RXt4WjNu&X-Amz-Signature=a891edaf75bf39c23998162443886eac4de7d3924e6828f17c22b5d906f43434&X-Amz-SignedHeaders=host&x-id=GetObject)

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
