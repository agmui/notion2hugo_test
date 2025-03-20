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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JDO7AXC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCxGa4ABDbomA00IOmBDAE%2FJL29paI195NBpj8YwHkHygIgZNSLjtQxs%2B%2B6lnaKPjeRLmHMOGbPDRxo6hlfywIpQU0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERqst8u0Ls3aDJykSrcA0x1UPHZnwZZh9sSy2n5ofYKz3cRathpEaN4Dc8PvjhcX2MfyJhr9jYo93T8mSPjfY0%2Bwqp7%2Fni6XhD7No%2BgInTe5Rcr3wVDvT6aJPXTeQP5D5HW3uQzCaR4qV6GFXntiOVQVchrivyrN%2FZmY9T0dlJMp5fYcnccr5yqClL24AwFL%2ByWM5gi%2B4hMP3Z%2FcIyxH2a%2F5LPxQb0HunGQGeIgC2WMBAIrbovndqhi0pJNM4Fj%2FIQhpToaeNO4kdRgoBYLyHcEMl4O5B3heOMiXXhCQxsoPQexFXHGSaeHY5E5%2FMc3csof%2FM%2B0PIdR7s5OX5nayKUG4e5FJLC7OOxL7gIOprgJMAUVymwPbBABAHVI8cwrxmOXbmP7lbETbSMtiJxfRlTTQ2FlH%2FwsQ5MyoX81AgYKHsvtxFuZG4GgjEIfcT3D7IzXoGnuNIWf4agTeQI9i96V9FqARZ98dkyU4FapFjlZWZ7ON3gsMrZ6GZ4D3YM4gC8JSyZeWEgZszr%2BE%2B3zUMD0FOGLE2j2v5w9yT52LZgAuafWIlEmEP5TBw281gN5KzwWf6kBLsvekk7mwpUZmWq7ITq5ycWAwr6CwLqMnecQyGeRj9%2FwqHER6FrolGDiPTpPr%2FSIdiIDOVjQMPym7r4GOqUB00TxJxOo5c0EjhURSoeBm1hNwO%2FdgdFi9nPYvGDwuD3uDG9D3U%2BERB%2BYbdclGCC%2BeanqMh4PmPz7GEcNSXRSxhMo8buh%2BUvx8k7wb%2BDPA5RK5ggFYyy1%2F2cNrXj%2FNKcoLy3olqrQVjztPByFVzHR9n2FwPD5MX0ZNBiSyQxH5nR4JVTVryeHynxGNdDzGLuo6wliCj4nWUOrIxjyMBTV%2FGrH7NN7&X-Amz-Signature=df8eccb253cbdda1189449e40a5461058798e68302bdc0c4ba7d1dd2bc09d3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPIPV7I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAhC4yEbT9%2F%2Fz6LM62rzoQFryGxhsX3dcmHjEG2I4fTQIgbaq6T0iQ7Rjuvw8G34yASQJvfjNnkvpYlrhcD2ErP5kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyurX56P9jRtrTXHSrcAzjsv1mYbWnhgS8rWrc0Qx2XeZvbcz0T2KAQ5oJy%2BfuJZMaA6Ew3HokRQWnF393PDVICXGKpSTcQAIcATSU5Sqn7iqUKvU5Sy1VMIr3Fus7bjGWgiqWYDpheCGJ0P%2BFq0Q8brY0fc7%2FNM%2FI5T8MHjmqpHhHPF2BHt5Ecre5RlQFKRh3L%2FA6sSyfgw5Z0a6POuvKbM3HlwXzCLeEmvRC6L8BKwLogrfbhL2cMaIl5b%2B%2Fig4GKHW9rRQRUoqZnE5%2BP5Cys7gXSvEy3jNWGQIyFVEiUTzDEGbbijaAJr0szdiLUvdyS8axX28QlWL5wI%2FsBycCX02Iw8MvalYJ3bDcZjXJ721UGJLrn19GHUtNV7wnq%2BAgGDkxqIE%2FHdhnt%2BsqOHhiFZTR7zaQ8fdWFzLGn8Vp3TlbBzutr0r4%2FVRpfoRPE4fN9sS%2BX79YNRjIYFX5n1J1kqn4AShUUT4KZEB43SOBE8gJh9V5tXGWAug0h2jsRgYZt59DrwG4sHvkX1kmQQMIV6prw5UKi0TywVU6%2BB72EavswrfJ%2FIXvHvWuVGNE%2Bjm7JsLbHSxDdw0rHS%2FOnhagkNh66m%2FEsy6sNQTu2RajqDeolFmpj9yrrcnumv%2BbcgSfPWne82xZY7DewMMum7r4GOqUBJCr8XJrh1Vom%2Bx%2F7fu4CAzVcK74zMFk4WX6T56oa%2BogopodiMuDOCz9rics5tRx6T4uaf7mQIlSGYKf58gy8m%2BxcowTTl%2BBZ5ETlG%2FOf%2BNu7Y8%2BZgcgU5X65jDg%2Be0vBztqYPlsP2w7BQxurh%2BMKysnNUcY%2By9TNUunC4OK5gtVShYR7NVSqUmd0j54%2B15DsXj0%2F0ZTKF1MTVmi24sIzFnfmJaXw&X-Amz-Signature=7a6b8e309a57e6f560a41db1e82ca4a514faa8a928f67b0b0d1a575f6d55e5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
