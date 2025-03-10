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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCXBS2I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCDC4PLhrn5QSEYy26lFtW8%2FUq3QdVMhEA9h4AtNM0SSAIhAPDy36htVBnXrsOdquTWF0UPQhQVclAMgKypunT0aobuKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxHJWd8HJc0duSpE4q3ANcOD0ToMlmIvGTBwWfYe2lvqCq073c5vrZKS%2F750TCIzaomekoVjO7XkxSKZmHdsKECO1LY86F4VShsrzwbRHOpXpZpYHBuN85anuQJGsDV6Y2HVf25IrJTLn5o06MnqmfdzVwshabyANUYajyJ5swJI%2F4%2B5e3Q96KN1q74RxtKTygJ5xxriCO3IAMUZFLwhpuLPHKxZXmMeUm7brXgODCBApdntedGqGmUW%2FP01Rfh2D4nLLzg3pF4v2rU6F96rXjaGMbpibe1OtikspoHAR3vgG3rYLAS4iR5Nl%2FDNoGuH6eOzSGCIewiEPF2FV8gsJPnaG7nvk4bw0vnTqSNHM%2BRBHFhN2jCWDFExIytNZy%2FXeN2ISoGNXUO1DGziOdR7MSTKukbzSd7a8o9bdZ2%2FxGm5rVKo3uOpbS9zxf5bvg7Vm0qDriEASfuOHvLimz24DJzAPT6OA8tAt5U6Tk1We51vu5%2BI4fztF%2FWvd0XlkzXUxTxLIhevfbBcaukfVmfYVi8Qe9LIF9NTN17HlYNLRkdM9k73mF65d%2BYQWqWdL6Bqg4pxKqjhciqAHrrF%2Fpda5uJkL%2BfWizRcQcKMxwrgaaRpbxRVU1dVwZ5zRW15Vgo%2F%2BL7gsQZ8k74kD%2FlzCYy7u%2BBjqkARRBCJwY2%2BF%2B93OR%2FmvZnlnO4zKEhKwidJzFVHzOvKlM%2B7c%2FjRYyEZajMk8gjdSbM7elsU4v0RIrEtSSbqEzORaBSiVucx5Z%2FKXpWU40mOXoNI7T%2BwSoVTXEWGN6ANI%2B22qNtvDgmO3ljM3MI9usDy%2FrPX%2B35yjnKjGeZ%2FBsjTmeokZCodBN02OtqP2pSmsbwwQMv4tZD7q%2BRdLn%2FmnkjIo%2Buyyd&X-Amz-Signature=afb54f7aba0e64e7686778b1aaa9fdbbd319453c74c3ee4cbc1802d4217e37db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQND6XT3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQC2uCrXj%2Br3v6oL56yi3%2Fq9bselFhBYzTnlv%2BgcPdSkDgIhALIkEwtg7x6%2FjzPbnKIMCNtjvxqpmudu9CpbUayCQjdmKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc115lnhtTrlFaER0q3AOSq0rmjPnwsX0MJVzmOzayMT12%2FR7VPes5ef51MFJUrLcnElkfGpIEWyhFYpdMaXvRto0hTl%2F%2FiZKZEBXGt2Lrzf%2FrSbuQeE01VV%2FTm9WMlchevluzKEiQcRBHMdbj5vt2K4DJOHWj6rGL6gkY8RYZK9O8PYEYXNG1zm5TNDrvy0nczZbgWC5Vcx2N62J5mjerPoxGtd3XvXZxaKnGMC3CHMigTqnMseuYQGqrIgXaVsRBeYEVjzNxuvW5blvds0O5cwwVfjRfD9Un4Pp9M2TpjqhdLPKnkqqNV%2B6u5e8HqIIdpKAJEpn1QFKiebP86RsnCgoi77qJTy3T%2FOKJVA7LOn9iM8hHQhWSjiE937iWEKo%2B7aXeZn%2BP3RZM9FdxlFjoa9NUQUE5Tur6Yq27L%2BCXBeUAZsSQ%2B8LPJ2G3MTo7xquEQueisqFMpAKnCrrUpQtIUkBpAMSaHxql41g7mfQ2BG8LOGVEX91D1Fv0t6veMxltzL0ygjgcvmCrI5fibA2xJhmr%2Bzs8WELFc28UI5PEVeIIcekgicDl9SXFjaVi9qUvEqzE%2FLOYgn8xgl7e4vpJe0Jku%2BnLizv%2Fx021n%2B6abMKJo2wZEGo1sXZxKp804Kha6lYE6NGEgosMcDDnybu%2BBjqkAeDwlIgMJ303Sje13m4SeJQr9vrsirO1VyQF7mooieJs0sYS4DrJpwXzTYU1%2FBQn2EQlO0cmVxYEun2KuKM6dRf%2BkPvfMu1kfEQASmCZ%2BHfiVLBSYMS179P6gJ6H%2FG0WTrHQiLENRYC3nA3kGtcPahtHLRZMCBrstD07xcbbz0vF00WMUoAcjPnDmJ%2F3Z8y%2F2aUhHKByUv56Pqh9xUbfu0I9rRKb&X-Amz-Signature=9a885e8908291d27adb1061496dfb0febaafc090aea7cf0169b1eba6082246d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
