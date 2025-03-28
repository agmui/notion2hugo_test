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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DFOZOM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGDv7HkaedA0oCObMit8cw7nCBV4hUbPiHxkzBCkrkIQIgOMUmWe5Oa4sYr7Q463LXFjS6KC0lsNcSf56zJy1GEI8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJJZk3i5GOMo4izG%2FSrcA4pbkpHLe%2B7SRWGzJjwDHISp5wSpZ4DWjOHQVWMxK1QE2huX32F1fSnvAmhKSJbIIVb%2ByaIGGKRX7xW0m5JNheBpHBeMp7YRPBizYVwNIy8LzCj8MhU7TNR%2BLksJW3hIfvouPLsJ3wi5VXsr8Ofy9eDzO%2BVgcVN9%2Bs38LqIRDb%2BoR8ZchhTbaESTvB5FMkakj474c8SS9AEuDr%2FcteNI4IduCHUgtxBFQbNuSk1h5%2Fx5fZaaeVkz1d9pntp%2BOlVYG5zSwGGyfP%2BcBIPAXDSbSfBxxIhaWjeMrdJMAZJgr3YakoaLtkjcWRptukoV93teHYUFVqg2SnvotFsVr5ixPxp%2F8jTXsXE8gr%2FTksI3oA3z7cl0gQ6B9dAFbAlot7i4dtkrLWyzegnOO7pqsjY5uVArqI6IZkoEJFjXKcdN5sA5Eq4sk%2B5oG8EmVClKHD60hpcW5Gt0hBGxgss2UBDbRgKFkDXNqiD8FQdlfRxc7olHopZEiz757mYU58jh1pZosqBuGAO6nKe21ns%2Bdl4PqW%2BR3%2F0q2bXl2sc9PIkGCj4fnMXe7v2fEiyu67KCoCFtUhSzXb4FQPM1Clb8utYzFZzLL0d1YX77xLkP0J%2F7UOGnNh%2BSBojXrdntwm4DMOWGmb8GOqUB5El5NrOA35rDAc1HKW3pKdP36cNMVFkxVkrgTb1CI%2FEYi1hWDiitniU1qYu4JfIRDoXpY%2B5eNAtwy2CbZXrqkzuBx6%2BrtFVg50PySEmOsdgfBZNI2ab%2Bf48ubcQjolIBDgq%2F6oLkKOkaxDPGs6%2FduWW1hWMSyTmGST3kZaj17W%2BZ7%2B9BrMjFMN2Y3RAsUeXxX5mZsslctkzpxTaRjH9hn4hVBn3V&X-Amz-Signature=6e43d8fb7b36204a34db253082c660e74c3da344c144c169e7a8e27406fc7be3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSMXVZE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3QKecvUXV8spE8TDxM2W1DpRp4d07VPEQ3Hl6z%2F2HsAIgXOLld7v%2F%2BeVmSRiBIbdrxYSbnsguLW1dLwFfMtN6SO4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNPE2oU8Bhd1YEWEPyrcAz%2BOcuHMKzhmhqt%2FAGrLytSQyitDBeJI1Gqy6i5Jf8LZkb8Sfj1IeBQ4sYBAceztmn411qL1Bxl%2F8imBF5vE6eu8KIiHkvpXidDo%2FWbDtToRwv%2F1JQvPs5WYnYqDuy9TyUf1gKcADnYDZ%2F%2FbZguJ7ZYPk9Z7nUweW%2Fx%2FZ5oD3ygmtQNLPCdDwIW%2B5vLwNTsgyKDg2FXobpsuH6qAqvB%2BZgVM6iLd25ECvjbrnB6MgdIyEKVkqmdUQYBszffj18pig9732U4m73%2BUYgKpiIc%2BEqvhjP3GF1XnefJkdWqkbUAAl3wNp7TGnFid7ZGiQ9LZCPp7xELwSlIbvR0zjWZYbux%2BgBJTVn7v2JLVOHpuG%2F67v15BwlKSI%2FPsvMq2HHdt2uxgxOWxvnWYTc8kg0te2ToNHIptHmS5RADgTMPoWPKiEg4NhOsWAgz46w2BLwtvAiTMUpTe7HrooZayiwijdWg6kWC1daEYT%2FyWq8AWfkYAgyTXEShXjtKU%2F2oPMsh1UBFq9SOpaW01CfdkN2%2B0yqANMTF87I34HcnU1cjhl9tsqxiUQxOCmW6mf3sFaRf%2Bv5fa0l5XpR1SniPb8CJDF2hjUqeQeAfsVVRLTBXsKi1E9mcGEAKMuEYba%2BqwMKiGmb8GOqUBTUzRq9EJI33qhDUuz%2BjaoHxCTh1sIrawRbcE1vp%2Bsw6Y0hg4BTQeoxSzdU4NwLhiYnxg4W8oY6ez%2Fo9z%2Fjq4kygBTw09WatZDLhj1r6ctCDszPZK%2FJ7mbQfauLPKcyX3q5Zpivs8ZjA592MPTCDvI0DtRB%2BvZC2qvW2ja3inIK61cX%2BkbtQwnSGCUq%2BUWI%2FzBHP6LQ5LHWL0dItzlqhcx0tzSBWw&X-Amz-Signature=8038eb6eae1660abbb774bff62cfde4c90cb3fb185d04723ebd88d82aa46c1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
