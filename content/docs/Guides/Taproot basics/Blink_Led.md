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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDU2MLZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeVEK1H83Y438WAbRXOu4syc3M6yp0m%2Be7rO3RDElsoAiBbv3b4botLdWjn3TWz2n5d6u5X4MV2yrAkoDUVn4u3fyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrTNEV5deZEnr5vtKtwDXfvW8HlcuoqwtypUt26yG5YfkllmdLOk1WzCZ9qeljhEgztS3WY9rQ33Fjwd4goIj8Jz8Xt6aB7ODpJDUL8pmNzbxngF3bzUPeVKua1ERYagse6arqyaQZsY9orEVJNbOOmyW%2FT4FtwXDlknLOnpRhK9kRopHBSuIsA6KTFgvNG5LZ%2Bm8gcyemOPYPFb78IfTs%2FtmQgUFTpDRzJIWya5zMaZAqVHjVg10DxLq9luXfdbkrysM6IPApyhJTHDH2RIsTubvBUyQytKChxtJPnyb8nbmIYKBiNnvfMUJlug2ADEqEI1sYg%2FspPxLxGU%2F%2FBcV8h2WtjC0AHeL0RdalqMOZezwrjWQ5%2BoJU0o4Cv8pYeZ54pOH7lgrPsx0mHs4Zw9XjVWNNhvm0paSMjSEjTtFSgAVdDyzb4MMJzHcV7ZUTWS9xOSnJqQRhcXSF9B%2FSbNIKvgBH0mseb5eQqB11ndxpGAfN6g6YTii04Fm09DHaXGPWPU2%2B0mke%2BCVEiBs69a%2F1UHekZxXtnQwY8BNtlnkY4bTPzzte0DQGOjZX%2F6yCT0%2F4Y7CBPo6SM60miT8LHC0kx%2BEziGkoEXvWjvBIOMIzoL7pWtYcPmKYyBKq3OKwcp%2BC3bC4hvBtrqupkwnJatwQY6pgFCwXTcYOPU%2FmPjTeBOG6CPMFL757Ep8qAPXcCS6XjPtnZec%2FeMFaxV4XYv%2FQqb2%2B6htgYG7ehNBCdnnmbXlz3EB04gfpH1fOG19vMUBVeaW7Of05asvkKaqY5ytMT3NLVfSNQ91LeCcp%2Bpf%2FuKhzlX1ub260vVqL8%2F5%2BqZgH%2BbsxOGQbvVFLOv%2BalHBpOfIm%2FZAtd%2F9xoQSypdmVtwf%2BV53HBvMute&X-Amz-Signature=fe836502457366ebf0b73262213cc4c806002d6d86524592966897f4fccb1068&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIIROSUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8JHIM2J5ssXExMxDlRCY7u%2B151s0kyu95bHXcuOYq3AIhAJ2Kran5Sa3zhKZqVAhppFbbrN%2FSXrohKcKjc%2B06WXw2KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCtOrqk5PGzAzYTyEq3AOlA3BMccfP9lIjp0jhW21MOCxoydt4ANzO8hfXmr%2BbHbP0K0npGzh5afK4JtVwoeFEsQKwisWbum53nBy1D%2FdwTwlaZuJBOmm6nQEZbPwQzu6Df%2BQ6s%2BNky93pn8mV%2BUEHvc3R3BIFmAGTUNOxwyPFXTDkBPfIJ%2BWKiqJus5JdRy8FFybkga9W17o%2FqWkuldJ%2BCz%2BInGGnXU43gDukU3aDAPPOXS%2Fu6yJWiw5JTbcNgx2OY4XsX5FXiPrDUddEdaaVEnBItKrGrCSXKS%2B%2FVehhXLxkqH25NhkCeFnblv7vAI48khz%2BIjPbClQAOmy43MpLIYh37SpX8VL82bMex7jMzI2VlrVY6Cyjb8jIqWOXiCo2IbusKCHAvsjtDY5fRoA0t7BCViO%2FPhJX5D9eB3laH0pt08MLepozHJYB4SVI3z9nAGBsQguCsLeXgTq8Z%2F2harkZIPOkquDi7jT2vgDb%2BIT1oiy4Zj7ZTho%2FDeW59iZ251uW0QGgKm38zPoV2UlcRUEDhOHX7PRapEVYFw%2BRI1HRMUe%2FARti91X0LmHTw0hO2TAuewVyoxjb91FacT63XD62BAsveNq3kVJSspiRHN9D5CdeT11Rja1akXdmfjSbBhRDPBJEDNWsbjCEr63BBjqkAW5LHRvrCgyRbDeXqcXTS8CV55ZigN4vN6s2OnK5UZM47n8PHbEu86iCKhe%2B6DAjOZDExaXfs6OBBB1RRPQpARO8JT%2FuCbLMLIoaan8a%2Flmm3H0ZSsk4EG7RHkoQmwavjEKjbg9EyVlCcwt66mIe%2FHnyF687S7HYGvSzKHBex%2FdOlXCKZN774YyEYKrS%2BpT66G31EzDeDx1I%2Fk3I4IDXddtrtbJq&X-Amz-Signature=198486000a51dd7ab16c163cd10acf21c546140a5920ff2ec24c69b3b295b49b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
