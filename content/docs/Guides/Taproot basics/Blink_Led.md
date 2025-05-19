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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIJKCDB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ZAwiqR4EP0f46f6IsbOrfV0OU26SSNKni9nO9W0t%2FAiA%2B5qGF1gQTzpyUd3ObZ9Gpiuf0PSwQVtC1y3MPxIIkzCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr2YpHedgOAMY0AXLKtwD9Zg57Oz3rnIuCKSPcPVMoi%2BtSQpP74zu2R%2FN5yA0yVSiGjOJe4l8cveS%2FxrgOLp%2BSMMNSDyPmRsh5eBZ%2FfoNIergDRGix8AV1ShDfggQbtdfL2i3GTXpY55CJ%2FrVuh7J9fj3l%2Bk1ni%2FONBxCvGjjRd1jRAppnP2PBjwOCzKg%2FHHT2PHQE5fuea52AvcvMcbOV1l6H39zqwHN4kzVoVXUlNRLx%2FINFYD6b%2B0dLHMPI5VoMwwA8aijiMYTkobfiGdvYmFM0esq5oSI1iEkML1KW1Db61iiMNovdl0b0oekzZAqMubxoDWPpag7%2BCRh7Bh%2BZRXZxcpk31nZeHxfqxCcWaOaZncue2ZCB9AWJZrqUXvcGDdzpnVAOe0ZvyviGyW%2FkNZ8WKYrZktPHB3FJkbM3a0Z9R%2Fl3TlPDNpfiKHLFPQrZwQkWiyMovkhrK0RqzCdN%2BNz7X3flbEtXEfnvPiYEdYBIW7H%2FyDb6hq1BdIqyHs0ZaEYi0OhGi96zb5DVqBomWHQycPArgYZ0TdvORgrhYvSHXZaULrEsj8E70heVxpifZIve35k%2F9MQXvcBy%2BFbbgeo2dG9cahd54c%2F7LIjyHEMmqpQQtGqFC6PL3nwmY9B1pIsD2TNhbkRn1Yw362uwQY6pgGNJjoRPZSccsNDEO8j3skn83Nq6xCoR65U6Fz9EHz5%2B37%2BFllacuKKSXXHfNeWFs%2Bj0DiOr%2BtMVqO7bppmTUQT1pGTmS%2BJHT1OtfaF%2F2o8t6qvdj2Cv6%2FivUZN2JuYd0d1zy%2FD3hAkaLFDwGykuQipzJNxhafRax3lqbNW2N1wllD%2FJv4PAs8sspaYAaLdkGEO%2F4yH8QKQfOhHYXo3aBQ%2BmOm%2FZ0fr&X-Amz-Signature=797630901d350994c62e337c8eded9db7cdaa38ad573d1d885021dfdf35b5ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWA6MXT7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM80BjDU3O2dhHprxmbPRCqQMwEs6m6xe15zpUapMbAwIgX6r74JlH2eHlh3Rrv4Dqz3gZ66y5mL3MUElORENPEs8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4aFHlqhfXV2wUxzyrcAxcGjr7pQ%2BuPWyvoPfijxYYFFalW3lDOy4SqmanmkSMGTovsjfJPlX%2BPaTn81oPuYlwbElVih2ss0d9o7t7WRkBHV1%2BUYC%2FLqJVGbcOxXAJhXs0l1EjI2Hkn2lXosEdcBekRV%2Bre5ojmWZUS4bnEWeYxaO13AfIcOfunLHPfTWcHxB7Y3cqVrN1Tdq5zbCws3z5vIafoqjICoMkOiS2v0aYphqA0wY5S40ZvgHjPtlss0cAfvGzkvu4aGBDLJQd9kL%2FnPQXFww579CW9eabzpMfnWpIqV36E2Ohjvc4DCNYxGKpxyXKlhWg9e6W0WlyfUziHccVHZ5aYMwc36E2tznmYGF3HEz55RtlHOaHKBm5Zp2p5jUo3C32wIFAvKCgcnW1fVaoKnjgAXVs%2B2HM498CMjk99HTLA2QV2FVWOGWSBpUj2hAbo4iOd%2Bu9hQhbTtLK0upJoTDBSBbsUnCGbSRZBU2VpjCom4xx2SafphMrlHFKH6SWWTMHwJyLCm0speoO8hgdwRNG4Hq31QBSqnL1zWE0ldD7XqYrtacomm%2FYbRMwCJ3%2FHdStCJz5BLohIWOPcYCGXeXj9Pr2tbEN3Z2udZX6I1N%2F0iLPCZTnFobrZ7mbLvANcNKj6NZfuMPutrsEGOqUBidL3f5NxlRUR4iCDe0CjjZFDAYfkHodJiQQsYDpF9sglnCXV1byL31KXHFq5hVFvkzhLNsGWKydK9w6CNsZxtrwDJYm7%2FR7CJDn2qRc8eM%2F1%2B3%2B9zuGqYCJMCi2bgCk4jRIy24U%2Bgn6FMJO00%2BSZATa5vSwxviBK7Uw6eP%2F%2F2AXsPhj4dc%2BBYHCrddryklnHK%2FBO%2B5uW70jygjfrRq05jAJIZfhP&X-Amz-Signature=dfa34349969c5528ec3c8ed7552c2de21afae03cae8ab15cffab357effbc11d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
