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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVBLIQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nESfDWD5MeXfvRUHJqCBYh3RJkYVEtblsEWrCqupMAiBhx80Dr83Mfn0Dk4vCdMD%2Fw7tmkYYlqgcFSOUHsubzHSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXENc4R2sSOr2frYpKtwDcmE1Z1NKgZY7SZq3XNYn3d7nRixPuV3YxLSXVAcSBnkUIH7ZpvMrhpgtzIOxCFMPoEBKrnAmfrPExDrF0IICXbmdwbJhg6EPHBt%2BpfaXCQGPaVSDJVKpyYUr8HRuOZA%2B7SKfpFXiiqbwH6S8MK1MNBoDzXgRmSmWXL6%2BBg54ONemlMZwjOjWJZ6GzY4KTVkiAVS%2FgTs%2BJZYO65dLCnhBzw3S499EBebFhTLBTBtfh2A1r9F%2FnFPwzuTx1mBH82EXLpstgFAGsryK3MNZ4Rgl0wmM2kqsBvdHz8lfi8TwTg67uVzUMaY51AFj67NYKIqRy4mpOVfLxFEizgYlQ%2Fc4vGJun%2F%2F9tCiZquij%2BHCsQZvySQELjIDzIKXL%2BYhnUhfBniMkQJ4eHGFjVaF8lXzImrfhP6M6eWLWa5LgNSgOKeVZxdx9A9ZYfQDTGfwqWel86rnSfGG5ybBU4X0zr8usxHUuddcW75fWvSdOxsg59%2FiAIrHt1556YRVrR3M%2BKHUD4QfBNbTRcyME0%2Blfemt3O%2Fwsf915vUO%2FmRjl3d7kzRs4OhfKSxXt%2BMAw%2FzuIiBVJSfjpZmRo%2F8E7HdtEkE4RBQh9%2FYABC78dPflOE0oNDtM27n8LZQC9VlKofMowhJGyxAY6pgGGd6nEqGe2AxspyKfYw%2BBdtk%2BzfywwlT96kZEemEN%2BDRBIEAA9CsMX2OtiVJxD7UcIczgRFz9ZTtoMVkKcBjKz7EhpmkEDyalPKU1josD1tzj98T77Z2Ef3y8SsuUp01X0xqtBp4yg8CdIRNiozVlo6X%2F7sT83c3hmVmQ1XrMf80%2ByByzRKuA%2BlxR1DuGnqE%2F3DZHjmb6TPdi8mWGXMqLFIkbe%2FxOj&X-Amz-Signature=85dd2040cc53fea5a49e23ac171edaacc54b4d9e821f73ed97f14a558d8dcdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653PHXYBA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6t%2FJy2BvspSWSWkyeWbt7F9Uplmsza5jHckRJ0DO5HAiA0ZzPXeSYJ3ox6ab2e2958xywbyj%2BiEmFsdGLMcHRZnCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2FXa9M9Gjl5J5lpvKtwDUMAxKomkTVTofTGinYApjK%2FRyjROmegDn8GLnUL3%2BH2S0KZ0rPlcHYznhoL4v%2F%2BJbzBqRFLl0rScoroy6gMGuBsRPaWtinKRnzFRYNU1Vj1%2B4sjjopXI1KyVpAoxsQBSmOzeNj6jIqgdcR0zkPiccvNssIVmIcdtBs3JXoUz401iGviqfvO6CChlXfax8zfaM%2BlHjOUJeYIxNOL9S%2FRemh2%2Fnct15eb6QBhiOsdq33HQWOZKwOoDEd3fDCpYIF2%2BilkmaadDsdPYfcQ%2BSUIas%2BIuoiHf%2BKKRswbCer3AaUBymOA6rIiNI8uBqsG54un4GUpHtd8pje5GcKD%2B5TbvALxVajwKMOw7rSh%2F9n9EdMJDUrvjBcdkdVh10MoIms6yjZxm4FwuP%2FKWeJrn1pW6q0GLZL%2BXIiDPFnYeZXdL0ogQGsA%2BN8jfDCJkA8nMbNSL%2BjMEolR5L4MuIQ1Du8X%2FLZdSODLLwgOvVj7w6atgVMh5ZTx2HoIwLPTboROMhpLqisykQcCnauK%2BAA8gdvIEqTaqDekynuVRtBQDa%2FQOqD0dgJZlaebqI4iQV41oD7qDt2UI3HDnuzpFxzdHmfzvN1lh29YkJIq9z%2FCJ6Ct6TWiQOgbyP9nVOv8uO5cwhZKyxAY6pgG4sJKL7oMRepGMOjuWRx3UEyECQdFskSAn0AHrnxukyL5qeMlKAMHoj5jfuo9QDb3VmaB8WFtn2blM8yeo0TErL50eJzVL%2BeDqsjJADgnsdzh4DJrhJ00GxMKlzkE1oSQvgBba4EDpf5gJRBBirHfOQJNw6q3LqkNwj%2Fni%2BUx6qrmniaD76ijDOr%2BxKxyxxBUo2ax6pS3%2F6WSuKAZGfK0pcUDGlEug&X-Amz-Signature=7c57c9c576181c1c9d5937cdbbeaa02a26e8549037a376243fc5e56859fe5654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
