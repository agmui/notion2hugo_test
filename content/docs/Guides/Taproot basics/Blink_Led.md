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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5D76BDC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8aZeOlBedOi7NNIoAbR%2FsU6Gn7Os0d%2BN%2FqRhXsEVO9AiEAqi02%2BT3QjHW1AH6egMzoE2hOn3neiciwzYKO2Z2aZpYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMbdPC80%2FViI0d6YRCrcAztTs3PGd2Z%2FGz9jkmt4mrc3epa8GMvIRCuJXMxa0SXud60hg54PEfMCL9B9FTWCxeMoozpzLIsGNC29A0xwh8KRMI0e1KzF28tPW1HCi8v1xyvuR2G%2FrVDMbUew7ukoCK%2FyygOKf6n5zyCuTQXTl9%2FG7t9X%2BaBb9NUxC0AcKmXVEkPwvV4SGvN%2Bp%2B1bVS9gxGtRRRXDz8xlGSud8arAyQRzy2Wh3inSQCXtowXqiY9CpS66zTufwaQLWddYuroCvdzlw33LIQaPrDlWchKA%2Fbs1Ygwd8LTHRPSHQQklUCA6ubXI2t8%2Bb%2FsQc%2B%2FsNEGVFh8g6gIg2WSwyDKjSCsYBu5PAHr2JwOY6g253Oadqi4qe6MKmwf4K7Rd1UW1yOgeVua7pwopVHMQOvl3gtGIgPQFN3nqe8IMm5hdjovwfMutn6ls4ZJYJpM3pucUoNb6FSL5MD%2BFvnwXLARgtoeugAzNwu52pM%2Bxvk5zMlGbm21Qk%2F2%2Fc4ksoCBKGIzZaveR8XVT3zEplmBbNNf82O9iVWSm88fBrqT2t%2Bfr%2FGYZvXkrtZg7j6TUAAjqbTdhnzIUComULfJTEFH4htpcbsiaviRhUoGFmf3YqYx0%2FAuEbwOSNpMepal3lNLkmcGzMOi40r8GOqUBhOuhlnSabvH5blUYF3w75bNduSr4nc4Y0YgtlMp3nbH4T1sBCnOYIAKlvioC7rGKAB25%2FD%2Bsor2QgjUZsgJ2pNG3bmqEthD4Cfw66fZfx8g%2B6hzafEYG61i5zKtlmBDWe%2FEglpPEiWwmFbX%2FW%2BA%2BhryWaXfzmpL7oEvFmSnWGERivObYihJjFBAg%2FkR4Azy1vb9%2FtatidTZCip0rPza2bpvggwv%2F&X-Amz-Signature=50bf42d9a782c24f3bec81e355e059f358bf826bf7d10addffe2bcfd69421e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TIQZZT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8moUXrpUSpeJSJ9yxKhTZtxxVTY4X0b2IhK3QFDjsQQIhAJStDa3mI3pVd%2F4dKgRC7ogI9uj1GKihglK%2FJSREgxT1Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxNNt%2Bo1oaVxaVnF4kq3ANBBR2KVlmFqkaFZJrCir%2FW6rcczst1irSGR0SIreYjSUs3lrB%2FhfjCgylq8FcRdBiEvQG%2Bn8qHx8PoWy4ffqLF2GQaynBw3vzzIor%2BljMDRDHrFIg1RRkKcwWFt51Bxebt%2BeKcQ2mvajlwSPxYeQzC2YpX9iS%2BOWFKf2rccSf%2FKe1jfastsevBnL%2B6qm%2B3zaYo06Kxs5nQm9Ixu8G6AwuWOv17QBhAE2ZmQ0m0cgMGUVuBONyIZ9kLqgIrUvcrrJIvGLW6vg9PaL9NiZsFKRnL644bbhj2vRyccnx8wLVEu0jah8f1RCJ%2FTtNAP0zV2tUEwPgxlXNrpHN%2B%2BwqvMGdh25nmVLZ9ecBQdzodvC3OvtvGzO9DiQ5xvl3Rzz4sm3OsZW%2BDQXutMTL7Qj52%2FBLlYfm4UzSwMVjg3CySDId%2BvnskXRsu6Q8G7vTdKVkusaOOMIYoHd%2BRSSkpjj%2B9Q4Gh7MXiVOU3NwGq4TbOfsbN2zkKnV%2Byvgs2Ro8od79ELWUdaWDR%2BKkFBvvx3TPDvOgX8F1drLAteokTUjSuvedMQ%2F1La1VLGsq5mQXh%2FTGxDWN24tMS0oYWG%2FM9rigPDL1yA%2F72U5LVcp%2FwdVgz72Y65%2BZ1lU%2FV0tgOO8RM7DDBuNK%2FBjqkAdOC%2FrOjVNl3Nym6TqCLn1BFNLYM6rDaG7TeVMBPbeGv96GjgLoZ%2FjtM%2BASe%2FO5Skb3S%2FaaTayAlOrg12LSZ1SWsHZb4k8EjNtnpca6L0qcQ1k5IX4PPI884EGpCr2P5r1OGbbAZaHcRp3f8rgNWVWodZd1cSJqQWb%2Bqo8b1zmDlNFh%2BZdxx8kOV%2B2V6zXkaKlG9eewangjQrTwGPvpwjQ7eUuyM&X-Amz-Signature=08200fb556dd37378ecd62e66f3627d90ebbca1f4d6a3cc7d7e91a996c22de34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
