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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRTUP4V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF9aijV98XffRfTxvOvBViDeYzcaz1vOHItF9%2BTVfcmnAiEAm3XOmJIt5Ns4eHccH0RDYQL6q8QnPbHbwMFSSLm3e5QqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP5fVioc9IQ%2Fonl0CrcAx6QdBecp3A8sjDY9rAmDWyrCvDA%2Fg3uVCBCIxJoZdyx1JsgjXPJRlGlHarciWKrsrut2lgiFovd%2B4h8vhIQPZ46DfDLVaKqanhLYGFwppGH%2FenRSNMoN9ngB8DUp9yUiTi1k%2B8w1LrQbZvQarZxCeyD1PyOW%2B4teuIjOU2g8z4IitfDAUU79si0O3EAj%2FBdO8%2BM7v3lQm%2BEbZ0seoD88ohAQRKJ%2BIPviQZPmKF3N3KdFtMD7KiJ8ndVXMEVLxNE1nv5upDx1%2BGhFjKOTJL2JyymXsq2R5tgS4YAP2nxnq99x%2FBkK0BRTbatlJDyJ8xVWd3oSPTIkrA%2FrNvPoH%2FdjmZLTCdTSG8uhA65sBnL9Gk8p%2Bgm7FWTRjiuT8Z4QGxDWZdFHtu8jXw8uOpY2LBVP6sou1LsdctcBRB30BzbnklQiIh1WmX8H3LrTl1rrz31n21DmLtpk65jj29qnLuUuUTqqdcJnRYsCeSuctj40MXfPs2VGuH1a8IwwNolcNqjHdxnGtC8Sxcg6iKj9xm%2BtllifL0djU%2FZsPhOUC5G3Fl7Wg7jaQeFcTgPsBE8I775iim5Jiq5tbfR0sRXY4a27r1s6Bqkp2AEMwT7jGnKrW4%2FayuPn%2FBB%2Byh8aDz6MPe7p78GOqUBBGSP%2FL52S65%2BNUWqPJTiKh9RBZWxUA2gi2gt7Nsc%2Fpxw7FvqUrDtcDq9IoCGgfEWROS4r1XwXHEtl1GuB8seyOJObw4Onnsfl0kydtAmHs5ebB8%2B8HmQgp3BJWfCmBCSI1lMHj78fyGHNfASwF%2BP1dGYGhHO927Vtjs4%2BCyguJAGoy%2BAaAMZk4fYN5YBiHr7rpLUbstAJm9BQ8JG9f2nT6qfj5qx&X-Amz-Signature=604bd417035a87cfbb7c122edc201e6eaa5321275fc9af946d14e51284728b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VD7I3UW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICx8ilROSRPpzCUQe7h5yfayWO35ENoy5NQrKVueH8T5AiA1u4z8lYcg9YHLiH3zSA%2B4uv9h5Yz0XtfcQD91%2BN01zyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSai%2BMlaMsddu7xDKtwDh%2FbRLN6%2FwBhQ9SodXhWPzmFfgjEJhdGWfAqivXzKHwq3ES%2F1kkSFnR5th1JPp5%2BSfsXyrBJTnM0tRCEpfY%2BgaT2agnGCSRo%2Bs96BzYNbB1OXyPJqLakHmvHEnTgMVvHnZ%2BfgiHq6wVV3iMea8Kts2%2FnDqtN0hawbW3lXwhsluvqa3ud7Yzzx%2FF9t%2F8bI4mOAM%2FNlhJSpntaLi%2FNxYxPOFLhojtKDsyPsx5G8GrSw%2FlPD1hQzHyX4Tj7pj3%2BMZ0UCft2YW0kEE7jFfWQg2mSWd%2B8Hzqr59Y1EirxaLlrWym77yUztPAju%2FYgSvCoRydpQiDtAO10%2Fbm3N0r%2FZvslmVDoCBQmJeTKktK%2BHgLCMz2iW1GdFktCi8vMmI7QLCwoRduh%2FILFKbUWAToptEv8E3L7Qj4xYFBtKyys8VwF0PcvcyBfOjILGfLGUR72Grg%2FT52KFCam9bmMMDd%2FSBu1FPcU5W2WMtyIj6Jjy1huGzo%2B5NVuv168tyvBiiZeYf0cXwM6eLnvmsKe4Amc230NlkGzVXqX5fQVdBbgC612H%2BLGtmsFG%2BBEmM19Ykrg563RMni9oIiJhVwGJwio5h3hLY3SuY8UsUH3IVh%2B8RAuUBBhlTWNKuzs4Qw0mLNYwpLunvwY6pgHwKr4i7pwwsDjvLWjLtBOJfFR780bAnauJi4CRktZHXG2e3oGraCQNq0fNQ4zgYVrrCqZyjNbf%2FmDcUe8iVfNs6xiPtu64aX5n7yHE7bUpPmrjVKFYGva3Tq%2BeoXgPywmdBfGoo7cb1Lubk0ZHy0NCw1wWrYZ55PCpKgKr78r5g9ApnzyghiFCPbl7ig0Fwp%2B%2FiOFgDCUO8shGenTg20noLc%2FParDH&X-Amz-Signature=185640ba1e9662632ab48df9427aa073638acefe4c92c700adc8aefaea46315e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
