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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BSGUXU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEbhU3nzLE2Vp12%2FlFy5HvkapFZE5y6qPmmX64URgw6NAiAp7Msk7RjimO8IIxHTfc003KKpTwHkJvbUQ%2Ffq7xALyyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F23sPRSw%2BUGiK2xKtwDgf0I%2BNFEmTTlJWHUndXd8gMMFeGDm%2BfOvEQGMYJrSvaa1aMF5EH7PGd1U7%2BQNzvHVVuveG2k%2FGIQZSxS%2FfL3aEojV8RytXaofBPpnKaDP39xNzw4gPWQ8pdl8N0pdw64PS7R7Z2Vvdh3wOmmMaAjYlvzWnXny4ixpDw1EFw8dP2bJUquY32y8%2Fb6S4XyviEx9O%2BvzUX4znrYVMkdYvDvmwFyCM4gzJOOvkWU%2BD%2FFSy1Zuc96dErfZGKtoEX3GJpTouPZGPxIN1KmjyGIPf9HoygEiTy0sR0HmAgAF%2FQi%2FIv517a6h8Jwf1G%2Ftn5WjxZTrcSk3bdtM7V2zd5To60glJGHKDKoDj942HLw4qrOvEIMgLwALJTvKmmftGpRf6TSd9whzNWGO2VbJ3sJp82bkWbsRJFEN3naCSF%2FqVCC53cVOS9kTeHGUk5l6iGSRfhhu4%2FNvxcxUdb4JA5KX5uRYcWP344%2FEnTreSffSFix6J8Ycfl4rr6aKoEyBnP5RKe7ohzAudZ6sadq081NjEVJdwKFfq9xOT7JBYGOdMPuDd6q1kD0yOfbWpAbW50jSTe7WVEiTiGaU%2FZAh6cYDtTwWopn7bscMYvmweuEJlN%2Fbd7byjRQJL5I92pHbd0w3bTpvwY6pgFR5Mc8FDmpm0nWgh8MP0DqKBWbk3XsPVbcc4UIQDsJRcB6YMHx8cBIiHBRWkMCrwnLk3z%2Fhv3hcDnSJ%2FGDDtg416BDbCTmN4LCbFTQGXiAgdujoXZmY7kkYe0JwP9TWg0s0t0TrJJF2qo%2BpIyHpxehgM8qnCkO8%2B%2BL3om30xdNCpVctrbRQsg2c66WnV1V9kBWMgnZXMEbi9bF6SSt%2Bg9LrvLDTCgG&X-Amz-Signature=cbd3d4bd242faec847212c7a784e581c3bdeac81209cb1712efb78aa666398c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBMYOJZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCOqLivmtXXENqHFfy3%2BL6Ng3KscQgT3TSMQ79XB8ctygIhAJS9DDl2Ec0Gg8RHuzeJTiTtv9xw4w1GRF87aypTwd7RKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwZm9VFT7OuOf8S1cq3AMOiHJKB4VPA%2FEXK9b9BxZlKcji1DS9nQhmXpMcDLWIYKo7gr914DjrQSxT94ZMtnw9%2BJJdV18H8q6wGK%2FPIwOkU4sxZETeM3fWvwjMAeShbUJPnjjBSE9sbj%2BXRdvEZFyIosTeyyBBfnWtDlLjXQpGYSshhcsLdU7TDMXuIHbgRJY8wMuSkqVzvfoRrtEfZHGj%2FmY%2FC2juoG5JFIaGJAhkI%2FNtIHrVm9%2Fne%2FZ9jouJj3RZVzioq1MiulYBG5zFCDTCTew7KNSr7KG1A%2B9Agqy%2FPKyPNsYU2PyLhxQTr3lXbo9TeTSiuaKwcvatp00ulfhJ1ZUE2ugF62slqN%2FuTPDGT4VmzWn8tijCCPYWqTdFt%2BfkgaRfeD7PcLdZQtyuPHpfGTLSpiIxQsAjlp%2B4sAnfjifca0D4vvWUHNYQ4xQQ%2FnMJNjOhd%2B8CeucrVUzhVRngH0y0llHaDVrB175xrF2GQF%2B9O77cK9k0Rbm1%2FmACsz9%2B3DWXMY%2B%2FDv3i%2FRDk9%2FmDgT%2Bs4mxbE42kY2LirUxYJ2hsUHofdqGyt%2BDsPS0gHdSBvKB2aabkpzkrrrTHqiS9gUuhcyDhO9jwo2DaSIhYQEgo0BO4QYbExeHwOZV23RjcrEHs0yfmebYaBDD8yOm%2FBjqkAUABUezRpAsTsnXeb56g%2BrLp%2BoY7l5jJcqdqEZQ0i4pm1GJXHQdoEVp8nRX9S5ZYSnK7dXB8ZN2rsELlV3uwzCTKo9Tt74bTMgzBpxZFJqNr0PZjndWWoHsilN7j92dcdNLbL2Eh0%2B4oJVkWGqFie9CNzZoLxHs%2F%2F7rbY6pZZKxy8wTSHp6E9iTjneNPIQBm1G6SHCz6TOcmDFP%2FYakSGPBPbSIZ&X-Amz-Signature=3ac3855bdacf0b5f435ac7294d2426c88dacfb7420db52b37ce937165ff7c13e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
