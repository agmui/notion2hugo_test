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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDH47SX6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLa40hTOdQxX5c4ndYCsxc8RWh4bNm1luzCpH1x3G%2FdgIhAOYgLIV9ZsXXAidL9ePpn7yv%2FPoaI9VaiUsU5FaOfKdjKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KGwtqsZUhPAK4%2FIq3AMEP6EyqO6Rsz0EUnolK90xERB4PBhIdrcAtuF1umep9k%2B910Ff3HAdzQxMUyrT4O6D1acOnQM%2FxwyB1siwjOikx2J3zqFeM%2BZA348BHFnWp%2F3q0xpP842dXa71vuTuk63fcKw65K5ftlFIThlGrJk%2BAYTIPTPr9BEs4bQODyDaEr05c4NOfO8ZEMwYnqNAl%2FSdGBGhZyV3ldZ5VaYmM5Prt0H1f3%2BN%2BPfIh3hl6Q5oeJ%2FDNBMsG4T%2FkUYhydMRq%2BWWV%2Fga%2Fmdi5wzru3HeOJ4HC2X0cZOdnAPMF8oi6EDMi%2F3aE7qNDnz%2BuKSqpSdMy4jriwmABk1NtXpPEV37Q%2BrQKDSvJtbuNwOdMaHN8XdDE26JVkZDHfkXVdKZQ3DaxPEpbwkn6T7J6eUxjj%2FUGEcCLjU4mcbYXwz%2BMA105hFwIC8P4PN7yCmnxeL9fNFchsjmixZfb5URla%2Fa0E5W%2Fxbfik63w5gIAfPFfJUbCxRQFcv6XL4ebuDRA%2B%2F8u3StduL5N5WJuYqqp4X5ptGNQd2THt6s0xGFLOvpTAv1gXTc1QUGOIp2uE5X8D4dRAnsvggou8x0WiUE4iKCRlkgF4pszB5%2FbwDML3SzaieqsaXOu%2FiUUnCLVvT8L53qFTDQ%2BN7CBjqkAZ1QC67R1viWu2z3dZrXRBKB78NgqSzILUTYZKaRROJJQ43IIs8nliU817RRcvxSpLQC0FtSxwn9G93bKnCPKx5uzI1mbeEsnI4IW4keheRB5%2Bp6XpAcXkT%2ByCq%2F26OkAKI3Lmsrh0jR5CW%2BZDU71FzBcvwo070ElaIRBF2qYDeCUJjw6C58OimZnyZ9SsZQa1kU65PBEhYIMHUfm8nnmC4HpE0X&X-Amz-Signature=d17065ace13c3e67b2b7553f47de2e1903f9f8315b5cfb7268554bd1c50535df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJES43Y6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHpLtz%2FU9EOLbuRFRFq4%2BPWfCOCt%2B64t%2F3z3GOIZIqWgAiAcbenErfBd24U30wlrrqSXuYOLH2romn4P%2FeV8yCdJkyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLkTkQ%2FvEXvzfZAPfKtwDLWDGz7UtUNIDAAHGSnQWNJU58pGkr6BXephvN9Shxi7LTaHTaxYOAQOx6TxXzftXeoitlmoFl8NSBuaRXdntQGDEDvTskjII9JndulPLtC6XdiQIxI8XEGQ8jj28IjvtkvGdPcZY4jLOlNjZ%2Bkye5V7JPELji1WQlftLKOHKGOLFvSlvw%2BeJzIOAztIgE2M4QDRBc9DmRVZYKLVgFi7z%2BTtCNx4BMKLQ%2FunX8Cd4UVbTVoTfu2wAODbW1f4pASxBtiFHb%2F17PubfhVbE05EX66rmT9FD9bN%2FfbG4Ol7w2orZVTxULmpjgMoNdGcfhGxV7eoNLbL%2BrqJh3HFMOhP1vAVLDo2eadDOj3MmGeo1kfT2bNiXNFwuNwrNd2VxMhbjBpHyj%2BevBTBv9SE3FoWQKtlKSVm2FClhwAQFP9I%2FpbdeBTRD5%2B8%2Fpj%2FJAaWTGeoO%2F7mLiGNYxDfkNVwFkZg3bqFHYqz8uK176RGQGdL%2Bou78th3WJDc%2BscKdCiJuGnrS%2BzowIUHsHzPirez%2B0A%2BMoEONArCfwhs4JbsiHE1EITBbrP7DLvYdLxZO61GWskxJ6xQeBj1rc0OKlK3xEXNGzx7B1hwBQ3VN2wODQRwfvE5z1l7AcgZCw%2F15WCowjPbfwgY6pgH%2FSyoQmh9IhmtAJ3P4jyAN%2FysSvg0vbTZjurwpSIN7P2fe5BQ2QxgLLFlZy3wF7%2BrvEy8lDxKbkeQD7q%2FAO1HWg6YNFYUeloyRGUB47E2%2BExvJzrFBKk%2BHQpv73YygGvnqyWU%2BiC%2BIfxNtEata9mCxCMHcZtgznbm6owYC00yLrA%2BL7JH22TYx1OTGRtO6sN0hcn83HKzoj62cjhPKw7DQQK5wRuaS&X-Amz-Signature=a0f36260f120f99d35d23189bb181b93ddecc24addae4efd62a73c960e2d9bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
