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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSWYLLB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH50MmNpDWa9%2BU5r9OnKLXsxg2RAcrgpV0CrUZmo%2FJSeAiAhqJaPeTHjlKgtWFrMHNMuunF54j3QCFXzBOcSzhI10Sr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMYgevw24AHlfMFnYnKtwDipTVfyz0b1HNrasCD3AhuVuSWnXQrYPsD8NcXYKfG0vBeh0j%2FayKT4VbOT%2BMmkS7kvfRagYlX94Y5iDosgDLqUtI64AerdFQINddEVgC%2FKyDXcNVuIhod8F06JrW2tiD%2FNGsXusKLQqgV5QGQHWAGolOpfFKp8CuMVk%2F4g5cxii4I277nQw3aEYy6ywxEQ%2FMIoe9wo9Jjj%2BnZnX89r7lXe2EQ%2BO6UuVefoMrOw2MZtDUP93myOuRUDvD4p3NStE4xLBIRLUvh6%2B%2FwXBYaNH78HcZX3z8w3bLCuVGK%2FMZY%2FQfJ4lIBlFxioTqI6BglMtG4ocx1LDggAuyLuwGzD9E2aS%2BK3dkme%2F8mcsX638UuuYNc8P2Jnfst%2BASw4PcXybld72fNIwZ93Gmib5YqeKmZ22WWEb%2B1X0h8TuctXNCzHxPCPPlACVtEEAjFMGyOqpQ5HftHlooubLIqu%2FqV9eAFXngvpoA%2B1i9r0xxIg24YaX26AFnhrO9kS4Ek7poa0ElDpsKU1htDZutdDZKV2NWarEysEjKhMnbEhvnoHFj39pkVlu16TCBEZrXKaJKy%2BgmNtqTgxE1ulWdG0jzcLCgWuwnsJNIPWMfTKlStXGouJlz%2BxVxmd1GYYG8KH0wk4aSwQY6pgG%2B%2FyhikOoAvPJ44DL8dkTo2FHgvOiF3mK%2FKCag4ydfpst1nTimYu8UAHAB%2FAy9SbmH4X3JIW23Jh43ugTifjHQSgkkvWRhOgpDsu%2FkfEtqgNJNp%2BCVD5GoWDR0%2FptIGLzhuvubMrwYkEn4nx5EkeCtJwRjvsbTwTf0jomlrl1t%2B99cBf6jq6oAVyxB1cw7TABP0LaURLTxQ0HqAY8uh0jVhIr7lgl6&X-Amz-Signature=0f79bf5983819bd6492808997444dfa938c2af54b2d8491e0de13c4fc4820c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BL2ZAAV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCY%2FQsLcEJopb5z%2FwetOvd2VYZ2DGZuBUUECa0Uj63MdwIhAKBonvpJUYrPiMpk93Do2cmu8BUb64Qf%2FNFlmRAEWfqKKv8DCBUQABoMNjM3NDIzMTgzODA1IgyxIIodeCfx6HYTqBsq3ANDWWTWVgxn67BHcN%2FRfZ3XKHjfS98K9bU9exBBwohdeDoNLZkZHW%2FLMcYy%2F%2BmO7Z0h35ZdBEh02YZpEu%2BH1XqBszFsiHAjK%2BKXluuBWYN9oaj5vIoY5enhVSG80AMdd%2Blo7Q7HQcSIua%2FymH70YI5axhf60bDiGODOXgNNVe2%2By0%2FygCSNVsv45cfbOttns1JaiCu7bpCEGF0EGJp%2BFEn8Rv7Jk6qcvUkJH1oc62owueSFoMTU1S5Y1taYYNmME1w4CH%2FHn7JsGt%2B4cOd5M7MhYKO6KF%2FIgDjoOCi35FJc0XdmCWAMTJ5N%2B68WiRIe1xEWI8%2BwdT2yi%2Bkop3DH4hKDH%2F28M%2BEfUnEQppzMkl6mr9m6mRcbw7JyJKL2kez27fsSO%2BvMn6XPmvJUKSLJoUTtCDNpwn%2BkSFqGx9E%2FMK29KIh0LV%2BdBqaSs8SyPcg8eETeTnP5aOngiKD73l1isuxSkhYw90eID1108pvio2axMkwPPjfccAZDNVQCLTDjg8MzfmEudTvJzbaxIF7yNoTxlWzZ76WdKDudCM20xkedIrx2cTvALtOgJ%2FiC8Z0GrDjkf7p3xIhv7ol%2F0eGjaEZAp1ZHOavp%2F925c3T%2BdnTZase59rNV%2BnHCH9KeyDCFh5LBBjqkAdnixhzzwL70QS1f7l81wQRlwrq2%2FReUbvlJIMepePMtgdztlJ%2B9x70jwofP9lE9rmcDUAtwPVRn%2Be10pVRDcOxGTIa0Q9kGm%2FQ%2FAtAOU0MArPbFAPprtu9bzsK5emjapIrezSKpxb%2F2MObHeDNXBjEAkvu9wDkDlkXQ7crm3PwqvQNp34v9XvmjZsxKWvnmU7g85YEgy%2BGGDfjCPkOyJOg9bWpj&X-Amz-Signature=0041845e50b2ec3694003537be5951a5fdef56b437158a295e6a9f65dd894fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
