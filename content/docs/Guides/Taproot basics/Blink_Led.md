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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJVXTTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUVLDBFNyvwMMM%2Fm05e7nX9dR1SeVqq9fVdhvQIqCrEQIgYmhNED9bRV0rZKFlDpMnkEnR6gck5O6pS5qZRNA3hE8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB%2F4R6ZHwAGDTu%2FJlircA%2FGhB2hLr7ObbvwEnLLyxsRwp1cECwnwLuJElaca3zlW15PeCLI5%2BbgxP%2FMbjtdXJeC9ikESnjcbvAzshbJUDdRMuZg67fxIactp%2FXWravR3527TwOauJiFOqiV1iiPoSnfFHj2IVj3G1fldWBWxumzQkhmO2acJlitmfWB5qDWpU%2FVh7kWT0vszG1%2Fbn0LM2YEbn5HDUMccvxSBnng7ae6F%2BcwaHjNsll6VGoDupM%2FHPw%2BR4NZFfeyKLWtqtMAZhgZHm65q3uMEJE2pQVv1y1m%2B09XDKdsYV%2BEGCycQent8TjPTPkLu3lcBNxrlsiirUgvhiFFUf6aOHajT7qER8sMDdxsU7yi4HQRX6Rw0DAJ%2BzADAOEc3o6iQuKaA3bUy5gZ1ia1x%2FNWsCiHGS0PIBx3chOpH3%2BrMapyBtbx4fhZ4BWLARJdMe2GYFw%2F%2BTxb1mC9DsA%2By1%2Bp7CXtu32P3JYmvMn%2Fji%2F7x67JkuiHCBGHExoZ4YecXJrxa4yN7lXhJhMAVNzMVctbX%2B11c372beDxXeDCVwAwKhOV4OaIPXiS3cfTzcLb7lOHZuDNyNxvHluVH7lIDPX6Kui9v1D12n5NUYTvVLQH6W9xl0zMVFbEf%2B4z1xGvJ09gAwxRIMKPZvsQGOqUBBI0BdZLBwoEG2QlwAJa8HSJbM59kxX0uEpT69N5Cf75jD38i2nKIk3T6wAoV%2B%2B31kAv%2BXymCwgwAY2cyyfKdngaPsOxvz5REWrHGrkIQ3n8R3BBL5pFnlu4Na9FmBm%2FvWbF2h1Vk3%2F5Wm%2FlVu6a3mpN3y74mg4OuOHrk8VAJzh1NErJSuWKbob6m2RsGKinxVgR453rFhG4K98dbnaYoeOUToPS4&X-Amz-Signature=afbb470e30bbc63ab7888c8beea6df806c9d39e36f08341c3fa08e63a2867a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F4ZKSI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAM7O66tNgPW2w4e%2FxXPXIhX3grnKc2BqbVaCJCkGGOAIgFIXWXQ0dX2I23TS8Q1311N36DAZm25rptuNiBxqXQggq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMpjs30134YgCATBvCrcAxSBjJpxcinY4pcWdJSKMn%2FABtzsidCRtVkTPrd6U7bmQ0UxRp5aG15pcXWU2MPnFeqWsK8GWaAEMwSibi%2BfJrCDYOV0bHAfodo1TUodwTPV6r1MZIVP4h1gomNf2Nvt7oPaCKSxROZYrLaBcP02PDFWLe6dCobZr9OHHrenCuYKSDLZBqAKGstRYn4um%2B0OILIJAjjIjGjiXghiS3PaEPmz%2FKcgdll77FzttyidfhmYVBT%2BkO%2B3Orlzgm7DCbQI5wZ4Q5l4a1p6lVRjiVdXmNFVJA3LUfM9k1BGtGeSwlLEmNywN%2Bjq2EvRLND0f22snX%2F%2Fr7l%2Bqfe%2BZCJMW%2FiEodTmdq2CDkPMHLApC6lLXsoPjC3Beq7NNDRlD0uKPKLqYxif6EdNYcJ051%2FRQHo0VxQEssQ1kzSo5Vh47dC65ojQ5FxMFh2wIOcKXEc1Wq4Aa81EBRa7zUxaawazfolybhxWPKee%2Bwu0AGae3go9dhSPKeav%2FIXTt%2BMQiq2quHf2PTbhwkRKIesTdm9AofKUtGUAiY62aNScy6VsbFmzuUbPYcpplRZvRUiZL8dx4jyVYOWRrZZjuEvomsgKTHsCb9fP4x46kBUGx77aeif0%2FlG8MIVh9yvm%2FQr0JVufMKTZvsQGOqUBMhE9Ez%2BlfaFjGjEVhtTIdO3RWM3%2F%2FZZubkclW5hTbQTGBZkZAPDxWaAK8WOos%2BjpszG3k1RrzU5zD9inPb1lKD0bbv9px41ZpFDfKw312fa2AzjnzgYmz4NHQk1bmPWsEpv69IM4SklVrBDzwHFgT2vZLqPfptWkWQw9SNN8rTWiVk7EAFwC95DPHzy9ZGC9r9osvVzJuxFE1i1li9WqfZFoaao1&X-Amz-Signature=f31f2e98de11fcd8c1c21b56b05a2bd7113466323a55e7094b6d61f9a51e0f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
