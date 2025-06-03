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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIWKZUM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvhWVvkT1kagPjm4J7eUL4NaJNP2D4uDJAxXeIcLKhmgIgbU44JXDbYUtZ2b000G59wIlyh44LImSndFmFKa%2B0b1wq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDUnDevreF36P3OZHSrcA1pop1PsFUXbk0%2BG1xUHtmpDyE4MZJJj5oD9SIOf1qfcisAlv2dH5D2y8VKVcR9qN6XaXVnFkJYbfQpp9RS0yM4IpR25f4XjX7NFy%2Fu382Q5vqLUCASs%2Bp5tYGXjf9WpaRM8zFCftTbdSXVzLCrd9glF0CURMsNZcJyJMuHctmE9%2BTuEOCGrhAcS9Smc3psSWYQDLiG3skBZ8C4QbZFuWaOYHaanQnhQyt0jLjK%2FVU8pNm7NB0kEYbSuxTLd3K1uHOtjAPMXi0dUum7q13dNO3hHaQ14v%2B%2Bp%2Few8q2gXAdX60IxotZIxHfX5XgZP%2BMsZhpOHbO%2BxqmW9NBYZQCyWpDheEzPIVOyallqbXWHDsBht1KuSqNy8HQlYWAJxAHVV4VdnKsg7vupPkt7I2v30eqlI%2B3BRr2%2F8FzTsVb5JewPjAwHuIE0p5hcSO2uvRlpgIGhB9KwdxUZw0f4WN2sAtrJIMiUr%2FYkZucmeOMIMVdOIKehTyX%2Fka4Iqq1G4ri%2BdxZ3LPJr1yjtrc3ScDU%2B8xLMUqJBGZP990O2r34T3YDKZLCtAtrLkCyLXJKP8kUGXeDU3hNu0nErqRdIKAb2NQ1PrSAYu7gqp9%2BP%2BAUgx%2BxDzX9jOkBKL3CBigdf8MJ%2F7%2BsEGOqUB1y1vjcStMhSOfSBR84o0eNhs1F0yfrsDJqRk2rFoemIkBgokCoxybQsy1WmcVpaExhjmcp84KEnEv2yExrW7eDknsnZ2aTwJaaYm7ptE%2BmKW5XW8dL2L1ENv8y%2BCUJA8ib%2B%2BotKEIYaooNUiSisuUsLDEVvY1SB6A2dzdWClj%2BUntoGRT0o3fqe2zMSbqKyJFBzMZ9SMvUmPB1zbEWfx%2FS0vCXWO&X-Amz-Signature=d70d23500aad710a2a6b6f3a2c708bdf40416e907498f0c956000ad59ae2306e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTEOSHM2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCvh1wfIjjooKk3GEGPQMsMMuq6jhvc4HlSdUg6wlgt8wIhAL2O3X8gYABkn%2FefWK17OfEWEcMCXJjIj0tjFNAB9NvFKv8DCBIQABoMNjM3NDIzMTgzODA1IgyEt0%2B5RwQq2ZfLQbcq3ANebheLoGOUVdk470EWtIoXSYHW595nuB7Ks0X8W7j33u%2F42Uq1JQfp7VUvgZ8Ni0UHa36tfNNcGBm9Xz5ZUTO%2BfrsilIeFMBAS%2FHH6nggp7iHE%2BjxwCpO%2FvDvfcNBPkNnHajghyg070kI9sIuULlGFLNvHLVGAhCXPQ%2FQmBz4Ka5e2gN6cqUxDIaHgILmZ%2F5cCjfwui9vOju9Xq%2FENZnYS0Xh2IBL%2BHUkljXB4NH5mzmuBEsN36PCqzf6YJaK%2FdFl%2BnD%2BFViDmZ77uyn3PV1d%2BgOLEAsojLMhLuH7U2F5kAYrewYdUbNjoe0SzWGKpbH0IqmmiXAwh1ZySi%2B0efOzN35ycHpVLKrVuTYO3uIxl6KbSYJR5Az2Z7wegJb8vNDD%2F6fwpWoxEnzdYvyJWbqYnohcTO05prnSREWsXEdiAuRoWMgNaSbeewXPmvAB6HvSwXi8szOqdwybjJUDuYJEQjlcW26L%2F5Ym2N%2BAnvjkjU4tl7T21tURMIfZfmte2hYflgE93QmwnPERyi5FcdmY18lQ8qExhaOdk3TBGBSStGTJHeV54SvqweGdeONmPH2pHGGW9x4Jf0RMKJXP5l4D8X2eLwYCbQrNMBDk5Gl25FyjzEmHH3eaAG8y8CTDv%2BvrBBjqkAVGpDpWP3waCS%2Bbu2zd49tzLPjgUJEmOXwO9j09jTxhkEICHXyCSo73DqCsooXMa%2BFEXX8WFNNdfDdHytQTUFe631dIHyoZRNat%2F4MlALdD4oyQH2Jzu340ei%2BUsxzQLw3Dw5K5KcJ94MlB5GA1XwpnWz4iXRqphSwCStfT8SKpDYK9MUFTvAP5ilog8BFMSyIplZBrCFkjuh0f35e3yHtI3kfN4&X-Amz-Signature=905a2e39ca9cf2cd197f83d96a48bd9bb6a5df8f89cf39e372486507bda4f997&X-Amz-SignedHeaders=host&x-id=GetObject)

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
