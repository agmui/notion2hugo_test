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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNM3JUG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICaa0aWmmLBgHKCmMw5pEe3iWOdrzHNVUc3p3SZ22%2FrEAiA1gkQlLjc0zwpIHB0gfz5sZcdTD71atY0IybpoUeXJayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMVlkKEV22UTdmQhGhKtwDHGHe%2FUA9D%2B%2BLOt2gmhiSyNStBSrOuGbj85eK2aDHP97OdNVfWQ%2FE4vcp2udGTnPN8WDTvWkeetmRHf%2BvikAyBbSpDBwlWwMD8%2BFzVyDyFk3aEHK5GDR0KpQuo8bhAJuxM49uTugI63U%2F5Wxjw5wVjuwXdkKKpqaIQjFHe%2FWljo3iRZ845A0albiiB3P2D%2FU7Inq7xW4m6csdrGXp6mr1rShjAFl9l2hJnjfssHvKel%2FGJXj5tuBPTfayfpX2Prcl1BVfUE5m%2F3pma%2FV2Hkg22XWHXfEzPaVbHtpIBgmfgNeSR6FQL6jRru4U00Q3dKkNEg0hq3DpFEGDNmlfymbwEraVc9kXX%2FBVgzEuT7K8eByWtQv9Fp0zP9vppjne3ULEyOOTM8ffcack%2BvDbhbIXfEaqCZrWoMeJs%2BL9TQRRs%2ByUTHWS%2BYu0OS584UF59DhUWKDOLYCtv9z%2FdNJjUbz3r1wVq4EXcYW5uRAdwnly4nza11j4vn5fYdRaOofc7wjeCWRvCUXYz8%2BkVIXzLBGrp3aSf2JhQKcMe%2Bj2jHeH%2FmgUPlVbCPeFG4DFJD6LaFwrhpTZhmJNRJzy5v6Gmi1JrBmi1W7uOy%2FiqfQykhAFVVBUerTpnY2PvbEJeuEwgcrKvQY6pgHzv7ilR%2FL%2BKEFjAEnXOvb7ahrEEPuqJbkg4MqjABEDoA%2BodtStXEwlJnNu9rYQVB0vPNXHV6CZVa6Kj3arIC14QNnRoCzUhBj5%2BXEZeYeS9dhXxST2xLkufWnBTlWThHkdVYpnGJg4OVKPQkjc%2Bn90RoidyuUmCaaoWvouaky%2BGBYVdOHwqCHIPGq14X7u8Yfj7FIQsoZFzN9MOI9Gwf%2BXFyfG7aOO&X-Amz-Signature=dac7aa71efbfd3021dc79bcca76cf6038d36cd4d4c6849aba680739276e208b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFUARYA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCHtrQBYppj%2F5YTsq5%2F2VdIBeaIVpt5%2Fsv5gQSvA2RWiQIhAKoaYa3wweo2RhiZs0T36E09i7gtF7AvMNSRuZ9CDEMJKv8DCGwQABoMNjM3NDIzMTgzODA1Igzs8pS%2BeAX2Q5TkEZMq3AP8OQtMPNZDBklsfiOPklIlp7RmdSntr1eglPZtRlcecHtg1O4SAPKyz8KRpBjTcTIaB0s6kcSc7MTjyd%2BHR5lUhKACyEDiGR0xLvMNNZu8Z3BilgdIWFx9QXMaqboNUI0g%2FnCgNm2znqj%2BlMbug6CR3D%2BBp81460SBK9hb3KMF%2Bkwj2IM4Oi82jZ%2BO%2FH6rnCGvknG7SZ1JKV95mh89rcfxrhApRJAKQuTpsNYaNYDA0e6r59xqhAdJpMVW6vcR%2FHpfA28P4mFZ9g2Ry9W%2BBFJnRyxQYRxUz9eK%2FC6FEHMmDyuKkTGyaRLPit01mcgxpdIqXzMcYuJyErdgaFnJF%2F9Dh54BTeuDViV4omWhVyg9M1t8jgKTKydWDJV954aQeV2Q9QntdCMdDLgaEyK9SfZ4%2BivHOiYPtqjB2eNZsuE07UmbG9L7DXgaUraaSnfThSceN4vonJ41VeLuUXeYvVi9K7Uljjbpw4PBvC8nxm1Qo4%2B7FEd6kOgzkhi7mHKTj7LC8nYveoF0WptLJMFrdaLR%2FPl0zaEt0fJixnkV13YpBuDz2NaPZtg1N%2FMLaCP8byAExMG4pLpwkQl32f%2BOyUw%2Bm4hr2%2FBWQgOwzlRuquzkVh2aa8ybT3Xfv9epLDCBysq9BjqkAYup6RTSygk0L30%2FbJhRT%2F%2BsXAoJh5ZSlZ53phz3qW2%2BeuKSEVBs51riFWZG3JdmprwTtLjR9FXiBVX0SL%2Fh4MroG%2Fz792Hpb%2Ffoys2Pd6Kf0Wn%2BUieT96UHo3aS2nhxsmfTyOswHvzvEQeojIobygKdRGfiPVeyRsQg4dGt8HisJ2H0%2BNSvbSKlOMkCiT1g0zgVzvKDz0xBXNz7P%2Bx2Gyqn%2BzV6&X-Amz-Signature=9bcce6fece9aa6392d5a1abbc942fa038510f39602bd51f9760da17d0cb376d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
