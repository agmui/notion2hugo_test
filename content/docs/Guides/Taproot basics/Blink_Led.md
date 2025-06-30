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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q76TXNRR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnu4wIAu91BqORyZaql3f%2F7mfgZ9WLjCYWJdssQcqUGAiEAmJ92dBlBT148ztuQ0pG45t4keXBXCebKjzlA%2Bc%2BABkMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOadYMo91qyMZt6yrcA9c9jhEwc5zm6GadRyJvnMfWCGxmpLKqJwR5lu%2B%2FflLcgcuOAwg%2F67lTPUd36e7lM%2Buj0c%2Ft5wh%2FuAW4BI6%2FFykZ22%2F6yLslkHnKbI40cxsci0XTcMzLAIw3cD9grmohfGShQ058iqEmE5jO4rbPeD%2FBDvL26VOLPTde8qNIVCi7Hs5EHh4vkScFwlGaYpTqPr4G6k12xxq4qYCs3v%2F8SGu0q7IHbn19juJMMZu3eqXVa7Fnc6Q%2Fi1Myve2NzG0fDs9K9DU81xo28g3OHXQSHzd7%2FDLYF%2F%2BvKnDNWJkkQ9Vx1Pz%2FJpb9SHz5XsxbK86sde7gp2Rbg0EA2JVcv8HAOmimuxkOmAK4O9Ej16CW4R9YeXyYZ%2FhfkCHZucQIkFVIcB5lyLaP6roWGwg0%2BluOERMuiSJlYchctbYA8pMZd7FTfxlIUDJDeupNwhZY96WEQ75T3S1Ju7NG5h33jBz2dVri4gy3rd703d%2Ftl4e3voH9hRkHByfwOVDZd8wm0JPujQZWocOoZYg37HXxoYPOk4O2i0zWEmzD4IXWARyzA7AKO32pD0XZTiuO9EI8xP10Up3PswiO4Gl7p6H63IQlSEF2J7AI8%2Fd%2FG6bALClbyIibbx0qtItQWpr9L%2FojMKCNisMGOqUBiJr9aXCuQLR0Rp6Xf4tWjhXjoEuYc%2FYJ1AjGeQ6s%2B%2FIvIiyp6c7BXjSOiUzzo0P%2Fy1pW7Ow24PTN6BrFYjA%2BPYnFxgbOBJT9NIYcuDzxGIRixt6aV%2BjahVxy%2BR3lzJD3M9jXYoPNC8IDnQOGG%2FhIWM%2BFx1gsYT92quReQscE5gGsbVOEIQJN%2Bw927LKTFnC405aFxYKfwrl965Wl1XhZLilQHvhS&X-Amz-Signature=b29e87c48436e360f178bb39ab43deb199c473da6b43721580c756ead40a6dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPNQGWU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu1SBF3yZNHayRcf7DZgqnx9B0LGOwf6nJntxnbIC4BwIhAIIZ75ufB%2BlwhyWOTsHPzsfFvKAIHZWTR8PpHLzQD74BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWW8BYiGoyz%2FwIFIgq3AMYS12%2Bq2%2BwDWmybpTegzzqDalBP2Dvg%2F5OHz%2FIeKYJN%2Fb%2F%2Fd0UYqyC8OxSvrOjtzOy3QaUjAg18JDYg3BZwVDmHu5mvzda8AeiKKlXiuABtmd9VZ8iUTkaOehbkvIGocRD0p41IvO22KafxKZnE%2BDBfeYqtiaBEFPuYSiJSNHqTOhmX1R2Q27a9i1MKlyuCjSLOvopr17F4jgEexryLDzF7UmDziMv5dCL0%2FlvGr%2BclNPqh8RePkXj%2FTShAAAPTUTbwrZqjlCokZpgBqD4QuV1%2BchtkUEzq4Yq7YDXtCU9Q7NGrdoRnEWtTdz%2BEHnXb%2FPwpBYihoFuyi1LtbDSywB5MXcNU0p7cUMdqBEQRatCBZwVDsE1SebvT9%2BW0EPFLJ%2FpDTJmTH3OIj4dTYjTfTsSNujJwFuXGsxM8u%2BYc9tuUepUOS9SQrDTh%2BNx1%2BoFT2ACnTM7jfEfJoBj8aiDd%2Bucxb%2B94DbCbqelZMal847P%2FmkatoQ0ul4EKeq1R7PJxavdPEOyTbWZpEODXdSQYjCMcZ55klabIn6CQz1HGpQ5wMIJ7rHIRTbt8tf2a4pU%2BUfb454477eT%2BY06ubQUMNLwGRhjl%2BrHSrrl7QDG9yb0Msp5y9vOXGa3do8VqjD7hIrDBjqkAWBbmvzXEvbh%2FbP%2F77tI%2Bi0edFZxNWXRQvsJuYF0F0KeP8PLR20mde6fIRjkfOz5Z2rT7ow7PREcwf6FetcAJLTTpKMAnhQ9WdbCOd2DTKnGQmXCbXLEBrJN7vGnymGY5KMdAILdKCQJEi5dW4V0Zxi6x102ZxT881JMCVKGfK%2FL%2BWvBy%2BTT%2BXvmAtDFW%2Bn7fX1y3kR89ZfB6UM4ZWLz4XXqSjY7&X-Amz-Signature=88c2be12c557df63ca39a9575f904ef5c24538926acd86e24e78b99d864e90fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
