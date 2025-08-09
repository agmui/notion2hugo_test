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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUUHU4Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGiaNCI77GpBrSihnaoMpdEB2Delz9FBcwekUAjTQp4pAiEA%2FuzWu%2F02VqayNHCM3uaPH61cei9DIFgXXLvzcSkcn1EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHsluI2cME3Hw1xPSrcA9CDhX4O%2BJjSk2inL%2BLfpuVOBiM91K6l5HZeHZzY%2FakpvH5P5foToke4UuzXXj1TveAC14MDNQAWSTvhX2T4b%2FLExgjTPBl55FG83AuA7OrdRmpC3sEQony8bzZmxibUSv7V7Om027tYC49CRzytecz32rQWN0up%2F3SVXHQZe38VDrN41moEYZI5g489y02o3nL2WADBwfEgdQrJu8M%2Bb8xsgOKciLjVnN3nEkHil1TAV6PEVzez0zQ0fGkMg4PL%2B0SNVwYuqy7733sYdNEAxqy1NyjQQ5ptDImYTRXGstUB7tKmnSsESTMplY8Fgxjheruj9T6znJskbxrj6GZQ%2FJHxMDepLWSwe5JlksS4NhgZ8D95s%2F0TToJvArLyssd%2FgyT4PZ3gjsyVv802HMhai9xAsBlePLZjJjKvpkrI7hiwnw4MSATjXDanSM2Ye5KbsDCV18%2FQb0%2F%2BWqmx%2FfvoG7mXrSVOxK%2BPlHbZpa85OhRKlpFLxIsbQuAERq5tZ9rr0KmvSkjBXxLAUnR0qL9aZJjjewAeQQPkMDtUd50uZdNMDia8vrTld5Gbqzm2UpYI%2FQZaABGD8ikhSg8mb1l09Gs845U4t9CZ94XCM6s8ZhWFZqn%2FRY2hQJuFse1jMP2f28QGOqUBS6pN2bIm7ccOAgC9T5iTismfIrsq21tHrKZ%2Bz1EA%2Fo%2FpyOfffjwwc4jvm%2F6lp536Aei5ggXHuhQuwJe4CafvUvkdu0%2B1qgafK6L0g3jThDzIOCGUAPQoq3LsM%2F5U1zTJk8vvpTdU04kvMHJm4tb0eWQeE0cLAwWcxAI1j6BIQv%2FnOPdCDxbzGjwLNlpY3ak0dMDjk96%2BeDRxJOBeYvkUvSNq531A&X-Amz-Signature=0f3443f0e96abf37913a3808a93fdf5afed2f18ec0af92e67e7c65a8bf0bfc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCQ63NOP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHhaBx4kpgR%2B9wFSa4y1n%2F6VoVWDO%2BGv4w89kFEj%2FR5KAiAKazVUq9S6L0JWrZCmAF4V72XCGBuhYDYmotxp4fUBdSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqgS1Ys3StuFcVydqKtwDvsUjO7TlTx7onQj%2F%2B0kDMfdD2%2FXo7ib6cvmvmKeVvRhbhNiCOxz%2BLIM48wLfT3OgHJXJ9f2vi3U4qE4mbxdm%2FL6etQqgSnoq8cc%2Bveg7oCNpo%2FR%2FvuTkhAVFP0R8WVh5r3aRx%2BC98J2eWQ5TKZgiLbiovprejq3AIHkyUzC06%2FW%2BkK0iqRtY3UaO%2BClUSUtw%2FRzumAAMCuKN6%2FBFgpZGBAn2BXjpKpLbDv0uFlg%2BFPnca5nursfpa167QBPEFaMruPIGULGDKhE2Xa9SF0bvdPiOBz3Um%2BfpuNUifP0n05K4e7mX0C7mUT%2B9n90s6WIKlCKYbUTxP6x%2Bwx%2FXb9wF69Sy%2BIzW8yS%2BvuL9%2FI47HgtECqrXUFb3moF3tSDTT%2BVO2YM%2Bb4%2F6pbiedTWBfAiWPmEvwuEBQK5EKleHDJkYyJq6drMOBegL6uvyVsDQU7bcwiDLVauIXtGv6cgv7JwYUGZZRYl8ZdQ%2FEeolQJx1ucAGr9asJcUHS3eQZ2GQcztOuwfb6e%2B9uEHvVxAdf7wY%2BXBtKYo4wEUxLsx0IlU06g0Zy6f0u8YMKhTKre%2FACjBW6n57U2nTY6JZqPVokHCI6kpELcgSLY17e4wabEj7extoq2kDYGv1IMTDAzgwx6DbxAY6pgHplsnzvlL%2B21a5DB9fHelwX06lGtZIwEcKFdvebTJE0r85P8TqFI6DpHaNho08ko9AnCacJiBOWFlafqzEvKK018oEPQWN9CMiNFxH%2B2mJhdmSlOS9RpF22ixtQBAk7Eo9%2B9Kpd6owAsYSAhH7YR6pITP64iys1FiYEifaBn55Qnk9s%2FWPnamiyytT3FApV1tI8q4QXnCzJeyTxtBWyKB9%2BpVNnOiM&X-Amz-Signature=6aba61be60c95d7ae05678badf0f570a292d9695c8f7b0eef8bcc5a015a4c874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
