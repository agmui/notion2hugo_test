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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36S5LC2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrWKco87fZJOI%2FDuaBwVQiXz1l33%2FWeV27HUdSb5%2BJgAiEAqUugZXJHMUBdJyh4stJHUZWRToBf5o5XslIQDElqzrwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKl980MUUZVZqmr3LCrcA2EIEVKGOGohzEkzpLWfi1VKD9YElvniEN9kxEs2ME%2FEcyf%2Behx5guLKHu2A9pJwZlfuYoldgjAs2vmctlFX1WLp76ZyY90CLWjQ6qRrKr3Ow31rAgMUWKoG11JH12YykX6PPvXpHhKyEMMyI%2F2rqqo3d9Hu%2FtUfQV1DDAiPrfmvDhOpgCj3QVUyRog2p91awtRjarg3P09XJXnWxuqfRitC5hevEruDBKbTi4MlX1iZMlAOtvABCUTKmrRLrGcgRDLauflvlTaa8RaQDZ5VGVLKDtyIb9tjh5JcxSt5VVIvZ2RJvLQvuENCh3%2B0kHxlTuJwaJ8IlbN1UeUBy6aUM9ONGiQNtEipn%2BVLkYV2Yw9wjdr5wZ6tVoyi%2FWJVazPy9tlpOYkuo03AAhbSrMtqjO3t9erjK3%2BrOh9v1QHZs7S4UHSIJe0R8pRb3Lvny9BW6j71sSsAUAbqXQ8yfUsEAg%2FxjTyPcnidn%2FVJeI1wIwuvYeZGhKV%2BQcH09o3%2Bo0hYqrbosJZ5OEpVJuhYh%2Bb3wUZf4i2Bu7kz3osSKxSpeClX8vF2qTRuxcsQ71U6fVtgcQWTyWtXfcRxFtLKmG43FTwW0KfWeWdycgo3tdgr0Cr71tl8F2J%2FEeA9AMx2MKzBu70GOqUBrSZlmrgI8m%2FZ%2F8dZREYAQRLktBoj996hNGQbi7SBT6fnhIRAHk1SA2sLOFHH5yvrB9k7bB50zNAPwO%2BQtxpyeAeA456tj0wwxL78UY7vM9%2BdfsvN73o20Jf%2FAaeXZlt2z92kME4%2BYxjlpgt3OhLHy376ofLmDraV8ydtP9ka0%2FIBxbMArDMHZwlu77EbCduqW2PLGz1ySLtJWfj8kzCT3gDAEPiT&X-Amz-Signature=7031f2e0562c627c3d13c9f41012bc51b7980d65e34f4f03efeb533db217facc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFP64EG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtr%2Fnt1CZDWnNJe%2B0F8hRibM5Smdh9iXYJaM9HPsmTmgIgH%2FQGCkTp8pB1yAHQ7TlijYqJwRX2szWmGgCi4sHsQukq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNUM5N4Tlxje8R5rLSrcA1zey4d7mxPCtLlACdUbx7FSMsK1b8SvJdcyCnInWS7bGf%2BRBMpXnHRVqiU1MDC%2BocKBaEMNh5hLOg3WcIXpPJMr%2BvI%2BDI530qoJz3gluddsARcAVPCt0PKqyMnOOCKp0US4TOmr864TCcEMVK325Euokd9hKNHs95ZrgWCxiuW3oDkdf0bZrfAGYa2pz06ti2eMaa4FXa45%2BnrExpR9tYw1AZs%2BzHhwzRyoU1GHqBZrzjnejg%2Bev484%2F8ywo8GbOj90Xm8xZb0E0JsWLUR5gfA6Z5LlbwHHwZdriZ8tSYMx0KGqvFHe0UO%2BbgKO1Ud3mmkhM4BrRTDQMbrPYGfqgtKlKlJsC6JCTILwRP44hdYHcR7ILJG7XdVV3djXwVaCPNacH%2Bl16OAjFhJmvZKv2v9cys0L4qpgdtuRq94QScs%2FrGTdwRYojS8oOViHF2nSOUmNqFAAtNudjF3i%2BBnIAoRGtcJ7AGBmrMTM9MhCuDNiwpUSYTlFpcA5IhYSg%2BRyV7CD9DYQxqepPy%2BkoR3lh2dikqj4R4x5LAlBBZ3BzJuUMp3bDUcQWryW07k%2FDjZr0lEVEwTI572AlwkavfxmpD839nqXTc9SKkTeeqfKlGw9imexgbFYQGFrOR1hMJ3Cu70GOqUBVmgTIBCxzKHk8taSXZ2RXm5TOE2VbPqfbaGW9%2FbSJ%2BA4tIXRfusOFYMZJnLBFIsrN%2FMdt6M1gYPxfkbVJPAr0hGrDeki6sKlLfBUW7GCUP0Bc7a6zHafWYrh00eKxWzOLuvk%2FXUaraGNPeyW5Gnyw9BQCrwFHqt2FlCriLeonPSRIdDAgAe2iUgJpZegYIqzrUYaZQAzFjzg8BiU%2FJw6FfNcC8Ij&X-Amz-Signature=c3a839e10c6ac47e1447765dcc3d08cca99b9c3537b39d3825e86086089d454c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
