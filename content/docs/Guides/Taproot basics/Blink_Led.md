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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HE226XW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD189XHfcIn%2BD6GTlAogEMILjn6k3nU%2BZi1w7PVFARPigIgfYeTSONCU7YQ40Yw8OpKF2%2FFri4%2BS1fAKhQNMils5dYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUevXAYBQjEig5s5yrcA31EPPKyJFIDbTIzP9TOssXPVo3XuV8DPNN%2B9gUE1162d169WHjL4p1wD3SF5cF5sWECbKI22CsPomvtgNq%2BZOCqbIEFJQue%2FyU0QWPLM346LyQWhu096oGzO0iSTMMx9Skz8C%2F7Xeo7NVWTarxTtzDAK6kRxBMW3YyzieHmbqmyz%2FjRwH07na9jG%2BUgLWHKwSkNan82cpWP0DZkPZzBlcmzjbAdT9sBj0IlaxQlSDD%2BYtdzQaFF6Mnl%2BFZyYiXiy7P8PUMAhHXBhpQGS2dp6VLZfjtEV8GgV0Sv4%2B4t9W5bq%2BXM%2BEBknQ68ENPDfYbHVctLbr427g%2FANkpVs17RtdfXKX1WstYmQnw9JrI4M8Skf7uiwahV8WwRBXE%2F4czjJg0kifzbzU9nIpmzgL2VPOXPoR7yaJ1%2BaIUltL2BlkOz3oGsg6MJIfjvJSiXlCtXELPZtEo7UQZtzj1i8GW3GPz00qxeFkT7b%2Fc%2FHRqoZXD%2BKSRbAOKg%2Fi0tBVUlLJ%2FbPmu%2Fk4X%2FNH%2BrutBssLvtOAqt%2ByF6%2FRV9mEU6nCKKky32nTfgAQMBEhc%2Bm5Gc9yB2z1KUPSxSTTowMpLAe2W5GWh8tcNqbSK1ek%2B1VWceT4ZjvTLf2ideV5mmrI3fMKW%2F4sQGOqUB3ckXovHE04u8EZk7bkQQIHwoD3Z3H2DzRa9hoUYgfZPy6g2xqyENp7V6%2BjbSEgycSFYSeLOPePQzpxEneEi9sWZt6teNfhb3zi2Qhr6mLD8vC2iTgR%2Flch6nhtE38Q7h4I1oP9Sin8p3nbRpOfctPuJ59p8T%2BYUpT4WB1Ej3CRrAhsvaC1qjhmfc8kMyz%2BkX1OpfB2oYyfI22%2BkaJioGdfgTXECv&X-Amz-Signature=aee1202779bd3e45252b47557d54449803b76039467782cbd87ab2c623e07d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHMNMBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfgLsfu2kwsjVR%2Bhtr9syNeVqVh%2F3km6CCUT1afhf%2FQIhAJ8zLEYjUgVlWBCwXKAEHQU83kcwSnVhQl5lAih%2BeeXKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkfKEwzu5mXK4F90Mq3AMD1AfYGIH6UcX7zvzCGyYO5Dy6LVPSO43AeeQPA6%2Fsi5pBpFhjiKi4wrQSJbVdxvj4KyPuzRIbEu7z8uWZPqvEn3KmjgfCPwVmMhMYgk14lNzvcjx9YLa6ZG8SDaKEEIq5PA8O1TXNrJtnh7nSFqIoazl3%2FQRdWYWxtRwd30nMa6pj5QOwAWNhKSUVuq%2BCl6fo2N2j5nCEMbCaNSjj0YgwDQTQ9Un1nkZzMt%2FRzzMzTnewP1WUQM4fP6iHd55XdwHPHgaQs5VSEHDIBJlsSoGLycnhRez19%2BP7zE6ygA%2FAhCdSKe9VaCI7z0x5%2BzQkcaCypqsthMSNIf1dbOTHmE6p0GQrVJyaPUA5Kv49NM%2FtdFEJA5c8HPVziCULx0lH4HZgxJ2oO7vTTe0DTb66YPNlRqiovx15btXylBQUVexjxm%2B8FaCFr%2BggTDUXXVyOmAwsmymVVPUFAkuC4gycJV7wffSrctEzdfWz3mjMQ8u5%2FDV2ispCQQFYmyhrSvHhttbcaAxf%2FQOZTdk%2FtzQP4ym8OAyw3hPzOnfEkDgBZZjFp22n7nBTadK93LtswndgOTLfDv%2FDO2EB0CWuZi3CmoMq3myATwyxGs9%2BnqjswqDmjMhmC5cIolINd7R5TDCwv%2BLEBjqkARUOIXmeorm1Y4j1G7ijKOkvznAsfKpxgyfyjBVkfYzKdYYO3sgMdybxdkp%2FIuGPAo28ogjjR1fUueZeBxS4De%2FPvNktpQryu9PH0Rj%2B8krQzWhK%2FFx923PDQR%2BTlTN25q8wice43Va32Sf4afr7vHZkaTdx9%2BgSnyu%2BoRSixVrPBvL4lGtsV2Es9vimo6EET5AuhgE%2Fbz5iPqMoQfc34dPdTiVp&X-Amz-Signature=cab2ba2dd10e4bef31a64294ec1daeb224c8b8f20a304924203e1e2beb30c5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
