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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWHUU4H%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPWnbzoGHZfVXYLUJawnnChhsYcjUL4gR1%2BdvFok3pAIhAPdO2OdCBe2k1uy8938kqCCAz1IdNgqXVmYFJv52cA72KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzowjLVSBtIO0k8B9oq3ANhH1GygKTg7e5e7Q6SemHAQJ4Dp6qvDT1qMG6osPG8P6uwx6zmKIGI8dXOTHTeL93czG9KNzp73qhXLoVch%2FnUOuIKQ9P9roZSei89L0a5bnL0omx8MynOmCdXSBRl1PyhAq0HSrlXo0tgr5wvDmkrs%2BUsqbLrNsIQ4D8T7CPSyH7pnnIhGeRe9npBiIYsC9ZKLJHNHBU%2FaFPeYBT32hntuRIPUn1i2h0RGzNbhCGMuRwilQXUZ0bZCld833lyqicw4XKgJF66rzt2JWLVzat%2BS3ThIvCqAs%2BF8CWv4tFbOqzBARprJH4xCZZd6eNS8AjEO7TQaBcSjUX%2BW6Jm5dfS8iYu3qGe2qnjXLkLt%2FW3sOYdbeZdssSqpwd18fgvyzzocQnQHzc1jopNs50ym5cvlvyioUOLhLHzGC3cTOZq5TfaKd3ZRXC2m8Fok17UNssVlRJi9Av2kB6%2FK8xGmHIJZQXVFr97w3UMMkbxiMQeB0Xg3MwY3JO3oF9AxxYicIPf3tjpdVZ2wX4ge7%2BwEiqWzNAHxXrTOmQv1NAnnK2JBgI4gKoUZDr0teM20B7wkXK8RHTtK7DgCkGWpTnwrWIvPwgrk%2FLlXX%2B47XVHlIO2TApVibNhfrqh8zKPmjC2%2BJi%2BBjqkASrZmhIrmmpQlIPphaqf9vosEV%2BfClmhxYP%2F0kYFl31%2B297eb2H1XC6IGoZ6e%2F4fwuQhwzw9xsyoTJt%2F3jMA4dGZW1OtJkx4iXvaqMAc%2FhEe9vNImeK5xNRNqPpJbPX8q%2Ft144ORcGExDFdDHhYtgYTmCIhlUAhykFGPnnGzfy8Eyim9%2FkYDxj5ILzzbToB8JJVqWyvOVzILEh%2FYPeMManDVGEX3&X-Amz-Signature=2caaa625fcd0d04bba33dc31ef8ce0287e421c1c78f699c0b932dc72fd9a7819&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITFOTTM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs8pyFgOtzFlBQnb064USBYAsvPWWhQD4JIfSPxq5BwIgDvT0WmIYeXqEB4VtnfjAJuJppL39mZQK7Xfg2I0mW6oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKYV%2F0OLQxrQ%2Bth3CrcA06VpcbbzCatuhofrTMXNS3kWNum6Bqlzp5Qfg%2FRvmG1aoC%2F3TE1uKG8F3njhODhT%2BSZu0GwhqMYXiQoB3XYMR13Aa3t2vK3cA6roP5molwf9vBiIRg7M5bVb%2FDdDxxMYEwQi3JpunJ75%2FQOZwNm67UpFyiepzKovevPEBw3XMx%2FH00beo8GhFhH2Yn6%2F7%2FvzShT%2FgPWwaKQtvDqvZUFB%2F3v3yY%2BYZs7xNM38azdx%2B0GAUaW%2FQIWcUNtM%2F0a5EcpsB9iyyB4Vf27WS1w6uyMq65YDU6gz9tYAtnjHlIspx1ilfAI0Xnbg6%2BMo34%2B%2F1KNkXN3eBdMyFD95QNBZal%2F1aJ1kKjo78bPHuSexbkOOItD6JoTka7TBiHvnCnmNHxsJFBhYrTgl1oK1HTLsdRCJ7hSuE8jBSl%2Byvlodd5DoH49Zcy1iwT%2BWaLr7y%2BQ0mK4ak7Qga%2FxGaJH2rEEDV7A2DJBvFkwvJLl2w34e4hI0F4ihm6aE1FrxVCLPnsWmyS9OieAd%2B%2FFzTNbkZiVIj7Qv%2BzEcQiPj9%2B6yqm9akl%2B0%2FxId2Bu6ehRug9CGNpD7wsmu6QoXPurhVDyw2aIwqg%2FBKuPCx0tc0noUWK5On7rFPdb5%2F%2FvQhrlA1AAJKN3MOf4mL4GOqUBmTH%2Fp8BzIv%2BzFwu6GysQjOrioy7KRwX%2BujTOS2y9%2BEvCnbA22qbt5HiAj2w2Y3ri1RAIgpZI9%2FaZnuN%2B0SMFKw0egfN7v35IM%2BHZnbuQK1Iari3qMqIVyVaHuY31chl8dQ6belHUBDaXycHzoD46VjuM7nwWvOaZ74w9MqAeDb3R5njRvlWMyiXwi1Tuf6t%2BjQskqT%2F94%2FDA5Ov270Y3rKrGcIsc&X-Amz-Signature=dcff1d8d54631210ad525860d0357ebe042cf469697ff9f22f40388b04772113&X-Amz-SignedHeaders=host&x-id=GetObject)

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
