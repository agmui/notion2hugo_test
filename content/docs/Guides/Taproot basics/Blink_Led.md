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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFX3LQP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBToX8SjPIzwJSmOBHO3GQg065OZU24YJJlwltkwT1AXAiBF2it%2FyhUOgW2YpUx8V4u9LaPHfBiAqo%2BrnFOQFLwFgSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmPh8NefxxCu8p3cKtwDWSs1Y4iW5c%2BC7rouOm3GOHB99YfE9SPgKvDCVKQTh6QVqO93lgVFrvnmzU2wDSyIYMf1KVPE66967MO34Er22HnB4n%2FLkm2JQcwbv%2BovWcx4bzqtopxv7B%2B2LSDjgdYxQDzWtjCOJ6v3nenC%2Bl%2BUPHo2sjh5f0mdXntwOd7%2BUqEVb7jwJuFz7OTnHv20%2BQbDZMSjICzvNumvlF8xENhUfVuyuPxgjN3sOtHUmmqt8qBayFErm5YD0txNyrnqpurqW%2B3MN3W6%2FIiFMBOXePEPrTRFBZ5BZtBDR02ByL78o3X9Ehh%2BpmvNjoHQo2TxWGGz4U37gh3NNoK4jW3XR4G2pmo5zGTeieFnAJXnRJ0GQ0okZt7Hf4C%2BtxZ2BlYMQgylI5Cot3i8tvalziwzXcfnXdCUdSz5tPpbUeAO%2FqYjHPUIbjcOtxP9zTFVQl%2FIfet%2FK9KmgUrO3oGOOVdNDjOZ0l%2FSo%2FvOhcKzBEYXdGcu5RHrWONYqx06qzdWL9C3T%2BMoWR9SXiCR4%2Fva%2FoTN6%2F447SM4F3HHDfALGddYzMXpxYqYI8ZX2stpGa1%2BdYBQ6xYJLPFO1PYe1vKmmIMnxnIe0w%2Fzf8XPZc1sgzTmmpfhNvnMXU5ApOGfSAj1kBMw%2FpjixAY6pgEXiymSllsjLfkYEaqHGeCjeB%2FtSjD0gSY2VkG9OvBDprLdcfbyJzMe2cIw9TFsj8vTV412M3LDuyxpUo%2BfgQL9d8Frw9brRCyElf7GAe3Se6evMFy0K83oa7mkhdPIFnAc1a%2B8wch5%2FEQpTOefl5AXOK3wUBmOk%2Brh5LeWnRsOpBg12Ga3tSYNzexXRQy8EJ6sk3g1UvPdumfnvTNLXobhjD0nEAOO&X-Amz-Signature=9e42f083b02ee36302411f1ece751bd83f230d97353792b99a54905a69bdc7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZYQVHQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdmapjuu07U4k4Xem3HCBy7b58Ayt8wgV3poppCkBrtAiEA69oncuKTJJUptwSH74kXOumCx0mBAp9SsEfGdU9U8vsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIQq4t4AeUYKdF7iSrcA73VVfr%2F%2FybFI74kJJKTo74LyVLhB69jd%2Bi8iblDI0W90tuMbK7uvOchD2GP3D0Pe0GNlkNAFR%2B7SZ0m9jWBylMNthawUSZhHy7qK1JG3u1Trfhai0s2%2FvqS5oo3hEZYDCiMOaWPL5MaeZaS4x89L0fuCySXHw85Finc1OCwItFaSCmXtPM3lDTAGyTA0qOn3aBFKqv1R3W0730qvIjgH%2BYtkh3mZ0H1Qz8O9c%2FpHdT8w1jHf4DyKKqqNMFIqqiFFru6yxwfUjpDRLk3Kd58S0Pu%2Bn3KFyeDb37kLTEtgkZ39%2F%2Fp4yc8o6YCHXsLcvWFlSK1E1NfEPeFvo%2B9fMHUJ1zVF%2F7cCxzX0O%2FLrIHomcWZUBmEoZ%2B5288TDS%2BytSDzCu0G37Ir9julmt83C%2BX8dU0IfCRM%2FLb5QQW58Jc1pf%2FDwcPuzDvUcgU6CBRSBbH4Oa9So%2FA4quBvnbJLCM6BHxX3ECsOT8qEVyuoBdfYAohgZ4MUuf%2FES0AQ0aCOMOks4luOrg1B%2B7njbcnaJ5XD1btwCCUc%2BEjk6DSTvi%2BpMtBm0bNKmd5L3DmsmpN5LQPgzanEHuV3vn2nVch3uXuEpiTcrtMjLOLC%2B5HMuxRbMgN%2FfdtElO4%2Fler%2FmiBUMLCY4sQGOqUBskJdERv5SgBxJckwA5TWHUkmfv4ugfnhOU8tTWqXVv%2BnvobuuIqHAfgAYrABv%2Bqd3XiThHgVuWw2XAlhUS9CquF6zJro5crN3yPaw0oaeYsUJQ2Cpm6fHpKYhaGTDF4XoBEZPcgwY%2Bi9N9L3ZGw1PuKpUDpQmwCXzlfb7XEwkURwMdEgMut9j6DooxbUGFPK6gcsXzED%2FPRG%2BpdCfOJ1lPESuvRG&X-Amz-Signature=82f411eda5b62d441ec36354b28a87120e8b3ace9c96f3a417d4cd726528ce6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
