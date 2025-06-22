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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQBF4ZJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCWdlPrFkAdmgcAeiQJ45V3raq5hrdmr5yNSRh%2BhbbtVgIgVSHC%2FDhV9m0QFX3Lp8brQQkEaMu%2FRvwXBTZuxmB3KUAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXvFdYFiUgTZmxcFCrcA7%2FvOcYTypaZmEyDcaGTCWG2r3MJlVX51OFFhNjUCEZ9dSPP2NUkCzhWtF1MUuB%2FlQhFYoZk638k5lWZOVitz1v2Jm5ApW8hAGu2qtn3vEOW%2BX7l9Xp1I01LAKewsFhYDnMsCtJZwH9b2jZOJdpAIVIAiKaj3koufh0MWePeFxYxbxicbv5VXoTdGySVqnsLiNzLNF%2F2f8eMIRV3PUQLmrgce%2FQLYaEAPcvww3HQzercUpEBKbLCcMmRyi9V6e%2BaSkQgKIfGFETaZ1LcH2aNoCYKrJS9ftC1gfU8Qa1Kd%2FtoiMQtT%2B6PdmPHN0TdxKw3R9psKHRdikiaYE2g%2Bqw9SEF13BFscJdQKKkmVpf2c%2FSmo%2FJrXnRuOcMegsz2sVKKQ8j6nKvpnU5WdKN5iVx3InHJ9t5gfBgTKJxTfou3aI%2FWGegkANmnBKECVftty6FbYcrPXhl3DCNUXT5uyT31sFNEwQhQpym3ULWCqEJiq0K8c3kSj3Lac7H5kJmoydneEBjAE0I9O%2BT%2FYtPgFU5FNEOak58oy2bEceSfMrfDWyLm6biX%2FtbbQu3%2BiDO8X%2BqXYDlHFG%2Foabu7hkWayUCo%2Fm4SsXY4nYzom%2FZXtXLslMPQ2WNlge5qszFVy1VhMJ%2Fp4MIGOqUB%2BkH5UFL0Q2dSVUsVHc%2FB2SR9v%2B1v7VJ5kG7rMsYKKdUZXz9QNauSv2jBtXunDowBYPZIPUjY8g%2F7L2lYZhd11VyJWUhopecEEHKvwvUVJd3qbJp2cQp0fUp33WRgFYrNDrsSTr7ZM9LIOaexZeQ431yljwX%2BSmE7Pz%2Fb%2FAIsNkCSOk2anBaTeLLAH350NFxAqtJW9wssqVxEtpQdmTf%2BktHhLWXz&X-Amz-Signature=1eabf9fba38e7bafb3aa53d3266fb782175830a816b161fe4481110faea84af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3RHDZ5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCaffeCkketgo9Af%2F7nt1bNIqpW9Betbj2mTI1fchY2ugIgdLpetxUFHpyBNO4IuXkXXRH73RaH4yowDJ7l4BMPN3EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyoN1tJIQ%2BFhI7q2CrcA8%2Fa%2BGK0%2Baw6Wf8aJiHB3mwywAsvNR57dx1ANf3BCJ5Ao9hvcBlNB6CQIA4AOEdU%2FonTM2XlYxJpTBOufdawS3vjQuVw1YyM04Wy2dfplYMPGj3LgAH91Bb5YNYF0JiO6X9jmtp5VM82DQFuxI65ReKw%2BRi3x%2BZZIRxJHgzf%2FuOpPNCVqbU7JhL0lyOfNsnu7tUKZf327oDXoiM3AhqK4XCBllBJI6g4VL3AhOqWj2I%2FE4DU1%2FuvXUWmcZstFB%2BI1dYuLI3I6HaGQ%2Fyp92lJmdV178xWBwYGv62kxumVwqG1Ofu2N%2BENPTrsNQKiw9GrY%2FYJDPooorJb4X9jRMPuzr1sdiQr7soCK%2FjR1ABzXGDAgj8slc%2BP2bdsv39anWBToynxhNW2Bb4U1AcVRjX9Kt2PWvHKao8c99Fp4TBGhr4rTgHeuG2jA7A4LoVcFSDY7GGRJ4UrUsNI8uORoDie%2F8rftfnwhLW9%2FscnUgxc8gH8CLn0z8cwVqaA7BORr96fOUJMEsaO92bQMyfE09dUUwoVWmpEXrJqAo%2FV8SSOsHMl4PytmTgl%2FwN%2BQtGuuehjire1AEZD45VaIzZA6Zcr7iFr1ZLmWGt6vpZijqH0Z1Osk2oHTqWuJdramG5SMKrt4MIGOqUBTlfWTS1hCFhEVRHcX6hJexB%2B5Z4zyZuxI3PqjL1rwnAdhPnopEseZ5Z137%2Bk%2FbDVq6JRQbUMKIwHSQ5DX6xJcuX2%2Be2UFn5pQILM4q7DOCP4emXmTigP9dEoU2nzlaya%2FC6moiuJruU1P25nQphG1%2BwDrB4sL6CWGgFUvB7Dr4cwrMD14pWem1KnEIlvkpfs7i0P08hvsqlfrOK42DpX23M8Ord6&X-Amz-Signature=b200b858824a3f2b8fda9823ff1f0f966dee52f415c2b6cb7399acc14803577c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
