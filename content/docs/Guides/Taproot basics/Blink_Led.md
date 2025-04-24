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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINV66MR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAp%2BkbMW%2FVEcpUOY%2F1WMyCIvxkHXOJh5R0Ylq6Pehcf3AiA19d8r7OyqSbqTws5iEO4GlJ%2BL2M0xRZdeHCNXrhv7cCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfCX6QIPhBZRrasuSKtwDJrbF0W5e6UinBX9qdsC1WCJT9tf8k5lrDGrA%2Bx04y%2F%2BZCIs7hDPdCQeBmXREmTZ5H%2B8RVc%2BYeHGX12cNrG3xGsU%2BAqnGY2jTLITPLo3khLn3UHvsVbsaiMvcs74uWy4a0W0srK6%2Fe4e4wvWR4P0TIsbVAignH0Z3Fd2EgS4Rh5vnB%2BiQn%2F1wPsL76vH6EgJSlyPeMBaA7A%2BU1zdMGVQGmDt4ftBjwXunqy7OK%2BVgeTUwnqQ9KH9D8nnQ9iuBk5ybIO3diEWkgpdxd31B1Nkb7TDy%2F23gTSERsel8bRUIvoQCWeLLGEB44w1eqKyp9slDQj7dj1QO3EtevhybSNSt2MBi5hQg5yvQfoaSnxWG3JbU55XCsZBwvfwCOJJDWpf0AqS1Su0g1r%2F7lgT%2B%2Bo0PrAawRcTgKFrSwcov%2BsEAXhWHtIUXZt%2B7fis6I31Aogm%2BVIJ8OAeRwdWTJtmK1UC%2F%2FrRYSYto4u%2BdAJu5ru0YL2QnFuonVTZjgG41FW8QTiQ3spwDftF4rGJQFtxDVfagsrbMpzf2Ui%2BOmwlKyMubKvXq4nnnfsneh5TF5v2ZnAKRG4dEBPeXZRzKb9p1rOVNifKxBFtlDh6KLgz5XydzkViTukLTvv0665hN1wQw4JmnwAY6pgGve084dlwQ2BuDJh0KgWxGUx1KUjGzNWHZ4LscejJSUT8mBMs4rraebhbu9aSVMnel0iHLiQqSfCx8D%2FxVD%2FArnGmHoJ3i15JjoZJ3QDrjEmS2HE8xd3IV7dJIk4GXTKv85%2FVGUJ8wWN00RXlnHiBSvIyG97RTd2k8en%2BzsGx72U41%2FVyW5HPvqNpoKWn1mQNAve5%2Ftd%2FPwD4tVlsSpUWMqSv6voYL&X-Amz-Signature=b3494f3de7caac2c797a41b8a41e1b32e2dd60adaac6d7c6a6cef2219b42cb0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA53O2Y6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBOdkfui9AtOqUA2qpbjUO7an7PkEVOZOGqsQj1EbIoNAiA7j5Wzvnu54FVvNLuZp3qK7rdhvfAWeQarnf90jyp5KyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0TGRUJYEJhcSgbvKtwDZBqxmTqi0NK%2FZUNdMo52oId4g8tCWUjKbY6OBcrVLA2sBGFWDwc4%2FoI4SsQcr8eyGZD6QpKPzPljAx8dg5wpEwz5Zy%2BoHJ7%2BsBv8%2BrhXCpWaHUhlOxwV6HbzoG7Zo2%2F5%2BFVkAM4NQjPX6BT6rGt9keNIOiKcUggszqh55%2B73yhhW9sf1eR%2BSYlXL36xoFniW%2BJbho9XtUyYl%2BJY12YdOZOyjHeXu6f%2BK7fLRkYOTGzyQvy8RTKFNNk4szTjOE2qFc%2B2pMnvP%2Bu9%2Fot7psZ3y0w6JqXWVLm0mcYF4ti%2BYYDGn6DMQO0as6No21EMGYBBZaEPFtxGsjJYvuTLZTOf3zD%2FZ%2FMv93QaimBL1oKxSEDB1EWgg1smynBndEDv%2F0CXe%2Bl0itcfcG2HKZOw8z93MTULR%2Fp7VqUE8baSrdupzBUBeeTrhwFA0Tg1F6%2FNPyL26l7hR4OMXmt2w0Bnr1mjkyZCNfOiqebuESavbItlV99QXl1cO%2FH0gQe9YagBsbGUPj5MYEoxg3C4QgGHYRTe2vtBA4BYy%2BI39UMvQKkyxgVN4VTOtqZKxhMSUuSB5i524wwReVQUjlVAMGr2taexjJs1QPvD2il%2BnpfEK85EOneIZP4IlvEHZIK6xMS8w65mnwAY6pgHddBddBhKRh4%2BdHcPGEQ4QDia8v7PMZpMSTnnhrAklS%2BJl5oZsCpnrklHV%2BZzKoqfIf8mdnMzWSW6Ia%2FUX6vFzigZR%2FHdDlPIy5lkQIWIvwHbGWx8K5%2Bma301Rzks49rgF0rvA7StTo0u5eRfjWLogNtDJQAgmKSCxY86bMgOpxd%2FMfK20A3lbONc6qmXafOI4uZDVe%2FqKRvJ7JSLgXoKDDTvnSDp6&X-Amz-Signature=1961b3513c5b5dbb55b198717e8057393e2e13fe99ae0cc3799b7b5fbb702d01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
