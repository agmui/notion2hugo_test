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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK3VBOV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGzVd7Y%2FMxrfXvZLJTqKnev4CQWSS8yqpqkB%2B5DVnoggIhAJ8N9G1IkmjfWQ157Q9EGZYebeXPam2Ck5S%2Bg7qK3F%2BjKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3tNz50KRuG18qwVIq3APvwqfL00eFEQbVsjSKW5ErpDfpfOI%2Bny2qA8S4FrIafWAu4YAXkuZd2Ctvaby5N2wIQI2Lxs8isDFF7AxfslCvXXijV4h5Yq5ijFInVIScRKM7j9iqTLVgB5tWH76qqYvTQD0PQNgTtbnW%2F3N%2F%2BcnSkykw0eSP3PHhsk6lcVgH3H3s3Gf5FGSTWcENSiERjs%2BwHl6fzUaEc6WekF%2FISOoi5Vs%2Fx9REy3kY7b89w8eq7728dXhXCwYHGplSQnDHMaAWN70Ozv0llHJT9b9C%2Fhb36PW1wP9NAcF7bsm1stcczSeiGI1uOJSF45IIVYEYR9h1ezRs%2FmtWLdFb23e1bLq0fVMaYsyXHyedU17GsESfCMa1LdSfSbVbifcLLeJMX1wKvpbBlbOfqhUVD03r56l6sIW7q%2B7TarDDOpWEcqp%2BdZ3Bu8Uq9XQkZKrRA0tBiL16G9CYDJWg8yQlX4Es8f970uCvaCtewS%2BFaB2MiDGFi06uF0SGlLWyUsf6MuV%2B4TMO4vE6DKO%2FhPw2kgrtQlZJmGj1NfLsbz9mekcQVQl%2FaQb57FqOtRW1f5Sj69oyERZLTta1W0jPOv35H2MdE6v995AEhnFtI%2FBtESA6Ah4zXVwd23YSKnHl7G9L5DDCr%2FK%2FBjqkAeFsY4c4ebn%2FpJkkMNZNp0BtEMX8nQVT%2Ftlj1RL1fAgrjiuBnbluM0V4NEktSfXMBSv1TRBQKF%2Fdf%2BczxvZuBxOV%2Fq14bGkl7YirwuE8f8mJZpKdaz63s4jtVBdKmlnbOyGcxlZiEpR1wXHuNuGc%2Frp3yZexqRsel%2BYG3OECDBI1Zu5CahDuIiSgxo0JDTYj%2BWyLS%2B7jeGhsBxx%2B6EDchkFbfDRY&X-Amz-Signature=dca2861aa14b12afad2b478a5ce1ccdb8b174b9072fb47b4c1793c990a208651&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZYO2TN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfpZYH2pVIbdaYENM8tRdRKEfZCJ5zN2XSLAvd47sUKAiEAy66YL1rsN8lXHI62x4KPdmTX%2FRipoJDMCKn456oVfXMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGs5YaZ%2FX5%2BlANCaCrcAz%2FCde8qmYsPTrfKPEcwWOmLLgItFxv0wK%2BtxqCLwvFtxmX%2FHlF9e5pyq60MBii5GssinxtXIs6TZor67B%2Fw4J5Xc3TyxElQssVDRJTF3%2FitgmkSSHJf%2F7J3jNaHhWq2yiUPKv6DM%2B4ycel%2BBFvFwK1NAfzBI%2FBj%2FCVxlZhD7pgOYgXKIAjaCBaOX2sEi4XyWdR1TGXsWA2cRdoLPemuQKjROEJq6qW7IP0%2FRdh6s5b%2BofCjmmW3RXHga3iWFNXcjp52xQcY5ZX0wzR53KZXIE67zPCTzw2EAnruL518UfY7iKNRjH1dFdplEYwhvRgGO5364Mt1wqf23ixEF%2F4dwwQJuyoZQ2lXPNc%2FBR5kxCH3W9z8ozm2%2BhKTPewJSgN2q%2BA8DD1MkimFumpTkW7QVzO05Wy8niWZP7H6HmeLwgnrt%2BMPHjGerXfpvJVvj0YlsB%2FS3NVmzfU5TMfGQWwPeu8%2BxjYatBDTox1Ke%2Bdy1By0Aa6%2FXv2lzxfcKwxmuvMsjiMgjx05GNXHhRnesT4mX4WlUh1tS69WO2ICi7zOSmQRWmaAQuhgzNyutnF7r3PTuHiEL97VTM9fD84lRfxtoxOPMsY6ZYypKrvRO30GvMCs6mCh84C7u59BPILxMIOw8r8GOqUBgZz8NGxDWv8PEta6iZgtgXoVYV5I3MYbbT02BCvjgQwBkFYU3xUmrNt3hSiMsJp95uSUuG%2B7r8YSrKx7k18YIDy9W68av4EIVpdYuIqxbloO6XgVWPO0dZPKGc5lEiTZA4n1UbMTePIp9XswHOKnHz0KxUSSvH6ib6F6Q5Hb%2Be%2B3QgNvUnX4hRNpbP%2BPkr%2Fw6MBooX8WTqMZF2Alj8hC0fvMeUNc&X-Amz-Signature=1b7c86a0f9f72c84b48619dab9b50d6263c7931e4e82c9ed9ca84ac890b8e174&X-Amz-SignedHeaders=host&x-id=GetObject)

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
