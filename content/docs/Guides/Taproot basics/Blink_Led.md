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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMEOUWD2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID3zj4i%2FsU2Eqt7VfNCgLSg%2BtGpieWmWEgdVZs5d3P5eAiA8sYjPX%2FgYVs23Lrd3zPvOSZORmx9YCXKYPde9bqBBmiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3LDNVWFjyioPvMUKtwDbbxGS0e37J7gREfq3csNcSLtCPyquii553gw2Ue8Qpyd%2BOONVjif9wCFFO3ENQXMuzqtEkwy%2FRAvqZDszZg5myOaZD1z9rjsE9fK12IqkowRIGmyAxX6FEXpxNKkDHrhK8N2Jpy%2BUdxtUO5Ne5YVvwldDuertPSFQHRDKKXNB0dgBkE9UXI9I0aiqxtyyg6NxXVNg%2FicFazr6cn%2FED5puKqvutmhrS5uOXi9Bf1U%2BJLmYZBjIgK7E3g7UyC4xslPecHq7gFsQeFBeINnrTGjqhwLbZaWELKbioeeehkR3pFkclEYf2pe6kplTnb0F4E9DdTSdo5YKkK2XhMjqpSE9jshHUGPAu%2BeaUoK3WbBX4jIWg98SKXPmMx5wPoT9YFeM31SUjCaDaC8Jg3orzwOk25wyySSp6BdH1F4LCtVtPTMeCxN%2BmNkZIgI25TRkfaNurIbhjE8m6cgeslukIN71U0fSMhU%2BOQGHHkEfQVlhCXHqno25caX3ceBWFD6%2FwWCByOWA0HI6IgzNf1e0lrL4LdQ4VbbKzI4wHdroAWrHNdowV3fagAX7nurBMks4UopFBbg2wEiHLcWaOVqNxoDGbfySL8G2Bh6PuV%2BvGkJ8JY7Thr2zcKxbBZbVXEwkJTSvQY6pgG5kJlmJMW%2BbUc6xLAvUdO6tLG4L%2FH2OtAvLMy3KWHYvSf3EIfT3pFKr2UOm3KiEdUO92HAzmvY4FBNaD0Z2HSKVKKN97GXAACmZN5KiXMGNgENd2pvbjGr4dcGHRdLPNFUpEXdCVRlvitJG7qR36n8f4N6ps%2BY8QvCvDXqGQGU7svDMsFW32GrlpISDbFmKarnWyhsQZDDTb4yzddSk4ausgkCg0M9&X-Amz-Signature=7d9890dcfbcfbd7af34f55ec01a5fef0a394470137e9a1f1902f550135183033&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE6S57M%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAoLNvO%2FNircSzBFbKtXsJM4IRyNOlUvfumiX1frxXO7AiB9w4r0PiolVDD9Ng0P8IAww78%2BmGCD7Jxb9peeKi8zrCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5HQoB0vv%2BjSLh%2FYKtwDDl%2BCetwijVdXGiEas1YJ8Q8%2F2jAwzSD7z8R8O%2B7I01yLIxjySMEQ9NsAh4rX4%2B0DyVpF9c%2FEr575%2BZZMQYQ16xQEhWiY5pCRWCWI3kF3%2Fj4lafebbsSVJJ7y0qJ84%2FiDjusAZzSU8RcvjGJrHTmLELECowMgKnpvmGs52U027F8tg5FULBTKp%2BCcKUqyPA5GHMZB6RBszAp0sx4Hj3WSAJWi9DY5dhQm7xRHLfFaexDFjmhkcqaRNQNkg2LDulBlcbY%2B%2FDndhW%2FzgnAbmG6ZKKBd2tsXTHZBGSfbR2A5EqQsomeAhlGfohCmB7lMl375XhKa0cJetpBoTPX4OnErsddU8jh6GLfmVxN92WQglj73xc%2Fq613KzCKbYVhEN6xoXeHdgouRsPsABmj%2FIeOM57hgb%2FNKxQXMGvFUmIBVTJ6rI97tYA%2Bk0gwHkGJRBt2eTOBnK3EJUUztq55JhpjItGLG49Y3KNuKILSggPtiXeGKff7%2FF8iDLMmFz%2FPq4Vt2xBbt7o%2BuXLJT5zvmv5gEjmJoWzqnbq7kuCcqgOq5O6ecSoTY7yGlziSBppUjLnCxLzPjlQwPpQOY05PhUki6lnn8PoVAZd9TeEDzMumBlAwbDFkhV4XJ02tfL50wjJXSvQY6pgHdVAyrwVVK2pQZlwg9L88wxHlziJEgjnH2VGgE2Ku2MhW0pbF3XXML6shKIxe782FyvnMcGmozScuG28p2aFVnWv78WbGWf9LWJ%2FTmsz5J13Ew7jrjk8OP%2BTeXfn2n5%2FGbLYOw10hdxEtXW520nKZVzLSGR4z1PASvJhx2u%2BftZ8za09ykD%2BjWT5j7DroTXk4Wnn2UkDH43nYIqK4jEiPDtvuRfg6G&X-Amz-Signature=308b0eb61fb7f98bdfae2fc56b6439df6622e7e7c936eda5a23950c5426999cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
