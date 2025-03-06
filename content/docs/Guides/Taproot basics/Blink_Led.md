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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTCTRVD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPramHDGdtueA%2FAMyR1Vuh%2Fv0u1FOItk3IKlHUQrXM1wIgAW7y9qDALGVYsbPzzm0POA1Ge2jUPH0VIR9Uuh%2BITo0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDSc%2FxO7eRgz1voaZircA57qle8O9W8BXK6KMJ1XZ2XCtfu1TzFrv8oHLJS4h2yHgFAC3HnALC9V%2Fy92m03sZKz94RQ58i4UXCTGIpBEVyhh05%2BDrQqwJrgVB0pQbZSu6WBWdVeQr2CA3Rw6D6x4WlUZbRg%2BEIFQZY6mGD%2BO2zEGJUZGuaKJOu21M2Eyg3GzfWI6DpBNGQxetmZK9HCKwyCZaRe%2BBUX%2BwkFZDrHRRyWPiOWzFEgPrOVop8SliuwbUbqtxck0bRIoSN1Ki5C6qieHcTsVFeYi9ieSM8JjvOisUKWP%2BP6VHq1tMBcEelQVHwTCcvDAbug74Aa62MwBNLVeB4hXFK8nK5GuLzzH7MrmmSV420cQuWnr0%2FldFHdM1j2mHUGHCvAZZ3JDHrCpvgBEARSIYFNANFikr3eJaYPh79pjKxZXBCO3JfB86x9MIVMuFDhBK5cpLli9zowUjyKGEtPKZebLmhJG67qDAXFb3xjVgbpqQFiuuKvVofXMjDie74y1B2uzCzNTfXubnDNHIUKa8OM67Hd3YuaXVRMhlqptICDLXT%2FEPqVQHsgJTk9e6QSbD7bE6LmnZSWpOs8glUWgAMbv7e3HleJFxxRzKNFrhQM1FO%2FRTHojagptcr2jotNku7BDtdsBMMfGo74GOqUBfeUBzga7Qv7UwYpUKXduCU%2BBCTwFj1pkCiMvtjdC1RVI%2BJ2FUSgjkiNmHS6Ex1pISBF6wIzWqlm2S4%2FQXQiRo5k4%2FONR6QQNL2NEs0gIEu82K4BEXv890atBsAlsNNCEhSg0TmT5fveAJa11ifB2%2FUxemvHED2yN6O3%2BIj1UqyT2NVRILDpMQxaZHXSbrj7WaaG9H78PWWJy7UJpt7OAWig4NJYw&X-Amz-Signature=8b0716b3ea950eb2e071c0135de6361f2cc5c71bc76dfa869b810aa8c59ac72f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWT3LYB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCS9Ka6Km0PkROwRrbbHZ2aEBkmH17aJzNXhvSTBzqYQIhANw2ZJtyNEa%2BNv959OqJxvAO%2BquvMVSIMZaXs2NxAslyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwX1D0ml175%2FtbCulQq3ANs5rWl%2Btp%2B6batJ2XX%2FQMvm5DWLbxOpuiiZm4%2BBzzARLzRBPM8i7fAZ402G%2BZO5xcv70a8gnUqBQxvrgQ88kmGsuvFHQzLQbJqDSi1kT6Uuzr3qH8mfJPNkgg0z2p%2FP3A2LnG3HBdIOuu5lYQinS%2BFXuXBPZfYzUja5uAmL%2FgmgndZq6Al9H0%2FS74AZx9htAe4dpUCArVgDOMXveiy%2FJMxyL7upFs2gGBvjjX5cBrwTczD9Zni%2Bq5lFZ6Go2egzNWeG1FkE05V%2FfFR1lnli7b3i4%2BgJcwjQwfGer6i61wxfduTwpXj2L0GsnnGf%2BXczERfa8VRkrf6EZIRPvlAotNDeuirNM1doGhTl7N3IyESrj8Z0F96o%2Fz8bx4ddraRxQMV1lhcLxm2R16vH41DCWMCQxb9vumAkB0Sx4s1wsqSNqpJcYoQkiplk5t9e%2Bb2OTx17nIOoeeUGcWiv7DU8sfGubkUslTMhJkkLHL%2BGDhSG4XJ9ItzDEYrN9toskoJIaKyrhK%2BeGRVdZIu9cYXuCXMSCs68RYlpSIWlQexo43VfAw8vYUWnQ5DTk4WOsEAJhkJYA%2BkT7jJ52R4AkE%2FJB6q6MxOmqowiDyTxPTPsenRhtOnejH5imWVyCn8TzDcxqO%2BBjqkAW%2F0Ji5bWr5AoFahhRd7mAM7dmedgYhjX1%2FVyUtjv6trzCFX9UO30KhnNioCpo7okK8UNOEazEIRUAzA3yTsK58q9CExIoi6K4%2ByAQOwRcQHk%2F0Dh3qKt7X0L5HiLOvpbtF1meX%2Fr63DOx4iypUIghrvSo8ZG9rtmxwVvySqK4c4ff3T08CVbMHUpg40En5fKCrIK%2BUYc1jgEcgaVv%2Fv8dWdGE2P&X-Amz-Signature=cf76353d8b3029e56e866239eee8dd5e450f3f2289552e999712d50698cf01fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
