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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBR7YWZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBwAoxRhsdbJtZZbyqaHXtRX1EWbWVgzAQkunUMo8f3tAiEAyYEoMq9YkhmHWfC%2FsJz9JYHOrcmGPsjkPLkHIAkbX8gqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsTNC04QTsxgAYHayrcA9AtZUUWkX3uU7iCwUL2Wun3cEv0RA8gmtTvB%2FvRasEgpiMDU8eqJRvIC539PW6yOmkeB417UMfhAYZOgeQXabhEmATmDdSU6JSHqZvhZzebYIjTNOYyxbISWYBTdNtmYS8kR4KNRkQEuHjdBrUCMkkTthdLfdDCIAoN8jXNL%2FrFKGTvkbyXcpVxjkElTzAf2mH%2FR8bbA2rH0jdwe7Pa3rxHNaC8JVXaI76YzZXQSpLT%2BSA3sHz45pp9sgGPkX0tUSMGfbkGYBc43f6yyqJPAtnbko1teHGEYJf%2FJYyfO%2FUE8VSa47MMuCI2MDf1AZhILJDr4BOC0IMJ%2Bx9w53lLFmKpbYbiUazoHgW83fn%2FROWKSD0mNGI469gJhPXqdlut4r4Li6NB5ihHrEcv3Dv9kcDDHjQNiIzdpyROt6yBeaQs8Rqz2PKPak0tiiAd8uPu1T8CkNEHQyu7UNgej42I8cohvzsfvmgi9%2BV8OQ8ZIJjqzQI0MpAn%2Fm1GsK6dlakOSR4m1UQDh4sDN1%2FExsvtf8xzn21CxIh23gZZKZDaP9gBnzIqmYnVviytdxLTx5NlecNfBNSV3qfBOcKnMOh6dXWuBH%2FyRm7DMj49vBHQ7t%2FpcWCi3M6rLjULdeDTMI%2FU378GOqUB0PGex93TinbgjTKIeUogdpIHAa9W6hPRyTRdW%2FipuglrpmkqD3gzSNbkBcfHUaPWDnTjd9ll1NiWKd6IYsrhWW1FICv0lAqNJzKBxuhUuJLnM4qS1v09HMs7Mx3S3eLOnp3MFdCoTRuQ8DMspI1RsLOv8LewiraLP4BA%2FcszrfzRNPsUImOV1PaNj2ojxfrQurmRFM%2FK8CEneoFOfS528PMhXnga&X-Amz-Signature=f6fa07f88aa1c29b8d271ab8210dcbcfce7f2bea6aa6c5a51e236931fdf183bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J5USBTX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBZCszTDpQe7v%2F48ExFUeW0TG1FNy8m9J3%2FmkwTRUl%2FpAiEAjCNqsEWDs0zyWPG9GCkN55ADn2GCzazivSQU0XnKWy4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTO2fohtITRDyUaCyrcA8TXSWgTza6WGh84yr46b%2FI3OQgWieQtVjaSJbYZO%2BaSeExWN5krgU76H566PCFPy%2BuwMtIOUphJQkEeXXpCEBfevKXpleGBilNaTHEL01%2FXxSEUNDC43xMkcbRen4gNVuarb%2FYIKm0KSBLnYKYRV6B%2Fb4do87j18fVyuK5JLLYrUDL53P1lkGn9dK9lVYH%2FfvICXI901Srbz9C5kdDduAOKp2I0AUMkrA95Ok1XQY5w%2FbUZC0YWCtnPJK87P1pyWmjF1W5Mc25EngjMpKVCJiOcNd1%2FxZLjCuYtjTQ6i8VCmvgTn4KWHpYdV4YqGqyaZl%2FMDo7ZUK4TD83V1cLHnAcyNvZDcMU6strSdw%2BAz3br%2BcK%2BcvobsLIpbMGSblFVsfa2fB35DqTjZoVMjST4Pva7sfSt9rTXWBVxHp75tSZ96hN3h6NoKcgvFco46SNezBL9qysm%2BYINqX%2BYjtBnuqo%2Fa2Gtz0wwlz6Ku4yhUDnpKri46PyOpZ5iLcP29c5tjWdEwmlYuQBWffCTYVI4inrDFZi0OTxnTAwBsqEYNHWVZ%2FlUynyvqUn95HDncxMbD%2FikmBOfaOGP0agbh8XSdU5899LVLdDIWqCKPTcX%2FMqP2DMQS02zSaSxa3sgMJrU378GOqUBooXlaFFMz1nRsWJo0fjOiEBhpBiqpCVRsrJsY2qGS3vwEB0fUCFGDvLi5DIbW03RhPb4s8UxRuyb%2F82Ps39%2BNaQQw4z4GlNyyCHKTYcQocceC3cBCcC5pHwNGTLdsZHVIJmBkPauMCT%2BAfyKTsEeXOfq4aiPqVOBlUM%2BvlKTalPusQGHQF0OAQVLBwsqxCUvd4niT1qxaNDN21nTO%2B8MDOqa2UNb&X-Amz-Signature=d82a3ae8ac0ac346b951b1b0bde92e208c4f308fbe65d7be6f6b194d8b15c81c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
