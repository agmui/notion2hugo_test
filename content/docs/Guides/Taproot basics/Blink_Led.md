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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5P2PVL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQClJWSRhxSM5GXuGMmKr99o60FdOrH6lLxyKtWUEDdFYQIgVrxeImAB3e%2Flz%2BHn8g8Bruiz9BAc44p1mln698SYosQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWY5IRqob5Iag3YjSrcA7bLjf%2FogU5gl4bEOYuO29L8p%2FXWTOqhVOuw5PredqLufix8%2BnVulrgqGM%2BAEddeB%2BJrH7HEVHa5HGijT8hx0pIDefU8h176qCjG3slX9m9nUjuBIVpwxawy5AoLyiDalcXnuW8KWV8Hs8lO9RupeIisz5NE1pqn%2B5du7d6xlxtAmcVB3SsGRAohvprN2qo1ZnYr%2BmdmRiwg1vCECc1ve5SZTABK0Jq0pjwpmS4%2BaLVLXiraQ2IXroTTcKjXBew97GWHY0ODvJkoTkOzJjtPi8rTIyBqeq8uFkEFRNeMYHHN8NbulkgCtprliaMYDSzbirXwH8XR5qE65g%2FWxHKkVcVr8GgYynZs3F%2BjKSP%2BnDbJiRBL1a3ZWNivXnCOlM1JpLr2%2F1Aabyj8LmdgTlLVUjxLJdQGwc0QYGNA6B5wxYLyRY6yb8CCgw2AGGVm4NAnTgMs0SNO5uwKRc4YmWdNVX9EmivnI5Cf00bdX3ppLXnfUB%2BSrg5RoRwK35C4lJpG5M5lZUSCJu%2FwWz7y8yPcbKVwCH5vxSnLzCYmxhgdOhUFlEfcgAINQwkvl0aOj0fXvz69YAAPfbsI5XfEPuPNHPs7epGsjJupKgkyPiItpSswS%2B57ULMnaXkX6%2BWlMOem8r4GOqUBy256LX%2BtfOCgeDeBb61yRE%2F1ID3PoZ1U13gQQ%2FZ8Bnf5gySs%2FekdTCFMk8ciWndrfWnqwpyghlMPKXdAkJoTspplsSO23LHGI%2BzQ9rte6qtem1TxPbXwb0ngPqbpRLfo%2F5LSGePuSPRgt2ATWDMGHlu6u%2BucovDGPOJhchshHAN%2FfVcZTZ7aUTbb%2BjtppRP4PTDcT0YnccxxEJ4LOE4MLvM9jC1X&X-Amz-Signature=0a7c444408ece62309bbe8c6a06d92b1fbfbfc5f3ea7bc932f9cc3058dcfb3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPAQARJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD90xtQjEesc187h4WFpjrRcH1KixdvM%2BWrkFfXsLrMlwIhAJ9UT87LamMQXV1P8CGlhE1rQZAiZR7FAOIpDgE63lkBKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLDK1UEgGSY9EzBTUq3APk9uWP9s6QnNYlTigPqzOQMoo0YBZIFQ%2Fvw7EXzGOGMTrj5sZ9X0BBV0T8ppjAvGGGaNh%2BPmNSpWCSt0qVNRQ7lZT8azQjCu8KcBCGHF3%2BffYrChx9KSXqZvLVV2yfR6bb9v6yT5HyjYXVUQBHkGE35D4UEgCYhDl0VCdm4DzrJgZfn%2BjPFlHpgb%2FL3dUWL5XjDD4DmNhh0m%2BjNT07pvoamBEa5L%2Bw3hNYX16AdgbcVIfY0NyDDFWLJElseJ3Sn9dXsfUB2zm0OF67uChl6jsByXyt0I4%2Ft%2BNPym%2BgfLRAI%2BSJJ6JlEhDeuH5ydIvzCTWlcqsDVFk6oDQOvrlpsTytNkXwa8TRfBkOhkzDppM%2Bwly6xU23tZyy%2BXMv5Zc2%2ByT05OaRi0BtMK%2BlUvOZ3K9v%2BEozDOLmLO%2BAFLfkwry%2FwbeU2HejELqS4s%2FhE3uHEH3l1xVRK8IBInpJMng7%2BMAmRdadrFiOJeqdIyGLWhfa85BgmbBzqssjYfyCCgsvOc19pk%2FwT3rqzngn8HLMihVgEE7tb%2F%2BLf%2Bukr4gDP%2FlivZZ4jvF5FxTFkigFbMVXnQR6%2BN5CiSDDgWXkx0XwB6eaggipPGfDnxgC5%2BOY89Ji6CeCsIVBNlLRjZ180zCgp%2FK%2BBjqkAf5aMbvRr0%2FYRkn1%2FzNJqbiTjj4G3T5tpcbjBzikWD8VvXX2WsqtvgTUDKBJf5%2FVqClea9qWSApH77q96wFPWEG6ZrZpS6ZNUj012OxdclyMIuXciJxIlBfCafao6dM0QXupBtSwXIdtrgdztmPuou%2BgUEpL0DN5pc%2B1Ifm3bzA5YpCGSsSK8I8W3liKyVeWvd891tbL15ichaiZEhg5mkJijoB6&X-Amz-Signature=5e8f3d2d8a7d8f3a331f2070234cfdbc62c17b8cd1695703fd8e04cdb33d10b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
