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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFN6COK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaQo%2BxIOLXnfnzV46PNPbWeMLXsBDODwzmUdxgXeOLbAiEA8IJERgt8Zgh5qBMuQ2GSIUeBM%2FziYfnUPdz5UxbHPGQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEMvbxcubEhTyE5qSrcA9bxAxwGuPi9d%2F0Zh3%2FZnSEHDfGJEDVwvjCf2nWYdunG9paL8wvnaP%2B5M8Zupu%2FQ00a8S%2FjSK2PFocLzeSyzcgP8BUX7cUGOZosmtdOvqMrc3lahplU8sTRzV%2BIF7up18vm5vKaK13PIRM%2FoOaEsU12HpbDNoEEVYQugCbWE04RsfZ5YalB5EPaIyGpnKHt2%2Fuo10guwCV37weNBk5ULDGfONQquwuwVZdtpk%2FfPXHTmEsH5prSp8Xeue64ZDGylGmI6cSNjoahDIWd2AFOv0RLs%2Bl%2BNBVhuhYQ6xwXRdxD6%2F6KZsUDOJOTJTDJp3OSrNx%2Bo8yx0p1E8Is9sEJ5GWeiY1OLziswmk8dZLNknr%2FAYouk9kvZY7aqx8FMQlN%2BUs7rJI1%2F4WHdmup15rF0RoKuM3c7q0ziPS6NqINMPZFIaN%2BOO4qhMo%2F7A3MCJMCYvPUwfSGnyhantu8gcMfkI61PO26Ls6FaT1ikNW4cfwC7XFEDXi3D5JpijGRQlQek6tUgrsv2LgKZgx2cMEzomS8AwzUC0buWl26zX7hmsUIIsddj0ZZJyOOMdpEWhEMehYo4%2FuLYI3MiRNSKroF8qTr7HRw%2FMZm1125ZeiKprhigoqyJ8YcCkxHSca0gBMO%2FMr8QGOqUBW9JyIVsH1rxfWduh0lk5W432RDu%2FzXSs3NRqki%2BrDHuyYy7kzKbyRYl%2BUFCrtkZLkW0XRGvvbhfUg57OXntR399ZmVUIZ6vjmOaO2iXVhqBvjHIYj1Wmfdb7R9K4RSXJb3Z5JOPLSqkFtYR%2FWEkDWSsSZ45KNxdKpGjfsu4KUK46gzxvyeIcU%2FqQff9Kqr2usIwzYnAPBmFPNFuck5%2Fb8nPtiQuI&X-Amz-Signature=9dd9351782fb9eb00692245d17bd7258a8c977bf522514efd0ce97cde480cccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4NV4ZQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDShnYpTmxiWLt6ar6CCw15VDek8Dk6h085L9blsCDIeAIgXniqBS32AkFxhAqe8c8%2BeSN7XyzvzkIFBHellT5696sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgKmkxs9HnVqeWt%2FCrcA9GAbypaJyp88CAUKVrSA4SJN4vrjuxFfC0U0T11jvk5DNqdDjNE2gTVmA7rSAGcAT%2FIJMPn3QGj%2FbG2T1pBBlXV%2BVldNn07jUAFepxsahOcYfRmhEZHDRISUqQ1J8mdDQYmQFArcAQ8vw%2FBum%2F4YTZ0n14WvPvViSWlimzH%2BDsud0hbBXFZWmHm%2FToECM3wEmo8Du75tra77giQz1MrBsHKTzr90%2FMVhw77pH%2BeNHE8MvrQQDI2%2BdRJ%2BFd9sFYE%2FngTIpGWlYmd9VOs9L1bY9UKP6k46Xgv6V%2BwrQ1DCmDPqJjpFc4jTMBljtuoHBR0TzpIVY0O%2B3Y%2BBg%2BaLPLVRv%2F1S1PMTvTmc4OrRTYBRPLvfjyC2FyYshpG9GuSgPxYzEMWCAeNxz%2B0C2d%2Fcga0Na3gFQBtyFuPDuSb8D385pFRQIB7LbI746ZaeN8bHihLdtbLM7sou6im22UsJ377%2B3XWq34Sv0f%2Fo5ekwjm7KllhJJyeR4VYBIVt3mjet8LnsPe%2B7%2Fsu4Jnmtp8w3fXb%2FbnQMAeZiLVA6beo28eUJOVi%2FZ%2BrAocyLnvZ5X%2BZYYTv8aARwxHBtVGGi1UnK45r%2F4d%2B%2BVJuPDov6%2Fv1blgI1pEBW0XVn4a3uQ4%2FItN8MMHNr8QGOqUBKkrszGFYbZ39o%2F8j5mKnpGEFcjCtmBoTE%2BoCP88LgMtYFhOzcrcM70pV0L%2FOjwB5jEFNOkLfuE1h%2FBhIrtMZIAriqyXyf%2BvuX3ffWOY1%2BnfQ2mIS%2B5UbdD4GTbiNbouy3TviLa5mWllmR%2FHLVVlULj6LO9ui42qp7Tcr06ogqgEUcuH8QGjWnWtOBVfr8cjFsIXOdhoGep69MnL0YuVOyJbzJl4e&X-Amz-Signature=21ace1954e328ec119b5bf6d70928b0098910b1201481617ad910c0a032ad5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
