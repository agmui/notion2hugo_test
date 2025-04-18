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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYUM2VD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3CR9ZY0SOxhNdPXUO%2BpyaoppxeEYo08BSgCAIfU5FwIhAKqQU%2Bx065GaRtLKKaU8pJrwFaeMin1NNQXUW58tdRbNKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3TJO8lFAXRaDAAKIq3AMwQN7sodhroAACsAWe%2B6HH2aDBVvquA%2FBoBhEeTLXlOdpwabj87o9CRakCLPi9VbSYDG4LleVsPaZtlUzP4KupPVOLaULq2Hqyb3Sp6ktXr1uMbA537ytPxQOFBkpylCweH52eQs9wmSeTbK58%2BQjkwEf7L8Lb2fUYlfCHybBetpde0YBNCoyIbFDcLy1T6muo6WlUnQMlYUdacc81UzLReysaLaXLQ%2BNcFSnigBITODIZ6aXHKr9bSacJ6QT898VCJCFgOr%2BrQtnjMnT%2Bo%2B9%2B4Cfa6xZ%2BN5VAFrLcSWnpsJUqHQvLClvgU6GzpO%2Fa9WcR42GfdqjfcGU8q3x4QRDAiPPvuVtEo3FZuCcrYK77rmcwaZOOXk6hYHTP%2BxmhuoredR8DgZuhm%2F0tOI%2B5A04PAHvQMWgZlirKVgy27ncIMjuS52TZVVQbF0JlIVXSztMzjsJSUh3C4ZWc8aYMi49iJs%2Fl%2F1Z3uCL%2BPpJvfeBFYdY3Fka6YCG1QV%2BikFp6OkcPngfvdHYUtsN%2FEwgm8QtDu%2FjHC%2B7b2E7X2Z1UjwPm%2FrTs6Lj1R8mEBbhQDxelBIECBgO7YnACJV8IRh3w73zZruNl1n%2B9m%2F4jn8ot1JmGvzs8HXOO082HvHDhSDDR9YjABjqkAf69oFqWCyEWcCp5nTjMgUgB2XBzo%2FwAeutnQnpPR7uFGd0x%2Fh%2FIVNwn%2BsFt4MI0j3HdHGPU4DVuBU3rEAef1hhKdM2c6mqMhDfYX76BBQA%2FVhdNQD2aKF2zPBrpCp2r34Y7AesuQgLCDNcMPNCXiB19eT6nIKLVah1D%2BcH5F2sr4df810u1%2FWDyEjLtqNe8TqwRmRbo%2FDw%2BsaJjEu%2FgkG4wb1qe&X-Amz-Signature=ad85f22c2f7f4a98b3a12166fb234c53e5d62206c4cee0cac582a885b8d88cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDLV6BP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSvsLEvqV%2F%2BDa65rwQXKwM5BkAx3%2BmplkmRotD6g1Y9wIhAJHwQ6EoowPTd8z3l0%2BsZahCM5sVSUu%2Bpkz9WSExN7AhKv8DCHUQABoMNjM3NDIzMTgzODA1IgwZFV8G1raJDPHaZo8q3AP7zX3gsFxFAH6jU3X3AC9GObhYv6qK83cH6dCzjokr1EICEi0i6rYnPxu5qct8NOVFdHj0278DTvQJtZgFpiCbIhZRl5wevWDxTd5%2Fd4fHVI%2BeSEilEQTRyetcmxGQliXQ02IuX9ol3vPqL3D5Ld7VL5QQOwiDi7TTSXdTauiUJuu5ZiapeQPNfenFALko%2FPdKzoTRiH38R2yPZwMISaBH%2FQJ6Vbf%2FFBMUCsgyh%2Fm%2FPDnEdRzA%2B0k1vx0nwAMcagfwHAZLWvqYQr%2BSAo0aLSdX5pDHiwluz5VQYu6vd5AmkXixRXcrqdrCMyV3BeGnXNwJG9nv%2FGTghu4U9KkUVG0SZYnwkunLWBhE7xn81nMrZk3oc3njrJyfI3cvlomKWpATguk5228%2FLpwo8nPgEjLu%2BvUY%2F7VvQBaHLcy4%2Bl4FLNThG74%2FZS3ILWuVM6bl3w7mXp2UKHSohGSfsf7J7fAsgg0gDwVMu2Dd2a5Rh52LPg5%2FbvX27Sm%2BwFEn1ZGg4PpsmuJ1xVDq5bDKaEdmVLAwESRpn%2F%2FyLUubzjDNLepqEW2UDxoLOnxgnX8FQe3KlrhiIwclr%2BUOXAemA2w1LbkN0FeJFMoLuMBYHUz6ukhihpSKbXZx4z3hBdc61jCd9YjABjqkAfVYTsYXzbLimd4dwq3T3luTr692PFRnE3sBRhJZT8DaDtCLIte%2BsWgSrwJ61r%2B%2BoT7ymusO3LGSBvP9uEfFb5X6NtUgdm4OIlCOQRD7i0HtQKlIdslzzuFWA2yNvCQAD749cziXM56LsYrqfmdD34tDfciXf2WtBnY9NprZluWWuJQFOBi6Bs2vgOZaAa2881rEy2DkoQMakPCERgMogd9lLM7U&X-Amz-Signature=edbedeebd2f2025dc8167bef979956cfafad154efd54a0008bcb332d8f5dc637&X-Amz-SignedHeaders=host&x-id=GetObject)

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
