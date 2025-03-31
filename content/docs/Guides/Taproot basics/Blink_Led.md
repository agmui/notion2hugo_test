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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7NJDP3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDAc5swEzTRZUH8RHhwAciP9ckMKKLgFTsw5PqH%2Bb0KhAIgKtUpR5QQaJLaKYSzNmaZO9eomo%2FhF56r%2BlqTb%2BSNRoMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpWjbVtB8Q5Y0FJ1CrcA6f2zhqPoF%2FBhYl6CqMFhW3vJuA88n2OQ0KbrvSy%2BwZXUhLj06qY%2Bq%2FODGl1j9vrABMz%2B6LEmZZoL90l%2Byo17RuCcipgdmrtEe%2FBqMYX8cX%2FAOmXLkh253mnAAEdCUqnlyyZNkJH2XaBHVwfGsofQ6QriRnBapECvlv3JIx0ySB122Tba35QIRQAUY43%2FgNSS%2BwC7xfHfMgqkDvrUCtcy%2FGwFvr7HO%2Bwtv2TUf1%2FA0vcSomggdsDvTizP8TVarvRxrUBhKP28qkFw61CpdVwcb0ZROj9pOZ5%2FsQRU96nJa0bVVVfhvvHSYS6D7H8i8XN%2FEPARm%2Fa%2BbgIyWcJzA%2BYDZWIkod9WFzZz8Fax6BVaNkGUtS0HKIhU5V6e1YPqrzsmsP6O2AD27QlgTQdjhQbAjt%2BasIgLXKtFUDMw3ZHqTTo8eVuro8YRWPJ9c0gbLMzAPhlJl8amaoVeI87yPAmi2ZzJdZzQG1J0jaOq%2Bu2ioiawkFsE%2F%2FeFwkjLjljhZjG1%2FYc25EfIgjvSB3o1Iwj2MPXgc%2ByOhxaw69uci78uteD%2FYoIxDzTIJQEWexES%2BtEULGqZo%2Fx4AspcST%2FfuA%2FeGx4B7RcEAsHAd5cVOFoN%2BvYSXZXdYqX6W7nBi%2BRMOq4q78GOqUBELYz5IWwQeDUttSvAr0Ohkk%2FlLZU7yH%2F%2F4gB5kLCvl39WDhHRZTIFu3JupdA2Vqgh9bGpRX%2B%2BLabeR49NoTVob7LlTN6VfVYCYYyD47UPrnl4qgvHFfQ8NlvuoCM0Aoat6ufOQxp7hbR45K1cgICpW3TP6CN5aWYsDui2%2BtbCz1w8KiMpsz0jW7KybOacozY7IOsxcmDNQFNC9MM%2F6u5uTFr4NQh&X-Amz-Signature=74d5b6dfe13d86fb25efa06d586242b095c3365bdce8749fd0b5537c1fe25bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFJG5B2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCaxUPS5ujmNtgCOuFeLNZmsg0mn77SuPA7R9F4%2FM65VwIgVvho1bzz63YhbNnqhvlGMTfd0o8k25c3kq6yhxlLbxYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJozaQGRGD%2Bcy1S%2BaircA7zGqY1ptUTQK%2Fwgl%2B3p2ee%2BdZFnLEMr36xRqOBCm5RyCjijELMzLspf6%2BEBdKJ%2BbGpEAZipBvokI%2BeuFcsRTUpEzHWqE%2F2lkmPyGnYsRacoib%2FlgtnEK1qrOmvtC8od2N62%2FYYEzto3s9xgbVO%2FX0t0io6V2DRY5aNLhdok3PT9TQoX17CEkqKgNXX2tfRIrWYOmLIZe8O1LmplOidfvUvFjEE4fIHStfGNbMR%2BIrPL2cqfN7OoGJ6zvRSZU8I3%2BLTjbTZrze75x6aQ2JHgskXTDkSdeesbKkrhmNx3jRI8Kq58NwkfufzUIHExEHV2hsY6Yx185cs7aVrlVSwo7d4rEX0BOX3qARgHgY82QqZEfd4ye%2BQ6jl%2FBIzPuFO%2FiFGv5BRz4Rsq13X8DE1xEiHNAKc%2B5Kzqckjyrzi%2FFoUJoQ3rzHwqVz6slDfX5NO0tDvRSHy9TonNL4CfzjWd1FPO12w%2BJXzvGQbAq6Wt%2BKp%2BE421NLhS2vcKLfsOexcXdz%2BW24iLvQdzA7zqrUR9cWi71I15wccX5xK590zT2r5m%2BV9%2BUbxWGY%2BMOmaQ4UFqXDVmmkRWzx4LfEZiO9QVku6YS102t3ge5vOwA%2Fv5Vqg56jMBLHlE8hw6QuFziMOi4q78GOqUBcgX%2BhweoiG%2Fg%2BPlRB%2FqtIKWD70B8VqvpcPZbhBMRe2t3%2BzDemjXOTBB%2BtMdP1rpp%2FzuaTDBTYg1Owdr3KgUkrpadIWmBY3eZU5Q4FhgsqqmjZ23o6pEUD2PESOaPBZk9%2B1cTMOIa68pEjy4XVHO9nK6lml2kmGa6kEXmruoJ8UUu5Ublu9qflNDZy9jRdp6hotLTn3ExmX3URJsYHy%2F7Kj0sB36Q&X-Amz-Signature=10c7d05c0c32dbadbe9ef76b5c0839f6bc0dcde40c397364137a95c1527ebf65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
