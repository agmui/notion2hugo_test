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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCLTQML%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAUdzCcDDzmJWu2%2BTma%2Fd%2FqG9w6d54M48sFzIVBprc9cAiEA0d8nxrnNtJ%2BPpN944fNLEJO88wYjl5WWxntz4yeN%2B3Eq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDgIANa4S9Zzb9PFZCrcA5I3kMfFr6G0NKPwhmP0JJCC4%2BCjj3JqkFou22Orp2YZC6QvbPYMh%2BjQwEjJHxUqiKfUdFZdSvtiZb75ZzpOqznuo60cg9G0sHyzu4CS8aJm6Qt7zjO0Y%2BiRlNUEl%2FY52SCLEBfOOtyg%2Fs4zIiys9iSbN0koQZr7FGIVZgrWmOcpZGd9kmlU7taF6znMdgi%2FqqXMF9MM3Qkd3uaMcpI4DDuwwMdCa%2BQC7R3ferMUH1BMwa88vP0m4wF25w%2F1E26sLm4qBRulrxTIPqRivtLsSm1jx6PoHs7T7HITtWa9ovJ1zrjY3smfpOfIjmVojqPx9BDfIE27rHOUmvQ2PdRGXkj91MRpaxlt77jm6aLAfKMZjWfWILLQp%2F44C8MaAbewPOF2BxLSe3%2BpEsS2bU1BtvmOy4fBheFf7HXBlHIs3xHJs4AGq65p27rn1u9dm5DBiTXezQoUAAr1iSquOOOegBV%2BSOKUigTvaQAYFwWQRyy1Px25mSJ%2FqDQVcKvpiEEiaG0V0IYIVuuu9Z7bUza4dYujjjO6v9uejHEffKG8bF5yhPtB0TohqFstgVB4Tse17Y6pgT7swjRkbBs6l0%2BA7CfkM5LhDzLzuiy6X5LPx85C0HVgsJC0CgdhLa5pMMHMycEGOqUBLEEBM4%2FcKdrtCSsJRuOZDhQnTZ8hrO5kARpYOdJxMBCmuuVwPVxM2MbC%2FbI3Ej1caIo3QJDTyBFEkGx21UBzTLje%2FeCCNF6FH8LSBvvMGdOCn%2BXzxBkBx3fODxce%2FmSfRQlQ2RHJuTlehFP%2BxBFcij6tY9MckpGnL5NapOz3j0VdDbu4uC7fQHWPCop24c28j4haEk94rUl1RNh%2FUmCr3i7n8OvK&X-Amz-Signature=aeabf2eb63645b8f94b9d518e1a986c02e13c856916a8bd3c3e36c330d989a20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGCS5K2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJjVEV5bBshaJVgKTNM4o%2F0h%2BVSWbbKmwUezyv5OKgrAIgIMPyCbh4i5WXCTMkFFHiCxzqWnHzvKwKyY5uSXGGv%2BIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAw4ZT%2BPOd7Q1q6jNCrcA5YYskU6urxJFybhkobRDUEkiEZpsRmGLE3xTn6NGFOuhOklePhvYcCunX%2BQrg3Jw%2Fs4k5DQ2zkEZp5KMJlLzzlhrpgeJbiI5G7uYdxXdxLcisorYT7us7m4vVbVnw3wY83Qv7qhlnctslMKRbQ%2ByEUxgM6S%2Bp4CE1GBGUnjw9Zr%2BDRxXOX9ZLWB%2FpH1N%2BuPPWrSAIWNETe8s7oGRNRuJgxpin%2B3S%2BzsiPwF9SYwGLHes2FV2QHYYmj4iexDf0DuhbUL9tYPSOOMpx6%2BJOLZ2x0fq%2FQkRuGEuaC5GGEyRXUbF9Ee9aahnmH0yc4w%2Fv7BNYY8i%2BmyKQ8kUZXYcgNUynUNFw2IiRJskx3l0pboqkuvigBwzz%2FneIbJ2lS9acetWzq4doXirmJKo0bRUfBlDksZb1pT5Jc3q2p1K5cR2KVPs36ptzUu9dJUQB3uHFjLC9KecddVp%2FASS7zciktq40Bq9v9yggBNS1xebrT6Qeo3sJ97B46hQ2CIy4AFlU4stECzgvlI7Y7AwpvOzsd2M7ZRALrLd7yO0aputhDptm8dmyYThFGsZWbbi%2B9Lyx%2B8u8nEiIuSa0DqPpzvRUhMgRo5RvItQ0vvSH9Cuw8XG7yhZy%2FAgINHK5fQhD1qMJPMycEGOqUBwP%2BwMdUbHnGlsNRrIJbDr4ScCS%2Fhc1xTvRoseAgQTXp0HqSlYKP9NKW3kb8MkFAAihZlUtYrahXzVeoiqOm5BalxLTsmAJ6nSc%2BcXAqUHQMNv3wplDEjuyptKyYsLU6yDBXtIl02n3OiKCc0XRYE6zb3mBLEBd3JxKMYrP02L1mSkA6J1nx3UGVU70u79Z3wgIf0A4eIekimZ0y%2F9c7HsF882Ahc&X-Amz-Signature=25e5b280089ebb6c0c1d61e9540934f7c90782af170c668bace898f4486ba4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
