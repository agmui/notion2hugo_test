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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3IVPC4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJXdW6CIFcyEJisD2NtmkFL%2BKTnz5I%2BC4na9LpqP0khAiBe4nDKquR72xbprMy42%2BeNNb6w0BaA6bsL%2Bap%2B%2FMGfhSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeAYSFtmeT3rytzO6KtwDoE14x%2B9zOkheVVJBB8EVKNJmGADQuZU1TiqlBBQjJ%2FbQ%2BQIajzHVsXn8vLHVhxULiazWDpyRJmHsz2vQ8RR1pQqC8UcTC%2BPZD1wsYjk9Oxb8%2BaVMYcOtf4H7Ybz93mxo5AI76NL43iw2vQRcKUEpm9odrGH3nRPU1yviLufUDTelsV6R4t3ngZzhfY%2BmockFNKAH8w7ZqbQZ5T2OhwE%2FvMJy3enwzcOqD4zoXVYAXXXzkI0XxnyHjs0vnHeag8qCrb1YldkU3FGDfonticj3JO6Qquy4ADv7sO84srRb4EgElIZMkxqclId5xSoKL7xUWplqFdFBOHdozuFc66wCzOxYLN87WZxiecwrXPMQjbcIOqo7urpAPQ4%2Bs8nI3KLhSNxuTl1ZKamlDAkIFA%2FNHY3Qfj4j1XfIsPvyi76Jnp1gfgp76Ol6hpMblVd48XJGfL22SNAAT3RSEN%2FJ%2FJHu7O09Sm0j5SpNB%2BiGzZx3PTvYaW7Qv9PB9U9xbNdBP2YQ6FnHtzItgn63QWbhlBeLlJZEmUWbdkPd%2FJKt6CMdeEEMPbIQyV26Oknozv3FR3HnowPlD%2Bgc4Zvb62p7RTEyAGgNDMwgeRkB5dFTmli6YOM2o%2BfzTdRVAFtxGIwwjLb6wAY6pgEQ0M2%2BoXx0uAfi33b0w56zlHtlR96qT92G%2F2DBn68afZVde01wnXVCa4SEYLN5gTSQKqvb%2BAAZ8FXuz9HJlaJSyWGIO16FOcQoovYP8zgikt8dMMTGqO7ybJ59KfBlFpBUwG15P3MypKz7YTPtU2EFp%2BxP8gOvEwauErTmC4G4fioyBDL9r4QqTxvr2CdSzq1iJ2B0wv63wPS5r64xefhjXkIgX1ow&X-Amz-Signature=d8e4212f8a230bef412c5ec3a08f97822f3b32891938ca3a61eccc554841a9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5JKOAJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO5SBajdW25%2Bm6qLCpZ%2FIR1b6SxMZsxJrRBzheHuxrGAiEAz%2F01QYxWsSypJZ0CpfG%2BkM8DDbQSThTH%2BD%2B1rM0I6UEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGcf8bnnCbtpWHB5ircA%2Fh6rPW4Gfvw100uknDLE6PY76E6gfdi0%2FWi1T%2BcQ23VxjLj8zFiQuwSHQTFKDGXiaqabhlNQsBamHuiXb0FBbsHcgtWJYlBHBE8hAg34pI6ZLulUOMhh9dztBskvOlCyC%2F%2BOmDKxnNrbgCvHBUfKye9Nar7sEKJsDqJWJcdih8v1o3m2ru7kJGAX8cpTS7yK%2BtyP1YB%2FHu5uV5aQmqDBiciculLxNMCIh8T3P5QuuZqC%2B856sbT5I31JykidoMZGw1J6TFmqIrooGFW0IPpg1TG%2F17IHq3QBDDx2IImm0gB4y%2FeWnXnPiFP341mtQs%2BiAc5R2IJ%2FpmRuojJ1wFBzYfWhwSGaffj%2FGEpHYXk8gALUd2OQDpIgePhVlWJyrN%2FR0k03CvUSaEhrWZI0zxQpl%2Fl0Dr1EkPX4PXZlnSSt4PMZVEau7mqDhCMz%2Bh4qJn%2FxNBiYdv%2FIsLV3RmWx0OaIGZuePOsg0XFl%2Bd8uzme50tGRRR3%2BWrTtlCPiFjmxnRwnN1BddBNzTQ68mU0A0db6Kcnnua1jbG01kAfSG0%2Bcr%2FmhCdnpPSt2pPtP1eppFCeLNBsGGIZ5WyWRDhc843qCanyvgozaVqpMWI9Hxev2%2FcKjLD2jql%2Fytl9tcomMIq2%2BsAGOqUBrnb1kDeGkI0ap4tcO81BIjLDhx6g83SW3NydeTaztBzoYI76CV%2BSpLNlBIq4geoyoCFZnfuPDNf4kiM2h4zZuGgetnbA0OJe8qPXgGhaRhHIX1ElWAI3fNkLOEEAR29akekUjXKDRS0artsN7p5lbOtF%2FUWap4b9XxXrP9Lj9IS4GN5HCuQbmCDQQAMuzxPjwNV6Tq9AFSMN66KxmERsOO5T44Ve&X-Amz-Signature=62b80da97df2812ce8b5f11326aac15058c60d5b99559fa0bf83f1b458f40fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
