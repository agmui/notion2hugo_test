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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNJU47P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpglmnaEbJATg55l9AfwymW%2BbKkqdFyilgZRvQ5mGwxAIhAJVRYYCF6F2TzBj3%2FVE2r34R%2Bftq7efAVwlFcpBCRoTeKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyydy4VvKrn0bYyiEcq3ANAUVzNJJYD1uy53TxQJb14SDvyId2Oz3zNsdJTUtUhQ99ToDIoLNz4kW87Zs%2BNd57XOlm0Rgv4x0IUD1GPmwbb1hRkOIdFffwVcOnkHYRWi0uBPt7v8W4C3DJXidSYHpw%2BQldoNVu8HTnz84Hh%2BJYI02cILexfQDHv%2FvRhme52AU2WTwDQfHtJxkToxZhu0GcCaePGk0l%2FWJ3rJKgMAlaySQteqML%2FslHZaS6NYh9%2FhjQG1LaCM6JmIZnhr7NOEKmbfHsVHwYj6Hc3odL6ZTR1Vmky%2Bt6ShX3EDOkW%2Bbz227VN2x2yujIFWglmo8jhJpxRF%2Bww8O8mXRSN4BH8jHv05SPW9%2FJKfFRcJiUvOTFVZBDQJo4pc11PLkeE05ialoK%2BOFVkHbzNN79%2FXjH7f%2FtQl%2F93XelcWe8uJzj%2BB2DPU76C7%2BumOL7fBCQG0nl3weKkAVdjz9aaZOZx0o5iTly8h83zKdoYZgCosb28uE76QGDypWtU6pFShTK9pFIhWZM6mO2QRoFR1Gj6fiaaKpefaTTReGIvoaPxpH5TT95xd%2BygBrJ6NkvqPPsQiSCMuTBHlwUpAFWKMBKBGx9MXd%2Bi%2BNzLuwuowGU84nXfORBnN%2FPVr5Tj9d3HSJgNdzDPra69BjqkARgnnnEerfZ20pvDHQclkaAlgpHNueLyDDQxec7XT9H6RG5PhNoi96AxaVzr2h%2BOWeB51GUPdBDzqJnehR666wVcAdqgDjwCtBggVlOiXprOdd2dZTHavvZK8SuDOxy6r04%2BLakxFd0bHbsBWgZp%2FSunPVrMQm3z1bi49iozOaPtcQOcxMCfLl3KTCvxnTXcBIj5C75%2F%2BZ0TeXRpn4WBwh1RgcVW&X-Amz-Signature=280f1b707fab75e74915e403a8103aa26a7d428c16f44c748d96f98854aec97d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAK75R6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbMh5c%2FCd8LFGjqyhe0Gt1Blgv7xyh6RryjJYnMPT6iwIgff2SZN%2Fn0Qonx6zwwYADiyOcF8Psj1DnaerGxa7SNbIqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpGvYwxQ%2FiT%2FidwmCrcAxuQz6SoxTM2LhSkwEOjVML8XaMd1KxXYT9WHF9M%2FrWagFdpkEdJM1uYJkXCm84Qo6nzmU9IdBI9oYzg0cbmdZITbFc04CzNcD2D1TCq%2B94dwWWCKfcua7pAejJ7NrjMOvh48Rsu2ozFJAkSuaBQi1sJw3oamYfHtV1afuzy7toq7RJQltnpuOgk2PlxkynyTthtqLQ5%2BHcIAx7ZGiICgLPmOvvt4HtmsEL5AePhm4HsqL%2FikPZkWYpXEoBfdJc6cwt%2BqUk2RhoB%2BU2LD3rM%2F9a72TJ6mDIB3em9d3nQEmrzugAAyKZ5qF4RDwJ9LGH0RZ5YyBmobhWngMDQ8Ub%2BUrIoNyiBvdQdgohUPz%2F7UuhoabYuUot%2BQYS8B%2BN4ET3EaLv%2FAt2ZNwz4oRo9o7myxeX%2FRBHmUsKRM2vNOipp5SywYwazIAMV86hemj6tWQ8Gs3LczC39q2GfXvAZlZLsMO6iTlcqQuFwzhAbfMCo3x%2BmRymxhg6YHGcqbbtIHNgwmFgf9BPmzlYFWv%2Ffg%2Bzyez7v%2By9mrn1oQ79CCnbJSXPytgB8z%2F8R38eqlBqlAG3kDZogGsSYh7ofkYdagHmh80lOsOwHOq1YWc6E8GaxmjCl3dYIOT0WSssPoMwpMMeurr0GOqUBGahf0W%2FU2diHG1aB1pSsUieGQHT4k%2FBUFZFhPIzM3CGEMJ822F8busOgUso20S%2FLRpabn05vtsLMPIHkRDRNDPN2kG1ln7OrQUWPHwyU3OXb8yrecSvPJZ2vYjemi9j3MpRDfY92DfOcagkP2dLNUQzYj9zdNhTdN7Xr1R6ksmW2u7GobJbfWzAi4sxe5lkKFKvnGSbqmsdoh13j2T6FeGJOu2UI&X-Amz-Signature=8bd52a1049155fcbc793fe237f99049c7093585ef8834cdb056d3d9f343dcc5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
