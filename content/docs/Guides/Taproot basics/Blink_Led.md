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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233IFTPI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIECSvqaHW5%2FLYnnRqLoLJSM5dE1v15WuaJJYpqM9pW%2FDAiAEfSMW6FINrIVpYw3D1TchyXLFvhbzdMpDqT6FrKCH5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGyqA%2FH9kOiN92rCKtwD7cp%2FTOjgn1wQVv5hnbssiQgMu6imWqwerUzfu5NoAWfk7JDfqAwMGypDBF4%2B%2Ftgsqn1SWZpDoUpBJrhrtb3ITf6zevcP6u3356AycXyo%2FJxhwFX2%2F3pZBywMCMvxwhQ3LmGePtmqg08nZUertQIwjMrNgFAgO7bffzGF6I6Wf3fGobKIypZ8Vf7tP3OCfTSECmPTxmIshbjPQCs2RHWC0gHzTq58ZouvZju43K5CsjCACQEiLa%2F2LAiwuykjdHvzqe5WlqS9VjVq9urTMdiORvb0%2BZWLMoYKzRdmOeJtrqVewpln1f7HLcKvZd1KeWLZBfr9ylAhsaeT%2Fw%2Fom6g0IaFnThR3zsLCXwSMYtOaZP5SeYOyXRXbAhju54wI9%2Bz1%2B0nQFTjvLy%2BXFF8nl4KpjAzJLECivY55M%2FAOItRqdNxqueCRlzQpTce%2BtawQQ3PGNpl0shTY%2FpokOccOppkf0uD3CFz4NY%2BRDz63G1djleNBJM6aZxIOVQC6KpPVvo%2B%2F%2BNHR%2F2clrrZU%2BxoLwmtUnnDJeawSdXzqIEh4Pz2rQfApUNBxC7brv0DjOU2ihsfp4dIVU6%2F8J64I9hNlBVc0QIMbbrjawX%2BW3OXiv8T6aDt%2FN63NBooxiuScsjkw9%2FudxAY6pgEESrWmRpHuFHlL5atzeDln9CoALWmF66HijLIao6O7rbpqIMMoOUzujeFBTT%2F7o18%2BzRxjBprr5uAdizyyt12%2F5Tjvb7OF5O7LmuJGOPpUmcULPpVcQ7u1z5TZ0qJzZNGIBkGtMrFoAtJ9cfdp2M5stuWSWpyGyyLh5kZBInC7pR35rfwF5CdO8XKygRmkmnrrmNUNSgEm7oY6fnIJbvX6FpwWW67X&X-Amz-Signature=54359ca6303b2bf3cb89c9a6923fb906edabd962c1addbe82214fcd54fc8892e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U54OR6X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH2Oh5vHAdSdZXoydeOyB0edfmFym11wcM7aRZP5mvoQAiByVElxw9nAR%2F6kirV5lSKsYODF%2FhgZRYI9zyfUWQ8iCiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd70S7oegj15y67npKtwDEy%2BbfKNeuWFeMsQAcUZlKR6iVWkv7HQ%2BNGUNsPr82QcLb75jeySoLl7jNQvvyZ2AzNppBHnOMasJhkrACEayQtraXHNl2WGiq4DGoFp2JDKwqn5Ku11xLrxD5trRf0oz%2BRq1Fdme7lEq6Kq76Ru83FBXo3t2IjUJ%2BuIRrbxhXI2k02WNueGFliWz6Txigwb4Zdkj0KakGEZzS2tl%2FsVCR2IdcCw%2FGyuh4apcjLmiEWpPRbQl355TfFEc4IPUV0Xl4t3bSn%2FyvhL653ityZuul7BF%2FEQ9kKM5731TWgCjBuG6QmfqQDRAA5j8JjqnQwesVN9qbwzrbHu4bSzJphK7qaYawfj8GfZXiWs%2BH6oqQphnRA9vn%2FCGMaIqthAQqX7AwMzCL8TkAtN1BrJnxmNH53c6FNnlJPdUaMDL7vMHvNKeWP8C%2BeW8QGhIY2ff3wcdQGy2SeH88yQ1906hqs3vh%2FIXzNEfoxFnCIlPVf2uPP9lzO0rlH2y3q%2Bg8xpo4edd3heAfrnsZRjtxGoTVQhxW4fkdjxcmJjN5%2BXrLN4f2OL%2BLS0%2FCz9IGTIBjZJYsJ0lSpUG2lbaOVXOai6cUal4UOABLnVwEMruhUr31foroLrSqYfjT8%2BI9jl4aQUwyfudxAY6pgFnJ3qSRjiqSkufrwqzpv2SmHBfdnBpyanYhWIxJaM3POZeHI25HCDdWQXR5zCsRH5nKdkPRjOIcaq3d9bF0%2BAjESZB2DuiCZPOkIExfLXko8Ay%2BJwfmjx6sb6KRd58AaeNTEmdhzb7ZBQf8zKPTT5dXfrOSo%2Fcrq1QTtyEcH4l8fxQSPROk6oLSGpf5eGETs0lbuQeG3ZKvEupLiwa43ln61cab6st&X-Amz-Signature=3dfeecc6af723c929e78115fd0ff38075c5e7340b186307cf051e4a3b3f6691a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
