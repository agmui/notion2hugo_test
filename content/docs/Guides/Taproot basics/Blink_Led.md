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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XHEERE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBz5U1VpzE3rVtvkAMfQKnPygS52is%2B%2BVGT0HBuRzMUIAiBEJn0ix6Q4DPIPGIpbtS2%2ByLwHYyGpIoQ2LVGqA9bYpSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8JHvkD%2BQHPM2xhEKtwDhq1%2B2yntugpdj%2FdZH075CWmyozB48Z7mIHCiFmV2Y%2FZFa2y53sKNUueGqakcz40UhlTnfwkD21Jaqmn1uYHXm7IGtzwWttpyRoOCcxTv%2BpH0oBjl%2BmMRNYWGw5WaCScrwi7XmE64EMW6OdBHWyc%2F8nIvUlId65CtOkyi4QWA4Yjimmr8e84gVPzECg8mr8OQxBHVGOwEj299JU7xRLNE9NcjHDAm5%2Fe4lSRPvgVzRq%2FyEIXdFgu7cyjgJo7WuN10eOgRoVk031xgTDQO2YhcWLsLr%2Flp2dW3TqrSWj7grFzct8NE6WPn%2BDeuDxXEdAtL%2FL6iB8gmXQCnBD75%2FPNiqe2OuoRsL5%2Fo545XxxNoJ9bEKn8Lwg%2FuKi%2B79qeZoysN1MOxbaq2CvSq%2FnY0CdIS9yk58rML4q9rk%2BZ4TZO%2FdRioNsCALGYIY5fo0jCEJ1gS8HKl6NV4qxCbHuLAduRLvFXYyI9iyQVUUaK1MY2Q2ZhCzoZemyQApsBLJtInX%2B9AVB11XSOtYKrqF1Gk3dIlRwasquL618Capq9rlD26bp7hcAjnz9nWW9XZWDhkFXqRfQG8vRHWtNaHcnM9BW1y8YaG4byx9jIwjbT4c6q9iJ4XFbWD9n5ugo7Wjhcwk4PbwAY6pgGgn3o2h8nS5zKTYzNHO6SeO2WZv2VxdT3rPnfcN%2FlOWcmfWraQBHSqsgURBYrKGmM5D3xjYmkOsoSUECO%2F%2Fm1bhRzVYo%2BC50imxXcL8jCzxGujuHheVlWI0WonwWF9N7YsGMHs%2FctNYSCiEsTVKlTrczWTVKrRQCAYWXAKy1YKO3ReBjVa4x%2FnbXjCbEmIXAy8AmKpjN72WBktSogijEtMx5xt8440&X-Amz-Signature=c49498e83a3404580dcf1cee04cdb622db31db7edb04701950a5da4ac084576a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQK775Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGTkW3eMJTlfVCaNjdocO5nJ8DT6eg4OdM6oZgLoRux2AiBbaPHIXxP6YciMcDoNNFHrcyJkQ6VES4cYwtnPe9CPdSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BM6HHnkIM4cs9PdYKtwD2DjwMisACzFaC6xGzX%2FjZCOC9EVd%2F6CY1WQLFVjx1r%2BggmQjP2Rk3s41YzGFjdY5YfCkumf9y8Uc6h3zpUe58pM%2B%2FrL9mUx1oZLCcVaiq6StD3mt91XjkSIBnsEn0CrfTZWxQ%2F%2Boy4tNkF8lJ1T6xqqF5XEpIEmgwmsRWpEalGWLK0%2BObLT1Qja%2FONhS%2FHkBLjs8VbEmA%2FTJPilcDpVnhNDM834qzN%2Fo0EBVO9HujZwki9NhLV46qiz6nIiaiSTrkuQIXPADXjRPvWiu3SqKopH3L8Lff%2BC4Cs0bdM4BY434g3L%2F6x6frVCsulkPaOdPzG42UJqmyJBJ1CGYHJ7GYBiOkfLuElVwivitesi0zoCRcIi%2B3NO%2FknitHCUoYmhNGne598lOJymnsIWl87ViIACWtnRV8pQXAJ7X31uXUpjzEaxK%2BYEtJIR%2B7SUwCMJpfiDvMLnSIeeO9Ffx%2B8ZJvjbLdZFt18I0ZvXp08YjTfJ%2FJa9bCI57YCgHoAMP3gXgTM6KQpD0Ggr2Zvr2DNXkOyHrQwo%2FMdpBvs6595Goy7U%2FZhoG0ua3TPH9BC%2FXWs3VdORL4fAaVVsapfuie6gfsdP6Fcl8hZcz1W%2BiB6aEFtLgwOdBMcAfpWCd%2BVsw8fDawAY6pgFlGo8YLni0J8Ck9K0ZQi9gGFsWkBSyX5tQu6IKiKaJ54mUbOkzBqmt7VHXxpkjtsrvGaWTAZ1fFYHstPWuS5JvApd5l5iO7f%2FDagDPga3YQ5Ecx1DOFEAZWEwL3TQis%2BF5IDnYK2LI8RKoymMgy7o7y%2Bph13RvpuolU206%2BUN%2FXbHeKi7wGmhYLPNcFgmR9soAJRMyOMisO06Jto5EYFLnyaMj%2BsSV&X-Amz-Signature=5994900dee4262c16b33681037077b81c4bdf7d3d7572e13d7d5cad0c7905d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
