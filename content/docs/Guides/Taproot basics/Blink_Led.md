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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT32THP2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICwVEu43zNUU9DN%2BfzF1jAK0Yi29vgGinmJKpVsz9ZZGAiACHK9LbLMQtxIPVLHxd%2FyhDLDh%2B4GkiwbK74AX8EzYkSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMWYCAu8%2Bv%2Bj%2FPZxXQKtwD1WCr8ieu6R%2F26hGH80L%2BSlxUqgbLehgcBedh76FzNR77YYDMR8B4LbWiIe%2BIiRyD%2BMeQ75vZO0sifALqIAdB1TRuYQGmrELTJUs2sJTzMdXNpxhBDTFJp0ci2qiIpCzeo%2BHZSiWrX%2FiEOaZIsq1%2FGpBg2gxehvcLlS4%2FPsy9748F6sZ%2BONbMesEhwHMPpATlOIBaVv1H5bcrrnd8PRsyteS%2BJxQlujPT7dgqhP6iqVIANXLpafKtPAVceUNG9q0xCmSoNk815TXlJMeBfrnSjy2qRAqVNYHfQWvg4%2FbrC1G%2BhKrOllo2nI6p0Bev6zO3rdfY9EpLDtRzF4PhxP1XmZFcXLRbwxYTGXWJiion3W2sy5O9%2BiW07av844se%2Ba55SX33IieiI9O0Wz1Ri6dq6CV1CbHVv%2Fjk2l5CmtZ4fmEKvxnQf4Yd7mg6mvu%2FXGW6sq4OatVwfeQaZ4NQDCYvWlDCGrSFD4KsWsE4Gj5UmTUU4SQ9Jw98WFuAToEiwkMf7tcy9FjmCCitRCVzTa9bgoT5K1eb3H6AfugNZEh0DGyMQG3VRkCxHP5XFLoUIPNoCrvtQK%2Fj55byDfWyhwMBj43JxX5dR80Z1KQS4z8YUtviWIRUphCtFp1HPDowwLnKwQY6pgGQkSKCt1%2BnzqElEPsHNrbseBsr7pQf3WJGDpw2%2BA%2FSnppYQcHyxI37oCKBaHhCHXUbSJaUZywq811dN0brSJ5GXC2to0r%2FSZ31guCxNKJRnLVIFTP4eFikEmUH03AplSpI0gs18HeTgw7%2BqaF6bmTXZAs2xUyGeqAzNa73wM5XlOvvw2KiG1ctnq%2BOKcDKKr7fI1Qpe7usIPyi2kC68sCSV4t9VIAO&X-Amz-Signature=8aae9d896951d9e81ed0a8dd841608ef065b160af0bf54262d6aed77ade39733&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CTZMDO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDOzG91rGzkT9tN0N8zWXb5mmn3MkT6LGT8mz8yfSMjGwIhAO6wcpSeh%2FiY4TU0kp3a6GDNYOyB%2FqCwLa6eKwd16sC3Kv8DCCYQABoMNjM3NDIzMTgzODA1IgzpOXso9F8CKh%2Ba8%2BMq3ANqBLRHE4KVfwmZFY%2BHE2G0vf53vwxzSCMi8stMzjKTlK7g8rt0Evfuj6HRVc5vEoPukUiHRhBufa7%2BBx9lkPxDTX6WnNJn2QSnd8t9mee6ZlbuVoNTmwJQNMOhrlE%2BR3M90Q3dTIJaovhVhH1wp1tXcBsAj8VrQlSF7TaH%2BO0diAu%2FOrqp%2BqlRqZAePEeaXIG7Pz%2BmCEhP3CuEBphjSb16%2FEXo8520kcDXWoSOgRad%2F4Uo1qnpRlYuvOK4PbA7afWEyGJihb4%2B%2BVjyyfSlKXemFXIlCwKfID1dKmMzdBonOx7EDQ%2Bdap%2FpWQGPuk5frCayLrLVouuppfpbnTBBb7%2Fsty5rfXStUnS5fm6mEiBwASYMjtJxQto5XQJCpAAGa7Qmce5O5DQDYrihEBGKk0zsMOjU5XDS%2F9xNuxAqNlaapj9Zcfg6DejuEcBT8QCQPz32MSdQN0qAW9oddJjjllQ2sH0XyWFQxVukDgLcYW8ala2QIaFevRjE%2BAgOpD6WsR5OO3uDcm1Mx%2FpiWpT6SpoRRSYO9%2BHjjYQbb%2BlPhhesDDiMvRznheGsQlnDc9z2Zz0XG6sXXkH6UJwPQZMPXXnCME4hstBC6AZ0Q%2Bw0Cr%2BxHmdJ0wxHi1VRFvrM3DD0uMrBBjqkAU4RLaNKrFugCBNeUkTKv2%2FSoOwSfOqBp%2FaVgNkOXJiKDdu%2F0E8gSh5crLccVNTSdTkWYDMDoF8AJXRCF6RPr0F6vEJ7GOwi9iaFIDjElmBQD1ILhStwU9O7CEZkhoH%2FSOo5fUqv3sDG3D2cCHfF5e3SYhRUNnly6Ta%2FKlvacR0jgGo412eKrBqJAh0GXi4K2BTXjgYM2JVBoB10agtQrS%2BrGkR%2F&X-Amz-Signature=5374add92ff89e4de20179e01263fe3e9920e9018f337af4b2ec91f7309b8443&X-Amz-SignedHeaders=host&x-id=GetObject)

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
