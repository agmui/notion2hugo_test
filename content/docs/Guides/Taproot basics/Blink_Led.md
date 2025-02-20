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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWE25A7X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANiNsiKgDp%2BV4%2B1o0FSN9dBPV7kpM2iBGSF1K3gWZeBAiA6LvRKbyY9N4p8l%2FFXb%2FsMtw47%2BCjc2OKln%2BkHDQYtiiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3kYBR7hGPXXRR4FDKtwDZV%2F7WiM%2FvUK4GA2PGK2TRFKprCsrjQsktqWumXaR1wRSG8xjHP1oDaY48udWb5w4cVArFOVjD6gPs%2FfbAYAd44EQWp8eGlLh5IsMTFICTK4MBixfuZlvKd38YHRZ4qReq%2FpzfloXeR8Ti%2BeTkhXk5MKs1iWQ0T1Lx91Cqvz1ZZaFrj3E6ojmvUnI2%2F%2FKNyzU6M%2BaHjrfX56frhBNnGUmCTAannB14UH%2BWdmSzXL8UdwpyKDIw9sEJyCo%2BqZ8Py2SRVx2%2BiOuwqOY%2Bcj7%2FF0H74vSGUVHHt2x4RjemgowRDlYxgUNhm92uZC75vMhZW1ueRUa3by01gx4ljEaHhEBYhwYftl%2F9TiHLjHqMUuEIpMnMGPjoMjt8m23CXxUxhX%2BoVXdIaWnp29A16CdS3Uc6RK%2B5fucZWC39p0HtJ6m68pirFphz267GfKYvLcfPD%2BgRJxahbtPL5yGZqDGujwCpaorj2eWa5UAuMCwY7SxXDc%2FaqWXLPgEkgzIwnPzw0vpBr3w9rF84JdWHKvn35WTTVeUv0PO6xoi8qksJLyCr6QSuKERQsXpTW0SNOAXqulR8yAw7CGYNdbsoheIjVjyLMA9dblnsfxce6YyJsNvTREyeew13smGPXOTncgwuefZvQY6pgH7p5ZU0Aal6%2FN6opMCouocj2c7Jc8Lg9JuJqDoyxjWbUzvNXN2lXYZHRqDsNjRQvaCEndqL1l%2BlUqi4h40dHWnvflkckV6OYv%2BdNUp4hp54Kxr%2FU2XhDrhQAhl4PTR45APDDUjsLiyRBvyeFhcj4rPeAiqecsTkkTF%2Bc9bEKEgALxCNn3%2BpKFN90%2BfA8oM73JlApz%2BY9FnnaqRPVQC6FywEZasX67g&X-Amz-Signature=56afcbc3d5a56ce1e76f64a4e7baaa2edfc263660a3ae5fa37c00e603ad32412&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YK3Y7EU%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEM4ho796OwVRBCCgCt3CJhlAJN2ZBd7v%2FxbMI7id%2BKAiEAnp2sdwQVYYTVBWFzlu4%2BoJmDI2wSfWsYRT2G3whhhfAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW2LOVLF3%2FYO9OQrircAzRMT2%2F89UP8x2VGWw7RqyZbityCOAWETRhNKKqxdLiFgEV%2BWiOBY5CNSuJ38olk98JEHOE3FKc45erSBSPXpNAb0FlxHJ437ucDNwcdEoLEMFbFWn2WMj0%2Fvrbx5sv4u2DvrRjqwcWOOfnZNbLtuj31UugwFm%2FasHIkVS4b%2FTpe7IM%2B6%2FSt8RckmMFjSDv4OCJk47yRo244bn93x1YdDZFXq4rvmYodX8R%2BuyVO1GniZXj1LzKQ8JSKgqoNL9O1GrRUi%2FD7PMMmxpx%2BTXtaO7E%2Bric69K1JfC9oaQQPdZv2adX%2BiT5Iohvhmz5o5jToQO3%2BCk6lmMcasla1hgADdGDxzjF6r4Ekk3mLAI%2F5WDRs6%2BIPdYd6e83xd1fgCbPkdY6bCWseGDZjOYciJk%2FTDFQ2lhAQWZhVV%2FmC%2FlnNGWa9YOvImTwMSmPF1EKqRwVJTpAS%2F57BtcPXKe40dDrV13ZdeS9QukBbVvw%2BRdblEGYrTmcK689nR%2FDMUFRPMHksROi5smL6%2FawYsabRVGq8BYpE%2BtOkXJOcJttrW8OHXVO9N8MybAWiIw57mtmKLLbOF0eZIxDHkJbRApudmG16ykJkRCsSN9VCzTCjlx%2FhLUQ5OahElpe6JjKiQF5bMPrn2b0GOqUBcHxPX52%2BoRefRGIaZInw4yJ7DQdy2EcaOFuUr%2FU4b7ia84mDB274fr3XwTgOSP8%2Fnwg41ibRvgun7nvgtzafvGXaXiAgfax3g372zFml%2FC08dQmAeDV5tO3Kpw2IdKcSkGVHiAvxEJza%2FWNumfg9u2mrSLQNexLX7%2F3R%2F8%2BTtf8bk4FUHvdkTA7xQHuEKlWMALvT2kKIMvV4lRVoyTQBy9B%2BAFJk&X-Amz-Signature=086a1f10a57dfac8a5becb9fd83e48c2c1db4e75ac30c5f784e977924d0f3049&X-Amz-SignedHeaders=host&x-id=GetObject)

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
