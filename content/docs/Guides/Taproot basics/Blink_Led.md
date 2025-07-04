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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TTHFGU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEHjjSogLqCani0HBGYpOnNn4ZOdOFkDBvNbL2tV5iLpAiEA%2BkdBF4ZVKkjFHwBbZcaTEOQ79OKOylLoDLyZpXtbngYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLuplxwyc9ViQv6u9CrcA%2FDkAeTXtmf07%2FK5VtRpzhC7XLdB%2F%2FCinJHeorpzXvjDPj0dgHeDCCs45W%2B5U1pHxHARiQVs5IMtcCWE9iWxH3YXm2hgnrxoVCjNFgookmJTvfnr5zHjrV%2FfAOL4%2FgiaCfA%2FS1EmWEkG0Wh1Uu2iVmYQTrztWRpHqbDLkVKaKhPUaGg4pv9%2BYSVOuNUtLMPe5zZtocwdKtVz3sXiMv%2F%2Bois8kKwIQ8178yuIgwipGDonDZWzTga7ZBbj0X6QZsSL2fxDJLMWXs40elv9gpP2eVUdpSF0UnI7HdcosR8Lf691JVmJKBDgbrUd%2BhsNXOP7l5yXiPbhKPTrWZ%2F2hUEAqNOPUog7Jxd0AKKo01zUL7iLP0NpSF5G4rHl8gvyDZIXgelrwZTN3QNIQ4HlOD3Z3xvqyUJsA8%2BRkRrxRpvGpLZ2JuT2mIHXrsQy05E0XDRiml44CorU6DpviqFAAJdTDk8WQaHt%2Fhb3WJW831ZZkRh%2ButD4Op4B%2BPF6siHz0WrGv%2FbeRSm8axXuu7eFkVUcqcIYgPtVlwXZmooHY%2BpjMkDfyzxOZ3v%2F2ZEN5SJuyL80GaO42YByPIy3%2Bvbj42Qpykfgj3pQzd1TAx326NZbEYYawzwzqCAWxfyYTPacMJy2ncMGOqUBO%2FoTXoQDadcNXl9Hc34IE6rQKkBlLnv%2BLuVipH8EEaqC3ab9C1DvHUj5klRn0Xjhm21sFbceLWTjrE7L75EjhmOj%2B3AzFx11FbYEMRSyAD8mVBcMTFkUmxo%2Fp3WbtBjRu%2FhywiV%2FqT2ldTrZru5KBHRy%2B8WovZ9K5EEzx%2F%2FtQRR3dz%2B34uPyX8r%2Fa%2BfyubulXFoNAIjcn%2FDMHkEvF%2F%2BakDpzgqB4&X-Amz-Signature=a1fb6dc922137918ac50bad7760620f27ea7b205eecbf401040d8ad75f34d65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQVHNEI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB6%2BcmeBra6SHhL1mU0Yv5b2jrEX0R9bCiSDsGnoZ8nbAiB0Zl%2BPy2A5UA1juFji%2FB%2F51%2BsT6%2FGdHwGM517Fc4ht3ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMMuYbjjXUwhmJ4j1RKtwDPlHIQOVERl7g71HMXTH2TdT3fxFY81im0guL5%2FU6XrXzNNc52Kv%2FnWPnFY4CWz3VvIjx6AgXbC7SVOTSIlMdbFLpRT8CDjCh6uWX4D29lUC6orie60VBvJnZo86%2BK6iUGGp2cl04vq%2BTPwabUY4WLE0kXJZcfdDOHytoukOzBOS%2F0OJUV6j4Zpq1sWXKfPucelvzxDL1IeF4UWOsRrBwGBLAHN3WIlcFymK1bzl%2FUZqPK%2BcniUE7ezX4znwKSmm%2FIuxdzF1IHJ3zdFWKg07KeVHTJyoghCyMFopIehw%2B3x6BslRBUOFv3f9zLZ%2BLe331j5otMzqmKl96RLwKZPRYop5mC4H4hytIaf1oOhafsqAq2r%2FVEyjQz48UywV2g6%2Fj1zw%2F4BRhxvTEXDUFV4byJ%2BWMiD7m05wKXkK%2Fj9HvdL8E3qI%2BPipFBzsst9CVNL1xBSi%2FVqzYTPbnsgzEPD%2ByIBTp7hJrhJ0yDqRurNCEfDGXYbIuNSl2XIJR2QS%2BJGWBeLtnC5soGNZvsDrfi8ccTZhANheqwg6s4%2FDKMcR1TMsHbCwnoem%2BZn3kAe%2F6aiupPqciKa%2BYBT2E500wKOP1unoVcIE1pBFlfjpUrb40uISBRPRKMeLdBV1MWzswx7adwwY6pgFhyW%2BeuESdjddXtZcUE%2F%2BiTeENLdLP%2BQo4qzgmhirSRvUfVzZ%2F71DXt4Is5VgotrBhVE%2FDuVE1kFcrtzf5buvxoUVS6UA6zQvUPFg7z8ovv%2FEkF4jBadJ7nTdQmuhXqVBNs1OC3H1PgneufJf1AgERlYOYHgXif2eYGC94mBE2kqPE4tawBMg2fw%2BYoiygxS89YRQPL0zra4EmMbdi2kU1rkIjWjj2&X-Amz-Signature=222f954965c0d02c587d5a25d19f8f643c7e33beb03f57e92756a34855d450d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
