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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKUE7B5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiKyNS0OYMpEJlbXSLitizAAcvySZKKNR45sEm08xCjwIgAowaWnNGbmYLCH7a%2FxvW2M5Ebba33E%2BfbBH2Oyf8O7Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCSoXw%2Bd32MuzKbB5yrcAx%2B35Py4ykcwP5zeypqLMizyYOI0%2F3jCSQv0kBDbZ558mrUg9O4nNXjIQieDsLhb0AS%2Fr2my39kOh57AGuEylnlsKtpouyAHnorBPD0w%2F9ktv2ixF8bCLnWXolsrffx5d60DMTrGjrckAwIoTavm18bhf9bmSnANv2iIDvJL%2FLTyGDiXMII7eYQi35vyENh17JwQLCfnZ4voIWITrvX7qeIiksGfT0DFSw8mpby3y8X27Hyib5axdaC3JfuKEQ50PhQsL096oEy716ub9Ha2shZUMswYStPzbWjJN59a%2BCitn4r1Audu%2FV30b%2FabFmpPLffunpCjNRpnBe6Y6LvkhHWK9GE730beApDtMpxnzE9RAFBWfwD4HGdZc076DpHFsyGq0xUj46%2BTl44tLb%2FUcEdujT2VzzEgbZUw%2BrtJmS5UlzpA%2Fclw0NO8aSUKgbz6ipsaVmoHFCokZ2uLfOd%2Fw3ZLXPZX0WWJ%2FLGQAKTyL60j%2FvarBvFL9xmGFPobb7cfrNJb%2F4CD%2Bzg0heBq8L3btuHWluwzs0unGVbzljg72cUSJrGHW90HJiJg6uYbaDsjh%2B2XmGMRiKL%2FhTU%2BumedSq3NEtKl%2FzacjjMzuwJB2hvqhAIgw4D0YM7aAQnFMK657sAGOqUBvH0k%2Fl7M11yvy%2BDENHaM%2FuSfQmpR6YtwhO6wPdGFBZtgiBkqU19L1TYYdhcXH5MNqq5yMmSiuwki%2FK%2FE%2FTO2pgpq4mEnnWnoOq3qMEI68wpnK9WBhNNTN03cIVCWz7vWPQtKKKzMvIZUYUE3TG%2BdapGZ83a7Ss3oSZE%2FnIIUAbTVBC9689k0twOJdkm1w6CcgUeFIbmhKq5YkNFHl2rXYYX9Vluo&X-Amz-Signature=901be1bf0085023e9387937c4f7018dd434f278e65edf8c756fecf0dd4f8b4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGRP2XUG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXXKDLdUOMAMljQpMABMEepafPXgYoidBKda6Gurf%2BlAiEAs4RPDmroHem6vXdHY7cg1C2x3e8jfmHR01jrpwqBpv8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPXX0mL%2B7qXbOX1DJCrcA0tQR0fZRMaSyj2IspsbGorH9Y6AnoHL%2FErjSdH7k9tPTkWeGSm28J%2BqiaFmAYRy02Wb%2B%2FoFF%2BDyxhi28jGh7p%2BRIrNg2y4XnkakCPPbuTZdflC3PeeHNcjlwb%2FeoLpSj79Rl1tZDjVyrV7iOMomSV0dw8atMpkUT2NVUHOyX9n7Qko2OfDwDk1S9J%2FRxyr%2BAlgJNIAMIoEClCaR8xzoKqy2Je84T%2FSRsJ7eveSdqsc32GIrpLjcoZa%2FXYg6TDSzcaHcH7xOD5g5qvOIl8xj3x5Ffq7z1PH4tq0rlK4X7SUzRB630SUbVaH9XvFwK2vDufSLwqA67TN4gnCms6ikKOzz65xyWHdeNteqynRRFOrwAxayVoXYfXIleKntN7g0gU2BF%2BvfsoCrGr3awcE55C5zNCXweELsWLAXgKFgaeepuIG7BOuoeJjdLpDaWuCz9yWwpQrQJYl6uKTo0YWxs9DsmTElqhUnc1CV633VCgB%2B7ch%2F1TZAC3XOSXM5B2k0y6WWZ7Ks%2BCijo5N9z4ldcQHiINdMLPdRo%2F%2Fzo%2B60%2Bk9kNaJ6KalJTD61ZeMNgCsPj3Izuuvo%2BL3RsdW8CyzvB7sV5mJNJouWXb1HSFIfUsQ54JgxeoQhXX%2B2MuHWMKy57sAGOqUBj3VKeO2oBLUvJ6GfMavQlws7bUKxrWVkdRwpTcSSu6qKQawjnCCKb38VcAGIpu1SA8FhiQNNl7791qiIu3Wmx3skq7fZ6IBcI1JIJ8KZbnL0ycO8N1YWv4kT0u%2BG4N9epWTdxPlYniXcXfz96ka%2FmVxN5KQ3vG4Ddu4LFhl9k9nAGtAqtHAOsyn3AOtJBkPse7%2FodCybXXMvVFaoHrwieg8DAuIU&X-Amz-Signature=75929278ed585dd1c7d2285d24de90f448116be936c26cb735c36f30079d55c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
