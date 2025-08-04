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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMUYAVA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDRcpDQVxGBkPlyDLyaUc%2FxZGbbdXn4SLMuOw1T7iXjXAIhALDOQAQYwd%2Bf428hli%2B7mIbhipBUmc4WGL3NYQ659uD%2FKv8DCEoQABoMNjM3NDIzMTgzODA1Igx44Q55A6%2Bgs8ZIq5cq3AMNxvdHY6HjU%2BU3L8bzfzzPJFXOaStXtcx5779oCLB4pdbAW0KxW3w3BTydb4sw2kmeWmeONgZrEOeUyHeSZ1P7VKxFuGBXNForVDtH6wntIVx1Hn5bjh17CwC1%2BJAlvBlqJBJ8Sz%2FOAaKjqzmdJrIe7GQts6%2FWT%2Fiv4UOaVvFI2cNhC6U%2Fgg1RxdI%2Fb2rlT%2BKDzLq0Fu4O6zaWub2EQWXEMlIEyvIa%2FeSbbB0F82EPdbP%2BB%2Bq%2F%2FjvDWk80XkvoEUnbK9Sr71ggKRRUCZ9feWzXE9mu%2BODIKuElHeptuLaa1dHRM2Ar2PaSCp3C7M618mX2gdfo%2B6%2Febm%2FS2oBsL7mqfysq8RMW1lZ7X0YStSv5JT6dIH4g7vg85BX5KHUq8sp3ZsR7f3YAnjqYozbGI4NO7G3aYjA19u%2Bp9mOv6c9WT0e0ijK6ClOBhqfYWhGoyzp2skEQqWO6e9yPg9cl0DPJ%2B8gFlK7gnP0HEeTY03k7S4trg5AplMuJawSkXSqerXQ0gTQw1zRZ2HrRAWNKttjlN17hgiHHT8LXs4n67TL3uJD6JjsTRPHHVtDJMMJ5gy%2FJXEv1Mm6dh8QM7YWPXcjy4QHTBLkep%2BCUp%2F%2BIOoSTeM0Jglw3f96P23KKOzCGz8PEBjqkAdSCgZ3hmttdeo7pWFPg5TMlY9S0u%2BlCFhxh%2Bj1apRekyNJvGWRscmmQLtc%2BoaWcjyW95QgVD3SNsQ5ihY0TSbd7I%2F3P15Mhm2cXsUUFcnZMmsFjUuafQjvDhdj0iXuw6qkUAf09%2B8DaRaENHf0lzrY8K0EPNXfqbVN%2BtA4Qj%2FM1JzBp3l8KInxOP1VApmDOF7pQWX6zP3T3T7fNehalaWVKSJ4w&X-Amz-Signature=327c69252ea5e8d934d7f3984d9334b32da4cd740bdc7dbf3f64c6a71bab799b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYTTYDV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEqmkvdC8uDM7ldwpn0TPKPe%2BdyPV4CCo5T%2Bu5c1e9hVAiEA8xyfBvLKp1XPjDC1I2Je7XhlHqA3ODoHq3ivjG8iwuEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKUJMZJshR4kCjDQ5CrcA0s65bxoWYR4oYyTUIMT4wtQKk2MJ4EV4b5eJTeAjslfgtG71yNsjiCy6nxyoO4Ehfi1ufxxyhfCztcK%2BhePdB2yl%2BRB8BLf4%2BeE32k2qgzc982tRewIZRcEi5TaB7GWLblufYRGk%2BHC6TGeopAtO%2BEWrDQ54Kquk4mKmVBQvSDRKJHVaRbZrXfAYiwilAmHfLY4X1orVdKAj43j9p1RXlkmp8VG0WQtlA8yFN%2FH3gbhwdFFXkLRimLV6%2BUk81VIj1NcM3GQycFvzfWRXNdMq1mpOqnO4uaaWDTY38yov69DfbMzvsaaB8jG9Ysqxeu%2FaodsEbR5bY%2B2NK%2BluenBnt3koXiHvl9r2vyYCUS8adfiMUh27z9%2BSjmWTCoPA0%2FZMOX3DQMDxcsqHtnGwQS5pqDPK%2FZCcIgmLgV6ke7BLCETd9BheUI8qe%2Bkh1SXX1HLcp4OsRJ9GwJWbTcUKQzkqed8HrUCSB6VByjwOF6xIiqYa%2FOfU26%2FLdR68o57d0R3ea9SKd5CYXTzVuKLPnD3dMGXZ%2B9V5rA42naNp2ns8XQxZDpn2oTyaiikcGFu3DYv9g2yqfvTh9hlG5PaZM97I7jN%2FvkkQy9UhvrP7xUEd%2BMUYyA046YVLUzlWKJZMNTOw8QGOqUBgnxaEhVyFswqg0ItGBXztZ9xxXzDSl2poiBdqMlcd01TECHl%2BIbzT76CFlfIMwNGaJ3kdeAo36pppz0b6%2Bwf8N4tFum7aIghKwwNmlf3HM%2FatMzz4riPV8DOP8ckyWmBbwV%2BrdMnqHvx%2Bu6%2FsBa%2F07%2B0Mxo1eBIyZgw1Uv5pw0ofgejiO5%2BkX0jZ8r71lK3yukZSbDSuwV%2F3EHgL91wwlp%2BprvYi&X-Amz-Signature=7c289bcf8b0861b141a777ecf99434c569335e276bfa6565cf4cf28f9af3f05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
