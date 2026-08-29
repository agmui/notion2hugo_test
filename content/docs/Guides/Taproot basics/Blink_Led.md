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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NOBPFJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjscmEeTGItX4knfK29mnYU%2FsOp82zKtjDBlukaOaWWQIgA9AUowxMAwi2HrqDaw1RFwEgF1s%2BHeR5DNbd0w6Q9%2B0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOR8fhao5nJDaCr73CrcA3FmVxsXgknuFt7r4C7dGfV10Y5ouCavjcGiXWYiU7WKZBjOgEwWiMo6A9CHaPl2GYjTDcHmr75RjUV1F49R2rHZ2bk%2BH7RtWbzrW%2BYB1FiGbhYD%2F7Rn1HNKGB1ZBMoxlyZ9Fe4PyAK1PDvwGvWH64ixbvHvZXkkZSQKcY3ZthiVPefEcJr2%2Bg02za58166mjoSf35y0yEolFbW6wrncz9dpP63lgEgEfTg3GM54Cv5roC2Ae1SmupAQ55S8SwRgMGMtZLjofZMpsCzvY%2FH9LDiVCPxAT%2FGtWVgBV2ofExHCZ2AzkJzvORUl4woDOlTBmQUr%2BiTvmSqfofokHh7bsebelRLcmm8fPB%2FdLfrOO%2Fv0YS2CEXEO5PvKoGZipcFxkpLb3MFZ2EESi4aWwajGsVP5iamIBHk%2FuWUyBd40iXUkmJr%2Fx2asWLkh%2B9LwLDW5jyKO1wdV7sKiJo2YOccXuSHX9BLGp0i6LUainOR27LmUiP0p174QcAZGTrl2LBPx7U6jZoNCVNtyW25Fx0KyNSxA4QeWR8FVWEnr7CL2roFsixCCn4tp9DQTVxeBwYUIUBmI5rzityUEsHMY78ifo9Jyl%2FLJKuHgsREy5K17AKK5caYT%2B6mGfoo3NCSLMNHSydQGOqUB%2FjwmRLT2Bi%2BJGW9yluRrlQJrqsCKKWfGuPk946mGFyYj94r7lwFYtSwD3ZDZNDEkLJkBLa3%2BGfpZjM5nCZFJExTIeD4Iig243w2gLPI%2F0VRvi12I98kNbPwC4wVzs4jUVaTis0cv8ObZnYqm3CW9TWMZNTQodsjJTvg9k1ofESqiAqmP1Q2vUXUmztXi7Vt72tgp8fBNKW61w4LJbpeOptg5dXDd&X-Amz-Signature=213bf9066de7ae084c3618dbb967b376653db07f961a505088f2c296cab35c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEAP6E7%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1CjHvKnWvrtSknVdoma8b%2FVc%2B7PlROK59vXt3bs3IIAiEArVa%2Bc8XlPqmNZvIqz5Yfo6Zmw8AOz0t%2FgVK47HTvi%2Bkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFPVcxEgYEjaL2EEhircAyXSX5ogKyGYPZKTpu%2Fnh03AjISY2fgnhXBYg6z7PxfLGIDz6ab%2FI49wspfhrDYaTh0%2FEk2GxEWXEE6IeYoUrSC2yQNUAblgWhlmBZnlwEQRTRONV%2Fn9AwvATTR16krBGKDlrfOyp%2FIjPQPlF4%2Fck9i6HVnqVCoFAfX8rsVriRiYsBaI9hZeEySKs%2FnH717tI3ORxIpDGGsdbaONQrb3mPyFQPOXmzdNNBuFvF1iYRYW2UP0x3bFrMDK%2Bs1HKyb%2BWv6lL1BbXVNSgk%2BfjY1gSzZdnkE6Z947VMGtMoZS8HSPZtL7JVq0KaPgGj1WBW1%2BJdClmLf2XmABycoT8p4Vjozh08o4CQNwqNIeGEbARWHo%2FcateGDbbQPjoq5GlNkyoEW3NN7Emw65DaYYYuUeH4JtthPnmqD%2F0OHYuAfY8fydF2fGNQZAmRp0SkZikbE1Q4SjTjFM8Xy5iHFq4Ypx8g%2FmjIiKHTD%2BAmuZ%2BoV6kUamKYJL%2FAfT3FpbKmc%2F4l5gGYzncoEMD2%2FeSe6A8KhDG%2FJh7vdTbAbuDBJwudl5He6x57XyaKIvu98kGLUlfdaApKz8rs4SJIHjOYkCty9gAocWX9wfe%2BsOZjysgYRCUy%2BDTdtFlrh8YEPIXZRVMNDPydQGOqUBVl9gCQwtlNItx6s4rPpRBlXDGP8y6ilCKi8JWvaONJp0YEy8RLAGC2DGS%2B6Q2AjGIydBlOGDL5ubFvrW7u5nBh4Y6ZvYMYXhexUNS43%2ByujobhQJfgyXQ2Oztwf%2B46auUz%2FIRyhOjTsXmi5Du59vw%2BGKN5giwMDbWA%2FWXUNVpaR4zncFjGRdYF6sLQoi1RQVzOAIXLciJAK7ohkWeijSQEGGHMhb&X-Amz-Signature=acceac21ac6af2300f414b790ec68db532d89d2fc2afd32c4e855bbc08500b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
