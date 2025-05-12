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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX6MAKXH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGE70v%2FnsA%2Bn%2BA4WbkE%2F2%2B9AGK%2B64LBcp4NbNW1HsfzVAiBtRX5t7ThayfKjqWiopMOxIfcofsF%2BPE5uNXWcW%2FoUryqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMulaRm1d0Kbk8LRjmKtwD9ttngK4okfCISFTimCCofSiXDkls%2Fu5aZ4eOPCFiLePKB3oVE6gOmsogeMV90QnDKc%2BrSr9nL1aBAaHwhLjvafIKThMexD4PVpTmyc8kf9YI2Rkng0%2FUIA4OxTuxzRvQxQIJO2vDZAhCnYaM4l6kI6t3FwWG5WN2dZUFTJuImqXniti9p6bYEnxc335zR2sIFTL3XNhc6880mYeSZHE%2FPfIaWGUjCgcQD%2BoeelElLhndkrApZ%2BT%2Fz9Sxl9x%2BY%2BNtA5Y%2BdqEhM4UK5lY3QE9Ak9IbDMQW36%2BVZr0LR2OYfzxAqiKDS2z6q0JDihvyOSAajDlSIJ5lMhsldJPC1KVqrTTZIsyw%2FVa9c1OXOgMD77eiJKGlOtrmsO4mHw9BsinekMiRI0imcqBKP29vaVfqpL1hCWzOza%2FZPnsKx1sxeco0y47TsSbbo9CbgsXQrg5q%2FHTPezaY%2FyCZu0WbHrtrR4l6D0H0w%2BmC20RS5r8KJJmozRMpOjxK8KvssEn7FASQ1%2BcRJQ4vzVH8Am5RTHFr1AlVxwceNPTsE1%2BXa4AAESgQrScao3%2FpBLzCbsATFf5kBWKNUAoEmezQ0G9hE8NTD%2F%2BMMA0tX3TxB%2Be2Obe4hsoZZ9DHyfL8ncFss%2FkwjoaFwQY6pgEnGsqbq5brWMxzSOmk7p4HfzXgSaoddRla5xXt%2Bsnm86usYZpws3Z4B7yWOVBX3UF9Ori5U4DQ8mqI14vhHhslxc1%2FWDZKBz%2Fmy6hyYiTyO0wFc0lTqdsLHGYi%2FWsRe3fmi%2BYdhlWCcpAa8seHPHMw8QQPiuEbPZE5yxzRfZhKEKdpdj%2FMj3MaYpHKw%2Bvsm9xz8X4S3r6Caj%2BYLkAZTQGlvp072AhX&X-Amz-Signature=a8484b53ad195a0da569eb168230cdf46994de77e6363993d6a079f9d736b949&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDUGGTN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAkPkCuDclEa%2BTJZkBPMs9dWMHLpAyyQB3LRwoMDtY2gAiBO856%2BkJiHwQeYL4npN1sW9zxgRKaLIcspIUNkhMhLJiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhscTsF3YTqXojVq%2FKtwD8xz%2BIqtwLjCg0Fw58PQgK%2BVT3URAQnve3fmPQnUeC4pobsvH0mJpLphcQSCxiLUmXko1cOVFs4zGQVniO8K8hWSREnk%2B0R5NG%2B2JaH8gPMYvQ7%2Fso3V2aFWGtppaXB5IR%2BMZvdxr4SMO1Zusz6%2FJIBzIJYbkQOeRcy2eSamsXvapxWUZmmrZlQufdGG7GhldoVaGc5gYD3g8FI%2BYDA80aka2gR2cLIooRrHAf8qQXQsPui3t3CG7SST8Gjb%2FisDA0pecKiwnc2nTuqFelkGxgKCEfYhE0WgghG0A8GAoLwtxCn3PE12tpfSknzEfNpv8cdyfCRdoF7FBfJRgYFU2BIdo470HXRP6rGjk3wFn65UMtaob5B3WXg1f6eMEdTE5FzJs%2F6eXV1ZFCUa9eay8B9hIRtt3KpNIkmtau70xR9ir8WgPoxso4SavkNQeghplOcx6XXp4e0Shh3fyTeqnuKRb%2BVQO3A4i2NrN0ovujYwhUpkg2h6y4YM9hbfPROMV14r35apC8kC8VX7rQGtY4MOWl6B%2F7qqLMlun1yzXHDcMFuatyH0fEwzG3w23RMZkMzMZD5MHPnvsRaUzCmd%2BcaB3rWwTP9uzBkQGw6pdsuRo2KzKqpMhutlAxXcw5YiFwQY6pgHkuL3SLROzS9sXShS2u30mk0Bp5akQpJsnhFq%2B4dMXCTbtryS1DUQypFJdRNAedxY5MeZj58bA4zfA2oTAypmsotduDjzVttTSMESb5lqK6EI%2BYJgenu3uxoIrfaQCmVgW7wOvIT5pT%2FqwU34df6c7x%2FH76eByj9zfO4U95rr9nC5zSR4zHMZSTYAQ1ofotG%2B9ldug87ky8dCpvh%2FWOdzb2vyyWMPL&X-Amz-Signature=3911be0372f69368c0c78f543deb1c0f47bb188889fcba619dd5c77e13ad451f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
