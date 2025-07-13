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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPC3KLV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW7mAMeMcli2qV72SaN9wQS2F%2Fx3FwBVLyd0Axwd2BlAiEA6PlpeDyg7p%2Bz9MkMq9Xz9Z9tn1EKKJbfsa8%2BzVvizjsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNeUBjh2byY1Ph6aSrcA4og8JjLS9Ecve25mFroDtmw3k%2BPSh4fIe9z61opDXLOWAnuqPYeCQJn6puu8U6DAxccXlvdpeVDFFsShr%2FPgPBR0ZBGKmfXXTnbTXXgzmuAztS5Z5R2gEmloEOXXpOQuXILlpRaoHdiq39h6rvIAjwG14AVWluMgsMwzgQ%2BDCg40qR0DNkIARXDyyE2G0GW78aby8hhsH7sZo5pReQ1Hc1NK5vKszM2rhdz5HsZ%2FiFKu3sz5h1aEHT%2FqFEwnQM3ynFU6puR5Wh0csnFbZP5jOHZnditC7B2Pj4OyyQ8k%2BAVF85vnhbUtrfD3KVbAByRU24SIeAP0YHohPbKr7%2FDh%2Bmcgk8%2F5hXh372CfkIudt0ftRpB6R7dPR8JBaZaeb2wVii49DBpZeviRLMrDKFWTymMMNU92Y30u5tZVN6XJJlK9la4uheot047ioAo7uGqcrUlJ3QeEdqlxcbMJLe0z9hsBbnh6%2BEMKYNkBe06V6sKbGeoCK9mxrdPKqRxNQCdjlWdp%2BRTar8vkWD4fd481U1gkUgX6orIG%2F%2BVg9VSoMzW1pg8JcqIR5gtT8WT6O9TdA1tkotulupOkMPzUJKtRC2fB3Bhb24XS59bH8lsigXnp63EwrLC47n06%2FtbMM2BzMMGOqUBp2ziqJUsw1j5AtNFkAdxh4WKIqKm8YmFpn98R00ZHIBt3cJNTDyIgLG%2BwHeuOPXrCX1J7slQbSN%2F57MW4SgI9X0qXheQAiVt78wPNyFEeFDXAhxwjxAMYg2g2CfItR7aqiYUYbvTK8ZbivXevld9Kr2VYRawsLOgTaATe16k2Pb2wGSkfovHP%2BxPT6qrXreNVeHMf6YyoG8f6DtVkY1GfmStJtLN&X-Amz-Signature=377d4cefa6ee65b9a5e4c275018f34c6fe8cf4334c231f2bafd89ed385089cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUDEFSY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7uyLnHy9%2B6wLJsm22bIcalZdmNk54gB0qoPCAsjBHWgIgL8JySEs3uWf8lXuZLeoliFCxYdOXRHDc2%2Fitpr5bWwIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtzhf4XjbGtfP9vVircA5Rd3q0mPU7lpveCtJgTtvi2vp6i22cPALk0TpmXOJVkU6hsBlK1efoPTZtYxTr2F9VzuLeJ7HDNhZbAqKOGMDLm%2FXBctiXw5D4ejrPKHgH5e0c0rJoahg7eq5%2F2YvHYeJSMPkVzJRyMeURQanKcSMcOScSTe8sbKpv%2FETb2BS5S%2FAhjmjZvdoq9nG%2Bbl0CR%2BOSxdrIw1Ay9gnTQMXt%2F4hgxVqDV0ybdYmRrlwmwuNRlPKEAvVcLaEIZSgfvY26mmLlQXJ1EvLF0IBWWOd8iOmjTznqOI84Rn0OwHCo%2FdtSuPyrmrhyWkELaRBwgbSL%2BLOG45ENMJTfTLjqQmUnv1JvynGDO%2FWpbeOWuDCFkfa0dFu8lRLX1smwGY4frlzyLmAJIR7d303z3wGHzoATfiryfy4fmE3OVXY4Y%2BuakmEOmHnsw%2FhJjaPoTn%2F83Yt1zmFfGjRNmOCgHgc6B6uFDKhjl8NA1rTj%2FozXUn9pqju%2B0TLqMoKjxX5VIIvPQE2ntIAjBUM%2BRaXh7x2vAKyoPxBC%2BG646tfBHvS7SlFH0kkNs1ceUCKE5SQuOw2GzF%2F8V36WgpccJXWyAEqr797h1Ba9mHhkFK4pic11nNJfNLVjvpIOlkKAWx8iR0S9SMMSBzMMGOqUBq2smNThqtQ%2B6v1bp2jHMmSvlEjExdRKO5rAo4RXCm%2BTrKZ%2BMSirbxiFt8JOscF7GkjW7AMOZCd931JtUmpu9%2BsoH20DAo77HHI0zcyqDHtfgQb%2FTsePxeu2ucFzFmmqlGK5M98NNa2IFACMaXJMd6LkW4y5NcNr2Pj7gDIpg6vj8l7LpepGmJquSeMXkXdTbHfpLoqrKgrDEgJrGG37ORM5HSVYv&X-Amz-Signature=73517d1857b0396301ee0b837cc353234249f133ef61f17b703002eebe53f86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
