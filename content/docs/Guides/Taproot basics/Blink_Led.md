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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564FOWR5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC65iKUawPkE0NsVFWrtw2tVj4HECAsw7h7mzF2kL2mTQIhALfBXKPBHhcx2wde9uyV2nUyXEPrFYeMLQVXSRrXGGj%2FKv8DCE0QABoMNjM3NDIzMTgzODA1Igy8AUG8ruYWEAFCfKoq3AP%2BiHgfnG9aAxdC%2FKHCtPptZHgUyjY%2FS4h2%2FaaJ7i5Dy0Iy9wVjaF9f5Gu0WDQSNldtQCqqCdcEtIm6ZCLRf5EyqsXoaf03lAGF59d2u9vVjk7otb%2B87RNyrXzr4q%2FCfIT%2FsCbAiSUAAg%2FJBHdiYw%2BcENR2FrNdviuo1Tgy6EZ5ZYVtr2nitBJWgz%2FueqkAUuRa%2B0NyrVxDQTV3MH5kQqqejyC1t%2FUxQAXSyUjNhgk1d4UYHvWF7BEErlG5emTmxloxSQ6YTw7ssE4gs51Y74MR1QeI6Q6jsoMgs9TbmZ%2BXk%2FlMGJpS%2FDeiaUfZeUasD2Oiq3SYEFNBjpKe4e7aOJHPGch5ZvHcoLn0KKO3ObbNK49v34MKqtHroAIooGbnrJM5J2ju1EYogpJ2AGNgbPYRV2kLMpdnEANdW574rDZ6FUtNV8DEbPX9EQTvItclZq6kqOI6d7B1k%2B3oY74KVuUSQxCT8WFzSBnoy2GL64ZDBelTrFSlSl1Agc8%2FmpgmoZaLe9kdCfH8lWrgsARgGDoZHa%2BNhtVfi1%2FMMTE3a5k%2BjG5LYosWTGQ3pAbJOivUoQlIRQSw1q6HrKd0L0k5Co1VyxG%2FYpDNEy8g6buAbktD8ufswi7qQ4S4y413TDC%2BkoDABjqkAXF550YFLeLP9alSlJ2%2Bd4EVXqOv%2FltsO5m2N3F97fPi74ltD6skF%2FrtaHZaNdfjOvJJ9YFHtjKR7amABe8zl8ck70%2BRVURMAZSBPqWS%2BPUHsEZCb%2F5%2F2tGL3e3sJGkch0u6WZFzXmE49Ly%2BLRlev27JkF76jRDFBIOvLHvoXbK%2Bl4Xx28mmG%2B8A1wG4HPK%2BjHAeRFIlSpXOyKUgKAAYDuRHy2I6&X-Amz-Signature=5fc92305ac8ef0e1c05a6ade981458c9a4e1909cb0d765977942152e8f70a2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFWHRCI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiwdfOGup4927qBcFnR%2F5xJUyQRjfQzqL0SbO2T9KgJAiAIpjBXPSVpurWGLV33UZFVrFRvprBBdzNCoeoEWE5X2Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMJOCXR9DzrYfamCvFKtwDWJ5JSQ81vQIkZGWC1kjeJhovbxEm8EQsHBSetEIAbh%2Fmk80RjgfOa9toHX9oC400EU4MLRMK0Bn8mWr9Rp6uKPF16%2FdxkEadMDN%2FNPePRpdXIlCX0Xjg7vjY2300lLyHoeh8ykOysrnY06VyuQGFu6vLvOiOOnA8rHofUCs6k7tZznNigldHiCLlLtRwVF8ZmOFSZep7N6UrIuVTrJKrJvFyv0H6GUWjiXQSwf4Jypbm%2BCSKoOl1FjaWLZSCh60LmccisXnLooJ6d3f71DGCALnLi036vQUoTPZL7NNI%2BQWHM7dF5JRxhUkRkiEVnnR2B84bZL96yhC0KfyySuMlCS7GFib30gd5kkL90Jc1hgFyHXJsvqhpFqR%2FLfNeZnDF7coPlqWvxR8yE8sbAEavK54RLGhR8ayxPutFGhDO0edhErIGg2SiJaioyuXt6AxAejtd00pFt028Ieb4%2FbzJkOWWdCFqpRY%2BmwlKUsDQXtAcw%2FFbTT%2B8HJOdZbuOefIo3e5XJnzeGeUdtK2KPZF0C22S6pxR%2FUNhm3e1CuU2mwHfLZ0l5wl4psHFRDG00ll0fFZmp0FY%2Bf5cJ0lRowRYbgPEeM95VUxcxLcNIssQxhiTJO%2FQQas9%2Fh%2BxIhYw0JKAwAY6pgHC5qLqAHHV6Y1NKczZty1k8H%2BbX51ygbpaVUqSA6AvBqnZRKbVzLpU5gMKD8%2FJENzVHPWWjy0OzrsB5%2FK%2Fpc8FOxRf6exylRgWBBdJdGjC8HuKTG6tvGN81dk83s4BWJcSaup%2FwrSLpI36X2k5N3g%2FaxLee6Z%2F9fOZM0lRMdEAVfDWu%2FMAf8Q4RfwCPdMKTdlZPgqBDGAVigm3fEbwHNehEClHnAmp&X-Amz-Signature=a5d85c5e8c40dfa7f5dda8362ca3d8e1a79ab3a14cc21b604beb7c846f090050&X-Amz-SignedHeaders=host&x-id=GetObject)

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
