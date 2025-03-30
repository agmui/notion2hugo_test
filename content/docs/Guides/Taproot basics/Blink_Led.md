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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPPIAFT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDeGQ9Bf%2FKd1s81vNx25hrRpzJ66CfNnFjuqPJDmjP7kQIhAP1cqgGdJpCCVG%2BADPqZNSxbBYMFZRVoVBA6HIWMwyZzKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzef%2FOfDiwhTPiBv%2Bsq3APZ6b0aAOPzvjrveRltoJ0z7UgzEFfDBHLQAUYI13vy6N8vsUw8fCgOxUA%2FzxOOp%2BjkLfO9ZSXPii%2B6VzABp%2FgsloZ8noIqJ6SaCyU7Tj8uEpgYtkgSkYIl%2F%2F4dGrnO%2BGZzi%2Bu%2BT%2FaNWF0jaUkS4OThs6RHAxf0Jk1WnRlq%2B1DGAxxThk2rVh60g14iCkfXNwBkEeIjE6eLkxCOcxSDaxVLIIEjmpTDLXzFnyqZwe1NOcmxsOLCKXuB6p3eXp097CphOV%2FY0LJQS%2FmArRCQ9l315r%2FhVETEHyqU7wP1K%2BR5oPzCGDMSh215klzzhde8PH0OJRjG6dU24u85Rng9lIH1QSFd8cmBEF71p3NDi7bv63myOhXS0kuHd%2FFW9cQwVcVNCAdLaAcyqy10%2BxaoBZU6syB94AA0%2BgLgUgRkJ5QJWzVCNmMlaYooy88OJY5H7SgYRDVOF72fAJA%2FgPI03WkGsChLz%2B%2FsyCwcTBgLzEmlsSLQSoh8tpB%2BxyQwpaYJtgJotY%2B%2BAp9oQgeO28FY%2BWRaGzmgmVuwHk8nf0EQmY1a881mcQ35NdwmRbEskjVsU3rj68iidvrb10gwugPERzpk7f3nQg1xXQFI5Bsa7SAg1XYYL%2F4vt9XMF5N60zDep6W%2FBjqkAQ0sJfr81CkoFFLrGwjQstQHpL6H%2FUNE5Kx1WOkDDABmBdzA%2FG1v562QQnStSKtufP5dye3DGUypZnRUE7PdMyCEN%2Ba0jjBPNRDYXrl4Wr3XitKUO7EYMNPE43FEWlXRkXAZOJufiyfjNeCOm0Dch05MaU7n%2Fo%2Fq%2BfyjGROscLTgGQoPmpzFbMXzmMHWsNtfpuyvkJ1vwnOouV6ypfyclC%2Fc%2BrgM&X-Amz-Signature=a4bb9c675342df80b3952430105e71a047a84968d11817bdd05fbf1c42952690&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADRAZCA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHszBssl2zp%2FmhcUKZec9GQsdCWJxghafy1nHdL2K20MAiEA7ZMrhgDYK9xGrzxS2%2FcAUaMLMUKYYegTQ8GciUKqgvwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpk0liy6M5FZ4rRoyrcA6eRD66tedE2kPcVPHB88PwipOLwk1VX%2BYONoRLZUl9H%2B5PGNpeqWvnl3k6Bi7KTIcDEDFaAt2FzJ0jQ87%2BDTx1DMoZdPQA4cUs81w%2BGwYOJnQ1mL8f%2BzO0kT6a3HCm3NCiWW3wMaOAW2f8UIo5mva0wDi5rihKy453lt%2FdItkML5T28a8IWOflCi2wrEfd5HutiBeQnpLRp%2F0FsdC8sJsyDxBWM4DITmnTQf7TbZhbOnlW3vtWxEa4B7Qu7mOlVUb9GJoJBZjuN3WjOXltWpAl3sjtbOTa4FW5JU3ZYIBPr%2B7%2FNaKVncSdBp4YZp6i6xHx1agm4YDQPl8bLp59hrnPAUoCpuvnb0KeZizIputnHPhIb3YiDlZvOu%2BYyKSykjSocziLLzPT3%2BM2mVXrwtBpI8y%2BSLuPDD43MO8alCIdVGElqLaWxn%2BTLLScIBY6Pw858zI0MAiHYFpe1DTW4Q1c0daN4lWjdDlUuh00UM8O7bWwpslrSSeYxN8HjeRoslgijvQQZu0FDF4R9K4YAZXtLPf4y6qfs3am3wkLl8TZJ%2Bqr%2FPh6uccsbHoEjKDKFhI%2Bi2wr5e%2BixDdlmReLvOTs0aF0CUd4WayzgsCMAbbm2lIJyLPd2q1OEPGjPMM%2Bnpb8GOqUBpIujfdjllbQONuDW1%2BNGrmmdbchIoUQr2D9qB3Zc05jMNHcnuL8%2FKtgnJEGDXncktpslUY73eyJ6r957Je%2BWlWwfE9SPNOVObLZWVC3Zlh2qbmJyI7jcCaE%2B8Gz6DxlbTjpqlwK26UsOw1zKuhVoPpL4oacSsAx8RxZlKVVGoKCbBrNiYQHvhQ6ysh%2FRo%2FPLYMjVYTXq5ZBJUU1LMQ5KeFbNecX3&X-Amz-Signature=4aac9b1fb59a053037d08be156645dcb8b21086073625676a1f68fa785e9f9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
