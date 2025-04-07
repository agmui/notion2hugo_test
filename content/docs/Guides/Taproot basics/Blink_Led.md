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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EV7SPKE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPcrD%2FtFc2sdCdRrYOKz%2Bx%2BRmr0nyd431os7zknq9mYAiEApvQjJv%2FqVe%2FFGScEq29x27XRbFxLI0yj7aXtUcSZxIQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAuwvU1Zje%2FRhXO06ircA210Yx%2Bl7zM1kErKIhH5s%2F92LDpbwhrCLjopPR%2BYoybC3qZRBy7P6%2FhciPjgDYqoupr2TVt7IXWRWmU9TX3%2BZoTq0nTxHP7krNrUiALrHS4XgCZsL9e9zIEc3lKJH%2BNb5i2U8yeznsC%2FR3uZ8dTnvgixKeXVRJuqBc6Pjzg%2BjKdrbfbovZdxXRwJCx%2FhMyWBnzFx9JBjoUvEQl9tF%2BKKPB7fSSe%2BgqwABgKCoJCblK%2BqfwXSWR0a1U2YHJ8oVVQ%2FZIIs%2FymfD90w8kZuezntZ9Sbcqqbm9rJm8tzHoGuNpOLb9OflniWK7HT10yfUKUdDRfbGIqMELLYXmsMJqujm8lOIIZpA2mos7ibg%2BB8XNkKXCDlUy%2FY5zAAXkliHDo%2BlLgthiJCbu35Np7cmj18RdQqju155sgM4VnBLbc7m%2BPjpFe6CV9fERJbqZAbBG4P45fiB4bqTkevZj2G7JLCohhdCIL67OWp0bZu7VD6aPFzJUqtssZCyszvyKXqhHyphiwBADpAEkL6Fg1lSiGdy3EfId6f5a3ZyCy2reg%2BwHeUleER9WKlR75zTHsoRQyYBA8D4CmfmOf4pwpX2LYi5yCxzFshf6TO%2F8xIq%2B%2B3bOfEdCU8MpVOJKZL1QotMN2I0L8GOqUB6alCPb1Doa0Pvv%2F0hB105pHYwbirJJkdQ0gf7asw%2B2%2FcyrWNzTko%2BBrJzCx6fqnCiXnPeZ3gYiTyi%2BuXxr8Jmft9DR9YWObNedd%2BTcYd9IUE5ijdIejcnf9RO6fRRIDbF6MbmRMP9hGQE9cpaeRUn2pp6RXoxE6ge9qRz4pLt9%2FiSY5QtigsXDpnDd1gIm0zWwKQlqIbQE9HSh%2B1fuJ4wyrq3NQD&X-Amz-Signature=9e33d7fad513e3ed76f669c3f6bae309e84e02a40abd0e4777b252a3ace68b99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBHIVZT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN13AZiqb0%2FEZp96iVm%2Bmpy0b1zwpL9WaXChieLeYZJQIgZ1krlOZSKdNYEJCDfdv8qeG73sSIrGKCE31XIFZvVFwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEeTfaPhDJRvwTFGxircA15LeVrWzzR3JI958%2FeFrS4fAGun3t9x18IBeJeiWW4VT%2FjyLyImX5aX180G1gDyoVEfNIAESWwMLLACXKSiISKwEgVFQT5YW9p1zSo%2BqxmsJBZCQxDmGyEZ2i0lCjuAkoBtXIBSOgTcXSdOafI2kmPvOp19SaQm1QpF2j5THSc3pSVeBEga2bxlK%2Bhk%2BNYbrxHqryPHrHNT9gfri6hv2X77jDbsSkoEMbEznJDMUYtkrTH3URuIciNYEDgD8grSfrjGd29IFmV%2FYschc8HGZ4kxpbyppqYo2p6lKNsi6BqR%2FjIPLtWjLaEsSAgFhh0fwBIQPik0Mcw0V%2FZrlWhDDBm5lyNKel3l77NFG5WVXD%2FJ9pnY9OpnrMK8%2F3bNCMgR9OPSNIuMne9h7ANibiQbHRiCidVTOnDhtn4Mtzp9J%2Fb%2FKG03YD9lTE3hR65%2FIlJvw%2FHhjdcPpjXh2dnAO0Z6RQ2x41mmw2kZ9Xym5HorGedWbTKJewIA9i0%2F6YPDF2hDuBUlBjZn1yZgXJ%2FO6PwDWpbEmFGMbKIU1AnzyWEzv2Fky6cyYHN9FLkh%2FmcZvlC5a0CdnT4DH3mWGQTccYpqSVqbmciyIW0YFyCtIs8VZ%2Fv97HDHV2mqAI5utN7qMPGI0L8GOqUBzPLwqUf%2FhNZbUmco5Cnu7xNM%2BGA%2FarFNtsmEIQbom02EuvE8fmMy%2FgaY%2BDDME7vYsCACwWumszP4u%2BMvCSBgu95h6lXwg9TZyTDHG607XFMZghwtjKHcPT9YP9BUxyi4aYVDnL%2FHGI0Bp7ZNpj5kncopmrfBtawnWo38xoIswR1g6J5lykxS3TBKgZFRo9jW8D7%2FJFKi6kFtaQWL7oy1lbn33xII&X-Amz-Signature=ed64abb618694eaf52717b6008e2d868eab88459ff84f110af8aa6c03ac9a72a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
