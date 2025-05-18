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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRVWN57%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCATSA6pSSya83k0FuQ2AqeWpDiXsfBOQGcZEgN7gRRfgIhAMvKJSMT7EHpWGZ8DLeO1l4ZFsb0KimlW3fYcsNfolJvKv8DCHAQABoMNjM3NDIzMTgzODA1Igw3i9swwJp2QEJsaT0q3AO%2BKi4RJuVijlavi0y5%2FC%2BdtPkclZnOby7%2FW3IrJGWXk1Rc%2BFz44Q013zSs1tMXY6WxAeEfvshUml%2Bfyx2CaHUl34rhPiTvXLlE3L%2BI7B8fj5wdXVwTGBYDXw21%2F%2Bg5y1ytGo4WJxM8rpwuGSXKSAJaaUnW2EZUpbOgnpOeP2xp6ZDGxocCh9wkYAdQnvmlrz6sm7d4g4oKebfDk8J2vwCtkX%2FVEbSIgIGCNOz1dtpnV6LZ%2F9onQYU5THBkV16NQtyTvykjqdoT2C2H1VUn6j6bVyr6nJuxb1pT2z%2BTv33OHu3ptJTaETBOeEM5QdcopgltUHzAw5aYSAS4c0xouT8d8TqBq1B6eJl7dQwTRGMHTJ1ecn5bfTH74ImdAJZKdG6LugNFt9GnoTdi066vmqUyRYXgS5rRqSZmDo64lL3b6%2Fig%2FxOCG0APVy7xUQ7Vlci7H%2BD7J%2BEUVSold3nPPWtxOltPgRe2KvtC4t%2BcX5tzd08xwcVFo7OTMJ54ympdztXEsxo6Lw6PSx28Yyhhu%2Fn%2FeGApwoC2yejjLr3Syb2hBUWAc4eYGviUiPu3dEBmx3XmQomSaBUQqTbtYMvJdQ35YSogrhLwt97F2zXvDpbV9CQsITltkUQTP%2F3NhTCS%2B6XBBjqkAXl4udF6F2KIk2uvlqfcRzkCcnKIZc3osO%2Btw0Ss4sNJdcSYxqgoDBGBA5k6Nu4IGquIllvvO2muCJXow9S3LM6BhUM6qH4qMeo22qKLVs1anUDaqVctrfI%2FgFLKXeM1ujSy0lnlKo5LpTgckT9Q7ghkE5V7rd2cz662qmJvyk%2FMGmTTBZnf12YKYyuUiij9HDadBi2O4YY4%2B%2FXuf3C2O5%2BGB4Y6&X-Amz-Signature=0bf21f2a72cbfa7efb41d57138f01bacc17b089a31ea5e5ebc5c98378bf5faad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437FMNCZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuQwS9doeuAA3Dd7I3vQeCg%2FP3H7ZGxdvQt%2FCpTt8jAAiBkbWv1L2VjDb6aSBG8tuRkFkJjzaqV4f89IEFblbYqqir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMok60kuanFWT4MdbmKtwDB6ATqx6wZmH%2BYzDpoUQD%2B31z2ag5xtdjUYPJNb8FwpVcayf5JFXIITwExdOaOLYoCE073GmyZqMteyMujzH2yz%2Fs8gHGGRLknCryzcwpujbNrEP6NYeHZMp1FB%2BTKz8FF0sMWHY2tldR%2B5NFXcWnhA4oKlzZ390epgKglShB11r6IxoQ2Y2WOL%2Byri%2BNqe1W1MjPWmjAlLGxf9dysXRigmwvU93rVx9ZXOSE%2BWvQ4n3MMaoyXLWEcxAfqa8n3rmMXKk8fSyEeDP7y%2B631Gb5%2FkqWtilMAhaNm71qqx7IOmLhUf1TvXnkT%2BKCGfs%2B7lcgadIdu62ZKqAUVGiGkMVAGNcJRO5pHvHbZDAKfqNLfC87GJ97sQdenb7mTUaGwxfbt0ZH%2BiLQfeADwKLKnB3dESW0991NgXmQSN6eys1%2FYldSaXDGwHZ%2Fyb8X3u5jo2wDLJEiPIlDHAYI0vcguUvq5gvIFtIRP03yuIsdQa3SmbE5JjxMwv6wVkoALvq%2BJYumrMuy2pF48Lx%2FLYpL1sqq9iqStCZF4uI6%2BsyCSRCqkdR%2F5XOQHm8G7HAwxJYwbZDiZeDYd9mSpey%2FOguZjUXOWj7r8j7K8%2B9l1dt74o7Edf47Im96y1jhWaC0BRkw96emwQY6pgHKLjSbIlZtnUpB3I49Nx80PoYuTUkAUiuM9K06BbQg0RjE0AxXf3uvCsQweBHqaEOaQK08rIEQGJBCAcKotF7DXQclvoE2oxrbJxKUD4M2hqrfrn8ylSEj082YfyadMmZiwiJLkCMSzXh395Z16GWpV71mo7alx6%2F%2BaYtzrO5HXLpGhVkiMoaPWTsse1vpwiDUqyBLL41ips6QpoEmSwUZTgbZQEn3&X-Amz-Signature=199347eb6b26756a0bac0380d5b495baa395b881b91cdffcacdbd1c9791aa973&X-Amz-SignedHeaders=host&x-id=GetObject)

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
