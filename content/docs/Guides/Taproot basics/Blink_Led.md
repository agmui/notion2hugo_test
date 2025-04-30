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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZDEVF3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmIlUPhq9303XqsqM4a%2BQpPzY%2F3Xrj2j7ZNvj6J6LTTAIgSKMRfBg2Ci7c3Y1nO3bCAH4Wi3zfU2JivNd23nuZNdcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmZtsKHhOxlYWVH4yrcA0C8ny2Cn8FknsNVCGLw0j4pusKxavLEzYiI%2BAujOuzrdQcAH95TnXHPGXQbwr2ZyEmbTDaiHhgumJEYAWRVrd1l0xNkrmvF70wBS%2FkrSvk7jfHvecOqoUmXH5IYv7EDYqzaTaXRORgOPpolPcyPoc%2ByUaLp3UxUTiZWAZZsZeHB678p6TFJw57jPe9%2BO7K43sE9duU1mZCCfoxG9JD%2FwIGDtXrpGCTMnWBK54LRY92aC3MbmEkTpgaKDScN7qOBbxfBh2VRlBvW71v4tdnDNEsO6xoA7v%2BTSxeZ0DthnzdED5%2FZNcrpfDTcm35lJLNPcAV4rbDAJ%2BZMVPEYE1mm8368LuMP%2BxraQz4z4tzlZfJ01jrrUDyi%2BaTfQ0FZBFLyFo2o%2F3PDl6IFKoIVpAj9LljjtRACE%2FLF9xFFGD3qsdEOs%2FePcPRLVRFeOjMpcj9n%2Flav%2BZBc1OKRHWsYc0WX1gExZBEGI%2BU6X4aaqddGNcQmDpYjzLq25To%2B2VxCXe1R3Ew6th57EGV8kdBA13Yl4EkqtZFgNCewT72QdOTLVNZUsrjRvgdpvjz6h4TTNdRpYaoerLiTwFlQBruRHRMEd%2BB8AS%2F5%2BRLiY2wzK9%2BrZjDF2jpq9qHVRZLwiBorMMihxcAGOqUB4gXQTdSH6MYxfvK2HbsLgg9gQZkR9yLvAIbdMOjXUWKV0nTT89GbVsc3Sarb955XAJfO6RjydO3%2FI9s5TN0%2BJ3KejfETU%2FT5kBCacL3Smoe3mDyUU7hte79%2F%2BhKoA6mCgO82l0kOCUPW6%2BU3jjkLLbfPNWYQnG62ObNTsiHOobdTVMQ7ns2ldRzQJg9lRpv7mK1jjW4tz0dQkbQF7TqvSboMBPlG&X-Amz-Signature=9dddfe86bff525c2108107eab30dcffcd8ebc08014cee7ca8d5dd3d8dfa350bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFR4YZA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0423%2FGGSDvPN0Vj%2FweVb439DyoEgWX6Kbvuz%2FYk%2FlWAIhAOHLoSdsXKGt9n6kMATKLHM9dGSDC8uz0BhRHzw%2BPUoWKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo62M6kPPrKWF5eLcq3ANuVKxEXUEc6kTYUoDusLPsXqMBrCB0OjrI8wzrGOLQvJjJqtVL2QBUZYRF3PPpHq%2BdqVCEEe%2BP0jb9sB%2B671i547jWX%2Bg8qxm5kxzIdFznJf82iXkBL1ZeIq2rFOQdJjhYBt7thKEDyemrCk7Yh4mXYxPiS%2FU8dwYDH6QCaJHQlYB%2FjkDYynMOfPXis5nauY2DHwuL29gQr4f%2BFIeOSJIezk38na6%2BsNBxV9pOSAUn8A4i2uKKzPKtIm8XRclpgeJzyeuVhXsSn9A%2FbWltA0xTAF5G42bkVrhtKKFBXWsbBZ0Zhr%2BGfnheh0lTFDLnGJg3ZeQ77pU%2Bfo%2BC1oepXpIa%2F7RF98rltoVwPydGpdb26zgahZcZpa2o8x20A5PMBqUBFGoq1sTyRga9UW9riKF7vP1mBrDWysK4%2FgJh8SRYxxZg0DAVu8%2FuD00BOw1pzYFHSQzq1Jqir9KNvNhTjK9SzTUKcYd3zsK%2B9Aptw2JQ36d6%2Fut80RTFjyB4PBOg9PgxJV5xkXkWVadfqb%2BXOGYFdnOFwXByODYEGKJrsb2GquASqPpjA9qkiRtIAW6vmhyOwjXFBBUmK9WjCovmrmt7SKUS4jqxaG8BqbIh4uiDC5F5RHy9W%2BzfHD5nMTCwo8XABjqkASRRZHudKjjJ5K3A9eeAacfxxLMCd4pzZRu9%2F9KmjIpflNtKhkCQpa1uZnrRAV445vo3mE3pJe1UNBGvUpEqf7EiRgwMfZIOEPkctbfLhGWs1%2FwbI8HyIaJzqNjIDc9hePrP9jcDyUkbdo%2FQTnRCJN3IA3eYZoGrTMEaj4NiRELKHA0WWcnOfFXiqRPLKJIWHKPvubTHuQQCdei7hizOefcTIbD1&X-Amz-Signature=1dc5ad44e551b97388154e7d43aa2df465e9e6feecc6bbf04f04fbb490ee9f45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
