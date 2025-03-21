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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSY47QX4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOyL84yJD%2F9o4vw88zAXlzoWQKXa07Cf%2F8uoRDbF4JugIhAOmAJeS%2FKyb%2BJHyiE5Seh8v%2F1%2BJmBovIdzQxM7FH9PehKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv339hv3rtQQ5cvHgq3AMklLBaqocpnrwnW49veATqDR%2FuN2biD7qUHqUDRXg6UIKXe6muHkXFXTgyLWpekM5R1Trjg9FaHzJpygj2CJOr070Y61gpbXoyFcfRHXfDpo2E7JMHlo745uoR0L3m4fDvwsf%2BfGDZrZupVJFquHz9S52Vri%2Fw5O%2Fow3qK95a8hdnkqeZHtqHxIn8prT608qlLBl%2BpETTwGCfTpHs4ZK2EbgC%2FSnhl9bcPL1GpTZcA%2BAw5JGoYWO8OosUEwlt3EOzIMKLgU0Na7ZuZOyjfovRSeoMJA9CbU%2FwfnpIQdlxkp6yJDLo%2Fx9qTB%2BmEFY2CithxZZaaNUXmIeDcA8Z%2FwEA12Xehg1KkdTkFDOWL%2FQL2hJqEgTgV0S27KQOKb4mTAC1xNpUM3jBKZqsXJyD3KxTEXCTpADMF8QhT5KYvSbaBCBirrczl7h1U16nb3dXuSG7A1czN%2F%2BQtPl05SvOWm8zZ2kmJamkKLtVk31pNLrvxwrA6xrKc3UfJ4KkqS69o0EEcOy1TTkcMCj6s2HRX%2Fth%2B1zgidoB5qwlb2dxucjBromMFTbaNf8v6QRCJUZVK3RQAIz58LQTnItzaNeBt2rzf2SvLMYvDIinp%2B1OQKRVZarL15LW%2Fq1MnOvP8BTC3%2B%2FW%2BBjqkAVCm7P3V9D4bDjdgj1VkxDvKVIUxkXec47OA495qWY9YQdD7jC6ke3rj4BCORXtOqxpsEyLpDon3JWPsDWprjtOSA%2B1qHDxkMHQldcMWx28g7%2FG%2BokLKeUFkfWaElWHtDYdeDR7sfCRkUjTSdmw1Da2%2BosNsUezhvztslVantc%2B7O%2BBkTmxope4fVZ%2B3c1r22xMfe34L%2Bzxt%2BOCHke3JyqoJgtGa&X-Amz-Signature=be528905787837ef526446328fb669e3f307b2138b325e3db095e7d6d05c967f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUB7OR3B%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFRMPfrgjuIE2dPIJWkixFjqVTuVVn2rvlRKruxelsZbAiAzvhKrcqZmWAK2HvZhgJSAa2V96rnmfGYng6ccnn0NBSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIybki2YsTwIRm9CKtwD6ZnpbTND%2F1EbKN%2FIZxXahdEKvvK%2Bcx%2B6xk%2BcWEgXT3NRDbrq5QmBf6gXg7YPlKbKfvDQ0A7GmilKtdlFWWoIhA7%2B1G45iXewpEA3jf7Vs9spmV%2FwSthw4ASU%2FJSupfiJvMiYfc9docF6zs9BuDXcbsELB1gt9j6iFu5Il%2FQ28Tf3duBCrt%2FHy79WCflBmRRvaId7vMMmyyyEIyXzQevEL5lV2ocFfBV9BJzVWVnsREdvU2k94IE9yWnI%2B4JChDbWeK6fb1MIzghoizVaOScmLCt7aIgdL%2Fo9xz%2BSh0SWj7ZUYWaPLanOxGT4CdLVlvFQHPvAku2dyb6D2phhAtvyCLalS%2FMUi4cKFKBb0GVi%2Bw%2FY1q%2BWLKr5FGdma%2FWHIuXKGhP3tRA3H2HB7OLWMANt0C5Dq3K%2FxroeHWbkB04K6jXJFnsTQYrczzfANEtt%2BXjIXo3qnGnPUzyyDFL3aOAvnFFLx%2BpNFkYIx%2BIrD4CAEJywfRhfLvn6hCaZkQ%2BP0j70KpE5EG6Ca1VtfJEPENo4IFad3%2BLGMCa2%2B2OK6CL6MfrUEAC0TqPNVstfY6Jj6SN8hX7R1xZsXkY9peDBCIwx6YC1KIaUibuHSe4zG7UTPZwtapjPimezCu9I3qEwtfv1vgY6pgEBOrmy%2BBRkUTFtGFGheDobMX6lygomjn4gIoeGfNk%2FxzY7v%2FeaWUdqsqCaRberk7DGQ08HJwZSYX0qqR7XIbNU3e1G5rYgWvbUkM4BhINZHNEa6VuLrqr7yQjRIcITJ7PYPWjH4wcwcWiAScT9PbMDkDT5jP7n%2F5Bkd5u7V4nVa1J1zMMxMc6YsDzJjvjRgGjyEBfDhjfzq97My%2FSFsAPXfmWwezay&X-Amz-Signature=593abf77e2c871c0f4574c1b8f2b1b77b006440ff952f9e2c7fae07f4eb5239d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
