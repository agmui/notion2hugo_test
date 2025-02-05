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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5ZEFIR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCO7Q%2FYlsVeVemUeMAzJSwPN2U%2FnpHVzgaKbBEqd%2FgbpAIhAJDtZ37P52LTe6RGBln0nmTGJyGrSsv1pd4lH8HfyW2sKv8DCEoQABoMNjM3NDIzMTgzODA1IgxDCI14KaQLCDLHZGMq3AMLG5CLF8O5YOtk%2BtVD8iQiiO4GgO0bIFkL7FsdZJman09xVVcjnKRazNr%2BqacP9yz7J84pY5KA2%2BsRIMdkuvLo8EJWiVw0NWbdmAVHx0y5qvjJHlS5oWCOdqZaJ6G3DQi%2Fy4ipGPRbY53%2Fs1QPZz2t5Mxj9IfRqzOVVb9EJekQ2iTys319ctoXfp0F5i3VGZpXlhSyL%2B6D4YJ3htwZI28GyaLDRPfgSn9M6BhA5OlY66oUDodDluAcxItV%2F9hWS%2FJaRSyXIHw7NLz4oe6WMTgj%2Fz9A2g7f6tf3fOptUqCwHzAfCxnivisYXl%2BelqBC%2FkqFv38%2FwSZVFbKqROEHoC4hQfmb8h546m9ss0iwvTpwu0W1R%2Fewd%2FQaLtq0LxSfeuwYXahEhfShUuL0BPd64l68LYpb4wZJZbOa1XyFeJHM5%2BPYHyxp0oSemTnCFDV1pEy1k2BBqqcwQ0FBwNF01h6V6%2Bwdi90zY6w2iV7ojl9jGa2f3BjdDWnETSpDMaa1tMNRCeE7M4MfPoLA1yu3MQQwO1FO%2B6fr9Zu0di%2FuordykUF4rGTToT17rhxPQAZUAYSQWJLcj5lg57%2FVdw2qIaHGQe%2BlSMWOmt1xoGBHIOOLh%2F2N7hnloSNq8fN2KjDju469BjqkAdRqk%2BN3I2HyQr8KgIWx7janYsTYtExEC%2FaLmqsYlFKjmtMPpTD8bhD2c9EoHelvqY5A0ZXrv9FOUjbWb5Mmm3T56v7WvNrI9Js9xPPHSteMt5UxPDVrnvJCpNklgpDmT%2F2pVeUEIPndZrTsYinmmsUwexjXWDBiLj8uAQz3GtDSL2UqaVX4kn1%2FuVsOlocWCKW28rYjkCs8oVrUqw08GPVjDQFW&X-Amz-Signature=f3368e60cb0859978c8305c62f0f8721609a413d713b2bda2e42530a8d0fc30f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D65WKW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCU%2F2MxQNYDyvxqN76N9f6rA3gxNUCNs6YtodME09P5HgIhAMZrYq085jKc3NQJpWl3WhIfD3Qx%2F5ppAjbjJvrhbvdOKv8DCEoQABoMNjM3NDIzMTgzODA1IgzkRVQwOneelV5gv4sq3ANuLQLf%2Fk13w0Rn%2Fu7yOBol4aQ%2FQ0lbDxC5x8263j9Z6%2FGp0wOK3qnbzvdrBc52WI7Y%2BbI3w%2F412vtnCVRN%2FnYhiPREHZo41wiKEgXNpCMKTz4%2BPRenKuS864TFHKExtAdJ81fJQ6xcHPJG9aB8YSKjw2gqTVeWAtJtc3nLCN9ZuYLxoUwQrZOXLzWbturx8GoHKfEzuPRpwltsAFVVF42bsxBJT8d3HXHiFyqAXuE1Kmm2dYOITdtC150FpFGDG9BojZIvO1NWP%2FyC81p2vUrru7MvDQglepkQ8J6hK9L%2BP1v4LVuLMQqFxByKj6g5ajXzJhTLaIwPiKKtUAHgVXmkFn%2BW2q6ZJ%2FFzaMbWV6BdoIpui%2BOaScnu0okBN3GA%2FCsTaJtXcxn211bkFYjZhKf9zxn4VSIDloMEdzTFXdI478Wt2fPrhI8LsnhVg5kW1GBiV4VT1cT1s2eqtRSIqF1OcK%2BNlaBXf0sMIPxvgDMAYPpzzGbLcEaZvjWXz2M6sQyGEYXDjBxxUas9yYeOW77jXNIp%2FGUGkZIqWo%2BoSLgt%2FKVJGp1skshktrePKRIaIQkatm8QieYShyDuLLzq4A817p%2FEppqsmz7V7cqOD5ZNiBRNlpe3ZAbmdEjSCjDtu469BjqkAaFc3xvcPrIrhpZqnMG7PBvGM%2BtYkionEdhLAwcvrJkVpEyw47kHG86Kwh6s89WVob4RuL8lx0PvnDvjrQzWBqmwQUDFsXHdImL6AiIK6Yl2PImXXqLtteQ%2FUuKW6aZB8liizs%2BgGkt8xrgK1TtrJeNk16beRFQa6EuXrsVVfwkupEvtoIL05F1FURh5yB0NP2g0ChGWpbZK9IBSv5UN0ItO2AD3&X-Amz-Signature=6edb1bedd1f3632633e994ba44d6eaffc831cea4073f95af08c511b75f74f2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
