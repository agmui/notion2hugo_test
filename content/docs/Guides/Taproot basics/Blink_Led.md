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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUY5ZTY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEo%2Bz%2BN43hnNfnOFf7qxWSqrmZbRh8xYWZkXkga3BCGPAiBMJuqopAmMoxqdhTnYbN1KxOzdx94oayrp2J5Qt3OLvSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMG87q2hrC8Rs2lfN2KtwDZk%2Fd2uRcoMBoWCl8CLBqdwU7KKBLVR7MjVNpBp0bZu1phx1qrtGTmRcPmJ3J8ktk%2B9Ma12ahb%2BWyqHwaOLfSJldvcN%2F%2B%2F4A5k33227Of4JZTgOuw7YEwgfI3eV7pLtHF0QlXeq26w76to22hvwCeoxkBfSfE6Szs1WYtghL7TadrGYlADmnSZaJYLeTM9Ws%2BgX9jILgaX5yQy9rIKqAcLSRKOEg9ctzwQwYx2unSCIxp4b%2BRvWV3UC8xJZQQ%2FN4nkHt6SnwFKXIwqeTR6HUcL3OSw6ZAG3Sci7Qfpt30f8Q2j%2F%2FKmZVQtNezmeCVB6cYgn%2Bp8Xc78bmGcNorC%2FNRnb4Co2InRVIhlQRkfjTQgpf9XVO%2BrRTbBp0lNgQ%2FHyU1TlVWxAqoi%2B5WeFbNkuCfOf7GFtBmOWlAPlzn%2BCaiMfKSsH1pyOmNVHQBDBcAM3YfesQBa%2FD3ePrEG3erHYbBsU%2BvKXGwdj3zCXZYYo%2FNQOSs8Mz11iSNbXGEBeix7yR8wCsV5PJFViC%2B7aRuuPi8EJ0dgfgBFYnWkjDih8%2BC01oSengghwtJ3EcV4p7WVBkbps%2FgLl8IxnQtUrxrsgngj34CMO5AfxR41HqqxzNc0bShwYKSw2K1FalncJ0wvqPHvQY6pgGde1dBh2e7Ett6pHsJzWXxP7XxB%2B6gDffL6Gll0QDmzcYyhHidI9p39x0VGvQmR83li55vVt1cDal67vQT4fRFEllPWLy1T98ch5bfHqoMclHTvO2A%2BAv%2FOdjYMGZq4ztAf%2BN4rMZcD%2BmZO4tHfqMJcZUI4xJtArj65ixWwk%2FE5PQtVFqaqjKbmXX8BYaBQB3r6t4lPF8fV68hTErasaNPXnfuVh%2Fu&X-Amz-Signature=ad49e9c63b195ce8839612af4396d8cf0a56f3262bfc9fa5b305cc90e3b4111c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664276JFU2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCHxTGWQZo4fpY%2BJpjT44EhA904euN67xr%2FoiWP7knNvsCIQCG%2B2V7qc2uhR1ut89Y38u7AsKVxQUvES5zUFd%2BUzX4ECr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDryZkNwPUIeLR%2Fi3KtwDsaAbr8f21z%2FnzLhAbQWkI2YteTRF%2FS3vi06QVejOhql2OFXR0PzWzZDItP0X3BO4iQqC3DXEJrGUgFNBGjd3Ff3xDxh97rDgH7BMLrwNTvFkck0ZLD23Y3F6%2BMx2iniNChBEyPLTeTgk42e8Gw2rxE6W5Uk630rTBKpBDcnRRxnhNr%2FqjUUHt4PIdzvUPfW7xJUUlyQco4Ubu9WVxozyx%2B0er2LJTaoo1I%2Fxvl17ClkF7QvVHCOgrZY4dYW48LdRrRpI2Ek430g1cozmCGh4to5K0IcOlQYgs8v6kqegRjWjQeeArRPQD1iELlRWouYb2hUXgKSfIx7r7Blon9GzteqS57aycZshpGiCAb6q77GPr1SCyL6hIW37NnA%2BirtPAFlo2NR463RhAbeAHmwIVTIf2eJq3lS3anptkZnq1yf3hi4Yw54kLgnbMTCTvii3EXjEHloTeEtYS76WCZI2cOMxmzF9HTcrkeaLyilfkmLr%2FwEmySSZT67%2BI5%2Fy1loZLG%2F%2BBPMXDBRUsd6l6jofnzeBqH0zPNy72bO%2Bx4Pj2vgtmCSlRmdw1Y%2BlP2AbfckVgBT7vXsuADhuOzioNx5BnTFCdsEaP%2F5mO%2BBL4HGnq9QGfyro7%2F892mc15xUwkaHHvQY6pgHCfhBXxYg2KQWQFgSDmm7HremJ%2F3BxRLR1YYptdzyQZDvPVQgQfcU1SCrMlW9rVKP3itChAzsr%2FSLUkmPpoK%2BaToG68u992wjwxRt5DXSkVqzIm%2Fn40bWbOUbZyH7F%2F8NjSAldpEOlqb4uRxlBgYY8u4v6%2F%2BYmltxohcV4wrVH%2FmMMT0YKi8OyxKiJ1yl6SGgmKv4VP%2F7C5BdAWscBpCXWzir4ievU&X-Amz-Signature=2f9bcf98bdc6a2c93ae4f34d6f814f8525ef177967353aaae26b097993e818fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
