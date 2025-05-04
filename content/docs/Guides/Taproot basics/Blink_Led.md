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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNU5QATW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBx5%2FLmy1m2p67sBTO2U14k0Jkk9tvBUtO8rJW00anr3AiAjIofPA%2BFZCmJ7NlXtaswoGr5wOKujwbP4CJyBJaaTdiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWaMLQJDM8evWDVybKtwDoeQ8NU5m6SuBdyYLgPJ7M80BbSEh5BMDBbxizMzWcFpxPuEiT6794dGj%2BFurkQPZIsTzvGLTgxrEyF%2Fnw3SYeU92rhYPolD%2BobThbsDh%2BlRoAFCAK40BEpsNnCEI%2BxG%2FJPfxtaJj%2FqTG7G%2BWp5qq0iJTF0QX3m2lRGJxyiIJYp5rta4ab8NLmEdDFJUuoawEN8KY39wW6pT6W6PN4BMaoz5BNi0uotogj7paZZUyedrbGvRsjctWy%2FMJg1Z%2Fkp80bW2VqYWO8J6qqsd%2BAM99qadnfE7eY2yvmrk%2F07Xc%2FwcO1oewYYrn9PFzj3HuNdOrtoilM%2BfZHiMInW7PSYlAcY8inPtSPoQuJ%2Bbkmcg%2BSy1H973zEn7wW2ZSYOwubXnifWwW8dmv%2Fo8OZCAAnhg%2BK7F8MwAXt%2BroBzz8deTsXAKkuxhM%2BUmo4bmn3A933hiqr95G84%2FanTOpCE8PcHrfIp98vdx%2B3XHqDYMUBYBzVR93qP7HqxQwRVHlh1xaJJ12lUgXLEe%2BQdsd%2B%2BqMt2it%2FUnm5CUZ5fc2pmvYMNNz%2FFT%2Bgyv9G0rFfm2WQ6Jq0zBeNq05ExQSQu6bpO%2FAZxggJ8s4xf7TRx9qVaMg5agzk1DrvQVwMiCY61W4PUowlPHawAY6pgFaohEuSXyTRtVg%2BQjf1nw2Y5SukTXjZSSp2eA7P6Ycfu1yQzoRp%2BxAnCr122tKB2Oa48UO3rMTLGrO34HK7mMqM4VknlGe%2BqvvIqXGKbkoOLi6qcLm6jRdMJ1nXlH%2FP5JxsZVUb9uSXccb3yH4IHorto3WVfLwpvyiiR8eiat5V5RYz1Z7xIoGhdmwiyYnT0YIfGdT6%2FQ5rerpLfUFkWoMC6Hoq7JP&X-Amz-Signature=435bf4887c2344d1412a3e73dd9e97f4a16a3d758296be991570b5b175576c71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIODTSUH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCoE9%2FKJX4TEaZz4jf6iJJaABB2489mVsYhsB%2Fr3IbPYgIhAPuJLctzQ3CRBAgOdINEuWdSx%2BAVG%2FctguzksEvVi17hKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2wTk%2BJPgG4cxdEK8q3AOfXSsce0CGLXWxJO125ElHRByz0bbmz8wzEUaFpEFNc1fV%2F17c9j2iNKNvaGvwfrtcUgC5bUtMptvl%2FZAPyba4GyCW60xFX8Jy3yrDLGvzNXn4uh%2B7iYF6YmHDh6%2Bl%2FCEcjd6Pk743oQ%2BS2jp2ImYiC8juW3Eamjsai64282yXwtgAWweVq7Q5b94%2BqPG2U9q5e59IspDxqxWalE8dF1%2F8Fw1K4%2FOeeq4R%2FR0cAfLYqUzMTUi6Yulx%2Fqd8ihgXmCerxHf1SKoPrv1v2sxQHbMsyUO%2F3qMIylYHGmvU1POSzpY%2B4bLOhrvf%2BvzBDH8cGQknAAVxcaBjSv91%2FFst3p%2BaLbOicmMMJg0ELW36kxFky9KdxK74MHvSlAjQzq17%2FszSel7Sv61HJ63siaFt44lO1i9tk5SvxHA9etQRLjKEB7i8PaCISQFatpbm%2FVK4jyQmFzL%2B3%2F9FS76uTRa7G8M9ogrG0lNogEI6DzR%2F0VIkAMS%2BC8SlmOp%2B0fl%2FePsQIAQB%2BsoIBYqbeNVLmHi9gqc6JsIt9byrBsKIuc0sRlj2rKqAya7pv9opecVF7sGJDbIBAzRPZBTN8c8MtoSoPx3THTBI087RxBr1bG2K9x4M9vKFA%2BzHeVi%2FVP95JTDq8NrABjqkAdsYpiGT3jDwieeqz%2BYOyQnzV8GNc%2FHXyZjYY%2Fz%2B98yNX%2B7lk4zhUiIa5KmTTkxy0z76BKM%2F5iVUuwbxpAaj1bOjwhRLsqYnGtGgUk2KybTsX7AW36G3%2FjOy5ZXuL71HakuSMwryylzK5NDOmIPmQ0IpWJBQOctEjB0A6ceE0jp8%2FizMxTTq6fF5iIMt8ktkjCkgkuSduVWpi9Is4NOv1lFDCzKi&X-Amz-Signature=db53eb04c9d54e02836940aff50309241ad1249b55cb30ca3e8893f95ce96427&X-Amz-SignedHeaders=host&x-id=GetObject)

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
