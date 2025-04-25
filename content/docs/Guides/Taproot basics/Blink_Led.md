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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGF52IZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZR%2F%2BJ8agMzY2%2FPrZu4L9l5%2Bg9Yl02lvvVUm0PyD0RQIhAJAtAxdPOOykJystGELsuAIFrvlfXLXXGFR1vPh5iIxnKv8DCC8QABoMNjM3NDIzMTgzODA1IgxQDjpvKL7%2F6mt8%2FPoq3ANX4LOVVQOo84sbSeYSdb%2FG3%2F7Afj0jChKdK3JW%2FW5fmXrdGmV77B4uHTJKeNbGH3Dlvo2TJdi7FpvT%2FCNkX9sdn3HZERQizfyqrn9tit1lgkbNOCxAPdKuOqxxUyLGDPcaaMPU9czop031jHMRMkXPl1dSVRUFYVpeaROQRjDiodEkv97Bgup7bBIgI%2FqRMXj5pJQTXYuDjr2PkwKFXM285raFnRWiRrzjpBxI9KKW6qghjhQCgAxUqCbD%2BtBpNTS%2FYurgFTbKqh5qWXhIlEAuia459XRi5umQzaFxxGMBnRV4IBgwv7zn6%2BznR5hpWih7ZKkrsJglkeh03aYyS9vMu6WecyaQaRIRhDjv8Ej04PU1Rb0oy0eTLNGcMOCTYmxv6Wb63%2BPEm0Bs%2B6gv0etZn7aB7hZa7bvRpXkyC%2BXzovhbMjzUKaHCAfdrnBGSA2EcKs6L9QRWV49ZTIKZjHn8xeUWsFvumAk3wiS6VEt5Yi2KCM6sQr6x4Tv0f60htUsOPrAkJpv9Eft9viWOlvy1ViK15WJaUPJRdHEA2SBE7tjHoFT4Us6Dm1zFWL1WUtjn14WBYB59z7pHcIQD%2BG%2B6V%2Bjz%2FXgjAo8o9iei%2FmgjGVcwMJ2SeOwlbVDExDDPtK7ABjqkAYK469MhBEaeejB%2Bi5Typtk3bz3HR2fk4j4THbOJKhNmBi1xs0415c8uKMlkq2fooTRt%2F%2F3%2FdmD9Pv5zpoM4mo23CatKpGbFCGdVQllwt9ZUy%2BB%2Bi2IKyPrM967sSk%2Fxh39sYtVrLLYLMKqZqi%2Bun2f72ogTow7RX0nagsaNqdBoskwPcLCXB6s9hqFnr7X7DyrhjdJlnNVcTFqzgvP0XucNxMLT&X-Amz-Signature=0b5828d9f2a8d3aa94aee5dbc6293e68f11d6cb65164638c725755181df9ee21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQDIXKB%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCitFY%2BCrpaEIpApxxOognnLWQ1ObkW2tXCa7fAlhQZjQIgRXmZCvhbG%2BDi7AVHidgvhFHQNs2Vjw%2FrOD9dnfT%2F9GQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL5VsKZt8lGDbvu4RCrcA6YOsatYbbWjlGIvbja1nGCzJ44P7otz7JryPBv3koZK2hHzomA3Cy0mcTlum0v%2FLoHD0cv8Ss92LSQGiky8i7b32muJKNsA86xXsDY7QnvkdVwffHzStApY8BJIWTYAXbsqlqNCYvi2XuRgFH0qNs9RxmJDOeBE3ZgaacnN%2F59hfkrN5afxHaes1C%2BI6HkjrRXaY1OtJmPSdYUD3emqr%2BsJVQMOUOT7Sb%2Bb1SdXWtpoMEo4ff9L5FOy6yPH07zF8W6pasNronpO%2FxdG%2B2JBTEu%2Ft6E3aYQH9RrpPC7LhqbpO1SUrCbXuCHZD0kgvIFzHloLbrah%2BJt7YNpFe71Y%2FHX4y6oWNsuYi29r0bWrj0KZwQ586kjwgjtpibpcAlYOBb0xEo7VH7wY5iCsyVtswf74G4T9NM5iuWfRi632AHui%2BAKPFUs2iJYZBd%2BjQPcxtvklj2gBtQppsxD8biEF0olKTrd7Np%2F0Zx6wwD9WuZNJ7GBYpQiSk9EcMGtoUoqTln2h3yBjvTwmIhm8FLyORNOFavs7tJN5L0CNl2pVyhH3Upb488NRM3w%2BggDUALqVSjfvLfHV9X7ouszXhrCaeulA%2Ff8UW68s6X%2BLniyk4QXeLWgNp8XkMxalR4hPMKq0rsAGOqUBjo6wrABeJb%2BYJeATYISKfIEkesDRZR0iyJ5HAZEEzFmcXLN9QcmJ1Yg6PUpKMfyMg9EVyvEj4DVvZ%2BKdEFPi1zmsxfGFoxe1e6kekSFDd0vhFxkj3XSoCPYffFo6deOxkWQpJu93ROV3AI78dhZVsu8%2FVLAdMsC7GHWChVhwCHTtqvdGRjmoDp66UQEBjXRaQze6eaqS8HFWJVBjlefixnFH5%2Bsb&X-Amz-Signature=44d099bf7aa67f980332f76344821638c3b4b6c9d7d7fba71c054d6df2e7f72a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
