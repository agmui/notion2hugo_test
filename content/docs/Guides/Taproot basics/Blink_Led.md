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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDHCXWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDVbp2aJenlj7BjiO2P%2FgI9iD0q%2BB0yHke2GtJX%2Br7gwwIhAN0umjW4NYwcH4k8ND7LBLasCecBa3Dx3FQjW3JCnjDQKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxFDAVtrChU8Nuxo4q3AMioofxhaxL7C%2BKwFK2CCNSI0eB4qk3LKOmEIZgS%2F0nTcJmoiZIlxXvZ6z8qybmRdlWsWV85KgCx2hbT7K2kcDCmJ3Ebgf8uzYvfEO9m6kdyL%2F3NyD0pvtb9PwQR3zslA34BRe40%2Fupw5u0v1XxnYk8SmKhULAjscZcPrmRQK9u7idSbxS1lnX1g3oVT6NEUUQUY6Gu%2BNpVQeZB8Ik4YCzv9rd51%2B3HfnFF9oSNLl9P4tSckXcxqLbp89BYm8e%2BDYV0oNm4j9e8Nqd5%2FH2YbSVRIrgNArI8qo8XEvXzgW7yun1dlKpdr%2BF9sElGIfVKCU%2FFs3TqHye54lVWGKcyjeHQ6SU6WrfS24kR9DgayoYnxFA%2B88pxB6C7rEi3FV%2BbsdthfkxcL8KIzOdr8oC6WOYSXGoYx1ebtX9BDh%2Fuxha0fqMma2UmK8iYYI12KMK%2FxHlxIfBBEWgTmIMjjBG25vnmQ8oRPtsxa%2BXYR8dtZXCMhXuEuEod%2B00nPHHzmqJhENoEUWWyPC31dZ3qLiV%2FHOjp2kZc%2BRMheOSHv8tPhY5sf3aI0lH1Ts2RmwU9va0eE4YsIwuWe2eBrN%2FmSAUOYtzav7Kvs1qQfa7h7brrn5SIa9cdsN%2BX%2FTObUUREfzCT6PW9BjqkAT6bsIQRR%2B4k%2BLaCzSUoODWUNvsxjpt8yQqnaKUbMQy50tZPoPE%2FfzQ5f7cZ3uDoM7nUz5HZpCS5yyynQZH1XUmRTheRkwCy2lae%2BtBc7LvJ632nAf%2F8LoPVdjlYkWocsz7V0euUUi5%2FwYpq9EPirRL3YCyGDsHsagrLyXfWXBq1G95d%2BkhkvpnaNaRtK7ZUD%2FuEpHh2D%2BstqZWMyUkV4WBxs1L7&X-Amz-Signature=6ded7036e7195149b984fa4e4228b75089d3649f2cee944ebd15c48f1155846d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNJUOGY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHPOw%2FtjJifqJGL9fBUnacvoR%2BpQmz4rFzAj%2BBE3vU4KAiAtQSvHs0FPxVRLcMawAD7oxLsBhw%2BeJnsl3NgCFITwdSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIn3131hTAOvlDJsiKtwD%2F9cU3aV2FGHmwxgyVV69%2B6PWAhJcduMUY7LD01TbLRpMevPIWVJCSZYTOA9%2F5Df0ZcO5MUQy%2Fmeta9UruRWGGOxZD3WeJWhHBXPKrhr%2FsaOsaZRyHH3mrP9rdEAExarNxylQohs3EwIqW5D9pNjYtcyRO4Alen1vTGkLMlSjNr02tN%2BS2wW08vgoVqSo2ekRBvz7D2we0L9wNktwHkcELy1%2B2dkhFZ%2FRuYfen4G7dCLYsludsS%2BkWGpeFiW8i3JnobA6MDgrauEqQm8CmGifCLF%2FB2WFEJvlSFwWwEX8SLSi6kk6U2UzadvwXF7maodjtnepLPBmF6O04ZdHafjyhdAQRkETi8KinHXaoGFPZHU4OPgQdgWaBZQGzUvLRF4xlNyFkuQwgWZiQGR3g%2BPoJ%2Be9P%2FuMPFns4LKHXAaJeuMaHVUreL1vPudZFeuFoCl3iO%2Bkzmg4qJx8topKdVLzQULjPVAV29FeD3hGLbGVcE4JZ%2F09hg77GUhsdVs4swD3NGY3jCA%2FCwfV5xK%2Fh9uGlg6Vtd801Nt0Ph9W%2F9Fe3NOYAHY0ig2BoPa5vPDLsOjpxfWu4qStuDDiBYjkUaN9SOGqwpYXpAxUWFXy4jLTdjw1JsdIrNRq18qnb3Yw7ej1vQY6pgGsvegP9skM5tQhKA2wPycD2rupX38iufGATaitvnSiSaYUZ25Q%2BNZaohO2cSEmrfrfXCOzU1Nfaw5Gcds1ACB1g7kIjRMO%2BlefBBJYJqvVA%2FwqGFyZtfBBW%2FqbQjnITZd6QzXa%2FQp0Orsc3xBp8IqkG%2F5CanJz8Spj2e4tX%2FHeCZGqRXEvoGbYQKO4iSXV28Gkw0dXLSo573qvdhitiUKLbapBKqgf&X-Amz-Signature=934b2597558a071f0cbce519a58d6d3507685caaeeb642bc06b1fc4f42f94cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
