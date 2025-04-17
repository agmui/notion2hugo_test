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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKOQXR5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BpQPsE2l1P5LNNBcJdJB616a4kLqNruDzTAiPaNdsdQIgDEzfB%2B%2FPqBrNfQRg85CtigvGgenOHAz1y%2BBIffLTIv8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDL2hFHC9zXg929MZlCrcAwZ3T30dq6n6OwmoEO93%2FT3sgD3dymKQl%2BjRjRw2C7rajJNXDYb1QZ%2BuhFl8Ws5haTjnIYCW%2BSI%2Fawar7hxzwJcnCynOv32j%2BAmPWuHcZ3NuFK16tNhPGZFU4uQKuNDxkDn91xQBdZPrCLXfAXLTWFdmhfPk68gZ0nT%2FhT5L6%2FX6vE3cECW0OzcNiPOpU%2BTmKTZ9qSKQC2IdigHS%2BNpwIqKtO1bBPL1kvLRv7FyMeyUKaKhe7bf6m%2FnEj5LxlY5lcRdDAhHFLFIbNYvIico44FxslEVRsEPIsYc8zzbARA7%2Bz38xd7FWcLXKqFrToValDlLpgj3oyKf6b7n%2FiuEnWKdDXKoXdBzhBBJ83p9%2BDYfo4YaqE2zkKtrzHbCP7HYAHjZHurp8eNzluJ817hupVNIFg7m2iDFeVtNqamPtftt6FEqr9%2F%2Fjb3pARSVdnV%2FIEyv7PK0P3CwbzhgSgA9Q3TDH%2BT8n7CI4GPGCJP3hnfVUyge2E42VZtUYeUgAH6DpJXr7JhkX79M7caBYrNdGvsO9Ld3NORgMVxncJRIJyL8elZXCTAkzcgn7LZRj7ZKUsCqHms8ZgCACg50MHah9yWRuh1NY39c1xuHWTalyBkD5VKVeIITpwUv0fizvMOObhcAGOqUBjddWU3iB%2BpCMQ%2Be7ULY3esKXrXSeyv%2F%2BW%2BtCoy5ATZDKWy5VMQVu%2FnDA518Abi0Cv%2F%2BJ7%2BlkkRLnDSP%2FT7IOcHoi9TK9bNOlBVGCj%2BC0lnSO0eScUc3PhUIkUklzq4ZVTRnr1%2BOErIPA5qNpkWtI2O0sbhtj%2B8l9mAF2u2EIhA6glrL30IXli5HVj66XlmVgnUpIdPNwdrEnLUEywevce7KKFjch&X-Amz-Signature=51632d62c7324d0e21838cf15b8e3d9cbfc42e46ab6604ffd2a26d94a10c515c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJAJ6QV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNJuLPPmAq4g4UP%2FdwCap7sDdJGTLxfDXhK1cEsPrQ7AIgD4ZcLon7v5%2B%2BvshcBXS9YJifNOzJUZAnIWBYSZPTDfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFnuCqY6uY0AuyJ3wyrcA%2BuwpT%2F19YNsO0tbau3GQqPqmwwajPVL7d4ntN8XP2ThN%2F7aTfia7OXyNerblnmBsD6MkrSuD5241cuVzI3bmb6LOyUSJHFUddmKseJWJVxEVO8WGw6xUJk9G6V8%2F95uKaAWwI3Dw0FxRJeID78W1XzQA9Et%2BexLg8nVLeeMJgP5zve8eUBrh09PdMwYUwHLHE%2Fe9GrtAr74NSVzsDvtnAS7eV0kDV5Sh7rdOGRDcftPPtTXyyJmB6g1t%2FrndRzjyo1jnxwpm5%2B%2BXpDfgRvekMgkqdMBoKmKDcsO1XsXJ2Hw1GvMa%2FuWZFAJLney%2F2FXftrYnx0QxN%2BT8hD9cM9cvMk14qtgF7uIIXoHOheT0LN4lweEPP%2FgJ3kyM%2Bt6S5OUz2q9XjhphqJdCEEduNmtFcj7Ufd%2FfukyIwFg7%2BxGRHXaACdyhvKvqfP8YYHdGjKAgK7GzHi0ShK9MtDRKLV6FbfllYyUIzHCNx5WR4LLIQALYr3uHRLSQIuD1nb4eRIBDRyGZ3OJOo19ObftE%2FmjARNWqyyIpOtoWTv4EU1QIlx7b8%2FLG2o6quAgZaAroux2aoaO1dtM%2FF7aeY2H1GxeTUlzX51BWnSozcCRcZxEvqfcqX7f48wgqhflbgnsMLWchcAGOqUB1Wh3Oj2bK%2BycvN9NshqrVwZBWAYbN4FcH3VjkrbnzVQ2ZD3zaXKc%2FbkHBA%2FGc%2F6s9vc27mnATFI%2F8vnvJzbtH4TiYJ%2BkfMKCN%2F9EXY0rtsfLDc97j4nc3cxE7rJa%2F3i%2BNJ92touqNIUP3aYsry%2F7RXmsOGp8%2BaoPjxP0M37HUKNtNat3Lq16wcJ3xMwsKKK2my0j2fJnhrfOMXukOcTB3SezIFMr&X-Amz-Signature=1ac9504aedc332610c9b6b0c9054bdd0d0e37fc254b54f3742fd3677cf4c635a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
