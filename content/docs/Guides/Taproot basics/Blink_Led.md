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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCGYVQ6%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjA6DFJAdu99KXt0GFAosfeEe8u%2BD2tPmvklVTHNzzgIgA6keCYuORkMeMB6U8ZkmjX877izgtfMN14zYhAS35KAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJwPv92WzS%2BvoCmmircA%2FZN6YF9PJ6hU4OBM4vyfuXoFeTf9Uv%2B9lYaHRXnr9twbCi9wp973V8SOLlktoge7jSEOZhvOMXtbL5DnVffUCjAScnQcH%2FNjMpOlK6n4DLCnuB%2FLMGjFx3zg1t1uCBk%2FvkNW%2FaYS1jBxCoQJDljorMLc0jenAwzZuUSktBmZjqZS0j5QcIJWsDKy1uDWezX38XOo9dLNlJq1WbtmbNQoeQQfJmW4AcWxOyoxUgUOeASdhMa5%2FVGP487YSxaTJqj%2Fx5zpb32lrJHDkciiIj7vqdsT6gHJg%2FbKk1rKhTkmXu3LN9d0WV3uGWu7Lq9lojwsVnAlsZjDd1L5Xpg7uRWoO6BABD9PIizTq8w6dhWUu%2B1VjVJfcUec0skNLYLptqTzixK4pheE%2FciZBy%2FnOy890o%2Bt9zqrUqp44F04QHMGKSEtSnHYrxTt1pVcIevHF7oOfBZzK4smhfvY6w7ykHGQNbmAz9XR3501nlmTunucEv01mdqU3kZPQBLU8ieLqR1PL8oWs%2BieJsdLHBpxJEat%2FJx1oAa8tMOc%2BQTErxfVWyFqr0BXi2sJlkDyML2kH23ecbm0pWJhDK3phXBBWGEdPp3vcpv1K7cez7JoUVDyW7HJm42g4j68sgnFAtdMIqtntQGOqUBgivLsZWZlJ9fBfmXzEQzHeciFlcV%2FNMZTZAHY1jBAdhcl1w77O4p9ZnvK4BlVf3DiuXjh%2FTZAnoNAKqS1yzizmOT1T%2FM2IVXl%2Bv5bnM000j106iD9iNRllbOJIIuhrTPL%2FUZLyEwaq6NlU5NY2eQdrvrGi6SS%2BL3aeSlE%2BV8s67SkUDi%2BHasJaNoloTWEDr9LUQZe9DfYvKL5aQ5ANDnvQd8xavT&X-Amz-Signature=5705d062f928a1446ed5f1f1c357e581d430eeae507d5303be0cfa7d97d96d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7FRDJQ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCD9a0tnFRVtfadovg%2B3V1cCk4EeakVbvIhwqy3e9D8AIgGcgbllhQtmfDWtb%2Fprqlu21JzXiZ%2F5RDMiwARDiOO4sqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeOpZiKwgVXOwViESrcA48Bh%2FQ0zrMryMonX%2BMGARPVSRcMuzu5yowmbHzHtVvD94RBVB8nkGxkyiCBlzS6ofZf0j6WKFAcgPVtoT%2Fg0lqYfEQOp5XIeazLQTc0Gj%2BmwHBL0sUO6zOq50vHFDaTyXCPt6dXkdfPfIe0iJNqzDWv2LeW1hTcmQ0ffkBSvJxqEg4ZthYmen3m1v9ZefycGjphV55azyyVyRDCWVljs8iy8tKLzrNFTAYrgFzvm%2BCn6J43kVpgSiOYPadXsBtUto%2FAdMlbxj1NQGBPLcHOiZSsv1tReUJbePQGwJOnoduxD%2BjuYIJPY5HVEinS%2F443TVeWdvNueYt00SByFOwIIIzN%2B5CSsJBC8ii4zzCxczlbz6cfPE4rVbX82dN6hhkf6gA3H%2BRRxu6YqegMvvKt4kqiyy3F1LUe6E7r0XzTrT6D%2BffmCX9K1JXo2LfrDfNvxaJz%2B9kFgwaxWi8J7CSb8xRGu6Sa789kOVniKghX7v1IupodyJ8HyTEVk4UHHHHNESvwFoGNfXUK%2BBn9P0sIQAxX%2FxqAv9C1j7dZe4TVbXfBAXh%2BVsMN49mjDg0UYs%2B1fVMTjFR6Redd2q%2FxPdFTcw9ebL2Ox4dXemLNJHp2O4ldVz9DNzamOU6SyNxZMOusntQGOqUB9ASwhwvKprv9aQ2MuQUQrGtlDfEX9%2BgJfYDougJoDNxEtixyHPKtApfcrA6Ps13hxDoghyLxgiKqrj%2FhLAB%2Fcd01%2BJdPANInmysWPBOViiClopT8EJi5EVbNnig1EzBxxZ8szUIf2%2FGXQzZTXbgNe%2F%2F9h9Cnj5SmIqoo0lHf1T1OAH3c9XO%2FRO%2FqSPksgC5Xvjgw9pTX66Q9WdT13gfKf7lWlCU%2B&X-Amz-Signature=8188c766fda3930b0548aca0f2373a678cd0d7c8950020db58692a8dff3ac82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
