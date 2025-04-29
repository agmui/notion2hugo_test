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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZD72RG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1mAqBCkIuv5prpeqpBuKu6U%2BEbp3%2B%2B3YHGyAUYzy99AiBX1Z6vSBbJ2Qt5LpoKomVbhsuPuBeTcdFhZXeDaV%2FsgiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk8dgGBKRUo61byhKtwD3wlO5hA3dtYxj5SE8mEDytFKv91NcGcl6jwq37QdQ9NlUdDN3o8szHFOvt4L6J2uxwI4CjHFHWq5%2BGSEOXiw3uUPYRi0B3pB8EXaA%2F8D7ui%2FBe9SMQvu%2B%2BBKttAMfGhicpFU%2FDtDwusFYfogrPL6u%2Bz1eF1Axqwrw%2Fwyd0lPLY%2BSKL1Csq0TyEzwNP76WAV%2BuAACusHYlAtQf%2F7cUWDs4P1LfuxuJArtHegcY%2BCBmvikPrUfQ2C78y2SqXx7Vzdg0wyh7eQwTJT5s7Bc4hLeu%2BP%2Fy8%2BghL7sLVSJ8PfPQfE54UwkwflVEy4xoWQ5lbDFV6b5gC87ePNuc6%2FrwsIlHkUu3Y%2BjiqUlpjHNT6K4CJ0SAP1CYl4pRCsPUXYsAAioUPiax9dsghqUCYcJMIfkvesBWiEJLgzNPZsnlCt94snxpPZqjcgNTH%2BhEOImTND7IR1zFSRpZNKZGN0nYkxVSUPDm2vaCpUuUOxyKDNidCCiwfaxw7tQmXNFjuAbFoGGN3Kxm0tB1ma2v7wslvVBjmO79vnSTzUze0Vpsqw32iSwmLHRkm5fovrJLhGGpdVysV2avUugT3SP%2FlzcCHY0N9SI9ouULUzfGdR6v6LhkCOxzZnKfr6Yvqt2RrMwwcPCwAY6pgF9%2Fj34872TgSf5hg9IrvyQ5i%2Fwk0Zf1cawM1XiC4%2BnQe0DCWIrclRBsAGK%2F5zRJF0uvEsZRknvsgHfbElcTE272DywdafTw5oR%2FICuorLLYo6pxxNttzgsN24Qcb9%2B%2Bll1NhLLy9VV%2FGV6TccccKcyuBm7E%2FLK64cPEzEURnpCDxKro%2BPsVuIDONg1IU954MqKtRiU35L29SfV%2FFn0%2FQaK2aC6R2fE&X-Amz-Signature=d4331282a3126c3d35a711a8b3576beba4c18cdf269d99e3e3e905864e9ed47a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6JRA6K%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjW%2BytThBnC%2Fs7AGZFojywXrKMFGvOWop11heJvlveiAiASZhdiy7QicAYw%2B4vVrs%2BmmI0jpjYTj940gePcT0j2cCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtytWEPIxlutY1%2BaGKtwD%2Bv37k8IJd2SbSccE6jx%2FLHIcAuV0I%2FTu%2BpqtY8TWyS9uO%2BGWqpKECw8odMW3Tp3qypeZKf6tEvrZSU26rAfHf4OVyGOqegj097dqAIs%2B20O%2BwCDRZOI1lb%2BQbNE%2BQt5o%2ByBJiFJ7hQLHOeYttQoFcuq6A%2BFmQpXlwocIeti4MQJBLUfgj6mhjiaQyS4SPmPjSuOv0eJ5GFNQmpL86Cj3%2FiqwvBtWszKEp0XiiubAMyuGIcWXrtrnscgioOEuyukGYMERIdfspswtJug9dpS1jK4XPOK73e1rbhOFMLiYg5RRbp%2FRtZD1HUs1MLDBY7v9IAnhjDGHvGVBXHOg6VSyaDZrI%2BW12tqK2%2FIp9TDhYSkW5oSCR2vbZ5YHsgElBd%2BoGNfeP03jObaZD9DVQzitTGYEeb00joVMgkLYchRzoIGDpbW8A4CcnHGQgt%2Bp6GQWXUTB4JNfjhjeYT3MeX6qNfBivmVikSwLTnUblXEq%2BMGReE%2FX8j8CeEd6Ek6YPrOK3YcfTuj4fV0Ah1iEhF9w6AKZSchFOhzWamw%2FWU5sdbfVlYWxIURIvt2FAxaPqwsBgt4wkFpdVs7EQhkP3XGl3OT%2Fki1qRJcj8kY%2BdYsrdeP9rOz2wWUhoR3c%2F4EwucTCwAY6pgFn%2Fcmu8dIgv%2BEdeDhtZsSXem8qLD0ijS%2FYi5ZhwudS8gpaQ5Be8oze1jifRhoCGzjfCs4cOqHHDNW2DqJ9x2Xw4o7xFha3IUV0167EELE1lCW2mDchQCQUr5RWhtHEuiSGYV4WlWNIdkSStWAQNUqQstk2ezMMttYEoMCFBBI126gfmCA%2Fr8xh2ijU1XIiEl9qHbLxwxTkJSZ5yJ4YZIGRGaOqUBxN&X-Amz-Signature=16305d6d602e73af9a1da4e19e3e37f73bb9779f5260a677e0592b3610a49095&X-Amz-SignedHeaders=host&x-id=GetObject)

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
