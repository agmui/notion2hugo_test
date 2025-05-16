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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3EUILG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFybMVIOJNoklivdi7o9oqDkrrvzAtBDlyjaFJnKAXAoAiBeII%2Fi0NSMBGnKsLIm5fFIJMNFA2755Ng2%2BWd8%2BueueCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM7cx40BmvEFTlHAVvKtwDrnL%2FaeUMcR7kPYtP0wU3iHXCzHNmoJ9ZTqHjJKSVLIWMAnxFLEnAGwgwTV8PMi8Pl9hWvFdg%2BvgKypi4VTFa3J1hoTFh4TP04x302zkbpHtBA6vLvmoplk6%2FFns%2BUTn10R0Sl%2BZFHb2EKlf%2FEYfSmZ%2Fr2NVz%2F0uJJY8nJzDtX64LofeRur6Otuaq1wX9Vu76Do06a3RDPHCgod8KEIOFDCAXksUiC%2F1qMaQEPVsXz55i9f2CNl2Z57vbM4oMbh2T6wZ4GaQ9%2BNw1%2B492JMrB57L99fP0HxcZED3Rh9%2Bk7bBYAd%2F3s7vYl9jSU6f9BHb48B9E9EPdilJdZxxS%2FLLFv5ANrkijfF8mxjlRRDzOADJMIYlJBCgFN8KVsB2WKR0pt%2BAOiW024GAX%2B%2BItuFya74Yu5BpFAEUtGxnPXGm9jegBitKfi3KMnqH%2BgE4tDJtY1qmOjoP%2FkNGgADuvMTJkiKe0lcIlb6YRowQsnZOwDbe8G587vYpkcDgA9Pia1o9XvOSMDBjZPvdCH0SlTPLj4AN49ySu9Tp6F9Hzpl7OryB50LfZGAwsZsxwTiYSEOP%2Fal0f%2FjGZWmdfKIqfjFiQGQuAMaEDHLOxOGuV3V%2ByhgDjHOGDTBl%2B7xASvMEw17SdwQY6pgEr4oayp4umB6IkMEqMF8E5k1d4k2bTSILOI2XZ2Hww40XZ%2B%2FyadVZua3U3By0rkHJCB%2FhHlNtX0WISzz3YThqFkkxWsj4XkNS088X3dsX3uZK63tT9xZqmnrU%2F0SDvsAo1rwJ9%2BE0qU9wl8OBu%2Br0jT7dlukb8mxQ8lyDT2b0FbJMvj47CS%2FluLE%2FQxNFQ86uCYAjG3NlnzgGzSrrbqUv9wAjJaABO&X-Amz-Signature=6f4cd0447ce004dfe4f24f3dd32e9f16f25586ea2f15ceedaa12793e6870b4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V243K3OD%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4LEKdNcMcJgbrYxSgnAhu0XenYht3wsgXUrj2GY2rZAiEAxwnChsHhBnmGxB7JRvbnBHz1lZGk1Mu%2FOThUuw5LCFkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDB5tKOIgBWrR5VQDMircA%2FMcEHepWEQM%2FfXYes5NhU9bzcnVjGdgHEFCCF%2FgvrdwwUgO8emqXCTVxl12fXmTstsH3TY3oy6ux1ywTOifVs%2Bj9GY47Rz1XkrzFmAy9KVFxosfAChv3WkRv4lIZGSoxiTHwtc5qDekldTsRfUWi66v8IQIwKLa5ZFHU%2BW9E93m9bEpGKXujEVFl3ap4FJ9qACeEQqXMbnKA8j%2BxndTfPQV3MOeQnKW9okQheRLTZwyUNLQkiT41eAt3GtEPA%2Fkyq9jXxh9pMfNAP%2FVOTgRuMQkEx5%2B1mHX2G1Tw5LbtRLKKR2a6Onuy6pyQe6DeVJ9At9u01fmAS8IjI7SHkvnHaTY2QeIPut%2BSiRNl7KD3yGp1l1mXZ67bwvpI%2FNZPBH6izSLSG7U9vHN8SirO%2Bs0rpoR9flcT%2BzlcxVSGcI%2FI8mB%2BLDSYK6pjsnFEu34bt95UOMo68G3aSCxPXkyaQHbc7cfTNwzFhOQoM8%2FlEIOnY1FqY2EsYt7vSwPcGNFvUX9%2BkLtr71y3Pk33iGcF5%2FbyrXmPYKt9%2BQyiY59YqGkoEJ6%2FKwfXDW23wnvQObLtEQ4XmFnO4b9buZpPHSLvgl6j%2BnOFT5o0ouhq0qfURD2BbNmZGVkDb4XCQNgHbreMJq0ncEGOqUBkat%2FagsG69V5dyt4O3AciTl2iNMXZc4WL2u3OD0nHNvpCgKK6KIPZK99vmdS21DNa1WMjr2rsB6UBu4L4%2BiUJo%2FOeoWGARr%2FKER%2FoRqgf0Uu3hfMw7WwdCZt0tj7m69kp48mjaEqOAbEtl5JBNh%2Bh0TnuDG%2F0d9N%2BIDVuz%2FiLwfJX8OooeejedUIJyi0vKuHlWJtRElvBU8fs01tP%2FxpicnErlxY&X-Amz-Signature=f3711f777bc1933832d18f5a9f842aa789ae9285e323a6a98d976039b1e8e7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
