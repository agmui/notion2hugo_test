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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2CJLAF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8MhBnv5weggDPR13CCSE0xvaEC%2F%2FRk0llnHb9LgdNngIga6GItHeLgTMzRKch8SkzYwZokt1pAcDmn18G8EHm6lgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYERplgOi8yvAD71ircA6OBlIP5yBjgvLwWqjbVD%2FW%2F25P37IB55hdgicne64ijJxkefXUiCaNsV14mFogtt4Wf9ukxQXkRsR3GDh%2FnlsAz719rByuDGbkCjysOF2h2OsTRmEJejwiOGj0GfI8NSaHXG0FgZ8BhpGECl%2FbpOq6%2BggIOI8ZbbJr2xqS4fCYpvkoAMLwfB%2FuV4zqbGXJWo2Z%2BlwXjJt7dzcBXbDm15iIM%2FTAZt9A0Cvkujs%2FgIXPgGwqi9Eqpfv5CL2B0Cdm9JU5IffTufKfyKCCfmkxRvXYYiE5DgrZG9VEwPsfmxwpY4fE4OgUBuHqeiCa%2FX%2BFxYbet2pBAJISnUxelV2czvRHjcEH%2FxOcp7FerSxIlAP7CI5FDjLuA1OVyjGYgYiTi3W9AK9aWhi2ILUwf2qOGWwQ%2FprXada1SM%2BwTSklyImKV1OSIrdoU5USfVMf%2FgT0XvQzXdvWQ%2BQ5yFZhoMnz3qua5D%2BAiryZbpTZ6tKyh%2FMrgzGA6PT6sZ9EDRZupwZFPaxMLhOpLo8m2DwRjlBdUYlhBgL%2F4Ebxi90ajEub1XJ5pxW0M431fDegDuMpnKsTIQ36EbePmneYkRGF3pMlRSCEZJWYNIEmiesEOfg3HE%2FN55ckHNfHw54pGkmu1MKiG0L4GOqUBkBUbFHezZ0rpLoK9ziyweXyvfolV1m8%2FoTojsFnRtvHCeHVKmBZPDwm3gVqTkxbgHUE8t%2FEVszBxShClnH7Y9VrxtymNtMRADx1Y2TxMK2FhypglffKZf2tCFTpNcoffyuA2Nwau2qk7mZaFtcHLVUvdenRJi98DoVaQ%2FTV0pdX8%2BLH2nos7QwnzXEzA7KNmaMnAeviJA0XDTVEUHbZe4TkeAHN%2F&X-Amz-Signature=d2586a103d69415f36a5bf686710e142021de02c064a9f51ca003b63625706d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNMRCNO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIW9xsyodLdJM4R84Uu2O0FE32zLB%2Bz7UhjVZdkGRoGAiEAgw95FJRSq3Z%2FXjMjUk7PcEaTQVcmWjHEC8Vya12duHkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTwhql2xg04XWzPqSrcA5hC1mJ1tkDTP6EDM8Pq0wVfH4aNsNRaIx5s8Ol8H%2Fjp8zTlbHDjKDkjX46MGFb5UINCV0GpodE%2Frr4uysthLiaUiqL4BRgE1RoIxBw78gmdR0rDVIy3peiY%2BFRtt3aYUWGDSqXazLqITOdUnxRwM13rRpQYFbIZjY%2FRzOkrmCSe%2ByLY0l1XadIHWb2CIpn1FiYiKGR%2B%2Fd7dQlSYZSpMaeaeb%2B4CLyDv%2BQrMyLORhA6EBxd8sq52Yb8bK7a7l04ljActyxs%2FTPb5D0XSXv9npwCNeW7JyE62GTuP9nRRJrTv%2Bhi%2FVPi3gqzLZBrsPgdA2rBpz%2F%2B61509%2Bp4hjjQM64FwqVSgaZ4uaaSdO74NOAQ2XUs5ieLUBUO3cqkI8340v7W1VD6UL5Wf12ZEsX%2B%2BFXFE5JgJpy%2FAPRI3nL9kGD3uvYJLAKAgpEuaGzggVcupjxCNm8SZcLl%2BSeYaOAPthRcOxX0iPdI9hi2cpyYJBfVi%2F62N2P6FZRspfkr9GV3G66xaUjh58KAb5BIifbrQIPVMxKa%2BeOgkPchYDEaAZe60IO3jxf0q%2FX97MYiB3q9N5aNuXwuFXy1kfO1OkC9bAsS9NTL71TjDuc4DXfMNwSmvaOq7yVhvd5z0F9lMMN6G0L4GOqUBamZjYi1%2FpkSqWWjKIKACC3Q%2Br5S4xcnvPjDPkAtQ82IfdhDPMKbxG%2FvY%2BdhLFFfdgkVNZGdIz5BJeCA5qyh7dWCPykKRrvD3wttqrRGpF%2BSpDGYkFG%2BSVz8Rr2fdORk%2FOGF7YfroqF%2F2CoVDCV7dpcTM%2Fw2ZKJRK%2F729P1hIDE6pN7tWRT1jRi2KvLc2%2BxkwgDrkT3JRgv3YjyotNTa0UkdYFs%2BZ&X-Amz-Signature=30f508f12ea1988444991a879d29537d522c841ef1d8fbac8086a2b3b7e4d650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
