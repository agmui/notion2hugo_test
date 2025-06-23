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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3RHEEJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDG4vEpuT%2FNXaP0J2MTWgTvdSGPlbq4VBRy%2FMcK8wi8PQIhAO2R0F8OoNw5alEzMO%2BYNUKaTivLrFSglnA5xgOXWFn3KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR04HZYs%2BdQRSG58Yq3AO1hOZ33UuGHHT88XO1nmMIqpDjt0Yhg%2FgIftmmFi%2FhX0%2FEtOrxfQgfDhKJPF5%2F3pZtpMyVysGWaTqg%2BI%2FUxpd3DFTWOtv9U3DzPiraeh86gjtQ9B6PtbmG0%2Bh6g%2Fwe7R2iBncZMoKwN%2FaoF9imbXp9zbNRt2eJ1OMK0xEu6xkLZB%2Bvt2WtqSazdybS47pviml4bXs5xLIfdoEQaLARDQ5EcDv67Zsx4smRd6nkt8dIk%2BHegp53O9bsQjUf12gkLSwZ8FOj%2FFZRkIoooPJYGrEeiAGi1B3YiyEBxrpyYidtVYCq%2FphVUF8q5A7Mv0uCo2ZrhP4cPbtSQDwvSnDjZh%2FADCOK7Z6awSWaEIzhM0s4DZNH2GQ11zDpoDM%2FTGWt98MXnjYcPC4VVhkNR%2BvpatK4aqUdd4an7PCPQ%2Bsiaa9kPvYWagXDIKS3kh4MQp3cvWG%2BIGbUP9v9LqsApzsxh03Qer6jNdNk863Qnt0BqsrB80%2FyEz0pLUr%2BQ9cucjYzd%2BmfLhSOA2FdvJSeoH%2BJ71rG6Z32Dxmbehtvj3BU38ZEXwR8pE3%2B0os6gKH0XqYnD5MrmVkek20qJaz3zTkfNmRxT326FamSyM%2F6yoij9OKUYzJIhP2pnJsgBGIQLjDx0%2BPCBjqkATp3QoBMeUUUKRPXlwbwQCtzcHUX2KXNhqolZrTwIGW8co%2B37nJTcCyfYjRqszumdKRJ%2FbUI%2BLbgiOpp2A56efXI7jHaf%2FlxQeSYbU1cxG80TlARkOTutSmE%2FhO6tf%2FYhm6dggNBnmeK9gAtl5ToaMMQwgSNU%2Fh%2F3oqkUJiHYugi4uSl9cy8nTcuI4tScPi9zrawOAYCjLNpitIbWbA9X8GUffLC&X-Amz-Signature=2bf48628976d26e430e40ceb65333bf62e68844410a112c370be95b2c101d4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKIIBDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCRgJOamfsGnE0SSLE%2BHd4Ty7vYl8pelDF81gzPqO2DsgIgPojpnb2Q30%2FWGpQTR9N%2FBf7eGSF88F4PQbVXojYOxDYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH3QIwL8%2BkiFcNkcnCrcAwTrFE4782GWGjoJPr54uXWrCAd6Ad%2Bzvx7MQ6Lgpf2YLzEJ3F1KiIuy6P8LwSYQOI4J6x80qVFhiqoyT6Web7ubaBl2mBED8dvzYmUPxqTc%2BS4%2Byy7aGvwaC3lGN4h%2Fuu%2BHHrxaKftwbon46GlnwUO1LGkdKOOWlBRiukf6hdXxG4fOfKDrsmeEx%2FUpPGY5RxCfGiTpchm%2F%2B1ucjTftlikX7ANTSqcp7YH7KDARcDzS7TyEpARam%2BUGpsqFwd2OumOOlEp2txjRpHJTcXQrqaZoiXrTcUgMvvDNpkG8qEctxf6%2Fyr6h6tVc%2FX9PvRTmDp6SjngMWEwnTlqJ%2FswmaCsZJVNfK3qidaYN%2BeNykZUaScKGoVU0WXJ5BSOh9e2G%2Fm13hsSm5F7M8le42ON3zfmmejIH%2FZmME7mO1KU8sYGolu%2FGUzUQbbFdFOppUWOTaVAKnXQZEKk3WAMr%2B3Ks7taoH8fp6wQrloqUf8uFQTV%2BrAxD5JL5PTZ5yI%2BY95DdbShksDWdqdh%2B6p3M30tvDiadVxCKXA41245LciUR3%2F7T%2FgFU6aPQRdPNEhPm5453Qm6udm3z2Q3v0eJFRFuWvxM812ZFr9OJIbcNID0yqGfSZ%2FCVqyVXQ94mD4C9MMzW5MIGOqUB6sBy0vc7fslRE%2F7tl%2F%2FJ06EFbyEk0LAZx2nDJdaYZdA%2B%2BYDvs1da%2FnYkf0yh%2FrehQD1ynsRdMBCbna2pqF15Gn79Y3WkmjJkl6pcwdC%2BhAcD2FVizrzJp%2Ft5RTBROW0d12kslK1FKfc09paoDiuV39Drp7CaYI1XYc%2FVV%2FPOFAIPX3roTIBWyXFDb9nkSEtj2Eiyx%2FcNf316LrpLKdu%2F4Ry7khyB&X-Amz-Signature=d969047c3cae47463672f7010bf56e4a121928bfc78770b5bd2ef2f30018d49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
